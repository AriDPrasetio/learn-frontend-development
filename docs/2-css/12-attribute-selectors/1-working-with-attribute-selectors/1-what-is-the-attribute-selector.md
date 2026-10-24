# Apa Itu Attribute Selector, dan Bagaimana Cara Menggunakannya untuk Menargetkan Tautan dengan Atribut href dan title?

`Attribute selector` dalam `CSS` adalah alat yang ampuh yang memungkinkan Anda menargetkan `element` `HTML` berdasarkan `attribute`-nya. Ini berarti Anda dapat menerapkan `styles` pada `element` yang memiliki `attribute` tertentu atau bahkan `value` tertentu untuk `attribute` tersebut.

Ini sangat berguna ketika Anda ingin menata gaya `element` secara dinamis atau ketika nama `class` saja tidak memberikan spesifisitas (*specificity*) yang cukup.

Sebagai contoh, Anda dapat menggunakan `attribute selector` untuk menargetkan semua tautan (*links*) yang memiliki `attribute` `href`. Ini sangat praktis ketika Anda ingin menerapkan gaya yang seragam ke semua tautan pada sebuah halaman.

Berikut adalah cara Anda dapat menggunakan `attribute selector` untuk menargetkan tautan dengan `attribute` `href`:

```html
<link rel="stylesheet" href="styles.css">
<a href="https://example.com">Example link with an href attribute</a>
<a>Example link without an href attribute</a>
```

```css
a {
  display: block;
}

a[href] {
  color: blue;
  text-decoration: underline;
}
```

Aturan `CSS` ini akan menerapkan warna biru dan garis bawah (*underline*) ke tautan mana pun yang menyertakan `attribute` `href`, memastikan bahwa semua tautan yang dapat diklik ditata gayanya secara konsisten.

Tetapi `attribute selector` bisa lebih spesifik. Misalkan Anda hanya ingin menargetkan tautan yang memiliki `attribute` `title`. `Attribute` `title` sering kali memberikan informasi tambahan tentang tautan tersebut, dan Anda mungkin ingin menata tautan-tautan ini secara berbeda untuk menunjukkan bahwa mereka memiliki informasi ekstra yang tersedia. Berikut adalah cara Anda melakukannya:

```html
<link rel="stylesheet" href="styles.css">
<a href="https://example.com" title="Example link with a title attribute">Example link with a title attribute</a>
<a>Example link without a title or href attribute</a>
```

```css
a {
  display: block;
}

a[title] {
  font-weight: bold;
  text-decoration: none;
}
```

Aturan ini menerapkan teks tebal (*bold*) dan menghapus garis bawah dari tautan apa pun yang memiliki `attribute` `title`. Ini adalah cara yang bagus untuk membedakan tautan-tautan ini secara visual dari tautan lain di halaman.

Anda juga dapat menggabungkan `attribute selector` agar menjadi lebih presisi. Misalnya, jika Anda ingin menata gaya tautan yang memiliki `attribute` `href` dan `title` sekaligus, Anda dapat melakukan ini:

```html
<link rel="stylesheet" href="styles.css">
<a href="https://example.com" title="Example link with a title attribute">Example link with a title attribute</a>
<a>Example link without a title or href attribute</a>
```

```css
a {
  display: block;
}

a[href][title] {
  display:block;
  color: green;
}
```

Dalam hal ini, hanya tautan yang berisi `attribute` `href` dan `title` sekaligus yang akan ditata gayanya dengan teks berwarna hijau. Tingkat kendali inilah yang membuat `attribute selector` begitu ampuh dalam `CSS`.

Contoh lain untuk `attribute selector` adalah mencocokkan satu `value` dalam daftar `value` yang dipisahkan spasi di dalam sebuah `attribute`.

Berikut adalah contoh `element` *anchor* dengan beberapa `class`:

```html
<a href="https://example.com" class="btn primary large">Visit Example Site</a>
```

Untuk menargetkan `element` *anchor* spesifik ini, Anda dapat menggunakan `selector` berikut:

```html
<link rel="stylesheet" href="styles.css">
<a href="https://example.com" class="btn primary large">Visit Example Site</a>
```

```css
a[class~="primary"] {
  color: red;
  font-weight: bold;
}
```

Sintaks `[attr~=value]` digunakan di sini untuk menargetkan semua `element` *anchor* di mana `attribute` `class` berisi kata `"primary"`.

Jika Anda perlu menargetkan sebuah `element` di mana `value` dari `attribute`-nya diawali (*prefixed*) dengan `value` tertentu, maka Anda dapat menggunakan sintaks `[attr^=value]`. Berikut adalah sebuah contoh:

```html
<link rel="stylesheet" href="styles.css">
<a href="https://example.com" class="btn primary large">Visit Example Site</a>
```

```css
a[href^="https://"] {
  color: green;
  text-decoration: underline;
}
```

Pada contoh ini, `selector` `a[href^="https://"]` akan menargetkan semua `element` *anchor* di mana `value` dari `attribute` `href` dimulai dengan `"https://"`.

Untuk menargetkan `element-element` di mana `value` dari `attribute` diakhiri dengan `value` tertentu, Anda dapat menggunakan sintaks `[attr$=value]`. Berikut adalah contohnya:

```html
<link rel="stylesheet" href="styles.css">
<a href="https://example.com">Visit Example Site</a>
```

```css
a[href$=".com"] {
  color: darkgreen;
  text-decoration: underline dotted;
}
```

Pada contoh ini, `selector` `a[href$=".com"]` akan menargetkan semua `element` *anchor* di mana `value` dari `attribute` `href` diakhiri dengan `.com`.

Menggunakan `attribute selector` tidak hanya meningkatkan penataan gaya halaman web Anda, tetapi juga meningkatkan aksesibilitas dengan membuat `element-element` interaktif seperti tautan lebih mudah dibedakan berdasarkan `attribute`-nya.

## Pertanyaan (Questions)

`Selector` `CSS` manakah yang akan Anda gunakan untuk menargetkan semua tautan dengan `attribute` `href`?

- [x] `a[href]`
- [ ] `a[href=""]`
- [ ] `a[href="https"]`
- [ ] `a[href*="https"]`

Apa yang dilakukan oleh `attribute selector` dalam `CSS`?

- [ ] Menargetkan `element` berdasarkan nama `tag`-nya.
- [ ] Menargetkan `element` berdasarkan nama `class`-nya.
- [x] Menargetkan `element` berdasarkan `attribute`-nya.
- [ ] Menargetkan `element` berdasarkan `id`-nya.

Manakah dari aturan `CSS` berikut yang akan menata tautan yang memiliki `attribute` `href` dan `title` sekaligus?

- [ ] `a[href]`
- [ ] `a[title]`
- [x] `a[href][title]`
- [ ] `a[href*="title"]`

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-how-to-use-the-attribute-selector-to-target-elements-with-the-lang-and-data-lang-attributes.md)
