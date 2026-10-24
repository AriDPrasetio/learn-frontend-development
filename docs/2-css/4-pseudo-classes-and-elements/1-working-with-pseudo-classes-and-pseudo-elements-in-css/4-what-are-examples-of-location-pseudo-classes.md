# Apa Saja Contoh Pseudo-class Lokasi?

`Location pseudo-class` (atau *pseudo-class* lokasi) digunakan untuk menata gaya tautan dan `element` yang ditargetkan di dalam dokumen saat ini. Mereka menawarkan cara untuk menerapkan `styles` berdasarkan apakah tautan telah dikunjungi atau apakah suatu `element` sedang difokuskan.

Contoh dari `location pseudo-class` adalah:

- `:link`
- `:visited`
- `:any-link`
- `:local-link`
- `:target`

Mari kita lihat lebih dalam masing-masing `pseudo-class` ini.

`Pseudo-class` `:link` memungkinkan Anda menargetkan semua tautan yang belum dikunjungi pada halaman web. Anda dapat menggunakannya untuk menata gaya tautan secara berbeda sebelum pengguna mengkliknya. Misalnya, Anda mungkin ingin membuat semua tautan yang belum dikunjungi berwarna biru atau warna utama situs web Anda:

```html
<link rel="stylesheet" href="styles.css" />
<a target="_blank" href="https://www.example.com">Visit Example.com</a>
```

```css
a:link {
  color: magenta;
}
```

Dalam kasus ini, tautan apa pun yang belum diklik pengguna akan tampak berwarna magenta. Setelah pengguna mengklik tautan tersebut, gaya `:link` tidak lagi berlaku, dan `pseudo-class` `:visited` mengambil alih. `Pseudo-class` `:visited` mulai berlaku setelah pengguna mengklik tautan tersebut, jadi Anda dapat menggunakannya untuk menargetkan tautan yang telah diklik pengguna.

Berikut adalah contoh mengubah status tautan yang telah dikunjungi menjadi warna `purple`:

```html
<link rel="stylesheet" href="styles.css" />
<a target="_blank" href="https://www.example.com">Visit Example.com</a>
```

```css
a:visited {
  color: purple;
}
```

`Pseudo-class` `:visited` membantu pengguna membedakan antara tautan yang telah mereka kunjungi dan tautan yang belum.

`Pseudo-class` `:any-link` adalah kombinasi dari `pseudo-class` `:link` dan `:visited`. Jadi ia cocok dengan `element` *anchor* mana pun yang memiliki `attribute` `href`, terlepas dari apakah ia sudah dikunjungi atau belum.

Berikut adalah contoh mengubah warna tautan untuk `pseudo-class` `:any-link` menjadi `crimson`:

```html
<link rel="stylesheet" href="styles.css" />
<a target="_blank" href="https://www.example.com">Visit Example.com</a>
```

```css
a:any-link {
  color: crimson;
}
```

`Pseudo-class` `:local-link` menargetkan tautan yang mengarah ke dokumen yang sama. Ini berguna ketika Anda ingin membedakan tautan internal dari tautan eksternal. Saat ini, belum ada browser yang mendukung `pseudo-class` `:local-link`."

`Pseudo-class` `:target` memilih `element` yang cocok dengan pengidentifikasi fragmen `URL` saat ini, misalnya `#section1`. Ini sangat berguna untuk halaman dengan navigasi di dalam halaman (*in-page navigation*).

Berikut adalah contoh `HTML` yang mewakili navigasi di dalam halaman. `CSS` menggunakan `pseudo-class` `:target` untuk menata gaya bagian (*section*) yang cocok dengan tujuan navigasi pengguna:

```html
<link rel="stylesheet" href="styles.css" />
<nav id="table-of-contents">
  <ul>
    <li><a href="#section1">Introduction</a></li>
    <li><a href="#section2">Features</a></li>
  </ul>
</nav>

<section id="section1">
  <h2>Introduction</h2>
  <p>This is the introduction section.</p>
</section>

<section id="section2">
  <h2>Features</h2>
  <p>This section describes the features.</p>
</section>
```

```css
section:target {
  background-color: green;
  border: 2px solid green;
  padding: 10px;
}
```

Ketika pengguna mengklik salah satu tautan navigasi, warna latar belakang untuk bagian masing-masing akan berubah menjadi hijau.

## Pertanyaan (Questions)

`Pseudo-class` mana yang memungkinkan Anda menata gaya `element` yang cocok dengan pengidentifikasi fragmen `URL` saat ini, seperti `#section1`?

- [ ] `:hover`
- [ ] `:focus`
- [x] `:target`
- [ ] `:checked`

Kapan `location pseudo-class` sangat berguna?

- [ ] Saat menata gaya `element` berdasarkan hubungan saudaranya (*sibling relationships*).
- [x] Saat menerapkan gaya berdasarkan apakah tautan dikunjungi atau `element` sedang mendapatkan fokus.
- [ ] Saat menata gaya `element` berdasarkan atribut `element` induknya.
- [ ] Saat menyesuaikan tata letak halaman web secara dinamis.

`Pseudo-class` mana yang dirancang untuk menargetkan tautan yang mengarah ke dokumen yang sama tetapi saat ini tidak didukung oleh browser mana pun?

- [ ] `:any-link`
- [x] `:local-link`
- [ ] `:visited`
- [ ] `:target`

---

[⬅️ Sebelumnya](3-what-are-examples-of-input-pseudo-classes.md) | [Selanjutnya ➡️](5-what-are-examples-of-tree-structural-pseudo-classes.md)
