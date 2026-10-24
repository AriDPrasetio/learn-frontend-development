# Apa Itu Margin dan Padding, dan Bagaimana Cara Kerjanya?


`Margin` dan `padding` adalah `property` penting dalam `CSS` untuk menciptakan halaman web yang terstruktur dengan baik, mudah dibaca, dan menarik secara visual.

`Margin` mengontrol ruang di luar suatu `element`, membantu memisahkannya dari `element` lain dan menentukan struktur tata letak (*layout*), sedangkan `padding` mengontrol ruang di dalam suatu `element`, meningkatkan keterbacaan konten dan daya tarik estetika.

Untuk lebih memahami perbedaan antara `margin` dan `padding`, mari kita lihat beberapa contoh.

Berikut adalah contoh `HTML` dari tiga `element` paragraf di halaman tersebut:

```html
<p>Paragraph one</p>
<p>Paragraph two</p>
<p>Paragraph three</p>
```

## Properti `margin`

Untuk menerapkan jarak (*spacing*) ke bagian atas setiap `element` paragraf, Anda dapat menggunakan `property` `margin-top` seperti ini:

```html
<link rel="stylesheet" href="styles.css">

<p>Paragraph one</p>
<p>Paragraph two</p>
<p>Paragraph three</p>
```

```css
p {
  margin-top: 20px;
  border: 2px solid black;
}
```

Pada contoh ini, kita menerapkan `margin` sebesar `20px` hanya pada bagian atas dari setiap `element` paragraf.

Kita juga menambahkan garis tepi hitam tebal (*solid black border*) di keempat sisinya agar Anda dapat melihat `margin` dengan lebih jelas.

Empat `property` `margin` yang berbeda adalah `margin-top`, `margin-right`, `margin-bottom`, dan `margin-left`.

Berikut adalah contoh penggunaan keempat `property` tersebut:

```html
<link rel="stylesheet" href="styles.css">

<span>Paragraph one</span>
<p>Paragraph two</p>
<span>Paragraph three</span>
```

```css
p {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
  border: 2px solid black;
}
```

Pada contoh ini, kita menetapkan nilai jarak pada keempat sisi dari `element` paragraf. Garis tepi hitam tebal juga telah ditambahkan agar Anda dapat melihat `margin` dengan lebih baik.

## Shorthand `margin`

Cara lain untuk menggunakan `property` `margin` adalah dengan notasi singkatan (*shorthand notation*). Anda dapat menentukan satu, dua, tiga, atau empat nilai sekaligus. Mari kita pelajari opsi-opsi ini bersama.

Saat menggunakan nilai tunggal pada *shorthand* `margin`, nilai yang tepat sama tersebut akan diterapkan ke keempat sisi `element` target.

Berikut adalah contoh penggunaan nilai tunggal pada *shorthand* `margin`:

```html
<link rel="stylesheet" href="styles.css">

<span>Paragraph one</span>
<p>Paragraph two</p>
<span>Paragraph three</span>
```

```css
p {
  margin: 10px;
}
```

Contoh kode ini akan menerapkan `margin` sebesar `10px` secara merata ke keempat sisi `element` paragraf.

Saat menggunakan dua nilai, nilai pertama berlaku untuk `top` dan `bottom`, sedangkan nilai kedua berlaku untuk sisi `left` dan `right` dari `element`.

Berikut adalah contoh penggunaan dua nilai untuk *shorthand* `margin`:

```html
<link rel="stylesheet" href="styles.css">

<span>Paragraph one</span>
<p>Paragraph two</p>
<span>Paragraph three</span>
```

```css
p {
  margin: 10px 20px;
}
```

Ini mengatur `margin` `top` dan `bottom` menjadi `10px`, serta `20px` untuk `margin` `left` dan `right` pada `element` paragraf.

Jika tiga nilai diberikan, nilai pertama berlaku untuk `margin` `top`, nilai kedua untuk `margin` `left` dan `right`, dan nilai ketiga untuk `margin` `bottom`.

Berikut adalah contoh untuk lebih memahaminya:

```html
<link rel="stylesheet" href="styles.css">

<span>Paragraph one</span>
<p>Paragraph two</p>
<span>Paragraph three</span>
```

```css
p {
  margin: 10px 20px 30px;
}
```

Ini mengatur `margin` menjadi `10px` untuk `top`, `20px` untuk `left` dan `right`, serta `30px` untuk `bottom`.

Saat menggunakan empat nilai, ini memberi Anda kontrol lebih besar, karena Anda dapat secara mandiri menentukan setiap nilai `margin` untuk setiap sisi `element` target.

Nilai pertama menargetkan `top`, nilai kedua menargetkan `right`, nilai ketiga menargetkan `bottom`, dan nilai keempat menargetkan `left`.

Berikut adalah contoh penggunaan *shorthand* `margin` dengan empat nilai:

```html
<link rel="stylesheet" href="styles.css">

<span>Paragraph one</span>
<p>Paragraph two</p>
<span>Paragraph three</span>
```

```css
p {
  margin: 10px 20px 30px 40px;
}
```

Ini mengatur `margin` menjadi `10px` untuk `top`, `20px` untuk `right`, `30px` untuk `bottom`, dan `40px` untuk `left`.

## Properti `padding`

`Property` `padding` digunakan untuk menerapkan ruang di dalam `element`, di antara konten dan garis tepinya (*border*).

Seperti halnya `property` `margin`, empat `property` `padding` adalah `padding-top`, `padding-right`, `padding-bottom`, dan `padding-left`.

Berikut adalah contoh cara mengatur `padding` untuk `element` paragraf:

```html
<link rel="stylesheet" href="styles.css">

<span>Paragraph one</span>
<p>Paragraph two</p>
<span>Paragraph three</span>
```

```css
p {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  border: 2px solid black;
}
```

Ini mengatur `padding` menjadi `10px` untuk `top`, `20px` untuk `right`, `30px` untuk `bottom`, dan `40px` untuk `left`.

Seperti yang Anda lihat, `padding` diterapkan pada konten yang berada di dalam *border*, tidak seperti `margin` yang berlaku di luar *border*.

## Shorthand `padding`

Sama seperti `property` `margin`, Anda juga dapat memilih untuk menggunakan *shorthand* untuk `property` `padding`.

Anda juga dapat menentukan satu, dua, tiga, atau empat nilai pada `property` *shorthand* `padding`.

Berikut adalah contoh penggunaan *shorthand* `padding` untuk `element` paragraf dari contoh sebelumnya:

```html
<link rel="stylesheet" href="styles.css">

<span>Paragraph one</span>
<p>Paragraph two</p>
<span>Paragraph three</span>
```

```css
p {
  padding: 10px 20px 30px 40px;
  border: 2px solid black;
}
```

Pada contoh ini, dengan menggunakan *shorthand*, kode akan mengatur `padding` menjadi `10px` untuk `top`, `20px` untuk `right`, `30px` untuk `bottom`, dan `40px` untuk `left` dari `element` paragraf.

## Pertanyaan (Questions)

Properti CSS manakah yang akan Anda gunakan untuk membuat jarak antara garis tepi (*border*) suatu elemen dan elemen-elemen di sekitarnya?

- [ ] `padding`
- [ ] `border`
- [x] `margin`
- [ ] `width`

Properti CSS manakah yang akan Anda gunakan untuk membuat jarak antara konten suatu elemen dan garis tepinya (*border*)?

- [x] `padding`
- [ ] `margin`
- [ ] `border`
- [ ] `height`

Apa urutan nilai yang benar saat menggunakan properti shorthand untuk `margin` atau `padding` dengan empat nilai?

- [ ] `left`, `right`, `top`, `bottom`.
- [ ] `top`, `left`, `bottom`, `right`.
- [x] `top`, `right`, `bottom`, `left`.
- [ ] `right`, `bottom`, `left`, `top`.

---
[⬅️ Sebelumnya](9-how-does-inline-block-work.md) | [Selanjutnya ➡️](../2-css-specificity-the-cascade-algorithm-and-inheritance/1-what-is-css-specificity-and-the-specificity-for-inline-internal-and-external-css.md)
