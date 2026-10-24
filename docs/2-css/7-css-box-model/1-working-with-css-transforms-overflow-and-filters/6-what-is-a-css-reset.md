# Apa Itu CSS Reset, dan Apa Saja Contoh Umumnya?

## Apa Itu CSS Reset?

`CSS reset` adalah sebuah `stylesheet` yang menghapus semua atau sebagian format bawaan (*default formatting*) yang diterapkan peramban (*web browser*) ke `element` `HTML`. Sebagai contoh, Anda mungkin telah memperhatikan bahwa `element` tertentu, seperti paragraf dan judul (*heading*), sudah memiliki `margin` secara *default* meskipun Anda tidak menentukannya secara eksplisit di dalam `stylesheet` kustom Anda.

Anda juga akan melihat hal ini dengan berbagai `property` pada berbagai macam `element` `HTML`. Peramban yang berbeda mungkin juga menerapkan `default styles` yang berbeda pada `element` `HTML`. Gaya *default* di Google Chrome mungkin tidak persis sama seperti di Mozilla Firefox atau Microsoft Edge. Hal ini dapat menyebabkan `styles` yang tidak konsisten di berbagai peramban, yang seharusnya Anda hindari sebisa mungkin.

## Pendekatan terhadap CSS Reset

Untuk menangani hal ini, sebuah `CSS reset` menghapus `default styles`. Dengan menghapus semua atau sebagian dari gaya bawaan tersebut, Anda bisa mendapatkan garis dasar (*baseline*) yang konsisten untuk desain Anda dan meminimalkan potensi ketidakkonsistenan di seluruh peramban dan perangkat. Menghapus gaya bawaan juga dapat mempermudah proses penataan gaya (*styling*) karena Anda hanya akan melihat `styles` yang telah Anda terapkan secara eksplisit di dalam `stylesheet` kustom Anda. Ada dua pendekatan utama untuk `CSS reset`: Anda dapat mendefinisikan `custom CSS reset` atau menggunakan `third-party CSS reset` (pihak ketiga).

## Custom CSS Reset

`Custom CSS reset` adalah `stylesheet` yang Anda buat dari awal (*scratch*) agar sesuai dengan kebutuhan proyek Anda. Dengan cara ini, Anda dapat mengontrol `styles` spesifik mana yang akan di-*reset* dengan ruang fleksibilitas yang luas. Namun, Anda juga perlu meluangkan waktu untuk mengembangkan dan memelihara `stylesheet` tersebut. Berikut adalah contoh `rule` `CSS` yang sangat umum untuk me-*reset* `margin` dan `padding` dari semua `element` `HTML`:

```html
<link rel="stylesheet" href="styles.css">
<h1>Example Heading</h1>
<p>This is a paragraph.</p>
```

```css
* {
  margin: 0;
  padding: 0;
}
```

Ini biasanya ditulis di bagian paling atas `stylesheet` `CSS`. Selektor tanda bintang (*asterisk selector*) adalah `wildcard selector` yang cocok dengan semua `element` `HTML`, sehingga mereka akan memiliki `margin` *default* bernilai nol dan `padding` *default* bernilai nol di keempat sisinya. Ini akan memberi Anda titik awal, dan kemudian Anda dapat menyesuaikannya dalam `CSS selectors` yang lebih spesifik di bagian bawah `stylesheet`.

Anda dapat menggunakan pendekatan ini untuk memilih `element` `HTML` apa pun dan me-*reset* gaya bawaannya. Cukup buat `stylesheet` kustom dan gunakan `CSS selectors` yang sesuai untuk mencocokkan `element` dan mengatur `styles`-nya.

## Third-Party CSS Reset

Namun hal ini bisa menjadi proses yang memakan banyak waktu. Jika Anda ingin menghemat waktu, Anda juga dapat menggunakan `third-party CSS reset`. `Stylesheet` ini sudah dibuat sebelumnya (*pre-built*) sehingga Anda cukup mengunduhnya dan menambahkannya langsung ke proyek Anda. Contoh luar biasa dari `third-party CSS reset` adalah `Normalize.css`. `Stylesheet` ini menormalkan `styles` untuk berbagai macam `element` `HTML` sambil tetap mempertahankan beberapa gaya bawaan yang berguna, terutama yang penting untuk aksesibilitas. Ini juga memperbaiki *bug* umum dan ketidakkonsistenan gaya.

Pilihan lainnya adalah `sanitize.css`. Ini adalah pustaka (*library*) `CSS` yang dapat Anda gunakan untuk memastikan bahwa gaya bawaan akan konsisten di semua peramban modern utama. *Library* ini dikembangkan bersamaan dengan `Normalize.css`, sehingga keduanya berkembang bersama. Pustaka ini juga memiliki `stylesheet` individual yang dapat Anda unduh untuk tujuan tertentu seperti menormalkan formulir (*forms*) dan tipografi (*typography*).

Ada banyak pilihan yang tersedia, tetapi Anda harus memilih yang paling sesuai dengan kebutuhan proyek Anda. Anda juga dapat menggabungkan kedua pendekatan tersebut dengan menggunakan `third-party CSS reset` bersama dengan `custom reset`.

## Pertimbangan Aksesibilitas dan Performa

Saat bekerja dengan `CSS reset`, penting juga untuk mempertimbangkan aksesibilitas. Aplikasi web Anda harus dapat diakses oleh semua orang. Oleh karena itu, Anda sebaiknya tidak me-*reset* gaya yang mungkin bermanfaat bagi pembaca layar (*screen reader*) atau teknologi asistif lainnya. Anda juga harus mempertimbangkan dampak `stylesheet` tambahan ini terhadap performa aplikasi Anda, karena file-file tersebut harus diunduh sebelum `styles` kustom diterapkan.

Dengan menghapus gaya bawaan, `CSS reset` memberi Anda kanvas awal yang bersih untuk menerapkan desain Anda. Hal ini menghasilkan pengalaman pengguna (*user experience*) yang lebih seragam dan konsisten di seluruh peramban dan perangkat.

## Pertanyaan (Questions)

Apa tujuan utama dari `CSS reset`?

- [ ] Untuk menambahkan gaya bawaan (*default styles*) ke `element` `HTML`.
- [x] Untuk menetapkan garis dasar (*baseline*) yang konsisten untuk penataan gaya, mengurangi variasi spesifik peramban (*browser*).
- [ ] Untuk membuat desain responsif.
- [ ] Untuk meningkatkan performa situs web.

Manakah dari berikut ini yang merupakan `browser reset` pihak ketiga (*third-party*) yang populer?

- [x] Normalize.css
- [ ] Reset.css
- [ ] Skeleton
- [ ] Foundation

Apa keuntungan utama menggunakan `custom CSS reset` dibandingkan dengan `third-party CSS reset`?

- [x] Fleksibilitas dan kendali yang lebih besar atas `styles`.
- [ ] Peningkatan kompatibilitas peramban (*browser*).
- [ ] Implementasi yang lebih sederhana.
- [ ] Waktu pemuatan (*loading*) yang lebih cepat.

---

[⬅️ Sebelumnya](5-what-is-the-difference-between-content-box-and-border-box.md) | [Selanjutnya ➡️](7-what-is-the-css-filter-property.md)
