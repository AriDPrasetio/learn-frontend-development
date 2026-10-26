# Apa Itu Linter dan Formatter, dan Bagaimana Keduanya Membantu Anda Menjaga Konsistensi Code?

Dalam dunia pengembangan perangkat lunak, memelihara `code` yang bersih, konsisten, dan bebas dari kesalahan adalah hal yang sangat penting. Di sinilah peran `linter` dan `formatter`. Alat-alat ini sangat penting bagi pengembang untuk memastikan kualitas dan konsistensi `code` di seluruh proyek dan tim.

## Apa Itu Linter?

Mari kita mulai dengan `linter`. Sebuah `linter` adalah alat analisis kode statis (*static code analysis tool*) yang menandai kesalahan pemrograman, *bug*, kesalahan gaya penulisan (*stylistic errors*), dan konstruksi yang mencurigakan. Istilah *lint* berasal dari utilitas Unix yang memeriksa kode sumber bahasa C.

Saat ini `linter` tersedia untuk sebagian besar bahasa pemrograman termasuk `JavaScript`. `Linter` membantu dalam beberapa hal. Pertama, mereka menangkap potensi kesalahan sebelum *runtime*. Sebagai contoh, sebuah `linter` dapat menandai penggunaan `variable` yang belum didefinisikan (`undefined variable`) atau sebuah `function` yang dipanggil dengan jumlah `argument` yang salah. Mereka juga menegakkan standar pengkodean (*coding standards*) dan praktik terbaik. Ini dapat mencakup aturan tentang indentasi, penggunaan tanda titik koma (*semicolon*), atau panjang baris maksimum yang diizinkan. Terakhir, mereka membantu menjaga konsistensi di seluruh *codebase*, terutama ketika banyak pengembang bekerja pada proyek yang sama.

## Melakukan Linting Code dengan ESLint

Sebuah `linter` populer untuk `JavaScript` adalah ESLint. Berikut adalah contoh sederhana tentang apa yang mungkin ditandai oleh ESLint:

```javascript
function doSomething(x) {
  return x + z
}
```

Dalam `code` ini, `variable` `z` tidak dideklarasikan, sehingga ESLint akan menandai kesalahan bahwa `z` belum didefinisikan (`z is not defined`). Selain itu, pernyataan terakhir tidak memiliki titik koma (*semicolon*), yang mungkin juga ditandai oleh ESLint di dalam editor `code`.

## Apa Itu Formatter?

Di sisi lain, `formatter` adalah alat yang secara otomatis memformat `code` Anda agar mematuhi panduan gaya (*style guide*) tertentu. Meskipun `linter` sering kali dapat memperbaiki beberapa masalah secara otomatis (*autofix*), `formatter` dirancang secara khusus untuk menulis ulang `code` Anda agar sesuai dengan gaya yang telah ditentukan sebelumnya.

`Formatter` memastikan gaya `code` yang konsisten di seluruh proyek atau tim tanpa memandang preferensi masing-masing pengembang. Mereka juga menghemat waktu dan energi mental yang seharusnya dihabiskan untuk memformat secara manual. Terakhir, mereka dapat membuat proses *code review* menjadi lebih efisien dengan menghilangkan perdebatan seputar gaya penulisan `code`.

## Memformat Code dengan Prettier

Sebuah `formatter` populer untuk `JavaScript` adalah Prettier. Berikut adalah contoh bagaimana Prettier memformat `code`. Berikut tampilan sebelum pemformatan:

```javascript
function longFunction(
  argument1, 
  argument2,
  argument3
) {return argument1 + argument2 + argument3;}
```

Dan setelah pemformatan Prettier:

```javascript
function longFunction(argument1, argument2, argument3) {
  return argument1 + argument2 + argument3;
}
```

## Mengintegrasikan Linter dan Formatter

Baik `linter` maupun `formatter` dapat diintegrasikan ke dalam alur kerja pengembangan Anda dengan berbagai cara. Keduanya dapat disertakan dalam proses *build* atau ditambahkan sebagai *plugin* pada editor teks atau IDE Anda untuk memberikan umpan balik secara langsung (*real-time feedback*) saat Anda menulis `code`. Menggunakan `linter` dan `formatter` secara bersamaan dapat meningkatkan kualitas dan konsistensi `code` secara signifikan. Sebagai contoh, Anda dapat menggunakan ESLint untuk menangkap potensi kesalahan dan menegakkan praktik pengkodean tertentu, lalu menggunakan Prettier untuk menangani semua tugas pemformatan.

Banyak tim pengembang menyiapkan alat-alat ini sebagai bagian dari konfigurasi proyek mereka, sering kali dengan *pre-commit hook* yang menjalankan `linter` dan `formatter` sebelum mengizinkan `code` di-*commit*. Hal ini memastikan bahwa semua `code` di dalam repositori memenuhi standar tim untuk kualitas dan gaya.

## Ringkasan (Summary)

Singkatnya, `linter` dan `formatter` adalah alat yang ampuh untuk membantu menjaga kualitas `code`, menangkap potensi kesalahan lebih awal, dan memastikan konsistensi di seluruh *codebase*. Dengan mengotomatiskan aspek-aspek peninjauan `code` ini, pengembang dapat lebih fokus pada penyelesaian masalah dan mengurangi perdebatan tentang gaya penulisan `code`.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan utama dari sebuah `linter`?

- [ ] Memformat `code` secara otomatis.
- [ ] Mengompilasi `code`.
- [x] Menandai potensi kesalahan (*potential errors*) dan masalah gaya penulisan (*style issues*).
- [ ] Menjalankan *unit tests*.

### Pertanyaan 2

Manakah dari berikut ini yang merupakan manfaat menggunakan `code formatter`?

- [ ] Menangkap kesalahan saat *runtime*.
- [x] Memastikan gaya penulisan `code` yang konsisten di seluruh proyek.
- [ ] Meningkatkan performa dari `code`.
- [ ] Menambahkan fitur baru ke dalam *codebase*.

### Pertanyaan 3

Di bagian mana dalam proses pengembangan Anda dapat mengintegrasikan sebuah `linter`?

- [ ] Hanya selama pengaturan proyek awal (*initial project setup*).
- [ ] Hanya selama peninjauan kode akhir (*final code review*).
- [x] Sebagai bagian dari proses *build*, *plugin* untuk editor teks atau IDE Anda, *pre-commit hook* sebelum `code` dapat di-*commit* ke *codebase*, dan seterusnya.
- [ ] Setelah `code` di-deploy ke tahap produksi (*production*).

---
[⬅️ Sebelumnya](../2-working-with-arrays-variables-and-naming-practices/2-how-do-you-get-the-length-for-an-array-and-how-can-you-create-an-empty-array-of-fixed-length.md) | [Selanjutnya ➡️](2-what-is-memory-management-and-how-does-it-work-in-javascript.md)
