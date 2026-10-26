# Apa Itu Fetch API, dan Apa Saja Jenis Sumber Daya Umum yang Diambil dari Jaringan?

`Fetch API` memungkinkan aplikasi web melakukan permintaan jaringan (*network requests*), biasanya untuk mengambil atau mengirim data ke *server*. `API` ini menyediakan metode `fetch()` yang dapat Anda gunakan untuk membuat permintaan-permintaan ini. Mari kita lihat contoh dasar cara menggunakan `fetch`:

```javascript
fetch('https://api.example.com/data');
```

Dalam contoh ini, kita membuat permintaan `GET` ke `https://api.example.com/data`. Metode `fetch()` mengembalikan sebuah `promise` yang menghasilkan (*resolves*) sebuah `object` `Response`. `API` umumnya mengirimkan data dalam format `JSON`. Anda dapat menggunakan metode `json()` milik `response` untuk membaca dan menguraikan (*parse*) `JSON` tersebut menjadi sebuah nilai `JavaScript`.

Secara *default*, `Fetch API` menggunakan metode `GET` untuk mengambil data. Hal ini akan dibahas pada pelajaran berikutnya, bersama dengan metode permintaan `HTTP` umum lainnya.

Sekarang, mari kita bahas beberapa jenis sumber daya (*resources*) umum yang diambil dari jaringan.

Di dalam aplikasi web kita, kita sering membutuhkan beberapa data umum seperti data cuaca, data daftar profesi, daftar nama negara, kode negara, atau ikon/gambar bendera negara. Dengan menggunakan data ini, kita dapat membuat aplikasi kita menjadi lebih informatif dan interaktif. Berkat `Fetch API`, kita dapat mengambil sumber daya ini dari jaringan.

Gambar adalah beberapa sumber daya yang sering diambil. Anda dapat menggunakan `fetch` untuk memuat gambar secara statis maupun dinamis berdasarkan tindakan pengguna, dan menampilkannya di aplikasi web Anda.

File teks adalah jenis sumber daya lain yang sering diambil. Ini dapat mencakup file konfigurasi, file log, atau bahkan dokumen utuh yang ingin Anda tampilkan di halaman web Anda.

Dalam beberapa kasus, Anda mungkin mengambil file audio atau video. `Fetch API` juga dapat menangani jenis-jenis sumber daya ini, memungkinkan Anda bekerja dengan berbagai macam tipe data.

## Pertanyaan (Questions)

Apa tujuan utama dari `Fetch API` dalam `JavaScript`?

- [ ] To create new HTML elements.
- [x] To make network requests and retrieve resources.
- [ ] To manipulate the DOM.
- [ ] To store data in the browser.

Tipe data apa yang umumnya diterima dari permintaan `fetch` ke sebuah `API`?

- [ ] PDF
- [x] JSON
- [ ] MP3
- [ ] EXE

Manakah dari berikut ini yang BUKAN merupakan jenis sumber daya umum yang diambil dari jaringan?

- [ ] JSON data.
- [ ] HTML content.
- [x] JavaScript functions.
- [ ] Image files.

---
[⬅️ Sebelumnya](2-how-does-the-async-attribute-work-inside-script-elements-and-how-does-it-differ-from-the-defer-attribute.md) | [Selanjutnya ➡️](4-how-does-the-fetch-api-work-with-common-http-methods-and-res-json.md)
