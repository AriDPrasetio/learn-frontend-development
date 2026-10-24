# Bagaimana Cara Memberi Jarak pada List Item Menggunakan margin atau line-height?

`Margin` dan `line-height` sangat penting untuk mengatur jarak spasi `list item` guna meningkatkan keterbacaan (*readability*) dan daya tarik visual.

Pertama, mari kita mulai memberi jarak pada `list item` menggunakan `margin`!

`Margin` dapat digunakan untuk membuat jarak di antara `list item` dengan menerapkan `margin properties` pada `element` `li`. Metode ini memungkinkan Anda mengontrol jarak di luar setiap `list item`, sehingga secara efektif memperbesar atau memperkecil celah (*gap*) di antara mereka.

Mari kita lihat contoh dari sebuah `unordered list` dengan tiga `list item`.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Secara *default*, `HTML` tidak akan menerapkan banyak jarak di antara `list item` tersebut.

Untuk menerapkan sejumlah jarak di bagian bawah setiap `list item`, Anda dapat menggunakan `property` `margin-bottom` seperti ini:

```html
<link rel="stylesheet" href="styles.css">

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
li {
  margin-bottom: 40px;
}
```

Dalam contoh ini, `margin` sebesar `40px` akan diterapkan pada bagian bawah setiap `list item` di dalam `unordered list`.

Cara lain untuk memberi jarak pada `list item` adalah dengan menggunakan `property` `line-height`.

`Property` `line-height` menyesuaikan jarak vertikal antara baris teks di dalam satu `list item`.

Meskipun fungsi utamanya memengaruhi jarak antara baris-baris teks di dalam setiap item, `property` ini juga dapat memengaruhi jarak keseluruhan antar `list item` secara tidak langsung jika item-item tersebut hanya memuat satu baris teks.

Jika `list item` memiliki beberapa baris teks, `line-height` akan memengaruhi jarak antara baris-baris tersebut, tetapi tidak menyesuaikan secara langsung jarak antara `list item` yang terpisah itu sendiri.

Untuk mengontrol jarak antara masing-masing `list item`, Anda sebaiknya menggunakan `properties` `margin` atau `padding`.

Menggunakan `unordered list` yang sama dari sebelumnya, berikut contoh penerapan `line-height` pada `list item`:

```html
<link rel="stylesheet" href="styles.css">

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
li {
  line-height: 2; 
}
```

Dalam contoh ini, `line-height: 2;` mengatur tinggi baris menjadi dua kali lipat dari ukuran font (`font size`), menciptakan lebih banyak ruang vertikal di dalam setiap `list item`.

## Pertanyaan (Questions)

Manakah `property` `CSS` yang akan Anda gunakan untuk membuat jarak antar `list item` dengan menyesuaikan ruang di luar setiap `element` `li`?

- [ ] `padding`
- [ ] `line-height`
- [x] `margin`
- [ ] `border`

Diberikan aturan `CSS` `li { margin-bottom: 15px; }`, apa pengaruh aturan ini terhadap `list item`?

- [ ] Menambahkan ruang sebesar `15px` di dalam setiap `list item`.
- [ ] Menambahkan ruang sebesar `15px` antara konten dan `border` dari setiap `list item`.
- [x] Menambahkan ruang sebesar `15px` di bawah setiap `list item`.
- [ ] Menambahkan ruang sebesar `15px` di atas setiap `list item`.

Apa yang dikontrol oleh `property` `line-height` dalam `CSS`?

- [ ] `width` dari konten.
- [ ] Ruang di dalam `border` dari suatu `element`.
- [x] Jarak vertikal antara baris-baris teks di dalam suatu `element`.
- [ ] Ruang di luar `border` dari suatu `element`.

---

[⬅️ Sebelumnya](../2-css-specificity-the-cascade-algorithm-and-inheritance/8-how-does-inheritance-work-with-css-at-a-high-level.md) | [Selanjutnya ➡️](2-how-do-the-different-list-style-properties-work.md)
