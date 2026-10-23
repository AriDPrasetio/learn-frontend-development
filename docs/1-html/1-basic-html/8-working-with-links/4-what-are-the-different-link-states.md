# Apa Saja Status Tautan yang Berbeda, dan Mengapa Status Tersebut Penting?

Anda mungkin pernah melihat tautan (`link`) pada halaman web berubah menjadi ungu setelah Anda mengkliknya. Ini karena status (`state`) tautan telah berubah, sehingga penataan gaya (`styling`) yang berbeda diterapkan. Ada lima *state* berbeda yang dapat dimiliki sebuah tautan.

## Status Tautan (Link States)

### Status `:link`

Yang pertama adalah status *default*, yaitu `:link`. Status ini merepresentasikan tautan yang belum pernah dikunjungi, diklik, atau diinteraksikan oleh pengguna. Anda dapat menganggap status ini menyediakan gaya dasar (*base styles*) untuk semua tautan di halaman Anda. Status lainnya dibangun di atasnya.

Aktifkan editor interaktif dan lihatlah tautan di jendela pratinjau. Tautan tersebut seharusnya memiliki warna *default* biru yang merepresentasikan status *default*. Jika Anda mengkliknya, tautan tersebut akan berubah menjadi ungu.

```html
<a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
```

### Status `:visited`

Status kedua adalah `:visited`, yang berlaku ketika pengguna telah mengunjungi halaman yang ditautkan. Secara *default*, ini mengubah tautan menjadi ungu - tetapi Anda dapat memanfaatkan `CSS` untuk memberikan indikasi visual yang berbeda kepada pengguna. Hal ini berguna untuk memberi tahu seseorang bahwa mereka telah membaca sebagian dari dokumentasi Anda, atau bahwa situs tersebut adalah situs yang dapat mereka percayai karena pernah mereka gunakan sebelumnya.

Klik tautan di jendela pratinjau dan Anda akan melihat bahwa tautan yang dikunjungi berubah warna menjadi cokelat. Untuk melihat pratinjau, Anda perlu mengaktifkan editor interaktif.

**CATATAN**: Sejumlah kode `CSS` telah disediakan untuk contoh interaktif ini sehingga Anda dapat melihat perubahan dalam gaya tautan. Jangan khawatir tentang berusaha memahami kode `CSS` tersebut karena Anda akan mempelajari arti semuanya di modul-modul mendatang.

```html
<head>
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
</body>
```

```css
a:visited {
  color: brown;
}
```

### Status `:hover`

Status ketiga adalah `:hover`. Status ini berlaku saat pengguna mengarahkan kursor mereka di atas tautan. Status ini sangat membantu untuk menarik perhatian ekstra ke sebuah tautan, guna memastikan pengguna memang berniat untuk mengkliknya.

Aktifkan editor interaktif dan cobalah mengarahkan tetikus (*mouse*) Anda di atas tautan. Anda akan melihat warnanya berubah menjadi merah.

```html
<head>
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
</body>
```

```css
a:hover {
  color: red;
}
```

### Status `:focus`

Kemudian kita memiliki `:focus`. Status ini berlaku saat kita memfokuskan kursor/navigasi pada suatu tautan.

Klik pada bagian mana pun dari ruang kosong (*whitespace*) di jendela pratinjau lalu tekan tombol Tab pada keyboard Anda. Anda akan melihat tautan berubah menjadi hijau. Untuk melihat pratinjau, Anda perlu mengaktifkan editor interaktif.

```html
<head>
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
</body>
```

```css
a:focus {
  color: green;
}
```

### Status `:active`

Dan akhirnya, kita memiliki `:active`. Status ini berlaku untuk tautan yang sedang diaktifkan oleh pengguna. Hal ini biasanya berarti mengklik tautan dengan tombol utama tetikus (klik kiri, dalam banyak kasus). Status ini dapat membantu menunjukkan kepada pengguna bahwa `element` yang mereka klik bersifat interaktif.

Aktifkan editor interaktif dan klik pada tautan tersebut. Anda akan melihat tautan berubah warna menjadi hitam. Ini terjadi cukup cepat sehingga Anda mungkin perlu mengkliknya beberapa kali untuk melihat perubahan warnanya.

```html
<head>
    <link href="styles.css" rel="stylesheet" />
</head>

<body>
    <a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
</body>
```

```css
a:active {
  color: black;
}
```

## Urutan Penataan Gaya (Styling Order)

Saat Anda menggunakan status-status ini untuk menata gaya tautan Anda, ada urutan khusus yang harus Anda ikuti dalam menulis `CSS` Anda: `link`, `visited`, `hover`, `focus`, kemudian `active`.

Anda sekarang seharusnya sudah mengetahui cara memberikan sentuhan personal pada tautan di halaman Anda, sambil tetap memberikan informasi penting yang dibutuhkan pengguna tentang status dari setiap tautan.

## Pertanyaan (Questions)

Apa status default dari sebuah tautan?

- [x] `:link`
- [ ] `:visited`
- [ ] `:hover`
- [ ] `:active`

Status manakah yang berlaku saat pengguna sedang mengklik tautan?

- [ ] `:link`
- [ ] `:visited`
- [ ] `:hover`
- [x] `:active`

Dalam urutan apa sebaiknya Anda menata gaya tautan Anda?

- [ ] `visited`, `link`, `active`, `focus`, `hover`.
- [ ] `link`, `active`, `hover`, `focus`, `visited`.
- [ ] `hover`, `active`, `link`, `focus`, `visited`.
- [x] `link`, `visited`, `hover`, `focus`, `active`.

---
[⬅️ Sebelumnya](3-what-is-the-difference-between-slashes-a-single-dot-and-double-dot-in-path-syntax.md) | [Selanjutnya ➡️](../9-review-basic-html/1-basic-html-review.md)
