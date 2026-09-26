/* =========================================
   KAYRA
   SLIDE + ROADMAP + STREAM SELECTOR LOGIC
========================================= */

const slides = Array.from(document.querySelectorAll(".slide"));
const navButtons = document.querySelectorAll(".nav-links button");
const mobileNavButtons = document.querySelectorAll(".mobile-nav-link");
const previousButton = document.getElementById("previousSlide");
const nextButton = document.getElementById("nextSlide");
const slideCounter = document.getElementById("slideCounter");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const slideControls = document.getElementById("slideControls");

const roadmapOverlay = document.getElementById("roadmapOverlay");
const closeRoadmapButton = document.getElementById("closeRoadmap");

const streamSelectorOverlay = document.getElementById("streamSelectorOverlay");
const closeStreamSelectorButton = document.getElementById("closeStreamSelector");
const streamsGrid = document.getElementById("streamsGrid");

let currentSlide = 0;
let isRoadmapOpen = false;
let isStreamSelectorOpen = false;
let currentPathwayCategory = null;

/* =========================================
   STREAMS DEFINITION DATA
========================================= */

const pathwayStreams = {
    "after-10th": {
        num: "03 / PATHWAYS / 01",
        title: "AFTER 10TH",
        subtitle: "Select a stream to explore detailed subjects, competitive exams, long-term careers, and premier institutions.",
        streams: [
            {
                key: "after-10th-mpc",
                name: "MPC (MATHS, PHYSICS, CHEMISTRY)",
                desc: "Focus on Engineering, Architecture, Data Science, Physical Sciences, and Technology."
            },
            {
                key: "after-10th-bipc",
                name: "BiPC (BIOLOGY, PHYSICS, CHEMISTRY)",
                desc: "Focus on Medicine, Biotechnology, Genetics, Pharmacy, and Allied Health Sciences."
            },
            {
                key: "after-10th-cec",
                name: "CEC (COMMERCE, ECONOMICS, CIVICS)",
                desc: "Focus on Business Administration, Law, Public Policy, Corporate Finance, and Economics."
            },
            {
                key: "after-10th-mec",
                name: "MEC (MATHS, ECONOMICS, COMMERCE)",
                desc: "Focus on Actuarial Science, Financial Engineering, Chartered Accountancy, and Analytics."
            },
            {
                key: "after-10th-humanities",
                name: "HUMANITIES & ARTS",
                desc: "Focus on Psychology, Journalism, International Relations, Literature, and Media Studies."
            }
        ]
    },
    "after-12th": {
        num: "03 / PATHWAYS / 02",
        title: "AFTER 12TH",
        subtitle: "Select your undergraduate interest to view comprehensive entrance pathways, degree specializations, and top universities.",
        streams: [
            {
                key: "after-12th-engineering",
                name: "ENGINEERING & TECHNOLOGY",
                desc: "Computer Science, AI, Robotics, Aerospace, Mechanical, and Electrical Engineering degree tracks."
            },
            {
                key: "after-12th-medical",
                name: "MEDICAL & LIFE SCIENCES",
                desc: "MBBS, BDS, Biotechnology, Neuroscience, Biomedical Engineering, and Clinical Research."
            },
            {
                key: "after-12th-business",
                name: "BUSINESS & COMMERCE",
                desc: "BBA, Integrated IPM, B.Com (Hons), Finance, Marketing, and Entrepreneurship programs."
            },
            {
                key: "after-12th-law",
                name: "LAW & PUBLIC POLICY",
                desc: "5-Year Integrated BA/BB.A LLB, Corporate Law, International Law, and Governance."
            },
            {
                key: "after-12th-design",
                name: "DESIGN, MEDIA & ARCHITECTURE",
                desc: "B.Des (UI/UX, Industrial Design), B.Arch, Journalism, Film Production, and Communication Design."
            }
        ]
    },
    "global-options": {
        num: "03 / PATHWAYS / 03",
        title: "GLOBAL OPTIONS",
        subtitle: "Explore international university pathways, standardized test requirements, funding strategies, and world-class universities.",
        streams: [
            {
                key: "global-stem",
                name: "GLOBAL STEM TRACKS",
                desc: "US, UK, and European university admissions for Computer Science, Engineering, and Pure Sciences."
            },
            {
                key: "global-business",
                name: "GLOBAL BUSINESS & ECONOMICS",
                desc: "Premier international business schools, undergraduate finance degrees, and management tracks."
            },
            {
                key: "global-arts",
                name: "GLOBAL HUMANITIES & LIBERAL ARTS",
                desc: "Top liberal arts colleges in the US and UK for Politics, Philosophy, Economics (PPE), and Creative Arts."
            }
        ]
    }
};

/* =========================================
   DETAILED ROADMAP & INSTITUTION DATA
========================================= */

const overlayData = {
    // SKILLS DATA
    "communication": {
        num: "02 / SKILLS / 01",
        title: "COMMUNICATION",
        subtitle: "Master articulate speech, active listening, structural narrative, and audience resonance.",
        
        s1Title: "FOUNDATIONAL EXPRESSION & STRUCTURAL CLARITY",
        s1Desc: "Understand core message structuring, non-verbal cues, tone awareness, and active listening dynamics.",
        s1Points: [
            "Deconstruct non-verbal signals, vocal cadence, pitch modulation, and posture.",
            "Learn Barbara Minto's Pyramid Principle to structure thoughts top-down.",
            "Practice reflective listening to process viewpoints thoroughly before formulating answers.",
            "Maintain a daily articulation journal to eliminate verbal filler."
        ],
        s1Kayra: "Diagnostic articulation assessments, voice recording teardowns, and baseline feedback loops.",

        s2Title: "STRUCTURED WRITING & PUBLIC SPEAKING",
        s2Desc: "Transform raw ideas into compelling speeches, executive summaries, essays, and presentations.",
        s2Points: [
            "Draft high-impact 60-second elevator pitches and structured opinion briefs.",
            "Eliminate speech clutter (filler words, passive voice, rambling phrases).",
            "Deliver impromptu speeches under tight constraints (Toastmasters format).",
            "Master visual presentation design and storyboarding."
        ],
        s2Kayra: "Safe-space peer feedback circles, video speech analysis labs, and public speaking challenges.",

        s3Title: "PERSUASION & NEGOTIATION DYNAMICS",
        s3Desc: "Navigate complex discussions, resolve disputes, and align divergent viewpoints under pressure.",
        s3Points: [
            "Map stakeholder incentives and adapt language to diverse audience archetypes.",
            "Master core negotiation frameworks: BATNA, empathetic pushback, and principled compromise.",
            "De-escalate high-pressure debates using calm, evidence-backed logic.",
            "Learn cross-cultural communication nuances and ethical persuasion."
        ],
        s3Kayra: "Simulated Model UN / debate arenas, live negotiation labs, and guided conflict resolution.",

        s4Title: "INSPIRATIONAL LEADERSHIP STORYTELLING",
        s4Desc: "Inspire communities, articulate vision, and command presence in high-stakes environments.",
        s4Points: [
            "Craft authentic personal leadership narratives that resonate emotionally.",
            "Host podcasts, lead town halls, or represent major projects on external stages.",
            "Mentor junior peers in developing their own distinct voice and confidence.",
            "Deliver keynote presentations to large, diverse audiences."
        ],
        s4Kayra: "Keynote presentation opportunities, public showcase platforms, and 1-on-1 executive coaching.",

        institutions: [
            {
                name: "Toastmasters International",
                location: "Global / Worldwide",
                desc: "Premier international educational organization that teaches public speaking and leadership skills.",
                img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Harvard Kennedy School",
                location: "Cambridge, MA, USA",
                desc: "Renowned for executive leadership, public rhetoric, and persuasive policy communication.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "London School of Economics (LSE)",
                location: "London, United Kingdom",
                desc: "World leader in public debate, political rhetoric, and global social influence.",
                img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "creativity": {
        num: "02 / SKILLS / 02",
        title: "CREATIVITY",
        subtitle: "Unlock original thinking, break cognitive patterns, and convert concepts into tangible realities.",

        s1Title: "CURIOSITY & DIVERGENT THINKING",
        s1Desc: "Break routine mental shortcuts and develop acute observational and questioning habits.",
        s1Points: [
            "Challenge implicit assumptions using First Principles reasoning.",
            "Maintain daily idea journals capturing observations across art, science, and nature.",
            "Practice lateral thinking drills to connect completely unrelated domains.",
            "Deconstruct iconic innovations to understand their creative origin stories."
        ],
        s1Kayra: "Daily brain-teaser prompts, cross-domain reading lists, and concept-mapping toolkits.",

        s2Title: "IDEATION & RAPID PROTOTYPING",
        s2Desc: "Iterate swiftly on ideas and build low-fidelity conceptual models to test hypotheses.",
        s2Points: [
            "Apply Design Thinking frameworks (Empathize, Define, Ideate, Prototype, Test).",
            "Build quick wireframes, storyboards, physical mockups, or mind maps.",
            "Gather immediate peer feedback to refine early hypotheses without fear of failure.",
            "Conduct SCAMPER (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse) exercises."
        ],
        s2Kayra: "Collaborative 48-hour design sprints and multi-disciplinary creative sandboxes.",

        s3Title: "INTERDISCIPLINARY FUSION",
        s3Desc: "Merge artistic expression, scientific rigor, human psychology, and technical design.",
        s3Points: [
            "Analyze world-class innovations across product design, software, literature, and fine arts.",
            "Synthesize mechanisms from nature (biomimicry) into real-world utility.",
            "Refine aesthetic intuition alongside functional and practical necessity.",
            "Experiment with emerging creative AI tools as creative co-pilots."
        ],
        s3Kayra: "Cross-domain workshops bridging art, technology, architecture, and social impact.",

        s4Title: "PORTFOLIO CREATION & REAL-WORLD LAUNCH",
        s4Desc: "Execute original vision into published works, physical products, or original ventures.",
        s4Points: [
            "Curate a professional portfolio highlighting design and thought processes.",
            "Launch creative campaigns, open-source projects, books, or design systems.",
            "Establish a distinctive personal style and recognized creative voice.",
            "Exhibit creative work at regional or national design showcases."
        ],
        s4Kayra: "KAYRA Creative Incubator, student art & product showcases, and exhibition grants.",

        institutions: [
            {
                name: "RISD (Rhode Island School of Design)",
                location: "Providence, RI, USA",
                desc: "One of the world's most prestigious and historic art and design institutions.",
                img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Stanford d.school (Hasso Plattner Institute)",
                location: "Stanford, CA, USA",
                desc: "Pioneer in Design Thinking, human-centered innovation, and creative leadership.",
                img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Royal College of Art (RCA)",
                location: "London, United Kingdom",
                desc: "World's #1 postgraduate university for art and design innovation.",
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "problem-solving": {
        num: "02 / SKILLS / 03",
        title: "PROBLEM SOLVING",
        subtitle: "Deconstruct complex challenges into manageable variables and craft resilient, high-impact solutions.",

        s1Title: "ROOT CAUSE ANALYSIS & DIAGNOSTICS",
        s1Desc: "Distinguish surface symptoms from true underlying structural problems through systematic inquiry.",
        s1Points: [
            "Apply the '5 Whys' and MECE (Mutually Exclusive, Collectively Exhaustive) frameworks.",
            "Gather quantitative and qualitative data without confirmation bias.",
            "Map intricate problem trees to pinpoint exact structural bottlenecks.",
            "Conduct stakeholder interviews to understand human factors in technical issues."
        ],
        s1Kayra: "Interactive analytical case studies and structured problem-breakdown toolkits.",

        s2Title: "STRATEGIC OPTION GENERATION",
        s2Desc: "Formulate multiple viable solution pathways before committing time and capital.",
        s2Points: [
            "Conduct impact-versus-effort matrix evaluations.",
            "Perform stress testing on proposed solutions against worst-case edge cases.",
            "Draft decision matrices comparing financial, operational, and ethical trade-offs.",
            "Formulate plan-B and scenario-contingency blueprints."
        ],
        s2Kayra: "Guided scenario analysis exercises and real-world business strategy simulations.",

        s3Title: "EXECUTION & TACTICAL ADAPTATION",
        s3Desc: "Translate strategy into phased, measurable implementation plans.",
        s3Points: [
            "Define concrete KPIs, target milestones, and risk mitigation strategies.",
            "Execute small-scale pilot tests to gather real-world empirical data.",
            "Pivot swiftly when empirical feedback contradicts initial assumptions.",
            "Manage resource allocation and project timelines."
        ],
        s3Kayra: "Project incubators that tackle real campus, community, or business challenges.",

        s4Title: "SYSTEMS THINKING & SCALABILITY",
        s4Desc: "Design long-term operational systems that prevent problems from recurring.",
        s4Points: [
            "Identify second- and third-order consequences within complex ecosystems.",
            "Automate repetitive workflows and build sustainable operating frameworks.",
            "Document clear operational playbooks so solutions scale seamlessly.",
            "Conduct post-mortem reviews to continually refine organizational processes."
        ],
        s4Kayra: "Mentorship from industry problem solvers, policy strategists, and system design labs.",

        institutions: [
            {
                name: "MIT (Massachusetts Institute of Technology)",
                location: "Cambridge, MA, USA",
                desc: "Global epicenter for engineering problem solving, systems analysis, and technology.",
                img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "McKinsey & Company Academy",
                location: "Global",
                desc: "Gold standard in structured strategic problem solving and MECE framework applications.",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "ETH Zurich",
                location: "Zurich, Switzerland",
                desc: "World leading institution for mathematical, scientific, and technical problem solving.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "leadership": {
        num: "02 / SKILLS / 04",
        title: "LEADERSHIP",
        subtitle: "Guide teams with empathy, strategic vision, ethical grounding, and decisive clarity.",

        s1Title: "SELF-MASTERY & ETHICAL FOUNDATION",
        s1Desc: "Establish core personal values, self-awareness, emotional regulation, and personal integrity.",
        s1Points: [
            "Identify personal biases, emotional triggers, and core driving values.",
            "Demonstrate radical accountability for personal mistakes and team outcomes.",
            "Align daily actions with long-term ethical standards and transparency.",
            "Develop personal resilience and stress recovery protocols."
        ],
        s1Kayra: "Leadership self-assessment diagnostics, goal setting, and reflection logs.",

        s2Title: "TEAM DYNAMICS & EMPATHETIC MANAGEMENT",
        s2Desc: "Build psychological safety, delegate effectively, and motivate diverse individuals.",
        s2Points: [
            "Understand individual strength profiles (CliftonStrengths, MBTI context).",
            "Practice active delegation while offering clear support structures.",
            "Give actionable, empathetic feedback that inspires growth rather than defense.",
            "Foster inclusive group discussions where every voice is heard."
        ],
        s2Kayra: "Simulated group project leadership roles and team dynamics workshops.",

        s3Title: "STRATEGIC ALIGNMENT & CONFLICT RESOLUTION",
        s3Desc: "Unify teams around a compelling shared vision and navigate interpersonal tension.",
        s3Points: [
            "Translate high-level vision into clear team objectives and key results (OKRs).",
            "Resolve internal team friction swiftly using non-violent communication.",
            "Maintain composure and clear decision-making during high-stress crises.",
            "Conduct effective team alignment check-ins and performance reviews."
        ],
        s3Kayra: "Real-time leadership roles in KAYRA's student initiatives and team challenges.",

        s4Title: "CULTURE BUILDING & TRANSFORMATIONAL VISION",
        s4Desc: "Build enduring organizational cultures and empower the next generation of leaders.",
        s4Points: [
            "Establish norms of excellence, inclusivity, and continuous learning.",
            "Identify and cultivate leadership potential in peers and juniors.",
            "Drive meaningful institutional or societal impact beyond short-term goals.",
            "Build sustainable governance structures that endure past your tenure."
        ],
        s4Kayra: "Direct placement in KAYRA executive steering positions and alumni leadership networks.",

        institutions: [
            {
                name: "INSEAD",
                location: "Fontainebleau, France / Singapore",
                desc: "The Business School for the World, renowned for global leadership and cultural diversity.",
                img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "US Military Academy (West Point)",
                location: "West Point, NY, USA",
                desc: "World famous institution for character development and high-stakes leadership.",
                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Stanford Graduate School of Business",
                location: "Stanford, CA, USA",
                desc: "Pioneer in transformative leadership, organizational behavior, and venture creation.",
                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "adaptability": {
        num: "02 / SKILLS / 05",
        title: "ADAPTABILITY",
        subtitle: "Navigate ambiguity, bounce back from setbacks, and continuously evolve in volatile environments.",

        s1Title: "GROWTH MINDSET & RESILIENCE",
        s1Desc: "Reframe failure as informative data and cultivate cognitive flexibility and emotional grit.",
        s1Points: [
            "Recognize fixed-mindset triggers and actively reframe negative feedback.",
            "Build personal stress management routines to maintain equilibrium under duress.",
            "Conduct objective post-mortem analysis on failures without self-judgment.",
            "Develop mental agility techniques to reframe unexpected disruptions."
        ],
        s1Kayra: "Mindset coaching exercises, resilience reflection logs, and stress-response guides.",

        s2Title: "RAPID UNLEARNING & RE-LEARNING",
        s2Desc: "Discard outdated knowledge quickly when new tools, methods, or paradigms emerge.",
        s2Points: [
            "Develop accelerated learning frameworks (Feynman Technique, deliberate practice).",
            "Identify shift signals in tech, academic, and economic landscapes early.",
            "Step comfortably into completely unfamiliar domains outside your comfort zone.",
            "Build rapid research skills to master new topics in days."
        ],
        s2Kayra: "Cross-disciplinary micro-courses designed for rapid skill acquisition.",

        s3Title: "THRIVING IN AMBIGUITY",
        s3Desc: "Make high-quality decisions with incomplete or rapidly changing information.",
        s3Points: [
            "Formulate probabilistic thinking models under uncertain conditions.",
            "Maintain progress even when explicit instructions or roadmaps are absent.",
            "Pivot project scope smoothly without losing momentum or team morale.",
            "Manage personal anxiety associated with unknown outcomes."
        ],
        s3Kayra: "Dynamic, changing-parameter simulations that test tactical flexibility under pressure.",

        s4Title: "AGILE TRANSFORMATION LEADERSHIP",
        s4Desc: "Help teams and organizations navigate disruptive change effortlessly.",
        s4Points: [
            "Guide peers through organizational changes with clear, comforting communication.",
            "Build resilient systems designed to absorb sudden external shocks.",
            "Proactively drive innovation before legacy methods become obsolete.",
            "Champion continuous improvement methodologies (Kaizen, Agile) in team environments."
        ],
        s4Kayra: "Crisis management simulations and advisory roles in dynamic student ventures.",

        institutions: [
            {
                name: "Singularity University",
                location: "Silicon Valley, CA, USA",
                desc: "Focused on exponential technologies and adapting to rapid future disruption.",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Oxford Said Business School",
                location: "Oxford, United Kingdom",
                desc: "Leader in scenario planning, future studies, and systemic change management.",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Minerva University",
                location: "San Francisco, CA (Global)",
                desc: "Innovative global university designed around cognitive adaptability and cross-cultural immersion.",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "technical-literacy": {
        num: "02 / SKILLS / 06",
        title: "TECHNICAL LITERACY",
        subtitle: "Harness modern computational tools, data systems, digital workflows, and emerging technologies.",

        s1Title: "DIGITAL FOUNDATIONS & ALGORITHMIC THINKING",
        s1Desc: "Grasp how digital systems operate, process data, and execute logic under the hood.",
        s1Points: [
            "Understand computational thinking (Decomposition, Pattern Recognition, Abstraction, Algorithms).",
            "Master cloud architecture, digital security hygiene, and data privacy principles.",
            "Analyze data structures and fundamental programming logic.",
            "Learn basic web technology stacks (HTML, CSS, HTTP protocols)."
        ],
        s1Kayra: "Curated tech fundamentals, interactive tool guides, and computer science logic maps.",

        s2Title: "HANDS-ON DEVELOPMENT & TOOL MASTERY",
        s2Desc: "Build functional software or automation tools using code, low-code platforms, and modern APIs.",
        s2Points: [
            "Write modular code (Python, JavaScript) to automate tasks or manipulate data.",
            "Utilize developer environments, version control (Git/GitHub), and API integrations.",
            "Leverage databases (SQL, NoSQL) to store and retrieve structured information.",
            "Build responsive user interfaces and interactive dashboards."
        ],
        s2Kayra: "Guided coding bootcamps, tech project sandboxes, and developer code-review sessions.",

        s3Title: "AI INTEGRATION & AUTOMATION WORKFLOWS",
        s3Desc: "Leverage AI models responsibly and automate complex multi-step workflows.",
        s3Points: [
            "Master prompt engineering, contextual framing, and AI-assisted software generation.",
            "Build automated scripts connecting cloud apps (Zapier, Python scripts, webhooks).",
            "Evaluate technological solutions critically regarding bias, ethics, and security.",
            "Analyze large datasets using AI tools and statistical software."
        ],
        s3Kayra: "Advanced AI workflow labs, prompt engineering masterclasses, and tech stack builders.",

        s4Title: "FULL-STACK PRODUCT CREATION",
        s4Desc: "Architect, deploy, and maintain end-to-end digital products or technology platforms.",
        s4Points: [
            "Deploy live web/mobile applications with backend servers and cloud databases.",
            "Maintain technical documentation and open-source software repositories.",
            "Stay ahead of frontier technologies (AI Agents, Cloud Computing, Cybersecurity).",
            "Lead technical teams and manage software development life cycles."
        ],
        s4Kayra: "Full-stack project incubators, tech hackathons, and direct product architecture mentorship.",

        institutions: [
            {
                name: "Carnegie Mellon University (CMU)",
                location: "Pittsburgh, PA, USA",
                desc: "Global leader in Computer Science, Artificial Intelligence, and Software Engineering.",
                img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "IIT Bombay (Indian Institute of Technology)",
                location: "Mumbai, India",
                desc: "India's premier engineering and technology institution with immense global alumni impact.",
                img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "UC Berkeley (EECS)",
                location: "Berkeley, CA, USA",
                desc: "Powerhouse in Electrical Engineering, Computer Science, and Silicon Valley tech creation.",
                img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    // PATHWAY SPECIFIC DETAILED ROADMAPS
    "after-10th-mpc": {
        num: "03 / PATHWAYS / AFTER 10TH",
        title: "MPC (MATHS, PHYSICS, CHEMISTRY)",
        subtitle: "The ultimate track for Engineering, Pure Sciences, Architecture, Technology, and Quantitative fields.",
        s1Title: "CORE CONCEPTUAL FOUNDATION (CLASS 11)",
        s1Desc: "Master fundamental concepts in Calculus, Mechanics, and Physical/Organic Chemistry.",
        s1Points: [
            "Build strong mathematical rigor in Trigonometry, Coordinate Geometry, and Differential Calculus.",
            "Understand core Physics concepts: Kinematics, Dynamics, Rotational Motion, and Thermodynamics.",
            "Focus on Atomic Structure, Chemical Bonding, and Periodic Trends in Chemistry."
        ],
        s1Kayra: "Concept clarity roadmaps, weekly problem-solving trackers, and conceptual mental maps.",

        s2Title: "COMPETITIVE EXAM PREPARATION (JEE / SAT / BITSAT)",
        s2Desc: "Build speed, accuracy, and test-taking stamina for national and international entrance exams.",
        s2Points: [
            "Solve previous 10 years JEE Main & Advanced question banks systematically.",
            "Take weekly timed mock tests and conduct rigorous error analysis.",
            "Prepare for state-level exams (EAMCET, KCET) and university-specific tests (BITSAT, VITEEE)."
        ],
        s2Kayra: "Exam analysis tools, time-management frameworks, and formula memory guides.",

        s3Title: "EXTRACURRICULAR & TECHNICAL EXPOSURE",
        s3Desc: "Apply classroom theory to real-world STEM projects, olympiads, and research.",
        s3Points: [
            "Participate in Science Olympiads (NSEP, NSEC, NSEM) and Robotics competitions.",
            "Learn foundational programming languages (Python or C++) to solve numerical problems.",
            "Build physics or electronics projects using Arduino / Raspberry Pi boards."
        ],
        s3Kayra: "STEM project ideas, olympiad guidebooks, and coding bootcamps for high schoolers.",

        s4Title: "COLLEGE SELECTION & COUNSELING",
        s4Desc: "Navigate engineering branch choices, college preferences, and application procedures.",
        s4Points: [
            "Research core vs emerging engineering disciplines (Computer Science, AI, Robotics, Aerospace).",
            "Evaluate top institutes (IITs, NITs, IIITs, BITS, Top State Universities).",
            "Prepare contingency college applications and safety options."
        ],
        s4Kayra: "1-on-1 college decision matrices and engineering branch fitment assessments.",

        institutions: [
            {
                name: "IIT Madras (Indian Institute of Technology)",
                location: "Chennai, Tamil Nadu, India",
                desc: "Ranked #1 Engineering Institute in India, famous for research and innovation.",
                img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "BITS Pilani",
                location: "Pilani, Rajasthan, India",
                desc: "Top-tier private institute with world-class faculty, zero attendance rule, and strong entrepreneurship culture.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "IIIT Hyderabad",
                location: "Hyderabad, Telangana, India",
                desc: "India's premier institute for Computer Science, AI, Coding Culture, and Research.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-10th-bipc": {
        num: "03 / PATHWAYS / AFTER 10TH",
        title: "BiPC (BIOLOGY, PHYSICS, CHEMISTRY)",
        subtitle: "The gateway to Medicine, Healthcare, Biotechnology, Pharmacy, Genetics, and Life Sciences.",
        s1Title: "NCERT MASTERY & CONCEPT BUILDING",
        s1Desc: "Achieve line-by-line mastery of Biology alongside conceptual Physics and Chemistry.",
        s1Points: [
            "Memorize and comprehend NCERT Biology textbooks (Botany and Zoology) thoroughly.",
            "Master Chemistry concepts: Organic Mechanisms, Biomolecules, and Electrochemistry.",
            "Build problem-solving confidence in Physics topics like Optics, Electromagnetism, and Modern Physics."
        ],
        s1Kayra: "BiPC revision schedules, NCERT mind-maps, and active recall flashcards.",

        s2Title: "NEET & COMPETITIVE STRATEGY",
        s2Desc: "Develop high accuracy, speed, and mental stamina for medical entrance exams.",
        s2Points: [
            "Practice 180-question timed mock tests under strict NEET exam conditions.",
            "Maintain an error log specifically tracking tricky Physics numericals and Chemistry reactions.",
            "Explore non-NEET options like CUET for BSc Biotechnology, Microbiology, and Genetics."
        ],
        s2Kayra: "NEET test-taking analytics, speed enhancement strategies, and performance trackers.",

        s3Title: "RESEARCH & PRACTICAL LAB EXPOSURE",
        s3Desc: "Gain exposure to biological research, medical volunteer work, and scientific writing.",
        s3Points: [
            "Volunteer at local community health clinics, blood banks, or awareness drives.",
            "Participate in science exhibitions and Biology Olympiads (NSEB).",
            "Read introductory journals in genetics, immunology, and bio-engineering."
        ],
        s3Kayra: "Healthcare volunteering guidebooks and high-school research project frameworks.",

        s4Title: "MEDICAL & ALLIED HEALTHCARE COUNSELING",
        s4Desc: "Plan undergraduate seats across MBBS, BDS, Pharmacy, Vet Science, and Biotech.",
        s4Points: [
            "Understand All-India Quota (AIQ) and State Quota medical counseling procedures.",
            "Explore alternate high-growth fields like Biomedical Engineering, Clinical Research, and Genetics.",
            "Finalize university preferences (AIIMS, JIPMER, Top State Medical Colleges)."
        ],
        s4Kayra: "Medical seat selection guide and career trajectory maps for healthcare fields.",

        institutions: [
            {
                name: "AIIMS New Delhi",
                location: "New Delhi, India",
                desc: "The undisputed apex medical institution in India for clinical training and medical research.",
                img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "CMC Vellore (Christian Medical College)",
                location: "Vellore, Tamil Nadu, India",
                desc: "World-renowned healthcare institute known for excellence in medical education and service.",
                img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "JIPMER",
                location: "Puducherry, India",
                desc: "Premier autonomous medical institute offering state-of-the-art medical education and hospital care.",
                img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-10th-cec": {
        num: "03 / PATHWAYS / AFTER 10TH",
        title: "CEC (COMMERCE, ECONOMICS, CIVICS)",
        subtitle: "The primary foundation for Business, Management, Law, Corporate Governance, and Public Policy.",
        s1Title: "FINANCIAL & ECONOMIC FUNDAMENTALS",
        s1Desc: "Understand double-entry bookkeeping, micro/macro economics, and civic structures.",
        s1Points: [
            "Master Accountancy basics: Journal entries, Ledger posting, and Financial Statements.",
            "Analyze economic principles: Demand & Supply, National Income, and Monetary Policy.",
            "Study constitutional frameworks, judicial systems, and political theory in Civics."
        ],
        s1Kayra: "Financial literacy toolkits, economics concept guides, and civic case studies.",

        s2Title: "ENTRANCE PREPARATION (CLAT / IPMAT / CUET)",
        s2Desc: "Prepare early for competitive management and legal entrance examinations.",
        s2Points: [
            "Build speed and accuracy for Legal Reasoning, Logical Reasoning, and English Comprehension (CLAT).",
            "Prepare for Quantitative Aptitude and Verbal Ability for 5-Year Integrated MBA tests (IPMAT).",
            "Cover CUET syllabus for top central university commerce seats (B.Com / BBA)."
        ],
        s2Kayra: "Mock exam schedules, reading comprehension builders, and IPMAT/CLAT prep maps.",

        s3Title: "PRACTICAL BUSINESS & CIVIC PROJECTS",
        s3Desc: "Apply classroom commerce to stock markets, mini-ventures, and social impact projects.",
        s3Points: [
            "Participate in virtual stock market trading competitions and financial simulation games.",
            "Start a school entrepreneurship club or launch a non-profit civic initiative.",
            "Intern with local law firms, NGOs, or corporate accounting offices during breaks."
        ],
        s3Kayra: "High school business incubators and youth leadership project frameworks.",

        s4Title: "DEGREE & CAREER SELECTION",
        s4Desc: "Choose between B.Com (Hons), Integrated BBA-MBA, BA LLB, and Professional Accounting.",
        s4Points: [
            "Evaluate professional course combinations: CA Foundation, CS, or CMA.",
            "Target top Law Universities (NLUs) or premier Management Institutes (IIM Indore/Ranchi).",
            "Finalize 3-year vs 5-year degree pathways based on career ambition."
        ],
        s4Kayra: "1-on-1 career path comparison matrix and university selection counseling.",

        institutions: [
            {
                name: "NLSIU Bangalore (National Law School)",
                location: "Bengaluru, Karnataka, India",
                desc: "India's #1 Law School, world-renowned for legal research, corporate law, and advocacy.",
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "IIM Indore (IPM Program)",
                location: "Indore, Madhya Pradesh, India",
                desc: "Pioneer of the 5-Year Integrated Programme in Management directly after Class 12.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "SRCC (Shri Ram College of Commerce)",
                location: "New Delhi, India",
                desc: "India's legendary college for Commerce, Finance, Economics, and Business studies.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-10th-mec": {
        num: "03 / PATHWAYS / AFTER 10TH",
        title: "MEC (MATHS, ECONOMICS, COMMERCE)",
        subtitle: "The quantitative business stream for Actuarial Science, Data Analytics, Finance, and Economics.",
        s1Title: "QUANTITATIVE & FINANCIAL MASTERY",
        s1Desc: "Combine high-level mathematics with commercial and economic theory.",
        s1Points: [
            "Master Class 11 & 12 Higher Mathematics: Calculus, Statistics, Probability, and Matrices.",
            "Build deep proficiency in Financial Accounting and Business Studies.",
            "Understand econometric models, game theory, and market structures."
        ],
        s1Kayra: "Math-for-Finance workbooks, statistics cheat-sheets, and economic theory guides.",

        s2Title: "COMPETITIVE PREPARATION & CERTIFICATIONS",
        s2Desc: "Prepare for top quantitative undergraduate entrances and early professional certifications.",
        s2Points: [
            "Prepare for IPMAT, CUET (Maths + General Test), and university specific tests (NPAT, SET).",
            "Explore early professional papers: Actuarial Science (ACET) or CA Foundation.",
            "Master advanced Excel, financial modeling concepts, and basic data visualization."
        ],
        s2Kayra: "Actuarial roadmap, quantitative test banks, and data analytics starter guides.",

        s3Title: "DATA & FINANCIAL ANALYTICS PROJECTS",
        s3Desc: "Apply mathematical models to real-world economic and business data.",
        s3Points: [
            "Analyze real stock market trends using Python/Excel and write research summaries.",
            "Participate in national Economics Olympiads and case study competitions.",
            "Build financial valuation models for popular tech startups as practice."
        ],
        s3Kayra: "Case study frameworks, finance project ideas, and business simulation games.",

        s4Title: "UNDERGRADUATE & CAREER ARCHITECTURE",
        s4Desc: "Select optimal degrees like B.Sc Economics, B.Com (Analytics), BFIA, or Actuarial Tracks.",
        s4Points: [
            "Identify top economics and finance colleges (Delhi University, St. Xavier's, Christ University).",
            "Map long-term career trajectories: Investment Banking, Actuarial Science, Quantitative Finance.",
            "Set concrete targets for global credentials like CFA, FRM, or CPA."
        ],
        s4Kayra: "Career trajectory maps for quantitative finance and university application strategies.",

        institutions: [
            {
                name: "St. Xavier's College",
                location: "Mumbai, Maharashtra, India",
                desc: "Iconic institution offering premier undergraduate degrees in Economics, Management, and Commerce.",
                img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Shaheed Sukhdev College of Business Studies (SSCBS)",
                location: "New Delhi, India",
                desc: "Premier Delhi University college famous for BMS and B.Sc Finance & Financial Investment Analysis (BFIA).",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Christ University",
                location: "Bengaluru, Karnataka, India",
                desc: "Renowned for rigorous BBA, Finance, and Analytics programs with exceptional campus placements.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-10th-humanities": {
        num: "03 / PATHWAYS / AFTER 10TH",
        title: "HUMANITIES & ARTS",
        subtitle: "The ideal stream for Psychology, Journalism, International Relations, Literature, Civil Services, and Design.",
        s1Title: "CRITICAL THINKING & INTERDISCIPLINARY READINGS",
        s1Desc: "Explore human behavior, history, political systems, literature, and sociological frameworks.",
        s1Points: [
            "Read foundational texts across World History, Political Philosophy, and Social Psychology.",
            "Develop structured essay-writing skills and critical discourse analysis.",
            "Understand research methodologies, qualitative analysis, and ethical reasoning."
        ],
        s1Kayra: "Humanities reading lists, essay-writing frameworks, and analytical toolkits.",

        s2Title: "PROFILE BUILDING & ENTRANCE PREPARATION",
        s2Desc: "Prepare for top humanities entrance tests and build a compelling personal portfolio.",
        s2Points: [
            "Prepare for CUET (Arts & Humanities papers), NIFT/NID (for design aspirants), or TISS BAT.",
            "Publish articles, analytical essays, or creative literature in student journals.",
            "Engage actively in Model United Nations (MUN), debating societies, and drama clubs."
        ],
        s2Kayra: "CUET prep guides, writing portfolio builders, and MUN strategy toolkits.",

        s3Title: "REAL-WORLD CREATIVE & SOCIAL IMPACT",
        s3Desc: "Gain hands-on experience in journalism, podcasting, community action, and design.",
        s3Points: [
            "Launch a student podcast or newsletter covering global affairs or mental health.",
            "Intern with media houses, publishing firms, research think-tanks, or local NGOs.",
            "Conduct independent social research surveys on local community challenges."
        ],
        s3Kayra: "Media project guides, community action frameworks, and podcast production blueprints.",

        s4Title: "DEGREE & CAREER ROADMAP",
        s4Desc: "Map undergraduate degrees in Psychology, Liberal Arts, Journalism, IR, or Civil Services.",
        s4Points: [
            "Explore multidisciplinary Liberal Arts universities (Ashoka, Flame, Krea, DU).",
            "Plan early foundation strategies for Civil Services (UPSC) or International Diplomatic careers.",
            "Identify global career paths in Corporate Communications, Policy Research, and UX Research."
        ],
        s4Kayra: "1-on-1 humanities career trajectory mapping and liberal arts application strategies.",

        institutions: [
            {
                name: "Ashoka University",
                location: "Sonipat, Haryana, India",
                desc: "Pioneer in Liberal Arts and Sciences education in India, offering world-class research and faculty.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Lady Shri Ram College (LSR)",
                location: "New Delhi, India",
                desc: "Premier women's institution famous for Psychology, Journalism, Political Science, and English.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Tata Institute of Social Sciences (TISS)",
                location: "Mumbai, Maharashtra, India",
                desc: "India's apex institute for Social Sciences, Social Work, Public Policy, and Human Resources.",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-12th-engineering": {
        num: "03 / PATHWAYS / AFTER 12TH",
        title: "ENGINEERING & TECHNOLOGY",
        subtitle: "Navigate B.Tech/B.E. specialization choices, coding bootcamps, technical research, and campus placements.",
        s1Title: "FIRST-YEAR FUNDAMENTALS & CODING MASTERY",
        s1Desc: "Build rock-solid technical fundamentals in programming, mathematics, and engineering core.",
        s1Points: [
            "Master Data Structures & Algorithms (DSA) in C++, Python, or Java.",
            "Build strong foundations in Engineering Mathematics, Linear Algebra, and Discrete Math.",
            "Get comfortable with Version Control (Git/GitHub), Linux OS, and Command Line tools."
        ],
        s1Kayra: "DSA roadmap, GitHub portfolio starter kit, and open-source contribution guide.",

        s2Title: "SPECIALIZATION & PROJECT BUILDING",
        s2Desc: "Dive deep into specialized domains like Web Dev, AI/ML, Cloud Computing, or Hardware Design.",
        s2Points: [
            "Build 3-4 full-stack applications, machine learning models, or embedded system prototypes.",
            "Participate in hackathons (Smart India Hackathon, MLH) and open-source programs (GSoC).",
            "Collaborate with professors on technical research papers or patent filings."
        ],
        s2Kayra: "Hackathon strategy guide, project ideas repository, and research paper templates.",

        s3Title: "INTERNSHIPS & TECHNICAL INTERVIEWS",
        s3Desc: "Prepare for competitive technical interviews, coding rounds, and system design.",
        s3Points: [
            "Solve 200+ LeetCode problems covering arrays, trees, graphs, and dynamic programming.",
            "Master System Design fundamentals (APIs, databases, caching, load balancing).",
            "Secure summer tech internships at product companies, research labs, or high-growth startups."
        ],
        s3Kayra: "Coding interview cheat-sheets, mock interview platforms, and tech resume builders.",

        s4Title: "CAREER LAUNCH & HIGHER STUDIES",
        s4Desc: "Choose between campus placement, global MS degrees, GATE exam, or founding a startup.",
        s4Points: [
            "Prepare for campus placement drives or off-campus tech applications.",
            "Prepare for GRE/TOEFL for MS in Computer Science abroad or GATE for IIT M.Tech.",
            "Build a startup MVP and apply to incubators if venturing into entrepreneurship."
        ],
        s4Kayra: "MS application guides, GATE prep toolkits, and startup incubator connections.",

        institutions: [
            {
                name: "IIT Bombay",
                location: "Mumbai, Maharashtra, India",
                desc: "Premier engineering technology institution with top-ranked Computer Science and engineering faculties.",
                img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Stanford University (School of Engineering)",
                location: "Stanford, CA, USA",
                desc: "Heart of Silicon Valley innovation, producing global tech leaders and landmark technology ventures.",
                img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "National University of Singapore (NUS Engineering)",
                location: "Singapore",
                desc: "Asia's top university for engineering, cutting-edge AI research, and global tech partnerships.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-12th-medical": {
        num: "03 / PATHWAYS / AFTER 12TH",
        title: "MEDICAL & LIFE SCIENCES",
        subtitle: "Navigate MBBS curriculum, clinical rotations, USMLE/NEXT exams, and medical specialization.",
        s1Title: "PRE-CLINICAL MASTERY (YEARS 1 & 2)",
        s1Desc: "Master foundational human biological sciences: Anatomy, Physiology, and Biochemistry.",
        s1Points: [
            "Master human dissection, cadaveric anatomy, and histological structures.",
            "Understand physiological mechanisms, organ systems, and metabolic pathways.",
            "Build systematic study routines using active recall and Anki flashcards."
        ],
        s1Kayra: "Medical flashcard routines, Anki setup guides, and pre-clinical study maps.",

        s2Title: "PARA-CLINICAL & CLINICAL ROTATIONS (YEARS 3 & 4)",
        s2Desc: "Gain hands-on clinical exposure in hospitals and study Pathology, Pharmacology, and Microbiology.",
        s2Points: [
            "Participate actively in hospital ward rounds, history-taking, and patient examinations.",
            "Understand disease mechanisms, drug interactions, and diagnostic lab procedures.",
            "Prepare systematically for licensing exams (NEXT / USMLE Step 1)."
        ],
        s2Kayra: "Clinical rotation survival guides, USMLE prep roadmaps, and medical case logs.",

        s3Title: "INTERNSHIP & SPECIALIZATION TRACKS",
        s3Desc: "Complete compulsory rotatory internship and choose your specialty field.",
        s3Points: [
            "Complete clinical duties across Emergency, General Surgery, Pediatrics, and OB-GYN.",
            "Prepare for NEET-PG / INI-CET for MD/MS residency seats in India.",
            "Complete clinical electives abroad if targeting US Residency (MATCH process)."
        ],
        s3Kayra: "Residency selection counseling, medical research mentorship, and MATCH prep.",

        s4Title: "ADVANCED PRACTICE & MEDICAL LEADERSHIP",
        s4Desc: "Establish clinical practice, medical research, hospital administration, or biotech ventures.",
        s4Points: [
            "Pursue super-specialization (DM / MCh) or fellowships in advanced surgical/medical fields.",
            "Publish clinical trial research or join healthcare technology startups.",
            "Establish private practice or hold senior medical consultancy positions."
        ],
        s4Kayra: "Healthcare leadership networks, medical startup guidance, and career mentorship.",

        institutions: [
            {
                name: "AIIMS New Delhi",
                location: "New Delhi, India",
                desc: "India's top medical college and hospital for undergraduate medical education and residency.",
                img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Harvard Medical School",
                location: "Boston, MA, USA",
                desc: "World's leading center for medical education, clinical research, and biomedical innovation.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Johns Hopkins University School of Medicine",
                location: "Baltimore, MD, USA",
                desc: "Pioneer in modern medical curriculum, teaching hospital care, and clinical research.",
                img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-12th-business": {
        num: "03 / PATHWAYS / AFTER 12TH",
        title: "BUSINESS & COMMERCE",
        subtitle: "Navigate BBA, B.Com, Integrated MBA, corporate internships, and corporate career pathways.",
        s1Title: "FOUNDATIONAL BUSINESS CURRICULUM",
        s1Desc: "Understand core business disciplines: Marketing, Accounting, Finance, HR, and Operations.",
        s1Points: [
            "Analyze corporate financial statements, balance sheets, and cash flow reports.",
            "Study consumer behavior, market segmentation, and digital marketing strategies.",
            "Learn organizational behavior, corporate law, and business ethics."
        ],
        s1Kayra: "Business fundamentals toolkit, case study frameworks, and financial modeling basics.",

        s2Title: "CORPORATE INTERNSHIPS & LIVE PROJECTS",
        s2Desc: "Gain hands-on industry experience through summer internships and consulting projects.",
        s2Points: [
            "Secure internships in corporate finance, marketing agencies, or management consultancies.",
            "Participate in national corporate case competitions (Tata Crucible, HUL L.I.M.E.).",
            "Master pitch deck creation, financial analysis in Excel, and executive presentations."
        ],
        s2Kayra: "Case competition playbooks, resume builders, and internship search guides.",

        s3Title: "PROFESSIONAL CERTIFICATIONS & NETWORKING",
        s3Desc: "Differentiate your profile with recognized global professional credentials.",
        s3Points: [
            "Prepare for CFA Level 1, Financial Risk Manager (FRM), or CA Intermediate exams.",
            "Build an active professional network on LinkedIn and connect with alumni.",
            "Gain expertise in business analytics software (Tableau, PowerBI, SQL)."
        ],
        s3Kayra: "Certification roadmaps, networking scripts, and analytics learning tracks.",

        s4Title: "CAREER PLACEMENT & MBA PATHWAY",
        s4Desc: "Launch your corporate career or target top global MBA programs.",
        s4Points: [
            "Target campus placements in Investment Banking, Consulting, FMCG, or Big 4 accounting.",
            "Prepare for CAT / GMAT after securing 2-3 years of work experience for MBA.",
            "Explore entrepreneurial venture creation and venture capital funding."
        ],
        s4Kayra: "CAT/GMAT prep frameworks, MBA application roadmaps, and placement prep.",

        institutions: [
            {
                name: "IIM Ahmedabad",
                location: "Ahmedabad, Gujarat, India",
                desc: "India's premier business school, famous for the case-study methodology and executive leadership.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Wharton School, University of Pennsylvania",
                location: "Philadelphia, PA, USA",
                desc: "The world's first collegiate business school, renowned for finance, management, and global impact.",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "London Business School (LBS)",
                location: "London, United Kingdom",
                desc: "Top global business school located in Europe's financial capital, offering unmatched international exposure.",
                img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-12th-law": {
        num: "03 / PATHWAYS / AFTER 12TH",
        title: "LAW & PUBLIC POLICY",
        subtitle: "Navigate 5-Year Integrated BA/BB.A LLB, moot courts, legal internships, and judicial service.",
        s1Title: "LEGAL FOUNDATIONS & JURISPRUDENCE",
        s1Desc: "Master Constitutional Law, Torts, Contracts, Criminal Law, and Legal Reasoning.",
        s1Points: [
            "Study landmark Supreme Court and international court judgments and precedents.",
            "Understand statutory interpretation, legal research, and legal draft writing.",
            "Build strong foundations in Legal History, Sociology, and Political Science."
        ],
        s1Kayra: "Legal research guidebooks, case-brief templates, and landmark judgment summaries.",

        s2Title: "MOOT COURTS & ADVOCACY SKILLS",
        s2Desc: "Develop courtroom advocacy skills through competitive moot court simulations.",
        s2Points: [
            "Participate in national and international Moot Court competitions (Jessup, Stetson).",
            "Master memorial drafting, oral arguments, and responding to judicial questioning.",
            "Engage in Client Counseling and Alternative Dispute Resolution (ADR) competitions."
        ],
        s2Kayra: "Moot court survival kit, oral argument frameworks, and memorial writing guides.",

        s3Title: "LEGAL INTERNSHIPS & PRACTICAL EXPOSURE",
        s3Desc: "Gain practical exposure across tier-1 law firms, trial courts, and judicial clerkships.",
        s3Points: [
            "Intern with Senior Advocates at High Courts or Supreme Court during winter/summer breaks.",
            "Secure corporate law firm internships (Amarchand, AZB, Trilegal, Khaitan).",
            "Publish research papers in UGC-care listed law journals."
        ],
        s3Kayra: "Law firm internship directory, research publishing strategies, and networking guides.",

        s4Title: "CAREER PATHWAYS & BAR ADMISSION",
        s4Desc: "Choose between Corporate Law, Litigation, Judicial Services, or LLM abroad.",
        s4Points: [
            "Clear the All India Bar Examination (AIBE) to practice in Indian courts.",
            "Prepare for State Judicial Services exams or Corporate Law firm recruitment.",
            "Apply for prestigious LLM programs (Harvard, Oxford, Cambridge) for specialized global law."
        ],
        s4Kayra: "LLM application guidance, Judicial prep strategies, and law career fitment counseling.",

        institutions: [
            {
                name: "NLSIU Bangalore",
                location: "Bengaluru, Karnataka, India",
                desc: "Pioneer of legal education in India, consistently ranked #1 Law School in the country.",
                img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "NALSAR University of Law",
                location: "Hyderabad, Telangana, India",
                desc: "Premier legal university known for corporate law placements, vibrant campus, and academics.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Oxford Law Faculty, University of Oxford",
                location: "Oxford, United Kingdom",
                desc: "World-renowned law faculty offering unmatched legal traditions, jurisprudence, and international law.",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "after-12th-design": {
        num: "03 / PATHWAYS / AFTER 12TH",
        title: "DESIGN, MEDIA & ARCHITECTURE",
        subtitle: "Navigate B.Des, B.Arch, portfolio building, creative studios, and product design.",
        s1Title: "DESIGN THINKING & VISUAL FUNDAMENTALS",
        s1Desc: "Master color theory, typography, spatial design, and user psychology.",
        s1Points: [
            "Learn fundamentals of composition, grid systems, typography, and color harmony.",
            "Master design software tools: Figma, Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
            "Develop sketchbooks capturing daily visual observations and spatial ideas."
        ],
        s1Kayra: "UI/UX design roadmap, Figma starter toolkits, and visual composition guides.",

        s2Title: "USER RESEARCH & PROTOTYPING",
        s2Desc: "Conduct human-centered research and construct interactive digital/physical prototypes.",
        s2Points: [
            "Conduct user interviews, map user journeys, and create empathy maps.",
            "Build interactive wireframes and high-fidelity clickable app/web prototypes.",
            "Test prototypes with real users and iterate based on usability feedback."
        ],
        s2Kayra: "User research templates, usability testing guides, and design system playbooks.",

        s3Title: "STUDIO PROJECTS & INDUSTRY INTERNSHIPS",
        s3Desc: "Gain hands-on experience in creative agencies, tech design teams, or architectural firms.",
        s3Points: [
            "Intern with design studios, tech startups, media houses, or architectural firms.",
            "Participate in global design competitions (Red Dot, iF Design Student Award).",
            "Build a cohesive digital portfolio site showcasing process, research, and final artifacts."
        ],
        s3Kayra: "Portfolio review workshops, design challenge frameworks, and agency connects.",

        s4Title: "PORTFOLIO LAUNCH & CAREER DIRECTION",
        s4Desc: "Launch your career as a Product Designer, UX Architect, Creative Director, or Architect.",
        s4Points: [
            "Publish detailed case studies on Behance, Dribbble, or a personal domain.",
            "Prepare for design interviews and portfolio presentation rounds.",
            "Explore freelance consulting, creative agency founding, or master's studies abroad."
        ],
        s4Kayra: "Design portfolio teardowns, interview prep, and creative career guidance.",

        institutions: [
            {
                name: "NID Ahmedabad (National Institute of Design)",
                location: "Ahmedabad, Gujarat, India",
                desc: "India's premier design institute for Industrial Design, Communication Design, and IT Integrated Design.",
                img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Parsons School of Design",
                location: "New York City, NY, USA",
                desc: "Top global art and design school located in the creative capital of New York City.",
                img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "NIFT New Delhi (National Institute of Fashion Tech)",
                location: "New Delhi, India",
                desc: "Pioneer in fashion, lifestyle, communication design, and creative management education.",
                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "global-stem": {
        num: "03 / PATHWAYS / GLOBAL OPTIONS",
        title: "GLOBAL STEM TRACKS",
        subtitle: "Comprehensive roadmap for international CS, Engineering, and Pure Science admissions.",
        s1Title: "STANDARDIZED TESTS & ACADEMIC RIGOR",
        s1Desc: "Achieve top academic scores, AP credits, and standardized test benchmarks.",
        s1Points: [
            "Target 1500+ on SAT or 34+ on ACT for top-tier US university applications.",
            "Take Advanced Placement (AP) calculus, physics, and computer science exams.",
            "Maintain a stellar high school GPA (Class 9-12 transcript consistency)."
        ],
        s1Kayra: "SAT study roadmaps, AP course guides, and GPA optimization strategies.",

        s2Title: "RESEARCH & PASSION PROJECTS",
        s2Desc: "Build a distinctive, world-class STEM profile that stands out to admissions committees.",
        s2Points: [
            "Conduct independent scientific research under university professor mentorship.",
            "Publish research papers in student journals or submit to Regeneron ISEF.",
            "Build open-source software, robotics hardware, or community tech solutions."
        ],
        s2Kayra: "Global STEM profile-building blueprints and research mentor connects.",

        s3Title: "COMMON APP, ESSAYS & LORS",
        s3Desc: "Craft compelling personal statements, supplemental essays, and secure recommendation letters.",
        s3Points: [
            "Write an authentic Common App Personal Statement connecting your personal journey to STEM.",
            "Craft tailored supplemental essays answering 'Why Us?' and 'Why CS/Engineering?'.",
            "Secure impactful Letters of Recommendation (LORs) from Math and Science teachers."
        ],
        s3Kayra: "Common App essay reviews, LOR guidance frameworks, and university essay playbooks.",

        s4Title: "FINANCIAL AID & VISA PREPARATION",
        s4Desc: "Navigate international scholarships, CSS Profile financial aid, and student visas.",
        s4Points: [
            "Apply for merit-based and need-blind/need-aware financial aid (CSS Profile / ISFAA).",
            "Prepare student visa documentation (US F-1, UK Student Visa, Canadian Study Permit).",
            "Attend pre-departure orientations and connect with international alumni networks."
        ],
        s4Kayra: "Scholarship databases, visa mock interview prep, and pre-departure guides.",

        institutions: [
            {
                name: "MIT",
                location: "Cambridge, MA, USA",
                desc: "The world's foremost technology and science research university.",
                img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "University of Cambridge",
                location: "Cambridge, United Kingdom",
                desc: "Historic global university renowned for mathematics, natural sciences, and engineering breakthroughs.",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "ETH Zurich",
                location: "Zurich, Switzerland",
                desc: "Europe's top university for engineering, computer science, and physics (Einstein's alma mater).",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "global-business": {
        num: "03 / PATHWAYS / GLOBAL OPTIONS",
        title: "GLOBAL BUSINESS & ECONOMICS",
        subtitle: "Roadmap for premier international undergraduate business, finance, and economics programs.",
        s1Title: "ACADEMIC PREPARATION & STANDARDIZED TESTS",
        s1Desc: "Demonstrate strong quantitative aptitude, leadership potential, and global awareness.",
        s1Points: [
            "Maintain high grades in High School Mathematics and Economics.",
            "Score highly on SAT/ACT and English proficiency tests (IELTS / TOEFL).",
            "Complete AP Micro/Macroeconomics and AP Statistics exams if available."
        ],
        s1Kayra: "Global business prep guides, economics reading lists, and test prep strategies.",

        s2Title: "LEADERSHIP & ENTREPRENEURIAL PROFILE",
        s2Desc: "Demonstrate real initiative, business acumen, and community impact.",
        s2Points: [
            "Start a revenue-generating small business, e-commerce store, or non-profit social venture.",
            "Participate in global business competitions (Wharton High School Investment Competition).",
            "Gain summer internship experience in finance, marketing, or management."
        ],
        s2Kayra: "Young entrepreneurship frameworks and case competition strategy guides.",

        s3Title: "GLOBAL UNIVERSITY APPLICATIONS",
        s3Desc: "Apply to top business schools across the US, UK, Canada, and Singapore.",
        s3Points: [
            "Apply to premier US programs (Wharton, NYU Stern, UC Berkeley Haas, Michigan Ross).",
            "Submit UCAS applications for top UK economics/finance programs (LSE, Oxford, Warwick).",
            "Apply to top Canadian and Asian business schools (UBC Sauder, NUS, HKUST)."
        ],
        s4Kayra: "UCAS and Common App business essay guides and application trackers.",

        s4Title: "SCHOLARSHIPS & GLOBAL MOBILITY",
        s4Desc: "Secure institutional funding and prepare for international corporate careers.",
        s4Points: [
            "Apply for global business merit scholarships (Lester B. Pearson, Karsh International).",
            "Understand post-study work visa policies (US OPT STEM extension, UK Graduate Route).",
            "Build an early international network with corporate alumni chapters."
        ],
        s4Kayra: "Global scholarship databases and post-study career mobility counseling.",

        institutions: [
            {
                name: "Wharton School (UPenn)",
                location: "Philadelphia, PA, USA",
                desc: "The world's top undergraduate business school for finance and management.",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "London School of Economics (LSE)",
                location: "London, United Kingdom",
                desc: "World leader in economics, finance, politics, and social science degrees.",
                img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "NYU Stern School of Business",
                location: "New York City, NY, USA",
                desc: "Located in the heart of Wall Street, famous for finance, marketing, and global business.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            }
        ]
    },

    "global-arts": {
        num: "03 / PATHWAYS / GLOBAL OPTIONS",
        title: "GLOBAL HUMANITIES & LIBERAL ARTS",
        subtitle: "Roadmap for top international liberal arts colleges, PPE programs, and social impact tracks.",
        s1Title: "HOLISTIC CURiosity & INTELLECTUAL EXPLORATION",
        s1Desc: "Demonstrate broad intellectual engagement across politics, philosophy, arts, and history.",
        s1Points: [
            "Read widely across global political philosophy, literature, and sociological theory.",
            "Maintain strong academic grades across all humanities and language subjects.",
            "Develop excellent analytical writing skills and independent research ability."
        ],
        s1Kayra: "Liberal arts reading guides, critical essay frameworks, and research toolkits.",

        s2Title: "COMMUNITY IMPACT & CREATIVE EXPRESSION",
        s2Desc: "Build a meaningful profile showing social responsibility, writing, and leadership.",
        s2Points: [
            "Lead major community service initiatives, debate forums, or publications.",
            "Publish creative writing, analytical essays, or investigative journalism pieces.",
            "Participate in international Model UN, youth parliaments, or human rights forums."
        ],
        s2Kayra: "Social project playbooks, writing publication guides, and debate strategies.",

        s3Title: "LIBERAL ARTS COLLEGE APPLICATIONS",
        s3Desc: "Target world-class US Liberal Arts Colleges (LACs) and premier European universities.",
        s3Points: [
            "Apply to top US LACs (Williams, Amherst, Swarthmore, Pomona, Wellesley).",
            "Apply to Oxford PPE (Politics, Philosophy & Economics) or Cambridge Human Sciences.",
            "Craft deeply reflective essays highlighting unique worldviews and authentic passion."
        ],
        s3Kayra: "US LAC application strategies, Oxford TSA prep guides, and essay reviews.",

        s4Title: "GLOBAL CITIZENSHIP & CAREERS",
        s4Desc: "Prepare for international careers in diplomacy, think tanks, media, or higher studies.",
        s4Points: [
            "Secure full-ride need-based financial aid offered by top global liberal arts colleges.",
            "Plan trajectories towards Rhodes/Marshall scholarships or global master's studies.",
            "Build international networks in policy, media, law, and social enterprise."
        ],
        s4Kayra: "Financial aid application guides and global career trajectory planning.",

        institutions: [
            {
                name: "Williams College",
                location: "Williamstown, MA, USA",
                desc: "Consistently ranked #1 Liberal Arts College in the US, famous for tutorial-style learning.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "University of Oxford (PPE)",
                location: "Oxford, United Kingdom",
                desc: "The world's most famous degree for future political leaders, diplomats, and thinkers.",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
            },
            {
                name: "Sciences Po",
                location: "Paris, France",
                desc: "France's leading university for social sciences, international relations, and public affairs.",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
            }
        ]
    }
};

/* =========================================
   TEXT ANIMATION PREPARATION
========================================= */

function prepareTextAnimation() {
    const animatedElements = document.querySelectorAll(".animated-heading, .animate-text");
    animatedElements.forEach(element => {
        if (!element.dataset.originalHTML) {
            element.dataset.originalHTML = element.innerHTML;
        }
    });
}

function resetAnimatedText(slideElement) {
    const animatedElements = slideElement.querySelectorAll(".animated-heading, .animate-text");
    animatedElements.forEach(element => {
        if (element.dataset.originalHTML) {
            element.innerHTML = element.dataset.originalHTML;
        }
    });
}

function animateSlideText(slideElement) {
    resetAnimatedText(slideElement);
    const animatedElements = slideElement.querySelectorAll(".animated-heading, .animate-text");
    
    let globalCharIndex = 0;

    animatedElements.forEach(element => {
        const wrapTextNodes = (node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.nodeValue;
                const fragment = document.createDocumentFragment();
                const words = text.split(/(\s+)/);

                words.forEach(word => {
                    if (word.trim() === "") {
                        fragment.appendChild(document.createTextNode(word));
                    } else {
                        const wordSpan = document.createElement("span");
                        wordSpan.className = "word";

                        for (let i = 0; i < word.length; i++) {
                            const charSpan = document.createElement("span");
                            charSpan.className = "char";
                            charSpan.textContent = word[i];
                            charSpan.style.animationDelay = `${globalCharIndex * 0.025}s`;
                            globalCharIndex++;
                            wordSpan.appendChild(charSpan);
                        }
                        fragment.appendChild(wordSpan);
                    }
                });

                node.parentNode.replaceChild(fragment, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                Array.from(node.childNodes).forEach(wrapTextNodes);
            }
        };

        wrapTextNodes(element);
    });
}

/* =========================================
   SKILL CARDS ANIMATION
========================================= */

function triggerSkillCards(slideElement) {
    const cards = slideElement.querySelectorAll(".skill-card");
    cards.forEach((card, index) => {
        card.classList.remove("skill-card-visible");
        setTimeout(() => {
            card.classList.add("skill-card-visible");
        }, 120 * index + 200);
    });
}

/* =========================================
   STREAM SELECTOR MODAL LOGIC
========================================= */

function openStreamSelector(pathwayKey) {
    const data = pathwayStreams[pathwayKey];
    if (!data) return;

    currentPathwayCategory = pathwayKey;

    document.getElementById("streamSelectorNumber").textContent = data.num;
    document.getElementById("streamSelectorTitle").innerHTML = `${data.title} <span class="highlight">STREAMS</span>`;
    document.getElementById("streamSelectorSubtitle").textContent = data.subtitle;

    streamsGrid.innerHTML = "";

    data.streams.forEach((st, idx) => {
        const card = document.createElement("div");
        card.className = "stream-card";
        card.setAttribute("data-stream-key", st.key);

        card.innerHTML = `
            <div class="stream-num">0${idx + 1}</div>
            <h3>${st.name}</h3>
            <p>${st.desc}</p>
            <div class="stream-btn">EXPLORE ROADMAP & TOP SCHOOLS →</div>
        `;

        card.addEventListener("click", () => {
            closeStreamSelector();
            openRoadmap(st.key);
        });

        streamsGrid.appendChild(card);
    });

    streamSelectorOverlay.classList.add("active");
    slideControls.classList.add("hidden");
    isStreamSelectorOpen = true;
    streamSelectorOverlay.scrollTop = 0;
}

function closeStreamSelector() {
    streamSelectorOverlay.classList.remove("active");
    if (!isRoadmapOpen) {
        slideControls.classList.remove("hidden");
    }
    isStreamSelectorOpen = false;
}

/* =========================================
   ROADMAP / PATHWAY MODAL LOGIC
========================================= */

function populatePointsList(elementId, points) {
    const listElement = document.getElementById(elementId);
    if (!listElement) return;
    listElement.innerHTML = "";
    if (points && points.length > 0) {
        points.forEach(pt => {
            const li = document.createElement("li");
            li.textContent = pt;
            listElement.appendChild(li);
        });
    }
}

function renderInstitutions(institutions) {
    const instSection = document.getElementById("institutionsSection");
    const instGrid = document.getElementById("institutionsGrid");
    
    if (!instGrid) return;
    instGrid.innerHTML = "";

    if (!institutions || institutions.length === 0) {
        if (instSection) instSection.style.display = "none";
        return;
    }

    if (instSection) instSection.style.display = "block";

    institutions.slice(0, 3).forEach((inst, index) => {
        const card = document.createElement("div");
        card.className = "institution-card";

        card.innerHTML = `
            <div class="institution-img-wrapper">
                <img src="${inst.img}" alt="${inst.name}" loading="lazy" class="institution-img" />
                <span class="institution-rank">#0${index + 1}</span>
            </div>
            <div class="institution-details">
                <span class="institution-location">📍 ${inst.location}</span>
                <h4>${inst.name}</h4>
                <p>${inst.desc}</p>
            </div>
        `;

        instGrid.appendChild(card);
    });
}

function openRoadmap(itemKey) {
    const data = overlayData[itemKey];
    if (!data) return;

    document.getElementById("roadmapNumber").textContent = data.num;
    document.getElementById("roadmapTitle").innerHTML = `${data.title} <span class="highlight">ROADMAP</span>`;
    document.getElementById("roadmapSubtitle").textContent = data.subtitle;

    // STEP 1
    document.getElementById("step1Title").textContent = data.s1Title;
    document.getElementById("step1Desc").textContent = data.s1Desc;
    populatePointsList("step1Points", data.s1Points);
    document.getElementById("step1Kayra").textContent = data.s1Kayra;

    // STEP 2
    document.getElementById("step2Title").textContent = data.s2Title;
    document.getElementById("step2Desc").textContent = data.s2Desc;
    populatePointsList("step2Points", data.s2Points);
    document.getElementById("step2Kayra").textContent = data.s2Kayra;

    // STEP 3
    document.getElementById("step3Title").textContent = data.s3Title;
    document.getElementById("step3Desc").textContent = data.s3Desc;
    populatePointsList("step3Points", data.s3Points);
    document.getElementById("step3Kayra").textContent = data.s3Kayra;

    // STEP 4
    document.getElementById("step4Title").textContent = data.s4Title;
    document.getElementById("step4Desc").textContent = data.s4Desc;
    populatePointsList("step4Points", data.s4Points);
    document.getElementById("step4Kayra").textContent = data.s4Kayra;

    // TOP 3 INSTITUTIONS
    renderInstitutions(data.institutions);

    roadmapOverlay.classList.add("active");
    slideControls.classList.add("hidden");
    isRoadmapOpen = true;

    // Scroll to top of overlay content
    roadmapOverlay.scrollTop = 0;
}

function closeRoadmap() {
    roadmapOverlay.classList.remove("active");
    
    // If returning from a pathway stream, re-open the stream selector
    if (currentPathwayCategory && isStreamSelectorOpen === false && overlayData[currentPathwayCategory] === undefined) {
        // Just return to normal view
    }
    
    slideControls.classList.remove("hidden");
    isRoadmapOpen = false;
}

/* =========================================
   SLIDE SWITCHING LOGIC
========================================= */

function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;

    if (isRoadmapOpen) closeRoadmap();
    if (isStreamSelectorOpen) closeStreamSelector();

    slides[currentSlide].classList.remove("active");
    currentSlide = index;
    slides[currentSlide].classList.add("active");

    // Update active navbar button
    navButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === currentSlide);
    });

    // Update slide counter text
    if (slideCounter) {
        const slideNum = String(currentSlide + 1).padStart(2, "0");
        const totalSlides = String(slides.length).padStart(2, "0");
        slideCounter.textContent = `${slideNum} / ${totalSlides}`;
    }

    // Trigger animations for the new active slide
    animateSlideText(slides[currentSlide]);
    triggerSkillCards(slides[currentSlide]);

    // Close mobile menu if open
    if (mobileMenu) mobileMenu.classList.remove("open");
}

/* =========================================
   EVENT LISTENERS
========================================= */

// Skill Card Clicks
document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click", () => {
        const skillKey = card.getAttribute("data-skill");
        openRoadmap(skillKey);
    });
});

// Pathway Row Clicks -> Opens Stream Selector Slide
document.querySelectorAll(".pathway-row").forEach(row => {
    row.addEventListener("click", () => {
        const pathwayKey = row.getAttribute("data-pathway");
        if (pathwayKey) {
            openStreamSelector(pathwayKey);
        }
    });
});

if (closeRoadmapButton) {
    closeRoadmapButton.addEventListener("click", closeRoadmap);
}

if (closeStreamSelectorButton) {
    closeStreamSelectorButton.addEventListener("click", closeStreamSelector);
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        if (currentSlide < slides.length - 1) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(0);
        }
    });
}

if (previousButton) {
    previousButton.addEventListener("click", () => {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        } else {
            goToSlide(slides.length - 1);
        }
    });
}

navButtons.forEach((button, index) => {
    button.addEventListener("click", () => goToSlide(index));
});

mobileNavButtons.forEach((button, index) => {
    button.addEventListener("click", () => goToSlide(index));
});

document.querySelectorAll("[data-slide-target]").forEach(button => {
    button.addEventListener("click", (e) => {
        const target = parseInt(e.target.getAttribute("data-slide-target"), 10);
        if (!isNaN(target)) goToSlide(target);
    });
});

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });
}

// Keyboard arrow navigation
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (isRoadmapOpen) closeRoadmap();
        else if (isStreamSelectorOpen) closeStreamSelector();
        return;
    }

    if (!isRoadmapOpen && !isStreamSelectorOpen) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            if (currentSlide > 0) goToSlide(currentSlide - 1);
        }
    }
});

/* Initialize */
document.addEventListener("DOMContentLoaded", () => {
    prepareTextAnimation();
    goToSlide(0);
});
