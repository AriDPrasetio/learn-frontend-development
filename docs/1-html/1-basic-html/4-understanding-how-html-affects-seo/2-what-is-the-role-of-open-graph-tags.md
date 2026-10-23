# Apa Peran Tag Open Graph, dan Bagaimana Pengaruhnya terhadap SEO?


Protokol `Open Graph` memungkinkan Anda untuk mengontrol bagaimana konten situs web Anda muncul di berbagai platform media sosial, seperti Facebook, LinkedIn, dan banyak lagi. Dengan menyetel properti-properti `Open Graph` ini, Anda dapat memikat pengguna agar tertarik mengklik dan berinteraksi dengan konten Anda. Anda dapat menyetel properti-properti ini melalui sekumpulan `element` `meta` di dalam bagian `head` `HTML` Anda.

Properti `OG` pertama yang penting untuk disertakan adalah `title`. Berikut adalah contoh penyetelan `title` `OG` untuk beranda freeCodeCamp:

```html
<meta content="freeCodeCamp.org" property="og:title" />

```

Untuk `attribute` `property`, Anda perlu menentukan nilainya sebagai `og:title`. `Attribute` `content` adalah tempat di mana Anda menuliskan judul yang ingin Anda tampilkan pada situs media sosial.

Properti `OG` penting berikutnya adalah `type`. Berikut adalah contoh penggunaan `type` `OG` untuk beranda freeCodeCamp:

```html
<meta property="og:type" content="website" />

```

Properti `type` digunakan untuk merepresentasikan jenis konten yang sedang dibagikan di media sosial. Contoh dari konten ini mencakup artikel, situs web, video, atau musik.

Properti `OG` penting ketiga adalah `image`. Berikut adalah contoh penyetelan `image` `OG` untuk beranda freeCodeCamp:

```html
<meta
  content="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
  property="og:image"
/>

```

Dalam contoh ini, gambar `Open Graph` diarahkan ke logo freeCodeCamp. Semua gambar ini harus memiliki kualitas tinggi dengan dimensi dan rasio yang baik. Sebagian besar platform media sosial menyediakan kriteria persyaratan gambar guna membantu Anda memastikan konten Anda ditampilkan secara baik di situs mereka. Sebagai contoh, halaman dokumentasi developers.facebook.com menyatakan:

"gunakan gambar yang berukuran minimal 1200 x 630 piksel untuk tampilan terbaik pada perangkat beresolusi tinggi. Minimal, Anda harus menggunakan gambar berukuran 600 x 315 piksel untuk menampilkan kiriman halaman tautan dengan gambar yang lebih besar."

Properti `OG` penting keempat adalah `url`. Berikut adalah contoh penyetelan `url` `OG` untuk beranda freeCodeCamp:

```html
<meta property="og:url" content="https://www.freecodecamp.org" />

```

Ada banyak properti `OG` lain yang dapat Anda atur, seperti `description`, `audio`, `video`, dan `locale`. Namun demikian, `url`, `image`, `type`, dan `title` dari `Open Graph` adalah properti-properti yang paling mendasar untuk disertakan.

Lalu bagaimana properti `Open Graph` ini memengaruhi Optimasi Mesin Pencari (`SEO`)? Ketika konten Anda dibagikan di media sosial, properti `OG` yang disusun dengan baik dapat mempercantik tampilan konten Anda di umpan (*feed*) pengguna. Hal ini dapat meningkatkan rasio klik-tayang (*click-through rate*), yang pada gilirannya dapat memberi sinyal kepada mesin pencari bahwa konten Anda bernilai relevan dan menarik.


## Pertanyaan (Questions)


Untuk apa properti `Open Graph` digunakan?


- [ ] Untuk menyematkan konten multimedia interaktif secara langsung ke halaman web.

- [x] Untuk mengatur bagaimana konten situs web Anda akan terlihat di berbagai platform media sosial.

- [ ] Untuk menghasilkan iklan *pop-up* yang dinamis di situs web.

- [ ] Untuk mengenkripsi data sensitif yang dikirimkan antara server web dan browser pengguna.



Apa fungsi dari `property="og:title"` di dalam `element` `meta`?


- [ ] Secara otomatis menyesuaikan ukuran dan gaya *font* judul halaman web berdasarkan preferensi pengguna.

- [ ] Mengarahkan browser untuk menampilkan emotikon atau emoji tertentu sebagai judul halaman web.

- [ ] Menyebabkan halaman web memutar file audio tertentu saat judul ditampilkan di tab browser.

- [x] Menentukan judul konten halaman web Anda saat dibagikan di platform media sosial.



Apa fungsi dari `property="og:type"` di dalam `element` `meta`?


- [ ] Memilih gaya *font* bawaan halaman.

- [ ] Memicu iklan *pop-up* saat halaman web dimuat.

- [x] Menentukan jenis konten yang digunakan untuk halaman web Anda saat dibagikan di platform media sosial.

- [ ] Mengubah warna latar belakang halaman web berdasarkan zona waktu pengguna.



---
[⬅️ Sebelumnya](1-what-is-the-role-of-the-meta-description.md) | [Selanjutnya ➡️](../5-working-with-audio-and-video-elements/1-what-are-the-roles-of-the-html-audio-and-video-elements.md)
