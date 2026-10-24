# Apa Saja Contoh Pseudo-class Struktur Pohon (Tree-structural)?

`Tree-structural pseudo-class` (atau *pseudo-class* struktur pohon) memungkinkan Anda menargetkan dan menata gaya `element` berdasarkan posisinya di dalam pohon dokumen (*document tree*). Pohon dokumen mengacu pada struktur hierarkis `element-element` dalam sebuah dokumen `HTML`.

Berikut adalah daftar `tree-structural pseudo-class`:

- `:root`
- `:empty`
- `:nth-child(n)`
- `:nth-last-child(n)`
- `:first-child`
- `:last-child`
- `:only-child`
- `:nth-of-type`
- `:first-of-type`
- `:last-of-type`
- `:only-of-type`

Mari kita lihat lebih dekat masing-masing `tree-structural pseudo-class`, disertai dengan contoh.

## Pseudo-class :root

`Pseudo-class` `:root` biasanya merupakan `element` `html` tingkat paling dasar (*root*). Ini membantu Anda menargetkan level tertinggi dalam dokumen sehingga Anda dapat menerapkan gaya umum ke seluruh dokumen.

```html
<link rel="stylesheet" href="styles.css" />
<h1>Welcome to My Website</h1>
<p>This is a sample paragraph to demonstrate the :root pseudo-class.</p>
```

```css
:root {
  background: black;
  color: aliceblue;
}
```

`Pseudo-class` `:root` juga umumnya digunakan dalam menetapkan variabel `CSS` (*CSS variables*):

```css
:root {
  --main-font: 'Arial, sans-serif';
  --primary-color: blue; 
  --secondary-color: green; 
}
```

Dengan variabel `CSS`, Anda dapat menyimpan `value` dan menggunakannya kembali di dalam lembar gaya (*stylesheet*) Anda. Anda akan mempelajari lebih lanjut tentang ini nanti.

## Pseudo-class :empty

`Element` kosong, yaitu `element` yang tidak memiliki anak selain spasi kosong (*whitespace*), juga disertakan dalam pohon dokumen. Itulah sebabnya ada `pseudo-class` `:empty` untuk menargetkan `element` kosong. Misalnya, kode `HTML` ini memiliki dua item daftar yang kosong. Dengan `pseudo-class` `:empty`, Anda dapat menata gaya item daftar kosong secara berbeda:

```html
<link rel="stylesheet" href="styles.css" />
<ul>
  <li>Item 1</li>
  <li></li> <!-- This list is empty -->
  <li>Item 2</li>
  <li></li> <!-- Another empty list -->
  <li>Item 3</li>
</ul>
```

```css
:empty {
  background: black;
}
```

Hal paling praktis untuk dilakukan dengan item daftar yang kosong mungkin adalah tidak menampilkannya sama sekali:

```html
<link rel="stylesheet" href="styles.css" />
<ul>
  <li>Item 1</li>
  <li></li> <!-- This list is empty -->
  <li>Item 2</li>
  <li></li> <!-- Another empty list -->
  <li>Item 3</li>
</ul>
```

```css
:empty {
  display: none;
}
```

## Pseudo-class :nth-child(n) dan :nth-last-child(n)

`:nth-child(n)` memungkinkan Anda memilih `element` berdasarkan posisinya di dalam induk, sedangkan `:nth-last-child(n)` memungkinkan Anda memilih `element` dengan menghitung mundur dari akhir. Huruf `n` dapat berupa angka tertentu atau kata kunci seperti `odd` (ganjil) atau `even` (genap). Ini sangat berguna dalam menata gaya sel tabel berdasarkan posisinya: genap dan ganjil.

Berikut adalah contoh `HTML` dari tabel daftar harga buah. `CSS` menggunakan `pseudo-class` `:nth-child` untuk menargetkan sel-sel tabel berdasarkan posisi ganjil dan genap:

```html
<link rel="stylesheet" href="styles.css" />
<table>
  <tr>
    <th>Item</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Apple</td>
    <td>$1.00</td>
  </tr>
  <tr>
    <td>Banana</td>
    <td>$0.50</td>
  </tr>
  <tr>
    <td>Orange</td>
    <td>$0.80</td>
  </tr>
</table>
```

```css
th,
td {
  border: 1px solid lightgray;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: orangered;
}

tr:nth-child(odd) {
  background-color: lightgreen;
}
```

## Pseudo-class :first-child, :last-child, dan :only-child

`Pseudo-class` `:first-child`, `:last-child`, dan `:only-child` semuanya bekerja pada item di dalam `container` induk atau seluruh dokumen.

- `:first-child` memilih `element` pertama dalam sebuah `element` induk atau dokumen.
- `:last-child` memilih `element` terakhir dalam sebuah `element` induk atau dokumen.
- `:only-child` memilih satu-satunya `element` dalam sebuah `element` induk atau dokumen.

Menggunakan `pseudo-class` `:first-child` dan `:last-child` akan memilih `Item 1` dan `Item 3` dalam contoh ini:

```html
<link rel="stylesheet" href="styles.css" />
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
li:first-child {
  background-color: orangered;
}

li:last-child {
  background-color: lightgreen;
}
```

Jika Anda memiliki lebih banyak daftar tak berurutan (*unordered lists*) pada halaman, Anda harus lebih spesifik dengan pemilihannya.

Untuk menunjukkan kepada Anda cara kerja `pseudo-class` `:only-child`, berikut adalah contoh `HTML` dengan dua `element` `div` terpisah. Menggunakan `pseudo-class` `:only-child` memastikan hanya `element` `div` yang memiliki satu anak saja yang dipilih:

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <div>This is the only item in this container.</div>
</div>

<div class="container">
  <div>This is one of two items in this container.</div>
  <div>Here is the second item.</div>
</div>
```

```css
.container div:only-child {
  border: 2px solid crimson;
  padding: 10px;
  background-color: lightblue;
}
```

## Pseudo-class :first-of-type dan :last-of-type

`Pseudo-class` `:first-of-type` dan `:last-of-type` memilih kemunculan pertama dan terakhir dari tipe `element` tertentu di dalam induknya. Keduanya berguna untuk menerapkan gaya unik pada instans pertama atau terakhir dari tipe `element` tersebut di antara saudara-saudaranya (*siblings*).

Pada contoh di bawah, `:first-of-type` dan `:last-of-type` berlaku untuk `element` pertama dan `element` terakhir di dalam `element` `section`:

```html
<link rel="stylesheet" href="styles.css" />

<section>
  <h2>Introduction</h2>
  <p>This is the first paragraph in the first section</p>
  <p>This is the second paragraph in the first section</p>
</section>
<section>
  <h2>Details</h2>
  <p>This is the first paragraph in the second section.</p>
  <p>This is the second paragraph in the second section.</p>
</section>
```

```css
section p:first-of-type {
  background-color: lightgreen;
}

section p:last-of-type {
  background-color:lightblue;
}
```

## Pseudo-class :nth-of-type(n)

`:nth-of-type(n)` memungkinkan Anda memilih `element` tertentu di dalam induknya berdasarkan posisinya di antara saudara-saudara dari tipe yang sama. Misalnya, pada `HTML` di bawah ini, `:nth-of-type(2)` menargetkan `element` kedua dalam `container`:

```html
<link rel="stylesheet" href="styles.css" />

<div class="container">
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
```

```css
p:nth-of-type(2) {
  color: red;
  font-weight: bold;
}
```

## Pseudo-class :only-of-type

`:only-of-type` memilih sebuah `element` jika `element` tersebut adalah satu-satunya dari tipenya di dalam induknya. Ini berguna untuk memberi penekanan pada item tunggal atau memastikan bahwa item tersebut ditata secara berbeda ketika mereka bukan bagian dari sebuah grup.

Pada contoh di bawah, ada dua `element` `div` dengan salah satunya hanya memiliki satu `element`. `CSS` hanya berlaku untuk `container` pertama:

```html
<link rel="stylesheet" href="styles.css" />

<div class="container">
  <p>The only paragraph</p>
</div>

<div class="container">
  <p>The first paragraph</p>
  <p>The second paragraph</p>
</div>
```

```css
p:only-of-type {
  border: 4px solid green;
}
```

## Pertanyaan (Questions)

Apa perbedaan antara `pseudo-class` `:first-of-type` dan `:last-of-type`?

- [ ] `:first-of-type` menargetkan `element` pertama dari tipe tertentu di dalam induknya, sedangkan `:last-of-type` menargetkan `element` terakhir dari tipe yang berbeda.
- [ ] `:first-of-type` dan `:last-of-type` keduanya menargetkan kemunculan pertama dari sebuah `element` tetapi di bagian dokumen yang berbeda.
- [x] `:first-of-type` memilih kemunculan pertama dari tipe `element` tertentu di dalam induknya, sedangkan `:last-of-type` memilih kemunculan terakhir dari tipe `element` yang sama di dalam induknya.
- [ ] `:last-of-type` menerapkan gaya ke `element` pertama dan terakhir di dalam dokumen, sedangkan `:last-of-type` menerapkan gaya ke semua `element` dari tipe tertentu.

Apa perbedaan antara `pseudo-class` `:first-child` dan `:last-child`?

- [ ] `:first-child` menargetkan `element` pertama di dalam induknya, sedangkan `:last-child` menargetkan `element` terakhir di dalam induk yang berbeda.
- [x] `:first-child` menargetkan `element` pertama di dalam induknya, sedangkan `:last-child` menargetkan `element` terakhir di dalam induk yang sama.
- [ ] `:first-child` menargetkan `element` pertama dari tipe tertentu di dalam induknya, sedangkan `:last-child` menargetkan `element` terakhir dari tipe yang berbeda di dalam induknya.
- [ ] `:first-child` menargetkan `element` pertama dan terakhir di dalam induk, sedangkan `:last-child` menargetkan semua `element` lainnya.

`Pseudo-class` mana yang memungkinkan Anda menargetkan `element` yang tidak memiliki anak, termasuk yang hanya berisi spasi kosong (*whitespace*)?

- [x] `:empty`
- [ ] `:first-child`
- [ ] `:last-child`
- [ ] `:only-of-type`

---

[⬅️ Sebelumnya](4-what-are-examples-of-location-pseudo-classes.md) | [Selanjutnya ➡️](6-what-are-examples-of-functional-pseudo-classes.md)
