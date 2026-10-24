# Apa Itu CSS Flexbox, dan Kapan Anda Harus Menggunakannya?

`CSS flexbox` adalah model tata letak (*layout*) satu dimensi yang memungkinkan Anda menyusun `element` dalam baris (*rows*) atau kolom (*columns*) di dalam sebuah `container`. Anda juga dapat mengontrol urutan dan orientasinya. Pengembang web menggunakannya untuk membuat situs web dan aplikasi web responsif yang beradaptasi dengan berbagai ukuran layar dan orientasi. Kami menyebut `flexbox` sebagai model tata letak satu dimensi karena ia berfokus pada penyusunan `element` di sepanjang satu sumbu (*axis*) pada satu waktu. Sumbu tersebut dapat berupa horizontal atau vertikal.

## Flex Container dan Flex Item

Ada dua konsep kunci yang harus Anda ketahui sebelum mulai bekerja dengan `flexbox`: `flex container` dan `flex item`.

Sebuah `flex container` adalah `element` `HTML` dengan tata letak `flex`. Anda dapat menyusun dan meratakan `element` dengan berbagai cara di dalam sebuah `flex container`. Untuk menjadikan `element` `HTML` sebagai `flex container`, Anda perlu menambahkan `display: flex` ke `styles` `CSS`-nya.

`Flex item` adalah turunan langsung (*direct children*) dari sebuah `flex container`. `Element-element` ini dapat disusun dan diratakan di dalam sebuah `flex container` berdasarkan `properties`-nya. `Element` tersebut juga dapat menyusut (*shrink*) atau mengembang (*expand*) untuk menyesuaikan dengan ruang yang tersedia.

Ini adalah contoh dengan sebuah `container` `main` dan tiga `element` anak `div`:

```html
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

Jika Anda hanya mengatur `width`, `height`, dan `background-color` dari `element-element` `div` ini di dalam `stylesheet` `CSS`, setiap `element` anak akan ditempatkan pada barisnya sendiri karena secara *default* `container` tersebut bukan `flex` (untuk melihat pratinjau, aktifkan editor interaktif):

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

Namun jika Anda menambahkan `display: flex` ke `container` `main`, `element-element` `div` akan disusun ulang agar pas berada di baris yang sama dan mereka akan menyusut jika diperlukan:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

Secara *default*, sebuah `flex container` akan menjadi `block-level element`, sehingga `container` itu sendiri akan berada pada barisnya sendiri relatif terhadap `element` dan `container` lainnya.

## Properti Flex

Sekarang setelah Anda mengetahui lebih banyak tentang `flex container` dan `flex item`, Anda juga harus mengetahui tentang `flex properties`. `Property-property` ini menentukan bagaimana `flex item` akan disusun, diubah ukurannya, dan didistribusikan di dalam `flex container`. Beberapa yang paling umum digunakan adalah `flex-direction`, `justify-content`, `align-items`, dan `flex-wrap`.

## Model Flex

Bagus. Sekarang mari kita bicarakan sedikit tentang model `flex`. Model ini mendefinisikan bagaimana `flex item` disusun di dalam sebuah `flex container`. Setiap `flex container` memiliki dua sumbu:

- Sumbu utama (`main axis`).
- Sumbu silang (`cross axis`).

Orientasi sumbu-sumbu ini menentukan bagaimana berbagai `property` akan memengaruhi tata letak dan distribusi `flex item`. Secara *default*, `main axis` dari sebuah `flex container` adalah horizontal dan `cross axis` adalah vertikal. `Flex item` disusun searah dengan `main axis`. `Cross axis` posisinya tegak lurus terhadap `main axis`.

## Properti `flex-direction`

`Property` `flex-direction` mengatur arah dari `main axis`. `Value` *default* dari `flex-direction` adalah `row`, yang menempatkan semua `flex item` pada baris yang sama, searah dengan bahasa *default* peramban (*browser*) Anda (kiri ke kanan atau kanan ke kiri):

```css
flex-direction: row; /* Default */
```

Untuk membalikkan urutan `item` dalam baris, Anda dapat menggunakan `flex-direction: row-reverse`:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  flex-direction: row-reverse; 
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

Ini akan membalikkan urutan dari `flex item`. Jika Anda ingin meratakan `flex item` secara vertikal, Anda hanya perlu mengatur `flex-direction` ke `column` pada `flex container`. Ini akan mengubah arah dari `main axis`:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  flex-direction: column; 
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

Sekarang `element-element` `div` akan disejajarkan secara vertikal karena `main axis` akan menjadi vertikal dan `cross axis` akan menjadi horizontal.

Anda juga dapat membalikkan urutan `flex item` secara vertikal dengan `flex-direction: column-reverse`:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  flex-direction: column-reverse; 
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

`CSS flexbox` adalah model tata letak yang hebat yang menyediakan cara yang fleksibel dan efisien untuk menyusun `element` di dalam sebuah `container`. Dengan memahami konsep-konsep kunci dari `flex container`, `flex item`, dan berbagai `flex properties`, Anda dapat membuat situs web dinamis dan responsif yang beradaptasi dengan berbagai ukuran layar dan orientasi.

## Pertanyaan (Questions)

Apa tujuan utama dari `CSS flexbox`?

- [ ] Untuk mengontrol ukuran font (`font size`) dari `element` teks.
- [x] Untuk membuat tata letak yang responsif dan dinamis.
- [ ] Untuk menentukan warna `element`.
- [ ] Untuk menyesuaikan jarak spasi antar `element`.

Manakah dari `property` `CSS` berikut yang digunakan untuk mengontrol arah susunan `element` anak di dalam sebuah `flex container`?

- [ ] `flex-wrap`
- [ ] `align-items`
- [ ] `justify-content`
- [x] `flex-direction`

Dalam model `flex`, apa hubungan antara `main axis` dan `cross axis`?

- [ ] `main axis` selalu horizontal, sedangkan `cross axis` selalu vertikal.
- [ ] `main axis` selalu vertikal, sedangkan `cross axis` selalu horizontal.
- [x] `main axis` dan `cross axis` selalu tegak lurus satu sama lain.
- [ ] `main axis` dan `cross axis` selalu sejajar satu sama lain.

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-are-some-common-flex-properties.md)
