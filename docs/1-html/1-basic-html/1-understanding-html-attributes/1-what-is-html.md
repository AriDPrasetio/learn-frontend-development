# Apa Peran yang Dimainkan HTML di Web?


## Apa Itu HTML?

`HTML`, singkatan dari HyperText Markup Language, adalah bahasa *markup* untuk membuat halaman web. Ketika Anda mengunjungi sebuah situs web dan melihat konten seperti paragraf, judul (`heading`), tautan (`link`), gambar, dan video, itulah `HTML`.

Berikut adalah contoh kecil yang menggunakan `element` `HTML`. Coba edit sebagian teks di editor dan lihat perubahan yang diperbarui di jendela pratinjau (*preview*).

```html
<h1>Main heading element</h1>

<p>I am a paragraph element.</p>
```

`HTML` merepresentasikan konten dan struktur halaman web melalui penggunaan `element`. Sebagian besar `element` memiliki `tag` pembuka (*opening tag*) dan `tag` penutup (*closing tag*). Terkadang `tag-tag` tersebut disebut sebagai `start tag` dan `end tag`. Di antara kedua `tag` tersebut, Anda memiliki konten. Konten ini dapat berupa teks atau `element` `HTML` lainnya.

Berikut adalah contoh lain dari `element` paragraf (`p`). Ubah teks di editor menjadi `I love coding!` dan lihat hasilnya di jendela pratinjau.

```html
<p>I am a paragraph element.</p>
```

## Tag Pembuka dan Tag Penutup

Baik `tag` pembuka maupun penutup dimulai dengan tanda kurung sudut kiri (`<`), dan diakhiri dengan tanda kurung sudut kanan (`>`), dengan nama `tag` ditempatkan di antara kedua tanda kurung sudut ini. Meskipun nama `tag` `HTML` bersifat *case-insensitive* (tidak membedakan huruf besar dan kecil), menulisnya dengan huruf kecil (*lowercase*) merupakan konvensi yang diterima secara luas dan merupakan praktik terbaik (*best practice*).

Berikut adalah tampilan lebih dekat hanya pada `tag` pembuka dan penutup paragraf:

```html
<p>

```

```html
</p>

```

Yang membedakan `tag` pembuka dari `tag` penutup adalah garis miring (*forward slash*) (`/`) yang ditempatkan tepat setelah tanda kurung sudut kiri pada `tag` penutup. Beberapa `element` `HTML` tidak memiliki `tag` penutup. Ini dikenal sebagai `void element`.

## Void Element

Berikut adalah contoh `element` gambar yang merupakan sebuah `void element`:

```html
<img>

```

Perhatikan bahwa `element` gambar ini tidak memiliki `tag` penutup dan tidak memiliki konten apa pun. `Void element` tidak dapat memiliki konten apa pun dan hanya memiliki sebuah `start tag`.

Terkadang Anda akan melihat `void element` yang menggunakan `/` sebelum `>` seperti ini:

```html
<img />

```

Meskipun banyak *code formatter* seperti Prettier memilih untuk menyertakan `/` pada `void element`, spesifikasi `HTML` menyatakan bahwa kehadiran `/` tersebut "tidak menandai `start tag` sebagai *self-closing*, melainkan tidak diperlukan dan tidak memiliki efek apa pun".

Dalam pengembangan di dunia nyata, Anda akan melihat kedua bentuk ini, jadi penting untuk terbiasa dengan keduanya.

## Atribut HTML (HTML Attributes)

Jika Anda ingin menampilkan gambar, Anda perlu menyertakan beberapa `attribute` di dalam `element` gambar Anda. `Attribute` adalah nilai khusus yang digunakan untuk menyesuaikan perilaku dari suatu `element` `HTML`.

Berikut adalah contoh `element` gambar dengan `attribute` `src`. Perbarui nilai dari `attribute` `src` menjadi `"https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"` dan Anda akan melihat gambar berubah menjadi dua kucing yang sedang tidur dengan tenang.

```html
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg" />
```

`Attribute` `src` digunakan untuk menentukan lokasi gambar tersebut. Untuk `element` gambar, merupakan praktik yang baik untuk menyertakan `attribute` lain yang disebut `attribute` `alt`. `Attribute` `alt` digunakan untuk menyediakan teks deskriptif yang singkat untuk gambar.

Berikut adalah contoh `element` gambar dengan `attribute` `src` dan `alt`. Cobalah merusak gambar tersebut dengan memperbarui nilai `src` menjadi `"https://.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"`. Anda akan melihat gambar menghilang dan hanya teks `alt` yang muncul.

```html
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two tabby kittens sleeping together on a couch." />
```

## Peran HTML Berdampingan dengan CSS dan JavaScript

Jadi, Anda mungkin bertanya-tanya apakah `HTML` saja sudah cukup untuk membangun sebuah situs web. Jawabannya adalah: tergantung. Jika Anda sedang membangun proyek latihan kecil yang hanya menampilkan teks dan gambar, `HTML` saja mungkin sudah cukup. Namun, jika Anda membuat situs web profesional modern, Anda perlu memiliki `HTML`, `CSS`, dan `JavaScript`.

`HTML` berguna untuk konten dan struktur. `CSS` untuk penataan gaya (*styling*). `JavaScript` untuk menambahkan interaktivitas pada halaman web Anda. Analogi yang baik untuk hal ini adalah membandingkan `HTML`, `CSS`, dan `JavaScript` dengan sebuah bangunan utuh.

`HTML` merepresentasikan batako, beton, dan besi yang menyusun dinding. Ini adalah fondasi yang membuat bangunan menjadi kokoh. `CSS` merepresentasikan desain interior dan eksterior yang membuat bangunan terlihat indah. `JavaScript` merepresentasikan sistem kelistrikan dan perpipaan air yang memastikan akses tak terputus ke air dan listrik.


## Pertanyaan (Questions)


Apa kepanjangan dari HTML?


- [ ] HyperText Maker Language

- [ ] HyperText Marker Language

- [ ] HyperText Markdown Language

- [x] HyperText Markup Language



Manakah dari berikut ini yang merupakan sintaks yang benar untuk `tag` penutup?


- [ ] `<;p>`

- [ ] `<p>`

- [x] `</p>`

- [ ] `<///p/>`



Manakah dari berikut ini yang merupakan `attribute` valid yang digunakan di dalam `element` `img`?


- [x] `src`

- [ ] `bold`

- [ ] `closing`

- [ ] `div`



---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-are-attributes.md)
