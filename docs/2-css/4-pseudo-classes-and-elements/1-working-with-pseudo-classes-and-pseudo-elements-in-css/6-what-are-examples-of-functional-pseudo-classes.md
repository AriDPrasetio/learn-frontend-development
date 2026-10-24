# Apa Saja Contoh Pseudo-class Fungsional?

`Functional pseudo-class` (atau *pseudo-class* fungsional) memungkinkan Anda memilih `element` berdasarkan kondisi atau relasi yang lebih kompleks. Tidak seperti `pseudo-class` reguler yang menargetkan `element` berdasarkan suatu status (*state*), misalnya `:hover` atau `:focus`, `functional pseudo-class` menerima argumen di dalam tanda kurung, oleh karena itu dinamakan "*functional pseudo-classes*".

Contoh dari `functional pseudo-class` adalah:

- `:is()`
- `:where()`
- `:has()`
- `:not()`

Mari kita pelajari lebih dalam masing-masing `functional pseudo-class` ini beserta contohnya.

`Pseudo-class` `:is()` berguna ketika Anda ingin menata gaya sekelompok `element` yang berbagi beberapa karakteristik, tetapi tidak semuanya. Sebagai contoh, Anda mungkin ingin menata berbagai jenis tombol di situs web Anda, termasuk `element` `button`, tautan yang ditata seperti tombol, dan `element` `input` dengan tipe `submit` dan `reset`. Berikut adalah contoh yang merepresentasikannya. Tanpa fungsi `:is()`, Anda harus menulis `selector` yang kompleks seperti ini:

```html
<link rel="stylesheet" href="styles.css" />
<button>Example Button</button>
<a href="#" class="button">Link styled like a button</a>
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
```

```css
button,
a.button,
input[type='submit'],
input[type='reset'] {
  background-color: darkblue;
  color: white;
  border: 1px solid darkblue;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  font-size: 16px;
  text-align: center;
}

button:hover,
a.button:hover,
input[type='submit']:hover,
input[type='reset']:hover {
  background-color: blue;
  border-color: blue;
}
```

Dengan fungsi `:is()`, Anda dapat menulis `selector` yang lebih ringkas dan mudah dipahami seperti ini:

```html
<link rel="stylesheet" href="styles.css" />
<button>Example Button</button>
<a href="#" class="button">Link styled like a button</a>
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
```

```css
:is(button, a.button, input[type='submit'], input[type='reset']) {
  background-color: darkblue;
  color: white;
  border: 1px solid darkblue;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  font-size: 16px;
  text-align: center;
}

:is(button, a.button, input[type='submit'], input[type='reset']):hover {
  background-color: blue;
  border-color: blue;
}
```

`Pseudo-class` `:where()` berfungsi serupa dengan `:is()`, tetapi tidak meningkatkan spesifisitas (*specificity*) dari `selector` Anda. Hal ini menjadikannya ideal untuk menerapkan gaya tanpa memengaruhi spesifisitas dari aturan (*rules*) lainnya.

Sebagai contoh, Anda dapat menggunakan fungsi `:where()` untuk menerapkan `margin` dan `padding` bernilai nol pada `element` *heading*. Ini memastikan bahwa penyetelan ulang (*reset*) tersebut tidak akan mengganggu gaya yang lebih spesifik yang mungkin Anda terapkan nantinya. Berikut adalah contohnya:

```html
<link rel="stylesheet" href="styles.css" />
<h1>Page Title</h1>
<h2>Subtitle</h2>
<h3>A point</h3>

<p>Example paragraph.</p>
<p>Example paragraph.</p>
<p>Example paragraph.</p>
```

```css
:where(h1, h2, h3) {
  margin: 0;
  padding: 0;
}
```

Menata gaya `element` induk berdasarkan status anak-anaknya sebelumnya sangat menantang hingga `pseudo-class` `:has()` diperkenalkan. Ini memungkinkan Anda menerapkan `styles` ke `element` induk berdasarkan keberadaan atau status dari `element` anaknya.

Sebagai contoh, `CSS` di bawah ini hanya akan berlaku untuk `element` `article` mana pun yang memiliki `h2` di dalamnya:

```html
<link rel="stylesheet" href="styles.css" />
<article>
  <h2>Subheading</h2>
  <p>Lorem ipsum dolor sit amet.</p>
</article>

<article>
  <h3>A point</h3>
  <p>Lorem ipsum dolor sit amet.</p>
  <p>Lorem ipsum dolor sit amet.</p>
</article>
```

```css
article:has(h2) {
  border: 2px solid hotpink;
}
```

`Pseudo-class` `:not()` sangat ideal untuk situasi di mana Anda ingin menerapkan `styles` ke sekelompok `element`, dengan mengecualikan satu atau beberapa pengecualian spesifik. Pada `CSS` di bawah ini, tombol apa pun yang bukan merupakan tombol utama (*primary button*) akan memiliki latar belakang abu-abu:

```html
<link rel="stylesheet" href="styles.css" />
<button class="primary">Primary Button</button>
<button class="secondary">Secondary Button</button>
<button class="danger">Another Secondary Button</button>
```

```css
button {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  color: white;
}

button.primary {
  background-color: deepskyblue;
}

button:not(.primary) {
  background-color: grey;
}
```

## Pertanyaan (Questions)

`Pseudo-class` mana yang berfungsi seperti `:is()`, tetapi tidak menambahkan spesifisitas apa pun ke `selector` Anda?

- [ ] `:not()`
- [ ] `:has()`
- [x] `:where()`
- [ ] `:empty`

Manakah dari berikut ini yang BUKAN merupakan `functional pseudo-class`?

- [ ] `:is()`
- [x] `:first-child`
- [ ] `:has()`
- [ ] `:where()`

`Pseudo-class` mana yang sempurna untuk situasi di mana Anda ingin menerapkan gaya ke sekelompok `element` tanpa satu atau dua pengecualian?

- [ ] `:has()`
- [ ] `:is()`
- [x] `:not()`
- [ ] `:where()`

---

[⬅️ Sebelumnya](5-what-are-examples-of-tree-structural-pseudo-classes.md) | [Selanjutnya ➡️](7-what-are-pseudo-elements.md)
