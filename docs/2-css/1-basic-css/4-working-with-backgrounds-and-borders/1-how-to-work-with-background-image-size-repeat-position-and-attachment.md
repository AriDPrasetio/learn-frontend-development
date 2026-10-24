# Bagaimana Cara Kerja Background Image Size, Repeat, Position, dan Attachment?

## Pengenalan tentang Background Properties

Saat bekerja dengan gambar latar belakang (*background images*) dalam `CSS`, Anda memiliki beberapa `properties` yang dapat digunakan untuk mengontrol bagaimana gambar-gambar tersebut ditampilkan.

`Properties` utama yang akan kita fokuskan adalah `background-size`, `background-repeat`, `background-position`, dan `background-attachment`.

Mari kita lihat terlebih dahulu `property` `background-image`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
  }
</style>
```

`CSS` di atas mengatur gambar latar belakang kucing untuk `element` `body`.

## Property `background-size`

Jika Anda ingin mengatur ukuran untuk gambar latar belakang, Anda dapat menggunakan `property` `background-size`.

Anda dapat menggunakan `contain` untuk menskalakan gambar sebesar mungkin tanpa pemotongan (*cropping*) atau peregangan (*stretching*).

Berikut adalah contoh dengan `background-size: contain`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    min-height: 100px;
  }
</style>
```

Kita mengatur `min-height` ke `100px` agar gambar latar belakang terlihat dan tata letak mempertahankan tinggi acuan (*baseline height*), memastikan bahwa meskipun dengan konten minimal, desain tetap terlihat seimbang dan menarik secara visual.

Jika kita mengubah `property` `background-size` menggunakan nilai `cover`, maka gambar latar belakang akan diskalakan untuk menutupi seluruh `element` `body` sambil tetap mempertahankan rasio aspeknya (*aspect ratio*).

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: cover;
    min-height: 100px;
  }
</style>
```

## Property `background-repeat`

Pada contoh-contoh sebelumnya, Anda mungkin memperhatikan bahwa gambar latar belakang akan terus-menerus berulang.

Secara *default*, gambar latar belakang berulang secara horizontal maupun vertikal untuk mengisi seluruh `element`. Namun, Anda dapat mengontrol perilaku ini.

Anda dapat menggunakan `property` `background-repeat` dengan nilai yang diatur ke `no-repeat`.

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 100px;
  }
</style>
```

Dengan `background-size` diatur ke `contain` dan `background-repeat` diatur ke `no-repeat`, gambar tidak akan lagi berulang di layar.

Jika Anda ingin mengulang gambar latar belakang secara horizontal, Anda dapat menggunakan nilai `repeat-x` untuk `property` `background-repeat`.

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: repeat-x;
    min-height: 100px;
  }
</style>
```

Jika Anda ingin mengulang gambar latar belakang secara vertikal, Anda dapat menggunakan nilai `repeat-y` untuk `property` `background-repeat`.

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: repeat-y;
    min-height: 100px;
  }
</style>
```

## Property `background-position`

Untuk memposisikan gambar latar belakang pada layar, Anda dapat menggunakan `property` `background-position`.

`Property` `background-position` memungkinkan Anda menentukan di mana gambar latar belakang muncul di dalam `element`. Anda dapat menggunakan kata kunci seperti `top`, `bottom`, `left`, `right`, dan `center`, atau nilai piksel maupun persentase tertentu.

Berikut adalah contoh penggunaan `center` dan `top` untuk `background-position`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    min-height: 100px;
  }
</style>
```

Kode `CSS` ini memposisikan gambar latar belakang di tengah `element` secara horizontal dan di bagian atas secara vertikal.

## Property `background-attachment`

Terakhir, `background-attachment` menentukan apakah gambar latar belakang bergulir bersama konten (*scrolls*) atau tetap diam di tempat (*fixed*) saat halaman digulir.

Nilai utamanya adalah `scroll` (*default*), di mana gambar latar bergulir bersama konten, dan `fixed`, di mana gambar latar tetap berada pada posisi yang sama di layar.

Berikut adalah contoh penggunaan nilai `fixed` untuk `property` `background-attachment`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-position: center top;
    background-attachment: fixed;
  }
</style>
```

Kode `CSS` ini mengatur gambar latar belakang agar tetap terpaku pada posisinya meskipun halaman digulir.

## Shorthand Property `background`

Jika Anda ingin menggabungkan beberapa `property` ke dalam satu baris, Anda dapat melakukannya dengan menggunakan *shorthand property* `background`.

Berikut adalah contohnya:

```html
<style>
  body {
    background: center top fixed
      url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
  }
</style>
```

Contoh di atas menggabungkan `background-image`, `background-position`, dan `background-attachment` ke dalam satu baris tunggal.

Dengan menguasai `properties` ini, Anda akan memiliki kontrol penuh terhadap bagaimana gambar latar belakang ditampilkan dalam desain web Anda, memungkinkan tata letak yang lebih menarik secara visual dan fungsional.

## Pertanyaan (Questions)

Nilai `background-size` manakah yang akan Anda gunakan untuk memastikan seluruh gambar latar terlihat tanpa pemotongan (*cropping*), meskipun gambar tersebut tidak menutupi seluruh `element`?

- [ ] `cover`
- [x] `contain`
- [ ] `auto`
- [ ] `100%`

Jika Anda ingin gambar latar belakang berulang secara horizontal tetapi tidak secara vertikal, nilai `background-repeat` manakah yang akan Anda gunakan?

- [ ] `repeat`
- [ ] `no-repeat`
- [x] `repeat-x`
- [ ] `repeat-y`

Nilai `background-attachment` manakah yang akan Anda gunakan agar gambar latar belakang tetap diam di tempat saat pengguna menggulir halaman?

- [ ] `scroll`
- [x] `fixed`
- [ ] `local`
- [ ] `static`

---

[⬅️ Sebelumnya](../3-styling-lists-and-links/4-how-do-you-style-the-different-link-states.md) | [Selanjutnya ➡️](2-what-is-a-background-gradient.md)
