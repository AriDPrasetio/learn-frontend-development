# Apa Itu Method prompt(), dan Bagaimana Cara Kerjanya?

`Method` `prompt()` adalah bagian penting dari interaksi `JavaScript` dengan pengguna. Ini adalah salah satu cara paling sederhana untuk mendapatkan masukan dari pengguna (`user input`) melalui kotak dialog *pop-up* kecil.

Anda akan sering melihatnya digunakan dalam kasus-kasus di mana halaman web memerlukan sepotong informasi dari pengguna, seperti nama atau bentuk masukan teks lainnya.

Lalu, apa sebenarnya yang dilakukan oleh `method` `prompt()`? Ini membuka kotak dialog yang meminta masukan dari pengguna, lalu mengembalikan teks yang dimasukkan oleh pengguna sebagai sebuah `string`.

`Method` `prompt()` menerima dua `arguments`: Yang pertama adalah pesan yang akan muncul di dalam kotak dialog, biasanya meminta pengguna untuk memasukkan informasi. Dan yang kedua adalah `default value` yang bersifat opsional dan akan mengisi bidang input pada awalnya.

```javascript
prompt(message, default);
```

Berikut adalah contoh cara kerjanya.

> [!NOTE]
> Contoh ini mencakup `code` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami semua hal dalam `code` tersebut. Ini hanya untuk mengilustrasikan bagaimana `method` `prompt()` bekerja dan memastikan bahwa perintah (*prompt*) tidak muncul segera saat halaman dimuat, yang dapat dianggap mengganggu. Jika Anda mengaktifkan editor interaktif, Anda dapat mencobanya sendiri.

```html
<button id="prompt-btn">Show Prompt</button>
<p id="output"></p>
<script src="index.js"></script>
```

```javascript
const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
  const userName = prompt("What is your name?", "Guest");
  output.textContent = "Hello, " + userName + "!";
});
```

Dalam contoh ini, ketika pengguna mengklik tombol, `method` `prompt()` menampilkan kotak dialog dengan pesan *What is your name?* dan bidang input yang awalnya berisi `value` *Guest*.

Jika pengguna mengetik namanya dan menekan "OK", `variable` `userName` akan menyimpan `value` yang dimasukkan. Jika pengguna menekan "Cancel", `variable` `userName` akan disetel ke `null`. `null` menandakan bahwa pengguna tidak memberikan masukan apa pun. Paragraf `output` kemudian akan menampilkan pesan salam menggunakan nama yang diberikan atau `null` jika pengguna membatalkannya. Anda akan mempelajari teknik untuk menghindari penampilan `null` saat pengguna membatalkan *prompt* pada pelajaran-pelajaran mendatang.

Perlu diingat bahwa `method` `prompt()` akan menghentikan sementara eksekusi `script` hingga pengguna berinteraksi dengan kotak dialog.

Ini berarti sisa `code` `JavaScript` Anda tidak akan berjalan sampai pengguna memberikan masukan dan mengklik "OK", atau membatalkan *prompt*.

Satu poin lain yang perlu dipertimbangkan adalah bahwa meskipun `prompt()` berguna untuk pengujian cepat atau aplikasi kecil, ini umumnya dihindari dalam aplikasi web modern yang kompleks (`modern web applications`) karena sifatnya yang mengganggu (*disruptive*) dan perilaku yang tidak konsisten di berbagai `browsers`.

Dengan memahami `method` `prompt()`, Anda memperoleh cara sederhana untuk berinteraksi dengan pengguna dan mengambil informasi langsung melalui browser, meskipun mungkin tidak banyak digunakan dalam aplikasi web modern.

## Pertanyaan (Questions)

Apa yang dilakukan `method` `prompt()` dalam `JavaScript`?

- Menampilkan *pop-up* yang meminta `user input` dan mengembalikan masukan sebagai sebuah `string`.
- Mencatat pesan ke `console`.
- Membuka jendela peramban baru.
- Menghentikan `script` dari eksekusi.

Apa yang terjadi jika pengguna membatalkan kotak dialog *prompt*?

- `Script` menjadi rusak (*breaks*).
- `Method` `prompt` mengembalikan `null`.
- `Method` `prompt` mengembalikan sebuah `string` kosong.
- `Script` berlanjut dengan `default value`.

Untuk apa `argument` kedua yang bersifat opsional dari `method` `prompt()` digunakan?

- Menentukan teks tombol batal (*cancel*).
- Menetapkan sebuah `default value` di bidang input.
- Menetapkan batas waktu untuk masukan.
- Mengubah warna kotak dialog.

---
[⬅️ Sebelumnya](4-how-can-you-find-the-position-of-a-substring-in-a-string.md) | [Selanjutnya ➡️](../6-working-with-string-character-methods/1-what-is-ascii-and-how-does-it-work-with-charcodeat-and-fromcharcode.md)
