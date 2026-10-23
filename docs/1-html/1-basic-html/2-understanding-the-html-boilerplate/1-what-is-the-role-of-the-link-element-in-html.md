# Apa Peran Element Link di HTML, dan Bagaimana Cara Menggunakannya untuk Menghubungkan ke Stylesheet Eksternal?


Mari kita pelajari tentang `element` `link`, dan cara menggunakannya untuk menautkan ke *stylesheet* eksternal.

`Element` `link` digunakan untuk menautkan ke sumber daya eksternal seperti *stylesheet* dan ikon situs. Berikut adalah sintaks dasar untuk menggunakan `element` `link` untuk sebuah file `CSS` eksternal:

```html
<link rel="stylesheet" href="./styles.css" />

```

`Attribute` `rel` digunakan untuk menentukan hubungan (*relationship*) antara sumber daya yang ditautkan dan dokumen `HTML`. Dalam situasi ini, kita perlu menentukan bahwa sumber daya yang ditautkan ini adalah sebuah `stylesheet`.

Memisahkan kode `HTML` dan `CSS` Anda ke dalam file yang berbeda dianggap sebagai praktik terbaik (*best practice*). Para pengembang akan menggunakan `element` `link` untuk file `CSS` eksternal mereka daripada menuliskan semuanya di dalam dokumen `HTML`.

`Attribute` `href` digunakan untuk menentukan lokasi URL bagi sumber daya eksternal tersebut.

Tanda `.` yang diikuti oleh garis miring (*forward slash*) dalam contoh tersebut memberitahu komputer untuk mencari di folder, atau direktori, saat ini untuk file `styles.css`.

`Element` `link` harus ditempatkan di dalam `element` `head` seperti yang terlihat pada contoh berikut:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Examples of the link element</title>
  <link rel="stylesheet" href="./styles.css" />
</head>

```

Sering kali Anda akan melihat beberapa `element` `link` di dalam basis kode profesional yang menautkan ke berbagai *stylesheet*, *font*, dan ikon. Berikut adalah contoh penggunaan `element` `link` untuk menautkan ke Google Font eksternal bernama *Playwrite Cuba*:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
  rel="stylesheet"
/>

```

Google Fonts adalah kumpulan *font* khusus gratis dan bersumber terbuka (*open source*) yang dapat Anda gunakan di dalam proyek apa pun. Anda dapat memilih *font* mana yang ingin Anda gunakan dan Google akan menyediakan kode `HTML` dan `CSS` yang diperlukan. Dalam contoh ini, nilai `preconnect` untuk `attribute` `rel` memberitahu browser untuk membuat koneksi lebih awal ke nilai yang ditentukan dalam `attribute` `href`. Hal ini dilakukan untuk mempercepat waktu pemuatan (*loading times*) bagi sumber daya eksternal tersebut.

Kasus penggunaan umum lainnya untuk `element` `link` adalah menautkan ke ikon. Berikut adalah contoh menautkan ke favicon:

```html
<link rel="icon" href="favicon.ico" />

```

Favicon, kependekan dari *favorite icon*, adalah ikon kecil yang biasanya ditampilkan di tab browser di sebelah judul situs. Banyak situs web menggunakan favicon untuk menampilkan ikon merek (*brand*) mereka.


## Pertanyaan (Questions)


Apa peran dari `element` `link` dalam `HTML`?


- [ ] Menentukan tipe konten dari sumber daya yang ditautkan.

- [ ] Menentukan visibilitas sumber daya yang ditautkan pada halaman web.

- [ ] Menentukan ukuran *font* sumber daya yang ditautkan saat ditampilkan.

- [x] Digunakan untuk menautkan ke sumber daya eksternal seperti *stylesheet* dan ikon situs.



Apa peran dari `attribute` `rel` di dalam `element` `link`?


- [ ] Digunakan untuk menunjukkan bahasa dokumen yang ditautkan.

- [x] Digunakan untuk menentukan hubungan antara sumber daya yang ditautkan dan dokumen `HTML`.

- [ ] Digunakan untuk menentukan tipe media dari dokumen yang ditautkan.

- [ ] Digunakan untuk menentukan ukuran dokumen yang ditautkan.



Apa itu favicon?


- [ ] Jenis file `JavaScript` yang digunakan untuk meningkatkan fungsionalitas situs web.

- [ ] Jenis *font* yang digunakan untuk menata gaya teks di situs web.

- [x] Ikon kecil yang biasanya ditampilkan di tab browser di samping judul situs.

- [ ] Fitur keamanan yang digunakan untuk mencegah serangan *cross-site scripting*.



---
[⬅️ Sebelumnya](../1-understanding-html-attributes/2-what-are-attributes.md) | [Selanjutnya ➡️](2-what-is-an-html-boilerplate.md)
