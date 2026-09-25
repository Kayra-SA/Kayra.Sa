/* =========================================================
   KAYRA
   MAIN SLIDES + EXPLORATION SYSTEM
   ========================================================= */

"use strict";

/* =========================================================
   DOM
   ========================================================= */

const slides = [...document.querySelectorAll(".slide")];

const desktopNavButtons = [
    ...document.querySelectorAll(".desktop-nav [data-slide]")
];

const mobileNavButtons = [
    ...document.querySelectorAll(".mobile-nav [data-slide]")
];

const previousSlideButton = document.getElementById("previousSlide");
const nextSlideButton = document.getElementById("nextSlide");
const slideCounter = document.getElementById("slideCounter");

const slideContainer = document.getElementById("slideContainer");

const explorationScreen =
    document.getElementById("explorationScreen");

const explorationContent =
    document.getElementById("explorationContent");

const explorationBack =
    document.getElementById("explorationBack");

const generationOverlay =
    document.getElementById("generationOverlay");

const generationBarFill =
    document.getElementById("generationBarFill");

const generationPercent =
    document.getElementById("generationPercent");

const generationStatus =
    document.getElementById("generationStatus");

const generationRing =
    document.getElementById("generationRing");

const startExploringButton =
    document.getElementById("startExploringButton");


/* =========================================================
   STATE
   ========================================================= */

let currentSlide = 0;

let currentExplorationRoute = "";
let currentExplorationData = null;

let explorationMode = "base";

let generationTimer = null;

let textAnimationTimers = [];
let cardAnimationTimers = [];

let wheelLocked = false;

let touchStartY = 0;


/* =========================================================
   SKILL DATA
   ========================================================= */

const skillData = {

    communication: {
        type: "skill",
        label: "COMMUNICATION",
        title: "Make your ideas impossible to misunderstand.",
        intro:
            "Communication is more than speaking. It is the ability to make an idea travel clearly from your mind to someone else's.",
        what:
            "Build clearer speaking, writing, listening, presentation and interpersonal communication.",
        why:
            "Strong communication improves almost every academic, professional and personal environment.",
        start:
            "Start by explaining one idea every day in the simplest way possible.",
        roadmap: [
            "Learn active listening",
            "Improve vocabulary and clarity",
            "Practice structured speaking",
            "Write short explanations",
            "Practice presentations",
            "Ask for feedback",
            "Communicate under pressure"
        ],
        advanced: [
            "Persuasive communication",
            "Public speaking",
            "Negotiation",
            "Storytelling",
            "Leadership communication",
            "Professional writing",
            "Conflict communication"
        ]
    },

    creativity: {
        type: "skill",
        label: "CREATIVITY",
        title: "Build ideas that did not exist before.",
        intro:
            "Creativity is the ability to connect ideas, experiment with possibilities and create something new.",
        what:
            "Develop imagination, experimentation, visual thinking and original problem solving.",
        why:
            "Creative thinking allows you to approach familiar problems from unfamiliar directions.",
        start:
            "Take an ordinary problem and write down ten different solutions.",
        roadmap: [
            "Observe your surroundings",
            "Collect interesting ideas",
            "Practice brainstorming",
            "Experiment without judging",
            "Combine unrelated ideas",
            "Create small projects",
            "Review and improve"
        ],
        advanced: [
            "Design thinking",
            "Creative strategy",
            "Innovation systems",
            "Concept development",
            "Creative leadership",
            "Visual storytelling",
            "Product ideation"
        ]
    },

    "problem-solving": {
        type: "skill",
        label: "PROBLEM SOLVING",
        title: "Stop seeing problems. Start seeing systems.",
        intro:
            "Problem solving is the ability to break complicated situations into understandable pieces and work toward a solution.",
        what:
            "Learn analysis, decomposition, experimentation and decision making.",
        why:
            "Almost every field rewards people who can understand problems and systematically improve situations.",
        start:
            "Take a real problem and divide it into smaller problems.",
        roadmap: [
            "Define the problem",
            "Find the cause",
            "Break it into parts",
            "Generate possible solutions",
            "Test one solution",
            "Study the result",
            "Iterate"
        ],
        advanced: [
            "Systems thinking",
            "Root cause analysis",
            "Decision frameworks",
            "Optimization",
            "Strategic problem solving",
            "Complex systems",
            "Scenario planning"
        ]
    },

    "critical-thinking": {
        type: "skill",
        label: "CRITICAL THINKING",
        title: "Question what you think you know.",
        intro:
            "Critical thinking means examining information carefully instead of accepting every claim immediately.",
        what:
            "Develop reasoning, evidence evaluation, logical thinking and intellectual independence.",
        why:
            "It helps you make better decisions when information is incomplete, emotional or contradictory.",
        start:
            "Whenever you see a claim, ask: what evidence supports it?",
        roadmap: [
            "Separate facts from opinions",
            "Identify assumptions",
            "Check evidence",
            "Compare viewpoints",
            "Detect logical errors",
            "Challenge your conclusion",
            "Make evidence-based decisions"
        ],
        advanced: [
            "Formal reasoning",
            "Argument analysis",
            "Research evaluation",
            "Decision theory",
            "Bias detection",
            "Scientific reasoning",
            "Strategic analysis"
        ]
    },

    leadership: {
        type: "skill",
        label: "LEADERSHIP",
        title: "Learn to move people toward an idea.",
        intro:
            "Leadership is not simply being in charge. It is the ability to create direction, responsibility and trust.",
        what:
            "Develop responsibility, teamwork, decision making and influence.",
        why:
            "Leadership becomes useful whenever people need to coordinate around a shared objective.",
        start:
            "Take responsibility for one small project and finish it properly.",
        roadmap: [
            "Build self-discipline",
            "Learn responsibility",
            "Practice teamwork",
            "Communicate expectations",
            "Make decisions",
            "Handle disagreement",
            "Lead a project"
        ],
        advanced: [
            "Team leadership",
            "Strategic leadership",
            "Organizational behavior",
            "Delegation",
            "Leadership psychology",
            "Vision building",
            "Executive communication"
        ]
    },

    "digital-literacy": {
        type: "skill",
        label: "DIGITAL LITERACY",
        title: "Understand the tools shaping your world.",
        intro:
            "Digital literacy means knowing how to understand, use and evaluate modern digital tools.",
        what:
            "Build confidence with technology, information, online tools and digital workflows.",
        why:
            "Technology touches almost every modern academic and professional environment.",
        start:
            "Learn one digital tool deeply instead of learning ten superficially.",
        roadmap: [
            "Understand digital basics",
            "Improve online research",
            "Learn productivity tools",
            "Understand data",
            "Explore programming",
            "Learn digital security",
            "Build something"
        ],
        advanced: [
            "Programming",
            "Data analysis",
            "Artificial intelligence",
            "Cybersecurity",
            "Automation",
            "Digital product development",
            "Technical research"
        ]
    },

    adaptability: {
        type: "skill",
        label: "ADAPTABILITY",
        title: "Become comfortable with change.",
        intro:
            "Adaptability is the ability to continue learning and functioning when circumstances change.",
        what:
            "Build flexibility, resilience, learning speed and openness to new situations.",
        why:
            "The skills and environments around you will continue changing throughout your life.",
        start:
            "Learn something completely outside your normal routine.",
        roadmap: [
            "Try unfamiliar activities",
            "Accept useful feedback",
            "Learn from mistakes",
            "Practice changing plans",
            "Build learning habits",
            "Work outside your comfort zone",
            "Reflect and adapt"
        ],
        advanced: [
            "Rapid learning",
            "Change management",
            "Resilience",
            "Cross-disciplinary thinking",
            "Uncertainty management",
            "Strategic flexibility",
            "Continuous improvement"
        ]
    }

};


/* =========================================================
   PATHWAY DATA
   ========================================================= */

const pathwayData = {

    after10th: {
        type: "pathway",
        label: "AFTER 10TH",
        title: "Choose the direction that fits your future.",
        intro:
            "Your choices after 10th can open very different academic and professional routes.",
        choices: [
            {
                label: "SCIENCE",
                route: "pathway/after10th/science"
            },
            {
                label: "COMMERCE",
                route: "pathway/after10th/commerce"
            },
            {
                label: "HUMANITIES",
                route: "pathway/after10th/humanities"
            },
            {
                label: "VOCATIONAL",
                route: "pathway/after10th/vocational"
            }
        ]
    },

    science: {
        type: "pathway",
        label: "SCIENCE",
        title: "Build a foundation around scientific thinking.",
        intro:
            "Science pathways can lead toward engineering, medicine, research, technology and many other fields.",
        choices: [
            {
                label: "PCM",
                route: "pathway/after10th/science/pcm"
            },
            {
                label: "PCB",
                route: "pathway/after10th/science/pcb"
            },
            {
                label: "PCMB",
                route: "pathway/after10th/science/pcmb"
            }
        ]
    },

    pcm: {
        type: "pathway",
        label: "PCM",
        title: "Physics. Chemistry. Mathematics.",
        intro:
            "PCM is commonly associated with engineering, technology, mathematics, physics and related fields.",
        roadmap: [
            "Build mathematics fundamentals",
            "Strengthen physics concepts",
            "Understand chemistry",
            "Explore engineering fields",
            "Explore technology",
            "Research entrance requirements",
            "Build projects"
        ]
    },

    pcb: {
        type: "pathway",
        label: "PCB",
        title: "Physics. Chemistry. Biology.",
        intro:
            "PCB creates a foundation for biology-focused academic and professional routes.",
        roadmap: [
            "Build biology fundamentals",
            "Strengthen chemistry",
            "Understand physics",
            "Explore healthcare",
            "Explore biological sciences",
            "Research course requirements",
            "Build academic experience"
        ]
    },

    pcmb: {
        type: "pathway",
        label: "PCMB",
        title: "Keep both directions open.",
        intro:
            "PCMB combines physics, chemistry, mathematics and biology, allowing exploration across multiple science routes.",
        roadmap: [
            "Build mathematics",
            "Strengthen biology",
            "Understand physics",
            "Understand chemistry",
            "Explore engineering",
            "Explore healthcare",
            "Compare future routes"
        ]
    },

    commerce: {
        type: "pathway",
        label: "COMMERCE",
        title: "Understand how money, markets and organizations work.",
        intro:
            "Commerce can lead toward finance, business, economics, accounting, management and entrepreneurship.",
        roadmap: [
            "Learn accounting fundamentals",
            "Understand economics",
            "Explore finance",
            "Learn business concepts",
            "Explore entrepreneurship",
            "Develop communication",
            "Research career routes"
        ]
    },

    humanities: {
        type: "pathway",
        label: "HUMANITIES",
        title: "Understand people, society and ideas.",
        intro:
            "Humanities can lead toward fields involving society, communication, law, psychology, culture and public life.",
        roadmap: [
            "Explore history",
            "Understand society",
            "Develop writing",
            "Explore psychology",
            "Study politics and civics",
            "Build research skills",
            "Explore interdisciplinary fields"
        ]
    },

    vocational: {
        type: "pathway",
        label: "VOCATIONAL",
        title: "Build practical skills for practical careers.",
        intro:
            "Vocational education can provide hands-on skills and career-focused learning.",
        roadmap: [
            "Identify practical interests",
            "Explore skill programs",
            "Build technical skills",
            "Practice through projects",
            "Gain practical experience",
            "Build a portfolio",
            "Research career opportunities"
        ]
    },

    after12th: {
        type: "pathway",
        label: "AFTER 12TH",
        title: "Turn your interests into a direction.",
        intro:
            "After 12th, your choices can become more specialized. Explore courses, degrees and career paths.",
        roadmap: [
            "Identify your interests",
            "Compare possible degrees",
            "Research institutions",
            "Understand entrance requirements",
            "Compare costs",
            "Explore scholarships",
            "Build your application"
        ]
    },

    global: {
        type: "pathway",
        label: "GLOBAL",
        title: "Explore education beyond borders.",
        intro:
            "Studying internationally involves choosing countries, institutions, programs and application strategies.",
        roadmap: [
            "Choose target countries",
            "Research universities",
            "Compare programs",
            "Check requirements",
            "Research funding",
            "Prepare applications",
            "Plan your transition"
        ]
    }

};


/* =========================================================
   TEXT ANIMATION
   ========================================================= */

/*
    IMPORTANT:

    We DO NOT animate spaces.

    Old behavior:
        "Discover"
        became
        "D i s c o v e r"

    and whitespace itself was converted into animated spans.

    That caused broken-looking text.

    New behavior:
        Letters = animated
        Spaces = normal HTML whitespace

    This keeps the sentence visually intact.
*/

function clearTextAnimationTimers() {

    textAnimationTimers.forEach(timer => {
        clearTimeout(timer);
    });

    textAnimationTimers = [];
}


function clearCardAnimationTimers() {

    cardAnimationTimers.forEach(timer => {
        clearTimeout(timer);
    });

    cardAnimationTimers = [];
}


function prepareTextAnimation() {

    const animatedElements = document.querySelectorAll(
        ".animated-heading, .animate-text, .eyebrow"
    );

    animatedElements.forEach(element => {

        if (element.dataset.textPrepared === "true") {
            return;
        }

        wrapTextNodes(element);

        element.dataset.textPrepared = "true";
    });
}


function wrapTextNodes(root) {

    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {

                const parent = node.parentElement;

                if (!parent) {
                    return NodeFilter.FILTER_REJECT;
                }

                if (
                    parent.closest(
                        ".char, .word, script, style, svg, .instagram-icon"
                    )
                ) {
                    return NodeFilter.FILTER_REJECT;
                }

                if (!node.nodeValue.trim()) {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    const nodes = [];

    let node;

    while ((node = walker.nextNode())) {
        nodes.push(node);
    }

    nodes.forEach(textNode => {

        const fragment = document.createDocumentFragment();

        const text = textNode.nodeValue;

        /*
            Split into:
            - whitespace
            - actual words

            Whitespace is left untouched.
        */

        const parts = text.split(/(\s+)/);

        parts.forEach(part => {

            if (!part) {
                return;
            }

            if (/^\s+$/.test(part)) {

                fragment.appendChild(
                    document.createTextNode(part)
                );

                return;
            }

            const word = document.createElement("span");

            word.className = "word";

            [...part].forEach(character => {

                const char = document.createElement("span");

                char.className = "char";

                char.textContent = character;

                word.appendChild(char);
            });

            fragment.appendChild(word);
        });

        textNode.parentNode.replaceChild(
            fragment,
            textNode
        );
    });
}


function resetAnimatedText(slide) {

    slide
        .querySelectorAll(".char-visible")
        .forEach(char => {

            char.classList.remove("char-visible");
        });
}


function animateSlideText(slide) {

    clearTextAnimationTimers();

    resetAnimatedText(slide);

    const chars = [
        ...slide.querySelectorAll(
            ".animated-heading .char, .animate-text .char, .eyebrow .char"
        )
    ];

    chars.forEach((char, index) => {

        const timer = setTimeout(() => {

            char.classList.add("char-visible");

        }, index * 14);

        textAnimationTimers.push(timer);
    });
}


/* =========================================================
   SLIDE ANIMATION
   ========================================================= */

function animateSkillCards(slide) {

    clearCardAnimationTimers();

    const cards = slide.querySelectorAll(".skill-card");

    cards.forEach(card => {

        card.classList.remove("skill-card-visible");

        const timer = setTimeout(() => {

            card.classList.add("skill-card-visible");

        }, 80 + cards.length * 10);

        cardAnimationTimers.push(timer);
    });
}


/* =========================================================
   SLIDE UI
   ========================================================= */

function updateSlideCounter() {

    if (!slideCounter) {
        return;
    }

    const current = String(currentSlide + 1).padStart(2, "0");
    const total = String(slides.length).padStart(2, "0");

    slideCounter.textContent = `${current} / ${total}`;
}


function updateNavigation() {

    [
        ...desktopNavButtons,
        ...mobileNavButtons
    ].forEach(button => {

        const target = Number(button.dataset.slide);

        const active = target === currentSlide;

        button.classList.toggle("active", active);

        button.setAttribute(
            "aria-current",
            active ? "page" : "false"
        );
    });
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function closeMobileMenu() {

    document.body.classList.remove("mobile-menu-open");

    const menuToggle =
        document.querySelector(".mobile-menu-toggle");

    if (menuToggle) {
        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}


function openMobileMenu() {

    document.body.classList.add("mobile-menu-open");

    const menuToggle =
        document.querySelector(".mobile-menu-toggle");

    if (menuToggle) {
        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );
    }
}


/* =========================================================
   SLIDES
   ========================================================= */

function setSlideVisibility(index) {

    slides.forEach((slide, slideIndex) => {

        const active = slideIndex === index;

        slide.classList.toggle(
            "active",
            active
        );

        /*
            THIS IS IMPORTANT.

            Even if CSS accidentally fails to hide inactive slides,
            the browser itself will hide them.

            Therefore only ONE slide can exist visually at once.
        */

        slide.hidden = !active;

        slide.setAttribute(
            "aria-hidden",
            String(!active)
        );
    });
}


function goToSlide(index, updateHash = true) {

    if (!slides.length) {
        return;
    }

    index = Math.max(
        0,
        Math.min(index, slides.length - 1)
    );

    clearTextAnimationTimers();
    clearCardAnimationTimers();

    currentSlide = index;

    setSlideVisibility(currentSlide);

    updateSlideCounter();
    updateNavigation();

    closeMobileMenu();

    if (explorationScreen) {
        explorationScreen.classList.remove("active");
    }

    document.body.classList.remove(
        "exploration-open"
    );

    currentExplorationRoute = "";
    currentExplorationData = null;
    explorationMode = "base";

    if (generationTimer) {
        clearInterval(generationTimer);
        generationTimer = null;
    }

    if (generationOverlay) {
        generationOverlay.classList.remove("active");
    }

    /*
        Stop the browser from physically scrolling to another
        part of the document.
    */

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });

    requestAnimationFrame(() => {

        const activeSlide = slides[currentSlide];

        if (!activeSlide) {
            return;
        }

        animateSlideText(activeSlide);

        animateSkillCards(activeSlide);
    });

    if (updateHash) {

        const newHash = `#slide-${currentSlide}`;

        if (window.location.hash !== newHash) {

            history.replaceState(
                null,
                "",
                newHash
            );
        }
    }
}


function nextSlide() {

    if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
    }
}


function previousSlide() {

    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}


/* =========================================================
   ROUTES
   ========================================================= */

function normalizeRoute(route) {

    if (!route) {
        return "";
    }

    return route
        .replace(/^#/, "")
        .replace(/^\/+|\/+$/g, "")
        .replace(/\s+/g, "")
        .toLowerCase();
}


function getRouteData(route) {

    const cleanRoute = normalizeRoute(route);

    if (!cleanRoute) {
        return null;
    }

    const parts = cleanRoute.split("/");

    if (parts[0] === "skill") {

        const key = parts
            .slice(1)
            .join("-");

        return (
            skillData[key] ||
            skillData[parts[1]] ||
            null
        );
    }


    if (parts[0] === "pathway") {

        const remaining = parts.slice(1);

        /*
            Try the complete route first.
        */

        const fullKey = remaining.join("-");

        if (pathwayData[fullKey]) {
            return pathwayData[fullKey];
        }

        /*
            Then search from the deepest route backwards.

            Example:

            pathway/after10th/science/pcm

            checks:

            after10th-science-pcm
            science-pcm
            pcm
        */

        for (
            let start = 0;
            start < remaining.length;
            start++
        ) {

            const key = remaining
                .slice(start)
                .join("-");

            if (pathwayData[key]) {
                return pathwayData[key];
            }
        }

        /*
            Final fallback:
            find the last matching segment.
        */

        for (
            let i = remaining.length - 1;
            i >= 0;
            i--
        ) {

            if (pathwayData[remaining[i]]) {
                return pathwayData[remaining[i]];
            }
        }
    }

    return null;
}


function navigateToRoute(route) {

    const normalized = normalizeRoute(route);

    const data = getRouteData(normalized);

    if (!data) {
        return false;
    }

    openExploration(normalized);

    return true;
}


/* =========================================================
   EXPLORATION
   ========================================================= */

function openExploration(route) {

    const normalizedRoute =
        normalizeRoute(route);

    const data =
        getRouteData(normalizedRoute);

    if (!data) {
        return;
    }

    currentExplorationRoute =
        normalizedRoute;

    currentExplorationData =
        data;

    explorationMode = "base";

    if (!explorationScreen) {
        return;
    }

    explorationScreen.classList.add("active");

    document.body.classList.add(
        "exploration-open"
    );

    renderExploration();

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });
}


function closeExploration() {

    if (generationTimer) {

        clearInterval(generationTimer);

        generationTimer = null;
    }

    if (generationOverlay) {
        generationOverlay.classList.remove("active");
    }

    if (explorationScreen) {
        explorationScreen.classList.remove("active");
    }

    document.body.classList.remove(
        "exploration-open"
    );

    currentExplorationRoute = "";
    currentExplorationData = null;

    explorationMode = "base";
}


function getParentRoute(route) {

    const parts =
        normalizeRoute(route).split("/");

    if (parts.length <= 1) {
        return "";
    }

    parts.pop();

    return parts.join("/");
}


/* =========================================================
   EXPLORATION BACK
   ========================================================= */

function explorationBackAction() {

    /*
        If the user is looking at the advanced roadmap,
        first return to the normal exploration page.
    */

    if (explorationMode === "advanced") {

        explorationMode = "base";

        renderExploration();

        return;
    }


    const parent =
        getParentRoute(currentExplorationRoute);

    if (parent) {

        navigateToRoute(parent);

        return;
    }


    if (
        currentExplorationData &&
        currentExplorationData.type === "skill"
    ) {

        closeExploration();

        goToSlide(2);

        return;
    }


    if (
        currentExplorationData &&
        currentExplorationData.type === "pathway"
    ) {

        closeExploration();

        goToSlide(3);

        return;
    }

    closeExploration();
}


/* =========================================================
   EXPLORATION RENDERING
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function renderExploration() {

    if (
        !explorationContent ||
        !currentExplorationData
    ) {
        return;
    }

    const data =
        currentExplorationData;


    const choicesHTML =
        data.choices
            ? `
                <div class="exploration-choices">
                    ${data.choices.map(choice => `
                        <button
                            class="exploration-choice"
                            data-route="${escapeHTML(choice.route)}"
                            type="button"
                        >
                            <span>${escapeHTML(choice.label)}</span>
                            <span class="choice-arrow">→</span>
                        </button>
                    `).join("")}
                </div>
            `
            : "";


    const roadmapHTML =
        data.roadmap
            ? `
                <section class="exploration-roadmap">

                    <div class="exploration-section-label">
                        ROADMAP
                    </div>

                    <div class="roadmap-list">

                        ${data.roadmap.map((item, index) => `
                            <div class="roadmap-item">

                                <span class="roadmap-number">
                                    ${String(index + 1).padStart(2, "0")}
                                </span>

                                <span class="roadmap-text">
                                    ${escapeHTML(item)}
                                </span>

                            </div>
                        `).join("")}

                    </div>

                </section>
            `
            : "";


    const whatHTML =
        data.what
            ? `
                <section class="exploration-info">

                    <span class="exploration-section-label">
                        WHAT YOU BUILD
                    </span>

                    <p>${escapeHTML(data.what)}</p>

                </section>
            `
            : "";


    const whyHTML =
        data.why
            ? `
                <section class="exploration-info">

                    <span class="exploration-section-label">
                        WHY IT MATTERS
                    </span>

                    <p>${escapeHTML(data.why)}</p>

                </section>
            `
            : "";


    const startHTML =
        data.start
            ? `
                <section class="exploration-info">

                    <span class="exploration-section-label">
                        START HERE
                    </span>

                    <p>${escapeHTML(data.start)}</p>

                </section>
            `
            : "";


    const advancedHTML =
        data.advanced
            ? `
                <button
                    class="advanced-roadmap-button"
                    data-action="advanced"
                    type="button"
                >
                    GENERATE ADVANCED ROADMAP
                    <span>→</span>
                </button>
            `
            : "";


    explorationContent.innerHTML = `

        <div class="exploration-header">

            <span class="exploration-label">
                ${escapeHTML(data.label)}
            </span>

            <h1>
                ${escapeHTML(data.title)}
            </h1>

            <p class="exploration-intro">
                ${escapeHTML(data.intro)}
            </p>

        </div>

        ${choicesHTML}

        ${whatHTML}

        ${whyHTML}

        ${startHTML}

        ${roadmapHTML}

        ${advancedHTML}

    `;


    /*
        Animate newly created text without
        breaking spaces.
    */

    prepareTextAnimation();

    requestAnimationFrame(() => {

        animateSlideText(explorationContent);

    });
}


/* =========================================================
   ADVANCED ROADMAP
   ========================================================= */

function generateAdvancedRoadmap() {

    if (
        !currentExplorationData ||
        !currentExplorationData.advanced
    ) {
        return;
    }

    if (!generationOverlay) {
        return;
    }

    if (generationTimer) {

        clearInterval(generationTimer);

        generationTimer = null;
    }

    generationOverlay.classList.add("active");

    let progress = 0;

    const statuses = [
        "ANALYSING YOUR PATH",
        "MAPPING SKILL DEPENDENCIES",
        "BUILDING LEARNING SEQUENCE",
        "CALCULATING NEXT STEPS",
        "FINALISING ROADMAP"
    ];


    if (generationBarFill) {
        generationBarFill.style.width = "0%";
    }

    if (generationPercent) {
        generationPercent.textContent = "0%";
    }

    if (generationStatus) {
        generationStatus.textContent =
            statuses[0];
    }

    if (generationRing) {
        generationRing.style.setProperty(
            "--progress",
            "0"
        );
    }


    generationTimer = setInterval(() => {

        progress += Math.floor(
            Math.random() * 5
        ) + 2;

        if (progress >= 100) {
            progress = 100;
        }


        if (generationBarFill) {
            generationBarFill.style.width =
                `${progress}%`;
        }


        if (generationPercent) {
            generationPercent.textContent =
                `${progress}%`;
        }


        if (generationRing) {

            generationRing.style.setProperty(
                "--progress",
                progress
            );
        }


        const statusIndex =
            Math.min(
                statuses.length - 1,
                Math.floor(progress / 20)
            );

        if (generationStatus) {

            generationStatus.textContent =
                statuses[statusIndex];
        }


        if (progress >= 100) {

            clearInterval(generationTimer);

            generationTimer = null;

            setTimeout(() => {

                if (
                    !currentExplorationData ||
                    !explorationScreen.classList.contains("active")
                ) {
                    return;
                }

                generationOverlay.classList.remove(
                    "active"
                );

                renderAdvancedRoadmap();

            }, 500);
        }

    }, 90);
}


/* =========================================================
   ADVANCED ROADMAP SCREEN
   ========================================================= */

function renderAdvancedRoadmap() {

    if (
        !explorationContent ||
        !currentExplorationData ||
        !currentExplorationData.advanced
    ) {
        return;
    }

    explorationMode = "advanced";

    const data =
        currentExplorationData;


    explorationContent.innerHTML = `

        <div class="exploration-header">

            <span class="exploration-label">
                ADVANCED ROADMAP
            </span>

            <h1>
                Your next level.
            </h1>

            <p class="exploration-intro">
                A deeper progression path built around
                the direction you selected.
            </p>

        </div>


        <section class="exploration-roadmap">

            <div class="roadmap-list">

                ${data.advanced.map((item, index) => `

                    <div class="roadmap-item">

                        <span class="roadmap-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <span class="roadmap-text">
                            ${escapeHTML(item)}
                        </span>

                    </div>

                `).join("")}

            </div>

        </section>


        <div class="advanced-checkpoint">

            <span>
                CHECKPOINT
            </span>

            <p>
                Do not rush the roadmap.
                Build each layer before moving forward.
            </p>

        </div>


        <button
            class="advanced-roadmap-button"
            data-action="back-base"
            type="button"
        >
            RETURN TO ROADMAP
            <span>←</span>
        </button>

    `;


    requestAnimationFrame(() => {

        animateSlideText(explorationContent);

    });
}


/* =========================================================
   EXPLORATION EVENTS
   ========================================================= */

if (explorationContent) {

    explorationContent.addEventListener(
        "click",
        event => {

            const routeButton =
                event.target.closest("[data-route]");

            if (routeButton) {

                const route =
                    routeButton.dataset.route;

                navigateToRoute(route);

                return;
            }


            const actionButton =
                event.target.closest("[data-action]");

            if (!actionButton) {
                return;
            }


            const action =
                actionButton.dataset.action;


            if (action === "advanced") {

                generateAdvancedRoadmap();

                return;
            }


            if (action === "back-base") {

                explorationMode = "base";

                renderExploration();

                return;
            }

        }
    );
}


/* =========================================================
   EXPLORATION BACK BUTTON
   ========================================================= */

if (explorationBack) {

    explorationBack.addEventListener(
        "click",
        explorationBackAction
    );
}


/* =========================================================
   DESKTOP NAV
   ========================================================= */

desktopNavButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const index =
                Number(button.dataset.slide);

            goToSlide(index);

        }
    );
});


/* =========================================================
   MOBILE NAV
   ========================================================= */

mobileNavButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const index =
                Number(button.dataset.slide);

            goToSlide(index);

            closeMobileMenu();

        }
    );
});


/* =========================================================
   SLIDE TARGET BUTTONS
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("[data-slide-target]");

        if (!button) {
            return;
        }

        const target =
            Number(button.dataset.slideTarget);

        if (!Number.isNaN(target)) {

            goToSlide(target);

        }
    }
);


/* =========================================================
   MOBILE MENU BUTTON
   ========================================================= */

const mobileMenuToggle =
    document.querySelector(".mobile-menu-toggle");

if (mobileMenuToggle) {

    mobileMenuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                document.body.classList.contains(
                    "mobile-menu-open"
                );

            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }

        }
    );
}


/* =========================================================
   PREVIOUS / NEXT
   ========================================================= */

if (previousSlideButton) {

    previousSlideButton.addEventListener(
        "click",
        previousSlide
    );
}


if (nextSlideButton) {

    nextSlideButton.addEventListener(
        "click",
        nextSlide
    );
}


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
            Do not control slides while an exploration
            overlay is open.
        */

        if (
            explorationScreen &&
            explorationScreen.classList.contains("active")
        ) {

            if (event.key === "Escape") {
                closeExploration();
            }

            return;
        }


        if (
            event.key === "ArrowRight" ||
            event.key === "PageDown"
        ) {

            event.preventDefault();

            nextSlide();

            return;
        }


        if (
            event.key === "ArrowLeft" ||
            event.key === "PageUp"
        ) {

            event.preventDefault();

            previousSlide();

            return;
        }


        if (event.key === "Home") {

            event.preventDefault();

            goToSlide(0);

            return;
        }


        if (event.key === "End") {

            event.preventDefault();

            goToSlide(slides.length - 1);

        }

    }
);


/* =========================================================
   WHEEL
   ========================================================= */

/*
    IMPORTANT:

    The wheel NO LONGER changes slides.

    This means scrolling cannot move the user through
    the presentation.

    CSS also needs overflow hidden, which is included
    in the CSS patch I give below.
*/

document.addEventListener(
    "wheel",
    event => {

        event.preventDefault();

    },
    {
        passive: false
    }
);


/* =========================================================
   TOUCH
   ========================================================= */

/*
    Touch scrolling is also blocked.

    The user must use the navigation buttons.
*/

document.addEventListener(
    "touchstart",
    event => {

        touchStartY =
            event.touches[0].clientY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchmove",
    event => {

        event.preventDefault();

    },
    {
        passive: false
    }
);


document.addEventListener(
    "touchend",
    event => {

        /*
            Deliberately do nothing.

            Swiping does NOT change slides.
        */

        touchStartY = 0;

    },
    {
        passive: true
    }
);


/* =========================================================
   HASH ROUTING
   ========================================================= */

function handleHash() {

    const hash =
        window.location.hash;

    if (!hash) {

        goToSlide(0, false);

        return;
    }


    const cleanHash =
        hash.replace("#", "");


    if (
        cleanHash.startsWith("slide-")
    ) {

        const index =
            Number(
                cleanHash.replace(
                    "slide-",
                    ""
                )
            );

        if (
            Number.isInteger(index) &&
            index >= 0 &&
            index < slides.length
        ) {

            goToSlide(
                index,
                false
            );

            return;
        }
    }


    /*
        Support direct exploration links.
    */

    if (
        cleanHash.startsWith("skill/") ||
        cleanHash.startsWith("pathway/")
    ) {

        navigateToRoute(cleanHash);

        return;
    }


    goToSlide(0, false);
}


window.addEventListener(
    "hashchange",
    handleHash
);


/* =========================================================
   START EXPLORING
   ========================================================= */

if (startExploringButton) {

    startExploringButton.addEventListener(
        "click",
        () => {

            goToSlide(3);

        }
    );
}


/* =========================================================
   HARD SCROLL LOCK
   ========================================================= */

/*
    JS fallback for browsers.

    CSS will also lock:
        html
        body
        #slideContainer
*/

document.documentElement.style.overflow = "hidden";
document.body.style.overflow = "hidden";
document.body.style.height = "100vh";


/* =========================================================
   INITIALIZE
   ========================================================= */

function initialize() {

    /*
        Make absolutely sure that only one slide
        can be displayed.
    */

    slides.forEach((slide, index) => {

        const active =
            index === 0;

        slide.hidden = !active;

        slide.classList.toggle(
            "active",
            active
        );

        slide.setAttribute(
            "aria-hidden",
            String(!active)
        );
    });


    prepareTextAnimation();

    handleHash();

    updateSlideCounter();

    updateNavigation();


    /*
        Start K glow / orbit animation.
        CSS handles the actual visual animation.
        JS only makes sure the hero starts in
        the correct state.
    */

    document.body.classList.add(
        "kayra-ready"
    );
}


if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initialize
    );

} else {

    initialize();
}
