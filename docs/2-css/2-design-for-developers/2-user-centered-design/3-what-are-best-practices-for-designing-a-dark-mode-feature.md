# Apa Saja Praktik Terbaik untuk Merancang Fitur Dark Mode?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau (*preview*) dari konsep-konsep desain ini agar Anda lebih memahami cara kerjanya.

`Dark mode` adalah fitur khusus pada aplikasi web tempat Anda dapat mengubah skema warna terang *default* menjadi skema warna gelap. Hal ini membantu mengurangi ketegangan mata (*eye strain*) dan meningkatkan keterbacaan (*readability*) dalam kondisi pencahayaan rendah. Saat merancang fitur `dark mode` Anda, penting untuk memahami berbagai praktik terbaik (*best practices*) guna memastikan bahwa fitur `dark mode` Anda efektif dan ramah pengguna (*user-friendly*).

Aktifkan editor interaktif dan klik tombol `Toggle Dark Mode` pada contoh di bawah ini untuk melihat bagaimana cara kerja `dark mode`.

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <p>This is a simple dark mode example.</p>
</div>

<script src="index.js"></script>
```

```css
body {
  background: #f5f5f5;
  color: #222;
  font-family: sans-serif;
  transition: background 0.3s, color 0.3s;
}

button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

body.dark {
  background: #121212;
  color: #e0e0e0;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

Pertimbangan pertama adalah menghindari warna-warna jenuh (*saturated colors*) dalam `dark mode`. Warna jenuh adalah warna yang cerah dan intens. Sebagai contoh, tombol berwarna magenta terang dengan latar belakang abu-abu gelap bisa menjadi terlalu intens dan menyebabkan ketegangan mata. Sebagai gantinya, Anda sebaiknya menggunakan warna yang tidak jenuh (*desaturated colors*) dalam `dark mode`. Warna *desaturated* adalah warna yang kurang intens, memiliki tingkat saturasi lebih rendah, dan lebih nyaman dilihat dalam `dark mode`. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <h1>Color Saturation in Dark Mode</h1>
  <p>Compare the two buttons below. The first uses a saturated color, the second is desaturated for better accessibility in dark mode.</p>

  <div class="buttons">
    <button class="saturated">Saturated Button</button>
    <button class="desaturated">Desaturated Button</button>
  </div>
</div>

<script src="index.js"></script>
```

```css
body {
  background-color: #f0f0f0;
  color: #111;
  font-family: sans-serif;
  transition: background 0.3s, color 0.3s;
  padding: 1rem;
}

button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1rem;
  transition: background 0.3s, color 0.3s;
}

.buttons button {
  border: none;
}

.saturated {
  background-color: #ff00ff; 
  color: white;
}

.desaturated {
  background-color: #c472b5; 
  color: white;
}

body.dark {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark .saturated {
  background-color: #ff00ff; 
  color: black;
}

body.dark .desaturated {
  background-color: #925f88; 
  color: white;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

Pertimbangan lain dalam `dark mode` adalah penggunaan latar belakang hitam murni (*pure black*) dengan teks putih. Meskipun kontras tinggi ini bisa efektif, hal tersebut juga bisa terlalu keras di mata. Sebagai gantinya, pertimbangkan untuk menggunakan latar belakang abu-abu gelap dengan teks abu-abu terang untuk kontras yang lebih lembut. Teks akan terasa lebih nyaman di mata dan lebih santai untuk dibaca dalam `dark mode`. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <h1>Dark Mode Contrast Comparison</h1>
  <p>Compare the two sections below. One uses pure black and white, the other uses dark gray and light gray for better readability.</p>

  <div class="dark-mode-examples">
    <div class="box harsh-dark">
      <h2>High Contrast</h2>
      <p>Pure black background with white text. While readable, it can be harsh on the eyes.</p>
    </div>

    <div class="box soft-dark">
      <h2>Soft Contrast</h2>
      <p>Dark gray background with light gray text. Easier to read and more comfortable for long periods.</p>
    </div>
  </div>
</div>

<script src="index.js"></script>
```

```css
body {
  background-color: #f0f0f0;
  color: #111;
  font-family: sans-serif;
  padding: 1rem;
  transition: background 0.3s, color 0.3s;
}

button {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.dark-mode-examples {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.box {
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  transition: background 0.3s, color 0.3s;
}

.box {
  background-color: #ffffff;
  color: #111;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

body.dark .box.harsh-dark {
  background-color: #000000; 
  color: #ffffff;           
}

body.dark .box.soft-dark {
  background-color: #1e1e1e; 
  color: #cccccc;           
}

body.dark {
  background-color: #121212;
  color: #e0e0e0;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

Pertimbangan lainnya adalah penggunaan `dark mode` bersama dengan identitas merek (*brand identity*) situs. Identitas merek adalah serangkaian elemen visual yang mewakili suatu merek, seperti logo, warna, dan tipografi. Saat menerapkan `dark mode`, Anda harus mempertimbangkan bagaimana fitur `dark mode` tersebut konsisten dengan warna dan gaya merek Anda. Membiarkan ikon dan tombol merek pada saturasi penuh adalah hal yang wajar, sementara elemen-elemen di sekitarnya dibuat tidak jenuh (*desaturated*).

Secara umum, dalam hal desain, Anda selalu ingin memperhatikan pengalaman pengguna (*user experience*) dan tingkat kontras (*contrast levels*). `Dark mode` bukanlah pengecualian, dan dengan mengikuti berbagai praktik terbaik ini, Anda dapat membuat fitur `dark mode` yang efektif dan ramah pengguna.

## Pertanyaan (Questions)

Apa itu `dark mode`?

- [x] Fitur yang mengubah skema warna terang *default* menjadi skema warna gelap.
- [ ] Fitur yang mengubah skema warna gelap *default* menjadi skema warna terang.
- [ ] Fitur yang mengubah ukuran font *default* menjadi ukuran yang lebih besar.
- [ ] Fitur yang mengubah tata letak *default* dari sebuah halaman web.

Mengapa bukan ide yang baik untuk menggunakan latar belakang hitam murni dengan teks putih dalam `dark mode`?

- [ ] Latar belakang hitam murni dapat menyebabkan masalah keamanan.
- [ ] Latar belakang hitam murni dapat menyebabkan masalah performa.
- [ ] Latar belakang hitam murni dengan teks putih terlalu samar.
- [x] Latar belakang hitam murni dengan teks putih dapat terasa terlalu keras di mata.

Jenis warna apa yang disarankan untuk digunakan dalam `dark mode`?

- [ ] Warna merah.
- [x] Warna yang tidak jenuh (*desaturated colors*).
- [ ] Warna-warna cerah (*bright colors*).
- [ ] Warna pastel.

---

[⬅️ Sebelumnya](2-what-is-user-research-and-testing-and-user-requirements.md) | [Selanjutnya ➡️](4-what-are-best-practices-for-designing-breadcrumbs.md)
