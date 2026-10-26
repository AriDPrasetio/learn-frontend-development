# Apa Itu Canvas API, dan Bagaimana Cara Kerjanya?

`Canvas` API adalah alat yang sangat andal yang memungkinkan Anda memanipulasi grafik langsung di dalam file JavaScript Anda. Semuanya berawal dari sebuah elemen `canvas` di dalam HTML. Elemen ini berfungsi sebagai permukaan gambar (*drawing surface*) yang dapat Anda manipulasi menggunakan *instance method* dan `property` dari `Canvas` API.

`Canvas` API menyediakan semua yang Anda butuhkan untuk membuat visual yang luar biasa, termasuk bentuk (*shapes*), teks, animasi, dan bahkan *game* yang kompleks. API ini memiliki berbagai *interface* seperti `HTMLCanvasElement`, `CanvasRenderingContext2D`, `CanvasGradient`, `CanvasPattern`, dan `TextMetrics` yang menyediakan `method` dan `property` yang dapat Anda gunakan untuk membuat grafik di dalam file JavaScript Anda.

Mari kita lihat bagaimana cara kerja `Canvas` API sehingga Anda dapat mulai membuat grafik dengan JavaScript.

Pertama-tama, Anda perlu membuat elemen `canvas` di dalam file HTML Anda:

```html
<canvas id="my-canvas"></canvas>
```

Elemen `canvas` diwakili oleh *interface* `HTMLCanvasElement`, yang menyediakan `method` dan `property` untuk memanipulasinya. Selain itu, Anda dapat menggunakan `method` dan `property` dari *interface* lain di dalam `Canvas` API.

Anda dapat memberikan nilai `width` dan `height` pada `canvas` Anda di dalam HTML:

```html
<canvas id="my-canvas" width="400" height="400"></canvas>
```

Atau Anda dapat menggunakan `property` `width` dan `height` dari *interface* `HTMLCanvasElement`:

```javascript
const canvas = document.getElementById("my-canvas");
canvas.width = 400;
canvas.height = 400;
```

Untuk saat ini, Anda belum dapat melihat apa pun di layar. Setelah membuat elemen `canvas`, hal berikutnya yang harus dilakukan adalah mendapatkan akses ke konteks gambar (*drawing context*) dari kanvas tersebut dengan `method` `getContext()` dari *interface* `HTMLCanvasElement`.

Konteks yang paling umum adalah `2d`, yang memungkinkan Anda menggambar dalam dua dimensi:

```javascript
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
```

Jika Anda mencatat (*log*) variabel `ctx` ke konsol, Anda akan melihat `method` dan `property` dari `CanvasRenderingContext2D` yang dapat Anda gunakan untuk membuat bentuk, warna, garis, dan banyak lagi, beserta nilai bawaannya (*default values*):

```javascript
console.log(ctx);
```

Setelah Anda memiliki konteks 2D, Anda dapat mulai menggambar di atas kanvas.

`Canvas` API menyediakan beberapa `method` dan `property` untuk menggambar bentuk, garis, dan teks. Salah satunya adalah `property` `fillStyle`, yang dapat Anda kombinasikan dengan `method` `fillRect()` untuk menggambar persegi panjang atau persegi empat:

```html
<html>
  <head>
  </head>
  <body>
    <canvas id="my-canvas" width="400" height="400"></canvas>
    <script src="index.js"></script>
  </body>
</html>
```

```javascript
const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

// Atur warna latar belakang
ctx.fillStyle = "crimson";

// Gambar persegi panjang
ctx.fillRect(1, 1, 150, 100);
```

`fillRect` menerima 4 nilai angka yang masing-masing mewakili sumbu x (*x-axis*), sumbu y (*y-axis*), lebar (*width*), dan tinggi (*height*).

Sekarang ada sesuatu di layar. Anda juga dapat menggambar teks atau bahkan membuat animasi. Berikut adalah kanvas untuk menampilkan teks:

```html
<canvas id="my-text-canvas" width="300" height="70"></canvas>
```

Untuk akhirnya menggambar teks tersebut, teruskan teks ke dalam `method` `fillText()` sebagai argumen pertama, diikuti dengan nilai untuk sumbu x dan y:

```html
<html>
  <head>
  </head>
  <body>
    <canvas id="my-text-canvas" width="300" height="70"></canvas>
    <script src="index.js"></script>
  </body>
</html>
```

```javascript
const textCanvas = document.getElementById("my-text-canvas");

const textCanvasCtx = textCanvas.getContext("2d");

// Atur font family dan ukuran font
textCanvasCtx.font = "30px Arial";

// Atur warna teks
textCanvasCtx.fillStyle = "crimson";

// Gambar teks
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50);
```

Hasilnya di browser adalah teks berwarna merah `Hello HTML Canvas!`.

Ada banyak hal lain yang dapat Anda lakukan dengan `Canvas` API. Misalnya, Anda dapat menggabungkannya dengan `requestAnimationFrame` untuk membuat animasi kustom, visualisasi, game, dan banyak lagi.

## Pertanyaan (Questions)

### Pertanyaan 1

`Method` dan `property` mana yang memungkinkan Anda menggambar dan mengisi persegi panjang atau kotak di `Canvas` API?

- [ ] `strokeRect()` dan `lineWidth`.
- [x] `fillRect()` dan `fillStyle`.
- [ ] `clearRect()` dan `strokeStyle`.
- [ ] `beginPath()` dan `shadowColor`.

### Pertanyaan 2

Manakah dari pilihan berikut yang bukan merupakan `property` atau `method` dari *interface* `CanvasRenderingContext2D` di `Canvas` API?

- [ ] `fillStyle`
- [ ] `shadowColor`
- [ ] `drawImage`
- [x] `backgroundColor`

### Pertanyaan 3

Bagaimana cara Anda menggambar teks pada kanvas menggunakan `method` `fillText()` di JavaScript?

- [ ] Meneruskan teks, diikuti dengan nilai untuk lebar (*width*) dan tinggi (*height*).
- [x] Meneruskan teks, diikuti dengan nilai untuk sumbu x dan y.
- [ ] Meneruskan teks dan ukuran font (*font size*).
- [ ] Meneruskan teks dan nilai warna.

---

[⬅️ Sebelumnya](18-what-is-the-web-animations-api-and-how-does-it-relate-to-css-animation-properties.md) | [Selanjutnya ➡️](20-how-do-you-open-and-close-dialog-elements-using-javascript.md)
