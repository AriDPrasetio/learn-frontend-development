# Apa Saja Praktik Terbaik untuk Tabel dan Aksesibilitas?

Ketika kita melihat sebuah tabel (`table`), kita segera mulai membuat asosiasi visual antara data dan judul kolom/baris (`headers`).

Sebagai contoh, katakanlah kita memiliki sebuah tabel yang merepresentasikan hewan peliharaan kita. Kita memiliki dua anjing dan dua kucing, dan tabel tersebut menunjukkan kepada kita nama dan usia mereka. Meskipun orang yang dapat melihat (*sighted person*) mungkin dapat memahami hubungan-hubungan dalam tabel ini, menghubungkan antara nilai data dan `header` jauh lebih sulit bagi orang-orang yang menggunakan `screen reader` untuk menavigasi tabel tersebut.

Sebagai seorang `web developer`, Anda bertanggung jawab untuk menciptakan asosiasi ini dan menyusun *markup* `HTML` Anda sedemikian rupa sehingga mudah diinterpretasikan oleh pengguna `screen reader`.

Jadi, mari kita lihat bagaimana Anda dapat membuat tabel yang mudah diakses (`accessible tables`) yang dapat dipahami oleh semua orang.

## Menggunakan Caption Tabel

Praktik terbaik pertama yang akan kita bahas adalah menggunakan keterangan tabel (*caption*). Dengan elemen `caption`, Anda dapat menulis keterangan (atau judul) dari sebuah tabel, sehingga pengguna, terutama mereka yang menggunakan `assistive technology`, dapat dengan cepat memahami tujuan dan isi tabel tersebut. Anda harus menempatkan elemen `caption` tepat setelah *opening tag* dari elemen `table`. Dengan cara ini, `screen reader` dan `assistive technology` lainnya dapat memberikan lebih banyak konteks dengan membacakan `caption` sebelum membaca konten tabel.

```html
<table>
  <caption>Our Pets</caption>
  <!-- Table Rows and Columns -->
</table>
```

## Header Baris dan Kolom

Sekarang mari kita bicara tentang `header` baris dan kolom. `Header` adalah sel-sel khusus, biasanya ditemukan di awal baris atau kolom, yang mendeskripsikan jenis data yang disimpan di dalam baris atau kolom tersebut. Anda dapat mendefinisikan `header` baris atau kolom dengan elemen *table header*, yaitu `th`.

Sebagai contoh, kode di bawah ini membuat tabel untuk dua hewan peliharaan. Setiap baris memiliki `header` baris (nama hewan peliharaan) dan setiap kolom memiliki `header` kolom, yang mendeskripsikan apa yang diwakili oleh data di dalam kolom tersebut (usia dan jenis).

```html
<table>
  <caption>Our Pets</caption>
  <thead>
    <tr>
      <!-- Column Headers -->
      <th>Name</th>
      <th>Age</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nora</th> <!-- Row Header -->
      <td>5</td>
      <td>Dog</td>
    </tr>
    <tr>
      <th>Gino</th> <!-- Row Header -->
      <td>2</td>
      <td>Cat</td>
    </tr>
  </tbody>
</table>
```

Perhatikan bahwa kode di atas memiliki elemen `caption` tepat setelah elemen pembuka `table`. Kemudian, di dalam elemen *table head* (`thead`), terdapat `header` kolom (`Name`, `Age`, dan `Type`). Pada baris kedua dan ketiga, di dalam elemen *table body* (`tbody`), kita menemukan data untuk setiap hewan peliharaan kita. Nama-nama hewan peliharaan tersebut merupakan `header` baris karena mereka berada di dalam elemen *table header* (`th`).

## Atribut `scope`

Menghubungkan sel data dengan `header` yang sesuai juga sangat penting untuk `screen reader`. Atribut `scope` menentukan apakah sebuah `header` merupakan `header` baris atau `header` kolom.
`Screen reader` mungkin dapat menebak hal ini dengan benar dari struktur tabel, tetapi biasanya disarankan untuk secara eksplisit menunjukkan `scope` guna memastikan kejelasan.

Atribut `scope` memiliki empat kemungkinan nilai. Dua nilai yang paling sering Anda gunakan adalah `col` untuk kolom dan `row` untuk baris.
Pada kode di bawah ini, Anda dapat melihat bahwa kita menambahkan atribut `scope` ke `header` kolom dan baris. Tiga `header` kolom (`Name`, `Age`, dan `Type`) memiliki `scope` bernilai `col` (kolom).
Kedua `header` baris (`Nora` dan `Gino`) memiliki `scope` bernilai `row` (baris).

```html
<table>
  <caption>Our Pets</caption>
  <thead>
    <tr>
      <!-- Now they have scope -->
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nora</th>
      <td>5</td>
      <td>Dog</td>
    </tr>
    <tr>
      <th scope="row">Gino</th>
      <td>2</td>
      <td>Cat</td>
    </tr>
  </tbody>
</table>
```

## Header yang Membentang di Beberapa Sel

Jika `header` kolom atau baris membentang di beberapa sel, `scope` juga akan diterapkan ke masing-masing sel secara individual. Berikut adalah contohnya:

```html
<table>
  <tbody>
    <tr>
      <td></td>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Dogs</th>
      <th scope="row">Nora</th>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">Gino</th>
      <td>2</td>
    </tr>
    <tr>
      <th rowspan="2" scope="row">Cats</th>
      <th scope="row">Lulu</th>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">Elizabeth</th>
      <td>6</td>
    </tr>
  </tbody>
</table>
```

Dalam tabel ini, sel yang berisi usia `Nora` (`5`) akan memiliki satu `header` kolom (`Age`) dan dua `header` baris (`Dogs` dan `Nora`). Usia `Gino` (`2`) juga akan memiliki satu `header` kolom (`Age`) dan dua `header` baris (`Dogs` dan `Gino`).

Namun, beberapa `screen reader` mungkin tidak dapat menginterpretasikan tabel dengan struktur yang rumit, jadi Anda juga sebaiknya mencoba meratakan (*flatten*) tabel sebanyak mungkin untuk menghindari `header` baris dan kolom yang membentang di beberapa sel.

Tujuan Anda harus selalu memastikan pengguna dapat mengakses informasi ini, bahkan jika `screen reader` mereka mampu menangani struktur tabel yang rumit.

## Lebar Sel dan Tabel

Sekarang, untuk lebar sel (`cell width`), disarankan untuk menghindari penggunaan nilai tetap (*fixed values*). Sebaiknya Anda menggunakan nilai relatif (*relative values*), seperti persentase. Selain itu, cobalah untuk menghindari penentuan tinggi sel (`cell height`). Hal ini akan memungkinkan pengguna untuk menyesuaikan ukuran teks sesuai kebutuhan mereka.

Dan akhirnya, Anda sebaiknya membiarkan `browser` menentukan lebar tabel (`table width`) sebisa mungkin, untuk mengurangi kebutuhan pengguliran horizontal (*horizontal scrolling*).

Tabel `HTML` sangat penting untuk menyajikan data terstruktur dalam format yang mudah diakses dan dipahami. Dengan mengikuti pedoman `accessibility` ini, Anda dapat membuat tabel yang mudah dipahami oleh semua orang.


## Pertanyaan (Questions)


Elemen HTML manakah yang digunakan untuk menentukan judul sebuah tabel?


- [ ] `thead`

- [x] `caption`

- [ ] `tbody`

- [ ] `tr`



Apa tujuan dari atribut `scope` pada sel header tabel (`th`)?


- [ ] Untuk menentukan `colspan` dan `rowspan` dari sel tersebut.

- [x] Untuk menunjukkan apakah `header` tersebut berlaku untuk baris atau kolom.

- [ ] Untuk mendefinisikan gaya (*style*) dari sel `header`.

- [ ] Untuk menambahkan *tooltip* pada sel `header`.



Manakah dari berikut ini yang merupakan praktik terbaik untuk membuat tabel yang mudah diakses (`accessible tables`)?


- [ ] Menggunakan `header` tabel yang rumit dan panjang.

- [ ] Tidak menyediakan teks alternatif untuk gambar di dalam sel tabel.

- [x] Menggunakan struktur tabel sederhana dengan `header` baris dan kolom.

- [ ] Membuat tabel bersarang (*nesting tables*) di dalam tabel.



---
[⬅️ Sebelumnya](../1-importance-of-accessibility-and-good-html-structure/8-how-does-proper-heading-level-structure-affect-accessibility.md) | [Selanjutnya ➡️](2-why-is-it-important-for-inputs-to-have-an-associated-label.md)
