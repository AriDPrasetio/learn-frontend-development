# Apa Itu em dan rem dalam CSS, dan Kapan Anda Harus Menggunakannya?

Pada pelajaran sebelumnya, kita telah mempelajari tentang satuan panjang absolut seperti piksel. Meskipun satuan absolut dapat membantu dalam situasi tertentu, akan ada saatnya Anda ingin menggunakan satuan relatif.

Dalam pelajaran ini, kita akan mempelajari tentang dua satuan relatif: `em` dan `rem`.

## Bagaimana Cara Kerja Satuan em?

Satuan `em` bersifat relatif terhadap ukuran font (`font size`) dari `element` tersebut. Jika Anda menggunakan `em` untuk `property` `font-size`, ukuran teks akan relatif terhadap ukuran font dari `element` induk (*parent element*).

Untuk lebih memahami cara kerjanya, mari kita lihat sebuah contoh:

```html
<link rel="stylesheet" href="styles.css" />
<p class="para">I am a paragraph element</p>

<div class="blue-box"></div>
```

```css
.para {
  font-size: 20px;
  margin-bottom: 1.5em;
  border: 2px solid red;
}

.blue-box {
  background-color: blue;
  color: white;
  padding: 10px;
  width: 100px;
  height: 100px;
}
```

Untuk `HTML`-nya, kita memiliki sebuah paragraf dan sebuah `element` `div`. `Element` paragraf memiliki `class` `para`, dan `element` `div` memiliki `class` `blue-box`.

Untuk `class` `para`, kita mengatur `font-size` ke `20px` dan `margin-bottom` ke `1.5em`. Ini berarti bahwa `margin` akan menjadi 1,5 kali ukuran font dari `element` paragraf tersebut. `1.5em` menghasilkan 30 piksel `margin` di bagian bawah paragraf. Kita juga telah mengatur `border` menjadi `2px solid red` agar Anda dapat melihat `margin` dengan lebih jelas.

Untuk `class` `blue-box`, kita mengatur warna latar belakang ke `blue`, warna teks ke `white`, dan `padding` ke `10px` di keempat sisinya.

Dari contoh tersebut, akan ada ruang yang jelas antara bagian bawah `element` paragraf dan kotak biru.

Lantas apa yang terjadi jika kita menghapus `property` `font-size` dari `class` `para`?

Nah, `margin` bawah akan relatif terhadap ukuran font dari `element` induk. Dalam kasus ini, `element` induk adalah `element` `body`, yang memiliki ukuran font *default* sebesar `16px`.

## Kapan Anda Harus Menggunakan Satuan em?

Kasus penggunaan yang baik untuk `em` adalah ketika Anda bekerja dengan komponen modular seperti tombol (*buttons*) atau kartu (*cards*). Dengan menggunakan satuan `em`, Anda dapat memastikan bahwa semua aspek komponen (seperti `padding`, `margin`, dan `border`) berskala secara proporsional dengan ukuran font, menjaga proporsi tetap konsisten.

Jadi, sampai titik ini, kita telah mengatur ukuran font untuk sebuah `element` menggunakan piksel. Namun hal itu menghadirkan beberapa tantangan bagi pengguna.

Di dalam pengaturan peramban (*browser settings*) Anda, Anda dapat mengontrol ukuran font *default*.

Bagi mereka yang memiliki gangguan penglihatan, mereka mungkin memperbesar ukuran font agar lebih mudah dibaca. Namun jika Anda menetapkan piksel untuk ukuran font dalam desain web Anda, teks tidak akan berskala secara proporsional dengan konten lainnya.

## Mengapa Menggunakan Satuan rem untuk Tipografi?

Salah satu cara untuk mengatasi masalah ini adalah menggunakan satuan `rem` untuk tipografi. Satuan `rem` relatif terhadap ukuran font dari `root element`, yaitu `element` `html`.

Secara *default*, ukuran font dari `element` `html` adalah `16px`. Jika pengguna meningkatkan ukuran font di pengaturan browser mereka, ukuran font dari `element` `html` akan meningkat, dan semua satuan `rem` akan berskala secara proporsional.

Berikut adalah contoh penggunaan satuan `rem` untuk ukuran font alih-alih piksel:

```html
<link rel="stylesheet" href="styles.css" />
<p>This is regular text.</p>
<p class="para">This text is slightly larger.</p>
```

```css
.para {
  font-size: 1.2rem;
  margin-bottom: 1.5em;
  border: 2px solid red;
}
```

Dengan mengatur ukuran font ke `1.2rem`, ukuran font dari `element` paragraf akan menjadi 1,2 kali ukuran font dari `root element`. Jika pengguna belum mengubah ukuran font *default*, ukuran font dari `element` paragraf akan menjadi `19.2px` karena merupakan 1,2 kali `16px`.

## Kapan Anda Harus Menggunakan Satuan rem?

Jadi kapan Anda harus menggunakan satuan `rem`? Satuan `rem` lebih disukai daripada piksel untuk tipografi karena satuan ini berskala secara proporsional dengan pengaturan browser pengguna. Hal ini membuat konten Anda lebih mudah diakses (*accessible*) bagi pengguna dengan gangguan penglihatan.

Satuan `rem` juga dapat membantu mempertahankan spasi dan tata letak yang konsisten di berbagai `element` yang berbeda.

## Pertanyaan (Questions)

Satuan `em` relatif terhadap apa?

- [ ] Ukuran font dari `element` `figure`.
- [x] `font-size` dari `element` tersebut atau `element` induk (*parent element*).
- [ ] `font-size` dari `root` `element`.
- [ ] `font-size` dari `element` `img`.

Mengapa satuan `rem` lebih disukai daripada piksel untuk tipografi?

- [ ] Piksel harus selalu digunakan untuk tipografi.
- [ ] Satuan tersebut membuat desain Anda lebih berwarna.
- [x] Satuan tersebut berskala secara proporsional dengan pengaturan browser pengguna.
- [ ] Satuan tersebut meningkatkan performa situs web.

Satuan `rem` relatif terhadap apa?

- [ ] `font-size` dari `element` `figure`.
- [ ] `font-size` dari `element` tersebut atau `element` induk (*parent element*).
- [ ] `font-size` dari `element` `img`.
- [x] `font-size` dari `root` `element`.

---

[⬅️ Sebelumnya](2-what-are-percentages-in-css.md) | [Selanjutnya ➡️](4-what-are-vh-and-vw-units.md)
