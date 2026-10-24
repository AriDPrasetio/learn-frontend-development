# Apa Itu Aturan @property, dan Bagaimana Cara Kerjanya dengan Fallback?

Aturan `@property` adalah fitur `CSS` andal yang memungkinkan pengembang untuk mendefinisikan `custom properties` dengan kontrol yang lebih besar atas perilakunya, termasuk bagaimana properti tersebut dianimasikan dan nilai awalnya.

Aturan ini menyediakan cara untuk meningkatkan fungsionalitas `CSS custom properties` dan menawarkan lebih banyak fleksibilitas dalam penerapannya.

## Sintaks Dasar

Sintaks dasar dari aturan `@property` adalah sebagai berikut:

```css
@property --property-name {
  syntax: '<type>';
  inherits: true | false;
  initial-value: <value>;
}
```

`--property-name` adalah nama dari `custom property` yang Anda definisikan. Seperti semua `custom properties`, nama ini harus dimulai dengan dua tanda hubung (`--`).

`syntax` mendefinisikan tipe data dari `property`, yang dapat berupa hal-hal seperti `<color>`, `<length>`, `<number>`, `<percentage>`, atau tipe yang lebih kompleks.

`inherits` menentukan apakah `property` tersebut harus mewarisi nilainya dari `element` induknya (*parent element*).

`initial-value` menetapkan nilai bawaan (*default*) dari `property` tersebut.

## Contoh Praktis

Berikut adalah contoh praktis penggunaan aturan `@property`:

```html
<link rel="stylesheet" href="styles.css">
<button class="button">Click Me</button>
```

```css
@property --main-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #3498db;
}

.button {
  background-color: var(--main-color);
}
```

Dalam contoh ini, kita mendefinisikan sebuah `custom property` `--main-color` sebagai nilai `<color>`, mengaturnya agar tidak diwariskan (`inherits: false`), dan memberikannya nilai awal (`initial-value`) sebesar `#3498db`.

## Menganimasikan Custom Properties

Salah satu manfaat utama dari aturan `@property` adalah memungkinkan animasi pada `custom properties`, hal yang sebelumnya tidak dimungkinkan:

```html
<link rel="stylesheet" href="styles.css">
<div class="gradient-box"></div>
```

```css
@property --gradient-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

.gradient-box {
  width: 100px;
  height: 100px;
  background: linear-gradient(var(--gradient-angle), red, blue);
  transition: --gradient-angle 0.5s;
}

.gradient-box:hover {
  --gradient-angle: 90deg;
}
```

Kode di atas membuat gradien yang teranimasi dengan mulus ketika kursor melayang (*hover*) di atas `element`, sesuatu yang tidak dapat dicapai dengan `custom properties` standar.

## Bekerja dengan Fallback

Sekarang, mari kita bahas bagaimana aturan `@property` bekerja dengan *fallback* (nilai cadangan).

*Fallback* sangat penting dalam `CSS` untuk memastikan bahwa `styles` tetap menurun secara anggun (*degrade gracefully*) pada *browser* yang tidak mendukung fitur tertentu. Dengan `@property`, *fallback* bekerja pada dua tingkat: untuk aturan itu sendiri dan untuk penggunaan `custom property`.

### Fallback untuk Browser yang Tidak Mendukung

Untuk *browser* yang tidak mendukung aturan `@property`, Anda dapat menyediakan *fallback* dengan mendeklarasikan `custom property` dengan cara tradisional:

```html
<link rel="stylesheet" href="styles.css">
```

```css
:root {
  --main-color: #3498db;
}

@property --main-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #3498db;
}

body {
  background-color: var(--main-color);
}
```

Dalam hal ini, *browser* yang mendukung `@property` akan menggunakan versi yang didefinisikan secara lebih ketat, sedangkan yang lain akan kembali (*fall back*) ke deklarasi `custom property` standar.

### Fallback dengan Fungsi var()

Saat menggunakan `custom property`, Anda dapat memberikan nilai *fallback* menggunakan fungsi `var()`, sama seperti yang Anda lakukan pada `custom properties` standar:

```html
<link rel="stylesheet" href="styles.css">
<button class="button">Click Me</button>
```

```css
.button {
  background-color: var(--main-color, #3498db);
}
```

Ini memastikan bahwa meskipun `property` `--main-color` tidak didefinisikan atau tidak valid, tombol tersebut akan tetap memiliki warna latar belakang (*background color*).

### Fallback yang Aman Berdasarkan Tipe (Type-Safe Fallbacks)

Aturan `@property` juga memungkinkan skenario *fallback* yang lebih kompleks. Misalnya, Anda dapat menggunakannya untuk menyediakan *fallback* yang aman dari segi tipe data (*type-safe fallbacks*):

```html
<link rel="stylesheet" href="styles.css">
<div class="box">Colored box</div>
```

```css
@property --padding {
  syntax: '<length>';
  inherits: false;
  initial-value: 10px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: darkred;
  color: white;
  padding: var(--padding);
}
```

Dalam kasus ini, jika seseorang mencoba mengatur `--padding` ke nilai yang tidak valid, seperti warna, *browser* akan beralih ke nilai awal (`initial-value`) sebesar `10px`, menjaga keamanan tipe data (*type safety*).

## Dukungan Browser

Aturan `CSS` `@property` dianggap telah tersedia secara luas di semua mesin *browser* modern utama (seperti Chrome, Edge, Opera, Firefox, dan Safari) sejak awal tahun 2024. Jika Anda ingin mendukung *browser* yang lebih lama, Anda perlu menyediakan `CSS` *fallback* seperti yang dijelaskan di atas.

## Kesimpulan

Sebagai kesimpulan, aturan `@property` merepresentasikan kemajuan signifikan dalam cara kita bekerja dengan `custom properties` di `CSS`. Aturan ini memberikan lebih banyak kontrol dan memungkinkan peluang baru seperti animasi pada `custom properties`. Namun, penting untuk menggunakannya secara bijak dan selalu menyediakan *fallback* yang sesuai untuk memastikan pengalaman yang baik di semua *browser*. Seperti halnya teknologi web mutakhir lainnya, kuncinya adalah menyempurnakan pengalaman untuk *browser* yang mendukungnya sambil tetap memastikan fungsionalitas dasar bagi yang tidak mendukungnya.

## Pertanyaan (Questions)

Apa tujuan utama dari aturan `@property` di `CSS`?

- [ ] Untuk membuat `property` `CSS` baru.
- [x] Untuk mendefinisikan dan mengontrol perilaku dari `custom properties`.
- [ ] Untuk menggantikan `property` `CSS` standar.
- [ ] Untuk membuat animasi.

Manakah dari berikut ini yang BUKAN merupakan deskriptor yang valid dalam aturan `@property`?

- [ ] `syntax`
- [ ] `inherits`
- [ ] `initial-value`
- [x] `animation`

Bagaimana cara Anda menyediakan *fallback* untuk *browser* yang tidak mendukung aturan `@property`?

- [ ] Menggunakan sebuah *polyfill*.
- [x] Mendeklarasikan `custom property` menggunakan metode standar.
- [ ] Menggunakan aturan `@supports`.
- [ ] Tidak mungkin untuk menyediakan sebuah *fallback*.

---

[⬅️ Sebelumnya](1-what-are-css-custom-properties.md) | Selanjutnya ➡️
