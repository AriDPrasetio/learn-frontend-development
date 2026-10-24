# Bagaimana Cara Menciptakan Kontras Latar Belakang dan Latar Depan yang Baik dalam Desain Anda?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau konsep-konsep desain tersebut agar Anda lebih memahami cara kerjanya.

## Memahami Kontras (Contrast)

Pertama, Anda mungkin perlu membiasakan diri dengan `contrast` (kontras). `Contrast` adalah perbedaan antara dua warna — atau seberapa mudah keduanya dapat dibedakan.

Warna dengan `contrast` yang lebih tinggi akan lebih berbeda secara visual, sedangkan warna dengan `contrast` yang lebih rendah akan lebih mirip secara visual. Sebagai contoh, hitam dan putih memiliki rasio kontras (`contrast ratio`) yang sangat tinggi. Sedangkan biru muda dan ungu muda memiliki `contrast` yang lebih rendah.

```html
<style>
  .example {
    padding: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .high-contrast {
    background-color: black;
    color: white;
  }

  .low-contrast {
    background-color: #add8e6; 
    color: #dda0dd; 
  }

  .label {
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>

<div class="example high-contrast">
  <div class="label">High Contrast</div>
  This text has high contrast (black background and white text).
</div>

<div class="example low-contrast">
  <div class="label">Low Contrast</div>
  This text has low contrast (light blue background and light purple text).
</div>
```

### Menerapkan Kontras pada Teks

Tentu saja, dalam contoh-contoh ini perbedaannya mungkin terlihat lebih jelas karena faktor `layout`. Namun bagaimana dengan menerapkan warna-warna ini pada teks? Anda bisa memiliki teks hitam ber-`contrast` tinggi di atas latar belakang putih. Serta teks ungu ber-`contrast` rendah di atas latar belakang biru.

```html
<style>
  .text-example {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .text-high-contrast {
    background-color: white;
    color: black;
  }

  .text-low-contrast {
    background-color: #add8e6; 
    color: #dda0dd; 
  }

  .label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
</style>

<div class="text-example text-high-contrast">
  <span class="label">High Contrast Text</span>
  This is high contrast text: black text on a white background.
</div>

<div class="text-example text-low-contrast">
  <span class="label">Low Contrast Text</span>
  This is low contrast text: purple text on a light blue background.
</div>
```

### Standar Kontras WCAG

Namun bagaimana Anda menentukan apa yang dimaksud dengan `contrast` yang "cukup baik"? Anda tidak dapat mendasarkannya hanya pada bagaimana teks tersebut terlihat menurut Anda, karena setiap pengguna akan memiliki pengalaman yang berbeda. Untungnya, Web Content Accessibility Guidelines, atau `WCAG`, menyediakan standar untuk hal ini.

Untuk teks berukuran normal, rasio kontras (`contrast ratio`) 4,5:1 dianggap sebagai standar `AA` (teks berukuran besar membutuhkan 3:1), yang merupakan standar minimum yang harus Anda ikuti agar dapat diakses oleh sebagian besar pengguna. Rasio kontras 7:1 untuk teks berukuran normal memenuhi standar `AAA` (4,5:1 untuk teks berukuran besar), dan menjamin tingkat aksesibilitas terbaik.

```html
<style>
  .contrast-example {
    padding: 15px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .aa-contrast {
    background-color: #ffffff; 
    color: #767676;
  }

  .aaa-contrast {
    background-color: #ffffff; 
    color: #595959;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
</style>

<div class="contrast-example aa-contrast">
  <span class="label">AA Standard (Contrast Ratio ~4.5:1)</span>
  This text meets the minimum accessibility standard for contrast.
</div>

<div class="contrast-example aaa-contrast">
  <span class="label">AAA Standard (Contrast Ratio ~7:1)</span>
  This text meets the highest accessibility standard for contrast.
</div>
```

### Membandingkan Rasio Kontras Tinggi dan Rendah

Ada sejumlah situs web yang dapat memeriksa `contrast ratio` antara dua warna, tetapi sebagian besar *browser* memungkinkan Anda melakukannya secara langsung di `developer tools` pada situs web Anda.

Mari kita lihat beberapa contoh `contrast ratio` lainnya untuk lebih memahami konsep ini.

Berikut adalah contoh teks hitam di atas latar belakang putih yang memiliki `contrast ratio` sebesar 21:1.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This is black text on a white background, which has the highest contrast ratio of 21:1.
</div>
```

Contoh ini bahkan lebih dari cukup untuk memenuhi standar `AAA`. Sekarang, mari kita lihat teks ungu di atas latar belakang biru.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .purple-on-blue {
    background-color: #0000cc;
    color: #800080; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="purple-on-blue">
  <span class="label">Purple on Blue (Lower Contrast)</span>
  This doesn't meet the AA standard.
</div>
```

Contoh ini memiliki `contrast ratio` sebesar 1,19:1 yang bahkan tidak memenuhi standar `AA`.

## Menyesuaikan Properti Warna (Color Properties)

Bagaimana Anda dapat memperbaikinya? Nah, ada tiga aspek yang memengaruhi `contrast ratio`.

### Menyesuaikan Hue

Yang pertama adalah `hue`, yang mewakili jenis warna umum, seperti merah, biru, jingga. Mari beralih ke `hue` yang lebih jauh dari biru. Dalam hal ini, mari gunakan warna merah.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .red-on-blue {
    background-color: #0000cc; 
    color: #ff0000; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="red-on-blue">
  <span class="label">Red on Blue (Higher Contrast Hue Shift)</span>
  This doesn't meet accessibility standards.
</div>
```

### Menyesuaikan Saturation

Meskipun mengubah `hue` menjadi merah meningkatkan `contrast ratio` menjadi 2,81:1, nilai ini masih belum memenuhi standar `AA`. `Property` lain yang dapat Anda sesuaikan adalah `saturation` (kejenuhan), atau intensitas warna. Misalnya, warna merah desaturasi (*desaturated red*) seperti `#b23333` menurunkan `contrast ratio` menjadi 1,82:1. Meningkatkan `saturation` dan `lightness` secara bersamaan ke merah yang lebih terang seperti `#ff4d4d` akan meningkatkan `contrast ratio` menjadi 3,43:1, sehingga membawanya lebih dekat ke target.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .low-sat-red-on-blue {
    background-color: #0000cc; 
    color: #b23333; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .high-sat-red-on-blue {
    background-color: #0000cc; 
    color: #ff4d4d; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="low-sat-red-on-blue">
  <span class="label">Low Saturation Red on Blue (Contrast ~1.82:1)</span>
  This red has low saturation, resulting in a poor contrast ratio.
</div>

<div class="high-sat-red-on-blue">
  <span class="label">Higher Saturation Red on Blue (Contrast ~3.43:1)</span>
  Increasing the saturation of red improves contrast but it’s still below AA standard.
</div>
```

### Menyesuaikan Lightness

Namun, Anda dapat mencapai standar yang aksesibel dengan menyesuaikan `lightness` (kecerahan), yang merepresentasikan seberapa terang atau gelap suatu warna.

Jika kita beralih ke latar belakang yang lebih terang (`#add8e6`) dan menggunakan warna merah yang lebih gelap untuk teks (`#8b0000`) dengan menurunkan tingkat `lightness`-nya, `contrast ratio` meningkat menjadi 6,55:1, melampaui standar `AA` dengan nyaman.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .blue-bg {
    background-color: #add8e6; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .low-sat-red-on-blue {
    background-color: #0000cc; 
    color: #b23333; 
    margin-bottom: 20px;
  }

  .high-sat-red-on-blue {
    background-color: #0000cc; 
    color: #ff4d4d; 
    margin-bottom: 20px;
  }
  
  .dark-red-on-light-blue {
    background-color: #add8e6; 
    color: #8b0000; 
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="low-sat-red-on-blue blue-bg">
  <span class="label">Low Saturation Red on Medium Blue (Contrast ~1.82:1)</span>
  This red has low saturation, resulting in a poor contrast ratio.
</div>

<div class="high-sat-red-on-blue blue-bg">
  <span class="label">Higher Saturation Red on Medium Blue (Contrast ~3.43:1)</span>
  Increasing the saturation of red improves contrast but it’s still below AA standard.
</div>

<div class="dark-red-on-light-blue">
  <span class="label">Darker Red on Light Blue (Contrast ~6.55:1)</span>
  Pairing a darker red with a lighter blue background increases the contrast ratio to meet the AA standard.
</div>
```

Anda dapat terus menyesuaikan warna untuk menemukan keseimbangan antara efek visual yang Anda inginkan dan `contrast ratio` yang aksesibel. Namun, penting untuk diingat bahwa aksesibilitas harus selalu diutamakan.

## Pertanyaan (Questions)

Apa itu kontras (`contrast`) dalam konteks desain web?

- [ ] Kecerahan warna pada halaman web.
- [x] Perbedaan antara dua warna dan seberapa mudah keduanya dapat dibedakan.
- [ ] Jumlah warna yang digunakan pada halaman web.
- [ ] Ketajaman gambar pada halaman web.

Menurut Web Content Accessibility Guidelines (WCAG), berapakah rasio kontras minimum untuk teks berukuran normal agar memenuhi standar AA?

- [ ] 3:1
- [x] 4.5:1
- [ ] 7:1
- [ ] 21:1

Manakah dari berikut ini yang TIDAK disebutkan sebagai aspek yang memengaruhi rasio kontras?

- [ ] `Hue`
- [ ] `Saturation`
- [ ] `Lightness`
- [x] `Opacity`

---

[⬅️ Sebelumnya](1-what-are-common-design-terms-to-help-you-communicate-with-designers.md) | [Selanjutnya ➡️](3-what-is-the-importance-of-good-visual-hierarchy-in-design.md)
