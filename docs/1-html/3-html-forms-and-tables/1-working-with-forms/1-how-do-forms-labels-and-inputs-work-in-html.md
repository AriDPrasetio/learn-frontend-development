# Bagaimana Cara Kerja Form, Label, dan Input dalam HTML?

`Element` `form` dalam `HTML` digunakan untuk mengumpulkan informasi pengguna, seperti nama dan alamat email. Berikut adalah contoh dari `element` `form`:

```html
<form action="url-goes-here">
  <!-- input elements go here -->
</form>
```

`Attribute` `action` menentukan ke mana data formulir akan dikirimkan saat `form` diserahkan (`submission`). Untuk mengumpulkan informasi tertentu, seperti nama dan alamat email, Anda akan menggunakan `element` `input`. Berikut adalah contoh penggunaan `element` `input`.

Aktifkan editor interaktif dan berinteraksilah dengan `element` `input` di jendela pratinjau dengan mengetikkan nama Anda di dalam kolom tersebut.

```html
<form action="">
  <input type="text" />
</form>
```

`Element` `input` adalah `void elements` dan tidak memiliki `closing tag`. `Attribute` `type` mendefinisikan tipe data yang diharapkan dari pengguna. Dalam hal ini, datanya adalah teks biasa (`plaintext`). Untuk menambahkan label pada input, Anda akan menggunakan `element` `label`. Berikut adalah contoh penggunaan `element` `label` dengan teks `Full Name:`.

Klik pada teks `Full Name:` di jendela pratinjau dan Anda akan melihat input tersebut masuk ke status fokus (`focus`). Untuk berinteraksi dengan contoh ini, Anda perlu mengaktifkan editor interaktif.

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

Dengan menyarangkan (`nesting`) sebuah `input` di dalam `element` `label`, Anda membuat asosiasi implisit (`implicit association`) antara `label` dan kolom `input`. Istilah "implisit" mengacu pada sesuatu yang dipahami atau disimpulkan tanpa perlu dinyatakan atau didefinisikan secara eksplisit dengan atribut atau elemen tambahan. Untuk mengaitkan `label` secara eksplisit dengan sebuah `input`, Anda dapat menggunakan `attribute` `for`. Berikut adalah contoh penggunaan `attribute` `for` untuk label alamat email.

Berinteraksilah dengan `element` `input` di jendela pratinjau dengan mengetikkan alamat email tiruan seperti `jane@example.com`. Untuk berinteraksi dengan contoh ini, Anda perlu mengaktifkan editor interaktif.

```html
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" />
</form>
```

Saat menggunakan asosiasi eksplisit, nilai untuk `attribute` `for` dan `id` harus sama. Dalam kasus ini, kedua nilainya disetel ke `email`. Tipe `email` pada input menyediakan validasi dasar (`basic validation`) untuk alamat email yang diformat dengan benar. Jika Anda ingin menampilkan petunjuk tambahan kepada pengguna mengenai input yang diharapkan, Anda dapat menggunakan `attribute` `placeholder`. Berikut adalah contoh penggunaan `attribute` `placeholder` di dalam input email.

Aktifkan editor interaktif, klik pada input email dan mulailah mengetikkan email, maka Anda akan melihat teks placeholder menghilang.

```html
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" placeholder="example@email.com" />
</form>
```

Untuk teks placeholder, Anda sebaiknya memberikan teks singkat yang bermanfaat untuk menunjukkan format dan tipe data yang Anda harapkan dari pengguna Anda. Dalam kasus ini, teks placeholder, `example@email.com`, menunjukkan kepada pengguna bahwa mereka harus memasukkan alamat email dengan format yang benar.

## Pertanyaan (Questions)

Apa peran dari `attribute` `for` di dalam `element` `label`?

- [ ] Ini menunjukkan warna dari teks label.
- [x] Ini digunakan untuk mengaitkan label dengan input secara eksplisit.
- [ ] Ini menentukan perataan label di dalam wadahnya (`container`).
- [ ] Ini mendefinisikan fungsi JavaScript yang akan dieksekusi saat label diklik.

Manakah dari berikut ini yang merupakan nilai yang benar untuk `attribute` `type` yang digunakan di dalam input?

- [ ] `choice`
- [ ] `text-box`
- [ ] `numberinput`
- [x] `text`

Apa peran dari `attribute` `placeholder` di dalam `element` `input`?

- [x] Ini digunakan untuk memberikan petunjuk atau contoh teks di dalam kolom input.
- [ ] Ini menentukan tipe dari kolom input.
- [ ] Ini mendefinisikan nilai awal yang ditampilkan di dalam kolom input.
- [ ] Ini menunjukkan jumlah karakter maksimum yang diizinkan di dalam kolom input.

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-are-the-different-types-of-buttons.md)