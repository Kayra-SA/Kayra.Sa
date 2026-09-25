/* =========================================
   KAYRA
   MAIN SLIDES + EXPLORATION + ROADMAPS
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


/* =========================================
   GENERATION ELEMENTS
========================================= */

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

let currentExplorationRoute = null;

let currentExplorationData = null;

let generationTimer = null;


/* =========================================
   SKILL DATA
========================================= */

const skillData = {


    communication: {

        title: "COMMUNICATION",

        intro:
            "Communication is the ability to express ideas clearly, understand others, and adapt your message to different situations.",

        what:
            "Clear communication includes speaking, writing, listening, questioning, and understanding context.",

        why:
            "It affects how effectively you learn, collaborate, present ideas, build relationships, and work with others.",

        start:
            "Begin by improving one communication habit at a time: explain ideas clearly, listen actively, and ask better questions.",

        roadmap: [

            {
                stage: "01",
                title: "FOUNDATION",
                text: "Learn to express simple ideas clearly and organise what you want to say."
            },

            {
                stage: "02",
                title: "LISTENING",
                text: "Develop active listening and learn to understand before responding."
            },

            {
                stage: "03",
                title: "STRUCTURED SPEAKING",
                text: "Practise presenting ideas with a clear beginning, middle, and conclusion."
            },

            {
                stage: "04",
                title: "WRITING",
                text: "Build the ability to communicate clearly through messages, essays, reports, and documentation."
            },

            {
                stage: "05",
                title: "FEEDBACK",
                text: "Use feedback to identify unclear communication and improve it."
            }

        ],

        advanced: {

            overview:
                "A deeper communication roadmap moves from basic clarity toward high-stakes communication, structured writing, presentation, feedback, and a visible body of work.",

            stages: [

                ["01", "BASELINE", "Identify your current strengths and recurring communication problems."],

                ["02", "CLARITY", "Practise reducing complicated ideas into simple, structured explanations."],

                ["03", "LISTENING", "Develop active listening, questioning, summarising, and response skills."],

                ["04", "SPEAKING", "Practise presentations, discussions, explanations, and spontaneous speaking."],

                ["05", "WRITING", "Build structured writing across academic, professional, and creative formats."],

                ["06", "FEEDBACK", "Record, review, revise, and compare your communication over time."],

                ["07", "APPLICATION", "Use the skill in presentations, projects, interviews, teamwork, and public work."]
            ],

            checkpoints: [

                "Can you explain a complicated idea simply?",

                "Can you adapt your explanation to different audiences?",

                "Can you identify where your communication became unclear?"
            ]

        }

    },


    creativity: {

        title: "CREATIVITY",

        intro:
            "Creativity is the ability to generate possibilities, connect ideas, and turn concepts into something useful or meaningful.",

        what:
            "Creativity involves observation, experimentation, imagination, iteration, and making connections between different ideas.",

        why:
            "It helps you approach open-ended problems, create original work, and develop solutions when there is no obvious answer.",

        start:
            "Start creating regularly. Give yourself constraints, generate multiple ideas, and improve one instead of waiting for the perfect idea.",

        roadmap: [

            {
                stage: "01",
                title: "OBSERVATION",
                text: "Train yourself to notice details, patterns, problems, and opportunities."
            },

            {
                stage: "02",
                title: "IDEAS",
                text: "Generate multiple possibilities instead of stopping at the first solution."
            },

            {
                stage: "03",
                title: "EXPERIMENT",
                text: "Test ideas through small experiments and prototypes."
            },

            {
                stage: "04",
                title: "ITERATION",
                text: "Improve ideas using feedback, testing, and comparison."
            },

            {
                stage: "05",
                title: "CREATION",
                text: "Turn your strongest ideas into finished work."
            }

        ],

        advanced: {

            overview:
                "The advanced path develops creativity as a repeatable process: observe, generate, test, refine, collaborate, and build a portfolio of finished work.",

            stages: [

                ["01", "OBSERVE", "Study your environment, problems, people, media, and existing solutions."],

                ["02", "GENERATE", "Practise producing many possible directions before choosing one."],

                ["03", "CONSTRAIN", "Use time, resources, audience, or technical limits to sharpen ideas."],

                ["04", "PROTOTYPE", "Turn abstract concepts into small experiments or working models."],

                ["05", "ITERATE", "Test, collect feedback, identify weaknesses, and revise."],

                ["06", "COLLABORATE", "Combine your ideas with different perspectives and disciplines."],

                ["07", "PORTFOLIO", "Document finished projects and the process behind them."]
            ],

            checkpoints: [

                "Can you produce several different solutions to one problem?",

                "Can you explain why you selected one idea over another?",

                "Do you have finished work that demonstrates your creative process?"
            ]

        }

    },


    "problem-solving": {

        title: "PROBLEM SOLVING",

        intro:
            "Problem solving is the process of understanding a problem, breaking it down, testing possible solutions, and improving the result.",

        what:
            "Strong problem solving combines observation, reasoning, research, experimentation, and iteration.",

        why:
            "It is useful in academics, technology, business, design, everyday decisions, and almost every professional field.",

        start:
            "When something goes wrong, resist immediately searching for an answer. Define the actual problem first.",

        roadmap: [

            {
                stage: "01",
                title: "DEFINE",
                text: "Understand what the actual problem is."
            },

            {
                stage: "02",
                title: "BREAK DOWN",
                text: "Separate a large problem into smaller manageable parts."
            },

            {
                stage: "03",
                title: "RESEARCH",
                text: "Collect the information needed to understand the situation."
            },

            {
                stage: "04",
                title: "SOLVE",
                text: "Generate and compare possible solutions."
            },

            {
                stage: "05",
                title: "TEST",
                text: "Try the solution, observe the result, and improve it."
            }

        ],

        advanced: {

            overview:
                "The advanced problem-solving path builds a repeatable framework that can be applied to academic problems, projects, technology, and real-world situations.",

            stages: [

                ["01", "DEFINE", "Write the problem in specific terms and identify the desired outcome."],

                ["02", "DECOMPOSE", "Break the problem into smaller questions and components."],

                ["03", "INVESTIGATE", "Gather reliable information and identify constraints."],

                ["04", "GENERATE", "Create several possible approaches rather than committing immediately."],

                ["05", "TEST", "Evaluate solutions using evidence, experiments, prototypes, or measurable results."],

                ["06", "ITERATE", "Use what failed and what worked to improve the solution."],

                ["07", "DOCUMENT", "Record the reasoning so another person can understand the process."]
            ],

            checkpoints: [

                "Did you solve the actual problem or only a symptom?",

                "Can you explain why your chosen solution should work?",

                "Can you identify what you would change after testing?"
            ]

        }

    },


    "critical-thinking": {

        title: "CRITICAL THINKING",

        intro:
            "Critical thinking means examining claims, evidence, assumptions, and alternatives before reaching a conclusion.",

        what:
            "It involves asking questions, evaluating sources, identifying assumptions, comparing evidence, and revising conclusions when needed.",

        why:
            "It helps you make stronger academic, professional, and everyday decisions.",

        start:
            "Whenever you encounter a strong claim, ask: what is the evidence, what assumptions are being made, and what else could explain it?",

        roadmap: [

            {
                stage: "01",
                title: "QUESTION",
                text: "Learn to question claims instead of accepting them automatically."
            },

            {
                stage: "02",
                title: "EVIDENCE",
                text: "Separate evidence from opinions and unsupported statements."
            },

            {
                stage: "03",
                title: "COMPARE",
                text: "Consider multiple explanations and alternatives."
            },

            {
                stage: "04",
                title: "ANALYSE",
                text: "Look for assumptions, weaknesses, and logical gaps."
            },

            {
                stage: "05",
                title: "CONCLUDE",
                text: "Build conclusions that match the strength of the available evidence."
            }

        ],

        advanced: {

            overview:
                "The advanced path develops critical thinking through source evaluation, evidence analysis, argument construction, bias awareness, and deliberate revision.",

            stages: [

                ["01", "QUESTION", "Identify exactly what is being claimed and what needs to be established."],

                ["02", "SOURCE", "Evaluate where information comes from and how reliable it is."],

                ["03", "EVIDENCE", "Distinguish observations, evidence, interpretation, and opinion."],

                ["04", "ASSUMPTIONS", "Identify assumptions that the argument depends on."],

                ["05", "ALTERNATIVES", "Compare competing explanations and possible interpretations."],

                ["06", "ARGUMENT", "Construct a clear conclusion supported by appropriate evidence."],

                ["07", "REVIEW", "Revisit your conclusion when new evidence changes the situation."]
            ],

            checkpoints: [

                "Can you identify the evidence supporting a claim?",

                "Can you explain what would change your conclusion?",

                "Can you distinguish confidence from certainty?"
            ]

        }

    },


    leadership: {

        title: "LEADERSHIP",

        intro:
            "Leadership is the ability to take responsibility, coordinate people, make decisions, and help a group move toward a goal.",

        what:
            "Leadership includes communication, responsibility, decision-making, delegation, conflict management, and accountability.",

        why:
            "Leadership becomes useful whenever you work with teams, projects, communities, organisations, or shared goals.",

        start:
            "Start by taking responsibility for small projects and learning how to coordinate people effectively.",

        roadmap: [

            {
                stage: "01",
                title: "SELF-MANAGEMENT",
                text: "Learn to manage your own time, commitments, and responsibilities."
            },

            {
                stage: "02",
                title: "RESPONSIBILITY",
                text: "Take ownership of tasks and follow them through."
            },

            {
                stage: "03",
                title: "TEAMWORK",
                text: "Understand different working styles and communicate effectively."
            },

            {
                stage: "04",
                title: "DECISION MAKING",
                text: "Make decisions using goals, information, constraints, and consequences."
            },

            {
                stage: "05",
                title: "PROJECTS",
                text: "Lead a small project from planning to completion."
            }

        ],

        advanced: {

            overview:
                "Advanced leadership is developed through responsibility and repeated practice rather than a title. The roadmap focuses on teams, decisions, delegation, conflict, and measurable projects.",

            stages: [

                ["01", "SELF-MANAGEMENT", "Build reliability through time management, preparation, and follow-through."],

                ["02", "OWNERSHIP", "Take responsibility for outcomes rather than only assigned tasks."],

                ["03", "TEAM COMMUNICATION", "Learn to align people around goals, roles, expectations, and deadlines."],

                ["04", "DELEGATION", "Match responsibilities to people and provide the support they need."],

                ["05", "CONFLICT", "Handle disagreements by focusing on issues, evidence, and shared objectives."],

                ["06", "DECISIONS", "Make decisions under constraints while understanding trade-offs."],

                ["07", "PROJECT LEADERSHIP", "Lead a complete project and evaluate its results."]
            ],

            checkpoints: [

                "Can people understand what they are responsible for?",

                "Can you accept responsibility when something goes wrong?",

                "Can you show the result of a project you helped lead?"
            ]

        }

    },


    "digital-literacy": {

        title: "DIGITAL LITERACY",

        intro:
            "Digital literacy is the ability to use technology, information, digital tools, and online systems effectively and responsibly.",

        what:
            "It includes information search, digital communication, productivity tools, data awareness, online safety, and technology understanding.",

        why:
            "Digital systems are part of education, work, communication, research, and everyday life.",

        start:
            "Become comfortable with the tools you already use, then gradually learn tools that support your goals.",

        roadmap: [

            {
                stage: "01",
                title: "DIGITAL BASICS",
                text: "Understand devices, files, software, browsers, and common digital systems."
            },

            {
                stage: "02",
                title: "INFORMATION",
                text: "Learn to search for, evaluate, organise, and cite information."
            },

            {
                stage: "03",
                title: "PRODUCTIVITY",
                text: "Build competence with documents, presentations, spreadsheets, and collaboration tools."
            },

            {
                stage: "04",
                title: "SAFETY",
                text: "Understand privacy, passwords, scams, permissions, and responsible online behaviour."
            },

            {
                stage: "05",
                title: "BUILD",
                text: "Use technology to create workflows, projects, and useful digital work."
            }

        ],

        advanced: {

            overview:
                "The advanced digital-literacy roadmap develops practical technology habits, information evaluation, productivity, digital safety, data awareness, and responsible AI use.",

            stages: [

                ["01", "FOUNDATION", "Understand operating systems, files, browsers, applications, and basic troubleshooting."],

                ["02", "INFORMATION", "Search efficiently, evaluate sources, cross-check claims, and organise research."],

                ["03", "PRODUCTIVITY", "Use documents, spreadsheets, presentations, cloud tools, and collaboration systems effectively."],

                ["04", "SAFETY", "Develop secure password, privacy, permission, phishing, and account-management habits."],

                ["05", "DATA", "Understand basic tables, charts, measurements, and how data can be interpreted."],

                ["06", "AI LITERACY", "Understand practical AI use, limitations, verification, prompting, and responsible use."],

                ["07", "WORKFLOWS", "Combine digital tools into repeatable systems that support real projects."]
            ],

            checkpoints: [

                "Can you independently research and verify information online?",

                "Can you protect your important digital accounts?",

                "Can you use technology to make a real task more efficient?"
            ]

        }

    },


    adaptability: {

        title: "ADAPTABILITY",

        intro:
            "Adaptability is the ability to learn, adjust, and remain effective when circumstances, tools, expectations, or environments change.",

        what:
            "It involves learning quickly, accepting feedback, managing uncertainty, and transferring existing skills to new situations.",

        why:
            "Education, technology, workplaces, and personal goals can all change over time.",

        start:
            "Practise learning something unfamiliar and become comfortable being temporarily inexperienced.",

        roadmap: [

            {
                stage: "01",
                title: "AWARENESS",
                text: "Recognise what is changing and how it affects your goals."
            },

            {
                stage: "02",
                title: "LEARNING",
                text: "Develop a habit of learning unfamiliar concepts and tools."
            },

            {
                stage: "03",
                title: "FEEDBACK",
                text: "Use mistakes and feedback as information for improvement."
            },

            {
                stage: "04",
                title: "TRANSFER",
                text: "Apply existing skills to unfamiliar situations."
            },

            {
                stage: "05",
                title: "RESILIENCE",
                text: "Continue making progress when plans change."
            }

        ],

        advanced: {

            overview:
                "The advanced adaptability roadmap focuses on learning loops, uncertainty, feedback, transferable skills, new environments, and continuous improvement.",

            stages: [

                ["01", "AWARENESS", "Identify what is changing and distinguish controllable factors from uncontrollable ones."],

                ["02", "LEARNING", "Build systems for learning unfamiliar subjects, tools, and environments."],

                ["03", "EXPERIMENT", "Test new approaches on a small scale before committing heavily."],

                ["04", "FEEDBACK", "Use mistakes, results, and external feedback to adjust your approach."],

                ["05", "TRANSFER", "Apply existing knowledge to unfamiliar problems and contexts."],

                ["06", "CHANGE", "Practise working effectively when plans, tools, or expectations shift."],

                ["07", "CONTINUOUS GROWTH", "Maintain a cycle of learning, application, review, and adjustment."]
            ],

            checkpoints: [

                "Can you learn a completely unfamiliar tool independently?",

                "Can you change your approach when evidence shows it is not working?",

                "Can you identify which skills remain useful across different situations?"
            ]

        }

    }

};


/* =========================================
   PATHWAY DATA
========================================= */

const pathwayData = {


    after10th: {

        title: "AFTER 10TH",

        intro:
            "The stage after Class 10 is about understanding different academic and skill-based directions before choosing the next stage.",

        type: "choices",

        info: [

            [
                "WHAT CHANGES",
                "Your subject combination begins to shape which later courses and opportunities remain available."
            ],

            [
                "WHAT TO CONSIDER",
                "Look at interests, strengths, workload, future options, and the requirements of careers you may be considering."
            ],

            [
                "DO NOT RUSH",
                "A stream choice should be based on more than marks alone. Understand where the subjects can lead."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Understand your current strengths, interests, and academic position."
            },

            {
                stage: "02",
                title: "EXPLORE STREAMS",
                text: "Compare Science, Commerce, Humanities, and vocational or skill-based directions."
            },

            {
                stage: "03",
                title: "COMPARE SUBJECTS",
                text: "Understand the subjects and future routes associated with each direction."
            },

            {
                stage: "04",
                title: "CHOOSE",
                text: "Select a direction after considering both present fit and future options."
            },

            {
                stage: "05",
                title: "BUILD",
                text: "Use Classes 11 and 12 to build subject knowledge and transferable skills."
            }

        ],

        choices: [

            {
                route: "pathway/after10th/science",
                number: "01",
                title: "SCIENCE",
                text: "Explore science subjects and combinations."
            },

            {
                route: "pathway/after10th/commerce",
                number: "02",
                title: "COMMERCE",
                text: "Explore business, finance, economics, and related directions."
            },

            {
                route: "pathway/after10th/humanities",
                number: "03",
                title: "HUMANITIES",
                text: "Explore society, people, languages, history, and creative directions."
            },

            {
                route: "pathway/after10th/vocational",
                number: "04",
                title: "VOCATIONAL / SKILL-BASED",
                text: "Explore practical, technical, and skill-oriented pathways."
            }

        ],

        advanced: {

            overview:
                "A deeper post-Class-10 roadmap helps you compare streams, subject combinations, future eligibility, preparation requirements, and alternative routes before committing.",

            stages: [

                ["01", "SELF-ASSESSMENT", "Review interests, academic strengths, preferred learning styles, and areas you are willing to develop."],

                ["02", "STREAM RESEARCH", "Compare Science, Commerce, Humanities, and vocational directions."],

                ["03", "SUBJECT MAPPING", "Map subject choices against the courses and careers you may want later."],

                ["04", "REQUIREMENTS", "Check current eligibility and admission requirements for important future options."],

                ["05", "DECISION", "Choose a direction while keeping realistic alternative routes in view."],

                ["06", "11TH–12TH", "Build subject depth, skills, projects, and preparation relevant to your direction."],

                ["07", "NEXT STAGE", "Use your Class 12 position to move into higher education, training, or another planned route."]
            ],

            checkpoints: [

                "Do you understand what your selected subjects can lead to?",

                "Have you checked the current requirements for important future options?",

                "Do you have an alternative route if your first plan changes?"
            ]

        }

    },


    science: {

        title: "SCIENCE",

        intro:
            "Science after Class 10 can lead into several subject combinations. The right combination depends on the future courses and careers you want to keep open.",

        type: "choices",

        info: [

            [
                "CORE IDEA",
                "Science keeps several technical, scientific, medical, and interdisciplinary directions open."
            ],

            [
                "SUBJECT LOAD",
                "Science pathways generally require sustained work across concept-heavy subjects."
            ],

            [
                "CHOOSE WITH PURPOSE",
                "Understand the subjects required by your intended future courses before choosing a combination."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Identify the subjects and fields you are most interested in."
            },

            {
                stage: "02",
                title: "SCIENCE",
                text: "Choose a subject combination after understanding future requirements."
            },

            {
                stage: "03",
                title: "11TH–12TH",
                text: "Build strong conceptual foundations and study discipline."
            },

            {
                stage: "04",
                title: "PREPARATION",
                text: "Prepare for the admission routes relevant to your intended course."
            },

            {
                stage: "05",
                title: "HIGHER EDUCATION",
                text: "Move into a degree, professional course, research route, or another relevant pathway."
            }

        ],

        choices: [

            {
                route: "pathway/after10th/science/pcm",
                number: "01",
                title: "PCM",
                text: "Physics, Chemistry, Mathematics — commonly aligned with engineering, technology, mathematics, and related fields."
            },

            {
                route: "pathway/after10th/science/pcb",
                number: "02",
                title: "PCB",
                text: "Physics, Chemistry, Biology — commonly aligned with medicine, life sciences, and related fields."
            },

            {
                route: "pathway/after10th/science/pcmb",
                number: "03",
                title: "PCMB",
                text: "Physics, Chemistry, Mathematics, Biology — keeps both mathematics and biology directions open."
            }

        ],

        advanced: {

            overview:
                "A deeper Science roadmap connects subject selection with future course requirements, preparation, application routes, and alternative options.",

            stages: [

                ["01", "INTEREST MAP", "Identify whether your strongest interests lean toward mathematics, life sciences, technology, research, or interdisciplinary fields."],

                ["02", "COMBINATION", "Compare subject combinations against future courses you may want."],

                ["03", "FOUNDATION", "Build strong fundamentals in the chosen subjects during Classes 11 and 12."],

                ["04", "REQUIREMENTS", "Check the current official eligibility and entrance requirements for target courses."],

                ["05", "PREPARATION", "Build a preparation plan around the specific admission route you intend to use."],

                ["06", "APPLICATION", "Shortlist institutions and complete the relevant application process."],

                ["07", "SPECIALISATION", "Use higher education to develop deeper subject and practical expertise."]
            ],

            checkpoints: [

                "Do your chosen subjects match the courses you may want later?",

                "Have you checked current official eligibility requirements?",

                "Are you developing skills outside textbook preparation?"
            ]

        }

    },


    pcm: {

        title: "PCM",

        intro:
            "Physics, Chemistry, and Mathematics create a broad technical foundation. They can support multiple engineering, technology, mathematics, physical science, and interdisciplinary directions.",

        type: "detail",

        info: [

            [
                "SUBJECTS",
                "Physics, Chemistry, and Mathematics form the core academic combination."
            ],

            [
                "DIRECTION",
                "Common directions include engineering, computing, technology, mathematics, architecture-related study, physical sciences, and other technical fields."
            ],

            [
                "REQUIREMENTS",
                "Specific courses can have different subject, entrance, and eligibility requirements. Always check the current official requirements."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Build strong foundations in mathematics and science."
            },

            {
                stage: "02",
                title: "PCM",
                text: "Study Physics, Chemistry, and Mathematics in Classes 11 and 12."
            },

            {
                stage: "03",
                title: "PREPARATION",
                text: "Prepare for the admission route required by your target course."
            },

            {
                stage: "04",
                title: "DEGREE",
                text: "Enter a suitable technical, scientific, mathematical, or interdisciplinary degree."
            },

            {
                stage: "05",
                title: "SPECIALISATION",
                text: "Develop deeper expertise through subjects, projects, internships, and further study."
            },

            {
                stage: "06",
                title: "CAREER",
                text: "Move toward the professional, research, entrepreneurial, or technical direction you choose."
            }

        ],

        advanced: {

            overview:
                "The advanced PCM roadmap moves from Class 10 preparation through subject mastery, admission planning, degree selection, technical projects, and specialisation.",

            stages: [

                ["01", "CLASS 10 FOUNDATION", "Strengthen algebra, geometry, scientific reasoning, and disciplined problem solving."],

                ["02", "CLASS 11", "Build conceptual depth in Physics, Chemistry, and Mathematics rather than relying only on memorisation."],

                ["03", "CLASS 12", "Consolidate the syllabus while aligning preparation with the specific admission routes you are targeting."],

                ["04", "ENTRANCE / ADMISSION", "Check the current official eligibility, examination, and application requirements for each target course."],

                ["05", "DEGREE SELECTION", "Compare curriculum, specialisations, institution type, cost, location, opportunities, and long-term fit."],

                ["06", "PROJECTS + EXPERIENCE", "Build practical ability through projects, competitions, internships, research exposure, or technical work."],

                ["07", "SPECIALISATION", "Choose a deeper technical or scientific area and develop a portfolio around it."],

                ["08", "CAREER / FURTHER STUDY", "Evaluate employment, entrepreneurship, research, postgraduate study, or international opportunities."]
            ],

            checkpoints: [

                "Can you solve unfamiliar problems rather than only familiar question patterns?",

                "Have you checked the current official requirements of your target courses?",

                "Do you have practical work that demonstrates what you can build or investigate?"
            ]

        }

    },


    pcb: {

        title: "PCB",

        intro:
            "Physics, Chemistry, and Biology provide a foundation for medicine, life sciences, biological research, healthcare-related fields, and other biology-focused directions.",

        type: "detail",

        info: [

            [
                "SUBJECTS",
                "Physics, Chemistry, and Biology form the core academic combination."
            ],

            [
                "DIRECTION",
                "Potential directions include medicine, life sciences, biotechnology, biological research, healthcare, and related fields."
            ],

            [
                "REQUIREMENTS",
                "Different courses have different admission and eligibility rules. Check current official requirements before making decisions."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Build strong foundations in science and biological concepts."
            },

            {
                stage: "02",
                title: "PCB",
                text: "Study Physics, Chemistry, and Biology in Classes 11 and 12."
            },

            {
                stage: "03",
                title: "PREPARATION",
                text: "Prepare for the admission route relevant to your chosen field."
            },

            {
                stage: "04",
                title: "HIGHER EDUCATION",
                text: "Enter a medical, life-science, biological, or related higher-education pathway."
            },

            {
                stage: "05",
                title: "SPECIALISATION",
                text: "Develop deeper subject knowledge and practical experience."
            }

        ],

        advanced: {

            overview:
                "The advanced PCB roadmap connects Class 10 foundations with subject depth, admission requirements, practical exposure, higher education, and later specialisation.",

            stages: [

                ["01", "FOUNDATION", "Strengthen core science concepts and develop disciplined study habits."],

                ["02", "CLASS 11", "Build conceptual understanding across Physics, Chemistry, and Biology."],

                ["03", "CLASS 12", "Consolidate subject knowledge and align preparation with target courses."],

                ["04", "ADMISSION", "Check the current official eligibility and admission route for each target course."],

                ["05", "COURSE SELECTION", "Compare course structure, institution, cost, location, practical exposure, and future options."],

                ["06", "PRACTICAL EXPERIENCE", "Develop laboratory, research, communication, and documentation skills where appropriate."],

                ["07", "SPECIALISATION", "Explore focused areas within medicine, life sciences, healthcare, research, or related fields."],

                ["08", "NEXT STEP", "Evaluate professional work, postgraduate study, research, or international opportunities."]
            ],

            checkpoints: [

                "Are you comfortable with sustained science study?",

                "Have you checked the current official requirements for your intended course?",

                "Are you developing practical and communication skills alongside academics?"
            ]

        }

    },


    pcmb: {

        title: "PCMB",

        intro:
            "Physics, Chemistry, Mathematics, and Biology keep both mathematics-oriented and biology-oriented directions open, but the workload is broader.",

        type: "detail",

        info: [

            [
                "SUBJECTS",
                "Physics, Chemistry, Mathematics, and Biology."
            ],

            [
                "DIRECTION",
                "This combination can preserve options across mathematics, technology, life sciences, and other interdisciplinary directions."
            ],

            [
                "WORKLOAD",
                "Four major science subjects create a wider academic workload, so planning and consistency become particularly important."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Build strong foundations in mathematics and science."
            },

            {
                stage: "02",
                title: "PCMB",
                text: "Study Physics, Chemistry, Mathematics, and Biology."
            },

            {
                stage: "03",
                title: "BALANCE",
                text: "Manage the wider subject load with structured study and revision."
            },

            {
                stage: "04",
                title: "DIRECTION",
                text: "Gradually identify whether your future direction is more mathematics, technology, biology, healthcare, or interdisciplinary."
            },

            {
                stage: "05",
                title: "HIGHER EDUCATION",
                text: "Move into the course and admission route that matches your final direction."
            }

        ],

        advanced: {

            overview:
                "The advanced PCMB roadmap focuses on maintaining breadth without losing depth, then narrowing your direction as future course requirements become clearer.",

            stages: [

                ["01", "FOUNDATION", "Build reliable fundamentals across mathematics and science before the workload expands."],

                ["02", "PCMB", "Develop consistent study systems across all four subjects."],

                ["03", "BALANCE", "Track time, weak areas, revision cycles, and subject-specific preparation."],

                ["04", "DIRECTION", "Compare mathematics-oriented and biology-oriented future courses."],

                ["05", "REQUIREMENTS", "Check the current official eligibility and admission requirements for each route."],

                ["06", "NARROW", "Reduce the number of competing directions as your interests and strengths become clearer."],

                ["07", "PREPARE", "Focus preparation on the admission route and subjects required by your selected pathway."],

                ["08", "SPECIALISE", "Use higher education to develop depth in your final field."]
            ],

            checkpoints: [

                "Can you maintain depth while studying four major subjects?",

                "Which future routes genuinely require the additional subject breadth?",

                "Have you started narrowing your options before the final application stage?"
            ]

        }

    },


    commerce: {

        title: "COMMERCE",

        intro:
            "Commerce can lead toward business, finance, economics, accounting, management, entrepreneurship, and several interdisciplinary directions.",

        type: "detail",

        info: [

            [
                "CORE AREAS",
                "Common areas include accounting, economics, business studies, mathematics, finance, and management."
            ],

            [
                "DIRECTION",
                "Future routes can include finance, business, economics, management, entrepreneurship, analytics, and related fields."
            ],

            [
                "SKILLS",
                "Numeracy, communication, analysis, digital literacy, and decision-making can all become valuable."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Understand your interest in business, economics, numbers, or organisations."
            },

            {
                stage: "02",
                title: "COMMERCE",
                text: "Build a foundation in commerce-related subjects."
            },

            {
                stage: "03",
                title: "EXPLORE",
                text: "Compare finance, accounting, economics, management, entrepreneurship, and related fields."
            },

            {
                stage: "04",
                title: "HIGHER EDUCATION",
                text: "Choose an appropriate degree or professional route."
            },

            {
                stage: "05",
                title: "EXPERIENCE",
                text: "Develop practical experience through projects, internships, competitions, or business work."
            }

        ],

        advanced: {

            overview:
                "The advanced Commerce roadmap develops subject foundations while gradually connecting them to business, finance, economics, analytics, management, and professional pathways.",

            stages: [

                ["01", "FOUNDATION", "Build strong understanding of accounting, economics, business concepts, and quantitative reasoning."],

                ["02", "SKILL BUILDING", "Develop communication, spreadsheets, data awareness, and digital productivity."],

                ["03", "FIELD EXPLORATION", "Compare finance, accounting, economics, management, entrepreneurship, and analytics."],

                ["04", "COURSE RESEARCH", "Compare degree and professional pathways and check their current requirements."],

                ["05", "HIGHER EDUCATION", "Enter a course aligned with your selected direction."],

                ["06", "EXPERIENCE", "Build projects, internships, competitions, or entrepreneurial work."],

                ["07", "SPECIALISATION", "Develop deeper expertise in the area you select."],

                ["08", "CAREER", "Evaluate employment, entrepreneurship, professional qualifications, or further study."]
            ],

            checkpoints: [

                "Can you explain why your chosen field interests you?",

                "Have you compared academic and professional routes?",

                "Do you have practical evidence of your business or analytical skills?"
            ]

        }

    },


    humanities: {

        title: "HUMANITIES",

        intro:
            "Humanities brings together subjects that explore people, society, history, culture, politics, language, communication, and ideas.",

        type: "detail",

        info: [

            [
                "CORE AREAS",
                "Depending on the school and combination, subjects may include history, political science, geography, psychology, sociology, economics, languages, and more."
            ],

            [
                "DIRECTION",
                "Possible directions include law, social sciences, psychology, media, design-related fields, public policy, education, research, and many others."
            ],

            [
                "SKILLS",
                "Writing, research, communication, critical thinking, analysis, and interpretation are particularly valuable."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "10TH",
                text: "Identify subjects and questions that genuinely interest you."
            },

            {
                stage: "02",
                title: "HUMANITIES",
                text: "Build depth across selected humanities and social-science subjects."
            },

            {
                stage: "03",
                title: "RESEARCH",
                text: "Develop reading, writing, analysis, and evidence-based reasoning."
            },

            {
                stage: "04",
                title: "DIRECTION",
                text: "Explore law, social sciences, media, psychology, policy, education, and related areas."
            },

            {
                stage: "05",
                title: "HIGHER EDUCATION",
                text: "Choose a degree or professional route aligned with your direction."
            }

        ],

        advanced: {

            overview:
                "The advanced Humanities roadmap combines subject depth with research, writing, communication, portfolio development, and careful exploration of future academic and professional routes.",

            stages: [

                ["01", "SUBJECT FOUNDATION", "Develop strong understanding of your selected subjects rather than relying only on memorisation."],

                ["02", "READING", "Build a habit of reading beyond textbooks and comparing perspectives."],

                ["03", "WRITING", "Develop structured essays, reports, arguments, and research-based writing."],

                ["04", "EXPLORATION", "Investigate fields such as law, psychology, media, social sciences, policy, education, and related areas."],

                ["05", "REQUIREMENTS", "Check current admission and eligibility requirements for target courses."],

                ["06", "PORTFOLIO", "Build writing, research, creative, debate, project, or community work where relevant."],

                ["07", "HIGHER EDUCATION", "Choose the degree or professional route that matches your direction."],

                ["08", "SPECIALISATION", "Develop deeper knowledge through projects, internships, research, or further study."]
            ],

            checkpoints: [

                "Can you support your arguments with evidence?",

                "Have you explored more than one possible field?",

                "Do you have work that demonstrates your ability to research and communicate?"
            ]

        }

    },


    vocational: {

        title: "VOCATIONAL / SKILL-BASED",

        intro:
            "Skill-based pathways can provide practical preparation for specific occupations, technical areas, and applied fields.",

        type: "detail",

        info: [

            [
                "FOCUS",
                "The emphasis is generally on practical knowledge and occupational skills."
            ],

            [
                "DIRECTION",
                "Possible areas vary widely and can include technical, service, creative, digital, and applied occupations."
            ],

            [
                "IMPORTANT",
                "Specific qualifications and progression routes depend on the field and programme."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "INTEREST",
                text: "Identify the type of practical work you enjoy."
            },

            {
                stage: "02",
                title: "SKILL",
                text: "Choose a relevant training or vocational pathway."
            },

            {
                stage: "03",
                title: "PRACTICE",
                text: "Build practical competence through repeated application."
            },

            {
                stage: "04",
                title: "QUALIFICATION",
                text: "Complete the relevant programme or certification."
            },

            {
                stage: "05",
                title: "EXPERIENCE",
                text: "Develop workplace experience and continue building skills."
            }

        ],

        advanced: {

            overview:
                "The advanced skill-based roadmap connects interests to a specific occupation, training route, qualification, practical experience, and future progression.",

            stages: [

                ["01", "FIELD", "Identify the type of practical work and environment that interests you."],

                ["02", "OCCUPATION", "Research the actual tasks, working conditions, and skill requirements of the occupation."],

                ["03", "TRAINING", "Compare available training, vocational, or certification routes."],

                ["04", "PRACTICE", "Build practical competence through repeated hands-on work."],

                ["05", "QUALIFICATION", "Complete the qualification or certification appropriate to the field."],

                ["06", "EXPERIENCE", "Gain supervised, workplace, project, or portfolio experience."],

                ["07", "PROGRESSION", "Identify opportunities for advanced qualifications, specialisation, or career progression."]
            ],

            checkpoints: [

                "Have you researched the actual work involved?",

                "Does the training route provide recognised progression?",

                "Can you demonstrate practical competence?"
            ]

        }

    },


    after12th: {

        title: "AFTER 12TH",

        intro:
            "After Class 12, the focus shifts from broad stream selection toward choosing a specific course, qualification, institution, or professional direction.",

        type: "detail",

        info: [

            [
                "COURSE",
                "Identify the type of degree, professional qualification, training, or programme that matches your direction."
            ],

            [
                "ELIGIBILITY",
                "Different institutions and courses can have different subject and admission requirements."
            ],

            [
                "COMPARISON",
                "Compare curriculum, institution, cost, location, opportunities, and progression."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "12TH",
                text: "Understand your academic position and interests."
            },

            {
                stage: "02",
                title: "DIRECTION",
                text: "Choose a field or group of related fields to investigate."
            },

            {
                stage: "03",
                title: "COURSES",
                text: "Shortlist relevant degrees, professional courses, and alternatives."
            },

            {
                stage: "04",
                title: "ELIGIBILITY",
                text: "Check current official requirements and admission routes."
            },

            {
                stage: "05",
                title: "APPLY",
                text: "Complete applications, entrance processes, or other relevant admission steps."
            },

            {
                stage: "06",
                title: "BUILD",
                text: "Use higher education to develop knowledge, skills, projects, and experience."
            }

        ],

        advanced: {

            overview:
                "The advanced post-Class-12 roadmap helps connect your interests to specific courses, eligibility requirements, institutions, applications, and longer-term development.",

            stages: [

                ["01", "DIRECTION", "Define one or more fields you are seriously considering."],

                ["02", "COURSE MAP", "Identify the degrees, professional qualifications, and alternative routes available."],

                ["03", "ELIGIBILITY", "Check current official subject, entrance, and eligibility requirements."],

                ["04", "INSTITUTIONS", "Compare institutions using curriculum, cost, location, facilities, opportunities, and other relevant factors."],

                ["05", "APPLICATION", "Track deadlines, forms, entrance processes, documents, and decisions."],

                ["06", "TRANSITION", "Prepare for the move into higher education, training, or employment."],

                ["07", "EXPERIENCE", "Build projects, internships, research, competitions, or other relevant experience."],

                ["08", "NEXT DECISION", "Review progress and choose future specialisation, employment, or further study."]
            ],

            checkpoints: [

                "Have you compared multiple realistic routes?",

                "Have you verified requirements directly from official sources?",

                "Do you understand what the course leads toward after graduation?"
            ]

        }

    },


    global: {

        title: "GLOBAL OPTIONS",

        intro:
            "International pathways require planning across courses, countries, institutions, eligibility, finances, applications, and practical transition requirements.",

        type: "detail",

        info: [

            [
                "COURSE + COUNTRY",
                "The right destination depends on the course, academic goals, budget, and preferred environment."
            ],

            [
                "REQUIREMENTS",
                "Admission, language, financial, immigration, and document requirements vary by destination and institution."
            ],

            [
                "RESEARCH",
                "Use current official university, government, and immigration sources before making application decisions."
            ]

        ],

        roadmap: [

            {
                stage: "01",
                title: "GOAL",
                text: "Define the course, field, and type of educational experience you want."
            },

            {
                stage: "02",
                title: "COUNTRY",
                text: "Compare countries and education systems relevant to your goal."
            },

            {
                stage: "03",
                title: "REQUIREMENTS",
                text: "Check academic, language, application, financial, and immigration requirements."
            },

            {
                stage: "04",
                title: "SHORTLIST",
                text: "Build a realistic list of institutions and programmes."
            },

            {
                stage: "05",
                title: "APPLICATION",
                text: "Prepare documents and complete the relevant application processes."
            },

            {
                stage: "06",
                title: "TRANSITION",
                text: "Prepare for enrolment, travel, accommodation, finances, and the new environment."
            }

        ],

        advanced: {

            overview:
                "The advanced global roadmap treats international study as a multi-stage project: academic planning, destination research, eligibility, financial planning, applications, immigration, and transition.",

            stages: [

                ["01", "DEFINE GOAL", "Choose the field, qualification level, and type of institution you are looking for."],

                ["02", "DESTINATION", "Compare countries based on education system, course availability, cost, environment, and long-term plans."],

                ["03", "ELIGIBILITY", "Check current academic, language, testing, document, and programme requirements."],

                ["04", "FINANCIAL PLAN", "Estimate tuition, living costs, travel, insurance, and other expenses and investigate available funding options."],

                ["05", "SHORTLIST", "Build a balanced list of realistic, ambitious, and alternative options."],

                ["06", "APPLICATION", "Prepare documents, references, statements, portfolios, tests, and applications where required."],

                ["07", "IMMIGRATION", "Check the current official immigration or visa requirements for the destination."],

                ["08", "TRANSITION", "Prepare accommodation, travel, finances, enrolment, and adjustment to the new environment."]
            ],

            checkpoints: [

                "Have you verified every major requirement from an official source?",

                "Can you realistically fund the full period of study?",

                "Do you have alternative institutions or routes?"
            ]

        }

    }

};


/* =========================================
   TEXT ANIMATION
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

        const wrapTextNodes = node => {

            if (node.nodeType === Node.TEXT_NODE) {

                const text = node.nodeValue;

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


                        for (
                            let i = 0;
                            i < part.length;
                            i++
                        ) {

                            const charSpan =
                                document.createElement("span");

                            charSpan.className =
                                "char";

                            charSpan.textContent =
                                part[i];

                            charSpan.style.animationDelay =
                                `${globalCharIndex * 0.018}s`;

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
                ).forEach(wrapTextNodes);

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

        card.style.opacity = "0";
        card.style.transform =
            "translateY(25px)";


        setTimeout(() => {

            card.style.transition =
                "opacity 0.45s ease, transform 0.45s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, 120 * index + 200);

    });

}


/* =========================================
   MAIN SLIDE NAVIGATION
========================================= */

function updateSlideCounter() {

    if (!slideCounter) return;

    const number =
        String(currentSlide + 1)
        .padStart(2, "0");

    const total =
        String(slides.length)
        .padStart(2, "0");

    slideCounter.textContent =
        `${number} / ${total}`;

}


function updateNavButtons() {

    navButtons.forEach(
        (button, index) => {

            button.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );

}


function goToSlide(index, clearRoute = true) {

    if (
        index < 0 ||
        index >= slides.length
    ) {
        return;
    }


    /* Close exploration if necessary */

    closeExploration(false);


    slides.forEach(slide => {
        slide.classList.remove("active");
    });


    currentSlide = index;


    slides[currentSlide]
        .classList.add("active");


    updateNavButtons();

    updateSlideCounter();

    animateSlideText(
        slides[currentSlide]
    );

    triggerSkillCards(
        slides[currentSlide]
    );


    if (mobileMenu) {
        mobileMenu.classList.remove("open");
    }


    /*
       IMPORTANT:
       We remove the hash without
       causing a page reload.
    */

    if (
        clearRoute &&
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
   ROUTE HELPERS
========================================= */

function openRoute(route) {

    if (!route) return;

    window.location.hash =
        route;

}


function getRouteParts() {

    const hash =
        window.location.hash
            .replace(/^#/, "")
            .trim();

    if (!hash) {
        return [];
    }

    return hash.split("/");
}


/* =========================================
   EXPLORATION OPEN / CLOSE
========================================= */

function openExploration() {

    document.body.classList.add(
        "exploration-open"
    );

    explorationScreen.classList.add(
        "active"
    );

    explorationScreen.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeExploration(
    clearHash = true
) {

    if (generationTimer) {

        clearInterval(
            generationTimer
        );

        generationTimer = null;

    }


    generationOverlay.classList.remove(
        "active"
    );

    generationOverlay.setAttribute(
        "aria-hidden",
        "true"
    );


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


    currentExplorationRoute = null;
    currentExplorationData = null;


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

}


/* =========================================
   FIND PATHWAY
========================================= */

function findPathwayData(parts) {

    if (!parts.length) {
        return null;
    }


    let data =
        pathwayData[parts[0]];


    if (!data) {
        return null;
    }


    /*
       after10th/science
       after10th/science/pcm
    */

    if (parts.length > 1) {

        const child =
            parts[1];


        if (
            parts[0] === "after10th" &&
            child === "science"
        ) {

            data =
                pathwayData.science;

        } else if (
            parts[0] === "after10th" &&
            child === "commerce"
        ) {

            data =
                pathwayData.commerce;

        } else if (
            parts[0] === "after10th" &&
            child === "humanities"
        ) {

            data =
                pathwayData.humanities;

        } else if (
            parts[0] === "after10th" &&
            child === "vocational"
        ) {

            data =
                pathwayData.vocational;

        } else {

            return null;

        }


        /*
           Science combinations
        */

        if (
            parts[0] === "after10th" &&
            child === "science" &&
            parts.length > 2
        ) {

            const combination =
                parts[2];


            if (
                combination === "pcm"
            ) {

                data =
                    pathwayData.pcm;

            } else if (
                combination === "pcb"
            ) {

                data =
                    pathwayData.pcb;

            } else if (
                combination === "pcmb"
            ) {

                data =
                    pathwayData.pcmb;

            } else {

                return null;

            }

        }

    }


    return data;

}


/* =========================================
   BUILD CHOICE CARDS
========================================= */

function buildChoiceCards(
    choices
) {

    if (
        !choices ||
        choices.length === 0
    ) {

        return "";

    }


    return `

        <div class="exploration-section-title">
            CHOOSE YOUR DIRECTION
        </div>

        <div class="choice-grid">

            ${choices.map(
                (choice, index) => `

                <button
                    class="exploration-choice reveal-up"
                    data-route="${choice.route}"
                    style="animation-delay:${index * 0.08}s">

                    <span class="exploration-choice-number">
                        ${choice.number}
                    </span>

                    <h3>
                        ${choice.title}
                    </h3>

                    <p>
                        ${choice.text}
                    </p>

                    <span class="exploration-choice-arrow">
                        →
                    </span>

                </button>

            `).join("")}

        </div>

    `;

}


/* =========================================
   BUILD INFO CARDS
========================================= */

function buildInfoCards(
    info
) {

    if (
        !info ||
        info.length === 0
    ) {

        return "";

    }


    return `

        <div class="exploration-info-grid">

            ${info.map(
                (item, index) => `

                <div
                    class="info-card reveal-up"
                    style="animation-delay:${index * 0.08}s">

                    <div class="info-card-label">
                        ${item[0]}
                    </div>

                    <p>
                        ${item[1]}
                    </p>

                </div>

            `).join("")}

        </div>

    `;

}


/* =========================================
   BUILD SIMPLE ROADMAP
========================================= */

function buildRoadmap(
    roadmap
) {

    if (
        !roadmap ||
        roadmap.length === 0
    ) {

        return "";

    }


    return `

        <div class="roadmap-section">

            <div class="roadmap-title">
                ROADMAP
            </div>

            <div class="roadmap">

                ${roadmap.map(
                    (item, index) => `

                    <div
                        class="roadmap-item reveal-up"
                        style="animation-delay:${index * 0.07}s">

                        <div>
                            <div class="roadmap-node"></div>
                        </div>

                        <div class="roadmap-stage">
                            ${item.stage}
                        </div>

                        <div>

                            <h4>
                                ${item.title}
                            </h4>

                            <p>
                                ${item.text}
                            </p>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

}


/* =========================================
   BUILD ADVANCED CTA
========================================= */

function buildAdvancedCTA() {

    return `

        <div class="advanced-roadmap-box">

            <div class="advanced-roadmap-kicker">
                DEEPER GUIDANCE
            </div>

            <h3>
                NEED MORE THAN THE OVERVIEW?
            </h3>

            <p>
                Some directions require more depth.
                Kayra can build a more detailed roadmap
                with preparation stages, checkpoints,
                skill requirements, and practical next steps.
            </p>

            <button
                class="advanced-button"
                id="generateAdvancedButton">

                GENERATE ADVANCED ROADMAP

                <span>
                    →
                </span>

            </button>

        </div>

    `;

}


/* =========================================
   RENDER SKILL
========================================= */

function renderSkill(
    skillId
) {

    const data =
        skillData[skillId];


    if (!data) {

        return false;

    }


    currentExplorationData =
        data;

    currentExplorationRoute =
        `skill/${skillId}`;


    explorationView.innerHTML = `

        <div class="exploration-route-label">
            KAYRA / SKILLS
        </div>

        <h1 class="exploration-heading">
            ${data.title}
        </h1>

        <p class="exploration-intro">
            ${data.intro}
        </p>


        <div class="exploration-info-grid">

            <div class="info-card reveal-up">

                <div class="info-card-label">
                    WHAT IT IS
                </div>

                <p>
                    ${data.what}
                </p>

            </div>


            <div class="info-card reveal-up"
                style="animation-delay:.08s">

                <div class="info-card-label">
                    WHY IT MATTERS
                </div>

                <p>
                    ${data.why}
                </p>

            </div>


            <div class="info-card reveal-up"
                style="animation-delay:.16s">

                <div class="info-card-label">
                    STARTING POINT
                </div>

                <p>
                    ${data.start}
                </p>

            </div>

        </div>


        ${buildRoadmap(
            data.roadmap
        )}

        ${buildAdvancedCTA()}

    `;


    openExploration();

    return true;

}


/* =========================================
   RENDER PATHWAY
========================================= */

function renderPathway(
    parts
) {

    const data =
        findPathwayData(parts);


    if (!data) {

        return false;

    }


    currentExplorationData =
        data;


    currentExplorationRoute =
        `pathway/${parts.join("/")}`;


    let extraHTML = "";


    if (data.choices) {

        extraHTML +=
            buildChoiceCards(
                data.choices
            );

    }


    if (data.roadmap) {

        extraHTML +=
            buildRoadmap(
                data.roadmap
            );

    }


    if (data.advanced) {

        extraHTML +=
            buildAdvancedCTA();

    }


    explorationView.innerHTML = `

        <div class="exploration-route-label">
            KAYRA / PATHWAYS
        </div>

        <h1 class="exploration-heading">
            ${data.title}
        </h1>

        <p class="exploration-intro">
            ${data.intro}
        </p>

        ${buildInfoCards(
            data.info
        )}

        ${extraHTML}

    `;


    openExploration();

    return true;

}


/* =========================================
   HANDLE ROUTES
========================================= */

function handleRoute() {

    const parts =
        getRouteParts();


    /*
       No hash = normal presentation
    */

    if (parts.length === 0) {

        closeExploration(false);

        goToSlide(
            currentSlide,
            false
        );

        return;

    }


    let success = false;


    /*
       SKILL ROUTE
       #skill/communication
    */

    if (
        parts[0] === "skill" &&
        parts[1]
    ) {

        success =
            renderSkill(
                parts[1]
            );

    }


    /*
       PATHWAY ROUTE
    */

    else if (
        parts[0] === "pathway"
    ) {

        success =
            renderPathway(
                parts.slice(1)
            );

    }


    /*
       Invalid route
    */

    if (!success) {

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

    }

}


/* =========================================
   GENERATE ADVANCED ROADMAP
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

    generationRing.style
        .setProperty(
            "--progress",
            "0%"
        );

    generationPercent.textContent =
        "00%";


    const statusSteps = [

        {
            progress: 0,
            text: "Reading your direction..."
        },

        {
            progress: 20,
            text: "Mapping key stages..."
        },

        {
            progress: 40,
            text: "Analysing preparation points..."
        },

        {
            progress: 60,
            text: "Building checkpoints..."
        },

        {
            progress: 80,
            text: "Structuring next steps..."
        },

        {
            progress: 95,
            text: "Finalising your roadmap..."
        }

    ];


    let progress = 0;


    generationTimer =
        setInterval(() => {

            progress += 2;


            if (progress > 100) {
                progress = 100;
            }


            generationBarFill.style.width =
                `${progress}%`;


            generationRing.style
                .setProperty(
                    "--progress",
                    `${progress}%`
                );


            generationPercent.textContent =
                `${String(progress).padStart(2, "0")}%`;


            let currentStatus =
                statusSteps[0].text;


            statusSteps.forEach(
                step => {

                    if (
                        progress >=
                        step.progress
                    ) {

                        currentStatus =
                            step.text;

                    }

                }
            );


            generationStatus.textContent =
                currentStatus;


            if (progress >= 100) {

                clearInterval(
                    generationTimer
                );

                generationTimer =
                    null;


                generationStatus.textContent =
                    "Advanced roadmap ready.";


                setTimeout(() => {

                    generationOverlay.classList.remove(
                        "active"
                    );

                    generationOverlay.setAttribute(
                        "aria-hidden",
                        "true"
                    );


                    renderAdvancedRoadmap(
                        currentExplorationData
                    );

                }, 500);

            }

        }, 55);

}


/* =========================================
   RENDER ADVANCED ROADMAP
========================================= */

function renderAdvancedRoadmap(
    data
) {

    const advanced =
        data.advanced;


    if (!advanced) {
        return;
    }


    explorationView.innerHTML = `

        <div class="advanced-page-header">

            <div>

                <div class="advanced-page-label">
                    KAYRA / ADVANCED ROADMAP
                </div>

                <h2>
                    ${data.title}
                    <br>
                    <span>IN DEPTH.</span>
                </h2>

            </div>


            <p class="advanced-overview">
                ${advanced.overview}
            </p>

        </div>


        <div class="advanced-stages">

            ${advanced.stages.map(
                (stage, index) => `

                <article
                    class="advanced-stage reveal-up"
                    style="animation-delay:${index * 0.06}s">

                    <div class="advanced-stage-number">
                        STAGE ${stage[0]}
                    </div>

                    <h3>
                        ${stage[1]}
                    </h3>

                    <p>
                        ${stage[2]}
                    </p>

                </article>

            `).join("")}

        </div>


        <div class="checkpoint-section">

            <h3>
                CHECKPOINTS
            </h3>

            <div class="checkpoint-grid">

                ${advanced.checkpoints.map(
                    (checkpoint, index) => `

                    <div
                        class="checkpoint reveal-up"
                        style="animation-delay:${index * 0.08}s">

                        <span>
                            0${index + 1}
                        </span>

                        <p>
                            ${checkpoint}
                        </p>

                    </div>

                `).join("")}

            </div>

        </div>


        <button
            class="back-roadmap-button"
            id="backToRoadmap">

            ← BACK TO ROADMAP

        </button>

    `;

}


/* =========================================
   EVENT DELEGATION
   THIS FIXES THE EXPLORATION BUTTONS
========================================= */

document.addEventListener(
    "click",
    event => {


        /*
           Any button with data-route
        */

        const routeButton =
            event.target.closest(
                "[data-route]"
            );


        if (routeButton) {

            event.preventDefault();

            const route =
                routeButton.dataset.route;


            if (route) {

                openRoute(route);

            }

            return;

        }


        /*
           Advanced roadmap button
        */

        const advancedButton =
            event.target.closest(
                "#generateAdvancedButton"
            );


        if (advancedButton) {

            event.preventDefault();

            generateAdvancedRoadmap();

            return;

        }


        /*
           Back to simple roadmap
        */

        const backRoadmap =
            event.target.closest(
                "#backToRoadmap"
            );


        if (backRoadmap) {

            event.preventDefault();

            if (currentExplorationRoute) {

                /*
                   Re-render the exact
                   route we came from.
                */

                const parts =
                    currentExplorationRoute
                        .split("/");


                if (
                    parts[0] === "skill"
                ) {

                    renderSkill(
                        parts[1]
                    );

                } else if (
                    parts[0] === "pathway"
                ) {

                    renderPathway(
                        parts.slice(1)
                    );

                }

            }

            return;

        }

    }
);


/* =========================================
   MAIN NAVIGATION BUTTONS
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

                if (!Number.isNaN(index)) {

                    goToSlide(index);

                }

            }
        );

    }
);


mobileNavButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        button.dataset.slide
                    );

                if (!Number.isNaN(index)) {

                    goToSlide(index);

                }

            }
        );

    }
);


/* =========================================
   HERO / NORMAL SLIDE BUTTONS
========================================= */

document.querySelectorAll(
    "[data-slide-target]"
).forEach(
    button => {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const target =
                    Number(
                        button.dataset.slideTarget
                    );


                if (
                    !Number.isNaN(target)
                ) {

                    goToSlide(target);

                }

            }
        );

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

            /*
               For now START EXPLORING
               takes the user to PATHWAYS.

               You can change this later
               without touching the exploration
               system.
            */

            goToSlide(3);

        }
    );

}


/* =========================================
   PREVIOUS / NEXT
========================================= */

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

            } else {

                goToSlide(0);

            }

        }
    );

}


if (previousButton) {

    previousButton.addEventListener(
        "click",
        () => {

            if (currentSlide > 0) {

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
   EXPLORATION BACK BUTTON
========================================= */

if (explorationBack) {

    explorationBack.addEventListener(
        "click",
        () => {


            if (!currentExplorationRoute) {

                goToSlide(3);

                return;

            }


            const parts =
                currentExplorationRoute
                    .split("/");


            /*
               Skill -> Skills slide
            */

            if (
                parts[0] === "skill"
            ) {

                goToSlide(2);

                return;

            }


            /*
               After 10th -> Pathways
            */

            if (
                parts[0] === "pathway" &&
                parts.length === 1
            ) {

                goToSlide(3);

                return;

            }


            /*
               after10th -> parent
            */

            if (
                parts[0] === "pathway" &&
                parts.length === 2
            ) {

                openRoute(
                    "pathway/after10th"
                );

                return;

            }


            /*
               after10th/science/pcm
               -> after10th/science
            */

            if (
                parts.length === 3
            ) {

                openRoute(
                    parts
                        .slice(0, 2)
                        .join("/")
                );

                return;

            }


            /*
               Fallback
            */

            goToSlide(3);

        }
    );

}


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
    event => {


        /*
           NEVER move slides while
           an exploration page is open.
        */

        if (
            document.body.classList.contains(
                "exploration-open"
            )
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

            if (currentSlide > 0) {

                goToSlide(
                    currentSlide - 1
                );

            }

        }

    }
);


/* =========================================
   HASH CHANGE
========================================= */

window.addEventListener(
    "hashchange",
    () => {

        handleRoute();

    }
);


/* =========================================
   INITIALISE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        prepareTextAnimation();

        handleRoute();

    }
);
