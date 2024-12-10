const programs = {
    indefinite: [
        {
            name: "Sprig",
            description: "Build a JS game and play it on your own console.",
            website: "https://sprig.hackclub.com/",
            slack: "https://slack.com/archives/C02UN35M7LG",
            slackChannel: "#sprig",
            status: "active"
        },
        {
            name: "OnBoard",
            description: "Design a PCB and receive a $100 grant.",
            website: "https://hackclub.com/onboard",
            slack: "https://slack.com/archives/C056AMWSFKJ",
            slackChannel: "#electronics",
            status: "active"
        },
        {
            name: "OnBoard Live",
            description: "Design a PCB live on YouTube for $5/hour.",
            website: null,
            slack: "https://slack.com/archives/C07F3EA2L8G",
            slackChannel: "#onboard-live",
            status: "active"
        },
        {
            name: "Boba Drops",
            description: "Build a website and get boba!",
            website: "https://boba.hackclub.com/",
            slack: "https://slack.com/archives/C06UJR8QW0M",
            slackChannel: "#boba",
            status: "active"
        },
        {
            name: "Hackaccino",
            description: "Build a 3D website and get a free frappuccino.",
            website: "https://fraps.hackclub.com/",
            slack: "https://slack.com/archives/C078DFVL5LZ",
            slackChannel: "#fraps",
            status: "active"
        },
        {
            name: "Cider",
            description: "Create an iOS app and receive a $100 Apple Developer account to publish it.",
            website: "https://cider.hackclub.com/",
            slack: "https://slack.com/archives/C073DTGENJ2",
            slackChannel: "#cider",
            status: "active"
        },
        {
            name: "Anchor",
            description: "Design a VTuber-style logo for your High Seas project and receive custom stickers.",
            website: "https://anchor.hackclub.com/",
            slack: "https://slack.com/archives/C07V5401VMY",
            slackChannel: "#anchor",
            status: "active"
        }
    ],
    limitedTime: [
        {
            name: "Asylum",
            description: "Fast-paced hardware YSWS challenges.",
            website: null,
            slack: "https://slack.com/archives/C083CCAAHM1",
            slackChannel: "#asylum",
            status: "active",
            deadline: "2024-12-11T23:59:59"
        },
        {
            name: "Pyramid Scheme",
            description: "Put up Hack Club posters to earn prizes.",
            website: null,
            slack: "https://slack.com/archives/C07N1TCHY3T",
            slackChannel: "#pyramid-scheme",
            status: "active",
            deadline: "2024-12-11T23:59:59"
        },
        {
            name: "HackCraft",
            description: "Create a Minecraft mod, and Hack Club sends you Minecraft Java!",
            website: null,
            slack: "https://slack.com/archives/C07NQ5QAYNQ",
            slackChannel: "#mc-modding",
            status: "active",
            deadline: "2025-01-31T23:59:59"
        },
        {
            name: "Cascade",
            description: "Create animations with CSS and receive art supplies.",
            website: "https://cascade.hackclub.com/",
            slack: "https://slack.com/archives/C07QA8HD48N",
            slackChannel: "#cascade-ysws",
            status: "active",
            deadline: "2024-12-14T23:59:59"
        },
        {
            name: "High Seas",
            description: "Work on projects, earn doubloons, and compete in the Wonderdome.",
            website: "https://highseas.hackclub.com/",
            slack: "https://slack.com/archives/C07PZMBUNDS",
            slackChannel: "#high-seas",
            status: "active",
            deadline: "2025-01-31T23:59:59"
        },
        {
            name: "Riceathon",
            description: "Customize your Linux install, and get programmer socks or a Blåhaj.",
            website: "https://github.com/HackClub/riceathon",
            slack: "https://slack.com/archives/C07MLF9A8H5",
            slackChannel: "#riceathon",
            status: "active",
            deadline: "2025-01-10T23:59:59"
        }
    ],
    upcoming: [
        {
            name: "Forge",
            description: "Design a 3D model that solves a problem and receive a custom 3D printer.",
            website: "https://forge.hackclub.com/",
            slack: "https://slack.com/archives/C078GBDKC03",
            slackChannel: "#forge-updates",
            status: "upcoming"
        },
        {
            name: "Vine YSWS",
            description: "Create a song using open-source music software and receive a vinyl with your song.",
            website: "https://vineysws.vercel.app/",
            slack: "https://slack.com/archives/C07N0VA3YGJ",
            slackChannel: "#vine-ysws",
            status: "upcoming"
        },
        {
            name: "Google Dev YSWS",
            description: "Make an Android app and earn credits for a Google Developer account.",
            website: null,
            slack: "https://slack.com/archives/C07N06B1FDY",
            slackChannel: "#google-dev-ysws",
            status: "upcoming"
        },
        {
            name: "Hack Store",
            description: "Use a free alternative app store and get a Google Developer account.",
            website: null,
            slack: "https://slack.com/archives/C07BGFG6CDQ",
            slackChannel: "#hack-store",
            status: "upcoming"
        },
        {
            name: "Docs",
            description: "Submit awesome documents, and Hack Club will print them into a book.",
            website: null,
            slack: "https://slack.com/archives/C07R7P3TT7W",
            slackChannel: "#docs-ysws",
            status: "upcoming"
        },
        {
            name: "Draw Sticker Get Sticker",
            description: "Draw a sticker, and Hack Club will print and mail it to you.",
            website: null,
            slack: "https://slack.com/archives/C07Q862TYLQ",
            slackChannel: "#draw-sticker-get-sticker",
            status: "upcoming",
            deadline: "Opens October 15th"
        },
        {
            name: "Light Up",
            description: "Design an electronic circuit with lights, and Hack Club sends you the components and gifts.",
            website: null,
            slack: "https://slack.com/archives/C07RNEJ13LJ",
            slackChannel: "#lightup-ysws",
            status: "upcoming"
        },
        {
            name: "Aether YSWS",
            description: "Build a Windows app, and Hack Club provides a Microsoft Store developer account.",
            website: null,
            slack: "https://slack.com/archives/C07V78URSGL",
            slackChannel: "#aether-ysws",
            status: "upcoming"
        },
        {
            name: "Onward",
            description: "Build a robot using Arduino and receive one.",
            website: null,
            slack: "https://slack.com/archives/C079G5MKC93",
            slackChannel: "#onward",
            status: "upcoming"
        },
        {
            name: "Hack RTL",
            description: "Create a desktop app using RTL-SDR, and Hack Club sends you a dongle.",
            website: "https://hack-rtl.vercel.app/",
            slack: "https://slack.com/archives/C082S5V95G8",
            slackChannel: "#hack-rtl",
            status: "upcoming"
        },
        {
            name: "Lab in a Box",
            description: "Collaborate on projects in teams with resources provided by Hack Club.",
            website: null,
            slack: "https://slack.com/archives/C082G4HLZDK",
            slackChannel: "#lab-in-a-box",
            status: "upcoming"
        }
    ],
    noYouShip: [
        {
            name: "Community Newsletter",
            description: "Receive a fully handwritten monthly newsletter.",
            website: null,
            slack: "https://slack.com/archives/C07KS2794LX",
            slackChannel: "#community-newsletter",
            status: "active"
        }
    ],
    completed: [
        {
            name: "Blot",
            description: "Write code, make art, and get a drawing machine.",
            website: "https://blot.hackclub.com/",
            slack: "https://slack.com/archives/C04GCH8A91D",
            slackChannel: "#blot",
            status: "completed"
        },
        {
            name: "BrowserBuddy",
            description: "Build a Chrome extension, and Hack Club provides $30 to launch it on Chrome Web Store.",
            website: "https://browserbuddy.hackclub.com/",
            slack: "https://slack.com/archives/C07MQBTNVRU",
            slackChannel: "#browser-buddy",
            status: "completed",
            ended: "Ended November 20th"
        },
        {
            name: "HAM Radio YSWS",
            description: "Related to HAM radio projects.",
            website: null,
            slack: "https://slack.com/archives/C01G6UJT2RM",
            slackChannel: "#hamradio",
            status: "completed"
        },
        {
            name: "Boba Manor",
            description: "Website building with rewards.",
            website: "https://manor.hackclub.com/",
            slack: "https://slack.com/archives/C06UJR8QW0M",
            slackChannel: "#boba",
            status: "completed"
        },
        {
            name: "LLM YSWS",
            description: "Projects using language models.",
            website: null,
            slack: "https://slack.com/archives/C07KYNWR10W",
            slackChannel: "#llm / #zrl-land",
            status: "completed"
        },
        {
            name: "The Bin",
            description: "Hardware-related projects.",
            website: "https://bin.hackclub.com/",
            slack: "https://slack.com/archives/C01FXNNF6F2",
            slackChannel: "#electronics",
            status: "completed"
        },
        {
            name: "Retrospect",
            description: "Create a DOS game and have it delivered on a floppy disk.",
            website: "https://retrospect.hackclub.com/",
            slack: "https://slack.com/archives/C07MUFXNG82",
            slackChannel: "#retrospect",
            status: "completed",
            ended: "Ended October 8th"
        },
        {
            name: "Hackpad",
            description: "Design a macropad and receive it.",
            website: "https://github.com/hackclub/hackpad",
            slack: "https://slack.com/archives/C07LESGH0B0",
            slackChannel: "#hackpad",
            status: "completed",
            ended: "Ended October 21st"
        }
    ]
};

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

    if (category === 'all') {
        sections.forEach(section => section.classList.remove('hidden'));
        return;
    }

    sections.forEach(section => {
        const sectionPrograms = section.querySelectorAll('.program-card');
        const hasActivePrograms = Array.from(sectionPrograms)
            .some(card => card.querySelector(`.status-${category}`));
        
        section.classList.toggle('hidden', !hasActivePrograms);
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
        const hasVisiblePrograms = Array.from(section.querySelectorAll('.program-card'))
            .some(card => !card.classList.contains('hidden-by-search'));
        section.classList.toggle('hidden', !hasVisiblePrograms);
    });
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
    renderPrograms();
    
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