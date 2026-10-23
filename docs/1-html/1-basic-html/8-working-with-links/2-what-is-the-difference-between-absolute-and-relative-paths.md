# Apa Perbedaan Antara Jalur Absolut dan Relatif?

Sebuah jalur (`path`) adalah sebuah *string* yang menentukan lokasi file atau direktori dalam sistem file (*file system*). Dalam pengembangan web, `path` memungkinkan pengembang menautkan ke sumber daya seperti gambar (`image`), *stylesheet*, skrip (`script`), dan halaman web lainnya. Ada jalur absolut (`absolute path`) dan jalur relatif (`relative path`) - keduanya penting saat menentukan lokasi file dalam suatu sistem file. Mari kita pelajari keduanya sehingga Anda dapat memutuskan mana yang akan digunakan dan kapan menggunakannya.

## Jalur Absolut (Absolute Paths)

Sebuah `absolute path` adalah tautan lengkap ke suatu sumber daya. Jalur ini dimulai dari direktori akar (*root directory*), mencakup setiap direktori lainnya, dan akhirnya nama file beserta ekstensinya. "*Root directory*" mengacu pada direktori atau folder tingkat teratas dalam suatu hierarki.

Jika Anda menautkan ke suatu sumber daya di mesin lokal Anda, gunakan `absolute path`, yang mencakup lokasi direktori lengkap dari file tersebut. Berikut cara menautkan ke file `about.html` dengan `absolute path`:

```html
<p>
  Read more on the
  <a
    href="/Users/user/Desktop/fCC/script-code/absolute-vs-relative-paths/pages/about.html"
    >About Page</a
  >
</p>
```

Bentuknya terlihat seperti ini karena kita memulai dari akar (*root*) dan masuk ke folder bernama `Users`, lalu ke folder bernama `user`, lalu ke folder bernama `Desktop`, lalu ke folder bernama `fCC`, lalu ke folder bernama `script-code`, lalu ke folder bernama `absolute-vs-relative-paths`, kemudian ke folder bernama `pages` hingga akhirnya mendapatkan file `about.html`.

## URL Absolut (Absolute URLs)

Sebuah `absolute URL` adalah alamat lengkap yang digunakan untuk mengakses suatu sumber daya. Alamat ini mencakup protokol (yang dapat berupa `http`, `https`, atau `file`), dan nama domain jika sumber daya tersebut berada di web. Berikut adalah contoh `absolute URL` yang menautkan ke logo freeCodeCamp:

```html
<a href="https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg">
  View fCC Logo
</a>
```

Dalam contoh ini, protokolnya adalah `https`, nama domainnya adalah `design-style-guide.freecodecamp.org`, dan nama filenya adalah `fcc_secondary_small.svg`.

Berikut adalah tampilan `absolute URL` di bilah alamat *browser*:

```html
file:///Users/user/Desktop/fCC/script-code/absolute-vs-relative-paths/pages/about.html
```

`URL` tersebut mencakup protokol, `file://`. Ia juga mencakup jalur (`path`), yang tampak seperti ini: `/Users/user/Desktop/fCC/script-code/absolute-vs-relative-paths/pages/`, dan mewakili rangkaian folder yang mengarah ke file tersebut. Dan terakhir, ia juga mencakup `about.html`, yang merupakan nama file beserta ekstensinya.

Sebuah `absolute path` menunjukkan lokasi lengkap dari suatu file di dalam sistem file dan umumnya digunakan untuk sumber daya pada mesin lokal. Sebuah `absolute URL` menyertakan informasi akses - seperti protokol dan, untuk sumber daya web, nama domain - yang memberi tahu *browser* cara dan tempat untuk mengambil sumber daya tersebut.

## Jalur Relatif (Relative Paths)

Sekarang, mari kita lihat jalur relatif (`relative path`). Sebuah `relative path` menentukan lokasi suatu file relatif terhadap direktori dari file saat ini. Jalur ini tidak menyertakan protokol atau nama domain, menjadikannya lebih pendek dan lebih fleksibel untuk tautan internal di dalam situs web yang sama. Berikut contoh penautan ke halaman `about.html` dari halaman `contact.html`, di mana keduanya berada di folder yang sama:

```html
<p>
  Read more on the
  <a href="about.html">About Page</a>
</p>
```

Jadi bayangkan Anda berada di halaman `contact.html`, dan karena halaman `about.html` berada di tempat yang sama, Anda cukup menggunakan nama filenya saja. Ini adalah contoh penggunaan jalur file relatif (*relative file path*).

## Kapan Harus Menggunakan Absolute Path, Absolute URL, dan Relative Path

Jadi, mana yang harus Anda gunakan dan kapan: `absolute path`, `absolute URL`, atau `relative path`? Berikut adalah aturan yang harus Anda ikuti:

- Gunakan `absolute path` saat Anda ingin mereferensikan sumber daya dari lokasi yang tetap, seperti dari akar (*root*) situs Anda atau direktori yang diketahui di mesin lokal Anda.
- Gunakan `absolute URL` saat menautkan ke sumber daya yang dihosting di situs web eksternal.
- Gunakan `relative path` saat menautkan ke sumber daya di dalam situs web yang sama.
- Gunakan `relative path` jika Anda ingin menjaga kode Anda tetap lebih bersih dan lebih mudah dikelola selama pengembangan.
- Gunakan `relative path` selama pengujian lokal untuk memastikan tautan berfungsi tanpa koneksi internet.

## Pertanyaan (Questions)

Apa dua tipe dari jalur (path)?

- [ ] Jalur resolute dan absolut.
- [ ] Jalur absolut dan ultimate.
- [ ] Jalur relatif dan unik.
- [x] Jalur absolut dan relatif.

Bagaimana cara Anda menautkan ke sumber daya yang hanya tersedia di internet?

- [x] Absolute URL.
- [ ] Absolute path.
- [ ] Relative path.
- [ ] Baik jalur relatif maupun absolut.

Protokol manakah yang digunakan untuk absolute URL di mesin lokal?

- [ ] `http://`
- [ ] `https://`
- [x] `file://`
- [ ] `localhost`

---
[⬅️ Sebelumnya](1-what-are-the-different-target-attribute-types.md) | [Selanjutnya ➡️](3-what-is-the-difference-between-slashes-a-single-dot-and-double-dot-in-path-syntax.md)
