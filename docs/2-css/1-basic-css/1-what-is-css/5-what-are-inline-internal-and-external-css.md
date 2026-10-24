# Apa Itu Inline, Internal, dan External CSS, dan Kapan Sebaiknya Menggunakan Masing-Masing?


`CSS` dapat diterapkan pada halaman web melalui tiga cara utama: `inline`, `internal`, atau `external`.

Setiap metode memiliki kasus penggunaan (*use case*), kelebihan, dan batasannya masing-masing, dan mengetahui kapan harus menggunakan setiap metode sangat penting untuk menulis kode yang bersih, efisien, dan mudah dipelihara (*maintainable*).

Mari kita uraikan ketiga jenis `CSS` tersebut dan kapan sebaiknya Anda menggunakannya.

`Inline CSS` ditulis langsung di dalam sebuah `element` `HTML` menggunakan `attribute` `style`. Ini menerapkan gaya pada `element` tertentu.

Berikut adalah contoh penggunaan `inline CSS`:

```html
<p style="color: green;">This is an inline-styled paragraph.</p>
```

Pada contoh ini, kita menggunakan `attribute` `style` untuk mengatur teks paragraf menjadi `green`.

`Inline CSS` umumnya digunakan untuk penataan gaya yang cepat, satu kali pakai (*one-off styles*), atau untuk menimpa (*override*) gaya lain untuk `element` tertentu.

Namun, ini sebaiknya dihindari dalam banyak kasus karena dapat mengotori `HTML` dan membuat kode lebih sulit dipelihara.

Sebagian besar waktu, lebih baik menggunakan `internal CSS` atau `external CSS` untuk menjaga gaya Anda tetap terorganisasi dan mudah dipelihara.

`Internal CSS` ditulis di dalam `tag` `style` di dalam bagian `head` dari dokumen `HTML`. Ini menerapkan gaya ke seluruh halaman dan berguna ketika Anda perlu menata gaya satu dokumen saja.

Berikut adalah contoh `internal CSS`:

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p>This paragraph is styled using internal CSS.</p>
</body>
```

Pada contoh di atas, `internal CSS` menerapkan teks biru ke semua `element` `p` di halaman tersebut.

`Internal CSS` paling baik digunakan ketika Anda perlu menerapkan gaya ke halaman tertentu daripada di beberapa halaman. Ini berguna untuk situs web satu halaman (*single-page website*) atau ketika gaya tidak perlu digunakan kembali di tempat lain.

Namun, ada beberapa kelemahan, seperti tidak mendorong penggunaan kembali (*reusability*) di beberapa halaman. Selain itu, sama seperti `inline CSS`, ini mencampurkan `HTML` dan `CSS`, membuat kode lebih sulit dipelihara dalam proyek yang lebih besar.

`External CSS` ditulis dalam file `.css` terpisah dan ditautkan ke dokumen `HTML` menggunakan `element` `link` di bagian `head`.

Ini memungkinkan Anda untuk menata gaya beberapa halaman secara konsisten dan merupakan metode yang lebih disukai dalam pengembangan web profesional.

Berikut adalah contoh penataan gaya untuk semua `element` paragraf:

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This paragraph is styled using external CSS.</p>
</body>
```

```css
p {
  color: red;
}
```

Dalam pelajaran sebelumnya, Anda telah mempelajari bahwa `element` `link` memiliki `attribute` `rel` yang menentukan hubungan antara dokumen saat ini dan sumber daya yang ditautkan, seperti menautkan ke sebuah *stylesheet* atau sumber daya eksternal.

Di sisi lain, `attribute` `href` menentukan URL sumber daya yang ditautkan, yang menunjukkan dari mana sumber daya tersebut harus diambil.

`External CSS` sangat ideal untuk proyek besar di mana Anda ingin mempertahankan gaya yang konsisten di beberapa halaman.

Ini mendorong pemisahan tugas (*separation of concerns*) dengan membiarkan `HTML` menangani struktur dan `CSS` menangani penataan gaya, yang membuat kode lebih mudah dipelihara dan skalabel.

Memahami kapan harus menggunakan setiap jenis `CSS` sangat penting untuk pengembangan web yang efisien dan efektif.

Dalam kebanyakan kasus, `external CSS` harus menjadi pendekatan utama Anda, terutama untuk proyek yang lebih besar dan lebih kompleks.

## Pertanyaan (Questions)

Kapan waktu yang paling tepat untuk menggunakan inline CSS?

- [ ] Untuk menata gaya semua paragraf dalam sebuah dokumen.
- [x] Untuk menimpa (*override*) gaya dengan cepat pada satu `element`.
- [ ] Untuk menata gaya seluruh situs web.
- [ ] Untuk memisahkan tugas (*separation of concerns*) dalam proyek besar.

Jenis CSS manakah yang paling cocok untuk menerapkan gaya hanya pada satu halaman web?

- [ ] `Inline CSS`.
- [ ] `External CSS`.
- [x] `Internal CSS`.
- [ ] `Universal CSS`.

Mengapa external CSS lebih disukai dalam proyek-proyek yang lebih besar?

- [ ] Memungkinkan perubahan gaya satu kali yang cepat.
- [ ] Menerapkan gaya hanya pada `element` tertentu.
- [x] Mendorong pemisahan tugas (*separation of concerns*) dan penggunaan kembali (*reusability*) di beberapa halaman.
- [ ] Membuat `HTML` menjadi lebih rumit.

---
[⬅️ Sebelumnya](4-what-are-some-default-browser-styles-applied-to-html.md) | [Selanjutnya ➡️](6-how-do-width-and-height-work.md)
