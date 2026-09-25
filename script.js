/* =========================================================
   KAYRA
   MAIN JAVASCRIPT
   FIXED / STABLE VERSION
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const slides = Array.from(
    document.querySelectorAll(".slide")
);

const navButtons = Array.from(
    document.querySelectorAll(".nav-links [data-slide]")
);

const mobileNavButtons = Array.from(
    document.querySelectorAll(".mobile-nav-link[data-slide]")
);

const previousButton =
    document.getElementById("previousSlide");

const nextButton =
    document.getElementById("nextSlide");

const slideCounter =
    document.getElementById("slideCounter");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


/* =========================================================
   EXPLORATION
========================================================= */

const explorationScreen =
    document.getElementById("explorationScreen");

const explorationView =
    document.getElementById("explorationContent");

const explorationBack =
    document.getElementById("explorationBack");


/* =========================================================
   ROADMAP GENERATION
========================================================= */

const generationOverlay =
    document.getElementById("generationOverlay");

const generationBarFill =
    document.getElementById("generationBarFill");

const generationPercent =
    document.getElementById("generationPercent");

const generationStatus =
    document.getElementById("generationStatus");


/* =========================================================
   STATE
========================================================= */

let currentSlide = 0;

let currentExplorationRoute = "";

let currentExplorationData = null;

let generationTimer = null;

let textAnimationTimers = [];

let wheelLocked = false;

let touchStartY = 0;


/* =========================================================
   SKILL DATA
========================================================= */

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


/* =========================================================
   PATHWAY DATA
========================================================= */

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


/* =========================================================
   TEXT ANIMATION
   IMPORTANT:
   DOES NOT DESTROY HTML.
   .highlight elements remain intact.
========================================================= */

function prepareTextAnimation() {

    const animatedElements =
        document.querySelectorAll(
            ".slide .animated-heading, " +
            ".slide .animate-text, " +
            ".slide .eyebrow"
        );

    animatedElements.forEach(element => {

        if (
            element.dataset.animationPrepared === "true"
        ) {
            return;
        }

        wrapTextNodes(element);

        element.dataset.animationPrepared = "true";
    });
}


/* =========================================================
   WRAP TEXT NODES
========================================================= */

function wrapTextNodes(element) {

    const walker =
        document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {

                    if (
                        !node.nodeValue ||
                        !node.nodeValue.trim()
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (
                        node.parentElement &&
                        (
                            node.parentElement.closest(
                                ".instagram-icon"
                            )
                        )
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

    const textNodes = [];

    let node;

    while (
        (node = walker.nextNode())
    ) {
        textNodes.push(node);
    }


    textNodes.forEach(textNode => {

        const text =
            textNode.nodeValue;

        const fragment =
            document.createDocumentFragment();


        for (
            let i = 0;
            i < text.length;
            i++
        ) {

            const character =
                text[i];


            if (
                character === " " ||
                character === "\n" ||
                character === "\t"
            ) {

                fragment.appendChild(
                    document.createTextNode(
                        character
                    )
                );

                continue;
            }


            const charSpan =
                document.createElement("span");

            charSpan.className = "char";

            charSpan.textContent =
                character;

            fragment.appendChild(
                charSpan
            );
        }


        textNode.parentNode.replaceChild(
            fragment,
            textNode
        );
    });
}


/* =========================================================
   CLEAR TEXT ANIMATION
========================================================= */

function clearTextAnimationTimers() {

    textAnimationTimers.forEach(
        timer => clearTimeout(timer)
    );

    textAnimationTimers = [];
}


/* =========================================================
   RESET TEXT
========================================================= */

function resetAnimatedText(slide) {

    if (!slide) {
        return;
    }

    const chars =
        slide.querySelectorAll(".char");

    chars.forEach(char => {

        char.classList.remove(
            "char-visible"
        );

    });
}


/* =========================================================
   ANIMATE TEXT
========================================================= */

function animateSlideText(slide) {

    if (!slide) {
        return;
    }

    clearTextAnimationTimers();

    resetAnimatedText(slide);


    const chars =
        slide.querySelectorAll(
            ".animated-heading .char, " +
            ".animate-text .char, " +
            ".eyebrow .char"
        );


    chars.forEach(
        (char, index) => {

            const timer =
                setTimeout(() => {

                    char.classList.add(
                        "char-visible"
                    );

                }, index * 16);

            textAnimationTimers.push(
                timer
            );
        }
    );
}


/* =========================================================
   SKILL CARD ANIMATION
========================================================= */

function animateSkillCards(slide) {

    if (!slide) {
        return;
    }

    const cards =
        slide.querySelectorAll(
            ".skill-card"
        );


    cards.forEach(card => {

        card.classList.remove(
            "skill-card-visible"
        );

    });


    cards.forEach(
        (card, index) => {

            setTimeout(
                () => {

                    card.classList.add(
                        "skill-card-visible"
                    );

                },
                180 + index * 90
            );

        }
    );
}


/* =========================================================
   SLIDE COUNTER
========================================================= */

function updateSlideCounter() {

    if (!slideCounter) {
        return;
    }

    slideCounter.textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / ` +
        `${String(slides.length).padStart(2, "0")}`;
}


/* =========================================================
   NAVIGATION STATE
========================================================= */

function updateNavigationState() {

    navButtons.forEach(button => {

        const target =
            Number(button.dataset.slide);

        button.classList.toggle(
            "active",
            target === currentSlide
        );

    });


    mobileNavButtons.forEach(button => {

        const target =
            Number(button.dataset.slide);

        button.classList.toggle(
            "active",
            target === currentSlide
        );

    });
}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

function closeMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.remove(
        "open"
    );

    mobileMenu.setAttribute(
        "aria-hidden",
        "true"
    );


    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}


/* =========================================================
   OPEN MOBILE MENU
========================================================= */

function openMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.add(
        "open"
    );

    mobileMenu.setAttribute(
        "aria-hidden",
        "false"
    );


    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }
}


/* =========================================================
   TOGGLE MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    if (!mobileMenu) {
        return;
    }


    if (
        mobileMenu.classList.contains(
            "open"
        )
    ) {

        closeMobileMenu();

    } else {

        openMobileMenu();
    }
}


/* =========================================================
   MAIN SLIDE NAVIGATION
========================================================= */

function goToSlide(
    index,
    clearHash = true
) {

    if (
        slides.length === 0
    ) {
        return;
    }


    if (
        index < 0
    ) {
        index = 0;
    }


    if (
        index >= slides.length
    ) {
        index = slides.length - 1;
    }


    if (
        explorationScreen &&
        explorationScreen.classList.contains(
            "active"
        )
    ) {

        closeExploration();
    }


    clearTextAnimationTimers();


    const oldSlide =
        slides[currentSlide];

    const newSlide =
        slides[index];


    if (
        oldSlide &&
        oldSlide !== newSlide
    ) {

        oldSlide.classList.remove(
            "active"
        );

        oldSlide.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    currentSlide = index;


    slides.forEach(
        (slide, slideIndex) => {

            const isActive =
                slideIndex === currentSlide;


            slide.classList.toggle(
                "active",
                isActive
            );

            slide.setAttribute(
                "aria-hidden",
                String(!isActive)
            );

        }
    );


    updateNavigationState();

    updateSlideCounter();

    closeMobileMenu();


    /*
        Force the browser to recognize
        the new active state before
        starting the text animation.
    */

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            animateSlideText(
                newSlide
            );

            animateSkillCards(
                newSlide
            );

        });

    });


    /*
        Remove accidental route hashes
        when moving through normal slides.
    */

    if (
        clearHash &&
        window.location.hash
    ) {

        history.replaceState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );
    }


    /*
        Reset scroll position.
    */

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   NEXT SLIDE
========================================================= */

function nextSlide() {

    if (
        currentSlide <
        slides.length - 1
    ) {

        goToSlide(
            currentSlide + 1
        );

    } else {

        /*
            Stay on the last slide.
        */
        goToSlide(
            slides.length - 1
        );
    }
}


/* =========================================================
   PREVIOUS SLIDE
========================================================= */

function previousSlide() {

    if (
        currentSlide > 0
    ) {

        goToSlide(
            currentSlide - 1
        );

    } else {

        goToSlide(0);
    }
}


/* =========================================================
   ROUTE DATA
========================================================= */

function getRouteData(route) {

    if (
        typeof route !== "string" ||
        route.trim() === ""
    ) {
        return null;
    }


    const cleanRoute =
        route
            .replace(/^#/, "")
            .replace(/^\/+/, "")
            .replace(/\/+$/, "");


    const parts =
        cleanRoute.split("/");


    /*
        SKILLS

        skill/communication
        skill/creativity
        etc.
    */

    if (
        parts[0] === "skill" &&
        parts[1]
    ) {

        return (
            skillData[parts[1]] ||
            null
        );
    }


    /*
        PATHWAYS

        pathway/after10th
        pathway/after10th/science
        pathway/after10th/science/pcm
        pathway/after12th
        pathway/global
    */

    if (
        parts[0] === "pathway"
    ) {

        const remaining =
            parts.slice(1);


        /*
            Direct two-part routes.

            pathway/after10th
            pathway/after12th
            pathway/global
        */

        if (
            remaining.length === 1
        ) {

            return (
                pathwayData[remaining[0]] ||
                null
            );
        }


        /*
            Nested routes.

            after10th/science
            after10th/science/pcm
        */

        const finalKey =
            remaining.join("-");


        /*
            The data object currently
            stores nested destinations
            as:

            science
            pcm
            pcb
            pcmb
            commerce
            humanities
            vocational
        */

        if (
            pathwayData[finalKey]
        ) {

            return pathwayData[finalKey];
        }


        const lastPart =
            remaining[
                remaining.length - 1
            ];


        if (
            pathwayData[lastPart]
        ) {

            return pathwayData[lastPart];
        }
    }


    return null;
}


/* =========================================================
   OPEN EXPLORATION
========================================================= */

function openExploration(route) {

    const data =
        getRouteData(route);


    if (!data) {

        console.warn(
            "KAYRA: Unknown route:",
            route
        );

        return;
    }


    currentExplorationRoute =
        route;

    currentExplorationData =
        data;


    if (explorationScreen) {

        explorationScreen.classList.add(
            "active"
        );

        explorationScreen.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    document.body.classList.add(
        "exploration-open"
    );


    closeMobileMenu();


    renderExploration(
        route,
        data
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   CLOSE EXPLORATION
========================================================= */

function closeExploration() {

    if (!explorationScreen) {
        return;
    }


    hideGenerationOverlay();


    explorationScreen.classList.remove(
        "active"
    );


    explorationScreen.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "exploration-open"
    );


    currentExplorationRoute = "";

    currentExplorationData = null;
}


/* =========================================================
   PARENT ROUTE
========================================================= */

function getParentRoute(route) {

    if (
        !route ||
        typeof route !== "string"
    ) {
        return null;
    }


    const parts =
        route
            .split("/")
            .filter(Boolean);


    if (
        parts.length <= 2
    ) {
        return null;
    }


    parts.pop();


    return parts.join("/");
}


/* =========================================================
   BACK FROM EXPLORATION
========================================================= */

function explorationBackAction() {

    const parent =
        getParentRoute(
            currentExplorationRoute
        );


    /*
        If this is a nested pathway,
        go one level upward.
    */

    if (parent) {

        const parentData =
            getRouteData(parent);


        if (parentData) {

            window.location.hash =
                parent;

            return;
        }
    }


    /*
        Skills return to SKILLS.
    */

    if (
        currentExplorationRoute.startsWith(
            "skill/"
        )
    ) {

        returnToSlide(2);

        return;
    }


    /*
        Pathways return to PATHWAYS.
    */

    returnToSlide(3);
}


/* =========================================================
   RETURN TO MAIN SLIDE
========================================================= */

function returnToSlide(index) {

    closeExploration();


    goToSlide(
        index,
        true
    );
}


/* =========================================================
   ROADMAP HTML
========================================================= */

function createRoadmapHTML(
    roadmap
) {

    if (
        !Array.isArray(roadmap) ||
        roadmap.length === 0
    ) {

        return "";
    }


    return `

        <div class="roadmap-list">

            ${roadmap.map(
                (step, index) => `

                    <div
                        class="roadmap-step reveal-up"
                        style="--delay:${index * 0.08}s"
                    >

                        <div class="roadmap-number">
                            ${String(
                                index + 1
                            ).padStart(2, "0")}
                        </div>

                        <div class="roadmap-line"></div>

                        <div class="roadmap-text">
                            ${step}
                        </div>

                    </div>

                `
            ).join("")}

        </div>
    `;
}


/* =========================================================
   CHOICE HTML
========================================================= */

function createChoiceHTML(
    choices
) {

    if (
        !Array.isArray(choices) ||
        choices.length === 0
    ) {

        return "";
    }


    return `

        <div class="exploration-choices">

            ${choices.map(
                (choice, index) => `

                    <button
                        type="button"
                        class="exploration-choice reveal-up"
                        data-route="${choice.route}"
                        style="--delay:${index * 0.08}s"
                    >

                        <span class="choice-index">
                            ${String(
                                index + 1
                            ).padStart(2, "0")}
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

                `
            ).join("")}

        </div>
    `;
}


/* =========================================================
   EXPLORATION RENDER
========================================================= */

function renderExploration(
    route,
    data
) {

    if (!explorationView) {

        console.error(
            "KAYRA: #explorationContent is missing."
        );

        return;
    }


    const choicesHTML =
        createChoiceHTML(
            data.choices
        );


    const roadmapHTML =
        createRoadmapHTML(
            data.roadmap
        );


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

                    <section
                        class="exploration-section choices-section"
                    >

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

                    <section
                        class="exploration-section"
                    >

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

                    <section
                        class="exploration-section"
                    >

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

                    <section
                        class="exploration-section"
                    >

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

                    <section
                        class="exploration-section roadmap-section"
                    >

                        <div class="section-label">
                            YOUR ROADMAP
                        </div>

                        ${roadmapHTML}

                    </section>

                `
                : ""
        }


        <section
            class="exploration-section advanced-section"
        >

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


        <section
            class="exploration-section exploration-help"
        >

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


    revealExplorationElements();
}


/* =========================================================
   REVEAL EXPLORATION ELEMENTS
========================================================= */

function revealExplorationElements() {

    if (!explorationView) {
        return;
    }


    requestAnimationFrame(() => {

        const elements =
            explorationView.querySelectorAll(
                ".reveal-up"
            );


        elements.forEach(
            element => {

                requestAnimationFrame(() => {

                    element.classList.add(
                        "revealed"
                    );

                });

            }
        );
    });
}


/* =========================================================
   GENERATE ADVANCED ROADMAP
========================================================= */

function generateAdvancedRoadmap() {

    if (
        !currentExplorationData ||
        !generationOverlay
    ) {
        return;
    }


    clearInterval(
        generationTimer
    );


    generationOverlay.classList.add(
        "active"
    );


    generationOverlay.setAttribute(
        "aria-hidden",
        "false"
    );


    if (generationBarFill) {

        generationBarFill.style.width =
            "0%";
    }


    if (generationPercent) {

        generationPercent.textContent =
            "0%";
    }


    if (generationStatus) {

        generationStatus.textContent =
            "ANALYSING DIRECTION...";
    }


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


    let progress = 0;

    let statusIndex = 0;


    generationTimer =
        setInterval(() => {

            progress +=
                Math.floor(
                    Math.random() * 4
                ) + 2;


            if (
                progress >= 100
            ) {

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
                statusIndex <
                    statuses.length &&
                progress >=
                    statuses[
                        statusIndex
                    ].value
            ) {

                if (generationStatus) {

                    generationStatus.textContent =
                        statuses[
                            statusIndex
                        ].text;
                }


                statusIndex++;
            }


            if (
                progress >= 100
            ) {

                clearInterval(
                    generationTimer
                );

                generationTimer =
                    null;


                setTimeout(() => {

                    hideGenerationOverlay();


                    if (
                        currentExplorationData
                    ) {

                        renderAdvancedRoadmap(
                            currentExplorationData
                        );
                    }

                }, 650);
            }

        }, 90);
}


/* =========================================================
   HIDE GENERATION OVERLAY
========================================================= */

function hideGenerationOverlay() {

    clearInterval(
        generationTimer
    );

    generationTimer = null;


    if (!generationOverlay) {
        return;
    }


    generationOverlay.classList.remove(
        "active"
    );


    generationOverlay.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* =========================================================
   ADVANCED ROADMAP
========================================================= */

function renderAdvancedRoadmap(
    data
) {

    if (!explorationView) {
        return;
    }


    const advanced =
        Array.isArray(data.advanced)
            ? data.advanced
            : [];


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


        <section
            class="exploration-section roadmap-section"
        >

            <div class="section-label">
                ADVANCED PROGRESSION
            </div>

            <div
                class="roadmap-list advanced-roadmap-list"
            >

                ${advanced.map(
                    (step, index) => `

                        <div
                            class="roadmap-step reveal-up"
                            style="--delay:${index * 0.08}s"
                        >

                            <div class="roadmap-number">
                                ${String(
                                    index + 1
                                ).padStart(2, "0")}
                            </div>

                            <div class="roadmap-line"></div>

                            <div class="roadmap-text">
                                ${step}
                            </div>

                        </div>

                    `
                ).join("")}

            </div>

        </section>


        <section
            class="exploration-section"
        >

            <div class="section-label">
                CHECKPOINT
            </div>

            <div
                class="exploration-info checkpoint-info"
            >

                Your roadmap is not a fixed route.
                Use each stage as a checkpoint, review what
                you have learned, and adjust your direction
                as your goals become clearer.

            </div>

        </section>


        <section
            class="exploration-section"
        >

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


    revealExplorationElements();
}


/* =========================================================
   EXPLORATION EVENT DELEGATION
========================================================= */

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


            if (
                action ===
                "generate-advanced"
            ) {

                generateAdvancedRoadmap();

                return;
            }


            if (
                action === "back"
            ) {

                explorationBackAction();
            }

        }
    );
}


/* =========================================================
   EXPLORATION TOP BACK
========================================================= */

if (explorationBack) {

    explorationBack.addEventListener(
        "click",
        () => {

            explorationBackAction();

        }
    );
}


/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

navButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.slide
                    );


                if (
                    Number.isNaN(index)
                ) {
                    return;
                }


                goToSlide(index);
            }
        );
    }
);


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

mobileNavButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.slide
                    );


                if (
                    Number.isNaN(index)
                ) {
                    return;
                }


                goToSlide(index);

                closeMobileMenu();
            }
        );
    }
);


/* =========================================================
   HERO / NORMAL SLIDE BUTTONS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-slide-target]"
            );


        if (!button) {
            return;
        }


        const target =
            Number(
                button.dataset.slideTarget
            );


        if (
            Number.isNaN(target)
        ) {
            return;
        }


        goToSlide(target);
    }
);


/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            toggleMobileMenu();

        }
    );
}


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !mobileMenu ||
            !menuButton
        ) {
            return;
        }


        if (
            !mobileMenu.classList.contains(
                "open"
            )
        ) {
            return;
        }


        if (
            event.target.closest(
                "#mobileMenu"
            ) ||
            event.target.closest(
                "#menuButton"
            )
        ) {
            return;
        }


        closeMobileMenu();
    }
);


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        () => {

            if (
                explorationScreen &&
                explorationScreen.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            previousSlide();
        }
    );
}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            if (
                explorationScreen &&
                explorationScreen.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            nextSlide();
        }
    );
}


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const activeElement =
            document.activeElement;


        /*
            Don't hijack keyboard controls
            while typing into a form field.
        */

        if (
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA" ||
                activeElement.tagName === "SELECT"
            )
        ) {
            return;
        }


        const explorationActive =
            explorationScreen &&
            explorationScreen.classList.contains(
                "active"
            );


        if (
            explorationActive
        ) {

            if (
                event.key === "Escape"
            ) {

                explorationBackAction();
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
    }
);


/* =========================================================
   MOUSE WHEEL SLIDE NAVIGATION
========================================================= */

window.addEventListener(
    "wheel",
    event => {

        if (
            Math.abs(event.deltaY) <
            25
        ) {
            return;
        }


        if (
            explorationScreen &&
            explorationScreen.classList.contains(
                "active"
            )
        ) {
            return;
        }


        /*
            Don't allow multiple slides
            to fly past from one scroll.
        */

        if (wheelLocked) {
            return;
        }


        wheelLocked = true;


        if (
            event.deltaY > 0
        ) {

            nextSlide();

        } else {

            previousSlide();
        }


        setTimeout(
            () => {

                wheelLocked = false;

            },
            700
        );

    },
    {
        passive: true
    }
);


/* =========================================================
   TOUCH / MOBILE SWIPE
========================================================= */

window.addEventListener(
    "touchstart",
    event => {

        if (
            !event.touches ||
            event.touches.length === 0
        ) {
            return;
        }


        touchStartY =
            event.touches[0].clientY;
    },
    {
        passive: true
    }
);


window.addEventListener(
    "touchend",
    event => {

        if (
            explorationScreen &&
            explorationScreen.classList.contains(
                "active"
            )
        ) {
            return;
        }


        if (
            !event.changedTouches ||
            event.changedTouches.length === 0
        ) {
            return;
        }


        const touchEndY =
            event.changedTouches[0].clientY;


        const difference =
            touchStartY -
            touchEndY;


        if (
            Math.abs(difference) <
            60
        ) {
            return;
        }


        if (
            difference > 0
        ) {

            nextSlide();

        } else {

            previousSlide();
        }

    },
    {
        passive: true
    }
);


/* =========================================================
   HASH ROUTING
========================================================= */

function handleRoute() {

    const hash =
        window.location.hash
            .replace(/^#/, "");


    /*
        No route = normal slide mode.
    */

    if (!hash) {

        if (
            explorationScreen &&
            explorationScreen.classList.contains(
                "active"
            )
        ) {

            closeExploration();
        }


        return;
    }


    const data =
        getRouteData(hash);


    /*
        Invalid hash.
    */

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


/* =========================================================
   HASH CHANGE
========================================================= */

window.addEventListener(
    "hashchange",
    handleRoute
);


/* =========================================================
   START EXPLORING
========================================================= */

const startExploringButton =
    document.getElementById(
        "startExploringButton"
    );


if (startExploringButton) {

    startExploringButton.addEventListener(
        "click",
        () => {

            /*
                START EXPLORING goes to the
                PATHWAYS selection screen.
            */

            goToSlide(
                3
            );

        }
    );
}


/* =========================================================
   INITIALIZE
========================================================= */

function initializeKayra() {

    /*
        Check that the expected slide
        structure actually exists.
    */

    if (
        slides.length === 0
    ) {

        console.error(
            "KAYRA: No .slide elements were found."
        );

        return;
    }


    /*
        Prepare the character animation
        WITHOUT destroying HTML structure.
    */

    prepareTextAnimation();


    /*
        Make absolutely sure only
        the first slide is active.
    */

    slides.forEach(
        (slide, index) => {

            const active =
                index === 0;


            slide.classList.toggle(
                "active",
                active
            );


            slide.setAttribute(
                "aria-hidden",
                String(!active)
            );
        }
    );


    currentSlide = 0;


    updateNavigationState();

    updateSlideCounter();


    /*
        If the page was loaded with a
        valid exploration hash, open it.
        Otherwise show HOME.
    */

    if (
        window.location.hash
    ) {

        handleRoute();

    } else {

        goToSlide(
            0,
            false
        );
    }
}


/* =========================================================
   START
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeKayra
    );

} else {

    initializeKayra();
}
