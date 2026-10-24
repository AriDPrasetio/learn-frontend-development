# Apa Itu CSS Specificity, dan Bagaimana Specificity untuk Inline, Internal, dan External CSS?

`CSS specificity` adalah konsep fundamental yang menentukan `styles` mana yang diterapkan pada sebuah `element` ketika beberapa `rules` dapat berlaku.

Memahami `specificity` membantu pengembang menyelesaikan konflik antara berbagai `rules` `CSS` yang berbeda dan memastikan bahwa `styles` yang diinginkan diterapkan secara konsisten.

`CSS specificity` dihitung berdasarkan jenis `selectors` yang digunakan.

## Inline Styles

Tingkat `specificity` tertinggi dimiliki oleh `inline styles`, yang diterapkan langsung ke sebuah `element` melalui `attribute` `style`.

Dalam contoh ini, paragraf pertama akan berwarna merah sedangkan `element` `p` lainnya akan berwarna biru. Hal ini karena `inline styles` memiliki `specificity` yang lebih tinggi daripada `type selectors` seperti `selector` `p` yang ditunjukkan pada file `styles.css`.

```html
<link rel="stylesheet" href="styles.css">

<p style="color: red;">Red paragraph</p>
<p>Other paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
p {
  color: blue;
}
```

## ID Selectors

Mengikuti hal ini, `ID selectors` memiliki tingkat `specificity` yang tinggi.

```html
<link rel="stylesheet" href="styles.css">

<p id="para-1">Red paragraph</p>
<p>Other paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
#para-1 {
  color: red; 
}

p {
  color: blue;
}
```

## Class, Attribute, dan Pseudo-Class Selectors

Selanjutnya, `class selectors`, `attribute selectors`, dan `pseudo-classes` mulai berperan.

Contohnya mencakup `class selectors` seperti `.container` dan `.button`, `attribute selectors` seperti `[type="text"]`, dan `pseudo-classes` seperti `:hover`. Ini semua memiliki tingkat `specificity` yang moderat (menengah).

**CATATAN**: Anda akan mempelajari lebih lanjut tentang `pseudo-classes` pada pelajaran mendatang.

Dalam contoh ini:

- Paragraf pertama akan berwarna merah karena `ID selector` memiliki `specificity` yang lebih tinggi daripada `classes` dan `type selectors`.
- Paragraf kedua dengan `class selector` `.example-para` akan memiliki warna hijau.
- Paragraf ketiga yang memiliki `ID selector` `#para-3` dan `class selector` `.example-para` akan memiliki warna ungu.
- `Element` paragraf yang tersisa akan memiliki warna biru.

```html
<link rel="stylesheet" href="styles.css">

<p id="para-1">Example paragraph</p>
<p class="example-para">Other paragraph</p>
<p id="para-3" class="example-para">Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
#para-1 {
  color: red; 
}

#para-3 {
  color: purple;
}

.example-para {
  color: green;
}

p {
  color: blue;
}
```

## Type Selectors dan Pseudo-Elements

`Type selectors`, seperti `div` dan `h1`, serta `pseudo-elements` seperti `::before` dan `::after`, memiliki `specificity` yang lebih rendah dibandingkan dengan kelompok-kelompok sebelumnya.

**CATATAN**: Anda akan mempelajari lebih lanjut tentang `pseudo-elements` pada pelajaran mendatang.

```html
<link rel="stylesheet" href="styles.css">

<p id="para-1">Example paragraph</p>
<p>Other paragraph</p>
<p>Yet another paragraph</p>
```

```css
#para-1 {
  color: red; 
}

p {
  color: blue;
}
```

## The Universal Selector

Terakhir, `universal selector`, yang diwakili oleh tanda bintang `*`, memiliki `specificity` terendah dari semuanya.

Berikut adalah contoh pengaturan warna untuk semua `element` menjadi merah menggunakan `selector` `*`. Namun, Anda tidak akan melihat `element` berwarna merah karena terdapat `ID selectors` dan `type selectors` yang menimpa (*override*) `styles` tersebut, yang menyoroti betapa rendahnya `specificity` dari `selector` `*`.

```html
<link rel="stylesheet" href="styles.css">

<p id="para-1">Example paragraph</p>
<p>Other paragraph</p>
<p>Yet another paragraph</p>
```

```css
* {
  color: red;
}

#para-1 {
  color: green; 
}

p {
  color: blue;
}
```

## Menghitung Nilai Specificity (Calculating Specificity Values)

Nilai `specificity` dihitung sebagai nilai empat bagian `(a, b, c, d)`:

- `a`: `Inline styles` (`1` atau `0`).
- `b`: Jumlah `ID selectors`.
- `c`: Jumlah `class selectors`, `attribute selectors`, dan `pseudo-classes`.
- `d`: Jumlah `type selectors`, `pseudo-elements`, dan `universal selectors`.

Setiap bagian dari nilai `specificity` membawa bobot yang berbeda:

- **Inline styles** (`a`) memiliki bobot tertinggi, menyumbang nilai `1` pada bagian pertama dari nilai `specificity`.
- **ID selectors** (`b`) membawa bobot tertinggi berikutnya, dengan setiap ID menyumbang `1` pada bagian kedua dari nilai `specificity`.
- **Class selectors, attribute selectors, dan pseudo-classes** (`c`) membawa bobot sedang (moderat), dengan masing-masing menyumbang `1` pada bagian ketiga dari nilai `specificity`.
- **Type selectors dan pseudo-elements** (`d`) memiliki bobot terendah, dengan masing-masing menyumbang `1` pada bagian keempat dari nilai `specificity`.
- **Universal selector** (`*`): `Universal selector` menyumbang `0` pada perhitungan `specificity` dan tidak memengaruhi `specificity`. Pencantumannya di dalam sebuah `selector` tidak mengubah nilai `specificity`.

## Inline CSS

`Inline CSS` memiliki `specificity` tertinggi karena diterapkan langsung ke `element`. Ini menimpa (*override*) `CSS` internal maupun eksternal apa pun. Nilai `specificity` untuk `inline styles` adalah `(1, 0, 0, 0)`.

Berikut adalah contoh lain dari sebuah `inline style`:

```html
<p style="color: red;">This text is red.</p>
```

## Internal CSS

`Internal CSS` didefinisikan di dalam sebuah `element` `style` pada bagian `head` dari dokumen `HTML`. Ini memiliki `specificity` yang lebih rendah daripada `inline styles`. Baik `CSS` internal maupun eksternal berbagi tingkat `specificity` yang sama — `specificity` ditentukan oleh `selectors` yang digunakan, bukan oleh tempat di mana `CSS` tersebut didefinisikan. Ketika dua `rules` memiliki `specificity` yang sama, `rule` yang muncul belakangan di dalam dokumen yang akan menang. Jadi jika sebuah `stylesheet` eksternal ditautkan setelah blok `style` internal, `rules` eksternal akan diutamakan. Jika ditautkan sebelumnya, `rules` internal yang akan menang.

Nilai `specificity` untuk `internal styles` ditentukan oleh `selectors` yang digunakan. Sebagai contoh, sebuah `ID selector` di dalam `internal CSS` memiliki nilai `specificity` `(0, 1, 0, 0)`.

```html
<head>
  <style>
    #text {
      color: blue;
    }
  </style>
</head>
<body>
  <div id="text">This text is blue.</div>
</body>
```

Dalam contoh ini, teks akan berwarna biru kecuali jika sebuah `inline style` atau `selector` yang lebih spesifik diterapkan.

## External CSS

`External CSS` ditautkan melalui sebuah `element` `link` pada bagian `head` dan ditulis dalam file `.css` terpisah. Seperti halnya `internal CSS`, `specificity` dari `external styles` ditentukan oleh `selectors` yang digunakan. `External CSS` memberikan pemeliharaan (*maintainability*) terbaik untuk proyek-proyek yang lebih besar.

Nilai `specificity` untuk `external styles` juga ditentukan oleh `selectors` yang digunakan. Sebagai contoh, sebuah `class selector` di dalam `external CSS` memiliki nilai `specificity` `(0, 0, 1, 0)`.

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="text">This text's color is defined in an external CSS file.</div>
</body>
```

```css
.text {
  color: purple;
}
```

Dalam contoh ini, warna teks didefinisikan di dalam file `styles.css` dan akan diterapkan kecuali jika ditimpa oleh `selector` yang lebih spesifik atau sebuah `inline style`.

## Pertanyaan (Questions)

Manakah `specificity` `CSS` yang lebih tinggi?

- [ ] Sebuah `class selector`.
- [x] Sebuah `inline style`.
- [ ] Sebuah `ID selector`.
- [ ] Sebuah `type selector`.

Dalam hierarki `CSS specificity`, manakah yang memiliki prioritas terendah?

- [ ] `Class selectors`.
- [ ] `Inline styles`.
- [x] `Universal selectors`.
- [ ] `ID selectors`.

Warna apa yang akan ditampilkan pada teks dalam contoh berikut?

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
<body>
  <p style="color: blue;">This text</p>
</body>
```

- [x] `blue`
- [ ] `red`
- [ ] `yellow`
- [ ] `green`

---

[⬅️ Sebelumnya](../1-what-is-css/10-what-are-margins-and-padding.md) | [Selanjutnya ➡️](2-what-is-the-universal-selector.md)
