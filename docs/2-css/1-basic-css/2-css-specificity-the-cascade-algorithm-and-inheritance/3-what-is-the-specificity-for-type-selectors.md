# Berapa Nilai Specificity untuk Type Selector?

`Type selectors`, yang juga dikenal sebagai `element selectors`, menargetkan `element` berdasarkan nama `tag`-nya.

`Selectors` ini sangat mendasar di dalam `CSS` dan memungkinkan Anda menerapkan `styles` ke semua instans dari `element` `HTML` tertentu.

`Type selectors` sangat mudah digunakan dan ditulis cukup dengan nama `tag` dari `element` yang ingin Anda beri gaya (*style*).

Berikut adalah contoh dari sebuah `type selector` yang menargetkan semua `element` paragraf di halaman:

```html
<link rel="stylesheet" href="styles.css">

<p>Paragraph one</p>
<p>Paragraph two</p>
<p>Paragraph three</p>
```

```css
p {
  color: blue;
}
```

Dalam contoh ini, semua `element` `p` akan memiliki warna teks yang diatur ke `blue`.

`Type selectors` memiliki `specificity` yang relatif rendah dibandingkan dengan `selectors` lainnya. Nilai `specificity` untuk sebuah `type selector` adalah `(0, 0, 0, 1)`.

Ini berarti bahwa `type selectors` akan ditimpa (*overridden*) oleh `class selectors`, `ID selectors`, dan `inline styles`, tetapi masih dapat menerapkan `styles` kecuali jika terdapat `rules` dengan `specificity` yang lebih tinggi.

Mari kita lihat contoh di mana `class selectors` akan menimpa `styles` dari `type selector`.

Berikut adalah contoh dengan dua `element` paragraf:

```html
<p class="para">I am a paragraph</p>
<p class="para">Here is another paragraph</p>
```

Kedua `element` paragraf memiliki `class` bernama `para`.

Di dalam file `CSS`, `type selector` menargetkan paragraf, dan `class selector` menargetkan `element` dengan `class` `para`.

```html
<link rel="stylesheet" href="styles.css">

<p class="para">I am a paragraph</p>
<p class="para">Here is another paragraph</p>
```

```css
p {
  color: blue;
}

.para {
  color: red;
}
```

Semua paragraf di halaman dengan `class` `para` akan memiliki warna teks yang diatur ke `red`, bukan `blue`, karena `class selectors` memiliki `specificity` yang lebih tinggi daripada `type selectors`.

## Pertanyaan (Questions)

Berapakah nilai `specificity` dari sebuah `type selector` (misalnya, `div`)?

- [ ] (1, 0, 0, 0)
- [ ] (0, 1, 0, 0)
- [ ] (0, 0, 1, 0)
- [x] (0, 0, 0, 1)

Manakah dari pilihan berikut yang memiliki `specificity` lebih rendah daripada sebuah `type selector`?

- [ ] Sebuah `class selector`.
- [ ] Sebuah `ID selector`.
- [ ] Sebuah `inline style`.
- [x] Sebuah `universal selector`.

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
  </style>
</head>
<body>
  <p>This text</p>
</body>
```

- [ ] `blue`
- [x] `red`
- [ ] `green`
- [ ] `purple`

---

[⬅️ Sebelumnya](2-what-is-the-universal-selector.md) | [Selanjutnya ➡️](4-what-is-the-specificity-for-class-selectors.md)
