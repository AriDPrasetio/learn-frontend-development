# Untuk Apa Elemen Meta Viewport Digunakan?


`Element` `meta` `viewport` adalah komponen penting dalam desain web responsif (*responsive web design*).

Ini adalah `element` `meta` `HTML` khusus yang memberi instruksi kepada peramban (*browser*) tentang cara mengontrol dimensi dan penskalaan (*scaling*) halaman di berbagai perangkat, terutama pada ponsel dan tablet.

Mari kita lihat sintaks dasar dari `element` `meta` `viewport`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`Element` ini biasanya ditempatkan di bagian `head` dari dokumen `HTML` Anda. Namun, apa arti dari setiap bagian `element` tersebut?

Bagian `width=device-width` memberi tahu peramban untuk mengatur lebar halaman agar sesuai dengan lebar layar perangkat. Hal ini penting untuk membuat tata letak responsif yang beradaptasi dengan berbagai ukuran layar.

`initial-scale=1.0` mengatur tingkat perbesaran (*zoom level*) awal saat halaman pertama kali dimuat. Nilai `1.0` berarti halaman ditampilkan pada perbesaran `100%`, tanpa penskalaan apa pun.

Dengan menggunakan `element` `meta` `viewport`, Anda memastikan bahwa halaman web Anda ditampilkan dengan benar pada perangkat seluler.

Tanpa itu, peramban seluler biasanya akan merender halaman pada lebar layar desktop dan kemudian memperkecil skalanya, yang dapat menghasilkan pengalaman pengguna yang buruk dengan teks yang sangat kecil dan sulit dibaca.

`Element` `meta` `viewport` juga memungkinkan Anda mengontrol apakah pengguna dapat memperbesar (*zoom in*) dan memperkecil (*zoom out*) halaman web Anda.

Meskipun dimungkinkan untuk menonaktifkan fitur perbesaran dengan atribut `user-scalable=no`, secara umum disarankan untuk menghindari hal ini karena alasan aksesibilitas (*accessibility*).

Banyak pengguna mengandalkan kemampuan untuk memperbesar tampilan demi keterbacaan yang lebih baik, terutama mereka yang memiliki gangguan penglihatan.

Berikut adalah contoh apa yang tidak boleh dilakukan:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

Sebaliknya, lebih baik mendesain situs web Anda agar responsif dan mudah dibaca pada berbagai tingkat perbesaran (*zoom level*), memastikan bahwa semua pengguna dapat mengakses konten Anda dengan nyaman.

`Element` `meta` `viewport` memainkan peran penting dalam menciptakan situs web yang ramah perangkat seluler (*mobile-friendly*).

Ini memastikan bahwa desain responsif yang telah Anda rancang dengan cermat ditampilkan sebagaimana mestinya di berbagai perangkat, memberikan pengalaman pengguna yang lebih baik untuk semua pengunjung situs Anda.

## Pertanyaan (Questions)

Apa tujuan utama dari tag `<meta name="viewport">`?

- [ ] Untuk meningkatkan kecepatan pemuatan (*loading*) situs web.
- [x] Untuk mengontrol dimensi halaman dan penskalaan pada berbagai perangkat.
- [ ] Untuk menyediakan deskripsi halaman bagi mesin pencari (*search engines*).
- [ ] Untuk mengaktifkan fungsionalitas `JavaScript`.

Apa fungsi dari `width=device-width` dalam tag `<meta name="viewport">`?

- [ ] Mengatur lebar semua gambar agar sesuai dengan lebar perangkat.
- [x] Memberi tahu peramban untuk menyesuaikan lebar halaman dengan lebar layar perangkat.
- [ ] Menyesuaikan ukuran *font* berdasarkan lebar perangkat.
- [ ] Membatasi lebar maksimum dari halaman web.

Mengapa secara umum disarankan untuk menghindari penggunaan `user-scalable=no` dalam tag `<meta name="viewport">`?

- [ ] Ini dapat menyebabkan situs web mengalami *crash* pada perangkat tertentu.
- [ ] Ini mencegah situs web diindeks oleh mesin pencari.
- [x] Ini dapat menciptakan masalah aksesibilitas bagi pengguna yang perlu memperbesar (*zoom*).
- [ ] Ini membuat situs web dimuat lebih lambat di perangkat seluler.

---
[⬅️ Sebelumnya](2-what-is-the-basic-anatomy-of-a-css-rule.md) | [Selanjutnya ➡️](4-what-are-some-default-browser-styles-applied-to-html.md)
