# Bagaimana Cara Kerja Event Bubbling dan Event Delegation?

*Event bubbling*, atau perambatan (*propagation*), mengacu pada bagaimana suatu peristiwa (*event*) "menggelembung naik" ke objek-objek induk (*parent objects*) saat terpicu. Sebagai contoh, perhatikan kode ini:

```html
<p>
  <span>Click me~!</span>
</p>
```

Elemen `p` di sini akan dianggap sebagai induk (*parent*) dari elemen `span`.

Ketika Anda mengeklik elemen `span`, sesuai dengan instruksi yang diberikan, elemen `span` menjadi target dari *event* `click`. Namun, *event* tersebut juga menggelembung ke induknya – elemen `p` dapat menerima dan memproses *event* tersebut sesuai kebutuhan.

Tetapi apa sebenarnya arti dari hal ini? Anda dapat memasang sebuah *event listener* pada elemen `p`:

```html
<p>
  <span>Click me~!</span>
</p>
<script src="index.js"></script>
```

```javascript
const paragraph = document.querySelector("p");
paragraph.addEventListener("click", (event) => {
  console.log(event.target);
});
```

Kemudian, ketika Anda mengeklik elemen `span`, Anda akan melihat `<span>Click me~!</span>` dicatat ke konsol.

*Event* tersebut merambat ke elemen induk `p`, yang kemudian memprosesnya di dalam *event listener* untuk menampilkan target dari *event* tersebut.

Perhatikan bagaimana targetnya tetap merupakan elemen `span`. Hal ini karena elemen `span` menerima klik awal.

## Memantau Event yang Menggelembung Naik

Hanya untuk memastikan bagaimana segala sesuatunya bekerja, mari kita kembangkan kode kita:

```html
<p>
  <span>Click me~!</span>
</p>
<script src="index.js"></script>
```

```javascript
const paragraph = document.querySelector("p");
const span = document.querySelector("span");
paragraph.addEventListener("click", (event) => {
  console.log("P listener: ");
  console.log(event.target);
});
span.addEventListener("click", (event) => {
  console.log("Span listener: ");
  console.log(event.target);
});
```

Untuk memberi Anda gambaran tentang bagaimana *event* menggelembung naik, inilah yang akan Anda lihat di konsol setelah mengeklik elemen `span`:

```html
"Span listener: "
<span>Click me~!</span>
"P listener: "
<span>Click me~!</span>
```

## Menghentikan Perambatan (Propagation)

Sekarang mari kita lihat apa yang terjadi ketika Anda mencegah perambatan *event* dengan `stopPropagation()`. Kita akan memanggilnya di dalam *event listener* `span`:

```html
<p>
  <span>Click me~!</span>
</p>
<script src="index.js"></script>
```

```javascript
const paragraph = document.querySelector("p");
const span = document.querySelector("span");
paragraph.addEventListener("click", (event) => {
  console.log("P listener: ");
  console.log(event.target);
});
span.addEventListener("click", (event) => {
  console.log("Span listener: ");
  console.log(event.target);
  event.stopPropagation();
});
```

Dan kemudian klik `span` kita lagi:

```html
"Span listener: "
<span>Click me~!</span>
```

Kali ini, kita tidak melihat *listener* `p` kita terpicu. *Event* tersebut tidak pernah terpicu untuk elemen `p`, karena kita telah menyuruhnya menghentikan perambatan saat sedang diproses untuk elemen anak `span`.

## Apa Itu Event Delegation?

Delegasi *event* (*event delegation*) dapat dianggap sebagai kebalikannya. Ini adalah proses mengambil *event* yang ditangkap, dan mendelegasikannya ke elemen lain.

Kembali ke kode kita, mari kita perbarui sehingga mengeklik elemen `span` akan mengubah warnanya menjadi merah:

```html
<p>
  <span>Click me~!</span>
</p>
<script src="index.js"></script>
```

```javascript
const paragraph = document.querySelector("p");
const span = document.querySelector("span");
paragraph.addEventListener("click", (event) => {});
span.addEventListener("click", (event) => {
  event.target.style.color = "red";
});
```

## Mendelegasikan ke Elemen Induk

Namun bagaimana jika Anda memiliki dua puluh elemen `span`? Atau mungkin Anda menggunakan JavaScript untuk membuat lebih banyak elemen `span` secara dinamis?

Daripada harus memasang *event listener* ke setiap elemen `span` satu per satu, Anda sebenarnya dapat menggunakan *listener* pada elemen `p` untuk menangani semuanya. Dengan kata lain, Anda dapat mendelegasikan penanganan klik `span` ke elemen induk `p`.

Kode kita sekarang mungkin terlihat seperti ini:

```javascript
const paragraph = document.querySelector("p");
paragraph.addEventListener("click", (event) => {
  event.target.style.color = "red";
});
```

Perhatikan bahwa kita tidak lagi memiliki *listener* yang terpasang pada elemen `span` sama sekali. Anda telah mendelegasikan penanganan *event* dengan tepat ke elemen `p`. Namun apakah ini berhasil?

Mari kita buat beberapa elemen `span` tambahan dan lihat hasilnya:

```html
<p>
  <span>Click me~!</span>
  <span>Click me~!</span>
  <span>Click me~!</span>
  <span>Click me~!</span>
</p>
<script src="index.js"></script>
```

```javascript
const paragraph = document.querySelector("p");
paragraph.addEventListener("click", (event) => {
  event.target.style.color = "red";
});
```

Sekarang, setiap kali kita mengeklik langsung pada sebuah `span`, teks dari elemen tersebut akan berubah menjadi merah.

## Mengeklik Elemen Induk

Karena *listener* terpasang pada elemen induk `p`, mengeklik di mana saja di dalam elemen `p`, termasuk ruang kosong di sekitar atau di antara elemen `span`, juga akan memicu *event* tersebut. Saat Anda mengeklik di sana, `event.target` adalah elemen `p` itu sendiri, sehingga warna merah diterapkan pada elemen `p`. Dan karena `color` adalah `property` CSS yang diwarisi (*inherited*), keempat elemen `span` akan berubah menjadi merah sekaligus.

Dan begitu saja, hanya dengan satu *event listener*, kita telah berhasil mengizinkan sebuah *event* `click` menggelembung dari elemen `span` ke induk `p`, dan mendelegasikan logika untuk *event* `click` tersebut ke elemen `p`.

Perambatan dan delegasi *event* bisa menjadi topik yang kompleks, terutama ketika Anda berurusan dengan elemen yang bersarang rapat (*heavily nested*) seperti tabel. Anda sangat dianjurkan untuk mendalami ini lebih jauh dan bereksperimen dengan beberapa kode yang telah kita tulis di sini.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa itu *event bubbling* dalam JavaScript?

- [ ] Proses pembuatan *event* baru.
- [x] Cara sebuah *event* merambat dari elemen anak ke elemen induk.
- [ ] Sebuah `method` untuk mencegah perilaku bawaan dari *event*.
- [ ] Proses memasang beberapa *event listener* ke satu elemen.

### Pertanyaan 2

Apa tujuan dari `method` `stopPropagation()`?

- [ ] Untuk mencegah perilaku bawaan dari sebuah *event*.
- [ ] Untuk menghapus semua *event listener* dari sebuah elemen.
- [x] Untuk menghentikan *event* dari menggelembung naik ke elemen induk.
- [ ] Untuk mendelegasikan penanganan *event* ke elemen anak.

### Pertanyaan 3

Apa keuntungan utama dari menggunakan delegasi *event* (*event delegation*)?

- [ ] Memungkinkan *event* menggelembung naik ke elemen induk.
- [ ] Mencegah perilaku bawaan dari *event*.
- [x] Mengurangi jumlah *event listener* yang diperlukan untuk banyak elemen.
- [ ] Menghentikan perambatan *event* secara otomatis.

---

[⬅️ Sebelumnya](1-what-is-the-change-event-and-how-does-it-work.md) | [Selanjutnya ➡️](../3-review-dom-manipulation-and-click-events-with-javascript/1-review-dom-manipulation-and-click-events-with-javascript.md)
