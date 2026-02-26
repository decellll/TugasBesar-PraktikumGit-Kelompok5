# Panduan Pengaturan (Setup Guide)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di lingkungan lokal Anda.

## Cara Clone Repositori
1. Buka terminal atau Git Bash.
2. Jalankan perintah berikut:
   ```bash
   git clone https://github.com/username/TugasBesar-PraktikumGit-Kelompok5.git
   ```
3. Masuk ke direktori proyek:
   ```bash
   cd TugasBesar-PraktikumGit-Kelompok5
   ```

## Cara Menjalankan Website
Website ini dibangun menggunakan HTML statis, sehingga tidak memerlukan server khusus:
1. Navigasi ke folder proyek.
2. Klik dua kali pada file `index.html` (jika tersedia di root) atau buka file HTML apa pun menggunakan browser pilihan Anda (Chrome, Firefox, Edge).
3. Untuk pengembangan, disarankan menggunakan ekstensi **Live Server** di VS Code agar perubahan terlihat secara real-time.

## Struktur Folder
Berikut adalah struktur folder dalam proyek ini:
```text
TugasBesar-PraktikumGit-Kelompok5/
├── AGIL/                 # Bagian Kontak
│   ├── contact-info.html
│   ├── contact-form.html
│   └── contact-faq.html
├── FAIZ/                 # Bagian Proyek
│   ├── project-overview.html
│   ├── project-features.html
│   └── project-technology.html
├── FAUZAN/               # Bagian Dokumentasi
│   ├── WORKFLOW.md
│   ├── CONTRIBUTION.md
│   └── SETUP_GUIDE.md
└── index.html            # File Utama (Opsional)
```
