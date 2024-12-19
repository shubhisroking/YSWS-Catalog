let programs = {};

function isEventEnded(deadline) {
    if (!deadline) return false;
    const now = new Date();
    const deadlineDate = new Date(deadline);
    return now > deadlineDate;
}

async function loadPrograms() {
    try {
        const response = await fetch('data.yml').then(res => res.text());
        const rawPrograms = jsyaml.load(response);
        
        programs = Object.fromEntries(
            Object.entries(rawPrograms).map(([category, programsList]) => [
                category,
                programsList.map(program => ({
                    ...program,
                    status: isEventEnded(program.deadline) ? 'completed' : program.status
                }))
            ])
        );
        
        renderPrograms();
    } catch (error) {
        console.error('Error loading programs:', error);
    }
}

function formatDeadline(deadlineStr, opensStr) {
    if (opensStr) {
        const opensDate = new Date(opensStr);
        const now = new Date();
        if (now < opensDate) {
            return `Opens ${opensDate.toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric',
                year: opensDate.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
            })}`;
        }
    }
    
    if (!deadlineStr) return '';
    
    const deadline = new Date(deadlineStr);
    const now = new Date();
    const diffTime = deadline - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Ended';
    if (diffDays === 0) return 'Ends today';
    if (diffDays === 1) return 'Ends tomorrow';
    if (diffDays <= 7) return `${diffDays} days left`;
    if (diffDays <= 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} week${weeks > 1 ? 's' : ''} left`;
    }
    
    return `Ends ${deadline.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric',
        year: deadline.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    })}`;
}

function getDeadlineClass(deadlineStr) {
    if (!deadlineStr) return '';
    
    const deadline = new Date(deadlineStr);
    const now = new Date();
    const diffTime = deadline - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'ended';
    if (diffDays <= 7) return 'very-urgent';
    if (diffDays <= 14) return 'urgent';
    return '';
}

function formatParticipants(count) {
    if (count === undefined) return '';
    return `${count.toLocaleString()} participant${count === 1 ? '' : 's'}`;
}

function createProgramCard(program) {
    const deadlineText = formatDeadline(program.deadline, program.opens);
    const deadlineClass = getDeadlineClass(program.deadline);
    
    const opensClass = program.opens && new Date() < new Date(program.opens) ? 'opens-soon' : '';
    
    const encodedProgram = encodeURIComponent(JSON.stringify(program));
    
    const participantsText = program.participants !== undefined ? 
        `<div class="program-participants">${formatParticipants(program.participants)}</div>` : '';
    
    return `
        <div class="card program-card ${opensClass}" data-program="${encodedProgram}">
            <div class="program-header">
                <h3>${program.name}</h3>
                <span class="program-status status-${program.status}">${program.status}</span>
            </div>
            <p>${program.description}</p>
            <div class="program-deadline ${deadlineClass}">${deadlineText}</div>
            ${participantsText}
            <div class="program-links">
                ${program.website ? `<a href="${program.website}" target="_blank">Website</a>` : ''}
                ${program.slack ? `<a href="${program.slack}" target="_blank">${program.slackChannel}</a>` : ''}
            </div>
        </div>
    `;
}

let currentProgramIndex = 0;
let visiblePrograms = [];

function updateVisiblePrograms() {
    visiblePrograms = Array.from(document.querySelectorAll('.program-card'))
        .filter(card => !card.classList.contains('hidden-by-filter') && 
                       !card.classList.contains('hidden-by-search'))
        .map(card => JSON.parse(decodeURIComponent(card.dataset.program)));
}

function updatePositionIndicator() {
    const positionElement = document.querySelector('.current-position');
    if (visiblePrograms.length > 0) {
        positionElement.textContent = `${currentProgramIndex + 1} of ${visiblePrograms.length}`;
    } else {
        positionElement.textContent = '';
    }
}

function navigateModal(direction) {
    updateVisiblePrograms();
    
    if (visiblePrograms.length === 0) return;
    
    currentProgramIndex = (currentProgramIndex + direction + visiblePrograms.length) % visiblePrograms.length;
    openModal(visiblePrograms[currentProgramIndex]);
    updatePositionIndicator();
}

function openModal(program) {
    updateVisiblePrograms();
    currentProgramIndex = visiblePrograms.findIndex(p => p.name === program.name);
    
    const modal = document.getElementById('program-modal');
    const body = document.body;
    
    modal.querySelector('.title').textContent = program.name;
    modal.querySelector('.program-status').className = `program-status status-${program.status}`;
    modal.querySelector('.program-status').textContent = program.status;
    
    modal.querySelector('.program-description').textContent = 
        program.detailedDescription || program.description;
    
    const deadlineElement = modal.querySelector('.program-deadline');
    const deadlineText = formatDeadline(program.deadline, program.opens);
    const deadlineClass = getDeadlineClass(program.deadline);
    deadlineElement.className = `program-deadline ${deadlineClass}`;
    deadlineElement.textContent = deadlineText;

    const defaultSteps = [
        program.website ? `Visit the <a href="${program.website}" target="_blank">program website</a>` : null,
        program.slack ? `Join the discussion in <a href="${program.slack}" target="_blank">${program.slackChannel}</a>` : null
    ].filter(Boolean);

    const steps = program.steps || defaultSteps;
    
    modal.querySelector('.participation-steps').innerHTML = steps
        .map((step, index) => `${index + 1}. ${step}`)
        .join('<br>');
    
    const moreDetailsElement = modal.querySelector('.more-details');
    let detailsHTML = '';
    
    if (program.participants !== undefined) {
        detailsHTML += `
            <h3>Participation</h3>
            <p>${formatParticipants(program.participants)}</p>
        `;
    }
    
    if (program.requirements?.length) {
        detailsHTML += `
            <h3>Requirements</h3>
            <ul>
                ${program.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        `;
    }
    
    if (program.details?.length) {
        detailsHTML += `
            <h3>Additional Details</h3>
            <ul>
                ${program.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
    }
    
    moreDetailsElement.innerHTML = detailsHTML;
    
    const links = [];
    if (program.website) links.push(`<a href="${program.website}" target="_blank">Website</a>`);
    if (program.slack) links.push(`<a href="${program.slack}" target="_blank">${program.slackChannel}</a>`);
    modal.querySelector('.program-links').innerHTML = links.join(' | ');

    updatePositionIndicator();
    modal.classList.add('active');
    body.classList.add('modal-open');
}

function closeModal() {
    const modal = document.getElementById('program-modal');
    const body = document.body;
    
    modal.classList.remove('active');
    body.classList.remove('modal-open');
}

function countActivePrograms() {
    let count = 0;
    Object.values(programs).forEach(category => {
        count += category.filter(program => program.status === 'active').length;
    });
    return count;
}

let currentSort = 'default';

function sortPrograms(programs, sortType) {
    const flattened = Object.entries(programs).flatMap(([category, progs]) => 
        progs.map(p => ({...p, category}))
    );

    switch(sortType) {
        case 'alphabetical':
            return flattened.sort((a, b) => a.name.localeCompare(b.name));
        case 'deadline':
            return flattened.sort((a, b) => {
                if (!a.deadline) return 1;
                if (!b.deadline) return -1;
                return new Date(a.deadline) - new Date(b.deadline);
            });
        case 'status':
            const statusOrder = { active: 0, draft: 1, completed: 2 };
            return flattened.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
        default:
            return flattened;
    }
}

function renderPrograms() {
    const container = document.getElementById('programs-container');
    container.innerHTML = '';
    const activeCount = countActivePrograms();
    document.getElementById('active-count').textContent = activeCount;
    
    if (currentSort === 'default') {
        for (const [category, programsList] of Object.entries(programs)) {
            const section = document.createElement('section');
            section.className = 'category-section';
            section.innerHTML = `
                <h2 class="headline">${category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h2>
                <div class="programs-grid">
                    ${programsList.map(program => createProgramCard(program)).join('')}
                </div>
            `;
            container.appendChild(section);
        }
    } else {
        const sortedPrograms = sortPrograms(programs, currentSort);
        const section = document.createElement('section');
        section.className = 'category-section';
        section.innerHTML = `
            <div class="programs-grid">
                ${sortedPrograms.map(program => createProgramCard(program)).join('')}
            </div>
        `;
        container.appendChild(section);
    }
}

function updateSort(sortType) {
    currentSort = sortType;
    const buttons = document.querySelectorAll('.sort-btn');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sort === sortType);
    });
    renderPrograms();
    
    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter) {
        filterPrograms(activeFilter.dataset.category);
    }
    const searchInput = document.getElementById('program-search');
    if (searchInput.value) {
        searchPrograms(searchInput.value);
    }
}

function filterPrograms(category) {
    const sections = document.querySelectorAll('.category-section');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    sections.forEach(section => {
        const programCards = section.querySelectorAll('.program-card');
        
        programCards.forEach(card => {
            const statusElement = card.querySelector('.program-status');
            const deadlineElement = card.querySelector('.program-deadline');
            const status = statusElement.textContent;
            
            if (category === 'all') {
                card.classList.remove('hidden-by-filter');
            } else if (category === 'ending-soon') {
                const isEndingSoon = deadlineElement && 
                    ['urgent', 'very-urgent'].some(cls => 
                        deadlineElement.classList.contains(cls));
                card.classList.toggle('hidden-by-filter', !isEndingSoon);
            } else {
                card.classList.toggle('hidden-by-filter', status !== category);
            }
        });

        const hasVisibleCards = Array.from(programCards)
            .some(card => !card.classList.contains('hidden-by-filter') && 
                         !card.classList.contains('hidden-by-search'));
        section.classList.toggle('hidden', !hasVisibleCards);
    });
}

function searchPrograms(searchTerm) {
    const programCards = document.querySelectorAll('.program-card');
    searchTerm = searchTerm.toLowerCase().trim();

    programCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const slackChannel = card.querySelector('.program-links')?.textContent.toLowerCase() || '';
        
        const matches = name.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       slackChannel.includes(searchTerm);
        
        card.classList.toggle('hidden-by-search', !matches);
    });

    const sections = document.querySelectorAll('.category-section');
    sections.forEach(section => {
        const hasVisibleCards = Array.from(section.querySelectorAll('.program-card'))
            .some(card => !card.classList.contains('hidden-by-filter') && 
                         !card.classList.contains('hidden-by-search'));
        section.classList.toggle('hidden', !hasVisibleCards);
    });
}

function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    const isDark = body.classList.toggle('dark-theme');
    
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const toggleBtn = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        toggleBtn.textContent = '☀️';
    }
}

function updateDeadlines() {
    const deadlineElements = document.querySelectorAll('.program-deadline');
    deadlineElements.forEach(element => {
        const card = element.closest('.program-card');
        const programName = card.querySelector('h3').textContent;
        const program = Object.values(programs)
            .flat()
            .find(p => p.name === programName);
            
        if (program?.deadline) {
            if (isEventEnded(program.deadline) && program.status !== 'completed') {
                program.status = 'completed';
                const statusElement = card.querySelector('.program-status');
                statusElement.className = 'program-status status-completed';
                statusElement.textContent = 'completed';
            }
            
            const deadlineText = formatDeadline(program.deadline, program.opens);
            const deadlineClass = getDeadlineClass(program.deadline);
            
            element.textContent = deadlineText;
            element.className = `program-deadline ${deadlineClass}`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPrograms().then(() => {
        const searchInput = document.getElementById('program-search');
        searchInput.addEventListener('input', (e) => searchPrograms(e.target.value));
        
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                filterPrograms(button.dataset.category);
                searchPrograms(searchInput.value);
            });
        });
        
        initializeTheme();
        document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
        
        setInterval(updateDeadlines, 60000);

        document.querySelectorAll('.sort-btn').forEach(button => {
            button.addEventListener('click', () => {
                updateSort(button.dataset.sort);
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.program-card')) {
            const encodedProgram = e.target.closest('.program-card').dataset.program;
            const program = JSON.parse(decodeURIComponent(encodedProgram));
            openModal(program);
        }
        
        if (e.target.closest('.modal-close') || 
            (e.target.classList.contains('modal') && !e.target.closest('.modal-content'))) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('program-modal').classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                navigateModal(-1);
                break;
            case 'ArrowRight':
                navigateModal(1);
                break;
        }
    });

    document.querySelector('.modal-prev').addEventListener('click', () => navigateModal(-1));
    document.querySelector('.modal-next').addEventListener('click', () => navigateModal(1));
});