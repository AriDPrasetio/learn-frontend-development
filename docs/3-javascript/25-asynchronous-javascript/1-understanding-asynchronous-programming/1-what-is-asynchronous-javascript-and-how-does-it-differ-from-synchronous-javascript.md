# Apa Itu Asynchronous JavaScript, dan Bagaimana Perbedaannya dengan Synchronous JavaScript?

Mari pelajari tentang `asynchronous` `JavaScript`. Peristiwa `asynchronous` terjadi pada waktu yang berbeda, secara independen satu sama lain.

Dalam konteks pengembangan perangkat lunak (*software development*), "`asynchronous`" mengacu pada tugas-tugas yang berjalan di latar belakang (*background*), secara independen dari alur utama program. Keuntungan utama dari proses `asynchronous` adalah mereka tidak memblokir (*non-blocking*) eksekusi program utama.

Hal ini sangat membantu untuk tugas-tugas yang mungkin membutuhkan waktu lama untuk berjalan, seperti mengambil data dari *remote server*, memproses file besar, menangani `user input`, dan melakukan kalkulasi yang rumit. Inilah yang kita kenal sebagai `asynchronous programming`.

## Pemrograman Sinkron (Synchronous Programming)

Pendekatan ini berbanding terbalik dengan teknik `synchronous programming` tradisional yang telah Anda gunakan selama ini. Ketika Anda menulis beberapa baris `code`, Anda biasanya dapat memprediksi apa yang akan terjadi dan kapan hal itu akan terjadi. Baris pertama akan dieksekusi, kemudian baris kedua, dan seterusnya sesuai urutan penulisannya.

Pada contoh ini, baris pertama di mana Anda mendefinisikan `variable` akan dieksekusi terlebih dahulu, kemudian baris kedua, dan terakhir baris ketiga di mana `string` dicetak ke `console`:

```javascript
const topic = "JavaScript";
const learning = `I'm learning ${topic}!`;
console.log(learning);
```

Segala sesuatunya bersifat sekuensial dan dapat diprediksi. Setiap baris diselesaikan sebelum baris berikutnya dimulai. Jenis program `JavaScript` seperti ini dikenal sebagai `single-threaded`.

## Thread dan Event Loop

Konsep `thread` sangatlah penting. Sebuah `thread` adalah unit eksekusi di dalam suatu proses. Ini seperti alur kontrol (*flow of control*) terpisah di dalam program.

Dalam `synchronous programming`, `thread` mengeksekusi secara berurutan, satu demi satu. Jika sebuah `thread` terblokir, seperti saat menunggu `user input`, seluruh proses akan terhenti hingga `thread` tersebut selesai.

`JavaScript` bersifat `single-threaded` dan menggunakan `event loop` untuk menangani operasi `asynchronous`. Hal ini memungkinkan program untuk terus mengeksekusi tugas-tugas lain sambil menunggu operasi `asynchronous`, seperti *network request* atau *timer*, selesai tanpa memblokir `main thread`.

## Callback

`Asynchronous programming` sering kali melibatkan `callback`, `promise`, atau `async/await` untuk menangani operasi non-pemblokir (*non-blocking*).

Seperti yang telah Anda pelajari pada pelajaran sebelumnya, sebuah `callback` adalah `function` yang Anda teruskan ke `function` lain untuk dipanggil nanti. *Event handler* adalah tipe khusus dari `callback` yang pernah Anda gunakan sebelumnya. Dahulu, ini adalah cara paling umum untuk mengimplementasikan fungsi `asynchronous` di `JavaScript`. Namun, jika fungsi `callback` tersebut juga menerima fungsi `callback` lainnya, `code` dan logikanya dapat menjadi sangat rumit dengan cepat (*callback hell*).

## Objek Promise (The Promise Object)

Saat ini, teknik yang paling umum digunakan untuk mengimplementasikan `asynchronous programming` di `JavaScript` adalah `promise`. Sebuah `Promise` adalah `object` yang merepresentasikan penyelesaian (atau kegagalan) akhir dari suatu proses `asynchronous` beserta nilainya (`value`).

Nilai dari sebuah `promise` belum diketahui saat `promise` dibuat. Nilai tersebut baru diketahui ketika proses `asynchronous` telah selesai. Sebagai contoh, proses mengambil data dari `remote API` untuk aplikasi web Anda mungkin membutuhkan waktu. Sementara itu, Anda ingin pengguna Anda mendapatkan pengalaman pengguna (*user experience*) yang baik, bukan?

Untuk mengimplementasikan hal ini, Anda dapat membuat sebuah `promise` guna menjaga antarmuka pengguna (*user interface*) tetap aktif dan interaktif saat proses `asynchronous` sedang berjalan. Ketika proses selesai, `promise` akan berisi data yang dikirim kembali oleh `API`, sehingga aplikasi dapat menangani atau me-`render`-nya secara tepat saat data tersebut sudah tersedia.

`Asynchronous programming` adalah alat yang hebat untuk membangun aplikasi `JavaScript` yang efisien. Dengan memahami perbedaan antara `synchronous` dan `asynchronous programming`, Anda dapat memilih pendekatan yang tepat untuk aplikasi Anda dan menulis `code` yang lebih efisien.

## Pertanyaan (Questions)

Apa perbedaan utama antara pemrograman sinkron (*synchronous*) dan asinkron (*asynchronous*)?

- [x] Synchronous code executes sequentially, while asynchronous code executes concurrently.
- [ ] Synchronous code is more efficient than asynchronous code.
- [ ] Synchronous code is only used for simple tasks, while asynchronous code is used for complex tasks.
- [ ] Synchronous code is always faster than asynchronous code.

Manakah dari berikut ini yang merupakan teknik untuk menangani operasi *asynchronous* di JavaScript?

- [ ] Promises.
- [ ] Callbacks.
- [ ] Event listeners.
- [x] All of the above.

Apa keuntungan utama menggunakan pemrograman asinkron (*asynchronous programming*)?

- [ ] Improved performance for CPU-bound tasks.
- [ ] Simpler code structure.
- [x] Increased responsiveness of applications.
- [ ] Reduced memory usage.

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-how-does-the-async-attribute-work-inside-script-elements-and-how-does-it-differ-from-the-defer-attribute.md)
