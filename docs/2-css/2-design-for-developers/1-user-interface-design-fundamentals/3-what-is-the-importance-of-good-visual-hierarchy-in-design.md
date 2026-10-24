# Apa Pentingnya Hierarki Visual yang Baik dalam Desain?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau konsep-konsep desain tersebut agar Anda lebih memahami cara kerjanya.

Hierarki visual (`visual hierarchy`) mengacu pada cara Anda menyusun tata letak (`layout`) dan menampilkan konten halaman Anda untuk memandu perhatian pemirsa.

Sebuah `hierarchy` yang kuat dapat memberikan jalur yang jelas untuk diikuti oleh mata, memastikan bahwa informasi yang Anda sampaikan dicerna dalam urutan yang Anda inginkan.

Mari kita perhatikan `layout` halaman dasar di mana `HTML` untuk halaman tersebut secara semantik sudah benar, tetapi `styling` yang diterapkan tidak menciptakan `visual hierarchy` yang kuat.

```html
<style>
  body {
    font-family: sans-serif;
    color: #333;
    background-color: #fff;
  }

  header, nav, main, section, footer {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
  }

  h1, h2, h3 {
    font-weight: normal;
    font-size: 16px;
    margin: 5px 0;
  }

  nav a {
    text-decoration: none;
    color: #333;
    margin-right: 10px;
    font-size: 14px;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
  }
</style>

<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>

<main>
  <section>
    <h2>Welcome</h2>
    <p>This is the welcome section of the homepage.</p>
  </section>

  <section>
    <h2>Our Services</h2>
    <p>Here we describe what we offer.</p>
  </section>

  <section>
    <h2>Get in Touch</h2>
    <p>Contact us for more information.</p>
  </section>
</main>

<footer>
  <p>&copy; 2025 My Website</p>
</footer>
```

Jika ukuran font (`font-size`) tidak berbeda secara jelas, tidak ada indikasi visual mengenai alur dokumen, meskipun bagian-bagiannya sudah dipisahkan oleh *heading*.

Untuk menciptakan `visual hierarchy`, Anda harus menerapkan ukuran font (`font-size`) yang berbeda pada tingkatan *heading*. Anda juga dapat menggunakan sesuatu seperti "*callout box*" untuk menyorot bagian tertentu.

```html
<style>
  body {
    font-family: sans-serif;
    line-height: 1.6;
    padding: 20px;
    background: #f9f9f9;
    color: #333;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 6px;
  }

  p {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .callout {
    background-color: #fff3cd;
    border-left: 5px solid #ffc107;
    padding: 15px;
    margin: 20px 0;
  }
</style>

<h1>Understanding Visual Hierarchy</h1>
<p>Visual hierarchy helps users navigate and understand content by guiding their attention.</p>

<h2>Heading Tiers</h2>
<p>Using different font sizes for headings creates structure and makes content scannable.</p>

<h3>Level 3 Heading</h3>
<p>This smaller heading further breaks down the section without overpowering it.</p>

<div class="callout">
  <strong>Tip:</strong> Use a callout box like this to highlight important notes or key takeaways.
</div>
```

Hierarki visual (`visual hierarchy`) juga dapat membantu meningkatkan konversi pengguna (*user conversion*) Anda. Sebagai contoh, Anda dapat memanfaatkan *callout box* untuk lebih menarik perhatian ke tombol *Call to Action* (`CTA button`).

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .callout {
    background-color: #e0f7fa;
    border-left: 5px solid #00acc1;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
  }

  .cta-button {
    display: inline-block;
    background-color: #00acc1;
    color: white;
    padding: 12px 20px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 10px;
  }

  .cta-button:hover {
    background-color: #008b9a;
  }
</style>

<h2>Ready to Boost Your Productivity?</h2>
<p>Join thousands of users who are getting more done with our simple and effective tools.</p>

<div class="callout">
  <strong>Don’t wait!</strong> Start your free trial today and see the difference.
  <br>
  <a href="#" class="cta-button">Start Free Trial</a>
</div>
```

Terakhir, `visual hierarchy` Anda dapat menjadi penting untuk menyampaikan komponen-komponen lain, seperti bilah navigasi (`navigation bar`) atau *footer*.

Hal ini memudahkan pengguna Anda untuk menemukan informasi penting yang mungkin sedang mereka cari.

## Pertanyaan (Questions)

Apa tujuan utama dari hierarki visual (`visual hierarchy`) dalam desain web?

- [ ] Untuk membuat situs web lebih berwarna.
- [x] Untuk memandu perhatian pemirsa dalam urutan tertentu.
- [ ] Untuk mengurangi jumlah konten pada halaman.
- [ ] Untuk meningkatkan kecepatan pemuatan situs web.

Manakah dari berikut ini yang TIDAK disebutkan sebagai teknik untuk menciptakan hierarki visual dalam artikel tersebut?

- [ ] Menggunakan ukuran font berbeda untuk *heading*.
- [ ] Menerapkan *callout box* untuk informasi penting.
- [x] Menerapkan efek animasi pada elemen.
- [ ] Membuat bagian terpisah untuk navigasi dan *footer*.

Bagaimana hierarki visual yang kuat berpotensi memengaruhi konversi pengguna (*user conversion*)?

- [ ] Dengan membuat situs web lebih menarik secara estetika.
- [ ] Dengan mengurangi jumlah klik yang diperlukan untuk menavigasi situs.
- [x] Dengan menarik perhatian ke informasi penting dan tombol *Call-to-Action* (`CTA`).
- [ ] Dengan meningkatkan peringkat mesin pencari situs web.

---

[⬅️ Sebelumnya](2-how-do-you-create-good-background-and-foreground-contrast-in-your-designs.md) | [Selanjutnya ➡️](4-how-does-scale-work-in-design.md)
