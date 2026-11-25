/* ============================================================
   CONFIG — DATA PORTFOLIO  (assets/config.js)
   >>> INI FILE YANG KAMU EDIT <<<
   Nama, foto, link, skills, projects, certificates,
   journey, dan kontak — semua diganti di file ini saja.
   Jangan edit assets/script.js kalau tidak perlu.
   ============================================================ */
/* ============================================================
   CONFIG — Edit everything about this portfolio right here.
   Name, photo, bio links, skills, projects, certificates,
   journey and contact info all live in this one object.
   ============================================================ */
var CONFIG = {
  name: "Dian",
  role: "IT Student | Developer | Technology Enthusiast",
  about:
    "I'm an IT student passionate about technology, programming, and innovation. I enjoy exploring new ideas, developing digital solutions, and continuously learning to create meaningful experiences through technology.",
  profilePhoto: "assets/profile.png", // e.g. "assets/profile.jpg" — leave "" to show the placeholder
  email: "apriliandidian4@gmail.com", // ← replace with your real email
  socials: {
    github: "https://github.com/apriliandi21", // ← paste your GitHub profile URL
    linkedin: "https://www.linkedin.com/", // ← paste your LinkedIn profile URL
    instagram: "https://www.instagram.com/apriliandisa",
    whatsapp: "https://wa.me/6285793717583", // ← add your number, e.g. https://wa.me/62812xxxxxxx
  },
  interests: [
    {
      icon: "",
      title: "Web Development",
      desc: "Building responsive, modern websites and web apps — from clean layouts to interactive interfaces.",
    },
    {
      icon: "",
      title: "Artificial Intelligence",
      desc: "How intelligent systems can solve real problems and make technology feel more human.",
    },
    {
      icon: "",
      title: "Machine Learning",
      desc: "Teaching machines to learn patterns from data and make useful predictions.",
    },
    {
      icon: "",
      title: "Deep Learning",
      desc: "Neural networks and the ideas behind today's most powerful AI models.",
    },
    {
      icon: "",
      title: "Computer Vision",
      desc: "Helping computers see and understand images — detection, recognition, and beyond.",
    },
    {
      icon: "",
      title: "Software Development",
      desc: "Designing and building software with clean structure and maintainable code.",
    },
    {
      icon: "",
      title: "Graphic Design",
      desc: "Designing posters, social media content, and visual identities that are clean, clear, and eye-catching.",
    },
  ],
  skillGroups: [
    {
      icon: "",
      title: "Programming",
      note: "Languages I write code in.",
      skills: ["Python", "JavaScript", "HTML", "CSS", "PHP", "Dart"],
    },
    {
      icon: "",
      title: "Web Development",
      note: "Building for the modern web.",
      skills: [
        "Frontend Development",
        "Backend Development",
        "Responsive Web Design",
        "Mobile Programming",
      ],
    },
    {
      icon: "",
      title: "Frameworks",
      note: "Frameworks I build with.",
      skills: ["CodeIgniter", "Laravel", "Flutter"],
    },
    {
      icon: "",
      title: "Graphic Design",
      note: "Visual design for print & social media.",
      skills: [
        "Poster Design",
        "Social Media Design",
        "Logo & Branding",
        "Flyer & Banner",
      ],
    },
    {
      icon: "",
      title: "AI & Machine Learning",
      note: "My main area of exploration.",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Object Detection",
        "YOLO",
        "CNN",
      ],
    },
    {
      icon: "",
      title: "Tools",
      note: "What I use day to day.",
      skills: [
        "Visual Studio Code",
        "GitHub",
        "Roboflow",
        "Canva",
        "Laragon",
        "FLuttlab",
      ],
    },
    {
      icon: "",
      title: "Database",
      note: "Storing and managing data.",
      skills: ["SQLite", "MySQL", "Supabase"],
    },
    {
      icon: "",
      title: "Teaching & Mentoring",
      note: "Sharing what I learn — while still learning myself.",
      skills: ["Teaching", "Mentoring", "Explaining Concepts"],
    },
  ],
  projectCategories: [
    "All Projects",
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Graphic Design",
  ],
  // SCREENSHOT PROYEK: isi field image dengan path screenshot kamu,
  // contoh: image:"assets/project-portfolio.png"
  // Taruh file screenshot-nya di folder assets/ (sebelah config.js ini).
  // Kalau image masih "" (kosong), thumbnail tetap pakai inisial huruf.
  projects: [
    {
      title: "Personal Portfolio Website",
      category: "Web Development",
      icon: "",
      color: "#16233F",
      image: "",
      desc: "This very website — a modern dark portfolio with project filtering, a light mode, and a single CONFIG that drives all content.",
      long: "A fully responsive personal portfolio built with semantic HTML, modern CSS, and vanilla JavaScript. All content (projects, skills, certificates, journey, socials) is rendered from one central CONFIG object, so updating the site means editing data — not hunting through markup. Includes category filtering, detail modals, scroll-reveal animations, and a dark/light theme toggle.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "",
      demo: "",
    },
    {
      title: "Object Detection Experiment",
      category: "Artificial Intelligence",
      icon: "",
      color: "#1B2A1E",
      image: "",
      desc: "A computer vision experiment exploring object detection with YOLO — training, testing, and evaluating a model on image data.",
      long: "A learning project in computer vision: preparing and annotating image datasets, training a YOLO object-detection model, and reviewing its predictions to understand accuracy, confidence, and failure cases. Documented as part of my journey into applied AI. Replace this placeholder with your real project details, repository, and results.",
      tech: ["Python", "YOLO", "Roboflow"],
      github: "",
      demo: "",
    },
    {
      title: "Machine Learning Study Notes App",
      category: "Machine Learning",
      icon: "",
      color: "#2A2118",
      image: "",
      desc: "A small study companion concept for organizing ML concepts, experiments, and results while learning the fundamentals.",
      long: "A placeholder project slot for a machine learning build: a small app to log experiments, datasets, and model results while studying ML fundamentals — classification, evaluation metrics, and simple pipelines. Swap in your real ML project here: describe the problem, the data, the approach, and what you learned.",
      tech: ["Python", "SQLite"],
      github: "",
      demo: "",
    },
    {
      title: "Graphic Design — Poster & Social Media Kit",
      category: "Graphic Design",
      icon: "",
      color: "#241A33",
      image: "",
      desc: "A graphic design project: posters and social media visuals with a clean hierarchy, balanced spacing, and a strong visual identity.",
      long: "Posters, flyers, and social media content designed with attention to layout, typography, and colour. Open the Google Drive folder from the button below to see the designs I have made. Replace this text with your real design work and fill the drive field in CONFIG with your Drive folder link.",
      tech: ["Canva", "Poster Design", "Branding"],
      github: "",
      demo: "",
      drive: "",
    }, // <- isi drive: link folder Google Drive desain kamu, contoh: drive:"https://drive.google.com/drive/folders/xxxx"
  ],
  journey: [
    {
      tag: "Education",
      title: "Studying Information Technology",
      desc: "I'm currently an IT student, building my foundation in computing — programming, systems, databases, and how software is designed and built.",
    },
    {
      tag: "Learning Experience",
      title: "Learning to Code, Step by Step",
      desc: "From my first lines of HTML and Python to building small programs and web pages, I've been learning by doing: tutorials, coursework, and lots of practice.",
    },
    {
      tag: "Projects",
      title: "Building Real Projects",
      desc: "I turn what I learn into projects — websites, experiments, and prototypes — because building is where the lessons actually stick.",
    },
    {
      tag: "Learning Experience",
      title: "Exploring Artificial Intelligence",
      desc: "My curiosity led me into AI and machine learning: how models learn from data, and how computer vision lets software understand images.",
    },
    {
      tag: "Academic Activities",
      title: "Growing Through Campus Life",
      desc: "Coursework, assignments, and collaboration with classmates keep sharpening both my technical skills and how I communicate ideas.",
    },
    {
      tag: "Projects",
      title: "What's Next",
      desc: "Keep learning, keep building, and grow this portfolio with bigger, better projects — one step at a time.",
    },
  ],
  certificates: [
    {
      title: "Your Certificate Title Here",
      org: "Issuing Organization",
      year: "Year",
      icon: "",
      color: "#16233F",
      note: "Replace this placeholder with a real certificate: add its title, the organization that issued it, and the year you earned it.",
    },
    {
      title: "Course Completion — Placeholder",
      org: "Online Learning Platform",
      year: "Year",
      icon: "",
      color: "#1B2A1E",
      note: "Finished an online course or training? Add it here so visitors can see what you've completed.",
    },
    {
      title: "Achievement — Placeholder",
      org: "Event / Institution",
      year: "Year",
      icon: "",
      color: "#2A2118",
      note: "Competitions, workshops, seminars, or other achievements belong here. Edit CONFIG.certificates to add yours.",
    },
  ],
};
