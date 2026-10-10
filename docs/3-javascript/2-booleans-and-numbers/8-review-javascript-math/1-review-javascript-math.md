# Review: JavaScript Math

## Bekerja dengan Tipe Data Number

- **Definisi**: Tipe `Number` pada `JavaScript` mencakup bilangan bulat (`integer`), bilangan berkoma (`floating-point number`), `Infinity`, dan `NaN`. Bilangan *floating-point* adalah angka dengan titik desimal. `Infinity` positif adalah angka yang lebih besar daripada angka lainnya, sedangkan `-Infinity` adalah angka yang lebih kecil daripada angka lainnya. `NaN` (*Not a Number*) merepresentasikan nilai numerik yang tidak valid, seperti `string` `"Jessica"`.

## Operasi Aritmetika Umum

- **Operator Penjumlahan (`Addition Operator`)**: Operator ini (`+`) digunakan untuk menghitung jumlah dari dua angka atau lebih.
- **Operator Pengurangan (`Subtraction Operator`)**: Operator ini (`-`) digunakan untuk menghitung selisih antara dua angka.
- **Operator Perkalian (`Multiplication Operator`)**: Operator ini (`*`) digunakan untuk menghitung hasil kali dari dua angka atau lebih.
- **Operator Pembagian (`Division Operator`)**: Operator ini (`/`) digunakan untuk menghitung hasil bagi antara dua angka.
- **Pembagian dengan Nol**: Jika Anda mencoba membagi dengan nol, `JavaScript` akan mengembalikan `Infinity`.
- **Operator Sisa Bagi (`Remainder Operator`)**: Operator ini (`%`) mengembalikan sisa hasil bagi dari suatu pembagian.
- **Operator Perpangkatan (`Exponentiation Operator`)**: Operator ini (`**`) memangkatkan satu angka dengan angka lainnya.

## Perhitungan dengan Number dan String

- **Penjelasan**: Ketika Anda menggunakan operator `+` dengan sebuah `number` dan sebuah `string`, `JavaScript` akan memaksa (`coerce`) `number` menjadi `string` dan menggabungkan kedua nilai tersebut (*concatenate*). Ketika Anda menggunakan operator `-`, `*`, atau `/` dengan sebuah `string` dan `number`, `JavaScript` akan memaksa `string` menjadi `number` dan hasilnya adalah sebuah `number`. Untuk `null` dan `undefined`, `JavaScript` memperlakukan `null` sebagai `0` dan `undefined` sebagai `NaN` dalam operasi matematika.

```javascript
const result = 5 + '10';

console.log(result); // "510"
console.log(typeof result); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
```

## Operator Precedence (Prioritas Operator)

- **Definisi**: `Operator precedence` menentukan urutan evaluasi operasi dalam suatu ekspresi. Operator dengan prioritas lebih tinggi dievaluasi sebelum operator dengan prioritas lebih rendah. Nilai di dalam tanda kurung akan dievaluasi terlebih dahulu dan perkalian/pembagian akan memiliki prioritas lebih tinggi daripada penjumlahan/pengurangan. Jika operator memiliki prioritas yang sama, maka `JavaScript` akan menggunakan `associativity`.

```javascript
const result = (2 + 3) * 4;

console.log(result); // 20

const result2 = 10 - 2 + 3;

console.log(result2); // 11

const result3 = 2 ** 3 ** 2;

console.log(result3); // 512
```

- **Definisi**: `Associativity` memberi tahu kita arah evaluasi suatu ekspresi ketika ada beberapa operator dari jenis yang sama. Ini menentukan apakah ekspresi harus dievaluasi dari kiri ke kanan (`left-associative`) atau kanan ke kiri (`right-associative`). Sebagai contoh, operator eksponen juga bersifat asosiatif dari kanan ke kiri:

```javascript
const result4 = 5 ** 4 ** 1; 

console.log(result4); // 625
```

## Operator Increment dan Decrement

- **Operator Increment**: Operator ini digunakan untuk menambah nilai sebesar satu. Notasi awalan (*prefix*) `++num` meningkatkan nilai `variable` terlebih dahulu, lalu mengembalikan nilai yang baru. Notasi akhiran (*postfix*) `num++` mengembalikan nilai `variable` saat ini terlebih dahulu, lalu menambahkannya.

```javascript
let x = 5;

console.log(++x); // 6
console.log(x); // 6


let y = 5;

console.log(y++); // 5
console.log(y); // 6
```

- **Operator Decrement**: Operator ini digunakan untuk mengurangi nilai sebesar satu. Notasi awalan dan notasi akhiran bekerja dengan cara yang sama seperti sebelumnya pada operator *increment*.

```javascript
let num = 5;

console.log(--num); // 4
console.log(num--); // 4
console.log(num); // 3
```

## Compound Assignment Operators

- **Addition Assignment Operator (`+=`)**: Operator ini melakukan penjumlahan pada nilai dan menetapkan hasilnya ke `variable`.
- **Subtraction Assignment Operator (`-=`)**: Operator ini melakukan pengurangan pada nilai dan menetapkan hasilnya ke `variable`.
- **Multiplication Assignment Operator (`*=`)**: Operator ini melakukan perkalian pada nilai dan menetapkan hasilnya ke `variable`.
- **Division Assignment Operator (`/=`)**: Operator ini melakukan pembagian pada nilai dan menetapkan hasilnya ke `variable`.
- **Remainder Assignment Operator (`%=`)**: Operator ini membagi suatu `variable` dengan angka yang ditentukan dan menetapkan sisa baginya ke `variable`.
- **Exponentiation Assignment Operator (`**=`)**: Operator ini memangkatkan suatu `variable` dengan angka yang ditentukan dan menetapkan kembali hasilnya ke `variable`.

## Boolean dan Equality (Kesetaraan)

- **Definisi Boolean**: `Boolean` adalah `data type` yang hanya dapat memiliki dua nilai: `true` atau `false`.
- **Equality Operator (`==`)**: Operator ini menggunakan `type coercion` sebelum memeriksa apakah nilai-nilainya sama.

```javascript
console.log(5 == '5'); // true
```

- **Strict Equality Operator (`===`)**: Operator ini tidak melakukan `type coercion` dan memeriksa apakah tipe dan nilainya sama.

```javascript
console.log(5 === '5'); // false
```

- **Inequality Operator (`!=`)**: Operator ini menggunakan `type coercion` sebelum memeriksa apakah nilai-nilainya tidak sama.
- **Strict Inequality Operator (`!==`)**: Operator ini tidak melakukan `type coercion` dan memeriksa apakah tipe dan nilainya tidak sama.

## Comparison Operators (Operator Perbandingan)

- **Greater Than Operator (`>`)**: Operator ini memeriksa apakah nilai di sebelah kiri lebih besar daripada nilai di sebelah kanan.
- **Greater Than or Equal Operator (`>=`)**: Operator ini memeriksa apakah nilai di sebelah kiri lebih besar dari atau sama dengan nilai di sebelah kanan.
- **Less Than Operator (`<`)**: Operator ini memeriksa apakah nilai di sebelah kiri lebih kecil daripada nilai di sebelah kanan.
- **Less Than or Equal Operator (`<=`)**: Operator ini memeriksa apakah nilai di sebelah kiri lebih kecil dari atau sama dengan nilai di sebelah kanan.

## Unary Operators

- **Unary Plus Operator**: Operator ini mengonversi operannya menjadi sebuah `number`. Jika operan sudah berupa `number`, nilainya tetap tidak berubah.

```javascript
const str = '42';
const num = +str;

console.log(num); // 42
console.log(typeof num); // number
```

- **Unary Negation Operator (`-`)**: Operator ini menegasikan operan.

```javascript
const num = 4;
console.log(-num); // -4
```

- **Logical NOT Operator (`!`)**: Operator ini membalikkan nilai `boolean` dari operannya. Jadi, jika operan bernilai `true`, ia menjadi `false`, dan jika bernilai `false`, ia menjadi `true`.

## Bitwise Operators

- **Bitwise AND Operator (`&`)**: Operator ini mengembalikan 1 pada setiap posisi bit di mana bit yang sesuai dari kedua operan adalah 1.
- **Bitwise AND Assignment Operator (`&=`)**: Operator ini melakukan operasi `bitwise AND` dengan angka yang ditentukan dan menetapkan kembali hasilnya ke `variable`.
- **Bitwise OR Operator (`|`)**: Operator ini mengembalikan 1 pada setiap posisi bit di mana bit yang sesuai dari salah satu atau kedua operan adalah 1.
- **Bitwise OR Assignment Operator (`|=`)**: Operator ini melakukan operasi `bitwise OR` dengan angka yang ditentukan dan menetapkan kembali hasilnya ke `variable`.
- **Bitwise XOR Operator (`^`)**: Operator ini mengembalikan 1 pada setiap posisi bit di mana bit yang sesuai dari salah satu operan, tetapi tidak keduanya, adalah 1.
- **Bitwise NOT Operator (`~`)**: Operator ini membalikkan representasi biner dari suatu angka.
- **Left Shift Operator (`<<`)**: Operator ini menggeser semua bit ke kiri sebanyak jumlah posisi yang ditentukan.
- **Right Shift Operator (`>>`)**: Operator ini menggeser semua bit ke kanan.

## Pernyataan Kondisional, Nilai Truthy, Nilai Falsy, dan Ternary Operator

- **`if/else if/else`**: Sebuah pernyataan `if` menerima sebuah kondisi dan menjalankan blok kode jika kondisi tersebut bernilai `truthy`. Jika kondisi tersebut bernilai `false`, maka ia berpindah ke blok `else if`. Jika tidak ada satu pun dari kondisi tersebut yang bernilai `true`, maka ia akan mengeksekusi klausa `else`. Nilai `truthy` adalah nilai apa pun yang menghasilkan `true` saat dievaluasi dalam konteks `Boolean` seperti pernyataan `if`. Nilai `falsy` adalah nilai yang dievaluasi menjadi `false` dalam konteks `Boolean`.

```javascript
const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}
```

- **Ternary Operator**: Operator ini sering digunakan sebagai cara yang lebih ringkas untuk menulis pernyataan `if else`.

```javascript
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`); // It's a sunny day!
```

## Binary Logical Operators

- **Logical AND Operator (`&&`)**: Operator ini memeriksa apakah kedua operan bernilai `true`. Jika keduanya bernilai `true`, maka ia akan mengembalikan nilai kedua. Jika salah satu operan bernilai `falsy`, maka ia akan mengembalikan nilai `falsy` tersebut. Jika kedua operan bernilai `falsy`, ia akan mengembalikan nilai `falsy` yang pertama.

```javascript
const result = true && 'hello';

console.log(result); // hello
```

- **Logical OR Operator (`||`)**: Operator ini memeriksa apakah setidaknya salah satu operan bernilai `truthy`.
- **Nullish Coalescing Operator (`??`)**: Operator ini hanya akan mengembalikan nilai jika nilai pertama adalah `null` atau `undefined`.

```javascript
const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
```

## Objek Math

- **`Math.random()` Method**: `Method` ini menghasilkan bilangan *floating-point* acak antara 0 (inklusif) dan 1 (eksklusif). Artinya, *output* yang dimungkinkan bisa bernilai 0, tetapi tidak akan pernah benar-benar mencapai 1.
- **`Math.max()` Method**: `Method` ini menerima sekumpulan angka dan mengembalikan nilai maksimumnya.
- **`Math.min()` Method**: `Method` ini menerima sekumpulan angka dan mengembalikan nilai minimumnya.
- **`Math.ceil()` Method**: `Method` ini membulatkan nilai ke atas ke bilangan bulat terdekat.
- **`Math.floor()` Method**: `Method` ini membulatkan nilai ke bawah ke bilangan bulat terdekat.
- **`Math.round()` Method**: `Method` ini membulatkan nilai ke bilangan bulat terdekat.

```javascript
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
```

- **`Math.trunc()` Method**: `Method` ini menghapus bagian desimal dari sebuah angka, hanya mengembalikan bagian bilangan bulatnya, tanpa pembulatan.
- **`Math.sqrt()` Method**: `Method` ini akan mengembalikan akar kuadrat dari suatu angka.
- **`Math.cbrt()` Method**: `Method` ini akan mengembalikan akar pangkat tiga dari suatu angka.
- **`Math.abs()` Method**: `Method` ini akan mengembalikan nilai absolut dari suatu angka.
- **`Math.pow()` Method**: `Method` ini menerima dua angka dan memangkatkan angka pertama dengan angka kedua.

## Method Number yang Umum

- **`isNaN()`**: `NaN` merupakan singkatan dari "Not-a-Number". Ini adalah nilai khusus yang merepresentasikan hasil numerik yang tidak dapat direpresentasikan atau tidak terdefinisi. Properti fungsi `isNaN()` digunakan untuk menentukan apakah suatu nilai adalah `NaN` atau bukan. `Number.isNaN()` menyediakan cara yang lebih andal untuk memeriksa nilai `NaN`, terutama dalam kasus di mana `type coercion` dapat menyebabkan hasil yang tidak diharapkan dengan fungsi `isNaN()` global.

```javascript
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false


console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
```

- **`parseFloat()` Method**: `Method` ini mengurai (*parse*) `argument` `string` dan mengembalikan bilangan *floating-point*. `Method` ini dirancang untuk mengekstrak angka dari awal sebuah `string`, bahkan jika `string` tersebut berisi karakter non-numerik setelahnya.
- **`parseInt()` Method**: `Method` ini mengurai `argument` `string` dan mengembalikan bilangan bulat (`integer`). `parseInt()` berhenti mengurai pada karakter non-digit pertama yang ditemuinya. Untuk bilangan *floating-point*, ia hanya mengembalikan bagian bilangan bulatnya. Jika tidak dapat menemukan bilangan bulat yang valid di awal `string`, ia mengembalikan `NaN`.
- **`toFixed()` Method**: `Method` ini dipanggil pada sebuah `number` dan menerima satu `argument` opsional, yaitu jumlah digit yang muncul setelah titik desimal. `Method` ini mengembalikan representasi `string` dari angka tersebut dengan jumlah tempat desimal yang ditentukan.

---
[⬅️ Sebelumnya](../7-understanding-comparisons-and-conditionals/2-what-are-switch-statements-and-how-do-they-differ-from-if-else-chains.md) | [Selanjutnya ➡️](../9-review-javascript-comparisons-and-conditionals/1-review-javascript-comparisons-and-conditionals.md)
