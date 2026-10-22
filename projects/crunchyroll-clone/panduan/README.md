# Panduan Belajar Frontend: Membangun Klon Streaming Anime dari Nol

Selamat datang di panduan praktis pembangunan platform streaming anime dari nol menggunakan standar web murni (**Full Vanilla**: `HTML5`, `CSS3`, dan `Vanilla JavaScript ES6+`).

Panduan ini disusun berdasarkan hasil pembedahan (*reverse engineering*) arsitektur asli Crunchyroll, dengan fokus pada **The Golden Path (3 Halaman Inti)** dan dirancang khusus agar Anda dapat membangun setiap baris kode dengan tangan sendiri di editor VS Code Anda.

---

## 🎯 Filosofi Pembelajaran: "Fundamental-First"

Untuk mencegah kemampuan fundamental Anda menjadi tumpul akibat ketergantungan pada *tools* otomatis atau AI generatif, setiap bab dalam panduan ini dirancang dengan aturan:

1. **Prasyarat Mandiri**: Setiap modul diawali dengan daftar konsep dasar yang **wajib Anda pahami terlebih dahulu** (misalnya melalui kurikulum freeCodeCamp atau MDN Web Docs).
2. **Ketiadaan *Magic* Framework**: Seluruh logika dibangun menggunakan fitur bawaan peramban (*web platform standards*)—tanpa React, tanpa Webpack, tanpa dependensi pustaka pihak ketiga.
3. **Arsitektur Standar Industri**: Walaupun menggunakan Vanilla, struktur kode menerapkan metodologi tingkat industri: arsitektur **ITCSS (Inverted Triangle CSS)**, konvensi penamaan **BEM (Block Element Modifier)**, dan **2-Tier Design Tokens**.

---

## 🗺️ Peta Navigasi Materi (Daftar Isi)

Panduan ini dipecah secara modular dengan navigasi sekuensial:

| Modul | Judul Panduan | Fokus Pembahasan & Keterampilan Utama |
| :---: | :--- | :--- |
| **00** | [**Fondasi dan Setup Proyek**](./00-fondasi-dan-setup.md) | Penataan direktori ITCSS, pembuatan token warna/tipografi (`tokens.css`), CSS `reset`, kerangka `index.html`, dan modul pemuatan data lokal (`api.js`). |
| **01** | [**Halaman Katalog (Browse)**](./01-halaman-katalog-browse.md) | Grid kartu poster responsif, bar pengurutan (*sorting*), popover filter multi-dimensi (genre & subtitle/dubbing), dan sinkronisasi parameter URL via `URLSearchParams`. |
| **02** | [**Halaman Detail Serial (Series Detail)**](./02-halaman-detail-serial.md) | Komponen Hero Backdrop dengan gradien gelap, keyart logo resmi, pemilih musim (*Season Dropdown* reaktif), kartu episode 16:9, dan traversal data relasional bersarang. |
| **03** | [**Halaman Pemutar Video (Watch Player)**](./03-halaman-pemutar-video.md) | Kontainer video responsif 16:9 anti-CLS, kontrol pemutar interaktif kustom berbasis `HTML5 Media API`, *idle timer* kursor mouse, pintasan keyboard, dan *countdown* episode berikutnya. |
| **04** | [**Integrasi Client-Side SPA Router**](./04-integrasi-spa-router.md) | Penyatuan ketiga halaman menjadi Single Page Application (SPA) utuh menggunakan `History.pushState()` dan event `popstate` tanpa memuat ulang (*reload*) halaman. |

---

## 🛠️ Persiapan Lingkungan Pengembangan

Sebelum mulai, pastikan Anda telah menyiapkan:
1. **Editor Teks**: Visual Studio Code (VS Code).
2. **Ekstensi VS Code**: **Live Server** (oleh Ritwick Dey) untuk menjalankan server lokal statis dengan fitur *live-reload*.
3. **Peramban Web Modern**: Google Chrome, Mozilla Firefox, atau Microsoft Edge yang mendukung fitur DevTools modern.

---

[Mulai Langkah Pertama: 00. Fondasi dan Setup Proyek ➡️](./00-fondasi-dan-setup.md)
