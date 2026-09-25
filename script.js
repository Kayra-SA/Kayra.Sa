/* =========================================
   DATA STRUCTURES & STATE MANAGEMENT
========================================= */

const skillsData = {
    1: {
        title: "Adaptive Learning Paths",
        description: "Creates dynamic, personalized study roadmaps tailored specifically to individual academic goals, learning pace, and skill gaps.",
        steps: [
            { title: "Diagnostic Assessment", desc: "Evaluates current knowledge level and identifies core strengths and foundational weaknesses.", impact: "Saves up to 40% of preliminary review time by skipping mastered topics." },
            { title: "Milestone Generation", desc: "Breaks comprehensive curricula into structured, achievable weekly targets with clear deadlines.", impact: "Keeps motivation high through frequent, achievable completion signals." },
            { title: "Real-time Adjustment", desc: "Continuously recalculates study pacing based on daily quiz scores and retention rates.", impact: "Prevents burnout and ensures steady mastery without cognitive overload." }
        ]
    },
    2: {
        title: "Core Subject Mastery",
        description: "Deepens understanding across Mathematics, Physics, Chemistry, and Computer Science through structured concept breakdowns.",
        steps: [
            { title: "First-Principles Breakdown", desc: "Deconstructs complex theorems and equations into intuitive, fundamental core concepts.", impact: "Eliminates rote memorization in favor of deep structural comprehension." },
            { title: "Interactive Problem Solving", desc: "Presents step-by-step guided solutions that adapt dynamically to mistaken assumptions.", impact: "Builds problem-solving resilience across high-stakes exam scenarios." },
            { title: "Cross-Topic Synthesis", desc: "Connects isolated subjects to highlight interdisciplinary applications in modern science.", impact: "Enhances higher-order analytical thinking required for advanced research." }
        ]
    },
    3: {
        title: "Exam Preparation",
        description: "Offers targeted practice strategies, mock exams, and time-management techniques for global competitive assessments.",
        steps: [
            { title: "Pattern Analysis", desc: "Analyzes decade-long exam trends to pinpoint recurring high-value question formats.", impact: "Maximizes exam performance efficiency relative to study hours." },
            { title: "Timed Mock Simulation", desc: "Simulates test-day conditions with real-time pressure tracking and pacing feedback.", impact: "Reduces exam anxiety and optimizes pacing strategies per section." },
            { title: "Error Diagnostics", desc: "Categorizes incorrect answers into conceptual gaps, misreadings, or calculation errors.", impact: "Provides actionable, hyper-focused remediation targets immediately." }
        ]
    },
    4: {
        title: "University Guidance",
        description: "Guides students through admissions criteria, application strategies, portfolio building, and institution selection.",
        steps: [
            { title: "Profile Matching", desc: "Correlates personal academic metrics and ambitions against global institution datasets.", impact: "Identifies optimal reach, match, and safety target universities." },
            { title: "Portfolio Curation", desc: "Provides structural frameworks for presenting research projects, essays, and extra-curriculars.", impact: "Transforms raw achievements into a compelling applicant narrative." },
            { title: "Admissions Optimization", desc: "Tracks deadlines, requirements, and essay prompts across multiple global systems.", impact: "Eliminates application errors and ensures flawless submission timeliness." }
        ]
    },
    5: {
        title: "Skill Gap Analysis",
        description: "Identifies missing prerequisite knowledge and delivers targeted remedial modules before advancing.",
        steps: [
            { title: "Prerequisite Mapping", desc: "Traces advanced topics back to their foundational prerequisites across subjects.", impact: "Uncovers hidden conceptual debt preventing progress." },
            { title: "Micro-Module Delivery", desc: "Serves concise 10-minute refresher modules to plug specific missing skills quickly.", impact: "Restores learning momentum without derailing primary study plans." },
            { title: "Verification Checks", desc: "Validates remediation success before unlocking advanced coursework modules.", impact: "Guarantees a rock-solid foundation for advanced specialization." }
        ]
    },
    6: {
        title: "Career Mapping",
        description: "Connects academic disciplines directly to emerging industry careers, research domains, and skill demands.",
        steps: [
            { title: "Industry Demand Scanning", desc: "Tracks real-time skills required by top research institutions and tech companies.", impact: "Aligns study choices with actual future workforce demands." },
            { title: "Career Trajectory Projection", desc: "Maps academic degrees to long-term career outcomes and specialization options.", impact: "Provides clarity on long-term ROI for different educational paths." },
            { title: "Actionable Skill Checklists", desc: "Generates practical lists of tools, languages, and certifications to acquire.", impact: "Bridges the gap between academic theory and industry readiness." }
        ]
    }
};

const pathwaysData = {
    1: {
        title: "Engineering & Technology",
        subtitle: "Pioneer cutting-edge innovations across computing, robotics, hardware, and aerospace engineering.",
        options: {
            "Computer Science": {
                desc: "Focuses on algorithms, software architecture, artificial intelligence, systems design, and computational theory.",
                difficulty: "High",
                prereq: "Strong foundation in Higher Mathematics, Calculus, Linear Algebra, and basic Logical Programming.",
                institutions: [
                    { rank: "#1 Global", name: "MIT", loc: "USA", tag: "Top Tech" },
                    { rank: "#2 Global", name: "Stanford University", loc: "USA", tag: "Silicon Valley Hub" },
                    { rank: "#3 Global", name: "ETH Zurich", loc: "Switzerland", tag: "Excellence in AI" }
                ],
                roadmap: "Master Data Structures & Algorithms -> System Design -> Specialized AI/Cloud Engineering -> Production Architecture.",
                advancedSteps: [
                    { phase: "Phase 1: Mathematical & Algorithmic Foundations", desc: "Master Calculus, Discrete Mathematics, Linear Algebra, and basic Data Structures in C++ or Python." },
                    { phase: "Phase 2: Core Systems & Architecture", desc: "Study Operating Systems, Computer Architecture, Networking Protocols, and Database Design." },
                    { phase: "Phase 3: Software Engineering & Design Patterns", desc: "Build scalable full-stack applications, apply object-oriented design patterns, and practice CI/CD workflows." },
                    { phase: "Phase 4: Specialization (AI / Distributed Systems)", desc: "Deep dive into Neural Networks, Machine Learning pipelines, microservices, and cloud architecture (AWS/GCP)." }
                ]
            },
            "Artificial Intelligence": {
                desc: "Dedicated specialization in neural networks, machine learning algorithms, NLP, and autonomous intelligent agents.",
                difficulty: "Very High",
                prereq: "Advanced Calculus, Multivariable Calculus, Probability & Statistics, Linear Algebra, Python proficiency.",
                institutions: [
                    { rank: "#1 AI Research", name: "Carnegie Mellon University", loc: "USA", tag: "Robotics & AI" },
                    { rank: "#2 Global", name: "Stanford University", loc: "USA", tag: "HAI Institute" },
                    { rank: "#1 Europe", name: "University of Oxford", loc: "UK", tag: "Deep Learning" }
                ],
                roadmap: "Linear Algebra & Probabilities -> Classical Machine Learning -> Deep Learning & Transformers -> AI Ethics & Deployment.",
                advancedSteps: [
                    { phase: "Phase 1: Advanced Applied Mathematics", desc: "Focus heavily on Probability Theory, Vector Calculus, Optimization Techniques, and Statistical Modeling." },
                    { phase: "Phase 2: Classical Machine Learning", desc: "Implement Decision Trees, SVMs, Regression models, and Clustering algorithms from scratch using NumPy." },
                    { phase: "Phase 3: Deep Learning Architecture", desc: "Build Convolutional Networks, Transformers, and Generative models using PyTorch or TensorFlow." },
                    { phase: "Phase 4: MLOps & Production AI", desc: "Optimize model inference, deploy LLMs on edge devices, and build continuous retraining pipelines." }
                ]
            },
            "Aerospace Engineering": {
                desc: "Designing aircraft, spacecraft, satellite systems, propulsion, and fluid dynamics for atmospheric and orbital flight.",
                difficulty: "Extreme",
                prereq: "Advanced Physics (Mechanics & Thermodynamics), Multivariable Calculus, Differential Equations.",
                institutions: [
                    { rank: "#1 Global", name: "MIT", loc: "USA", tag: "AeroAstro" },
                    { rank: "#2 Global", name: "Georgia Tech", loc: "USA", tag: "Propulsion Lab" },
                    { rank: "#1 Europe", name: "Imperial College London", loc: "UK", tag: "Aeronautics" }
                ],
                roadmap: "Classical Mechanics -> Aerodynamics & Thermodynamics -> Orbital Mechanics -> Space Systems Design.",
                advancedSteps: [
                    { phase: "Phase 1: Core Physics & Mechanics", desc: "Gain mastery over Statics, Dynamics, Fluid Mechanics, and Engineering Materials." },
                    { phase: "Phase 2: Thermodynamics & Aerodynamics", desc: "Study compressible flow, heat transfer, shockwaves, and propulsion engine cycles." },
                    { phase: "Phase 3: Flight Dynamics & Avionics", desc: "Analyze flight stability, control systems, structural loading, and sensor suites." },
                    { phase: "Phase 4: Systems Engineering & Spacecraft Design", desc: "Participate in capstone satellite payload design, orbital trajectory optimization, and launch tests." }
                ]
            }
        }
    },
    2: {
        title: "Medical & Health Sciences",
        subtitle: "Advance human health through clinical practice, biomedical research, biotechnology, and surgical mastery.",
        options: {
            "Clinical Medicine (MBBS/MD)": {
                desc: "Comprehensive diagnostic and therapeutic clinical training leading to practicing physician or surgeon roles.",
                difficulty: "Extreme",
                prereq: "Human Biology, General & Organic Chemistry, Biochemistry, high-level empathy and critical diagnostic thinking.",
                institutions: [
                    { rank: "#1 Global", name: "Harvard University", loc: "USA", tag: "HMS Clinical" },
                    { rank: "#2 Global", name: "University of Oxford", loc: "UK", tag: "Medical Sciences" },
                    { rank: "#3 Global", name: "Johns Hopkins University", loc: "USA", tag: "Surgical Excellence" }
                ],
                roadmap: "Pre-Med Sciences -> Pre-Clinical Foundations -> Clinical Rotations -> Residency Specialization.",
                advancedSteps: [
                    { phase: "Phase 1: Pre-Clinical Science Foundation", desc: "Master Human Anatomy, Physiology, Pathology, Pharmacology, and Medical Biochemistry." },
                    { phase: "Phase 2: Clinical Diagnostics & Skills", desc: "Learn clinical examination techniques, patient communication, differential diagnostics, and laboratory testing." },
                    { phase: "Phase 3: Core Clinical Rotations", desc: "Rotate through Internal Medicine, General Surgery, Pediatrics, Psychiatry, and Obstetrics." },
                    { phase: "Phase 4: Residency & Board Certification", desc: "Complete intensive hospital residency in chosen sub-specialty and pass medical licensing boards." }
                ]
            },
            "Biomedical Engineering": {
                desc: "Bridges engineering principles with biological systems to create artificial organs, prosthetics, and medical devices.",
                difficulty: "High",
                prereq: "Biology, Chemistry, Physics, Calculus, basic Signals & Systems understanding.",
                institutions: [
                    { rank: "#1 Global", name: "Johns Hopkins University", loc: "USA", tag: "BME Department" },
                    { rank: "#2 Global", name: "Georgia Tech", loc: "USA", tag: "Bioengineering" },
                    { rank: "#3 Global", name: "ETH Zurich", loc: "Switzerland", tag: "Medical Tech" }
                ],
                roadmap: "Biology + Physics Integrations -> Biomaterials & Biomechanics -> Medical Device Prototyping -> Clinical Regulatory Approval.",
                advancedSteps: [
                    { phase: "Phase 1: Bio-Physics & Molecular Foundations", desc: "Combine Cell Biology with Mechanics, Thermodynamics, and Circuit Theory." },
                    { phase: "Phase 2: Biomaterials & Biomechanics", desc: "Study biocompatible materials, tissue mechanics, fluid flow in cardiovascular systems, and prosthetics." },
                    { phase: "Phase 3: Bioinstrumentation & Imaging", desc: "Design diagnostic devices, ECG sensors, ultrasound circuits, and MRI signal processing algorithms." },
                    { phase: "Phase 4: Clinical Translation & FDA Approval", desc: "Execute prototype testing, conduct clinical safety trials, and navigate medical device regulatory standards." }
                ]
            }
        }
    },
    3: {
        title: "Pure & Applied Sciences",
        subtitle: "Unravel fundamental laws of nature, matter, universe, mathematics, and complex chemical processes.",
        options: {
            "Theoretical Physics": {
                desc: "Exploring quantum mechanics, general relativity, string theory, high-energy particle physics, and cosmology.",
                difficulty: "Extreme",
                prereq: "Advanced Physics, Partial Differential Equations, Vector Calculus, Quantum Mechanics basics.",
                institutions: [
                    { rank: "#1 Global", name: "University of Cambridge", loc: "UK", tag: "DAMTP" },
                    { rank: "#2 Global", name: "Princeton University", loc: "USA", tag: "IAS Connection" },
                    { rank: "#3 Global", name: "Caltech", loc: "USA", tag: "Particle Physics" }
                ],
                roadmap: "Classical Mechanics & Electrodynamics -> Quantum Mechanics -> General Relativity -> Quantum Field Theory.",
                advancedSteps: [
                    { phase: "Phase 1: Advanced Theoretical Mathematics", desc: "Master Real Analysis, Complex Analysis, Differential Geometry, and Tensor Calculus." },
                    { phase: "Phase 2: Quantum Mechanics & Electrodynamics", desc: "Solve Schrödinger and Dirac equations, study electrodynamics, operator theory, and perturbation methods." },
                    { phase: "Phase 3: Statistical Mechanics & Relativity", desc: "Explore thermodynamics at micro scales and general relativity field equations." },
                    { phase: "Phase 4: Advanced Frontier Research", desc: "Conduct original research in Quantum Field Theory, String Theory, or High-Energy Astrophysics." }
                ]
            }
        }
    },
    4: {
        title: "Business & Quantitative Finance",
        subtitle: "Drive strategic enterprise growth, algorithmic trading models, financial markets, and economic policy.",
        options: {
            "Quantitative Finance": {
                desc: "Applying mathematical algorithms, stochastic calculus, and machine learning to financial markets and risk models.",
                difficulty: "Very High",
                prereq: "Stochastic Calculus, Probability, Linear Algebra, C++/Python, Algorithmic Logic.",
                institutions: [
                    { rank: "#1 Quant", name: "Princeton University", loc: "USA", tag: "Bendheim Center" },
                    { rank: "#2 Global", name: "CMU", loc: "USA", tag: "MSCFF" },
                    { rank: "#1 Europe", name: "Oxford University", loc: "UK", tag: "Mathematical Finance" }
                ],
                roadmap: "Probability & Microeconomics -> Stochastic Calculus & Asset Pricing -> Algorithmic Trading Systems -> Risk Models.",
                advancedSteps: [
                    { phase: "Phase 1: Mathematical Foundations", desc: "Master Measure-Theoretic Probability, Multivariable Calculus, and High-Performance C++ Programming." },
                    { phase: "Phase 2: Financial Derivatives & Markets", desc: "Study options pricing models (Black-Scholes), interest rate models, and fixed income derivatives." },
                    { phase: "Phase 3: Stochastic Calculus & Econometrics", desc: "Apply Brownian motion, Ito's Lemma, time-series forecasting, and statistical arbitrage strategies." },
                    { phase: "Phase 4: Algorithmic Execution & Risk", desc: "Build ultra-low latency execution systems, portfolio optimization algorithms, and Stress Testing models." }
                ]
            }
        }
    }
};

let currentSlideIndex = 0;
const totalSlides = 5;

/* =========================================
   DOM ELEMENTS
========================================= */

const slideContainer = document.getElementById("slideContainer");
const slides = document.querySelectorAll(".slide");
const slideCounter = document.getElementById("slideCounter");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
const navButtons = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

/* Overlays */
const roadmapOverlay = document.getElementById("roadmapOverlay");
const pathwayOverlay = document.getElementById("pathwayOverlay");
const advancedRoadmapOverlay = document.getElementById("advancedRoadmapOverlay");
const loadingOverlay = document.getElementById("loadingOverlay");

/* Pathway Elements */
const pathwayTitle = document.getElementById("pathwayTitle");
const pathwaySubtitle = document.getElementById("pathwaySubtitle");
const pathwayOptionsPills = document.getElementById("pathwayOptionsPills");
const optionTitle = document.getElementById("optionTitle");
const optionDesc = document.getElementById("optionDesc");
const optionDiff = document.getElementById("optionDiff");
const optionPrereq = document.getElementById("optionPrereq");
const optionInstitutions = document.getElementById("optionInstitutions");
const optionRoadmapText = document.getElementById("optionRoadmapText");

/* Advanced Roadmap Elements */
const advRoadmapTitle = document.getElementById("advRoadmapTitle");
const advRoadmapSubtitle = document.getElementById("advRoadmapSubtitle");
const advRoadmapStepsContainer = document.getElementById("advRoadmapStepsContainer");
const loadingProgressBar = document.getElementById("loadingProgressBar");

let currentSelectedPathway = null;
let currentSelectedOptionKey = null;

/* =========================================
   SLIDE NAVIGATION SYSTEM
========================================= */

function updateSlideView(index) {
    if (index < 0 || index >= totalSlides) return;

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("active");
            triggerSlideAnimations(slide);
        } else {
            slide.classList.remove("active");
        }
    });

    currentSlideIndex = index;
    
    // Update counter text
    if (slideCounter) {
        slideCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    }

    // Update active nav links
    navButtons.forEach(btn => {
        const target = parseInt(btn.getAttribute("data-slide"));
        btn.classList.toggle("active", target === index);
    });

    // Close mobile menu if open
    if (mobileMenu) {
        mobileMenu.classList.remove("open");
    }
}

function triggerSlideAnimations(slide) {
    const cards = slide.querySelectorAll(".skill-card");
    cards.forEach((card, idx) => {
        card.classList.remove("skill-card-visible");
        setTimeout(() => {
            card.classList.add("skill-card-visible");
        }, idx * 80);
    });
}

/* Event Listeners for Slide Navigation */
if (prevSlideBtn) prevSlideBtn.addEventListener("click", () => updateSlideView(currentSlideIndex - 1));
if (nextSlideBtn) nextSlideBtn.addEventListener("click", () => updateSlideView(currentSlideIndex + 1));

navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetSlide = parseInt(btn.getAttribute("data-slide"));
        updateSlideView(targetSlide);
    });
});

mobileNavLinks.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetSlide = parseInt(btn.getAttribute("data-slide"));
        updateSlideView(targetSlide);
    });
});

if (menuButton) {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });
}

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
    // Only allow slide switching if no overlays are open
    if (roadmapOverlay.classList.contains("active") || 
        pathwayOverlay.classList.contains("active") || 
        advancedRoadmapOverlay.classList.contains("active") ||
        loadingOverlay.classList.contains("active")) {
        return;
    }

    if (e.key === "ArrowRight" || e.key === "PageDown") {
        updateSlideView(currentSlideIndex + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        updateSlideView(currentSlideIndex - 1);
    }
});

/* =========================================
   SKILLS & BASIC ROADMAP MODAL
========================================= */

function openSkillRoadmap(skillId) {
    const data = skillsData[skillId];
    if (!data) return;

    document.getElementById("roadmapTitle").textContent = data.title;
    document.getElementById("roadmapDescription").textContent = data.description;

    const stepsContainer = document.getElementById("roadmapStepsContainer");
    stepsContainer.innerHTML = "";

    data.steps.forEach((step, index) => {
        const stepCard = document.createElement("div");
        stepCard.className = "roadmap-step";
        stepCard.innerHTML = `
            <div class="step-num">0${index + 1}</div>
            <div class="step-content">
                <h4>${step.title}</h4>
                <p class="step-desc">${step.desc}</p>
                <div class="kayra-impact">
                    <span class="kayra-badge">KAYRA IMPACT</span>
                    <p>${step.impact}</p>
                </div>
            </div>
        `;
        stepsContainer.appendChild(stepCard);
    });

    roadmapOverlay.classList.add("active");
}

function closeRoadmap() {
    roadmapOverlay.classList.remove("active");
}

/* =========================================
   PATHWAY DETAILS & OPTION SWITCHING
========================================= */

function openPathwayDetail(id) {
    const pathway = pathwaysData[id];
    if (!pathway) return;

    currentSelectedPathway = pathway;
    pathwayTitle.textContent = pathway.title;
    pathwaySubtitle.textContent = pathway.subtitle;

    // Render Option Pills
    pathwayOptionsPills.innerHTML = "";
    const optionKeys = Object.keys(pathway.options);

    optionKeys.forEach((key, index) => {
        const pill = document.createElement("button");
        pill.className = `option-pill ${index === 0 ? "active" : ""}`;
        pill.textContent = key;
        pill.onclick = () => selectPathwayOption(key);
        pathwayOptionsPills.appendChild(pill);
    });

    // Default select first option
    if (optionKeys.length > 0) {
        selectPathwayOption(optionKeys[0]);
    }

    pathwayOverlay.classList.add("active");
}

function selectPathwayOption(optionKey) {
    if (!currentSelectedPathway || !currentSelectedPathway.options[optionKey]) return;

    currentSelectedOptionKey = optionKey;
    const optionData = currentSelectedPathway.options[optionKey];

    // Update Pills active state
    document.querySelectorAll(".option-pill").forEach(pill => {
        pill.classList.toggle("active", pill.textContent === optionKey);
    });

    // Populate Details
    optionTitle.textContent = optionKey;
    optionDesc.textContent = optionData.desc;
    optionDiff.textContent = optionData.difficulty;
    optionPrereq.textContent = optionData.prereq;
    optionRoadmapText.textContent = optionData.roadmap;

    // Institutions
    optionInstitutions.innerHTML = "";
    optionData.institutions.forEach(inst => {
        const instCard = document.createElement("div");
        instCard.className = "institution-card";
        instCard.innerHTML = `
            <div class="inst-rank">${inst.rank}</div>
            <div class="inst-name">${inst.name}</div>
            <div class="inst-loc">${inst.loc}</div>
            <span class="inst-tag">${inst.tag}</span>
        `;
        optionInstitutions.appendChild(instCard);
    });
}

function closePathwayDetail() {
    pathwayOverlay.classList.remove("active");
}

/* =========================================
   ADVANCED ROADMAP GENERATION (SIMULATION)
========================================= */

function generateAdvancedRoadmap() {
    if (!currentSelectedPathway || !currentSelectedOptionKey) return;

    const optionData = currentSelectedPathway.options[currentSelectedOptionKey];
    if (!optionData || !optionData.advancedSteps) return;

    // Show Loading Overlay with simulated progress
    loadingOverlay.classList.add("active");
    loadingProgressBar.style.width = "0%";

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        loadingProgressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingOverlay.classList.remove("active");
                displayAdvancedRoadmap(optionData);
            }, 300);
        }
    }, 80);
}

function displayAdvancedRoadmap(optionData) {
    advRoadmapTitle.textContent = currentSelectedOptionKey;
    advRoadmapSubtitle.textContent = `Comprehensive Academic Execution Strategy for ${currentSelectedOptionKey}`;

    advRoadmapStepsContainer.innerHTML = "";

    optionData.advancedSteps.forEach((step, idx) => {
        const stepItem = document.createElement("div");
        stepItem.className = "vertical-step-item";
        stepItem.innerHTML = `
            <div class="vertical-step-marker">${idx + 1}</div>
            <div class="vertical-step-body">
                <div class="vertical-step-phase">${step.phase}</div>
                <div class="vertical-step-desc">${step.desc}</div>
            </div>
        `;
        advRoadmapStepsContainer.appendChild(stepItem);
    });

    advancedRoadmapOverlay.classList.add("active");
}

function closeAdvancedRoadmap() {
    advancedRoadmapOverlay.classList.remove("active");
}

/* Global Exposing for Onclick Handlers */
window.openSkillRoadmap = openSkillRoadmap;
window.closeRoadmap = closeRoadmap;
window.openPathwayDetail = openPathwayDetail;
window.closePathwayDetail = closePathwayDetail;
window.generateAdvancedRoadmap = generateAdvancedRoadmap;
window.closeAdvancedRoadmap = closeAdvancedRoadmap;

/* Initialize Default View */
document.addEventListener("DOMContentLoaded", () => {
    updateSlideView(0);
});
