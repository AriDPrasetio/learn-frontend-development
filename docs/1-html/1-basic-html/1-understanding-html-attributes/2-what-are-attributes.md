# Apa Itu Atribut, dan Bagaimana Cara Kerjanya?


## Apa Itu Atribut?

`Attribute` adalah nilai yang ditempatkan di dalam `tag` pembuka dari sebuah `element` `HTML`. `Attribute` memberikan informasi tambahan tentang `element` atau menentukan bagaimana `element` tersebut harus berperilaku. Berikut adalah sintaks dasar untuk sebuah `attribute`:

```html
<element attribute="value"></element>

```

Nama `attribute` diikuti oleh tanda sama dengan (`=`) dan sebuah nilai di dalam tanda kutip. Nilai tersebut dapat berupa `string` atau angka (`number`), tergantung pada jenis `attribute`-nya.

## Atribut `href` dan `target`

Contoh pertama ini menggunakan `attribute` `href` dan `target`. `Attribute` `href` menentukan URL dari suatu tautan (`link`) dan `attribute` `target` menentukan di mana tautan tersebut harus dibuka.

**Catatan:** `Element` `a`, yang juga dikenal sebagai *anchor element*, digunakan untuk membuat *hyperlink*. Teks di antara `tag` pembuka dan penutup `a` adalah bagian yang dapat diklik oleh pengguna untuk bernavigasi.

Aktifkan editor interaktif dan ubah `href="https://www.freecodecamp.org/news/"` menjadi `href="https://www.freecodecamp.org"`. Sekarang saat Anda mengklik tautan tersebut di editor interaktif, Anda akan melihat beranda freeCodeCamp di tab browser baru.

```html
<a href="https://www.freecodecamp.org/news/" target="_blank">Visit freeCodeCamp</a>
```

Tanpa `attribute` `href`, tautan tidak akan berfungsi karena tidak ada URL tujuan. Oleh karena itu, Anda harus menyertakan `attribute` `href` ini untuk membuat tautan berfungsi. Nilai `target="_blank"` memungkinkan tautan terbuka di tab browser baru. Anda akan mempelajari lebih lanjut tentang `attribute` `target` pada pelajaran-pelajaran mendatang.

## Atribut `src` dan `alt`

`Attribute` umum lainnya adalah `attribute` `src` dan `alt`, atau alternatif, yang masing-masing digunakan untuk menentukan sumber (*source*) gambar dan menyediakan teks deskriptif alternatif untuk gambar tersebut.

Aktifkan editor interaktif dan ubah `src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"` menjadi `src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"`. Kemudian ubah `alt="Two tabby kittens sleeping together on a couch."` menjadi `alt="Two cats running in the dirt."`.

```html
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two tabby kittens sleeping together on a couch." />
```

Mirip dengan `attribute` `href`, `attribute` `src` wajib disertakan (*required*) karena menentukan file gambar yang akan ditampilkan. `Attribute` `alt` tidak wajib, tetapi sangat disarankan untuk tujuan aksesibilitas (*accessibility*). Aksesibilitas berarti memastikan bahwa semua orang, termasuk penyandang disabilitas, dapat menggunakan dan memahami hal-hal seperti situs web, aplikasi, dan ruang fisik. Anda akan mempelajari lebih lanjut tentang aksesibilitas pada pelajaran-pelajaran berikutnya.

## Atribut `checked`

Beberapa `attribute` memiliki sintaks yang sedikit unik seperti halnya `attribute` `checked`.

Aktifkan editor interaktif dan coba klik pada kotak centang (*checkbox*) di jendela pratinjau untuk melihatnya berganti antara status dicentang (*checked*) dan tidak dicentang (*unchecked*).

```html
<input type="checkbox" checked />
```

Pada contoh berikut, kita memiliki sebuah `element` `input` dengan `attribute` `type` yang diatur ke `checkbox`. `Input` digunakan untuk mengumpulkan data dari pengguna, dan `attribute` `type` menentukan jenis `input`. Dalam hal ini, `input` ini adalah sebuah kotak centang. Anda akan mempelajari lebih lanjut tentang cara kerja `input` pada pelajaran mendatang.

`Attribute` `checked` digunakan untuk menentukan bahwa kotak centang harus dicentang secara bawaan (*default*). `Attribute` `checked` tidak memerlukan nilai. Jika ada, kotak centang akan dicentang secara bawaan. Jika `attribute` tersebut tidak ada, kotak centang tidak akan dicentang. Ini dikenal sebagai `boolean attribute`. Anda akan mempelajari lebih lanjut tentang *boolean* secara umum ketika sampai pada bagian `JavaScript`.

Aktifkan editor interaktif dan coba hapus `attribute` `checked` dari `input`. Anda akan melihat bahwa kotak centang tidak lagi dicentang secara bawaan.

```html
<input type="checkbox" checked />
```

## Atribut Boolean Lainnya

Ada beberapa `boolean attribute` umum yang akan Anda temui di `HTML`, seperti `disabled`, `readonly`, dan `required`. `Attribute-attribute` ini digunakan untuk menentukan status suatu `element`, seperti apakah `element` tersebut dinonaktifkan (*disabled*), hanya-baca (*read-only*), atau wajib diisi (*required*).

Berikut adalah contoh `element` `input` teks yang dinonaktifkan secara bawaan. Aktifkan editor interaktif dan coba klik `element` `input` di jendela pratinjau. Sekarang hapus `attribute` `disabled` dari `element` `input` dan Anda akan melihat bahwa `input` tersebut tidak lagi dinonaktifkan secara bawaan. Sekarang Anda seharusnya sudah dapat mengkliknya dan mengetik di dalam bidang (*field*) tersebut.

```html
<input type="text" disabled>
```

`HTML` memiliki banyak `attribute` yang dapat digunakan untuk menyesuaikan perilaku dan tampilan `element` pada halaman web. Memahami cara menggunakan `attribute` sangat penting untuk menciptakan konten web yang interaktif dan mudah diakses. Sepanjang beberapa pelajaran berikutnya, Anda akan mempelajari lebih banyak `attribute` `HTML` dan cara menggunakannya secara efektif dalam proyek pengembangan web Anda.


## Pertanyaan (Questions)


Manakah dari berikut ini yang merupakan contoh dari `boolean attribute`?


- [ ] `src`

- [ ] `href`

- [x] `disabled`

- [ ] `alt`



Apa peran dari sebuah `attribute` dalam `HTML`?


- [x] `Attribute` memberikan informasi tambahan dan membantu menentukan perilaku untuk `element` `HTML`.

- [ ] `Attribute` mengubah warna latar belakang suatu `element`.

- [ ] `Attribute` mengubah ukuran *font* suatu `element`.

- [ ] `Attribute` menambahkan fungsionalitas `JavaScript` ke suatu `element`.



Manakah dari berikut ini yang merupakan sintaks yang benar untuk sebuah `boolean attribute`?


- [x] `<input type="checkbox" checked>`

- [ ] `<input type="checkbox" checked="on">`

- [ ] `<input type="checkbox" checked="off">`

- [ ] `<input type="checkbox" checked="isChecked">`



---
[⬅️ Sebelumnya](1-what-is-html.md) | [Selanjutnya ➡️](../2-understanding-the-html-boilerplate/1-what-is-the-role-of-the-link-element-in-html.md)
