# Apa Itu Event DOMContentLoaded, dan Bagaimana Cara Kerjanya?

*Event* `DOMContentLoaded` dipicu ketika segala sesuatu di dalam dokumen HTML telah dimuat (*loaded*) dan dipilah (*parsed*). Jika Anda memiliki *stylesheet* eksternal atau gambar, *event* `DOMContentLoaded` tidak akan menunggu sumber daya tersebut selesai dimuat. Peristiwa ini hanya akan menunggu HTML selesai dimuat.

Ini berbeda dari *event* `load`, yang menunggu semuanya selesai dimuat, termasuk *stylesheet* eksternal, gambar, dan sebagainya.

Berikut adalah contoh sintaksis untuk menggunakan *event* `DOMContentLoaded`:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is loaded.");
});
```

Setelah DOM dimuat, fungsi tersebut akan dieksekusi dan pesan `DOM is loaded.` akan dicatat ke konsol.

Sekarang, mari kita lihat contoh lain menggunakan *event* `DOMContentLoaded`. Dalam contoh ini, kita memiliki sebuah gambar di dalam HTML. Untuk memperbarui gambar tersebut, kita dapat membuat fungsi yang mengubah atribut `src` dan `alt` untuk gambar tersebut:

```html
<h1>Image Change on DOM Loaded</h1>
<img
  id="example-img"
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
  alt="Cat relaxing"
/>

<script src="index.js"></script>
```

```javascript
function changeImg() {
  const img = document.getElementById("example-img");
  img.src =
    "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";
  img.alt = "CamperBot sticker";
  console.log("image was just changed");
}

changeImg();
```

Kita kemudian dapat memeriksa apakah DOM masih dalam proses memuat dan menambahkan *event listener* untuk *event* `DOMContentLoaded`. Jika *event* `DOMContentLoaded` sudah terpicu sebelumnya, kita dapat memanggil fungsi `changeImg` secara langsung:

```javascript
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeImg);
} else {
  console.log("DOMContentLoaded has already fired");
  changeImg();
}
```

Jika Anda menjalankan kode ini dan me-*refresh* halaman, Anda akan melihat gambar berubah menjadi gambar baru setelah DOM selesai dimuat. Hal ini terjadi cukup cepat, namun Anda akan melihat sedikit kedipan (*flicker*) saat gambar berubah.

*Event* `DOMContentLoaded` sangat berguna ketika Anda ingin menjalankan beberapa kode JavaScript segera setelah DOM selesai dimuat, namun sebelum semua sumber daya eksternal seperti gambar dan *stylesheet* selesai dimuat.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang ditandakan oleh *event* `DOMContentLoaded`?

- [ ] Semua sumber daya eksternal telah dimuat secara penuh.
- [x] Dokumen HTML telah dimuat dan dipilah (*parsed*) secara penuh.
- [ ] Browser telah selesai me-render halaman.
- [ ] Semua gambar pada halaman telah dimuat secara penuh.

### Pertanyaan 2

Bagaimana *event* `DOMContentLoaded` berbeda dari *event* `load`?

- [ ] `DOMContentLoaded` menunggu gambar dimuat, sedangkan `load` tidak.
- [x] `DOMContentLoaded` terpicu sebelum semua sumber daya dimuat, sedangkan `load` menunggu semuanya selesai dimuat.
- [ ] `DOMContentLoaded` hanya dapat digunakan dengan *script* eksternal.
- [ ] Tidak ada perbedaan; keduanya adalah *event* yang sama.

### Pertanyaan 3

Dalam contoh yang disediakan, apa yang terjadi jika *event* `DOMContentLoaded` telah terpicu saat *script* berjalan?

- [ ] Gambar tidak akan berubah sama sekali.
- [ ] Sebuah pesan kesalahan (*error*) akan terjadi.
- [x] Fungsi `changeImg` akan dipanggil secara langsung.
- [ ] *Event listener* akan ditambahkan kembali.

---

[⬅️ Sebelumnya](14-how-do-you-manipulate-styles-using-elementstyle-and-elementclasslist.md) | [Selanjutnya ➡️](16-how-do-the-settimeout-and-setinterval-methods-work.md)
