# Bagaimana Cara Menambahkan dan Menghapus Node dari DOM dengan appendChild() dan removeChild()?

Akan ada saat-saat di mana Anda perlu menambahkan atau menghapus node dari DOM dan ada beberapa Web API yang dapat Anda gunakan.

Dalam pelajaran ini, kita akan membahas `method` `appendChild()` dan `removeChild()`.

`Method` `appendChild()` digunakan untuk menambahkan node ke akhir daftar `children` dari suatu `parent node` yang ditentukan.

Berikut adalah sintaksis dasar untuk `method` `appendChild()`:

```javascript
parentNode.appendChild(newNode);
```

Mari kita lihat sebuah contoh untuk lebih memahami cara menggunakan `method` `appendChild()`.

Dalam contoh ini, kita memiliki elemen `unordered list` dengan `id` `desserts` di dalam HTML. Daftar ini berisi dua `list item` yaitu `Cake` dan `Pie`:

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
</ul>
```

Untuk mengakses daftar tersebut di dalam file JavaScript, kita dapat menggunakan `method` `getElementById()`:

```javascript
const dessertsList = document.getElementById("desserts");
```

Kita memiliki sebuah variabel bernama `dessertsList` yang menyimpan referensi ke elemen `ul` dengan `id` `desserts`.

Kemudian kita perlu membuat elemen `list item` baru menggunakan `method` `createElement()`:

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");
```

Kode berikut akan membuat elemen `list item` baru dan menyimpannya di dalam variabel bernama `listItem`.

Untuk menambahkan node tersebut ke akhir daftar `children` dari elemen `ul`, kita dapat menggunakan `method` `appendChild()`:

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

dessertsList.appendChild(listItem);
```

Jika Anda menjalankan kode ini, Anda akan melihat bahwa sebuah elemen `list item` baru ditambahkan ke akhir daftar `children` dari elemen `ul`.

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
</ul>
<script src="index.js"></script>
```

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

dessertsList.appendChild(listItem);
```

Masalahnya adalah bahwa elemen `list item` baru tersebut masih kosong. Untuk menambahkan konten teks ke elemen `list item` baru, Anda dapat menggunakan `property` `textContent`:

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
</ul>
<script src="index.js"></script>
```

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);
```

Sekarang daftar tersebut akan menampilkan `Cake`, `Pie`, dan `Cookies`.

Untuk menghapus sebuah node dari DOM, Anda dapat menggunakan `method` `removeChild()`.

Berikut adalah sintaksis dasar untuk `method` `removeChild()`:

```javascript
parentNode.removeChild(childNode);
```

Mari kita lihat sebuah contoh di mana kita ingin menghapus elemen paragraf terakhir dari elemen `section` ini:

```html
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>
```

Kita dapat mengakses elemen `section` di dalam file JavaScript menggunakan `method` `getElementById()`:

```javascript
const sectionEl = document.getElementById("example-section");
```

Setelah kita memiliki referensi ke elemen `section`, kita kemudian dapat mengakses paragraf terakhir tersebut menggunakan `method` `querySelector()`:

```javascript
const sectionEl = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type");
```

Kita menggunakan pseudo-class `:last-of-type` untuk memilih elemen paragraf terakhir di dalam elemen `section`.

Sekarang setelah kita memiliki `parent node` dan `child node`, kita dapat menghapus elemen paragraf terakhir dari elemen `section` menggunakan `method` `removeChild()`:

```html
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>
<script src="index.js"></script>
```

```javascript
const sectionEl = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type");

sectionEl.removeChild(lastParagraph);
```

Jadi, kapan Anda mungkin ingin menambahkan atau menghapus node dari DOM?

Jika Anda bekerja dengan konten dinamis, Anda mungkin perlu menambahkan atau menghapus node dari DOM. Contoh di dunia nyata mencakup keranjang belanja (*shopping cart*), daftar tugas (*to-do list*), dan umpan media sosial (*social media feeds*).

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang dilakukan oleh `method` `appendChild()`?

- [ ] Menghapus sebuah node dari DOM.
- [x] Menambahkan sebuah node ke akhir daftar `children` dari suatu `parent node` yang ditentukan.
- [ ] Mengganti node yang ada dengan node baru.
- [ ] Memindahkan sebuah node ke lokasi yang berbeda di dalam DOM.

### Pertanyaan 2

Bagaimana cara Anda menambahkan konten teks ke elemen `list item` yang baru dibuat?

- [ ] Menggunakan `method` `setText()` pada node baru.
- [ ] Menetapkan `string` secara langsung ke `property` `innerHTML` dari node baru.
- [x] Menetapkan `property` `textContent` dari node baru ke `string` yang diinginkan.
- [ ] Menggunakan `method` `appendChild()` dengan sebuah `text node` sebagai argumen.

### Pertanyaan 3

Bagaimana cara menghapus elemen paragraf terakhir dari sebuah `section` menggunakan JavaScript?

- [x] Menggunakan `removeChild()` pada elemen `section` dengan referensi ke elemen paragraf terakhir.
- [ ] Menggunakan `deleteChild()` pada elemen `section` dengan referensi ke elemen paragraf terakhir.
- [ ] Menggunakan `detachChild()` pada elemen `section` dengan referensi ke elemen paragraf terakhir.
- [ ] Menggunakan `removeNode()` pada elemen `section` dengan referensi ke elemen paragraf terakhir.

---

[⬅️ Sebelumnya](6-what-is-the-difference-between-innertext-textcontent-and-innerhtml.md) | [Selanjutnya ➡️](8-how-do-the-navigator-window-and-document-work.md)
