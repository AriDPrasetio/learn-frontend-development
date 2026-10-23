# Apa Itu Entitas HTML, dan Apa Saja Beberapa Contoh Umumnya?


Sebuah entitas `HTML` (`HTML entity`), atau referensi karakter (*character reference*), adalah sekumpulan karakter yang digunakan untuk merepresentasikan karakter yang dicadangkan (*reserved character*) di dalam `HTML`.

Katakanlah Anda ingin menampilkan teks `This is an <img/> element` di layar. Jika Anda menggunakan kode yang saat ini ada di editor, itu tidak akan menampilkan hasil yang diinginkan. Bahkan jika Anda menambahkan `attribute` `src` dan `alt` ke contoh tersebut, itu akan memunculkan gambar di tengah-tengah paragraf. Tentu bukan hasil yang diinginkan. Untuk berinteraksi dengan contoh tersebut, Anda perlu mengaktifkan editor interaktif.

```html
<p>This is an <img /> element</p>
```

Ketika *parser* `HTML` melihat simbol lebih kecil dari (`<`) diikuti oleh nama `tag` `HTML`, ia menginterpretasikannya sebagai sebuah `element` `HTML`. Itulah sebabnya Anda tidak mendapatkan hasil yang diinginkan berupa `This is an <img/> element` di layar.

Untuk memperbaiki masalah ini, Anda dapat menggunakan entitas `HTML`. Berikut adalah contoh yang diperbarui menggunakan entitas `HTML` yang benar untuk simbol lebih kecil dari (`<`) dan lebih besar dari (`>`). Sekarang Anda seharusnya melihat `This is an <img/> element` di layar.

Aktifkan editor interaktif dan coba tambahkan `&lt;p&gt;learning is fun&lt;/p&gt;` di bawah `element` paragraf. Anda akan melihat `<p>learning is fun</p>` di layar.

```html
<p>This is an &lt;img /&gt; element</p>
```

Jenis referensi karakter ini dikenal sebagai referensi karakter bernama (*named character references*). Referensi bernama dimulai dengan tanda ampersand (`&`) dan diakhiri dengan tanda titik koma (`;`). Dengan menggunakan referensi karakter bernama, *parser* `HTML` tidak akan mengira teks ini sebagai `element` `HTML` yang sebenarnya.

Jenis referensi karakter lainnya adalah referensi numerik desimal (*decimal numeric reference*). Referensi karakter ini dimulai dengan tanda ampersand dan simbol tanda pagar (`#`), diikuti oleh satu atau lebih digit desimal, lalu diakhiri dengan titik koma.

Berikut adalah contoh penggunaan referensi numerik desimal untuk simbol lebih kecil dari.

Aktifkan editor interaktif dan ubah kodenya untuk melihat simbol yang berbeda. Anda dapat menggunakan `&#169;` untuk simbol hak cipta (*copyright*) dan `&#174;` untuk simbol merek dagang terdaftar (*registered trademark*).

```html
&#60;
```

Jenis referensi karakter terakhir adalah referensi numerik heksadesimal (*hexadecimal numeric reference*). Referensi karakter ini dimulai dengan tanda ampersand, tanda pagar, dan huruf `x`. Kemudian diikuti oleh satu atau lebih digit heksa ASCII dan diakhiri dengan tanda titik koma.

Berikut adalah contoh penggunaan referensi numerik heksadesimal untuk simbol lebih kecil dari.

Aktifkan editor interaktif dan ubah kodenya untuk melihat berbagai simbol berbeda. Anda dapat menggunakan `&#x20AC;` untuk simbol euro dan `&#x03A9;` untuk simbol huruf kapital Yunani Omega.

```html
&#x3C;
```


## Pertanyaan (Questions)


Apa itu entitas `HTML` (*character reference*)?


- [ ] Sekumpulan Google Fonts.

- [ ] Sekelompok gambar dan *caption*.

- [ ] Sekumpulan karakter yang digunakan untuk merepresentasikan kode `JavaScript`.

- [x] Sekumpulan karakter yang digunakan untuk merepresentasikan karakter yang dicadangkan di dalam `HTML`.



Apa saja tiga jenis referensi karakter?


- [ ] Referensi karakter bernama (*named*), Romawi, dan numerik heksadesimal.

- [ ] Referensi karakter oktal, bernama (*named*), dan biner.

- [x] Referensi karakter bernama (*named*), numerik desimal, dan numerik heksadesimal.

- [ ] Referensi karakter asimetris, numerik desimal, dan numerik heksadesimal.



Manakah dari berikut ini yang merupakan sintaks yang benar untuk referensi karakter bernama (*named character reference*)?


- [x] `&amp;`

- [ ] `;amp;`

- [ ] `&amp>>`

- [ ] `&amp&`



---
[⬅️ Sebelumnya](2-what-are-ids-and-classes.md) | [Selanjutnya ➡️](4-what-is-the-role-of-the-script-element-in-html.md)
