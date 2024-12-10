let programs = {};

async function loadPrograms() {
    try {
        const response = await fetch('programs.json');
        programs = await response.json();
        renderPrograms();
    } catch (error) {
        console.error('Error loading programs:', error);
    }
}

function formatDeadline(deadlineStr) {
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
    
    if (diffDays <= 2) return 'very-urgent';
    if (diffDays <= 7) return 'urgent';
    return '';
}

function createProgramCard(program) {
    const deadlineText = formatDeadline(program.deadline);
    const deadlineClass = getDeadlineClass(program.deadline);
    
    return `
        <div class="card program-card">
            <div class="program-header">
                <h3>${program.name}</h3>
                <span class="program-status status-${program.status}">${program.status}</span>
            </div>
            <p>${program.description}</p>
            ${program.deadline ? `<div class="program-deadline ${deadlineClass}">${deadlineText}</div>` : ''}
            <div class="program-links">
                ${program.website ? `<a href="${program.website}" target="_blank">Website</a>` : ''}
                ${program.slack ? `<a href="${program.slack}" target="_blank">${program.slackChannel}</a>` : ''}
            </div>
        </div>
    `;
}

function countActivePrograms() {
    let count = 0;
    Object.values(programs).forEach(category => {
        count += category.filter(program => program.status === 'active').length;
    });
    return count;
}

function renderPrograms() {
    const container = document.getElementById('programs-container');
    const activeCount = countActivePrograms();
    document.getElementById('active-count').textContent = activeCount;
    
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
            const status = statusElement.textContent;
            
            if (category === 'all') {
                card.classList.remove('hidden-by-filter');
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
            const deadlineText = formatDeadline(program.deadline);
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
    });
});