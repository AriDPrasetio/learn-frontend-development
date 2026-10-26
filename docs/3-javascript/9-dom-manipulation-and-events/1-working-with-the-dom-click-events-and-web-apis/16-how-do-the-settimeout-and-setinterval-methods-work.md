# Bagaimana Cara Kerja Method setTimeout dan setInterval?

Saat membangun program Anda, Anda akan sering menginginkan sesuatu terjadi setelah adanya jeda waktu (*delay*), atau berulang pada interval tertentu yang teratur. Di situlah `method` `setTimeout()` dan `setInterval()` sangat berguna. Kedua `method` menerima dua parameter: sebuah fungsi dan jeda waktu (*delay*).

Mari kita lihat masing-masing `method` secara lebih rinci sehingga Anda dapat mulai menggunakannya dalam proyek web Anda.

`setTimeout()` memungkinkan Anda menunda suatu aksi selama waktu yang ditentukan. Berikut adalah sintaksis dasar dari `method` `setTimeout()`:

```javascript
setTimeout(functionToRun, delay);
```

`functionToRun` adalah kode yang ingin Anda eksekusi setelah penundaan yang ditentukan, dan `delay` adalah waktu (dalam milidetik) untuk menunggu sebelum menjalankan fungsi tersebut. Berikut adalah sebuah contoh:

```javascript
setTimeout(function () {
  console.log("This runs after 3 seconds");
}, 3000);
```

Anda juga dapat menggunakan *arrow function* untuk *callback*, seperti ini:

```javascript
setTimeout(() => {
  console.log("This runs after 3 seconds");
}, 3000);
```

`setInterval()` terus mengulang pemanggilan sebuah fungsi pada interval yang telah ditetapkan. Ini seperti memiliki alarm yang berdering setiap beberapa detik. `setInterval()` sangat cocok ketika Anda menginginkan sesuatu terjadi berulang kali, seperti menyegarkan (*refreshing*) data atau membuat animasi yang bergerak terus-menerus.

Sama seperti `setTimeout()`, `method` ini membutuhkan sebuah fungsi dan jeda waktu:

```javascript
setInterval(functionToRun, delay);
```

`functionToRun` adalah kode yang ingin Anda jalankan berulang kali, sedangkan `delay` adalah waktu dalam milidetik di antara setiap eksekusi fungsi tersebut. Berikut adalah contohnya:

```javascript
setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);

// Hasil:
// This runs every 2 seconds
// This runs every 2 seconds
// This runs every 2 seconds
// ...
```

Karena `setInterval()` terus mengeksekusi fungsi yang diberikan pada interval yang ditentukan, Anda mungkin ingin menghentikannya. Untuk melakukan ini, Anda harus menggunakan `method` `clearInterval()`.

Untuk bekerja, `clearInterval()` membutuhkan ID dari `setInterval()` yang ingin Anda hentikan. Ini bisa berupa variabel tempat Anda menetapkan interval tersebut. Salah satu cara untuk menghentikan interval adalah di dalam `setTimeout()`, karena itu akan menghentikan interval setelah waktu tertentu:

```javascript
const intervalID = setInterval(() => {
  console.log("This will stop after 5 seconds");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
}, 5000);
```

Anda juga dapat menghentikan waktu tunggu (*timeout*) dengan `method` `clearTimeout()`:

```javascript
let timeoutID = setTimeout(() => {
  console.log("This will not run");
}, 5000);

clearTimeout(timeoutID);
```

Dengan kode tersebut, `setTimeout()` tidak akan berjalan sama sekali. Jadi, cara yang lebih elegan untuk melakukannya adalah melalui DOM, dengan menambahkan *click event listener* ke sebuah tombol untuk menghentikan waktu tunggu:

```html
<h1>Cancel Timeout Example</h1>
<button id="cancelButton">Cancel Timeout</button>
<script src="index.js"></script>
```

```javascript
let timeoutID = setTimeout(() => {
  console.log("This will run if not canceled");
}, 5000);

document
  .querySelector("#cancelButton")
  .addEventListener("click", () => {
    clearTimeout(timeoutID);
    console.log("Timeout canceled!");
  });
```

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang diterima oleh kedua `method` `setTimeout()` dan `setInterval()` sebagai parameter?

- [ ] Sebuah variabel dan sebuah angka.
- [x] Sebuah fungsi dan jeda waktu (*delay*).
- [ ] Sebuah `string` dan sebuah boolean.
- [ ] Sebuah perulangan (*loop*) dan sebuah kondisi.

### Pertanyaan 2

Apa yang dilakukan oleh `method` `setInterval()` dalam JavaScript?

- [ ] Menjalankan sebuah fungsi sekali setelah adanya jeda waktu.
- [x] Menjalankan fungsi secara berulang pada interval yang ditentukan, seperti alarm yang berdering setiap beberapa detik.
- [ ] Menghentikan eksekusi sebuah fungsi.
- [ ] Menjeda sebuah fungsi selama waktu yang ditentukan.

### Pertanyaan 3

Apa yang dilakukan oleh `method` `setTimeout()` dalam JavaScript?

- [x] Menunda suatu tindakan selama waktu yang ditentukan dan kemudian menjalankan sebuah fungsi.
- [ ] Menjalankan sebuah fungsi segera setelah dipanggil.
- [ ] Mengulang sebuah fungsi pada interval yang teratur.
- [ ] Menghentikan sebuah fungsi dari berjalan setelah jeda waktu.

---

[⬅️ Sebelumnya](15-what-is-the-domcontentloaded-event-and-how-does-it-work.md) | [Selanjutnya ➡️](17-what-is-the-requestanimationframe-api-and-how-can-it-be-used-to-set-up-an-animation-loop.md)
