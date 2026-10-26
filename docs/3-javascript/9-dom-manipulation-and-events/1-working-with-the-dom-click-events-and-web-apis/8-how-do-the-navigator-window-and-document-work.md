# Bagaimana Cara Kerja Navigator, Window, dan Document?

Saat bekerja dengan DOM, Anda akan sering menjumpai *interface* `Navigator`, `Window`, dan `Document`. Sebuah *interface* adalah kumpulan `method` dan `property` yang mendefinisikan suatu objek tertentu.

Dalam pelajaran ini, kita akan mempelajari bagaimana *interface-interface* ini bekerja dan bagaimana Anda dapat menggunakannya di dalam aplikasi web Anda.

## Interface `Navigator`

Mari kita mulai dengan melihat *interface* `Navigator`.

*Interface* `Navigator` menyediakan informasi tentang lingkungan browser, seperti *user agent string*, platform, dan versi browser. Sebuah *user agent string* adalah teks `string` yang mengidentifikasi browser dan sistem operasi yang sedang digunakan.

Berikut adalah contoh cara mengakses *user agent string* menggunakan *interface* `Navigator`:

```javascript
console.log(navigator.userAgent);
```

Hasilnya akan berupa sebuah `string` yang berisi informasi tentang browser dan sistem operasi yang sedang digunakan.

Berikut adalah contoh `string` yang mungkin Anda lihat:

```text
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36
```

Hal ini dapat berguna jika Anda ingin menampilkan konten yang berbeda berdasarkan browser atau sistem operasi pengguna.

`Property` lain yang berguna dari *interface* `Navigator` adalah `property` `language`, yang mengembalikan bahasa dari browser. Anda dapat menggunakan `property` ini untuk menampilkan konten dalam bahasa pilihan pengguna.

Berikut adalah contoh penggunaan `property` `language`:

```javascript
console.log(navigator.language);
```

Hasilnya akan berupa sebuah `string` yang berisi kode bahasa dari browser. Jika bahasa pilihan Anda adalah bahasa Inggris, kode ini akan mengembalikan `en-US`.

## Interface `Window`

Selanjutnya, mari kita lihat *interface* `Window`.

*Interface* `Window` mewakili jendela browser yang memuat dokumen DOM. *Interface* ini menyediakan berbagai `method` dan `property` untuk berinteraksi dengan jendela browser, seperti mengubah ukuran jendela, membuka jendela baru, dan melakukan navigasi ke berbagai URL.

Berikut adalah contoh bekerja dengan `property` `innerWidth` dari *interface* `Window`:

```javascript
console.log(window.innerWidth);
```

Hasilnya adalah lebar jendela browser dalam piksel. Misalnya, jika jendela browser memiliki lebar 800 piksel, kode tersebut akan mengembalikan `800`.

Contoh lainnya adalah `property` `location` dari *interface* `Window`, yang menyediakan informasi tentang URL saat ini dari jendela browser:

```javascript
console.log(window.location);
```

Hasilnya adalah sebuah objek yang berisi informasi tentang URL saat ini, seperti `protocol`, `hostname`, dan `pathname`.

Sebagian besar waktu Anda tidak perlu berinteraksi langsung dengan *interface* `Window`, karena objek ini secara otomatis tersedia di dalam *global scope* kode JavaScript Anda.

Misalnya, Anda dapat mengakses `property` `location` secara langsung tanpa menggunakan objek `window`:

```javascript
console.log(location);
```

Anda akan melihat hasil yang sama seperti sebelumnya saat menggunakan `window.location`.

## Interface `Document`

Terakhir, mari kita lihat *interface* `Document`.

*Interface* `Document` mewakili dokumen DOM yang ditampilkan di dalam jendela browser. *Interface* ini menyediakan berbagai `method` dan `property` untuk berinteraksi dengan DOM, seperti memilih elemen, membuat elemen baru, dan memodifikasi konten elemen.

Berikut adalah contoh penggunaan `property` `document.children`:

```html
<p>Hello, World!</p>
<script src="index.js"></script>
```

```javascript
console.log(document.children);
```

Hasilnya adalah sebuah objek `HTMLCollection` yang berisi semua elemen anak (*child elements*) dari dokumen.

Masih ada banyak lagi `property` dan `method` yang tersedia pada *interface* `Document`, `Window`, dan `Navigator`. Namun, pelajaran ini telah memberi Anda pemahaman dasar tentang cara kerja *interface-interface* ini dan cara menggunakannya di dalam aplikasi web Anda.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang dikembalikan oleh `property` `navigator.userAgent`?

- [ ] Lebar dari jendela browser.
- [ ] URL saat ini dari jendela browser.
- [x] Sebuah `string` yang mengidentifikasi browser dan sistem operasi.
- [ ] Bahasa dari browser.

### Pertanyaan 2

`Property` mana dari *interface* `Window` yang menyediakan informasi tentang URL saat ini?

- [ ] `window.innerWidth`
- [x] `window.location`
- [ ] `window.navigator`
- [ ] `window.document`

### Pertanyaan 3

Bagaimana cara mengakses `property` dari *interface* `Document` tanpa secara eksplisit menggunakan objek `window`?

- [ ] Dengan menggunakan `window.document`.
- [x] Dengan menggunakan `document`.
- [ ] Dengan menggunakan `navigator.document`.
- [ ] Dengan menggunakan `navigator.window`.

---

[⬅️ Sebelumnya](7-how-do-you-add-and-remove-nodes-from-the-dom-with-appendchild-and-removechild.md) | [Selanjutnya ➡️](9-how-do-you-add-attributes-with-setattribute.md)
