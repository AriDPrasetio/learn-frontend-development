# Apa Itu Geolocation API, dan Bagaimana Cara Kerja getCurrentPosition?

`Geolocation API` menyediakan cara bagi situs web untuk meminta lokasi pengguna. Penting untuk dicatat bahwa untuk alasan privasi, pengguna harus memberikan izin (*permission*) terlebih dahulu sebelum lokasinya dapat diakses melalui situs web.

Metode utama yang akan kita fokuskan hari ini adalah `getCurrentPosition`. Metode ini digunakan untuk mengumpulkan lokasi geografis perangkat. Berikut adalah contoh bagaimana Anda dapat menggunakan `getCurrentPosition`:

```javascript
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
  },
  (error) => {
    console.log("Error: " + error.message);
  }
);
```

Dalam `code` ini, kita memanggil `getCurrentPosition` dan meneruskan sebuah `function` yang akan dipanggil ketika posisi berhasil diperoleh. `object` `position` ini berisi berbagai informasi, namun kita hanya berfokus pada garis lintang (*latitude*) dan garis bujur (*longitude*).

Jika ada masalah dalam mendapatkan posisi, maka pesan kesalahan (*error*) akan dicatat ke `console`.

Metode `getCurrentPosition` menggunakan GPS, jaringan Wi-Fi, atau geolokasi alamat IP, tergantung pada perangkat dan pengaturannya. Setelah lokasi ditemukan, fungsi `callback` sukses akan dipanggil dengan sebuah `object` `position`.

`object` `position` berisi berbagai `properties`, di mana yang paling umum digunakan adalah `latitude` dan `longitude`, tetapi juga dapat mencakup `altitude` (ketinggian), `accuracy` (akurasi), `speed` (kecepatan), `heading` (arah), dan sebagainya.

Satu pertimbangan penting saat menggunakan geolokasi adalah privasi pengguna. Pastikan untuk menjelaskan kepada pengguna Anda mengapa Anda memerlukan data lokasi mereka dan bagaimana Anda akan menggunakannya.

## Pertanyaan (Questions)

Apa tujuan utama dari metode `getCurrentPosition` milik `Geolocation API`?

- [ ] To set the user's current location.
- [x] To retrieve the user's current geographic location.
- [ ] To calculate the distance between two points.
- [ ] To display a map on the webpage.

`Object` apa yang digunakan untuk mengakses `Geolocation API` dalam `JavaScript`?

- [ ] `window.location`
- [ ] `document.geolocation`
- [x] `navigator.geolocation`
- [ ] `browser.location`

Apa pertimbangan privasi utama saat menggunakan `Geolocation API`?

- [ ] Encrypting the location data.
- [ ] Storing location data indefinitely.
- [ ] Automatically accessing user location.
- [x] Obtaining user permission before accessing location.

---
[⬅️ Sebelumnya](7-how-does-the-javascript-engine-work-and-what-is-a-javascript-runtime.md) | [Selanjutnya ➡️](../2-review-asynchronous-javascript/1-review-asynchronous-javascript.md)
