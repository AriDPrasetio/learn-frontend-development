# Apa Itu Properti CSS Filter, dan Apa Saja Contoh Umumnya?

`Property` `CSS` `filter` adalah alat yang hebat yang memungkinkan Anda menerapkan efek grafis pada `element` di halaman web. Ini sangat berguna untuk menyesuaikan tampilan visual gambar, latar belakang (*background*), dan bahkan teks tanpa memodifikasi aset aslinya.

## Sintaks `filter`

`Property` `filter` dapat digunakan untuk membuat berbagai efek, seperti pengaburan (*blurring*), pergeseran warna (*color shifting*), dan penyesuaian kontras (*contrast adjustments*). Mari kita bahas bagaimana cara kerja `property` `filter` dan pelajari beberapa contoh umum. Sintaks dasar untuk `property` `filter` cukup sederhana:

```css
selector {
  filter: function(amount);
}
```

Di sini, `function` mewakili efek filter spesifik yang ingin Anda terapkan, dan `amount` biasanya merupakan nilai yang menentukan intensitas dari efek tersebut. Sekarang mari kita lihat beberapa `filter function` yang umum dan kegunaannya.

## Fungsi `blur`

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {
  filter: blur(2px);
}
```

`Function` `blur` menerapkan keburaman Gaussian (*Gaussian blur*) pada `element`, nilainya ditentukan dalam piksel dan mewakili radius dari keburaman tersebut. `Rule` `CSS` ini akan menerapkan keburaman 2 piksel ke semua gambar pada halaman. Efek `blur` dapat berguna untuk menciptakan kedalaman pada desain Anda atau untuk mengaburkan bagian dari sebuah gambar.

## Fungsi `brightness`

`Function` `brightness` menyesuaikan kecerahan `element`. Nilai `0%` akan membuat `element` menjadi hitam sepenuhnya, sedangkan nilai di atas `100%` akan meningkatkan kecerahan.

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {
  filter: brightness(150%);
}
```

`Rule` `CSS` ini meningkatkan kecerahan `element` gambar sebesar `50%`. Penyesuaian kecerahan dapat digunakan untuk membuat gambar lebih mencolok (*pop*) atau membuat efek pudar (*washed-out*).

## Fungsi `grayscale`

`Function` `grayscale` mengubah `element` menjadi skala abu-abu (*grayscale*). Nilainya didefinisikan sebagai persentase, di mana `100%` adalah *grayscale* sepenuhnya dan `0%` membiarkan gambar tidak berubah.

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {
  filter: grayscale(100%);
}
```

`Rule` ini akan mengubah `element` gambar menjadi skala abu-abu penuh. `grayscale` dapat digunakan untuk menciptakan tampilan antik (*vintage*) atau mengurangi penekanan (*de-emphasize*) pada `element` tertentu di sebuah halaman.

## Fungsi `sepia`

`Function` `sepia` menerapkan nada sepia pada `element`. Seperti halnya *grayscale*, fungsi ini menggunakan nilai persentase:

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {
  filter: sepia(80%);
}
```

`Rule` ini menerapkan efek sepia `80%` pada `element` gambar. Efek sepia sangat bagus untuk menciptakan tampilan antik (*vintage*) atau nuansa tempo dulu (*old-timey*).

## Fungsi `hue-rotate`

`Function` `hue-rotate` menerapkan rotasi rona (*hue rotation*) pada `element`. Nilainya ditentukan dalam derajat (*degrees*), dan mewakili rotasi di sekitar roda warna (*color circle*).

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {
  filter: hue-rotate(90deg);
}
```

`Rule` ini memutar *hue* dari `element` gambar sebesar `90` derajat. Rotasi *hue* dapat digunakan untuk menciptakan efek psikedelik atau untuk menyesuaikan skema warna gambar secara keseluruhan.

## Menggabungkan Filter

Salah satu aspek paling hebat dari `property` `filter` adalah kemampuan untuk menggabungkan beberapa efek. Anda dapat menerapkan beberapa filter ke `element` yang sama dengan memisahkannya menggunakan spasi:

```html
<link rel="stylesheet" href="styles.css">
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
```

```css
img {  
  filter: contrast(150%) brightness(110%) sepia(30%);  
}
```

`Rule` ini menerapkan peningkatan kontras, sedikit peningkatan kecerahan, dan efek sepia halus pada `element` gambar.

Dengan menggabungkan filter, Anda dapat membuat efek visual yang kompleks dan unik yang disesuaikan dengan kebutuhan desain Anda. `Property` `CSS` `filter` adalah alat serbaguna yang memungkinkan manipulasi visual kreatif dari `element-element` web.

Meskipun kita telah membahas beberapa `filter function` yang paling umum, masih ada fungsi lain yang tersedia, seperti `contrast`, `invert`, dan `saturate`. Seperti halnya fitur hebat lainnya, penting untuk berhati-hati dalam menggunakan filter agar dapat menyempurnakan desain Anda tanpa membuat pengguna merasa kewalahan (*overwhelmed*) atau mengorbankan aksesibilitas.

## Pertanyaan (Questions)

Manakah dari `rules` `CSS` berikut yang akan membuat gambar menjadi skala abu-abu (*grayscale*) sepenuhnya?

- [x] `filter: grayscale(100%);`
- [ ] `filter: gray(100%);`
- [ ] `filter: gray(100);`
- [ ] `filter: black-and-white(true);`

Apa efek dari penerapan `filter: brightness(0%);` pada suatu `element`?

- [ ] Ini akan membuat `element` menjadi putih sepenuhnya.
- [x] Ini akan membuat `element` menjadi hitam sepenuhnya.
- [ ] Ini tidak akan memiliki efek apa pun pada `element`.
- [ ] Ini akan membalikkan (*invert*) warna dari `element`.

Bagaimana Anda menggabungkan efek `blur` sebesar 5 piksel dengan efek `sepia` sebesar 50%?

- [ ] `filter: blur(5px) + sepia(50%);`
- [ ] `filter: blur(5px), sepia(50%);`
- [x] `filter: blur(5px) sepia(50%);`
- [ ] `filter: blur(5px) && sepia(50%);`

---

[⬅️ Sebelumnya](6-what-is-a-css-reset.md) | Selanjutnya ➡️
