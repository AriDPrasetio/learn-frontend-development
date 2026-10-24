# Apa Saja Berbagai Cara Menambahkan Border di Sekitar Gambar?

Dalam `CSS`, terdapat beberapa cara untuk menambahkan *border* di sekitar gambar, masing-masing menawarkan opsi gaya dan tingkat kontrol yang berbeda.

Mari kita pelajari beberapa metode yang paling umum dan serbaguna.

Cara paling mudah untuk menambahkan *border* pada gambar adalah dengan menggunakan `property` `border`. `Property` ini merupakan sebuah *shorthand* yang memungkinkan Anda mengatur lebar (`width`), gaya (`style`), dan warna (`color`) dari *border* sekaligus.

```html
<link rel="stylesheet" href="styles.css">

<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute cat lying on its back.">
```

```css
img {
  border: 2px solid red;
}
```

Aturan `CSS` ini menambahkan *border* merah solid selebar 2 piksel di sekitar semua `element` `img`. Anda dapat menyesuaikan lebar, gaya (seperti `dashed`, `dotted`, atau `double`), dan warna sesuai kebutuhan desain Anda.

Jika Anda memerlukan lebih banyak kontrol atas sisi tertentu dari *border*, Anda dapat menggunakan `border properties` khusus untuk setiap sisi:

```html
<link rel="stylesheet" href="styles.css">

<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute cat lying on its back.">
```

```css
img {
  border-top: 10px solid red;
  border-right: 10px dashed green;
  border-bottom: 10px dotted blue;
  border-left: 10px double purple;
}
```

Hal ini memungkinkan Anda membuat gaya *border* yang unik untuk setiap sisi gambar.

Cara lain untuk membuat efek *border* adalah dengan menggunakan `property` `outline`. Meskipun mirip dengan `border`, `outline` tidak memengaruhi dimensi atau tata letak `element`:

```html
<link rel="stylesheet" href="styles.css">

<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute cate lying on its back.">
```

```css
img {
  outline: 3px solid gold;
}
```

Ini menciptakan *outline* emas di sekitar gambar tanpa mengubah ukuran atau posisinya.

Jika Anda ingin membuat sudut membulat (*rounded corners*) pada *border* Anda, Anda dapat menggunakan `property` `border-radius` bersamaan dengan `border`:

```html
<link rel="stylesheet" href="styles.css">

<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute cate lying on its back.">
```

```css
img {
  border: 2px solid black;
  border-radius: 10px;
}
```

Ingat, teknik-teknik ini dapat digabungkan dan disesuaikan untuk menciptakan efek *border* yang unik. Pilihan metode bergantung pada persyaratan desain spesifik Anda dan tingkat kompleksitas yang Anda butuhkan.

## Pertanyaan (Questions)

`Property` `CSS` manakah yang memungkinkan Anda membuat *border* tanpa memengaruhi dimensi `element`?

- [ ] `border`
- [x] `outline`
- [ ] `box-shadow`
- [ ] `border-image`

Bagaimana cara Anda membuat *border* berwarna merah, putus-putus (*dashed*), selebar 3 piksel hanya pada sisi kiri sebuah gambar?

- [ ] `img { border: 3px dashed red left; }`
- [x] `img { border-left: 3px dashed red; }`
- [ ] `img { left-border: 3px dashed red; }`
- [ ] `img { border: left 3px dashed red; }`

`Property` `CSS` manakah yang akan Anda gunakan untuk membulatkan sudut-sudut dari sebuah *border*?

- [ ] `border-style`
- [x] `border-radius`
- [ ] `border-spacing`
- [ ] `border-bottom`

---

[⬅️ Sebelumnya](3-what-are-some-accessibility-considerations-for-backgrounds.md) | Selanjutnya ➡️
