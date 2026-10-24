# Apa Saja Praktik Terbaik untuk Merancang Cards?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau (*preview*) dari konsep-konsep desain ini agar Anda lebih memahami cara kerjanya. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

Komponen kartu (`cards`) adalah hal yang sangat umum ditemukan di situs *e-commerce*, media sosial, dan berita. Komponen ini digunakan untuk membantu menampilkan informasi secara terstruktur. Saat Anda merancang `cards` Anda, penting untuk memahami berbagai praktik terbaik (*best practices*) sehingga pengguna dapat dengan mudah memahami informasi yang ingin Anda sampaikan.

Pertimbangan pertama untuk desain kartu adalah kesederhanaan (*simplicity*). Anda tidak ingin kartu Anda berantakan secara visual (*visually cluttered*) atau menampilkan terlalu banyak informasi. Sebagai contoh, jika desain kartu berantakan secara visual, akan ada terlalu banyak informasi yang harus diproses pengguna sekaligus.

Berikut adalah contoh desain kartu yang berantakan:

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2><strong><em>Product Name: Ultimate Edition</em></strong></h2>
  <p>
    This is a great product that you will love! It has many features and benefits that will make your life easier and more enjoyable. Whether you're at home or on the go, this product is perfect for all situations. Don’t miss out on this incredible offer, buy now and experience the difference!
  </p>
  <button>Buy Now</button>
  <button>Learn More</button>
  <button>Add to Wishlist</button>
  <p><strong>Only 3 left in stock!</strong></p>
  <p><em>Rated 4.8 stars by 2,391 customers</em></p>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}
.card p {
  font-size: 1em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

Memiliki lebih sedikit informasi dan jarak spasi yang baik antar-item pada kartu membuatnya lebih mudah bagi pengguna untuk memproses informasi, dan memungkinkan penempatan beberapa kartu pada satu halaman.

Berikut adalah contoh desain kartu yang sederhana:

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2>Product Name</h2>
  <button>Buy Now</button>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 200px;
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

Hal lain yang perlu dipertimbangkan adalah di mana pengguna dapat mengeklik kartu tersebut. Beberapa desain kartu memiliki satu tombol tunggal, memperjelas di mana pengguna dapat mengeklik. Desain kartu lainnya membuat seluruh bagian kartu dapat diklik (*clickable*). Ketika pengguna mengarahkan kursor (*hover*) ke bagian kartu mana pun, kartu akan berubah warna atau memiliki efek bayangan (*shadow effect*) untuk menunjukkan bahwa kartu tersebut dapat diklik. Desain apa pun yang Anda pilih, hal tersebut harus konsisten di seluruh situs Anda dan mudah dipahami oleh pengguna.

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <a href="#">
    <img src="https://placehold.co/150x150" alt="Example Product Image">
    <h2>Product Name</h2>
    <button>Buy Now</button>
  </a>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card a {
  text-decoration: none;
  color: inherit;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

Pertimbangan lainnya adalah penggunaan media pada kartu Anda. Memilih media berkualitas tinggi dapat meningkatkan pengalaman pengguna secara signifikan. Jika Anda menggunakan gambar atau video untuk misalnya kartu produk, semakin tinggi kualitasnya maka semakin tertarik pula pengguna pada produk tersebut. Namun jika Anda menggunakan kualitas media yang buruk, pengguna mungkin tidak mempercayai kualitas produk dan layanan Anda.

Salah satu hal terakhir yang perlu dipertimbangkan adalah penggunaan hierarki warna (*color hierarchy*). Anda ingin memastikan bahwa informasi paling penting pada kartu adalah yang paling menonjol. Anda dapat menggunakan warna-warna cerah untuk elemen penting seperti tombol ajakan bertindak (*call-to-action button*), dan warna-warna yang lebih lembut untuk item yang kurang penting pada kartu.

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2>Product Name</h2>
  <button>Buy Now</button>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #28a745; 
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

Saat Anda terus mengerjakan aplikasi web, ingatlah berbagai praktik terbaik untuk desain kartu ini. Hal ini akan membantu Anda menciptakan pengalaman pengguna yang lebih baik bagi para pengguna Anda.

## Pertanyaan (Questions)

Mengapa penting untuk memiliki desain kartu yang sederhana?

- [x] Anda ingin pengguna memiliki pengalaman pengguna yang baik dan mencerna informasi dengan mudah.
- [ ] Anda ingin pengguna merasa bingung.
- [ ] Anda ingin pengguna merasa kewalahan.
- [ ] Anda ingin pengguna merasa frustrasi.

Mengapa penting untuk memiliki hierarki warna yang baik pada desain kartu Anda?

- [ ] Untuk mempersulit pengguna dalam memahami informasi.
- [ ] Untuk membuat performa situs lebih baik.
- [x] Untuk menyoroti informasi yang paling penting pada kartu.
- [ ] Untuk membuat kartu berantakan secara visual.

Apa keuntungan menggunakan media berkualitas tinggi pada desain kartu Anda?

- [ ] Tidak ada keuntungan sama sekali.
- [ ] Pengguna akan segera meninggalkan situs.
- [ ] Hal ini akan mempercepat performa situs.
- [x] Pengguna akan mempercayai kualitas produk dan layanan Anda.

---

[⬅️ Sebelumnya](4-what-are-best-practices-for-designing-breadcrumbs.md) | [Selanjutnya ➡️](6-what-are-best-practices-for-designing-infinite-scrolls.md)
