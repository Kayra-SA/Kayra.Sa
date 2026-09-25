/* =====================================================
   KAYRA
   INTERACTIVE EXPLORATION ENGINE
===================================================== */


/* =====================================================
   MAIN ELEMENTS
===================================================== */

const slides =
    Array.from(
        document.querySelectorAll(".slide")
    );

const navButtons =
    document.querySelectorAll(
        ".nav-links button"
    );

const mobileNavButtons =
    document.querySelectorAll(
        ".mobile-nav-link"
    );

const previousButton =
    document.getElementById(
        "previousSlide"
    );

const nextButton =
    document.getElementById(
        "nextSlide"
    );

const slideCounter =
    document.getElementById(
        "slideCounter"
    );

const menuButton =
    document.getElementById(
        "menuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


/* =====================================================
   EXPLORATION ELEMENTS
===================================================== */

const explorationSystem =
    document.getElementById(
        "explorationSystem"
    );

const explorationContent =
    document.getElementById(
        "explorationContent"
    );

const explorationBack =
    document.getElementById(
        "explorationBack"
    );

const explorationBreadcrumb =
    document.getElementById(
        "explorationBreadcrumb"
    );


/* =====================================================
   STATE
===================================================== */

let currentSlide = 0;

let explorationMode = false;

let explorationHistory = [];


/* =====================================================
   SKILL DATA
===================================================== */

const skillData = {


    communication: {

        number: "01",

        title: "COMMUNICATION",

        description:
            "The ability to express ideas clearly, understand others, and communicate with confidence.",

        roadmap: [

            {
                title: "UNDERSTAND",
                text:
                    "Learn how communication works: clarity, listening, tone, body language, and structure."
            },

            {
                title: "PRACTICE",
                text:
                    "Start speaking, writing, presenting, discussing, and listening in everyday situations."
            },

            {
                title: "BUILD",
                text:
                    "Take on presentations, debates, group projects, interviews, and collaborative work."
            },

            {
                title: "APPLY",
                text:
                    "Use communication in academic work, leadership, teamwork, and future professional environments."
            }

        ],

        help: [

            {
                title: "ASSESS YOUR LEVEL",
                text:
                    "Understand where your current communication strengths and weaknesses are."
            },

            {
                title: "BUILD YOUR PLAN",
                text:
                    "Turn your weaknesses into specific practice goals."
            },

            {
                title: "TRACK PROGRESS",
                text:
                    "Build evidence of improvement through projects, presentations, and activities."
            }

        ]

    },


    creativity: {

        number: "02",

        title: "CREATIVITY",

        description:
            "The ability to generate ideas, experiment with possibilities, and approach challenges from different perspectives.",

        roadmap: [

            {
                title: "OBSERVE",
                text:
                    "Expose yourself to different ideas, subjects, designs, stories, technologies, and experiences."
            },

            {
                title: "GENERATE",
                text:
                    "Practice producing multiple possible answers instead of immediately choosing the first one."
            },

            {
                title: "EXPERIMENT",
                text:
                    "Turn ideas into sketches, prototypes, projects, stories, designs, or experiments."
            },

            {
                title: "CREATE",
                text:
                    "Build a portfolio of work that demonstrates how you think and what you can create."
            }

        ],

        help: [

            {
                title: "DISCOVER",
                text:
                    "Identify the environments and activities where your creativity naturally appears."
            },

            {
                title: "PRACTICE",
                text:
                    "Create structured challenges that encourage experimentation."
            },

            {
                title: "BUILD",
                text:
                    "Turn creative work into projects that can demonstrate your abilities."
            }

        ]

    },


    "problem-solving": {

        number: "03",

        title: "PROBLEM SOLVING",

        description:
            "The ability to understand complex problems, break them down, and develop practical solutions.",

        roadmap: [

            {
                title: "DEFINE",
                text:
                    "Learn to identify the actual problem before trying to solve it."
            },

            {
                title: "BREAK DOWN",
                text:
                    "Separate large problems into smaller, understandable parts."
            },

            {
                title: "EXPLORE",
                text:
                    "Generate multiple solutions and compare their strengths and limitations."
            },

            {
                title: "SOLVE",
                text:
                    "Test your solution, learn from failure, and improve your approach."
            }

        ],

        help: [

            {
                title: "CHALLENGES",
                text:
                    "Practice through structured problems and real-world scenarios."
            },

            {
                title: "REFLECTION",
                text:
                    "Understand not only what solution worked, but why it worked."
            },

            {
                title: "PROGRESS",
                text:
                    "Track increasingly complex challenges over time."
            }

        ]

    },


    "critical-thinking": {

        number: "04",

        title: "CRITICAL THINKING",

        description:
            "The ability to question information, evaluate evidence, recognize assumptions, and make reasoned decisions.",

        roadmap: [

            {
                title: "QUESTION",
                text:
                    "Learn to ask what is being claimed, why it is being claimed, and what evidence supports it."
            },

            {
                title: "ANALYSE",
                text:
                    "Separate facts, opinions, assumptions, interpretations, and conclusions."
            },

            {
                title: "COMPARE",
                text:
                    "Evaluate competing explanations and identify strengths and weaknesses."
            },

            {
                title: "DECIDE",
                text:
                    "Use evidence and reasoning to reach conclusions while remaining open to new information."
            }

        ],

        help: [

            {
                title: "ASSESS",
                text:
                    "Identify how you currently approach information and decisions."
            },

            {
                title: "CHALLENGE",
                text:
                    "Practice evaluating claims and evidence."
            },

            {
                title: "REFLECT",
                text:
                    "Review your decisions and understand how your reasoning developed."
            }

        ]

    },


    leadership: {

        number: "05",

        title: "LEADERSHIP",

        description:
            "The ability to take initiative, work with people, make decisions, and turn ideas into action.",

        roadmap: [

            {
                title: "INITIATE",
                text:
                    "Start taking responsibility for small tasks, ideas, and group activities."
            },

            {
                title: "COLLABORATE",
                text:
                    "Learn how to listen, delegate, support teammates, and resolve disagreements."
            },

            {
                title: "LEAD",
                text:
                    "Take responsibility for projects and help groups move toward a shared goal."
            },

            {
                title: "IMPACT",
                text:
                    "Build evidence of leadership through meaningful projects and contributions."
            }

        ],

        help: [

            {
                title: "IDENTIFY",
                text:
                    "Understand the leadership behaviours you already demonstrate."
            },

            {
                title: "PRACTICE",
                text:
                    "Develop leadership through projects, teams, and responsibility."
            },

            {
                title: "DOCUMENT",
                text:
                    "Build a record of projects and experiences that demonstrate initiative."
            }

        ]

    },


    "digital-literacy": {

        number: "06",

        title: "DIGITAL LITERACY",

        description:
            "The ability to understand modern technology and use digital tools safely, effectively, and creatively.",

        roadmap: [

            {
                title: "FOUNDATIONS",
                text:
                    "Understand digital systems, online information, privacy, security, and responsible technology use."
            },

            {
                title: "TOOLS",
                text:
                    "Learn productivity, research, communication, creative, and technical tools."
            },

            {
                title: "CREATE",
                text:
                    "Move beyond consuming technology and start building, designing, analysing, or automating."
            },

            {
                title: "APPLY",
                text:
                    "Use digital skills to improve academic work, projects, collaboration, and career preparation."
            }

        ],

        help: [

            {
                title: "MAP",
                text:
                    "Understand which digital abilities are relevant to your goals."
            },

            {
                title: "LEARN",
                text:
                    "Create a structured path through tools and concepts."
            },

            {
                title: "BUILD",
                text:
                    "Turn digital learning into practical projects."
            }

        ]

    },


    adaptability: {

        number: "07",

        title: "ADAPTABILITY",

        description:
            "The ability to learn continuously, respond to change, and remain effective in unfamiliar situations.",

        roadmap: [

            {
                title: "NOTICE",
                text:
                    "Understand how you react when plans change or situations become unfamiliar."
            },

            {
                title: "ADJUST",
                text:
                    "Practice changing your approach when your first strategy does not work."
            },

            {
                title: "LEARN",
                text:
                    "Build the habit of learning from mistakes, feedback, and unfamiliar experiences."
            },

            {
                title: "GROW",
                text:
                    "Become more comfortable entering new environments and learning new systems."
            }

        ],

        help: [

            {
                title: "REFLECT",
                text:
                    "Understand how you currently respond to change."
            },

            {
                title: "CHALLENGE",
                text:
                    "Create opportunities to work outside familiar routines."
            },

            {
                title: "TRACK",
                text:
                    "Document how your response to unfamiliar situations changes over time."
            }

        ]

    }

};


/* =====================================================
   PATHWAY DATA
===================================================== */

const pathwayData = {


    after10th: {

        title: "AFTER 10TH",

        description:
            "Your next stage can take several directions. Explore the major routes available after Class 10 in India.",

        choices: [

            {
                id: "science",
                number: "01",
                title: "SCIENCE",
                description:
                    "Explore Physics, Chemistry, Mathematics, Biology, and science-focused pathways."
            },

            {
                id: "commerce",
                number: "02",
                title: "COMMERCE",
                description:
                    "Explore business, finance, economics, accounting, and related pathways."
            },

            {
                id: "humanities",
                number: "03",
                title: "HUMANITIES",
                description:
                    "Explore history, political science, psychology, sociology, languages, and more."
            },

            {
                id: "vocational",
                number: "04",
                title: "VOCATIONAL",
                description:
                    "Explore skill-focused and vocational education routes."
            }

        ]

    },


    after12th: {

        title: "AFTER 12TH",

        description:
            "Explore major degree and career directions after completing Class 12.",

        choices: [

            {
                id: "engineering",
                number: "01",
                title: "ENGINEERING",
                description:
                    "Technology, engineering, computing, infrastructure, and applied sciences."
            },

            {
                id: "medicine",
                number: "02",
                title: "MEDICINE & HEALTH",
                description:
                    "Medicine, healthcare, allied health, and biological sciences."
            },

            {
                id: "law",
                number: "03",
                title: "LAW",
                description:
                    "Legal education, advocacy, corporate law, public law, and related careers."
            },

            {
                id: "commerce-careers",
                number: "04",
                title: "COMMERCE & FINANCE",
                description:
                    "Accounting, finance, economics, management, banking, and business."
            },

            {
                id: "design",
                number: "05",
                title: "DESIGN",
                description:
                    "Product, communication, fashion, architecture, UI/UX, and creative fields."
            },

            {
                id: "computer-science",
                number: "06",
                title: "COMPUTER SCIENCE",
                description:
                    "Software, systems, AI, data, cybersecurity, and technology careers."
            }

        ]

    },


    global: {

        title: "GLOBAL OPTIONS",

        description:
            "Explore international education pathways while keeping your planning connected to your academic goals.",

        choices: [

            {
                id: "international-university",
                number: "01",
                title: "INTERNATIONAL UNIVERSITY",
                description:
                    "Explore undergraduate study outside India."
            },

            {
                id: "international-law",
                number: "02",
                title: "GLOBAL LAW",
                description:
                    "Explore selected international legal education pathways."
            },

            {
                id: "international-stem",
                number: "03",
                title: "GLOBAL STEM",
                description:
                    "Explore international science and technology education."
            }

        ]

    }

};


/* =====================================================
   DETAILED PATHWAY DATA
===================================================== */

const detailedPathways = {


    science: {

        title: "SCIENCE",

        description:
            "A broad academic route that can lead toward engineering, medicine, pure sciences, computing, architecture, and more.",

        choices: [

            {
                id: "pcm",
                number: "01",
                title: "PCM",
                description:
                    "Physics • Chemistry • Mathematics"
            },

            {
                id: "pcb",
                number: "02",
                title: "PCB",
                description:
                    "Physics • Chemistry • Biology"
            },

            {
                id: "pcmb",
                number: "03",
                title: "PCMB",
                description:
                    "Physics • Chemistry • Mathematics • Biology"
            }

        ]

    },


    commerce: {

        title: "COMMERCE",

        description:
            "Explore business, finance, accounting, economics, management, entrepreneurship, and related pathways.",

        choices: [

            {
                id: "accounting-finance",
                number: "01",
                title: "ACCOUNTING & FINANCE",
                description:
                    "Explore accounting, financial analysis, taxation, and related careers."
            },

            {
                id: "business-management",
                number: "02",
                title: "BUSINESS & MANAGEMENT",
                description:
                    "Explore management, entrepreneurship, marketing, operations, and business."
            },

            {
                id: "economics",
                number: "03",
                title: "ECONOMICS",
                description:
                    "Explore economic theory, analysis, policy, and quantitative applications."
            }

        ]

    },


    humanities: {

        title: "HUMANITIES",

        description:
            "A broad route covering people, society, culture, history, politics, languages, psychology, and ideas.",

        choices: [

            {
                id: "social-sciences",
                number: "01",
                title: "SOCIAL SCIENCES",
                description:
                    "Explore psychology, sociology, political science, economics, and related fields."
            },

            {
                id: "law-path",
                number: "02",
                title: "LAW",
                description:
                    "Build toward legal education and careers."
            },

            {
                id: "media",
                number: "03",
                title: "MEDIA & COMMUNICATION",
                description:
                    "Explore journalism, communication, media, content, and related careers."
            }

        ]

    },


    pcm: {

        title: "PCM",

        description:
            "Physics, Chemistry and Mathematics can lead toward engineering, computing, architecture, pure sciences and several quantitative fields.",

        roadmap: [

            "Class 11–12 with PCM",
            "Develop mathematics and analytical foundations",
            "Explore entrance and admission routes",
            "Choose a relevant undergraduate pathway",
            "Build projects, experience, and specialisation",
            "Move toward higher study or employment"

        ],

        difficulty: {

            academic: 80,
            competition: 85,
            commitment: 80,
            specialisation: 70

        },

        requirements: [

            {
                title: "ACADEMIC FOUNDATION",
                text:
                    "Strong foundations in mathematics and the physical sciences are useful for many PCM pathways."
            },

            {
                title: "ENTRANCE ROUTES",
                text:
                    "Requirements vary by institution and course. Entrance examinations may apply."
            },

            {
                title: "SKILLS",
                text:
                    "Analytical thinking, mathematics, problem solving, and technical skills can be valuable."
            },

            {
                title: "PLANNING",
                text:
                    "Compare institutions, eligibility rules, entrance requirements, costs, and course structure before applying."
            }

        ],

        colleges: [

            {
                title: "IITs",
                text:
                    "Indian Institutes of Technology offering a range of engineering and technology programmes.",
                tag: "INDIA"
            },

            {
                title: "NITs",
                text:
                    "National Institutes of Technology offering engineering and technology programmes.",
                tag: "INDIA"
            },

            {
                title: "IIITs",
                text:
                    "Institutes focused strongly on information technology and computing-related education.",
                tag: "INDIA"
            }

        ]

    },


    pcb: {

        title: "PCB",

        description:
            "Physics, Chemistry and Biology can lead toward medicine, healthcare, biological sciences, biotechnology and related areas.",

        roadmap: [

            "Class 11–12 with PCB",
            "Build strong biology and science foundations",
            "Research course-specific admission requirements",
            "Enter an appropriate undergraduate programme",
            "Build clinical, laboratory, research, or professional experience",
            "Continue toward employment or advanced study"

        ],

        difficulty: {

            academic: 85,
            competition: 90,
            commitment: 90,
            specialisation: 80

        },

        requirements: [

            {
                title: "SCIENCE FOUNDATION",
                text:
                    "Biology, chemistry and physics form the core foundation for many PCB routes."
            },

            {
                title: "ELIGIBILITY",
                text:
                    "Eligibility varies significantly by course and institution."
            },

            {
                title: "ENTRANCE",
                text:
                    "Some professional healthcare programmes use national or institution-specific entrance processes."
            },

            {
                title: "COMMITMENT",
                text:
                    "Healthcare and biological science pathways can involve substantial academic and practical commitments."
            }

        ],

        colleges: [

            {
                title: "AIIMS",
                text:
                    "A major Indian medical education and healthcare institution network.",
                tag: "INDIA"
            },

            {
                title: "CMC VELLORE",
                text:
                    "A prominent medical and healthcare education institution in India.",
                tag: "INDIA"
            },

            {
                title: "JIPMER",
                text:
                    "A major medical education institution in India.",
                tag: "INDIA"
            }

        ]

    },


    pcmb: {

        title: "PCMB",

        description:
            "Physics, Chemistry, Mathematics and Biology keeps both mathematics-oriented and biology-oriented options open, while also creating a heavier academic workload.",

        roadmap: [

            "Class 11–12 with PCMB",
            "Build foundations across mathematics and biology",
            "Identify the direction you want to prioritise",
            "Research the relevant admission routes",
            "Choose a focused undergraduate pathway",
            "Develop specialised skills and experience"

        ],

        difficulty: {

            academic: 95,
            competition: 85,
            commitment: 95,
            specialisation: 80

        },

        requirements: [

            {
                title: "BROAD FOUNDATION",
                text:
                    "PCMB requires sustained work across both mathematics and biology."
            },

            {
                title: "TIME MANAGEMENT",
                text:
                    "Managing four major science subjects requires consistent planning and study habits."
            },

            {
                title: "DIRECTION",
                text:
                    "Keeping options open is useful, but eventually choosing a priority pathway helps focus preparation."
            },

            {
                title: "ADMISSION",
                text:
                    "Requirements depend on the specific course and institution selected."
            }

        ],

        colleges: [

            {
                title: "IITs",
                text:
                    "Engineering and technology pathways for students pursuing mathematics-oriented routes.",
                tag: "INDIA"
            },

            {
                title: "AIIMS",
                text:
                    "Medical education pathways for students pursuing healthcare.",
                tag: "INDIA"
            },

            {
                title: "IISERs",
                text:
                    "Institutions focused on scientific education and research.",
                tag: "INDIA"
            }

        ]

    },


    engineering: {

        title: "ENGINEERING",

        description:
            "Engineering combines mathematics, science, design, systems thinking and technology to solve practical problems.",

        roadmap: [

            "Class 11–12 with the required subjects",
            "Build mathematics, physics and problem-solving foundations",
            "Research institution and entrance requirements",
            "Enter an engineering undergraduate programme",
            "Choose a branch or specialisation",
            "Build projects, internships and practical experience",
            "Move toward employment, entrepreneurship or higher study"

        ],

        difficulty: {

            academic: 82,
            competition: 88,
            commitment: 82,
            specialisation: 84

        },

        requirements: [

            {
                title: "SUBJECT FOUNDATION",
                text:
                    "Mathematics and physical science foundations are important for many engineering routes."
            },

            {
                title: "ENTRANCE EXAMS",
                text:
                    "Admission requirements differ between institutions and programmes."
            },

            {
                title: "PROJECT EXPERIENCE",
                text:
                    "Projects, internships, competitions and practical work can help develop applied skills."
            },

            {
                title: "SPECIALISATION",
                text:
                    "Engineering branches can lead to very different career directions."
            }

        ],

        colleges: [

            {
                title: "IITs",
                text:
                    "Indian Institutes of Technology.",
                tag: "INDIA"
            },

            {
                title: "NITs",
                text:
                    "National Institutes of Technology.",
                tag: "INDIA"
            },

            {
                title: "BITS PILANI",
                text:
                    "A major Indian private technical university.",
                tag: "INDIA"
            }

        ]

    },


    "computer-science": {

        title: "COMPUTER SCIENCE",

        description:
            "Explore software, algorithms, artificial intelligence, data, cybersecurity, systems and digital technology.",

        roadmap: [

            "Build mathematics and logical reasoning foundations",
            "Learn programming fundamentals",
            "Build practical software projects",
            "Explore computer science concepts",
            "Choose a specialisation",
            "Build internships, projects and portfolio evidence",
            "Move into technology employment, research or entrepreneurship"

        ],

        difficulty: {

            academic: 78,
            competition: 84,
            commitment: 82,
            specialisation: 88

        },

        requirements: [

            {
                title: "PROGRAMMING",
                text:
                    "Programming provides a practical foundation for exploring computer science."
            },

            {
                title: "MATHEMATICS",
                text:
                    "Mathematics and logical reasoning are useful across many computer science areas."
            },

            {
                title: "PROJECTS",
                text:
                    "Building real software is one way to demonstrate practical understanding."
            },

            {
                title: "SPECIALISATION",
                text:
                    "Potential areas include software engineering, AI, data, cybersecurity, systems and more."
            }

        ],

        colleges: [

            {
                title: "IITs",
                text:
                    "Strong engineering and computing programmes across multiple institutes.",
                tag: "INDIA"
            },

            {
                title: "IIIT HYDERABAD",
                text:
                    "An institution strongly focused on computer science and information technology.",
                tag: "INDIA"
            },

            {
                title: "IISc",
                text:
                    "A major Indian institution for science, engineering and research.",
                tag: "INDIA"
            }

        ]

    },


    law: {

        title: "LAW",

        description:
            "Law can lead toward legal practice, corporate work, public policy, academia, compliance, advocacy and related fields.",

        roadmap: [

            "Complete Class 12",
            "Research undergraduate law programmes",
            "Prepare for relevant admission processes",
            "Complete legal education",
            "Develop internships and practical legal experience",
            "Choose an area of legal practice or further study",
            "Build professional experience"

        ],

        difficulty: {

            academic: 75,
            competition: 86,
            commitment: 82,
            specialisation: 88

        },

        requirements: [

            {
                title: "READING",
                text:
                    "Strong reading comprehension and the ability to analyse written material are useful."
            },

            {
                title: "REASONING",
                text:
                    "Logical reasoning and structured argument are important skills."
            },

            {
                title: "ADMISSION",
                text:
                    "Law programmes may have institution-specific or national admission requirements."
            },

            {
                title: "PRACTICAL EXPERIENCE",
                text:
                    "Internships and exposure to legal work can help students understand different areas of practice."
            }

        ],

        colleges: [

            {
                title: "NLSIU",
                text:
                    "National Law School of India University.",
                tag: "INDIA"
            },

            {
                title: "NALSAR",
                text:
                    "National Academy of Legal Studies and Research.",
                tag: "INDIA"
            },

            {
                title: "INTERNATIONAL ROUTES",
                text:
                    "Selected legal education pathways can also involve international study, depending on the jurisdiction and career goal.",
                tag: "GLOBAL"
            }

        ]

    }

};


/* =====================================================
   TEXT ANIMATION
===================================================== */

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

                const text =
                    node.nodeValue;

                const fragment =
                    document.createDocumentFragment();

                const words =
                    text.split(/(\s+)/);


                words.forEach(word => {


                    if (word.trim() === "") {

                        fragment.appendChild(
                            document.createTextNode(word)
                        );

                    }

                    else {

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

            }


            else if (
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


/* =====================================================
   SKILL CARD ANIMATION
===================================================== */

function triggerSkillCards(slideElement) {

    const cards =
        slideElement.querySelectorAll(
            ".skill-card"
        );

    cards.forEach(
        (card, index) => {

            card.classList.remove(
                "skill-card-visible"
            );

            setTimeout(
                () => {

                    card.classList.add(
                        "skill-card-visible"
                    );

                },
                120 * index + 250
            );

        }
    );

}


/* =====================================================
   SLIDE SWITCHING
===================================================== */

function goToSlide(index) {

    if (
        index < 0 ||
        index >= slides.length
    ) return;


    if (explorationMode) {

        closeExploration();

    }


    slides[currentSlide]
        .classList
        .remove("active");


    currentSlide =
        index;


    slides[currentSlide]
        .classList
        .add("active");


    navButtons.forEach(
        (btn, i) => {

            btn.classList.toggle(
                "active",
                i === currentSlide
            );

        }
    );


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

}


/* =====================================================
   EXPLORATION MODE
===================================================== */

function openExploration() {

    explorationMode =
        true;

    explorationHistory = [];


    explorationSystem
        .classList
        .add("active");


    document
        .querySelector(".slide-controls")
        .classList
        .add("exploration-active");

}


function closeExploration() {

    explorationMode =
        false;

    explorationHistory = [];


    explorationSystem
        .classList
        .remove("active");


    document
        .querySelector(".slide-controls")
        .classList
        .remove("exploration-active");


    explorationContent.innerHTML =
        "";

}


function pushExplorationHistory(
    renderFunction,
    breadcrumb
) {

    explorationHistory.push({
        render: renderFunction,
        breadcrumb: breadcrumb
    });

}


/* =====================================================
   SKILL EXPLORATION
===================================================== */

function showSkill(skillID) {

    const skill =
        skillData[skillID];

    if (!skill) return;


    openExploration();


    pushExplorationHistory(
        () => showSkill(skillID),
        `KAYRA / SKILLS / ${skill.title}`
    );


    explorationBreadcrumb.textContent =
        `KAYRA / SKILLS / ${skill.title}`;


    let roadmapHTML =
        "";


    skill.roadmap.forEach(
        (step, index) => {

            roadmapHTML += `

                <div class="roadmap-step">

                    <div class="roadmap-node">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <h3>
                        ${step.title}
                    </h3>

                    <p>
                        ${step.text}
                    </p>

                </div>

            `;

        }
    );


    let helpHTML =
        "";


    skill.help.forEach(
        (item, index) => {

            helpHTML += `

                <div class="help-card">

                    <div class="help-card-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.text}
                    </p>

                </div>

            `;

        }
    );


    explorationContent.innerHTML = `

        <div class="explore-label explore-animate">
            SKILL DEVELOPMENT / ${skill.number}
        </div>


        <h1 class="explore-title explore-animate delay-1">

            ${skill.title}

        </h1>


        <p class="explore-description explore-animate delay-2">

            ${skill.description}

        </p>


        <section class="explore-block explore-animate delay-3">

            <div class="explore-block-title">
                YOUR DEVELOPMENT PATH
            </div>

            <div class="skill-roadmap">

                ${roadmapHTML}

            </div>

        </section>


        <section class="explore-block explore-animate delay-4">

            <div class="explore-block-title">
                HOW KAYRA HELPS
            </div>

            <div class="help-grid">

                ${helpHTML}

            </div>

        </section>


        <div class="explore-end">

            <p>
                KAYRA / BUILD YOUR FUTURE
            </p>

        </div>

    `;

}


/* =====================================================
   PATHWAY OVERVIEW
===================================================== */

function showPathway(pathwayID) {

    const pathway =
        pathwayData[pathwayID];

    if (!pathway) return;


    openExploration();


    pushExplorationHistory(
        () => showPathway(pathwayID),
        `KAYRA / PATHWAYS / ${pathway.title}`
    );


    explorationBreadcrumb.textContent =
        `KAYRA / PATHWAYS / ${pathway.title}`;


    let choicesHTML =
        "";


    pathway.choices.forEach(
        choice => {

            choicesHTML += `

                <button
                    class="explore-choice"
                    data-choice-id="${choice.id}"
                >

                    <div class="explore-choice-number">
                        ${choice.number}
                    </div>

                    <h3>
                        ${choice.title}
                    </h3>

                    <p>
                        ${choice.description}
                    </p>

                    <span class="explore-choice-arrow">
                        →
                    </span>

                </button>

            `;

        }
    );


    explorationContent.innerHTML = `

        <div class="explore-label explore-animate">
            PATHWAY / ${pathway.title}
        </div>


        <h1 class="explore-title explore-animate delay-1">

            ${pathway.title}

        </h1>


        <p class="explore-description explore-animate delay-2">

            ${pathway.description}

        </p>


        <section class="explore-block explore-animate delay-3">

            <div class="explore-block-title">
                CHOOSE A DIRECTION
            </div>

            <div class="explore-choice-grid">

                ${choicesHTML}

            </div>

        </section>

    `;


    explorationContent
        .querySelectorAll(
            ".explore-choice"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.choiceId;

                    if (
                        detailedPathways[id]
                    ) {

                        showDetailedPathway(
                            id
                        );

                    }

                    else {

                        showGenericPathway(
                            id,
                            pathway.title
                        );

                    }

                }
            );

        });

}


/* =====================================================
   DETAILED PATHWAY
===================================================== */

function showDetailedPathway(pathwayID) {

    const pathway =
        detailedPathways[pathwayID];

    if (!pathway) return;


    pushExplorationHistory(
        () =>
            showDetailedPathway(
                pathwayID
            ),
        `KAYRA / PATHWAYS / ${pathway.title}`
    );


    explorationBreadcrumb.textContent =
        `KAYRA / PATHWAYS / ${pathway.title}`;


    let roadmapHTML =
        "";


    if (pathway.roadmap) {

        pathway.roadmap.forEach(
            (step, index) => {

                roadmapHTML += `

                    <div class="main-roadmap-step">

                        <div class="main-roadmap-node">
                            ${String(index + 1).padStart(2, "0")}
                        </div>

                        <div class="main-roadmap-card">

                            <h3>
                                ${step}
                            </h3>

                            <p>
                                Stage ${index + 1}
                                of your pathway.
                            </p>

                        </div>

                    </div>

                `;

            }
        );

    }


    let difficultyHTML =
        "";


    if (pathway.difficulty) {

        const difficultyItems = [

            [
                "ACADEMIC LOAD",
                pathway.difficulty.academic
            ],

            [
                "COMPETITION",
                pathway.difficulty.competition
            ],

            [
                "TIME COMMITMENT",
                pathway.difficulty.commitment
            ],

            [
                "SPECIALISATION",
                pathway.difficulty.specialisation
            ]

        ];


        difficultyItems.forEach(
            item => {

                let level =
                    item[1] >= 90
                        ? "VERY HIGH"
                        : item[1] >= 80
                            ? "HIGH"
                            : item[1] >= 65
                                ? "MODERATE"
                                : "LOW";


                difficultyHTML += `

                    <div class="difficulty-card">

                        <div class="difficulty-name">
                            ${item[0]}
                        </div>

                        <div class="difficulty-level">
                            ${level}
                        </div>

                        <div class="difficulty-bar">

                            <div
                                class="difficulty-fill"
                                style="width:${item[1]}%"
                            ></div>

                        </div>

                    </div>

                `;

            }
        );

    }


    let requirementsHTML =
        "";


    if (pathway.requirements) {

        pathway.requirements.forEach(
            requirement => {

                requirementsHTML += `

                    <div class="requirement-card">

                        <h3>
                            ${requirement.title}
                        </h3>

                        <p>
                            ${requirement.text}
                        </p>

                    </div>

                `;

            }
        );

    }


    let collegeHTML =
        "";


    if (pathway.colleges) {

        pathway.colleges.forEach(
            college => {

                collegeHTML += `

                    <div class="college-card">

                        <h3>
                            ${college.title}
                        </h3>

                        <p>
                            ${college.text}
                        </p>

                        <span class="college-tag">
                            ${college.tag}
                        </span>

                    </div>

                `;

            }
        );

    }


    explorationContent.innerHTML = `

        <div class="explore-label explore-animate">
            PATHWAY / DEEP EXPLORATION
        </div>


        <h1 class="explore-title explore-animate delay-1">

            ${pathway.title}

        </h1>


        <p class="explore-description explore-animate delay-2">

            ${pathway.description}

        </p>


        ${
            pathway.roadmap
            ? `

            <section class="explore-block explore-animate delay-3">

                <div class="explore-block-title">
                    YOUR ROADMAP
                </div>

                <div class="main-roadmap">

                    ${roadmapHTML}

                </div>

            </section>

            `
            : ""
        }


        ${
            pathway.difficulty
            ? `

            <section class="explore-block">

                <div class="explore-block-title">
                    DIFFICULTY PROFILE
                </div>

                <p class="explore-block-subtitle">
                    These indicators are planning aids, not absolute measures.
                    Requirements and competition can vary by institution,
                    course, year, and student.
                </p>

                <div class="difficulty-grid">

                    ${difficultyHTML}

                </div>

            </section>

            `
            : ""
        }


        ${
            pathway.requirements
            ? `

            <section class="explore-block">

                <div class="explore-block-title">
                    WHAT YOU'LL NEED
                </div>

                <div class="requirements-grid">

                    ${requirementsHTML}

                </div>

            </section>

            `
            : ""
        }


        ${
            pathway.colleges
            ? `

            <section class="explore-block">

                <div class="explore-block-title">
                    COLLEGES & INSTITUTES
                </div>

                <p class="explore-block-subtitle">
                    Institutions shown here are examples for exploration.
                    Always verify current eligibility, admissions and programmes
                    with the institution.
                </p>

                <div class="college-grid">

                    ${collegeHTML}

                </div>

            </section>

            `
            : ""
        }


        <div class="explore-end">

            <p>
                KAYRA / EXPLORE WITH PURPOSE
            </p>

        </div>

    `;

}


/* =====================================================
   GENERIC PATHWAY
===================================================== */

function showGenericPathway(
    pathwayID,
    parentPathway
) {

    pushExplorationHistory(
        () =>
            showGenericPathway(
                pathwayID,
                parentPathway
            ),
        `KAYRA / PATHWAYS / ${pathwayID}`
    );


    explorationBreadcrumb.textContent =
        `KAYRA / PATHWAYS / ${pathwayID}`;


    explorationContent.innerHTML = `

        <div class="explore-label explore-animate">
            PATHWAY / EXPLORATION
        </div>


        <h1 class="explore-title explore-animate delay-1">

            ${pathwayID
                .replaceAll("-", " ")
                .toUpperCase()
            }

        </h1>


        <p class="explore-description explore-animate delay-2">

            This pathway is part of the
            ${parentPathway} exploration system.

        </p>


        <section class="explore-block explore-animate delay-3">

            <div class="explore-block-title">
                KAYRA ROADMAP
            </div>


            <div class="main-roadmap">


                <div class="main-roadmap-step">

                    <div class="main-roadmap-node">
                        01
                    </div>

                    <div class="main-roadmap-card">

                        <h3>
                            EXPLORE
                        </h3>

                        <p>
                            Understand the field,
                            its subjects and possible directions.
                        </p>

                    </div>

                </div>


                <div class="main-roadmap-step">

                    <div class="main-roadmap-node">
                        02
                    </div>

                    <div class="main-roadmap-card">

                        <h3>
                            PREPARE
                        </h3>

                        <p>
                            Identify the academic,
                            skill and admission requirements.
                        </p>

                    </div>

                </div>


                <div class="main-roadmap-step">

                    <div class="main-roadmap-node">
                        03
                    </div>

                    <div class="main-roadmap-card">

                        <h3>
                            BUILD
                        </h3>

                        <p>
                            Develop relevant skills,
                            projects and experience.
                        </p>

                    </div>

                </div>


                <div class="main-roadmap-step">

                    <div class="main-roadmap-node">
                        04
                    </div>

                    <div class="main-roadmap-card">

                        <h3>
                            APPLY
                        </h3>

                        <p>
                            Compare programmes and
                            make informed applications.
                        </p>

                    </div>

                </div>


            </div>

        </section>


        <div class="explore-end">

            <p>
                KAYRA / MORE INFORMATION WILL BE ADDED
            </p>

        </div>

    `;

}


/* =====================================================
   BACK BUTTON
===================================================== */

explorationBack.addEventListener(
    "click",
    () => {

        if (
            explorationHistory.length > 1
        ) {

            explorationHistory.pop();

            const previous =
                explorationHistory[
                    explorationHistory.length - 1
                ];

            previous.render();

            explorationBreadcrumb.textContent =
                previous.breadcrumb;

        }

        else {

            closeExploration();

        }

    }
);


/* =====================================================
   SKILL BUTTONS
===================================================== */

document
    .querySelectorAll(
        ".skill-card"
    )
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const skillID =
                    card.dataset.explore;

                showSkill(
                    skillID
                );

            }
        );

    });


/* =====================================================
   PATHWAY BUTTONS
===================================================== */

document
    .querySelectorAll(
        ".pathway-row"
    )
    .forEach(row => {

        row.addEventListener(
            "click",
            () => {

                const pathwayID =
                    row.dataset.pathway;

                showPathway(
                    pathwayID
                );

            }
        );

    });


/* =====================================================
   START EXPLORING
===================================================== */

function startExploring() {

    /*
        TEMPORARY DESTINATION

        We deliberately do NOT send the user
        to slide 3.

        For now, START EXPLORING opens the
        main pathway exploration screen.

        We can change this destination later.
    */

    showPathway(
        "after10th"
    );

}


const startHero =
    document.getElementById(
        "startExploringHero"
    );

const startButton =
    document.getElementById(
        "startExploringButton"
    );


if (startHero) {

    startHero.addEventListener(
        "click",
        startExploring
    );

}


if (startButton) {

    startButton.addEventListener(
        "click",
        startExploring
    );

}


/* =====================================================
   SLIDE BUTTONS
===================================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            if (
                currentSlide <
                slides.length - 1
            ) {

                goToSlide(
                    currentSlide + 1
                );

            }

            else {

                goToSlide(0);

            }

        }
    );

}


if (previousButton) {

    previousButton.addEventListener(
        "click",
        () => {

            if (
                currentSlide > 0
            ) {

                goToSlide(
                    currentSlide - 1
                );

            }

            else {

                goToSlide(
                    slides.length - 1
                );

            }

        }
    );

}


/* =====================================================
   NAVIGATION
===================================================== */

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


/* =====================================================
   DATA-SLIDE BUTTONS
===================================================== */

document
    .querySelectorAll(
        "[data-slide-target]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    parseInt(
                        button.getAttribute(
                            "data-slide-target"
                        ),
                        10
                    );

                if (
                    !isNaN(target)
                ) {

                    goToSlide(
                        target
                    );

                }

            }
        );

    });


/* =====================================================
   MOBILE MENU
===================================================== */

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


/* =====================================================
   KEYBOARD NAVIGATION
===================================================== */

window.addEventListener(
    "keydown",
    (event) => {

        if (
            explorationMode
        ) {

            if (
                event.key === "Escape"
            ) {

                explorationBack.click();

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


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        prepareTextAnimation();

        goToSlide(0);

    }
);
