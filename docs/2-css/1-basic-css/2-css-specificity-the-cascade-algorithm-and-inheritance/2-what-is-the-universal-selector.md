# Apa Itu Universal Selector, dan Berapa Nilai Specificity-nya?

`Universal selector` (`*`) adalah jenis `selector` `CSS` khusus yang cocok (*matches*) dengan `element` apa pun di dalam dokumen.

Ini sering digunakan untuk menerapkan sebuah `style` ke semua `element` di halaman web, yang dapat berguna untuk menyetel ulang (*resetting*) atau menormalisasi (*normalizing*) `styles` di berbagai peramban (*browsers*).

`Universal selector` dapat digunakan untuk memilih semua `element` dalam konteks tertentu atau secara global di seluruh dokumen.

Berikut adalah contoh penggunaan `universal selector` untuk mengatur `margin` dan `padding` pada seluruh dokumen `HTML`:

```html
<link rel="stylesheet" href="styles.css">

<h1>Heading element</h1>
<p>example paragraph element</p>
```

```css
* {
  margin: 0;
  padding: 0;
}
```

Dalam contoh kode ini, `selector` `*` menyetel ulang `margin` dan `padding` dari semua `element` menjadi nol, yang merupakan teknik umum yang digunakan dalam *CSS resets*.

`Universal selector` memiliki nilai `specificity` terendah dibandingkan dengan `selector` mana pun. Ini menyumbang 0 ke semua bagian dari nilai `specificity` `(0, 0, 0, 0)`.

Ini berarti bahwa `selector` lain apa pun, termasuk `type selectors`, `class selectors`, `ID selectors`, dan `inline styles`, akan menimpa (*override*) `styles` yang ditetapkan oleh `universal selector`.

Mari kita lihat contoh `HTML` dan `CSS` berikut:

```html
<head>
  <style>
    * {
      color: blue;
    }
    p {
      color: red;
    }
    .highlight {
      color: green;
    }
    #unique {
      color: purple;
    }
  </style>
</head>
<body>
  <p id="unique" class="highlight">This text has multiple styles applied.</p>
</body>
```

`Universal selector` `*` mengatur warna teks menjadi `blue` untuk semua `element`.

Namun, `type selector` `p` menimpa ini dengan mengatur warna teks menjadi `red` khusus untuk `element` `p`.

Jika suatu `element` memiliki `class` `highlight`, `class selector` akan diutamakan, mengubah warna teks menjadi `green`.

Akhirnya, `ID selector` `#unique`, yang memiliki `specificity` tertinggi, akan menimpa semua `selectors` lainnya, mengatur warna teks menjadi `purple`.

## Pertanyaan (Questions)

Berapakah nilai `specificity` dari `universal selector` (`*`)?

- [ ] (1, 0, 0, 0)
- [ ] (0, 1, 0, 0)
- [ ] (0, 0, 1, 0)
- [x] (0, 0, 0, 0)

Apa kasus penggunaan umum (*use case*) untuk `universal selector`?

- [ ] Untuk menerapkan `styles` pada sebuah `element` tertentu.
- [x] Untuk menyetel ulang (*reset*) atau menormalisasi `styles` di seluruh `element`.
- [ ] Untuk menargetkan `element` dengan `class` tertentu.
- [ ] Untuk menimpa (*override*) `inline styles`.

Berdasarkan `CSS` berikut, apa warna teks yang akan dihasilkan?

```html
<head>
  <style>
    * {
      color: blue;
    }
    p {
      color: red;
    }
    .highlight {
      color: green;
    }
    #unique {
      color: purple;
    }
  </style>
</head>
<body>
  <p id="unique" class="highlight">This text</p>
</body>
```

- [ ] `blue`
- [ ] `red`
- [ ] `green`
- [x] `purple`

---

[⬅️ Sebelumnya](1-what-is-css-specificity-and-the-specificity-for-inline-internal-and-external-css.md) | [Selanjutnya ➡️](3-what-is-the-specificity-for-type-selectors.md)
