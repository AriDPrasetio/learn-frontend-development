# Apa Saja Praktik Terbaik dalam Menggunakan Gambar dalam Desain Anda?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau konsep-konsep desain tersebut agar Anda lebih memahami cara kerjanya.

Menambahkan gambar ke situs web Anda adalah cara yang bagus untuk menarik minat pengguna dan meningkatkan daya tarik visual situs Anda. Namun ada beberapa hal yang perlu dipertimbangkan saat menggunakan gambar dalam desain Anda.

Hal pertama yang perlu dipertimbangkan adalah membuat gambar responsif (`responsive images`). Gambar responsif adalah gambar yang ukurannya menyesuaikan skala layar tempat gambar tersebut dilihat. Hal ini penting karena memastikan gambar Anda terlihat bagus di semua perangkat, mulai dari desktop hingga ponsel cerdas.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fefefe;
    color: #333;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    font-size: 16px;
    max-width: 600px;
    margin: 20px auto;
    line-height: 1.6;
  }
</style>

<h1>Responsive Cat Image</h1>

<img 
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
  alt="Two cats peacefully sleeping together."
/>

<p>
  This image automatically scales based on the screen size. Whether you're viewing on a desktop or a mobile phone,
  it adjusts its size without losing proportions, making the design clean and user-friendly on all devices.
</p>
```

Hal lain yang perlu dipertimbangkan adalah resolusi gambar. Gambar berkualitas lebih tinggi dengan resolusi yang lebih baik memiliki lebih banyak piksel per inci (*pixels per inch*). Piksel (*pixels*) adalah kotak-kotak kecil yang menyusun sebuah gambar.

Piksel per inci (*pixels per inch*), atau `PPI`, adalah jumlah piksel dalam satu inci gambar. Semakin tinggi `PPI`, semakin baik kualitas gambarnya.

Anda ingin memastikan bahwa gambar Anda berkualitas tinggi dan terlihat bagus di semua perangkat. Ini berarti Anda harus menggunakan gambar beresolusi tinggi yang telah dioptimalkan untuk web.

Hal lain yang perlu dipertimbangkan adalah ukuran gambar Anda dan bagaimana gambar tersebut pas di dalam ruang pada `layout`. Anda ingin memastikan bahwa gambar Anda memiliki ukuran yang tepat serta tidak terlalu besar atau terlalu kecil.

Menggunakan gambar berukuran besar yang dimaksudkan untuk dimuat di ruang yang lebih kecil dalam desain dapat memperlambat situs web Anda dan mempersulit pengguna untuk memuat situs Anda. Anda ingin memastikan bahwa gambar Anda berukuran tepat dan dioptimalkan untuk web.

Terkait penempatan gambar, Anda perlu memikirkan tentang keseimbangan (`balance`), hierarki (`hierarchy`), dan perataan (`alignment`) untuk membantu memastikan gambar Anda dioptimalkan untuk web.

Keseimbangan (`balance`) adalah distribusi bobot visual dalam sebuah desain. Anda ingin memastikan ada keseimbangan yang baik antara teks dan gambar di situs sehingga menciptakan desain yang harmonis.

```html
<style>
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 40px 20px;
    background-color: #f9f9f9;
    color: #333;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .text {
    flex: 1 1 400px;
  }

  .text h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .text p {
    font-size: 16px;
    line-height: 1.6;
  }

  .image {
    flex: 1 1 400px;
  }

  .image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
</style>

<div class="container">
  <div class="text">
    <h2>Balanced Layout</h2>
    <p>
      Balance is essential in web design. By evenly distributing visual weight—such as pairing this block of text
      with a complementary image—you create a layout that feels calm, structured, and easy to navigate.
    </p>
  </div>

  <div class="image">
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two cats peacefully sleeping together.">
  </div>
</div>
```

Hierarki (`hierarchy`) adalah urutan bagaimana `element-element` dilihat pada suatu halaman. Anda ingin memastikan bahwa gambar yang selaras dengan konten penting ditempatkan lebih tinggi daripada gambar yang kurang penting.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 30px 20px;
    background-color: #fff;
    color: #222;
    max-width: 800px;
    margin: 0 auto;
  }

  .section {
    margin-bottom: 40px;
  }

  .section img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .section h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .section p {
    font-size: 16px;
    line-height: 1.6;
  }
</style>

<div class="section">
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >
  <h2>Our Feline Rescue Mission</h2>
  <p>
    This image supports one of our most important stories — the rescue of 12 stray cats from a storm drain. 
    Placing it at the top ensures visitors connect emotionally with our mission right away.
  </p>
</div>

<div class="section">
  <h2>Upcoming Fundraiser</h2>
  <p>
    Join us for a small fundraising event to support our shelter. It’ll be a fun, casual afternoon with 
    snacks, games, and of course — plenty of cats!
  </p>
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >
</div>
```

Perataan (`alignment`) adalah penempatan `element-element` dalam hubungannya satu sama lain. Anda ingin memastikan bahwa gambar Anda sejajar dengan teks dan `element` lain di situs Anda sehingga menciptakan desain yang kohesif.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 40px 20px;
    background-color: #ffffff;
    color: #222;
    max-width: 900px;
    margin: 0 auto;
  }

  .aligned-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }

  .aligned-content img {
    width: 300px;
    height: auto;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .aligned-text {
    flex: 1;
    min-width: 250px;
  }

  .aligned-text h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .aligned-text p {
    font-size: 16px;
    line-height: 1.6;
  }
</style>

<div class="aligned-content">
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >

  <div class="aligned-text">
    <h2>Aligned Elements</h2>
    <p>
      In this example, the image is aligned horizontally next to the text block. This creates a visually cohesive layout, 
      where both elements feel like they belong together. Proper alignment like this improves readability and reinforces 
      structure in your design.
    </p>
  </div>
</div>
```

Hal terakhir yang perlu dipertimbangkan adalah aksesibilitas untuk gambar. Anda ingin memastikan bahwa gambar Anda dapat diakses oleh semua pengguna, termasuk mereka yang memiliki gangguan penglihatan. Ini berarti Anda harus menggunakan teks alternatif (`alt text`) untuk gambar Anda sehingga pembaca layar (*screen reader*) dapat membacakan teks tersebut kepada pengguna dengan gangguan penglihatan.

## Pertanyaan (Questions)

Apa pentingnya keseimbangan (`balance`) dalam desain saat menempatkan gambar?

- [ ] Untuk memastikan gambar memiliki ukuran yang tepat.
- [ ] Untuk membuat gambar dapat diakses oleh semua pengguna.
- [x] Untuk menciptakan desain yang harmonis dengan mendistribusikan bobot visual.
- [ ] Untuk meningkatkan resolusi gambar.

Apa tujuan menggunakan gambar beresolusi tinggi dalam desain Anda?

- [ ] Untuk memastikan gambar Anda memiliki warna yang tepat.
- [x] Untuk memastikan bahwa gambar Anda terlihat bagus di semua perangkat.
- [ ] Untuk memastikan bahwa gambar Anda memiliki ukuran yang tepat.
- [ ] Untuk memastikan bahwa gambar Anda dapat diakses oleh semua pengguna.

Apa itu `PPI`?

- [x] Jumlah piksel per satu inci gambar.
- [ ] Jumlah poin per satu inci gambar.
- [ ] Jumlah piksel per satu sentimeter gambar.
- [ ] Jumlah pica per satu gambar.

---

[⬅️ Sebelumnya](6-what-is-the-importance-of-whitespace-in-design.md) | [Selanjutnya ➡️](8-what-is-progressive-enhancement.md)
