# Bagaimana Struktur Tingkat Heading yang Tepat Memengaruhi Aksesibilitas?

Sebelumnya Anda telah mempelajari tentang struktur tingkat `heading` (`heading level structure`) yang tepat. Sekarang, Anda akan mempelajari bagaimana struktur `heading` yang baik memengaruhi `accessibility`.

Penggunaan `heading` yang tepat menciptakan hierarki visual (`visual hierarchy`) bagi pengguna untuk menavigasi dan memahami halaman web Anda. Menggunakan hierarki `heading` yang logis memungkinkan pengguna `screen reader` memahami struktur konten Anda dan menavigasi konten Anda dengan cepat. Membuat teks `heading` yang tepat dan secara akurat mendeskripsikan konten yang mengikutinya membantu semua orang menemukan informasi yang mereka butuhkan di situs Anda. Sebagai manfaat tambahan, `heading` yang terbentuk dengan baik juga dapat meningkatkan `SEO` situs Anda.

Berikut adalah contoh dasarnya:

```html
<h1> Music Store Page</h1>

<h2>Featured Albums</h2>
<p>Check out our featured albums below:</p>
```

Anggaplah `heading` sebagai fondasi situs Anda. Tanpa fondasi yang baik, `accessibility` konten Anda akan terganggu.

Mari kita lihat bagaimana Anda dapat membuat proyek web Anda ramah bagi orang-orang yang menggunakan `assistive technology` dengan menggunakan `heading` secara benar.

`Heading`, mulai dari `h1` hingga `h6`, menciptakan struktur navigasi bagi pengguna `screen reader`. `Screen reader` dapat membuat daftar semua `heading` di sebuah halaman, memungkinkan pengguna melompat langsung ke bagian yang mereka butuhkan. Jadi, menyusun `heading` dengan benar sangat penting untuk membantu para pengguna ini menghindari konten yang tidak perlu dan menemukan informasi yang mereka cari dengan cepat.

```html
<h1>I am an h1 heading</h1>
<h2>I am an h2 heading</h2>
<h3>I am an h3 heading</h3>
<h4>I am an h4 heading</h4>
<h5>I am an h5 heading</h5>
<h6>I am an h6 heading</h6>
```

Orang-orang dengan penglihatan parsial (*partial sight*) atau disabilitas kognitif perlu memproses informasi secara cepat dan mudah untuk mengurangi beban kognitif (*cognitive load*).

Meskipun susunan `heading` yang tepat itu penting, membuat teks `heading` jelas dan deskriptif juga sangat diperlukan.

Berikut adalah beberapa praktik utama yang harus diikuti untuk menggunakan `heading` dengan benar:

- Gunakan `heading` dalam hierarki yang mencerminkan organisasi yang jelas. Sebagai contoh, judul halaman harus berupa `h1`, bagian-bagian utama harus diperkenalkan dengan `heading` `h2`, subbagian dengan `h3`, dan seterusnya, hingga `h6`.

- Jangan melompat dari `h1` ke `h3`, atau dari `h2` ke `h4`, dan seterusnya.

- Gunakan teks yang jelas dan deskriptif yang merangkum konten yang mengikuti setiap `heading`.

- Jangan gunakan `heading` secara terisolasi; harus ada konten yang mengikuti `heading` tersebut.

- Gunakan `heading` yang sesuai jika diperlukan alih-alih memformat teks biasa agar terlihat seperti `heading`.

- Setiap halaman harus memiliki elemen `h1` tunggal yang mewakili topik atau judul utama.

Berikut adalah *markup* dasar yang menunjukkan bagaimana Anda sebaiknya menggunakan `heading` pada sebuah halaman:

```html
<!-- Page title -->
<h1>What is HTML</h1>

<!-- First section -->
<section>
  <h2>Introduction to HTML</h2>
  <p>
    HTML stands for HyperText Markup Language. It is the standard language for
    creating web pages.
  </p>
</section>
<!-- Second section -->
<section>
  <h2>History of HTML</h2>
  <p>HTML began to take shape in the early 90s</p>
  <h3>Origins</h3>
  <p>
    HTML was created by Tim Berners-Lee in 1991. It has evolved significantly
    over the years.
  </p>
</section>
```


## Pertanyaan (Questions)


Bagaimana struktur heading yang tepat membantu mereka yang menggunakan screen reader?


- [ ] Memberikan gaya visual untuk konten.

- [ ] Membantu `screen reader` menghasilkan ringkasan konten.

- [x] Memungkinkan `screen reader` menavigasi dan melompat ke berbagai bagian dengan mudah.

- [ ] Meningkatkan kecepatan memuat halaman web.



Mengapa penting untuk menggunakan heading dengan benar bagi pengguna yang mengandalkan keyboard?


- [ ] Meningkatkan daya tarik visual halaman web.

- [ ] Memungkinkan pengguna mencetak halaman web dengan lebih mudah.

- [x] Memungkinkan pengguna berpindah antarbagian tanpa perlu menekan tombol `tab` melalui setiap tautan.

- [ ] Membantu pengguna mengunduh halaman web lebih cepat.



Manakah dari berikut ini yang merupakan salah satu praktik terbaik dalam menggunakan heading pada halaman web?


- [ ] Melompat dari `h1` ke `h3` untuk menghemat waktu.

- [x] Menggunakan teks yang jelas dan deskriptif yang merangkum konten berikutnya.

- [ ] Menggunakan tingkat `heading` apa pun secara terisolasi tanpa ada konten yang mengikutinya.

- [ ] Menggunakan beberapa tag `h1` pada satu halaman untuk penekanan.



---
[⬅️ Sebelumnya](7-what-are-some-common-accessibility-auditing-tools.md) | [Selanjutnya ➡️](../2-accessible-tables-forms/1-what-are-best-practices-for-tables-and-accessibility.md)
