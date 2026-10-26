# Bagaimana Cara Memanipulasi Gaya Menggunakan Element.style dan Element.classList?

Akan ada saat-saat di mana Anda perlu memanipulasi gaya (*styles*) dari elemen HTML di dalam file JavaScript Anda. Contohnya adalah ketika Anda perlu menyembunyikan atau menampilkan menu saat pengguna mengeklik sebuah tombol.

Dalam pelajaran ini, Anda akan mempelajari cara memanipulasi gaya menggunakan `property` `Element.style` dan `Element.classList`.

`Property` `Element.style` adalah `property` *read-only* yang mewakili gaya sebaris (*inline style*) dari sebuah elemen. Anda dapat menggunakan `property` ini untuk mendapatkan atau menetapkan gaya dari suatu elemen.

Berikut adalah contoh elemen paragraf dengan `id` `para`:

```html
<p id="para">This is a paragraph</p>
```

Anda dapat menggunakan `property` `style` untuk mengubah warna elemen paragraf menjadi merah:

```html
<p id="para">This is a paragraph</p>
<script src="index.js"></script>
```

```javascript
const paraEl = document.getElementById("para");
paraEl.style.color = "red";
```

`Property` `style` dapat digunakan untuk menyetel banyak `property` CSS, seperti `color`, `background-color`, `font-size`, `font-weight`, dan sebagainya.

Cara lain untuk memanipulasi gaya adalah dengan menggunakan `property` `Element.classList`. `Property` `classList` adalah `property` *read-only* yang dapat digunakan untuk menambahkan (*add*), menghapus (*remove*), atau mengalihkan (*toggle*) kelas-kelas CSS pada suatu elemen. Mari kita lihat beberapa contoh.

Dalam contoh ini, Anda akan menambahkan kelas bernama `highlight` ke elemen paragraf dengan `id` `para`. Di dalam CSS, kita akan mengatur kelas `highlight` untuk mengubah warna latar belakang elemen paragraf menjadi kuning. Di dalam JavaScript, kita akan menambahkan kelas `highlight` ke elemen paragraf menggunakan `method` `classList.add()`.

```html
<link rel="stylesheet" href="styles.css" />
<p id="para">This is a paragraph</p>
<script src="index.js"></script>
```

```css
.highlight {
  background-color: yellow;
}
```

```javascript
const paraEl = document.getElementById("para");
paraEl.classList.add("highlight");
```

Anda juga dapat menambahkan beberapa kelas ke sebuah elemen dengan meneruskannya sebagai argumen ke `method` `classList.add()`:

```javascript
classList.add("class1", "class2", "class3");
```

Jika Anda perlu menghapus kelas dari sebuah elemen, Anda dapat menggunakan `method` `classList.remove()` seperti ini:

```javascript
classList.remove("highlight");
```

Untuk mengalihkan (*toggle*) kelas pada sebuah elemen, Anda dapat menggunakan `method` `classList.toggle()`. Dalam contoh ini, kita memiliki elemen `button` dengan `id` `toggle-btn` dan elemen `nav` dengan `id` `menu`. Di dalam CSS, kita telah menambahkan beberapa gaya untuk menu dan sebuah kelas bernama `show` yang akan mengubah `property` `display` dari `.menu` menjadi `block`. Di dalam JavaScript, kita mengakses elemen menu dan elemen `button` menggunakan `method` `getElementById()`. Kemudian, kita menambahkan sebuah *event listener* ke elemen `button` yang akan mengalihkan kelas `show` pada elemen `.menu` saat tombol diklik:

```html
<link rel="stylesheet" href="styles.css" />
<button id="toggle-btn">Toggle Menu</button>

<nav id="menu" class="menu">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Products</li>
  </ul>
</nav>
<script src="index.js"></script>
```

```css
.menu {
  display: none;
  background-color: lightgray;
  width: 50%;
  padding: 10px;
}

.menu.show {
  display: block;
}
```

```javascript
const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));
```

Ketika seorang pengguna mengeklik tombol, kelas `show` akan ditambahkan ke elemen `.menu`, dan menu akan ditampilkan. Jika pengguna mengeklik tombol itu lagi, kelas `show` akan dihapus dari elemen `.menu`, dan menu akan disembunyikan.

Dengan menggunakan `method` dan `property` seperti `style`, `add()`, `remove()`, dan `toggle()`, Anda dapat dengan mudah memanipulasi gaya suatu elemen dengan JavaScript, menciptakan halaman web yang dinamis dan interaktif.

## Pertanyaan (Questions)

### Pertanyaan 1

`Property` mana yang akan Anda gunakan untuk secara langsung mengubah warna teks suatu elemen menggunakan JavaScript?

- [ ] `Element.classList`
- [x] `Element.style`
- [ ] `Element.innerHTML`
- [ ] `Element.getAttribute`

### Pertanyaan 2

Bagaimana cara Anda menambahkan beberapa kelas ke suatu elemen menggunakan `property` `Element.classList`?

- [ ] `classList.add("class1 class2 class3")`
- [x] `classList.add("class1", "class2", "class3")`
- [ ] `classList.append("class1", "class2", "class3")`
- [ ] `classList.insert("class1", "class2", "class3")`

### Pertanyaan 3

Apa yang akan terjadi jika Anda mengeklik tombol pada contoh yang disediakan sebanyak beberapa kali?

- [ ] Menu akan terlihat secara permanen.
- [ ] Menu akan tersembunyi secara permanen.
- [x] Menu akan beralih antara terlihat dan tersembunyi setiap kali tombol diklik.
- [ ] Menu akan menampilkan pesan kesalahan (*error*).

---

[⬅️ Sebelumnya](13-what-are-inline-event-handlers-and-why-is-it-best-practice-to-use-addeventlistener-instead.md) | [Selanjutnya ➡️](15-what-is-the-domcontentloaded-event-and-how-does-it-work.md)
