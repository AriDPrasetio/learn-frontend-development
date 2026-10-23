# Untuk Apa Tabel HTML Digunakan, dan Untuk Apa Tabel Tidak Boleh Digunakan?

Tabel `HTML` (`HTML tables`) tidak lagi digunakan sebanyak dulu pada masa kini. Namun, sebagai seorang `front-end developer`, Anda tetap harus mengenalnya. Tabel adalah salah satu cara paling awal yang dimiliki para pengembang untuk menampilkan data di peramban pada era 1990-an.

Berikut adalah contoh kode yang digunakan untuk membuat tabel dari U.S. Bureau of Labor Statistics:

```html
<table id="quickfacts">
  <thead>
    <tr>
      <th colspan="2">Quick Facts: Software Developers, Quality Assurance Analysts, and Testers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2023 Median Pay</th>
      <td>
        $130,160 per year
        <br>$62.58 per hour
      </td>
    </tr>
    <tr>
      <th>Typical Entry-Level Education</th>
      <td>Bachelor's degree</td>
    </tr>
    <tr>
      <th>Work Experience in a Related Occupation</th>
      <td>None</td>
    </tr>
    <tr>
      <th>On-the-job Training</th>
      <td>None</td>
    </tr>
    <tr>
      <th>Number of Jobs, 2022</th>
      <td>1,795,300</td>
    </tr>
    <tr>
      <th>Job Outlook, 2022-32</th>
      <td>25% (Much faster than average)</td>
    </tr>
    <tr>
      <th>Employment Change, 2022-32</th>
      <td>451,200</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>If this table had a footer it would be here.</th>
    </tr>
  </tfoot>
</table>
```

Seperti yang Anda lihat, terdapat `element` utama `table` dengan `id` yang disetel ke `quickfacts`. Di dalamnya, tabel memiliki elemen kepala tabel (`table head element`), `thead`, elemen badan tabel (`table body element`), `tbody`, dan elemen kaki tabel (`table foot element`), `tfoot`.

Elemen kepala tabel (`thead`), badan tabel (`tbody`), dan kaki tabel (`tfoot`) masing-masing dapat berisi sejumlah baris tabel, `tr`. Dan setiap baris tabel dapat berisi header tabel `th` yang melabeli data pada baris tersebut. Baris ini juga dapat berisi sejumlah sel data individu, yang disebut data tabel, `td`.

Nah, itu adalah banyak `element` `HTML`. Namun jangan terintimidasi – elemen-elemen ini mengikuti hierarki yang sederhana.

Berikut adalah tabel paling sederhana yang dapat kita buat yang mencakup semua elemen ini:

```html
<table>
  <thead>
    <tr>
      <th>The title of this table</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>First Row</th>
      <td>
        First Data Cell
      </td>
    </tr>
    <tr>
      <th>Second Row</th>
      <td>
        Second Data Cell
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>The footer of this table, which might contain date of publication, author credits, or other meta information.</th>
    </tr>
  </tfoot>
</table>
```

Jadi seperti yang Anda lihat, setiap baris tabel direpresentasikan oleh sebuah `element` `tr` yang berisi `element` `th` dengan header, `element` `td` dengan data, atau keduanya.

Beberapa situs web memilih untuk menggunakan `div` untuk membuat tabel mereka sendiri daripada menggunakan `element` `table` yang lebih tepat.

Meskipun dimungkinkan untuk menampilkan data tabular menggunakan `element` generik `div`, masih jauh lebih baik untuk menggunakan `element` `table` sebagai gantinya.

Bertahun-tahun yang lalu, para pengembang mungkin pernah menggunakan `table` untuk mengatur posisi elemen non-data pada sebuah halaman web. Ini tidak pernah dianggap sebagai praktik terbaik (`best practice`). Namun Anda mungkin akan menjumpai beberapa basis kode di mana tabel masih digunakan dengan cara seperti ini.

Saat ini, para pengembang menggunakan `CSS` `flexbox` dan `grid` untuk menata tata letak (`layout`) desain mereka. freeCodeCamp akan membahas alat-alat ini secara mendalam nanti.

Untuk saat ini, cukup gunakan tabel `HTML` untuk tujuan awal penggunaannya: menampilkan data tabular (`tabular data`).

## Pertanyaan (Questions)

Di dalam tabel `HTML`, elemen manakah yang termuat di dalam `element` `tr`?

- [ ] `thead` dan `tfoot`.
- [x] `td` dan `th`.
- [ ] `table` dan `tbody`.
- [ ] `div` dan `span`.

Manakah dari berikut ini yang merupakan bagian-bagian utama dari sebuah tabel `HTML`?

- [ ] `table`, `div`, dan `span`.
- [ ] `header`, `section`, dan `footer`.
- [x] `thead`, `tbody`, dan `tfoot`.
- [ ] `article`, `aside`, dan `nav`.

Apa kegunaan utama yang disarankan dari tabel `HTML` saat ini?

- [ ] Membuat tata letak halaman (`page layouts`).
- [x] Menampilkan data tabular (`tabular data`).
- [ ] Menata gaya dengan `CSS`.
- [ ] Menyematkan gambar (`embedding images`).

---
[⬅️ Sebelumnya](../1-working-with-forms/4-what-are-the-different-form-states.md) | [Selanjutnya ➡️](../3-working-with-html-tools/1-what-is-an-html-validator.md)