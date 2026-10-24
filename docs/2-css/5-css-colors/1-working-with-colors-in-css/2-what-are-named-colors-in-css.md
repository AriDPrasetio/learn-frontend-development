# Apa Itu Named Colors di CSS, dan Kapan Menggunakannya?

Dalam `CSS`, warna memainkan peran penting dalam mendesain halaman web, meningkatkan keterbacaan, mengatur suasana (*mood*), dan meningkatkan pengalaman pengguna (*user experience*). Salah satu cara paling sederhana untuk mendefinisikan warna di `CSS` adalah dengan menggunakan warna bernama (`named colors`). `Named colors` adalah nama-nama warna yang telah ditentukan sebelumnya (*predefined*) yang dikenali oleh peramban (*browser*). Berikut adalah contoh penggunaan `named color` untuk sebuah `element` paragraf:

```html
<link rel="stylesheet" href="styles.css" />
<p>This is a paragraph.</p>
```

```css
p {
  color: red;
}
```

Dalam contoh ini, kita menggunakan `named color` `red` untuk menata gaya teks dalam paragraf.

`Named colors` di `CSS` adalah kumpulan dari 140 nama warna standar seperti `red`, `blue`, `yellow`, `aqua`, `fuchsia`, `black`, dan sebagainya. Nama-nama ini sederhana untuk digunakan, membuat kode Anda lebih mudah dibaca, dan bersifat deskriptif secara mandiri (*self-descriptive*).

`Named colors` berguna untuk pembuatan prototipe cepat (*quick prototyping*), desain sederhana, dan meningkatkan keterbacaan kode. Berikut adalah contoh lain penggunaan `named colors` untuk sebuah `selector` `h1`:

```html
<link rel="stylesheet" href="styles.css" />
<h1>This is a heading</h1>
```

```css
h1 {
  color: navy;
  background-color: lightgray;
}
```

Dalam contoh ini, teks judul (*heading*) akan diberi gaya dengan warna `navy`, dengan latar belakang (`background`) abu-abu muda (`lightgray`). Keterbacaan kode meningkat karena `named colors` memberikan pemahaman visual langsung terhadap gaya yang dimaksudkan.

`Named colors` di `CSS` memang praktis tetapi terbatas, hanya memiliki 140 pilihan yang tersedia. Warna-warna ini mungkin tidak menawarkan corak (*shade*) presisi yang dibutuhkan untuk desain yang lebih mendetail.

`Named colors` di `CSS` adalah cara yang bagus untuk menerapkan warna secara cepat dan deskriptif. Meskipun berguna untuk desain dasar, pembuatan prototipe, dan meningkatkan keterbacaan kode, pilihannya yang terbatas membuatnya kurang cocok untuk desain kompleks yang membutuhkan kontrol warna secara presisi.

Dengan memahami kelebihan dan keterbatasan `named colors`, Anda dapat menentukan kapan waktu terbaik untuk menggunakannya daripada model warna yang lebih mendetail seperti `RGB` atau `HSL`, yang akan Anda pelajari dalam pelajaran-pelajaran berikutnya.

## Pertanyaan (Questions)

Apa keuntungan utama menggunakan `named colors` di `CSS`?

- [ ] `Named colors` memungkinkan Anda membuat gradien (*gradients*).
- [x] `Named colors` lebih sederhana untuk ditulis dan membuat kode lebih mudah dibaca.
- [ ] `Named colors` menyediakan rentang pilihan warna yang lebih luas daripada kode heksadesimal (`hex codes`).
- [ ] `Named colors` adalah cara paling tepat untuk mendefinisikan warna dalam desain web.

Dalam skenario apa `named colors` mungkin bukan pilihan terbaik?

- [ ] Saat Anda perlu membuat prototipe desain dengan cepat.
- [x] Saat desain Anda memerlukan corak (*shades*) warna yang sangat spesifik atau bernuansa.
- [ ] Saat desain Anda hanya melibatkan warna-warna primer.
- [ ] Saat berkolaborasi dengan orang lain dalam proyek sederhana.

Manakah dari pilihan berikut yang merupakan contoh `named color` di `CSS`?

- [ ] `#ff5733`
- [ ] `rgb(255, 99, 71)`
- [x] `tomato`
- [ ] `hsl(120, 100%, 50%)`

---

[⬅️ Sebelumnya](1-what-is-color-theory-in-design.md) | [Selanjutnya ➡️](3-what-is-the-rgb-color-model.md)
