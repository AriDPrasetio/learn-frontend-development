# Apa Itu Validasi Formulir Sisi Klien (Client-Side Form Validation) dalam HTML Form, dan Apa Saja Contohnya?

Ketika seorang pengguna mengisi formulir di situs web Anda, sangatlah penting bahwa mereka mengisi semua informasi yang diperlukan dalam format yang benar. Kontrol formulir `HTML` (`HTML form controls`), seperti input, memiliki banyak validasi bawaan (`built-in validation`) yang dapat Anda gunakan untuk memeriksa data yang tidak valid. Ini akan membantu memastikan bahwa pengguna memperbaiki kesalahan-kesalahan tersebut sebelum informasi dikirimkan dan diproses oleh server.

## Validasi Client-Side dan Server-Side

Istilah "`client-side`" mengacu pada segala sesuatu yang terjadi di komputer atau perangkat pengguna, seperti bagian dari situs web atau aplikasi yang Anda ajak berinteraksi secara langsung. Ini mencakup tata letak (`layout`), desain, dan fitur interaktif apa pun.

Istilah "`server-side`" mengacu pada segala sesuatu yang terjadi di server, komputer, atau sistem yang menghosting situs web atau aplikasi. Ini mencakup pemrosesan data, menjalankan aplikasi, dan menangani permintaan yang datang dari perangkat pengguna.

Meskipun validasi `client-side` (`client-side validation`) penting, Anda juga memerlukan validasi `server-side` (`server-side validation`) untuk keamanan tambahan. Pengguna jahat (`malicious users`) dapat melewati pemeriksaan `client-side`, sehingga tindakan `server-side` yang tangguh sangatlah penting. Anda akan mempelajari lebih lanjut mengenai hal ini di modul berikutnya. Untuk saat ini, mari kita lihat beberapa contoh `client-side form validation`.

## `Attribute` `required`

Salah satu contoh umum dari validasi formulir bawaan adalah menggunakan `attribute` `required` pada input. `Attribute` `required` menentukan bahwa pengguna harus mengisi bagian formulir tersebut sebelum formulir dikirimkan. Berikut adalah contoh penggunaan `attribute` `required` pada input email.

Klik tombol `Submit Form` tanpa memasukkan alamat email dan Anda akan melihat pesan muncul yang meminta Anda untuk mengisi kolom tersebut.

```html
<form action="">
  <label for="email">Email Address (Required field):</label>
  <input required type="email" name="email" id="email" />
  <button type="submit">Submit Form</button>
</form>
```

Setiap peramban (`browser`) akan memiliki kumpulan gayanya sendiri untuk menampilkan pesan peringatan (`alert message`) ini.

## Validasi Email Bawaan (Built-In Email Validation)

Keuntungan lain dari penggunaan input email adalah bahwa input email memiliki beberapa validasi dasar untuk memastikan alamat email berformat benar. Sebagai contoh, jika Anda mengetikkan kata-kata acak dan mengklik submit, maka peramban akan menampilkan peringatan bahwa tanda `@` hilang.

Ketik `abc` ke dalam kolom email dan klik tombol submit. Anda akan melihat pesan muncul karena itu bukan alamat email yang valid.

```html
<form action="">
  <label for="email">Email Address (Required field):</label>
  <input required type="email" name="email" id="email" />
  <button type="submit">Submit Form</button>
</form>
```

Penting untuk dicatat bahwa peramban hanya memeriksa validasi dasar untuk alamat email standar. Terserah Anda untuk menambahkan lapisan validasi tambahan, yang akan Anda pelajari di modul-modul berikutnya.

## `Attribute` `minlength` dan `maxlength`

Bentuk validasi lain untuk input email adalah dengan menggunakan `attribute` `minlength` dan `maxlength`. Berikut adalah contoh penggunaan validasi tambahan tersebut.

Ketik `b@m` di dalam kolom dan klik tombol submit. Anda akan melihat pesan muncul karena teks tersebut tidak memenuhi panjang minimum yang diperlukan.

```html
<form action="">
  <label for="email">Email Address (Required field):</label>
  <input
    required
    type="email"
    name="email"
    id="email"
    minlength="4"
    maxlength="64"
  />
  <button type="submit">Submit Form</button>
</form>
```

`Attribute` `minlength` dan `maxlength` digunakan untuk mengatur panjang karakter minimum dan maksimum untuk input email. Jika Anda tidak memenuhi panjang minimum atau melebihi panjang maksimum karakter, peramban akan menampilkan pesan peringatan (`alert message`).

## Pertanyaan (Questions)

Apa tujuan dari `attribute` `minlength` dan `maxlength` di dalam input?

- [ ] Keduanya digunakan untuk mengontrol ukuran font (`font size`) teks di dalam kolom input.
- [x] Keduanya digunakan untuk menetapkan panjang minimum dan maksimum dalam jumlah karakter untuk input.
- [ ] Keduanya digunakan untuk menentukan `width` dari kolom input di halaman.
- [ ] Keduanya digunakan untuk menentukan jumlah karakter maksimum yang dapat diketikkan di dalam `textarea`.

`Attribute` manakah yang digunakan untuk memastikan bahwa kolom input ditandai sebagai wajib diisi (`required`)?

- [x] `required`
- [ ] `size`
- [ ] `minlength`
- [ ] `autoplay`

Apa yang terjadi jika Anda mencoba mengirimkan nilai tanpa tanda `@` untuk input `email`?

- [ ] Program akan mengalami `crash`.
- [ ] Formulir akan terkirim dengan baik-baik saja.
- [ ] Tidak ada yang akan terjadi.
- [x] Peramban akan menampilkan pesan peringatan bahwa input kehilangan tanda `@`.

---
[⬅️ Sebelumnya](2-what-are-the-different-types-of-buttons.md) | [Selanjutnya ➡️](4-what-are-the-different-form-states.md)