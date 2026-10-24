# Apa Itu Gradien Linear dan Radial, dan Bagaimana Cara Kerjanya di CSS?

Pada pelajaran sebelumnya, Anda telah mempelajari cara mulai bekerja dengan gradien linear (`linear gradients`) dan radial (`radial gradients`). Dalam pelajaran ini, kita akan mendalami lebih jauh tentang cara bekerja dengan `properties` `CSS` untuk membuat desain yang lebih menarik secara visual dan kompleks.

Gradien di `CSS` memungkinkan Anda membuat transisi yang halus antara dua atau lebih warna yang ditentukan. Gradien sering digunakan untuk menambahkan kedalaman, tekstur, dan daya tarik visual ke desain web tanpa memerlukan file gambar.

`CSS` mendukung dua jenis utama gradien: gradien linear (`linear gradients`) dan gradien radial (`radial gradients`).

Gradien linear membuat perpaduan bertahap antarwarna di sepanjang garis lurus. Anda dapat mengontrol arah garis ini dan warna yang digunakan. Berikut adalah contoh dasar dari gradien linear:

```html
<link rel="stylesheet" href="styles.css" />
<div class="linear-gradient"></div>
```

```css
.linear-gradient {
  background: linear-gradient(to right, red, blue);
  height: 40vh;
}
```

Kode ini membuat gradien yang bertransisi dari merah di sebelah kiri ke biru di sebelah kanan. Parameter `to right` menentukan arah gradien. Anda dapat menggunakan arah lain seperti `to left`, `to top`, `to bottom`, atau bahkan menentukan sudut seperti `45deg`.

Anda juga dapat menggunakan beberapa perhentian warna (*color stops*) dalam gradien linear:

```html
<link rel="stylesheet" href="styles.css" />
<div class="multi-color-gradient"></div>
```

```css
.multi-color-gradient {
  background: linear-gradient(to right, red, yellow, blue);
  height: 40vh;
}
```

Kode ini membuat gradien yang bertransisi dari merah ke kuning hingga biru, dengan spasi yang merata di seluruh `element`.

Di sisi lain, gradien radial membuat gradien melingkar atau elips yang memancar keluar dari suatu titik pusat. Berikut adalah contohnya:

```html
<link rel="stylesheet" href="styles.css" />
<div class="radial-gradient"></div>
```

```css
.radial-gradient {
  background: radial-gradient(circle, red, blue);
  height: 40vh;
}
```

Kode ini membuat gradien melingkar yang dimulai dengan merah di bagian tengah dan bertransisi ke biru di bagian tepi. Anda juga dapat menentukan bentuk dan ukuran gradien radial:

```html
<link rel="stylesheet" href="styles.css" />
<div class="custom-radial-gradient"></div>
```

```css
.custom-radial-gradient {
  background: radial-gradient(ellipse at top left, red, blue);
  height: 40vh;
}
```

Kode ini membuat gradien elips yang dimulai dari sudut kiri atas `element`. Baik gradien linear maupun radial memungkinkan Anda menentukan perhentian warna (*color stops*) pada posisi yang tepat. Sebagai contoh:

```html
<link rel="stylesheet" href="styles.css" />
<div class="precise-gradient"></div>
```

```css
.precise-gradient {
  background: linear-gradient(to right, red 20%, yellow 40%, blue 80%);
  height: 40vh;
}
```

Kode ini membuat gradien di mana merah menempati `20%` pertama, kemudian bertransisi ke kuning pada `40%`, dan akhirnya ke biru pada `80%`.

Gradien dapat digunakan di mana pun Anda biasa menggunakan gambar di `CSS`. Hal ini membuatnya sangat serbaguna untuk membuat latar belakang (`background`), tombol (`button`), atau bahkan efek teks jika dipadukan dengan `properties` `CSS` lainnya.

Ingat, meskipun gradien dapat meningkatkan daya tarik visual situs web Anda, penting untuk memastikan kontras yang memadai demi aksesibilitas, terutama saat menggunakan gradien di belakang teks.

## Pertanyaan (Questions)

Apa perbedaan antara gradien linear dan radial di CSS?

- [ ] Gradien linear hanya menggunakan dua warna, sedangkan gradien radial menggunakan banyak warna.
- [x] Gradien linear bertransisi di sepanjang garis lurus, sedangkan gradien radial memancar dari suatu titik pusat.
- [ ] Gradien linear hanya bersifat horizontal, sedangkan gradien radial dapat berbentuk apa saja.
- [ ] Gradien linear lebih halus daripada gradien radial.

Pada kode CSS berikut, apa yang ditentukan oleh 45deg?

```css
{
  background: linear-gradient(45deg, red, blue);
}
```

- [ ] Sudut rotasi untuk seluruh elemen.
- [x] Arah garis gradien.
- [ ] Ukuran gradien.
- [ ] Jarak antara perhentian warna (*color stops*).

Manakah dari berikut ini yang BUKAN cara yang valid untuk menentukan arah dalam gradien linear?

- [ ] `to right`
- [ ] `to bottom left`
- [ ] `90deg`
- [x] `diagonal`

---

[⬅️ Sebelumnya](5-what-are-hex-codes.md) | Selanjutnya ➡️
