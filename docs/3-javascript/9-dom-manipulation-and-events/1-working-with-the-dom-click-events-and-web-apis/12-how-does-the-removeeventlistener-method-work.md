# Bagaimana Cara Kerja Method removeEventListener?

Dalam pelajaran sebelumnya, Anda telah mempelajari cara bekerja dengan *event* `"click"` dan `"input"` menggunakan `method` `addEventListener()`. Dalam pelajaran ini, Anda akan mempelajari cara menghapus *event listener* menggunakan `method` `removeEventListener()`.

`Method` `removeEventListener()` digunakan untuk menghapus *event listener* yang sebelumnya telah ditambahkan ke sebuah elemen menggunakan `method` `addEventListener()`. Hal ini berguna ketika Anda ingin berhenti mendengarkan *event* tertentu pada sebuah elemen.

Berikut adalah sintaksis dasar untuk `method` `removeEventListener()`:

```javascript
element.removeEventListener("event", listener);
```

Sama seperti `method` `addEventListener()`, `method` `removeEventListener()` membutuhkan dua argumen: *event* yang ingin Anda hapus dan fungsi `listener` yang sebelumnya ditambahkan.

Ada juga argumen ketiga opsional tambahan yang dapat diteruskan ke `method` `removeEventListener()`. Argumen ini dapat berupa `options` atau `useCapture`.

Argumen `options` adalah sebuah objek yang menentukan opsi untuk *event listener*, seperti apakah *event listener* harus bersifat `passive` atau `once`.

Argumen `useCapture` adalah nilai boolean yang menentukan apakah *event* harus ditangkap selama fase perambatan *event* (*event propagation phase*).

Sebagian besar waktu, Anda hanya perlu meneruskan argumen `event` dan `listener` ke `method` `removeEventListener()`.

Mari kita lihat sebuah contoh untuk lebih memahami cara kerja `method` `removeEventListener()`:

Berikut adalah contoh dengan beberapa kode HTML:

```html
<link rel="stylesheet" href="styles.css" />
<h1>Event Listener examples</h1>
<button id="btn">Change background color</button>
```

```css
button {
  background: linear-gradient(135deg, #4da3ff, #007bff);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}
```

Jika kita ingin mengubah-ubah (*toggle*) warna latar belakang antara abu-abu dan biru, maka kita dapat menggunakan *event listener* untuk hal tersebut.

Pertama-tama kita perlu mengakses elemen `button` bersama dengan elemen `body`:

```javascript
const bodyEl = document.querySelector("body");
const btn = document.getElementById("btn");
```

Kemudian kita perlu membuat fungsi yang bertanggung jawab untuk beralih antara warna abu-abu dan biru:

```javascript
let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}
```

Kita menggunakan variabel boolean `isBgColorGrey` untuk melacak warna latar belakang saat ini. Jika warna latar belakang abu-abu, kita mengubahnya menjadi biru, dan sebaliknya.

Kemudian kita perlu menambahkan sebuah *event listener* ke elemen `button` untuk memanggil fungsi `toggleBgColor` saat tombol diklik:

```javascript
btn.addEventListener("click", toggleBgColor);
```

Berikut adalah contoh lengkapnya sejauh ini:

```html
<link rel="stylesheet" href="styles.css" />
<h1>Event Listener examples</h1>
<button id="btn">Change background color</button>
<script src="index.js"></script>
```

```css
button {
  background: linear-gradient(135deg, #4da3ff, #007bff);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

button:hover {
  background: linear-gradient(135deg, #66b3ff, #3399ff);
  box-shadow: 0 6px 14px rgba(0, 123, 255, 0.3);
  transform: translateY(-2px);
}
```

```javascript
const bodyEl = document.querySelector("body");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleBgColor);
```

Setiap kali tombol diklik, warna latar belakang `body` akan berganti antara abu-abu dan biru.

Kita dapat memperbarui HTML untuk menyertakan elemen paragraf yang akan digunakan untuk menghapus *event listener* saat kursor diarahkan ke atasnya (*hover*):

```html
<link rel="stylesheet" href="styles.css" />
<h1>Event Listener examples</h1>
<p id="para">MouseOver this text to remove the event listener</p>
<button id="btn">Change background color</button>
<script src="index.js"></script>
```

Untuk menghapus *event listener* saat kursor diarahkan ke atas paragraf, kita dapat menambahkan *event listener* ke elemen paragraf tersebut. Kita menggunakan *event* `mouseover` dan meneruskan fungsi yang menghapus *event listener* dari elemen `button`:

```javascript
const para = document.getElementById("para");
const btn = document.getElementById("btn");

para.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleBgColor);
});
```

Ketika kursor diarahkan ke atas paragraf, *event listener* untuk *event* `click` pada tombol dihapus, dan warna latar belakang tidak akan berubah lagi saat tombol diklik.

Berikut adalah contoh lengkap dengan `method` `removeEventListener()`:

```html
<link rel="stylesheet" href="styles.css" />
<h1>Event Listener examples</h1>
<p id="para">MouseOver this text to remove the event listener</p>
<button id="btn">Change background color</button>
<script src="index.js"></script>
```

```css
button {
  background: linear-gradient(135deg, #4da3ff, #007bff);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

button:hover {
  background: linear-gradient(135deg, #66b3ff, #3399ff);
  box-shadow: 0 6px 14px rgba(0, 123, 255, 0.3);
  transform: translateY(-2px);
}
```

```javascript
const bodyEl = document.querySelector("body");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleBgColor);

para.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleBgColor);
});
```

Contoh di dunia nyata kapan harus menggunakan `method` `removeEventListener()` mencakup menghapus *event listener* saat sebuah modal ditutup dalam aplikasi web atau ketika seorang pengguna *log out* dari sebuah aplikasi.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan dari `method` `removeEventListener()`?

- [ ] Untuk menambahkan *event listener* baru ke sebuah elemen.
- [x] Untuk menghapus *event listener* yang sebelumnya telah ditambahkan ke sebuah elemen.
- [ ] Untuk mengubah `property` dari *event listener* yang sudah ada.
- [ ] Untuk mencegah *event listener* apa pun ditambahkan.

### Pertanyaan 2

Argumen mana yang wajib ada untuk `method` `removeEventListener()`?

- [ ] Hanya jenis *event*.
- [x] Jenis *event* dan fungsi `listener`.
- [ ] Jenis *event*, fungsi `listener`, dan `options`.
- [ ] Hanya jenis *event* dan `options`.

### Pertanyaan 3

Kapan Anda mungkin ingin menggunakan `method` `removeEventListener()` dalam aplikasi dunia nyata?

- [ ] Ketika seorang pengguna *login* ke aplikasi.
- [ ] Ketika seorang pengguna berinteraksi dengan tombol.
- [x] Ketika sebuah modal ditutup atau ketika pengguna *logout*.
- [ ] Ketika seorang pengguna me-*refresh* halaman.

---

[⬅️ Sebelumnya](11-how-does-the-addeventlistener-method-work.md) | [Selanjutnya ➡️](13-what-are-inline-event-handlers-and-why-is-it-best-practice-to-use-addeventlistener-instead.md)
