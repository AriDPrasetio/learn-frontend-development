# Apa Itu Animasi CSS, dan Bagaimana Cara Kerjanya?

`CSS animations` memungkinkan Anda membuat efek visual yang dinamis dan memikat pada halaman web tanpa memerlukan `JavaScript` atau pemrograman yang kompleks. Fitur ini menyediakan cara untuk mentransisikan `element` secara halus di antara berbagai `styles` selama durasi yang ditentukan.

Pada intinya, sebuah `CSS animation` terdiri dari dua komponen utama: aturan (`rule`) `@keyframes` dan `property` `animation`.

Aturan `@keyframes` mendefinisikan tahapan dan `styles` dari animasi tersebut. Aturan ini menentukan `styles` apa yang harus dimiliki oleh `element` pada berbagai titik selama animasi berlangsung.

Berikut adalah contohnya:

```css
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
```

Aturan `@keyframes` ini, bernama `slide-in`, mendefinisikan sebuah animasi yang memindahkan sebuah `element` dari kiri ke kanan. Nilai persentase mewakili progres animasi, dengan `0%` sebagai awal dan `100%` sebagai akhir.

`Function` `translateX` dalam animasi `@keyframes` Anda mengontrol posisi horizontal dari sebuah `element` saat ia beranimasi ke dalam tampilan.

Untuk menerapkan animasi ini ke sebuah `element`, Anda menggunakan `property` `animation`. Contoh ini juga mengulang animasi tanpa batas agar Anda dapat melihatnya beraksi (Anda perlu mengaktifkan editor interaktif untuk melihat pratinjau):

```html
<link rel="stylesheet" href="styles.css">
<div class="sliding-element">Hello, I slide in!</div>
```

```css
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.sliding-element {
  animation: slide-in 2s ease-out infinite;
}
```

Kode ini menerapkan animasi `slide-in` ke `element` tersebut dengan durasi 2 detik dan `timing function` `ease-out`.

`Property` `animation` sebenarnya merupakan bentuk ringkas (*shorthand*) untuk beberapa `property` individual:

`animation-name` yang menentukan aturan `@keyframes` yang akan digunakan.

`animation-duration` yang mengatur berapa lama waktu yang dibutuhkan animasi untuk selesai.

`animation-timing-function` yang menentukan bagaimana animasi berlangsung dari waktu ke waktu - seperti `ease`, `linear`, `ease-in-out`.

`animation-delay` yang menentukan jeda waktu (*delay*) sebelum animasi dimulai.

`animation-iteration-count` yang mengatur berapa kali animasi harus diulang.

`animation-direction` yang menentukan apakah animasi harus diputar maju (*forwards*), mundur (*backwards*), atau bergantian (*alternate*).

`animation-fill-mode` yang menentukan bagaimana `element` harus ditata gayanya sebelum dan sesudah animasi.

`animation-play-state` yang memungkinkan Anda menjeda (*pause*) dan melanjutkan (*resume*) animasi.

Anda dapat menggunakan `property-property` ini secara individual untuk kontrol yang lebih presisi:

```html
<link rel="stylesheet" href="styles.css">
<div class="complex-animation">Watch my colors change!</div>
```

```css
.complex-animation {
  animation-name: color-change;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes color-change {
  0% {
    background-color: red;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}
```

Kode ini membuat animasi yang mentransisikan `background-color` sebuah `element` secara terus-menerus di antara warna merah, biru, dan hijau.

`CSS animations` dapat dipicu oleh berbagai peristiwa (*events*), seperti mengarahkan kursor (*hover*) ke atas sebuah `element`:

```html
<link rel="stylesheet" href="styles.css">
<button class="button">Hover over me!</button>
```

```css
.button {
  background-color: blue;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: red;
}
```

Meskipun contoh ini menggunakan `property` `transition`, yang lebih sederhana untuk efek-efek dasar, ini menunjukkan bagaimana `CSS` dapat membuat `element-element` yang interaktif dan beranimasi.

Penting untuk dicatat bahwa meskipun `CSS animations` sangat hebat, animasi harus digunakan secukupnya (*in moderation*). Penggunaan animasi yang berlebihan dapat menyebabkan performa yang buruk dan dapat mengganggu atau bermasalah bagi pengguna dengan kebutuhan aksesibilitas tertentu. Selalu pertimbangkan untuk menyediakan opsi guna mengurangi atau menonaktifkan animasi bagi pengguna yang lebih menyukai pengurangan gerakan (*less motion*).

`CSS animations` menawarkan cara untuk menciptakan pengalaman web yang memikat dan interaktif tanpa bergantung pada `JavaScript`. Dengan memahami prinsip-prinsip aturan `@keyframes` dan `properties` `animation`, Anda dapat menghidupkan desain web Anda dengan cara yang berkinerja baik dan aksesibel.

## Pertanyaan (Questions)

Apa tujuan dari aturan `@keyframes` dalam `CSS animations`?

- [ ] Menentukan durasi animasi.
- [x] Mendefinisikan tahapan dan `styles` dari animasi.
- [ ] Mengatur `timing function` dari animasi.
- [ ] Menentukan berapa kali animasi berulang.

Dalam kode `CSS` berikut, apa yang diwakili oleh `2s`?

```css
.element {
  animation: fade-in 2s ease-in;
}
```

- [ ] Jeda waktu (*delay*) sebelum animasi dimulai.
- [ ] Berapa kali animasi berulang.
- [x] Durasi dari animasi.
- [ ] Persentase progres dari animasi.

`Property` `CSS` mana yang akan Anda gunakan untuk membuat animasi berulang tanpa batas (*indefinitely*)?

- [ ] `animation-loop: infinite;`
- [ ] `animation-repeat: always;`
- [x] `animation-iteration-count: infinite;`
- [ ] `animation-duration: endless;`

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-are-accessibility-concerns-around-using-animations.md)
