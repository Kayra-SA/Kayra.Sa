/* =========================================
   KAYRA
   MAIN JAVASCRIPT
========================================= */

/* =========================================
   MAIN ELEMENTS
========================================= */

const slides = Array.from(document.querySelectorAll(".slide"));

const navButtons = document.querySelectorAll(".nav-links button");
const mobileNavButtons = document.querySelectorAll(".mobile-nav-link");

const previousButton = document.getElementById("previousSlide");
const nextButton = document.getElementById("nextSlide");
const slideCounter = document.getElementById("slideCounter");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


/* =========================================
   EXPLORATION ELEMENTS
========================================= */

const explorationScreen =
    document.getElementById("explorationScreen");

/*
    IMPORTANT:
    The HTML uses explorationContent.
*/
const explorationView =
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


/* =========================================
   STATE
========================================= */

let currentSlide = 0;

let currentExplorationRoute = "";
let currentExplorationData = null;

let generationTimer = null;


/* =========================================
   SKILL DATA
========================================= */

const skillData = {

    communication: {
        type: "SKILL",
        label: "SKILL 01",
        title: "COMMUNICATION",
        intro:
            "The ability to express ideas clearly, understand others, and turn thoughts into meaningful conversations.",

        what:
            "Communication includes speaking, writing, listening, presenting, explaining, questioning, and understanding different perspectives.",

        why:
            "Strong communication helps you collaborate, lead projects, build relationships, handle interviews, and make your ideas understood.",

        start:
            "Start by explaining one idea every day in a simple and structured way. Practice listening before responding.",

        roadmap: [
            "Understand the fundamentals of clear communication",
            "Improve active listening and questioning",
            "Practice structured speaking and writing",
            "Learn presentation and public-speaking techniques",
            "Apply communication in real-world situations"
        ],

        advanced: [
            "Build professional communication habits",
            "Develop persuasive speaking techniques",
            "Practice advanced presentation structures",
            "Learn negotiation and conflict communication",
            "Build professional writing skills",
            "Develop interview and networking communication",
            "Apply communication in leadership environments"
        ]
    },


    creativity: {
        type: "SKILL",
        label: "SKILL 02",
        title: "CREATIVITY",
        intro:
            "The ability to generate original ideas, explore possibilities, and approach problems from new perspectives.",

        what:
            "Creativity is not limited to art. It appears in design, technology, writing, entrepreneurship, problem-solving, science, and everyday decision-making.",

        why:
            "Creative thinking helps you discover alternatives when the obvious answer is not enough.",

        start:
            "Take one ordinary problem and write down five different ways to solve it.",

        roadmap: [
            "Understand divergent and convergent thinking",
            "Practice generating multiple solutions",
            "Explore creative observation",
            "Experiment with different mediums",
            "Build a portfolio of creative work"
        ],

        advanced: [
            "Develop structured ideation systems",
            "Study design-thinking principles",
            "Practice creative problem decomposition",
            "Build experimental projects",
            "Learn rapid prototyping",
            "Develop creative research habits",
            "Create a long-term creative portfolio"
        ]
    },


    "problem-solving": {
        type: "SKILL",
        label: "SKILL 03",
        title: "PROBLEM SOLVING",
        intro:
            "The ability to understand a problem, break it down, and create a practical path toward a solution.",

        what:
            "Problem solving involves identifying causes, separating useful information from noise, testing possibilities, and evaluating results.",

        why:
            "Almost every academic, technical, professional, and real-world environment requires some form of problem solving.",

        start:
            "When facing a difficult problem, stop and divide it into smaller problems before trying to solve it.",

        roadmap: [
            "Learn how to identify the actual problem",
            "Break complex problems into smaller parts",
            "Generate and compare possible solutions",
            "Test solutions systematically",
            "Review failures and improve the process"
        ],

        advanced: [
            "Master structured problem decomposition",
            "Learn root-cause analysis",
            "Practice decision frameworks",
            "Develop hypothesis-driven thinking",
            "Work through complex case studies",
            "Build real-world solution projects",
            "Develop repeatable problem-solving systems"
        ]
    },


    "critical-thinking": {
        type: "SKILL",
        label: "SKILL 04",
        title: "CRITICAL THINKING",
        intro:
            "The ability to examine information carefully, question assumptions, and form conclusions using evidence.",

        what:
            "Critical thinking means evaluating evidence, identifying assumptions, recognizing weak reasoning, and separating facts from interpretations.",

        why:
            "It helps you make better decisions instead of accepting information simply because it sounds convincing.",

        start:
            "Whenever you encounter a claim, ask: What is the evidence? What assumptions are being made?",

        roadmap: [
            "Learn to separate facts from opinions",
            "Identify assumptions and biases",
            "Evaluate evidence and sources",
            "Recognize common reasoning errors",
            "Practice evidence-based conclusions"
        ],

        advanced: [
            "Study advanced reasoning frameworks",
            "Analyze complex arguments",
            "Evaluate conflicting evidence",
            "Practice source verification",
            "Develop uncertainty awareness",
            "Work through analytical case studies",
            "Apply critical thinking to real decisions"
        ]
    },


    leadership: {
        type: "SKILL",
        label: "SKILL 05",
        title: "LEADERSHIP",
        intro:
            "The ability to guide people, take responsibility, create direction, and help a team move toward a shared goal.",

        what:
            "Leadership includes communication, decision-making, accountability, teamwork, conflict management, and creating a clear direction.",

        why:
            "Leadership becomes valuable whenever you need to coordinate people or take responsibility for an outcome.",

        start:
            "Take responsibility for one small project and focus on helping everyone involved succeed.",

        roadmap: [
            "Understand the fundamentals of leadership",
            "Improve teamwork and delegation",
            "Develop decision-making skills",
            "Learn conflict-management techniques",
            "Lead a real project from beginning to end"
        ],

        advanced: [
            "Develop leadership communication",
            "Learn strategic delegation",
            "Practice team decision-making",
            "Study conflict-resolution frameworks",
            "Build project leadership experience",
            "Develop accountability systems",
            "Lead increasingly complex projects"
        ]
    },


    "digital-literacy": {
        type: "SKILL",
        label: "SKILL 06",
        title: "DIGITAL LITERACY",
        intro:
            "The ability to confidently understand, use, evaluate, and create with modern digital tools.",

        what:
            "Digital literacy includes online research, productivity tools, digital communication, cybersecurity awareness, data handling, and technology fundamentals.",

        why:
            "Technology is now part of almost every academic and professional direction.",

        start:
            "Choose one unfamiliar digital tool and learn how to use its basic features.",

        roadmap: [
            "Understand digital fundamentals",
            "Improve online research skills",
            "Learn productivity and collaboration tools",
            "Understand basic cybersecurity",
            "Build useful digital projects"
        ],

        advanced: [
            "Develop advanced digital workflows",
            "Learn data organization and analysis",
            "Study cybersecurity fundamentals",
            "Build technology-based projects",
            "Learn automation concepts",
            "Develop digital collaboration systems",
            "Create a professional digital portfolio"
        ]
    },


    adaptability: {
        type: "SKILL",
        label: "SKILL 07",
        title: "ADAPTABILITY",
        intro:
            "The ability to respond effectively when situations, expectations, environments, or goals change.",

        what:
            "Adaptability involves learning quickly, adjusting plans, handling uncertainty, and remaining productive when circumstances change.",

        why:
            "Education and careers rarely follow a perfectly predictable path.",

        start:
            "When a plan changes, identify what remains under your control and create a new approach.",

        roadmap: [
            "Understand how change affects decision-making",
            "Practice flexible planning",
            "Improve learning speed",
            "Develop uncertainty-management habits",
            "Apply adaptability to real situations"
        ],

        advanced: [
            "Build flexible planning systems",
            "Develop rapid-learning techniques",
            "Practice scenario planning",
            "Learn uncertainty-management frameworks",
            "Work through changing project requirements",
            "Build resilient workflows",
            "Create long-term adaptive strategies"
        ]
    }
};


/* =========================================
   PATHWAY DATA
========================================= */

const pathwayData = {

    after10th: {
        type: "PATHWAY",
        label: "PATHWAY",
        title: "AFTER 10TH",
        intro:
            "Explore the major directions available after Class 10 and understand how each can connect to future education and careers.",

        choices: [
            {
                title: "SCIENCE",
                description:
                    "Explore Physics, Chemistry, Mathematics, Biology and related academic directions.",
                route: "pathway/after10th/science"
            },
            {
                title: "COMMERCE",
                description:
                    "Explore business, economics, finance, accounting and entrepreneurship.",
                route: "pathway/after10th/commerce"
            },
            {
                title: "HUMANITIES",
                description:
                    "Explore society, psychology, history, languages, design and related fields.",
                route: "pathway/after10th/humanities"
            },
            {
                title: "VOCATIONAL",
                description:
                    "Explore practical and skill-focused educational directions.",
                route: "pathway/after10th/vocational"
            }
        ],

        roadmap: [
            "Understand your interests and strengths",
            "Explore the major subject groups",
            "Compare subjects with future directions",
            "Research eligibility and admission requirements",
            "Choose a direction based on your goals"
        ],

        advanced: [
            "Map your interests to possible fields",
            "Compare subject combinations",
            "Research higher-education requirements",
            "Identify relevant entrance examinations",
            "Build foundational skills",
            "Explore career examples",
            "Create a personalized academic direction"
        ]
    },


    science: {
        type: "PATHWAY",
        label: "AFTER 10TH / SCIENCE",
        title: "SCIENCE",
        intro:
            "Science opens several academic directions. Your subject combination can influence the fields you can explore later.",

        choices: [
            {
                title: "PCM",
                description:
                    "Physics, Chemistry and Mathematics.",
                route: "pathway/after10th/science/pcm"
            },
            {
                title: "PCB",
                description:
                    "Physics, Chemistry and Biology.",
                route: "pathway/after10th/science/pcb"
            },
            {
                title: "PCMB",
                description:
                    "Physics, Chemistry, Mathematics and Biology.",
                route: "pathway/after10th/science/pcmb"
            }
        ],

        roadmap: [
            "Understand the Science stream",
            "Compare PCM, PCB and PCMB",
            "Identify subjects you enjoy",
            "Research higher-education routes",
            "Connect subjects with career fields"
        ],

        advanced: [
            "Compare subject combinations",
            "Map subjects to university pathways",
            "Research entrance examinations",
            "Build foundational subject skills",
            "Explore possible degree options",
            "Compare academic workload",
            "Create a long-term academic plan"
        ]
    },


    pcm: {
        type: "PATHWAY",
        label: "SCIENCE / PCM",
        title: "PCM",
        intro:
            "Physics, Chemistry and Mathematics can lead toward engineering, technology, mathematics, architecture, economics and many other fields.",

        roadmap: [
            "Build strong Mathematics fundamentals",
            "Develop Physics problem-solving skills",
            "Strengthen Chemistry concepts",
            "Explore technology and engineering fields",
            "Research degree and entrance pathways"
        ],

        advanced: [
            "Strengthen advanced mathematics",
            "Develop analytical problem-solving",
            "Explore engineering disciplines",
            "Research entrance examinations",
            "Build technical projects",
            "Explore mathematics-heavy fields",
            "Create a higher-education shortlist"
        ]
    },


    pcb: {
        type: "PATHWAY",
        label: "SCIENCE / PCB",
        title: "PCB",
        intro:
            "Physics, Chemistry and Biology can lead toward medicine, life sciences, biotechnology, pharmacy and many related fields.",

        roadmap: [
            "Build strong Biology fundamentals",
            "Strengthen Chemistry concepts",
            "Develop Physics fundamentals",
            "Explore health and life-science fields",
            "Research degree and entrance pathways"
        ],

        advanced: [
            "Build advanced Biology foundations",
            "Strengthen Chemistry and Physics",
            "Research health-science pathways",
            "Explore life-science degrees",
            "Research relevant entrance examinations",
            "Compare professional and academic routes",
            "Build a long-term study plan"
        ]
    },


    pcmb: {
        type: "PATHWAY",
        label: "SCIENCE / PCMB",
        title: "PCMB",
        intro:
            "PCMB keeps both Mathematics and Biology open, giving students a broader subject base to explore later.",

        roadmap: [
            "Understand the workload of four core subjects",
            "Build balanced study habits",
            "Strengthen Mathematics and Biology",
            "Develop Physics and Chemistry fundamentals",
            "Compare future options before specializing"
        ],

        advanced: [
            "Create a balanced subject strategy",
            "Build advanced foundations",
            "Compare Mathematics and Biology pathways",
            "Research professional degree options",
            "Track entrance requirements",
            "Explore interdisciplinary fields",
            "Create specialization checkpoints"
        ]
    },


    commerce: {
        type: "PATHWAY",
        label: "AFTER 10TH / COMMERCE",
        title: "COMMERCE",
        intro:
            "Commerce can lead toward finance, accounting, economics, business, management, entrepreneurship and related fields.",

        roadmap: [
            "Understand accounting fundamentals",
            "Explore economics and business",
            "Develop numerical confidence",
            "Explore finance and management",
            "Research degree and professional pathways"
        ],

        advanced: [
            "Build accounting foundations",
            "Study economics concepts",
            "Explore finance careers",
            "Research professional qualifications",
            "Develop business awareness",
            "Build analytical and communication skills",
            "Explore entrepreneurship"
        ]
    },


    humanities: {
        type: "PATHWAY",
        label: "AFTER 10TH / HUMANITIES",
        title: "HUMANITIES",
        intro:
            "Humanities explores people, society, culture, history, language, psychology, politics, design and many other fields.",

        roadmap: [
            "Explore social sciences and humanities",
            "Identify subjects of interest",
            "Develop reading and writing skills",
            "Explore creative and analytical fields",
            "Research higher-education directions"
        ],

        advanced: [
            "Develop strong research habits",
            "Build analytical writing skills",
            "Explore psychology and social sciences",
            "Explore design and communication fields",
            "Develop portfolio projects",
            "Research university pathways",
            "Create a specialization plan"
        ]
    },


    vocational: {
        type: "PATHWAY",
        label: "AFTER 10TH / VOCATIONAL",
        title: "VOCATIONAL",
        intro:
            "Vocational education focuses on practical skills and can provide direct exposure to specific industries and occupations.",

        roadmap: [
            "Identify practical interests",
            "Explore available vocational fields",
            "Compare training programs",
            "Develop job-ready skills",
            "Explore further education opportunities"
        ],

        advanced: [
            "Identify a target skill area",
            "Research recognized programs",
            "Compare training institutions",
            "Build practical experience",
            "Develop industry-relevant skills",
            "Create a portfolio of work",
            "Plan further education or employment"
        ]
    },


    after12th: {
        type: "PATHWAY",
        label: "PATHWAY",
        title: "AFTER 12TH",
        intro:
            "After Class 12, students can choose from university degrees, professional programs, skill-based routes and other educational directions.",

        roadmap: [
            "Identify areas of interest",
            "Research suitable degree options",
            "Understand eligibility requirements",
            "Compare institutions and programs",
            "Plan applications and entrance requirements"
        ],

        advanced: [
            "Create a field shortlist",
            "Compare degree structures",
            "Research entrance examinations",
            "Compare universities and institutions",
            "Review eligibility requirements",
            "Build an application timeline",
            "Prepare a higher-education roadmap"
        ]
    },


    global: {
        type: "PATHWAY",
        label: "PATHWAY",
        title: "GLOBAL EDUCATION",
        intro:
            "Explore educational opportunities outside your current country and understand the preparation involved in studying abroad.",

        roadmap: [
            "Identify countries and fields of interest",
            "Research university requirements",
            "Understand language requirements",
            "Compare tuition and living costs",
            "Plan applications and documentation"
        ],

        advanced: [
            "Shortlist countries and institutions",
            "Compare degree structures",
            "Research admission requirements",
            "Research language and standardized tests",
            "Plan financial requirements",
            "Prepare application documents",
            "Build an international application timeline"
        ]
    }
};


/* =========================================
   TEXT ANIMATION
========================================= */

function prepareTextAnimation() {

    const animatedElements =
        document.querySelectorAll(
            ".slide h1, .slide h2, .slide h3, .slide p, .slide .eyebrow"
        );

    animatedElements.forEach(element => {
        if (element.dataset.animated === "true") {
            return;
        }

        const text = element.textContent;

        if (!text.trim()) {
            return;
        }

        element.innerHTML = "";

        const words = text.split(" ");

        words.forEach((word, wordIndex) => {

            const wordSpan = document.createElement("span");
            wordSpan.className = "word";

            [...word].forEach((character, charIndex) => {

                const charSpan = document.createElement("span");

                charSpan.className = "char";
                charSpan.textContent = character;

                charSpan.style.animationDelay =
                    `${(wordIndex * 0.08) + (charIndex * 0.025)}s`;

                wordSpan.appendChild(charSpan);
            });

            element.appendChild(wordSpan);

            if (wordIndex < words.length - 1) {
                element.appendChild(document.createTextNode(" "));
            }
        });

        element.dataset.animated = "true";
    });
}


function resetAnimatedText(slideElement) {

    const chars =
        slideElement.querySelectorAll(".char");

    chars.forEach(char => {
        char.classList.remove("char-visible");
    });
}


function animateSlideText(slideElement) {

    resetAnimatedText(slideElement);

    const chars =
        slideElement.querySelectorAll(".char");

    chars.forEach((char, index) => {

        setTimeout(() => {
            char.classList.add("char-visible");
        }, index * 25);
    });
}


/* =========================================
   SKILL CARD ANIMATION
========================================= */

function triggerSkillCards(slideElement) {

    const cards =
        slideElement.querySelectorAll(".skill-card");

    cards.forEach(card => {
        card.classList.remove("skill-card-visible");
    });

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("skill-card-visible");

        }, 120 * index + 250);
    });
}


/* =========================================
   MAIN SLIDE NAVIGATION
========================================= */

function goToSlide(index, clearRoute = true) {

    if (index < 0 || index >= slides.length) {
        return;
    }

    if (explorationScreen &&
        explorationScreen.classList.contains("active")) {

        closeExploration();
    }

    currentSlide = index;

    slides.forEach((slide, slideIndex) => {

        slide.classList.toggle(
            "active",
            slideIndex === currentSlide
        );
    });


    navButtons.forEach((button, index) => {

        button.classList.toggle(
            "active",
            index === currentSlide
        );
    });


    mobileNavButtons.forEach((button, index) => {

        const target =
            Number(button.dataset.slide);

        button.classList.toggle(
            "active",
            target === currentSlide
        );
    });


    if (slideCounter) {

        slideCounter.textContent =
            `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    }


    animateSlideText(slides[currentSlide]);

    triggerSkillCards(slides[currentSlide]);


    if (mobileMenu) {
        mobileMenu.classList.remove("open");
    }


    if (clearRoute && window.location.hash) {

        history.replaceState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );
    }
}


/* =========================================
   EXPLORATION OPEN
========================================= */

function openExploration(route) {

    const data = getRouteData(route);

    if (!data) {
        return;
    }

    currentExplorationRoute = route;
    currentExplorationData = data;

    document.body.classList.add("exploration-open");

    explorationScreen.classList.add("active");

    explorationScreen.setAttribute(
        "aria-hidden",
        "false"
    );

    if (mobileMenu) {
        mobileMenu.classList.remove("open");
    }

    renderExploration(
        route,
        data
    );

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================
   EXPLORATION CLOSE
========================================= */

function closeExploration() {

    if (!explorationScreen) {
        return;
    }

    explorationScreen.classList.remove("active");

    explorationScreen.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "exploration-open"
    );

    currentExplorationRoute = "";
    currentExplorationData = null;

    hideGenerationOverlay();
}


/* =========================================
   ROUTE DATA
========================================= */

function getRouteData(route) {

    const parts =
        route.split("/");

    if (parts[0] === "skill") {

        return skillData[parts[1]] || null;
    }

    if (parts[0] === "pathway") {

        const pathwayKey =
            parts.slice(1).join("-");

        const directPathway =
            pathwayData[pathwayKey];

        if (directPathway) {
            return directPathway;
        }

        if (
            parts.length === 2 &&
            pathwayData[parts[1]]
        ) {
            return pathwayData[parts[1]];
        }

        return null;
    }

    return null;
}


/* =========================================
   ROADMAP HTML
========================================= */

function createRoadmapHTML(roadmap) {

    if (!roadmap || roadmap.length === 0) {
        return "";
    }

    return `
        <div class="roadmap-list">

            ${roadmap.map((step, index) => `

                <div class="roadmap-step reveal-up"
                     style="--delay:${index * 0.08}s">

                    <div class="roadmap-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="roadmap-line"></div>

                    <div class="roadmap-text">
                        ${step}
                    </div>

                </div>

            `).join("")}

        </div>
    `;
}


/* =========================================
   CHOICES HTML
========================================= */

function createChoiceHTML(choices) {

    if (!choices || choices.length === 0) {
        return "";
    }

    return `
        <div class="exploration-choices">

            ${choices.map((choice, index) => `

                <button
                    type="button"
                    class="exploration-choice reveal-up"
                    data-route="${choice.route}"
                    style="--delay:${index * 0.08}s"
                >

                    <span class="choice-index">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="choice-content">

                        <span class="choice-title">
                            ${choice.title}
                        </span>

                        <span class="choice-description">
                            ${choice.description}
                        </span>

                    </span>

                    <span class="choice-arrow">
                        →
                    </span>

                </button>

            `).join("")}

        </div>
    `;
}


/* =========================================
   EXPLORATION RENDER
========================================= */

function renderExploration(route, data) {

    if (!explorationView) {
        console.error(
            "Kayra: #explorationContent was not found."
        );

        return;
    }

    const isSkill =
        route.startsWith("skill/");

    const choicesHTML =
        createChoiceHTML(data.choices);


    const roadmapHTML =
        createRoadmapHTML(data.roadmap);


    explorationView.innerHTML = `

        <div class="exploration-header">

            <div class="exploration-eyebrow">
                ${data.label}
            </div>

            <h1 class="exploration-title">
                ${data.title}
            </h1>

            <p class="exploration-intro">
                ${data.intro}
            </p>

        </div>


        ${
            choicesHTML
                ? `
                    <section class="exploration-section choices-section">

                        <div class="section-label">
                            CHOOSE YOUR DIRECTION
                        </div>

                        ${choicesHTML}

                    </section>
                `
                : ""
        }


        ${
            data.what
                ? `
                    <section class="exploration-section">

                        <div class="section-label">
                            WHAT IT MEANS
                        </div>

                        <div class="exploration-info">
                            ${data.what}
                        </div>

                    </section>
                `
                : ""
        }


        ${
            data.why
                ? `
                    <section class="exploration-section">

                        <div class="section-label">
                            WHY IT MATTERS
                        </div>

                        <div class="exploration-info">
                            ${data.why}
                        </div>

                    </section>
                `
                : ""
        }


        ${
            data.start
                ? `
                    <section class="exploration-section">

                        <div class="section-label">
                            START HERE
                        </div>

                        <div class="exploration-info start-info">
                            ${data.start}
                        </div>

                    </section>
                `
                : ""
        }


        ${
            roadmapHTML
                ? `
                    <section class="exploration-section roadmap-section">

                        <div class="section-label">
                            YOUR ROADMAP
                        </div>

                        ${roadmapHTML}

                    </section>
                `
                : ""
        }


        <section class="exploration-section advanced-section">

            <div class="advanced-copy">

                <div class="section-label">
                    GO DEEPER
                </div>

                <h2>
                    BUILD A MORE ADVANCED PLAN
                </h2>

                <p>
                    Some directions require more than an overview.
                    For deeper planning, Kayra can build an advanced
                    roadmap with more stages, preparation checkpoints,
                    skill requirements, and next-step guidance.
                </p>

                <button
                    type="button"
                    class="primary-button advanced-roadmap-button"
                    data-action="generate-advanced"
                >
                    GENERATE ADVANCED ROADMAP
                </button>

            </div>

        </section>


        <section class="exploration-section exploration-help">

            <div class="section-label">
                KAYRA
            </div>

            <p>
                Explore the options, compare the directions,
                and build your path one decision at a time.
            </p>

        </section>


        <div class="exploration-footer">

            <button
                type="button"
                class="exploration-back-bottom"
                data-action="back"
            >
                ← BACK
            </button>

        </div>
    `;


    requestAnimationFrame(() => {

        const revealElements =
            explorationView.querySelectorAll(
                ".reveal-up"
            );

        revealElements.forEach(element => {
            element.classList.add("revealed");
        });
    });
}


/* =========================================
   ADVANCED ROADMAP GENERATION
========================================= */

function generateAdvancedRoadmap() {

    if (!currentExplorationData) {
        return;
    }

    if (!generationOverlay) {
        return;
    }

    clearInterval(generationTimer);

    generationOverlay.classList.add("active");

    generationOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    if (generationBarFill) {
        generationBarFill.style.width = "0%";
    }

    if (generationPercent) {
        generationPercent.textContent = "0%";
    }

    if (generationStatus) {
        generationStatus.textContent =
            "ANALYSING DIRECTION...";
    }


    let progress = 0;

    const statuses = [
        {
            value: 12,
            text: "ANALYSING DIRECTION..."
        },
        {
            value: 28,
            text: "MAPPING REQUIREMENTS..."
        },
        {
            value: 44,
            text: "IDENTIFYING SKILLS..."
        },
        {
            value: 61,
            text: "BUILDING PREPARATION STAGES..."
        },
        {
            value: 78,
            text: "CONNECTING NEXT STEPS..."
        },
        {
            value: 92,
            text: "FINALISING ROADMAP..."
        },
        {
            value: 100,
            text: "ROADMAP READY"
        }
    ];


    let statusIndex = 0;


    generationTimer = setInterval(() => {

        progress += Math.floor(
            Math.random() * 5
        ) + 3;


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


        while (
            statusIndex < statuses.length &&
            progress >= statuses[statusIndex].value
        ) {

            if (generationStatus) {

                generationStatus.textContent =
                    statuses[statusIndex].text;
            }

            statusIndex++;
        }


        if (progress >= 100) {

            clearInterval(generationTimer);

            generationTimer = null;


            setTimeout(() => {

                hideGenerationOverlay();

                renderAdvancedRoadmap(
                    currentExplorationData
                );

            }, 650);
        }

    }, 110);
}


/* =========================================
   HIDE GENERATION OVERLAY
========================================= */

function hideGenerationOverlay() {

    clearInterval(generationTimer);

    generationTimer = null;

    if (!generationOverlay) {
        return;
    }

    generationOverlay.classList.remove("active");

    generationOverlay.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* =========================================
   ADVANCED ROADMAP
========================================= */

function renderAdvancedRoadmap(data) {

    if (!explorationView) {
        return;
    }

    const advanced =
        data.advanced || [];


    explorationView.innerHTML = `

        <div class="exploration-header">

            <div class="exploration-eyebrow">
                ADVANCED ROADMAP
            </div>

            <h1 class="exploration-title">
                ${data.title}
            </h1>

            <p class="exploration-intro">
                A deeper progression plan built around
                preparation, development, and next steps.
            </p>

        </div>


        <section class="exploration-section roadmap-section">

            <div class="section-label">
                ADVANCED PROGRESSION
            </div>

            <div class="roadmap-list advanced-roadmap-list">

                ${advanced.map((step, index) => `

                    <div
                        class="roadmap-step reveal-up"
                        style="--delay:${index * 0.08}s"
                    >

                        <div class="roadmap-number">
                            ${String(index + 1).padStart(2, "0")}
                        </div>

                        <div class="roadmap-line"></div>

                        <div class="roadmap-text">
                            ${step}
                        </div>

                    </div>

                `).join("")}

            </div>

        </section>


        <section class="exploration-section">

            <div class="section-label">
                CHECKPOINT
            </div>

            <div class="exploration-info checkpoint-info">

                Your roadmap is not a fixed route.
                Use each stage as a checkpoint, review what
                you have learned, and adjust your direction
                as your goals become clearer.

            </div>

        </section>


        <section class="exploration-section">

            <div class="section-label">
                NEXT MOVE
            </div>

            <div class="advanced-next-box">

                <h2>
                    START WITH STAGE 01
                </h2>

                <p>
                    Focus on the first step instead of trying
                    to solve the entire journey at once.
                </p>

            </div>

        </section>


        <div class="exploration-footer">

            <button
                type="button"
                class="exploration-back-bottom"
                data-action="back"
            >
                ← BACK
            </button>

        </div>
    `;


    requestAnimationFrame(() => {

        const revealElements =
            explorationView.querySelectorAll(
                ".reveal-up"
            );

        revealElements.forEach(element => {
            element.classList.add("revealed");
        });
    });
}


/* =========================================
   PARENT ROUTE
========================================= */

function getParentRoute(route) {

    const parts =
        route.split("/");


    if (parts.length <= 2) {
        return null;
    }


    parts.pop();

    return parts.join("/");
}


/* =========================================
   RETURN TO MAIN SLIDE
========================================= */

function returnToSlide(slideIndex) {

    closeExploration();

    goToSlide(
        slideIndex,
        true
    );
}


/* =========================================
   ROUTE HANDLER
========================================= */

function handleRoute() {

    const hash =
        window.location.hash.replace(
            /^#/,
            ""
        );


    if (!hash) {

        if (
            explorationScreen &&
            explorationScreen.classList.contains("active")
        ) {
            closeExploration();
        }

        return;
    }


    const data =
        getRouteData(hash);


    if (!data) {

        history.replaceState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );

        closeExploration();

        goToSlide(
            0,
            false
        );

        return;
    }


    openExploration(hash);
}


/* =========================================
   EXPLORATION CLICK HANDLER
   EVENT DELEGATION
========================================= */

if (explorationView) {

    explorationView.addEventListener(
        "click",
        event => {

            const routeButton =
                event.target.closest(
                    "[data-route]"
                );


            if (routeButton) {

                const route =
                    routeButton.dataset.route;


                if (route) {

                    window.location.hash =
                        route;
                }

                return;
            }


            const actionButton =
                event.target.closest(
                    "[data-action]"
                );


            if (!actionButton) {
                return;
            }


            const action =
                actionButton.dataset.action;


            if (action === "generate-advanced") {

                generateAdvancedRoadmap();

                return;
            }


            if (action === "back") {

                const parent =
                    getParentRoute(
                        currentExplorationRoute
                    );


                if (parent) {

                    window.location.hash =
                        parent;

                    return;
                }


                if (
                    currentExplorationRoute.startsWith(
                        "skill/"
                    )
                ) {

                    returnToSlide(2);

                } else {

                    returnToSlide(3);
                }
            }
        }
    );

} else {

    console.error(
        "Kayra: explorationContent was not found."
    );
}


/* =========================================
   TOP EXPLORATION BACK BUTTON
========================================= */

if (explorationBack) {

    explorationBack.addEventListener(
        "click",
        () => {

            const parent =
                getParentRoute(
                    currentExplorationRoute
                );


            if (parent) {

                window.location.hash =
                    parent;

                return;
            }


            if (
                currentExplorationRoute.startsWith(
                    "skill/"
                )
            ) {

                returnToSlide(2);

            } else {

                returnToSlide(3);
            }
        }
    );
}


/* =========================================
   PREVIOUS BUTTON
========================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        () => {

            if (
                explorationScreen &&
                explorationScreen.classList.contains("active")
            ) {
                return;
            }

            goToSlide(
                currentSlide - 1
            );
        }
    );
}


/* =========================================
   NEXT BUTTON
========================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            if (
                explorationScreen &&
                explorationScreen.classList.contains("active")
            ) {
                return;
            }

            goToSlide(
                currentSlide + 1
            );
        }
    );
}


/* =========================================
   DESKTOP NAVIGATION
========================================= */

navButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.slide
                    );

                goToSlide(index);
            }
        );
    }
);


/* =========================================
   MOBILE NAVIGATION
========================================= */

mobileNavButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.slide
                    );

                goToSlide(index);

                if (mobileMenu) {
                    mobileMenu.classList.remove("open");
                }
            }
        );
    }
);


/* =========================================
   NORMAL SLIDE BUTTONS
========================================= */

document.addEventListener(
    "click",
    event => {

        const slideButton =
            event.target.closest(
                "[data-slide-target]"
            );


        if (!slideButton) {
            return;
        }


        const target =
            Number(
                slideButton.dataset.slideTarget
            );


        if (!Number.isNaN(target)) {

            goToSlide(target);
        }
    }
);


/* =========================================
   MOBILE MENU
========================================= */

if (menuButton && mobileMenu) {

    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "open"
            );
        }
    );
}


/* =========================================
   KEYBOARD NAVIGATION
========================================= */

document.addEventListener(
    "keydown",
    event => {

        const explorationActive =
            explorationScreen &&
            explorationScreen.classList.contains("active");


        if (explorationActive) {

            if (event.key === "Escape") {

                const parent =
                    getParentRoute(
                        currentExplorationRoute
                    );


                if (parent) {

                    window.location.hash =
                        parent;

                } else {

                    if (
                        currentExplorationRoute.startsWith(
                            "skill/"
                        )
                    ) {

                        returnToSlide(2);

                    } else {

                        returnToSlide(3);
                    }
                }
            }

            return;
        }


        if (event.key === "ArrowRight") {

            goToSlide(
                currentSlide + 1
            );
        }


        if (event.key === "ArrowLeft") {

            goToSlide(
                currentSlide - 1
            );
        }
    }
);


/* =========================================
   HASH CHANGE
========================================= */

window.addEventListener(
    "hashchange",
    handleRoute
);


/* =========================================
   START EXPLORING
========================================= */

const startExploringButton =
    document.getElementById(
        "startExploringButton"
    );


if (startExploringButton) {

    startExploringButton.addEventListener(
        "click",
        () => {

            goToSlide(3);
        }
    );
}


/* =========================================
   DOM READY
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        prepareTextAnimation();


        if (window.location.hash) {

            handleRoute();

        } else {

            goToSlide(
                0,
                false
            );
        }
    }
);
