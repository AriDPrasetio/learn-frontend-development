# Apa Saja Berbagai Jenis CSS Combinator?


## CSS Combinator

`CSS combinator` digunakan untuk mendefinisikan hubungan antara beberapa `selector` dalam `CSS`. Mereka membantu memilih `element` berdasarkan hubungannya dengan `element` lain, yang memungkinkan penataan gaya (*styling*) yang lebih presisi dan efisien.

Kita akan membahas beberapa `CSS combinator` utama dan kasus penggunaannya, dimulai dengan *descendant combinator*.

### Descendant Combinator

*Descendant combinator* digunakan untuk menargetkan `element` yang cocok dengan `selector` kedua jika `element` tersebut bersarang (*nested*) di dalam `element` leluhur (*ancestor*) yang cocok dengan `selector` pertama. Leluhur dapat berupa induk (*parent*), kakek-nenek (*grandparent*), atau leluhur mana pun yang berada lebih tinggi di pohon dokumen (*document tree*).

Untuk lebih memahami cara kerjanya, mari kita lihat sebuah contoh:

```html
<link rel="stylesheet" href="styles.css">

<figure>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Relaxing Cat">
  <figcaption>A relaxing cat with a border</figcaption>
</figure>
```

```css
figure img {
  border: 4px solid red;
}
```

Pada contoh di atas, kita menggunakan *descendant combinator* untuk memilih semua `element` gambar di dalam `element` `figure` dan menerapkan garis tepi merah tebal (`solid red border`) pada keempat sisinya.

Perhatikan bahwa spasi (` `) digunakan di antara `selector` induk dan anak.

Dalam kasus ini, `figure` adalah induk (*parent*) dan `img` adalah anak (*child*).

Jika Anda memiliki beberapa gambar di dalam sebuah `element` `figure`, menggunakan *descendant combinator* akan menjadi cara yang baik untuk menerapkan garis tepi hitam tebal di sekitar masing-masing gambar tersebut.

### Child Combinator

Jenis *combinator* lainnya adalah *child combinator*.

*Child combinator* (`>`) dalam `CSS` digunakan untuk memilih `element` yang merupakan anak langsung (*direct children*) dari `element` induk yang ditentukan.

*Combinator* ini hanya menargetkan `element` dengan induk tertentu, membuat aturan `CSS` Anda lebih presisi dan mencegah penataan gaya yang tidak disengaja pada `element` yang bersarang lebih dalam.

Mari kita lihat contoh `HTML` berikut:

```html
<div class="container">
  <p>First</p>
  <div>
    <p>Second</p>
  </div>
  <div>
    <p>Third</p>
  </div>
</div>
```

Dalam struktur `HTML` di atas, `class` `container` diterapkan pada sebuah `element` `div`.

Di dalam wadah (*container*) ini, terdapat sebuah `element` `p` anak langsung ("First"), diikuti oleh dua `element` `div` tambahan, masing-masing berisi sebuah `element` `p` ("Second" dan "Third").

`Element` `p` pertama adalah anak langsung dari `element` `.container`, sedangkan dua `element` `p` lainnya bersarang di dalam `element` `div` lain, menjadikannya keturunan (*descendant*) yang lebih dalam.

Untuk menerapkan gaya hanya pada anak langsung dari `class` `container`, Anda dapat menggunakan *child combinator* seperti ini:

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <p>First</p>
  <div>
    <p>Second</p>
  </div>
  <div>
    <p>Third</p>
  </div>
</div>
```

```css
.container > p {
  color: blue;
}
```

Pada contoh di atas, kita hanya menargetkan anak langsung dari `class` `container`. Ini akan memberi anak langsung tersebut warna teks `blue`.

Karena dua `element` paragraf lainnya bersarang di dalam `element` `div`, mereka tidak dianggap sebagai anak langsung dari `class` `container` dan tidak akan mendapatkan warna teks biru.

### Next-Sibling Combinator

*Combinator* umum lainnya adalah *next-sibling combinator*.

*Next-sibling combinator* (`+`) dalam `CSS` memilih `element` yang langsung mengikuti `element` saudara kandung (*sibling*) yang ditentukan. *Combinator* ini berguna saat Anda ingin menerapkan gaya pada `element` yang langsung mengikuti `element` lain, memungkinkan penataan gaya terarah berdasarkan posisi `element` relatif terhadap saudaranya.

Mari kita lihat contoh `HTML` berikut:

```html
<figure>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />
  <figcaption>A cute orange cat lying on its back.</figcaption>
</figure>
```

Di sini, kita memiliki sebuah `element` `figure` yang berisi sebuah `element` `img` yang diikuti oleh sebuah `element` `figcaption`. `Element` `figcaption` adalah saudara kandung langsung (*immediate sibling*) dari `element` `img`.

Jika Anda ingin menerapkan garis tepi hitam di sekitar `element` `figcaption`, Anda dapat menggunakan *next-sibling combinator* seperti ini:

```html
<link rel="stylesheet" href="styles.css">

<figure>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />
  <figcaption>A cute orange cat lying on its back.</figcaption>
</figure>
```

```css
img + figcaption {
  border: 4px solid black;
}
```

Pada contoh ini, *next-sibling combinator* (`+`) memilih `element` `figcaption` yang langsung mengikuti `element` `img`. Aturan `CSS` yang diterapkan menambahkan garis tepi `4px solid black` di sekitar `figcaption`.

### Subsequent-Sibling Combinator

*Combinator* umum lainnya adalah *subsequent-sibling combinator*.

*Subsequent-sibling combinator* (`~`) dalam `CSS` memilih semua saudara kandung (*sibling*) dari `element` tertentu yang berada setelahnya.

Tidak seperti *next-sibling combinator*, yang hanya menargetkan saudara kandung yang langsung mengikutinya, *subsequent-sibling combinator* (`~`) dapat menargetkan saudara kandung mana pun yang mengikuti `element` yang ditentukan, memberikan fleksibilitas yang lebih besar dalam penataan gaya.

Mari kita lihat contoh `HTML` berikut:

```html
<div class="container">
  <h2>Subheading</h2>
  <p>First paragraph.</p>
  <p>Second paragraph.</p>
  <p>Third paragraph.</p>
  <p>Another paragraph element</p>
</div>
```

Dalam struktur `HTML` ini, kita memiliki sebuah `element` `h2` yang diikuti oleh empat `element` paragraf. `Element-element` paragraf tersebut adalah saudara kandung dari `element` `h2`.

Jika Anda ingin menata gaya semua `element` paragraf yang berada setelah `element` `h2`, Anda dapat menggunakan *subsequent-sibling combinator* seperti ini:

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <h2>Subheading</h2>
  <p>First paragraph.</p>
  <p>Second paragraph.</p>
  <p>Third paragraph.</p>
  <p>Another paragraph element</p>
</div>
```

```css
h2 ~ p {
  color: green;
}
```

Pada contoh ini, semua `element` paragraf yang mengikuti `element` `h2` akan memiliki warna teks hijau.

*Subsequent-sibling combinator* (`~`) menargetkan semua saudara kandung paragraf yang muncul setelah `element` `h2`, terlepas dari apakah mereka adalah saudara kandung langsung atau tidak.

## Mengapa CSS Combinator Penting

Kesimpulannya, memahami dan menggunakan berbagai `CSS combinator` memungkinkan Anda menerapkan gaya yang presisi pada `element` `HTML` Anda, meningkatkan kontrol dan fleksibilitas desain Anda.

Dengan menguasai `selector-selector` ini, Anda dapat membuat aturan penataan gaya yang lebih canggih dan terarah yang meningkatkan tampilan dan fungsionalitas halaman web Anda.

## Pertanyaan (Questions)

Aturan CSS manakah yang akan menata gaya semua element `span` yang berada di dalam element `div`, terlepas dari seberapa dalam mereka bersarang?

- [ ]
  ```css
  div > span {
    color: red;
  }
  ```
- [ ]
  ```css
  div + span {
    color: red;
  }
  ```
- [ ]
  ```css
  div ~ span {
    color: red;
  }
  ```
- [x]
  ```css
  div span {
    color: red;
  }
  ```

Aturan CSS manakah yang hanya akan menata gaya element `li` yang merupakan anak langsung dari element `ul`?

- [x]
  ```css
  ul > li {
    font-weight: bold;
  }
  ```
- [ ]
  ```css
  ul li {
    font-weight: bold;
  }
  ```
- [ ]
  ```css
  ul + li {
    font-weight: bold;
  }
  ```
- [ ]
  ```css
  ul ~ li {
    font-weight: bold;
  }
  ```

Aturan CSS manakah yang akan menata gaya element `p` pertama yang langsung mengikuti element `h1` mana pun?

- [ ]
  ```css
  h1 > p {
    margin-top: 0;
  }
  ```
- [x]
  ```css
  h1 + p {
    margin-top: 0;
  }
  ```
- [ ]
  ```css
  h1 ~ p {
    margin-top: 0;
  }
  ```
- [ ]
  ```css
  h1 p {
    margin-top: 0;
  }
  ```

---
[⬅️ Sebelumnya](6-how-do-width-and-height-work.md) | [Selanjutnya ➡️](8-what-is-the-difference-between-inline-and-block-level-elements-in-css.md)
