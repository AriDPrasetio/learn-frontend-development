# Apa Perbedaan Antara content-box dan border-box?

`Property` `box-sizing` dapat diatur ke `content-box` atau `border-box` untuk mengontrol bagaimana lebar (*width*) dan tinggi (*height*) suatu `element` dihitung.

`Property` ini dapat diatur pada `universal selector` (`*`) untuk diterapkan ke semua `element` di dalam dokumen:

```css
* {
  box-sizing: border-box;
}
```

`Value` dari `property` `box-sizing` secara *default* adalah `content-box`, tetapi Anda dapat memilih `border-box` jika diperlukan. Kita akan mempelajari `content-box` terlebih dahulu dan kemudian kita akan membahas `border-box`.

## Meninjau Ulang CSS Box Model

Untuk memahami bagaimana model-model ini bekerja, Anda perlu mengenal empat konsep inti dari `CSS box model`. Mari kita tinjau kembali secara singkat.

- Area konten (*content area*) adalah ruang yang ditempati oleh konten `element`.
- `Padding` adalah ruang antara area konten dan `border`.
- `Border` adalah garis luar yang mengelilingi area konten dan `padding`.
- `Margin` adalah ruang di luar `border` yang memisahkan `element` dari `element-element` lainnya.

## Cara Kerja `content-box`

Dalam model `content-box`, lebar (*width*) dan tinggi (*height*) yang Anda tentukan untuk suatu `element` menentukan dimensi dari area konten, tetapi tidak mencakup `padding`, `border`, atau `margin`. Gunakan `content-box` saat Anda membutuhkan kendali presisi atas area konten. Saat Anda mengatur `width` dan `height`, Anda hanya mengatur ukuran dari konten itu sendiri.

Untuk menemukan total lebar dari `element`, Anda perlu menambahkan `padding` kiri dan kanan, serta `border` kiri dan kanan. Demikian pula, total tinggi suatu `element` dapat ditemukan dengan menambahkan tinggi konten, `padding` atas dan bawah, serta `border` atas dan bawah.

Sebagai contoh, di sini kita memiliki `type selector` `CSS` untuk semua `element` `div`.

```html
<link rel="stylesheet" href="styles.css">
<div></div>
```

```css
div {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 4px solid black;
}
```

Dalam kasus ini, jika `content-box` digunakan, area konten akan berukuran 300px kali 200px. Total ukuran yang dirender mencakup `padding` dan `border` — misalnya, total lebar = 300px (konten) + 40px (`padding`) + 8px (`border`) = 348px; total tinggi dihitung dengan cara yang sama.

## Cara Kerja `border-box`

Bagus! Sekarang mari kita pelajari `border-box`. Ini berbeda karena lebar (*width*) dan tinggi (*height*) yang Anda atur sudah mencakup konten `element`, `padding`, dan `border` (tetapi bukan `margin`-nya). Gunakan `border-box` ketika Anda ingin ukuran total `element` tetap konstan bahkan jika `padding` atau `border` berubah — hal ini sering kali sangat membantu dalam tata letak responsif (*responsive layouts*).

Dengan `border-box`, `padding` dan `border` sudah disertakan di dalam ukuran yang ditentukan untuk `element`. `Width` dan `height` yang Anda tetapkan menjadi dimensi total `element`: konten + `padding` + `border`; `margin` tetap tidak disertakan.

## Membandingkan Kedua Model

Pada contoh berikut, terdapat dua `element` `div` dengan dimensi yang sama tetapi nilai `box-sizing` yang berbeda. Perhatikan bagaimana hal ini menghasilkan ukuran total yang berbeda saat dilihat di peramban (*browser*):

```html
<link rel="stylesheet" href="styles.css">
<div class="box" id="red-div"></div>
<div class="box" id="blue-div"></div>
```

```css
.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 4px solid black;
  margin: 10px;
}

#red-div {
  box-sizing: content-box;
  background-color: red;
}

#blue-div {
  box-sizing: border-box;
  background-color: blue;
}
```

Anda dapat melihat bahwa keduanya memiliki `width`, `height`, `padding`, `border`, dan `margin` yang sama. Satu-satunya perbedaan adalah pada warna dan `value` dari `property` `box-sizing`. Perbedaan kecil ini memiliki dampak yang sangat penting pada dimensi akhir.

Memilih antara `content-box` dan `border-box` sangat bergantung pada kebutuhan spesifik proyek Anda. Meskipun `border-box` menjadi semakin populer karena kesederhanaan dan fleksibilitasnya, memahami kedua model ini sangatlah penting untuk mengimplementasikan tata letak `CSS` yang efektif.

## Pertanyaan (Questions)

Manakah dari berikut ini yang merupakan nilai *default* untuk `property` `box-sizing` di sebagian besar peramban (*browser*)?

- [x] `content-box`
- [ ] `border-box`
- [ ] `padding-box`
- [ ] `margin-box`

Apa keuntungan utama menggunakan `border-box` untuk membuat tata letak responsif (*responsive layouts*)?

- [ ] Ini membuat perhitungannya menjadi lebih rumit.
- [ ] Ini memungkinkan kontrol yang lebih presisi atas dimensi `element`.
- [x] Ini memastikan bahwa `element` mempertahankan dimensi yang ditentukan terlepas dari perubahan pada `padding` atau `border`.
- [ ] Ini meningkatkan kompatibilitas peramban (*browser*).

Dalam model `content-box`, apa yang direpresentasikan oleh `width` yang ditentukan dari suatu `element`?

- [ ] Total `width` dari `element`, termasuk `padding`, `border`, dan `margin`.
- [x] `Width` dari area konten saja.
- [ ] `Width` dari `border`.
- [ ] `Width` dari `padding`.

---

[⬅️ Sebelumnya](4-what-is-margin-collapsing.md) | [Selanjutnya ➡️](6-what-is-a-css-reset.md)
