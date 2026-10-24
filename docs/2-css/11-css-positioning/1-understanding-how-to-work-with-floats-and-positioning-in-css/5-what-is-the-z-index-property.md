# Apa Itu Properti Z-Index, dan Bagaimana Cara Kerjanya untuk Mengontrol Penumpukan Elemen Berposisi?

`Property` `z-index` dalam `CSS` digunakan untuk mengontrol urutan penumpukan vertikal (*vertical stacking order*) dari `element-element` berposisi (`positioned elements`) yang saling tumpang tindih (*overlap*) pada halaman. Ketika beberapa `element` ditumpuk satu sama lain, `value` dari `z-index` menentukan `element` mana yang muncul paling atas. Semakin tinggi `value` `z-index`, semakin dekat `element` tersebut dengan pemirsa (*viewer*), sedangkan `value` yang lebih rendah menempatkan `element` lebih jauh ke belakang dalam tumpukan (*stack*).

Namun, `z-index` hanya berfungsi pada `element-element` yang diposisikan, yang berarti `element` tersebut harus memiliki `value` `position` selain `static`, seperti `relative`, `absolute`, atau `fixed`. `Value` *default* dari `z-index` adalah `auto`, yang menempatkan `element` dalam urutan penumpukan *default*. Mari kita lihat contoh dengan tiga kotak:

```html
<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
</div>
```

Sekarang, kita dapat menerapkan beberapa `styles` untuk memosisikan kotak-kotak tersebut agar saling bertumpuk seperti ini:

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
</div>
```

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid black;
}

.box1 {
  position: absolute;
  z-index: 1;
  background: lightcoral;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 100px;
}

.box2 {
  position: absolute;
  z-index: 3;
  background: gold;
  top: 40px;
  left: 40px;
  width: 100px;
  height: 100px;
}

.box3 {
  position: absolute;
  z-index: 2;
  background: lightgreen;
  top: 60px;
  left: 60px;
  width: 100px;
  height: 100px;
}
```

Untuk `container`, pemosisiannya akan diatur ke `relative` dan semua kotak yang disarangkan di dalamnya akan diatur ke pemosisian `absolute`. Setiap kotak memiliki `value` yang berbeda untuk `z-index` yang menghasilkan kotak-kotak tersebut berlapis-lapis di atas satu sama lain.

Anda dapat menganggap `z-index` sebagai cara untuk membuat lapisan-lapisan (*layers*) pada halaman web, dan `element-element` dengan `value` `z-index` yang lebih tinggi akan ditempatkan di atas `element` dengan `value` yang lebih rendah. Ini sangat berguna untuk mengontrol bagaimana perilaku `element-element` yang saling tumpang tindih dalam tata letak yang kompleks, seperti modal, *pop-up*, atau *tooltip*.

## Pertanyaan (Questions)

Apa yang dikontrol oleh `property` `z-index` dalam `CSS`?

- [ ] Warna dari sebuah `element`.
- [x] Urutan penumpukan vertikal dari `element-element` berposisi.
- [ ] Ukuran dari sebuah `element`.
- [ ] Perataan horizontal dari teks.

Agar `property` `z-index` dapat berfungsi, hal apa yang harus benar tentang `element` tersebut?

- [ ] Harus memiliki lebar `fixed`.
- [x] Harus memiliki `value` `position` selain `static`.
- [ ] Harus memiliki `value` `display` yaitu `block`.
- [ ] Harus memiliki warna latar belakang (`background color`) yang telah diatur.

`Value` `z-index` manakah yang menempatkan sebuah `element` di atas semua `element` lainnya?

- [ ] `z-index: 0;`
- [x] `z-index: 5;`
- [ ] `z-index: auto;`
- [ ] `z-index: -1;`

---

[⬅️ Sebelumnya](4-what-is-fixed-and-sticky-positioning.md) | Selanjutnya ➡️
