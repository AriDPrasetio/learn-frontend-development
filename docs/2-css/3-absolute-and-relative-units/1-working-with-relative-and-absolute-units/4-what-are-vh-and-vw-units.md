# Apa Itu Satuan vh dan vw, dan Kapan Anda Harus Menggunakannya?

Dalam `CSS`, `vh` dan `vw` adalah satuan relatif *viewport* (*viewport-relative units*) yang memungkinkan Anda mengukur ukuran `element` berdasarkan dimensi jendela peramban (*browser window*). Satuan-satuan ini sangat berguna untuk membuat desain responsif yang beradaptasi dengan berbagai ukuran layar.

`vh` merupakan singkatan dari "*viewport height*" (tinggi *viewport*), dan `1vh` setara dengan 1% dari tinggi *viewport*.

Demikian pula, `vw` merupakan singkatan dari "*viewport width*" (lebar *viewport*), dan `1vw` setara dengan 1% dari lebar *viewport*.

Ini berarti jika Anda mengatur tinggi sebuah `element` ke `100vh`, `element` tersebut akan menempati tinggi penuh dari *viewport*, terlepas dari dimensi piksel sebenarnya dari perangkat.

Satuan-satuan ini sangat praktis ketika Anda ingin membuat tata letak layar penuh (*full-screen layouts*) atau `element` yang mempertahankan proporsi layar tertentu.

Sebagai contoh, Anda mungkin ingin menggunakannya untuk membuat bagian *hero* (*hero section*) yang selalu memenuhi seluruh layar (untuk berinteraksi dengan contoh ini, Anda perlu mengaktifkan editor interaktif).

```html
<link rel="stylesheet" href="styles.css" />

<section class="hero">
  <h1>100vh / 100vw Example</h1>
  <p>This section fills the entire browser window.</p>
</section>
```

```css
body {
  margin: 0;
  font-family: sans-serif;
  border: 5px dashed #333;
}

.hero {
  height: 100vh;
  width: 100vw;
  background-color: #add8e6; 
  padding: 2em;
}

.hero h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.hero p {
  font-size: 1em;
}
```

`CSS` ini memastikan bahwa *hero section* akan selalu berukuran tepat sesuai ukuran *viewport*, terlepas dari ukuran layar perangkat.

Satuan `vh` dan `vw` juga dapat digunakan untuk tipografi guna membuat ukuran teks yang responsif.

Aktifkan editor interaktif dan coba sesuaikan ukuran jendela pratinjau untuk melihat bagaimana teks berskala sesuai dengan ukuran *viewport*:

```html
<link rel="stylesheet" href="styles.css" />
<h1>Responsive Heading</h1>
<p>The h1 heading scales with the viewport width.</p>
```

```css
h1 {
  font-size: 5vw;
}
```

Ini akan mengatur ukuran font dari `element` `h1` ke 5% dari lebar *viewport*, memungkinkan teks berskala secara halus mengikuti ukuran jendela browser.

Salah satu keunggulan dari satuan `vh` dan `vw` adalah keduanya merespons perubahan ukuran *viewport* secara *real-time*. Ini berarti jika pengguna mengubah ukuran jendela browser mereka, `element` yang diukur dengan satuan-satuan ini akan menyesuaikan diri tanpa perlu memuat ulang (*reload*) halaman. Namun, penting untuk menggunakan satuan-satuan ini secara bijak. Menetapkan ukuran font semata-mata dengan satuan `vw`, misalnya, dapat menyebabkan teks menjadi terlalu kecil di layar sempit atau terlalu besar di layar lebar.

Pertimbangan lain adalah bahwa pada perangkat seluler, tinggi *viewport* dapat berubah ketika bilah alamat (*address bar*) browser muncul atau menghilang, yang dapat menyebabkan pergeseran tata letak yang tidak terduga jika Anda menggunakan satuan `vh` secara ekstensif.

Singkatnya, satuan `vh` dan `vw` adalah alat yang ampuh untuk membuat tata letak dan `element` responsif yang beradaptasi dengan ukuran *viewport*. Satuan-satuan ini sangat berguna untuk bagian layar penuh (*full-screen sections*), menjaga rasio aspek (*aspect ratios*), dan menciptakan desain yang berskala mulus. Namun, keduanya harus digunakan secara cermat dan sering kali dikombinasikan dengan teknik-teknik `CSS` lainnya untuk memastikan pengalaman pengguna (*user experience*) terbaik di semua perangkat.

## Pertanyaan (Questions)

Apa yang diwakili oleh `50vh` dalam `CSS`?

- [ ] 50 piksel.
- [x] Setengah dari tinggi *viewport*.
- [ ] 50% dari tinggi `element` induk.
- [ ] Setengah dari lebar *viewport*.

Manakah dari berikut ini yang merupakan kasus penggunaan yang valid untuk satuan `vw`?

- [ ] Mengatur lebar tetap untuk bilah sisi (*sidebar*).
- [ ] Menentukan lebar maksimum dari sebuah gambar.
- [x] Membuat `element` persegi yang selalu berukuran 20% dari lebar *viewport*.
- [ ] Mengatur `line-height` dari teks paragraf.

Masalah potensial apa yang mungkin timbul dari penggunaan satuan `vh` untuk `element` tata letak penting pada perangkat seluler?

- [ ] Satuan tersebut tidak didukung pada browser seluler lama.
- [x] Satuan tersebut dapat menyebabkan pergeseran tata letak (*layout shifts*) ketika bilah alamat browser seluler muncul atau menghilang.
- [ ] Satuan tersebut membuat situs web memuat lebih lambat di perangkat seluler.
- [ ] Satuan tersebut tidak berfungsi dengan layar sentuh.

---

[⬅️ Sebelumnya](3-what-are-ems-and-rems-in-css.md) | [Selanjutnya ➡️](5-what-is-the-calc-function.md)
