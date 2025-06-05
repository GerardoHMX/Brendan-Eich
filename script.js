// Timeline data based on the document
const timelineData = [
    {
        year: "Introduction",
        event: "The Man Who Changed the Web",
        code: `/**
* Brendan Eich: The Man Who Changed the Web in 10 Days
* @title Making History
* @impact Changed the internet forever
*/

class Introduction {
    constructor() {
        this.title = "Making History: Brendan Eich";
        this.impact = "Changed the world of technology in just ten days";
        this.mainAchievement = "Created JavaScript";
        this.significance = "Made websites interactive, dynamic, and alive";
    }

    getWebBefore() {
        return {
            state: "Static",
            limitations: [
                "Only text and images",
                "No animations",
                "No interactive forms",
                "No games",
                "No videos"
            ],
            userExperience: "People could only read and look"
        };
    }

    getWebAfter() {
        return {
            state: "Dynamic",
            features: [
                "Interactive interfaces",
                "Real-time updates",
                "Rich applications",
                "Multimedia experiences"
            ],
            impact: "Revolutionized how we use the internet"
        };
    }
}

const story = new Introduction();
console.log("The story of how the web became alive...");`,
        preview: `
<div class="modern-intro">
    <div class="hero-section">
        <div class="particle-background"></div>
        <div class="content-wrapper">
            <div class="hero-title">
                <div class="title-accent"></div>
                <h1>Making History</h1>
                <div class="subtitle">The Man Who Changed the Web</div>
            </div>
        </div>
    </div>

    <div class="comparison-grid">
        <div class="era-card before">
            <div class="card-content">
                <div class="era-header">
                    <span class="era-icon">🌅</span>
                    <h2>Before JavaScript</h2>
                </div>
                <div class="features-list">
                    <div class="feature">
                        <span class="feature-icon">📄</span>
                        <span class="feature-text">Static Pages</span>
                        <div class="feature-line"></div>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">🖼️</span>
                        <span class="feature-text">Basic Images</span>
                        <div class="feature-line"></div>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">⛔</span>
                        <span class="feature-text">No Interaction</span>
                        <div class="feature-line"></div>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">📱</span>
                        <span class="feature-text">Limited Features</span>
                        <div class="feature-line"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="divider">
            <div class="divider-line"></div>
            <div class="evolution-icon">⚡</div>
            <div class="divider-line"></div>
        </div>

        <div class="era-card after">
            <div class="card-content">
                <div class="era-header">
                    <span class="era-icon">🚀</span>
                    <h2>After JavaScript</h2>
                </div>
                <div class="features-list">
                    <div class="feature">
                        <span class="feature-icon">🎮</span>
                        <span class="feature-text">Interactive</span>
                        <div class="feature-line"></div>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">🎭</span>
                        <span class="feature-text">Dynamic</span>
                        <div class="feature-line"></div>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">🌐</span>
                        <span class="feature-text">Connected</span>
                        <div class="feature-line"></div>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">💫</span>
                        <span class="feature-text">Animated</span>
                        <div class="feature-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.modern-intro {
    background: linear-gradient(135deg, #13171F 0%, #202A3C 100%);
    color: white;
    padding: 40px;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
}

.particle-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% -20%, rgba(247, 223, 30, 0.1), transparent 70%);
    opacity: 0.6;
    z-index: 1;
}

.hero-section {
    position: relative;
    padding: 60px 0;
    text-align: center;
    z-index: 2;
}

.content-wrapper {
    position: relative;
    z-index: 2;
}

.hero-title {
    display: inline-block;
    position: relative;
}

.title-accent {
    position: absolute;
    width: 60px;
    height: 60px;
    background: #f7df1e;
    border-radius: 50%;
    filter: blur(30px);
    opacity: 0.5;
    top: -20px;
    left: -20px;
    animation: pulseAccent 4s ease-in-out infinite;
}

.hero-title h1 {
    font-size: 4em;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(135deg, #f7df1e 0%, #ff6b6b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
}

.subtitle {
    font-size: 1.5em;
    color: #8B9CB3;
    margin-top: 15px;
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards 0.2s;
}

.comparison-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 60px;
    z-index: 2;
    position: relative;
}

.era-card {
    flex: 1;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 20px;
    padding: 30px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transform: translateY(0);
    transition: all 0.3s ease;
}

.era-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
}

.era-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
}

.era-icon {
    font-size: 2em;
}

.era-header h2 {
    font-size: 1.8em;
    margin: 0;
    background: linear-gradient(135deg, #fff 0%, #8B9CB3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.features-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.feature {
    position: relative;
    padding: 15px;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 15px;
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards;
}

.feature:nth-child(1) { animation-delay: 0.3s; }
.feature:nth-child(2) { animation-delay: 0.4s; }
.feature:nth-child(3) { animation-delay: 0.5s; }
.feature:nth-child(4) { animation-delay: 0.6s; }

.feature-icon {
    font-size: 1.4em;
}

.feature-text {
    color: #8B9CB3;
    font-size: 1.1em;
}

.feature-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #f7df1e, transparent);
    transition: width 0.3s ease;
}

.feature:hover .feature-line {
    width: 100%;
}

.divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.divider-line {
    width: 2px;
    height: 80px;
    background: linear-gradient(180deg, transparent, #f7df1e, transparent);
}

.evolution-icon {
    width: 40px;
    height: 40px;
    background: rgba(247, 223, 30, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    animation: pulse 2s infinite;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes pulseAccent {
    0% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
    100% { opacity: 0.5; transform: scale(1); }
}

@media (max-width: 768px) {
    .comparison-grid {
        flex-direction: column;
    }
    
    .divider {
        flex-direction: row;
    }
    
    .divider-line {
        width: 80px;
        height: 2px;
    }
}
</style>`
    },
    {
        year: "1961-1980s",
        event: "Early Life & Education",
        code: `/**
* Early Life of Brendan Eich
* @date July 4, 1961
* @location Pittsburgh, Pennsylvania
*/

class EarlyLife {
    constructor() {
        this.birthInfo = {
            date: "July 4, 1961",
            place: "Pittsburgh, Pennsylvania",
            grewUp: "San Francisco Bay Area"
        };
        
        this.education = {
            undergraduate: {
                university: "Santa Clara University",
                major: "Mathematics and Computer Science"
            },
            graduate: {
                university: "University of Illinois",
                program: "Master's (incomplete)",
                focus: "Computer Science"
            }
        };
        
        this.earlyInterests = [
            "Technology",
            "Electronics",
            "Computer Programming",
            "Logic Systems"
        ];
    }

    getBackground() {
        return {
            childhood: "Showed early interest in technology",
            expertise: "Demonstrated strong programming abilities",
            passion: "Understanding how machines work"
        };
    }
}

const brendanYouth = new EarlyLife();
console.log("A future innovator is born...");`,
        preview: `<div class="early-life">
            <div class="hero-section">
                <h1>Brendan Eich: The Early Years</h1>
                <h2>Birth of an Innovator</h2>
            </div>
            <div class="info-grid">
                <div class="info-card birth">
                    <h3>🎂 Birth</h3>
                    <p>July 4, 1961</p>
                    <p>Pittsburgh, Pennsylvania</p>
                </div>
                <div class="info-card education">
                    <h3>🎓 Education</h3>
                    <p>Santa Clara University</p>
                    <p>Mathematics & Computer Science</p>
                </div>
                <div class="info-card interests">
                    <h3>💡 Early Interests</h3>
                    <ul>
                        <li>Technology & Electronics</li>
                        <li>Computer Programming</li>
                        <li>Logic Systems</li>
                    </ul>
                </div>
            </div>
        </div>
        <style>
        .early-life { padding: 20px; font-family: 'Arial', sans-serif; color: #333; }
        .hero-section { text-align: center; margin-bottom: 30px; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 40px; border-radius: 10px; }
        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .info-card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .info-card h3 { color: #1e3c72; margin-bottom: 15px; }
        .info-card ul { padding-left: 20px; }
        .info-card li { margin: 5px 0; }
        </style>`
    },
    {
        year: "1995",
        event: "Creates JavaScript in 10 days at Netscape",
        code: `/**
* The Birth of JavaScript
* @date May 1995
* @location Netscape Communications
* @timeframe 10 days
*/

const JavaScriptCreation = {
project: "Mocha", // Original name
renamed: ["LiveScript", "JavaScript"],
purpose: "Make web pages interactive",

createLanguage() {
console.log("Day 1-10: Designing the language...");

// Core features implemented
const features = [
    "Dynamic typing",
    "First-class functions", 
    "Prototype-based inheritance",
    "Event-driven programming"
];

return {
    language: "JavaScript",
    paradigm: "Multi-paradigm",
    firstRelease: "Netscape Navigator 2.0",
    impact: "Revolutionary for web development"
};
},

legacy() {
return "One of the most used languages in the world";
}
};

// The moment that changed the web forever
JavaScriptCreation.createLanguage();`,
        preview: `
<div class="js-creation">
<h2>🚀 JavaScript Creation - 1995</h2>
<div class="timeline-visual">
<div class="day-counter">
    <h3>10 Days That Changed The Web</h3>
    <div class="days-grid">
        <div class="day active">Day 1</div>
        <div class="day active">Day 2</div>
        <div class="day active">Day 3</div>
        <div class="day active">Day 4</div>
        <div class="day active">Day 5</div>
        <div class="day active">Day 6</div>
        <div class="day active">Day 7</div>
        <div class="day active">Day 8</div>
        <div class="day active">Day 9</div>
        <div class="day active">Day 10</div>
    </div>
</div>
<div class="creation-details">
    <h4>Original Names:</h4>
    <ul>
        <li>Mocha (first name)</li>
        <li>LiveScript (renamed)</li>
        <li>JavaScript (final name)</li>
    </ul>
    <h4>Key Features:</h4>
    <ul>
        <li>Dynamic typing</li>
        <li>First-class functions</li>
        <li>Event-driven programming</li>
        <li>Prototype inheritance</li>
    </ul>
</div>
</div>
</div>
<style>
.js-creation { padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px; }
.timeline-visual { margin: 20px 0; }
.day-counter h3 { text-align: center; margin-bottom: 20px; }
.days-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin-bottom: 20px; }
.day { background: rgba(255,255,255,0.2); padding: 10px; text-align: center; border-radius: 5px; font-weight: bold; }
.day.active { background: #4caf50; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
.creation-details { background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; }
.creation-details ul { margin: 10px 0; padding-left: 20px; }
</style>`
    },
    {
        year: "1998",
        event: "Co-founds Mozilla Project",
        code: `/**
* Mozilla Project Foundation
* @date 1998
* @mission Open Source Web Browser
*/

class MozillaProject {
constructor() {
this.founded = 1998;
this.mission = "Free and open internet";
this.coFounders = ["Brendan Eich", "Mozilla Team"];
this.principles = [
    "Open source development",
    "Web standards compliance", 
    "User privacy protection",
    "Innovation in browsing"
];
}

launchFirefox() {
const firefox = {
    name: "Firefox",
    year: 2004,
    features: [
        "Tabbed browsing",
        "Pop-up blocking", 
        "Enhanced security",
        "Extension support"
    ],
    impact: "Challenged Internet Explorer dominance"
};

console.log("Firefox launched successfully!");
return firefox;
}

getImpact() {
return {
    openSource: "Democratized web browser development",
    standards: "Pushed for better web standards",
    competition: "Created healthy browser competition"
};
}
}

const mozilla = new MozillaProject();
const firefoxBrowser = mozilla.launchFirefox();`,
        preview: `
<div class="mozilla-section">
<h2>🦊 Mozilla Foundation - 1998</h2>
<div class="mozilla-grid">
<div class="mission-card">
    <h3>Mission</h3>
    <p>"Free and open internet for everyone"</p>
    <div class="principles">
        <h4>Core Principles:</h4>
        <ul>
            <li>🔓 Open source development</li>
            <li>📊 Web standards compliance</li>
            <li>🔒 User privacy protection</li>
            <li>💡 Innovation in browsing</li>
        </ul>
    </div>
</div>
<div class="firefox-card">
    <h3>Firefox Browser (2004)</h3>
    <div class="browser-features">
        <div class="feature">📑 Tabbed browsing</div>
        <div class="feature">🚫 Pop-up blocking</div>
        <div class="feature">🔐 Enhanced security</div>
        <div class="feature">🧩 Extension support</div>
    </div>
    <p class="impact">Challenged Internet Explorer's dominance</p>
</div>
</div>
</div>
<style>
.mozilla-section { padding: 20px; background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); color: white; border-radius: 10px; }
.mozilla-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
.mission-card, .firefox-card { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; }
.principles ul { list-style: none; padding: 0; }
.principles li { margin: 8px 0; }
.browser-features { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 15px 0; }
.feature { background: rgba(255,255,255,0.2); padding: 10px; border-radius: 5px; text-align: center; font-size: 14px; }
.impact { font-style: italic; margin-top: 15px; font-weight: bold; }
</style>`
    },
    {
        year: "2016",
        event: "Launches Brave Browser with privacy focus",
        code: `/**
* Brave Software Launch
* @date 2016
* @focus Privacy-first browsing
*/

class BraveBrowser {
constructor() {
this.founded = 2016;
this.mission = "Fix the web's broken advertising model";
this.founder = "Brendan Eich";
this.innovations = new Map();
this.setupInnovations();
}

setupInnovations() {
this.innovations.set("adBlocking", {
    feature: "Built-in ad blocking",
    benefit: "3x faster browsing",
    privacy: "No tracking by default"
});

this.innovations.set("BAT", {
    name: "Basic Attention Token",
    purpose: "Reward users for attention",
    model: "Cryptocurrency-based advertising"
});

this.innovations.set("privacyFirst", {
    tracking: "Blocked by default",
    fingerprinting: "Protected against",
    encryption: "Enhanced HTTPS everywhere"
});
}

getRevolution() {
return {
    problem: "Traditional web advertising is broken",
    solution: "Privacy-respecting ad model with user rewards",
    impact: "Users control their data and earn from attention",
    future: "Decentralized web economics"
};
}

displayStats() {
console.log("Brave Browser Stats:");
console.log("- Blocks ads and trackers by default");
console.log("- 3x faster than Chrome");
console.log("- Users earn BAT tokens");
console.log("- 50M+ monthly active users");
}
}

const brave = new BraveBrowser();
brave.displayStats();

// The future of web browsing
console.log("Quote:", "The only way to fix the web is to re-architect its economy");`,
        preview: `
<div class="brave-section">
<h2>🦁 Brave Browser - 2016</h2>
<div class="brave-hero">
<div class="stats-dashboard">
    <h3>Privacy Revolution</h3>
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-number">3x</div>
            <div class="stat-label">Faster Browsing</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">50M+</div>
            <div class="stat-label">Active Users</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">Ad Blocking</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">$BAT</div>
            <div class="stat-label">User Rewards</div>
        </div>
    </div>
</div>
<div class="features-list">
    <h3>🔒 Privacy Features</h3>
    <div class="feature-item">🚫 Built-in ad blocking</div>
    <div class="feature-item">👁️ Anti-fingerprinting</div>
    <div class="feature-item">🔐 HTTPS everywhere</div>
    <div class="feature-item">💰 Earn BAT tokens</div>
    <div class="feature-item">⚡ Lightning fast</div>
</div>
</div>
<div class="quote-section">
<blockquote>"The only way to fix the web is to re-architect its economy"</blockquote>
<cite>- Brendan Eich</cite>
</div>
</div>
<style>
.brave-section { padding: 20px; background: linear-gradient(135deg, #662d91 0%, #9f4c96 100%); color: white; border-radius: 10px; }
.brave-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 20px 0; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0; }
.stat-card { background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; text-align: center; }
.stat-number { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
.stat-label { font-size: 12px; opacity: 0.9; }
.features-list { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; }
.feature-item { margin: 10px 0; padding: 8px; background: rgba(255,255,255,0.1); border-radius: 5px; }
.quote-section { text-align: center; margin-top: 30px; }
blockquote { font-size: 18px; font-style: italic; margin: 0; }
cite { display: block; margin-top: 10px; opacity: 0.8; }
</style>`
    },
    {
        year: "2025",
        event: "Legacy continues - JavaScript everywhere",
        code: `/**
* Brendan Eich's Lasting Legacy
* @date 2025 and beyond
* @impact Billions of lives touched
*/

const BrendanEichLegacy = {
javascript: {
created: 1995,
currentAge: new Date().getFullYear() - 1995,
ubiquity: "Everywhere",
platforms: [
    "Web browsers (frontend)",
    "Servers (Node.js)", 
    "Mobile apps (React Native)",
    "Desktop apps (Electron)",
    "IoT devices",
    "Machine learning (TensorFlow.js)",
    "Blockchain applications"
]
},

modernFrameworks: [
"React", "Angular", "Vue.js", 
"Next.js", "Svelte", "Node.js"
],

webRevolution: {
from: "Static HTML pages",
to: "Interactive web applications",
enabled: [
    "Social media platforms",
    "Online banking",
    "E-commerce",
    "Streaming services", 
    "Cloud applications",
    "Real-time collaboration tools"
]
},

philosophicalImpact: {
quote: "Always bet on JavaScript",
vision: "Open and free internet",
privacyFocus: "Users should control their data",
webEconomy: "Reimagining how the web works"
},

getGlobalImpact() {
return {
    developers: "Millions of JavaScript developers worldwide",
    websites: "95%+ of websites use JavaScript",
    jobs: "Most in-demand programming language",
    innovation: "Continues to evolve and innovate",
    future: "WebAssembly, AI integration, IoT expansion"
};
}
};

// Calculate the impact
const impact = BrendanEichLegacy.getGlobalImpact();
console.log("Brendan Eich's creation touches", "billions of lives daily");

// Famous quote that proved prophetic
console.log(BrendanEichLegacy.philosophicalImpact.quote);

// The web today is unimaginable without JavaScript
export default BrendanEichLegacy;`,
        preview: `
<div class="legacy-section">
<h2>🌐 The Legacy Lives On - 2025</h2>
<div class="impact-visualization">
<div class="js-everywhere">
    <h3>JavaScript is Everywhere</h3>
    <div class="platforms-grid">
        <div class="platform">🌐 Web Browsers</div>
        <div class="platform">🖥️ Servers (Node.js)</div>
        <div class="platform">📱 Mobile Apps</div>
        <div class="platform">💻 Desktop Apps</div>
        <div class="platform">🏠 IoT Devices</div>
        <div class="platform">🤖 AI/ML</div>
        <div class="platform">⛓️ Blockchain</div>
        <div class="platform">☁️ Cloud Computing</div>
    </div>
</div>
<div class="statistics">
    <h3>Global Impact</h3>
    <div class="stat-item">
        <span class="number">95%+</span>
        <span class="label">of websites use JavaScript</span>
    </div>
    <div class="stat-item">
        <span class="number">12M+</span>
        <span class="label">JavaScript developers worldwide</span>
    </div>
    <div class="stat-item">
        <span class="number">#1</span>
        <span class="label">Most popular programming language</span>
    </div>
    <div class="stat-item">
        <span class="number">30</span>
        <span class="label">Years of continuous evolution</span>
    </div>
</div>
</div>
<div class="quote-finale">
<h3>Prophetic Words</h3>
<blockquote>"Always bet on JavaScript"</blockquote>
</div>
</div>`
    }
];

// Funciones para manejar el editor y la vista previa
let currentTypingInterval;
let currentCharIndex = 0;

function typeCode(code) {
    const codeEditor = document.getElementById('codeEditor');
    const currentLine = document.getElementById('currentLine');
    currentCharIndex = 0;
    
    clearInterval(currentTypingInterval);
    currentLine.textContent = '';
    
    currentTypingInterval = setInterval(() => {
        if (currentCharIndex < code.length) {
            currentLine.textContent += code[currentCharIndex];
            currentCharIndex++;
            
            // Actualizar números de línea
            updateLineNumbers(currentLine.textContent.split('\n').length);
            
            // Auto-scroll
            codeEditor.scrollTop = codeEditor.scrollHeight;
        } else {
            clearInterval(currentTypingInterval);
        }
    }, 30);
}

function updateLineNumbers(lineCount) {
    const lineNumbers = document.getElementById('lineNumbers');
    const codeEditor = document.getElementById('codeEditor');
    lineNumbers.innerHTML = '';
    
    for (let i = 1; i <= lineCount; i++) {
        const lineNumber = document.createElement('div');
        lineNumber.className = 'line-number';
        lineNumber.textContent = i;
        lineNumbers.appendChild(lineNumber);
    }

    // Sincronizar scroll entre números de línea y editor
    codeEditor.addEventListener('scroll', () => {
        lineNumbers.scrollTop = codeEditor.scrollTop;
    });
}

function updatePreview(previewContent) {
    const previewFrame = document.getElementById('previewFrame');
    previewFrame.srcdoc = previewContent;
}

function updateStatusBar(itemName) {
    const statusText = document.getElementById('statusText');
    statusText.textContent = `Viewing: ${itemName}`;
}

// Agregar event listeners al menú
document.addEventListener('DOMContentLoaded', () => {
    const initialPreview = `
    <div class="welcome-screen">
        <div class="profile-section">
            <div class="profile-container">
                <div class="profile-ring"></div>
                <img src="https://www.brendaneich.com/wp-content/uploads/2021/05/Eich-1.jpg" alt="Brendan Eich" class="profile-image">
            </div>
            <h1 class="main-title">The World of Celebrities</h1>
            <h2 class="celebrity-name">Brendan Eich</h2>
            <p class="celebrity-title">Creator of JavaScript</p>
        </div>

        <div class="browser-timeline">
            <div class="browser-icons">
                <div class="browser-icon js">
                    <div class="js-box">JS</div>
                    <div class="glow yellow-glow"></div>
                </div>
                <div class="browser-icon firefox">
                    <img src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-lg.3d9087ac44e8.png" alt="Firefox" class="firefox-logo">
                    <div class="glow orange-glow"></div>
                </div>
                <div class="browser-icon brave">
                    <img src="https://brave.com/static-assets/images/brave-logo.svg" alt="Brave" class="brave-logo">
                    <div class="glow red-glow"></div>
                </div>
            </div>
            
            <div class="timeline-track">
                <div class="track-line"></div>
                <div class="milestones-container">
                    <div class="milestone" style="--position: 0%">
                        <span class="year">1995</span>
                        <span class="dot"></span>
                    </div>
                    <div class="milestone" style="--position: 33%">
                        <span class="year">1998</span>
                        <span class="dot"></span>
                    </div>
                    <div class="milestone" style="--position: 66%">
                        <span class="year">2004</span>
                        <span class="dot"></span>
                    </div>
                    <div class="milestone" style="--position: 100%">
                        <span class="year">2016</span>
                        <span class="dot"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="instructions">
            <p class="instruction-text">Explore the journey of a tech pioneer</p>
            <div class="click-indicator">
                <div class="hand-click">👆</div>
                <div class="click-waves"></div>
                <span class="click-text">Click to begin</span>
            </div>
        </div>
    </div>
    <style>
    .welcome-screen {
        background: linear-gradient(135deg, #0a1930 0%, #223759 100%);
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 40px 20px;
        position: relative;
        overflow: hidden;
    }

    .profile-section {
        text-align: center;
        z-index: 2;
    }

    .profile-container {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 0 auto 30px;
    }

    .profile-ring {
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border: 4px solid #f7df1e;
        border-radius: 50%;
        animation: rotate 10s linear infinite;
    }

    .profile-image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

    .main-title {
        font-size: 48px;
        background: linear-gradient(45deg, #f7df1e, #ff6b6b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 10px;
        animation: slideInDown 1s ease-out;
    }

    .celebrity-name {
        font-size: 36px;
        color: #fff;
        margin: 10px 0;
        animation: fadeIn 1s ease-out forwards;
    }

    .celebrity-title {
        font-size: 20px;
        color: #f7df1e;
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
        animation-delay: 0.5s;
    }

    .browser-timeline {
        width: 100%;
        max-width: 800px;
        position: relative;
        margin: 30px 0; /* Reducido de 40px */
        padding-top: 60px; /* Reducido de 80px */
    }

    .browser-icons {
        position: absolute;
        top: -10px;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 120px; /* Espacio entre iconos */
        z-index: 3;
    }

    .timeline-track {
        height: 4px;
        background: rgba(255,255,255,0.1);
        position: relative;
        margin-top: 40px; /* Ajustado el margen superior */
    }

    .track-line {
        height: 100%;
        background: #f7df1e;
        width: 0;
        animation: growLine 2s ease-out forwards;
    }

    .milestones-container {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .milestone {
        position: absolute;
        left: var(--position);
        transform: translateX(-50%);
        text-align: center;
    }

    .year {
        position: absolute;
        bottom: 20px; /* Cambiado de top a bottom */
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-size: 14px;
        white-space: nowrap;
        font-weight: bold;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .dot {
        position: absolute;
        top: -4px;
        left: 50%;
        width: 12px;
        height: 12px;
        background: #f7df1e;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 10px rgba(247, 223, 30, 0.5);
        transition: all 0.3s ease;
    }

    .dot:hover {
        transform: translate(-50%, -50%) scale(1.5);
        box-shadow: 0 0 15px rgba(247, 223, 30, 0.8);
    }

    .instructions {
        text-align: center;
        margin-top: 60px;
        z-index: 2;
    }

    .instruction-text {
        font-size: 24px;
        color: #ffffff; /* Color blanco */
        margin-bottom: 20px;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        font-weight: 500;
    }

    .click-indicator {
        position: relative;
        display: inline-block;
        padding: 20px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        backdrop-filter: blur(5px);
        margin-top: 20px;
    }

    .hand-click {
        font-size: 40px;
        position: relative;
        z-index: 2;
        animation: clickAnimation 2s infinite;
        transform-origin: bottom center;
    }

    @keyframes clickAnimation {
        0% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-15px) scale(1.1); }
        60% { transform: translateY(-10px) scale(0.9); }
        70% { transform: translateY(-15px) scale(1.1); }
        100% { transform: translateY(0) scale(1); }
    }

    .click-waves::before,
    .click-waves::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        border: 2px solid #f7df1e;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: clickWaves 2s infinite;
    }

    .click-waves::after {
        animation-delay: 0.5s;
    }

    @keyframes clickWaves {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
    }

    .browser-icon {
        position: relative;
        width: 30px; /* Aumentado de 25px */
        height: 30px; /* Aumentado de 25px */
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transform: translateY(15px);
        animation: floatIcon 2s ease-in-out infinite;
    }

    .js-box {
        width: 30px; /* Aumentado de 25px */
        height: 30px; /* Aumentado de 25px */
        background: #f7df1e;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #000;
        font-size: 14px; /* Aumentado de 12px */
    }

    .firefox-logo, .brave-logo {
        width: 30px; /* Aumentado de 25px */
        height: 30px; /* Aumentado de 25px */
        object-fit: contain;
    }

    /* Actualizar el icono de Brave con el logo oficial */
    .browser-icon.brave img {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23ffffff' d='M23.75 11.57l.48-.49c.44-.44.89-.89 1.31-1.35.19-.21.19-.51-.01-.71l-2.09-2.09c-.12-.12-.29-.17-.46-.15l-3.12.44-2.11-3c-.15-.22-.46-.27-.67-.12l-1.81 1.27-1.81-1.27c-.22-.15-.52-.1-.67.12l-2.11 3-3.12-.44c-.17-.02-.34.03-.46.15L5 8.99c-.2.2-.21.51-.01.71.42.47.87.91 1.31 1.35l.48.49L5.1 15.57c-.06.16-.04.34.06.48l1.26 1.77-1.18 2.95c-.08.2-.02.42.14.56l2.27 1.95v3.39c0 .19.11.36.28.44l3.82 1.91c.1.05.22.07.33.05l3.67-.73 3.67.73c.11.02.23 0 .33-.05l3.82-1.91c.17-.08.28-.25.28-.44v-3.39l2.27-1.95c.16-.14.22-.36.14-.56l-1.18-2.95 1.26-1.77c.1-.14.12-.32.06-.48l-1.68-4.03zm-4.27 3.26l-.35.35-2.65 2.65c-.15.15-.15.38 0 .53l2.83 2.83c.07.07.11.17.11.27v2.75l-2.76 1.38-2.65-.53c-.06-.01-.12-.01-.18 0l-2.65.53-2.76-1.38V21.2c0-.1.04-.2.11-.27l2.83-2.83c.15-.15.15-.38 0-.53l-2.65-2.65-.35-.35c-.07-.07-.11-.17-.11-.27v-2.75l2.76-1.38 2.65.53c.06.01.12.01.18 0l2.65-.53 2.76 1.38v2.75c0 .1-.04.2-.11.27z'/%3E%3C/svg%3E");
        width: 30px;
        height: 30px;
        filter: brightness(1) drop-shadow(0 0 2px rgba(255,255,255,0.5));
    }

    @keyframes floatIcon {
        0%, 100% { transform: translateY(15px); }
        50% { transform: translateY(10px); }
    }

    /* ...resto de las animaciones existentes ... */
    </style>`;

    // Establecer la vista previa inicial
    const previewFrame = document.getElementById('previewFrame');
    previewFrame.srcdoc = initialPreview;

    // Crear elementos de la línea de tiempo
    timelineData.forEach(item => {
        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-event">${item.event}</div>
        `;

        timelineContainer.appendChild(timelineItem);
    });

    // Agregar manejadores de eventos para el menú
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index < timelineData.length) {
                const data = timelineData[index];
                typeCode(data.code);
                updatePreview(data.preview);
                updateStatusBar(item.textContent);
                
                // Actualizar item activo
                document.querySelectorAll('.timeline-item').forEach((ti, i) => {
                    ti.classList.toggle('active', i === index);
                });
            }
        });
    });

    // También actualizar cuando se hace clic en los items de la línea de tiempo
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            const data = timelineData[index];
            typeCode(data.code);
            updatePreview(data.preview);
            updateStatusBar(`Timeline: ${data.year}`);
            
            // Actualizar item activo
            document.querySelectorAll('.timeline-item').forEach((ti, i) => {
                ti.classList.toggle('active', i === index);
            });
        });
    });
});
