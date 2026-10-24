# Bagaimana Cara Kerja Inheritance di CSS pada Tingkat Tinggi?

`Inheritance` (pewarisan) adalah konsep kunci dalam `CSS` yang menentukan bagaimana `styles` diteruskan dari `elements` induk (*parent*) ke `elements` anak (*child*).

Sama seperti di dunia nyata, di mana anak-anak sering kali mewarisi sifat dari orang tua mereka, dalam `CSS`, `properties` tertentu dapat diwarisi oleh `elements` anak dari `elements` induknya.

Hal ini memungkinkan cara yang lebih efisien untuk menerapkan `styling` yang konsisten di seluruh dokumen.

Di dalam `CSS`, tidak semua `properties` diwariskan secara *default*. Sebagai contoh, `properties` seperti `color`, `font-family`, dan `line-height` diwariskan. Ini berarti bahwa jika Anda mengatur warna teks pada `element` induk, semua `elements` anaknya akan mewarisi warna tersebut kecuali jika Anda secara spesifik menimpanya (*override*).

Sebagai contoh, perhatikan contoh berikut di mana sebuah `element` induk `div` warnanya diatur menggunakan `inline style`, dan `element` anak `p` mewarisi warna tersebut:

```html
<div style="color: blue;">
  This is the parent element.
  <p>This is the child element inheriting the color.</p>
</div>
```

Dalam kasus ini, baik induk `div` maupun anak `p` akan menampilkan teks mereka dalam warna biru karena warnanya diwarisi.

Di sisi lain, `properties` seperti `margin`, `padding`, `border`, dan `background` tidak diwariskan secara *default*. Jika Anda ingin sebuah `element` anak mewarisi `styles` ini, Anda perlu mengaturnya secara eksplisit, baik secara langsung pada `element` anak tersebut atau dengan menggunakan kata kunci `inherit`.

Kata kunci `inherit` dapat digunakan untuk memaksa pewarisan suatu `property` dari sebuah `element` induk, bahkan jika `property` tersebut biasanya tidak diwariskan.

Sebagai contoh, jika Anda ingin sebuah `element` anak tertentu memiliki `padding` yang sama dengan induknya, Anda dapat mengatur `padding: inherit` pada `element` anak:

```html
<div style="padding: 20px;">
  This is the parent element with padding.
  <p style="padding: inherit;">This is the child element inheriting the padding.</p>
</div>
```

Dalam hal ini, `element` anak `p` akan mewarisi `padding` sebesar `20px` dari `element` induknya `div`.

`Inheritance` sangat berguna untuk menjaga konsistensi dan mengurangi redundansi di dalam `stylesheets` Anda.

Alih-alih menulis `style rule` yang sama untuk beberapa `elements`, Anda dapat mendefinisikannya sekali pada sebuah `element` induk, dan `elements` anak akan mewarisinya. Ini dapat membuat `CSS` Anda lebih ringkas dan lebih mudah dikelola.

Namun, penting untuk diingat bahwa pewarisan hanya bekerja dalam satu arah, dari induk ke anak. Jika Anda menimpa suatu `style` pada `element` anak, hal tersebut tidak akan memengaruhi `element` induk.

## Pertanyaan (Questions)

Manakah dari `properties` `CSS` berikut yang biasanya diwariskan secara *default*?

- [ ] `padding`
- [ ] `border`
- [x] `color`
- [ ] `background`

Kata kunci apa yang dapat digunakan untuk memaksa `element` anak mewarisi suatu `property` dari induknya?

- [ ] `default`
- [x] `inherit`
- [ ] `initial`
- [ ] `none`

Berdasarkan `CSS` berikut, apa warna teks `span` di dalam `p`?

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p>This is a <span>test</span>.</p>
</body>
```

- [x] `blue`
- [ ] `red`
- [ ] `green`
- [ ] `black`

---

[⬅️ Sebelumnya](7-how-does-the-cascade-algorithm-work-at-a-high-level.md) | [Selanjutnya ➡️](../3-styling-lists-and-links/1-how-do-you-space-list-items-using-margin-or-line-height.md)
