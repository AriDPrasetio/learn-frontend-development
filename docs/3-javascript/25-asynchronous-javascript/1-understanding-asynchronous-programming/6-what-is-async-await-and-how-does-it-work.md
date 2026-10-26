# Apa Itu Async/Await, dan Bagaimana Cara Kerjanya?

Pada pelajaran sebelumnya, Anda telah mempelajari tentang `asynchronous programming` yang memungkinkan `code` lain tetap berjalan saat kita menunggu tugas-tugas yang memakan waktu selesai, seperti mengambil data dari *server*, membaca data dari file, dan sebagainya.

`async/await`, yang dibangun di atas `promises`, membuat penulisan dan pembacaan `code` `asynchronous` menjadi lebih mudah. Ketika Anda meletakkan kata kunci `async` sebelum sebuah `function`, itu berarti `function` tersebut akan selalu mengembalikan sebuah `Promise`. Kata kunci `await`, yang memungkinkan Anda menunggu sebuah `Promise` di-*resolve* sebelum melanjutkan ke baris `code` berikutnya, hanya dapat digunakan di dalam `asynchronous functions` atau pada badan *top-level* dari sebuah modul. Berikut adalah contoh untuk mengilustrasikan bagaimana `async/await` bekerja:

```javascript
async function delayedGreeting(name) {
  console.log("A Messenger entered the chat...");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Hello, ${name}!`);
}

delayedGreeting("Alice");
console.log("First Printed Message!");
```

Dalam `code` ini, kita mendefinisikan sebuah `async function` bernama `delayedGreeting`. Di dalam `function` ini, kita menggunakan `await` untuk menjeda eksekusi selama 2 detik. Setelah jeda tersebut, ia mencetak pesan sapaan.

Saat kita memanggil `function` ini, Anda akan melihat `First Printed Message!` muncul sebelum pesan sapaan. Hal ini karena `function` tersebut bersifat `asynchronous` — ia tidak memblokir sisa `code` lainnya untuk berjalan.

Salah satu keuntungan terbesar dari `async/await` adalah penanganan kesalahan (*error handling*). Dengan `promise`, kita sering kali harus menggunakan metode `.catch()` untuk menangani kesalahan. Dengan `async/await`, kita dapat menggunakan blok `try/catch`. Berikut contohnya:

```javascript
async function fetchUserData() {
  try {
    let response = await fetch(`https://api.example.com/users`);
    let userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}

fetchUserData();
```

Dalam contoh ini, kita menggunakan `async/await` untuk mengambil data pengguna dari sebuah `API`. Kata kunci `await` digunakan dua kali: sekali untuk menunggu operasi `fetch` selesai, dan sekali lagi untuk menunggu penguraian `JSON` selesai. Jika terjadi kesalahan selama proses ini, kesalahan tersebut akan ditangkap di dalam blok `catch`.

## Pertanyaan (Questions)

Apa tujuan utama dari kata kunci `async` dalam `JavaScript`?

- [ ] To make a function run faster.
- [x] To indicate that a function will always return a Promise.
- [ ] To create a new thread for the function to run on.
- [ ] To prevent a function from being called asynchronously.

Di manakah kata kunci `await` dapat digunakan dalam `JavaScript`?

- [ ] Anywhere in the code.
- [ ] At the very beginning of your code.
- [x] Inside async functions.
- [ ] Only in try...catch blocks.

Apa yang terjadi ketika kesalahan (*error*) terjadi pada `Promise` yang di-*await*?

- [ ] The program crashes.
- [ ] The error is automatically logged to the console.
- [ ] Nothing, errors in Promises are ignored.
- [x] The error can be caught using a try...catch block.

---
[⬅️ Sebelumnya](5-what-are-promises-and-how-does-promise-chaining-work.md) | [Selanjutnya ➡️](7-how-does-the-javascript-engine-work-and-what-is-a-javascript-runtime.md)
