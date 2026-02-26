# Alur Kerja (Workflow) Tim

Dokumen ini menjelaskan alur kerja penggunaan Git dan GitHub dalam pengembangan proyek ini.

## 1. Langkah Clone
Untuk memulai pengerjaan, setiap anggota harus menduplikasi repositori ke komputer lokal masing-masing:
```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
```

## 2. Pembuatan Branch
Jangan bekerja langsung di branch `main`. Buatlah branch baru untuk setiap fitur atau tugas:
```bash
git checkout -b fitur-nama-anggota
```

## 3. Commit Perubahan
Lakukan commit secara berkala dengan pesan yang jelas dan deskriptif:
```bash
git add .
git commit -m "Menambahkan fitur [nama fitur]"
```

## 4. Push ke GitHub
Unggah branch lokal Anda ke repositori GitHub:
```bash
git push origin fitur-nama-anggota
```

## 5. Pull Request (PR)
Setelah branch diunggah, buka halaman repositori di GitHub dan buat **Pull Request** ke branch `main`. Pastikan untuk mengisi deskripsi perubahan yang dilakukan.

## 6. Merge
PR akan ditinjau oleh anggota lain. Jika tidak ada konflik dan sudah sesuai standar, PR akan di-**Merge** ke branch `main`. Setelah di-merge, hapus branch fitur tersebut baik di lokal maupun di GitHub.
