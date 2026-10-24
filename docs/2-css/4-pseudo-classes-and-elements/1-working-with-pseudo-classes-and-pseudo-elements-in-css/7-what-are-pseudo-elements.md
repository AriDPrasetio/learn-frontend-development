# Apa Itu Pseudo-element, dan Bagaimana Cara Kerjanya?

Salah satu aspek paling menarik dari `CSS` adalah penggunaan `pseudo-element`. Dalam konteks ini, "pseudo" berarti "tidak nyata", jadi `pseudo-element` adalah `element` virtual atau sintetis yang tidak cocok secara langsung dengan `element` `HTML` yang sebenarnya. Mereka memungkinkan Anda untuk menata bagian tertentu dari sebuah `element` atau menyisipkan konten tanpa menambahkan `HTML` ekstra.

## Sintaks Pseudo-element

Untuk menerapkan `pseudo-element`, lampirkan ke `selector` `element` asli menggunakan tanda titik dua ganda (`::`). Perhatikan bahwa `selector` tersebut dapat berupa tipe apa pun, seperti `class` atau `ID selector`. Seperti inilah sintaks dasar dari `pseudo-element`:

```css
selector::pseudo-element {
  property: value;
}
```

Titik dua ganda inilah yang membedakan `pseudo-element` dari `pseudo-class`, yang menggunakan titik dua tunggal.

`Pseudo-element` memungkinkan Anda menata gaya bagian tertentu dari konten sebuah `element` atau menyisipkan konten sebelum atau sesudahnya, tetapi mereka tidak dapat berdiri sendiri secara independen. `Element` tempat `pseudo-element` dilampirkan disebut `originating element` (elemen asalnya).

## Pseudo-element ::before dan ::after

Mari kita mulai dengan melihat contoh untuk `pseudo-element` `::before` dan `::after`. Sesuai namanya, `::before` memungkinkan Anda menyisipkan konten tepat sebelum konten `element`, sedangkan `::after` memungkinkan Anda menyisipkan konten setelahnya.

Berikut adalah contoh dari `element` `button`. Di dalam `CSS`, kita akan menggunakan pemosisian absolut (`position: absolute`) dan `pseudo-element` `::before` untuk menambahkan bintang sebelum teks `Learn More` pada tombol tersebut. Anda akan mempelajari lebih lanjut tentang pemosisian absolut pada pelajaran mendatang.

```html
<link rel="stylesheet" href="styles.css" />
<button class="cta-button">Learn More</button>
```

```css
.cta-button {
  background-color: lightseagreen;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
}

.cta-button::before {
  content: "⭐";
  position: absolute;
  left: 3px;
  top: 8px;
  font-size: 0.75rem;
}
```

`Property` `content` digunakan untuk mewakili konten yang ingin Anda tambahkan sebelum teks tombol. Dalam contoh ini, kita menambahkan sebuah bintang. Anda akan melihat bahwa Anda tidak hanya dapat menyisipkan konten tetapi juga menatanya. Berikut adalah contoh `pseudo-element` `::after` dengan tombol yang sama:

```html
<link rel="stylesheet" href="styles.css" />
<button class="cta-button">Learn More</button>
```

```css
.cta-button {
  background-color: orange;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  position: relative;
}

.cta-button::after {
  content: '➡️';
  position: absolute;
  right: 5px;
  bottom: 6px;
  font-size: 1.125rem;
  transition: transform 0.3s ease;
}
```

Pada `pseudo-element` `::after`, `property` `transition` digunakan untuk menganimasikan perubahan selama 0,3 detik dengan efek peredaman (*easing*), menciptakan transformasi yang halus dan bertahap alih-alih perubahan mendadak. Anda akan mempelajari lebih lanjut tentang `property` `transition` pada pelajaran mendatang.

Anda juga dapat melampirkan `pseudo-class` ke konten yang Anda sisipkan ke dalam konten lain dengan `pseudo-element` `::before` dan `::after`. Misalnya, status *hover* untuk konten tersebut. Berikut adalah sebuah contoh:

```html
<link rel="stylesheet" href="styles.css" />
<button class="cta-button">Learn More</button>
```

```css
.cta-button {
  background-color: orange;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  position: relative;
}

.cta-button::after {
  content: "➡️";
  position: absolute;
  right: 5px;
  bottom: 6px;
  font-size: 1.125rem;
  transition: transform 0.3s ease;
}

.cta-button:hover::after {
  transform: translateX(2px);
}
```

Dengan `transform: translateX(2px)` dalam status *hover*, konten akan didorong ke kanan sebesar `2px` setiap kali pengguna mengarahkan kursor ke atas tombol. `Property` `transition` di dalam `::after` itu sendiri memastikan proses tersebut memakan waktu `0.3s`.

Itulah yang dilakukan oleh `property` `transform` – memungkinkan Anda memutar (*rotate*), memiringkan (*skew*), mengubah skala (*scale*), atau menggeser (*translate*) sebuah `element` ke arah tertentu. Anda akan mempelajari lebih lanjut tentang hal tersebut pada pelajaran mendatang.

## Pseudo-element ::first-letter

Pada contoh berikutnya, kita akan melihat `pseudo-element` `::first-letter`. `Pseudo-element` `::first-letter` menargetkan huruf pertama dari konten sebuah `element`, memungkinkan Anda untuk menatanya. Berikut adalah contoh teks paragraf. Jika kita ingin menata huruf pertama, kita dapat menggunakan `pseudo-element` `::first-letter` seperti ini:

```html
<link rel="stylesheet" href="styles.css" />
<p>freeCodeCamp lets you learn to code without having to pay.</p>
```

```css
p::first-letter {
  font-size: 4rem;
}
```

## Pseudo-element ::marker

Pada contoh terakhir, kita akan melihat `pseudo-element` `::marker`, yang memungkinkan Anda memilih penanda (*marker*), tanda butir (*bullet*), atau penomoran item daftar untuk penataan gaya. `Pseudo-element` `::marker` menawarkan cara untuk meningkatkan identitas merek (*brand identity*) situs web Anda dengan menyesuaikan penanda daftar agar cocok dengan skema warna Anda.

Berikut adalah contoh daftar tak berurutan (*unordered list*) dan daftar berurutan (*ordered list*). Untuk mengubah warna dan ukuran penanda item daftar, Anda dapat menggunakan `pseudo-element` `::marker` seperti ini:

```html
<link rel="stylesheet" href="styles.css" />
<ul>
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
  <li>Unordered list item 3</li>
  <li>Unordered list item 4</li>
</ul>

<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
  <li>Ordered list item 3</li>
  <li>Ordered list item 4</li>
</ol>
```

```css
li::marker {
  color: crimson;
  font-size: 1.5em;
  font-weight: bold;
}
```

Dalam pelajaran ini, kita baru membahas beberapa `pseudo-element`. Namun ada lebih banyak lagi seperti `::placeholder`, `::spelling-error`, dan `::selection` yang saya dorong untuk Anda jelajahi sendiri.

## Pertanyaan (Questions)

Manakah dari berikut ini yang paling baik menggambarkan hubungan antara `pseudo-element` dan `originating element`-nya?

- [ ] `Pseudo-element` dapat berdiri sendiri secara independen dari `originating element`.
- [ ] `Pseudo-element` harus selalu dideklarasikan sebelum `originating element`.
- [x] `Pseudo-element` bergantung pada `originating element` dan tidak dapat berdiri sendiri secara independen.
- [ ] `Pseudo-element` digunakan untuk membuat `element` `HTML` baru.

Manakah dari berikut ini yang secara tepat membedakan `pseudo-element` dari `pseudo-class`?

- [ ] `Pseudo-element` menggunakan titik dua tunggal, sedangkan `pseudo-class` menggunakan titik dua ganda.
- [x] `Pseudo-element` menggunakan titik dua ganda, sedangkan `pseudo-class` menggunakan titik dua tunggal.
- [ ] Baik `pseudo-element` maupun `pseudo-class` menggunakan notasi titik dua yang sama.
- [ ] `Pseudo-class` membutuhkan titik dua ganda, sedangkan `pseudo-element` tidak.

Manakah dari berikut ini yang paling baik menggambarkan fungsi `pseudo-element` dalam `CSS`?

- [ ] Mereka menambahkan `element` `HTML` baru ke dalam dokumen.
- [x] Mereka menata bagian tertentu dari konten `element` tanpa menambahkan tag `HTML` ekstra.
- [ ] Mereka mengganti seluruh konten `element` dengan konten baru.
- [ ] Mereka memodifikasi struktur dokumen `HTML`.

---

[⬅️ Sebelumnya](6-what-are-examples-of-functional-pseudo-classes.md) | Selanjutnya ➡️
