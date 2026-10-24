# Apa Itu Margin Collapsing, dan Bagaimana Cara Kerjanya?

`Margin collapsing` adalah konsep mendasar dalam `CSS` yang sering kali membingungkan para pemula dalam pengembangan web.

Perilaku ini terjadi ketika `margin` vertikal dari `element-element` yang berdekatan saling tumpang tindih (*overlap*), menghasilkan satu `margin` tunggal yang nilainya sama dengan nilai terbesar dari keduanya.

Memahami `margin collapsing` sangat penting untuk mengontrol jarak (*spacing*) dan tata letak (*layout*) secara presisi dalam desain web. Jadi, mari kita bahas bagaimana cara kerja `margin collapsing` dan pelajari beberapa skenario umum di mana hal ini terjadi.

Dalam `CSS`, ketika dua `margin` vertikal saling bersentuhan, keduanya akan mengalami *collapse* (melebur). Ini berarti alih-alih saling dijumlahkan, `margin` yang lebih besar yang akan 'menang' dan menentukan jarak antar `element`. Perilaku ini hanya berlaku untuk `margin` vertikal (`top` dan `bottom`) dan tidak berlaku untuk `margin` horizontal (`left` dan `right`). Jadi, berikut adalah contoh untuk mengilustrasikan konsep ini:

```html
<style>
  .box1 {
    margin-bottom: 20px;
    background-color: lightblue;
  }
  .box2 {
    margin-top: 30px;
    background-color: lightgreen;
  }
</style>

<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
```

Dalam contoh ini, Anda mungkin memperkirakan total jarak antara `.box1` dan `.box2` adalah 50 piksel (20 piksel ditambah 30 piksel). Namun, karena terjadinya `margin collapsing`, jarak sebenarnya adalah 30 piksel, yaitu nilai yang lebih besar di antara kedua `margin` tersebut.

Seperti yang kita lihat pada contoh sebelumnya, `margin` dari `sibling elements` (elemen bersaudara) yang bersebelahan akan melebur (*collapse*). Ini adalah kasus `margin collapsing` yang paling mudah dipahami. Mari kita pelajari lebih banyak kasus di mana `margin collapsing` dapat terjadi.

`Margin` juga dapat melebur antara sebuah `parent element` dan `element` anak (*child*) pertama atau terakhirnya. Jika tidak ada `border`, `padding`, konten sebaris (*inline content*), atau *clearance* untuk memisahkan `margin` milik `parent` dari `margin` milik `child`, keduanya akan melebur (*collapse*).

```html
<style>
  .parent {
    margin-top: 40px;
    background-color: lightyellow;
  }
  .child {
    margin-top: 30px;
    background-color: lightpink;
  }
</style>

<div class="parent">
  <div class="child">Child element</div>
</div>
```

Dalam kasus ini, Anda mungkin memperkirakan `child` akan berjarak 70 piksel dari atas (40 piksel ditambah 30 piksel). Namun, kedua `margin` tersebut melebur dan `margin` yang lebih besar yaitu 40 piksel yang digunakan.

Jika sebuah `element` tidak memiliki konten, `padding`, atau `border`, `margin` atas dan bawahnya dapat melebur menjadi satu `margin` tunggal.

```html
<style>
  .empty-block {
    margin-top: 20px;
    margin-bottom: 10px;
    height: 0;
  }
  .next-block {
    background-color: lightgray;
  }
</style>

<div class="empty-block"></div>
<div class="next-block">Next block</div>
```

Dalam contoh ini, `margin` atas dan bawah dari `empty-block` melebur menjadi satu `margin` 20 piksel, yaitu nilai yang lebih besar dari keduanya.

Berikut adalah contoh pencegahan peleburan (*collapse*) menggunakan `padding` :

```html
<style>
  .parent {
    margin-top: 40px;
    padding-top: 1px;
    background-color: lightyellow;
  }
  .child {
    margin-top: 30px;
    background-color: lightpink;
  }
</style>

<div class="parent">
  <div class="child">Child element</div>
</div>
```

Dalam kasus ini, `padding` satu piksel pada `parent` mencegah `margin` melebur, menghasilkan total jarak sebesar 71 piksel dari bagian atas `parent` ke bagian atas konten `child`.

Memahami `margin collapsing` sangat penting untuk kontrol yang presisi atas tata letak (*layout*) dan spasi dalam `CSS`. Meskipun terkadang dapat menimbulkan hasil yang tidak terduga, ini adalah fitur yang dirancang untuk menciptakan jarak yang lebih konsisten dan menyenangkan secara estetika dalam dokumen. Dengan mengetahui kapan `margin collapsing` terjadi dan cara mencegahnya jika diperlukan, Anda dapat membuat tata letak yang lebih mudah diprediksi dan dipelihara dalam desain web Anda.

## Pertanyaan (Questions)

Pada arah mana `margin collapsing` terjadi?

- [ ] Hanya `margin` horizontal.
- [x] Hanya `margin` vertikal.
- [ ] Baik `margin` horizontal maupun vertikal.
- [ ] `Margin` diagonal.

Apa yang terjadi jika dua `element` yang bersebelahan memiliki nilai `margin` yang berbeda?

- [ ] Nilai `margin` saling dijumlahkan.
- [ ] Nilai `margin` yang lebih kecil yang digunakan.
- [x] Nilai `margin` yang lebih besar yang digunakan.
- [ ] Rata-rata dari kedua nilai `margin` yang digunakan.

Manakah dari hal berikut yang TIDAK akan mencegah `margin collapsing` antara `parent` dan `element` anak (*child*) pertamanya?

- [ ] Menambahkan `border` ke `parent`.
- [ ] Menetapkan `padding-top: 1px;` pada `parent`.
- [ ] Menggunakan `display: inline-block;` pada `child`.
- [x] Menetapkan `margin-top: 0;` pada `child`.

---

[⬅️ Sebelumnya](3-what-is-the-css-box-model.md) | [Selanjutnya ➡️](5-what-is-the-difference-between-content-box-and-border-box.md)
