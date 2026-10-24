# Apa Saja Istilah Desain Umum yang Membantu Anda Berkomunikasi dengan Desainer?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau konsep-konsep desain tersebut agar Anda lebih memahami cara kerjanya.

Sebagai seorang `developer`, Anda mungkin perlu bekerja sama secara erat dengan desainer. Jika Anda memahami terminologi desain dasar, Anda akan memiliki kosakata yang sama dan dapat berpartisipasi dalam proses desain secara lebih aktif. Hal ini dapat membuat alur kerja (*workflow*) Anda menjadi lebih efisien dan menghasilkan pengalaman pengguna (*user experience*) yang lebih baik.

## Tata Letak (Layout)

Mari kita mulai. Kita akan mengawalinya dengan istilah tata letak (`layout`). `Layout` adalah bagaimana `element-element` visual disusun pada sebuah halaman atau layar untuk menyampaikan suatu pesan. `Element-element` ini dapat mencakup teks, gambar, dan `white space`. `Layout` ibarat cetak biru (*blueprint*) dari sebuah desain. Desainer harus mempertimbangkan penempatan, ukuran, dan `hierarchy` dari setiap `element`.

```html
<link rel="stylesheet" href="styles.css" />

<header>
  <div class="container">
    <h1>ShopMate</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Cart (2)</a></li>
      </ul>
    </nav>
  </div>
</header>

<main>
  <section class="hero">
    <h2>Fall Collection 2025</h2>
    <p>Discover the latest trends</p>
    <a href="#" class="btn">Shop Now</a>
  </section>

  <section class="products container">
    <h3>Featured Products</h3>
    <div class="product-grid">
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 1" />
        <h4>Product 1</h4>
        <p>$49.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 2" />
        <h4>Product 2</h4>
        <p>$59.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 3" />
        <h4>Product 3</h4>
        <p>$39.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 4" />
        <h4>Product 4</h4>
        <p>$29.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <p>&copy; 2025 ShopMate. All rights reserved.</p>
  </div>
</footer>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #f9f9f9;
  color: #333;
}

.container{
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

header h1 {
  color: #2c3e50;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

.hero {
  background-color: lightgrey;
  text-align: center;
  padding: 4rem 1rem;
  margin-bottom: 2rem;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.products h3 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: #2c3e50;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.product-card img {
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.product-card h4 {
  margin: 0.5rem 0;
}

.product-card button {
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.product-card button:hover {
  background: #219150;
}

footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
}
```

## Perataan (Alignment)

Istilah yang berkaitan erat dengan `layout` adalah `alignment` (perataan). `Alignment` adalah bagaimana `element-element` ditempatkan dalam hubungannya satu sama lain. Menggunakan `alignment` dengan benar sangat membantu untuk membuat desain terlihat rapi dan terorganisir. Desainer menciptakan keteraturan visual dengan meratakan `element` di sepanjang garis imajiner, tepi, atau titik tengah.

```html
<link rel="stylesheet" href="styles.css" />

<div class="container">
  <section class="alignment left">
    <h2>Left-Aligned</h2>
    <p>This content is aligned to the left. Left alignment is most common for body text because it follows natural reading flow in left-to-right languages.</p>
  </section>

  <section class="alignment center">
    <h2>Center-Aligned</h2>
    <p>This content is centered. Center alignment is useful for titles, headings, and content that needs to be the focal point.</p>
  </section>

  <section class="alignment right">
    <h2>Right-Aligned</h2>
    <p>This content is aligned to the right. Right alignment can be used for stylistic emphasis or when aligning content against the right edge of a container.</p>
  </section>
</div>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #f4f4f4;
  color: #333;
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.alignment {
  background: #fff;
  border-left: 4px solid #3498db;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.alignment:hover {
  transform: scale(1.02);
}

.alignment h2 {
  margin-bottom: 0.5rem;
  color: #3498db;
}

.left {
  text-align: left;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}
```

## Komposisi dan Keseimbangan (Composition and Balance)

Bagus. Sekarang mari kita bahas tentang komposisi (`composition`). `Composition` adalah seni menyusun `element-element` untuk menciptakan desain yang harmonis. Hal ini menentukan bagaimana `element` seperti gambar, teks, dan bentuk saling berhubungan satu sama lain serta berkontribusi pada desain secara artistik. Meskipun `layout` sebagian besar berfokus pada penempatan `element-element`, `composition` juga mempertimbangkan dampak artistik yang dihasilkan dari penempatan tersebut pada keseluruhan desain.

`Composition` berkaitan erat dengan konsep keseimbangan (`balance`). `Balance` adalah bagaimana bobot visual didistribusikan di dalam sebuah `composition`. Desainer bertujuan untuk menciptakan keseimbangan (*equilibrium*) melalui susunan yang simetris atau asimetris. Desain yang seimbang akan terasa harmonis.

```html
<link rel="stylesheet" href="styles.css">

<h1>Composition &amp; Balance</h1>

<div class="section symmetrical">
  <div class="box-container">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">A</div>
  </div>
  <div class="description">Symmetrical Balance – Equal weight on both sides.</div>
</div>

<div class="section asymmetrical">
  <div class="box-container">
    <div class="box">A</div>
    <div class="box">C</div>
    <div class="box">B</div>
  </div>
  <div class="description">Asymmetrical Balance – Unequal but still harmonious.</div>
</div>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 40px;
  background: #f4f4f4;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 60px;
}

.box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.box {
  width: 100px;
  height: 100px;
  background: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 8px;
}

.asymmetrical .box:nth-child(2) {
  transform: scale(1.5);
  background: #e74c3c;
}

.description {
  text-align: center;
  margin-top: 50px;
  font-style: italic;
  color: #333;
}
```

## Hierarki (Hierarchy)

`Hierarchy` (hierarki) adalah konsep penting lainnya yang harus Anda ketahui. `Hierarchy` menetapkan urutan tingkat kepentingan dari `element-element` di dalam sebuah desain. Intinya adalah memastikan bahwa informasi yang paling penting diperhatikan terlebih dahulu. Anda dapat menerapkan hierarki visual (`visual hierarchy`) menggunakan ukuran, warna, `contrast`, `alignment`, `white space`, dan bahkan tipografi (`typography`).

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <div class="headline">Upgrade to Pro</div>
  <div class="subheadline">Get more features and storage</div>
  <div class="body-text">
    The Pro plan offers advanced tools, priority support, and 10x more storage. Perfect for professionals and teams looking to scale their productivity.
  </div>
  <a href="#" class="call-to-action">Start Free Trial</a>
</div>
```

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fefefe;
  margin: 40px;
  line-height: 1.6;
  color: #333;
}

.card {
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.headline {
  font-size: 32px;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 10px;
}

.subheadline {
  font-size: 20px;
  color: #555;
  margin-bottom: 20px;
}

.body-text {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.call-to-action {
  display: inline-block;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.call-to-action:hover {
  background-color: #2980b9;
}
```

## Kontras (Contrast)

Untuk menciptakan perbedaan yang jelas antarelemen, Anda dapat menggunakan `contrast` (kontras). `Contrast` sangat membantu untuk memandu perhatian pengguna ke apa yang ingin Anda tekankan. Anda dapat melakukan ini melalui variasi warna, ukuran, bentuk, tekstur, atau karakteristik visual lainnya. `Contrast` yang kuat juga sangat membantu untuk meningkatkan keterbacaan (*readability*).

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <h1>Contrast in Design</h1>
  <p>
    Contrast helps draw attention to important elements. It also makes content easier to read and visually engaging.
  </p>

  <div class="highlight-box">
    This box stands out because of strong color contrast.
  </div>

  <button class="high-contrast-button">Example button</button>

  <p class="low-contrast-text">
    This text is harder to read due to low contrast with the background.
  </p>
</div>
```

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f6f6f6;
  margin: 40px;
  color: #333;
}

.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #111;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.highlight-box {
  background-color: #222;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.low-contrast-text {
  color: #999999;
  font-size: 16px;
  margin-top: 30px;
}

.high-contrast-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease;
}

.high-contrast-button:hover {
  background-color: #c0392b;
}
```

## Ruang Kosong (White Space)

Istilah lain yang bermanfaat adalah `white space`. `White space`, yang juga dikenal sebagai "*negative space*", adalah ruang kosong di dalam sebuah desain. Ini adalah area yang mengelilingi `element-element`. Anda mungkin terkejut mengetahui bahwa `white space` tidak harus berwarna putih. Sebenarnya, ini bisa berupa ruang dalam warna atau tekstur apa pun. Tujuannya adalah untuk meningkatkan keterbacaan (*readability*) dan menyempurnakan `visual hierarchy` dari sebuah desain.

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <h1>The Power of White Space</h1>
  <p>
    White space (or negative space) is the empty space around elements. It’s not just “blank”—it gives your content room to breathe, improves focus, and adds elegance to the design.
  </p>
  <a href="#" class="button">Learn More</a>
</div>

<div class="no-whitespace">
  <strong>Without white space:</strong> This block has minimal padding, making the content feel cramped, harder to read, and less appealing.
</div>
```

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.container {
  max-width: 800px;
  margin: 60px auto;
  background-color: #ffffff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #2c3e50;
}

p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
}

.button {
  display: inline-block;
  padding: 14px 28px;
  background-color: #27ae60;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.button:hover {
  background-color: #219150;
}

.no-whitespace {
  background-color: #ffffff;
  padding: 10px;
  margin: 60px auto;
  width: 800px;
  box-shadow: 0 0 0 1px #ccc;
  font-size: 16px;
  color: #222;
}
```

## UI dan UX (UI and UX)

Ini adalah konsep-konsep desain umum yang akan sering Anda temukan, tetapi Anda mungkin juga menemukan istilah-istilah desain yang lebih berkaitan erat dengan pengembangan perangkat lunak (*software development*).

Antarmuka pengguna (*user interface*), juga dikenal sebagai `UI`, adalah cara manusia berinteraksi dengan komputer. `User interface` mencakup `element-element` visual dan interaktif yang dapat dilihat pengguna di layar mereka, seperti ikon, gambar, teks, menu, tautan (*link*), dan tombol (*button*).

Pengalaman pengguna (*user experience*), juga dikenal sebagai `UX`, adalah tentang bagaimana perasaan pengguna saat menggunakan suatu produk atau layanan. Aplikasi dengan `user experience` yang dirancang dengan baik akan terasa intuitif, mudah digunakan, efisien, aksesibel, dan menyenangkan. `User interface` memainkan peran kunci dalam membuat `user experience` semudah dan semenyenangkan mungkin, sehingga keduanya sangat berkaitan erat.

Inilah beberapa istilah umum yang harus Anda ketahui untuk berkomunikasi dengan desainer. Dengan pengetahuan ini, sekarang Anda dapat mengambil peran yang lebih aktif dalam proses desain.

## Pertanyaan (Questions)

Prinsip desain manakah yang mengacu pada distribusi bobot visual di dalam sebuah tata letak (`layout`)?

- [ ] `Alignment`
- [x] `Balance`
- [ ] `Hierarchy`
- [ ] `Contrast`

Apa istilah untuk ruang kosong di sekitar `element-element` dalam sebuah desain?

- [ ] `Layout`
- [ ] `Hierarchy`
- [x] `White Space`
- [ ] `Contrast`

Prinsip desain manakah yang menetapkan urutan tingkat kepentingan dari `element-element` dalam sebuah desain?

- [ ] `Alignment`
- [ ] `Contrast`
- [x] `Hierarchy`
- [ ] `Proximity`

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-how-do-you-create-good-background-and-foreground-contrast-in-your-designs.md)
