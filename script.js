// DATABASE STRUCTURE FOR SUB-SLIDES
const database = {
  "10th": {
    label: "03 / AFTER 10TH",
    options: [
      {
        id: "pcm",
        name: "Science (PCM)",
        difficulty: 85,
        institutions: [
          { name: "IIT Bombay", location: "Mumbai, India", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "IIT Delhi", location: "New Delhi, India", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" },
          { name: "BITS Pilani", location: "Pilani, India", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "pcb",
        name: "Science (PCB)",
        difficulty: 92,
        institutions: [
          { name: "AIIMS New Delhi", location: "New Delhi, India", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" },
          { name: "JIPMER", location: "Puducherry, India", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
          { name: "CMC Vellore", location: "Vellore, India", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "commerce",
        name: "Commerce & Finance",
        difficulty: 70,
        institutions: [
          { name: "SRCC", location: "Delhi University", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" },
          { name: "St. Xavier's College", location: "Mumbai, India", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "Christ University", location: "Bengaluru, India", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "arts",
        name: "Humanities / Arts",
        difficulty: 65,
        institutions: [
          { name: "Lady Shri Ram College", location: "New Delhi, India", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" },
          { name: "St. Stephen's College", location: "Delhi University", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "Presidency University", location: "Kolkata, India", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" }
        ]
      }
    ]
  },
  "12th": {
    label: "03 / AFTER 12TH",
    options: [
      {
        id: "eng",
        name: "Engineering & Tech",
        difficulty: 90,
        institutions: [
          { name: "IIT Madras", location: "Chennai, India", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "IIT Kanpur", location: "Kanpur, India", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" },
          { name: "IIT Kharagpur", location: "Kharagpur, India", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "mgmt",
        name: "Business & Management",
        difficulty: 78,
        institutions: [
          { name: "IIM Ahmedabad (IPM)", location: "Ahmedabad, India", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" },
          { name: "IIM Indore (IPM)", location: "Indore, India", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" },
          { name: "Shaheed Sukhdev (SSCBS)", location: "New Delhi, India", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "design",
        name: "Design & Architecture",
        difficulty: 82,
        institutions: [
          { name: "NID Ahmedabad", location: "Ahmedabad, India", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80" },
          { name: "NIFT Delhi", location: "New Delhi, India", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "CEPT University", location: "Ahmedabad, India", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" }
        ]
      }
    ]
  },
  "global": {
    label: "03 / GLOBAL OPTIONS",
    options: [
      {
        id: "us",
        name: "Ivy League & US Top Universities",
        difficulty: 96,
        institutions: [
          { name: "MIT", location: "Cambridge, USA", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
          { name: "Stanford University", location: "Stanford, USA", image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80" },
          { name: "Harvard University", location: "Cambridge, USA", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "uk",
        name: "UK Oxbridge & Russell Group",
        difficulty: 94,
        institutions: [
          { name: "University of Oxford", location: "Oxford, UK", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80" },
          { name: "University of Cambridge", location: "Cambridge, UK", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
          { name: "Imperial College London", location: "London, UK", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80" }
        ]
      }
    ]
  }
};

let activeCategoryKey = null;

function openCategory(key) {
  activeCategoryKey = key;
  const categoryData = database[key];

  // Update tag
  document.getElementById('detail-tag').innerText = categoryData.label;

  // Populate streams list
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  categoryData.options.forEach((opt, index) => {
    const btn = document.createElement('div');
    btn.className = `option-item ${index === 0 ? 'active' : ''}`;
    btn.innerText = opt.name;
    btn.onclick = () => selectOption(key, opt.id, btn);
    optionsContainer.appendChild(btn);
  });

  // Load first option by default
  renderOptionSpecs(categoryData.options[0]);

  // Transition slides
  document.getElementById('slide-main').classList.remove('active');
  document.getElementById('slide-detail').classList.add('active');
}

function selectOption(categoryKey, optionId, element) {
  // Update active state in left menu
  document.querySelectorAll('.option-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');

  // Find option and render specs
  const category = database[categoryKey];
  const selected = category.options.find(o => o.id === optionId);
  renderOptionSpecs(selected);
}

function renderOptionSpecs(option) {
  // Update Title & Difficulty
  document.getElementById('stream-title').innerText = option.name;
  document.getElementById('diff-value').innerText = `${option.difficulty}%`;
  
  // Animate difficulty bar
  const bar = document.getElementById('diff-bar');
  bar.style.width = '0%';
  setTimeout(() => {
    bar.style.width = `${option.difficulty}%`;
  }, 50);

  // Render Institutions
  const instContainer = document.getElementById('institutions-container');
  instContainer.innerHTML = '';

  option.institutions.forEach((inst, idx) => {
    const card = document.createElement('div');
    card.className = 'inst-card';
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${inst.image}" alt="${inst.name}" />
        <div class="rank-badge">TOP 0${idx + 1}</div>
      </div>
      <div class="card-info">
        <h5>${inst.name}</h5>
        <p>${inst.location}</p>
      </div>
    `;
    instContainer.appendChild(card);
  });
}

function goBackMain() {
  document.getElementById('slide-detail').classList.remove('active');
  document.getElementById('slide-main').classList.add('active');
}
