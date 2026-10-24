# Apa Saja Kasus Penggunaan Umum untuk Floats, dan Bagaimana Cara Kerjanya?

`Floats` dalam `CSS` adalah sebuah teknik yang awalnya dirancang untuk memungkinkan teks mengalir membungkus di sekitar sebuah `element`, seperti gambar (*image*). Namun seiring berjalannya waktu, para pengembang menemukan cara-cara baru untuk menggunakan `floats`, menerapkannya pada desain tata letak (*layout*) dengan cara yang kreatif. Meskipun metode tata letak modern seperti `Flexbox` dan `Grid` kini lebih umum digunakan, memahami `floats` tetap penting, terutama saat bekerja dengan kode lama (*legacy code*) atau ketika perlu mencapai efek tata letak tertentu.

Ketika sebuah `element` di-`float`, `element` tersebut dikeluarkan dari alur dokumen normal (*normal document flow*) dan didorong ke sisi kiri atau kanan dari `container`-nya. Konten yang mengikutinya akan mengalir di sekitar `element` yang di-`float`, mengisi ruang yang tersisa. Salah satu kegunaan klasiknya adalah membungkus teks di sekitar gambar, di mana gambar di-`float` ke satu sisi, dan teks mengalir di sekitarnya. Teknik ini masih banyak digunakan, terutama pada artikel dan blog di mana gambar perlu ditempatkan berdampingan dengan teks. Berikut adalah contoh kodenya:

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <img src="https://placehold.co/150x150" alt="Placeholder Image">
</div>
```

```css
.container {
  border: 1px solid black;
  padding: 10px;
}

img {
  float: left;
  margin-right: 20px;
}
```

Pada contoh di atas, `container` tidak membungkus gambar yang di-`float`. Gambar tersebut berada di luar alur dokumen normal, dan `container` runtuh (*collapsed*) hingga tingginya menjadi nol karena tidak "melihat" `element` anak yang di-`float`.

`Floats` juga populer untuk membuat tata letak banyak kolom (*multi-column layouts*) sebelum `Flexbox` dan `Grid` tersebar luas. Dengan me-`float` `element-element` secara berdampingan, pengembang dapat membuat kolom-kolom yang sejajar secara horizontal. Namun, saat menggunakan `floats`, penting untuk menangani masalah runtuhnya `element` induk (*collapsing parent elements*) saat `element` anaknya di-`float`. Solusi teknik `clearfix` diterapkan pada `element` dengan `class` `container` untuk memperbaiki masalah ini.

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <img src="https://placehold.co/150x150" alt="Placeholder Image">
  <p> This is an example of text flowing around a floated image.</p>
</div>
```

```css
.container {
  border: 1px solid black;
}

/* Clearfix CSS */
.container::after {
  content: "";  
  display: block;
  clear: both;
}

img {
  float: left;
  margin-right: 20px;
}
```

- `::after` adalah `pseudo-element` yang menambahkan blok tak terlihat setelah konten dari `container`.
- `content: ""` memastikan bahwa `pseudo-element` tersebut hadir tetapi tidak menampilkan konten apa pun.
- `display: block` menjadikan `pseudo-element` tersebut sebagai `block-level element`.
- `clear: both` memastikan `pseudo-element` membersihkan kedua sisi dari setiap `element` yang di-`float` di atasnya.

Pada contoh di atas, kita telah menambahkan sebuah `element` paragraf baru untuk membuat efek keruntuhan (*collapse*) tersebut lebih terlihat. Karena paragraf tetap berada dalam alur dokumen normal, `container` membesar secukupnya untuk membungkus paragraf tersebut. Kemudian, kita menerapkan teknik `clearfix` untuk memperbaiki keruntuhan dan membuat `border` `container` ditampilkan dengan benar. Anda dapat mencoba menghapus aturan (`rule`) `clearfix` untuk melihat `container` tersebut runtuh kembali.

Teknik `clearfix` memastikan `element` induk membungkus `element-element` anak yang di-`float` dengan benar. `Clearfix` memaksa `container` induk untuk "melihat" `element-element` anak yang di-`float` dengan menambahkan `property` `clear` setelah konten yang di-`float`.

Meskipun `floats` bukan lagi metode utama untuk tata letak yang rumit karena adanya teknik-teknik yang lebih modern seperti `Flexbox` dan `Grid`, teknik ini masih memainkan peran penting dalam skenario-skenario tertentu. Baik saat Anda membungkus teks di sekitar gambar atau bekerja pada proyek-proyek lama (*legacy*), memahami cara kerja `floats` dan cara me-`clear`-nya dengan benar adalah kunci untuk mempertahankan tata letak yang terstruktur dengan baik dan responsif.

## Pertanyaan (Questions)

Apa kasus penggunaan umum untuk menggunakan `floats` dalam `CSS`?

- [ ] Memusatkan sebuah `element` secara vertikal.
- [x] Membungkus teks di sekitar gambar.
- [ ] Membuat `header` yang `fixed`.
- [ ] Menerapkan warna latar belakang (`background color`).

`Property` `CSS` manakah yang sering digunakan untuk membersihkan (*clear*) `floats` dan mempertahankan alur tata letak?

- [ ] `float`
- [ ] `margin`
- [x] `clear`
- [ ] `padding`

Bagaimana penerapan `float: left;` pada sebuah `element` memengaruhi posisinya di dalam tata letak?

- [ ] `Element` dipusatkan di tengah halaman.
- [ ] `Element` didorong ke sisi kanan dari `container`-nya.
- [x] `Element` dikeluarkan dari alur dokumen normal dan berpindah ke sisi kiri dari `container`-nya.
- [ ] `Element` tetap berada di dalam alur dokumen normal dan sejajar dengan bagian atas `container`-nya.

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-is-relative-positioning.md)
