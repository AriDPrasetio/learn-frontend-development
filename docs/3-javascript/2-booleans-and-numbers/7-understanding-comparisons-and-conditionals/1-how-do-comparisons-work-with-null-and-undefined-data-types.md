# Bagaimana Cara Kerja Perbandingan dengan Tipe Data Null dan Undefined?

Di JavaScript, `null` dan `undefined` adalah dua tipe data berbeda yang merepresentasikan ketiadaan nilai, tetapi keduanya berperilaku berbeda dalam perbandingan. Memahami bagaimana tipe-tipe ini berinteraksi dalam berbagai skenario perbandingan sangat penting untuk menulis kode yang tangguh dan bebas dari *bug*.

Mari kita mulai dengan tipe `undefined`. Sebuah variabel bernilai `undefined` ketika variabel tersebut telah dideklarasikan tetapi belum diberi nilai. Ini adalah nilai *default* dari variabel yang belum diinisialisasi dan parameter fungsi yang tidak diberikan argumen.

Tipe `null`, di sisi lain, adalah nilai penugasan (*assignment value*) yang merepresentasikan ketiadaan nilai yang disengaja. Ini sering digunakan untuk menunjukkan bahwa suatu variabel sengaja dibuat tidak memiliki nilai.

Ketika membandingkan `null` dan `undefined` menggunakan operator kesetaraan (`==`), JavaScript melakukan pemaksaan tipe data (*type coercion*). Ini berarti JavaScript mencoba mengonversi operan ke tipe yang sama sebelum melakukan perbandingan. Dalam kasus ini, `null` dan `undefined` dianggap sama:

```javascript
console.log(null == undefined); // true
```

Namun, ketika menggunakan operator kesetaraan ketat (`===`), yang memeriksa nilai dan tipe sekaligus tanpa melakukan pemaksaan tipe data (*type coercion*), `null` dan `undefined` tidaklah sama:

```javascript
console.log(null === undefined); // false
```

Perbedaan ini penting untuk diingat ketika menulis pernyataan kondisional atau melakukan pemeriksaan kesetaraan dalam kode Anda. Ketika membandingkan `null` atau `undefined` dengan nilai lain menggunakan operator kesetaraan (`==`), perilakunya bisa jadi tidak terduga. Sebagai contoh:

```javascript
console.log(null == 0);  // false
console.log(null == ''); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false
```

Perbandingan ini mengembalikan `false` karena `null` dan `undefined` hanya bernilai sama satu sama lain (dan diri mereka sendiri) saat menggunakan operator kesetaraan. Perilaku `null` dalam perbandingan lainnya sangatlah rumit (*tricky*):

```javascript
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
```

`undefined`, di sisi lain, selalu dikonversi menjadi `NaN` dalam konteks numerik, yang membuat semua perbandingan numerik dengan `undefined` mengembalikan `false`:

```javascript
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false
```

Mengingat nuansa ini, umumnya disarankan untuk menggunakan operator kesetaraan ketat saat membandingkan nilai, terutama saat berurusan dengan `null` dan `undefined`. Pendekatan ini membantu menghindari pemaksaan tipe data (*type coercion*) yang tidak terduga dan membuat perilaku kode Anda lebih dapat diprediksi.

Singkatnya, meskipun `null` dan `undefined` keduanya digunakan untuk merepresentasikan ketiadaan suatu nilai, mereka berperilaku berbeda dalam perbandingan. Memahami perbedaan-perbedaan ini adalah kunci untuk menulis kode JavaScript yang jelas dan bebas kesalahan.

---

## Pertanyaan

### Apa hasil dari ekspresi: null === undefined?
- [ ] `true`
- [x] `false`
- [ ] `undefined`
- [ ] `null`

### Di JavaScript, apa hasil dari perbandingan: null >= 0?
- [x] `true`
- [ ] `false`
- [ ] `undefined`
- [ ] `Error`

### Manakah dari pernyataan berikut tentang undefined yang benar?
- [ ] `undefined == null` mengevaluasi ke `false`.
- [ ] `undefined === null` mengevaluasi ke `true`.
- [ ] `undefined < 0` mengevaluasi ke `true`.
- [x] `undefined == 0` mengevaluasi ke `false`.

---
[⬅️ Sebelumnya](../6-working-with-numbers-and-common-number-methods/3-what-is-the-tofixed-method-and-how-does-it-work.md) | [Selanjutnya ➡️](2-what-are-switch-statements-and-how-do-they-differ-from-if-else-chains.md)
