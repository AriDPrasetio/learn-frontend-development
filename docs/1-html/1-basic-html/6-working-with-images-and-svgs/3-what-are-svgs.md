# Apa Itu SVG, dan Kapan Anda Harus Menggunakannya?

Pertama, Anda perlu memahami cara kerja gambar (`image`). Format gambar umum seperti `PNG` dan `JPG` diklasifikasikan sebagai format `raster`. Ini pada dasarnya berarti bahwa format tersebut berbasis `pixel`, dengan data yang melacak nilai warna di setiap `pixel`.

Kelemahan terbesar dari gambar berbasis `raster` adalah gambar tersebut tidak dapat ditingkatkan skalanya (*upscale*) dengan baik. Jika Anda pernah mencoba memperbesar ukuran gambar `PNG`, Anda mungkin melihat bahwa gambar tersebut menjadi terpixelasi (*pixelated*), atau buram.

Sebuah `SVG` adalah jenis gambar yang berbeda. `SVG` merupakan singkatan dari *scalable vector graphic*. Sebuah grafik vektor (`vector graphic`) melacak data berdasarkan jalur (`path`) dan persamaan matematika untuk memetakan titik, garis, dan kurva. Makna sebenarnya dari hal ini adalah bahwa grafik vektor, seperti `SVG`, dapat diskalakan ke ukuran berapa pun tanpa memengaruhi kualitasnya.

`SVG` secara khusus memiliki manfaat tambahan karena menyimpan data dalam `XML`. Ini berarti Anda dapat menggunakannya langsung di dalam kode Anda sebagai `HTML` murni dengan `element` `svg`. Ini juga berarti Anda dapat mengubah warna gambar secara terprogram.

Untuk mengubah wajah tersenyum menjadi merah, aktifkan editor interaktif dan ubah `fill="yellow"` menjadi `fill="red"`.

```html
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="45" stroke="black" stroke-width="4" fill="yellow" />
  <circle cx="35" cy="40" r="5" fill="black" />
  <circle cx="65" cy="40" r="5" fill="black" />
  <path d="M35 65 Q50 80 65 65" stroke="black" stroke-width="4" fill="transparent" />
</svg>
```

Berikut adalah `element` dasar untuk contoh tersebut:

- `element` `svg` adalah wadah untuk keseluruhan gambar. `element` ini menyiapkan ruang tempat semua bentuk muncul. Segala hal yang ingin Anda gambar dengan `SVG`, seperti lingkaran, garis, atau jalur (`path`), berada di dalam `element` `svg`.

- `element` `circle` digunakan untuk membuat wajah dan mata. Satu lingkaran besar membentuk wajah kuning, dan dua lingkaran yang lebih kecil membuat mata.

- `element` `path` digunakan untuk menggambar senyuman. `element` ini membuat garis lengkung untuk mulut.

- Setiap `element` `SVG` memiliki atribut yang mengontrol tampilan dan posisinya di dalam area gambar.

Berikut adalah beberapa contoh lainnya. Untuk mengubah warna pada salah satu contoh, perbarui nilai untuk atribut `fill` menjadi nama warna apa pun seperti `red`, `green`, `blue`, `yellow`, dll.

```html
<!-- Star Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="gold" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2L14.9 8.6L22 9.3L17 14.1L18.3 21.2L12 17.8L5.7 21.2L7 14.1L2 9.3L9.1 8.6L12 2Z"/>
</svg>

<!-- Heart Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="crimson" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 6 4 4 6.5 4C8 4 9.5 4.8 10.5 6.09C11.5 4.8 13 4 14.5 4C17 4 19 6 19 8.5C19 12.28 15.6 15.36 10.45 20.04L12 21.35Z"/>
</svg>

<!-- Checkmark Icon -->
<svg width="50" height="50" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.29 5.71L9 17L3.71 11.71L5.12 10.29L9 14.17L18.88 4.29L20.29 5.71Z"/>
</svg>
```

Jadi, kapan Anda ingin menggunakan `SVG`? Kasus penggunaan yang sangat baik adalah untuk ikon. Jika Anda ingin membuat poin *bullet* kustom, atau menambahkan ikon ke tautan Anda untuk merepresentasikan platform media sosial, menggunakan `SVG` adalah pendekatan terbaik. Salah satu perpustakaan ikon paling populer, Font Awesome, menggunakan gambar `SVG` untuk ikon-ikon mereka. `SVG` juga sangat bagus untuk logo halaman web, karena dapat diskalakan secara sempurna. Gambar ini memungkinkan Anda menyesuaikan tata letak ke desain responsif apa pun yang Anda butuhkan. Lain kali jika Anda memiliki file `SVG` secara lokal, cobalah membukanya dengan editor teks dan bereksperimen dengan kodenya.

## Pertanyaan (Questions)

Apa itu gambar raster (*raster image*)?

- [ ] Gambar yang menyimpan jalur, garis, titik, dan kurva.
- [x] Gambar yang menyimpan data warna untuk setiap pixel.
- [ ] Semua gambar adalah gambar raster.
- [ ] Gambar yang mudah diskalakan.

Apa itu gambar vektor (*vector image*)?

- [x] Gambar yang menyimpan jalur, garis, titik, dan kurva.
- [ ] Gambar yang menyimpan data warna untuk setiap pixel.
- [ ] Semua gambar adalah gambar vektor.
- [ ] Gambar yang tidak mudah diskalakan.

Bagaimana SVG menyimpan data?

- [ ] Sebagai pixel.
- [ ] Sebagai biner.
- [ ] Sebagai heksadesimal.
- [x] Sebagai XML.

---
[⬅️ Sebelumnya](2-what-are-the-different-types-of-image-licenses.md) | [Selanjutnya ➡️](../7-working-with-media/1-what-are-replaced-elements.md)
