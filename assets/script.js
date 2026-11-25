/* ============================================================
   SCRIPT — LOGIKA PORTFOLIO  (assets/script.js)
   File ini menjalankan websitenya: render data dari CONFIG,
   filter proyek, modal, tema, menu mobile, dan Download CV.
   Biasanya file ini TIDAK perlu diedit.
   Data yang diedit ada di assets/config.js
   ============================================================ */
/* ---------- helpers ---------- */
function el(html) {
  var d = document.createElement("div");
  d.innerHTML = html;
  return d.firstElementChild;
}
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

var ICONS = {
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 1.28.41.36.73 1.1.73 2.22v3.29c0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.09h4.56V23H.22V8.09zM8.34 8.09h4.37v2.04h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.24h-4.55v-7.3c0-1.74-.03-3.99-2.43-3.99-2.44 0-2.81 1.9-2.81 3.86V23H8.34V8.09z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0a12 12 0 0 0-10.1 17.9L0 24l6.3-1.8A12 12 0 1 0 12 0zm0 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1.1 1.1-3.6-.3-.4a9.8 9.8 0 1 1 8.3 4.5zm5.4-7.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.1-.8 1-.9 1.1-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.7-1.4a.6.6 0 0 0 0-.6c-.1-.3-.7-1.7-1-2.3s-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4A3.3 3.3 0 0 0 6.5 9c0 1.9 1.4 3.7 1.6 4s2.7 4.2 6.6 5.9a22 22 0 0 0 2.2.8 5.3 5.3 0 0 0 2.4.2 3.9 3.9 0 0 0 2.6-1.6 3.2 3.2 0 0 0 .2-1.6c-.1-.1-.3-.2-.7-.4z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm10 8.36L3.2 6h17.6L12 12.36zM21 8.24l-9 6.43-9-6.43V18h18V8.24z"/></svg>',
};

/* ---------- socials ---------- */
function socialLinksHTML() {
  var s = CONFIG.socials;
  return (
    '<a href="' +
    esc(s.github) +
    '" target="_blank" rel="noopener" aria-label="GitHub">' +
    ICONS.github +
    "</a>" +
    '<a href="' +
    esc(s.linkedin) +
    '" target="_blank" rel="noopener" aria-label="LinkedIn">' +
    ICONS.linkedin +
    "</a>" +
    '<a href="' +
    esc(s.instagram) +
    '" target="_blank" rel="noopener" aria-label="Instagram">' +
    ICONS.instagram +
    "</a>" +
    '<a href="mailto:' +
    esc(CONFIG.email) +
    '" aria-label="Email">' +
    ICONS.mail +
    "</a>"
  );
}
document.getElementById("heroSocials").innerHTML = socialLinksHTML();
document.getElementById("footSocials").innerHTML = socialLinksHTML();

/* ---------- profile photo ---------- */
if (CONFIG.profilePhoto) {
  var pi = document.getElementById("profileImg");
  pi.src = CONFIG.profilePhoto;
  pi.style.display = "block";
  document.getElementById("photoPlaceholder").style.display = "none";
}
/* ---------- interests ---------- */
var ig = document.getElementById("interestGrid");
CONFIG.interests.forEach(function (it, i) {
  var num = ("0" + (i + 1)).slice(-2);
  var iconHTML = it.icon
    ? '<div class="ci">' + it.icon + "</div>"
    : '<div class="ci ci-num">' + num + "</div>";
  ig.appendChild(
    el(
      '<article class="card reveal">' +
        iconHTML +
        "<h3>" +
        esc(it.title) +
        "</h3><p>" +
        esc(it.desc) +
        "</p></article>",
    ),
  );
});

/* ---------- skills ---------- */
var sg = document.getElementById("skillGrid");
CONFIG.skillGroups.forEach(function (g) {
  var chips = g.skills
    .map(function (s) {
      return '<span class="chip">' + esc(s) + "</span>";
    })
    .join("");
  sg.appendChild(
    el(
      '<div class="skill-group reveal"><h3>' +
        (g.icon ? "<span>" + g.icon + "</span>" : "") +
        esc(g.title) +
        "</h3><p>" +
        esc(g.note) +
        '</p><div class="chips">' +
        chips +
        "</div></div>",
    ),
  );
});

/* ---------- projects ---------- */
var filtersEl = document.getElementById("projectFilters");
var gridEl = document.getElementById("projectGrid");
CONFIG.projectCategories.forEach(function (cat, i) {
  var b = document.createElement("button");
  b.type = "button";
  b.className = "filter-btn" + (i === 0 ? " active" : "");
  b.textContent = cat;
  b.addEventListener("click", function () {
    filtersEl.querySelectorAll(".filter-btn").forEach(function (x) {
      x.classList.remove("active");
    });
    b.classList.add("active");
    gridEl.querySelectorAll(".proj").forEach(function (card) {
      card.classList.toggle(
        "hidden-card",
        !(cat === "All Projects" || card.getAttribute("data-cat") === cat),
      );
    });
  });
  filtersEl.appendChild(b);
});
CONFIG.projects.forEach(function (p, idx) {
  var tech = p.tech
    .map(function (t) {
      return "<span>" + esc(t) + "</span>";
    })
    .join("");
  var links =
    '<button type="button" class="link-btn" data-details="' +
    idx +
    '">View Details →</button>';
  if (p.github)
    links +=
      '<a class="link-btn" href="' +
      esc(p.github) +
      '" target="_blank" rel="noopener">GitHub ↗</a>';
  if (p.demo)
    links +=
      '<a class="link-btn" href="' +
      esc(p.demo) +
      '" target="_blank" rel="noopener">Live Demo ↗</a>';
  var initials = p.title
    .split(" ")
    .filter(function (w) {
      return /^[A-Za-z]/.test(w);
    })
    .slice(0, 2)
    .map(function (w) {
      return w.charAt(0).toUpperCase();
    })
    .join("");
  var thumbInner = p.icon
    ? p.icon
    : '<span class="proj-initials">' + initials + "</span>";
  if (p.image) {
    thumbInner +=
      '<img class="proj-img" src="' +
      esc(p.image) +
      '" alt="Screenshot of ' +
      esc(p.title) +
      '" loading="lazy" onerror="this.style.display=\'none\'">';
  }
  var card = el(
    '<article class="card proj reveal" data-cat="' +
      esc(p.category) +
      '">' +
      '<div class="proj-thumb" style="background:' +
      esc(p.color) +
      '">' +
      thumbInner +
      '<span class="proj-cat">' +
      esc(p.category) +
      "</span></div>" +
      '<div class="proj-body"><h3>' +
      esc(p.title) +
      "</h3><p>" +
      esc(p.desc) +
      "</p>" +
      '<div class="tech">' +
      tech +
      '</div><div class="proj-links">' +
      links +
      "</div></div></article>",
  );
  gridEl.appendChild(card);
});
gridEl.addEventListener("click", function (e) {
  var btn = e.target.closest("[data-details]");
  if (!btn) return;
  var p = CONFIG.projects[+btn.getAttribute("data-details")];
  document.getElementById("pmCat").textContent = p.category;
  document.getElementById("pmTitle").textContent = p.title;
  var pmImgWrap = document.getElementById("pmImageWrap");
  if (pmImgWrap) {
    if (p.image) {
      pmImgWrap.innerHTML =
        '<img class="modal-img" src="' +
        esc(p.image) +
        '" alt="Screenshot of ' +
        esc(p.title) +
        '">';
      pmImgWrap.style.display = "block";
    } else {
      pmImgWrap.innerHTML = "";
      pmImgWrap.style.display = "none";
    }
  }
  document.getElementById("pmDesc").textContent = p.long || p.desc;
  document.getElementById("pmTech").innerHTML = p.tech
    .map(function (t) {
      return "<span>" + esc(t) + "</span>";
    })
    .join("");
  var lh = "";
  if (p.drive)
    lh +=
      '<a class="btn btn-primary btn-sm" href="' +
      esc(p.drive) +
      '" target="_blank" rel="noopener">View Designs on Google Drive \u2197</a>';
  if (p.github)
    lh +=
      '<a class="btn btn-ghost btn-sm" href="' +
      esc(p.github) +
      '" target="_blank" rel="noopener">GitHub Repository ↗</a>';
  if (p.demo)
    lh +=
      '<a class="btn btn-primary btn-sm" href="' +
      esc(p.demo) +
      '" target="_blank" rel="noopener">Live Demo ↗</a>';
  if (!lh)
    lh =
      '<span style="color:var(--muted);font-size:14px">Links will appear here once added in CONFIG (github, demo, or drive for the Graphic Design project).</span>';
  document.getElementById("pmLinks").innerHTML = lh;
  openModal("projectModal");
});

/* ---------- journey ---------- */
var tl = document.getElementById("timeline");
CONFIG.journey.forEach(function (j) {
  tl.appendChild(
    el(
      '<div class="tl-item reveal"><span class="tl-dot"></span><span class="tl-tag">' +
        esc(j.tag) +
        "</span><h3>" +
        esc(j.title) +
        "</h3><p>" +
        esc(j.desc) +
        "</p></div>",
    ),
  );
});

/* ---------- certificates ---------- */
var cg = document.getElementById("certGrid");
CONFIG.certificates.forEach(function (c, idx) {
  var card = el(
    '<button type="button" class="card cert reveal" data-cert="' +
      idx +
      '">' +
      '<div class="cert-art" style="background:' +
      esc(c.color) +
      '">' +
      (c.icon ? c.icon : '<span class="art-text">CERT</span>') +
      "</div>" +
      "<h3>" +
      esc(c.title) +
      "</h3><p>" +
      esc(c.org) +
      ' • <span class="yr">' +
      esc(c.year) +
      "</span></p>" +
      '<p style="margin-top:8px">Tap to preview →</p></button>',
  );
  cg.appendChild(card);
});
cg.addEventListener("click", function (e) {
  var card = e.target.closest("[data-cert]");
  if (!card) return;
  var c = CONFIG.certificates[+card.getAttribute("data-cert")];
  document.getElementById("cmOrg").textContent = c.org;
  document.getElementById("cmTitle").textContent = c.title;
  var art = document.getElementById("cmArt");
  art.style.background = c.color;
  art.innerHTML = c.icon
    ? esc(c.icon)
    : '<span class="art-text">CERTIFICATE</span>';
  document.getElementById("cmMeta").textContent =
    c.org + " • " + c.year + " — " + c.note;
  openModal("certModal");
});

/* ---------- contact list ---------- */
var cl = document.getElementById("contactList");
[
  {
    icon: ICONS.mail,
    label: "Email",
    value: CONFIG.email,
    href: "mailto:" + CONFIG.email,
  },
  {
    icon: ICONS.github,
    label: "GitHub",
    value: "github.com",
    href: CONFIG.socials.github,
  },
  {
    icon: ICONS.linkedin,
    label: "LinkedIn",
    value: "linkedin.com",
    href: CONFIG.socials.linkedin,
  },
  {
    icon: ICONS.instagram,
    label: "Instagram",
    value: "@apriliandisa",
    href: CONFIG.socials.instagram,
  },
  {
    icon: ICONS.whatsapp,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: CONFIG.socials.whatsapp,
  },
].forEach(function (item) {
  var a = el(
    '<a class="contact-item" href="' +
      esc(item.href) +
      '" target="_blank" rel="noopener"><span class="ci2">' +
      item.icon +
      "</span><span><small>" +
      esc(item.label) +
      "</small><strong>" +
      esc(item.value) +
      "</strong></span></a>",
  );
  cl.appendChild(a);
});

/* ---------- contact form → mailto ---------- */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("cfName").value.trim();
  var email = document.getElementById("cfEmail").value.trim();
  var subject = document.getElementById("cfSubject").value.trim();
  var message = document.getElementById("cfMessage").value.trim();
  var status = document.getElementById("formStatus");
  if (!name || !email || !subject || !message) {
    status.style.display = "block";
    status.textContent = "Please fill in all fields first.";
    return;
  }
  var body = encodeURIComponent(
    "Hi Dian,\n\n" + message + "\n\n— " + name + " (" + email + ")",
  );
  window.location.href =
    "mailto:" +
    CONFIG.email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    body;
  status.style.display = "block";
  status.textContent =
    "Opening your email app… If nothing opens, email me directly at " +
    CONFIG.email +
    ".";
});

/* ---------- modals ---------- */
function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach(function (m) {
    m.classList.remove("open");
  });
}
document.querySelectorAll("[data-close]").forEach(function (b) {
  b.addEventListener("click", closeModals);
});
document.querySelectorAll(".modal-backdrop").forEach(function (m) {
  m.addEventListener("click", function (e) {
    if (e.target === m) closeModals();
  });
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModals();
});

/* ---------- theme toggle (in-memory, dark by default) ---------- */
var themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", function () {
  var html = document.documentElement;
  var light = html.getAttribute("data-theme") !== "light";
  html.setAttribute("data-theme", light ? "light" : "dark");
});

/* ---------- mobile menu ---------- */
var burger = document.getElementById("burger");
var mobileMenu = document.getElementById("mobileMenu");
burger.addEventListener("click", function () {
  var open = mobileMenu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
  burger.textContent = open ? "✕" : "☰";
});
mobileMenu.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    burger.textContent = "☰";
  });
});

/* ---------- active nav + reveal + back to top ---------- */
var sections = ["home", "about", "skills", "projects", "journey", "contact"];
var navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        document.querySelectorAll(".nav-link").forEach(function (a) {
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + en.target.id,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
sections.forEach(function (id) {
  var s = document.getElementById(id);
  if (s) navObserver.observe(s);
});

var revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        revealObserver.unobserve(en.target);
      }
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll(".reveal").forEach(function (elm) {
  revealObserver.observe(elm);
});

var toTop = document.getElementById("toTop");
window.addEventListener(
  "scroll",
  function () {
    toTop.classList.toggle("show", window.scrollY > 600);
  },
  { passive: true },
);
toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- Download CV (generated from CONFIG) ---------- */
function buildCVHTML() {
  var skills = CONFIG.skillGroups
  .map(function (g) {
    return (g.title || g.group || "") + ": " + g.skills.join(", ");
  })
  .join("<br>");

  var projects = CONFIG.projects
    .map(function (p) {
      return (
        "<li><strong>" +
        esc(p.title) +
        "</strong> — " +
        esc(p.desc) +
        " (" +
        esc(p.tech.join(", ")) +
        ")</li>"
      );
    })
    .join("");

  var journey = CONFIG.journey
    .map(function (j) {
      return (
        "<p><strong>" +
        esc(j.title) +
        "</strong> — " +
        esc(j.year || j.tag || "") +
        "<br>" +
        esc(j.desc) +
        "</p>"
      );
    })
    .join("");

  return (
  "<style>#cvPaper p,#cvPaper li{page-break-inside:avoid;text-align:justify}#cvPaper p.cv-head,#cvPaper p.cv-skills{text-align:left}#cvPaper h2{page-break-after:avoid}</style>" +
  (CONFIG.profilePhoto
    ? '<img src="' +
      esc(CONFIG.profilePhoto) +
      '" alt="Foto" style="width:110px;height:135px;object-fit:cover;float:right;margin:0 14px 12px 16px;">'
    : "") +
  '<h1 class="cv-name">' +
    esc(CONFIG.name) +
    "</h1>" +
    '<p class="cv-head">Email: ' +
    esc(CONFIG.email) +
    "<br>WhatsApp: " +
    esc(CONFIG.socials.whatsapp) +
    "<br>Instagram: " +
    esc(CONFIG.socials.instagram) +
    "</p>" +
    "<h2>SUMMARY</h2><p>" +
    esc(CONFIG.about) +
    "</p>" +
    "<h2>SKILLS</h2><p class=\"cv-skills\">" +
    skills +
    "</p>" +
    "<h2>PROJECTS</h2><ul>" +
    projects +
    "</ul>" +
    "<h2>JOURNEY</h2>" +
    journey
  );
}
function downloadCVPDF() {
  var element = document.getElementById("cvPaper");
  element.innerHTML = buildCVHTML();
  element.style.display = "block";
  var opt = {
    margin: 0,
    filename: "Dian-CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["css", "legacy"] },
    };
  var img = element.querySelector("img");
  var go = function () {
    html2pdf().set(opt).from(element).save();
  };
  if (img && (!img.complete || img.naturalWidth === 0)) {
    img.onload = go;
    img.onerror = go;
  } else {
    go();
  }
}
document.getElementById("cvBtnTop").addEventListener("click", downloadCVPDF);
document.getElementById("cvBtnMobile").addEventListener("click", downloadCVPDF);
