# Apa Itu Boilerplate HTML, dan Mengapa Ini Penting?


Mari kita pelajari tentang `boilerplate` `HTML`.

Apa itu `boilerplate` `HTML`, Anda bertanya? Ini seperti templat siap pakai untuk halaman web Anda. Anggap saja sebagai fondasi dari sebuah rumah. Sebuah `boilerplate` mencakup struktur dasar dan `element` penting yang dibutuhkan oleh setiap dokumen `HTML`. Ini menghemat waktu Anda dan membantu memastikan halaman Anda disiapkan dengan benar. Berikut adalah contohnya:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
       name="viewport"
       content="width=device-width, initial-scale=1.0" />
    <title>freeCodeCamp</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
  </body>
</html>

```

Mari kita uraikan bagian-bagian utama dari `boilerplate` ini. Pertama, ada deklarasi `DOCTYPE`:

```html
<!DOCTYPE html>

```

Ini memberitahu browser versi `HTML` mana yang Anda gunakan. Selanjutnya, ada `tag` `html`:

```html
<!DOCTYPE html>
<html lang="en">
  <!--All other elements go inside here-->
</html>

```

Ini membungkus semua konten Anda dan dapat menentukan bahasa halaman Anda. Di dalam `tag` `html`, Anda akan menemukan dua bagian utama, yaitu `head` dan `body`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Important metadata goes here-->
  </head>
  <body>
    <!--Headings, paragraphs, images, etc. go inside here-->
  </body>
</html>

```

Bagian `head` berisi informasi penting di balik layar:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document Title Goes Here</title>
  <link rel="stylesheet" href="./styles.css" />
</head>

```

Metadata situs Anda, yang dimuat di dalam `element` `meta`, memiliki detail tentang berbagai hal seperti penyandian karakter (*character encoding*), dan bagaimana situs web seperti Twitter harus menampilkan pratinjau tautan halaman Anda. Judul situs Anda, yang ditemukan di dalam `element` `title`, menentukan teks yang muncul di tab atau jendela browser. Terakhir, Anda biasanya akan menautkan *stylesheet* eksternal halaman Anda di bagian `head` menggunakan `element` `link`.

Bagian `body` adalah tempat semua konten Anda berada:

```html
<body>
  <h1>I am a main title</h1>
  <p>Example paragraph text</p>
</body>

```

Sekarang, mengapa `boilerplate` itu penting? Ini memastikan halaman Anda terstruktur dengan benar dan bekerja dengan baik di berbagai browser yang berbeda. Menggunakan `boilerplate` membantu Anda menghindari kesalahan umum dan mengikuti praktik terbaik (*best practice*). Ini adalah titik awal yang bagus untuk proyek web apa pun. Ingat, Anda dapat menyesuaikan `boilerplate` Anda sendiri agar sesuai dengan kebutuhan Anda. Seiring bertambahnya pengalaman, Anda mungkin menambahkan `element` atau `tag` `meta` pilihan Anda sendiri. Ketika Anda terus menyempurnakan `boilerplate` pribadi Anda, Anda akan mendapati bahwa ini menghemat waktu Anda saat memulai proyek-proyek baru.

Lain kali Anda memulai file `HTML` baru, pertimbangkan untuk menggunakan `boilerplate`. Ini pasti akan memberi Anda fondasi yang kuat untuk dibangun.


## Pertanyaan (Questions)


Di mana Anda akan menyetel penyandian karakter (*character encoding*) untuk halaman Anda?


- [ ] Sebuah `element` `meta` di dalam `body`.

- [ ] Sebuah `element` `head` di dalam `body`.

- [x] Sebuah `element` `meta` di dalam `head`.

- [ ] Di dalam `DOCTYPE`.



Di mana Anda akan menyetel bahasa untuk halaman Anda?


- [x] Di dalam `tag` pembuka `html`.

- [ ] Sebuah `element` `meta` di dalam `body`.

- [ ] Sebuah `element` `head` di dalam `body`.

- [ ] Sebuah `element` `meta` di dalam `head`.



Tujuan apa yang dipenuhi oleh sebuah `boilerplate`?


- [ ] Menyediakan struktur awal untuk situs web Anda.

- [ ] Memastikan Anda tidak melewatkan `element` penting apa pun.

- [ ] Memungkinkan Anda mulai menulis konten halaman Anda lebih cepat.

- [x] Semua jawaban di atas benar.



---
[⬅️ Sebelumnya](1-what-is-the-role-of-the-link-element-in-html.md) | [Selanjutnya ➡️](3-what-is-utf-8-character-encoding.md)
