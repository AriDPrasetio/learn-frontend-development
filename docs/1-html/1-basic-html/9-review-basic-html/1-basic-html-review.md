# Tinjauan Dasar-Dasar HTML (Basic HTML Review)

## Dasar-Dasar HTML (HTML Basics)

- **Peran HTML (Role of HTML)**: `HTML` merepresentasikan konten dan struktur dari halaman web.

- **Elemen HTML (HTML Elements)**: `element` adalah blok pembangun (*building blocks*) untuk sebuah dokumen `HTML`. `element` merepresentasikan judul (*heading*), paragraf, tautan (*link*), gambar (*image*), dan banyak lagi. Sebagian besar `element` `HTML` terdiri dari tag pembuka (`<elementName>`) dan tag penutup (`</elementName>`).

Berikut adalah sintaksis dasarnya:

```html
<elementName>Content goes here</elementName>
```

- **Elemen Void (Void Elements)**: `void element` tidak boleh memiliki konten apa pun dan hanya memiliki tag awal (*start tag*). Contohnya meliputi `element` `img` dan `meta`.

```html
<img>
<meta>
```

Sangat umum melihat beberapa basis kode yang menyertakan garis miring ke depan `/` di dalam `void element`. Keduanya dapat diterima:

```html
<img>
<img/>
```

- **Atribut (Attributes)**: Atribut (`attribute`) adalah sebuah nilai yang ditempatkan di dalam tag pembuka dari suatu `element` `HTML`. Atribut memberikan informasi tambahan tentang `element` tersebut atau menentukan bagaimana `element` tersebut harus berperilaku. Berikut adalah sintaksis dasar untuk sebuah atribut:

```html
<element attribute="value"></element>
```

Sebuah atribut boolean (`boolean attribute`) adalah atribut yang dapat hadir (*present*) atau tidak hadir (*absent*) dalam sebuah tag `HTML`. Jika hadir, nilainya adalah `true`, jika tidak maka nilainya adalah `false`. Contoh atribut boolean meliputi `disabled`, `readonly`, dan `required`.

- **Komentar (Comments)**: Komentar digunakan dalam pemrograman untuk meninggalkan catatan bagi diri Anda sendiri dan pengembang lain di dalam kode Anda. Berikut adalah sintaksis untuk komentar dalam `HTML`:

```html
<!--This is an HTML comment.-->
```

## Elemen HTML Umum (Common HTML Elements)

- **Elemen Heading (Heading Elements)**: Ada enam `element` *heading* dalam `HTML`. `element` *heading* dari `h1` hingga `h6` digunakan untuk menandakan tingkat kepentingan konten di bawahnya. Semakin kecil angkanya, semakin tinggi tingkat kepentingannya, sehingga `element` `h2` memiliki tingkat kepentingan yang lebih rendah dibandingkan `element` `h1`.

```html
<h1>most important heading element</h1>
<h2>second most important heading element</h2>
<h3>third most important heading element</h3>
<h4>fourth most important heading element</h4>
<h5>fifth most important heading element</h5>
<h6>least important heading element</h6>
```

- **Elemen Paragraf (Paragraph Elements)**: Ini digunakan untuk paragraf pada halaman web.

```html
<p>This is a paragraph element.</p>
```

- **Elemen `img` (`img` Elements)**: `element` `img` digunakan untuk menambahkan gambar ke halaman web. Atribut `src` digunakan untuk menentukan lokasi gambar tersebut. Untuk `element` gambar, merupakan praktik yang baik untuk menyertakan atribut lain yang disebut atribut `alt`. Berikut contoh `element` `img` dengan atribut `src` dan `alt`:

```html
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
```

- **Elemen `body` (`body` Element)**: `element` ini digunakan untuk merepresentasikan konten dari dokumen `HTML`.

```html
<body>
  <h1>CatPhotoApp</h1>
  <p>This is a paragraph element.</p>
</body>
```

- **Elemen `section` (`section` Elements)**: `element` ini digunakan untuk membagi konten menjadi bagian-bagian yang lebih kecil.

```html
<section>
  <h2>About Me</h2>
  <p>Hi, I am Jane Doe and I am a web developer.</p>
</section>
```

- **Elemen `div` (`div` Elements)**: `element` ini adalah `element` `HTML` generik yang tidak memiliki arti semantik apa pun. `element` ini digunakan sebagai wadah (*container*) generik untuk menampung `element` `HTML` lainnya.

```html
<div>
  <h1>I am a heading</h1>
  <p>I am a paragraph</p>
</div>
```

- **Elemen Anchor (`a`) (Anchor (`a`) Elements)**: `element` ini digunakan untuk menerapkan tautan (*link*) pada halaman web. Atribut `href` digunakan untuk menentukan ke mana tautan tersebut harus mengarah saat pengguna mengkliknya.

```html
<a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a>
```

- **Elemen Daftar Tak Berurutan (`ul`) dan Berurutan (`ol`) (Unordered (`ul`) and Ordered (`ol`) List Elements)**: Untuk membuat daftar item dengan tanda *bullet*, Anda harus menggunakan `element` `ul` dengan satu atau beberapa `element` `li` yang disarangkan di dalamnya seperti ini:

```html
<ul>
  <li>catnip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
```

Untuk membuat daftar item berurutan, Anda harus menggunakan `element` `ol`:

```html
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
```

- **Elemen Penekanan (`em`) (Emphasis (`em`) Element)**: Ini digunakan untuk memberikan penekanan pada suatu teks.

```html
<p>Cats <em>love</em> lasagna.</p>
```

- **Elemen Kepentingan Kuat (`strong`) (Strong Importance (`strong`) Element)**: `element` ini digunakan untuk memberikan penekanan kuat pada teks guna menunjukkan rasa urgensi dan keseriusan.

```html
<p>
  <strong>Important:</strong> Before proceeding, make sure to wear your safety goggles.
</p>
```

- **Elemen `figure` dan `figcaption` (`figure` and `figcaption` Elements)**: `element` `figure` digunakan untuk mengelompokkan konten seperti gambar dan diagram. `element` `figcaption` digunakan untuk merepresentasikan teks keterangan (*caption*) untuk konten tersebut di dalam `element` `figure`.

```html
<figure>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two tabby kittens sleeping together on a couch.">
  <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
</figure>
```

- **Elemen `main` (`main` Element)**: `element` ini digunakan untuk merepresentasikan konten utama dari suatu halaman web.

- **Elemen `footer` (`footer` Element)**: `element` ini ditempatkan di bagian bawah dokumen `HTML` dan biasanya berisi informasi hak cipta serta tautan penting halaman lainnya.

```html
<footer>
  <p>
    No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
  </p>
</footer>
```

- **Elemen `button` (`button` Element)**: `element` ini digunakan untuk membuat tombol yang dapat diklik.

```html
<button>Click me</button>
```

## Pengidentifikasi dan Pengelompokan (Identifiers and Grouping)

- **ID**: Pengidentifikasi `element` yang unik untuk `element` `HTML`. Nama `id` hanya boleh digunakan sekali per dokumen `HTML`.

```html
<h1 id="title">Movie Review Page</h1>
```

Nama `id` tidak boleh memiliki spasi. Jika nama `id` Anda berisi beberapa kata, Anda dapat menggunakan tanda hubung (*dash*) atau garis bawah (*underscore*) di antara kata-kata tersebut seperti ini:

```html
<div id="red-box"></div>
```

- **Class**: `class` digunakan untuk mengelompokkan `element` guna penataan gaya (*styling*) dan perilaku (*behavior*).

```html
<div class="box"></div>
```

Berbeda dengan ID, Anda dapat menggunakan kembali nama `class` yang sama di seluruh dokumen `HTML`. Nilai `class` juga dapat memiliki spasi seperti ini:

```html
<div class="box red-box"></div>
<div class="box blue-box"></div>
```

## Karakter Khusus dan Penautan (Special Characters and Linking)

- **Entitas HTML (HTML entities)**: Sebuah entitas `HTML`, atau referensi karakter (*character reference*), adalah sekumpulan karakter yang digunakan untuk merepresentasikan karakter khusus yang dicadangkan (*reserved character*) dalam `HTML`. Contohnya meliputi simbol ampersand (`&amp;`) dan simbol kurang dari (`&lt;`).

```html
<p>This is an &lt;img /&gt; element</p>
```

- **Elemen `link` (`link` Element)**: `element` ini digunakan untuk menautkan ke sumber daya eksternal seperti *stylesheet* dan ikon situs (*favicon*). Berikut adalah sintaksis dasar penggunaan `element` `link` untuk file `CSS` eksternal:

```html
<link rel="stylesheet" href="./styles.css" />
```

Atribut `rel` digunakan untuk menentukan hubungan antara sumber daya yang ditautkan dan dokumen `HTML`. Atribut `href` digunakan untuk menentukan lokasi `URL` untuk sumber daya eksternal tersebut.

- **Elemen `script` (`script` Element)**: `element` ini digunakan untuk menyematkan kode yang dapat dieksekusi (*executable code*).

```html
<body>
  <script>
    alert("Welcome to freeCodeCamp");
  </script>
</body>
```

Meskipun secara teknis Anda dapat menulis seluruh kode `JavaScript` Anda di dalam tag `script`, merupakan praktik terbaik untuk menautkan ke file `JavaScript` eksternal sebagai gantinya. Berikut adalah contoh penggunaan `element` `script` untuk menautkan ke file `JavaScript` eksternal:

```html
<script src="path-to-javascript-file.js"></script>
```

Atribut `src` digunakan di sini untuk menentukan lokasi bagi file `JavaScript` eksternal tersebut.

## Boilerplate dan Pengkodean Karakter (Boilerplate and Encoding)

- **HTML boilerplate**: Ini adalah sebuah *boilerplate* yang mencakup struktur dasar dan `element` penting yang dibutuhkan oleh setiap dokumen `HTML`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>freeCodeCamp</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <!--Headings, paragraphs, images, etc. go inside here-->
  </body>
</html>
```

- **`DOCTYPE`**: Ini digunakan untuk memberi tahu *browser* versi `HTML` mana yang sedang Anda gunakan.

- **Elemen `html` (`html` Element)**: Ini merepresentasikan `element` tingkat teratas (*top-level element*) atau akar (*root*) dari sebuah dokumen `HTML`. Untuk menentukan bahasa bagi dokumen tersebut, Anda harus menggunakan atribut `lang`.

- **Elemen `head` (`head` Element)**: Bagian `head` berisi metadata penting yang merupakan informasi di balik layar yang dibutuhkan oleh *browser* dan mesin pencari (*search engines*).

- **Elemen `meta` (`meta` Elements)**: `element` ini merepresentasikan metadata situs Anda. `element` ini memiliki rincian tentang hal-hal seperti pengkodean karakter (*character encoding*), bagaimana situs web seperti Twitter harus mempratinjau tautan halaman Anda, dan banyak lagi.

- **Elemen `title` (`title` Element)**: `element` ini digunakan untuk mengatur teks yang muncul di tab atau jendela *browser*.

- **Pengkodean karakter UTF-8 (UTF-8 character encoding)**: `UTF-8`, atau *UCS Transformation Format 8*, adalah pengkodean karakter standar yang digunakan secara luas di web. Pengkodean karakter (*character encoding*) adalah metode yang digunakan komputer untuk menyimpan karakter sebagai data. Atribut `charset` digunakan di dalam `element` `meta` untuk menyetel pengkodean karakter ke `UTF-8`.

## SEO dan Berbagi ke Media Sosial (SEO and Social Sharing)

- **SEO**: *Search Engine Optimization* adalah praktik yang mengoptimalkan halaman web agar menjadi lebih terlihat dan memiliki peringkat lebih tinggi di mesin pencari.

- **Elemen Meta (`description`) (Meta (`description`) Element)**: Ini digunakan untuk memberikan deskripsi singkat untuk halaman web dan untuk meningkatkan SEO.

```html
<meta
  name="description"
  content="Discover expert tips and techniques for gardening in small spaces, choosing the right plants, and maintaining a thriving garden."
/>
```

- **Tag Open Graph (Open Graph tags)**: Protokol *open graph* memungkinkan Anda mengontrol bagaimana konten situs web Anda muncul di berbagai platform media sosial, seperti Facebook, LinkedIn, dan banyak lagi. Dengan menyetel properti *open graph* ini, Anda dapat memikat pengguna agar ingin mengklik dan berinteraksi dengan konten Anda. Anda dapat menyetel properti ini melalui kumpulan `element` `meta` di dalam bagian `head` `HTML` Anda.

- **Properti `og:title` (`og:title` Property)**: Ini digunakan untuk menyetel judul yang ditampilkan pada postingan media sosial.

```html
<meta content="freeCodeCamp.org" property="og:title" />
```

- **Properti `og:type` (`og:type` Property)**: Properti `type` digunakan untuk merepresentasikan tipe konten yang dibagikan di media sosial. Contoh dari konten ini meliputi artikel, situs web, video, atau musik.

```html
<meta property="og:type" content="website" />
```

- **Properti `og:image` (`og:image` Property)**: Ini digunakan untuk menyetel gambar yang ditampilkan pada postingan media sosial.

```html
<meta
  content="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
  property="og:image"
/>
```

- **Properti `og:url` (`og:url` Property)**: Ini digunakan untuk menyetel `URL` yang akan diklik pengguna pada postingan media sosial.

```html
<meta property="og:url" content="https://www.freecodecamp.org" />
```

## Elemen Media dan Optimalisasi (Media Elements and Optimization)

- **Replaced elements**: Sebuah `replaced element` adalah `element` yang kontennya ditentukan oleh sumber daya eksternal dan bukan oleh `CSS` itu sendiri. Contohnya adalah `element` `iframe`. `iframe` merupakan singkatan dari *inline frame*. Ini adalah sebuah `inline element` yang digunakan untuk menyematkan konten `HTML` lain secara langsung di dalam halaman `HTML`.

```html
<iframe src="https://www.example.com" title="Example Site"></iframe>
```

Anda dapat menyertakan atribut `allowfullscreen` yang memungkinkan pengguna menampilkan iframe dalam mode layar penuh (*full screen*).

```html
<iframe
  src="video-url"
  width="width-value"
  height="height-value"
  allowfullscreen
></iframe>
```

Untuk menyematkan video di dalam sebuah `iframe`, Anda dapat menyalinnya langsung dari layanan video populer seperti YouTube dan Vimeo, atau menentukannya sendiri dengan atribut `src` yang mengarah ke `URL` dari video tersebut. Berikut contoh penyematan kursus YouTube freeCodeCamp yang populer dengan `element` `iframe`:

```html
<h1>A freeCodeCamp YouTube Video Embedded with the iframe Element</h1>

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/PkZNo7MFNFg?si=-UBVIUNM3csdeiWF"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
```

Ada beberapa `replaced element` lainnya, seperti `video` dan `embed`. Dan beberapa `element` berperilaku sebagai `replaced element` dalam keadaan tertentu. Berikut adalah contoh `element` `input` dengan atribut `type` yang disetel ke `image`:

```html
<input type="image" alt="Descriptive text goes here" src="example-img-url">
```

- **Optimalisasi media (Optimizing media)**: Ada tiga hal yang perlu dipertimbangkan saat menggunakan media, seperti gambar, pada halaman web Anda: ukuran (`size`), format (`format`), dan kompresi (`compression`). Sebuah algoritma kompresi digunakan untuk memperkecil ukuran file atau data.

- **Format gambar (Image formats)**: Dua dari format file yang paling umum adalah `PNG` dan `JPG`, tetapi format-format ini bukan lagi format yang paling ideal untuk menyajikan gambar. Kecuali jika Anda memerlukan dukungan untuk *browser* lawas, Anda harus mempertimbangkan untuk menggunakan format yang lebih optimal, seperti `WEBP` atau `AVIF`.

- **Lisensi gambar (Image licenses)**: Sebuah gambar di bawah ranah publik (*public domain*) tidak memiliki hak cipta yang melekat padanya dan bebas digunakan tanpa batasan apa pun. Gambar yang dilisensikan secara khusus di bawah lisensi Creative Commons 0 dianggap sebagai *public domain*. Beberapa gambar mungkin dirilis di bawah lisensi permisif (*permissive license*), seperti lisensi Creative Commons, atau lisensi `BSD` yang digunakan freeCodeCamp.

- **SVG**: *Scalable Vector Graphics* melacak data berdasarkan jalur (`path`) dan persamaan matematika untuk memetakan titik, garis, dan kurva. Makna sebenarnya dari hal ini adalah bahwa grafik vektor, seperti `SVG`, dapat diskalakan ke ukuran berapa pun tanpa memengaruhi kualitasnya.

## Integrasi Multimedia (Multimedia Integration)

- **Elemen `audio` dan `video` (`audio` and `video` Elements)**: `element` `audio` dan `video` memungkinkan Anda menambahkan konten suara dan video ke dokumen `HTML` Anda. `element` `audio` mendukung format audio populer seperti `mp3`, `wav`, dan `ogg`. `element` `video` mendukung format `mp4`, `ogg`, dan `webm`.

```html
<audio src="CrystalizeThatInnerChild.mp3"></audio>
```

Jika Anda ingin melihat pemutar audio (*audio player*) di halaman, maka Anda dapat menambahkan `element` `audio` dengan atribut `controls`:

```html
<audio src="CrystalizeThatInnerChild.mp3" controls></audio>
```

Atribut `controls` memungkinkan pengguna mengelola pemutaran audio, termasuk menyesuaikan volume, serta menjeda (*pause*) atau melanjutkan (*resume*) pemutaran. Atribut `controls` adalah atribut boolean yang dapat ditambahkan ke suatu `element` untuk mengaktifkan kontrol pemutaran bawaan. Jika dihilangkan, tidak ada kontrol yang akan ditampilkan.

- **Atribut `autoplay` (`autoplay` Attribute)**: Atribut `autoplay` adalah atribut boolean yang membuat audio atau video mulai diputar secara otomatis segera setelah hal itu dapat dilakukan tanpa terhenti.

- **Atribut `loop` (`loop` Attribute)**: Atribut `loop` adalah atribut boolean yang membuat audio diputar ulang secara terus-menerus.

```html
<audio
  src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
  loop
  controls
></audio>
```

- **Atribut `muted` (`muted` Attribute)**: Saat hadir di dalam `element` `audio`, atribut boolean `muted` akan memulai audio dalam keadaan dibisukan (*muted*).

```html
<audio
  src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
  loop
  controls
  muted
></audio>
```

- **Elemen `source` (`source` Element)**: Dalam hal tipe file audio, terdapat perbedaan mengenai *browser* mana yang mendukung tipe tertentu. Untuk mengakomodasi hal ini, Anda dapat menggunakan `element` `source` di dalam `element` `audio` dan *browser* akan memilih sumber pertama yang dipahaminya. Berikut contoh penggunaan beberapa `element` `source` untuk sebuah `element` `audio`:

```html
<audio controls>
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.wav" type="audio/wav" />
  <source src="audio.mp3" type="audio/mpeg" />
</audio>
```

Semua atribut yang telah kita pelajari sejauh ini juga didukung dalam `element` `video`. Berikut contoh penggunaan `element` `video` dengan atribut `loop`, `controls`, dan `muted`:

```html
<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  loop
  controls
  muted
></video>
```

- **Atribut `poster` (`poster` Attribute)**: Jika Anda ingin menampilkan gambar saat video sedang diunduh, Anda dapat menggunakan atribut `poster`. Atribut ini tidak tersedia untuk `element` `audio` dan unik hanya untuk `element` `video`.

```html
<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  loop
  controls
  muted
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620"
></video>
```

## Jenis Atribut Target (Target Attribute Types)

- **Atribut `target` (`target` Attribute)**: Atribut ini memberi tahu *browser* di mana harus membuka `URL` untuk `anchor element` tersebut. Ada empat kemungkinan nilai penting untuk atribut ini: `_self`, `_blank`, `_parent`, dan `_top`. Ada nilai kelima, yang disebut `_unfencedTop`, yang saat ini digunakan untuk `FencedFrame API` eksperimental. Anda mungkin belum memiliki alasan untuk menggunakannya.

- **Nilai `_self` (`_self` Value)**: Ini adalah nilai *default* untuk atribut `target`. Nilai ini membuka tautan dalam konteks penjelajahan (*browsing context*) saat ini. Dalam kebanyakan kasus, ini adalah tab atau jendela (*window*) saat ini.

```html
<a href="https://freecodecamp.org" target="_self">Visit freeCodeCamp</a>
```

- **Nilai `_blank` (`_blank` Value)**: Nilai ini membuka tautan dalam konteks penjelajahan (*browsing context*) baru. Biasanya, ini akan terbuka di tab baru. Namun beberapa pengguna mungkin mengonfigurasi *browser* mereka untuk membuka jendela baru sebagai gantinya.

```html
<a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
```

- **Nilai `_parent` (`_parent` Value)**: Nilai ini membuka tautan di induk (*parent*) dari konteks saat ini. Misalnya, jika situs web Anda memiliki iframe, nilai `_parent` di dalam iframe tersebut akan terbuka di tab/jendela situs web Anda, bukan di dalam frame yang disematkan.

```html
<a href="https://freecodecamp.org" target="_parent">Visit freeCodeCamp</a>
```

- **Nilai `_top` (`_top` Value)**: Nilai ini membuka tautan di konteks penjelajahan teratas (*top-most browsing context*), bayangkan "induk dari induk". Ini mirip dengan `_parent`, tetapi tautan akan selalu terbuka di tab/jendela *browser* penuh, bahkan untuk frame bersarang (*nested embedded frames*).

```html
<a href="https://freecodecamp.org" target="_top">Visit freeCodeCamp</a>
```

## Jalur Absolut vs. Relatif (Absolute vs. Relative Paths)

- **Definisi jalur (Path definition)**: Sebuah jalur (`path`) adalah sebuah *string* yang menentukan lokasi file atau direktori dalam sistem file (*file system*). Dalam pengembangan web, `path` memungkinkan pengembang menautkan ke sumber daya seperti gambar (`image`), *stylesheet*, skrip (`script`), dan halaman web lainnya.

- **Sintaksis Jalur (Path Syntax)**: Ada tiga sintaksis kunci yang perlu diketahui. Pertama adalah garis miring (*slash*), yang dapat berupa garis miring terbalik (`\`) atau garis miring ke depan (`/`) tergantung pada sistem operasi Anda. Yang kedua adalah titik tunggal (`.`). Dan terakhir, kita memiliki titik ganda (`..`). Garis miring dikenal sebagai "pemisah jalur" (*path separator*). Garis miring digunakan untuk menandai jeda dalam teks antara nama folder atau file. Satu titik menunjuk ke direktori saat ini (*current directory*), dan dua titik menunjuk ke direktori induk (*parent directory*).

```html
public/index.html
./favicon.ico
../src/index.css
```

- **Jalur Absolut (Absolute Path)**: Sebuah `absolute path` adalah rute lengkap ke suatu sumber daya di dalam sistem file. Jalur ini dimulai dari direktori akar (*root directory*), mencakup setiap direktori lainnya, dan akhirnya nama file beserta ekstensinya. "*Root directory*" mengacu pada direktori atau folder tingkat teratas dalam suatu hierarki.

- **URL Absolut (Absolute URL)**: Sebuah `absolute URL` dibangun di atas `absolute path` untuk sumber daya di web. Selain jalur, ia mencakup protokol, yang dapat berupa `http`, `https`, atau `file`, dan nama domain. Berikut adalah contoh `absolute URL` yang menautkan ke logo freeCodeCamp:

```html
<a href="https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg">
  View fCC Logo
</a>
```

- **Jalur Relatif (Relative Path)**: Sebuah `relative path` menentukan lokasi suatu file relatif terhadap direktori dari file saat ini. Jalur ini tidak menyertakan protokol atau nama domain, menjadikannya lebih pendek dan lebih fleksibel untuk tautan internal di dalam situs web yang sama. Berikut contoh penautan ke halaman `about.html` dari halaman `contact.html`, di mana keduanya berada di folder yang sama:

```html
<p>
  Read more on the
  <a href="about.html">About Page</a>
</p>
```

## Status Tautan (Link States)

- **`:link`**: Ini adalah status *default*. Status ini merepresentasikan tautan yang belum pernah dikunjungi, diklik, atau diinteraksikan oleh pengguna. Anda dapat menganggap status ini menyediakan gaya dasar untuk semua tautan di halaman Anda. Status lainnya dibangun di atasnya.

- **`:visited`**: Ini berlaku ketika pengguna telah mengunjungi halaman yang ditautkan. Secara *default*, ini mengubah tautan menjadi ungu, tetapi Anda dapat memanfaatkan `CSS` untuk memberikan indikasi visual yang berbeda kepada pengguna.

- **`:hover`**: Status ini berlaku saat pengguna mengarahkan kursor mereka di atas tautan. Status ini berguna untuk menarik perhatian ekstra ke sebuah tautan, guna memastikan pengguna memang berniat untuk mengkliknya.

- **`:focus`**: Status ini berlaku saat kita memfokuskan kursor/navigasi pada suatu tautan.

- **`:active`**: Status ini berlaku untuk tautan yang sedang diaktifkan oleh pengguna. Hal ini biasanya berarti mengklik tautan dengan tombol utama tetikus (klik kiri, dalam banyak kasus).

---
[⬅️ Sebelumnya](../8-working-with-links/4-what-are-the-different-link-states.md) | Selanjutnya ➡️
