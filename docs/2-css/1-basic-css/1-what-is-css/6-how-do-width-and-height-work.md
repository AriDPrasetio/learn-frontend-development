# Bagaimana Cara Kerja Width dan Height?


## Pengantar Width dan Height

Dalam `CSS`, `property` `width` dan `height` digunakan untuk mengontrol dimensi dari `element` pada halaman web.

`Property` ini dapat didefinisikan dalam berbagai satuan seperti piksel (`px`), persentase (`%`), satuan *viewport* (`vw`, `vh`), dan banyak lagi.

## Properti `width` dan `height`

`Property` `width` menentukan lebar dari sebuah `element`. Jika Anda tidak menentukan lebar, maka nilai *default*-nya diatur ke `auto`. Ini memungkinkan peramban (*browser*) menentukan lebar `element` berdasarkan konten, induk (*parent*), dan tipe tampilan (`display`). Untuk `element` `div`, `width: auto` membuatnya melebar untuk mengisi lebar penuh dari wadah induknya (*parent container*).

`Property` `height` menentukan tinggi dari sebuah `element`. Demikian pula, tinggi bernilai `auto` secara *default*, yang berarti akan menyesuaikan dengan konten di dalamnya.

Berikut adalah contoh penggunaan `property` `width` dan `height`:

```html
<head>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: skyblue;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
```

Pada contoh ini, kita memiliki `element` `div` dengan `class` bernama `box`. `Element` ini akan menempati tinggi dan lebar masing-masing `100px`, sedangkan warna latar belakangnya adalah `skyblue`.

Piksel adalah unit pengukuran ukuran tetap (*fixed-size*) dalam `CSS`, memberikan kontrol yang presisi atas dimensi.

## Properti `min-width` dan `min-height`

`Property` `min-width` menentukan lebar minimum yang dapat dimiliki oleh suatu `element`. Bahkan jika konten di dalamnya lebih kecil, `element` tersebut tidak akan menyusut di bawah nilai ini.

`min-height` menentukan tinggi minimum yang dapat dimiliki oleh suatu `element`. Ini memastikan bahwa `element` tersebut tidak menjadi lebih pendek dari nilai yang ditetapkan.

Berikut adalah sebuah contoh:

```html
<head>
  <style>
    .box {
      width: 50px;
      min-width: 100px;
      height: 50px;
      min-height: 100px;
      background-color: lightcoral;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
```

Contoh di atas menunjukkan cara kerja `min-width` dan `min-height`.

Meskipun kotak tersebut memiliki `width` dan `height` yang diatur ke `50px`, sebenarnya ukurannya akan menjadi `100px` kali `100px`. Hal ini dikarenakan `min-width` dan `min-height` diatur ke `100px`, yang lebih besar dari `width` dan `height` yang ditentukan.

Ingat, jika `min-width` atau `min-height` lebih besar daripada `width` atau `height`, keduanya akan menimpa (*override*) nilai yang lebih kecil tersebut. Hal ini memastikan bahwa `element` tidak menjadi terlalu kecil, yang penting untuk menjaga desain yang konsisten dan dapat digunakan (*usable*).

## Properti `max-width` dan `max-height`

`max-width` menentukan lebar maksimum yang dapat dicapai oleh suatu `element`, bahkan jika ada cukup ruang baginya untuk menjadi lebih lebar.

`max-height` menentukan tinggi maksimum yang dapat dicapai oleh suatu `element`, terlepas dari ukuran kontennya.

Berikut adalah sebuah contoh:

```html
<head>
  <style>
    .box {
      width: 200px;
      max-width: 150px;
      height: 200px;
      max-height: 150px;
      background-color: lightgreen;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
```

Contoh di atas menunjukkan bagaimana `max-width` dan `max-height` menimpa `width` dan `height`. Meskipun kotak diatur ke `200px` kali `200px`, ukurannya sebenarnya akan menjadi `150px` kali `150px`. Hal ini dikarenakan `max-width` dan `max-height` diatur ke `150px`, yang lebih kecil.

Ingat, ketika `max-width` atau `max-height` lebih kecil daripada `width` atau `height`, keduanya akan lebih diutamakan (*take precedence*). Ini penting untuk mengontrol ukuran maksimum `element` dalam tata letak (*layout*) Anda.

## Prioritas Properti (Property Precedence)

`CSS` memprioritaskan `min-width` dan `min-height` di atas `width` dan `height`. `max-width` dan `max-height` membatasi dimensi jika nilainya melebihi batas yang ditentukan.

Sebagai contoh, jika Anda mengatur `width` ke `600px` dan `max-width` ke `500px`, `element` tersebut akan dibatasi hingga selebar `500px`. `max-width` menimpa pengaturan yang lebih lebar tersebut, menjaga `element` tetap berada di dalam ukuran maksimum yang ditentukan.

Hal ini memastikan `element` tetap berada dalam rentang ukuran yang diinginkan, terlepas dari nilai standar `width` dan `height`.

## Pertanyaan (Questions)

Apa yang akan terjadi jika Anda mengatur `width: 600px;` dan `max-width: 500px;` pada sebuah element `div`?

- [ ] `Element` akan memiliki lebar `600px`.
- [x] `Element` akan memiliki lebar `500px`.
- [ ] `Element` akan memiliki lebar `550px`.
- [ ] `Element` akan memiliki lebar `100px`.

Jika Anda mengatur `min-height: 200px` dan `height: 150px` pada sebuah element, berapakah `height` dari element tersebut?

- [ ] `150px`
- [ ] `100px`
- [x] `200px`
- [ ] `250px`

Manakah dari berikut ini yang BUKAN merupakan satuan valid yang digunakan dengan properti `width`?

- [x] `hv`
- [ ] `px`
- [ ] `%`
- [ ] `vw`

---
[⬅️ Sebelumnya](5-what-are-inline-internal-and-external-css.md) | [Selanjutnya ➡️](7-what-are-the-different-types-of-css-combinators.md)
