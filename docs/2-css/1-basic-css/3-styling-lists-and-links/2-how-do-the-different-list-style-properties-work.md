# Bagaimana Cara Kerja Berbagai Property list-style?

Dalam `CSS`, `property` `list-style` digunakan untuk mengontrol tampilan daftar (*list*) pada halaman web.

Baik saat Anda bekerja dengan daftar terurut (`ol` - *ordered lists*) maupun daftar tak terurut (`ul` - *unordered lists*), `property` `list-style` memungkinkan Anda menyesuaikan bagaimana `list item` ditampilkan.

`Property` `list-style` sebenarnya merupakan sebuah *shorthand* untuk tiga `property` lainnya:

- `list-style-type`
- `list-style-position`
- `list-style-image`

Masing-masing memainkan peran yang berbeda dalam menentukan tampilan daftar.

## `list-style-type`

`Property` `list-style-type` memungkinkan Anda menentukan jenis penanda poin (*bullet point*) atau nomor yang digunakan dalam sebuah daftar.

Untuk daftar tak terurut, Anda dapat memilih dari beberapa gaya *bullet*, seperti `disc`, `circle`, atau `square`.

Untuk daftar terurut, Anda dapat menggunakan sistem penomoran yang berbeda, seperti desimal, angka Romawi, atau bahkan karakter alfabet.

Berikut adalah contoh penggunaan `list-style-type`:

```html
<ul style="list-style-type: square;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Dalam contoh ini, tanda *bullet* dari `unordered list` diubah menjadi kotak (*square*).

`Property` `list-style-type` adalah yang paling umum digunakan dari ketiganya, karena secara langsung memengaruhi tampilan gaya *bullet* atau penomoran dalam daftar Anda.

## `list-style-position`

`Property` `list-style-position` mengontrol posisi *bullet* atau nomor sehubungan dengan konten `list item`. Terdapat dua nilai (`values`) yang dapat Anda gunakan: `inside` dan `outside`.

Saat Anda menggunakan nilai `outside`, *bullet* atau nomor akan muncul di luar konten, yang merupakan perilaku *default*.

Dan, saat Anda menggunakan nilai `inside`, *bullet* atau nomor akan muncul di dalam konten, yang dapat menyebabkan teks membungkus (*wrap*) dan sejajar dengan *bullet* atau nomor tersebut.

Berikut adalah contoh penggunaan `list-style-position`:

```html
<ul style="list-style-position: inside;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<ul style="list-style-position: outside;">
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
</ul>
```

Dalam contoh ini, kedua nilai `inside` dan `outside` diberikan untuk dua `tag` `unordered list` yang berbeda.

`Property` `list-style-position` dapat berguna ketika Anda ingin mengontrol perataan (*alignment*) dari konten daftar, terutama dalam situasi di mana Anda memiliki beberapa baris teks dalam satu `list item`.

## `list-style-image`

`Property` `list-style-image` memungkinkan Anda menggunakan gambar sebagai penanda *bullet* untuk `list item` Anda. Ini dapat berguna untuk menambahkan gaya visual yang unik ke daftar Anda.

Berikut adalah contoh penggunaan `list-style-image`:

```html
<head>
  <style>
    ul {
      list-style-image: url('https://cdn.freecodecamp.org/platform/universal/freecodecamp-org-gravatar.jpeg');
      list-style-position: inside;
    }
  </style>
</head>
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
```

Dalam contoh ini, tanda *bullet* digantikan oleh logo kustom freeCodeCamp, menambahkan sentuhan personal ke dalam daftar.

Saat menggunakan `list-style-image`, pastikan gambar yang Anda pilih berukuran kecil dan sesuai untuk desain halaman web Anda. Jika gambar terlalu besar atau kompleks, hal tersebut dapat membuat daftar lebih sulit dibaca.

## Shorthand `list-style`

Anda dapat menggabungkan ketiga `property` tersebut – `list-style-type`, `list-style-position`, dan `list-style-image` – ke dalam satu `property` *shorthand* `list-style`.

Urutan nilai di dalam *shorthand* ini tidak menjadi masalah, namun ketiganya dapat ditentukan secara bersamaan.

Berikut adalah contoh penggunaan `property` *shorthand*:

```html
<ul style="list-style: square inside url('https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg');">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Dalam contoh ini, `list item` menggunakan *bullet* berbentuk kotak (*square*), diposisikan di dalam konten (`inside`), dengan gambar kustom sebagai *bullet*.

Namun, jika gambar tidak tersedia atau gagal dimuat (*rendered*), *bullet* kotak akan digunakan sebagai cadangan (*fallback*).

## Pertanyaan (Questions)

Manakah `property` `list-style` yang akan Anda gunakan untuk mengubah tanda *bullet* menjadi lingkaran (`circle`) pada sebuah *unordered list*?

- [ ] `list-style-image`
- [ ] `list-style-position`
- [x] `list-style-type`
- [ ] `list-style`

Jika Anda ingin tanda *bullet* pada daftar sejajar dengan konten teks, nilai `list-style-position` manakah yang harus Anda gunakan?

- [ ] `outside`
- [x] `inside`
- [ ] `center`
- [ ] `left`

`Property` manakah yang memungkinkan Anda mengganti *bullet* bawaan (*default*) dengan gambar kustom?

- [ ] `list-style-type`
- [ ] `list-style-position`
- [ ] `list-style`
- [x] `list-style-image`

---

[⬅️ Sebelumnya](1-how-do-you-space-list-items-using-margin-or-line-height.md) | [Selanjutnya ➡️](3-why-are-default-link-styles-important-for-usability-on-the-web.md)
