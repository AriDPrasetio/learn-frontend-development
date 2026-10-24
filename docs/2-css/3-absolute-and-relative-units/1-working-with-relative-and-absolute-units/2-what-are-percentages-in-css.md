# Apa Itu Persentase dalam CSS, dan Kapan Anda Harus Menggunakannya?

Persentase dalam `CSS` adalah satuan relatif yang memungkinkan Anda menentukan ukuran, dimensi, dan `property` lainnya sebagai proporsi dari `element` induknya (*parent element*). Saat Anda menggunakan `value` persentase, Anda pada dasarnya mengatakan, "Jadikan ini X% dari `container`-nya."

Sebagai contoh, jika Anda mengatur `width: 50%` pada sebuah `element`, `element` tersebut akan menempati separuh dari lebar `container` induknya. Hal ini membuat persentase sangat berguna untuk membuat desain responsif yang beradaptasi dengan berbagai ukuran layar.

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <div class="box"></div>
</div>
```

```css
.container {
  width: 400px;
  height: 200px;
  background-color: lightgray;
}

.box {
  width: 50%;
  height: 100%;
  background-color: red;
}
```

Persentase sangat ideal untuk membuat tata letak yang fleksibel (*fluid layout*) yang menyesuaikan dengan berbagai ukuran layar. Misalnya, menyetel sebuah `container` ke `width: 80%` memastikan `container` tersebut menggunakan 80% dari lebar induknya, apa pun perangkatnya.

```html
<link rel="stylesheet" href="styles.css" />
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 100%;
  height: 300px;
  background-color: lightblue;
}

.child {
  width: 80%;
  height: 100%;
  background-color: red;
}
```

Menggunakan persentase untuk gambar yang fleksibel adalah praktik umum lainnya. Dengan menerapkan `max-width: 100%` pada gambar, Anda memungkinkannya untuk mengecil pada layar yang lebih kecil sambil tetap mempertahankan rasio aspek (*aspect ratio*)-nya.

```html
<link rel="stylesheet" href="styles.css" />
<img src="https://placehold.co/150x150" alt="Example Product Image" />
```

```css
img {
  max-width: 100%;
  height: auto;
}
```

Meskipun kurang umum, persentase juga dapat digunakan untuk ukuran font (*font size*) untuk membuat tipografi yang dapat disesuaikan skalanya (*scalable*). Misalnya, `font-size: 120%` akan membuat teks 20% lebih besar dari ukuran font induknya.

```html
<link rel="stylesheet" href="styles.css" />
<div class="text-container">
  Parent text.
  <p class="text">This is some example text.</p>
</div>
```

```css
.text-container {
  font-size: 16px;
}

.text {
  font-size: 120%;
}
```

Persentase bisa sangat berguna untuk pemusatan vertikal (*vertical centering*). Berikut adalah contoh bagaimana Anda dapat menggunakan persentase dengan `property` `transform` untuk memusatkan `element` secara vertikal.

Contoh ini memosisikan `element` 50% dari bagian atas `container`-nya, kemudian menggunakan `transform` untuk memindahkannya kembali ke atas sebesar setengah dari tingginya sendiri, yang secara efektif memusatkannya secara vertikal.

```html
<link rel="stylesheet" href="styles.css" />
<div class="centered"></div>
```

```css
.centered {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 300px;
  background-color: red;
}
```

Anda akan mempelajari lebih lanjut tentang bagaimana pemosisian absolut (`position: absolute`) dan `property` `transform` bekerja secara lebih mendalam pada pelajaran-pelajaran mendatang.

Ingat, persentase selalu relatif terhadap sesuatu. Untuk `property` horizontal seperti `width`, persentase relatif terhadap lebar induknya. Untuk `property` vertikal seperti `height`, persentase biasanya relatif terhadap tinggi induknya (jika ditentukan).

Namun, berhati-hatilah saat membuat sarang (*nesting*) `element` dengan dimensi berbasis persentase, karena ini dapat menyebabkan hasil yang tidak diharapkan. Selain itu, perlu diingat bahwa `height` berbasis persentase bisa rumit jika induknya tidak memiliki `height` yang ditentukan.

Singkatnya, persentase dalam `CSS` adalah alat yang ampuh untuk membuat desain yang fleksibel dan responsif. Gunakan persentase saat Anda ingin `element` berskala secara proporsional terhadap `container`-nya atau ketika Anda membutuhkan tata letak yang beradaptasi mulus dengan berbagai ukuran layar.

## Pertanyaan (Questions)

Apa yang terjadi jika Anda mengatur `width: 50%` pada sebuah `element` yang induknya memiliki `width` sebesar `300px`?

- [x] `element` tersebut akan memiliki lebar `150px`.
- [ ] `element` tersebut akan memiliki lebar `50px`.
- [ ] `element` tersebut akan memiliki lebar `600px`.
- [ ] `element` tersebut tidak akan memiliki lebar.

Dalam aturan `CSS` berikut, apa yang dipengaruhi oleh nilai persentase tersebut?

```css
.box {
  margin-top: 10%;
}
```

- [ ] Lebar `element`.
- [ ] Tinggi `element`.
- [x] Margin atas (`margin-top`) dari `element`.
- [ ] Ukuran font `element`.

Manakah dari berikut ini yang BUKAN merupakan kasus penggunaan yang baik untuk nilai persentase dalam `CSS`?

- [ ] Mengatur `width` dari sebuah `container` yang responsif.
- [ ] Menentukan `border-radius` dari sebuah `element` melingkar.
- [ ] Menyesuaikan skala gambar di dalam `container`-nya.
- [x] Menentukan `line-height` dari teks.

---

[⬅️ Sebelumnya](1-what-are-absolute-units-in-css.md) | [Selanjutnya ➡️](3-what-are-ems-and-rems-in-css.md)
