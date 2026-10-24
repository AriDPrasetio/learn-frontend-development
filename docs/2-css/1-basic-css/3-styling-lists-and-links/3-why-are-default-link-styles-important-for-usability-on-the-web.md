# Mengapa Style Link Default Penting untuk Usability di Web?

`Style` `link` bawaan (*default*) memainkan peran penting dalam meningkatkan kegunaan (*usability*) dan aksesibilitas di web.

`Styles` ini, yang biasanya berwarna biru untuk tautan yang belum dikunjungi (*unvisited links*) dan ungu untuk tautan yang sudah dikunjungi (*visited links*), telah menjadi standar yang diharapkan dan diandalkan pengguna saat menjelajahi situs web.

Tujuan utama dari `default link styles` adalah memberikan petunjuk visual yang jelas yang membantu pengguna membedakan antara `element` interaktif dan non-interaktif pada halaman web.

Perbedaan ini sangat mendasar untuk menciptakan pengalaman penjelajahan yang intuitif dan ramah pengguna (*user-friendly*).

Mari kita perhatikan `styles` bawaan dasar untuk tautan:

```html
<link rel="stylesheet" href="styles.css">

<a href="/">Example link</a>
```

```css
a:link {
  color: blue;
  text-decoration: underline;
}

a:visited {
  color: purple;
}
```

`Styles` ini melayani beberapa fungsi penting.

Pertama, warna biru untuk `link` yang belum dikunjungi terlihat menonjol terhadap sebagian besar warna latar belakang (*background colors*) dan teks, membuat tautan mudah dikenali. Kontras ini sangat penting agar pengguna dapat dengan cepat memindai (*scan*) halaman dan menemukan `element` navigasi atau informasi penting.

Garis bawah (*underline*) semakin menegaskan bahwa teks tersebut dapat diklik, memberikan petunjuk visual tambahan. Hal ini khususnya bermanfaat bagi pengguna yang mungkin mengalami buta warna atau kesulitan membedakan warna.

Perubahan warna untuk tautan yang dikunjungi (biasanya menjadi ungu) membantu pengguna melacak halaman mana saja yang telah mereka kunjungi. Fitur ini sangat berharga untuk menavigasi situs web besar atau melakukan riset, karena mencegah pengguna mengunjungi kembali halaman yang sama secara tidak sengaja.

Perhatikan contoh `HTML` berikut:

```html
<p>Learn more about <a href="https://www.example.com/cats">cats</a> and <a href="https://www.example.com/dogs">dogs</a>.</p>
```

Tanpa `CSS` kustom apa pun, sebagian besar peramban (*browser*) akan me-*render* tautan-tautan ini dalam warna biru dengan garis bawah. Setelah mengeklik salah satu tautan, warnanya akan berubah menjadi ungu, memberikan umpan balik langsung kepada pengguna mengenai riwayat penelusuran mereka.

Meskipun umum bagi desainer untuk memodifikasi `default styles` ini agar sesuai dengan estetika situs web, mempertahankan prinsip-prinsip inti di baliknya tetaplah sangat penting.

Jika Anda memilih untuk mengubah `default styles`, pastikan tautan tetap dapat dibedakan secara jelas dari teks biasa, terdapat perbedaan visual antara `visited` dan `unvisited links`, dan warna yang dipilih memberikan kontras yang cukup dengan latar belakang (*background*).

Sebagai contoh, Anda dapat menggunakan `style` kustom seperti ini:

```html
<link rel="stylesheet" href="styles.css">

<a href="/">Example link</a>
```

```css
a:link {
  color: blue;
  text-decoration: none;
  border-bottom: 1px solid blue;
}

a:visited {
  color: purple;
  border-bottom: 1px solid purple;
}
```

Ini mempertahankan skema warna biru dan ungu sekaligus menggantikan garis bawah dengan `bottom border` untuk tampilan yang lebih modern.

Penting juga untuk mempertimbangkan berbagai *states* dari tautan. Selain *state* `default` dan `visited`, tautan biasanya memiliki *state* `hover` dan `active`:

```html
<link rel="stylesheet" href="styles.css">

<a href="/">Example link</a>
```

```css
a:hover {
  color: red;
}

a:active {
  color: darkorange;
}
```

*State-state* ini memberikan umpan balik instan kepada pengguna saat mereka berinteraksi dengan tautan, meningkatkan *usability* situs secara keseluruhan.

Sebagai kesimpulan, meskipun memungkinkan untuk menyesuaikan `link styles`, prinsip-prinsip di balik `default styles` harus tetap dipertahankan.

Mereka memainkan peran penting dalam menciptakan pengalaman web yang mudah digunakan (*usable*) dan mudah diakses (*accessible*), membantu pengguna menavigasi dan berinteraksi dengan konten secara efektif.

Selalu utamakan kejelasan dan pengalaman pengguna (*user experience*) saat merancang `link styles` untuk situs web Anda.

## Pertanyaan (Questions)

Mengapa penting untuk memiliki warna yang berbeda bagi tautan yang sudah dikunjungi (*visited links*)?

- [ ] Ini membuat situs web terlihat lebih berwarna.
- [x] Ini membantu pengguna melacak halaman yang telah mereka kunjungi.
- [ ] Tautan yang dikunjungi lebih penting daripada tautan yang belum dikunjungi.
- [ ] Ini merupakan persyaratan hukum untuk situs web.

Manakah dari hal berikut yang BIASANYA BUKAN merupakan *style default* untuk tautan di sebagian besar *browser*?

- [ ] Warna biru untuk tautan yang belum dikunjungi.
- [ ] Garis bawah (*underline*) untuk semua tautan.
- [ ] Warna ungu untuk tautan yang sudah dikunjungi.
- [x] Ketebalan font tebal (*bold font weight*) untuk semua tautan.

Saat menyesuaikan `link styles`, prinsip penting apa yang harus dipertahankan?

- [ ] Semua tautan harus berwarna biru.
- [ ] Tautan harus selalu bergaris bawah.
- [x] Tautan harus dapat dibedakan secara jelas dari teks biasa.
- [ ] Tautan yang sudah dikunjungi dan yang belum dikunjungi harus memiliki gaya yang sama.

---

[⬅️ Sebelumnya](2-how-do-the-different-list-style-properties-work.md) | [Selanjutnya ➡️](4-how-do-you-style-the-different-link-states.md)
