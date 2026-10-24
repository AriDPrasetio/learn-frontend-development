# Apa Itu Relative Positioning, dan Bagaimana Perbedaannya dengan Static Positioning Default?

Dalam `CSS`, pemosisian (*positioning*) memungkinkan kita mengontrol bagaimana `element-element` disusun pada sebuah halaman. Dua jenis pemosisian yang umum adalah pemosisian statis (`static positioning`) dan pemosisian relatif (`relative positioning`). Secara *default*, `element-element` diposisikan secara statis (`static`). Ini berarti mereka mengikuti alur normal dokumen (*normal document flow*), satu demi satu, dari atas ke bawah, kiri ke kanan.

Pemosisian statis (`static positioning`) adalah *default* untuk semua `element` dan tidak memerlukan deklarasi khusus apa pun dalam `CSS`. Anda tidak akan melihat perbedaan apa pun saat menggunakan `static positioning` karena ini hanya menempatkan `element-element` di tempat mereka muncul secara alami di dalam dokumen. Berikut adalah contoh paragraf yang menggunakan `static positioning` *default*:

```html
<p>This paragraph is statically positioned.</p>
```

Saat dirender di peramban (*browser*), paragraf ini akan muncul pada posisi alaminya, mengikuti alur dokumen normal. Tidak ada gaya (*styling*) khusus yang diterapkan untuk memindahkannya, dan paragraf tersebut tetap berada di tempat ia akan muncul secara alami di dalam tata letak (*layout*).

Di sisi lain, pemosisian relatif (`relative positioning`) memungkinkan sebuah `element` digeser dari posisi normalnya tanpa mengganggu alur dokumen. Bayangkan ini seperti memindahkan `element` dari posisi `static` *default*-nya dengan memberinya koordinat baru. Berikut adalah cara Anda menerapkan `relative positioning`:

```html
<link rel="stylesheet" href="styles.css">
<p class="relative">This paragraph is positioned relatively.</p>
```

```css
body {
  border: solid 1px black;
}

.relative {
  position: relative;
  top: 30px;
  left: 30px;
}
```

Pada contoh ini, paragraf akan muncul `30px` ke bawah dan `30px` ke kanan dari posisi aslinya. Namun, ruang yang seharusnya ditempatinya dalam alur normal tetap dipertahankan. `Relative positioning` sangat berguna saat Anda ingin sedikit menggeser sebuah `element` tanpa memengaruhi sisa tata letak lainnya.

## Pertanyaan (Questions)

Manakah dari berikut ini yang merupakan pemosisian *default* untuk semua `element`?

- [ ] `absolute`
- [ ] `relative`
- [ ] `fixed`
- [x] `static`

Apa yang dilakukan oleh `relative positioning` terhadap sebuah `element`?

- [ ] Memindahkannya dari alur dokumen normal.
- [x] Memindahkannya relatif terhadap posisi normalnya.
- [ ] Menguncinya ke *viewport*.
- [ ] Menumpuknya di atas `element` lain.

Bagaimana perbedaan `relative positioning` dengan `static positioning`?

- [ ] `Relative positioning` menghapus `element` dari alur dokumen.
- [ ] `Static positioning` memungkinkan `element` digeser dari posisi *default*-nya.
- [x] `Relative positioning` memungkinkan Anda menggeser sebuah `element` tanpa mengganggu alur dokumen.
- [ ] `Static positioning` mengunci `element` di tempatnya seperti gambar latar belakang.

---

[⬅️ Sebelumnya](1-what-are-common-use-cases-for-using-floats.md) | [Selanjutnya ➡️](3-what-is-absolute-positioning.md)
