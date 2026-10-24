# Apa Itu Pseudo-class, dan Bagaimana Cara Kerjanya?

`Pseudo-class` adalah kata kunci `CSS` khusus yang memungkinkan Anda memilih sebuah `element` berdasarkan status (*state*) atau posisi spesifiknya. Status atau posisi `element` tersebut dapat mencakup:

- Saat sedang aktif.
- Saat sedang diarahkan kursor (*hover*) oleh mouse.
- Saat menjadi anak pertama (`first child`) dari sebuah induk.
- Saat menjadi anak terakhir (`last child`) dari sebuah induk.
- Saat sebuah tautan (*link*) telah dikunjungi.
- Saat sedang dinonaktifkan (*disabled*).

Untuk menggunakan `pseudo-class`, Anda menambahkannya ke `selector` menggunakan titik dua (`:`) diikuti dengan nama `pseudo-class` tersebut:

```css
selector:pseudo-class {
  /* CSS properties */
}
```

Mari kita lihat bagaimana Anda dapat menggunakan `pseudo-class` untuk mewakili setiap status dan posisi yang telah kita sebutkan sebelumnya.

`Pseudo-class` `:active` memungkinkan Anda memilih status aktif dari sebuah `element`, seperti saat mengklik tombol:

```html
<link rel="stylesheet" href="styles.css" />
<button>Example Button</button>
```

```css
button:active {
  background: greenyellow;
}
```

`Pseudo-class` `:hover` mendefinisikan status *hover* dari sebuah `element`. Contohnya adalah saat mengarahkan kursor ke atas tombol atau tautan:

```html
<link rel="stylesheet" href="styles.css" />
<a href="#">Hover over me!</a>  
```

```css
a:hover {
  text-decoration: none;
  color: white;
  background: crimson;
}
```

`Pseudo-class` `:first-child` memilih `element` yang merupakan anak pertama dari `element` induknya. Berikut adalah contoh menargetkan `element` paragraf pertama di dalam sebuah `container` `div`:

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <p>first child</p>
  <p>second child</p>
  <p>third child</p>
  <p>last child</p>
</div>
```

```css
.container p:first-child {
  background: lightcoral;
  padding: 0.4rem;
}
```

`Element` paragraf pertama dalam `div` tersebut akan menerima warna latar belakang `lightcoral` dan `padding` sebesar `0.4rem` di keempat sisinya.

`Pseudo-class` `:last-child` menargetkan `element` terakhir yang merupakan anak dari induknya. Berikut adalah contoh menargetkan `element` paragraf terakhir di dalam `element` `container` `div`:

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <p>first child</p>
  <p>second child</p>
  <p>third child</p>
  <p>last child</p>
</div>
```

```css
.container p:last-child {
  background: lightcoral;
  padding: 0.4rem;
}
```

`Pseudo-class` `:visited` memungkinkan Anda menata gaya tautan yang telah dikunjungi pengguna:

```html
<link rel="stylesheet" href="styles.css" />
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
```

```css
a:visited {
  color: purple;
}
```

`Pseudo-class` `:disabled` memungkinkan Anda menata gaya `element` interaktif dalam mode nonaktif (*disabled*):

```html
<link rel="stylesheet" href="styles.css" />
<button disabled>Disabled Button</button>
```

```css
button:disabled {
  background-color: lightgray;  
}
```

Seperti yang Anda lihat, `pseudo-class` memungkinkan Anda menata gaya `element` berdasarkan interaksi pengguna, seperti mengarahkan kursor (*hover*) atau mengunjungi tautan. Ini membuat situs web Anda terasa lebih interaktif.

Selain `pseudo-class` yang telah disebutkan, ada yang lainnya seperti:

- `:focus`
- `:first-of-type`
- `:last-of-type`
- `:nth-of-type`
- `:modal`
- `:enabled`
- `:checked`
- `:required`, dan masih banyak lagi.

## Pertanyaan (Questions)

Apa yang dilakukan oleh `pseudo-class` `:hover` dalam `CSS`?

- [ ] Memilih sebuah `element` saat diklik.
- [x] Memilih sebuah `element` saat sedang diarahkan kursor (*hover*) oleh mouse.
- [ ] Memilih `element` anak pertama dari suatu induk.
- [ ] Memilih tautan setelah dikunjungi.

Apa itu `pseudo-class`?

- [x] `Pseudo-class` adalah kata kunci `CSS` khusus yang memungkinkan Anda memilih `element` berdasarkan status atau posisinya.
- [ ] Digunakan untuk membuat `element` `HTML` baru.
- [ ] Mengubah konten dari sebuah `element`.
- [ ] Merupakan pengganti untuk `class` dalam `HTML`.

Apa yang dilakukan oleh `pseudo-class` `:disabled` dalam `CSS`?

- [x] Menata gaya sebuah `element` ketika dinonaktifkan (*disabled*).
- [ ] Menata gaya sebuah `element` ketika sedang diarahkan kursor (*hover*).
- [ ] Menata gaya anak pertama dari sebuah `element` induk.
- [ ] Menata gaya tautan setelah dikunjungi.

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-are-examples-of-element-user-action-pseudo-classes.md)
