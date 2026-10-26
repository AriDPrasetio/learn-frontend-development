# Apa Itu DOM, dan Bagaimana Cara Mengakses Elemen?

Mari kita pelajari tentang `DOM` dan mengapa hal ini sangat penting untuk pengembangan web. `DOM` adalah singkatan dari *Document Object Model*. Ini adalah sebuah antarmuka pemrograman (*programming interface*) yang memungkinkan kita berinteraksi dengan dokumen `HTML`.

Dengan `DOM`, Anda dapat menambahkan, memodifikasi, atau menghapus elemen pada halaman web. Anda bahkan dapat membuat situs web Anda interaktif dengan membuat elemen mendengarkan dan merespons peristiwa (*events*).

Di dalam `DOM`, sebuah dokumen `HTML` direpresentasikan sebagai sebuah pohon simpul (*tree of nodes*). Setiap *element node* mewakili sebuah elemen `HTML` dari dokumen `HTML`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <h1>What is the DOM?</h1>
    <h2>Let's learn about the DOM</h2>
  </body>
</html>
```

Ini adalah diagram yang merepresentasikan struktur dasar `DOM` dari contoh kita:

```md
Document
========

HTML
-----

- Head
  - Title
- Body
  - H1
  - H2
```

Tentu saja, hal ini bisa menjadi lebih terperinci dan kompleks berdasarkan struktur *markup* `HTML` dari suatu halaman web.

Dokumen `HTML` adalah *root node* (simpul akar) dalam hierarki `DOM`. Ia memiliki satu *child node* (simpul anak), yaitu elemen `html`. Ini adalah elemen akar dari dokumen `HTML`, karena semua simpul lainnya merupakan turunan darinya.

Elemen `html` memiliki dua anak: `head` dan `body`.

Elemen `head` berisi metadata tentang dokumen. Ia menyediakan informasi penting tentang halaman web.

Elemen `body` berisi konten yang terlihat dari halaman web.

Anda dapat mengakses elemen-elemen ini dengan `JavaScript`, bekerja dengannya di dalam `code` Anda, dan bahkan memodifikasinya secara dinamis. Itulah kekuatan dari `DOM` dan `Web API`.

Untuk mengakses elemen-elemen ini dalam `JavaScript`, Anda dapat menggunakan `method` `getElementById()` dan `querySelector()`. `Method-method` ini adalah `Web API` karena mereka menyediakan cara standar untuk berinteraksi dengan `DOM` menggunakan `JavaScript`.

Dengan `getElementById()`, Anda bisa mendapatkan sebuah `object` yang mewakili elemen `HTML` dengan `id` yang ditentukan. Ingat bahwa `id` harus unik di setiap dokumen `HTML`, sehingga `method` ini hanya akan mengembalikan satu `object` `Element`. Di sini Anda dapat melihat contohnya:

```javascript
const container = document.getElementById("container");
```

Baris `code` `JavaScript` ini mengambil sebuah elemen dengan nilai `id` berupa `"container"` dan menetapkan `object` tersebut ke sebuah konstanta `JavaScript`. Anda harus meneruskan `id` di dalam tanda kutip sebagai sebuah `argument`. Jika Anda mencatat `object` ini ke `console`, Anda akan melihatnya dalam *output*:

```html
<div id="container">
  <h1>Hello, World!</h1>
  <p>Welcome to learning about the DOM.</p>
</div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
console.log(container);
```

`querySelector()` memiliki cakupan yang lebih luas daripada `getElementById()`. Dengan `querySelector()`, Anda bisa mendapatkan elemen pertama dalam dokumen `HTML` yang cocok dengan pemilih CSS (*CSS selector*) yang diteruskan sebagai `argument`.

Dalam contoh ini, Anda akan mendapatkan elemen yang cocok dengan pemilih `section`:

```html
<section>
  <h2>Section Title</h2>
  <p>This is a section of the webpage.</p>
</section>
<script src="index.js"></script>
```

```javascript
const section = document.querySelector("section");
console.log(section);
```

Jika Anda ingin memilih elemen berdasarkan nama kelasnya menggunakan `querySelector()`, Anda perlu mengawali nama kelas tersebut dengan tanda titik (`.`). Berikut contohnya:

```html
<link rel="stylesheet" href="styles.css">
<div class="highlight">
  <p>This content is highlighted.</p>
</div>
<script src="index.js"></script>
```

```javascript
const highlighted = document.querySelector(".highlight");
console.log(highlighted);
```

Anda juga memiliki `method` lain untuk mencocokkan beberapa elemen sekaligus, seperti `getElementsByClassName()` dan `querySelectorAll()`. Anda akan mempelajari lebih lanjut tentang mereka pada pelajaran berikutnya.

Dengan memahami cara menggunakan `Web API` untuk memanipulasi `DOM` secara efisien, Anda dapat membuat aplikasi web yang andal dan interaktif.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah Document Object Model (DOM) itu?

- [ ] Sebuah bahasa pemrograman yang digunakan untuk pengembangan web.
- [ ] Kumpulan gaya CSS (*CSS styles*).
- [x] Representasi terstruktur pohon (*tree-structured representation*) dari sebuah dokumen HTML.
- [ ] Sebuah `method` untuk membuat halaman web dinamis.

### Pertanyaan 2

Manakah dari `method` berikut yang dapat digunakan untuk mengakses sebuah elemen berdasarkan `id`-nya dalam `JavaScript`?

- [x] `getElementById()`
- [ ] `getElementsByClassName()`
- [ ] `querySelectorAll()`
- [ ] `createElement()`

### Pertanyaan 3

Apa tujuan utama dari `method` `querySelector()`?

- [ ] Membuat sebuah elemen baru di dalam `DOM`.
- [x] Memilih sebuah elemen berdasarkan pemilih CSS (*CSS selector*).
- [ ] Memodifikasi konten dari elemen yang sudah ada.
- [ ] Menghapus elemen dari `DOM`.

---
[⬅️ Sebelumnya](1-what-is-an-api-and-what-are-web-apis.md) | [Selanjutnya ➡️](3-how-do-dom-nodes-exist-relative-to-each-other-in-the-dom-tree.md)
