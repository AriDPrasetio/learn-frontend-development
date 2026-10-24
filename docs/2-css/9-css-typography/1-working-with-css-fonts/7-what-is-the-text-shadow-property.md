# Apa Itu Properti text-shadow, dan Bagaimana Cara Kerjanya?

Secara bawaan (*default*), `CSS` tidak menerapkan bayangan apa pun pada teks. Ini adalah contoh paragraf tanpa bayangan. Namun jika Anda perlu menambahkan bayangan, Anda dapat menggunakan properti `text-shadow`.

```css
text-shadow: /* Values */
```

## Nilai Offset X dan Y (The X and Y Offset Values)

Di dalam `CSS`, Anda dapat mendeskripsikan sebuah bayangan melalui kombinasi dari offset `X`, offset `Y`, *blur radius*, dan warna (*color*). Pertama, Anda harus menentukan offset `X` dan `Y`, yang masing-masing merepresentasikan jarak horizontal dan vertikal bayangan dari teks. Nilai-nilai ini wajib (*required*).

Berikut adalah contoh cara menerapkan offset `X` dan `Y` pada sebuah bayangan. Kita menerapkan properti `text-shadow` dengan offset x sebesar `3px` dan offset y sebesar `2px`:

```html
<link rel="stylesheet" href="styles.css">
<p>Hello, World!</p>
```

```css
p {
  text-shadow: 3px 2px;
}
```

Di dalam `browser`, teks dan bayangannya akan terlihat serupa.

## Menambahkan Warna ke Bayangan (Adding a Color to the Shadow)

Kita juga dapat menyesuaikan warna bayangan dengan menentukan nilainya sebelum atau sesudah nilai offset. Mari kita atur warna bayangan. Kita akan menggunakan format warna heksadesimal di sini, tetapi Anda dapat menggunakan format warna apa pun yang valid.

```html
<link rel="stylesheet" href="styles.css">
<p>Hello, World!</p>
```

```css
p {
  text-shadow: 3px 2px #00ffc3;
}
```

Kita menuliskan warna setelah nilai offset, namun Anda juga dapat menuliskan warna sebelum nilai offset jika Anda mau. Keduanya setara:

```html
<link rel="stylesheet" href="styles.css">
<p>Hello, World!</p>
```

```css
p {
  text-shadow: #00ffc3 3px 2px;
}
```

Di dalam `browser`, bayangan tersebut kini memiliki warna tertentu, sehingga kita dapat membedakannya dengan sangat mudah dari teks utama.

## Nilai Offset Positif dan Negatif (Positive and Negative Offset Values)

Sekarang setelah kita dapat membedakan bayangan dari teks, penting juga untuk melihat bagaimana nilai positif dan negatif memengaruhi offset bayangan. Nilai positif untuk offset `X` dan offset `Y` masing-masing akan menggeser bayangan ke kanan dan ke bawah, sedangkan nilai negatif akan menggeser bayangan ke kiri dan ke atas. Berikut adalah contoh yang menggunakan nilai negatif:

```html
<link rel="stylesheet" href="styles.css">
<p>Hello, World!</p>
```

```css
p {
  text-shadow: -3px -2px #00ffc3;
}
```

Sekarang bayangan akan bergeser ke kiri dan ke atas relatif terhadap teks. Bagus.

## Blur Radius

Namun bayangannya belum terlihat begitu bagus, karena terlihat persis seperti teks aslinya namun diletakkan di belakangnya. Untuk membuatnya terlihat lebih menarik, kita perlu menambahkan nilai ketiga, yaitu *blur radius* (radius keburaman). Nilai ini bersifat opsional, namun membuat bayangan terlihat jauh lebih halus dan samar (*subtle*). Nilai bawaan (*default*) dari *blur radius* adalah nol. Semakin tinggi nilainya, semakin besar keburamannya, yang berarti bayangannya menjadi lebih terang/pudar.

Di sini, kita mengatur *blur radius* menjadi `3px` dan kita kembali menggunakan nilai positif untuk offset:

```html
<link rel="stylesheet" href="styles.css">
<p>Hello, World!</p>
```

```css
p {
  text-shadow: 3px 2px 3px #00ffc3;
}
```

Sekarang tampilannya mulai menyerupai bayangan yang sebenarnya. Bayangannya lebih kabur dan halus, sehingga kita dapat berfokus pada teks utama sementara bayangan memberikan sedikit gaya pada latar belakang. Dari sini, kita dapat sedikit mengubah nilai-nilainya hingga menemukan kombinasi offset, warna, dan *blur radius* yang sesuai dengan kebutuhan kita.

## Menambahkan Beberapa Bayangan (Adding Multiple Shadows)

Sangat bermanfaat juga untuk mengetahui bahwa teks dapat memiliki lebih dari satu bayangan. Anda hanya perlu menuliskannya di dalam properti `text-shadow` yang sama dengan dipisahkan oleh tanda koma. Bayangan-bayangan tersebut akan diterapkan secara berlapis (*layers*), dari depan ke belakang, dengan bayangan pertama berada di lapisan paling atas.

Berikut adalah contoh paragraf dengan tiga bayangan yang diterapkan berlapis. Perhatikan bahwa semua bayangan ini didefinisikan dalam properti `text-shadow` yang sama dan dipisahkan dengan tanda koma:

```html
<link rel="stylesheet" href="styles.css">
<p>Hello, World!</p>
```

```css
p {
  text-shadow: 
    3px 2px 3px #00ffc3, 
    -3px -2px 3px #0077ff, 
    5px 4px 3px #dee7e5;
}
```

`text-shadow` adalah properti `CSS` yang sangat berguna untuk membuat teks Anda lebih menonjol. Properti ini juga dapat meningkatkan desain keseluruhan aplikasi web Anda. Dengan memilih offset, keburaman (*blur*), dan warna, Anda dapat menciptakan berbagai efek bayangan.

## Pertanyaan (Questions)

Apa tujuan utama dari properti `CSS` `text-shadow`?

- [ ] Untuk menyesuaikan ukuran font teks.
- [ ] Untuk mengubah warna teks.
- [x] Untuk membuat efek bayangan pada teks.
- [ ] Untuk mengontrol spasi antar baris teks.

Bagaimana cara membuat bayangan teks berwarna hitam dengan offset horizontal ke arah kanan dan blur radius sebesar 5 piksel?

- [ ] `text-shadow: 5px 0px 0px black;`
- [x] `text-shadow: 5px 0px 5px black;`
- [ ] `text-shadow: 5px 5px 0px black;`
- [ ] `text-shadow: 0px 5px 0px black;`

Bagaimana cara membuat efek bayangan teks yang berlapis-lapis (*multiple-layered*)?

- [x] Dengan mendefinisikan beberapa bayangan pada properti `text-shadow`.
- [ ] Dengan menyarangkan elemen satu di dalam yang lain.
- [ ] Dengan menggunakan properti `filter`.
- [ ] Dengan menerapkan gambar latar belakang (*background image*).

---

[⬅️ Sebelumnya](6-how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts.md) | Selanjutnya ➡️
