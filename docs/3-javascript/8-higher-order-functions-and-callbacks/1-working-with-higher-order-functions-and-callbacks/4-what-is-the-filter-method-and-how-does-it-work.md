# Apa Itu Method Filter, dan Bagaimana Cara Kerjanya?

`Method` `filter` digunakan untuk membuat sebuah `array` baru dengan elemen-elemen yang lolos pengujian tertentu, menjadikannya sangat berguna untuk mengekstrak item secara selektif berdasarkan kriteria yang ditentukan.

Dalam contoh ini, kita menggunakan `method` `filter` untuk membuat sebuah `array` baru yang hanya berisi angka-angka genap:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
```

Dalam contoh ini, `method` `filter` menerapkan sebuah `callback function` ke setiap elemen dari `array` `numbers`. `Callback` tersebut memeriksa apakah setiap angka bernilai genap menggunakan operator sisa bagi (`remainder operator` `%`).

Jika angka tersebut genap, fungsi mengembalikan nilai `true`, dan angka tersebut dimasukkan ke dalam `array` baru. Jika ganjil, fungsi mengembalikan nilai `false`, dan angka tersebut tidak disertakan.

Sama seperti `method` `map`, `callback function` untuk `method` `filter` menerima tiga `argument` yang sama: elemen saat ini yang sedang diproses (*current element*), indeks (*index*), dan `array`.

Penting untuk dicatat bahwa jika tidak ada elemen yang lolos pengujian, `method` `filter` mengembalikan sebuah `empty array` (array kosong):

```javascript
const numbers = [2, 4, 6, 8].filter((num) => num > 10);

console.log(numbers); // []
```

`filter` sangat serbaguna dan dapat digunakan dalam banyak skenario. Anda dapat menggunakannya untuk menghapus nilai `null` atau `undefined` dari sebuah `array`, memfilter `object` berdasarkan `property`-nya, atau menerapkan fungsionalitas pencarian (*search functionality*).

Berikut adalah contoh penggunaan `method` `filter` untuk mengembalikan sebuah `array` `object` bagi individu yang berusia lebih muda dari `30` tahun:

```javascript
const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngPeople = developers.filter((person) => person.age < 30);
console.log(youngPeople);

// [{ name: "Alice", age: 25 }, { name: "David", age: 25 }]
```

Di sepanjang sisa kurikulum ini, Anda akan sangat sering menggunakan `method` `map` dan `filter`. Oleh karena itu, membangun kebiasaan dan pemahaman mendalam tentang keduanya tidak hanya akan memperlancar proses *coding* Anda, tetapi juga membantu Anda menulis `code` yang lebih bersih dan efisien.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah yang dikembalikan oleh `method` `filter` jika tidak ada elemen di dalam `array` yang lolos pengujian?

- [ ] `null`
- [ ] `undefined`
- [x] Sebuah `empty array` (array kosong).
- [ ] `Array` asli.

### Pertanyaan 2

Manakah dari pernyataan berikut yang paling tepat menggambarkan tujuan dari `callback function` di dalam `method` `filter`?

- [ ] Mentransformasi setiap elemen di dalam `array`.
- [x] Menentukan elemen mana yang harus dimasukkan ke dalam `array` baru.
- [ ] Mengurutkan elemen di dalam `array`.
- [ ] Menghitung sebuah nilai tunggal dari semua elemen di dalam `array`.

### Pertanyaan 3

Bagaimana pengaruh `method` `filter` terhadap `array` asli tempat ia dipanggil?

- [ ] Memodifikasi `array` asli secara langsung (*in place*).
- [ ] Menghapus elemen dari `array` asli.
- [x] Tidak memengaruhi `array` asli sama sekali.
- [ ] Mengurutkan `array` asli.

---
[⬅️ Sebelumnya](3-what-is-the-map-method-and-how-does-it-work.md) | [Selanjutnya ➡️](5-what-is-the-reduce-method-and-how-does-it-work.md)
