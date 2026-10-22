# 🏆 5. Proyek Milestone freeCodeCamp v9

Untuk membuktikan pemahaman dan membangun portofolio nyata tanpa tersesat di puluhan latihan kecil, fokuskan pengerjaan Anda pada **3 Tonggak Proyek Utama** kurikulum freeCodeCamp v9 berikut.

---

## 🎯 Peta Tonggak Proyek (*Project Milestones*)

```text
┌────────────────────────────────────────────────────────────────────────┐
│ MILESTONE 1: STATE & INTERAKTIVITAS DOM                                │
│ Proyek Acuan: Role Playing Game (RPG) / Counter Sederhana             │
│ ├─ Fokus: Variables (const/let), Conditionals, Functions, DOM Events  │
│ └─ Output: Antarmuka dinamis yang merespons klik tombol & aksi player  │
└────────────────────────────────────┬───────────────────────────────────┘
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MILESTONE 2: DATA TRANSFORMATION & LOCALSTORAGE CRUD                   │
│ Proyek Acuan: Calorie Counter / Music Player / Task Manager App        │
│ ├─ Fokus: Array Methods (map, filter), Form Validation, LocalStorage  │
│ └─ Output: Aplikasi produktivitas yang menyimpan data di browser      │
└────────────────────────────────────┬───────────────────────────────────┘
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│ MILESTONE 3: ASYNCHRONOUS API CONSUMER                                 │
│ Proyek Acuan: Pokémon Search App / Weather Dashboard                   │
│ ├─ Fokus: REST API, fetch(), async/await, Error Handling, Dynamic DOM │
│ └─ Output: Aplikasi yang mengonsumsi data nyata dari server publik    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🗡️ Milestone 1: Role Playing Game (State & DOM Interaktivitas)

### Tujuan Pembelajaran
Memahami bagaimana variabel menyimpan keadaan (*state*) permainan, bagaimana fungsi mengubah nilai tersebut, dan bagaimana `DOM` memperbarui tampilan layar secara instan.

### Fitur Kunci yang Wajib Dibangun
1. **Penyimpanan State**: Kelola variabel `xp`, `health`, `gold`, `currentWeapon`, dan `fighting` menggunakan `const` dan `let`.
2. **Event Listener**: Dengarkan kejadian klik pada tombol aksi (`Beli Senjata`, `Serang Monster`, `Lari`).
3. **Pembaruan Tampilan**: Perbarui elemen teks angka darah dan emas menggunakan properti `innerText` atau `textContent`.
4. **Logika Percabangan**: Gunakan `if/else` untuk memeriksa apakah nyawa pemain telah mencapai nol (kalah) atau bos utama berhasil dikalahkan (menang).

---

## 🎵 Milestone 2: Calorie Counter / Task Manager (Data & LocalStorage)

### Tujuan Pembelajaran
Menguasai transformasi kumpulan data (*array of objects*), validasi formulir masukan pengguna, dan persistensi data lokal.

### Fitur Kunci yang Wajib Dibangun
1. **Validasi Formulir**: Dengarkan kejadian `submit`, terapkan `event.preventDefault()`, dan validasi format angka menggunakan `Regex`.
2. **Koleksi Data**: Simpan setiap masukan tugas atau kalori sebagai sebuah `object` ke dalam sebuah `array` terpusat.
3. **Kalkulasi Deklaratif**: Gunakan metode `reduce()` untuk menghitung akumulasi total kalori yang dikonsumsi secara otomatis.
4. **Persistensi State**: Simpan daftar item ke dalam `localStorage` menggunakan `JSON.stringify()` dan muat kembali dengan `JSON.parse()`.
5. **Penghapusan Bersih**: Gunakan `filter()` untuk menghapus item spesifik berdasarkan identifikasi unik (`id`) tanpa merusak data asli.

---

## ⚡ Milestone 3: Pokémon Search App (Konsumsi REST API Asinkron)

### Tujuan Pembelajaran
Menguasai komunikasi jaringan dengan server eksternal, penanganan *asynchronous*, serta pengelolaan antarmuka yang ramah pengguna saat data sedang dimuat.

### Fitur Kunci yang Wajib Dibangun
1. **HTTP Request**: Gunakan `fetch()` dengan sintaks `async` / `await` untuk mengambil data dari [PokéAPI](https://pokeapi.co/).
2. **Penanganan Galat (Error Handling)**: Bungkus pemanggilan dengan blok `try...catch` dan tampilkan pesan kesalahan jika nama yang dicari tidak ditemukan (`status 404`).
3. **Render Komponen Dinamis**: Ekstrak informasi nama, tipe elemen, status kekuatan, dan gambar monster dari payload respons JSON, lalu render ke dalam elemen `DOM`.
4. **Status Pemuatan (*Loading State*)**: Nonaktifkan tombol pencarian dan tampilkan indikator pemuatan teks saat permintaan jaringan sedang berjalan.

---

## ✅ Lembar Periksa Kesiapan Mandiri (*Self-Assessment Checklist*)

Sebelum melangkah ke tahap berikutnya (*Frontend Libraries / React*), pastikan Anda mampu mencentang seluruh daftar berikut:

- [ ] Saya memahami perbedaan mendasar antara `const`, `let`, dan tidak lagi menggunakan `var`.
- [ ] Saya dapat menulis `arrow function` dengan benar dan memahami perilakunya.
- [ ] Saya fasih memanipulasi data menggunakan metode `map()`, `filter()`, dan `reduce()`.
- [ ] Saya terbiasa menyalin objek dan array secara aman menggunakan `spread operator` (`...`).
- [ ] Saya dapat memilih elemen `DOM` dan menangani *event* pengguna secara dinamis.
- [ ] Saya memahami cara membaca dan menulis data ke peramban menggunakan `localStorage`.
- [ ] Saya mampu mengambil data dari REST API publik menggunakan `fetch()`, `async`/`await`, dan menangani kegagalan dengan `try...catch`.

---

## 🚀 Langkah Selanjutnya: Masuk ke Ekosistem Modern

Setelah menyelesaikan ketiga proyek tonggak ini:
1. **Anda telah menguasai 80% fondasi JavaScript yang dibutuhkan di industri**.
2. Anda siap mempelajari pustaka frontend modern seperti **React**, **Vue**, atau **Svelte** dengan lancar tanpa terbentur masalah sintaks dasar.
3. Seluruh konsep yang Anda pelajari di sini (`immutability`, transformasi array, pemisahan fungsi, manajemen state) adalah konsep yang sama persis yang digunakan pada framework frontend kelas industri.
4. **Tantangan Mahakarya (Capstone Real-World Project)**: Terapkan dan uji pemahaman fundamental Anda dengan membangun platform web streaming berskala penuh tanpa framework (*Full Vanilla SPA*) pada [Proyek Crunchyroll Clone](../projects/crunchyroll-clone/README.md).

---

## ❓ Pertanyaan Evaluasi (Questions)

Pada pembangunan aplikasi pencarian data (Milestone 3), mengapa penanganan status pemuatan (*loading state*) sangat penting bagi pengalaman pengguna (*user experience*)?

- [ ] Karena peramban web akan otomatis membatalkan permintaan jika tidak ada animasi pemuatan.
- [x] Untuk memberitahu pengguna bahwa permintaan sedang diproses di server, mencegah klik ganda (*duplicate submission*), dan menghindari tampilan antarmuka yang tampak membeku.
- [ ] Karena API publik mewajibkan peramban mengirimkan sinyal pemuatan ke server sebelum data dikirimkan.
- [ ] Agar kecepatan koneksi internet pengguna meningkat secara otomatis.

---

[⬅️ Sebelumnya](4-fase-3-deferred-theory.md) | [Selanjutnya: Proyek Mahakarya (Crunchyroll Clone) ➡️](../projects/crunchyroll-clone/README.md)
