# Apa Anatomi Dasar dari Sebuah Aturan CSS (CSS Rule)?


`CSS` bertanggung jawab atas gaya (*style*) dari sebuah halaman web. Semua gaya ini terdiri dari berbagai aturan `CSS` (`CSS rule`).

Sebuah aturan `CSS` terdiri dari dua bagian utama: sebuah **`selector`** dan sebuah blok **`declaration`** (*declaration block*).

Mari kita lihat sintaks dasarnya:

```css
selector {
  property: value;
}
```

`Selector` adalah sebuah pola yang digunakan dalam `CSS` untuk mengidentifikasi dan menargetkan `element` `HTML` tertentu untuk penataan gaya (*styling*).

Contoh dari `selector` meliputi `type selector`, `class selector`, dan `ID selector`.

Tanda kurung kurawal (`{}`) yang disediakan dalam sintaks dasar dikenal sebagai blok deklarasi (`declaration block`). Blok deklarasi menerapkan serangkaian gaya untuk `selector` atau beberapa `selector` tertentu.

Di dalam blok deklarasi, Anda akan memiliki serangkaian deklarasi (`declaration`). Setiap deklarasi terdiri dari sebuah `property` dan sebuah `value`.

`Property` adalah pengidentifikasi `CSS` yang menentukan fitur mana yang sedang ditata gayanya. Contoh dari sebuah `property` adalah `property` `background-color`.

`Value` adalah pengaturan spesifik yang diterapkan pada `property` tersebut. Sebagai contoh, jika propertinya adalah `background-color`, nilainya bisa berupa `purple`, yang mengatur warna latar belakang menjadi ungu.

Setelah setiap nama `property`, Anda perlu menempatkan tanda titik dua (`:`), dan setelah setiap `value`, Anda harus menyertakan tanda titik koma (`;`).

Sekarang setelah Anda mengetahui sintaks untuk sebuah aturan `CSS`, mari kita lihat sebuah contoh. Aktifkan editor interaktif dan klik pada tab `styles.css` untuk melihat kode `CSS`.

```html
<link rel="stylesheet" href="styles.css">
<h1>Learning about CSS</h1>

<p>Example paragraph element</p>
<p>Another example paragraph element</p>
```

```css
p {
  color: blue;
}
```

Dalam aturan `CSS` ini, sebuah `type selector` menargetkan semua `element` paragraf di halaman tersebut.

Di dalam blok deklarasi, terdapat satu deklarasi (`declaration`).

Deklarasi tersebut terdiri dari `property` `color` dengan `value` yang diatur ke `blue`. Ini akan mengubah warna teks untuk semua `element` paragraf menjadi `blue`.

Jika Anda ingin menerapkan rangkaian gaya yang sama ke beberapa `selector`, Anda dapat membuat daftar pemilih (*selector list*) dengan setiap `selector` dipisahkan oleh tanda koma.

Berikut adalah contoh penataan gaya untuk beberapa `selector` (untuk berinteraksi dengan contoh ini, aktifkan editor interaktif):

```html
<link rel="stylesheet" href="styles.css">

<h1 id="title">Example heading</h1>
<h2 class="subheading">Example subheading</h2>
<p>This paragraph is not affected by the selector.</p>
```

```css
#title,
.subheading {
  color: navy;
}
```

Dalam daftar pemilih (*selector list*) ini, terdapat sebuah `id selector` yang menargetkan `element` `HTML` dengan nilai `id` berupa `title`. Semua `id selector` harus dimulai dengan simbol tanda pagar `#` (*hash*).

Kemudian terdapat tanda koma yang diikuti oleh `class selector` yang menargetkan semua `element` `HTML` dengan nilai `class` berupa `subheading`. Semua `class selector` harus dimulai dengan tanda titik (`.`).

Seluruh daftar pemilih (*selector list*) akan menerima gaya yang sama, dengan warna teks diatur ke `navy`.

## Pertanyaan (Questions)

Apa tujuan dari selector dalam sebuah aturan CSS?

- [ ] Untuk menerapkan gaya pada `element` `HTML`.
- [x] Untuk menentukan `element` `HTML` mana yang akan diterapkan aturan tersebut.
- [ ] Untuk mendefinisikan `property` dan `value` gaya tertentu.
- [ ] Untuk membuat `element` `HTML` baru.

Manakah dari aturan CSS berikut yang dengan benar mengubah warna teks semua elemen paragraf menjadi `blue`?

- [ ]
  ```css
  p {
    background-color: blue;
  }
  ```
- [x]
  ```css
  p {
    color: blue;
  }
  ```
- [ ]
  ```css
  .p {
    color: blue;
  }
  ```
- [ ]
  ```css
  #p {
    color: blue;
  }
  ```

Diberikan `HTML` berikut, aturan `CSS` manakah yang dengan benar mengatur warna teks `h1` dan `h2` menjadi `green`?

```html
<link rel="stylesheet" href="styles.css">

<h1 id="title">Example heading</h1>
<h2 class="subheading">Example subheading</h2>
<p>Paragraph element</p>
```

- [ ]
  ```css
  #title
  .subheading {
    color: green;
  }
  ```
- [x]
  ```css
  #title,
  .subheading {
    color: green;
  }
  ```
- [ ]
  ```css
  .title,
  #subheading {
    color: green;
  }
  ```
- [ ]
  ```css
  #title,
  #subheading {
    color: green;
  }
  ```

---
[⬅️ Sebelumnya](1-what-is-css.md) | [Selanjutnya ➡️](3-what-is-the-meta-viewport-element-used-for.md)
