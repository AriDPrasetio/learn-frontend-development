# Apa Saja Praktik Terbaik untuk Merancang Breadcrumbs?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau (*preview*) dari konsep-konsep desain ini agar Anda lebih memahami cara kerjanya. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

Dalam hal desain web, ada banyak jenis alat bantu navigasi (*navigational aids*) yang dapat Anda gunakan. Contohnya meliputi bilah navigasi atas (*top navigation bars*), bilah sisi (*sidebars*), dan *footers*. Namun jika situs Anda cenderung lebih kompleks dengan tingkat navigasi yang lebih dalam, Anda mungkin ingin mempertimbangkan untuk menggunakan `breadcrumbs` (jejak navigasi).

`Breadcrumbs` adalah alat bantu navigasi yang menunjukkan kepada pengguna posisi mereka berada dalam hierarki situs. Berikut adalah contoh tampilan `breadcrumbs` untuk sebuah maket (*mock-up*) situs web elektronik:

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home / Electronics / Phones / Smartphone XYZ
</div>
```

```css
.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

Di sebagian besar situs web, `breadcrumbs` ditampilkan di bagian atas halaman, menunjukkan posisi halaman saat ini dalam struktur situs. Dalam contoh ini, produk `Smartphone XYZ` berada di dalam kategori `Phones`, yang berada di dalam kategori `Electronics`, yang ditautkan dari halaman `Home`. `Breadcrumbs` menampilkan jalur yang sama ini tidak peduli bagaimana pengguna sampai ke halaman tersebut. Seseorang yang mengikuti tautan dari beranda dan seseorang yang mendarat di produk tersebut langsung dari hasil pencarian akan sama-sama melihat `Home / Electronics / Phones / Smartphone XYZ`. Anda mungkin pernah berinteraksi dengan `breadcrumbs` di sebuah situs web saat Anda mencari suatu produk atau informasi tertentu.

Penggunaan `breadcrumbs` sangat membantu karena dapat membantu pengguna memahami di mana posisi mereka dalam hierarki situs dan bagaimana cara berpindah naik ke halaman-halaman yang lebih luas di atas halaman saat ini. Ini sangat berguna ketika seorang pengguna datang dari hasil pencarian atau tautan eksternal dan perlu memahami konteks halaman tempat mereka berada.

Beberapa situs web menggunakan jenis `breadcrumbs` yang berbeda yang melacak halaman-halaman yang benar-benar dikunjungi oleh pengguna, mirip dengan riwayat (*history*) peramban. Pelajaran ini berfokus pada `breadcrumbs` berbasis hierarki (*hierarchy-based breadcrumbs*), yang merupakan jenis paling umum.

## Memilih Karakter Pemisah (Separator)

Saat merancang `breadcrumbs`, ada beberapa pertimbangan yang perlu diingat. Yang pertama adalah menentukan apa yang akan menjadi pemisahnya (*separator*). Karakter pemisah adalah karakter yang memisahkan berbagai tingkat hierarki. Karakter pemisah yang umum meliputi tanda lebih besar dari (`>`), tanda petik sudut kanan (`»`), dan garis miring (`/`).

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
</div>
```

```css
.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

## Penempatan (Placement)

Pertimbangan kedua adalah penempatan `breadcrumbs`. `Breadcrumbs` biasanya ditempatkan di bagian atas halaman, baik di atas maupun di bawah bilah navigasi utama. Pengguna tidak seharusnya bersusah payah untuk menemukan `breadcrumbs`, jadi pastikan elemen tersebut terlihat dan mudah ditemukan.

```html
<link rel="stylesheet" href="styles.css">
<nav class="main-nav">
  <a href="#">Home</a>
  <a href="#">Electronics</a>
  <a href="#">Phones</a>
</nav>
<div class="breadcrumbs">
  Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
</div>
```

```css
.main-nav {
  background-color: #333;
  padding: 1rem;
}

.main-nav a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}

.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

Dalam contoh ini, navigasi utama menyertakan tautan ke `Phones` meskipun `Phones` adalah kategori di dalam `Electronics`. Itu tidak masalah, karena tautan navigasi utama sering kali merupakan pintasan (*shortcuts*) ke halaman-halaman populer dan tidak harus berupa kategori tingkat teratas. `Breadcrumbs` tetap menampilkan hierarki lengkap, sehingga pengguna dapat melihat bahwa `Phones` berada di bawah `Electronics`.

## Ukuran (Size)

Pertimbangan lain adalah ukuran dari `breadcrumbs`. Anda ingin memastikan `breadcrumbs` cukup besar untuk dibaca dengan mudah, tetapi tidak terlalu besar sehingga memakan terlalu banyak ruang di halaman. Ingatlah, `breadcrumbs` tidak dimaksudkan untuk berfungsi sebagai alat navigasi utama, melainkan sebagai alat bantu navigasi sekunder. Di situs web yang memuat banyak informasi di halamannya, pengguna dapat dengan mudah melihat posisi mereka dalam hierarki dan menavigasi naik ke halaman induk menggunakan `breadcrumbs`.

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home &gt; Electronics &gt; Phones &gt; Smartphone XYZ
</div>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

```css
.breadcrumbs {
  font-size: 1rem;
  color: #555;
  margin: 1rem 0;
}   

p {
  font-size: 1.2rem;
  line-height: 1.6;
}
```

## Kapan Menggunakan Breadcrumbs

Jadi kapan Anda harus menggunakan `breadcrumbs` di situs Anda? Jika situs Anda sederhana dan memiliki hierarki yang dangkal (*shallow hierarchy*), `breadcrumbs` mungkin tidak diperlukan. Hierarki yang dangkal berarti bahwa situs tersebut hanya memiliki beberapa tingkat navigasi, sehingga `breadcrumbs` mungkin tidak memberikan banyak nilai tambah. Biasanya, Anda akan melihat `breadcrumbs` di situs *e-commerce*, situs berita, dan situs lain dengan hierarki yang dalam seperti situs dokumentasi teknis.

## Pertanyaan (Questions)

Apa itu `breadcrumbs`?

- [x] Alat bantu navigasi yang menunjukkan kepada pengguna posisi mereka dalam hierarki situs.
- [ ] Jenis kontainer untuk gambar.
- [ ] Alat bantu navigasi yang hanya ditemukan di situs seluler.
- [ ] Jenis kontainer untuk teks.

Kapan Anda sebaiknya menggunakan `breadcrumbs` di situs Anda?

- [ ] Anda tidak boleh menggunakan `breadcrumbs`.
- [x] Jika situs Anda memiliki hierarki navigasi yang dalam.
- [ ] Jika situs Anda sederhana dan memiliki hierarki yang dangkal.
- [ ] Anda hanya boleh menggunakannya untuk situs seluler.

Manakah dari berikut ini yang merupakan karakter pemisah (*separator*) umum untuk `breadcrumbs`?

- [ ] `>>>>`
- [ ] `||||`
- [x] `/`
- [ ] `&&&`

---

[⬅️ Sebelumnya](3-what-are-best-practices-for-designing-a-dark-mode-feature.md) | [Selanjutnya ➡️](5-what-are-best-practices-for-designing-cards.md)
