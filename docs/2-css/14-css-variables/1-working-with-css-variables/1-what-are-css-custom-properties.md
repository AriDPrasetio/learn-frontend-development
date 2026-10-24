# Apa Itu CSS Custom Properties, dan Bagaimana Cara Kerjanya?

`CSS custom properties`, yang juga dikenal sebagai `CSS variables`, adalah entitas yang didefinisikan oleh pembuat `CSS` yang memuat nilai-nilai tertentu untuk digunakan kembali di seluruh dokumen. Fitur ini sangat andal karena memungkinkan pembuatan *stylesheet* yang lebih efisien, mudah dikelola (*maintainable*), dan fleksibel.

Sintaks untuk mendeklarasikan sebuah `custom property` sangatlah mudah. Sintaks ini dimulai dengan dua tanda hubung (`--`) yang diikuti oleh nama `property`:

```css
:root {
  --main-color: #3498db;
}
```

Dalam contoh ini, kita mendeklarasikan sebuah `custom property` bernama `--main-color` dengan nilai `#3498db`. *Pseudo-class* `:root` umumnya digunakan untuk mendeklarasikan `custom properties` secara global, karena merepresentasikan induk (*parent*) tingkat tertinggi di dalam pohon `DOM` (*DOM tree*).

Untuk menggunakan sebuah `custom property`, Anda memakai fungsi `var()`:

```html
<link rel="stylesheet" href="styles.css">
<button class="button">Click Me</button>
```

```css
:root {
  --main-color: #3498db;
}

.button {
  background-color: var(--main-color);
}
```

Kode ini menetapkan warna latar belakang (`background-color`) dari `element` dengan kelas `button` ke nilai yang disimpan di dalam `--main-color`.

Salah satu fitur utama dari `custom properties` adalah mereka mengikuti aturan *cascade* `CSS`. Artinya, Anda dapat mendefinisikannya kembali untuk `element` atau konteks tertentu:

```html
<link rel="stylesheet" href="styles.css">
<div class="alert">This is an alert message.</div>
```

```css
.alert {
  --main-color: #e74c3c;
  background-color: var(--main-color);
}
```

Dalam hal ini, `element` dengan kelas `alert` akan menggunakan nilai `--main-color` yang berbeda, menggantikan (*overriding*) definisi global.

`Custom properties` juga mendukung nilai cadangan (*fallback values*). Jika sebuah `custom property` belum didefinisikan atau tidak valid, Anda dapat memberikan nilai *fallback*:

```html
<link rel="stylesheet" href="styles.css">
<div class="text">This is some text.</div>
```

```css
:root {
  --text-color: green;
}

.text {
  color: var(--text-color, green);
}
```

Di sini, jika `--text-color` tidak didefinisikan, `color` akan kembali ke nilai *default* yaitu `green`.

`Custom properties` sangat berguna dalam menciptakan desain bertema (*themeable designs*). Anda dapat mendefinisikan sekumpulan `properties` untuk tema yang berbeda:

```html
<link rel="stylesheet" href="styles.css">
<div class="light-theme">
  <p>This is some light themed text.</p>
</div>
```

```css
:root {
  --bg-color: black;
}

body {
  background-color: var(--bg-color);
}

.light-theme {
  --bg-color: white;
  --text-color: black;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 10px;
}
```

Mengganti tema menjadi sesederhana menambahkan atau menghapus sebuah `class` dari `element` `body`.

`Custom properties` juga dapat digunakan bersama `media queries` untuk membuat desain yang responsif:

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <h2>Responsive Design</h2>
  <p>Resize the window to see the card adapt!</p>
</div>
```

```css
:root {
  --card-width: 90%;
  --card-bg: #f0f0f0;
  --card-padding: 1rem;
  --text-color: #333;
}

/* Tablet screens and up */
@media (min-width: 600px) {
  :root {
    --card-width: 70%;
    --card-bg: #e8f5e9;
    --card-padding: 1.5rem;
  }
}

/* Desktop screens and up */
@media (min-width: 1024px) {
  :root {
    --card-width: 50%;
    --card-bg: #d0f0ff;
    --card-padding: 2rem;
  }
}

body {
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fafafa;
}

.card {
  width: var(--card-width);
  background-color: var(--card-bg);
  padding: var(--card-padding);
  color: var(--text-color);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: center;
  transition: all 0.3s ease;
}
```

Pendekatan ini memungkinkan tata letak responsif yang lebih mudah dipelihara (*maintainable*), karena Anda dapat mengubah nilai di satu tempat alih-alih di seluruh *stylesheet* Anda. Hal ini dapat secara signifikan mengurangi pengulangan dalam *stylesheet* Anda, terutama untuk nilai-nilai kompleks yang sering digunakan.

`Custom properties` juga dapat mereferensikan `custom properties` lainnya:

```html
<link rel="stylesheet" href="styles.css">
<button class="button">Click Me</button>
```

```css
:root {
  --primary-color: #3498db;
  --button-bg: var(--primary-color);
}

button {
  background-color: var(--button-bg);
}
```

Hal ini memungkinkan terciptanya hubungan antarberbagai aspek gaya, sehingga memudahkan pemeliharaan tema yang konsisten di seluruh situs Anda.

Meskipun `custom properties` menawarkan banyak keuntungan, penting untuk menyadari dukungan *browser*-nya. Fitur ini didukung dengan sangat baik di *browser* modern, tetapi *browser* yang lebih lama mungkin tidak mengenalinya. Selalu siapkan rencana cadangan (*fallback plan*) saat menggunakan fitur-fitur mutakhir.

Sebagai kesimpulan, `CSS custom properties` menyediakan cara yang andal untuk membuat *stylesheet* yang lebih dinamis, fleksibel, dan mudah dikelola. Mereka memungkinkan pembuatan desain yang mendukung tema (*themeable*), menyederhanakan tata letak responsif, dan memungkinkan manipulasi gaya saat *runtime*.

Seiring berkembangnya pengembangan web, `custom properties` menjadi alat yang semakin penting dalam kotak peralatan (*toolkit*) pengembang, menawarkan berbagai kemungkinan baru untuk menciptakan `CSS` yang mudah beradaptasi dan efisien.

## Pertanyaan (Questions)

Apa sintaks yang benar untuk mendeklarasikan sebuah `CSS custom property`?

- [ ] `$main-color: #3498db;`
- [ ] `@main-color: #3498db;`
- [x] `--main-color: #3498db;`
- [ ] `main-color: #3498db;`

Bagaimana cara Anda menggunakan sebuah `CSS custom property` di dalam deklarasi gaya (*style declaration*)?

- [ ] `use(--main-color)`
- [x] `var(--main-color)`
- [ ] `@main-color`
- [ ] `$(--main-color)`

Hal apa yang harus Anda perhatikan saat menggunakan `CSS custom properties`?

- [ ] Mereka dapat digunakan dengan versi `CSS` yang lebih lama.
- [x] Mereka mungkin tidak didukung oleh *browser* lama.
- [ ] Mereka dapat membuat kecepatan halaman menjadi lebih cepat.
- [ ] Mereka meningkatkan pengulangan di dalam *stylesheet* Anda.

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-is-the-at-property-rule.md)
