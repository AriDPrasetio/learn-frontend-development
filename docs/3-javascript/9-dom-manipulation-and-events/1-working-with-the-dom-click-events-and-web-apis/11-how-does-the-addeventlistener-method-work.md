# Bagaimana Cara Kerja Method addEventListener?

## Apa Itu Method `addEventListener()`?

Ketika pengguna mengeklik tombol atau ada perubahan dalam formulir, ini dikenal sebagai sebuah *event* (peristiwa). Dalam program Anda, Anda perlu memiliki cara untuk mendengarkan (*listen*) *event-event* ini dan meresponsnya.

`Method` `addEventListener()` digunakan untuk mendengarkan *event*. `Method` ini membutuhkan dua argumen: *event* yang ingin Anda dengarkan dan sebuah fungsi yang akan dipanggil ketika *event* tersebut terjadi.

Berikut adalah sintaksis dasarnya:

```javascript
element.addEventListener("event", listener);
```

`element` adalah elemen HTML yang dipantau untuk mendeteksi *event*, dan `event` menentukan jenis *event* yang akan didengarkan, seperti `"click"`.

`listener` adalah objek yang akan menerima notifikasi saat *event* terjadi. Sebagian besar waktu, ini berupa sebuah fungsi yang Anda tentukan untuk menangani *event* tersebut.

Berikut adalah sebuah contoh:

```javascript
element.addEventListener("click", () => {
  // kode yang dijalankan saat click event terjadi
});
```

## Meneruskan Referensi Fungsi

Anda juga dapat memilih untuk meneruskan referensi fungsi seperti ini:

```javascript
function handleClick() {
  // kode yang dijalankan saat click event terjadi
}

element.addEventListener("click", handleClick);
```

Terkadang Anda mungkin ingin membuat fungsi terpisah untuk menangani *event*. Hal ini dapat membuat kode Anda lebih mudah dibaca dan dipelihara.

## Menggunakan Interface `EventListener`

Argumen `listener` juga bisa berupa `null`, atau objek yang menggunakan *interface* `EventListener`. *Interface* `EventListener` mendefinisikan sebuah `method` tunggal bernama `handleEvent()`. `Method` ini dipanggil secara otomatis setiap kali *event* yang Anda dengarkan terjadi. Menggunakan *interface* ini memungkinkan objek yang sama untuk menangani beberapa *event* jika diperlukan.

Sebagian besar waktu, Anda tidak perlu menggunakan *interface* ini, dan sebaliknya Anda dapat meneruskan fungsi yang akan dipanggil ketika *event* terjadi.

## Mendengarkan Event `click`

Sekarang, mari kita lihat sebuah contoh untuk lebih memahami cara kerjanya:

Dalam contoh ini, kita memiliki elemen `button` dengan `id` `btn`:

```html
<button id="btn">Show alert</button>
```

Kita ingin mendengarkan *event* `"click"` pada tombol ini dan menampilkan pesan peringatan (*alert*) saat tombol diklik.

Pertama-tama kita perlu mengakses elemen `button` tersebut dalam kode JavaScript kita. Kemudian kita perlu menambahkan *event listener* untuk mendengarkan *event* `click` dan menampilkan peringatan saat tombol diklik:

```html
<button id="btn">Show alert</button>
<script src="index.js"></script>
```

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("You clicked the button"));
```

Sekarang setiap kali tombol diklik, pengguna akan melihat pesan peringatan yang ditampilkan di layar seperti ini:

```text
You clicked the button
```

## Mendengarkan Event `input`

Jenis *event* lain yang dapat Anda dengarkan adalah *event* `"input"`. *Event* ini terpicu ketika nilai dari sebuah elemen `input` berubah.

Berikut adalah sebuah contoh:

```html
<input type="text" id="input" placeholder="Type something" />
```

Kita ingin mendengarkan *event* `input` pada elemen `input` ini dan mencatat (*log*) nilai dari *input* ke konsol setiap kali pengguna mengetik sesuatu.

Pertama-tama kita perlu mengakses elemen `input` tersebut di dalam kode JavaScript kita. Kemudian kita perlu menambahkan *event listener* untuk mendengarkan *event* `input` dan mencatat nilai dari *input* ke konsol setiap kali pengguna mengetikkan sesuatu:

```html
<input type="text" id="input" placeholder="Type something" />
<script src="index.js"></script>
```

```javascript
const input = document.getElementById("input");

input.addEventListener("input", () => {
  console.log(input.value);
});
```

## Mendengarkan Event Lainnya

Ada banyak lagi *event* yang dapat Anda dengarkan menggunakan `method` `addEventListener()`. Beberapa *event* umum meliputi `mouseover`, `mouseout`, `keydown`, `keyup`, dan `submit`.

Dalam pelajaran mendatang, kita akan membahas lebih banyak *event* dan cara menggunakan `method` `addEventListener()` untuk mendengarkannya.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan dari `method` `addEventListener()`?

- [ ] Untuk membuat elemen HTML baru.
- [x] Untuk mendengarkan *event* pada sebuah elemen HTML.
- [ ] Untuk memodifikasi gaya (*style*) dari sebuah elemen.
- [ ] Untuk mengubah konten HTML dari sebuah elemen.

### Pertanyaan 2

Apa yang didefinisikan oleh *interface* `EventListener`?

- [ ] `Method` untuk membuat elemen HTML baru.
- [x] Struktur untuk penanganan *event*.
- [ ] `Property` dari dokumen HTML.
- [ ] Gaya untuk elemen yang digerakkan oleh *event*.

### Pertanyaan 3

Jenis *event* apa yang akan Anda gunakan bersama `addEventListener()` untuk menangkap masukan (*input*) pengguna di dalam bidang teks (*text field*)?

- [ ] `click`
- [ ] `keydown`
- [x] `input`
- [ ] `submit`

---

[⬅️ Sebelumnya](10-what-is-the-event-object.md) | [Selanjutnya ➡️](12-how-does-the-removeeventlistener-method-work.md)
