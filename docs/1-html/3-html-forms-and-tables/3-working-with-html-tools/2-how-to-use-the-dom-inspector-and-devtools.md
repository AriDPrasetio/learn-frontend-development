# Cara Menggunakan DOM Inspector dan DevTools untuk Men-debug dan Membangun Proyek Anda

Saat Anda sedang membangun proyek Anda, Anda akan sering menemui masalah di mana program Anda tidak berfungsi seperti yang diharapkan.

Para pemrogram sering menyebut masalah tersebut sebagai `bugs`. Proses menemukan dan memperbaiki `bugs` ini dikenal sebagai `debugging`.

Untuk men-debug kode Anda, Anda perlu menggunakan beberapa alat yang disediakan oleh peramban Anda.

Dua alat penting yang dapat digunakan adalah `DOM inspector` dan `developer tools` (`DevTools`).

`DOM inspector` memungkinkan Anda untuk memeriksa struktur `HTML` dari halaman yang sedang Anda buka.

`DOM` merupakan singkatan dari `Document Object Model`. Ini adalah struktur seperti pohon (`tree-like structure`) yang merepresentasikan elemen-elemen pada suatu halaman. Anda akan mempelajari lebih lanjut tentang `DOM` di modul-modul mendatang.

`Developer tools` memungkinkan Anda untuk memeriksa `HTML`, `CSS`, dan `JavaScript` dari halaman yang sedang Anda buka.

Mari kita lihat contoh `HTML` yang mengandung `bug` kecil pada `element` `anchor`:

```html
<a href="https://www.freecodecamp.org/larn/">freeCodeCamp curriculum</a>

```

Ketika Anda mengklik tautan tersebut, itu akan mengarah ke halaman 404. Halaman 404 adalah halaman kesalahan (`error page`) yang muncul ketika pengguna mencoba mengakses halaman web yang tidak ada di server.

Tujuannya adalah agar tautan tersebut mengarah ke kurikulum freeCodeCamp.

Untuk melihat apa masalahnya, Anda dapat menggunakan `developer tools`.

Untuk membuka `developer tools` di peramban Anda, Anda dapat mengklik kanan pada halaman dan memilih `Inspect`.

Anda juga dapat menggunakan Control + Shift + I pada keyboard PC Anda atau Command + Option + I di Mac Anda.

Saat Anda membuka `developer tools` di Google Chrome, Anda akan melihat sejumlah tab. Tab pertama disebut tab `Elements`. Tab ini menunjukkan kepada Anda struktur `HTML` dari halaman yang sedang Anda buka.

![Chrome developer tools with the Elements tab open, showing the page's HTML structure and an anchor element whose href is https://www.freecodecamp.org/larn/.](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-to-use-the-dom-inspector-and-devtools-1.png)

Tab kedua disebut tab `Console`. Tab ini menunjukkan kepada Anda kesalahan apa pun yang mungkin terjadi di halaman tersebut.

Dalam situasi di mana Anda memiliki tautan yang rusak (`broken link`), Anda dapat memeriksa konsol untuk melihat pesan kesalahan untuk tautan yang rusak tersebut. Pesan umum yang terus ditampilkan untuk tautan yang rusak adalah kesalahan 404 (`404 error`). Kesalahan 404 menunjukkan bahwa halaman tidak ditemukan (`page not found`).

![Chrome developer tools with the Console tab open, showing a 404 Not Found error for https://www.freecodecamp.org/larn, along with other related 404 errors.](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-to-use-the-dom-inspector-and-devtools-2.png)

Ini memberi tahu kita bahwa masalahnya ada pada URL di `element` `anchor`. Saat Anda memeriksa nilai `href`, Anda akan melihat adanya salah ketik (`typo`).

Saat ini pesan konsol menampilkan `/larn` dengan status 404, tetapi URL yang benar seharusnya adalah `/learn`. Ketika tautan diperbaiki, maka tautan tersebut akan berfungsi seperti yang diharapkan.

Anda akan mempelajari lebih lanjut tentang bekerja dengan `developer tools` di sepanjang sertifikasi ini, namun ini hanyalah contoh singkat tentang bagaimana alat ini dapat membantu Anda men-debug kode Anda.

## Pertanyaan (Questions)

Apa sebutan untuk proses menemukan dan memperbaiki `bugs` di dalam kode Anda?

- [ ] Scanning
- [ ] Building
- [x] Debugging
- [ ] Scripting

Apa sebutan untuk struktur seperti pohon (`tree-like structure`) yang merepresentasikan elemen-elemen pada suatu halaman?

- [ ] BOM
- [x] DOM
- [ ] Python
- [ ] CSS

Apa peran dari tab "Elements" di dalam `developer tools`?

- [x] Ini menunjukkan kepada Anda struktur `HTML` dari halaman yang sedang Anda buka.
- [ ] Ini menunjukkan kepada Anda struktur `CSS` dari halaman yang sedang Anda buka.
- [ ] Ini menunjukkan kepada Anda struktur `JavaScript` dari halaman yang sedang Anda buka.
- [ ] Ini menunjukkan kepada Anda struktur `PHP` dari halaman yang sedang Anda buka.

---
[⬅️ Sebelumnya](1-what-is-an-html-validator.md) | [Selanjutnya ➡️](../4-review-html-tables-and-forms/1-review-html-tables-and-forms.md)