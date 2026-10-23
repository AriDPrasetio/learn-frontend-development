# Apa Peran Element Script di HTML, dan Bagaimana Cara Menggunakannya untuk Menautkan ke File JavaScript Eksternal?


`Element` `script` digunakan untuk menyematkan kode yang dapat dieksekusi (*executable code*). Sebagian besar pengembang akan menggunakan ini untuk mengeksekusi kode `JavaScript`. `JavaScript` digunakan untuk menambahkan interaktivitas pada halaman web Anda. Contoh umum penggunaan `JavaScript` mencakup permainan interaktif, penggeser gambar (*image slider*), dan formulir dinamis yang memvalidasi masukan pengguna secara *real-time*.

Berikut adalah contoh penggunaan `element` `script` di dalam dokumen `HTML`. Hapus `//` dari bagian depan `alert("Welcome to freeCodeCamp");` dan Anda akan melihat jendela *alert* muncul. Untuk melihat pratinjau, Anda perlu mengaktifkan editor interaktif.

```html
<body>
  <script>
    // alert("Welcome to freeCodeCamp");
  </script>
</body>
```

Meskipun secara teknis Anda dapat menulis seluruh kode `JavaScript` Anda di dalam `tag` `script`, menautkannya ke file `JavaScript` eksternal dianggap sebagai praktik terbaik (*best practice*). Berikut adalah contoh penggunaan `element` `script` untuk menautkan ke file `JavaScript` eksternal:

```html
<script src="path-to-javascript-file.js"></script>

```

`Attribute` `src` digunakan di sini untuk menentukan lokasi file `JavaScript` eksternal tersebut. `src` merupakan singkatan dari "source" (sumber). Alasan mengapa tidak dianjurkan untuk menempatkan seluruh kode `JavaScript` Anda di dalam dokumen `HTML` adalah demi prinsip pemisahan fokus (*separation of concerns*). Pemisahan fokus adalah prinsip desain di mana Anda memisahkan program Anda ke dalam bagian-bagian yang jelas terpisah dan membuat setiap bagian menangani tanggung jawab tersendiri. Dalam kasus ini, kita ingin memisahkan kode `JavaScript` dari kode `HTML` kita.


## Pertanyaan (Questions)


`Attribute` manakah yang digunakan untuk menautkan ke file `JavaScript` eksternal?


- [ ] `Attribute` `div`.

- [ ] `Attribute` `defer`.

- [ ] `Attribute` `async`.

- [x] `Attribute` `src`.



Apa itu *separation of concerns* (pemisahan fokus/tanggung jawab)?


- [ ] Ini tentang memastikan setiap orang di dalam tim memiliki tanggung jawab yang jelas.

- [x] Prinsip desain di mana Anda memisahkan program ke dalam bagian-bagian yang berbeda dan membuat setiap bagian menangani tanggung jawab tersendiri.

- [ ] Tindakan menggabungkan seluruh aspek program ke dalam satu modul tunggal demi kesederhanaan.

- [ ] Ini melibatkan pembagian tugas di antara anggota tim tanpa mempertimbangkan bagaimana tugas-tugas tersebut saling tumpang tindih atau memengaruhi satu sama lain.



Manakah dari berikut ini yang merupakan sintaks yang benar untuk menautkan ke file `JavaScript` eksternal?


- [ ] `<script div="path-to-javascript-file.js"></script>`

- [ ] `<script alt="path-to-javascript-file.js"></script>`

- [x] `<script src="path-to-javascript-file.js"></script>`

- [ ] `<script defer="path-to-javascript-file.js"></script>`



---
[⬅️ Sebelumnya](3-what-are-html-entities.md) | [Selanjutnya ➡️](../4-understanding-how-html-affects-seo/1-what-is-the-role-of-the-meta-description.md)
