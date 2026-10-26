# Apa Itu Inline Event Handler, dan Mengapa Menggunakan addEventListener Merupakan Praktik Terbaik?

Dalam pelajaran sebelumnya, Anda telah mempelajari cara bekerja dengan *event* menggunakan `method` `addEventListener()`. Namun ada cara lain, yang tidak direkomendasikan, untuk bekerja dengan *event* di JavaScript.

*Inline event handler* adalah atribut khusus pada elemen HTML yang digunakan untuk mengeksekusi kode JavaScript ketika suatu *event* terjadi.

Berikut adalah contoh elemen `button` dengan sebuah *inline click event handler*:

```html
<button onclick="alert('Hello World!')">Show alert</button>
```

Ketika pengguna mengeklik tombol, fungsi `alert` dipanggil dan sebuah kotak dialog peringatan ditampilkan dengan pesan `Hello World!`.

Cara lain untuk menggunakan *inline event handler* adalah dengan memanggil fungsi yang didefinisikan di dalam tag `script` di dalam dokumen HTML.

Berikut adalah contoh mendefinisikan fungsi bernama `changeBgColor` dan memanggilnya dari sebuah *inline click event handler*:

```html
<script>
  function changeBgColor() {
    document.body.style.backgroundColor = "lightblue";
  }
</script>

<button onclick="changeBgColor()">Change background color</button>
```

Ketika pengguna mengeklik tombol tersebut, fungsi `changeBgColor` dipanggil dan warna latar belakang halaman diubah menjadi biru muda (*lightblue*). Meskipun memungkinkan untuk menggunakan *inline event handler* seperti ini, hal tersebut tidak dianggap sebagai praktik terbaik (*best practice*).

Salah satu alasannya adalah *inline event handler* hanya dapat digunakan untuk memasang satu *event listener* pada sebuah elemen. Jika Anda ingin memasang beberapa *event listener* pada elemen yang sama, Anda perlu menggunakan `addEventListener()`. Alasan lainnya adalah bahwa *inline event handler* mencampuradukkan kode HTML dan JavaScript, yang dapat membuat kode Anda lebih sulit dibaca dan dipelihara. Jauh lebih baik memisahkan kode HTML dan kode JavaScript Anda dengan menggunakan `addEventListener()` untuk memasang *event listener* ke elemen.

*Inline event handler* tidak disarankan untuk digunakan dalam JavaScript modern. Jadi, merupakan praktik terbaik untuk tetap menggunakan `method` `addEventListener()` saat bekerja dengan *event* di JavaScript.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa itu *inline event handler*?

- [ ] Sebuah `method` untuk memasang banyak *event listener* ke sebuah elemen.
- [x] Sebuah atribut pada elemen HTML yang mengeksekusi kode JavaScript ketika suatu *event* terjadi.
- [ ] Sebuah cara untuk mendefinisikan fungsi di dalam file JavaScript terpisah.
- [ ] Sebuah jenis penataan gaya CSS untuk elemen.

### Pertanyaan 2

Mengapa menggunakan `addEventListener()` dianggap sebagai praktik terbaik (*best practice*) dibandingkan *inline event handler*?

- [ ] `addEventListener()` memungkinkan Anda mencampur HTML dan JavaScript dengan mudah.
- [x] *Inline event handler* hanya dapat memasang satu *event listener* pada sebuah elemen.
- [ ] `addEventListener()` lebih mudah untuk ditulis.
- [ ] *Inline event handler* lebih cepat daripada `addEventListener()`.

### Pertanyaan 3

Apa potensi kerugian dari menggunakan *inline event handler*?

- [ ] Mereka lebih cepat daripada menggunakan `addEventListener()`.
- [ ] Mereka membutuhkan lebih banyak baris kode.
- [x] Mereka membuat kode lebih sulit dibaca dan dipelihara dengan mencampuradukkan HTML dan JavaScript.
- [ ] Mereka hanya dapat digunakan dengan tombol (*buttons*).

---

[⬅️ Sebelumnya](12-how-does-the-removeeventlistener-method-work.md) | [Selanjutnya ➡️](14-how-do-you-manipulate-styles-using-elementstyle-and-elementclasslist.md)
