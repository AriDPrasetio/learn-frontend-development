# Review HTML

Tinjau konsep-konsep di bawah ini untuk mempersiapkan diri menghadapi ujian persiapan yang akan datang.

## Dasar-dasar HTML

- **Peran HTML**: `HTML` (`Hypertext Markup Language`) adalah fondasi dari struktur web, yang mendefinisikan `element`-`element` dari suatu halaman web.

- **`HTML Elements`**: Digunakan untuk merepresentasikan konten pada halaman. Sebagian besar di antaranya dibuat oleh `opening tag` dan `closing tag` (misalnya, `<h1></h1>`, `<p></p>`).

- **Struktur HTML**: `HTML` terdiri dari `head` dan `body`, tempat metadata, gaya (`styles`), dan konten distrukturkan.

- **`HTML Elements` yang Umum**: `Heading` (`<h1>` - `<h6>`), paragraf (`<p>`), dan wadah `div` (`<div>`).

- **`div elements`**: `element` `div` adalah `element` `HTML` generik yang tidak memiliki makna semantik apa pun. Ini digunakan sebagai wadah generik untuk menampung `element` `HTML` lainnya.

- **`Void Elements`**: Tidak memiliki `closing tag` (misalnya, `<img>`).

- **`Attributes`**: Menambahkan metadata dan perilaku ke `element`.

## Pengidentifikasi dan Pengelompokan

- **`ID`**: Pengidentifikasi `element` yang unik.

- **`Class`**: Mengelompokkan `element` untuk penataan gaya (`styling`) dan perilaku (`behavior`).

## Karakter Khusus dan Penautan

- **`HTML entities`**: Menggunakan karakter khusus seperti `&amp;` dan `&lt;`.

- **`element` `link`**: Menautkan ke `stylesheet` eksternal.

- **`element` `script`**: Menyematkan file `JavaScript` eksternal.

## Boilerplate dan Encoding

- **`HTML boilerplate`**: Struktur dasar dari sebuah halaman web, yang mencakup `DOCTYPE`, `element` `html`, `head`, dan `body`. Ini harus digunakan sebagai titik awal untuk sebuah dokumen `HTML`.

- **Pengodean karakter UTF-8 (`UTF-8 character encoding`)**: Memastikan tampilan karakter yang universal.

## SEO dan Berbagi ke Media Sosial

- **`Meta tag` (`description`)**: Memberikan deskripsi singkat untuk halaman web dan memengaruhi `SEO`.

- **`Open Graph tag`**: Meningkatkan pengalaman berbagi ke media sosial.

## Element Media dan Optimasi

- **`Replaced elements`**: Konten yang disematkan (misalnya, gambar, `iframe`).

- **Mengoptimalkan media**: Teknik untuk meningkatkan performa media.

- **Format gambar dan lisensi**: Memahami hak penggunaan dan jenis format.

- **`SVG`**: `Scalable vector graphics` untuk visual yang tajam.

## Integrasi Multimedia

- **`element` `audio` dan `video` HTML**: Menyematkan multimedia.

- **Menyematkan dengan `<iframe>`**: Mengintegrasikan konten video eksternal.

## Jalur dan Perilaku Tautan

- **Tipe `attribute` `target`**: Mengontrol perilaku tautan (`link`).

- **Jalur absolut vs. relatif (`Absolute vs. relative paths`)**: Menavigasi direktori.

- **Sintaksis jalur (`Path syntax`)**: Memahami `/`, `./`, `../` untuk navigasi file.

- **Status tautan (`Link states`)**: Mengelola interaksi tautan yang berbeda (`hover`, `active`).

- **Tautan internal (`Internal links`)**: Menautkan ke bagian lain dari halaman dengan menggunakan `href="#id"` pada `element` `a` dan memberikan `id` yang sama pada `element` tujuan.

## Pentingnya Semantic HTML

- **Hierarki struktural untuk `heading elements`**: Sangat penting untuk menggunakan `heading element` yang tepat untuk mempertahankan hierarki struktural dari konten. `element` `h1` adalah tingkat `heading` tertinggi dan `element` `h6` adalah tingkat `heading` terendah.

- **`Presentational HTML elements`**: `element` yang mendefinisikan tampilan dari konten, misalnya, `element` `center`, `big`, dan `font` yang sudah ditinggalkan (`deprecated`).

- **`Semantic HTML elements`**: `element`-`element` ini memberikan makna pada struktur konten. Contohnya meliputi:

- `<header>`: Merepresentasikan konten pengantar.

- `<nav>`: Berisi tautan navigasi.

- `<article>`: Merepresentasikan konten yang berdiri sendiri (*self-contained*).

- `<aside>`: Digunakan untuk bilah sisi (*sidebar*) atau konten terkait.

- `<section>`: Mengelompokkan konten yang saling berkaitan di dalam sebuah dokumen.

- `<footer>`: Mendefinisikan catatan kaki (*footer*) untuk suatu bagian atau dokumen.

## Semantic HTML Elements

- **`element` `Emphasis` (`em`)**: Menandai teks yang memiliki penekanan tekanan (*stress emphasis*).

- **`element` `Idiomatic Text` (`i`)**: Digunakan untuk menyorot nada suara atau suasana hati alternatif, istilah idiomatis dari bahasa lain, istilah teknis, dan pemikiran batin.

- **`element` `Strong Importance` (`strong`)**: Menandai teks yang memiliki tingkat kepentingan yang kuat.

- **`element` `Bring Attention To` (`b`)**: Digunakan untuk menarik perhatian ke teks yang tidak penting bagi makna dari konten.

- **`element` `Description List` (`dl`)**: Digunakan untuk merepresentasikan daftar pengelompokan istilah-deskripsi.

- **`element` `Description Term` (`dt`)**: Digunakan untuk merepresentasikan istilah yang sedang didefinisikan.

- **`element` `Description Details` (`dd`)**: Digunakan untuk merepresentasikan deskripsi dari istilah tersebut.

- **`element` `Block Quotation` (`blockquote`)**: Digunakan untuk merepresentasikan bagian yang dikutip dari sumber lain.

- **`element` `Inline Quotation` (`q`)**: Digunakan untuk merepresentasikan kutipan sebaris (*inline quotation*) yang pendek.

- **`element` `Abbreviation` (`abbr`)**: Digunakan untuk merepresentasikan singkatan atau akronim.

- **`element` `Contact Address` (`address`)**: Digunakan untuk merepresentasikan informasi kontak.

- **`element` `(Date) Time` (`time`)**: Digunakan untuk merepresentasikan tanggal dan/atau waktu.

- **`element` `Superscript` (`sup`)**: Digunakan untuk merepresentasikan teks tika atas (*superscript*).

- **`element` `Subscript` (`sub`)**: Digunakan untuk merepresentasikan teks tika bawah (*subscript*).

- **`element` `Inline Code` (`code`)**: Digunakan untuk merepresentasikan penggalan kode komputer sebaris.

- **`element` `Unarticulated Annotation` (`u`)**: Digunakan untuk merepresentasikan rentang teks sebaris yang harus dirender dengan cara yang menandakan bahwa ia memiliki anotasi non-tekstual.

- **`element` `Ruby Annotation` (`ruby`)**: Digunakan untuk merepresentasikan teks anotasi ruby.

- **`element` `Strikethrough` (`s`)**: Digunakan untuk merepresentasikan konten yang sudah tidak lagi akurat atau relevan.

## Element dan Attribute Form HTML

### Form

- **`element` `form`**: Digunakan untuk membuat `form` `HTML` untuk masukan pengguna (*user input*).

- **Tipe Masukan yang Umum (`Common Input Types`)**:

- `text`, `email`, `password`, `radio`, `checkbox`, `number`, `date`.

- **`attribute` `action`**: Digunakan untuk menentukan `URL` tempat data `form` harus dikirimkan.

- **`attribute` `method`**: Digunakan untuk menentukan metode `HTTP` yang digunakan saat mengirimkan data `form`. Metode yang paling umum adalah `GET` dan `POST`.

```html
<form method="value-goes-here" action="url-goes-here">
  <!-- inputs go inside here -->
</form>
```

- **`element` `input`**: Digunakan untuk membuat bidang masukan (*input field*) untuk masukan pengguna.

- **`attribute` `type`**: Digunakan untuk menentukan jenis bidang masukan, misalnya, `text`, `email`, `number`, `radio`, `checkbox`.

- **`attribute` `placeholder`**: Digunakan untuk menampilkan petunjuk (*hint*) kepada pengguna guna menunjukkan apa yang harus dimasukkan ke dalam bidang masukan.

- **`attribute` `value`**: Digunakan untuk menentukan nilai (*value*) dari masukan. Jika masukan memiliki tipe `button`, `attribute` `value` dapat digunakan untuk mengatur teks tombol.

- **`attribute` `name`**: Digunakan untuk menetapkan nama ke bidang masukan, yang berfungsi sebagai kunci (*key*) saat data `form` dikirimkan. Untuk tombol radio, memberikan `name` yang sama akan mengelompokkannya bersama, sehingga hanya satu opsi dalam kelompok tersebut yang dapat dipilih pada satu waktu.

- **`attribute` `size`**: Digunakan untuk menentukan jumlah karakter yang harus terlihat saat pengguna mengetik ke dalam masukan.

- **`attribute` `min`**: Dapat digunakan dengan tipe masukan seperti `number` untuk menentukan nilai minimum yang diizinkan dalam bidang masukan.

- **`attribute` `max`**: Dapat digunakan dengan tipe masukan seperti `number` untuk menentukan nilai maksimum yang diizinkan dalam bidang masukan.

- **`attribute` `minlength`**: Digunakan untuk menentukan jumlah karakter minimum yang diperlukan dalam sebuah bidang masukan.

- **`attribute` `maxlength`**: Digunakan untuk menentukan jumlah karakter maksimum yang diizinkan dalam sebuah bidang masukan.

- **`attribute` `required`**: Digunakan untuk menentukan bahwa bidang masukan harus diisi sebelum mengirimkan `form`.

- **`attribute` `disabled`**: Digunakan untuk menentukan bahwa sebuah bidang masukan harus dinonaktifkan.

- **`attribute` `readonly`**: Digunakan untuk menentukan bahwa bidang masukan bersifat hanya-baca (*read-only*).

```html
<!-- Text input -->
<input 
  type="text"
  id="name"
  name="name"
  placeholder="e.g. Quincy Larson"
  size="20"
  minlength="5"
  maxlength="30"
  required
/>

<!-- Number input -->
<input 
  type="number"
  id="quantity"
  name="quantity"
  min="2"
  max="10"
  disabled
/>

<!-- Button -->
<input type="button" value="Show Alert" />
```

- **`element` `label`**: Digunakan untuk membuat label bagi sebuah bidang masukan.

- **`attribute` `for`**: Digunakan untuk menentukan untuk bidang masukan mana label tersebut ditujukan.

- **Asosiasi form implisit (`Implicit form association`)**: Bidang masukan dapat diasosiasikan dengan label dengan membungkus bidang masukan di dalam `element` `label`.

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

- **Asosiasi form eksplisit (`Explicit form association`)**: Bidang masukan dapat diasosiasikan dengan label dengan menggunakan `attribute` `for` pada `element` `label`.

```html
<form action="">
  <label for="email">Email Address: </label>
  <input type="email" id="email" />
</form>
```

- **`element` `button`**: Digunakan untuk membuat tombol yang dapat diklik. Sebuah tombol juga dapat memiliki `attribute` `type`, yang mengontrol perilaku tombol saat diaktifkan, misalnya, `submit`, `reset`, `button`.

```html
<button type="button">Show Form</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
```

- **`element` `fieldset`**: Digunakan untuk mengelompokkan masukan-masukan yang saling terkait bersama-sama.

- **`element` `legend`**: Digunakan untuk menambahkan keterangan (*caption*) guna mendeskripsikan kelompok masukan tersebut.

```html
<!-- Radio group -->
<fieldset>
  <legend>Was this your first time at our hotel?</legend>

  <input id="yes-option" type="radio" name="hotel-stay" value="yes" />
  <label for="yes-option">Yes</label>

  <input id="no-option" type="radio" name="hotel-stay" value="no" />
  <label for="no-option">No</label>
</fieldset>

<!-- Checkbox group -->
<fieldset>
  <legend>
    Why did you choose to stay at our hotel? (Check all that apply)
  </legend>

  <input type="checkbox" id="location" name="location" value="location" />
  <label for="location">Location</label>

  <input type="checkbox" id="price" name="price" value="price" />
  <label for="price">Price</label>
</fieldset>
```

- **Status fokus (`Focused state`)**: Ini adalah status dari sebuah bidang masukan saat dipilih oleh pengguna.

## Bekerja dengan Element dan Attribute Tabel HTML

- **`element` `table`**: Digunakan untuk membuat tabel `HTML`.

- **`element` `Table Head` (`thead`)**: Digunakan untuk mengelompokkan konten kepala (*header*) di dalam tabel `HTML`.

- **`element` `Table Row` (`tr`)**: Digunakan untuk membuat baris di dalam tabel `HTML`.

- **`element` `Table Header` (`th`)**: Digunakan untuk membuat sel kepala (*header cell*) di dalam tabel `HTML`.

- **`element` `Table body` (`tbody`)**: Digunakan untuk mengelompokkan konten badan (*body*) di dalam tabel `HTML`.

- **`element` `Table Data Cell` (`td`)**: Digunakan untuk membuat sel data di dalam tabel `HTML`.

- **`element` `Table Foot` (`tfoot`)**: Digunakan untuk mengelompokkan konten kaki (*footer*) di dalam tabel `HTML`.

- **`element` `caption`**: Digunakan untuk menambahkan judul tabel `HTML`.

- **`attribute` `colspan`**: Digunakan untuk menentukan jumlah kolom yang harus direntangkan oleh sebuah sel tabel.

```html
<table>
  <caption>Exam Grades</caption>

  <thead>
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Davis</td>
      <td>Alex</td>
      <td>54</td>
    </tr>

    <tr>
      <td>Doe</td>
      <td>Samantha</td>
      <td>92</td>
    </tr>

    <tr>
      <td>Rodriguez</td>
      <td>Marcus</td>
      <td>88</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">Average Grade</td>
      <td>78</td>
    </tr>
  </tfoot>
</table>
```

## Alat Bantu HTML (HTML Tools)

- **`HTML validator`**: Alat yang memeriksa sintaksis kode `HTML` untuk memastikannya valid.

- **`DOM inspector`**: Alat yang memungkinkan Anda memeriksa dan memodifikasi struktur `HTML` dari sebuah halaman web.

- **`DevTools`**: Kumpulan alat pengembang web yang terpasang langsung di dalam peramban (*browser*) yang membantu Anda melakukan *debug*, membuat profil (*profile*), dan menganalisis halaman web.

## Pengantar Aksesibilitas (Accessibility)

- **`Web Content Accessibility Guidelines`**: `Web Content Accessibility Guidelines` (`WCAG`) adalah sekumpulan panduan untuk membuat konten web lebih mudah diakses oleh penyandang disabilitas. Empat prinsip `WCAG` adalah `POUR` yang merupakan singkatan dari `Perceivable`, `Operable`, `Understandable`, dan `Robust`.

## Teknologi Bantuan untuk Aksesibilitas

- **Pembaca layar (`Screen readers`)**: Program perangkat lunak yang membaca konten layar komputer dengan suara keras. Program ini digunakan oleh tunanetra atau penyandang gangguan penglihatan untuk mengakses web.

- **Keyboard teks besar atau braille**: Digunakan oleh orang dengan gangguan penglihatan untuk mengakses web.

- **Kaca pembesar layar (`Screen magnifiers`)**: Program perangkat lunak yang memperbesar konten layar komputer. Program ini digunakan oleh orang dengan gangguan penglihatan rendah (*low vision*) untuk mengakses web.

- **Perangkat penunjuk alternatif (`Alternative pointing devices`)**: Digunakan oleh orang dengan gangguan mobilitas untuk mengakses web. Ini mencakup perangkat seperti *joystick*, *trackball*, dan bantalan sentuh (*touchpad*).

- **Pengenalan suara (`Voice recognition`)**: Digunakan oleh orang dengan gangguan mobilitas untuk mengakses web. Ini memungkinkan pengguna mengontrol komputer menggunakan suara mereka.

## Alat Audit Aksesibilitas

- **Alat Aksesibilitas Umum**: `Google Lighthouse`, `WAVE`, `IBM Equal Access Accessibility Checker`, dan `axe DevTools` adalah beberapa alat aksesibilitas umum yang digunakan untuk mengaudit aksesibilitas suatu situs web.

## Praktik Terbaik Aksesibilitas

- **Struktur level heading yang tepat**: Anda harus menggunakan level `heading` yang tepat untuk membuat struktur logis bagi konten Anda. Ini membantu teknologi bantuan memahami konten situs web Anda.

- **Aksesibilitas dan Tabel**: Saat menggunakan tabel, Anda harus menggunakan `element` `th` untuk mendefinisikan sel kepala (*header cell*) dan `element` `td` untuk mendefinisikan sel data. Ini membantu teknologi bantuan memahami struktur tabel.

- **Pentingnya masukan memiliki label yang terasosiasi**: Anda harus menggunakan `element` `label` untuk mengasosiasikan label dengan masukan `form`. Ini membantu teknologi bantuan memahami tujuan dari masukan tersebut.

- **Pentingnya teks `alt` yang baik**: Anda harus menggunakan `attribute` `alt` untuk menyediakan teks alternatif untuk gambar. Ini membantu teknologi bantuan memahami konten gambar.

- **Pentingnya teks tautan yang baik**: Anda harus menggunakan teks tautan yang deskriptif untuk membantu pengguna memahami tujuan dari tautan tersebut.

- **Praktik terbaik untuk membuat konten audio dan video yang mudah diakses**: Anda harus menyediakan takarir (*captions*) dan transkrip untuk konten audio dan video agar dapat diakses oleh orang dengan gangguan pendengaran. Anda juga harus menyediakan deskripsi audio (*audio descriptions*) untuk konten video agar dapat diakses oleh orang dengan gangguan penglihatan.

- **`attribute` `tabindex`**: Digunakan untuk membuat `element` dapat menerima fokus (*focusable*) dan menentukan urutan relatif navigasinya menggunakan keyboard. Sangat penting untuk tidak pernah menggunakan `attribute` `tabindex` dengan nilai yang lebih besar dari `0`. Sebagai gantinya, Anda sebaiknya menggunakan nilai `0` atau `-1`.

- **`attribute` `accesskey`**: Digunakan untuk mendefinisikan pintasan keyboard (*keyboard shortcut*) untuk suatu `element`. Ini dapat membantu pengguna dengan gangguan mobilitas menavigasi situs web dengan lebih mudah.

## WAI-ARIA, Peran, dan Attribute

- **`WAI-ARIA`**: Singkatan dari `Web Accessibility Initiative - Accessible Rich Internet Applications`. Ini adalah sekumpulan `attribute` yang dapat ditambahkan ke `element` `HTML` untuk meningkatkan aksesibilitas. Ini memberikan informasi tambahan kepada teknologi bantuan tentang tujuan dan struktur dari konten.

- **Peran ARIA (`ARIA roles`)**: Sekumpulan peran yang telah ditentukan sebelumnya yang dapat ditambahkan ke `element` `HTML` untuk mendefinisikan tujuannya. Ini membantu teknologi bantuan memahami konten situs web. Contohnya mencakup `role="tab"`, `role="menu"`, dan `role="alert"`.

- **`attribute` `aria-label` dan `aria-labelledby`**: `attribute`-`attribute` ini digunakan untuk memberikan nama programatis (atau yang dapat diakses) kepada suatu `element`, yang membantu teknologi bantuan (seperti pembaca layar / `screen reader`) memahami tujuan dari `element` tersebut. Keduanya sering digunakan ketika label visual untuk suatu `element` berupa gambar atau simbol, bukan teks. `aria-label` memungkinkan Anda menentukan nama secara langsung di dalam `attribute`, sedangkan `aria-labelledby` memungkinkan Anda merujuk ke teks yang sudah ada pada halaman.

- **`attribute` `aria-hidden`**: Digunakan untuk menyembunyikan suatu `element` dari teknologi bantuan seperti pembaca layar (`screen reader`). Sebagai contoh, ini dapat digunakan untuk menyembunyikan gambar dekoratif yang tidak menyediakan konten yang bermakna.

- **`attribute` `aria-describedby`**: Digunakan untuk memberikan informasi tambahan tentang suatu `element` dengan mengasosiasikannya dengan `element` lain yang memuat informasi tersebut. Ini membantu teknologi bantuan memahami tujuan dari `element` tersebut.

---
⬅️ Sebelumnya | Selanjutnya ➡️
