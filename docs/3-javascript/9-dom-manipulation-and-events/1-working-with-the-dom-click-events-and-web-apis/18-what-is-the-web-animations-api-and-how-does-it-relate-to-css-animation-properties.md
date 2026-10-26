# Apa Itu Web Animations API, dan Bagaimana Kaitannya dengan Properti Animasi CSS?

`Web Animations` API (WAAPI) memungkinkan Anda membuat dan mengontrol animasi secara langsung di dalam JavaScript. Dengan WAAPI, Anda dapat bekerja dengan animasi secara lebih dinamis, sehingga mempermudah untuk memanipulasinya.

Mari kita lihat WAAPI secara lebih rinci, sehingga Anda dapat mulai bekerja dengan animasi langsung di dalam kode JavaScript Anda. Inti dari WAAPI adalah *constructor* `Animation`, yang menyediakan beberapa *instance method* dan `property` yang memungkinkan Anda menganimasikan elemen secara dinamis.

Sebuah `method` penting dalam *constructor* `Animation` adalah `animate()`. `Method` ini memungkinkan Anda membuat animasi dengan menentukan *keyframes* dan opsi seperti durasi, arah (*direction*), *easing*, dan perulangan (*iterations*).

Berikut adalah sintaksis dasar dari `method` `animate()`:

```javascript
element.animate(keyframes, options);
```

Mari kita lihat sebuah contoh.

```html
<link rel="stylesheet" href="styles.css" />
<div class="square" id="square"></div>
<script src="index.js"></script>
```

```css
body {
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.square {
  background: #1b1b32;
  width: 10rem;
  aspect-ratio: 1/1;
}
```

```javascript
const square = document.querySelector("#square");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
  {
    duration: 2000, // membuat animasi berlangsung selama 2 detik
    iterations: Infinity, // mengulang tanpa batas
    direction: "alternate", // bergerak bolak-balik
    easing: "ease-in-out" // easing yang mulus
  }
);
```

Hasilnya di browser adalah sebuah kotak biru yang bergerak bolak-balik secara horizontal.

*Instance method* dari *constructor* `Animation` meliputi:

```javascript
play()
pause()
reverse()
finish()
cancel()
```

Dan *instance property* meliputi:

```text
playbackRate
currentTime
startTime
effect
timeline
playState
finished
onfinish
oncancel
```

Mari kita modifikasi contoh tersebut untuk menggunakan `method` `play()`, `pause()` dan `property` `onfinish`. Berikut adalah versi barunya:

```html
<link rel="stylesheet" href="styles.css" />
<div class="square" id="square"></div>

<button id="playBtn">Play</button>
<button id="pauseBtn">Pause</button>
<script src="index.js"></script>
```

```css
body {
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.square {
  background: #1b1b32;
  width: 10rem;
  aspect-ratio: 1/1;
  margin-bottom: 20px;
}
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
}
```

```javascript
const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
  {
    duration: 5000, // Animasi berlangsung 5 detik
    // iterations: Infinity, // Mengulang tanpa batas
    direction: "alternate", // Bergerak bolak-balik
    easing: "ease-in-out" // Fungsi easing yang mulus
  }
);

// Atur property onfinish untuk mencatat pesan saat animasi selesai
animation.onfinish = () => {
  console.log("Animation finished!");
};

// Mainkan animasi saat tombol "Play" diklik
playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

// Jeda animasi saat tombol "Pause" diklik
pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the animation");
});
```

Hasilnya di browser akan menampilkan kotak biru yang bergerak dari kiri ke kanan saat tombol `Play` diklik.

WAAPI memperluas kemampuan animasi CSS dengan memberikan kontrol yang lebih dinamis terhadap animasi langsung di dalam JavaScript.

Dengan animasi CSS, Anda mendefinisikan animasi secara deklaratif menggunakan `property` seperti `animation-name`, `animation-duration`, dan `animation-timing-function`. Anda juga berkesempatan melakukan hal yang sama menggunakan `method` `animate()` dari WAAPI.

Perbedaannya adalah Anda dapat mengontrol animasi yang Anda buat dengan `method` `animate()` secara lebih langsung dan dinamis, sedangkan dengan animasi CSS, Anda perlu melakukan lebih banyak hal dengan mendefinisikan gaya kustom dan memicunya di dalam file JavaScript Anda.

Animasi CSS ideal untuk animasi sederhana dan deklaratif yang berjalan secara otomatis. Hal ini mencakup efek *hover*, transisi, atau animasi yang tidak membutuhkan banyak interaksi setelah dipicu. Jika animasi Anda perlu merespons interaksi pengguna seperti klik dan gulir (*scroll*), atau Anda ingin pengguna dapat menjeda (*pause*), membalik arah (*reverse*), atau mengubah kecepatan secara dinamis, WAAPI adalah pilihan yang lebih baik.

Anda dapat mempertimbangkan untuk menggabungkan WAAPI dan animasi CSS saat Anda menginginkan kesederhanaan CSS untuk pengaturan dasar tetapi perlu mengontrol animasi pada saat *runtime*.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa `method` utama di Web Animations API (WAAPI) untuk membuat animasi?

- [ ] `setInterval()`
- [ ] `setTimeout()`
- [x] `animate()`
- [ ] `requestAnimationFrame()`

### Pertanyaan 2

Manakah dari pilihan berikut yang bukan merupakan *instance method* dari *constructor* `Animation` di Web Animations API (WAAPI)?

- [ ] `play()`
- [ ] `pause()`
- [ ] `reverse()`
- [x] `stop()`

### Pertanyaan 3

Kapan Anda harus menggunakan WAAPI dibandingkan animasi CSS?

- [ ] Untuk efek *hover* yang sederhana dan otomatis.
- [x] Saat Anda membutuhkan animasi untuk merespons interaksi pengguna seperti klik, gulir (*scroll*), atau memungkinkan kontrol dinamis seperti menjeda atau membalik arah.
- [ ] Saat Anda hanya membutuhkan transisi tanpa interaksi apa pun.
- [ ] Untuk animasi yang tidak memerlukan banyak interaksi setelah dipicu.

---

[⬅️ Sebelumnya](17-what-is-the-requestanimationframe-api-and-how-can-it-be-used-to-set-up-an-animation-loop.md) | [Selanjutnya ➡️](19-what-is-the-canvas-api-and-how-does-it-work.md)
