# Apa Saja Properti Flex yang Umum, dan Bagaimana Cara Kerjanya?

`Property` `flex` mengontrol bagaimana perilaku `element` di dalam sebuah tata letak `flex`, mulai dari distribusi tingkat `container` hingga perataan mandiri tingkat `item` (*item-level self-alignment*). Kita akan membahas beberapa yang paling umum digunakan dalam pelajaran ini: `flex-wrap`, `flex-flow`, `justify-content`, `align-items`, dan `align-self`.

## Membungkus Item dengan `flex-wrap`

Mari kita mulai dengan `flex-wrap`. `Property` ini menentukan bagaimana `flex item` dibungkus (*wrapped*) di dalam sebuah `flex container` agar sesuai dengan ruang yang tersedia. `flex-wrap` dapat menerima tiga kemungkinan `value`: `nowrap`, `wrap`, dan `wrap-reverse`. `nowrap` adalah `value` *default*: `flex item` tidak akan dibungkus ke baris baru, bahkan jika lebarnya melebihi lebar `container`.

Pada kode di bawah ini, kita memiliki tiga `element` `div`. Mari fokus pada `width`. `Container` `main` yang memiliki batas (*border*) memiliki `width` sebesar `200px`, sedangkan gabungan tiga `element` anak `div`-nya memiliki `width` sebesar `240px` (masing-masing `80px`):

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
  width: 200px;
  display: flex;
  border: 2px solid #444;
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

Lebar dari `element` `div` melebihi lebar `container`-nya, tetapi secara *default* mereka akan disusutkan agar pas dengan ruang yang tersedia. Jika Anda ingin membungkusnya (*wrap*) ketika melebihi lebar `container`, Anda dapat menyetel `flex-wrap: wrap` pada `flex container`:

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
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #444;
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

## Menggabungkan Direction dan Wrap dengan `flex-flow`

`Element-element` `div` akan disusun ulang dalam baris saat melebihi lebar `container`-nya. Anda dapat membungkus `flex item` dalam urutan terbalik dengan `flex-wrap: wrap-reverse`. `Property` `flex-flow` adalah `shorthand property` untuk `flex-direction` dan `flex-wrap`. Dalam contoh ini, kita menyetel `flex-direction` ke `column` dan `flex-wrap` ke `wrap-reverse`:

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
  width: 200px;
  height: 120px;
  display: flex;
  flex-flow: column wrap-reverse;
  border: 2px solid #444;
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

## Meratakan Item di Sepanjang Main Axis dengan `justify-content`

Bagus. Sekarang mari kita bicarakan tentang `justify-content`. `justify-content` meratakan `element` anak di sepanjang `main axis` dari `flex container`. Jika Anda menetapkan `value` `flex-start` pada `justify-content`, `flex item` akan diratakan ke awal dari `main axis`. Ini bisa berupa horizontal maupun vertikal:

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
  justify-content: flex-start;
  border: 2px solid #444;
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

Dengan `justify-content: flex-end`, `flex item` diratakan ke ujung akhir dari `main axis`, baik secara horizontal maupun vertikal.

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
  justify-content: flex-end;
  border: 2px solid #444;
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

Untuk meratakan `flex item` ke tengah di sepanjang `main axis`, Anda dapat menggunakan `justify-content: center`.

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
  justify-content: center;
  border: 2px solid #444;
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

Untuk mendistribusikan `element` di sepanjang `main axis` tanpa ruang kosong di tepi-tepinya, Anda dapat menggunakan `justify-content: space-between`. `Item` pertama berada di awal `main axis`, `item` terakhir berada di ujung akhir, dan ruang yang tersisa didistribusikan di antara `item-item` yang berdekatan.

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
  justify-content: space-between;
  border: 2px solid #444;
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

`justify-content: space-around` mendistribusikan `flex item` secara merata di sepanjang `main axis`, menambahkan ruang sebelum `item` pertama dan setelah `item` terakhir. Ruang tambahan ini berukuran setengah dari ruang di antara setiap pasangan `item` yang berdekatan. Jika hanya ada satu `item` yang didistribusikan, `item` tersebut akan berada di tengah.

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
  justify-content: space-around;
  border: 2px solid #444;
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

Dan yang tak kalah penting, kita memiliki `justify-content: space-evenly`, yang mendistribusikan `item-item` secara merata di sepanjang `main axis`. Ruang antar `item` serta ruang sebelum `item` pertama dan sesudah `item` terakhir adalah persis sama:

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
  justify-content: space-evenly;
  border: 2px solid #444;
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

## Meratakan Item di Sepanjang Cross Axis dengan `align-items`

Bagus. Sekarang Anda tahu cara mendistribusikan `flex item` di sepanjang `main axis`. Namun Anda mungkin juga ingin mendistribusikannya di sepanjang `cross axis`. Ingatlah bahwa `cross axis` tegak lurus terhadap `main axis`. Anda dapat melakukan ini dengan `property` `align-items`. Untuk memusatkan `item` di sepanjang `cross axis`, Anda hanya perlu menambahkan `align-items: center` ke `flex container`:

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
  height: 300px;
  align-items: center;
  border: 2px solid #444;
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

Dalam contoh ini, `flex item` dipusatkan di sepanjang `cross axis`, yang secara *default* adalah vertikal. Jika `cross axis` horizontal, mereka akan dipusatkan secara horizontal. Sebaliknya, `align-items: flex-start` meratakan `item` ke awal dari `cross axis`:

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
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
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

Kebalikannya adalah `align-items: flex-end`. Ini akan meratakan `flex item` ke akhir dari `cross axis`, baik secara vertikal maupun horizontal.

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
  height: 300px;
  align-items: flex-end;
  border: 2px solid #444;
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

Untuk meregangkan `flex item` di sepanjang `cross axis`, Anda dapat menggunakan `align-items: stretch`. Ini hanya memengaruhi `item` yang ukurannya pada `cross axis` bernilai `auto`; `item` dengan ukuran eksplisit pada `cross axis` (misalnya, `height` yang telah ditentukan dalam `container` baris) tidak akan meregang. `Item` yang terpengaruh akan mengisi `container` ke arah `cross axis`.

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
  height: 300px;
  align-items: stretch;
  border: 2px solid #444;
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
  height: auto;
}
```

## Menimpa Perataan untuk Satu Item dengan `align-self`

Dan akhirnya, Anda dapat menggunakan `property` `align-self` untuk menetapkan perataan yang berbeda pada `cross axis` untuk sebuah `flex item` individual. Sebagai contoh, Anda dapat meregangkannya dengan `align-self: stretch`.

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
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
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
  align-self: stretch;
  height: auto;
}
```

Anda dapat meratakannya ke tengah dengan `align-self: center`.

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
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
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
  align-self: center;
}
```

Anda dapat meratakannya ke awal `cross axis` dengan `align-self: flex-start`.

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
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
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
  align-self: flex-start;
}
```

Atau Anda dapat meratakannya ke akhir `cross axis` dengan `align-self: flex-end`.

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
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
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
  align-self: flex-end;
}
```

Ada `flex properties` dan `values` lainnya yang dapat Anda pilih untuk membuat tata letak responsif seperti yang Anda bayangkan, tetapi ini adalah yang paling umum digunakan. Dengan `CSS flex properties` ini dan pengetahuan baru Anda tentang model `CSS flex`, Anda dapat mulai membuat tata letak responsif untuk menciptakan pengalaman pengguna yang mulus dan inklusif di berbagai perangkat.

## Pertanyaan (Questions)

`Property` `CSS` manakah yang digunakan untuk meratakan `element` anak secara horizontal (secara *default*) di dalam sebuah `flex container`?

- [ ] `flex-direction`
- [x] `justify-content`
- [ ] `align-items`
- [ ] `flex-wrap`

`Property` `CSS` manakah yang digunakan untuk meratakan `element` anak secara vertikal (secara *default*) di dalam sebuah `flex container`?

- [ ] `flex-direction`
- [ ] `justify-content`
- [x] `align-items`
- [ ] `flex-wrap`

Manakah dari `property` berikut yang dapat digabungkan ke dalam `property` `flex-flow`?

- [ ] `flex-direction` dan `justify-content`
- [ ] `flex-direction` dan `align-items`
- [ ] `flex-direction` dan `align-content`
- [x] `flex-direction` dan `flex-wrap`

---

[⬅️ Sebelumnya](1-what-is-css-flexbox.md) | Selanjutnya ➡️
