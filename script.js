// GLOBAL STATE & DATA
let currentSlideIndex = 3; // Starts on Pathways slide (04 / 07)
const totalSlides = 7;

const pathwaysData = {
  "10th": {
    categoryLabel: "03 / AFTER 10TH",
    options: [
      {
        id: "pcm",
        title: "Science (PCM)",
        difficulty: 88,
        institutions: [
          { name: "IIT Bombay", city: "Mumbai, India", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "IIT Delhi", city: "New Delhi, India", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" },
          { name: "BITS Pilani", city: "Pilani, India", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "pcb",
        title: "Science (PCB)",
        difficulty: 92,
        institutions: [
          { name: "AIIMS New Delhi", city: "New Delhi, India", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" },
          { name: "JIPMER", city: "Puducherry, India", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
          { name: "CMC Vellore", city: "Vellore, India", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "commerce",
        title: "Commerce & Finance",
        difficulty: 72,
        institutions: [
          { name: "SRCC Delhi", city: "New Delhi, India", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" },
          { name: "St. Xavier's", city: "Mumbai, India", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "Christ University", city: "Bengaluru, India", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "arts",
        title: "Arts & Humanities",
        difficulty: 65,
        institutions: [
          { name: "Lady Shri Ram", city: "New Delhi, India", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" },
          { name: "St. Stephen's", city: "New Delhi, India", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" },
          { name: "Loyola College", city: "Chennai, India", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" }
        ]
      }
    ]
  },
  "12th": {
    categoryLabel: "03 / AFTER 12TH",
    options: [
      {
        id: "engineering",
        title: "Engineering & Tech",
        difficulty: 90,
        institutions: [
          { name: "IIT Madras", city: "Chennai, India", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "IIT Kanpur", city: "Kanpur, India", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" },
          { name: "IIT Kharagpur", city: "Kharagpur, India", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "management",
        title: "Business & Management",
        difficulty: 80,
        institutions: [
          { name: "IIM Ahmedabad (IPM)", city: "Ahmedabad, India", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" },
          { name: "IIM Indore (IPM)", city: "Indore, India", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" },
          { name: "SSCBS Delhi", city: "New Delhi, India", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "design",
        title: "Design & Architecture",
        difficulty: 82,
        institutions: [
          { name: "NID Ahmedabad", city: "Ahmedabad, India", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80" },
          { name: "NIFT Delhi", city: "New Delhi, India", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "CEPT University", city: "Ahmedabad, India", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" }
        ]
      }
    ]
  },
  "global": {
    categoryLabel: "03 / GLOBAL OPTIONS",
    options: [
      {
        id: "us_top",
        title: "Ivy League & US Universities",
        difficulty: 96,
        institutions: [
          { name: "MIT", city: "Cambridge, USA", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "Stanford University", city: "Stanford, USA", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" },
          { name: "Harvard University", city: "Cambridge, USA", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "uk_top",
        title: "Oxbridge & UK Russell Group",
        difficulty: 94,
        institutions: [
          { name: "University of Oxford", city: "Oxford, UK", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" },
          { name: "University of Cambridge", city: "Cambridge, UK", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
          { name: "Imperial College", city: "London, UK", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80" }
        ]
      }
    ]
  }
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  updateSlideView();
  
  // Attach top navbar listeners
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      const slideIdx = parseInt(e.target.getAttribute("data-slide"));
      if (!isNaN(slideIdx)) {
        currentSlideIndex = slideIdx;
        updateSlideView();
      }
    });
  });
});

// MAIN SLIDE NAVIGATION
function navigateSlide(direction) {
  const newIndex = currentSlideIndex + direction;
  if (newIndex >= 0 && newIndex < totalSlides) {
    currentSlideIndex = newIndex;
    updateSlideView();
  }
}

function updateSlideView() {
  // Update slides
  document.querySelectorAll(".slide-page").forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlideIndex);
  });

  // Update top menu
  document.querySelectorAll(".nav-item").forEach((item, index) => {
    item.classList.toggle("active", index === currentSlideIndex);
  });

  // Update footer counter
  const paddedIndex = String(currentSlideIndex + 1).padStart(2, "0");
  const paddedTotal = String(totalSlides).padStart(2, "0");
  document.getElementById("slide-counter").innerText = `${paddedIndex} / ${paddedTotal}`;

  // Reset pathway view if returning to pathways slide
  if (currentSlideIndex === 3) {
    closePathDetails();
  }
}

// SUB-SLIDE DETAIL LOGIC (ACCESSIBLE ONLY ON ROW CLICK)
function openPathDetails(categoryKey) {
  const data = pathwaysData[categoryKey];
  if (!data) return;

  document.getElementById("detail-category-tag").innerText = data.categoryLabel;

  // Build menu options
  const menuContainer = document.getElementById("options-menu");
  menuContainer.innerHTML = "";

  data.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = `option-btn ${idx === 0 ? 'active' : ''}`;
    btn.innerText = option.title;
    btn.onclick = () => selectOption(data, option.id, btn);
    menuContainer.appendChild(btn);
  });

  // Load first option by default
  renderOptionContent(data.options[0]);

  // Transition to sub-slide
  document.getElementById("pathways-main").style.display = "none";
  document.getElementById("pathways-detail").style.display = "block";
}

function selectOption(categoryData, optionId, clickedBtn) {
  document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("active"));
  clickedBtn.classList.add("active");

  const selectedOpt = categoryData.options.find(o => o.id === optionId);
  renderOptionContent(selectedOpt);
}

function renderOptionContent(option) {
  document.getElementById("stream-name").innerText = option.title;
  document.getElementById("diff-percentage").innerText = `${option.difficulty}%`;

  // Animate difficulty bar
  const bar = document.getElementById("diff-bar-fill");
  bar.style.width = "0%";
  setTimeout(() => {
    bar.style.width = `${option.difficulty}%`;
  }, 40);

  // Render Top 3 Institutions
  const grid = document.getElementById("institutions-grid");
  grid.innerHTML = "";

  option.institutions.forEach((inst, index) => {
    const card = document.createElement("div");
    card.className = "inst-card";
    card.innerHTML = `
      <div class="card-img" style="background-image: url('${inst.img}');">
        <span class="rank-tag">TOP 0${index + 1}</span>
      </div>
      <div class="card-meta">
        <h4>${inst.name}</h4>
        <p>${inst.city}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function closePathDetails() {
  document.getElementById("pathways-detail").style.display = "none";
  document.getElementById("pathways-main").style.display = "block";
}
