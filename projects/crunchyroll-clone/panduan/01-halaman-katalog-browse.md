# 01. Halaman Katalog Anime (Milestone 1)

Modul ini memandu Anda membangun **Halaman Katalog (Browse)**: menampilkan kartu poster anime dalam tata letak `CSS Grid` adaptif, tombol pengurutan (_sorting_), popover filter kategori/genre, dan filter ketersediaan takarir (_subbed_) atau sulih suara (_dubbed_).

---

## 🎯 Syarat Penguasaan Mandiri (Sinkronisasi Kurikulum freeCodeCamp v9)

Sebelum menulis kode pada modul ini, pastikan Anda telah menguasai materi dari kurikulum resmi freeCodeCamp v9 berikut:

1. **CSS Grid & Desain Responsif**:
   - `Responsive Web Design` > `CSS Grid` > `Grid Layouts & Auto-placement` > `display: grid`, `grid-template-columns: repeat(auto-fill, minmax(...))`, `gap`, dan `aspect-ratio: 2 / 3`.
2. **Transformasi & Penyaringan Array**:
   - `JavaScript Algorithms and Data Structures (v9)` > `Higher Order Functions and Callbacks (Modul 8)` & `Arrays (Modul 4)` > `Array Iteration` > `Array.prototype.filter()`, `Array.prototype.sort()`, `Array.prototype.map()`, dan `String.prototype.localeCompare()`.
3. **DOM Manipulation & Event Delegation**:
   - `JavaScript Algorithms and Data Structures (v9)` > `DOM Manipulation and Events (Modul 9)` > `Event Handling` > `addEventListener()`, `event.target`, `event.target.closest()`, `element.innerHTML`, dan form event `change`.
4. **State URL (Query Parameters)**:
   - `JavaScript Algorithms and Data Structures (v9)` > `DOM & Web APIs (Pengayaan Modul 9)` > `URL State Handling` > Objek `URLSearchParams`, `params.get()`, dan `params.set()`.

---

## Langkah 1: Merancang Komponen Kartu Poster (`src/css/05-components/card.css`)

Kartu anime Crunchyroll memiliki ciri khas: poster vertikal rasio `2:3`, badge kecil ketersediaan `Sub | Dub`, judul tebal, skor rating bintang, dan efek membesar lembut saat kursor melayang (_hover effect_).

Buat berkas `src/css/05-components/card.css`:

```css
/* ==========================================================================
   Component: Anime Card (.c-card)
   ========================================================================== */

.c-card {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-radius: var(--radius-s);
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.2, 0, 0, 1);
  position: relative;
}

.c-card:hover {
  transform: translateY(-4px);
}

/* Pembungkus poster dengan aspek rasio 2:3 */
.c-card__media {
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  background-color: var(--bg-surface-elevated);
  border-radius: var(--radius-s);
  overflow: hidden;
}

.c-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.c-card:hover .c-card__image {
  transform: scale(1.04);
}

/* Badge penanda audio/subtitle (Sub | Dub) */
.c-card__badge {
  position: absolute;
  inset-block-start: var(--space-xs);
  inset-inline-start: var(--space-xs);
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px var(--space-xs);
  border-radius: var(--radius-s);
}

/* Konten teks di bawah poster */
.c-card__content {
  padding-block-start: var(--space-xs);
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.c-card__title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
}

.c-card:hover .c-card__title {
  color: var(--text-accent);
}

.c-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.c-card__star {
  color: #ffb800;
}
```

---

## Langkah 2: Merancang Bar Kontrol & Filter (`src/css/05-components/filter-bar.css`)

Buat berkas `src/css/05-components/filter-bar.css` untuk bar filter dan pemilihan urutan:

```css
/* ==========================================================================
   Component: Filter & Sort Bar (.c-filter-bar)
   ========================================================================== */

.c-filter-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-m);
  margin-block-end: var(--space-l);
  padding-block-end: var(--space-s);
  border-block-end: 1px solid var(--bg-surface-elevated);
}

.c-filter-bar__title {
  font-size: 1.5rem;
  font-weight: 900;
}

.c-filter-bar__controls {
  display: flex;
  align-items: center;
  gap: var(--space-m);
}

/* Dropdown Pemilih Standar */
.c-select {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--bg-surface-elevated);
  padding: var(--space-xs) var(--space-m);
  border-radius: var(--radius-s);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
}

.c-select:focus {
  outline: 2px solid var(--text-accent);
}

/* Grid Kartu Anime Responsif */
.o-grid-anime {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--space-m) var(--space-s);
}

@media (min-width: 768px) {
  .o-grid-anime {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: var(--space-l) var(--space-m);
  }
}
```

---

## Langkah 3: Mendaftarkan Komponen di `src/css/main.css`

Buka berkas `src/css/main.css`, lalu tambahkan impor komponen baru di baris bawah:

```css
/* 05. Components: BEM Blocks */
@import "./05-components/card.css";
@import "./05-components/filter-bar.css";
```

---

## Langkah 4: Membangun Modul Render Katalog (`src/js/components/catalog.js`)

Buat folder `src/js/components/` jika belum ada, lalu buat berkas `src/js/components/catalog.js`:

```javascript
import { getCategories, queryCatalog } from "../api.js";

/**
 * Merender satu kartu anime dalam format HTML string
 * @param {Object} anime - Objek data serial anime
 * @returns {string} HTML markup
 */
export function renderAnimeCard(anime) {
  const ratingText = anime.rating?.average
    ? anime.rating.average.toFixed(1)
    : "Baru";
  const posterUrl =
    anime.images?.poster_tall ||
    "https://via.placeholder.com/480x720?text=No+Image";
  const genres = anime.categories
    ? anime.categories.slice(0, 2).join(", ")
    : "Anime";

  return `
    <article class="c-card" data-id="${anime.id}">
      <a href="#/series/${anime.id}/${anime.slug}" class="c-card__media" aria-label="Lihat serial ${anime.title}">
        <img 
          src="${posterUrl}" 
          alt="Poster ${anime.title}" 
          class="c-card__image" 
          loading="lazy"
        />
        <span class="c-card__badge">Sub | Dub</span>
      </a>
      <div class="c-card__content">
        <a href="#/series/${anime.id}/${anime.slug}">
          <h3 class="c-card__title">${anime.title}</h3>
        </a>
        <div class="c-card__meta">
          <span class="c-card__star">★</span>
          <span>${ratingText}</span>
          <span>•</span>
          <span>${genres}</span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Merender seluruh tampilan halaman katalog (Browse Page)
 * @param {HTMLElement} container - Elemen kontainer target (misal: #main-content)
 * @param {Object} currentFilter - Filter aktif saat ini
 */
export async function renderCatalogPage(container, currentFilter = {}) {
  // Ambil daftar kategori dan hasil query katalog
  const [categories, animeList] = await Promise.all([
    getCategories(),
    queryCatalog(currentFilter),
  ]);

  // Siapkan opsi dropdown kategori
  const categoryOptions = categories
    .map(
      (cat) => `
    <option value="${cat.slug}" ${currentFilter.category === cat.slug ? "selected" : ""}>
      ${cat.title}
    </option>
  `,
    )
    .join("");

  // Siapkan markup halaman
  container.innerHTML = `
    <div class="o-container">
      <!-- Bar Kontrol Filter & Sort -->
      <section class="c-filter-bar">
        <h1 class="c-filter-bar__title">Anime Terpopuler</h1>
        
        <div class="c-filter-bar__controls">
          <!-- Dropdown Filter Kategori -->
          <select id="category-filter" class="c-select" aria-label="Filter berdasarkan Kategori">
            <option value="">Semua Kategori</option>
            ${categoryOptions}
          </select>

          <!-- Dropdown Urutan -->
          <select id="sort-filter" class="c-select" aria-label="Urutkan Anime">
            <option value="popularity" ${currentFilter.sort_by === "popularity" ? "selected" : ""}>Terpopuler</option>
            <option value="alphabetical" ${currentFilter.sort_by === "alphabetical" ? "selected" : ""}>Abjad (A-Z)</option>
          </select>
        </div>
      </section>

      <!-- Grid Daftar Anime -->
      <section class="o-grid-anime" id="anime-grid">
        ${
          animeList.length > 0
            ? animeList.map(renderAnimeCard).join("")
            : '<p class="u-text-muted">Tidak ada anime yang cocok dengan filter yang dipilih.</p>'
        }
      </section>
    </div>
  `;

  // Pasang event listener untuk interaksi filter
  attachFilterListeners(container, currentFilter);
}

/**
 * Menghubungkan interaksi dropdown ke fungsi pembaruan halaman
 */
function attachFilterListeners(container, currentFilter) {
  const categorySelect = container.querySelector("#category-filter");
  const sortSelect = container.querySelector("#sort-filter");

  const handleFilterChange = () => {
    const updatedFilter = {
      ...currentFilter,
      category: categorySelect.value,
      sort_by: sortSelect.value,
    };

    // Render ulang katalog dengan filter baru
    renderCatalogPage(container, updatedFilter);
  };

  categorySelect.addEventListener("change", handleFilterChange);
  sortSelect.addEventListener("change", handleFilterChange);
}
```

---

## Langkah 5: Mengaktifkan Katalog di `src/js/app.js`

Buka berkas `src/js/app.js`, lalu panggil `renderCatalogPage` saat aplikasi berjalan:

```javascript
import { renderCatalogPage } from "./components/catalog.js";

function initApp() {
  const mainContent = document.getElementById("main-content");

  // Tampilkan halaman katalog dengan filter default
  renderCatalogPage(mainContent, { sort_by: "popularity" });
}

document.addEventListener("DOMContentLoaded", initApp);
```

---

## 🔍 Cara Verifikasi Mandiri

1. Simpan seluruh berkas di VS Code dan pastikan ekstensi **Live Server** masih berjalan.
2. **Cek Tampilan**:
   - Judul besar: **"Anime Terpopuler"**.
   - Terdapat dua dropdown filter: **"Semua Kategori"** dan **"Terpopuler"**.
   - Kartu anime _Frieren: Beyond Journey's End_ muncul dengan poster berasio vertikal proporsional, badge `Sub | Dub`, judul tebal, dan bintang rating kuning (`★ 4.9`).
3. **Uji Coba Filter Kategori**:
   - Ganti dropdown kategori ke **"Action"** atau **"Adventure"**: Kartu anime tetap muncul karena Frieren memiliki genre tersebut.
   - Ganti dropdown ke **"Sports"**: Tampilan otomatis berganti menjadi pesan _"Tidak ada anime yang cocok dengan filter yang dipilih."_ tanpa memuat ulang (_reload_) halaman!

---

[⬅️ Sebelumnya: 00. Fondasi dan Setup](./00-fondasi-dan-setup.md) | [Selanjutnya: 02. Halaman Detail Serial ➡️](./02-halaman-detail-serial.md)
