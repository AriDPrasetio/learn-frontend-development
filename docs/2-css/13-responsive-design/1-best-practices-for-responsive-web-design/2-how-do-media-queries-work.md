# Bagaimana Cara Kerja Media Queries, dan Apa Saja Media Types serta Media Features yang Umum?

`Media queries` adalah komponen fundamental dari `responsive web design`, yang memungkinkan pengembang untuk menerapkan `styles` yang berbeda berdasarkan karakteristik perangkat atau *browser* pengguna. `Media queries` menyediakan cara untuk menyesuaikan presentasi konten ke berbagai perangkat tanpa mengubah konten itu sendiri.

Pada intinya, sebuah `media query` terdiri dari sebuah `media type` dan satu atau lebih ekspresi yang memeriksa kondisi tertentu. Jika kondisi-kondisi ini bernilai benar (`true`), `styles` yang sesuai akan diterapkan. Mekanisme ini memungkinkan terciptanya desain responsif yang beradaptasi dengan berbagai ukuran layar, resolusi, dan kemampuan perangkat.

## Sintaks Dasar dari Media Query

Sintaks dasar dari sebuah `media query` di `CSS` terlihat seperti ini:

```css
@media mediatype and (feature: value) {
  /* CSS rules go here */
}
```

Dalam struktur ini, `mediatype` menentukan jenis media yang menjadi target `query`, dan pasangan `feature: value` mendefinisikan kondisi yang harus dipenuhi agar `styles` tersebut diterapkan.

## Media Types yang Umum

`Media types` mendeskripsikan kategori umum dari suatu perangkat. Mari kita bahas `media types` yang paling umum digunakan:

- `all` cocok untuk semua perangkat. Ini adalah nilai bawaan (*default*) jika tidak ada `media type` yang ditentukan.
- `print` ditujukan untuk materi halaman cetak dan dokumen yang dilihat di layar dalam mode pratinjau cetak (*print preview*).
- `screen` ditujukan terutama untuk layar perangkat digital.

Di masa lalu, terdapat lebih banyak `media types`, seperti `handheld` dan `tv`, tetapi sebagian besar di antaranya telah ditinggalkan (*deprecated*) dan digantikan oleh penggunaan *features* untuk menargetkan perangkat secara lebih tepat.

## Media Features yang Umum

`Media features` mendeskripsikan karakteristik spesifik dari *user agent*, perangkat output, atau lingkungan. Mari kita bahas beberapa `media features` yang paling sering digunakan. `width` dan `height` mengacu pada lebar dan tinggi `viewport`, dan sering digunakan dengan prefiks `min-` atau `max-` untuk *range queries*. Berikut adalah sebuah contoh:

```css
@media screen and (min-width: 768px) {
  /* Styles for screens at least 768px wide */
}
```

`aspect-ratio` mendeskripsikan rasio antara lebar dan tinggi dari `viewport`. Berikut adalah contohnya:

```css
@media screen and (aspect-ratio: 16/9) {
  /* Styles for screens with a 16:9 aspect ratio */
}
```

`Feature` `orientation` menunjukkan apakah perangkat berada dalam orientasi lanskap (*landscape*) atau potret (*portrait*). Berikut adalah contohnya:

```css
@media screen and (orientation: landscape) {
  /* Styles for landscape orientation */
}
```

`Feature` `resolution` mendeskripsikan resolusi perangkat output dalam *dots per inch* (`dpi`) atau *dots per centimeter* (`dpcm`). Berikut adalah contohnya:

```css
@media screen and (min-resolution: 300dpi) {
  /* Styles for high-resolution screens */
}
```

`Feature` `hover` menguji apakah mekanisme input utama dapat melayang (*hover*) di atas `element`. Berikut adalah contohnya:

```css
@media (hover: hover) {
  /* Styles for devices that support hover */
}
```

`Feature` `prefers-color-scheme` mendeteksi apakah pengguna telah meminta tema warna terang (*light*) atau gelap (*dark*). Berikut adalah contohnya:

```css
@media (prefers-color-scheme: dark) {
  /* Styles for dark mode */
}
```

## Menggabungkan Beberapa Kondisi

`Media queries` juga dapat menggabungkan beberapa kondisi menggunakan operator logika. Operator `and` digunakan untuk menggabungkan beberapa `media features`, sedangkan `not` dan `only` dapat digunakan untuk menegasikan atau mengisolasi `media queries`. Berikut adalah contoh yang menggabungkan beberapa `features`:

```css
@media screen and (min-width: 768px) and (orientation: landscape) {
  /* Styles for landscape screens at least 768px wide */
}
```

Anda juga dapat menargetkan beberapa `queries` dalam daftar yang dipisahkan oleh tanda koma, yang berfungsi seperti operator "or":

```css
@media screen and (min-width: 768px), print {
  /* Styles for screens at least 768px wide OR for print */
}
```

## Cascade dan Media Queries

Saat bekerja dengan `media queries`, penting untuk mempertimbangkan aturan *cascade*. `Media queries` tidak meningkatkan spesifisitas (*specificity*) – mereka hanya mengelompokkan aturan kondisional (*conditional rules*). Aturan normal dari *cascade* `CSS` tetap berlaku di dalam setiap `media query`.

## Contoh Praktis: Mobile-First Responsive Design

Dalam praktiknya, `media queries` sering digunakan untuk membuat tata letak yang responsif. Pola yang umum adalah menentukan gaya dasar (*base style*) untuk perangkat seluler (*mobile*) dan kemudian menggunakan `media queries` untuk menyempurnakan tata letak pada layar yang lebih besar:

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
  <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
  <p>Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
</div>
```

```css
/* Base styles for mobile */
.container {
  width: 100%;
  padding: 15px;
}

/* Styles for tablets */
@media screen and (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Styles for desktops */
@media screen and (min-width: 1024px) {
  .container {
    width: 960px;
  }
}
```

Pendekatan ini, yang dikenal sebagai `responsive design` "*mobile-first*", memastikan bahwa gaya dasar sesuai untuk perangkat seluler, dengan penyempurnaan yang ditambahkan untuk layar yang lebih besar.

Kesimpulannya, `media queries` adalah alat yang sangat andal dalam `CSS` yang memungkinkan pembuatan desain web yang responsif dan mudah beradaptasi. Dengan memahami cara menggunakan berbagai `media types` dan `features`, pengembang dapat membuat situs web yang memberikan pengalaman pengguna yang optimal di berbagai perangkat dan preferensi. Seiring dengan terus berkembangnya teknologi web, tetap mengikuti perkembangan fitur-fitur media baru dapat membantu dalam menciptakan desain responsif yang lebih bernuansa dan ramah pengguna (*user-friendly*).

## Pertanyaan (Questions)

Manakah dari berikut ini yang BUKAN merupakan `media type` yang umum digunakan dalam `CSS` modern?

- [ ] `all`
- [ ] `print`
- [ ] `screen`
- [x] `handheld`

Apa yang diperiksa oleh `media feature` `orientation`?

- [ ] Orientasi fisik dari perangkat.
- [x] Apakah `viewport` lebih lebar daripada tingginya, atau sebaliknya.
- [ ] Arah teks pada halaman.
- [ ] Orientasi geografis dari pengguna.

Dalam sebuah `media query`, apa tujuan penggunaan operator `and`?

- [ ] Untuk menggabungkan beberapa `property` `CSS`.
- [ ] Untuk menjumlahkan dua nilai numerik bersama-sama.
- [x] Untuk menggabungkan beberapa `media features` atau `types`.
- [ ] Untuk membuat kondisi logika `or`.

---

[⬅️ Sebelumnya](1-what-is-responsive-web-design.md) | [Selanjutnya ➡️](3-what-are-media-breakpoints.md)
