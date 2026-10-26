# Bagaimana Cara Kerja JavaScript Engine, dan Apa Itu JavaScript Runtime?

*JavaScript engine* memiliki kemampuan untuk membaca, memahami, dan mengeksekusi `code` Anda. Ia bekerja seperti pengonversi yang mengambil `code` Anda, mengubahnya menjadi instruksi yang dapat dipahami dan dieksekusi oleh komputer.

Salah satu *JavaScript engine* paling terkenal adalah V8, yang dikembangkan oleh Google, dan digunakan di Chrome serta Node.js. *JavaScript engine* bekerja dalam beberapa langkah. Pertama, ia mengurai (*parses*) `code` Anda, membacanya baris demi baris untuk memastikan tidak ada kesalahan dalam `code` `JavaScript`. Kemudian, ia mengubah `code` ini menjadi *bytecode*, yang merupakan versi perantara yang lebih sederhana dari `code` Anda sehingga lebih mudah dipahami dan dieksekusi oleh komputer. Terakhir, ia menjalankan *bytecode* ini untuk mengeksekusi instruksi program Anda. Berikut adalah contoh `code` `JavaScript`:

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

Saat Anda menjalankan `code` ini, *JavaScript engine* pertama-tama menguraikannya untuk memeriksa adanya kesalahan sintaksis (*syntax errors*). Penguraian (*parsing*) berarti *engine* membaca `code` dan memecahnya menjadi struktur yang dapat dipahaminya, memeriksa kesalahan di sepanjang prosesnya.

Kemudian, ia mengompilasi `code` tersebut ke dalam format perantara (sering kali berupa *bytecode* atau *machine code*, tergantung pada *engine*-nya). Kompilasi (*compiling*) adalah proses mengubah `code` yang dapat dibaca manusia menjadi format yang lebih efisien sehingga komputer dapat mengeksekusinya lebih cepat.

Terakhir, *engine* mengeksekusi `code` tersebut, mencetak `Hello, World!` ke `console`.

Sekarang, mari kita bahas tentang *JavaScript runtime*. *JavaScript runtime* adalah lingkungan di mana `code` `JavaScript` Anda dieksekusi. Lingkungan ini mencakup *JavaScript engine* (seperti V8 di Chrome atau SpiderMonkey di Firefox), yang memproses dan mengeksekusi `code`, serta fitur-fitur tambahan yang disediakan oleh lingkungan tersebut (seperti *web browser* atau Node.js, yang akan Anda pelajari lebih lanjut di pelajaran mendatang).

Meskipun bahasa inti `JavaScript` menangani hal-hal seperti `variables`, `loops`, dan `functions`, *runtime* menyediakan alat tambahan yang memungkinkan `JavaScript` berinteraksi dengan hal-hal di luar bahasa itu sendiri, seperti `DOM` (untuk halaman web) atau `Fetch API` (untuk melakukan permintaan jaringan).

Singkatnya, *runtime* adalah apa yang memungkinkan `JavaScript` melakukan lebih dari sekadar tugas pemrograman dasar – seperti berinteraksi dengan halaman web atau menangani tindakan berbasis waktu – dengan menyediakan fitur-fitur tambahan di luar bahasa itu sendiri.

Meskipun Anda tidak perlu mengetahui setiap detail *engine* dan *runtime* untuk menulis `JavaScript`, memiliki pemahaman dasar dapat membantu Anda menulis `code` yang lebih efisien dan men-`debug` masalah secara lebih efektif.

## Pertanyaan (Questions)

Apa fungsi utama dari sebuah `JavaScript engine`?

- [ ] To provide a user interface for writing code.
- [ ] To connect to the internet.
- [x] To read, interpret, and execute JavaScript code.
- [ ] To store data in a database.

Manakah dari berikut ini yang biasanya TIDAK dianggap sebagai bagian dari `JavaScript runtime`?

- [ ] The JavaScript engine.
- [ ] Web APIs (in a browser environment).
- [ ] The event loop.
- [x] The JavaScript code you write.

Manakah dari berikut ini yang paling baik menggambarkan perbedaan antara `JavaScript engine` dan `runtime`-nya?

- [ ] The engine provides features like the Fetch API and the DOM; the runtime only parses and executes code.
- [x] The engine parses and executes code; the runtime provides the engine plus additional features like the Fetch API and the DOM.
- [ ] The runtime compiles code into bytecode and machine code; the engine just interprets the code.
- [ ] They are the same thing—engine and runtime are interchangeable terms.

---
[⬅️ Sebelumnya](6-what-is-async-await-and-how-does-it-work.md) | [Selanjutnya ➡️](8-what-is-the-geolocation-api-and-how-does-the-getcurrentposition-work.md)
