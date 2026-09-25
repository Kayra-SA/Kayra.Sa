/* =========================================
   KAYRA
   MAIN SLIDES + EXPLORATION SYSTEM
========================================= */


/* =========================================
   MAIN ELEMENTS
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


/* =========================================
   EXPLORATION ELEMENTS
========================================= */

const explorationScreen =
    document.getElementById("explorationScreen");

const explorationView =
    document.getElementById("explorationView");

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

        type: "skill",

        label: "SKILL / 01",

        title: "COMMUNICATION",

        intro:
            "The ability to express ideas clearly, understand others, and communicate with purpose.",

        what:
            "Communication includes speaking, listening, writing, presenting, questioning, and adapting a message to the people receiving it.",

        why:
            "Strong communication supports academic work, teamwork, interviews, leadership, relationships, and almost every professional environment.",

        start:
            "Begin by explaining one idea clearly without overcomplicating it. Then practise listening, writing, and presenting.",

        roadmap: [

            {
                stage: "01",
                title: "FOUNDATION",
                text: "Learn to organise thoughts before speaking or writing."
            },

            {
                stage: "02",
                title: "LISTENING",
                text: "Practise understanding the complete message before responding."
            },

            {
                stage: "03",
                title: "STRUCTURED SPEAKING",
                text: "Use clear openings, logical points, and concise conclusions."
            },

            {
                stage: "04",
                title: "WRITING",
                text: "Develop the ability to explain ideas clearly in written form."
            },

            {
                stage: "05",
                title: "FEEDBACK",
                text: "Use feedback to improve clarity, structure, and delivery."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "BASELINE",
                text: "Identify your current strengths and weaknesses across speaking, listening, writing, and presentation."
            },

            {
                stage: "02",
                title: "LISTENING SYSTEM",
                text: "Practise active listening, clarification questions, note-taking, and accurate interpretation."
            },

            {
                stage: "03",
                title: "STRUCTURED EXPRESSION",
                text: "Learn to build explanations using context, evidence, examples, and conclusions."
            },

            {
                stage: "04",
                title: "PRESENTATION",
                text: "Practise presentations, demonstrations, interviews, and group discussions."
            },

            {
                stage: "05",
                title: "WRITTEN COMMUNICATION",
                text: "Develop essays, reports, emails, applications, documentation, and concise professional writing."
            },

            {
                stage: "06",
                title: "ADAPTATION",
                text: "Adjust vocabulary, depth, tone, and delivery according to the audience and situation."
            },

            {
                stage: "07",
                title: "PORTFOLIO",
                text: "Keep examples of presentations, writing, projects, and other communication work."
            }

        ]

    },


    creativity: {

        type: "skill",

        label: "SKILL / 02",

        title: "CREATIVITY",

        intro:
            "The ability to generate ideas, explore possibilities, and create useful new approaches.",

        what:
            "Creativity involves observation, imagination, experimentation, combining ideas, and improving concepts through iteration.",

        why:
            "Creative thinking helps with design, writing, technology, entrepreneurship, research, problem solving, and everyday decision making.",

        start:
            "Start by generating multiple solutions to the same problem instead of stopping at the first answer.",

        roadmap: [

            {
                stage: "01",
                title: "OBSERVE",
                text: "Pay attention to problems, patterns, people, and environments."
            },

            {
                stage: "02",
                title: "GENERATE",
                text: "Create multiple ideas before selecting one."
            },

            {
                stage: "03",
                title: "EXPERIMENT",
                text: "Turn ideas into small experiments or prototypes."
            },

            {
                stage: "04",
                title: "ITERATE",
                text: "Improve ideas through testing and feedback."
            },

            {
                stage: "05",
                title: "CREATE",
                text: "Build finished work that demonstrates your thinking."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "OBSERVATION",
                text: "Train yourself to notice problems, patterns, gaps, behaviours, and opportunities."
            },

            {
                stage: "02",
                title: "IDEA GENERATION",
                text: "Use brainstorming, questioning, visual thinking, and alternative perspectives."
            },

            {
                stage: "03",
                title: "CONSTRAINTS",
                text: "Learn how limitations can improve focus and produce stronger ideas."
            },

            {
                stage: "04",
                title: "PROTOTYPING",
                text: "Convert ideas into rough versions that can actually be tested."
            },

            {
                stage: "05",
                title: "ITERATION",
                text: "Compare results, identify weaknesses, and repeatedly improve the concept."
            },

            {
                stage: "06",
                title: "COLLABORATION",
                text: "Learn to develop ideas with people who have different perspectives."
            },

            {
                stage: "07",
                title: "PORTFOLIO",
                text: "Document selected projects and explain the thinking behind them."
            }

        ]

    },


    "problem-solving": {

        type: "skill",

        label: "SKILL / 03",

        title: "PROBLEM SOLVING",

        intro:
            "The ability to understand a problem, break it down, test solutions, and improve the result.",

        what:
            "Problem solving combines definition, analysis, research, decision making, experimentation, and iteration.",

        why:
            "It is useful across science, engineering, business, technology, design, education, and everyday situations.",

        start:
            "When facing a problem, stop and define exactly what needs to change before looking for a solution.",

        roadmap: [

            {
                stage: "01",
                title: "DEFINE",
                text: "Clearly identify the actual problem."
            },

            {
                stage: "02",
                title: "BREAK DOWN",
                text: "Separate a complex problem into manageable parts."
            },

            {
                stage: "03",
                title: "RESEARCH",
                text: "Gather useful information and understand constraints."
            },

            {
                stage: "04",
                title: "SOLVE",
                text: "Generate possible solutions and compare them."
            },

            {
                stage: "05",
                title: "TEST",
                text: "Test the solution and improve it based on results."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "PROBLEM DEFINITION",
                text: "Separate the visible symptom from the underlying problem."
            },

            {
                stage: "02",
                title: "DECOMPOSITION",
                text: "Break the problem into smaller questions that can be investigated."
            },

            {
                stage: "03",
                title: "INFORMATION",
                text: "Gather relevant evidence while identifying missing information."
            },

            {
                stage: "04",
                title: "OPTIONS",
                text: "Generate several possible solutions rather than immediately selecting one."
            },

            {
                stage: "05",
                title: "TESTING",
                text: "Use experiments, prototypes, calculations, or comparisons to test assumptions."
            },

            {
                stage: "06",
                title: "ITERATION",
                text: "Analyse the result and improve the solution."
            },

            {
                stage: "07",
                title: "DOCUMENTATION",
                text: "Record the problem, reasoning, solution, and lessons learned."
            }

        ]

    },


    "critical-thinking": {

        type: "skill",

        label: "SKILL / 04",

        title: "CRITICAL THINKING",

        intro:
            "The ability to examine information carefully, question assumptions, and reason from evidence.",

        what:
            "Critical thinking involves evaluating sources, separating claims from evidence, comparing alternatives, and recognising uncertainty.",

        why:
            "It helps students make better academic decisions and assess information in an increasingly complex information environment.",

        start:
            "Whenever you encounter a claim, ask: What is the evidence? What assumptions are being made?",

        roadmap: [

            {
                stage: "01",
                title: "QUESTION",
                text: "Learn to question assumptions and claims."
            },

            {
                stage: "02",
                title: "EVIDENCE",
                text: "Identify what information actually supports a claim."
            },

            {
                stage: "03",
                title: "COMPARE",
                text: "Consider alternative explanations and viewpoints."
            },

            {
                stage: "04",
                title: "REASON",
                text: "Build conclusions from evidence and logical relationships."
            },

            {
                stage: "05",
                title: "REVIEW",
                text: "Reconsider conclusions when stronger evidence appears."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "ASSUMPTIONS",
                text: "Identify what is being assumed before accepting a conclusion."
            },

            {
                stage: "02",
                title: "SOURCE QUALITY",
                text: "Learn to examine the relevance, reliability, date, and origin of information."
            },

            {
                stage: "03",
                title: "CLAIMS VS EVIDENCE",
                text: "Separate what someone says from what the available evidence demonstrates."
            },

            {
                stage: "04",
                title: "ALTERNATIVES",
                text: "Consider competing explanations before reaching a conclusion."
            },

            {
                stage: "05",
                title: "BIAS",
                text: "Recognise how incentives, assumptions, framing, and incomplete information can affect reasoning."
            },

            {
                stage: "06",
                title: "ARGUMENT",
                text: "Construct conclusions that clearly connect evidence and reasoning."
            },

            {
                stage: "07",
                title: "REVIEW",
                text: "Update conclusions when stronger or contradictory evidence appears."
            }

        ]

    },


    leadership: {

        type: "skill",

        label: "SKILL / 05",

        title: "LEADERSHIP",

        intro:
            "The ability to take responsibility, coordinate people, make decisions, and move work forward.",

        what:
            "Leadership includes responsibility, communication, decision making, delegation, conflict management, and accountability.",

        why:
            "Leadership becomes valuable whenever a person must coordinate a project, team, event, organisation, or shared objective.",

        start:
            "Take responsibility for one small project and make sure it reaches completion.",

        roadmap: [

            {
                stage: "01",
                title: "RESPONSIBILITY",
                text: "Learn to own tasks and outcomes."
            },

            {
                stage: "02",
                title: "COMMUNICATION",
                text: "Give clear information and listen to your team."
            },

            {
                stage: "03",
                title: "COORDINATION",
                text: "Organise people and tasks around a shared objective."
            },

            {
                stage: "04",
                title: "DECISION MAKING",
                text: "Make decisions using available information."
            },

            {
                stage: "05",
                title: "EXECUTION",
                text: "Turn plans into completed results."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "SELF-MANAGEMENT",
                text: "Develop reliability, planning, time management, and personal accountability."
            },

            {
                stage: "02",
                title: "RESPONSIBILITY",
                text: "Take ownership of tasks and communicate early when problems appear."
            },

            {
                stage: "03",
                title: "TEAM COMMUNICATION",
                text: "Learn how to align people around a shared objective."
            },

            {
                stage: "04",
                title: "DELEGATION",
                text: "Distribute work according to capability, availability, and project needs."
            },

            {
                stage: "05",
                title: "CONFLICT",
                text: "Learn to identify disagreements and work toward practical solutions."
            },

            {
                stage: "06",
                title: "DECISIONS",
                text: "Make decisions while considering evidence, constraints, risks, and consequences."
            },

            {
                stage: "07",
                title: "PROJECT LEADERSHIP",
                text: "Lead a real project from planning through completion and review."
            }

        ]

    },


    "digital-literacy": {

        type: "skill",

        label: "SKILL / 06",

        title: "DIGITAL LITERACY",

        intro:
            "The ability to use digital tools, information, data, and technology effectively and responsibly.",

        what:
            "Digital literacy includes online research, productivity tools, data awareness, cybersecurity basics, digital communication, and responsible technology use.",

        why:
            "Digital environments are now part of education, work, communication, research, and everyday life.",

        start:
            "Become highly comfortable with the digital tools you already use before adding more advanced ones.",

        roadmap: [

            {
                stage: "01",
                title: "CORE TOOLS",
                text: "Become comfortable with everyday digital tools."
            },

            {
                stage: "02",
                title: "INFORMATION",
                text: "Learn how to search, evaluate, and organise information."
            },

            {
                stage: "03",
                title: "PRODUCTIVITY",
                text: "Use documents, spreadsheets, presentations, and organisation systems."
            },

            {
                stage: "04",
                title: "SAFETY",
                text: "Understand passwords, privacy, scams, and digital security."
            },

            {
                stage: "05",
                title: "CREATION",
                text: "Use digital tools to create rather than only consume."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "CORE DIGITAL SKILLS",
                text: "Build confidence with operating systems, files, browsers, cloud tools, and digital organisation."
            },

            {
                stage: "02",
                title: "INFORMATION LITERACY",
                text: "Search efficiently and evaluate whether information is relevant and reliable."
            },

            {
                stage: "03",
                title: "PRODUCTIVITY",
                text: "Develop practical workflows using documents, spreadsheets, presentations, calendars, and task systems."
            },

            {
                stage: "04",
                title: "DIGITAL SAFETY",
                text: "Understand account security, privacy, phishing, permissions, backups, and safe online behaviour."
            },

            {
                stage: "05",
                title: "DATA BASICS",
                text: "Learn to organise, interpret, visualise, and communicate basic data."
            },

            {
                stage: "06",
                title: "AI LITERACY",
                text: "Understand how to use AI tools critically, verify outputs, and protect sensitive information."
            },

            {
                stage: "07",
                title: "DIGITAL WORKFLOWS",
                text: "Combine tools into repeatable systems that improve learning and project work."
            }

        ]

    },


    adaptability: {

        type: "skill",

        label: "SKILL / 07",

        title: "ADAPTABILITY",

        intro:
            "The ability to learn, adjust, and remain effective when situations, requirements, or environments change.",

        what:
            "Adaptability involves learning new systems, accepting feedback, adjusting plans, and transferring skills into unfamiliar situations.",

        why:
            "Education and careers rarely follow a perfectly predictable path. The ability to learn continuously helps people respond to change.",

        start:
            "When a plan changes, focus first on what remains controllable and what needs to be learned next.",

        roadmap: [

            {
                stage: "01",
                title: "AWARENESS",
                text: "Recognise when circumstances are changing."
            },

            {
                stage: "02",
                title: "LEARNING",
                text: "Build the habit of learning unfamiliar things."
            },

            {
                stage: "03",
                title: "FEEDBACK",
                text: "Use feedback instead of resisting it."
            },

            {
                stage: "04",
                title: "TRANSFER",
                text: "Apply existing skills in new situations."
            },

            {
                stage: "05",
                title: "RESILIENCE",
                text: "Continue improving when plans do not work immediately."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "AWARENESS",
                text: "Identify changing conditions before they become major obstacles."
            },

            {
                stage: "02",
                title: "LEARNING LOOP",
                text: "Build a repeatable process of learning, applying, reviewing, and improving."
            },

            {
                stage: "03",
                title: "FEEDBACK",
                text: "Use useful criticism to identify gaps rather than treating feedback as failure."
            },

            {
                stage: "04",
                title: "NEW ENVIRONMENTS",
                text: "Practise entering unfamiliar academic, technical, social, or project environments."
            },

            {
                stage: "05",
                title: "TRANSFERABLE SKILLS",
                text: "Identify skills that remain useful across different subjects and careers."
            },

            {
                stage: "06",
                title: "CHANGE MANAGEMENT",
                text: "Learn to revise plans without losing sight of the underlying objective."
            },

            {
                stage: "07",
                title: "CONTINUOUS DEVELOPMENT",
                text: "Maintain a long-term habit of learning and updating your skills."
            }

        ]

    }

};


/* =========================================
   PATHWAY DATA
========================================= */

const pathwayData = {

    after10th: {

        title: "AFTER 10TH",

        label: "PATHWAY / 01",

        intro:
            "The stage after Class 10 is where students begin narrowing subjects, interests, and possible future directions.",

        choices: [

            {
                route: "pathway/after10th/science",
                number: "01",
                title: "SCIENCE",
                text: "Explore science subjects and combinations leading toward technical, medical, research, and other fields."
            },

            {
                route: "pathway/after10th/commerce",
                number: "02",
                title: "COMMERCE",
                text: "Explore business, finance, economics, accounting, management, and related directions."
            },

            {
                route: "pathway/after10th/humanities",
                number: "03",
                title: "HUMANITIES",
                text: "Explore society, people, history, language, law, psychology, design, and related fields."
            },

            {
                route: "pathway/after10th/vocational",
                number: "04",
                title: "VOCATIONAL / SKILL-BASED",
                text: "Explore practical and skill-focused educational routes."
            }

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Understand your subjects, interests, strengths, and academic preferences."
            },

            {
                stage: "02",
                title: "EXPLORE",
                text: "Compare the broad directions available after Class 10."
            },

            {
                stage: "03",
                title: "CHOOSE",
                text: "Select a stream and subject combination after researching its future requirements."
            },

            {
                stage: "04",
                title: "BUILD",
                text: "Develop academic foundations and transferable skills during Classes 11 and 12."
            },

            {
                stage: "05",
                title: "NEXT STEP",
                text: "Use your Class 12 direction to plan higher education, training, or another pathway."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "SELF-ASSESSMENT",
                text: "Review academic performance, interests, preferred ways of learning, and subjects you are willing to study deeply."
            },

            {
                stage: "02",
                title: "STREAM RESEARCH",
                text: "Compare Science, Commerce, Humanities, and vocational or skill-based routes."
            },

            {
                stage: "03",
                title: "SUBJECT COMBINATION",
                text: "Investigate which subject combinations keep your intended future options open."
            },

            {
                stage: "04",
                title: "REQUIREMENTS",
                text: "For specific careers, check current eligibility, subject prerequisites, entrance requirements, and institutional rules."
            },

            {
                stage: "05",
                title: "FOUNDATION",
                text: "Build strong academic fundamentals rather than selecting subjects only because they appear difficult or prestigious."
            },

            {
                stage: "06",
                title: "VALIDATION",
                text: "Use projects, introductory courses, conversations, and real exposure to test whether an interest is genuine."
            },

            {
                stage: "07",
                title: "CLASS 11–12 PLAN",
                text: "Create a two-year plan covering academics, entrance preparation where relevant, skills, projects, and application deadlines."
            }

        ]

    },


    science: {

        title: "SCIENCE",

        label: "AFTER 10TH / SCIENCE",

        intro:
            "Science opens several directions. The subject combination you choose can affect which higher-education routes remain available.",

        choices: [

            {
                route: "pathway/after10th/science/pcm",
                number: "01",
                title: "PCM",
                text: "Physics, Chemistry, Mathematics."
            },

            {
                route: "pathway/after10th/science/pcb",
                number: "02",
                title: "PCB",
                text: "Physics, Chemistry, Biology."
            },

            {
                route: "pathway/after10th/science/pcmb",
                number: "03",
                title: "PCMB",
                text: "Physics, Chemistry, Mathematics, Biology."
            }

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Review your performance and interest in science and mathematics."
            },

            {
                stage: "02",
                title: "COMBINATION",
                text: "Compare PCM, PCB, PCMB, and the subject availability at your institution."
            },

            {
                stage: "03",
                title: "FOUNDATION",
                text: "Build strong foundations in the subjects you choose."
            },

            {
                stage: "04",
                title: "EXPLORATION",
                text: "Investigate careers and higher-education routes before Class 12."
            },

            {
                stage: "05",
                title: "NEXT STEP",
                text: "Prepare for the relevant higher-education route after Class 12."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "INTEREST MAP",
                text: "Identify whether your strongest interest is mathematical, biological, technical, experimental, or interdisciplinary."
            },

            {
                stage: "02",
                title: "SUBJECT CHOICE",
                text: "Compare the future routes associated with each available science combination."
            },

            {
                stage: "03",
                title: "ACADEMIC FOUNDATION",
                text: "Build subject fundamentals before moving into advanced entrance or university preparation."
            },

            {
                stage: "04",
                title: "CAREER EXPLORATION",
                text: "Compare engineering, medicine, pure sciences, research, technology, and other relevant directions."
            },

            {
                stage: "05",
                title: "ELIGIBILITY",
                text: "For every target course, verify current subject requirements and admission rules through official sources."
            },

            {
                stage: "06",
                title: "PREPARATION",
                text: "Create a preparation schedule based on the specific entrance or admission route you eventually select."
            },

            {
                stage: "07",
                title: "APPLICATION",
                text: "Track examinations, applications, documents, deadlines, and institution-specific requirements."
            }

        ]

    },


    pcm: {

        title: "PCM",

        label: "SCIENCE / PCM",

        intro:
            "Physics, Chemistry, and Mathematics create a strong quantitative foundation used by many technical and analytical fields.",

        what:
            "PCM focuses heavily on mathematical reasoning, physical systems, chemistry, quantitative problem solving, and analytical thinking.",

        why:
            "This combination is commonly associated with technical, engineering, computing, architecture, physical sciences, and other quantitative pathways.",

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Build a strong foundation in mathematics and science."
            },

            {
                stage: "02",
                title: "PCM",
                text: "Study Physics, Chemistry, and Mathematics through Classes 11 and 12."
            },

            {
                stage: "03",
                title: "EXPLORE",
                text: "Compare engineering, computing, architecture, sciences, and related directions."
            },

            {
                stage: "04",
                title: "ENTRANCE / ADMISSION",
                text: "Identify the current admission route for the specific course and institution."
            },

            {
                stage: "05",
                title: "DEGREE",
                text: "Complete the selected higher-education programme."
            },

            {
                stage: "06",
                title: "SPECIALISE",
                text: "Build deeper technical knowledge through projects, electives, internships, or research."
            },

            {
                stage: "07",
                title: "CAREER",
                text: "Move toward employment, entrepreneurship, research, postgraduate study, or another direction."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "CLASS 10 FOUNDATION",
                text: "Strengthen algebra, geometry, arithmetic, scientific reasoning, and problem-solving before entering Class 11."
            },

            {
                stage: "02",
                title: "CLASS 11 CORE",
                text: "Develop strong conceptual foundations in Physics, Chemistry, and Mathematics rather than relying only on memorisation."
            },

            {
                stage: "03",
                title: "DIRECTION TEST",
                text: "Use small projects, introductory programming, engineering problems, physics experiments, or mathematical exploration to identify interests."
            },

            {
                stage: "04",
                title: "ADMISSION RESEARCH",
                text: "Map each target course to its current eligibility and entrance/admission requirements."
            },

            {
                stage: "05",
                title: "PREPARATION SYSTEM",
                text: "Create a preparation cycle containing concept learning, problem sets, timed practice, error analysis, and revision."
            },

            {
                stage: "06",
                title: "PROJECT PORTFOLIO",
                text: "Build meaningful technical projects rather than collecting unrelated certificates."
            },

            {
                stage: "07",
                title: "HIGHER EDUCATION",
                text: "Choose the institution and programme based on the course, curriculum, admission route, cost, location, and long-term goals."
            },

            {
                stage: "08",
                title: "SPECIALISATION",
                text: "Use university projects, internships, research, competitions, or advanced coursework to develop a specific direction."
            },

            {
                stage: "09",
                title: "CAREER TRANSITION",
                text: "Prepare a portfolio, experience record, network, and application strategy for the next stage."
            }

        ]

    },


    pcb: {

        title: "PCB",

        label: "SCIENCE / PCB",

        intro:
            "Physics, Chemistry, and Biology create a foundation for biological, medical, life-science, and related pathways.",

        what:
            "PCB combines physical science with biological science and is particularly relevant to many health and life-science routes.",

        why:
            "It can support pathways involving medicine, healthcare, biological sciences, biotechnology, research, and related areas, depending on eligibility.",

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Build strong foundations in science and biology."
            },

            {
                stage: "02",
                title: "PCB",
                text: "Study Physics, Chemistry, and Biology through Classes 11 and 12."
            },

            {
                stage: "03",
                title: "EXPLORE",
                text: "Compare medical, life-science, biotechnology, research, and related pathways."
            },

            {
                stage: "04",
                title: "ADMISSION",
                text: "Check the current eligibility and admission route for each target course."
            },

            {
                stage: "05",
                title: "HIGHER EDUCATION",
                text: "Enter the selected programme and build deeper subject knowledge."
            },

            {
                stage: "06",
                title: "SPECIALISE",
                text: "Use practical work, research, internships, and advanced study to specialise."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "FOUNDATION",
                text: "Strengthen biology, chemistry, physics, scientific reasoning, and disciplined study habits."
            },

            {
                stage: "02",
                title: "CLASS 11–12",
                text: "Build conceptual understanding while identifying which biological and health-related fields interest you."
            },

            {
                stage: "03",
                title: "FIELD EXPLORATION",
                text: "Compare clinical, biological, research, biotechnology, and other relevant directions."
            },

            {
                stage: "04",
                title: "ELIGIBILITY",
                text: "Check the current official subject and admission requirements for every intended programme."
            },

            {
                stage: "05",
                title: "PREPARATION",
                text: "Build a preparation system around the actual admission pathway you choose."
            },

            {
                stage: "06",
                title: "PRACTICAL EXPOSURE",
                text: "Use legitimate academic projects, laboratory exposure, introductory courses, and reading to validate interests."
            },

            {
                stage: "07",
                title: "HIGHER EDUCATION",
                text: "Select a programme based on curriculum, accreditation where applicable, cost, location, and future opportunities."
            }

        ]

    },


    pcmb: {

        title: "PCMB",

        label: "SCIENCE / PCMB",

        intro:
            "Physics, Chemistry, Mathematics, and Biology provide a broad science foundation while creating a heavier academic load.",

        what:
            "PCMB keeps both mathematical and biological subject areas in your academic profile.",

        why:
            "The combination can be useful for students who want to preserve options across quantitative and biological directions, subject to specific course eligibility.",

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Build strong foundations across mathematics and science."
            },

            {
                stage: "02",
                title: "PCMB",
                text: "Study Physics, Chemistry, Mathematics, and Biology."
            },

            {
                stage: "03",
                title: "COMPARE",
                text: "Compare technical, medical, biological, and scientific directions."
            },

            {
                stage: "04",
                title: "PRIORITISE",
                text: "Identify which subjects and future routes deserve the greatest preparation time."
            },

            {
                stage: "05",
                title: "ADMISSION",
                text: "Check current eligibility and admission requirements for each target programme."
            },

            {
                stage: "06",
                title: "SPECIALISE",
                text: "Move toward a specific field through higher education and practical experience."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "FOUNDATION",
                text: "Build strong fundamentals across all four subjects before attempting highly specialised preparation."
            },

            {
                stage: "02",
                title: "WORKLOAD",
                text: "Create a realistic study system that accounts for the larger subject load."
            },

            {
                stage: "03",
                title: "DIRECTION MAPPING",
                text: "Map potential technical, medical, life-science, research, and interdisciplinary routes."
            },

            {
                stage: "04",
                title: "PRIORITISATION",
                text: "Decide which routes are genuinely important so preparation time is not spread too thinly."
            },

            {
                stage: "05",
                title: "REQUIREMENTS",
                text: "Verify current eligibility and admission requirements for every target programme."
            },

            {
                stage: "06",
                title: "VALIDATION",
                text: "Use projects, introductory coursework, reading, and conversations with relevant students or professionals to test interests."
            },

            {
                stage: "07",
                title: "SPECIALISATION",
                text: "After selecting a direction, shift from broad exploration toward deeper subject and practical development."
            }

        ]

    },


    commerce: {

        title: "COMMERCE",

        label: "AFTER 10TH / COMMERCE",

        intro:
            "Commerce provides a foundation for business, finance, economics, accounting, management, entrepreneurship, and related fields.",

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Identify interest in business, numbers, economics, organisations, or markets."
            },

            {
                stage: "02",
                title: "COMMERCE",
                text: "Build foundations through the subjects available at your institution."
            },

            {
                stage: "03",
                title: "EXPLORE",
                text: "Compare finance, accounting, economics, management, entrepreneurship, and related directions."
            },

            {
                stage: "04",
                title: "QUALIFICATION",
                text: "Identify the degree, professional qualification, or other route relevant to your target."
            },

            {
                stage: "05",
                title: "EXPERIENCE",
                text: "Build practical understanding through projects, competitions, internships, or entrepreneurship."
            },

            {
                stage: "06",
                title: "CAREER",
                text: "Move into employment, further education, entrepreneurship, or professional study."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "INTEREST",
                text: "Determine whether your strongest interests are finance, accounting, economics, management, entrepreneurship, or another business field."
            },

            {
                stage: "02",
                title: "SUBJECT FOUNDATION",
                text: "Build strong fundamentals in the subjects selected for Classes 11 and 12."
            },

            {
                stage: "03",
                title: "FIELD COMPARISON",
                text: "Compare university degrees, professional qualifications, and direct skill-based routes."
            },

            {
                stage: "04",
                title: "REQUIREMENTS",
                text: "Check current eligibility, admission routes, examinations, and qualification requirements."
            },

            {
                stage: "05",
                title: "PRACTICAL EXPERIENCE",
                text: "Build practical understanding through case studies, projects, competitions, internships, or small ventures."
            },

            {
                stage: "06",
                title: "SPECIALISATION",
                text: "Choose a more focused area such as finance, accounting, economics, analytics, management, or entrepreneurship."
            },

            {
                stage: "07",
                title: "CAREER PLAN",
                text: "Connect your qualification, skills, experience, and target roles into a realistic next-step plan."
            }

        ]

    },


    humanities: {

        title: "HUMANITIES",

        label: "AFTER 10TH / HUMANITIES",

        intro:
            "Humanities explores people, societies, cultures, ideas, language, history, politics, psychology, and many creative and professional fields.",

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Identify interests in people, society, history, language, ideas, or creative work."
            },

            {
                stage: "02",
                title: "SUBJECTS",
                text: "Choose subjects based on your institution and intended direction."
            },

            {
                stage: "03",
                title: "EXPLORE",
                text: "Investigate law, psychology, social sciences, design, media, education, research, and other fields."
            },

            {
                stage: "04",
                title: "BUILD",
                text: "Develop reading, writing, research, communication, and analytical skills."
            },

            {
                stage: "05",
                title: "HIGHER EDUCATION",
                text: "Select the degree or professional route relevant to your goals."
            },

            {
                stage: "06",
                title: "EXPERIENCE",
                text: "Build practical experience through projects, writing, research, internships, or creative work."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "INTEREST MAP",
                text: "Identify whether your strongest interests are people, society, history, language, law, psychology, media, design, or another field."
            },

            {
                stage: "02",
                title: "SUBJECT CHOICE",
                text: "Compare the subjects available and understand how they connect to later study."
            },

            {
                stage: "03",
                title: "SKILL DEVELOPMENT",
                text: "Build reading, writing, research, argumentation, communication, and analytical skills."
            },

            {
                stage: "04",
                title: "FIELD RESEARCH",
                text: "Compare possible university and professional routes before committing to one."
            },

            {
                stage: "05",
                title: "REQUIREMENTS",
                text: "For specific careers, verify current eligibility and admission requirements through official sources."
            },

            {
                stage: "06",
                title: "PORTFOLIO",
                text: "Build essays, research projects, creative work, presentations, or other evidence of your capabilities."
            },

            {
                stage: "07",
                title: "DIRECTION",
                text: "Connect higher education, skills, experience, and target career areas into a coherent plan."
            }

        ]

    },


    vocational: {

        title: "VOCATIONAL / SKILL-BASED",

        label: "AFTER 10TH / VOCATIONAL",

        intro:
            "Skill-based pathways can provide more practical and career-oriented learning depending on the programme and institution.",

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Identify practical interests and areas where you want to build hands-on capability."
            },

            {
                stage: "02",
                title: "CHOOSE",
                text: "Research available vocational programmes and their progression options."
            },

            {
                stage: "03",
                title: "TRAIN",
                text: "Build practical knowledge and technical skills."
            },

            {
                stage: "04",
                title: "PRACTISE",
                text: "Apply those skills through projects, practical work, or supervised experience."
            },

            {
                stage: "05",
                title: "PROGRESS",
                text: "Move toward employment, further training, certification, or higher education where available."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "INTEREST",
                text: "Identify practical fields that genuinely interest you."
            },

            {
                stage: "02",
                title: "PROGRAMME RESEARCH",
                text: "Compare curriculum, duration, practical exposure, progression options, and recognition."
            },

            {
                stage: "03",
                title: "FOUNDATION",
                text: "Build the technical and theoretical fundamentals required by the chosen programme."
            },

            {
                stage: "04",
                title: "PRACTICE",
                text: "Prioritise hands-on work and projects that demonstrate actual capability."
            },

            {
                stage: "05",
                title: "EXPERIENCE",
                text: "Look for legitimate opportunities to apply the skill in realistic environments."
            },

            {
                stage: "06",
                title: "PROGRESSION",
                text: "Map possible certificates, advanced training, employment, or higher-education routes."
            },

            {
                stage: "07",
                title: "CAREER",
                text: "Build a portfolio of practical work and connect it to specific roles or further study."
            }

        ]

    },


    after12th: {

        title: "AFTER 12TH",

        label: "PATHWAY / 02",

        intro:
            "After Class 12, the focus shifts from broad stream selection toward specific courses, institutions, admission routes, and career directions.",

        roadmap: [

            {
                stage: "01",
                title: "12TH",
                text: "Understand your academic strengths and interests."
            },

            {
                stage: "02",
                title: "DIRECTION",
                text: "Identify the fields and courses that match your goals."
            },

            {
                stage: "03",
                title: "REQUIREMENTS",
                text: "Check eligibility and admission requirements."
            },

            {
                stage: "04",
                title: "SHORTLIST",
                text: "Compare suitable programmes and institutions."
            },

            {
                stage: "05",
                title: "APPLY",
                text: "Track examinations, applications, documents, and deadlines."
            },

            {
                stage: "06",
                title: "BUILD",
                text: "Develop skills and experience alongside your education."
            },

            {
                stage: "07",
                title: "NEXT STAGE",
                text: "Move toward employment, higher study, entrepreneurship, or another chosen direction."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "DIRECTION",
                text: "Define the broad field you want to investigate before selecting individual colleges."
            },

            {
                stage: "02",
                title: "COURSE RESEARCH",
                text: "Compare course structure, duration, eligibility, outcomes, cost, and progression."
            },

            {
                stage: "03",
                title: "ADMISSION ROUTE",
                text: "Identify the current entrance examination or admission mechanism for each target."
            },

            {
                stage: "04",
                title: "INSTITUTION SHORTLIST",
                text: "Compare institutions using factors relevant to your priorities, including curriculum, location, cost, facilities, and opportunities."
            },

            {
                stage: "05",
                title: "APPLICATION SYSTEM",
                text: "Create a deadline tracker for examinations, applications, documents, and financial planning."
            },

            {
                stage: "06",
                title: "EXPERIENCE",
                text: "Build relevant skills, projects, internships, research, or other experience during higher education."
            },

            {
                stage: "07",
                title: "TRANSITION",
                text: "Plan the move from education toward employment, postgraduate study, entrepreneurship, or another direction."
            }

        ]

    },


    global: {

        title: "GLOBAL OPTIONS",

        label: "PATHWAY / 03",

        intro:
            "International study requires more than choosing a country. Course fit, academic requirements, finances, applications, and logistics all matter.",

        roadmap: [

            {
                stage: "01",
                title: "GOAL",
                text: "Define what you want from an international education."
            },

            {
                stage: "02",
                title: "COUNTRY",
                text: "Compare countries and education systems."
            },

            {
                stage: "03",
                title: "COURSE",
                text: "Research programmes that match your interests."
            },

            {
                stage: "04",
                title: "REQUIREMENTS",
                text: "Check academic, language, financial, and application requirements."
            },

            {
                stage: "05",
                title: "APPLY",
                text: "Prepare applications, documents, and deadlines."
            },

            {
                stage: "06",
                title: "TRANSITION",
                text: "Plan finances, accommodation, travel, enrolment, and the move itself."
            }

        ],

        advanced: [

            {
                stage: "01",
                title: "OBJECTIVE",
                text: "Define why you want international study and what outcome you are seeking."
            },

            {
                stage: "02",
                title: "COUNTRY RESEARCH",
                text: "Compare education systems, cost, location, language, immigration rules, and post-study considerations."
            },

            {
                stage: "03",
                title: "COURSE RESEARCH",
                text: "Compare programme curriculum, duration, entry requirements, accreditation where relevant, and future opportunities."
            },

            {
                stage: "04",
                title: "ELIGIBILITY",
                text: "Verify academic qualifications, language requirements, examinations, portfolios, or other programme-specific criteria."
            },

            {
                stage: "05",
                title: "FINANCIAL PLAN",
                text: "Build a realistic estimate covering tuition, living costs, travel, insurance, accommodation, and available funding."
            },

            {
                stage: "06",
                title: "APPLICATION",
                text: "Prepare documents, essays or statements where required, references, portfolios, examinations, and deadlines."
            },

            {
                stage: "07",
                title: "TRANSITION",
                text: "Plan enrolment, travel, accommodation, finances, required documentation, and arrival."
            }

        ]

    }

};


/* =========================================
   TEXT ANIMATION
========================================= */

function prepareTextAnimation() {

    const elements =
        document.querySelectorAll(
            ".animated-heading, .animate-text"
        );

    elements.forEach(element => {

        if (!element.dataset.originalHTML) {

            element.dataset.originalHTML =
                element.innerHTML;

        }

    });

}


function resetAnimatedText(slideElement) {

    const elements =
        slideElement.querySelectorAll(
            ".animated-heading, .animate-text"
        );

    elements.forEach(element => {

        if (element.dataset.originalHTML) {

            element.innerHTML =
                element.dataset.originalHTML;

        }

    });

}


function animateSlideText(slideElement) {

    resetAnimatedText(slideElement);

    const elements =
        slideElement.querySelectorAll(
            ".animated-heading, .animate-text"
        );

    let globalCharIndex = 0;


    elements.forEach(element => {

        function wrapTextNodes(node) {

            if (node.nodeType === Node.TEXT_NODE) {

                const text =
                    node.nodeValue;

                const fragment =
                    document.createDocumentFragment();

                const parts =
                    text.split(/(\s+)/);


                parts.forEach(part => {

                    if (part.trim() === "") {

                        fragment.appendChild(
                            document.createTextNode(part)
                        );

                    } else {

                        const wordSpan =
                            document.createElement("span");

                        wordSpan.className =
                            "word";


                        for (let i = 0; i < part.length; i++) {

                            const charSpan =
                                document.createElement("span");

                            charSpan.className =
                                "char";

                            charSpan.textContent =
                                part[i];

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
                node.nodeType ===
                Node.ELEMENT_NODE
            ) {

                Array.from(
                    node.childNodes
                ).forEach(
                    wrapTextNodes
                );

            }

        }


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

        }, 120 * index + 250);

    });

}


/* =========================================
   MAIN SLIDE SYSTEM
========================================= */

function goToSlide(
    index,
    clearRoute = true
) {

    if (
        index < 0 ||
        index >= slides.length
    ) {
        return;
    }


    /*
        IMPORTANT FIX:

        If exploration is currently open,
        close it BEFORE changing slides.
    */

    if (
        explorationScreen.classList.contains(
            "active"
        )
    ) {

        closeExploration();

    }


    slides[currentSlide].classList.remove(
        "active"
    );


    currentSlide = index;


    slides[currentSlide].classList.add(
        "active"
    );


    navButtons.forEach(
        (button, i) => {

            button.classList.toggle(
                "active",
                i === currentSlide
            );

        }
    );


    if (slideCounter) {

        const slideNumber =
            String(
                currentSlide + 1
            ).padStart(2, "0");

        const totalSlides =
            String(
                slides.length
            ).padStart(2, "0");

        slideCounter.textContent =
            `${slideNumber} / ${totalSlides}`;

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


    /*
        Remove URL route when returning
        to the main presentation.
    */

    if (clearRoute) {

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

function openExploration(route) {

    if (!route) {
        return;
    }


    currentExplorationRoute =
        route;


    const data =
        getRouteData(route);


    if (!data) {

        console.warn(
            "KAYRA: Unknown route:",
            route
        );

        return;

    }


    currentExplorationData =
        data;


    /*
        THIS IS THE IMPORTANT PART.

        We are NOT changing currentSlide.

        We simply place the exploration
        layer over the presentation.
    */

    explorationScreen.classList.add(
        "active"
    );

    explorationScreen.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "exploration-open"
    );


    if (mobileMenu) {

        mobileMenu.classList.remove(
            "open"
        );

    }


    renderExploration(
        route,
        data
    );


    window.scrollTo(
        0,
        0
    );

}


/* =========================================
   CLOSE EXPLORATION
========================================= */

function closeExploration() {

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


    currentExplorationRoute =
        "";

    currentExplorationData =
        null;


    hideGenerationOverlay();

}


/* =========================================
   ROUTE LOOKUP
========================================= */

function getRouteData(route) {

    const parts =
        route.split("/");


    if (
        parts[0] === "skill" &&
        parts[1]
    ) {

        return skillData[
            parts[1]
        ];

    }


    if (
        parts[0] === "pathway"
    ) {

        /*
            AFTER 10TH
        */

        if (
            parts[1] === "after10th"
        ) {

            /*
                /pathway/after10th
            */

            if (
                !parts[2]
            ) {

                return pathwayData.after10th;

            }


            /*
                /pathway/after10th/science
            */

            if (
                parts[2] === "science"
            ) {

                /*
                    /science
                */

                if (
                    !parts[3]
                ) {

                    return pathwayData.science;

                }


                /*
                    /science/pcm
                */

                if (
                    parts[3] === "pcm"
                ) {

                    return pathwayData.pcm;

                }


                if (
                    parts[3] === "pcb"
                ) {

                    return pathwayData.pcb;

                }


                if (
                    parts[3] === "pcmb"
                ) {

                    return pathwayData.pcmb;

                }

            }


            if (
                parts[2] === "commerce"
            ) {

                return pathwayData.commerce;

            }


            if (
                parts[2] === "humanities"
            ) {

                return pathwayData.humanities;

            }


            if (
                parts[2] === "vocational"
            ) {

                return pathwayData.vocational;

            }

        }


        /*
            AFTER 12TH
        */

        if (
            parts[1] === "after12th"
        ) {

            return pathwayData.after12th;

        }


        /*
            GLOBAL
        */

        if (
            parts[1] === "global"
        ) {

            return pathwayData.global;

        }

    }


    return null;

}


/* =========================================
   SIMPLE ROADMAP HTML
========================================= */

function createRoadmapHTML(
    roadmap
) {

    if (
        !roadmap ||
        !roadmap.length
    ) {

        return "";

    }


    return `

        <div class="roadmap">

            ${roadmap.map(
                (item, index) => `

                    <div
                        class="roadmap-item reveal-up"
                        style="--delay:${index * 80}ms">

                        <div class="roadmap-node">
                            ${item.stage}
                        </div>

                        <div class="roadmap-line"></div>

                        <div class="roadmap-content">

                            <div class="roadmap-stage">
                                STAGE ${item.stage}
                            </div>

                            <h4>
                                ${item.title}
                            </h4>

                            <p>
                                ${item.text}
                            </p>

                        </div>

                    </div>

                `
            ).join("")}

        </div>

    `;

}


/* =========================================
   CHOICE BUTTONS
========================================= */

function createChoiceHTML(
    choices
) {

    if (
        !choices ||
        !choices.length
    ) {

        return "";

    }


    return `

        <div class="exploration-choices">

            ${choices.map(
                (choice, index) => `

                    <button
                        class="exploration-choice reveal-up"
                        style="--delay:${index * 80}ms"
                        data-route="${choice.route}">

                        <span class="choice-number">
                            ${choice.number}
                        </span>

                        <span class="choice-copy">

                            <strong>
                                ${choice.title}
                            </strong>

                            <small>
                                ${choice.text}
                            </small>

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


/* =========================================
   EXPLORATION RENDERER
========================================= */

function renderExploration(
    route,
    data
) {

    const isSkill =
        data.type === "skill";


    let infoHTML = "";


    if (
        data.what &&
        data.why &&
        data.start
    ) {

        infoHTML = `

            <div class="exploration-info-grid">

                <article class="info-block reveal-up">

                    <div class="info-label">
                        WHAT IT IS
                    </div>

                    <p>
                        ${data.what}
                    </p>

                </article>


                <article class="info-block reveal-up">

                    <div class="info-label">
                        WHY IT MATTERS
                    </div>

                    <p>
                        ${data.why}
                    </p>

                </article>


                <article class="info-block reveal-up">

                    <div class="info-label">
                        STARTING POINT
                    </div>

                    <p>
                        ${data.start}
                    </p>

                </article>

            </div>

        `;

    }


    let choicesHTML =
        createChoiceHTML(
            data.choices
        );


    let roadmapHTML = "";


    if (data.roadmap) {

        roadmapHTML = `

            <section class="roadmap-section">

                <div class="exploration-section-label">
                    ROADMAP
                </div>

                <h3 class="exploration-section-title">
                    THE NEXT STEPS.
                </h3>

                ${createRoadmapHTML(
                    data.roadmap
                )}

            </section>

        `;

    }


    let advancedHTML = "";


    if (data.advanced) {

        advancedHTML = `

            <section class="advanced-cta">

                <div class="advanced-cta-copy">

                    <div class="advanced-label">
                        KAYRA / DEEPER GUIDANCE
                    </div>

                    <h3>
                        GO BEYOND THE OVERVIEW.
                    </h3>

                    <p>
                        Some directions require more depth than
                        a simple roadmap can provide. Kayra can
                        build a more detailed path with additional
                        stages, preparation checkpoints, skill
                        requirements, and next-step guidance.
                    </p>

                </div>


                <button
                    class="advanced-button"
                    data-generate-roadmap>

                    GENERATE ADVANCED ROADMAP

                    <span>
                        →
                    </span>

                </button>

            </section>

        `;

    }


    let kayraHelpHTML = `

        <section class="kayra-help">

            <div class="exploration-section-label">
                KAYRA
            </div>

            <h3 class="exploration-section-title">
                HOW KAYRA HELPS.
            </h3>

            <div class="help-grid">

                <div class="help-item">
                    <span>01</span>
                    <p>
                        Break complex decisions into smaller stages.
                    </p>
                </div>

                <div class="help-item">
                    <span>02</span>
                    <p>
                        Connect skills, requirements, and next steps.
                    </p>
                </div>

                <div class="help-item">
                    <span>03</span>
                    <p>
                        Turn a broad direction into an actionable plan.
                    </p>
                </div>

            </div>

        </section>

    `;


    explorationView.innerHTML = `

        <div class="exploration-header">

            <div class="exploration-route">
                ${data.label || route.toUpperCase()}
            </div>

            <h1>
                ${data.title}
            </h1>

            <p>
                ${data.intro}
            </p>

        </div>


        ${choicesHTML}


        ${infoHTML}


        ${roadmapHTML}


        ${advancedHTML}


        ${kayraHelpHTML}


        <div class="exploration-footer">

            <button
                class="exploration-back-large"
                data-back-route>

                ← BACK

            </button>

        </div>

    `;


    /*
        Small animation trigger.
    */

    requestAnimationFrame(() => {

        explorationView
            .querySelectorAll(".reveal-up")
            .forEach(element => {

                element.classList.add(
                    "revealed"
                );

            });

    });

}


/* =========================================
   ADVANCED ROADMAP GENERATOR
========================================= */

function generateAdvancedRoadmap() {

    if (
        !currentExplorationData ||
        !currentExplorationData.advanced
    ) {

        return;

    }


    if (generationTimer) {

        clearInterval(
            generationTimer
        );

    }


    generationOverlay.classList.add(
        "active"
    );

    generationOverlay.setAttribute(
        "aria-hidden",
        "false"
    );


    generationBarFill.style.width =
        "0%";


    generationRing.style.setProperty(
        "--progress",
        "0%"
    );


    generationPercent.textContent =
        "00%";


    generationStatus.textContent =
        "Mapping your direction...";


    const statuses = [

        {
            progress: 12,
            text: "Reading your current pathway..."
        },

        {
            progress: 28,
            text: "Breaking the route into stages..."
        },

        {
            progress: 44,
            text: "Mapping skills and requirements..."
        },

        {
            progress: 61,
            text: "Building preparation checkpoints..."
        },

        {
            progress: 78,
            text: "Connecting the next steps..."
        },

        {
            progress: 92,
            text: "Finalising your roadmap..."
        },

        {
            progress: 100,
            text: "Roadmap ready."
        }

    ];


    let progress = 0;

    let statusIndex = 0;


    generationTimer =
        setInterval(() => {

            const increments = [
                3,
                5,
                4,
                7,
                3,
                6,
                5,
                8,
                4,
                7,
                5,
                6,
                4,
                8,
                5,
                7,
                4,
                6
            ];


            const increment =
                increments[
                    Math.min(
                        Math.floor(
                            progress / 6
                        ),
                        increments.length - 1
                    )
                ];


            progress += increment;


            if (progress >= 100) {

                progress = 100;

            }


            generationBarFill.style.width =
                `${progress}%`;


            generationRing.style.setProperty(
                "--progress",
                `${progress}%`
            );


            generationPercent.textContent =
                `${String(progress).padStart(2, "0")}%`;


            while (
                statusIndex <
                statuses.length &&
                progress >=
                statuses[statusIndex].progress
            ) {

                generationStatus.textContent =
                    statuses[statusIndex].text;

                statusIndex++;

            }


            if (progress >= 100) {

                clearInterval(
                    generationTimer
                );

                generationTimer =
                    null;


                setTimeout(() => {

                    hideGenerationOverlay();

                    renderAdvancedRoadmap(
                        currentExplorationData
                    );

                }, 600);

            }

        }, 110);

}


/* =========================================
   HIDE GENERATION
========================================= */

function hideGenerationOverlay() {

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


    if (generationTimer) {

        clearInterval(
            generationTimer
        );

        generationTimer =
            null;

    }

}


/* =========================================
   ADVANCED ROADMAP RENDERER
========================================= */

function renderAdvancedRoadmap(
    data
) {

    if (
        !data ||
        !data.advanced
    ) {

        return;

    }


    explorationView.innerHTML = `

        <div class="advanced-roadmap-header">

            <div class="exploration-route">
                KAYRA / ADVANCED ROADMAP
            </div>

            <h1>
                ${data.title}
            </h1>

            <p>
                A deeper route built around stages,
                preparation, development, and progression.
            </p>

        </div>


        <div class="advanced-overview">

            <div class="advanced-overview-label">
                ADVANCED OVERVIEW
            </div>

            <p>
                This roadmap expands the basic direction into
                smaller checkpoints so you can understand not
                only where to go, but what needs to happen
                between each stage.
            </p>

        </div>


        <section class="advanced-stage-section">

            <div class="exploration-section-label">
                DETAILED PATH
            </div>

            <h3 class="exploration-section-title">
                BUILD THE ROUTE.
            </h3>


            <div class="advanced-stage-list">

                ${data.advanced.map(
                    (item, index) => `

                        <article
                            class="advanced-stage reveal-up"
                            style="--delay:${index * 70}ms">

                            <div class="advanced-stage-index">

                                ${item.stage}

                            </div>


                            <div class="advanced-stage-body">

                                <div class="advanced-stage-kicker">
                                    CHECKPOINT ${item.stage}
                                </div>

                                <h4>
                                    ${item.title}
                                </h4>

                                <p>
                                    ${item.text}
                                </p>

                            </div>

                        </article>

                    `
                ).join("")}

            </div>

        </section>


        <section class="checkpoint-section">

            <div class="exploration-section-label">
                KEEP TRACK OF
            </div>

            <h3 class="exploration-section-title">
                WHAT MATTERS.
            </h3>


            <div class="checkpoint-grid">

                <div class="checkpoint">
                    <span>01</span>
                    <strong>REQUIREMENTS</strong>
                    <p>
                        Verify current eligibility and prerequisites
                        before committing to a route.
                    </p>
                </div>


                <div class="checkpoint">
                    <span>02</span>
                    <strong>SKILLS</strong>
                    <p>
                        Identify the skills your chosen direction
                        actually requires.
                    </p>
                </div>


                <div class="checkpoint">
                    <span>03</span>
                    <strong>DEADLINES</strong>
                    <p>
                        Track important examinations,
                        applications, and preparation windows.
                    </p>
                </div>


                <div class="checkpoint">
                    <span>04</span>
                    <strong>EXPERIENCE</strong>
                    <p>
                        Build evidence of your ability through
                        meaningful projects and practical work.
                    </p>
                </div>

            </div>

        </section>


        <section class="advanced-final">

            <div>

                <div class="advanced-label">
                    KAYRA / NEXT STEP
                </div>

                <h3>
                    KEEP BUILDING.
                </h3>

                <p>
                    A roadmap is a structure, not a prediction.
                    Review it as your interests, abilities,
                    and opportunities develop.
                </p>

            </div>


            <button
                class="advanced-back-button"
                data-back-to-roadmap>

                ← BACK TO ROADMAP

            </button>

        </section>

    `;


    requestAnimationFrame(() => {

        explorationView
            .querySelectorAll(".reveal-up")
            .forEach(element => {

                element.classList.add(
                    "revealed"
                );

            });

    });

}


/* =========================================
   GET PARENT ROUTE
========================================= */

function getParentRoute(route) {

    const parts =
        route.split("/");


    if (parts.length <= 2) {

        /*
            skill/communication
            pathway/after10th
            pathway/after12th
            pathway/global
        */

        return null;

    }


    parts.pop();


    return parts.join("/");

}


/* =========================================
   RETURN TO MAIN SLIDE
========================================= */

function returnToSlide(
    slideIndex
) {

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
        window.location.hash
            .replace(/^#/, "")
            .trim();


    /*
        NO ROUTE

        Show normal presentation.
    */

    if (!hash) {

        if (
            explorationScreen.classList.contains(
                "active"
            )
        ) {

            closeExploration();

        }

        return;

    }


    /*
        VALID EXPLORATION ROUTE
    */

    const data =
        getRouteData(hash);


    if (!data) {

        /*
            Bad route.
            Return to home safely.
        */

        history.replaceState(
            null,
            "",
            window.location.pathname +
            window.location.search
        );

        goToSlide(
            0,
            false
        );

        return;

    }


    /*
        Open exploration.
    */

    openExploration(
        hash
    );

}


/* =========================================
   EXPLORATION EVENT DELEGATION
========================================= */

explorationView.addEventListener(
    "click",
    event => {

        /*
            ANY BUTTON WITH data-route
        */

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


        /*
            BACK TO ROADMAP
        */

        const backRoadmap =
            event.target.closest(
                "[data-back-to-roadmap]"
            );


        if (backRoadmap) {

            renderExploration(
                currentExplorationRoute,
                currentExplorationData
            );

            return;

        }


        /*
            BACK TO PARENT
        */

        const backRoute =
            event.target.closest(
                "[data-back-route]"
            );


        if (backRoute) {

            const parent =
                getParentRoute(
                    currentExplorationRoute
                );


            if (parent) {

                window.location.hash =
                    parent;

            }

            else {

                /*
                    Skill or top-level pathway.
                    Return to presentation.
                */

                const route =
                    currentExplorationRoute;


                if (
                    route.startsWith(
                        "skill/"
                    )
                ) {

                    returnToSlide(
                        2
                    );

                }

                else {

                    returnToSlide(
                        3
                    );

                }

            }

            return;

        }


        /*
            ADVANCED ROADMAP
        */

        const advancedButton =
            event.target.closest(
                "[data-generate-roadmap]"
            );


        if (advancedButton) {

            generateAdvancedRoadmap();

            return;

        }

    }
);


/* =========================================
   TOP BACK BUTTON
========================================= */

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

        }

        else {

            if (
                currentExplorationRoute
                    .startsWith("skill/")
            ) {

                returnToSlide(
                    2
                );

            }

            else {

                returnToSlide(
                    3
                );

            }

        }

    }
);


/* =========================================
   NEXT SLIDE
========================================= */

nextButton.addEventListener(
    "click",
    () => {

        /*
            Do nothing if exploration
            is open.
        */

        if (
            explorationScreen.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            currentSlide <
            slides.length - 1
        ) {

            goToSlide(
                currentSlide + 1
            );

        }

        else {

            goToSlide(
                0
            );

        }

    }
);


/* =========================================
   PREVIOUS SLIDE
========================================= */

previousButton.addEventListener(
    "click",
    () => {

        if (
            explorationScreen.classList.contains(
                "active"
            )
        ) {

            return;

        }


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


/* =========================================
   DESKTOP NAVIGATION
========================================= */

navButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                goToSlide(
                    index
                );

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

                goToSlide(
                    index
                );

            }
        );

    }
);


/* =========================================
   NORMAL SLIDE BUTTONS
========================================= */

document
    .querySelectorAll(
        "[data-slide-target]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const target =
                    parseInt(
                        event.currentTarget
                            .dataset
                            .slideTarget,
                        10
                    );


                if (
                    !Number.isNaN(
                        target
                    )
                ) {

                    goToSlide(
                        target
                    );

                }

            }
        );

    });


/* =========================================
   MENU
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
   KEYBOARD
========================================= */

window.addEventListener(
    "keydown",
    event => {

        /*
            Exploration is open.

            Arrow keys should NOT move
            the presentation underneath it.
        */

        if (
            explorationScreen.classList.contains(
                "active"
            )
        ) {

            if (
                event.key === "Escape"
            ) {

                const parent =
                    getParentRoute(
                        currentExplorationRoute
                    );


                if (parent) {

                    window.location.hash =
                        parent;

                }

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
   HASH CHANGES
========================================= */

window.addEventListener(
    "hashchange",
    handleRoute
);


/* =========================================
   START EXPLORING BUTTON
========================================= */

const startExploringButton =
    document.getElementById(
        "startExploringButton"
    );


if (startExploringButton) {

    startExploringButton.addEventListener(
        "click",
        () => {

            /*
                For now, Start sends the user
                to the Pathways slide.

                This is deliberately NOT
                hardcoded through data-slide-target.
            */

            goToSlide(
                3
            );

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

        /*
            This is the key startup fix.

            If the URL contains something like:

            #pathway/after10th

            the exploration screen opens.

            Otherwise normal HOME opens.
        */

        handleRoute();


        if (
            !window.location.hash
        ) {

            goToSlide(
                0,
                false
            );

        }

    }
);
