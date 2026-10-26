# Bagaimana Cara Menambahkan Atribut dengan setAttribute()?

Anda mungkin sudah terbiasa bekerja dengan atribut dalam proyek HTML dan CSS Anda. Namun tahukah Anda bahwa Anda dapat menambahkan atribut ke elemen HTML di dalam file JavaScript Anda?

Dalam pelajaran ini, Anda akan mempelajari cara bekerja dengan `method` `setAttribute()` untuk menambahkan atribut ke elemen HTML Anda.

Berikut adalah sintaksis dasarnya:

```javascript
setAttribute(attribute, value);
```

Mari kita lihat beberapa contoh untuk lebih memahami cara menggunakan `method` `setAttribute()`.

Pada contoh pertama ini, kita memiliki elemen `p` di dalam HTML:

```html
<p id="para">I am a paragraph</p>
```

Untuk menambahkan atribut `class`, pertama-tama kita perlu mengakses elemen `p` tersebut menggunakan `method` `getElementById()`. Kemudian kita dapat menggunakan `method` `setAttribute()` untuk menambahkan atribut `class` dan menetapkan nilainya ke `my-class`.

Kita menggunakan `outerHTML` untuk mencatat (*log*) seluruh elemen HTML beserta atribut-atributnya.

```html
<p id="para">I am a paragraph</p>
<script src="index.js"></script>
```

```javascript
const para = document.getElementById("para");
para.setAttribute("class", "my-class");

console.log(`${para.outerHTML}`);
```

Jika Anda memiliki atribut yang sudah ada pada suatu elemen HTML, Anda dapat memperbarui nilainya menggunakan `method` `setAttribute()`.

Dalam contoh ini kita memiliki elemen `div` dengan atribut `class` yang disetel ke `my-class`:

```html
<div class="my-class"></div>
```

Untuk memperbarui nilai atribut `class` menjadi `example`, kita dapat menggunakan `method` `setAttribute()` lagi:

```html
<div class="my-class"></div>
<script src="index.js"></script>
```

```javascript
const divEl = document.querySelector(".my-class");
divEl.setAttribute("class", "example");

console.log(`${divEl.outerHTML}`);
```

Jadi, apa saja contoh dunia nyata kapan harus menggunakan `method` `setAttribute()`?

Jika Anda membangun galeri gambar dinamis, Anda mungkin perlu memperbarui atribut `src` dari elemen gambar saat pengguna mengeklik gambar mini (*thumbnail*).

Contoh lainnya adalah jika Anda berurusan dengan validasi formulir dan perlu menambahkan atribut tertentu seperti `required` atau `minlength` ke elemen `input`.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang dilakukan oleh `method` `setAttribute()`?

- [ ] Menghapus atribut dari elemen HTML.
- [ ] Mengubah konten teks dari elemen HTML.
- [x] Menambahkan atribut baru atau memperbarui nilai dari atribut yang sudah ada pada elemen HTML.
- [ ] Membuat elemen HTML baru.

### Pertanyaan 2

Bagaimana cara memperbarui nilai dari atribut yang sudah ada menggunakan `setAttribute()`?

- [ ] Dengan menetapkan nilai baru secara langsung ke atribut di HTML.
- [x] Dengan menggunakan `getElementById()` lalu menetapkan nilai atribut dengan `setAttribute()`.
- [ ] Dengan memodifikasi file HTML secara langsung.
- [ ] Dengan menggunakan `property` `innerHTML`.

### Pertanyaan 3

Dalam skenario manakah Anda mungkin menggunakan `setAttribute()` dalam aplikasi dunia nyata?

- [ ] Untuk menambahkan atribut `class` ke elemen `div` statis tanpa interaksi dinamis apa pun.
- [x] Untuk memperbarui atribut `src` dari elemen gambar ketika pengguna berinteraksi dengan gambar mini (*thumbnail*).
- [ ] Untuk mengubah konten teks dari elemen `p` saat halaman dimuat.
- [ ] Untuk memodifikasi atribut style secara langsung di dalam file CSS.

---

[⬅️ Sebelumnya](8-how-do-the-navigator-window-and-document-work.md) | [Selanjutnya ➡️](10-what-is-the-event-object.md)
