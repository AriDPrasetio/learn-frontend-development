# Apa Saja Contoh Pseudo-class Input?

Tampilan dan perilaku `element` *input* sangat berpengaruh saat membangun formulir web (*web forms*). Formulir dengan *input* yang merespons tindakan pengguna sangat membantu meningkatkan pengalaman pengguna (*user experience*), serta tidak boleh menimbulkan kebingungan atau frustrasi.

`CSS` menyediakan beberapa `input pseudo-class` yang dapat membuat formulir Anda lebih intuitif dan ramah pengguna (*user-friendly*). Mari kita pelajari `pseudo-class` ini secara terperinci.

## Pseudo-class :focus

`Pseudo-class` `:focus` memungkinkan Anda menargetkan `element` *input* saat pengguna memilih atau mengkliknya, menarik perhatian ke bidang *input* yang aktif. Ini membantu pengguna mengidentifikasi dengan mudah di mana mereka sedang mengetik:

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:focus {
  border: 2px solid crimson;
  outline: none;
}
```

## Pseudo-class :hover

Sesuai namanya, `pseudo-class` `:hover` dipicu ketika pengguna menempatkan kursor di atas sebuah `element`. Ini memberikan umpan balik visual sebelum pengguna berinteraksi dengan *input*, secara efektif memperingatkan mereka bahwa *input* siap untuk tindakan.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:hover {
  background-color: orange;
}
```

Pada contoh di atas, latar belakang `element` *input* berubah menjadi warna oranye ketika pengguna mengarahkan kursor ke atasnya, memberi tahu mereka bahwa bidang tersebut siap untuk interaksi.

## Pseudo-class :checked

`Pseudo-class` `:checked` memungkinkan Anda menata gaya tombol radio atau kotak centang secara berbeda ketika pengguna memilihnya. Dengan cara ini, pengguna dapat dengan mudah melihat opsi mana yang telah mereka pilih.

Berikut adalah contoh dengan kotak centang untuk menyetujui ketentuan pada sebuah situs web.

**CATATAN**: Beberapa `CSS` dalam contoh ini menggunakan `property` yang belum dibahas. Ini hanya untuk memberi Anda gambaran tentang cara membuat kotak centang kustom. Anda akan mempelajari bagaimana semua ini bekerja pada pelajaran dan lokakarya mendatang.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
  Agree <input class="checkbox" type="checkbox" />
  </label>
</form>
```

```css
.checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;
  vertical-align: middle; 
}

.checkbox:hover {
  border-color: #888;
}

.checkbox:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

.checkbox:checked::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:focus {
  outline: 2px solid #90caf9;
  outline-offset: 2px;
}
```

## Pseudo-class :required

`:required` menargetkan `element` *input* yang memiliki `attribute` `required`. Ini memberi sinyal kepada pengguna bahwa mereka harus mengisi bidang tersebut untuk mengirimkan formulir.

Berikut adalah contoh formulir yang memiliki beberapa bidang *input* wajib (*required*):

```html
<link rel="stylesheet" href="styles.css" />
<form action="#">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" />

  <button type="submit">Submit</button>
</form>
```

```css
input:required {
  border: 2px solid orange;
}
```

## Pseudo-class :valid dan :invalid

Saat memvalidasi formulir, Anda dapat menggunakan `pseudo-class` `:valid` untuk menata gaya bidang *input* yang memenuhi kriteria validasi, dan `:invalid` untuk menata gaya bidang *input* yang tidak memenuhi kriteria. Biasanya, Anda akan menggunakan warna hijau untuk *input* yang valid dan merah untuk *input* yang tidak valid.

Berikut adalah contoh penggunaan `pseudo-class` `:valid`:

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</form> 
```

```css
input:valid {
  border-color: green;
}
```

Berikut adalah contoh penggunaan `pseudo-class` `:invalid`:

```html
<link rel="stylesheet" href="styles.css" />
<form>  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</form>
```

```css
input:invalid {
  border-color: crimson;
}
```

## Pseudo-class :disabled

`Pseudo-class` `:disabled` memungkinkan Anda memilih dan menata gaya `element` *input* yang dinonaktifkan. `Element-element` ini memiliki `attribute` `disabled`, yang mencegah pengguna berinteraksi dengannya. Ketika sebuah *input* dinonaktifkan, *input* tersebut tidak dapat diklik, difokuskan, atau diedit.

Berikut adalah contoh sebuah label dan `element` *input* yang dinonaktifkan.

Dalam `CSS`, kita menargetkan *input* yang dinonaktifkan tersebut dan memberinya warna latar belakang `lightgray` serta mengubah penunjuk kursor menjadi `not-allowed`.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label for="name">Name:</label>
  <input class="text-input" type="text" id="name" name="name" disabled />
</form>
```

```css
.text-input:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
```

`Value` `property` `CSS` `cursor: not-allowed;` mengubah tampilan kursor untuk menunjukkan bahwa suatu tindakan tidak diizinkan.

Ketika diterapkan pada sebuah `element`, ini menampilkan kursor dengan simbol lingkaran garis miring (biasanya lingkaran dengan garis diagonal melewatinya) untuk memberi sinyal kepada pengguna bahwa `element` tersebut tidak interaktif atau tidak dapat diklik maupun diajak berinteraksi.

## Pseudo-class Input Lainnya

Berikut adalah beberapa contoh `input pseudo-class` lainnya dan apa yang mereka lakukan:

- `:autofill`: menerapkan `styles` ke bidang *input* yang diisi otomatis oleh browser dengan data tersimpan.
- `:optional`: menata gaya `element` *input* yang tidak wajib dan dapat dikosongkan.
- `:in-range` dan `:out-of-range`: menata gaya `element` berdasarkan apakah `value`-nya berada di dalam atau di luar batasan rentang yang ditentukan.

## Pertanyaan (Questions)

Apa yang dimungkinkan oleh `pseudo-class` `:focus` untuk Anda lakukan?

- [ ] Memungkinkan Anda menyorot beberapa `element` secara bersamaan.
- [x] Memungkinkan Anda menata gaya `element` *input* saat dipilih atau diklik.
- [ ] Memungkinkan Anda mengirimkan formulir secara otomatis saat *input* diklik.
- [ ] Memungkinkan Anda menyusun ulang `element` dalam formulir secara dinamis.

Untuk apa `pseudo-class` `:valid` dan `:invalid` dapat digunakan dalam validasi formulir?

- [ ] Keduanya memungkinkan Anda mereset semua bidang *input* secara otomatis.
- [x] Keduanya memungkinkan Anda memberikan gaya berbeda untuk *input* berdasarkan apakah *input* tersebut memenuhi kriteria validasi.
- [ ] Keduanya memungkinkan Anda menonaktifkan pengiriman formulir jika ada bidang yang dibiarkan kosong.
- [ ] Keduanya memungkinkan Anda mengubah teks placeholder secara dinamis.

`Pseudo-class` mana yang memungkinkan Anda menata gaya bidang *input* yang harus diisi sebelum pengiriman formulir?

- [ ] `:optional`
- [ ] `:disabled`
- [x] `:required`
- [ ] `:checked`

---

[⬅️ Sebelumnya](2-what-are-examples-of-element-user-action-pseudo-classes.md) | [Selanjutnya ➡️](4-what-are-examples-of-location-pseudo-classes.md)
