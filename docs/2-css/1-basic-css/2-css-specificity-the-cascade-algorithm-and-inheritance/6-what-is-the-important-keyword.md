# Apa Itu Keyword !important, dan Apa Praktik Terbaik dalam Menggunakannya?

Kata kunci (*keyword*) `!important` di dalam `CSS` digunakan untuk memberikan prioritas tertinggi pada sebuah `style rule`, memungkinkannya untuk menimpa (*override*) `declarations` lainnya untuk suatu `property`.

Ketika digunakan, kata kunci ini memaksa peramban (*browser*) untuk menerapkan `style` yang ditentukan, terlepas dari `specificity` dari `selectors` lainnya.

Katakanlah Anda memiliki sebuah `element` paragraf `HTML` dengan `inline styles` seperti ini:

```html
<p class="para" style="background-color: lightblue; color: black;">
  This is a paragraph.
</p>
```

Dalam contoh ini, `element` paragraf memiliki warna latar belakang (*background color*) yang diatur ke `lightblue` dan warna teks yang diatur ke `black`.

File `CSS` menerapkan `styles` berikut ke `element` paragraf tersebut:

```html
<link rel="stylesheet" href="styles.css">

<p class="para" style="background-color: lightblue; color: black;">
  This is a paragraph.
</p>
```

```css
.para {
  background-color: black;
  color: white;
}
```

Karena `inline styles` memiliki prioritas yang lebih tinggi daripada `class`, `ID`, dan `type selectors`, warna latar belakang hitam dan warna teks putih tidak akan diterapkan pada `element` paragraf tersebut.

Untuk menimpa `inline styles` tersebut, Anda dapat menggunakan kata kunci `!important` seperti ini:

```html
<link rel="stylesheet" href="styles.css">

<p class="para" style="background-color: lightblue; color: black;">
  This is a paragraph.
</p>
```

```css
.para {
  background-color: black !important;
  color: white !important;
}
```

Kata kunci `!important` digunakan setelah `value` `CSS` dan sebelum titik koma (*semicolon*).

Sekarang `element` paragraf akan memiliki warna hitam dan putih yang diterapkan karena `inline styles` telah ditimpa dengan penggunaan kata kunci `!important`.

Kata kunci `!important` di dalam `CSS` digunakan untuk memberikan prioritas tertinggi pada sebuah `style rule`, secara efektif menimpa `declarations` lain, termasuk yang memiliki `specificity` lebih tinggi dan `inline styles`.

Namun, kata kunci `!important` tidak mengubah `specificity` dari `CSS selector` itu sendiri. Kata kunci ini hanya memastikan bahwa `rule` dengan `!important` diterapkan, bahkan jika ada `rules` bertentangan lainnya dengan `specificity` yang lebih tinggi.

Kasus penggunaan lain yang tepat untuk kata kunci `!important` adalah untuk menimpa `styles` dari pustaka (*library*) atau *framework* pihak ketiga ketika Anda tidak memiliki kendali atas file `CSS` aslinya.

Namun, terlalu sering menggunakan kata kunci `!important` dapat menyebabkan kesulitan dalam memelihara dan mendebug `CSS` Anda, karena hal itu merusak sifat alami berjenjang (*cascading*) dari `styles` dan dapat menimbulkan konsekuensi yang tidak terduga.

Oleh karena itu, sebaiknya gunakan kata kunci `!important` dengan hemat (*sparingly*).

## Pertanyaan (Questions)

Apa fungsi kata kunci `!important` di dalam `CSS`?

- [ ] Meningkatkan nilai `specificity` dari sebuah `selector`.
- [x] Menerapkan sebuah `style` terlepas dari `specificity` `rules` lainnya.
- [ ] Menurunkan nilai `specificity` dari sebuah `selector`.
- [ ] Hanya menimpa `inline styles`.

Kapan kata kunci `!important` sebaiknya digunakan?

- [ ] Sebagai metode utama untuk menata (*styling*) `element`.
- [x] Untuk menimpa `styles` pihak ketiga atau sebagai perbaikan sementara.
- [ ] Di setiap `rule` `CSS` demi konsistensi.
- [ ] Untuk meningkatkan `specificity`.

Berdasarkan `CSS` berikut, apa warna teks yang akan dihasilkan?

```html
<head>
  <style>
    p {
      color: blue;
    }
    .highlight {
      color: green !important;
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
- [x] `green`
- [ ] `purple`
- [ ] `red`

---

[⬅️ Sebelumnya](5-what-is-the-specificity-for-id-selectors.md) | [Selanjutnya ➡️](7-how-does-the-cascade-algorithm-work-at-a-high-level.md)
