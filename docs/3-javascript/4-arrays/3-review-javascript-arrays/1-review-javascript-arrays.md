# Review: JavaScript Arrays

## Dasar-Dasar Array JavaScript

- **Definisi**: Sebuah `array` `JavaScript` adalah koleksi nilai yang terurut, masing-masing diidentifikasi oleh `index` numerik. Nilai-nilai dalam sebuah `array` `JavaScript` dapat berasal dari berbagai `data type` yang berbeda, termasuk `number`, `string`, `boolean`, `object`, dan bahkan `array` lainnya. `Array` disimpan secara berdampingan dalam memori (*contiguous in memory*), yang berarti bahwa semua elemen disimpan dalam satu blok lokasi memori yang bersambung (*continuous*), memungkinkan pengindeksan yang efisien dan akses cepat ke elemen-elemen berdasarkan `index`-nya.

```javascript
const developers = ["Jessica", "Naomi", "Tom"];
```

- **Mengakses Elemen Dari Array**: Untuk mengakses elemen dari sebuah `array`, Anda perlu merujuk ke `array` tersebut diikuti oleh nomor `index`-nya di dalam tanda kurung siku. `Array` `JavaScript` memiliki pengindeksan berbasis nol (*zero based indexed*) yang berarti elemen pertama berada pada `index` `0`, elemen kedua berada pada `index` `1`, dan seterusnya. Jika Anda mencoba mengakses sebuah `index` yang tidak ada pada `array` tersebut, maka `JavaScript` akan mengembalikan `undefined`.

```javascript
const developers = ["Jessica", "Naomi", "Tom"];
console.log(developers[0]); // "Jessica"
console.log(developers[1]); // "Naomi"

console.log(developers[10]); // undefined
```

- **Properti `length`**: `Property` ini digunakan untuk mengembalikan jumlah item di dalam sebuah `array`.

```javascript
const developers = ["Jessica", "Naomi", "Tom"];
console.log(developers.length); // 3
```

- **Memperbarui Elemen dalam Array**: Untuk memperbarui sebuah elemen dalam sebuah `array`, Anda menggunakan operator penugasan (*assignment operator*) (`=`) untuk menugaskan nilai baru ke elemen pada `index` tertentu.

```javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'blueberry';

console.log(fruits); // ['apple', 'blueberry', 'cherry']
```

## Array Dua Dimensi

- **Definisi**: Sebuah `array` dua dimensi pada dasarnya adalah sebuah `array` dari `array`. Ini digunakan untuk merepresentasikan data yang memiliki struktur seperti petak (*grid*) alami, seperti papan catur, *spreadsheet*, atau piksel dalam sebuah gambar. Untuk mengakses sebuah elemen dalam sebuah `array` dua dimensi, Anda memerlukan dua `index`: satu untuk baris dan satu untuk kolom.

```javascript
const chessboard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

console.log(chessboard[0][3]); // "Q"
```

## Array Destructuring

- **Definisi**: `Array destructuring` adalah fitur dalam `JavaScript` yang memungkinkan Anda mengekstrak nilai dari `array` dan menugaskannya ke `variable` dengan cara yang lebih ringkas dan mudah dibaca. Fitur ini menyediakan sintaks yang nyaman untuk membongkar (*unpacking*) elemen-elemen `array` ke dalam `variable` yang berbeda.

```javascript
const fruits = ["apple", "banana", "orange"];

const [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
```

- **Sintaks Rest**: Ini memungkinkan Anda untuk menangkap sisa elemen dari sebuah `array` yang belum didekonstruksi ke dalam sebuah `array` baru.

```javascript
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
const [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]
```

## Method Array Umum

- **Method `push()`**: `Method` ini digunakan untuk menambahkan elemen ke akhir `array` dan akan mengembalikan panjang `array` yang baru.

```javascript
const desserts = ["cake", "cookies", "pie"];
desserts.push("ice cream");

console.log(desserts); // ["cake", "cookies", "pie", "ice cream"];
```

- **Method `pop()`**: `Method` ini digunakan untuk menghapus elemen terakhir dari sebuah `array` dan akan mengembalikan elemen yang dihapus tersebut. Jika `array` tersebut kosong, maka `return value`-nya adalah `undefined`.

```javascript
const desserts = ["cake", "cookies", "pie"];
desserts.pop();

console.log(desserts); // ["cake", "cookies"];
```

- **Method `shift()`**: `Method` ini digunakan untuk menghapus elemen pertama dari sebuah `array` dan mengembalikan elemen yang dihapus tersebut. Jika `array` tersebut kosong, maka `return value`-nya adalah `undefined`.

```javascript
const desserts = ["cake", "cookies", "pie"];
desserts.shift();

console.log(desserts); // ["cookies", "pie"];
```

- **Method `unshift()`**: `Method` ini digunakan untuk menambahkan elemen ke awal `array` dan akan mengembalikan panjang `array` yang baru.

```javascript
const desserts = ["cake", "cookies", "pie"];
desserts.unshift("ice cream");

console.log(desserts); // ["ice cream", "cake", "cookies", "pie"];
```

- **Method `indexOf()`**: `Method` ini berguna untuk menemukan `index` pertama dari elemen tertentu di dalam sebuah `array`. Jika elemen tersebut tidak dapat ditemukan, maka ia akan mengembalikan `-1`.

```javascript
const fruits = ["apple", "banana", "orange", "banana"];
const index = fruits.indexOf("banana");

console.log(index); // 1
console.log(fruits.indexOf("not found")); // -1
```

- **Method `splice()`**: `Method` ini digunakan untuk menambahkan atau menghapus elemen dari posisi mana pun dalam sebuah `array`. `Return value` untuk `method` `splice()` akan berupa sebuah `array` dari item-item yang dihapus dari `array` tersebut. Jika tidak ada yang dihapus, maka sebuah `array` kosong yang akan dikembalikan. `Method` ini akan memutasi `array` asli, memodifikasinya di tempat (*in place*) alih-alih membuat `array` baru. Argumen pertama menentukan `index` di mana modifikasi `array` dimulai. Argumen kedua adalah jumlah elemen yang ingin Anda hapus. Argumen-argumen berikutnya adalah elemen-elemen yang ingin Anda tambahkan.

```javascript
const colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
```

- **Method `includes()`**: `Method` ini digunakan untuk memeriksa apakah sebuah `array` memuat nilai tertentu. `Method` ini mengembalikan `true` jika `array` memuat elemen yang ditentukan, dan `false` jika sebaliknya.

```javascript
const programmingLanguages = ["JavaScript", "Python", "C++"];

console.log(programmingLanguages.includes("Python")); // true
console.log(programmingLanguages.includes("Perl"));   // false
```

- **Method `concat()`**: `Method` ini membuat sebuah `array` baru dengan menggabungkan dua atau lebih `array`.

```javascript
const programmingLanguages = ["JavaScript", "Python", "C++"];
const newList = programmingLanguages.concat("Perl");

console.log(newList); // ["JavaScript", "Python", "C++", "Perl"]
```

- **Method `slice()`**: `Method` ini mengembalikan sebuah `array` baru yang memuat *shallow copy* dari sebagian `array` asli, yang ditentukan oleh `index` awal dan akhir. `Array` baru memuat referensi ke elemen yang sama dengan `array` asli (bukan duplikat). Ini berarti jika elemen-elemennya adalah nilai primitif (`primitives`, seperti `number` atau `string`), nilainya disalin; tetapi jika elemen-elemennya adalah `object` atau `array`, referensinya yang disalin, bukan `object` itu sendiri.

```javascript
const programmingLanguages = ["JavaScript", "Python", "C++"];
const newList = programmingLanguages.slice(1);

console.log(newList); // ["Python", "C++"]
```

- **Spread Syntax**: `Spread syntax` digunakan untuk membuat *shallow copy* dari sebuah `array`.

```javascript
const originalArray = [1, 2, 3];
const shallowCopiedArray = [...originalArray];

shallowCopiedArray.push(4);

console.log(originalArray);       // [1, 2, 3]
console.log(shallowCopiedArray); // [1, 2, 3, 4]
```

- **Method `split()`**: `Method` ini membagi sebuah `string` menjadi sebuah `array` dari `substring` dan menentukan di mana setiap pemisahan harus terjadi berdasarkan `separator` yang diberikan. Jika tidak ada `separator` yang diberikan, `method` ini mengembalikan sebuah `array` yang memuat `string` asli sebagai sebuah elemen tunggal.

```javascript
const str = "hello";
const charArray = str.split("");

console.log(charArray); // ["h", "e", "l", "l", "o"]
```

- **Method `reverse()`**: `Method` ini membalikkan sebuah `array` di tempat (*in place*).

```javascript
const desserts = ["cake", "cookies", "pie"];
console.log(desserts.reverse()); // ["pie", "cookies", "cake"]
```

- **Method `join()`**: `Method` ini menggabungkan (*concatenates*) semua elemen dari sebuah `array` menjadi sebuah `string` tunggal, dengan setiap elemen dipisahkan oleh sebuah `separator` yang ditentukan. Jika tidak ada `separator` yang diberikan, atau sebuah `string` kosong (`""`) digunakan, elemen-elemen tersebut akan digabungkan tanpa `separator` apa pun.

```javascript
const reversedArray = ["o", "l", "l", "e", "h"];
const reversedString = reversedArray.join("");

console.log(reversedString); // "olleh"
```

## Tugas (Assignment)

Tinjau topik dan konsep `array` `JavaScript`.

---
[⬅️ Sebelumnya](../2-working-with-common-array-methods/5-review-working-with-common-array-methods.md) | Selanjutnya ➡️
