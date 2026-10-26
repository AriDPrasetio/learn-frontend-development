# Apa Itu API requestAnimationFrame(), dan Bagaimana Cara Menggunakannya untuk Menyiapkan Loop Animasi?

Membuat animasi yang mulus (*smooth*) di halaman web bisa menjadi tantangan, terutama jika Anda tidak yakin bagaimana menangani pengaturan waktu (*timing*) dengan benar. Kabar baiknya adalah bahwa API `requestAnimationFrame()` membuatnya lebih mudah.

`requestAnimationFrame()` adalah sebuah `method` yang memungkinkan Anda menjadwalkan langkah animasi berikutnya sebelum penggambaran ulang layar (*screen repaint*) berikutnya, menghasilkan pengalaman visual yang lancar dan menarik.

Penggambaran ulang layar (*screen repaint*) berikutnya mengacu pada saat ketika browser menyegarkan tampilan visual dari halaman web. Ini terjadi berkali-kali per detik, biasanya sekitar 60 kali (atau 60 *frames per second* / FPS) pada sebagian besar layar tampilan.

Untuk menggunakan `method` `requestAnimationFrame()`, yang perlu Anda lakukan hanyalah memanggilnya dan meneruskan fungsi *callback* ke dalamnya:

```javascript
requestAnimationFrame(callback);
```

Pemanggilan `requestAnimationFrame()` pertama-tama harus terjadi di dalam fungsi yang menangani animasi, seperti `animate()`, bersama dengan fungsi untuk memperbarui animasi, yang secara tradisional disebut `update()`:

```javascript
function animate() {
  // Perbarui animasi...
  // misalnya memindahkan elemen, mengubah gaya, dan lainnya.
  update();
  // Minta frame berikutnya
  requestAnimationFrame(animate);
}
```

Fungsi `update()` adalah tempat keajaiban terjadi. Di dalamnya, Anda dapat mengubah apa pun yang ingin Anda animasikan. Misalnya, memperbarui gaya atau mengubah posisi elemen:

```javascript
function update() {
  element.style.transform = `translateX(${position}px)`;
  position += 2;
}
```

Yang akhirnya memulai animasi tersebut adalah memanggil `requestAnimationFrame()` dan meneruskan fungsi `animate`, kali ini di luar fungsi `animate`:

```javascript
requestAnimationFrame(animate);
```

Perulangan (*loop*) ini akan terus berlanjut sampai Anda menghentikannya.

Sekarang, mari kita lihat contoh lainnya. HTML untuk contoh ini adalah elemen `div` dengan teks `freeCodeCamp is Awesome`. CSS membuat `div` tersebut menjadi persegi panjang dan menyembunyikan apa pun yang keluar dari *viewport* di sebelah kiri atau kanan. Kode JavaScript memindahkan persegi panjang tersebut sebesar `2px` ke kanan pada setiap pemanggilan `requestAnimationFrame(animate)` dengan fungsi `animate` sebagai *callback*:

```html
<link rel="stylesheet" href="styles.css" />
<div id="rect" class="rect">freeCodeCamp is Awesome</div>
<script src="index.js"></script>
```

```css
body {
  overflow-x: hidden;
}

.rect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  background-color: #1b1b32;
  color: #f5f6f7;
  font-size: 2rem;
  position: absolute;
}
```

```javascript
const rect = document.getElementById("rect");

let position = 0;

function update() {
  // Pindahkan persegi panjang 2px ke kanan
  rect.style.left = position + "px";
  position += 2;

  if (position > window.innerWidth) {
    // Pindahkan persegi panjang tepat di luar sisi kiri layar
    position = -rect.offsetWidth;
  }
}

function animate() {
  update();

  // Minta frame berikutnya
  requestAnimationFrame(animate);
}

// Mulai animasi
requestAnimationFrame(animate);
```

Hasilnya di browser adalah kartu judul animasi yang melayang melintasi layar.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang dilakukan oleh `method` `requestAnimationFrame()`?

- [ ] Menghentikan animasi dari berjalan.
- [ ] Menjalankan animasi secara langsung tanpa penundaan.
- [ ] Mempercepat laju animasi.
- [x] Menjadwalkan langkah animasi berikutnya sebelum penggambaran ulang layar berikutnya untuk visual yang lebih mulus.

### Pertanyaan 2

Apa yang memicu dimulainya animasi saat menggunakan `requestAnimationFrame()`?

- [ ] Memanggil fungsi `animate` di dalam `method` `requestAnimationFrame()`.
- [ ] Menyetel waktu tunggu dengan `setTimeout()`.
- [ ] Menggunakan `setInterval()` untuk mengulang animasi.
- [x] Memanggil `requestAnimationFrame()` dan meneruskan fungsi `animate` di luar fungsi `animate`.

### Pertanyaan 3

Apa arti dari "penggambaran ulang layar (*next screen repaint*) berikutnya"?

- [ ] Saat ketika browser memperbarui struktur HTML.
- [x] Saat ketika browser menyegarkan tampilan visual halaman web, biasanya sekitar 60 kali per detik.
- [ ] Saat ketika browser memuat ulang (*reload*) seluruh halaman.
- [ ] Saat ketika browser memperbarui gaya CSS.

---

[⬅️ Sebelumnya](16-how-do-the-settimeout-and-setinterval-methods-work.md) | [Selanjutnya ➡️](18-what-is-the-web-animations-api-and-how-does-it-relate-to-css-animation-properties.md)
