# 03. Halaman Pemutar Video Anime (Milestone 3)

Modul ini memandu Anda membangun **Halaman Pemutar Video (Watch Page)**: membuat kontainer video rasio `16:9` anti-CLS, merancang bilah kontrol pemutar interaktif kustom (*custom HTML5 video player controls*), mendeteksi ketidakaktifan kursor (*idle timer*), menangani pintasan keyboard (*keyboard accessibility*), dan menyiapkan kartu episode selanjutnya.

---

## 🎯 Syarat Penguasaan Mandiri (Sinkronisasi Kurikulum freeCodeCamp v9)

Sebelum menulis kode pada modul ini, pastikan Anda telah menguasai materi dari kurikulum resmi freeCodeCamp v9 berikut:

1. **Audio & Video Events (Media API)**:
   - `JavaScript Algorithms and Data Structures (v9)` > `Audio and Video Events (Modul 15)` > `Media Element API` > Objek `HTMLVideoElement`, method `video.play()`, `video.pause()`, properti `video.currentTime`, `video.duration`, `video.muted`, dan event `loadedmetadata`, `timeupdate`, `ended`.
2. **Pewaktuan Asinkron & Inactivity Timer**:
   - `JavaScript Algorithms and Data Structures (v9)` > `Asynchronous JavaScript (Modul 25)` > `Timers & Scheduling` > `setTimeout()`, `clearTimeout()`, serta penanganan event kursor `mousemove` dan `mouseleave`.
3. **Aksesibilitas & Keyboard Navigation**:
   - `JavaScript Algorithms and Data Structures (v9)` > `JavaScript A11y (Modul 10)` & `DOM Events (Modul 9)` > `Keyboard Interaction` > `keydown` listener, evaluasi `e.key` (`Space`, `ArrowRight`, `ArrowLeft`, `f`, `m`), dan `e.preventDefault()`.
4. **Browser Fullscreen API**:
   - `JavaScript Algorithms and Data Structures (v9)` > `DOM & Web APIs (Pengayaan Modul 9)` > `Fullscreen Mode` > `element.requestFullscreen()`, `document.exitFullscreen()`, dan properti `document.fullscreenElement`.

---

## Langkah 1: Merancang Komponen Pemutar Video (`src/css/05-components/player.css`)

Bilah kontrol video diletakkan di atas kanvas video menggunakan `position: absolute` dan efek gradien gelap di bagian bawah.

Buat berkas `src/css/05-components/player.css`:

```css
/* ==========================================================================
   Component: Custom Video Player (.c-player)
   ========================================================================== */

.c-player-wrapper {
  margin-block-end: var(--space-xl);
}

.c-player {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--color-primitive-black);
  border-radius: var(--radius-m);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  user-select: none;
}

.c-player__video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Kontrol Pemutar Kustom */
.c-player__controls {
  position: absolute;
  inset-inline: 0;
  inset-block-end: 0;
  z-index: 10;
  padding: var(--space-m);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  opacity: 1;
  transition: opacity 0.3s ease;
}

/* Sembunyikan kontrol jika kursor diam (idle) */
.c-player.is-idle .c-player__controls {
  opacity: 0;
  pointer-events: none;
}

/* Seekbar / Interactive Progress Bar */
.c-player__progress-container {
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  transition: height 0.15s ease;
}

.c-player__progress-container:hover {
  height: 10px;
}

.c-player__progress-bar {
  height: 100%;
  width: 0%;
  background-color: var(--action-primary);
  border-radius: 3px;
  position: relative;
}

/* Tombol-tombol di baris bawah */
.c-player__bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-player__group {
  display: flex;
  align-items: center;
  gap: var(--space-m);
}

.c-player__btn {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 1.25rem;
  padding: var(--space-2xs);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, transform 0.1s ease;
}

.c-player__btn:hover {
  color: var(--text-accent);
}

.c-player__btn:active {
  transform: scale(0.9);
}

.c-player__time {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  font-variant-numeric: tabular-nums;
}

/* Metadata Episode di bawah pemutar */
.c-watch-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding-block-end: var(--space-xl);
  border-block-end: 1px solid var(--bg-surface-elevated);
}

.c-watch-meta__series-title {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 700;
  text-transform: uppercase;
}

.c-watch-meta__series-title:hover {
  color: var(--text-accent);
}

.c-watch-meta__episode-title {
  font-size: 1.5rem;
  font-weight: 800;
}

/* Kartu Episode Berikutnya */
.c-next-episode-card {
  margin-block-start: var(--space-l);
  background-color: var(--bg-surface);
  border: 1px solid var(--bg-surface-elevated);
  border-radius: var(--radius-m);
  padding: var(--space-m);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-next-episode-card__info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
```

---

## Langkah 2: Mendaftarkan Gaya di `src/css/main.css`

Buka berkas `src/css/main.css` dan tambahkan impor komponen player:

```css
@import "./05-components/card.css";
@import "./05-components/filter-bar.css";
@import "./05-components/series-hero.css";
@import "./05-components/episode-card.css";
@import "./05-components/player.css";
```

---

## Langkah 3: Membangun Modul Render Pemutar (`src/js/components/watch.js`)

Buat berkas `src/js/components/watch.js`:

```javascript
import { getAllSeries } from '../api.js';

/**
 * Format detik menjadi tampilan waktu MM:SS
 * @param {number} seconds - Waktu dalam detik
 * @returns {string} Contoh: "04:15"
 */
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Mencari data episode dan serial pemiliknya berdasarkan ID episode
 */
async function findEpisodeData(episodeId) {
  const allSeries = await getAllSeries();
  
  for (const series of allSeries) {
    for (const season of series.seasons || []) {
      const epIndex = season.episodes.findIndex(e => e.id === episodeId);
      if (epIndex !== -1) {
        return {
          series,
          season,
          episode: season.episodes[epIndex],
          nextEpisode: season.episodes[epIndex + 1] || null
        };
      }
    }
  }
  return null;
}

/**
 * Merender seluruh tampilan halaman Watch Page
 * @param {HTMLElement} container - Kontainer target
 * @param {string} episodeId - ID episode (contoh: 'G0DUND0K2')
 */
export async function renderWatchPage(container, episodeId) {
  const data = await findEpisodeData(episodeId);

  if (!data) {
    container.innerHTML = `
      <div class="o-container">
        <h1>Episode Tidak Ditemukan</h1>
        <p class="u-text-muted">Tidak ada episode dengan ID "${episodeId}".</p>
        <p><a href="#/browse" class="c-btn c-btn--primary" style="margin-block-start: var(--space-m);">Kembali ke Katalog</a></p>
      </div>
    `;
    return;
  }

  const { series, episode, nextEpisode } = data;
  const videoSrc = episode.video_url || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  container.innerHTML = `
    <div class="o-container c-player-wrapper">
      <!-- 1. Pemutar Video Kustom -->
      <div class="c-player" id="player-container">
        <video 
          id="main-video" 
          class="c-player__video" 
          src="${videoSrc}" 
          preload="metadata"
          playsinline
        ></video>

        <!-- Bilah Kontrol Kustom -->
        <div class="c-player__controls" id="player-controls">
          <!-- Interactive Progress Bar (Seekbar) -->
          <div class="c-player__progress-container" id="progress-container" aria-label="Seekbar Timeline">
            <div class="c-player__progress-bar" id="progress-bar"></div>
          </div>

          <!-- Baris Kontrol Bawah -->
          <div class="c-player__bottom-bar">
            <div class="c-player__group">
              <button class="c-player__btn" id="btn-play-pause" aria-label="Putar / Jeda">▶</button>
              <button class="c-player__btn" id="btn-skip-back" aria-label="Mundur 10 Detik">↺ 10</button>
              <button class="c-player__btn" id="btn-skip-fwd" aria-label="Maju 10 Detik">10 ↻</button>
              <span class="c-player__time">
                <span id="current-time">00:00</span> / <span id="total-duration">00:00</span>
              </span>
            </div>

            <div class="c-player__group">
              <button class="c-player__btn" id="btn-mute" aria-label="Mute Audio">🔊</button>
              <button class="c-player__btn" id="btn-fullscreen" aria-label="Layar Penuh">⛶</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Metadata Episode di Bawah Video -->
      <section class="c-watch-meta">
        <a href="#/series/${series.id}/${series.slug}" class="c-watch-meta__series-title">
          ← ${series.title}
        </a>
        <h1 class="c-watch-meta__episode-title">E${episode.episode_number} - ${episode.title}</h1>
        <p class="u-text-muted">${episode.description}</p>
      </section>

      <!-- 3. Kartu Episode Selanjutnya (Jika Ada) -->
      ${nextEpisode ? `
        <section class="c-next-episode-card">
          <div class="c-next-episode-card__info">
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-accent);">EPISODE BERIKUTNYA</span>
            <strong>E${nextEpisode.episode_number} - ${nextEpisode.title}</strong>
          </div>
          <a href="#/watch/${nextEpisode.id}/${nextEpisode.slug}" class="c-btn c-btn--primary">
            Nonton Sekarang →
          </a>
        </section>
      ` : ''}
    </div>
  `;

  // Inisialisasi logika pemutar video
  initPlayerLogic(container);
}

/**
 * Logika interaksi HTML5 Media API dan Keyboard Event
 */
function initPlayerLogic(container) {
  const player = container.querySelector('#player-container');
  const video = container.querySelector('#main-video');
  const btnPlay = container.querySelector('#btn-play-pause');
  const btnMute = container.querySelector('#btn-mute');
  const btnFullscreen = container.querySelector('#btn-fullscreen');
  const btnSkipBack = container.querySelector('#btn-skip-back');
  const btnSkipFwd = container.querySelector('#btn-skip-fwd');
  const progressContainer = container.querySelector('#progress-container');
  const progressBar = container.querySelector('#progress-bar');
  const currentTimeEl = container.querySelector('#current-time');
  const totalDurationEl = container.querySelector('#total-duration');

  // Toggle Play / Pause
  const togglePlay = () => {
    if (video.paused) {
      video.play();
      btnPlay.textContent = '⏸';
    } else {
      video.pause();
      btnPlay.textContent = '▶';
    }
  };

  btnPlay.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);

  // Perbarui durasi saat metadata siap
  video.addEventListener('loadedmetadata', () => {
    totalDurationEl.textContent = formatTime(video.duration);
  });

  // Perbarui progress bar saat video berjalan
  video.addEventListener('timeupdate', () => {
    currentTimeEl.textContent = formatTime(video.currentTime);
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
  });

  // Interaksi Scrubbing pada Seekbar
  progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickPercent = clickX / rect.width;
    video.currentTime = clickPercent * video.duration;
  });

  // Tombol Lompat Waktu
  btnSkipBack.addEventListener('click', () => video.currentTime -= 10);
  btnSkipFwd.addEventListener('click', () => video.currentTime += 10);

  // Mute Audio
  btnMute.addEventListener('click', () => {
    video.muted = !video.muted;
    btnMute.textContent = video.muted ? '🔇' : '🔊';
  });

  // Layar Penuh (Fullscreen API)
  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      player.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  });

  // Logika Idle Timer: Sembunyikan kontrol jika kursor diam 3 detik
  let idleTimer;
  player.addEventListener('mousemove', () => {
    player.classList.remove('is-idle');
    clearTimeout(idleTimer);
    if (!video.paused) {
      idleTimer = setTimeout(() => player.classList.add('is-idle'), 3000);
    }
  });

  player.addEventListener('mouseleave', () => {
    if (!video.paused) player.classList.add('is-idle');
  });

  // Pintasan Keyboard Aksesibel
  const handleKeyDown = (e) => {
    // Jangan picu pintasan jika pengguna sedang mengetik di input form
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === ' ' || e.key === 'k') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowRight' || e.key === 'l') {
      video.currentTime += 10;
    } else if (e.key === 'ArrowLeft' || e.key === 'j') {
      video.currentTime -= 10;
    } else if (e.key === 'f') {
      btnFullscreen.click();
    } else if (e.key === 'm') {
      btnMute.click();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
}
```

---

## 🔍 Cara Verifikasi Mandiri

1. Di `src/js/app.js`, panggil sementara modul watch:
   ```javascript
   import { renderWatchPage } from './components/watch.js';

   document.addEventListener('DOMContentLoaded', () => {
     const mainContent = document.getElementById('main-content');
     renderWatchPage(mainContent, 'G0DUND0K2'); // ID Episode 1 Frieren
   });
   ```
2. Buka peramban di Live Server.
3. **Uji Pemutar Video**:
   - Klik tombol **▶** atau tekan tombol **Spasi**: Video sampel mulai memutar dan tombol berubah menjadi **⏸**.
   - Perhatikan seekbar berwarna oranye bergerak mulus seiring berjalannya waktu.
   - Klik di tengah garis seekbar: Video melompat ke menit tersebut secara akurat.
   - Diamkan kursor mouse selama 3 detik di atas video: Bilah kontrol otomatis memudar (*fade-out*). Gerakkan mouse kembali: Bilah kontrol muncul seketika!
   - Tekan tombol **F**: Video beralih ke mode layar penuh (*fullscreen*).

---

[⬅️ Sebelumnya: 02. Halaman Detail Serial](./02-halaman-detail-serial.md) | [Selanjutnya: 04. Integrasi SPA Router ➡️](./04-integrasi-spa-router.md)
