CARA BUKA DI VS CODE
==================

1. Extract ZIP ini.
2. Di VS Code: File > Open Folder > pilih folder "dian-portfolio".
3. Buka index.html, lalu jalankan dengan Live Server
   (klik kanan index.html > Open with Live Server),
   atau double-click index.html di File Explorer.

STRUKTUR FILE
=============

dian-portfolio/
  index.html          -> struktur HTML saja
  assets/
    style.css         -> semua CSS / tampilan
    config.js         -> semua data CONFIG (INI yang kamu edit)
    script.js         -> logika JavaScript (biasanya tidak perlu diedit)
    profile.jpg       -> taruh foto profil kamu di sini (lihat di bawah)

GANTI FOTO PROFIL
=================

1. Simpan foto asli kamu di folder assets/ dengan nama: profile.jpg
2. Buka assets/config.js, cari: profilePhoto
3. Isi jadi: profilePhoto: "assets/profile.jpg",

TAMBAH / EDIT PROYEK
====================

1. Buka assets/config.js, cari CONFIG.projects
2. Copy 1 objek proyek dari { sampai }, paste di bawahnya.
3. Ganti title, desc, long, category, tech, github, dan demo.
   category harus sama persis dengan salah satu di projectCategories:
   "Web Development", "Artificial Intelligence",
   "Machine Learning", atau "Graphic Design".

SCREENSHOT PROYEK (field image)
================================

1. Taruh file screenshot proyek kamu di folder assets/,
   contoh: assets/project-portfolio.png
2. Buka assets/config.js, di proyek yang mau diganti isi:
   image: "assets/project-portfolio.png",
3. Thumbnail kartu proyek + gambar di modal View Details
   otomatis menampilkan screenshot itu (object-fit: cover).
4. Kalau image masih kosong (image: ""), thumbnail tetap
   menampilkan inisial huruf seperti sebelumnya.
   Kalau file gambarnya tidak ketemu, gambar otomatis
   disembunyikan dan inisialnya tetap kelihatan.

EDIT LAINNYA
============

- Link & kontak : CONFIG.socials dan CONFIG.email di assets/config.js
- Skills        : CONFIG.skillGroups di assets/config.js
- Interests     : CONFIG.interests di assets/config.js
- Journey       : CONFIG.journey di assets/config.js
- Certificates  : CONFIG.certificates di assets/config.js
- Warna/layout  : assets/style.css

LINK DRIVE DI DETAIL PROYEK GRAPHIC DESIGN
==========================================

1. Buka assets/config.js, cari proyek "Graphic Design".
2. Isi field drive dengan link folder Google Drive kamu:
   drive: "https://drive.google.com/drive/folders/xxxx",
3. Tombol "View Designs on Google Drive" muncul HANYA di dalam
   modal View Details (bukan di kartu proyek), dan hanya kalau
   field drive sudah diisi. Kalau drive masih kosong (""),
   tombolnya tidak muncul.
4. Pastikan folder Drive-nya di-share ke:
   "Anyone with the link can view".

UPDATE SKILLS TERBARU
=====================

Di assets/config.js > CONFIG.skillGroups sekarang:
- Programming : Python, JavaScript, HTML, CSS, PHP
  (PHP ditambahkan sebagai bahasa pemrograman)
- Frameworks  : CodeIgniter (CI), Laravel  <- grup baru
- Graphic Design: Poster Design, Social Media Design,
  Logo & Branding, Flyer & Banner
  (Canva TIDAK lagi di sini)
- Tools       : Visual Studio Code, GitHub, Roboflow, Canva
  (Canva sekarang masuk Tools)
- Database    : SQLite, MySQL
  (MySQL ditambahkan, tidak hanya SQLite)
- Teaching & Mentoring : Teaching, Mentoring, Explaining Concepts
  <- grup baru

Di index.html > bagian About juga ditambahkan kalimat
pengalaman mengajar — ditulis jujur bahwa kamu masih
dalam tahap belajar juga.

CATATAN ICON
============

Semua emoji / icon khas AI sudah dihapus. Thumbnail proyek
menampilkan screenshot kalau field image diisi, kalau tidak
menampilkan inisial judul. Kartu interest memakai nomor bersih,
dan kontak memakai icon SVG sewarna tema.
Icon di kartu kontak sekarang 24px (sebelumnya 42px tanpa
batas ukuran SVG, jadi kelihatan kegedean) — diatur di
assets/style.css pada .contact-item .ci2 svg { width:24px; height:24px }.
