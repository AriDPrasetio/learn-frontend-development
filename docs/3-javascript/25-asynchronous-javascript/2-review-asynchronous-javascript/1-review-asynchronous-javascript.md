# Review: Asynchronous JavaScript

- **`Synchronous` `JavaScript`** dieksekusi secara berurutan (*sequentially*) dan menunggu operasi sebelumnya selesai sebelum melanjutkan ke operasi berikutnya.
- **`Asynchronous` `JavaScript`** memungkinkan beberapa operasi dieksekusi di latar belakang (*background*) tanpa memblokir *main thread*.
- **`Thread`** adalah urutan instruksi yang dapat dieksekusi secara independen dari alur utama program.
- **`Callback functions`** adalah `functions` yang diteruskan sebagai argumen ke `functions` lain dan dieksekusi setelah penyelesaian operasi atau sebagai hasil dari suatu *event*.

## JavaScript Engine dan JavaScript Runtime

- **`JavaScript engine`** adalah program yang mengeksekusi `code` `JavaScript` di peramban web (*web browser*). Ia bekerja seperti konverter yang mengambil `code` Anda, mengubahnya menjadi instruksi yang dapat dipahami oleh komputer dan bekerja sesuai instruksi tersebut.
- V8 adalah contoh *JavaScript engine* yang dikembangkan oleh Google.
- **`JavaScript runtime`** adalah lingkungan di mana `code` `JavaScript` dieksekusi. Ini mencakup *JavaScript engine* yang memproses dan mengeksekusi `code`, serta fitur tambahan seperti *web browser* atau Node.js.

## Fetch API

- `Fetch API` memungkinkan aplikasi web melakukan permintaan jaringan (*network requests*), biasanya untuk mengambil atau mengirim data ke *server*. `API` ini menyediakan metode `fetch()` yang dapat Anda gunakan untuk membuat permintaan-permintaan tersebut.
- Anda dapat mengambil teks, gambar, audio, `JSON`, dan jenis data lainnya menggunakan `Fetch API`.

## Metode HTTP untuk Fetch API

`Fetch API` mendukung berbagai metode `HTTP` untuk berinteraksi dengan *server*. Metode yang paling umum adalah:

- **`GET`**: Digunakan untuk mengambil data dari *server*. Secara *default*, `Fetch API` menggunakan metode `GET` untuk mengambil data.

```javascript
fetch('https://api.example.com/data');
```

Untuk menggunakan data yang diambil, data tersebut harus dikonversi ke format `JSON` menggunakan metode `.json()`:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

Dalam `code` ini, `fetch()` mengembalikan sebuah `Promise`, dan *handler* `.then()` mengonversi `response` yang telah di-*resolve* ke format `JSON`.

- **`POST`**: Digunakan untuk mengirim data ke *server*. Metode `POST` digunakan untuk membuat sumber daya baru di *server*.

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

Dalam contoh ini, kita mengirimkan permintaan `POST` untuk membuat pengguna baru. Kita telah menentukan metodenya sebagai `POST`, menyetel *headers* yang sesuai, dan menyertakan `body` berisi data yang ingin kita kirim. `body` harus berupa sebuah `string`, jadi kita menggunakan `JSON.stringify()` untuk mengonversi `object` kita menjadi `JSON string`.

- **`PUT`**: Digunakan untuk memperbarui data di *server*. Metode `PUT` digunakan untuk memperbarui sumber daya yang sudah ada di *server*.

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

Dalam contoh ini, kita memperbarui data dengan ID `45` yang ditentukan di akhir `URL`. Kita telah menggunakan metode `PUT` pada `code` dan juga menentukan data sebagai `body` yang akan digunakan untuk memperbarui data yang telah diidentifikasi tersebut.

- **`DELETE`**: Digunakan untuk menghapus data di *server*. Metode `DELETE` digunakan untuk menghapus sumber daya di *server*.

```javascript
fetch('https://api.example.com/users/45', {
  method: 'DELETE'
});
```

Dalam contoh ini, kita mengirimkan permintaan `DELETE` untuk menghapus pengguna dengan ID `45`.

## Promise dan Promise Chaining

- **`Promises`** adalah `objects` yang merepresentasikan penyelesaian atau kegagalan akhir dari operasi `asynchronous` beserta nilai hasilnya. Nilai dari `promise` hanya diketahui ketika operasi `asynchronous` telah selesai.
- Berikut adalah contoh untuk membuat sebuah `promise` sederhana:

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data received successfully');
  }, 2000);
});
```

- Metode `.then()` digunakan dalam sebuah `Promise` untuk menentukan apa yang harus terjadi ketika `Promise` terpenuhi (*fulfilled*), sedangkan `.catch()` digunakan untuk menangani kesalahan apa pun yang terjadi.
- Berikut adalah contoh penggunaan `.then()` dan `.catch()` dengan sebuah `Promise`:

```javascript
promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

Pada contoh di atas, metode `.then()` digunakan untuk mencatat data yang diterima dari `Promise`, sedangkan metode `.catch()` digunakan untuk mencatat kesalahan apa pun yang terjadi.

- **`Promise chaining`**: Salah satu fitur hebat dari `Promises` adalah kita dapat merangkai beberapa operasi `asynchronous` bersama-sama. Setiap `.then()` dapat mengembalikan sebuah `Promise` baru, memungkinkan Anda melakukan serangkaian operasi `asynchronous` secara berurutan, satu demi satu.
- Berikut adalah contoh perantaian `Promise`:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch('https://api.example.com/other-data');
  })
  .then(response => response.json())
  .then(otherData => {
    console.log(otherData);
  })
  .catch(error => {
    console.error(error);
  });
```

Pada contoh di atas, pertama-tama kita mengambil data dari satu `URL`, lalu mengambil data dari `URL` lain berdasarkan `response` pertama, dan akhirnya mencatat data kedua yang diterima.

Metode `catch` akan menangani kesalahan apa pun yang terjadi selama proses tersebut. Ini berarti Anda tidak perlu menambahkan penanganan kesalahan pada setiap langkah, yang dapat sangat menyederhanakan `code` Anda.

## Menggunakan async/await untuk Menangani Promises

`async/await` membuat penulisan dan pembacaan `code` `asynchronous` menjadi lebih mudah, yang dibangun di atas `Promises`.

- **`async`**: Kata kunci `async` digunakan untuk mendefinisikan sebuah fungsi asinkron (*asynchronous function*). Sebuah `async function` mengembalikan sebuah `Promise`, yang di-*resolve* dengan nilai yang dikembalikan oleh `async function` tersebut.
- **`await`**: Kata kunci `await` digunakan di dalam sebuah `async function` untuk menjeda eksekusi fungsi hingga `Promise` di-*resolve*. Kata kunci ini hanya dapat digunakan di dalam sebuah `async function`.
- Berikut adalah contoh penggunaan `async/await`:

```javascript
async function delayedGreeting(name) {
  console.log("A Messenger entered the chat...");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Hello, ${name}!`);
}

delayedGreeting("Alice");
console.log("First Printed Message!");
```

Pada contoh di atas, fungsi `delayedGreeting` adalah sebuah `async function` yang menjeda selama 2 detik sebelum mencetak pesan sapaan. Kata kunci `await` digunakan untuk menjeda eksekusi fungsi hingga `Promise` di-*resolve*.

- Salah satu keuntungan terbesar dari `async/await` adalah penanganan kesalahan melalui blok `try/catch`. Berikut contohnya:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

Pada contoh di atas, blok `try` berisi `code` yang mungkin memicu kesalahan (*throw an error*), dan blok `catch` menangani kesalahan jika hal itu terjadi. Hal ini membuat penanganan kesalahan menjadi lebih terstruktur dan mudah dibaca.

## Atribut async

- Atribut `async` memberi tahu *browser* untuk mengunduh file `script` secara `asynchronous` sambil terus menguraikan dokumen `HTML`.
- Setelah `script` selesai diunduh, penguraian `HTML` dijeda, `script` dieksekusi, dan kemudian penguraian `HTML` dilanjutkan kembali.
- Anda sebaiknya menggunakan `async` untuk `script` independen di mana urutan eksekusinya tidak menjadi masalah.

## Atribut defer

- Atribut `defer` juga mengunduh `script` secara `asynchronous`, tetapi ia menunda (*defers*) eksekusi `script` hingga dokumen `HTML` selesai diuraikan sepenuhnya.
- `Script` `defer` menjaga urutan eksekusi sesuai dengan kemunculannya di dokumen `HTML`.
- Penting untuk dicatat bahwa kedua atribut `async` dan `defer` diabaikan untuk *inline script* dan hanya berfungsi untuk file `script` eksternal.
- Ketika kedua atribut `async` dan `defer` ada secara bersamaan, atribut `async` lebih diutamakan (*precedence*).

## Geolocation API

- `Geolocation API` menyediakan cara bagi situs web untuk meminta lokasi pengguna.
- Contoh di bawah ini mendemonstrasikan metode `getCurrentPosition()` milik `API`, yang digunakan untuk mendapatkan lokasi pengguna saat ini.

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

Dalam `code` ini, kita memanggil `getCurrentPosition` dan meneruskan sebuah `function`, yang akan dipanggil ketika posisi berhasil diperoleh.

`Object` `position` berisi berbagai informasi, tetapi di sini kita hanya memilih `latitude` dan `longitude`.

Jika ada masalah dalam mendapatkan posisi, maka pesan kesalahan akan dicatat ke `console`.

- Sangat penting untuk menghormati privasi pengguna dan hanya meminta lokasi mereka jika benar-benar diperlukan.

---
[⬅️ Sebelumnya](../1-understanding-asynchronous-programming/8-what-is-the-geolocation-api-and-how-does-the-getcurrentposition-work.md) | Selanjutnya ➡️
