# Apa Itu Hex Codes, dan Bagaimana Cara Kerjanya di CSS?

Saat bekerja dengan `CSS` untuk menata gaya halaman web, salah satu metode paling umum untuk mendefinisikan warna adalah dengan menggunakan nilai warna heksadesimal (`hex color values`). Nilai warna heksadesimal, atau kode heksadesimal (`hex codes`), adalah cara ringkas untuk merepresentasikan warna dalam model warna `RGB`. Dalam pelajaran ini, kita akan mempelajari apa itu `hex codes`, bagaimana cara kerjanya di `CSS`, dan kapan waktu yang tepat untuk menggunakannya.

## Cara Kerja Hex Codes

Sebuah `hex code` (singkatan dari *hexadecimal code*) adalah *string* enam karakter yang digunakan untuk merepresentasikan warna dalam model warna `RGB`. Kata "hex" mengacu pada sistem penomoran basis 16 (*base-16*), yang menggunakan angka `0` hingga `9` dan huruf `A` hingga `F`.

Dalam konteks warna, `hex codes` menentukan jumlah merah (*red*), hijau (*green*), dan biru (*blue*) (`RGB`) yang membentuk warna tertentu. Setiap `hex code` dimulai dengan simbol tagar (`#`), diikuti oleh enam karakter yang menentukan intensitas merah, hijau, dan biru dalam warna tersebut.

Sebagai contoh, `hex code` untuk hitam adalah `#000000`, dan `hex code` untuk putih adalah `#FFFFFF`. Dua karakter pertama mewakili `value` merah, dua karakter berikutnya mewakili hijau, dan dua karakter terakhir mewakili biru.

Di `CSS`, Anda dapat menerapkan warna ke `element` dengan menggunakan `hex codes`. Berikut sintaks dasarnya:

```css
element {
  color: #RRGGBB;
}
```

Di sini, `#RRGGBB` adalah *placeholder* untuk `hex code` yang sebenarnya. Pasangan `RR`, `GG`, dan `BB` masing-masing mewakili intensitas merah, hijau, dan biru secara berurutan.

Pasangan-pasangan ini dapat berkisar dari `00` (intensitas terendah) hingga `FF` (intensitas tertinggi). Semakin tinggi nilainya, semakin banyak warna tersebut akan hadir dalam campuran akhir. Sebagai contoh, mari terapkan beberapa warna `hex` ke sejumlah `element`:

```html
<link rel="stylesheet" href="styles.css" />
<h1>This is a heading.</h1>
<p>This is a paragraph.</p>
```

```css
h1 {
  color: #FF5733; /* Warna jingga kemerahan */
}
p {
  background-color: #4CAF50; /* Corak warna hijau */
}
```

Pada kasus pertama, `#FF5733` adalah warna jingga kemerahan (*reddish-orange*). Berikut rinciannya:

- `FF` adalah `value` tertinggi untuk merah (tersaturasi penuh).
- `57` adalah jumlah sedang untuk hijau.
- `33` adalah jumlah kecil untuk biru.

Pada kasus kedua, `#4CAF50` adalah corak warna hijau:

- `4C` adalah `value` rendah untuk merah.
- `AF` adalah `value` tinggi untuk hijau.
- `50` adalah jumlah sedang untuk biru.

## Menggunakan Hex Codes di CSS

`Hex codes` sangat populer karena presisi dan mudah digunakan. Kode ini memungkinkan Anda menyempurnakan warna Anda secara detail, menjadikannya ideal untuk desain yang mengutamakan konsistensi.

Sebagian besar perangkat lunak desain, seperti Adobe Photoshop atau Figma, menyediakan `hex codes` untuk warna yang Anda pilih, yang memudahkan Anda menyalin dan menempelkan `values` ini secara langsung ke dalam file `CSS` Anda.

Dalam pengembangan web, `hex codes` sering digunakan untuk menentukan warna teks, latar belakang (`background`), batas (`border`), dan `element` visual lainnya. Sebagai contoh:

```html
<link rel="stylesheet" href="styles.css" />
<button>Example</button>
```

```css
body {
  background-color: #F0F0F0; /* Latar belakang abu-abu muda */
}

button {
  background-color: #007BFF; /* Corak warna biru */
  color: #FFFFFF; /* Teks putih */
}
```

Ini memastikan bahwa warna Anda tetap konsisten di seluruh situs web atau aplikasi Anda.

## Singkatan Hex Code (Shorthand)

Dalam beberapa kasus, Anda mungkin melihat `hex codes` ditulis dalam format singkatan (*shorthand*), hanya menggunakan tiga karakter alih-alih enam karakter. Hal ini dimungkinkan ketika kedua karakter dalam setiap pasangan warna bernilai sama. Misalnya, `#FF5733` tidak dapat disingkat, tetapi `#FFFFFF` (putih) dapat ditulis sebagai `#FFF`.

```html
<link rel="stylesheet" href="styles.css" />
<h2>This is a heading.</h2>
```

```css
body {
  background-color: #000;
}

h2 {
  color: #FFF; /* Putih dalam format singkatan (shorthand) */
}
```

Bentuk singkatan `#FFF` setara dengan `#FFFFFF`. Demikian pula, `#000` mewakili hitam yang bentuk lengkapnya adalah `#000000`.

`Hex codes` populer karena presisi dan kompatibilitasnya, mendukung lebih dari 16 juta warna di semua peramban (*browsers*). Kode ini ideal saat Anda memerlukan warna *branding* yang spesifik, ingin mengontrol corak presisi yang tidak mudah ditentukan oleh *named colors* atau `HSL`, atau saat Anda menyalin warna dari perangkat lunak desain yang menyediakan `hex codes` secara *default*.

## Pertanyaan (Questions)

Apa yang diwakili oleh setiap pasangan karakter dalam sebuah hex code?

- [ ] Tingkat opasitas dalam warna tersebut.
- [x] Intensitas merah, hijau, atau biru dalam warna tersebut.
- [ ] Tingkat kontras antarwarna.
- [ ] Kecerahan dan saturasi dari warna tersebut.

Bagaimana cara menulis hex code untuk warna hitam menggunakan format singkatan (*shorthand*)?

- [x] `#000`
- [ ] `#000000`
- [ ] `#FFF`
- [ ] `#FFFFFF`

Mengapa seorang desainer mungkin memilih untuk menggunakan hex codes di CSS mereka daripada named colors?

- [x] Hex codes memungkinkan pemilihan warna yang lebih presisi.
- [ ] Hex codes lebih mudah diingat daripada named colors.
- [ ] Hex codes secara otomatis menyesuaikan untuk mode terang dan gelap (*light and dark mode*).
- [ ] Hex codes tidak memerlukan pemformatan apa pun di CSS.

---

[⬅️ Sebelumnya](4-what-is-the-hsl-color-model.md) | [Selanjutnya ➡️](6-what-are-linear-and-radial-gradients.md)
