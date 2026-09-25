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
   ROADMAP DATA (6 SKILLS)
========================================= */

const roadmapData = {
    "communication": {
        num: "02 / SKILLS / 01",
        title: "COMMUNICATION",
        subtitle: "Master articulate speech, active listening, and impact.",
        s1Desc: "Understand non-verbal cues & structural clarity.",
        s1Kayra: "Kayra's foundational diagnostics and real-time reflection logs.",
        s2Desc: "Public speaking exercises & structured essay writing.",
        s2Kayra: "Safe peer-to-peer feedback circles and articulation challenges.",
        s3Desc: "High-stakes negotiations, debate & leadership storytelling.",
        s3Kayra: "Direct mentorship sessions with experienced student leaders."
    },
    "creativity": {
        num: "02 / SKILLS / 02",
        title: "CREATIVITY",
        subtitle: "Unlock original thinking and unconventional problem solving.",
        s1Desc: "Divergent thinking patterns & curiosity habits.",
        s1Kayra: "Daily lateral thinking prompts and concept mapping tools.",
        s2Desc: "Interdisciplinary project building & rapid prototyping.",
        s2Kayra: "Collaborative design sprints across different domain fields.",
        s3Desc: "Executing original ideas into real-world projects.",
        s3Kayra: "Showcasing platforms to turn creative projects into portfolios."
    },
    "problem-solving": {
        num: "02 / SKILLS / 03",
        title: "PROBLEM SOLVING",
        subtitle: "Deconstruct complexity into clear, actionable solutions.",
        s1Desc: "Root cause analysis & analytical reasoning.",
        s1Kayra: "Real-world case studies and analytical frameworks.",
        s2Desc: "Strategic formulation & multi-perspective testing.",
        s2Kayra: "Interactive problem-solving challenges with expert guidance.",
        s3Desc: "Building resilient systems & long-term solution strategy.",
        s3Kayra: "Project incubators that tackle real societal/academic challenges."
    },
    "leadership": {
        num: "02 / SKILLS / 04",
        title: "LEADERSHIP",
        subtitle: "Guide teams with empathy, decisiveness, and vision.",
        s1Desc: "Self-awareness, integrity, and personal accountability.",
        s1Kayra: "Leadership self-assessment tools and goal setting.",
        s2Desc: "Team dynamics, delegation, and empathetic listening.",
        s2Kayra: "Simulated team initiatives and group project leadership roles.",
        s3Desc: "Strategic visioning, conflict resolution & culture building.",
        s3Kayra: "Direct leadership roles in Kayra's student-led initiatives."
    },
    "adaptability": {
        num: "02 / SKILLS / 05",
        title: "ADAPTABILITY",
        subtitle: "Navigate ambiguity and thrive in changing environments.",
        s1Desc: "Building a growth mindset & emotional resilience.",
        s1Kayra: "Mindset coaching exercises and stress management guides.",
        s2Desc: "Rapid learning techniques & unlearning old habits.",
        s2Kayra: "Cross-disciplinary micro-courses designed for fast adaptation.",
        s3Desc: "Thriving under uncertainty & leading through transition.",
        s3Kayra: "Dynamic real-world simulations that test tactical flexibility."
    },
    "technical-literacy": {
        num: "02 / SKILLS / 06",
        title: "TECHNICAL LITERACY",
        subtitle: "Harness modern tools, code, and digital workflows.",
        s1Desc: "Understanding digital workflows & algorithmic thinking.",
        s1Kayra: "Curated tech fundamentals and interactive digital tool guides.",
        s2Desc: "Hands-on experience with modern tools & basic development.",
        s2Kayra: "Guided coding workshops & tech project sandboxes.",
        s3Desc: "Building automated workflows & leveraging AI responsibly.",
        s3Kayra: "Advanced tech bootcamps & digital product creation tracks."
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
   ROADMAP MODAL LOGIC
========================================= */

function openRoadmap(skillKey) {
    const data = roadmapData[skillKey];
    if (!data) return;

    document.getElementById("roadmapNumber").textContent = data.num;
    document.getElementById("roadmapTitle").innerHTML = `${data.title} <span class="highlight">ROADMAP</span>`;
    document.getElementById("roadmapSubtitle").textContent = data.subtitle;

    document.getElementById("step1Desc").textContent = data.s1Desc;
    document.getElementById("step1Kayra").textContent = data.s1Kayra;

    document.getElementById("step2Desc").textContent = data.s2Desc;
    document.getElementById("step2Kayra").textContent = data.s2Kayra;

    document.getElementById("step3Desc").textContent = data.s3Desc;
    document.getElementById("step3Kayra").textContent = data.s3Kayra;

    roadmapOverlay.classList.add("active");
    slideControls.classList.add("hidden");
    isRoadmapOpen = true;
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
