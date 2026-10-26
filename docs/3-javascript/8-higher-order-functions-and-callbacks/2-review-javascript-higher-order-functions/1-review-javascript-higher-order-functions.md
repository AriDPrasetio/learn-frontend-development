# Review: JavaScript Higher Order Functions

Dokumen review ini merangkum seluruh konsep penting, sintaksis, dan teknik penggunaan fungsi tingkat tinggi yang dipelajari pada modul **Higher Order Functions and Callbacks**.

---

## Callback Function dan Method `forEach` (Callback Functions and the `forEach` Method)

- **Definisi**: Dalam `JavaScript`, sebuah `callback function` adalah sebuah `function` yang diteruskan sebagai sebuah `argument` ke `function` lainnya dan dieksekusi setelah fungsi utama selesai dijalankan.

- **Method `forEach()`**: `Method` ini digunakan untuk melakukan iterasi pada setiap elemen di dalam sebuah `array` dan menjalankan suatu operasi pada setiap elemen tersebut. `Callback function` di dalam `forEach` dapat menerima hingga tiga `argument`: elemen saat ini (*current element*), indeks dari elemen saat ini (*index*), dan `array` tempat `forEach` dipanggil.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Hasil: 2 4 6 8 10
numbers.forEach((number) => {
  console.log(number * 2);
});
```

---

## Higher Order Functions

- **Definisi**: Sebuah `higher-order function` (fungsi tingkat tinggi) menerima satu atau lebih `function` sebagai `argument` dan mengembalikan sebuah `function` atau nilai sebagai hasilnya.

```javascript
function operateOnArray(arr, operation) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = operateOnArray(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

- **Method `map()`**: `Method` ini digunakan untuk membuat sebuah `array` baru dengan menerapkan sebuah `function` yang diberikan ke setiap elemen dari `array` asli. `Callback function` dapat menerima hingga tiga `argument`: elemen saat ini (*current element*), indeks dari elemen saat ini (*index*), dan `array` tempat `map` dipanggil.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
```

- **Method `filter()`**: `Method` ini digunakan untuk membuat sebuah `array` baru dengan elemen-elemen yang lolos pengujian tertentu, menjadikannya sangat berguna untuk mengekstrak item secara selektif berdasarkan kriteria. Sama seperti `method` `map`, `callback function` untuk `method` `filter` menerima tiga `argument` yang sama: elemen saat ini yang sedang diproses, indeks, dan `array`.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
```

- **Method `reduce()`**: `Method` ini digunakan untuk memproses sebuah `array` dan meringkasnya menjadi sebuah nilai tunggal (*single value*). Nilai tunggal ini dapat berupa `number`, `string`, `object`, atau bahkan `array` lain. `Method` `reduce()` bekerja dengan menerapkan sebuah `function` ke setiap elemen di dalam `array`, secara berurutan, meneruskan hasil dari setiap perhitungan ke iterasi berikutnya. Fungsi ini sering disebut sebagai *reducer function*. *Reducer function* menerima dua `parameter` utama: akumulator (*accumulator*) dan nilai saat ini (*current value*). Akumulator adalah tempat Anda menyimpan hasil berjalan dari operasi Anda, dan nilai saat ini adalah elemen `array` yang sedang diproses.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15
```

---

## Method Chaining

- **Definisi**: `Method chaining` adalah teknik pemrograman yang memungkinkan Anda memanggil beberapa `method` pada `object` yang sama dalam satu baris `code`. Teknik ini dapat membuat `code` Anda lebih mudah dibaca dan ringkas, terutama ketika melakukan serangkaian operasi pada `object` yang sama.

```javascript
const result = "  Hello, World!  "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");

console.log(result); // "hello, JavaScript!"
```

---

## Bekerja dengan Method `sort` (Working with the `sort` Method)

- **Definisi**: `Method` `sort` digunakan untuk mengurutkan elemen-elemen dari sebuah `array` dan mengembalikan referensi ke `array` yang telah diurutkan tersebut. Tidak ada salinan baru yang dibuat dalam kasus ini karena elemen-elemen diurutkan langsung di tempat (*in place*).

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

Jika Anda perlu mengurutkan angka, maka Anda perlu meneruskan sebuah `compare function`. `Method` `sort` mengonversi elemen-elemen menjadi `string` dan kemudian membandingkan urutan nilai unit kode UTF-16 (*UTF-16 code unit values*) miliknya. Unit kode UTF-16 adalah nilai numerik yang mewakili karakter di dalam `string`. Contoh unit kode UTF-16 adalah angka `65`, `66`, dan `67` yang masing-masing mewakili karakter `"A"`, `"B"`, dan `"C"`. Jadi, angka `200` muncul sebelum angka `3` di dalam sebuah `array`, karena `string` `"200"` muncul sebelum `string` `"3"` saat membandingkan unit kode UTF-16 miliknya.

```javascript
const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b);

console.log(numbers); // [3, 5, 10, 200, 414]
```

`Parameter` `a` dan `b` adalah dua elemen yang sedang dibandingkan. `compare function` harus mengembalikan nilai negatif jika `a` harus berada sebelum `b`, nilai positif jika `a` harus berada setelah `b`, dan nol jika `a` dan `b` bernilai sama.

---

## Bekerja dengan Method `every` dan `some` (Working with the `every` and `some` Methods)

- **Method `every()`**: `Method` ini menguji apakah semua elemen di dalam sebuah `array` lolos dari pengujian yang diterapkan oleh fungsi yang disediakan. `Method` `every()` mengembalikan `true` jika fungsi yang disediakan mengembalikan `true` untuk semua elemen di dalam `array`. Jika ada satu elemen saja yang gagal dalam pengujian, `method` ini akan segera mengembalikan `false` dan berhenti memeriksa elemen-elemen yang tersisa.

```javascript
const numbers = [2, 4, 6, 8, 10];
const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);

console.log(hasAllEvenNumbers); // true
```

- **Method `some()`**: `Method` ini memeriksa apakah setidaknya ada satu elemen yang lolos dari pengujian. `Method` `some()` mengembalikan `true` segera setelah ia menemukan sebuah elemen yang lolos pengujian. Jika tidak ada elemen yang lolos pengujian, ia mengembalikan `false`.

```javascript
const numbers = [1, 3, 5, 7, 8, 9];
const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);

console.log(hasSomeEvenNumbers); // true
```

---

## Tugas (Assignment)

Tinjau kembali topik dan konsep `JavaScript` `Higher Order Functions`.

---
[⬅️ Sebelumnya](../1-working-with-higher-order-functions-and-callbacks/8-how-do-the-every-and-some-methods-work.md) | Selanjutnya ➡️
