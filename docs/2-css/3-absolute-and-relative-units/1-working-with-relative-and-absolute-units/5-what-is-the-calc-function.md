# Apa Itu Fungsi calc(), dan Bagaimana Cara Kerjanya?

Dengan fungsi `calc()`, Anda dapat melakukan perhitungan secara langsung di dalam lembar gaya (*stylesheet*) Anda untuk menentukan `value` `property` secara dinamis. Ini berarti Anda dapat membuat antarmuka pengguna yang fleksibel dan responsif dengan menghitung dimensi berdasarkan ukuran *viewport* atau `element` lainnya.

## Memahami Fungsi

`calc()` adalah sebuah fungsi `CSS`. Anda akan mempelajari lebih lanjut tentang fungsi ketika Anda mulai belajar tentang `JavaScript`, tetapi dalam pelajaran ini, Anda akan mempelajari dasar-dasar yang perlu Anda ketahui untuk memahami cara kerja `calc()`.

Sebuah fungsi (`function`) adalah blok kode yang melakukan tugas tertentu. Beberapa fungsi sudah didefinisikan dalam `CSS`, jadi Anda dapat menggunakannya secara langsung dan meneruskan `value` apa pun yang diperlukan ke dalamnya untuk menyesuaikan bagaimana tugas tersebut akan dijalankan.

Dalam dunia pemrograman, saat kita menjalankan tugas yang dilakukan oleh suatu fungsi, kita menyebutnya memanggil (*call*) fungsi tersebut. `Value` yang kita teruskan ke dalam fungsi dikenal sebagai argumen (*arguments*).

Seperti yang dapat Anda lihat pada kode di bawah ini, untuk memanggil suatu fungsi, Anda menuliskan namanya diikuti dengan argumen di dalam tanda kurung, dipisahkan dengan koma. Seharusnya tidak ada spasi antara nama fungsi dan tanda kurung pembuka:

```css
function(argument1, argument2, argument3)
```

Sebuah fungsi mungkin hanya membutuhkan satu `value` untuk mengetahui apa yang harus dilakukan. Dalam hal ini, fungsi tersebut hanya akan menerima satu argumen. Itulah yang terjadi dengan fungsi `calc()`. Fungsi ini menerima satu argumen karena ia perlu mengetahui apa yang harus dihitung.

Untuk ini, Anda meneruskan sesuatu yang disebut ekspresi (*expression*) sebagai argumen. Sebuah ekspresi adalah kombinasi dari `value` dan operator yang menghasilkan suatu nilai keluaran.

Beginilah cara Anda memanggil fungsi `calc()`. Anda menuliskan nama calc, diikuti tanda kurung, dan di dalam tanda kurung tersebut, Anda menuliskan ekspresinya:

```css
calc(expression)
```

Ekspresi tersebut dievaluasi untuk menghitung hasil akhir. "Dievaluasi" (*evaluated*) berarti bahwa `value` dan operator dikonversi menjadi satu `value` tunggal di balik layar. Hasilnya ditetapkan ke `property` `CSS` tempat perhitungan dilakukan.

## Nilai dan Operator yang Didukung

Anda dapat melakukan perhitungan pada `value` yang mewakili panjang (*length*), sudut (*angle*), waktu (*time*), persentase, dan angka (*numbers*). Anda juga dapat menggabungkan satuan yang berbeda seperti piksel, persentase, dan `em`.

Untuk penjumlahan dan pengurangan, semua `value` dalam ekspresi, yang juga disebut operan (*operands*), harus memiliki satuan yang sesuai, seperti `px`, `em`, dan persentase (`%`). Bergantung pada operatornya, operan yang berbeda mungkin memiliki satuan yang berbeda.

Anda dapat menggunakan operator penjumlahan (`+`), pengurangan (`-`), perkalian (`*`), dan pembagian (`/`) dalam ekspresi tersebut.

Jika ada beberapa operan dan operator, `calc()` akan mengikuti aturan prioritas operator standar (`operator precedence`). Anda juga dapat menambahkan tanda kurung untuk menetapkan urutan operasi jika diperlukan.

## Menghitung Lebar Responsif

Pada contoh di bawah, Anda dapat melihat sebuah `div` dengan teks `Hello, World!`.

Menggunakan `CSS` `type selector` untuk memilih `div`, Anda dapat menatanya dengan teks putih dan warna latar belakang biru tua:

```html
<link rel="stylesheet" href="styles.css" />
<div>Hello, World!</div>
```

```css
div {
  color: white;
  background-color: #1b1b32;
  width: calc(50% - 20px);
}
```

Hal baru di sini adalah bahwa `width` dihitung secara dinamis. Perhatikan bagaimana kita memanggil fungsi `calc()` dan meneruskan sebuah ekspresi sebagai argumen. Ekspresi tersebut memiliki dua operan dengan satuan berbeda dan satu operator, yaitu operator pengurangan.

Persentase adalah satuan relatif. `Value` (`50%`) akan ditentukan oleh lebar `container` induk. Kemudian, `20px` dikurangkan dari nilai tersebut. Hasil dari ekspresi ini akan menentukan `width` dari `div`.

Lebar `div` tersebut kira-kira setengah dari total lebar `container`-nya, dan jika Anda mengubah ukuran `container` induk, lebarnya akan dihitung ulang secara otomatis.

Itulah keunggulan utama menggunakan `calc()`. Anda dapat menentukan `value` dari `property` `CSS` secara dinamis berdasarkan berbagai aspek aplikasi atau *viewport*.

Ekspresi tersebut juga dapat berisi fungsi dan variabel `CSS` jika Anda perlu menggunakannya dalam perhitungan Anda. Anda akan mempelajari lebih lanjut tentang variabel `CSS` pada pelajaran berikutnya.

## Praktik Terbaik

Bagus. Sekarang setelah Anda mengetahui dasar-dasar fungsi `calc()`, mari kita bahas beberapa praktik terbaiknya.

Pertama, Anda harus mengelilingi operator penjumlahan (`+`) dan pengurangan (`-`) dengan spasi kosong (*whitespace*).

Misalnya, ekspresi di bawah ini tidak akan menjadi ekspresi yang valid karena operator pengurangan berada tepat sebelum operan kedua.

```css
calc(100% -30px)
```

Operator pengurangan (`-`) harus dikelilingi oleh spasi kosong, seperti ini. Menambahkan spasi kosong akan menghasilkan ekspresi yang valid.

```css
calc(100% - 30px)
```

Hal ini tidak diperlukan untuk operator perkalian dan pembagian, tetapi sangat disarankan.

Anda juga dapat menyarangkan panggilan fungsi `calc()` (*nesting*) jika Anda perlu melakukan perhitungan dan menggunakan hasil tersebut dalam perhitungan lainnya.

Selain itu, jika Anda menggunakan nilai nol untuk mewakili panjang dalam ekspresi yang Anda teruskan ke dalam fungsi `calc()`, Anda harus menyertakan satuannya. Misalnya, ekspresi ini tidak akan valid:

```css
calc(100% - 0)
```

Anda perlu menambahkan satuannya, seperti `px`.

```css
calc(100% - 0px)
```

Anda juga harus tahu bahwa jika Anda menggunakan operator perkalian, salah satu operan harus tanpa satuan (*unitless*). Ini tidak akan menjadi ekspresi yang valid karena kedua operan memiliki satuan (piksel):

```css
calc(5px * 50px)
```

Anda harus menghilangkan satuan pada salah satunya. Kedua alternatif berikut akan valid:

```css
calc(5 * 50px)
calc(5px * 50)
```

Untuk operator pembagian, membagi dengan angka tanpa satuan akan mengubah skala `value` dan mempertahankan satuannya:

```css
calc(50% / 5)
```

Membagi dua `value` dengan satuan yang cocok juga valid, namun hal ini membatalkan satuannya untuk menghasilkan angka tanpa satuan (seperti `10`). Perhatikan bahwa `value` tanpa satuan hanya dapat digunakan untuk `property` `CSS` tertentu (seperti `line-height` atau `flex-grow`):

```css
calc(50% / 5%)
```

Fungsi `calc()` bisa sangat membantu bagi Anda sebagai pengembang web. Dengan fungsi ini, Anda dapat mengatur `value` `property` secara dinamis untuk membuat desain yang fleksibel dan responsif.

## Pertanyaan (Questions)

Manakah dari operasi berikut yang dapat dilakukan menggunakan fungsi `calc()` dalam `CSS`?

- [ ] Hanya penjumlahan dan pengurangan.
- [ ] Hanya perkalian dan pembagian.
- [x] Penjumlahan, pengurangan, perkalian, dan pembagian.
- [ ] Hanya penjumlahan.

Jenis nilai apa yang dapat digunakan sebagai operan di dalam ekspresi yang diteruskan ke fungsi `calc()`?

- [ ] Hanya piksel.
- [ ] Hanya persentase.
- [x] Piksel, persentase, `em`, dan satuan lain yang didukung.
- [ ] Hanya bilangan bulat (*integers*).

Bagaimana Anda dapat menggunakan fungsi `calc()` untuk membuat desain yang responsif?

- [ ] Dengan menetapkan lebar tetap untuk `element`.
- [ ] Dengan menggunakan `media query` secara eksklusif.
- [x] Dengan menghitung dimensi `element` berdasarkan ukuran *viewport* atau `element` lainnya.
- [ ] Dengan menggunakan `HTML` untuk menyesuaikan ukuran `element` secara dinamis.

---

[⬅️ Sebelumnya](4-what-are-vh-and-vw-units.md) | Selanjutnya ➡️
