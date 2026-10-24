# Apa Itu Media Breakpoints, dan Apa Saja Breakpoint Umum dalam Desain Modern?

`Media breakpoints` adalah titik-titik spesifik dalam desain sebuah situs web di mana tata letak (*layout*) dan konten menyesuaikan diri untuk mengakomodasi berbagai ukuran layar. `Breakpoints` ini sangat penting dalam `responsive web design`, yang memungkinkan pengembang untuk membuat situs web yang terlihat dan berfungsi dengan baik di berbagai perangkat, mulai dari ponsel hingga monitor desktop berukuran besar.

Dalam `CSS`, `media breakpoints` diimplementasikan menggunakan `media queries`. `Queries` ini memungkinkan Anda menerapkan `styles` yang berbeda berdasarkan karakteristik perangkat, paling sering adalah lebar `viewport`. Misalnya, Anda dapat menetapkan `breakpoint` pada `768px` untuk membedakan antara tata letak perangkat seluler (*mobile*) dan tablet.

Berikut adalah contoh sederhana bagaimana sebuah `media query` dengan `breakpoint` terlihat di `CSS`:

```html
<link rel="stylesheet" href="styles.css">
<div>
  <h1>Responsive Design</h1>
  <p>This is a simple example of responsive design using media queries.</p>
</div>
```

```css
/* Styles for screens wider than 768px */
@media screen and (min-width: 768px) {
  body {
    font-size: 1.125rem;
  }
}
```

Ketika lebar layar `768px` atau lebih besar, ukuran font meningkat menjadi `1.125rem` yang setara dengan `18px`. Hal ini menunjukkan bagaimana `breakpoints` dapat digunakan untuk menyesuaikan desain untuk berbagai ukuran layar yang berbeda.

Terkait pemilihan `breakpoints`, tidak ada satu solusi yang cocok untuk semua (*one-size-fits-all*). `Breakpoints` yang tepat untuk situs web Anda akan bergantung pada desain dan konten spesifik Anda. Namun, ada beberapa `breakpoints` umum yang digunakan oleh banyak desainer sebagai titik awal dalam desain web modern.

Sekumpulan `breakpoints` yang populer sesuai dengan kategori perangkat umum:

- Perangkat kecil (*smartphones*): hingga `640px`.
- Perangkat sedang (*tablets*): `641px` hingga `1024px`.
- Perangkat besar (*desktops*): `1025px` ke atas.

Beberapa desainer lebih menyukai pendekatan yang lebih granular, menggunakan `breakpoints` seperti:

- Perangkat ekstra kecil (*extra small*): hingga `576px`.
- Perangkat kecil (*small*): `577px` hingga `768px`.
- Perangkat sedang (*medium*): `769px` hingga `992px`.
- Perangkat besar (*large*): `993px` hingga `1200px`.
- Perangkat ekstra besar (*extra large*): `1201px` ke atas.

Penting untuk dicatat bahwa ini bukanlah aturan yang kaku, melainkan praktik yang umum digunakan.

Tren dalam `responsive design` modern bergerak menuju pendekatan yang lebih cair (*fluid*), di mana desain beradaptasi secara mulus di berbagai macam ukuran layar, alih-alih membuat perubahan dramatis hanya pada `breakpoints` tertentu.

Berikut adalah beberapa contoh umum lainnya untuk `breakpoints`:

- Perangkat ekstra kecil (*extra small*): di bawah `576px`.
- Perangkat kecil (*small*): lebih dari atau sama dengan `576px`.
- Perangkat sedang (*medium*): lebih dari atau sama dengan `768px`.
- Perangkat besar (*large*): lebih dari atau sama dengan `992px`.
- Perangkat ekstra besar (*extra large*): lebih dari atau sama dengan `1200px`.
- Perangkat ekstra ekstra besar (*extra extra large*): lebih dari atau sama dengan `1400px`.

`Breakpoints` ini banyak digunakan dan dapat menjadi titik awal yang baik untuk banyak proyek. Namun, sangat penting untuk diingat bahwa `breakpoints` terbaik untuk proyek Anda harus ditentukan oleh konten dan desain Anda sendiri, bukan oleh angka sembarangan atau ukuran perangkat tertentu.

## Pertanyaan (Questions)

Apa tujuan utama dari `media breakpoints` dalam `responsive web design`?

- [ ] Untuk mengubah skema warna situs web pada perangkat yang berbeda.
- [x] Untuk menyesuaikan tata letak (*layout*) dan konten untuk ukuran layar yang berbeda.
- [ ] Untuk meningkatkan kecepatan pemuatan situs web pada perangkat seluler.
- [ ] Untuk menambahkan fitur baru bagi pengguna desktop.

Manakah dari berikut ini yang merupakan `breakpoint` yang umum digunakan untuk perangkat yang lebih kecil seperti ponsel pintar (*smartphones*)?

- [ ] 1640px
- [x] 640px
- [ ] 1200px
- [ ] 2000px

Manakah dari berikut ini yang BIASANYA TIDAK dianggap sebagai `breakpoint` umum dalam desain responsif modern?

- [ ] `768px` (tablet).
- [ ] `1024px` (desktop kecil).
- [ ] `480px` (ponsel pintar berukuran besar).
- [x] `6000px` (perangkat yang sangat besar).

---

[⬅️ Sebelumnya](2-how-do-media-queries-work.md) | [Selanjutnya ➡️](4-what-is-the-mobile-first-approach-in-responsive-web-design.md)
