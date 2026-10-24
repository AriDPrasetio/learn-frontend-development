# Bagaimana Cara Kerja Inline-Block, dan Apa Bedanya dengan Elemen Inline dan Block?


Saat bekerja dengan `CSS`, Anda sering menemukan tiga jenis perilaku tampilan (`display`) yang berbeda untuk `element`: `inline`, `block`, dan `inline-block`.

Masing-masing dari `property` ini memengaruhi bagaimana `element` diposisikan dan bagaimana mereka berinteraksi dengan `element` lain di halaman.

Dalam pelajaran ini, kita akan fokus pada cara kerja `property` `inline-block` dan bagaimana perbedaannya dengan `inline element` maupun `block-level element`.

`Block-level element` berperilaku seperti wadah besar atau "blok" yang menghabiskan seluruh lebar dari wadah induknya (*parent container*). Mereka selalu dimulai pada baris baru, serta tinggi (`height`) dan lebarnya (`width`) dapat disesuaikan.

`Inline element` hanya menempati ruang sebanyak yang mereka butuhkan. Mereka mengalir di dalam konten sekitarnya dan tidak terputus ke baris baru.

`Property` `inline-block` adalah gabungan (*hybrid*) dari kedua perilaku ini. Seperti `inline element`, `inline-block element` tetap berada di dalam aliran teks (*text flow*) tanpa dimulai pada baris baru.

Namun, tidak seperti `inline element`, Anda dapat menyesuaikan lebar (`width`) dan tinggi (`height`) dari sebuah `inline-block element`, persis seperti yang Anda lakukan pada `block-level element`.

Singkatnya, perbedaan utama antara `inline` dan `inline-block` adalah bahwa ukuran `inline element` tidak dapat dikontrol, sedangkan `inline-block element` memungkinkan kontrol penuh atas dimensi sambil tetap berada sejajar (*inline*) dengan konten lainnya.

Mari kita lihat sebuah contoh:

```html
<link href="styles.css" rel="stylesheet">

<div class="container">
  <span class="inline-block-element element1">Inline-Block</span>
  <span class="inline-block-element element2">Inline-Block</span>
</div>
```

```css
.inline-block-element {
  display: inline-block;
  width: 150px;
  height: 100px;
}

.element1 {
  background-color: lightblue;
}

.element2 {
  background-color: lightgreen;
}
```

Pada contoh di atas, kita memiliki `div` dengan `class` `container`. Di dalam `element` `div` tersebut, kita memiliki dua `element` `span`.

Setiap `element` `span` diatur ke `display: inline-block` dan memiliki `width` serta `height` yang juga telah diatur.

`Inline-block element` akan muncul berdampingan (*side by side*) karena mereka berperilaku seperti `inline element`, tetapi mereka juga memiliki lebar dan tinggi yang ditentukan, yang memberi mereka karakteristik seperti `block`.

Namun, jika Anda menghapus `property` `display: inline-block`, baik `height` maupun `width` tidak akan diterapkan meskipun Anda telah mendefinisikannya dengan jelas.

Berikut adalah revisi `CSS`-nya:

```html
<link href="styles.css" rel="stylesheet">

<div class="container">
  <span class="inline-block-element element1">Span element</span>
  <span class="inline-block-element element2">Span element</span>
</div>
```

```css
.inline-block-element {
  width: 150px;
  height: 100px;
}

.element1 {
  background-color: lightblue;
}

.element2 {
  background-color: lightgreen;
}
```

Dalam kode ini, kita menghapus `property` `display: inline-block;` namun membiarkan bagian lainnya tetap utuh. Di sini, `element` `span` kembali ke perilaku *default*-nya sebagai `inline element`.

Akibatnya, `width` dan `height` yang ditentukan akan diabaikan, dan `element-element` tersebut hanya menempati ruang yang dibutuhkan untuk kontennya.

Memahami cara kerja `inline-block` sangat berguna karena Anda dapat menggunakannya untuk membuat tata letak yang memerlukan perataan sekaligus kontrol dimensi di dalam aliran teks yang berkelanjutan.

## Pertanyaan (Questions)

Apa karakteristik utama dari elemen inline-block yang membedakannya dari elemen inline?

- [ ] `Inline-block element` tidak dapat disarangkan di dalam `block element`.
- [ ] `Inline-block element` secara otomatis membentang di sepanjang lebar penuh wadahnya.
- [x] `Inline-block element` memungkinkan pengaturan `height` dan `width`, tidak seperti `inline element`.
- [ ] `Inline-block element` selalu berpindah ke baris baru.

Skenario manakah yang paling cocok untuk menggunakan elemen inline-block dibandingkan elemen inline atau block?

- [ ] Saat Anda membutuhkan sebuah `element` untuk menempati seluruh lebar wadah induknya.
- [x] Saat Anda ingin sebuah `element` tetap sebaris (*inline*) tetapi perlu menyesuaikan ukurannya.
- [ ] Saat Anda membutuhkan sebuah `element` untuk selalu dimulai pada baris baru.
- [ ] Saat Anda tidak ingin sebuah `element` dipengaruhi oleh `padding` dan `margin`.

Dalam situasi apa elemen dengan `display: inline-block;` akan berperilaku berbeda dari elemen dengan `display: block;`?

- [ ] Saat Anda membutuhkan `element` untuk menempati seluruh lebar wadah.
- [x] Saat Anda ingin `element` tersebut mengalir berdampingan dengan teks dan `inline element` lainnya.
- [ ] Saat Anda membutuhkan `element` untuk dimulai pada baris baru secara otomatis.
- [ ] Saat Anda tidak ingin `element` tersebut memiliki `property` `height` atau `width`.

---
[⬅️ Sebelumnya](8-what-is-the-difference-between-inline-and-block-level-elements-in-css.md) | [Selanjutnya ➡️](10-what-are-margins-and-padding.md)
