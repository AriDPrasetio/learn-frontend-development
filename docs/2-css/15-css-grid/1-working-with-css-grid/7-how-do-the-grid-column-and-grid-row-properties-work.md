# Bagaimana Cara Kerja Properti grid-column dan grid-row?

`Property` `grid-column` dan `grid-row` memungkinkan Anda menentukan penempatan horizontal dan vertikal dari `grid item` di dalam tata letak `grid`.

Dengan kata lain, keduanya memungkinkan Anda mengontrol di mana sebuah `grid item` dimulai dan diakhiri dengan mereferensikan garis kisi (*grid lines*). Garis-garis `grid` ini adalah batas yang memisahkan baris dan kolom yang telah Anda definisikan menggunakan `property` `grid-template-rows` dan `grid-template-columns`.

Mari kita lihat sintaks dari `grid-row` dan `grid-column`, serta sebuah contoh praktis.

Berikut adalah sintaks dari `property` `grid-row`:

```css
grid-row: <start-line> / <end-line>;
```

Dan dari `grid-column`:

```css
grid-column: <start-line> / <end-line>;
```

`<start-line>` adalah garis `grid` tempat `item` dimulai dan `<end-line>` adalah garis `grid` tempat `item` berakhir. Keduanya berbasis indeks 1 (*1-indexed*), artinya Anda mulai menghitungnya dari 1, bukan 0.

Ingat, garis `grid` untuk baris dihasilkan berdasarkan jumlah baris yang ditentukan dalam `property` `grid-template-rows`. Hal yang sama berlaku untuk kolom dengan `property` `grid-template-columns`.

Untuk contoh praktisnya, mari kita mulai dengan garis-garis yang dihasilkan oleh peramban (*browser*) saat Anda menggunakan `property` `grid-template-rows` dan `grid-template-columns` sekaligus.

Berikut adalah contoh `grid` dengan 4 kolom dan 3 baris:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>
  <div class="item9">9</div>
  <div class="item10">10</div>
  <div class="item11">11</div>
  <div class="item12">12</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  grid-template-rows: repeat(3, 100px); /* 3 equal rows */
  gap: 10px;
}

.grid > div {
  display: grid;
  place-items: center;
  background: crimson;
  color: white;
  font-size: 4rem;
}
```

Memeriksa `grid container` (kelas `grid`) menunjukkan bahwa setiap baris dan kolom dibatasi oleh dua garis – garis awal (*start line*) di awal baris atau kolom, dan garis akhir (*end line*) di akhir baris atau kolom.

Anda dapat menargetkan garis-garis ini untuk mulai menggunakan `property` `grid-row` dan `grid-column` guna menentukan di mana Anda harus menempatkan sebuah `item`.

Berikut adalah cara agar Anda dapat membuat `grid item` pertama menempati dua kolom pertama:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>
  <div class="item9">9</div>
  <div class="item10">10</div>
  <div class="item11">11</div>
  <div class="item12">12</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  grid-template-rows: repeat(3, 100px); /* 3 equal rows */
  gap: 10px;
}

.grid > div {
  display: grid;
  place-items: center;
  background: crimson;
  color: white;
  font-size: 4rem;
}

.item1 {
  grid-column: 1 / 3;
}
```

Dengan ini, Anda menyatakan bahwa `grid item` pertama harus dimulai pada kolom 1 dan berakhir tepat sebelum kolom 3.

`Item` pertama sekarang akan menempati dua kolom, dan `item` keempat didorong ke baris kedua. Keren!

Jika Anda juga ingin `item` pertama menempati dua baris, Anda dapat menentukan `grid-row` sebesar `1 / 3`:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>
  <div class="item9">9</div>
  <div class="item10">10</div>
  <div class="item11">11</div>
  <div class="item12">12</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  grid-template-rows: repeat(3, 100px); /* 3 equal rows */
  gap: 10px;
}

.grid > div {
  display: grid;
  place-items: center;
  background: crimson;
  color: white;
  font-size: 4rem;
}

.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

Anda juga dapat menggunakan kata kunci `span` untuk memberi tahu `grid item` berapa banyak baris dan kolom yang akan direntangkan (*span*). Sebagai contoh, `1 / 3` sama dengan `1 / span 2`:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>
  <div class="item9">9</div>
  <div class="item10">10</div>
  <div class="item11">11</div>
  <div class="item12">12</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  grid-template-rows: repeat(3, 100px); /* 3 equal rows */
  gap: 10px;
}

.grid > div {
  display: grid;
  place-items: center;
  background: crimson;
  color: white;
  font-size: 4rem;
}

.item1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

Anda dapat terus menerapkan teknik ini ke `item` mana pun di dalam `grid` dan menempatkannya di mana pun yang Anda inginkan.

Melanjutkan proses ini, berikut adalah cara kita membuat tata letak *masonry* dengan `item-item` tersebut.

Ini adalah contoh baru:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  grid-template-rows: repeat(4, 100px); /* 4 equal rows */
  gap: 10px;
}

.grid > div {
  display: grid;
  place-items: center;
  background: crimson;
  color: white;
  font-size: 4rem;
}

.item1 {
  grid-column: 1 / span 2;
}

.item4 {
  grid-column: 1 / span 3;
}

.item6 {
  grid-column: 1 / span 2;
}

.item7 {
  grid-column: 3 / span 2;
}
```

## Pertanyaan (Questions)

Apa yang ditentukan oleh `property` `grid-column` dan `grid-row` dalam tata letak `grid`?

- [ ] Ukuran dari `grid container`.
- [ ] Perataan seluruh `grid`.
- [x] Penempatan horizontal dan vertikal dari `grid item`.
- [ ] Ukuran dari `track` `grid`.

Apa yang menentukan jumlah garis `grid` (*grid lines*) yang dihasilkan untuk baris dan kolom dalam tata letak `grid`?

- [ ] `Property` `grid-gap`.
- [x] `Property` `grid-template-rows` dan `grid-template-columns`.
- [ ] `Property` `grid-auto-rows` dan `grid-auto-columns`.
- [ ] `Property` `grid-area`.

Bagaimana cara menentukan rentang penempatan `grid item` melintasi baris atau kolom dalam tata letak `grid`?

- [ ] Dengan menggunakan `property` `grid-template`.
- [ ] Dengan menentukan `auto` pada `grid-column` atau `grid-row`.
- [x] Dengan menggunakan kata kunci `span` atau rentang seperti `1 / 3`.
- [ ] Dengan mendefinisikan ukuran `grid-gap`.

---

[⬅️ Sebelumnya](6-what-is-the-minmax-function-and-how-does-it-work.md) | [Selanjutnya ➡️](8-how-can-you-position-items-on-the-grid-using-the-grid-template-areas-property.md)
