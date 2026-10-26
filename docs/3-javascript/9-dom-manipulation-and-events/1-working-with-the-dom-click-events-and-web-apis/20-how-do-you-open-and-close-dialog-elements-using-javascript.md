# Bagaimana Cara Membuka dan Menutup Elemen Dialog Menggunakan JavaScript?

Dialog memungkinkan Anda menampilkan informasi penting atau tindakan kepada pengguna. Dengan elemen bawaan HTML `dialog`, Anda dapat dengan mudah membuat dialog-dialog ini (baik dialog modal maupun non-modal) di dalam aplikasi web Anda.

Dialog modal (*modal dialog*) adalah jenis dialog yang memaksa pengguna untuk berinteraksi dengannya sebelum mereka dapat mengakses bagian aplikasi atau halaman web lainnya. Dialog ini secara efektif memblokir interaksi dengan konten lain hingga pengguna menyelesaikan suatu tindakan, seperti menutup dialog atau mengirimkan formulir.

Sebaliknya, dialog non-modal (*non-modal dialog*) memungkinkan pengguna untuk terus berinteraksi dengan bagian lain dari halaman atau aplikasi bahkan ketika dialog sedang terbuka. Dialog ini tidak mencegah akses ke konten lainnya.

Dalam pelajaran ini, Anda akan mempelajari cara membuka dan menutup modal menggunakan `method` `showModal()` dan `close()`.

Ketika Anda ingin memastikan pengguna berfokus pada tindakan atau pesan tertentu dari sebuah modal, Anda dapat membuka dialog modal tersebut menggunakan `method` `showModal()`. Tindakan ini akan menambahkan latar belakang redup (*backdrop*) ke item lain di halaman dan menonaktifkannya. Ini sangat ideal untuk modal yang menampilkan formulir, konfirmasi, dan informasi penting yang memerlukan tindakan pengguna.

Berikut adalah kode HTML untuk dialog modal:

```html
<dialog id="my-modal">
  <p>This is a modal dialog.</p>
</dialog>
```

Untuk saat ini, Anda tidak dapat melihat apa pun di halaman karena modal ditutup pada saat render awal. Anda dapat secara otomatis membuka modal dengan menggunakan `method` `showModal()`:

```html
<dialog id="modal">
  <p>This is a modal dialog.</p>
</dialog>
<script src="index.js"></script>
```

```javascript
const dialog = document.getElementById("modal");
dialog.showModal();
```

Hasilnya di browser akan menampilkan modal dengan teks `This is a modal dialog.`

Adalah praktik terbaik untuk memberikan kendali kepada pengguna. Untuk mencapai hal ini, Anda dapat menambahkan *click event listener* ke sebuah tombol dan menggunakan `method` `showModal()`:

```html
<dialog id="modal">
  <p>This is a modal dialog.</p>
</dialog>
<button id="open-modal-btn">Open Modal Dialog</button>
<script src="index.js"></script>
```

```javascript
const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");

openButton.addEventListener("click", () => {
  dialog.showModal();
});
```

Jika Anda perlu menampilkan dialog sambil tetap mengizinkan interaksi dengan konten di luar dialog, Anda dapat menggunakan `method` `show()`:

```html
<dialog id="modal">
  <p>This is a modal dialog.</p>
</dialog>
<button id="open-modal-btn">Open Modal Dialog</button>
<script src="index.js"></script>
```

```javascript
const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");

openButton.addEventListener("click", () => {
  dialog.show();
});
```

Untuk menutup modal, Anda dapat menambahkan tombol ke modal di dalam elemen `dialog` dan menggunakan `method` `close()`:

```html
<dialog id="modal">
  <p>This is a modal dialog.</p>
  <button id="close-modal-btn">Close Modal</button>
</dialog>
<button id="open-modal-btn">Open Modal Dialog</button>
<script src="index.js"></script>
```

```javascript
const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");
const closeButton = document.getElementById("close-modal-btn");

openButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
```

## Pertanyaan (Questions)

### Pertanyaan 1

Apa perbedaan antara dialog modal dan dialog non-modal?

- [ ] Dialog modal mengizinkan interaksi dengan seluruh halaman, sedangkan dialog non-modal tidak.
- [x] Dialog modal menonaktifkan interaksi dengan seluruh halaman, sedangkan dialog non-modal mengizinkannya.
- [ ] Dialog non-modal memaksa pengguna untuk berinteraksi dengannya.
- [ ] Dialog modal menutup secara otomatis, sedangkan dialog non-modal memerlukan tindakan pengguna untuk menutupnya.

### Pertanyaan 2

`Method` mana yang digunakan untuk membuka modal di JavaScript?

- [ ] `open()` dan `display()`.
- [ ] `displayModal()` dan `activate()`.
- [ ] `launch()` dan `trigger()`.
- [x] `showModal()` dan `show()`.

### Pertanyaan 3

Bagaimana cara mengeksekusi `method` `show()`, `close()`, dan `showModal()` untuk membuka dan menutup modal?

- [ ] Dengan memanggil `method` secara langsung tanpa *event* apa pun.
- [ ] Dengan menghubungkannya ke *event* pengiriman formulir (*form submission*).
- [x] Dengan menambahkan *click event listener* ke sebuah tombol dan menggunakan `method` yang sesuai.
- [ ] Dengan menggunakan fungsi batas waktu (*timeout function*).

---

[⬅️ Sebelumnya](19-what-is-the-canvas-api-and-how-does-it-work.md) | [Selanjutnya ➡️](../2-understanding-the-event-object-and-event-delegation/1-what-is-the-change-event-and-how-does-it-work.md)
