# Apa Saja Praktik Terbaik untuk Menyembunyikan Konten agar Tidak Menjadi Tidak Aksesibel?

Menyembunyikan konten pada halaman web adalah praktik yang umum dalam pengembangan web, namun sangat penting untuk melakukannya dengan cara yang tidak mengorbankan aksesibilitas (*accessibility*). Berbagai teknik penyembunyian dapat memberikan dampak yang berbeda-beda terhadap cara teknologi asistif (*assistive technologies*) menginterpretasikan dan menyajikan konten kepada pengguna. Mari kita pelajari beberapa praktik terbaik untuk menyembunyikan konten sambil tetap menjaga aksesibilitas. Salah satu metode umum untuk menyembunyikan konten adalah dengan menggunakan `display: none`. Berikut adalah contohnya:

```html
<link rel="stylesheet" href="styles.css">
<p class="hidden">Hidden text</p>
<p>Visible text</p>
```

```css
.hidden {
  display: none;
}
```

Meskipun cara ini efektif menyembunyikan konten secara visual, cara ini juga menghapusnya dari pohon aksesibilitas (*accessibility tree*). *Accessibility tree* adalah struktur yang digunakan oleh teknologi asistif, seperti pembaca layar (*screen readers*), untuk menginterpretasikan dan berinteraksi dengan konten pada halaman web. Struktur ini merepresentasikan konten dan makna semantiknya sedemikian rupa sehingga teknologi asistif dapat memahami dan menyajikannya kepada pengguna.

Menggunakan `display: none` berarti bahwa *screen reader* dan teknologi asistif lainnya tidak akan dapat mengakses konten ini, karena konten tersebut tidak disertakan di dalam *accessibility tree*. Oleh karena itu, penting untuk menggunakan metode ini hanya jika Anda ingin benar-benar menghapus konten baik dari tampilan visual maupun dari aksesibilitas.

Pendekatan lain untuk menyembunyikan konten adalah dengan menggunakan `visibility: hidden`:

```html
<link rel="stylesheet" href="styles.css">
<p class="hidden">Hidden text</p>
<p>Visible text</p>
```

```css
.hidden {
  visibility: hidden;
}
```

`visibility: hidden` menyembunyikan konten secara visual namun tetap mempertahankannya di dalam alur dokumen (*document flow*), yang berarti elemen tersebut masih menempati ruang pada halaman. Sama seperti `display: none`, `visibility: hidden` juga menghapus konten dari *accessibility tree*. Ini berarti teknologi asistif, seperti *screen reader*, tidak akan dapat mengakses konten yang tersembunyi tersebut. Gunakanlah `visibility: hidden` hanya jika Anda ingin menyembunyikan konten dari semua orang, termasuk orang-orang yang menggunakan teknologi asistif.

Untuk konten yang harus disembunyikan secara visual tetapi tetap dapat diakses oleh *screen reader*, Anda dapat menggunakan teknik yang sering disebut sebagai "*visually hidden*" atau "*screen reader only*". Berikut adalah contoh penggunaan kelas `CSS` `.sr-only` yang merupakan teknik umum untuk menyembunyikan konten secara visual sambil tetap membuatnya dapat diakses oleh *screen reader*:

```html
<link rel="stylesheet" href="styles.css">
<p class="sr-only">Hidden text</p>
<p>Visible text</p>
```

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

Dalam contoh ini, kita menggunakan properti seperti `position`, `clip`, dan `white-space`, yang akan Anda pelajari pada pelajaran-pelajaran berikutnya. Untuk saat ini, Anda cukup mengetahui bahwa aturan `CSS` ini secara efektif menyembunyikan konten secara visual sambil tetap membuatnya dapat diakses oleh *screen reader*. Teknik ini berguna untuk memberikan konteks tambahan bagi pengguna *screen reader* tanpa memengaruhi tata letak (*layout*) visual.

Untuk beralih visibilitas konten (*toggling content visibility*), pertimbangkan untuk menggunakan atribut `hidden`:

```html
<p hidden>This content is hidden</p>
<p>This content is visible</p>
```

Atribut `hidden` didukung oleh sebagian besar `browser` modern dan menyembunyikan konten baik secara visual maupun dari *accessibility tree*. Atribut ini dapat dialihkan (*toggled*) dengan mudah menggunakan `JavaScript`. Terakhir, berhati-hatilah dalam menyembunyikan konten penting. Jika suatu informasi sangat penting untuk memahami atau menggunakan situs web, informasi tersebut harus terlihat dan dapat diakses oleh semua pengguna. Sembunyikan konten hanya jika hal tersebut benar-benar meningkatkan pengalaman pengguna (*user experience*). Dengan mengikuti praktik-praktik terbaik ini, Anda dapat memastikan bahwa konten Anda tetap dapat diakses oleh semua pengguna, terlepas dari bagaimana cara mereka berinteraksi dengan situs web Anda.

## Pertanyaan (Questions)

Apa masalah aksesibilitas utama saat menggunakan deklarasi gaya `display: none` dan `visibility: hidden`, atau atribut `hidden` untuk menyembunyikan konten?

- [ ] Metode-metode ini membuat hanya teknologi asistif seperti pembaca layar (*screen reader*) yang dapat mengakses konten tersembunyi tersebut.
- [ ] Konten hanya tersembunyi sampai pengguna mengarahkan kursor mouse ke atas konten tersebut.
- [x] Metode-metode ini menghapus konten dari pohon aksesibilitas (*accessibility tree*), sehingga mustahil bagi teknologi asistif seperti *screen reader* untuk mengakses konten tersembunyi tersebut.
- [ ] Metode-metode ini tidak berfungsi pada beberapa browser.

Apa tujuan utama dari teknik CSS "visually hidden" atau "screen reader only"?

- [ ] Untuk menyembunyikan konten dari semua pengguna.
- [ ] Untuk membuat konten hanya terlihat pada perangkat seluler (*mobile*).
- [x] Untuk menyembunyikan konten secara visual sambil tetap menjaganya dapat diakses oleh pembaca layar (*screen reader*).
- [ ] Untuk membuat animasi transisi bagi konten.

Kapan Anda sebaiknya menyembunyikan konten pada halaman web?

- [ ] Ketika konten yang Anda sembunyikan kurang penting dibandingkan konten lain di halaman tersebut.
- [ ] Ketika konten yang Anda sembunyikan salah.
- [x] Hanya ketika hal tersebut benar-benar meningkatkan pengalaman pengguna (*user experience*).
- [ ] Kapan pun Anda menginginkannya.

---

[⬅️ Sebelumnya](1-what-are-some-tools-to-check-for-good-color-contrast-on-sites.md) | Selanjutnya ➡️
