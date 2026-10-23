# Apa Perbedaan Antara Presentational HTML dan Semantic HTML?

`Presentational HTML` berfokus pada tampilan dan gaya dari konten. Pada masa-masa awal `HTML`, pengembang biasa menggunakan `element` seperti `center`, `big`, dan `font`. Namun dalam pengembangan web modern, Anda tidak boleh menggunakan jenis `element` ini karena keterbatasannya serta dampak negatifnya terhadap aksesibilitas (`accessibility`) dan pemeliharaan (`maintainability`).

Banyak `element` `presentational HTML` yang sudah ditinggalkan (`deprecated`), yang berarti bahwa `element`-`element` tersebut sudah usang dan tidak lagi direkomendasikan. Ada cara-cara yang lebih baik untuk mendapatkan hasil yang sama. Namun demikian, mengetahui keberadaan `element`-`element` tersebut tetaplah bermanfaat, jadi kita akan melihat beberapa contohnya.

## Element Presentational HTML

### Element `font`

`Element` `font` adalah `element` yang sudah usang (`deprecated`) yang digunakan untuk mengatur ukuran font (`font size`) dan warna teks. Berikut adalah contoh dari `element` `font`.

Aktifkan editor interaktif (`interactive editor`) dan ubah ukuran dari 5 ke 7 untuk melihat font membesar.

```html
<font size="5" color="blue">This text is blue and large.</font>
```

Contoh ini mengatur warna teks menjadi `blue` dan ukurannya ke nilai `5`. Rentang untuk atribut `size` adalah dari `1` hingga `7`, dengan `1` sebagai yang terkecil dan `7` sebagai yang terbesar. Nilai default-nya adalah `3`, jika Anda tidak mengatur nilainya secara eksplisit.

Meskipun `element` ini masih berfungsi, Anda tidak boleh menggunakannya karena ukuran font dan warna harus selalu diatur dalam `CSS`, bukan dalam `HTML`.

### Element `center`

`Element` `center` adalah `element` `deprecated` lainnya yang digunakan untuk meratakan konten ke tengah secara horizontal di dalam kontainernya. Berikut adalah contoh dari `element` `center` yang berisi teks dan `element` paragraf.

Aktifkan editor interaktif (`interactive editor`) dan tambahkan tag `center` di sekitar `<p>Another example text.</p>` untuk melihatnya berada di tengah halaman.

```html
<center>
  This text is centered.
  <p>HTML is awesome.</p>
</center>

<p>Another example text.</p>
```

### Element `big`

Dan berikutnya, kita memiliki `element` `big`. Ini adalah `element` `presentational HTML` yang sudah usang (`deprecated`) lainnya yang membuat teks yang diapit menjadi satu tingkat lebih besar daripada teks di sekitarnya. Di sini kita memiliki contoh yang mendefinisikan sebuah paragraf dengan dua bagian.

Aktifkan editor interaktif (`interactive editor`) dan tambahkan tag `big` di sekitar `Some other text` lalu lihat perubahannya di jendela pratinjau (`preview window`).

```html
<p>
  This text has a normal font size.
  <big>This text is larger.</big>
  Some other text.
</p>
```

Ingatlah bahwa ukuran font harus selalu diatur dengan `CSS`, sehingga Anda tidak boleh menggunakan `element` ini dalam `HTML` modern.

Itu tadi adalah contoh-contoh `element` `presentational HTML`. Namun semuanya sudah ditinggalkan (`deprecated`) dan tidak lagi direkomendasikan. Lalu apa yang harus Anda gunakan sebagai gantinya? Mari kita lihat.

## Semantic HTML

`Semantic HTML` sekarang menjadi praktik yang direkomendasikan. Pendekatan ini mendeskripsikan konten dari `element`-`element` tersebut, sehingga jauh lebih mudah dibaca, dipahami, dan dipelihara.

Mesin pencari (`search engine`) dapat dengan mudah memahami situs web Anda ketika Anda menggunakan `semantic HTML`. Ini juga bermanfaat untuk tujuan aksesibilitas (`accessibility`), karena pembaca layar (`screen reader`) membutuhkan informasi semantik untuk mendeskripsikan apa yang ada di halaman web.

Contoh `element` `semantic HTML` meliputi:

- `Element` `header` untuk mendefinisikan `header` dokumen, atau bagian (`section`).

- `Element` bagian navigasi, `nav`, untuk bagian-bagian yang memiliki tautan navigasi.

- `Element` `section` untuk mengelompokkan informasi terkait.

- `Element` `figure` untuk ilustrasi dan diagram.

### Contoh Semantic HTML

Ini adalah contoh dari `element` `header` yang berisi `element` bagian navigasi.

Aktifkan editor interaktif (`interactive editor`) dan tambahkan `<a href="#">Products</a>` di dalam `nav` lalu lihat perubahannya di jendela pratinjau (`preview window`).

```html
<header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <!--Add the products link here-->

    <a href="#">Contact</a>
  </nav>
</header>
```

`Semantic element` dengan jelas menunjukkan tujuannya di dalam struktur `HTML`. Ada banyak `element` `semantic HTML` yang berbeda. Anda pasti akan menemukan salah satu yang sesuai dengan kebutuhan proyek Anda.

## Ringkasan (Summary)

Kerja bagus. Sekarang Anda mengetahui perbedaan antara `presentational HTML` dan `semantic HTML`: `semantic HTML` mendeskripsikan konten, sedangkan `presentational HTML` berfokus pada penampilan.

## Pertanyaan (Questions)

Manakah dari berikut ini yang paling baik mendeskripsikan perbedaan antara `presentational HTML` dan `semantic HTML`?

- [ ] `Presentational HTML` berfokus pada struktur konten, sedangkan `semantic HTML` berfokus pada penampilan.
- [x] `Semantic HTML` berfokus pada struktur konten, sedangkan `presentational HTML` berfokus pada penampilan.
- [ ] Tidak ada perbedaan antara `presentational HTML` dan `semantic HTML`.
- [ ] Keduanya berfokus pada gaya, tetapi `presentational HTML` lebih modern.

Manakah dari berikut ini yang merupakan contoh dari `presentational HTML`?

- [ ] Menggunakan `element` `header` untuk mendefinisikan sebuah `header`.
- [ ] Menggunakan `element` `nav` untuk mendefinisikan bagian navigasi.
- [ ] Menggunakan `element` `article` untuk mendefinisikan konten independen.
- [x] Menggunakan `element` `center` untuk meratakan konten ke tengah.

Manakah dari berikut ini yang merupakan contoh dari `semantic HTML`?

- [ ] Menggunakan `<font color="red">` untuk membuat teks berwarna merah.
- [ ] Menggunakan `element` `center` untuk meratakan konten ke tengah.
- [x] Menggunakan `element` `nav` untuk mewakili bagian navigasi.
- [ ] Menggunakan `element` `big` untuk membuat teks lebih besar.

---
[⬅️ Sebelumnya](2-why-is-it-important-to-have-good-structural-hierarchy.md) | [Selanjutnya ➡️](../2-understanding-nuanced-semantic-elements/1-when-should-you-use-the-emphasis-element-over-the-idiomatic-text-element.md)
