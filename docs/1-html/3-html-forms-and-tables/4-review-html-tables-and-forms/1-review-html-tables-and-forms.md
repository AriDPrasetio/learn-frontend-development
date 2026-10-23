# Tinjauan Tabel dan Formulir HTML (HTML Tables and Forms Review)

## Elemen dan Atribut Formulir HTML (HTML Form Elements and Attributes)

- **`element` `form`**: digunakan untuk membuat formulir `HTML` untuk input pengguna.

- **`attribute` `action`**: digunakan untuk menentukan URL ke mana data formulir harus dikirimkan.

- **`attribute` `method`**: digunakan untuk menentukan metode `HTTP` yang digunakan saat mengirimkan data formulir. Metode yang paling umum adalah `GET` dan `POST`.

```html
<form method="value-goes-here" action="url-goes-here">
  <!-- inputs go inside here -->
</form>

```

- **`element` `input`**: digunakan untuk membuat kolom input untuk input pengguna.

- **`attribute` `type`**: digunakan untuk menentukan tipe kolom input. Contoh: `text`, `email`, `number`, `radio`, `checkbox`, dll.

- **`attribute` `placeholder`**: digunakan untuk menampilkan petunjuk kepada pengguna guna menunjukkan apa yang harus dimasukkan ke dalam kolom input.

- **`attribute` `value`**: digunakan untuk menentukan nilai dari input. Jika input memiliki tipe `button`, `attribute` `value` dapat digunakan untuk menyetel teks tombol.

- **`attribute` `name`**: digunakan untuk menetapkan nama ke kolom input, yang berfungsi sebagai kunci (`key`) saat data formulir dikirimkan. Untuk tombol radio (`radio buttons`), memberi mereka `name` yang sama akan mengelompokkannya bersama, sehingga hanya satu opsi dalam kelompok tersebut yang dapat dipilih pada satu waktu.

- **`attribute` `size`**: digunakan untuk menentukan jumlah karakter yang harus terlihat saat pengguna mengetik ke dalam input.

- **`attribute` `min`**: dapat digunakan dengan tipe input seperti `number` untuk menentukan nilai minimum yang diizinkan di dalam kolom input.

- **`attribute` `max`**: dapat digunakan dengan tipe input seperti `number` untuk menentukan nilai maksimum yang diizinkan di dalam kolom input.

- **`attribute` `minlength`**: digunakan untuk menentukan jumlah minimum karakter yang diperlukan di dalam kolom input.

- **`attribute` `maxlength`**: digunakan untuk menentukan jumlah maksimum karakter yang diizinkan di dalam kolom input.

- **`attribute` `required`**: digunakan untuk menentukan bahwa kolom input harus diisi sebelum mengirimkan formulir.

- **`attribute` `disabled`**: digunakan untuk menentukan bahwa kolom input harus dinonaktifkan (`disabled`).

- **`attribute` `readonly`**: digunakan untuk menentukan bahwa kolom input bersifat hanya-baca (`read-only`).

```html
<!-- Text input -->
<input 
  type="text"
  id="name"
  name="name"
  placeholder="e.g. Quincy Larson" 
  size="20"
  minlength="5"
  maxlength="30"
  required
/>

<!-- Number input -->
<input 
  type="number"
  id="quantity"
  name="quantity"
  min="2"
  max="10"
  disabled
/>

<!-- Button -->
<input type="button" value="Show Alert" />
```

- **`element` `label`**: digunakan untuk membuat label untuk kolom input.

- **`attribute` `for`**: digunakan untuk menentukan kolom input mana yang dituju oleh label tersebut.

- **Asosiasi formulir implisit (`implicit form association`)**: input dapat dikaitkan dengan label dengan membungkus kolom input di dalam `element` `label`.

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

- **Asosiasi formulir eksplisit (`explicit form association`)**: input dapat dikaitkan dengan label dengan menggunakan `attribute` `for` pada `element` `label`.

```html
<form action="">
  <label for="email">Email Address: </label>
  <input type="email" id="email" />
</form>
```

- **`element` `button`**: digunakan untuk membuat tombol yang dapat diklik. Tombol juga dapat memiliki `attribute` `type`, yang digunakan untuk mengontrol perilaku tombol saat diaktifkan. Contoh: `submit`, `reset`, `button`.

```html
<button type="button">Show Form</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>
```

- **`element` `fieldset`**: digunakan untuk mengelompokkan input-input terkait secara bersama-sama.

- **`element` `legend`**: digunakan untuk menambahkan keterangan (`caption`) guna mendeskripsikan kelompok input tersebut.

```html
<!-- Radio group -->
<fieldset>
  <legend>Was this your first time at our hotel?</legend>

  <label for="yes-option">Yes</label>
  <input id="yes-option" type="radio" name="hotel-stay" value="yes" />

  <label for="no-option">No</label>
  <input id="no-option" type="radio" name="hotel-stay" value="no" />
</fieldset>

<!-- Checkbox group -->
<fieldset>
  <legend>
    Why did you choose to stay at our hotel? (Check all that apply)
  </legend>

  <label for="location">Location</label>
  <input type="checkbox" id="location" name="location" value="location" />

  <label for="price">Price</label>
  <input type="checkbox" id="price" name="price" value="price" />
</fieldset>
```

- **Status fokus (`focused state`)**: ini adalah status dari kolom input saat dipilih oleh pengguna.

## Bekerja dengan Elemen dan Atribut Tabel HTML (HTML Table Elements and Attributes)

- **`element` `table`**: digunakan untuk membuat tabel `HTML`.

- **`element` kepala tabel (`thead`)**: digunakan untuk mengelompokkan konten header dalam tabel `HTML`.

- **`element` baris tabel (`tr`)**: digunakan untuk membuat baris dalam tabel `HTML`.

- **`element` header tabel (`th`)**: digunakan untuk membuat sel header dalam tabel `HTML`.

- **`element` badan tabel (`tbody`)**: digunakan untuk mengelompokkan konten isi (`body`) dalam tabel `HTML`.

- **`element` sel data tabel (`td`)**: digunakan untuk membuat sel data dalam tabel `HTML`.

- **`element` kaki tabel (`tfoot`)**: digunakan untuk mengelompokkan konten kaki (`footer`) dalam tabel `HTML`.

- **`element` `caption`**: digunakan untuk menambahkan judul dari tabel `HTML`.

- **`attribute` `colspan`**: digunakan untuk menentukan jumlah kolom yang harus direntangkan oleh suatu sel tabel.

```html
<table>
  <caption>Exam Grades</caption>

  <thead>
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Davis</td>
      <td>Alex</td>
      <td>54</td>
    </tr>

    <tr>
      <td>Doe</td>
      <td>Samantha</td>
      <td>92</td>
    </tr>

    <tr>
      <td>Rodriguez</td>
      <td>Marcus</td>
      <td>88</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2">Average Grade</td>
      <td>78</td>
    </tr>
  </tfoot>
</table>
```

## Bekerja dengan Alat-Alat HTML (HTML Tools)

- **`HTML validator`**: alat yang memeriksa sintaks kode `HTML` untuk memastikan bahwa kodenya valid.

- **`DOM inspector`**: alat yang memungkinkan Anda untuk memeriksa dan memodifikasi struktur `HTML` dari halaman web.

- **`DevTools`**: kumpulan alat pengembang web (`web developer tools`) yang terpasang langsung di peramban yang membantu Anda men-debug, memprofilkan, dan menganalisis halaman web.

---
[⬅️ Sebelumnya](../3-working-with-html-tools/2-how-to-use-the-dom-inspector-and-devtools.md) | Selanjutnya ➡️