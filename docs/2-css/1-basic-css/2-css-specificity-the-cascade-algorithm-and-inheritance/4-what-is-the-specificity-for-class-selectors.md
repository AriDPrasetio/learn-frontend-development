# Berapa Nilai Specificity untuk Class Selector?

`Class selectors` adalah bagian penting dari `CSS`, memungkinkan pengembang untuk menargetkan beberapa `element` dengan `attribute` `class` yang sama dan menerapkan `styling` yang konsisten.

Hal ini membuatnya sangat serbaguna dan efisien untuk menerapkan `styles` di seluruh situs web.

`Class selectors` didefinisikan dengan tanda titik (`.`) yang diikuti oleh nama `class`. Mereka dapat diterapkan ke `element` apa pun di dalam dokumen `HTML`.

Berikut adalah contoh penggunaan sebuah `class selector`:

```html
<link rel="stylesheet" href="styles.css">
<p class="highlight">Example paragraph</p>
```

```css
.highlight {
  color: green;
}
```

Dalam contoh ini, `element` apa pun dengan `class` `highlight` akan memiliki warna teks yang diatur ke `green`.

`Class selectors` memiliki `specificity` yang lebih tinggi daripada `type selectors`, tetapi lebih rendah daripada `ID selectors` dan `inline styles`.

Nilai `specificity` untuk sebuah `class selector` adalah `(0, 0, 1, 0)`. Ini berarti bahwa `class selectors` dapat menimpa (*override*) `type selectors`, tetapi mereka dapat ditimpa oleh `ID selectors` dan `inline styles`.

`Class selectors` dapat digabungkan dengan `selectors` lain untuk membuat `rules` yang lebih spesifik.

Berikut adalah contoh penggabungan antara sebuah `type selector` paragraf dengan sebuah `class selector`:

```html
<link rel="stylesheet" href="styles.css">

<p class="bold-text">Example paragraph</p>
<p class="bold-text">Example paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
p.bold-text {
  font-weight: bold;
}
```

`Rule` ini hanya berlaku untuk `element` `p` yang juga memiliki `class` `bold-text`, menjadikan teks mereka tebal (*bold*).

## Pertanyaan (Questions)

Berapakah nilai `specificity` dari sebuah `class selector` (misalnya, `.example`)?

- [ ] (1, 0, 0, 0)
- [ ] (0, 1, 0, 0)
- [x] (0, 0, 1, 0)
- [ ] (0, 0, 0, 1)

Manakah dari `selectors` berikut yang memiliki `specificity` lebih tinggi daripada sebuah `class selector`?

- [ ] Sebuah `type selector`.
- [x] Sebuah `ID selector`.
- [ ] Sebuah `universal selector`.
- [ ] Sebuah `pseudo-element`.

Berdasarkan `CSS` berikut, apa warna teks yang akan dihasilkan?

```html
<head>
  <style>
    .highlight {
      color: green;
    }
    p {
      color: blue;
    }
    p.highlight {
      color: red;
    }
  </style>
</head>
<body>
  <p class="highlight">This text</p>
</body>
```

- [ ] `green`
- [ ] `blue`
- [x] `red`
- [ ] `purple`

---

[⬅️ Sebelumnya](3-what-is-the-specificity-for-type-selectors.md) | [Selanjutnya ➡️](5-what-is-the-specificity-for-id-selectors.md)
