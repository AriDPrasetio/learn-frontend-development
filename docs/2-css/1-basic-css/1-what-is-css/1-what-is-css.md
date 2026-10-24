# Apa Itu CSS, dan Apa Perannya di Web?


`CSS`, yang merupakan singkatan dari Cascading Style Sheets, adalah komponen penting dari pengembangan web modern. Ini adalah bahasa *stylesheet* yang digunakan untuk menerapkan gaya (*style*) pada `HTML`. Secara sederhana, jika `HTML` adalah struktur dari sebuah halaman web, `CSS` adalah apa yang membuatnya terlihat menarik.

Berikut adalah contoh penataan gaya (*styling*) sebuah bilah navigasi (`navbar`).

**CATATAN**: Jangan khawatir jika Anda belum memahami kode `CSS` tersebut saat ini. Anda akan mempelajari cara kerja semua ini dalam pelajaran dan *workshop* mendatang. Ini hanya untuk memberi Anda gambaran tentang apa yang dapat Anda lakukan dengan sedikit `CSS`.

```html
<link rel="stylesheet" href="styles.css" />

<nav class="navbar">
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f4f4;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff9800;
}
```

Peran utama dari `CSS` adalah memisahkan konten halaman web dari presentasi visualnya. Pemisahan ini memungkinkan pengembang web untuk membuat situs web yang lebih fleksibel dan mudah dipelihara (*maintainable*).

Dengan `CSS`, Anda dapat mengontrol tata letak (*layout*), warna, *font*, dan tampilan visual keseluruhan dari halaman web tanpa mengubah struktur `HTML`.

Mari kita pertimbangkan analogi sederhana. Jika Anda mengibaratkan situs web sebagai sebuah rumah, `HTML` adalah fondasi dan kerangkanya, sedangkan `CSS` adalah cat, *wallpaper*, dan dekorasi yang membuat rumah tersebut menarik secara visual dan unik.

`CSS` bekerja dengan memilih `element` `HTML` dan menerapkan gaya padanya.

Berikut adalah contoh yang menunjukkan `element` `button` tanpa gaya dan yang telah diberi gaya. Untuk berinteraksi dengan contoh ini, Anda perlu mengaktifkan editor interaktif.

```html
<link rel="stylesheet" href="styles.css" />

<button class="regular-btn">Unstyled Button</button>
<button class="round-btn">Round Button</button>
```

```css
.round-btn {
  font-size: 1rem;
  font-family: 'Segoe UI', sans-serif;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: #2ecc71;
  color: white;
  border-radius: 50px;
  padding: 0.6rem 1.6rem;
}

.round-btn:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
}
```

Gaya-gaya ini dapat mencakup properti (`property`) seperti warna, ukuran *font* (`font-size`), dan banyak lagi. Dengan mengubah `property` ini, Anda dapat mengubah tampilan halaman web secara drastis tanpa mengubah kontennya.

Salah satu aspek paling ampuh dari `CSS` adalah kemampuannya untuk membuat desain responsif (*responsive design*).

Ini berarti bahwa dengan `CSS`, Anda dapat membuat situs web terlihat bagus di perangkat apa pun, baik itu komputer desktop, tablet, maupun ponsel pintar (*smartphone*).

`CSS` memungkinkan Anda menyesuaikan tata letak, ukuran *font*, dan elemen visual lainnya berdasarkan ukuran layar perangkat yang melihat situs web.

Coba aktifkan editor interaktif dan sesuaikan ukuran jendela pratinjau (*preview*) untuk melihat bagaimana tata letak menyesuaikan diri dengan ukuran layar.

```html
<link rel="stylesheet" href="styles.css" />

<header class="header">
    <h1>Welcome to My Responsive Site</h1>
    <p>This layout adapts to your screen size!</p>
</header>

<main class="content">
    <section class="box">Box 1</section>
    <section class="box">Box 2</section>
    <section class="box">Box 3</section>
</main>
```

```css
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.header {
  background-color: #4CAF50;
  color: white;
  padding: 2rem;
  text-align: center;
}

.content {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
}

.box {
  flex: 1;
  min-width: 200px;
  background-color: #ddd;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.box:hover {
  background-color: #ccc;
}

/* Responsive: for tablets and below (≤ 768px) */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .box {
    width: 90%;
    font-size: 1.1rem;
  }
}

/* Responsive: for phones (≤ 480px) */
@media (max-width: 480px) {
  .header {
    padding: 1.5rem 1rem;
  }

  .header h1 {
    font-size: 1.5rem;
  }

  .header p {
    font-size: 1rem;
  }

  .box {
    font-size: 1rem;
    padding: 1.5rem;
  }
}
```

Fitur penting lainnya dari `CSS` adalah sifatnya yang bertingkat (*cascading*), dari sanalah kata "*cascading*" pada namanya berasal.

Ini berarti gaya dapat diwariskan (*inherited*) dan ditimpa (*overridden*), memungkinkan struktur penataan gaya yang hierarkis. Anda akan mempelajari lebih lanjut tentang cara kerjanya dalam pelajaran-pelajaran mendatang.

`CSS` juga mendukung penggunaan lembar gaya eksternal (*external stylesheet*).

Ini berarti Anda dapat menyimpan semua aturan penataan gaya (*styling rule*) dalam file terpisah, yang kemudian dapat ditautkan ke beberapa halaman `HTML`.

Fitur ini sangat meningkatkan pemeliharaan (*maintainability*) situs web, terutama situs web yang lebih besar. Daripada harus mengubah gaya pada setiap halaman individual, Anda dapat membuat perubahan dalam satu file `CSS` yang akan memengaruhi semua halaman yang ditautkan.

Dalam dunia pengembangan web, `CSS` memainkan peran penting dalam menciptakan situs web yang menarik secara visual, responsif, dan ramah pengguna (*user-friendly*).

`CSS` memungkinkan pengembang untuk mengubah dokumen `HTML` sederhana menjadi pengalaman web menarik yang memikat perhatian pengguna dan meningkatkan interaksi mereka dengan konten web.

## Pertanyaan (Questions)

Apa tujuan utama dari CSS dalam pengembangan web?

- [ ] Untuk menyusun struktur konten halaman web.
- [ ] Untuk menangani logika sisi server (*server-side*).
- [x] Untuk memisahkan presentasi dokumen dari kontennya.
- [ ] Untuk mengelola operasi basis data (*database*).

Bagaimana CSS berkontribusi pada desain web responsif (*responsive web design*)?

- [ ] Dengan menangani autentikasi pengguna.
- [x] Dengan memungkinkan penyesuaian tata letak dan penataan gaya berdasarkan ukuran layar perangkat.
- [ ] Dengan meningkatkan waktu respons server.
- [ ] Dengan mengompresi file gambar.

Apa yang dimaksud dengan sifat "*cascading*" dari CSS?

- [ ] Ini mengacu pada cara air terjun di latar belakang situs web.
- [ ] Ini berarti file CSS harus diatur dalam urutan tertentu.
- [x] Ini memungkinkan gaya diwariskan dan ditimpa secara hierarkis.
- [ ] Ini menggambarkan seberapa cepat CSS dimuat di peramban (*browser*).

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-is-the-basic-anatomy-of-a-css-rule.md)
