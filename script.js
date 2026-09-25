/* =========================================
   KAYRA
   SLIDE + ROADMAP INTERACTION LOGIC
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

let currentSlide = 0;
let isRoadmapOpen = false;

/* =========================================
   ROADMAP DATA (6 SKILLS, DETAILED & VERTICAL)
========================================= */

const roadmapData = {
    "communication": {
        num: "02 / SKILLS / 01",
        title: "COMMUNICATION",
        subtitle: "Master articulate speech, active listening, structural narrative, and audience resonance.",
        
        s1Title: "FOUNDATIONAL EXPRESSION",
        s1Desc: "Understand core message structuring, tone awareness, and active listening dynamics.",
        s1Points: [
            "Deconstruct non-verbal signals, vocal cadence, and posture.",
            "Learn the Pyramid Principle to structure messages top-down.",
            "Practice reflective listening to process viewpoints before formulating answers."
        ],
        s1Kayra: "Diagnostic articulation assessments and foundational speech structure blueprints.",

        s2Title: "STRUCTURED WRITING & PUBLIC SPEAKING",
        s2Desc: "Transform raw thoughts into compelling speeches, essays, and presentations.",
        s2Points: [
            "Write concise pitch briefs and structured opinion pieces.",
            "Eliminate speech clutter (filler words, passive voice, rambling).",
            "Deliver short impromptu speeches under tight constraints."
        ],
        s2Kayra: "Safe-space peer feedback circles, video speech analysis, and voice modulation labs.",

        s3Title: "PERSUASION & NEGOTIATION",
        s3Desc: "Navigate complex discussions, resolve disagreements, and align divergent viewpoints.",
        s3Points: [
            "Map stakeholder incentives and adapt language to audience archetypes.",
            "Master negotiation dynamics: BATNA, empathetic pushback, and compromise.",
            "De-escalate high-pressure debates using calm, structured logic."
        ],
        s3Kayra: "Simulated Model UN / debate arenas and guided conflict resolution workshops.",

        s4Title: "INSPIRATIONAL LEADERSHIP STORYTELLING",
        s4Desc: "Inspire communities, articulate vision, and command presence in high-stakes environments.",
        s4Points: [
            "Craft personal leadership narratives that resonate authentically.",
            "Host podcasts, lead town halls, or represent projects on external stages.",
            "Mentor junior peers in developing their own communication style."
        ],
        s4Kayra: "Keynote presentation opportunities, public showcase platforms, and 1-on-1 executive coaching."
    },

    "creativity": {
        num: "02 / SKILLS / 02",
        title: "CREATIVITY",
        subtitle: "Unlock original thinking, break cognitive patterns, and convert concepts into tangible realities.",

        s1Title: "CURIOSITY & DIVERGENT THINKING",
        s1Desc: "Break routine mental shortcuts and develop acute observational habits.",
        s1Points: [
            "Challenge implicit assumptions using First Principles reasoning.",
            "Maintain daily idea journals capturing observations across industries.",
            "Practice lateral thinking drills to connect seemingly unrelated fields."
        ],
        s1Kayra: "Daily brain-teaser prompts, cross-domain reading lists, and concept mapping tools.",

        s2Title: "IDEATION & RAPID PROTOTYPING",
        s2Desc: "Iterate swiftly on ideas and build low-fidelity conceptual models.",
        s2Points: [
            "Apply Design Thinking frameworks (Empathize, Define, Ideate, Prototype, Test).",
            "Build quick wireframes, storyboards, or mockups without fear of failure.",
            "Gather immediate peer feedback to refine early hypotheses."
        ],
        s2Kayra: "Collaborative 48-hour design sprints and multi-disciplinary sandbox sessions.",

        s3Title: "INTERDISCIPLINARY FUSION",
        s3Desc: "Merge artistic expression, scientific rigor, and human psychology.",
        s3Points: [
            "Analyze world-class innovations across design, technology, and literature.",
            "Synthesize ideas from nature (biomimicry) into real-world utility.",
            "Refine aesthetic intuition alongside functional necessity."
        ],
        s3Kayra: "Cross-domain workshops bridging art, technology, and social systems.",

        s4Title: "PORTFOLIO CREATION & REAL-WORLD LAUNCH",
        s4Desc: "Execute original vision into published works, products, or original ventures.",
        s4Points: [
            "Curate a professional portfolio highlighting design/thought processes.",
            "Launch creative campaigns, open-source projects, or publications.",
            "Establish a distinctive personal style and creative voice."
        ],
        s4Kayra: "KAYRA Creative Incubator, student showcases, and exhibition grants."
    },

    "problem-solving": {
        num: "02 / SKILLS / 03",
        title: "PROBLEM SOLVING",
        subtitle: "Deconstruct complex challenges into manageable variables and craft resilient, high-impact solutions.",

        s1Title: "ROOT CAUSE ANALYSIS",
        s1Desc: "Distinguish symptoms from true underlying problems through systematic inquiry.",
        s1Points: [
            "Apply the '5 Whys' and MECE (Mutually Exclusive, Collectively Exhaustive) frameworks.",
            "Gather quantitative and qualitative data without cognitive bias.",
            "Map problem trees to pinpoint exact structural bottlenecks."
        ],
        s1Kayra: "Interactive analytical case studies and structured problem breakdown toolkits.",

        s2Title: "STRATEGIC OPTION GENERATION",
        s2Desc: "Formulate multiple viable solution pathways before committing resources.",
        s2Points: [
            "Conduct impact-versus-effort trade-off evaluations.",
            "Perform stress testing on proposed solutions against worst-case scenarios.",
            "Draft clear decision matrix frameworks for complex scenarios."
        ],
        s2Kayra: "Guided scenario analysis exercises and real-world strategy simulations.",

        s3Title: "EXECUTION & TACTICAL ADAPTATION",
        s3Desc: "Translate strategy into phased, measurable implementation plans.",
        s3Points: [
            "Define concrete KPIs, target milestones, and risk mitigation strategies.",
            "Execute pilot tests to gather real-world performance metrics.",
            "Pivot swiftly when empirical feedback contradicts initial assumptions."
        ],
        s3Kayra: "Project incubators that tackle real campus, community, or industry problems.",

        s4Title: "SYSTEMS THINKING & SCALABILITY",
        s4Desc: "Design long-term operational systems that prevent problems from recurring.",
        s4Points: [
            "Identify second- and third-order consequences within complex ecosystems.",
            "Automate repetitive workflows and build sustainable operating frameworks.",
            "Document playbooks so solutions scale independently of individual effort."
        ],
        s4Kayra: "Mentorship from industry problem solvers and policy/system design labs."
    },

    "leadership": {
        num: "02 / SKILLS / 04",
        title: "LEADERSHIP",
        subtitle: "Guide teams with empathy, strategic vision, ethical grounding, and decisive clarity.",

        s1Title: "SELF-MASTERY & ETHICAL FOUNDATION",
        s1Desc: "Establish core personal values, self-awareness, and emotional regulation.",
        s1Points: [
            "Identify personal biases, triggers, and core driving principles.",
            "Demonstrate radical accountability for personal mistakes and choices.",
            "Align daily behaviors with long-term ethical standards."
        ],
        s1Kayra: "Leadership self-assessment diagnostics, goal setting, and reflection logs.",

        s2Title: "TEAM DYNAMICS & EMPATHETIC MANAGEMENT",
        s2Desc: "Build psychological safety, delegate effectively, and motivate diverse individuals.",
        s2Points: [
            "Understand individual strength profiles (CliftonStrengths, MBTI context).",
            "Practice active delegation while offering necessary support structures.",
            "Give actionable, empathetic feedback that inspires growth rather than defense."
        ],
        s2Kayra: "Simulated group project leadership roles and team dynamics workshops.",

        s3Title: "STRATEGIC ALIGNMENT & CONFLICT RESOLUTION",
        s3Desc: "Unify teams around a compelling shared vision and navigate interpersonal tension.",
        s3Points: [
            "Translate high-level vision into clear team objectives and key results (OKRs).",
            "Resolve internal team friction swiftly using non-violent communication.",
            "Maintain composure and clear decision-making during high-stress crises."
        ],
        s3Kayra: "Real-time leadership roles in KAYRA's student initiatives and team challenges.",

        s4Title: "CULTURE BUILDING & TRANSFORMATIONAL VISION",
        s4Desc: "Build enduring organizational cultures and empower the next generation of leaders.",
        s4Points: [
            "Establish norms of excellence, inclusivity, and continuous learning.",
            "Identify and cultivate leadership potential in peers and juniors.",
            "Drive meaningful institutional or societal impact beyond short-term goals."
        ],
        s4Kayra: "Direct placement in KAYRA executive steering positions and alumni networks."
    },

    "adaptability": {
        num: "02 / SKILLS / 05",
        title: "ADAPTABILITY",
        subtitle: "Navigate ambiguity, bounce back from setbacks, and continuously evolve in volatile environments.",

        s1Title: "GROWTH MINDSET & RESILIENCE",
        s1Desc: "Reframe failure as informative data and cultivate cognitive flexibility.",
        s1Points: [
            "Recognize fixed-mindset triggers and actively reframe negative feedback.",
            "Build stress management routines to maintain emotional equilibrium.",
            "Conduct post-mortem analysis on failures without self-judgment."
        ],
        s1Kayra: "Mindset coaching exercises, resilience reflection logs, and stress-response guides.",

        s2Title: "RAPID UNLEARNING & RE-LEARNING",
        s2Desc: "Discard outdated knowledge quickly when new paradigms emerge.",
        s2Points: [
            "Develop accelerated learning frameworks (Feynman Technique, deliberate practice).",
            "Identify shift signals in tech, academic, and economic landscapes.",
            "Step comfortably into completely unfamiliar domains outside comfort zones."
        ],
        s2Kayra: "Cross-disciplinary micro-courses designed for rapid skill acquisition.",

        s3Title: "THIVING IN AMBIGUITY",
        s3Desc: "Make high-quality decisions with incomplete or rapidly changing information.",
        s3Points: [
            "Formulate probabilistic thinking models under uncertain conditions.",
            "Maintain progress even when clear instructions or roadmaps are absent.",
            "Pivot project scope smoothly without losing momentum or morale."
        ],
        s3Kayra: "Dynamic, changing-parameter simulations that test tactical flexibility under pressure.",

        s4Title: "AGILE TRANSFORMATION LEADERSHIP",
        s4Desc: "Help teams and organizations navigate disruptive change effortlessly.",
        s4Points: [
            "Guide peers through organizational changes with clear, comforting communication.",
            "Build resilient systems designed to absorb sudden external shocks.",
            "Proactively drive innovation before legacy methods become obsolete."
        ],
        s4Kayra: "Crisis management simulations and advisory roles in dynamic student ventures."
    },

    "technical-literacy": {
        num: "02 / SKILLS / 06",
        title: "TECHNICAL LITERACY",
        subtitle: "Harness modern computational tools, data systems, digital workflows, and emerging technologies.",

        s1Title: "DIGITAL FOUNDATIONS & ALGORITHMIC THINKING",
        s1Desc: "Grasp how digital systems operate, process data, and execute logic.",
        s1Points: [
            "Understand computational thinking (Decomposition, Pattern Recognition, Abstraction, Algorithms).",
            "Master cloud file architecture, digital hygiene, and cybersecurity basics.",
            "Analyze data structures and fundamental programming constructs."
        ],
        s1Kayra: "Curated tech fundamentals, interactive tool guides, and computer science logic maps.",

        s2Title: "HANDS-ON TOOL MASTERY & DEVELOPMENT",
        s2Desc: "Build functional prototypes using code, low-code engines, and modern workflows.",
        s2Points: [
            "Write modular code (Python, JavaScript, HTML/CSS) to solve real tasks.",
            "Utilize developer tools, version control (Git/GitHub), and API integrations.",
            "Leverage productivity suites, databases, and digital workspace tools effectively."
        ],
        s2Kayra: "Guided coding bootcamps, tech project sandboxes, and developer feedback sessions.",

        s3Title: "AI INTEGRATION & AUTOMATION WORKFLOWS",
        s3Desc: "Leverage AI models responsibly and automate tedious operational tasks.",
        s3Points: [
            "Master prompt engineering, contextual framing, and AI-assisted creation.",
            "Build automated scripts or workflows connecting multiple digital platforms.",
            "Evaluate technological solutions critically regarding data ethics, privacy, and bias."
        ],
        s3Kayra: "Advanced AI workflow labs, prompt engineering masterclasses, and tech stack builders.",

        s4Title: "FULL-STACK PRODUCT CREATION",
        s4Desc: "Architect, deploy, and maintain end-to-end digital solutions or platforms.",
        s4Points: [
            "Deploy functional web/mobile applications or data analytics dashboards.",
            "Maintain technical documentation and open-source or commercial repositories.",
            "Stay ahead of frontier technologies (Web3, spatial computing, AI agents)."
        ],
        s4Kayra: "Full-stack project incubators, tech hackathons, and direct product mentorship."
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
   ROADMAP MODAL LOGIC (VERTICAL & DETAILED)
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

function openRoadmap(skillKey) {
    const data = roadmapData[skillKey];
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

    roadmapOverlay.classList.add("active");
    slideControls.classList.add("hidden");
    isRoadmapOpen = true;

    // Scroll to top of overlay content
    roadmapOverlay.scrollTop = 0;
}

function closeRoadmap() {
    roadmapOverlay.classList.remove("active");
    slideControls.classList.remove("hidden");
    isRoadmapOpen = false;
}

/* =========================================
   SLIDE SWITCHING LOGIC
========================================= */

function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;

    if (isRoadmapOpen) closeRoadmap();

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

if (closeRoadmapButton) {
    closeRoadmapButton.addEventListener("click", closeRoadmap);
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
        const target = parseInt(e.currentTarget.getAttribute("data-slide-target"), 10);
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
    if (e.key === "Escape" && isRoadmapOpen) {
        closeRoadmap();
        return;
    }

    if (!isRoadmapOpen) {
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
