# Berapa Nilai Specificity untuk ID Selector?

`ID selectors` adalah salah satu `selectors` paling kuat di dalam `CSS`, memungkinkan pengembang menerapkan `styles` pada `element` tertentu dengan pengenal unik (*unique identifiers*).

Hal ini membuatnya sangat efektif untuk menargetkan `element` individual yang memerlukan `styling` unik.

`ID selectors` didefinisikan dengan simbol tanda pagar (`#`) yang diikuti oleh nama ID. Mereka harus bersifat unik di dalam sebuah dokumen `HTML`, yang berarti tidak boleh ada dua `element` yang berbagi ID yang sama.

Berikut adalah contoh penggunaan sebuah `ID selector`:

```html
<link rel="stylesheet" href="styles.css">
<p id="unique">Example paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
#unique {
  color: purple;
}
```

Dalam contoh ini, `element` dengan `id` bernilai `unique` akan memiliki warna teks yang diatur ke `purple`.

`ID selectors` memiliki `specificity` yang sangat tinggi, lebih tinggi daripada `type selectors` dan `class selectors`, tetapi lebih rendah daripada `inline styles`. Nilai `specificity` untuk sebuah `ID selector` adalah `(0, 1, 0, 0)`.

Ini berarti bahwa `ID selectors` dapat menimpa (*override*) `class selectors` dan `type selectors`, tetapi dapat ditimpa oleh `inline styles`.

## Pertanyaan (Questions)

Berapakah nilai `specificity` dari sebuah `ID selector` (misalnya, `#example`)?

- [ ] (1, 0, 0, 0)
- [x] (0, 1, 0, 0)
- [ ] (0, 0, 1, 0)
- [ ] (0, 0, 0, 1)

Manakah dari pilihan berikut yang memiliki `specificity` lebih tinggi daripada sebuah `ID selector`?

- [ ] Sebuah `class selector`.
- [x] Sebuah `inline style`.
- [ ] Sebuah `attribute selector`.
- [ ] Sebuah `type selector`.

Berdasarkan `CSS` berikut, apa warna teks yang akan dihasilkan?

```html
<head>
  <style>
    #unique {
      color: purple;
    }
    .highlight {
      color: green;
    }
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p id="unique" class="highlight">This text</p>
</body>
```

- [ ] `green`
- [ ] `blue`
- [ ] `red`
- [x] `purple`

---

[⬅️ Sebelumnya](4-what-is-the-specificity-for-class-selectors.md) | [Selanjutnya ➡️](6-what-is-the-important-keyword.md)
