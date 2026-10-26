# Apa Itu Promise, dan Bagaimana Cara Kerja Promise Chaining?

Sebuah `Promise` adalah `object` yang merepresentasikan penyelesaian atau kegagalan akhir dari sebuah operasi `asynchronous`. Awalnya, ia berada dalam status `pending`. Kemudian, statusnya dapat bertransisi ke status `fulfilled` ketika operasi berhasil, atau status `rejected` ketika operasi gagal. Berikut adalah contoh pembuatan sebuah `Promise`:

```javascript
const aPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful!");
  }, 1000);
});
```

Dalam contoh ini, kita membuat sebuah `promise` yang menyimulasikan operasi `asynchronous` menggunakan `setTimeout`. Setelah satu detik, `promise` tersebut di-*resolve* dengan pesan `"Operation successful!"`.

Cara lain untuk bekerja dengan `promise` adalah dengan menggunakan metode `.then` dan `.catch`.

Metode `.then()` digunakan dalam sebuah `promise` untuk menentukan apa yang harus terjadi ketika `promise` tersebut terpenuhi (*fulfilled*), sedangkan `.catch()` digunakan untuk menangani kesalahan (*error*) apa pun yang terjadi. Mari kita lihat bagaimana kita dapat menggunakan `.then` dan `.catch` dengan `promise` kita:

```javascript
aPromise.then((result) => {
  console.log(result);  // Output: "Operation successful!"
}).catch((error) => {
  console.error(error);
});
```

Dalam `code` ini, `function` yang diteruskan ke `.then()` akan dipanggil dengan nilai yang di-*resolve* dari `promise`. Jika terjadi kesalahan, `function` yang diteruskan ke `.catch()` akan dipanggil sebagai gantinya.

Sekarang, mari kita bicara tentang perantaian *promise* (*promise chaining*). Salah satu fitur hebat dari `promise` adalah kita dapat merangkai beberapa operasi `asynchronous` secara bersamaan. Setiap `.then()` dapat mengembalikan sebuah `promise` baru, memungkinkan Anda melakukan serangkaian operasi `asynchronous` secara berurutan, satu demi satu. Berikut contohnya:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch('https://api.example.com/data2');
  })
  .then(response => response.json())
  .then(data2 => console.log(data2))
  .catch(error => console.error('Error:', error));
```

Dalam contoh ini, kita melakukan dua panggilan `API` secara berurutan. `.then()` pertama menguraikan `response` sebagai `JSON`. `.then()` kedua mencetak data ke `console` dan membuat panggilan `API` lainnya. `.then()` ketiga menguraikan `response` dari panggilan `API` kedua, dan `.then()` keempat mencetak data tersebut. Jika terjadi kesalahan di titik mana pun dalam rantai ini, kesalahan tersebut akan ditangkap oleh `.catch()` di bagian akhir.

Penting untuk dicatat bahwa `.catch()` akan menangkap kesalahan dari setiap langkah sebelumnya di dalam rantai tersebut. Ini berarti Anda tidak perlu menambahkan penanganan kesalahan ke setiap langkah individual, yang dapat sangat menyederhanakan `code` Anda.

## Pertanyaan (Questions)

Apa saja kemungkinan status (*states*) dari sebuah `Promise`?

- [ ] Active, Inactive, or Terminated.
- [ ] Running, Paused, or Stopped.
- [x] Pending, Fulfilled, or Rejected.
- [ ] Started, Processing, or Ended.

Apa tujuan dari metode `.then()` dalam perantaian `Promise` (*Promise chaining*)?

- [ ] To create a new Promise.
- [x] To specify what happens when a Promise is fulfilled.
- [ ] To handle errors in the Promise chain.
- [ ] To cancel a Promise.

Dalam sebuah rantai `Promise`, di manakah biasanya Anda harus menempatkan metode `.catch()`?

- [ ] After each .then().
- [ ] Before the first .then().
- [ ] In the middle of the chain.
- [x] At the end of the chain.

---
[⬅️ Sebelumnya](4-how-does-the-fetch-api-work-with-common-http-methods-and-res-json.md) | [Selanjutnya ➡️](6-what-is-async-await-and-how-does-it-work.md)
