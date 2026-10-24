# Apa Itu Font Family dan Bagaimana Cara Kerjanya?

`Font family` (keluarga `font`) adalah sekelompok `font` yang memiliki desain dasar yang sama. Semua `font` yang berada dalam keluarga yang sama didasarkan pada `typeface` inti yang sama, tetapi memiliki variasi dalam gaya (`style`), ketebalan (`weight`), dan lebar (`width`). Anda dapat membayangkannya seperti saudara kandung yang berbagi karakteristik serupa tetapi tetap memiliki beberapa perbedaan. Sebagai contoh, `Arial` adalah sebuah `font family` yang mencakup variasi seperti `Arial Bold` dan `Arial Italic`.

![Diagram showing 'Arial' at the top with two blue arrows pointing down to 'Arial Bold' on the left and 'Arial Italic' on the right, illustrating font family variations](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-font-families-and-how-do-they-work-1.png)

## Menetapkan Font Family di CSS

Di dalam `CSS`, Anda dapat menetapkan `font family` dengan properti `font-family`. Berikut adalah contoh penetapan `font` untuk paragraf menjadi `Arial`:

```html
<link rel="stylesheet" href="styles.css">
<p id="arial-font">Example paragraph using Arial font.</p>
<p>Paragraph not using Arial font.</p>
```

```css
#arial-font {
  font-family: Arial;
}
```

## Font Cadangan (Fallback Fonts)

Namun bagaimana jika `font family` tersebut tidak ditemukan? Anda dapat menentukan beberapa `font family` berdasarkan urutan prioritas, dari yang tertinggi hingga terendah, dengan memisahkannya menggunakan tanda koma. `font` alternatif ini akan bertindak sebagai opsi cadangan (*fallback*). Dalam contoh ini, `Arial` adalah `font` utama dan `Lato` adalah `font` alternatif:

```html
<link rel="stylesheet" href="styles.css">
<p id="specified-font">Example paragraph using specified fonts.</p>
<p>Paragraph not using specified fonts.</p>
```

```css
#specified-font {
  font-family: Arial, Lato;
}
```

`browser` akan me-`render` `font` pertama (`Arial`) jika ditemukan di perangkat pengguna. Jika tidak, `font` kedua (`Lato`) yang akan di-`render`.

Anda juga perlu mengetahui cara kerja proses ini di balik layar. Proses pemilihan tidak serta-merta berhenti meskipun `font` pertama tersedia. `font family` dipilih satu karakter demi satu karakter, sehingga jika sebuah `font` tidak memiliki karakter tertentu, `browser` akan mencarinya pada `font` dengan prioritas yang lebih rendah. Menarik, bukan?

## Generic Font Family

Dalam konteks pengembangan web, Anda juga akan menemukan `generic font family`. Hal ini sangat penting. `generic font family` adalah kelompok `font` bawaan (*default*) yang akan di-`render` oleh `browser` web ketika `font` berprioritas lebih tinggi tidak tersedia. Untuk memastikan bahwa konten tetap dapat dibaca, `browser` mengganti `font` asli dengan `font` paling sesuai yang ditemukan, berdasarkan `generic font family` yang ditentukan. Beberapa yang paling umum digunakan adalah:

- `serif`
- `sans-serif`
- `monospace`
- `cursive`
- `fantasy`

Tetapi masih ada pilihan lain yang tersedia. Pada kode di bawah ini, kita memiliki tiga alternatif `font family`:

```html
<link rel="stylesheet" href="styles.css">
<p id="specified-font">Example paragraph using specified fonts.</p>
<p>Paragraph not using specified fonts.</p>
```

```css
#specified-font {
  font-family: Arial, Lato, sans-serif;
}
```

`Arial` memiliki prioritas tertinggi. Jika `Arial` tidak ditemukan, maka `browser` akan mencoba me-`render` `Lato`. Jika keduanya tidak ditemukan, `browser` akan menggunakan `generic font family` `sans-serif`, dengan memilih `font` yang memiliki karakteristik tersebut dari `font` yang terpasang di sistem pengguna.

Anda sebaiknya selalu menyertakan `generic font family` di akhir daftar properti `font-family`. Ingatlah bahwa `font` generik mungkin terlihat berbeda dari `font` yang awalnya Anda bayangkan dalam desain Anda, sehingga selalu ada baiknya untuk memeriksa tampilan `fallback fonts` ini di berbagai `browser` yang berbeda.

## Web-Safe Fonts

Untuk membuat pengalaman pengguna sekonsisten mungkin, Anda juga disarankan untuk menggunakan `web safe fonts`. `font family` ini biasanya sudah terpasang di sebagian besar perangkat, sehingga sangat besar kemungkinannya untuk ditemukan dan di-`render` dengan benar bagi sebagian besar pengguna. Anda akan mempelajari lebih lanjut tentang hal ini di pelajaran-pelajaran berikutnya.

`Font family` sangat penting dalam dunia desain web. Dengan menggunakan properti `font-family`, Anda dapat seketika mengubah tampilan dan nuansa dari teks Anda.

## Pertanyaan (Questions)

Apa tujuan utama dari properti `CSS` `font-family`?

- [ ] Untuk mengatur warna teks.
- [ ] Untuk mengontrol ukuran font teks.
- [x] Untuk menentukan typeface yang digunakan pada teks.
- [ ] Untuk menyesuaikan tinggi baris (line spacing) pada teks.

Manakah dari berikut ini yang merupakan generic font family yang umum?

- [ ] `Helvetica`
- [ ] `Times New Roman`
- [x] `Sans-Serif`
- [ ] `Arial`

Bagaimana cara Anda menentukan beberapa font family sebagai fallback di CSS?

- [x] Dengan memisahkannya menggunakan tanda koma.
- [ ] Dengan menggunakan deklarasi `font-family` bersarang.
- [ ] Dengan menggunakan karakter `&`.
- [ ] Dengan menggunakan karakter `|`.

---

[⬅️ Sebelumnya](2-what-are-some-best-practices-for-working-with-typography-in-your-designs.md) | [Selanjutnya ➡️](4-what-are-web-safe-fonts.md)
