# Bagaimana Cara Memberi Style pada Berbagai Link State?

Terdapat beberapa *state* yang berbeda dari sebuah tautan, termasuk `link`, `visited`, `hover`, `focus`, dan `active`. *State-state* ini penting untuk membantu pengguna mengenali tautan dan memberikan umpan balik yang jelas setelah interaksi, yang meningkatkan kegunaan (*usability*) maupun aksesibilitas.

Memberikan gaya (*styling*) pada berbagai *link state* ini sangat penting untuk kegunaan dan aksesibilitas, karena menyediakan petunjuk visual mengenai status tautan saat ini. Ini membantu pengguna memahami tautan mana yang telah mereka kunjungi, tautan mana yang sedang mereka ajak berinteraksi, dan apa yang akan terjadi saat mereka mengeklik.

Bagi pengguna dengan gangguan penglihatan atau disabilitas kognitif, gaya yang berbeda ini dapat membuat navigasi jauh lebih mudah dan lebih intuitif.

Selain itu, *link states* yang jelas meningkatkan pengalaman pengguna secara keseluruhan dengan memberikan umpan balik langsung atas interaksi pengguna, mengurangi kebingungan, dan meningkatkan kemudahan navigasi situs.

*State-state* ini dapat ditata gayanya menggunakan apa yang disebut `pseudo-classes` dalam `CSS`.

Sebuah `pseudo-class` adalah kata kunci (*keyword*) yang ditambahkan ke `selector` yang menentukan *state* khusus dari `element` yang dipilih.

Sebagai contoh, `:hover` dapat mengubah warna tombol saat penunjuk (*pointer*) pengguna melayang di atasnya, sementara `:visited` dapat mengubah warna tautan yang sudah pernah dikunjungi.

`Pseudo-classes` memungkinkan Anda menata gaya `element` berdasarkan *state*-nya atau interaksi pengguna dengannya, tanpa memerlukan *markup* tambahan di dalam `HTML` Anda.

Sintaks dari sebuah `pseudo-class` terlihat seperti ini di mana `A` adalah `selector` dan `:B` adalah `pseudo-class`:

```css
A:B {
  property: value;
}
```

Untuk lebih memahami cara menata berbagai *link states*, mari kita lihat beberapa contoh.

`Pseudo-class` `:link` menata gaya tautan yang belum dikunjungi, menandakan bahwa tautan tersebut dapat diklik.

Berikut adalah contoh penargetan sebuah `element` `anchor` dan penggunaan `pseudo-class` `:link`:

```html
<link rel="stylesheet" href="styles.css">

<a href="/">Example link</a>
```

```css
/* Normal state (unvisited link) */
a:link { 
  color: red;
}
```

Contoh di atas akan mengubah warna biru bawaan tautan menjadi `red` ketika tautan tersebut belum dikunjungi.

`:visited` menata gaya tautan yang telah dikunjungi atau diklik, membantu pengguna melacak tautan mana yang telah mereka klik sebelumnya. Berikut adalah contoh penggunaan `pseudo-class` `:visited`:

```html
<link rel="stylesheet" href="styles.css">

<a href="https://www.freecodecamp.org/learn/" target="_blank">freeCodeCamp</a>
```

```css
/* Visited link */
a:visited {
  color: green;
}
```

Kode ini akan memberi warna `green` pada tautan saat tautan tersebut telah diklik.

`:hover` mengubah gaya tautan saat pengguna melayangkan kursor di atasnya, memberikan petunjuk visual bahwa tautan tersebut bersifat interaktif. Berikut contoh penggunaan `pseudo-class` `:hover`:

```html
<link rel="stylesheet" href="styles.css">

<a href="/">Example link</a>
```

```css
/* Hover state */
a:hover {
  color: green;
}
```

Kode ini akan mengubah warna tautan menjadi `green` saat kursor *mouse* diarahkan ke atasnya (*hovered*).

`:focus` menambahkan gaya di sekitar tautan saat sedang difokuskan, seperti saat bernavigasi menggunakan *keyboard*, atau untuk meningkatkan aksesibilitas.

Berikut adalah contoh penggunaan `property` `outline` untuk menerapkan garis luar oranye solid saat tautan sedang menerima fokus (*focused*).

```html
<link rel="stylesheet" href="styles.css">

<a href="/">Example link</a>
```

```css
/* Focus state */
a:focus {
  outline: 2px solid orange;
}
```

`:active` mengubah gaya tautan saat tautan sedang diklik, memberikan umpan balik langsung kepada pengguna bahwa tindakan mereka sedang didaftarkan/dieksekusi. Berikut contoh penggunaan `pseudo-class` `:active`:

```html
<link rel="stylesheet" href="styles.css">

<a href="/">Example link</a>
```

```css
/* Active state */
a:active {
  color: pink;
}
```

Contoh kode ini akan membuat warna tautan menjadi `pink` secara langsung ketika tautan tersebut sedang diklik.

## Pertanyaan (Questions)

`Pseudo-class` `CSS` manakah yang digunakan untuk memberi gaya pada tautan yang belum pernah dikunjungi?

- [ ] `:visited`
- [x] `:link`
- [ ] `:hover`
- [ ] `:active`

Perubahan visual apa yang biasanya dilibatkan oleh *state* `hover` dalam `CSS`?

- [ ] Tautan menjadi lebih besar.
- [x] Warna teks tautan berubah.
- [ ] Teks tautan menjadi tebal (*bold*).
- [ ] Teks tautan diberi garis bawah.

`Pseudo-class` `CSS` manakah yang akan Anda gunakan untuk menambahkan garis tepi luar (*outline*) yang terlihat di sekitar tautan ketika tautan tersebut dinavigasikan menggunakan *keyboard*?

- [ ] `:link`
- [ ] `:hover`
- [x] `:focus`
- [ ] `:active`

---

[⬅️ Sebelumnya](3-why-are-default-link-styles-important-for-usability-on-the-web.md) | [Selanjutnya ➡️](../4-working-with-backgrounds-and-borders/1-how-to-work-with-background-image-size-repeat-position-and-attachment.md)
