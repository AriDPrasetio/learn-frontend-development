import { getCategories, getAllSeries } from "./api.js";
async function initApp() {
  console.log("Memulai inisialisasi aplikasi Crunchyroll Clone...");
  const mainContent = document.getElementById("main-content");
  try {
    const [categories, seriesList] = await Promise.all([
      getCategories(),
      getAllSeries(),
    ]);
    console.log("Kategori terdeteksi:", categories);
    console.log("Serial anime terdeteksi:", seriesList);
    mainContent.innerHTML = `
    <div class="o-container">
    <h1 style="margin-block-end: var(--space-s);">Fondasi Proyek Berhasil Diinisialisasi </h1>
    <p class="u-text-muted">
    Berhasil memuat <strong>${categories.length} kategori</strong> dan <strong>${seriesList.length} serial anime</strong> dari berkas data lokal.
    </p>
    </div>
    `;
  } catch (error) {
    console.error("Terjadi kesalahan inisialisasi:", error);
    mainContent.innerHTML = `
    <div class="o-container">
    <p style="color: #ff4d4f;">
    Gagal memuat data lokal. Periksa console peramban untuk rincian error.
    </p>
    </div>
    `;
  }
}
document.addEventListener("DOMContentLoaded", initApp);
