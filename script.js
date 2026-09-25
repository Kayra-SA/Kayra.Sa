/* =========================================
   KAYRA
   MAIN SYSTEM
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const slides = Array.from(
    document.querySelectorAll(".slide")
);

const navButtons = document.querySelectorAll(
    ".nav-links button"
);

const mobileNavButtons = document.querySelectorAll(
    ".mobile-nav-link"
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

const slideControls =
    document.querySelector(".slide-controls");


/* =========================================
   EXPLORATION ELEMENTS
========================================= */

const explorationScreen =
    document.getElementById("explorationScreen");

const explorationBack =
    document.getElementById("explorationBack");

const explorationKicker =
    document.getElementById("explorationKicker");

const explorationTitle =
    document.getElementById("explorationTitle");

const explorationIntro =
    document.getElementById("explorationIntro");

const explorationContent =
    document.getElementById("explorationContent");


/* =========================================
   GENERATOR ELEMENTS
========================================= */

const roadmapGenerator =
    document.getElementById("roadmapGenerator");

const generatorProgressBar =
    document.getElementById("generatorProgressBar");

const generatorProgress =
    document.getElementById("generatorProgress");

const generatorMessage =
    document.getElementById("generatorMessage");


/* =========================================
   STATE
========================================= */

let currentSlide = 0;

let explorationOpen = false;

let currentRoute = "";

let generatorTimer = null;

let generatorTarget = null;


/* =========================================
   SKILL DATA
========================================= */

const skillData = {

    communication: {

        title: "COMMUNICATION",

        intro:
            "The ability to express ideas clearly, understand others, and communicate with purpose.",

        why:
            "Communication affects almost every academic, professional, and collaborative environment.",

        start:
            "Begin by focusing on clarity rather than complexity. Speak, write, listen, and review how effectively your message was understood.",

        roadmap: [

            "Understand how clear communication works",

            "Improve vocabulary and sentence structure",

            "Practise speaking with confidence",

            "Develop active listening",

            "Learn structured writing",

            "Practise presentations and discussions",

            "Apply communication in real situations"

        ],

        advanced: [

            "Establish a measurable communication baseline",

            "Develop structured verbal communication",

            "Build professional writing ability",

            "Practise active listening and response analysis",

            "Develop presentation and public-speaking technique",

            "Learn negotiation and persuasive communication",

            "Practise communication under pressure",

            "Build a personal portfolio of presentations, writing and projects",

            "Seek feedback and revise repeatedly",

            "Apply communication skills to academic and professional environments"

        ]

    },


    creativity: {

        title: "CREATIVITY",

        intro:
            "The ability to generate ideas, explore possibilities, and approach problems from different perspectives.",

        why:
            "Creativity helps turn knowledge into original ideas, solutions, designs, projects, and opportunities.",

        start:
            "Start creating before worrying about whether the result is perfect. Generate many ideas, test them, and improve the strongest ones.",

        roadmap: [

            "Learn to generate multiple ideas",

            "Explore different perspectives",

            "Practise brainstorming",

            "Create small projects",

            "Learn to experiment",

            "Study how existing ideas can be improved",

            "Turn ideas into finished work"

        ],

        advanced: [

            "Develop a repeatable idea-generation process",

            "Maintain an organised idea archive",

            "Study creative problem-framing",

            "Practise divergent and convergent thinking",

            "Build projects across different formats",

            "Analyse existing solutions and identify weaknesses",

            "Prototype ideas quickly",

            "Collect feedback from different audiences",

            "Iterate through multiple versions",

            "Build a visible creative portfolio"

        ]

    },


    "problem-solving": {

        title: "PROBLEM SOLVING",

        intro:
            "The ability to understand a problem, break it into manageable parts, and construct a useful solution.",

        why:
            "Problem solving is central to science, technology, business, design, engineering, and everyday decision-making.",

        start:
            "Do not immediately search for the answer. First define the problem, identify what you know, and separate the problem into smaller parts.",

        roadmap: [

            "Learn to define problems",

            "Break complex problems into smaller parts",

            "Identify causes and constraints",

            "Generate possible solutions",

            "Compare different approaches",

            "Test solutions",

            "Review and improve the result"

        ],

        advanced: [

            "Develop formal problem-definition techniques",

            "Learn constraint and requirement analysis",

            "Practise root-cause investigation",

            "Create multiple solution paths before choosing one",

            "Learn to compare trade-offs",

            "Prototype and test solutions",

            "Document failures and lessons",

            "Use data to evaluate outcomes",

            "Solve increasingly complex real-world problems",

            "Build a portfolio demonstrating the complete process"

        ]

    },


    "critical-thinking": {

        title: "CRITICAL THINKING",

        intro:
            "The ability to examine information carefully, question assumptions, evaluate evidence, and reach reasoned conclusions.",

        why:
            "Critical thinking helps you distinguish strong reasoning from unsupported claims.",

        start:
            "When you encounter a claim, ask what evidence supports it, what assumptions it uses, and what information might be missing.",

        roadmap: [

            "Learn to identify claims",

            "Separate facts from opinions",

            "Recognise assumptions",

            "Evaluate evidence",

            "Compare competing explanations",

            "Identify weak reasoning",

            "Form evidence-based conclusions"

        ],

        advanced: [

            "Develop systematic source evaluation",

            "Learn argument mapping",

            "Identify assumptions and hidden premises",

            "Analyse evidence quality",

            "Study common reasoning errors",

            "Compare conflicting explanations",

            "Practise uncertainty-aware conclusions",

            "Write structured analytical arguments",

            "Challenge your own initial assumptions",

            "Build a collection of analytical projects and written work"

        ]

    },


    leadership: {

        title: "LEADERSHIP",

        intro:
            "The ability to take responsibility, coordinate people, make decisions, and turn ideas into action.",

        why:
            "Leadership is not limited to formal titles. It appears whenever people organise work, solve problems, and take responsibility.",

        start:
            "Start small. Take responsibility for a project, communicate expectations, and make sure the work actually reaches completion.",

        roadmap: [

            "Understand responsibility",

            "Improve communication",

            "Learn teamwork",

            "Practise decision-making",

            "Take ownership of projects",

            "Learn to resolve disagreements",

            "Lead larger projects"

        ],

        advanced: [

            "Develop personal responsibility systems",

            "Practise delegation and task ownership",

            "Learn project planning",

            "Develop decision frameworks",

            "Practise conflict resolution",

            "Lead collaborative projects",

            "Track team objectives and progress",

            "Learn how to give and receive feedback",

            "Analyse leadership decisions after completion",

            "Build evidence of leadership through completed projects"

        ]

    },


    "digital-literacy": {

        title: "DIGITAL LITERACY",

        intro:
            "The ability to understand, use, evaluate, and create with modern digital tools responsibly.",

        why:
            "Digital systems are now part of education, communication, research, creative work, and many professional environments.",

        start:
            "Begin by understanding the tools you already use. Learn what they do, how they work, and how to use them efficiently and responsibly.",

        roadmap: [

            "Understand digital environments",

            "Improve research skills",

            "Learn file and information organisation",

            "Understand online safety",

            "Use productivity tools effectively",

            "Explore technology and automation",

            "Create digital projects"

        ],

        advanced: [

            "Build an organised digital workspace",

            "Develop advanced information-search techniques",

            "Learn source verification",

            "Understand digital security fundamentals",

            "Develop productivity workflows",

            "Explore automation and computational thinking",

            "Create websites, digital projects, or technical work",

            "Learn responsible use of AI and digital systems",

            "Document technical projects",

            "Build a digital portfolio"

        ]

    },


    adaptability: {

        title: "ADAPTABILITY",

        intro:
            "The ability to learn, adjust, and remain effective when situations, technologies, expectations, or environments change.",

        why:
            "Education and careers rarely follow a perfectly predictable path. Adaptability helps you respond when circumstances change.",

        start:
            "Become comfortable learning something unfamiliar. Focus on how you learn, not only on what you already know.",

        roadmap: [

            "Become comfortable with change",

            "Develop independent learning",

            "Learn from mistakes",

            "Explore unfamiliar subjects",

            "Practise changing approaches",

            "Build resilience through projects",

            "Develop continuous learning habits"

        ],

        advanced: [

            "Build an independent learning system",

            "Track what learning methods work for you",

            "Practise entering unfamiliar environments",

            "Develop multiple approaches to difficult problems",

            "Review failures without treating them as endpoints",

            "Build cross-disciplinary knowledge",

            "Learn to update decisions when new evidence appears",

            "Develop transferable skills",

            "Create personal learning cycles",

            "Maintain a long-term development portfolio"

        ]

    }

};


/* =========================================
   PATHWAY DATA
========================================= */

const pathwayData = {

    after10th: {

        title: "AFTER 10TH",

        intro:
            "The stage where subject choices begin shaping the academic directions available to you next.",

        type: "root",

        choices: [

            {
                key: "science",
                title: "SCIENCE",
                text: "Explore science-based subject combinations and the directions they can lead toward."
            },

            {
                key: "commerce",
                title: "COMMERCE",
                text: "Explore business, finance, economics, accounting, and related directions."
            },

            {
                key: "humanities",
                title: "HUMANITIES",
                text: "Explore society, people, languages, history, psychology, law, and related fields."
            },

            {
                key: "vocational",
                title: "VOCATIONAL",
                text: "Explore practical, technical, and skill-oriented educational directions."
            }

        ]

    },


    after12th: {

        title: "AFTER 12TH",

        intro:
            "Explore the major directions students can investigate after completing school.",

        type: "root",

        choices: [

            {
                key: "engineering",
                title: "ENGINEERING & TECHNOLOGY",
                text: "Explore technical degrees, specialisations, projects, and technology careers."
            },

            {
                key: "medicine",
                title: "MEDICINE & HEALTH",
                text: "Explore medical and health-related educational directions."
            },

            {
                key: "law",
                title: "LAW",
                text: "Explore legal education, professional development, and related careers."
            },

            {
                key: "commerce-finance",
                title: "COMMERCE & FINANCE",
                text: "Explore accounting, finance, economics, business, and related directions."
            },

            {
                key: "design",
                title: "DESIGN",
                text: "Explore design, visual communication, product thinking, and creative careers."
            },

            {
                key: "pure-science",
                title: "PURE SCIENCES",
                text: "Explore mathematics, physics, chemistry, biology, and scientific research."
            }

        ]

    },


    global: {

        title: "GLOBAL OPTIONS",

        intro:
            "Explore international education pathways, different academic systems, and opportunities beyond your immediate environment.",

        type: "global",

        choices: [

            {
                key: "international-study",
                title: "INTERNATIONAL STUDY",
                text: "Understand how international education pathways can differ from Indian pathways."
            },

            {
                key: "global-careers",
                title: "GLOBAL CAREERS",
                text: "Explore skills and preparation that can support internationally oriented careers."
            },

            {
                key: "international-universities",
                title: "UNIVERSITIES",
                text: "Learn how to investigate universities, programmes, requirements, and opportunities."
            }

        ]

    },


    science: {

        title: "SCIENCE",

        intro:
            "Science opens several academic directions. The subjects you select can affect the routes available later.",

        type: "science",

        choices: [

            {
                key: "pcm",
                title: "PCM",
                text: "Physics, Chemistry and Mathematics."
            },

            {
                key: "pcb",
                title: "PCB",
                text: "Physics, Chemistry and Biology."
            },

            {
                key: "pcmb",
                title: "PCMB",
                text: "Physics, Chemistry, Mathematics and Biology."
            }

        ]

    },


    pcm: {

        title: "PCM",

        intro:
            "A mathematics-focused science combination that can support several technical, mathematical, scientific, and interdisciplinary directions.",

        type: "roadmap",

        roadmap: [

            "Complete secondary education with PCM subjects",

            "Strengthen Mathematics, Physics and Chemistry foundations",

            "Explore potential degree directions",

            "Research relevant entrance and admission routes",

            "Compare institutions and programmes",

            "Complete an undergraduate programme",

            "Build projects, internships, and practical experience",

            "Choose a specialisation or professional direction",

            "Develop a career portfolio"

        ],

        advanced: [

            "Map the academic requirements for your intended direction",

            "Build a subject-by-subject preparation system",

            "Identify relevant entrance examination routes",

            "Compare programme structures across institutions",

            "Create a shortlist using transparent criteria",

            "Plan preparation milestones",

            "Build practical projects alongside academics",

            "Seek internships, competitions, research exposure, or relevant experience",

            "Develop a specialisation strategy during higher education",

            "Build a professional portfolio before graduation",

            "Review alternative pathways in case your first route changes"

        ]

    },


    pcb: {

        title: "PCB",

        intro:
            "A biology-focused science combination that can support medical, life-science, health, and related directions.",

        type: "roadmap",

        roadmap: [

            "Complete secondary education with PCB subjects",

            "Build strong Biology, Physics and Chemistry foundations",

            "Identify health and life-science directions",

            "Research relevant admission routes",

            "Compare programmes and institutions",

            "Complete the selected degree",

            "Develop practical and academic experience",

            "Explore specialisation options",

            "Build professional experience"

        ],

        advanced: [

            "Map possible health and life-science directions",

            "Identify subject requirements for each target",

            "Research current admission routes",

            "Create a structured preparation timeline",

            "Compare institutions and programme structures",

            "Develop laboratory and practical exposure where relevant",

            "Build academic depth through projects or research exposure",

            "Develop communication and professional skills",

            "Investigate specialisation pathways",

            "Build a long-term professional development plan"

        ]

    },


    pcmb: {

        title: "PCMB",

        intro:
            "A broader science combination combining mathematics and biology, keeping multiple academic directions open.",

        type: "roadmap",

        roadmap: [

            "Complete secondary education with PCMB subjects",

            "Build foundations across all four subjects",

            "Identify which academic direction fits your interests",

            "Research relevant admission routes",

            "Compare degree options",

            "Choose a focused academic direction",

            "Develop practical experience",

            "Build specialised knowledge",

            "Prepare for professional opportunities"

        ],

        advanced: [

            "Evaluate your strengths across Mathematics and Biology",

            "Map possible technical and life-science directions",

            "Research the subject requirements of each target",

            "Create separate preparation tracks where necessary",

            "Monitor workload and academic performance",

            "Shortlist realistic academic routes",

            "Build relevant projects or practical experience",

            "Select a primary direction while retaining alternatives",

            "Develop specialised knowledge during higher education",

            "Create a professional roadmap beyond the degree"

        ]

    },


    engineering: {

        title: "ENGINEERING & TECHNOLOGY",

        intro:
            "Explore engineering and technology as a broad field containing multiple disciplines and career directions.",

        type: "roadmap",

        roadmap: [

            "Build strong mathematics and science foundations",

            "Explore engineering disciplines",

            "Research admission pathways",

            "Compare institutions and programmes",

            "Choose an undergraduate direction",

            "Build technical projects",

            "Gain practical experience",

            "Develop a specialisation",

            "Prepare for professional opportunities"

        ],

        advanced: [

            "Identify the engineering domains that interest you",

            "Research current admission requirements",

            "Compare curriculum structures",

            "Analyse institution and programme differences",

            "Plan entrance preparation where applicable",

            "Build foundational programming or technical skills",

            "Create increasingly complex projects",

            "Seek internships and practical exposure",

            "Develop a specialisation strategy",

            "Build a technical portfolio",

            "Prepare for internships and employment systematically"

        ]

    },


    medicine: {

        title: "MEDICINE & HEALTH",

        intro:
            "Explore healthcare and health-science directions while understanding the academic preparation and professional commitment involved.",

        type: "roadmap",

        roadmap: [

            "Build strong Biology, Chemistry and Physics foundations",

            "Understand available health-related directions",

            "Research admission requirements",

            "Prepare for relevant entrance pathways",

            "Compare programmes and institutions",

            "Complete the required degree",

            "Develop practical experience",

            "Explore specialisation",

            "Continue professional development"

        ],

        advanced: [

            "Map the healthcare fields that interest you",

            "Research current eligibility and admission requirements",

            "Build a structured academic preparation system",

            "Track preparation milestones",

            "Compare programme structures",

            "Develop strong scientific fundamentals",

            "Seek appropriate academic and practical exposure",

            "Understand the length and structure of the chosen professional pathway",

            "Research specialisation options",

            "Create a long-term professional development plan"

        ]

    },


    law: {

        title: "LAW",

        intro:
            "Explore legal education, legal reasoning, professional skills, and the different directions available within the legal field.",

        type: "roadmap",

        roadmap: [

            "Complete school education",

            "Develop reading and writing ability",

            "Explore legal education pathways",

            "Research relevant admission routes",

            "Complete a law programme",

            "Develop legal research skills",

            "Gain practical exposure",

            "Explore areas of legal practice",

            "Build professional experience"

        ],

        advanced: [

            "Develop strong reading comprehension",

            "Build structured writing ability",

            "Practise analytical reasoning",

            "Research current legal admission pathways",

            "Compare law programmes and institutions",

            "Develop legal research techniques",

            "Participate in debates, moots, writing, or relevant academic activities",

            "Seek internships and practical exposure",

            "Explore different legal specialisations",

            "Build a professional network and portfolio",

            "Track changing professional requirements"

        ]

    },


    "commerce-finance": {

        title: "COMMERCE & FINANCE",

        intro:
            "Explore accounting, economics, finance, business, management, and related professional directions.",

        type: "roadmap",

        roadmap: [

            "Build mathematics and commerce foundations",

            "Explore business and finance fields",

            "Research degree and professional routes",

            "Compare programmes",

            "Develop quantitative and analytical skills",

            "Gain practical experience",

            "Build professional projects",

            "Choose a specialisation",

            "Develop career readiness"

        ],

        advanced: [

            "Identify your preferred area within commerce",

            "Build accounting, economics, mathematics, or finance foundations",

            "Research current professional qualification routes",

            "Compare degree and professional pathways",

            "Develop spreadsheet and analytical skills",

            "Learn financial and business concepts deeply",

            "Build case studies and projects",

            "Seek internships or practical exposure",

            "Develop a specialisation",

            "Create a professional portfolio",

            "Build interview and workplace communication skills"

        ]

    },


    design: {

        title: "DESIGN",

        intro:
            "Explore design as a field combining creativity, research, problem solving, visual thinking, and practical execution.",

        type: "roadmap",

        roadmap: [

            "Develop observation and creative thinking",

            "Explore different design disciplines",

            "Build foundational design skills",

            "Create personal projects",

            "Develop a portfolio",

            "Research programmes and institutions",

            "Gain practical experience",

            "Choose a design specialisation",

            "Build professional opportunities"

        ],

        advanced: [

            "Explore multiple design disciplines",

            "Build observation and visual-thinking skills",

            "Learn design fundamentals systematically",

            "Develop research and user-understanding skills",

            "Create projects with documented processes",

            "Build a structured portfolio",

            "Study programme requirements carefully",

            "Seek feedback from experienced people",

            "Iterate portfolio projects",

            "Develop a specialised design direction",

            "Build professional presentation and communication skills"

        ]

    },


    "pure-science": {

        title: "PURE SCIENCES",

        intro:
            "Explore mathematics and the natural sciences through deeper academic study, research, and scientific problem solving.",

        type: "roadmap",

        roadmap: [

            "Build strong scientific foundations",

            "Explore scientific disciplines",

            "Research undergraduate programmes",

            "Develop mathematical and analytical skills",

            "Participate in projects or academic activities",

            "Complete higher education",

            "Explore research opportunities",

            "Develop specialisation",

            "Consider advanced study or scientific careers"

        ],

        advanced: [

            "Identify the scientific disciplines that interest you",

            "Strengthen mathematics and scientific reasoning",

            "Research academic programme structures",

            "Explore research-oriented opportunities",

            "Develop technical and analytical skills",

            "Participate in academic projects",

            "Seek mentorship where available",

            "Develop research literacy",

            "Explore specialisation and postgraduate directions",

            "Build a record of projects, research, and academic work"

        ]

    }

};


/* =========================================
   TEXT ANIMATION PREPARATION
========================================= */

function prepareTextAnimation() {

    const animatedElements =
        document.querySelectorAll(
            ".animated-heading, .animate-text"
        );

    animatedElements.forEach(element => {

        if (!element.dataset.originalHTML) {

            element.dataset.originalHTML =
                element.innerHTML;

        }

    });

}


/* =========================================
   RESET TEXT
========================================= */

function resetAnimatedText(slideElement) {

    const animatedElements =
        slideElement.querySelectorAll(
            ".animated-heading, .animate-text"
        );

    animatedElements.forEach(element => {

        if (element.dataset.originalHTML) {

            element.innerHTML =
                element.dataset.originalHTML;

        }

    });

}


/* =========================================
   ANIMATE TEXT
========================================= */

function animateSlideText(slideElement) {

    resetAnimatedText(slideElement);

    const animatedElements =
        slideElement.querySelectorAll(
            ".animated-heading, .animate-text"
        );

    let globalCharIndex = 0;


    animatedElements.forEach(element => {

        const wrapTextNodes = (node) => {

            if (node.nodeType === Node.TEXT_NODE) {

                const text = node.nodeValue;

                const fragment =
                    document.createDocumentFragment();

                const words =
                    text.split(/(\s+)/);


                words.forEach(word => {

                    if (word.trim() === "") {

                        fragment.appendChild(
                            document.createTextNode(word)
                        );

                    } else {

                        const wordSpan =
                            document.createElement("span");

                        wordSpan.className =
                            "word";


                        for (
                            let i = 0;
                            i < word.length;
                            i++
                        ) {

                            const charSpan =
                                document.createElement("span");

                            charSpan.className =
                                "char";

                            charSpan.textContent =
                                word[i];

                            charSpan.style.animationDelay =
                                `${globalCharIndex * 0.025}s`;

                            globalCharIndex++;

                            wordSpan.appendChild(
                                charSpan
                            );

                        }

                        fragment.appendChild(
                            wordSpan
                        );

                    }

                });


                node.parentNode.replaceChild(
                    fragment,
                    node
                );


            } else if (
                node.nodeType === Node.ELEMENT_NODE
            ) {

                Array.from(
                    node.childNodes
                ).forEach(
                    wrapTextNodes
                );

            }

        };


        wrapTextNodes(element);

    });

}


/* =========================================
   SKILL CARD ANIMATION
========================================= */

function triggerSkillCards(slideElement) {

    const cards =
        slideElement.querySelectorAll(
            ".skill-card"
        );

    cards.forEach((card, index) => {

        card.classList.remove(
            "skill-card-visible"
        );

        setTimeout(() => {

            card.classList.add(
                "skill-card-visible"
            );

        }, 150 * index + 300);

    });

}


/* =========================================
   SLIDE SWITCHING
========================================= */

function goToSlide(index) {

    if (
        index < 0 ||
        index >= slides.length
    ) {
        return;
    }


    hideExploration(false);


    slides[currentSlide]
        .classList.remove("active");


    currentSlide = index;


    slides[currentSlide]
        .classList.add("active");


    navButtons.forEach((btn, i) => {

        btn.classList.toggle(
            "active",
            i === currentSlide
        );

    });


    if (slideCounter) {

        const slideNum =
            String(
                currentSlide + 1
            ).padStart(2, "0");

        const totalSlides =
            String(
                slides.length
            ).padStart(2, "0");

        slideCounter.textContent =
            `${slideNum} / ${totalSlides}`;

    }


    animateSlideText(
        slides[currentSlide]
    );

    triggerSkillCards(
        slides[currentSlide]
    );


    if (mobileMenu) {

        mobileMenu.classList.remove(
            "open"
        );

    }


    if (
        window.location.hash
    ) {

        history.replaceState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );

    }

}


/* =========================================
   OPEN EXPLORATION
========================================= */

function openExploration() {

    explorationOpen = true;

    explorationScreen.classList.add(
        "open"
    );

    explorationScreen.setAttribute(
        "aria-hidden",
        "false"
    );

    slideControls.classList.add(
        "exploration-active"
    );

    document.body.classList.add(
        "exploration-open"
    );

    if (mobileMenu) {

        mobileMenu.classList.remove(
            "open"
        );

    }

}


/* =========================================
   CLOSE EXPLORATION
========================================= */

function hideExploration(
    clearHash = true
) {

    explorationOpen = false;

    explorationScreen.classList.remove(
        "open"
    );

    explorationScreen.setAttribute(
        "aria-hidden",
        "true"
    );

    slideControls.classList.remove(
        "exploration-active"
    );

    document.body.classList.remove(
        "exploration-open"
    );


    if (clearHash && window.location.hash) {

        history.replaceState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );

    }

}


/* =========================================
   SET EXPLORATION HEADER
========================================= */

function setExplorationHeader(
    kicker,
    title,
    intro
) {

    explorationKicker.textContent =
        kicker;

    explorationTitle.textContent =
        title;

    explorationIntro.textContent =
        intro;

}


/* =========================================
   ROADMAP BUTTON
========================================= */

function advancedRoadmapButton() {

    return `

        <div class="advanced-roadmap-zone">

            <div class="advanced-roadmap-copy">

                <div class="advanced-roadmap-label">
                    FOR THOSE WHO WANT TO GO FURTHER
                </div>

                <p>
                    The standard roadmap gives you the direction.
                    The advanced roadmap gives you a deeper plan
                    for actually working toward it.
                </p>

            </div>

            <button
                class="advanced-roadmap-button"
                id="generateAdvancedRoadmap"
            >

                <span>
                    GENERATE ADVANCED ROADMAP
                </span>

                <strong>
                    →
                </strong>

            </button>

        </div>

    `;

}


/* =========================================
   RENDER SKILL
========================================= */

function renderSkill(
    key
) {

    const data =
        skillData[key];

    if (!data) return;


    currentRoute =
        `skill/${key}`;


    setExplorationHeader(
        "SKILL / DEVELOPMENT",
        data.title,
        data.intro
    );


    explorationContent.innerHTML = `

        <div class="exploration-grid">


            <div class="info-panel">

                <div class="panel-number">
                    01
                </div>

                <h3>
                    WHY IT MATTERS
                </h3>

                <p>
                    ${data.why}
                </p>

            </div>


            <div class="info-panel">

                <div class="panel-number">
                    02
                </div>

                <h3>
                    STARTING POINT
                </h3>

                <p>
                    ${data.start}
                </p>

            </div>


        </div>


        <div class="roadmap-section">

            <div class="roadmap-heading">

                <span>
                    DEVELOPMENT PATH
                </span>

                <small>
                    ${String(data.roadmap.length).padStart(2, "0")}
                    STAGES
                </small>

            </div>


            <div class="roadmap">

                ${data.roadmap.map(
                    (step, index) => `

                        <div class="roadmap-step">

                            <div class="roadmap-node">
                                ${String(index + 1).padStart(2, "0")}
                            </div>

                            <div class="roadmap-line"></div>

                            <div class="roadmap-step-content">

                                <span>
                                    STAGE ${String(index + 1).padStart(2, "0")}
                                </span>

                                <h4>
                                    ${step}
                                </h4>

                            </div>

                        </div>

                    `
                ).join("")}

            </div>

        </div>


        <div class="kayra-help">

            <div class="kayra-help-label">
                HOW KAYRA HELPS
            </div>

            <h3>
                TURN KNOWLEDGE
                INTO PROGRESS.
            </h3>

            <p>
                Kayra is designed to help you move from
                understanding a skill to actually developing it
                through structured exploration and action.
            </p>

        </div>


        ${advancedRoadmapButton()}

    `;


    openExploration();

}


/* =========================================
   RENDER ROOT PATHWAY
========================================= */

function renderPathway(
    key
) {

    const data =
        pathwayData[key];

    if (!data) return;


    currentRoute =
        `pathway/${key}`;


    setExplorationHeader(
        "PATHWAY / EXPLORATION",
        data.title,
        data.intro
    );


    explorationContent.innerHTML = `

        <div class="choice-grid">

            ${data.choices.map(
                (choice, index) => `

                    <button
                        class="exploration-choice"
                        data-pathway-choice="${key}/${choice.key}"
                    >

                        <div class="choice-number">
                            ${String(index + 1).padStart(2, "0")}
                        </div>

                        <div class="choice-body">

                            <h3>
                                ${choice.title}
                            </h3>

                            <p>
                                ${choice.text}
                            </p>

                        </div>

                        <span class="choice-arrow">
                            →
                        </span>

                    </button>

                `
            ).join("")}

        </div>

    `;


    openExploration();

}


/* =========================================
   RENDER ROADMAP PATHWAY
========================================= */

function renderRoadmap(
    key
) {

    const data =
        pathwayData[key];

    if (!data) return;


    currentRoute =
        `pathway/${key}`;


    setExplorationHeader(
        "PATHWAY / ROADMAP",
        data.title,
        data.intro
    );


    explorationContent.innerHTML = `

        <div class="roadmap-section pathway-roadmap">

            <div class="roadmap-heading">

                <span>
                    CORE ROADMAP
                </span>

                <small>
                    ${String(data.roadmap.length).padStart(2, "0")}
                    STAGES
                </small>

            </div>


            <div class="roadmap">

                ${data.roadmap.map(
                    (step, index) => `

                        <div class="roadmap-step">

                            <div class="roadmap-node">
                                ${String(index + 1).padStart(2, "0")}
                            </div>

                            <div class="roadmap-line"></div>

                            <div class="roadmap-step-content">

                                <span>
                                    STAGE ${String(index + 1).padStart(2, "0")}
                                </span>

                                <h4>
                                    ${step}
                                </h4>

                            </div>

                        </div>

                    `
                ).join("")}

            </div>

        </div>


        <div class="roadmap-warning">

            <span>
                KAYRA NOTE
            </span>

            <p>
                Educational pathways can vary by programme,
                institution, eligibility requirements, and year.
                Use this roadmap as a structure for exploration,
                then verify current requirements before making
                important decisions.
            </p>

        </div>


        ${advancedRoadmapButton()}

    `;


    openExploration();

}


/* =========================================
   ADVANCED ROADMAP GENERATOR
========================================= */

function startAdvancedRoadmap() {

    if (!currentRoute) {
        return;
    }


    generatorTarget =
        currentRoute;


    roadmapGenerator.classList.add(
        "open"
    );

    roadmapGenerator.setAttribute(
        "aria-hidden",
        "false"
    );


    generatorProgressBar.style.width =
        "0%";

    generatorProgress.textContent =
        "00";


    generatorMessage.textContent =
        "ANALYSING YOUR DIRECTION...";


    let progress = 0;


    const messages = [

        "ANALYSING YOUR DIRECTION...",

        "MAPPING DEVELOPMENT STAGES...",

        "EXPANDING YOUR OPTIONS...",

        "BUILDING ACTION POINTS...",

        "STRUCTURING YOUR NEXT STEPS...",

        "REFINING THE ROADMAP...",

        "FINALISING YOUR PLAN..."

    ];


    let messageIndex = 0;


    if (generatorTimer) {

        clearInterval(
            generatorTimer
        );

    }


    generatorTimer =
        setInterval(() => {

            progress +=
                Math.floor(
                    Math.random() * 4
                ) + 2;


            if (progress >= 100) {

                progress = 100;

            }


            generatorProgressBar.style.width =
                `${progress}%`;


            generatorProgress.textContent =
                String(progress)
                    .padStart(2, "0");


            if (
                progress > 15 &&
                messageIndex === 0
            ) {

                messageIndex = 1;

                generatorMessage.textContent =
                    messages[messageIndex];

            }


            if (
                progress > 30 &&
                messageIndex === 1
            ) {

                messageIndex = 2;

                generatorMessage.textContent =
                    messages[messageIndex];

            }


            if (
                progress > 45 &&
                messageIndex === 2
            ) {

                messageIndex = 3;

                generatorMessage.textContent =
                    messages[messageIndex];

            }


            if (
                progress > 60 &&
                messageIndex === 3
            ) {

                messageIndex = 4;

                generatorMessage.textContent =
                    messages[messageIndex];

            }


            if (
                progress > 78 &&
                messageIndex === 4
            ) {

                messageIndex = 5;

                generatorMessage.textContent =
                    messages[messageIndex];

            }


            if (
                progress > 92 &&
                messageIndex === 5
            ) {

                messageIndex = 6;

                generatorMessage.textContent =
                    messages[messageIndex];

            }


            if (progress >= 100) {

                clearInterval(
                    generatorTimer
                );

                generatorTimer =
                    null;


                generatorMessage.textContent =
                    "ROADMAP READY.";


                setTimeout(() => {

                    roadmapGenerator.classList.remove(
                        "open"
                    );

                    roadmapGenerator.setAttribute(
                        "aria-hidden",
                        "true"
                    );


                    renderAdvancedRoadmap(
                        generatorTarget
                    );

                }, 700);

            }

        }, 90);

}


/* =========================================
   RENDER ADVANCED ROADMAP
========================================= */

function renderAdvancedRoadmap(
    route
) {

    let data = null;

    let title = "";


    if (
        route.startsWith("skill/")
    ) {

        const key =
            route.replace(
                "skill/",
                ""
            );

        data =
            skillData[key];

        if (!data) return;

        title =
            data.title;

    }


    if (
        route.startsWith("pathway/")
    ) {

        const key =
            route.replace(
                "pathway/",
                ""
            );

        data =
            pathwayData[key];

        if (!data) return;

        title =
            data.title;

    }


    if (
        !data ||
        !data.advanced
    ) {

        return;

    }


    currentRoute =
        `${route}/advanced`;


    setExplorationHeader(
        "KAYRA / ADVANCED",
        `${title} — ADVANCED`,
        "A deeper development structure designed for people who want to move beyond the starting roadmap."
    );


    explorationContent.innerHTML = `

        <div class="advanced-introduction">

            <div class="advanced-introduction-label">
                DEEPER DIRECTION
            </div>

            <h3>
                SERIOUS PROGRESS
                REQUIRES MORE THAN
                A STARTING POINT.
            </h3>

            <p>
                The advanced roadmap expands the basic direction
                into smaller actions, preparation points,
                practical development, and long-term progression.
            </p>

        </div>


        <div class="advanced-roadmap-section">

            <div class="roadmap-heading">

                <span>
                    ADVANCED DEVELOPMENT SYSTEM
                </span>

                <small>
                    ${String(data.advanced.length).padStart(2, "0")}
                    STAGES
                </small>

            </div>


            <div class="advanced-roadmap-list">

                ${data.advanced.map(
                    (step, index) => `

                        <div class="advanced-roadmap-step">

                            <div class="advanced-stage-number">
                                ${String(index + 1).padStart(2, "0")}
                            </div>

                            <div class="advanced-stage-content">

                                <span>
                                    DEVELOPMENT STAGE
                                    ${String(index + 1).padStart(2, "0")}
                                </span>

                                <h4>
                                    ${step}
                                </h4>

                            </div>

                            <div class="advanced-stage-marker">
                                +
                            </div>

                        </div>

                    `
                ).join("")}

            </div>

        </div>


        <div class="advanced-final-panel">

            <div class="advanced-final-number">
                K
            </div>

            <div>

                <span>
                    KAYRA PRINCIPLE
                </span>

                <h3>
                    INFORMATION BECOMES
                    USEFUL WHEN YOU ACT ON IT.
                </h3>

                <p>
                    Use this roadmap as a working document.
                    Mark what you understand, identify what
                    you still need to learn, and keep moving.
                </p>

            </div>

        </div>


        <button
            class="advanced-back-button"
            id="advancedBackButton"
        >
            ← RETURN TO CORE ROADMAP
        </button>

    `;


    openExploration();

}


/* =========================================
   GET PARENT ROUTE
========================================= */

function getParentRoute(
    route
) {

    if (
        route.endsWith("/advanced")
    ) {

        return route.replace(
            "/advanced",
            ""
        );

    }


    const parts =
        route.split("/");


    if (parts.length <= 1) {

        return "";

    }


    parts.pop();

    return parts.join("/");

}


/* =========================================
   HANDLE EXPLORATION BACK
========================================= */

function handleExplorationBack() {

    if (!currentRoute) {

        goToSlide(2);

        return;

    }


    const parent =
        getParentRoute(
            currentRoute
        );


    if (
        currentRoute.endsWith(
            "/advanced"
        )
    ) {

        renderRoute(
            parent
        );

        return;

    }


    if (
        parent === ""
    ) {

        if (
            currentRoute.startsWith(
                "skill/"
            )
        ) {

            goToSlide(2);

        } else {

            goToSlide(3);

        }

        return;

    }


    renderRoute(parent);

}


/* =========================================
   ROUTE RENDERER
========================================= */

function renderRoute(
    route
) {

    if (!route) {

        hideExploration();

        return;

    }


    const parts =
        route.split("/");


    if (
        parts[0] === "skill" &&
        parts[1]
    ) {

        renderSkill(
            parts[1]
        );

        return;

    }


    if (
        parts[0] === "pathway" &&
        parts[1]
    ) {

        if (
            parts[2]
        ) {

            if (
                pathwayData[parts[2]]
            ) {

                renderPathway(
                    parts[2]
                );

            }

        } else {

            const key =
                parts[1];

            const data =
                pathwayData[key];

            if (!data) return;


            if (
                data.type === "roadmap"
            ) {

                renderRoadmap(
                    key
                );

            } else {

                renderPathway(
                    key
                );

            }

        }

    }

}


/* =========================================
   PATHWAY ROUTE RESOLUTION
========================================= */

function handlePathwayChoice(
    route
) {

    const parts =
        route.split("/");


    /*
       after10th/science
    */

    if (
        parts.length === 2
    ) {

        const key =
            parts[1];

        if (
            pathwayData[key]
        ) {

            if (
                pathwayData[key].type ===
                "roadmap"
            ) {

                renderRoadmap(
                    key
                );

            } else {

                renderPathway(
                    key
                );

            }

        }

        return;

    }

}


/* =========================================
   EVENT DELEGATION
========================================= */

document.addEventListener(
    "click",
    (event) => {


        /* SKILL */

        const skillCard =
            event.target.closest(
                "[data-explore]"
            );


        if (skillCard) {

            const key =
                skillCard.dataset.explore;

            renderSkill(key);

            return;

        }


        /* PATHWAY */

        const pathwayRow =
            event.target.closest(
                "[data-pathway]"
            );


        if (pathwayRow) {

            const key =
                pathwayRow.dataset.pathway;

            if (
                pathwayData[key]
            ) {

                renderPathway(key);

            }

            return;

        }


        /* PATHWAY CHOICE */

        const pathwayChoice =
            event.target.closest(
                "[data-pathway-choice]"
            );


        if (pathwayChoice) {

            handlePathwayChoice(
                pathwayChoice.dataset.pathwayChoice
            );

            return;

        }


        /* ADVANCED ROADMAP */

        const advancedButton =
            event.target.closest(
                "#generateAdvancedRoadmap"
            );


        if (advancedButton) {

            startAdvancedRoadmap();

            return;

        }


        /* ADVANCED BACK */

        const advancedBack =
            event.target.closest(
                "#advancedBackButton"
            );


        if (advancedBack) {

            const parent =
                currentRoute.replace(
                    "/advanced",
                    ""
                );

            renderRoute(parent);

            return;

        }

    }
);


/* =========================================
   EXPLORATION BACK BUTTON
========================================= */

if (explorationBack) {

    explorationBack.addEventListener(
        "click",
        handleExplorationBack
    );

}


/* =========================================
   NEXT SLIDE
========================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            if (explorationOpen) {
                return;
            }

            if (
                currentSlide <
                slides.length - 1
            ) {

                goToSlide(
                    currentSlide + 1
                );

            } else {

                goToSlide(0);

            }

        }
    );

}


/* =========================================
   PREVIOUS SLIDE
========================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        () => {

            if (explorationOpen) {
                return;
            }

            if (
                currentSlide > 0
            ) {

                goToSlide(
                    currentSlide - 1
                );

            } else {

                goToSlide(
                    slides.length - 1
                );

            }

        }
    );

}


/* =========================================
   DESKTOP NAVIGATION
========================================= */

navButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                goToSlide(index);

            }
        );

    }
);


/* =========================================
   MOBILE NAVIGATION
========================================= */

mobileNavButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                goToSlide(index);

            }
        );

    }
);


/* =========================================
   SLIDE TARGET BUTTONS
========================================= */

document
    .querySelectorAll(
        "[data-slide-target]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            (event) => {

                const target =
                    parseInt(
                        event.currentTarget
                            .getAttribute(
                                "data-slide-target"
                            ),
                        10
                    );


                if (
                    !isNaN(target)
                ) {

                    goToSlide(target);

                }

            }
        );

    });


/* =========================================
   MOBILE MENU
========================================= */

if (
    menuButton &&
    mobileMenu
) {

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

window.addEventListener(
    "keydown",
    (event) => {

        if (explorationOpen) {

            if (
                event.key === "Escape"
            ) {

                handleExplorationBack();

            }

            return;

        }


        if (
            event.key === "ArrowRight" ||
            event.key === "ArrowDown"
        ) {

            if (
                currentSlide <
                slides.length - 1
            ) {

                goToSlide(
                    currentSlide + 1
                );

            }

        }


        else if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp"
        ) {

            if (
                currentSlide > 0
            ) {

                goToSlide(
                    currentSlide - 1
                );

            }

        }

    }
);


/* =========================================
   START BUTTON
========================================= */

const startExploringButton =
    document.getElementById(
        "startExploringButton"
    );


if (startExploringButton) {

    startExploringButton.addEventListener(
        "click",
        () => {

            goToSlide(2);

        }
    );

}


/* =========================================
   INITIALISE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        prepareTextAnimation();

        goToSlide(0);

    }
);
