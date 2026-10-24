# Apa Saja Contoh Pseudo-class Tindakan Pengguna (User Action) pada Elemen?

Umpan balik pengguna (*user feedback*) adalah elemen krusial dalam desain web. Sebagai contoh, penting bagi pengguna untuk menerima petunjuk visual saat mereka berinteraksi dengan `element` di situs web, seperti mengarahkan kursor ke tombol atau mengklik tautan. Umpan balik ini membantu pengguna memahami status (*state*) dari `element` interaktif, seperti menunjukkan apakah sebuah tautan telah dikunjungi atau belum.

## Memahami User Action Pseudo-class

`User action pseudo-class` dalam `CSS` adalah kata kunci khusus yang memungkinkan Anda memberikan umpan balik semacam ini tanpa memerlukan `JavaScript` atau bahasa pemrograman lainnya.

`Pseudo-class` ini mencakup `:hover`, `:active`, `:focus`, dan `:visited`, antara lain. Kumpulan `pseudo-class` ini memungkinkan Anda mengubah tampilan `element` berdasarkan interaksi pengguna, sehingga meningkatkan pengalaman pengguna (*user experience*) secara keseluruhan.

Mari kita pelajari beberapa `user action pseudo-class` yang kita miliki dan melihat bagaimana cara kerjanya.

## User Action Pseudo-class yang Umum

### `:active`

`Pseudo-class` `:active` menerapkan `styles` ketika sebuah `element` diaktifkan oleh pengguna. Sebagai contoh, ketika pengguna mengklik tombol atau tautan, ini memberikan umpan balik visual langsung, menunjukkan kepada pengguna bahwa tindakan mereka sedang diproses.

```html
<link rel="stylesheet" href="styles.css" />
<a href="#">Example link</a>
```

```css
a:active {
  color: crimson;
}
```

### `:hover`

`Pseudo-class` `:hover` dipicu ketika pengguna mengarahkan kursor ke atas `element` dengan mouse atau perangkat penunjuk lainnya. Pengembang sering menggunakannya untuk membuat umpan balik visual untuk tombol, tautan, atau `element` apa pun yang harus merespons perhatian pengguna. Berikut adalah tombol yang akan diarahkan kursornya oleh pengguna sebelum diklik:

```html
<link rel="stylesheet" href="styles.css" />
<button class="btn">Hover Over Me</button>
```

```css
.btn:hover {
  background-color: darkgreen;
  color: white;
  cursor: pointer;
}
```

### `:focus`

`Pseudo-class` `:focus` menerapkan `styles` ketika sebuah `element` mendapatkan fokus, biasanya melalui navigasi keyboard atau ketika pengguna mengklik ke dalam *input* formulir (`form input`). Ini bukan hanya untuk umpan balik tetapi juga sangat penting untuk aksesibilitas (*accessibility*). Ini memastikan bahwa pengguna yang sangat mengandalkan keyboard dapat dengan mudah mengidentifikasi `element` mana yang sedang mereka ajak berinteraksi.

Berikut adalah contoh bidang *input* yang mendapatkan fokus saat diklik atau dinavigasikan melalui keyboard:

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:focus {
  outline: 2px solid darkgreen;
  border-radius: 4px;
}
```

### `:visited`

`Pseudo-class` `:visited` menargetkan tautan yang telah dikunjungi pengguna. Ini dapat berguna untuk membantu pengguna membedakan antara halaman yang telah mereka kunjungi dan halaman yang belum dikunjungi. Berikut adalah contoh mengubah warna teks *anchor* menjadi `cyan` ketika tautan tersebut telah dikunjungi:

```html
<link rel="stylesheet" href="styles.css" />
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
```

```css
a:visited {
  color: cyan;
}
```

### `:checked`

`Pseudo-class` `:checked` dalam `CSS` memungkinkan Anda menata gaya `element` formulir seperti kotak centang (*checkboxes*) dan tombol radio (*radio buttons*) saat `element` tersebut dipilih (*checked*). `Pseudo-class` ini berguna untuk menyesuaikan tampilan `element-element` tersebut guna meningkatkan pengalaman pengguna, meskipun browser telah menyediakan gaya *default* untuknya.

Berikut adalah contoh dengan kotak centang untuk menyetujui ketentuan pada sebuah situs web.

**CATATAN**: Beberapa `CSS` dalam contoh ini menggunakan `property` yang belum dibahas. Ini hanya untuk memberi Anda gambaran tentang cara membuat kotak centang kustom. Anda akan mempelajari bagaimana semua ini bekerja pada pelajaran dan lokakarya mendatang.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
  Agree <input class="checkbox" type="checkbox" />
  </label>
</form>
```

```css
.checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;
  vertical-align: middle; 
}

.checkbox:hover {
  border-color: #888;
}

.checkbox:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

.checkbox:checked::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:focus {
  outline: 2px solid #90caf9;
  outline-offset: 2px;
}
```

Dalam contoh ini, kita menggunakan `property` `appearance` yang diatur ke `none` untuk menghapus gaya *default* yang diterapkan oleh browser pada *input* kotak centang. Ketika pengguna mencentang kotak tersebut, kotak akan memiliki warna latar belakang hijau (`green`).

## Action Pseudo-class Lainnya

Contoh lain dari `action pseudo-class` adalah:

- `:focus-within`: untuk menerapkan `styles` ke sebuah `element` saat `element` itu sendiri atau salah satu keturunannya memiliki fokus.
- `:enabled`: untuk menargetkan tombol formulir atau `element` lain yang saat ini sedang aktif (*enabled*).
- `:disabled`: untuk menargetkan tombol formulir atau `element` lain yang dinonaktifkan (*disabled*).
- `:target`: untuk menerapkan `styles` ke sebuah `element` yang merupakan target dari sebuah fragmen `URL` (bagian dari `URL` setelah simbol `#`).

## Pertanyaan (Questions)

Apa yang dimungkinkan oleh `user action pseudo-class` untuk Anda lakukan?

- [ ] Memungkinkan animasi dan transisi.
- [ ] Memungkinkan Anda memodifikasi struktur DOM secara dinamis.
- [x] Memungkinkan Anda memberikan umpan balik kepada pengguna tanpa bergantung pada JavaScript.
- [ ] Memungkinkan Anda menata gaya `element` terakhir dalam sebuah daftar.

Apa yang dilakukan oleh `pseudo-class` `:checked` dalam `CSS`?

- [ ] Memilih sebuah `element` ketika dinonaktifkan.
- [ ] Memilih sebuah `element` ketika sedang diarahkan kursor (*hover*).
- [x] Menata gaya `element` seperti kotak centang (*checkboxes*) atau tombol radio (*radio buttons*) yang dicentang.
- [ ] Menata gaya sebuah `element` ketika mendapatkan fokus.

Apa yang dilakukan oleh `pseudo-class` `:focus`?

- [ ] Memilih sebuah `element` ketika diarahkan kursor oleh mouse.
- [x] Menerapkan `styles` ketika sebuah `element` mendapatkan fokus, biasanya melalui navigasi keyboard atau klik.
- [ ] Memilih sebuah `element` setelah formulir dikirimkan.
- [ ] Menerapkan `styles` ke sebuah `element` ketika dinonaktifkan.

---

[⬅️ Sebelumnya](1-what-are-pseudo-classes.md) | [Selanjutnya ➡️](3-what-are-examples-of-input-pseudo-classes.md)
