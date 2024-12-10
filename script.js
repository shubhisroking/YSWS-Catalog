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
            name: "Blot",
            description: "Write code, make art, and get a drawing machine.",
            website: "https://blot.hackclub.com/",
            slack: "https://slack.com/archives/C04GCH8A91D",
            slackChannel: "#blot",
            status: "ended"
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
            deadline: "Ends tomorrow"
        },
        {
            name: "Pyramid Scheme",
            description: "Put up Hack Club posters to earn prizes.",
            website: null,
            slack: "https://slack.com/archives/C07N1TCHY3T",
            slackChannel: "#pyramid-scheme",
            status: "active",
            deadline: "Ends tomorrow"
        },
        {
            name: "HackCraft",
            description: "Create a Minecraft mod, and Hack Club sends you Minecraft Java! Ends January 31st, 2025.",
            website: null,
            slack: "https://slack.com/archives/C07NQ5QAYNQ",
            slackChannel: "#mc-modding",
            status: "active",
            deadline: "Ends January 31st, 2025"
        },
        {
            name: "Cascade",
            description: "Create animations with CSS and receive art supplies.",
            website: "https://cascade.hackclub.com/",
            slack: "https://slack.com/archives/C07QA8HD48N",
            slackChannel: "#cascade-ysws",
            status: "active",
            deadline: "Ends Thursday"
        },
        {
            name: "High Seas",
            description: "Work on projects, earn doubloons, and compete in the Wonderdome. Winners get extra doubloons; losers still earn some.",
            website: "https://highseas.hackclub.com/",
            slack: "https://slack.com/archives/C07PZMBUNDS",
            slackChannel: "#high-seas",
            status: "active",
            deadline: "Ends January 31st, 2025"
        },
        {
            name: "Riceathon",
            description: "Customize your Linux install, and get programmer socks or a Blåhaj.",
            website: "https://github.com/HackClub/riceathon",
            slack: "https://slack.com/archives/C07MLF9A8H5",
            slackChannel: "#riceathon",
            status: "active",
            deadline: "Ends January 10th, 2025"
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
        }
    ],
    additional: [
        {
            name: "Google Dev YSWS",
            description: "Make an Android app and earn credits for a Google Developer account.",
            website: null,
            slack: "https://slack.com/archives/C07N06B1FDY",
            slackChannel: "#google-dev-ysws",
            status: "active"
        },
        {
            name: "Hack Store",
            description: "Use a free alternative app store and get a Google Developer account.",
            website: null,
            slack: "https://slack.com/archives/C07BGFG6CDQ",
            slackChannel: "#hack-store",
            status: "active"
        },
        {
            name: "Docs",
            description: "Submit awesome documents, and Hack Club will print them into a book.",
            website: null,
            slack: "https://slack.com/archives/C07R7P3TT7W",
            slackChannel: "#docs-ysws",
            status: "active"
        },
        {
            name: "Draw Sticker Get Sticker",
            description: "Draw a sticker, and Hack Club will print and mail it to you.",
            website: null,
            slack: "https://slack.com/archives/C07Q862TYLQ",
            slackChannel: "#draw-sticker-get-sticker",
            status: "active"
        },
        {
            name: "Light Up",
            description: "Design an electronic circuit with lights, and Hack Club sends you the components and gifts.",
            website: null,
            slack: "https://slack.com/archives/C07RNEJ13LJ",
            slackChannel: "#lightup-ysws",
            status: "active"
        },
        {
            name: "Aether YSWS",
            description: "Build a Windows app, and Hack Club provides a Microsoft Store developer account.",
            website: null,
            slack: "https://slack.com/archives/C07V78URSGL",
            slackChannel: "#aether-ysws",
            status: "active"
        },
        {
            name: "Onward",
            description: "Build a robot using Arduino and receive one.",
            website: null,
            slack: "https://slack.com/archives/C079G5MKC93",
            slackChannel: "#onward",
            status: "active"
        },
        {
            name: "Hack RTL",
            description: "Create a desktop app using RTL-SDR, and Hack Club sends you a dongle.",
            website: "https://hack-rtl.vercel.app/",
            slack: "https://slack.com/archives/C082S5V95G8",
            slackChannel: "#hack-rtl",
            status: "active"
        },
        {
            name: "Lab in a Box",
            description: "Collaborate on projects in teams with resources provided by Hack Club.",
            website: null,
            slack: "https://slack.com/archives/C082G4HLZDK",
            slackChannel: "#lab-in-a-box",
            status: "active"
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
            website: null,
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

function createProgramCard(program) {
    return `
        <div class="card program-card">
            <div class="program-header">
                <h3>${program.name}</h3>
                <span class="program-status status-${program.status}">${program.status}</span>
            </div>
            <p>${program.description}</p>
            ${program.deadline ? `<div class="program-deadline">Ends: ${program.deadline}</div>` : ''}
            <div class="program-links">
                ${program.website ? `<a href="${program.website}" target="_blank">Website</a>` : ''}
                ${program.slack ? `<a href="${program.slack}" target="_blank">${program.slackChannel}</a>` : ''}
            </div>
        </div>
    `;
}

function renderPrograms() {
    const container = document.getElementById('programs-container');
    
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

document.addEventListener('DOMContentLoaded', () => {
    renderPrograms();
    
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            filterPrograms(button.dataset.category);
        });
    });
    
    initializeTheme();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});