# Crunchyroll Reverse Engineering & Frontend Learning Blueprint

Repositori ini berisi dokumentasi riset dan cetak biru arsitektur (*architectural blueprint*) hasil rekayasa balik (*reverse engineering*) web Crunchyroll, yang disusun sebagai referensi edukasi untuk membangun antarmuka web platform streaming modern.

## Daftar Berkas

- [panduan/ (Panduan Belajar Praktis Step-by-Step)](./panduan/README.md): **Panduan tutorial bertahap dari nol** (Milestone 0 hingga 4) lengkap dengan kode sumber, syarat penguasaan mandiri, tata kelola ITCSS, dan navigasi sekuensial.
- [BLUEPRINT.md](./BLUEPRINT.md): Dokumen arsitektur lengkap yang membedah 3 halaman inti (*The Golden Path*), kontrak API, sistem autentikasi 2-tier JWT, hierarki komponen UI, dan teknik video player responsif.
- `data/`: Folder berisi dataset tiruan (*mock data*) hasil tangkapan riil untuk keperluan pembelajaran koding:
  - [`data/categories.json`](./data/categories.json): Daftar 15 genre kategori anime resmi Crunchyroll.
  - [`data/sample-series.json`](./data/sample-series.json): Struktur relasional Seri, Season, dan Episode (sampel: *Frieren: Beyond Journey's End*) lengkap dengan metadata durasi, rating, dan tautan video sampel untuk pengujian pemutar video.

## 3 Halaman Inti yang Dipelajari

1. **Browse / Catalog Page** (`/browse`, `/videos/popular`): Filter multi-dimensi, sorting, grid kartu poster.
2. **Series Detail Page** (`/series/[id]/[slug]`): Hero backdrop, keyart logo, season dropdown, episode list.
3. **Watch Page** (`/watch/[episodeId]/[slug]`): Kontainer pemutar 16:9 anti-CLS, kontrol kustom HTML5, laci episode berikutnya.
