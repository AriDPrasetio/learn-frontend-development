# Apa Itu ID dan Class, dan Kapan Anda Harus Menggunakannya?


`Attribute` `id` menambahkan pengidentifikasi unik ke suatu `element` `HTML`.

Berikut adalah contoh `element` `h1` dengan `id` bernilai `title`.

Di bawah `element` `h1`, tambahkan `element` `h2` dengan `id` yang diatur ke `"subtitle"`. Anda dapat menulis teks apa pun yang Anda sukai untuk `h2` dan Anda akan melihat perubahannya di jendela pratinjau. Untuk berinteraksi dengan contoh tersebut, Anda perlu mengaktifkan editor interaktif.

```html
<h1 id="title">Movie Review Page</h1>
```

Anda dapat mereferensikan nama `id` berupa `title` di dalam kode `JavaScript` atau `CSS` Anda. Berikut adalah contoh `CSS` yang mereferensikan `id` `title` untuk mengubah warna teks (`color`) menjadi merah (`red`).

**CATATAN**: Beberapa kode `CSS` telah disediakan untuk Anda dalam contoh interaktif ini. Jangan khawatir untuk berusaha memahami kode `CSS` tersebut sekarang karena Anda akan mempelajari lebih lanjut tentang hal itu pada pelajaran mendatang. Namun jika Anda ingin melihat warna teks berubah menjadi biru, aktifkan editor interaktif, klik pada *tab* `styles.css` dan ubah `color: red;` menjadi `color: blue;`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
       name="viewport"
       content="width=device-width, initial-scale=1.0" />
    <title>Review page Example</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1 id="title">Movie Review Page</h1>
  </body>
</html>
```

```css
#title {
  color: red;
}
```

Simbol tagar (`#`) di depan `title` memberitahu komputer bahwa Anda ingin menargetkan sebuah `id` dengan nilai tersebut. Nama `id` tidak boleh digunakan lebih dari sekali, dan harus selalu unik. Hal lain yang perlu diperhatikan mengenai nilai `id` adalah bahwa nilai tersebut tidak boleh mengandung spasi. Berikut adalah contoh penerapan kata `main` dan `heading` pada nilai `attribute` `id`:

```html
<h1 id="main heading">Main heading</h1>

```

Browser akan melihat spasi ini sebagai bagian dari `id` yang akan menyebabkan masalah yang tidak diinginkan ketika berhubungan dengan penataan gaya (*styling*) dan penulisan skrip (*scripting*). Nilai `attribute` `id` hanya boleh berisi huruf, angka, garis bawah (*underscore*), dan tanda hubung (*dash*).

Berbeda dengan `attribute` `id`, nilai `attribute` `class` tidak harus unik dan dapat memuat spasi.

Berikut adalah contoh penerapan kelas bernama `box` pada sebuah `element` `div`.

```html
<div class="box"></div>

```

Jika Anda ingin menambahkan beberapa nama kelas ke sebuah `element`, Anda dapat melakukannya dengan memisahkan nama-nama kelas tersebut dengan spasi. Berikut adalah contoh terbaru yang menerapkan beberapa kelas pada sebuah `element` `div`.

```html
<div class="box red-box"></div>

```

Berikut adalah contoh lain dari penerapan beberapa kelas ke beberapa `element` `div`.

**CATATAN**: Beberapa kode `CSS` telah disediakan untuk Anda dalam contoh interaktif ini. Jangan khawatir untuk memahami kode `CSS` tersebut karena Anda akan mempelajarinya di pelajaran mendatang. Tetapi jika Anda ingin mengubah warna kotak pertama dan ketiga, aktifkan editor interaktif dan klik pada *tab* `styles.css` lalu ubah `background-color: red;` menjadi `background-color: black;`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
       name="viewport"
       content="width=device-width, initial-scale=1.0" />
    <title>Colored boxes example</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="box red-box"></div>
    <div class="box blue-box"></div>
    <div class="box red-box"></div>
    <div class="box blue-box"></div>
  </body>
</html>
```

```css
.box {
  width: 100px;
  height: 100px;
}

.red-box {
  background-color: red;
}

.blue-box {
  background-color: blue;
}
```

Jadi, sebagai ringkasan, kapan sebaiknya Anda menggunakan `id` versus `class`? Kelas (`class`) paling tepat digunakan ketika Anda ingin menerapkan sekumpulan gaya ke banyak `element`. Jika Anda ingin menargetkan suatu `element` tertentu secara spesifik, yang terbaik adalah menggunakan `id` karena nilai-nilai tersebut harus unik.


## Pertanyaan (Questions)


Kapan Anda harus menggunakan `id` versus `class`?


- [ ] Gunakan `class` saat Anda menginginkan pengidentifikasi unik yang hanya boleh berlaku untuk satu `element`.

- [x] Gunakan `id` saat Anda memerlukan pengidentifikasi unik untuk suatu `element` tertentu, dan gunakan `class` saat Anda ingin menerapkan gaya atau perilaku ke beberapa `element`.

- [ ] Gunakan `id` saat Anda ingin menata gaya beberapa `element` secara konsisten di berbagai bagian halaman web Anda.

- [ ] Gunakan `id` saat Anda ingin menerapkan gaya yang dapat dengan mudah ditimpa oleh gaya lain di `CSS` Anda.



Apa yang terjadi jika Anda menggunakan `id` yang sama lebih dari sekali di dalam `HTML` Anda?


- [x] Hal ini dapat menyebabkan hasil dan masalah yang tidak diinginkan saat mencoba menerapkan gaya atau menargetkan suatu `element` di dalam `JavaScript`.

- [ ] Program akan mengalami *crash*.

- [ ] Tidak ada yang terjadi.

- [ ] Akan muncul pesan peringatan *popup* di jendela browser.



Manakah dari berikut ini yang BUKAN merupakan nilai yang benar untuk `attribute` `id`?


- [ ] `id="heading"`

- [ ] `id="main-heading"`

- [ ] `id="main"`

- [x] `id="main heading"`



---
[⬅️ Sebelumnya](1-what-are-div-elements.md) | [Selanjutnya ➡️](3-what-are-html-entities.md)
