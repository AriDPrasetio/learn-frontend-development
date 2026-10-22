# 00. Fondasi dan Setup Proyek (Milestone 0)

Modul ini memandu Anda membangun fondasi struktur folder arsitektur **ITCSS (Inverted Triangle CSS)**, sistem **2-Tier Design Tokens**, perataan gaya (_reset_) CSS, kerangka dasar `index.html`, serta modul pemuatan data lokal (`api.js`) berbasis `ES Modules`.

---

## 🎯 Syarat Penguasaan Mandiri (Sinkronisasi Kurikulum freeCodeCamp v9)

Sebelum menulis baris kode pada modul ini, pastikan Anda telah menguasai materi dari kurikulum resmi freeCodeCamp v9 berikut:

1. **Struktur Dokumen & Semantik HTML**:
   - `Responsive Web Design` > `Basic HTML and HTML5` > `Document Structure & Semantics` > `<!DOCTYPE html>`, `<meta name="viewport">`, `<header>`, `<main>`, `<nav>`, `class`, dan `id`.
2. **Token Desain & Box Model**:
   - `Responsive Web Design` > `Basic CSS & Applied Visual Design` > `CSS Variables & Box Model` > `:root`, `var(--custom-property)`, `box-sizing: border-box`, universal selector `*`, dan satuan `rem`.
3. **Asynchronous & ES Modules**:
   - `JavaScript Algorithms and Data Structures (v9)` > `Asynchronous JavaScript (Modul 25)` > `Fetch API & Promises` > `fetch()`, `response.json()`, `async / await`, `try...catch`, dan sintaks ES Modules (`import` / `export`).

---

## Langkah 1: Menyiapkan Struktur Folder Proyek

Buka folder proyek Anda di VS Code. Di samping folder `data/` yang sudah ada, buat struktur folder dan berkas berikut:

```
d:\learn\reverse-engineering-crunchyroll/
├── data/                    <-- (berisi sample-series.json dan categories.json)
├── panduan/                 <-- (berisi materi panduan ini)
├── src/                     <-- (buat folder baru ini)
│   ├── css/
│   │   ├── 01-settings/
│   │   │   └── tokens.css   <-- Design Tokens (warna, tipografi, jarak)
│   │   ├── 02-generic/
│   │   │   └── reset.css    <-- Reset CSS modern
│   │   ├── 03-elements/
│   │   │   └── base.css     <-- Gaya tag HTML bawaan (body, h1-h6, a)
│   │   ├── 04-objects/
│   │   │   └── layout.css   <-- Grid dan container
│   │   ├── 05-components/   <-- Komponen BEM (akan diisi di bab berikutnya)
│   │   └── main.css         <-- Pengumpul seluruh berkas CSS
│   ├── js/
│   │   ├── api.js           <-- Mock data service & filter engine
│   │   └── app.js           <-- Entry point JavaScript
│   └── index.html           <-- Kerangka aplikasi
├── BLUEPRINT.md
└── README.md
```

---

## Langkah 2: Membuat Kerangka Utama `src/index.html`

Buat berkas `src/index.html`. Berkas ini bertindak sebagai wadah tunggal (_Single Page Application host_).

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Crunchyroll Clone - Educational Project</title>

    <!-- Favicon Standar -->
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍙</text></svg>"
    />

    <!-- Lembar Gaya Utama -->
    <link rel="stylesheet" href="./css/main.css" />
  </head>
  <body>
    <div id="app" class="o-app">
      <!-- Navigasi Global -->
      <header class="c-navbar" id="main-navbar">
        <div class="o-container c-navbar__inner">
          <a
            href="#/browse"
            class="c-navbar__logo"
            aria-label="Beranda Crunchyroll"
          >
            <span class="c-navbar__brand">CRUNCHYROLL</span>
          </a>
          <nav class="c-navbar__nav" aria-label="Navigasi Utama">
            <ul class="c-navbar__list">
              <li>
                <a href="#/browse" class="c-navbar__link is-active">Jelajahi</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- Area Konten Dinamis -->
      <main id="main-content" class="o-main" tabindex="-1">
        <div class="o-container">
          <p class="u-text-muted">Menginisialisasi katalog anime...</p>
        </div>
      </main>
    </div>

    <!-- Entry Point JavaScript (Wajib type="module") -->
    <script type="module" src="./js/app.js"></script>
  </body>
</html>
```

---

## Langkah 3: Menyusun Token Desain (`src/css/01-settings/tokens.css`)

Sistem desain Crunchyroll menggunakan palet warna gelap pekat dengan aksen oranye terang. Kita terapkan arsitektur **2-Tier Design Tokens**:

- **Tier 1 (Primitives)**: Nilai warna mentah (`--color-orange-500`, `--color-gray-900`).
- **Tier 2 (Semantics)**: Peran fungsional (`--bg-primary`, `--text-accent`).

Buat berkas `src/css/01-settings/tokens.css`:

```css
:root {
  /* ==========================================================================
     Tier 1: Primitive Tokens (Nilai Mentah)
     ========================================================================== */
  --color-primitive-orange-500: #f47521;
  --color-primitive-orange-600: #d65d10;

  --color-primitive-black: #000000;
  --color-primitive-gray-900: #141519;
  --color-primitive-gray-800: #23252b;
  --color-primitive-gray-700: #31343d;
  --color-primitive-gray-400: #a0a0a0;
  --color-primitive-gray-200: #dedede;
  --color-primitive-white: #ffffff;

  --font-family-sans:
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;

  /* ==========================================================================
     Tier 2: Semantic Tokens (Peran UI Fungsional)
     ========================================================================== */
  --bg-app: var(--color-primitive-black);
  --bg-surface: var(--color-primitive-gray-900);
  --bg-surface-elevated: var(--color-primitive-gray-800);
  --bg-surface-hover: var(--color-primitive-gray-700);

  --text-primary: var(--color-primitive-white);
  --text-secondary: var(--color-primitive-gray-200);
  --text-muted: var(--color-primitive-gray-400);
  --text-accent: var(--color-primitive-orange-500);

  --action-primary: var(--color-primitive-orange-500);
  --action-primary-hover: var(--color-primitive-orange-600);

  /* Spacing Scale (Skala Jarak Modular) */
  --space-2xs: 0.25rem; /* 4px */
  --space-xs: 0.5rem; /* 8px */
  --space-s: 0.75rem; /* 12px */
  --space-m: 1rem; /* 16px */
  --space-l: 1.5rem; /* 24px */
  --space-xl: 2rem; /* 32px */
  --space-2xl: 3rem; /* 48px */

  /* Borders & Shadows */
  --radius-s: 4px;
  --radius-m: 8px;
  --shadow-card: 0 4px 16px rgba(0, 0, 0, 0.4);

  /* Layout Constants */
  --layout-max-width: 1440px;
  --navbar-height: 60px;
}
```

---

## Langkah 4: Menata Ulang Gaya Dasar (`reset.css` & `base.css`)

### A. Reset CSS (`src/css/02-generic/reset.css`)

Hapus margin default browser dan tetapkan `box-sizing: border-box`.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}
```

### B. Element Base (`src/css/03-elements/base.css`)

Tetapkan gaya bawaan untuk elemen dasar dokumen.

```css
body {
  background-color: var(--bg-app);
  color: var(--text-primary);
  font-family: var(--font-family-sans);
  font-size: 1rem;
  line-height: 1.5;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  line-height: 1.2;
  font-weight: 700;
  color: var(--text-primary);
}

ul,
ol {
  list-style: none;
}
```

---

## Langkah 5: Layout Objects (`src/css/04-objects/layout.css`)

Buat kelas objek murni pembungkus konten:

```css
/* Container terpusat dengan padding samping dinamis */
.o-container {
  width: 100%;
  max-width: var(--layout-max-width);
  margin-inline: auto;
  padding-inline: var(--space-m);
}

@media (min-width: 768px) {
  .o-container {
    padding-inline: var(--space-xl);
  }
}

.o-main {
  padding-block: var(--space-l);
  min-height: calc(100vh - var(--navbar-height));
}

.u-text-muted {
  color: var(--text-muted);
}
```

---

## Langkah 6: Menggabungkan Berkas di `src/css/main.css`

Buka berkas `src/css/main.css` dan impor setiap lapisan secara berurutan:

```css
/* 01. Settings: Variables & Design Tokens */
@import "./01-settings/tokens.css";

/* 02. Generic: Reset & Normalization */
@import "./02-generic/reset.css";

/* 03. Elements: Base HTML Tags */
@import "./03-elements/base.css";

/* 04. Objects: Reusable Layouts */
@import "./04-objects/layout.css";

/* Navigasi Minimalis Awal */
.c-navbar {
  height: var(--navbar-height);
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--bg-surface-elevated);
  display: flex;
  align-items: center;
}

.c-navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-navbar__brand {
  font-weight: 900;
  letter-spacing: 1px;
  color: var(--text-accent);
}

.c-navbar__list {
  display: flex;
  gap: var(--space-m);
}

.c-navbar__link {
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 600;
  transition: color 0.2s ease;
}

.c-navbar__link:hover,
.c-navbar__link.is-active {
  color: var(--text-accent);
}
```

---

## Langkah 7: Membangun Modul Layanan Data (`src/js/api.js`)

Modul ini bertanggung jawab mengambil data dari `data/sample-series.json` dan `data/categories.json`, lalu menyediakan fungsi untuk memfilter dan mengurutkan anime secara mandiri di sisi klien.

Buat berkas `src/js/api.js`:

```javascript
/**
 * Modul Layanan Data Anime (Data Service Layer)
 * Mensimulasikan endpoint API /content/v2/discover/browse Crunchyroll
 */

let cachedSeries = null;
let cachedCategories = null;

/**
 * Mengambil daftar kategori resmi
 * @returns {Promise<Array>} Daftar kategori
 */
export async function getCategories() {
  if (cachedCategories) return cachedCategories;

  try {
    const response = await fetch("../data/categories.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const json = await response.json();
    cachedCategories = json.data;
    return cachedCategories;
  } catch (error) {
    console.error("Gagal memuat categories.json:", error);
    return [];
  }
}

/**
 * Mengambil seluruh data serial anime yang tersedia
 * @returns {Promise<Array>} Daftar serial anime
 */
export async function getAllSeries() {
  if (cachedSeries) return cachedSeries;

  try {
    const response = await fetch("../data/sample-series.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const series = await response.json();

    // Simpan dalam array untuk simulasi multi-item
    cachedSeries = [series];
    return cachedSeries;
  } catch (error) {
    console.error("Gagal memuat sample-series.json:", error);
    return [];
  }
}

/**
 * Mengambil satu anime berdasarkan ID uniknya
 * @param {string} id - ID anime (contoh: 'GG5H5XQX4')
 * @returns {Promise<Object|null>}
 */
export async function getSeriesById(id) {
  const all = await getAllSeries();
  return all.find((s) => s.id === id) || null;
}

/**
 * Filter dan pengurutan anime lokal (meniru query /discover/browse)
 * @param {Object} params
 * @param {string} [params.category] - Filter slug genre
 * @param {string} [params.sort_by] - 'popularity' | 'newly_added' | 'alphabetical'
 * @param {boolean} [params.is_dubbed] - Filter ketersediaan dubbing
 * @param {boolean} [params.is_subbed] - Filter ketersediaan subtitle
 * @returns {Promise<Array>}
 */
export async function queryCatalog({
  category = "",
  sort_by = "popularity",
  is_dubbed = false,
  is_subbed = false,
} = {}) {
  let list = await getAllSeries();

  // 1. Filter Kategori / Genre
  if (category) {
    list = list.filter(
      (item) =>
        item.categories &&
        item.categories
          .map((c) => c.toLowerCase())
          .includes(category.toLowerCase()),
    );
  }

  // 2. Filter Ketersediaan Audio & Takarir
  if (is_dubbed) {
    list = list.filter(
      (item) => item.audio_locales && item.audio_locales.length > 1,
    );
  }

  if (is_subbed) {
    list = list.filter(
      (item) => item.subtitle_locales && item.subtitle_locales.length > 0,
    );
  }

  // 3. Pengurutan Data
  if (sort_by === "alphabetical") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort_by === "popularity") {
    list.sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0));
  }

  return list;
}
```

---

## Langkah 8: Menguji Inisialisasi di `src/js/app.js`

Buka berkas `src/js/app.js` dan buat kode pengujian awal:

```javascript
import { getCategories, getAllSeries } from "./api.js";

async function initApp() {
  console.log("🚀 Memulai inisialisasi aplikasi Crunchyroll Clone...");

  const mainContent = document.getElementById("main-content");

  try {
    // Uji coba memuat kategori dan serial anime
    const [categories, seriesList] = await Promise.all([
      getCategories(),
      getAllSeries(),
    ]);

    console.log("✅ Kategori terdeteksi:", categories);
    console.log("✅ Serial anime terdeteksi:", seriesList);

    // Render pesan status berhasil
    mainContent.innerHTML = `
      <div class="o-container">
        <h1 style="margin-block-end: var(--space-s);">Fondasi Proyek Berhasil Diinisialisasi! 🎉</h1>
        <p class="u-text-muted">
          Berhasil memuat <strong>${categories.length} kategori</strong> dan 
          <strong>${seriesList.length} serial anime</strong> dari berkas data lokal.
        </p>
      </div>
    `;
  } catch (error) {
    console.error("❌ Terjadi kesalahan inisialisasi:", error);
    mainContent.innerHTML = `
      <div class="o-container">
        <p style="color: #ff4d4f;">Gagal memuat data lokal. Periksa console peramban untuk rincian error.</p>
      </div>
    `;
  }
}

// Jalankan saat dokumen HTML siap
document.addEventListener("DOMContentLoaded", initApp);
```

---

## 🔍 Cara Verifikasi Mandiri

1. Di VS Code, klik kanan pada berkas `src/index.html` lalu pilih **Open with Live Server**.
2. Peramban web Anda akan membuka alamat lokal (biasanya `http://127.0.0.1:5500/src/index.html`).
3. **Cek Visual**: Halaman berlatar hitam pekat dengan navbar bertuliskan "CRUNCHYROLL" berwarna oranye, dan teks `"Fondasi Proyek Berhasil Diinisialisasi! 🎉"`.
4. **Cek DevTools Console (F12)**:
   - Harus terdapat log: `✅ Kategori terdeteksi: (15) [...]` dan `✅ Serial anime terdeteksi: (1) [...]`.
   - Tidak boleh ada error berwarna merah terkait CORS atau file tidak ditemukan (_404_).

---

[⬅️ Kembali ke Daftar Isi](./README.md) | [Selanjutnya: 01. Halaman Katalog (Browse) ➡️](./01-halaman-katalog-browse.md)
