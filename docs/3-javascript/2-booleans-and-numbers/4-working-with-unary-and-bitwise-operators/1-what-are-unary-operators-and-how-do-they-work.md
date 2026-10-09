# Apa Itu Operator Unary, dan Bagaimana Cara Kerjanya?

Operator *unary* bekerja pada satu operan (*operand*) untuk melakukan operasi seperti konversi tipe data, manipulasi nilai, atau pemeriksaan kondisi tertentu. Mari kita lihat beberapa operator *unary* yang umum dan bagaimana cara kerjanya.

Operator *unary plus* (`+`) mengonversi operannya menjadi sebuah angka. Jika operan tersebut sudah berupa angka, nilainya tetap tidak berubah.

```javascript
const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number
```

*Unary plus* sangat berguna ketika Anda ingin memastikan bahwa Anda sedang bekerja dengan nilai numerik. Seperti yang mungkin Anda duga, ada juga operator *unary negation* (`-`). Operator ini menegasikan nilai dari operan. Cara kerjanya mirip dengan *unary plus*, hanya saja operator ini membalik tandanya (positif/negatif).

```javascript
const str = '42';
const strToNegativeNum = -str;

console.log(strToNegativeNum); // -42
console.log(typeof str); // string
console.log(typeof strToNegativeNum); // number
```

Operator *logical* NOT, yang direpresentasikan oleh tanda seru (`!`), adalah operator *unary* lainnya. Operator ini membalikkan nilai boolean dari operannya. Jadi, jika operan bernilai `true`, ia menjadi `false`, dan jika bernilai `false`, ia menjadi `true`.

```javascript
let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true
```

Operator *bitwise* NOT adalah operator *unary* yang lebih jarang digunakan. Direpresentasikan oleh tanda tilde (`~`), operator ini membalik representasi biner dari sebuah angka. Komputer menyimpan angka dalam format biner (angka 1 dan 0). Operator `~` membalik setiap bit, yang berarti mengubah semua angka 1 menjadi 0 dan semua 0 menjadi 1. Anda akan mempelajari lebih lanjut tentang biner dan bit dalam pelajaran mendatang.

```javascript
const num = 5; // Biner untuk 5 adalah 00000101

console.log(~num); // -6
```

Dalam contoh ini, 5 menjadi -6 karena dengan menerapkan operator `~` pada 5, Anda mendapatkan `-(5 + 1)`, yang sama dengan -6 karena representasi *two's complement*. *Two's complement* adalah cara komputer merepresentasikan angka negatif dalam biner. Anda mungkin tidak akan sering menggunakan *bitwise* NOT kecuali jika Anda bekerja dengan tugas-tugas pemrograman tingkat rendah (*low-level*) seperti memanipulasi bit secara langsung.

Kata kunci `void` adalah operator *unary* yang mengevaluasi suatu ekspresi dan mengembalikan `undefined`.

```javascript
const result = void (2 + 2);

console.log(result); // undefined
```

`void` juga biasanya digunakan dalam *hyperlink* untuk mencegah navigasi halaman:

```html
<a href="javascript:void(0);">Click Me</a>
```

Terakhir, ada operator `typeof` yang telah Anda pelajari pada pelajaran-pelajaran sebelumnya. Operator ini mengembalikan tipe dari operannya sebagai sebuah string.

```javascript
const value = 'Hello world';

console.log(typeof value); // string
```

---

## Pertanyaan

### Apa yang dilakukan operator unary?
- [ ] Mereka bekerja pada dua operan untuk melakukan operasi aritmetika.
- [x] Mereka bekerja pada satu operan tunggal untuk melakukan tugas seperti konversi tipe, manipulasi nilai, atau pemeriksaan kondisi.
- [ ] Mereka membandingkan dua nilai untuk kesetaraan.
- [ ] Mereka hanya melakukan operasi aritmetika.

### Apa yang dilakukan operator typeof?
- [ ] Mengonversi nilai menjadi string.
- [x] Mengembalikan tipe dari operannya sebagai sebuah string.
- [ ] Memeriksa apakah dua nilai sama.
- [ ] Membandingkan dua variabel untuk pemaksaan tipe data (*type coercion*).

### Bagaimana cara kerja operator bitwise NOT di JavaScript?
- [ ] Mengalikan nilainya dengan 2.
- [ ] Menambahkan 1 ke nilainya.
- [x] Membalik setiap bit, mengubah semua angka 1 menjadi 0 dan semua angka 0 menjadi 1.
- [ ] Memeriksa apakah nilainya positif atau negatif.

---
[⬅️ Sebelumnya](../3-working-with-comparison-and-boolean-operators/2-what-are-comparison-operators-and-how-do-they-work.md) | [Selanjutnya ➡️](2-what-are-bitwise-operators-and-how-do-they-work.md)
