# Review: Semantic HTML

## Pentingnya Semantic HTML (Importance of Semantic HTML)

- **Hierarki struktural untuk heading elements**: Sangat penting untuk menggunakan `heading element` yang benar untuk mempertahankan hierarki struktural konten. `Element` `h1` adalah tingkat `heading` tertinggi dan `element` `h6` adalah tingkat `heading` terendah. Melewatkan tingkat `heading` mengganggu hierarki logis bagi pembaca layar (`screen reader`) dan menghambat aksesibilitas (`accessibility`).

- **Presentational HTML elements**: `Element`-`element` yang menentukan tampilan konten. Contoh: `element` yang sudah usang (`deprecated`) seperti `center`, `big`, dan `font`.

- **Semantic HTML elements**: `Element`-`element` yang memiliki makna dan struktur. Contoh: `header`, `nav`, `figure`.

## Semantic HTML Elements

- **Header element (`header`)**: digunakan untuk mendefinisikan `header` dari dokumen atau bagian (`section`).

```html
<header>
  <h1>CatPhotoApp</h1>
  <p>Welcome to our cat gallery.</p>
</header>
```

- **Main element (`main`)**: digunakan untuk memuat konten utama dari halaman web.

```html
<main>
  <section>
    <h2>Cat Photos</h2>
    <p>Browse adorable cat pictures.</p>
  </section>
</main>
```

- **Section element (`section`)**: digunakan untuk membagi konten menjadi bagian-bagian yang lebih kecil.

```html
<section>
  <h2>About Me</h2>
  <p>Hi, I am Jane Doe and I am a web developer.</p>
</section>
```

- **Navigation Section element (`nav`)**: mewakili bagian dengan tautan navigasi.

```html
<nav>
  <ul>
    <li><a href="#photos">Photos</a></li>
    <li><a href="#videos">Videos</a></li>
  </ul>
</nav>
```

- **Article element (`article`)**: digunakan untuk mewakili konten mandiri dan independen yang dapat berdiri sendiri, seperti postingan blog atau artikel berita.

```html
<article>
  <h2>My First Blog Post</h2>
  <p>This is the content of my first blog post.</p>
</article>
```

- **Figure element (`figure`)**: digunakan untuk memuat ilustrasi dan diagram.

```html
<figure>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
    alt="Two tabby kittens sleeping together on a couch."
  />
  <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
</figure>
```

- **Emphasis element (`em`)**: menandai teks yang memiliki penekanan tekanan (`stress emphasis`).

```html
<p>
  Never give up on <em>your</em> dreams.
</p>
```

- **Idiomatic Text element (`i`)**: digunakan untuk menyoroti nada atau suasana hati alternatif (`alternative voice or mood`), istilah idiomatik dari bahasa lain, istilah teknis, dan pikiran.

```html
<p>
  There is a certain <i lang="fr">je ne sais quoi</i> in the air.
</p>
```

Atribut `lang` di dalam tag pembuka `<i>` digunakan untuk menentukan bahasa dari konten. Dalam hal ini, bahasanya adalah bahasa Prancis. `Element` `i` tidak menunjukkan apakah teks tersebut penting atau tidak, `element` ini hanya menunjukkan bahwa teks tersebut berbeda dari teks di sekitarnya.

- **Memilih CSS daripada `i`/`em`**: karena `i` dan `em` membawa makna, teks yang hanya perlu terlihat miring untuk tujuan presentasional harus ditata gayanya dengan `CSS` sebagai gantinya.

- **Strong Importance element (`strong`)**: menandai teks yang memiliki tingkat kepentingan yang kuat (`strong importance`).

```html
<p>
  <strong>Warning:</strong> This product may cause allergic reactions.
</p>
```

- **Bring Attention To element (`b`)**: digunakan untuk menarik perhatian ke teks yang tidak penting bagi makna konten. `Element` ini umumnya digunakan untuk menyoroti kata kunci dalam ringkasan atau nama produk dalam ulasan.

```html
<p>
  We tested several products, including the <b>SuperSound 3000</b> for audio quality, the <b>QuickCharge Pro</b> for fast charging, and the <b>Ecoclean Vacuum</b> for cleaning. The first two performed well, but the <b>Ecoclean Vacuum</b> did not meet expectations.
</p>
```

- **Description List element (`dl`)**: digunakan untuk mewakili daftar pengelompokan istilah-deskripsi.

- **Description Term element (`dt`)**: digunakan untuk mewakili istilah yang didefinisikan.

- **Description Details element (`dd`)**: digunakan untuk mewakili deskripsi dari istilah tersebut.

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

- **Block Quotation element (`blockquote`)**: digunakan untuk mewakili bagian yang dikutip dari sumber lain. `Element` ini memiliki atribut `cite`. Nilai dari atribut `cite` adalah `URL` dari sumber tersebut.

```html
<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
</blockquote>
```

- **Citation element (`cite`)**: digunakan untuk mencantumkan sumber karya yang dirujuk secara visual. Menandai judul referensi.

```html
<div>
  <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
  </blockquote>
  <p>
    -Quincy Larson, <cite>How to learn to Code and Get a Developer Job [Full Book].</cite>
  </p>
</div>
```

- **Inline Quotation element (`q`)**: digunakan untuk mewakili kutipan sebaris yang pendek.

```html
<p>
  As Quincy Larson said,
  <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Momentum is everything.
  </q>
</p>
```

- **Abbreviation element (`abbr`)**: digunakan untuk mewakili singkatan. Untuk membantu pengguna memahami apa singkatan tersebut, Anda dapat menampilkan bentuk lengkapnya, deskripsi yang dapat dibaca manusia, dengan atribut `title`.

```html
<p>
  <abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.
</p>
```

- **Contact Address element (`address`)**: digunakan untuk mewakili informasi kontak.

- **Line Break element (`br`)**: digunakan untuk membuat pemisah baris di dalam teks, seperti memisahkan baris-baris pada alamat fisik.

```html
<address>
  123 Main Street<br>
  Springfield, IL 62701
</address>
```

- **(Date) Time element (`time`)**: digunakan untuk mewakili tanggal dan/atau waktu. Atribut `datetime` digunakan untuk menerjemahkan tanggal dan waktu ke dalam format yang dapat dibaca mesin.

```html
<p>
  The reservations are for the <time datetime="20:00">20:00 </time>
</p>
```

- **ISO 8601 Date attribute (`datetime`)**: digunakan untuk merepresentasikan tanggal dan waktu dalam format yang dapat dibaca mesin. Format standarnya adalah `YYYY-MM-DDThh:mm:ss`, dengan huruf kapital `T` sebagai pemisah antara tanggal dan waktu.

- **Superscript element (`sup`)**: digunakan untuk mewakili teks tikatas (`superscript`). Kasus penggunaan umum untuk `element` `sup` mencakup eksponen, huruf superior, dan bilangan ordinal.

```html
<p>
  2<sup>2</sup> (2 squared) is 4.
</p>
```

- **Subscript element (`sub`)**: digunakan untuk mewakili teks tikbawah (`subscript`). Kasus penggunaan umum untuk `element` `subscript` mencakup rumus kimia, catatan kaki, dan indeks variabel.

```html
<p>
  CO<sub>2</sub>
</p>
```

- **Inline Code element (`code`)**: digunakan untuk mewakili fragmen `code` komputer.

- **Preformatted Text element (`pre`)**: mewakili teks yang telah diformat sebelumnya.

```html
<pre>
  <code>
    body {
      color: red;
    }
  </code>
</pre>
```

- **Unarticulated Annotation element (`u`)**: digunakan untuk mewakili bentangan teks sebaris (`inline text`) yang harus di-render dengan cara yang menunjukkan bahwa teks tersebut memiliki anotasi non-tekstual.

```html
<p>
  You can use the unarticulated annotation element to highlight
  <u>inccccort</u> <u>spling</u> <u>issses</u>.
</p>
```

- **Ruby Annotation element (`ruby`)**: digunakan untuk menganotasi teks dengan pelafalan atau penjelasan makna. Contoh penggunaannya adalah untuk tipografi Asia Timur.

- **Ruby fallback parenthesis element (`rp`)**: digunakan sebagai cadangan (`fallback`) untuk peramban yang tidak memiliki dukungan untuk menampilkan anotasi ruby.

- **Ruby text element (`rt`)**: digunakan untuk menunjukkan teks bagi anotasi ruby. Biasanya digunakan untuk pelafalan, atau detail terjemahan dalam tipografi Asia Timur.

```html
<ruby>
  明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
</ruby>
```

- **Strikethrough element (`s`)**: digunakan untuk mewakili konten yang tidak lagi akurat atau relevan.

```html
<p>
  <s>Tomorrow's hike will be meeting at noon.</s>
</p>
<p>
  Due to unforeseen weather conditions, the hike has been canceled.
</p>
```

- **Skema href `tel:` dan `mailto:`**: digunakan untuk membuat tautan yang dapat diklik yang membuka panggilan telepon atau menulis email saat diklik.

```html
<a href="tel:+11234567890">Call us</a>
<a href="mailto:example@email.com">Email us</a>
```

- **Tautan internal (`internal links`)**: digunakan untuk menautkan ke bagian lain dari halaman dengan menggunakan `href="#id"` pada `element` `a` dan memberikan `id` yang sama pada `element` tujuan. Ini umumnya digunakan untuk tautan lewati (`skip links`), daftar isi (`table of contents`), atau halaman panjang dengan beberapa bagian.

```html
<a href="#about-section">Go to About Section</a>

<section id="about-section">
  <h2>About</h2>
  <p>This is the about section of the page.</p>
</section>
```

---
[⬅️ Sebelumnya](../4-working-with-specialized-semantic-elements/3-what-are-the-u-s-and-ruby-elements-used-for.md) | Selanjutnya ➡️
