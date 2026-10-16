# Review: Working with Arrays

Dokumen review ini merangkum seluruh konsep penting, sintaksis, dan teknik manipulasi dasar `array` yang dipelajari pada sub-modul **Working with Arrays**.

---

## 1. Karakteristik Utama Array JavaScript

- **Definisi**: Sebuah `array` dalam `JavaScript` adalah koleksi nilai-nilai terurut (*ordered collection*), di mana masing-masing nilai diidentifikasi oleh sebuah `index` numerik.
- **Tipe Data Campuran**: Nilai di dalam `array` dapat berupa kombinasi berbagai macam `data type`, termasuk `number`, `string`, `boolean`, `object`, hingga `array` lainnya.
- **Penyimpanan Memori Berkesinambungan**: `Array` disimpan secara berdampingan dalam memori (*contiguous in memory*), memungkinkan pengindeksan yang sangat efisien dan akses elemen yang cepat berdasarkan nomor indeksnya.
- **Berbasis Indeks Nol (*Zero-Indexed*)**: Elemen pertama selalu berada pada indeks `0`, elemen kedua pada indeks `1`, dan seterusnya.
- **Properti `length`**: Digunakan untuk mengetahui jumlah total elemen yang tersimpan di dalam suatu `array`.
- **Dinamis dan Mutabel**: Ukuran `array` dapat bertambah atau berkurang secara fleksibel. Mendeklarasikan `array` dengan kata kunci `const` mengunci referensi variabel agar tidak dapat di-*reassign*, namun struktur dan isi elemen di dalamnya tetap bersifat `mutable` (dapat dimodifikasi).

```javascript
// Deklarasi array dengan berbagai tipe data
const mixedArray = ["Jessica", 28, true, { role: "Developer" }, [1, 2, 3]];

console.log(mixedArray[0]);      // "Jessica"
console.log(mixedArray.length); // 5
```

---

## 2. Mengakses dan Memperbarui Elemen Array

- **Akses Elemen**: Menggunakan notasi tanda kurung siku `array[index]`.
- **Indeks di Luar Rentang**: Jika Anda mengakses indeks yang tidak ada atau belum terdefinisi, `JavaScript` tidak melempar *error*, melainkan mengembalikan nilai `undefined`.
- **Memperbarui Elemen**: Gunakan operator penugasan (`=`) pada indeks target untuk menimpa nilai lama dengan nilai baru.
- **Peringatan *Sparse Array***: Menambahkan elemen baru pada nomor indeks yang jauh melompati nilai `length` saat ini akan menghasilkan celah kosong (*empty slots*) bernilai `undefined`, yang dapat menimbulkan perilaku tidak terduga pada program.

```javascript
const fruits = ["apple", "banana", "cherry"];

// Mengakses elemen
console.log(fruits[1]); // "banana"
console.log(fruits[5]); // undefined

// Memperbarui elemen
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]

// Menambahkan elemen pada indeks berikutnya
fruits[3] = "date";
console.log(fruits); // ["apple", "blueberry", "cherry", "date"]
```

---

## 3. Menambah dan Menghapus Elemen di Awal dan Akhir Array

Terdapat empat method bawaan utama untuk memanipulasi ujung-ujung `array`:

| Method | Posisi Operasi | Aksi | Nilai Kembalian (*Return Value*) |
| :--- | :--- | :--- | :--- |
| `push()` | Akhir `array` | Menambahkan satu atau lebih elemen | Panjang baru `array` (*new length*) |
| `pop()` | Akhir `array` | Menghapus satu elemen terakhir | Elemen yang dihapus (atau `undefined` jika kosong) |
| `unshift()` | Awal `array` | Menambahkan satu atau lebih elemen | Panjang baru `array` (*new length*) |
| `shift()` | Awal `array` | Menghapus satu elemen pertama | Elemen yang dihapus (atau `undefined` jika kosong) |

> [!NOTE]
> `push()` dan `unshift()` dapat menerima banyak argumen sekaligus untuk menambahkan beberapa elemen dalam satu pemanggilan, sedangkan `pop()` dan `shift()` hanya memproses satu elemen per pemanggilan.

```javascript
const desserts = ["cake", "cookies"];

// push: tambah ke akhir
const lengthAfterPush = desserts.push("pie", "ice cream");
console.log(lengthAfterPush); // 4
console.log(desserts);        // ["cake", "cookies", "pie", "ice cream"]

// pop: hapus dari akhir
const removedLast = desserts.pop();
console.log(removedLast); // "ice cream"

// unshift: tambah ke awal
desserts.unshift("donut");
console.log(desserts); // ["donut", "cake", "cookies", "pie"]

// shift: hapus dari awal
const removedFirst = desserts.shift();
console.log(removedFirst); // "donut"
console.log(desserts);     // ["cake", "cookies", "pie"]
```

---

## 4. Array Satu Dimensi dan Dua Dimensi

- **Array Satu Dimensi**: Koleksi linier tunggal (diibaratkan satu baris loker), diakses menggunakan satu indeks numerik tunggal: `array[index]`.
- **Array Dua Dimensi**: Pada dasarnya adalah sebuah `array` yang berisi `array` lain di dalamnya (*array of arrays*). Sangat ideal untuk merepresentasikan struktur data berbasis petak atau kisi (*grid*), seperti matriks, papan catur, tabel, atau piksel gambar.
- **Akses Elemen Dua Dimensi**: Memerlukan dua indeks berturut-turut: indeks pertama untuk baris (*row*), indeks kedua untuk kolom (*column*): `array[rowIndex][columnIndex]`.

```javascript
// Representasi petak papan catur sederhana
const chessboard = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];

// Mengakses baris ke-0 (paling atas), kolom ke-3
console.log(chessboard[0][3]); // "Q"
```

---

## 5. Array Destructuring

`Array destructuring` menyediakan sintaks ringkas dan ekspresif untuk mengekstrak (*unpacking*) nilai dari suatu `array` langsung ke dalam variabel-variabel terpisah.

- **Ekstraksi Dasar**: Memetakan elemen berdasarkan posisinya.
- **Melewati Elemen (*Skipping Elements*)**: Menggunakan koma kosong (`,`) untuk mengabaikan indeks elemen tertentu.
- **Nilai Default (*Default Values*)**: Menetapkan nilai cadangan jika posisi elemen bernilai `undefined` atau tidak tersedia pada `array` sumber.
- **Sintaks Rest (`...rest`)**: Mengumpulkan seluruh elemen yang tersisa ke dalam sebuah `array` baru. Sintaks *rest* harus selalu diletakkan pada posisi paling akhir di dalam pola *destructuring*.

```javascript
const colors = ["red", "green", "blue", "yellow", "purple"];

// Destructuring dasar, melewati elemen kedua, dan mengumpulkan sisa elemen
const [primary, , tertiary, ...otherColors] = colors;

console.log(primary);     // "red"
console.log(tertiary);    // "blue"
console.log(otherColors);  // ["yellow", "purple"]

// Destructuring dengan default value
const scores = [100];
const [math, physics = 75] = scores;

console.log(math);    // 100
console.log(physics); // 75 (menggunakan nilai default)
```

---

## 6. Membalikkan String Menggunakan Method String dan Array

Karena tipe data `string` dalam `JavaScript` bersifat `immutable` (tidak dapat diubah langsung di tempat), membalikkan susunan karakter sebuah `string` dilakukan dengan memanfaatkan kolaborasi method `string` dan `array`.

Alur proses 3 langkah:
1. **Pecah String (`split`)**: Menggunakan `str.split("")` untuk memecah `string` menjadi `array` karakter.
2. **Balikkan Array (`reverse`)**: Menggunakan `arr.reverse()` untuk membalikkan urutan elemen `array` secara *in-place*.
3. **Gabungkan Kembali (`join`)**: Menggunakan `arr.join("")` untuk merekatkan seluruh elemen `array` kembali menjadi sebuah `string` baru.

```javascript
const originalWord = "frontend";

// Pemanggilan berantai (method chaining)
const reversedWord = originalWord.split("").reverse().join("");

console.log(reversedWord); // "dnetnorf"
```

---
[⬅️ Sebelumnya](6-how-can-you-use-string-and-array-methods-to-reverse-a-string.md) | [Selanjutnya ➡️](../2-working-with-common-array-methods/1-how-do-you-get-the-index-for-an-element-in-an-array-using-the-indexof-method.md)
