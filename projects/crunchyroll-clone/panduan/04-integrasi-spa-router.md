# 04. Integrasi Client-Side SPA Router (Milestone 4)

Modul ini memandu Anda menyatukan ketiga halaman inti yang telah Anda bangun menjadi sebuah **Single Page Application (SPA)** yang utuh dan mulus: berpindah dari **Katalog ➔ Detail Serial ➔ Nonton Episode**, lalu kembali dengan tombol *Back* peramban tanpa pernah ada kedipan putih (*full page reload*).

---

## 🎯 Syarat Penguasaan Mandiri (Sinkronisasi Kurikulum freeCodeCamp v9)

Sebelum menulis kode pada modul ini, pastikan Anda telah menguasai materi dari kurikulum resmi freeCodeCamp v9 berikut:

1. **Regular Expression & Capture Groups**:
   - `JavaScript Algorithms and Data Structures (v9)` > `Basic Regex (Modul 12)` > `Pattern Matching & Capture Groups` > Pola `^...$`, grouping `([a-zA-Z0-9_-]+)`, dan method `String.prototype.match()` untuk mengekstrak parameter dinamis `:id` dan `:slug`.
2. **Hash Navigation & Event Listener**:
   - `JavaScript Algorithms and Data Structures (v9)` > `DOM Manipulation and Events (Modul 9)` > `Window Location & Events` > Properti `window.location.hash`, event `hashchange`, dan split string URL.
3. **Scroll Restoration & DOM State**:
   - `JavaScript Algorithms and Data Structures (v9)` > `DOM Manipulation and Events (Modul 9)` > `Viewport & Document Scrolling` > `window.scrollTo({ top: 0 })` dan sinkronisasi kelas CSS `.is-active` pada navigasi utama.

---

## Langkah 1: Membangun Modul Router Klien (`src/js/router.js`)

Kita akan membangun router SPA mandiri berukuran sangat ringkas yang memetakan URL hash ke modul render komponen yang sesuai.

Buat berkas `src/js/router.js`:

```javascript
import { renderCatalogPage } from './components/catalog.js';
import { renderSeriesDetailPage } from './components/series-detail.js';
import { renderWatchPage } from './components/watch.js';

/**
 * Daftar Rute Aplikasi (Route Table)
 */
const routes = [
  {
    // Pola: #/browse atau #/
    pattern: /^#\/(?:browse)?(?:\?.*)?$/,
    handler: (container, query) => {
      const params = new URLSearchParams(query);
      renderCatalogPage(container, {
        category: params.get('category') || '',
        sort_by: params.get('sort_by') || 'popularity'
      });
    }
  },
  {
    // Pola: #/series/:id/:slug
    pattern: /^#\/series\/([a-zA-Z0-9_-]+)(?:\/([a-zA-Z0-9_-]+))?$/,
    handler: (container, match) => {
      const seriesId = match[1];
      renderSeriesDetailPage(container, seriesId);
    }
  },
  {
    // Pola: #/watch/:episodeId/:slug
    pattern: /^#\/watch\/([a-zA-Z0-9_-]+)(?:\/([a-zA-Z0-9_-]+))?$/,
    handler: (container, match) => {
      const episodeId = match[1];
      renderWatchPage(container, episodeId);
    }
  }
];

/**
 * Memproses perubahan rute dan merender halaman yang cocok
 */
export function handleRouting() {
  const container = document.getElementById('main-content');
  if (!container) return;

  const hash = window.location.hash || '#/browse';
  const [pathPart, queryPart] = hash.split('?');

  let routeFound = false;

  for (const route of routes) {
    const match = hash.match(route.pattern);
    if (match) {
      // Reset posisi scroll ke atas
      window.scrollTo(0, 0);

      // Panggil fungsi render yang sesuai
      route.handler(container, match || queryPart);
      routeFound = true;
      break;
    }
  }

  // Jika URL tidak cocok dengan pola rute manapun, arahkan ke katalog
  if (!routeFound) {
    window.location.hash = '#/browse';
  }

  // Perbarui status tautan aktif di Navbar
  updateNavbarActiveState(hash);
}

/**
 * Menandai link aktif di navigasi utama
 */
function updateNavbarActiveState(hash) {
  const links = document.querySelectorAll('.c-navbar__link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && hash.startsWith(href)) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });
}
```

---

## Langkah 2: Mengintegrasikan Router di `src/js/app.js`

Buka berkas `src/js/app.js`, hapus kode uji coba sebelumnya, lalu ganti dengan inisialisasi router resmi:

```javascript
import { handleRouting } from './router.js';

/**
 * Inisialisasi Aplikasi Utama
 */
function init() {
  // 1. Tangani perubahan URL saat tombol Back/Forward peramban diklik
  window.addEventListener('hashchange', handleRouting);

  // 2. Jalankan routing pertama kali saat aplikasi dibuka
  handleRouting();
}

// Jalankan saat dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', init);
```

---

## 🔍 Cara Verifikasi & Uji Coba "The Golden Path"

Sekarang saatnya menguji seluruh aplikasi secara utuh end-to-end:

1. Buka halaman utama aplikasi Anda di Live Server (URL akan otomatis diarahkan ke `#/browse`).
2. **Langkah 1 (Katalog)**:
   - Anda melihat daftar anime terpopuler.
   - Klik kartu **"Frieren: Beyond Journey's End"**.
   - Perhatikan URL seketika berubah menjadi `#/series/GG5H5XQX4/frieren-beyond-journeys-end`.
   - **Verifikasi**: Tidak ada kedip putih reload! Transisi halaman terjadi seketika di peramban.
3. **Langkah 2 (Detail Serial)**:
   - Anda berada di halaman detail Frieren dengan latar belakang hero lebar dan daftar episode.
   - Klik tombol oranye **"▶ Mulai Nonton E1"** (atau klik kartu Episode 1).
   - Perhatikan URL berubah menjadi `#/watch/G0DUND0K2/the-journeys-end`.
4. **Langkah 3 (Menonton Video)**:
   - Pemutar video muncul. Tekan tombol `Space` untuk memutar video.
   - Seekbar bergerak, waktu pemutaran berjalan.
5. **Langkah 4 (Uji Tombol Back & Forward Peramban)**:
   - Tekan tombol **Back (Kembali)** di pojok kiri atas peramban Anda.
   - Anda seketika kembali ke halaman detail serial Frieren!
   - Tekan tombol **Back** sekali lagi.
   - Anda kembali ke halaman katalog utama!
   - Tekan tombol **Forward (Maju)**: Anda bergerak maju kembali ke halaman detail tanpa ada error!

---

## 🏆 Selamat! Anda Telah Menyelesaikan Proyek Ini!

Dengan menyelesaikan langkah-langkah di atas, Anda telah membuktikan bahwa Anda mampu membangun platform streaming video modern dengan:
- **Arsitektur CSS Skala Enterprise**: Menerapkan ITCSS, 2-Tier Design Tokens, dan metodologi BEM tanpa konflik spesifisitas.
- **Logika JavaScript Asli yang Kuat**: Memanipulasi DOM dinamis, data relasional bersarang, dan *asynchronous data fetching* tanpa ketergantungan pada *library* luar.
- **Standar Aksesibilitas Web**: Menangani kontrol keyboard, aspek rasio anti-CLS, dan semantik HTML5.
- **Client-Side Routing SPA**: Memahami bagaimana framework besar seperti React Router atau Next.js bekerja di tingkat paling mendasar.

---

[⬅️ Sebelumnya: 03. Halaman Pemutar Video](./03-halaman-pemutar-video.md) | [Kembali ke Daftar Isi 🏠](./README.md)
