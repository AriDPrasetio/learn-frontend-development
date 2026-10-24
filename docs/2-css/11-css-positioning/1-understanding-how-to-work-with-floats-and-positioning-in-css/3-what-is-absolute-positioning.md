# Apa Itu Absolute Positioning, dan Bagaimana Cara Kerjanya?

Pemosisian absolut (`absolute positioning`) memungkinkan Anda mengeluarkan sebuah `element` dari alur dokumen normal (*normal document flow*), membuatnya berperilaku independen dari `element-element` lainnya. Ketika sebuah `element` diposisikan secara absolut (`absolute`), `element` tersebut ditempatkan pada lapisannya (*layer*) sendiri, benar-benar terpisah dari semua hal lain di dalam tata letak (*layout*). Hal ini membuatnya berguna untuk membuat fitur antarmuka pengguna (*UI*) yang melayang seperti modal, *tooltip*, atau menu tarik-turun (*dropdown menus*), yang dapat tumpang tindih (*overlap*) dengan `element` lain pada halaman.

Secara *default*, `element-element` yang diposisikan secara absolut ditempatkan relatif terhadap leluhur berposisi (`positioned ancestor`) yang paling dekat. Jika tidak ada leluhur berposisi yang ditemukan, `element` tersebut akan diposisikan relatif terhadap blok penampung awal (*initial containing block*), yang biasanya merupakan *viewport* peramban (*browser*). Anda dapat memindahkan `element` yang diposisikan secara absolut menggunakan `property` `top`, `bottom`, `left`, dan `right` untuk menentukan seberapa jauh jaraknya dari tepi-tepi `element` penampungnya.

Sebagai contoh, mengatur `top: 30px` dan `left: 30px` akan memindahkan `element` sejauh `30px` dari tepi atas dan kiri blok penampung. Berikut adalah contoh cara menerapkan `absolute positioning` pada sebuah `element` dalam `CSS`:

```html
<link rel="stylesheet" href="styles.css">
<div class="positioned">Absolutely Positioned</div>
```

```css
body {
  background-color: #eeeeee;
}

.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: coral;
}
```

Ketika kode ini diterapkan, `element` tersebut akan dikeluarkan dari alur dokumen normal dan ditempatkan `30px` dari bagian atas dan kiri blok penampungnya.

`Absolute positioning` bisa sangat membantu untuk membuat `element-element` yang ditujukan untuk melayang di atas konten lainnya, seperti lapisan penutup (*overlays*) atau jendela modal (*modal windows*). Namun, karena `element` dikeluarkan dari alur dokumen, hal ini juga dapat menimbulkan celah atau menyebabkan `element-element` lain saling merapat jika tidak ditangani dengan benar.

## Pertanyaan (Questions)

Apa yang terjadi ketika sebuah `element` diposisikan secara absolut (`absolute`) dalam `CSS`?

- [ ] `Element` ditempatkan di dalam alur dokumen normalnya.
- [x] `Element` menutupi `element` lain dan ditempatkan pada lapisannya sendiri.
- [ ] `Element` disembunyikan.
- [ ] `Element` dipindahkan ke bagian atas halaman.

Bagaimana cara Anda memindahkan `element` yang berposisi absolut sejauh 30px dari tepi atas dan kiri blok penampungnya?

- [x] Atur `top: 30px` dan `left: 30px`.
- [ ] Atur `margin-top: 30px` dan `margin-left: 30px`.
- [ ] Atur `position: relative`.
- [ ] Atur `padding: 30px`.

Jika tidak ditemukan leluhur yang berposisi (*positioned ancestor*), di manakah `element` yang berposisi absolut ditempatkan?

- [ ] Relatif terhadap `body`.
- [ ] Relatif terhadap `element` `fixed` terdekat.
- [x] Relatif terhadap blok penampung awal (biasanya *viewport* peramban).
- [ ] Tetap berada di tempat yang sama.

---

[⬅️ Sebelumnya](2-what-is-relative-positioning.md) | [Selanjutnya ➡️](4-what-is-fixed-and-sticky-positioning.md)
