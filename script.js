/**
 * KAYRA - Options & Streams Explorer Script
 */

document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================================================
       DATA SOURCE: OPTIONS, STREAMS, AND TOP INSTITUTIONS
       ========================================================================== */
    const optionsData = {
        "after-10th": {
            label: "01 / AFTER 10TH",
            title: "OPTIONS AFTER 10TH GRADE",
            description: "Choose your primary stream foundation or specialized diploma routes.",
            streams: [
                {
                    id: "science-10",
                    name: "Science (PCM / PCB)",
                    summary: "Focuses on fundamental physics, chemistry, mathematics, and biology.",
                    careers: ["Engineering Prep", "Medical Entrance Prep", "Research & Analytics", "Technology"],
                    skills: ["Analytical Reasoning", "Problem Solving", "Mathematical Aptitude"],
                    institutions: [
                        {
                            rank: "TOP SCHOOL",
                            name: "Delhi Public School (DPS), R.K. Puram",
                            location: "New Delhi, India",
                            desc: "Premier CBSE institution with outstanding science laboratory infrastructure.",
                            image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "TOP JUNIOR COLLEGE",
                            name: "St. Xavier's College (Junior)",
                            location: "Mumbai, India",
                            desc: "Highly distinguished state-board science program with rich academic tradition.",
                            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "INTERNATIONAL BOARD",
                            name: "The Doon School",
                            location: "Dehradun, India",
                            desc: "World-class IB & ISC curriculum focusing on research, leadership, and sciences.",
                            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
                        }
                    ]
                },
                {
                    id: "commerce-10",
                    name: "Commerce",
                    summary: "Focuses on accountancy, business studies, economics, and commercial mathematics.",
                    careers: ["Chartered Accountancy", "Finance & Banking", "Business Management", "Economics"],
                    skills: ["Financial Literacy", "Data Interpretation", "Commercial Acumen"],
                    institutions: [
                        {
                            rank: "TOP COMMERCE SCHOOL",
                            name: "The Cathedral & John Connon School",
                            location: "Mumbai, India",
                            desc: "Top-tier ISC institution famous for excellence in business and economic studies.",
                            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "PREMIER ACADEMY",
                            name: "Modern School, Barakhamba Road",
                            location: "New Delhi, India",
                            desc: "Leading CBSE center known for holistic business and trade foundations.",
                            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "INTERNATIONAL SCHOOL",
                            name: "UWC Mahindra College",
                            location: "Pune, India",
                            desc: "International Baccalaureate (IB) program with strong global economics emphasis.",
                            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                        }
                    ]
                },
                {
                    id: "arts-10",
                    name: "Arts & Humanities",
                    summary: "Explores history, political science, psychology, sociology, and literature.",
                    careers: ["Civil Services", "Psychology & Media", "Law Foundation", "Design & Arts"],
                    skills: ["Critical Thinking", "Written Communication", "Social Analysis"],
                    institutions: [
                        {
                            rank: "TOP HUMANITIES",
                            name: "Sanskriti School",
                            location: "New Delhi, India",
                            desc: "Renowned for creative, social science, and humanities education.",
                            image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "PREMIER JUNIOR COLLEGE",
                            name: "Fergusson College (Junior Division)",
                            location: "Pune, India",
                            desc: "Historic institution with rich academic heritage in liberal arts.",
                            image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "GLOBAL CURRICULUM",
                            name: "Dhirubhai Ambani International School",
                            location: "Mumbai, India",
                            desc: "Global IB humanities curriculum fostering creative and critical research.",
                            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                        }
                    ]
                }
            ]
        },
        "after-12th": {
            label: "02 / AFTER 12TH",
            title: "OPTIONS AFTER 12TH GRADE",
            description: "Explore undergraduate degree pathways and professional institutes.",
            streams: [
                {
                    id: "engineering-12",
                    name: "Engineering & Tech (B.Tech / B.E)",
                    summary: "Focuses on computer science, AI, mechanical, electrical, and civil engineering.",
                    careers: ["Software Development", "AI/ML Engineering", "Data Science", "Robotics"],
                    skills: ["Coding & Algorithms", "System Architecture", "Quantitative Logic"],
                    institutions: [
                        {
                            rank: "NIRF #1 INDIA",
                            name: "Indian Institute of Technology (IIT) Madras",
                            location: "Chennai, India",
                            desc: "India's premier engineering institute with elite research laboratories.",
                            image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "TOP TECH INSTITUTE",
                            name: "IIT Bombay",
                            location: "Mumbai, India",
                            desc: "Global hub for computer science, innovation, and startup entrepreneurship.",
                            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "PREMIER PRIVATE",
                            name: "BITS Pilani",
                            location: "Pilani, Rajasthan",
                            desc: "Top merit-based private tech institute known for zero-attendance policy and innovation.",
                            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
                        }
                    ]
                },
                {
                    id: "medicine-12",
                    name: "Medicine & Life Sciences (MBBS / BDS / Biotech)",
                    summary: "Healthcare, surgical practice, clinical research, biological technologies.",
                    careers: ["Physician / Surgeon", "Medical Researcher", "Biotech Scientist", "Pharmacologist"],
                    skills: ["Clinical Diagnosis", "Biological Research", "High Precision Under Pressure"],
                    institutions: [
                        {
                            rank: "RANK 1 MEDICAL",
                            name: "All India Institute of Medical Sciences (AIIMS)",
                            location: "New Delhi, India",
                            desc: "The pinnacle of medical education, healthcare practice, and research in South Asia.",
                            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "TOP MEDICAL COLLEGE",
                            name: "Christian Medical College (CMC)",
                            location: "Vellore, Tamil Nadu",
                            desc: "World-renowned institution recognized for clinical training and patient care.",
                            image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "TOP RESEARCH CENTRE",
                            name: "JIPMER",
                            location: "Puducherry, India",
                            desc: "National institute delivering elite medical education and research.",
                            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80"
                        }
                    ]
                },
                {
                    id: "management-12",
                    name: "Commerce & Management (B.Com / IPM / BBA)",
                    summary: "Business administration, corporate finance, marketing, and strategy.",
                    careers: ["Investment Banker", "Management Consultant", "Marketing Strategist", "Entrepreneur"],
                    skills: ["Financial Analysis", "Strategic Planning", "Leadership"],
                    institutions: [
                        {
                            rank: "TOP COMMERCE COLLEGE",
                            name: "Shri Ram College of Commerce (SRCC)",
                            location: "New Delhi, India",
                            desc: "The premier institution for business, economics, and commerce studies in India.",
                            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "INTEGRATED MBA",
                            name: "Indian Institute of Management (IIM) Indore",
                            location: "Indore, Madhya Pradesh",
                            desc: "Pioneer of the 5-year Integrated Program in Management (IPM) right after 12th.",
                            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "PREMIER MANAGEMENT",
                            name: "St. Xavier's College (Autonomous)",
                            location: "Mumbai, India",
                            desc: "Top-ranked for Management Studies (BMS) and financial economics.",
                            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                        }
                    ]
                }
            ]
        },
        "global-options": {
            label: "03 / GLOBAL OPTIONS",
            title: "GLOBAL UNDERGRADUATE PATHWAYS",
            description: "Study at premier global universities across the US, UK, and Europe.",
            streams: [
                {
                    id: "us-undergrad",
                    name: "United States (Liberal Arts & STEM)",
                    summary: "Flexible degree structure combining major specializations with liberal arts exploration.",
                    careers: ["Tech & Product Management", "Quantitative Finance", "Global Research", "Startups"],
                    skills: ["Interdisciplinary Thinking", "Research Innovation", "Global Leadership"],
                    institutions: [
                        {
                            rank: "WORLD RANK #1",
                            name: "Massachusetts Institute of Technology (MIT)",
                            location: "Cambridge, MA, USA",
                            desc: "Global leader in technology, engineering, physical sciences, and AI innovation.",
                            image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "IVY LEAGUE PREMIER",
                            name: "Harvard University",
                            location: "Cambridge, MA, USA",
                            desc: "World-renowned liberal arts, economics, sciences, and political leadership development.",
                            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "SILICON VALLEY HUB",
                            name: "Stanford University",
                            location: "Stanford, CA, USA",
                            desc: "Heart of tech entrepreneurship, computer science, and cutting-edge engineering.",
                            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
                        }
                    ]
                },
                {
                    id: "uk-undergrad",
                    name: "United Kingdom (UCAS Direct Degrees)",
                    summary: "3-year focused, specialized degrees in specific fields from day one.",
                    careers: ["Investment Management", "Law & Jurisprudence", "Academic Research", "International Politics"],
                    skills: ["In-depth Subject Expertise", "Academic Writing", "Critical Debating"],
                    institutions: [
                        {
                            rank: "WORLD RANKING TOP 3",
                            name: "University of Oxford",
                            location: "Oxford, United Kingdom",
                            desc: "Historic tutorial system offering world-class focus in humanities, PPE, and sciences.",
                            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "WORLD RANKING TOP 3",
                            name: "University of Cambridge",
                            location: "Cambridge, United Kingdom",
                            desc: "World-famous collegiate university distinguished in mathematics, tech, and natural sciences.",
                            image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80"
                        },
                        {
                            rank: "GLOBAL ECONOMICS HUB",
                            name: "London School of Economics (LSE)",
                            location: "London, United Kingdom",
                            desc: "Global authority in economics, social science, international relations, and finance.",
                            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
                        }
                    ]
                }
            ]
        }
    };

    /* ==========================================================================
       SLIDE SYSTEM CONTROLLER
       ========================================================================== */
    const slides = document.querySelectorAll(".slide");
    const navButtons = document.querySelectorAll(".nav-links button");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    const slideCounter = document.getElementById("slideCounter");
    const prevBtn = document.getElementById("previousSlide");
    const nextBtn = document.getElementById("nextSlide");
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlide(index) {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;

        currentSlide = index;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentSlide);
        });

        navButtons.forEach((btn, i) => {
            btn.classList.toggle("active", i === currentSlide);
        });

        slideCounter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    }

    /* NAV CLICK HANDLERS */
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const slideIdx = parseInt(button.getAttribute("data-slide"));
            updateSlide(slideIdx);
        });
    });

    mobileNavLinks.forEach(button => {
        button.addEventListener("click", () => {
            const slideIdx = parseInt(button.getAttribute("data-slide"));
            updateSlide(slideIdx);
            closeMobileMenu();
        });
    });

    /* HERO BUTTONS */
    document.querySelectorAll("[data-slide-target]").forEach(btn => {
        btn.addEventListener("click", () => {
            const target = parseInt(btn.getAttribute("data-slide-target"));
            updateSlide(target);
        });
    });

    prevBtn.addEventListener("click", () => updateSlide(currentSlide - 1));
    nextBtn.addEventListener("click", () => updateSlide(currentSlide + 1));

    /* KEYBOARD NAVIGATION */
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") updateSlide(currentSlide + 1);
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") updateSlide(currentSlide - 1);
    });

    /* ==========================================================================
       MOBILE MENU HANDLER
       ========================================================================== */
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    function toggleMobileMenu() {
        const isOpen = mobileMenu.classList.contains("open");
        if (isOpen) {
            closeMobileMenu();
        } else {
            mobileMenu.classList.add("open");
            menuButton.textContent = "CLOSE";
        }
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove("open");
        menuButton.textContent = "MENU";
    }

    menuButton.addEventListener("click", toggleMobileMenu);

    /* ==========================================================================
       OPTIONS & EXPLORER MODAL CONTROLLER
       ========================================================================== */
    const optionsOverlay = document.getElementById("optionsOverlay");
    const closeOptionsBtn = document.getElementById("closeOptions");
    const categoryLabel = document.getElementById("optionCategoryLabel");
    const categoryTitle = document.getElementById("optionCategoryTitle");
    const categoryDesc = document.getElementById("optionCategoryDesc");
    const container = document.getElementById("optionsStreamsContainer");

    /* OPEN MODAL FOR OPTION ROW */
    document.querySelectorAll(".pathway-row").forEach(row => {
        row.addEventListener("click", () => {
            const optionKey = row.getAttribute("data-option");
            openOptionExplorer(optionKey);
        });
    });

    function openOptionExplorer(key) {
        const data = optionsData[key];
        if (!data) return;

        categoryLabel.textContent = data.label;
        categoryTitle.textContent = data.title;
        categoryDesc.textContent = data.description;

        // BUILD STREAMS TABS & PANES
        renderExplorerTabs(data.streams);

        optionsOverlay.classList.add("open");
    }

    function renderExplorerTabs(streams) {
        container.innerHTML = "";

        // Tab Navigation Bar
        const tabsNav = document.createElement("div");
        tabsNav.className = "stream-tabs";

        // Tab Panes Container
        const panesWrapper = document.createElement("div");

        streams.forEach((stream, idx) => {
            // Create Tab Button
            const tabBtn = document.createElement("button");
            tabBtn.className = `tab-button ${idx === 0 ? 'active' : ''}`;
            tabBtn.textContent = stream.name;
            tabBtn.addEventListener("click", () => switchTab(idx));
            tabsNav.appendChild(tabBtn);

            // Create Tab Content Pane
            const pane = document.createElement("div");
            pane.className = `stream-pane ${idx === 0 ? 'active' : ''}`;
            pane.setAttribute("data-pane-index", idx);

            pane.innerHTML = `
                <div class="stream-header-box">
                    <h3>${stream.name}</h3>
                    <p>${stream.summary}</p>
                </div>

                <div class="stream-details-grid">
                    <div class="detail-card">
                        <h4>CAREER DESTINATIONS</h4>
                        <ul>
                            ${stream.careers.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="detail-card">
                        <h4>KEY SKILLS BUILT</h4>
                        <ul>
                            ${stream.skills.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="institutions-section-title">TOP INSTITUTIONS</div>
                
                <div class="institutions-grid">
                    ${stream.institutions.map(inst => `
                        <div class="institution-card">
                            <div class="institution-image-wrapper">
                                <img class="institution-image" src="${inst.image}" alt="${inst.name}" loading="lazy" />
                            </div>
                            <div class="institution-info">
                                <div class="institution-rank">${inst.rank}</div>
                                <div class="institution-name">${inst.name}</div>
                                <div class="institution-location">${inst.location}</div>
                                <div class="institution-desc">${inst.desc}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            panesWrapper.appendChild(pane);
        });

        container.appendChild(tabsNav);
        container.appendChild(panesWrapper);
    }

    function switchTab(activeIndex) {
        const buttons = container.querySelectorAll(".tab-button");
        const panes = container.querySelectorAll(".stream-pane");

        buttons.forEach((btn, i) => btn.classList.toggle("active", i === activeIndex));
        panes.forEach((pane, i) => pane.classList.toggle("active", i === activeIndex));
    }

    /* CLOSE MODAL */
    closeOptionsBtn.addEventListener("click", () => {
        optionsOverlay.classList.remove("open");
    });

    /* CLOSE ON ESCAPE KEY */
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && optionsOverlay.classList.contains("open")) {
            optionsOverlay.classList.remove("open");
        }
    });

    // Initialize first slide state
    updateSlide(0);
});
