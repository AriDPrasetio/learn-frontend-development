# Bagaimana Cara Kerja Fetch API dengan Metode HTTP Umum dan res.json()?

Pada pelajaran sebelumnya, kita telah melihat apa itu `Fetch API` dan bagaimana cara menggunakannya. Pada pelajaran ini, kita akan membahas metode-metode `HTTP` `GET`, `POST`, `PUT`, dan `DELETE` pada `Fetch API`.

Mari kita mulai dengan metode `HTTP` yang paling umum, yaitu metode `GET`. Metode ini digunakan untuk mengambil data dari sebuah *server*. Ketika Anda menggunakan `fetch()` tanpa menentukan metodenya, ia secara *default* menggunakan `GET`.

```javascript
fetch('https://api.example.com/data');
```

Dalam `code` ini, kita membuat permintaan `GET` ke `https://api.example.com/data`. Perlu diperhatikan bahwa Anda tidak dapat menggunakan data ini secara langsung; Anda harus mengonversi `response` tersebut ke format `JSON`. Baru setelah itu Anda dapat menggunakannya di mana pun Anda inginkan di proyek Anda. Berikut adalah contoh cara melakukannya:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

Dalam `code` ini, `response` yang datang dari `Fetch API` adalah sebuah `promise`, dan kita menggunakan *handler* `.then` untuk mengonversi `response` tersebut ke format `JSON`. Pada pelajaran sebelumnya, Anda telah mempelajari bahwa sebuah `Promise` adalah `object` yang merepresentasikan penyelesaian (atau kegagalan) akhir dari suatu proses `asynchronous` beserta nilainya (`value`).

Nilai dari sebuah `promise` belum diketahui saat `promise` dibuat. Nilai tersebut baru diketahui ketika proses `asynchronous` selesai. Ketika kita merangkai dua *handler* `.then` pada pemanggilan `fetch`, hal ini disebut sebagai perantaian *promise* (*promise chaining*) yang akan diajarkan pada pelajaran berikutnya.

Sejauh ini kita baru mengambil sumber daya dari sebuah *server*. Namun, tahukah Anda bahwa kita juga dapat mengirimkan data ke *server*? Metode `POST` digunakan untuk mengirim data ke sebuah *server* guna membuat sumber daya baru. Berikut adalah contoh metode `POST` yang digunakan untuk membuat sumber daya di *server*:

```javascript
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
});
```

Dalam contoh ini, kita mengirimkan permintaan `POST` untuk membuat pengguna baru. Kita menentukan metodenya sebagai `POST`, menyetel `headers` yang sesuai, dan menyertakan `body` berisi data yang ingin kita kirim. `body` tersebut harus berupa sebuah `string`, jadi kita menggunakan `JSON.stringify()` untuk mengonversi `object` kita menjadi `JSON string`.

Metode `PUT` digunakan untuk memperbarui sumber daya yang sudah ada di sebuah *server*. Berikut contohnya:

```javascript
fetch('https://api.example.com/users/45', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Smith',
    email: 'john@example.com'
  })
});
```

Dalam contoh ini, perhatikan baik-baik `URL`-nya, Anda dapat melihat angka `45` di bagian akhir. Ini biasanya digunakan sebagai `unique ID` untuk mengidentifikasi data yang ingin kita perbarui. Kita menggunakan metode `PUT` dalam `code` dan juga menentukan data sebagai `body` yang akan digunakan untuk memperbarui data yang telah diidentifikasi tersebut.

Metode `DELETE` digunakan untuk menghapus suatu sumber daya dari *server*. Berikut contohnya:

```javascript
fetch('https://api.example.com/users/45', {
  method: 'DELETE',
});
```

Dalam `code` ini, kita menyertakan metode `DELETE` dan sebuah `ID` di akhir `URL` untuk mengidentifikasi data mana yang perlu dihapus.

## Pertanyaan (Questions)

Metode `HTTP` apa yang digunakan secara *default* oleh `fetch()` jika tidak ditentukan?

- [ ] `POST`
- [x] `GET`
- [ ] `PUT`
- [ ] `DELETE`

Saat mengirim data dengan permintaan `POST` menggunakan `fetch()`, apa yang perlu Anda lakukan pada data tersebut sebelum menyertakannya ke dalam `body`?

- [ ] Encrypt it.
- [ ] Compress it.
- [x] Convert it to a JSON string.
- [ ] Base64 encode it.

Apa yang dilakukan oleh metode `response.json()`?

- [ ] Sends JSON data to the server.
- [ ] Creates a new JSON object.
- [x] Parses the response body as JSON.
- [ ] Validates if the response is in JSON format.

---
[⬅️ Sebelumnya](3-what-is-the-fetch-api-and-what-are-common-types-of-resources-that-are-fetched-from-the-network.md) | [Selanjutnya ➡️](5-what-are-promises-and-how-does-promise-chaining-work.md)
