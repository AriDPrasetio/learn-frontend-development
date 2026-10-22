# 02. Halaman Detail Serial Anime (Milestone 2)

Modul ini memandu Anda membangun **Halaman Detail Serial (Series Detail Page)**: menampilkan gambar *backdrop* layar penuh dengan lapisan gradien gelap, sinopsis cerita, informasi takarir/sulih suara, tombol aksi utama (*Call to Action*), pemilih musim (*Season Dropdown*), dan daftar episode berformat rasio 16:9.

---

## 🎯 Syarat Penguasaan Mandiri (Sinkronisasi Kurikulum freeCodeCamp v9)

Sebelum menulis kode pada modul ini, pastikan Anda telah menguasai materi dari kurikulum resmi freeCodeCamp v9 berikut:

1. **Struktur Objek Bersarang & Pencarian Array**:
   - `JavaScript Algorithms and Data Structures (v9)` > `Objects (Modul 5)` & `Arrays (Modul 4)` > `Nested Data & Object Access` > Dot notation (`series.seasons[0].episodes`), `Array.prototype.find()`, dan *object destructuring*.
2. **CSS Background & Gradient Overlay**:
   - `Responsive Web Design` > `Applied Visual Design` > `Backgrounds & Positions` > `position: relative`, `position: absolute`, `background-size: cover`, `linear-gradient()`, dan pseudo-element `::after`.
3. **Pembaruan DOM Parsial (Local Re-render)**:
   - `JavaScript Algorithms and Data Structures (v9)` > `DOM Manipulation and Events (Modul 9)` > `Targeted DOM Updates` > Menghapus dan menulis ulang simpul anak (`container.innerHTML = ...`) saat event `change` terpicu tanpa me-reload dokumen.

---

## Langkah 1: Merancang Komponen Hero Serial (`src/css/05-components/series-hero.css`)

Buat berkas `src/css/05-components/series-hero.css`:

```css
/* ==========================================================================
   Component: Series Hero Header (.c-series-hero)
   ========================================================================== */

.c-series-hero {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: flex-end;
  padding-block-end: var(--space-xl);
  margin-block-end: var(--space-2xl);
  overflow: hidden;
}

/* Gambar latar belakang lebar dengan gradien gelap */
.c-series-hero__backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-size: cover;
  background-position: center top;
}

.c-series-hero__backdrop::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(20, 21, 25, 0.8) 60%,
    var(--bg-app) 100%
  );
}

.c-series-hero__content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.c-series-hero__title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 900;
  margin-block-end: var(--space-xs);
  line-height: 1.1;
}

.c-series-hero__tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-xs) var(--space-s);
  margin-block-end: var(--space-m);
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.c-series-hero__tag-badge {
  background-color: var(--bg-surface-elevated);
  padding: 2px var(--space-xs);
  border-radius: var(--radius-s);
  font-weight: 700;
  color: var(--text-primary);
}

.c-series-hero__synopsis {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-block-end: var(--space-l);
}

/* Tombol Aksi Utama (Mulai Nonton & Tambah ke Watchlist) */
.c-series-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-m);
}

.c-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: var(--space-s) var(--space-l);
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: var(--radius-s);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.c-btn:active {
  transform: scale(0.98);
}

.c-btn--primary {
  background-color: var(--action-primary);
  color: var(--color-primitive-black);
}

.c-btn--primary:hover {
  background-color: var(--action-primary-hover);
}

.c-btn--secondary {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  color: var(--text-primary);
}

.c-btn--secondary:hover {
  background-color: rgba(255, 255, 255, 0.25);
}
```

---

## Langkah 2: Merancang Kartu Episode (`src/css/05-components/episode-card.css`)

Episode anime ditampilkan dalam kartu rasio `16:9` lengkap dengan thumbnail, penanda durasi, nomor episode, dan sinopsisnya.

Buat berkas `src/css/05-components/episode-card.css`:

```css
/* ==========================================================================
   Component: Episode Card (.c-episode-card)
   ========================================================================== */

.c-seasons-section {
  margin-block-end: var(--space-2xl);
}

.c-seasons-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: var(--space-l);
}

.c-seasons-title {
  font-size: 1.5rem;
  font-weight: 800;
}

.o-grid-episodes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-l) var(--space-m);
}

.c-episode-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  transition: transform 0.2s ease;
}

.c-episode-card:hover {
  transform: translateY(-2px);
}

.c-episode-card__media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--bg-surface-elevated);
  border-radius: var(--radius-s);
  overflow: hidden;
}

.c-episode-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-episode-card__duration {
  position: absolute;
  inset-block-end: var(--space-xs);
  inset-inline-end: var(--space-xs);
  background-color: rgba(0, 0, 0, 0.85);
  color: var(--text-primary);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px var(--space-xs);
  border-radius: var(--radius-s);
}

.c-episode-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.c-episode-card:hover .c-episode-card__title {
  color: var(--text-accent);
}

.c-episode-card__synopsis {
  font-size: 0.875rem;
  color: var(--text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
}
```

---

## Langkah 3: Mendaftarkan Komponen di `src/css/main.css`

Buka berkas `src/css/main.css` dan tambahkan impor kedua komponen baru:

```css
@import "./05-components/card.css";
@import "./05-components/filter-bar.css";
@import "./05-components/series-hero.css";
@import "./05-components/episode-card.css";
```

---

## Langkah 4: Membangun Modul Render Series Detail (`src/js/components/series-detail.js`)

Buat berkas `src/js/components/series-detail.js`:

```javascript
import { getSeriesById } from '../api.js';

/**
 * Mengubah durasi milidetik menjadi menit (contoh: 1559935 ms -> "25m")
 */
function formatDuration(ms) {
  if (!ms) return '24m';
  const minutes = Math.floor(ms / 60000);
  return `${minutes}m`;
}

/**
 * Merender daftar episode untuk musim tertentu
 * @param {Array} episodes - Array objek episode
 * @returns {string} HTML markup
 */
function renderEpisodeList(episodes = []) {
  if (episodes.length === 0) {
    return '<p class="u-text-muted">Tidak ada episode yang tersedia untuk musim ini.</p>';
  }

  return episodes.map(ep => `
    <article class="c-episode-card" data-episode-id="${ep.id}">
      <a href="#/watch/${ep.id}/${ep.slug}" class="c-episode-card__media" aria-label="Tonton Episode ${ep.episode_number}: ${ep.title}">
        <img 
          src="${ep.thumbnail}" 
          alt="${ep.title}" 
          class="c-episode-card__image" 
          loading="lazy"
        />
        <span class="c-episode-card__duration">${formatDuration(ep.duration_ms)}</span>
      </a>
      <div class="c-episode-card__content">
        <a href="#/watch/${ep.id}/${ep.slug}">
          <h4 class="c-episode-card__title">E${ep.episode_number} - ${ep.title}</h4>
        </a>
        <p class="c-episode-card__synopsis">${ep.description || 'Tidak ada deskripsi tersedia.'}</p>
      </div>
    </article>
  `).join('');
}

/**
 * Merender seluruh tampilan halaman detail serial
 * @param {HTMLElement} container - Kontainer target
 * @param {string} seriesId - ID unik serial anime
 */
export async function renderSeriesDetailPage(container, seriesId) {
  const series = await getSeriesById(seriesId);

  if (!series) {
    container.innerHTML = `
      <div class="o-container">
        <h1>Anime Tidak Ditemukan</h1>
        <p class="u-text-muted">Serial dengan ID "${seriesId}" tidak ditemukan.</p>
        <p><a href="#/browse" class="c-btn c-btn--primary" style="margin-block-start: var(--space-m);">Kembali ke Katalog</a></p>
      </div>
    `;
    return;
  }

  // Tentukan musim awal (musim ke-1)
  const seasons = series.seasons || [];
  const initialSeason = seasons[0] || { episodes: [] };
  const firstEpisode = initialSeason.episodes ? initialSeason.episodes[0] : null;

  const backdropUrl = series.images?.hero_background || series.images?.poster_tall || '';
  const genresList = series.categories ? series.categories.join(', ') : 'Anime';
  const ratingText = series.rating?.average ? series.rating.average.toFixed(1) : '5.0';

  container.innerHTML = `
    <!-- 1. Hero Header Section -->
    <section class="c-series-hero">
      <div class="c-series-hero__backdrop" style="background-image: url('${backdropUrl}');"></div>
      
      <div class="o-container c-series-hero__content">
        <h1 class="c-series-hero__title">${series.title}</h1>
        
        <div class="c-series-hero__tags">
          <span class="c-series-hero__tag-badge">${series.maturity_rating || 'TV-14'}</span>
          <span class="c-series-hero__tag-badge">Sub | Dub</span>
          <span>★ ${ratingText} (${(series.rating?.count || 0).toLocaleString()} ulasan)</span>
          <span>•</span>
          <span>${genresList}</span>
        </div>

        <p class="c-series-hero__synopsis">${series.description}</p>

        <div class="c-series-hero__actions">
          ${firstEpisode ? `
            <a href="#/watch/${firstEpisode.id}/${firstEpisode.slug}" class="c-btn c-btn--primary">
              ▶ Mulai Nonton E1
            </a>
          ` : ''}
          <button class="c-btn c-btn--secondary" id="btn-watchlist">
            + Tambah ke Watchlist
          </button>
        </div>
      </div>
    </section>

    <!-- 2. Bagian Musim & Daftar Episode -->
    <section class="o-container c-seasons-section">
      <div class="c-seasons-header">
        <h2 class="c-seasons-title">Episode</h2>
        
        ${seasons.length > 1 ? `
          <select id="season-selector" class="c-select" aria-label="Pilih Musim">
            ${seasons.map((s, idx) => `
              <option value="${s.id}" ${idx === 0 ? 'selected' : ''}>${s.title}</option>
            `).join('')}
          </select>
        ` : ''}
      </div>

      <!-- Grid Episode -->
      <div class="o-grid-episodes" id="episodes-container">
        ${renderEpisodeList(initialSeason.episodes)}
      </div>
    </section>
  `;

  // Listener untuk perpindahan musim (jika ada lebih dari 1 season)
  const seasonSelect = container.querySelector('#season-selector');
  if (seasonSelect) {
    seasonSelect.addEventListener('change', (e) => {
      const selectedSeason = seasons.find(s => s.id === e.target.value);
      const episodeContainer = container.querySelector('#episodes-container');
      if (selectedSeason && episodeContainer) {
        episodeContainer.innerHTML = renderEpisodeList(selectedSeason.episodes);
      }
    });
  }
}
```

---

## 🔍 Cara Verifikasi Mandiri

1. Untuk menguji halaman ini sebelum router otomatis selesai, buka `src/js/app.js` lalu ubah pemanggilannya sementara:
   ```javascript
   import { renderSeriesDetailPage } from './components/series-detail.js';

   document.addEventListener('DOMContentLoaded', () => {
     const mainContent = document.getElementById('main-content');
     renderSeriesDetailPage(mainContent, 'GG5H5XQX4'); // ID serial Frieren
   });
   ```
2. Buka peramban di alamat Live Server Anda.
3. **Cek Tampilan**:
   - Gambar latar *Frieren* muncul di belakang judul dengan gradien gelap lembut.
   - Tombol oranye **"▶ Mulai Nonton E1"** muncul jelas.
   - Di bagian bawah, muncul grid episode 16:9 (*E1 - The Journey's End* dan *E2 - It Didn't Have to Be Magic...*) dengan durasi "25m" dan "26m".
4. Tautan episode mengarah ke URL `# /watch/G0DUND0K2/the-journeys-end`.

---

[⬅️ Sebelumnya: 01. Halaman Katalog (Browse)](./01-halaman-katalog-browse.md) | [Selanjutnya: 03. Halaman Pemutar Video ➡️](./03-halaman-pemutar-video.md)
