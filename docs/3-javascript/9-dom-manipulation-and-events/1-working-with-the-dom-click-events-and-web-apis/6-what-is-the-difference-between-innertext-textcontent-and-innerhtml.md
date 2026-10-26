# Apa Perbedaan Antara innerText, textContent, dan innerHTML?

## Ikhtisar (Overview)

Mari kita pelajari tentang `innerText`, `textContent`, dan `innerHTML`.

Ini adalah `property` yang dapat Anda akses dalam `JavaScript` untuk mendapatkan atau mengubah konten dari sebuah elemen `HTML`. Meskipun pada pandangan pertama mereka terlihat sangat mirip, mereka memiliki perbedaan mendasar yang penting. Memilih `property` yang tepat bergantung pada kasus penggunaan spesifik Anda. Mari kita pelajari lebih dalam.

Mari kita mulai dengan `innerText`.

## Memahami `innerText` (Understanding `innerText`)

`innerText` mewakili konten teks yang terlihat (*visible text content*) dari elemen `HTML` beserta keturunannya. `Property` ini tidak menyertakan teks tersembunyi (*hidden text*) atau tag `HTML`, hanya teks yang dirender di layar.

Sebagai contoh, di sini Anda dapat melihat elemen `div` yang berisi dua paragraf:

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
```

Jika kita mendapatkan referensi ke elemen `HTML` ini di dalam `code` `JavaScript` kita menggunakan `getElementById()`, kita dapat mengakses `property` `innerText` dari elemen ini:

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
console.log(container.innerText);
```

Inilah teks bagian dalam (*inner text*) dari elemen ini:

```md
Hello, World!
I'm learning JavaScript
```

`Property` ini mengembalikan sebuah `string` dengan teks yang terdapat di dalam elemen tersebut, termasuk teks dari keturunannya.

Anda harus tahu bahwa `innerText` hanya mengembalikan teks yang terlihat pada saat `string` tersebut diminta. Jika sebuah elemen anak disembunyikan, teksnya tidak akan terlihat.

Berikut adalah contoh di mana paragraf kedua disembunyikan menggunakan atribut `hidden`:

```html
<div id="container">
  <p>Hello, World!</p>
  <p hidden>I'm learning JavaScript</p>
</div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
console.log(container.innerText);
```

Jika kita mencoba mencatat `innerText` lagi, sekarang *output*-nya tidak akan memiliki teks dari paragraf kedua:

```md
Hello, World!
```

Anda dapat mengatur nilai `innerText` dari elemen `HTML` seperti ini, tetapi ini akan menggantikan teks yang sudah ada dan menambahkan elemen jeda baris (`br`) untuk setiap jeda baris baru:

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
container.innerText = "JavaScript is awesome!";
```

Karena `innerText` memperhitungkan visibilitas tata letak (*layout visibility*), mengambil nilainya akan memicu proses yang disebut "*reflow*", yang menghitung ulang posisi elemen tertentu di situs web. Proses ini dapat memakan komputasi yang intensif, jadi Anda sebaiknya menghindari pemicuan *reflow* jika memungkinkan.

Bagus. Sekarang mari kita bahas tentang `textContent`.

## Memahami `textContent` (Understanding `textContent`)

`textContent` mengembalikan konten teks biasa (*plain text*) dari sebuah elemen, termasuk semua teks di dalam keturunannya.

Perbedaan paling penting antara `innerText` dan `textContent` adalah bahwa `textContent` selalu mengembalikan konten teks lengkap dari elemen `HTML` dan keturunannya, terlepas dari apakah teks tersebut terlihat atau disembunyikan.

Di sini kita memiliki contoh yang sama dalam `HTML`:

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
```

Jika Anda mencoba mengakses `property` ini, Anda akan melihat teks dari elemen dan keturunannya sebagai *output*, dengan mempertahankan indentasi dan spasi aslinya:

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
console.log(container.textContent);
```

Jika sebuah elemen `HTML` tidak terlihat, seperti yang dapat Anda lihat di sini ketika kita menyembunyikan paragraf kedua, teksnya akan tetap disertakan di dalam `property` ini:

```html
<div id="container">
  <p>Hello, World!</p>
  <p hidden>I'm learning JavaScript</p>
</div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
console.log(container.textContent);
```

`textContent` juga akan menyertakan konten dari elemen seperti `script` dan `style`.

Jika Anda mencoba mengganti nilai `textContent` pada sebuah simpul, tindakan ini akan menghapus semua simpul anaknya dan menggantinya dengan satu simpul teks tunggal (*text node*) yang berisi `string` baru:

```html
<div id="container">
  <p>Hello, World!</p>
  <p hidden>I'm learning JavaScript</p>
</div>
<script src="index.js"></script>
```

```javascript
const container = document.getElementById("container");
container.textContent = "New content";
```

## Membandingkan dengan `innerHTML` (Comparing with `innerHTML`)

Dan akhirnya, mari kita bahas bagaimana `textContent` dan `innerText` berbeda dari `innerHTML`.

Ingat bahwa dengan `innerHTML` Anda dapat mengatur konten `HTML` di dalam suatu elemen. Ini sangat berguna untuk menyuntikkan `HTML` baru ke dalam `DOM` secara dinamis.

Namun, ingatlah bahwa hal ini menimbulkan risiko keamanan jika Anda tidak memiliki kendali penuh atas `string` tersebut, seperti `string` yang berisi data yang dimasukkan oleh pengguna. Jika data tersebut berbahaya, hal ini dapat menyebabkan masalah keamanan yang serius (seperti XSS).

Untuk menghindari hal ini, disarankan untuk menggunakan `property` `textContent` untuk menyisipkan teks biasa (*plain text*) sebagai gantinya.

## Rekapitulasi Perbedaan Utama (Key Differences Recap)

`Property` `innerText`, `textContent`, dan `innerHTML` dalam `JavaScript` menyediakan cara berbeda untuk mengakses dan memanipulasi konten elemen `HTML`. Anda harus memahami perbedaan antara `property-property` ini jika tujuan Anda adalah bekerja dengan konten `HTML` dalam `JavaScript` secara efektif.

## Pertanyaan (Questions)

### Pertanyaan 1

Manakah dari `property` berikut yang mengembalikan konten teks yang terlihat (*visible text content*) dari sebuah elemen HTML, tidak termasuk teks tersembunyi atau teks di dalam elemen yang tersembunyi?

- [ ] `innerHTML`
- [ ] `textContent`
- [x] `innerText`
- [ ] Semua jawaban di atas.

### Pertanyaan 2

Manakah dari `property` berikut yang dapat digunakan untuk menyuntikkan konten HTML baru secara dinamis ke dalam sebuah elemen?

- [x] `innerHTML`
- [ ] `textContent`
- [ ] `innerText`
- [ ] Tidak ada jawaban di atas.

### Pertanyaan 3

Manakah dari `property` berikut yang mengembalikan konten teks biasa dari sebuah elemen, termasuk semua teks di dalam elemen anak, terlepas dari apakah teks tersebut terlihat atau disembunyikan?

- [ ] `innerHTML`
- [x] `textContent`
- [ ] `innerText`
- [ ] Semua jawaban di atas.

---
[⬅️ Sebelumnya](5-how-do-you-create-new-nodes-using-innerhtml-and-createelement.md) | [Selanjutnya ➡️](7-how-do-you-add-and-remove-nodes-from-the-dom-with-appendchild-and-removechild.md)
