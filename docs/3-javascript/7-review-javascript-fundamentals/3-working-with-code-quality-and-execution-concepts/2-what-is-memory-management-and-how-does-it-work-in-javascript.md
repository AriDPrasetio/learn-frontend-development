# Apa Itu Memory Management, dan Bagaimana Cara Kerjanya dalam JavaScript?

Manajemen memori (*memory management*) adalah konsep penting dalam pemrograman, namun bisa sedikit membingungkan bagi pemula. Mari kita uraikan dengan istilah yang sederhana.

Ketika Anda menjalankan sebuah program, termasuk `code` `JavaScript` di peramban web (*web browser*), program tersebut membutuhkan memori untuk menyimpan semua informasi yang sedang dikerjakannya. Ini mencakup `variable`, `function`, `object`, pada dasarnya semua hal yang dibuat dan digunakan oleh `code` Anda. Manajemen memori adalah proses mengendalikan memori ini, mengalokasikannya saat dibutuhkan, dan membebaskannya saat tidak lagi diperlukan. Dalam beberapa bahasa pemrograman, pengembang harus mengelola memori secara manual. Mereka perlu memberi tahu komputer secara eksplisit kapan harus mengalokasikan memori untuk hal-hal baru dan kapan harus membebaskan memori yang tidak lagi digunakan. Hal ini bisa sangat kuat namun juga berisiko, karena lupa membebaskan memori dapat menyebabkan kebocoran memori (*memory leaks*).

Namun, `JavaScript` menggunakan manajemen memori otomatis (*automatic memory management*). Ini berarti bahwa `JavaScript` (lebih tepatnya *engine* `JavaScript` di peramban web Anda) menangani alokasi dan dealokasi memori untuk Anda. Anda tidak perlu membebaskan memori secara eksplisit di dalam `code` Anda. Proses otomatis ini sering disebut sebagai pengumpulan sampah (*garbage collection*).

Berikut cara kerjanya secara sederhana. Pertama, alokasi terjadi ketika Anda membuat sebuah `variable`, `object`, atau `function` di dalam `code` `JavaScript` Anda; memori dialokasikan secara otomatis untuk menyimpannya. Kemudian, Anda menggunakan memori yang telah dialokasikan ini saat Anda bekerja dengan `variable`, `object`, atau `function` tersebut di dalam `code` Anda.

*Engine* `JavaScript` memiliki cara cerdas untuk mengetahui kapan sesuatu di dalam memori tidak lagi dibutuhkan. Secara umum, jika tidak ada lagi cara bagi program Anda untuk mengakses atau menggunakan suatu bagian data, data tersebut dianggap tidak lagi diperlukan. Secara berkala, *garbage collector* akan berjalan; ia menemukan memori yang tidak lagi dibutuhkan dan membebaskannya, sehingga tersedia untuk digunakan kembali di masa mendatang. Proses ini terjadi secara otomatis, yang sangat memudahkan karena ini berarti Anda tidak perlu khawatir tentang mengelola memori sendiri.

Meskipun demikian, tetap penting untuk memahami konsep ini karena terkadang Anda dapat secara tidak sengaja mempertahankan referensi ke hal-hal yang tidak Anda butuhkan lagi, sehingga mencegah *garbage collector* membebaskan memori tersebut. Sebagai contoh:

```javascript
function createLargeArray() {
  let largeArray = new Array(1000000);
  return function() {
    console.log(largeArray.length);
  };
}

let printArrayLength = createLargeArray();
printArrayLength();
```

Dalam `code` ini, bahkan setelah `createLargeArray` selesai dijalankan, `largeArray` tidak dapat dibersihkan oleh *garbage collector* karena `function` yang dikembalikan masih memiliki akses ke `variable` tersebut. Ini adalah sebuah `closure`, dan meskipun `closure` sangat berguna, mereka terkadang dapat menyebabkan penggunaan memori yang lebih besar dari yang Anda duga. Anda akan mempelajari lebih lanjut tentang `closure` pada pelajaran berikutnya.

Sebagai pemula, Anda tidak perlu terlalu khawatir tentang kerumitan manajemen memori. *Garbage collection* otomatis milik `JavaScript` menangani sebagian besar hal untuk Anda. Namun, seiring kemajuan Anda dalam perjalanan belajar `JavaScript`, memahami konsep-konsep ini dapat membantu Anda menulis `code` yang lebih efisien, terutama untuk aplikasi berskala lebih besar atau saat bekerja dengan sumber daya terbatas.

Ingatlah, praktik pengkodean yang baik, seperti menghindari `global variable` jika memungkinkan dan memperhatikan apa saja yang diakses oleh `function` Anda melalui `closure`, dapat membantu *engine* `JavaScript` mengelola memori secara lebih efisien.

## Pertanyaan (Questions)

### Pertanyaan 1

Dalam `JavaScript`, siapa yang paling bertanggung jawab dalam mengelola memori?

- [ ] Pengembang (*developer*).
- [x] *Engine* `JavaScript`.
- [ ] Sistem operasi (*operating system*).
- [ ] Peramban web (*web browser*).

### Pertanyaan 2

Disebut apakah proses ketika `JavaScript` secara otomatis membebaskan memori yang tidak lagi dibutuhkan?

- [ ] Alokasi memori (*memory allocation*).
- [x] *Garbage collection*.
- [ ] Fragmentasi memori (*memory fragmentation*).
- [ ] *Stack overflow*.

### Pertanyaan 3

Manakah dari berikut ini yang merupakan potensi kelemahan dari manajemen memori otomatis pada `JavaScript`?

- [ ] Memerlukan lebih banyak `code` untuk ditulis.
- [x] Terkadang dapat mempertahankan memori yang dialokasikan yang sebenarnya tidak lagi dibutuhkan.
- [ ] Membuat program berjalan lebih lambat.
- [ ] Memerlukan dealokasi memori manual.

---
[⬅️ Sebelumnya](1-what-are-linters-and-formatters-and-how-can-they-help-you-with-code-consistency.md) | [Selanjutnya ➡️](3-what-are-closures-and-how-do-they-work.md)
