# Bagaimana Cara Membuat Simpul Baru Menggunakan innerHTML dan createElement()?

Mari kita pelajari bagaimana Anda dapat membuat simpul (*nodes*) dengan `innerHTML` dan `createElement()`.

Kita akan mulai dengan `innerHTML`.

`innerHTML` adalah sebuah `property` dari `object` `Element` yang dapat Anda gunakan untuk menetapkan *markup* `HTML`-nya. Dengan `innerHTML`, Anda dapat menetapkan struktur `HTML` dari sebuah elemen yang sudah ada menggunakan sebuah `string`, membuat semua simpul yang diperlukan.

Ini adalah sebuah contoh. Kita memiliki sebuah `div` kosong dan kita akan menambahkan beberapa elemen ke dalamnya menggunakan `property` `innerHTML`:

```html
<div id="container">
  <!-- Tambahkan elemen baru di sini -->
</div>
```

Pertama, kita perlu memilih elemen tersebut berdasarkan `id`-nya:

```javascript
const container = document.getElementById("container");
```

Kemudian, kita menetapkan `property` `innerHTML` dari wadah tersebut ke sebuah `string`. `String` ini harus memiliki semua *markup* yang diperlukan untuk mewakili simpul dan struktur yang ingin Anda buat. Anda dapat membayangkannya seperti menulis `HTML` di dalam sebuah `string`:

```html
<div id="container"></div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>";
```

Kita akan mengatur `innerHTML` dari elemen ini ke sebuah daftar tak berurutan dari bahan-bahan pizza (*cheese* dan *tomato*).

Anda juga dapat menulis `string` tersebut dalam beberapa baris jika itu membuat *markup* lebih mudah dipahami. Yang terpenting adalah *markup* tersebut secara akurat mewakili struktur `HTML` yang ingin Anda buat.

Setelah menjalankan `code` ini, Anda akan melihat struktur `HTML` berikut jika Anda memeriksa *markup* Anda:

```html
<div id="container">
  <ul>
    <li>Cheese</li>
    <li>Tomato</li>
  </ul>
</div>
```

Simpul-simpul baru dibuat dan ditambahkan secara dinamis ke dalam `DOM` setelah `string` tersebut diuraikan (*parsed*).

`innerHTML` bisa sangat membantu untuk skenario tertentu. Namun, ia memiliki beberapa risiko keamanan yang harus Anda ketahui. Anda sebaiknya tidak menggunakannya jika Anda tidak memiliki kendali penuh atas `string` tersebut.

Sebagai contoh, jika `string` tersebut dimasukkan oleh pengguna, Anda tidak boleh menggunakan `innerHTML` karena pengguna mungkin menyisipkan konten berbahaya ke dalam situs web Anda (seperti serangan *Cross-Site Scripting* atau XSS). Karena alasan ini, biasanya disarankan untuk menggunakan `textContent` sebagai gantinya untuk menyisipkan teks biasa (*plain text*).

Cara lain untuk membuat simpul baru adalah dengan menggunakan `method` `createElement()`. Dengan `method` baru ini, Anda dapat membuat elemen baru dengan menentukan nama tag-nya.

Sebagai contoh, jika Anda ingin membuat sebuah elemen gambar, Anda akan meneruskan tag `"img"` sebagai sebuah `string` saat memanggil `method` ini:

```javascript
document.createElement("img");
```

Dan Anda dapat menetapkan `object` baru ini ke sebuah `variable`:

```javascript
const img = document.createElement("img");
```

`Method` `createElement()` mengembalikan sebuah `object` `HTMLElement` baru jika dokumen tersebut adalah `HTMLDocument`. Jika tidak, ia mengembalikan sebuah `object` `Element`.

Setelah Anda menyiapkan elemen baru ini, Anda dapat menambahkannya ke `DOM` sebagai anak (*child*) dari elemen lain yang sudah ada menggunakan `method` `appendChild()`, atau Anda dapat menyisipkannya pada lokasi tertentu menggunakan `method` lainnya. Pilihlah yang paling sesuai dengan kebutuhan Anda:

```html
<div id="container"></div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
const newHeading = document.createElement("h1");
container.appendChild(newHeading);
```

Membuat simpul dengan `innerHTML` dan `createElement()` memungkinkan Anda memanipulasi struktur dan konten situs web Anda secara dinamis. Dengan menggabungkan teknik-teknik ini, Anda dapat membangun aplikasi web yang interaktif.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan utama dari `property` `innerHTML`?

- [ ] Memperbarui elemen HTML.
- [ ] Menetapkan konten teks dari sebuah elemen.
- [ ] Memodifikasi atribut dari sebuah elemen.
- [x] Menyuntikkan konten HTML secara dinamis ke dalam sebuah elemen.

### Pertanyaan 2

Manakah dari `method` berikut yang digunakan untuk membuat sebuah elemen HTML baru dalam `JavaScript`?

- [x] `createElement()`
- [ ] `createNode()`
- [ ] `appendChild()`
- [ ] `getElementById()`

### Pertanyaan 3

Apakah risiko utama menggunakan `innerHTML` ketika Anda tidak memiliki kendali penuh atas `string` tersebut?

- [ ] Menyebabkan perulangan tak terbatas (*infinite loop*).
- [x] Penyisipan konten berbahaya (*insertion of malicious content*).
- [ ] Masalah performa.
- [ ] Masalah aksesibilitas.

---
[⬅️ Sebelumnya](4-what-is-the-queryselectorall-method-and-when-should-you-use-it.md) | [Selanjutnya ➡️](6-what-is-the-difference-between-innertext-textcontent-and-innerhtml.md)
