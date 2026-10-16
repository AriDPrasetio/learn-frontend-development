# Review: Working with Common Array Methods

Dokumen review ini merangkum seluruh konsep penting, sintaksis, dan implementasi manipulasi `array` menggunakan metode-metode bawaan yang dipelajari pada sub-modul **Working with Common Array Methods**.

---

## 1. Mencari Indeks Elemen dengan Method indexOf()

Method `indexOf()` digunakan untuk mencari indeks kemunculan pertama dari suatu elemen di dalam `array`.

- **Sintaks Dasar**:
  ```javascript
  array.indexOf(searchElement, fromIndex)
  ```
- **Parameter**:
  - `searchElement`: Nilai atau elemen yang ingin dicari di dalam `array`.
  - `fromIndex` *(opsional)*: Nomor indeks mulai pencarian. Jika diabaikan, pencarian akan selalu dimulai dari indeks `0`.
- **Nilai Kembalian (*Return Value*)**:
  - Mengembalikan nomor `index` (bilangan bulat non-negatif) jika elemen ditemukan.
  - Mengembalikan `-1` jika elemen tidak ditemukan di dalam `array`.

```javascript
const fruits = ["apple", "banana", "orange", "banana"];

// Menemukan kemunculan pertama
console.log(fruits.indexOf("banana")); // 1

// Elemen tidak ada dalam array
console.log(fruits.indexOf("grape")); // -1

// Pencarian mulai dari indeks tertentu
console.log(fruits.indexOf("banana", 2)); // 3
```

---

## 2. Menambah dan Menghapus Elemen dengan Method splice()

Method `splice()` adalah method mutasi serbaguna yang dapat menghapus, menyisipkan, atau mengganti elemen pada posisi mana pun di dalam `array` (termasuk bagian tengah).

- **Sintaks Dasar**:
  ```javascript
  array.splice(startIndex, itemsToRemove, item1, item2, ...)
  ```
- **Parameter**:
  - `startIndex`: Nomor indeks awal di mana modifikasi `array` dimulai.
  - `itemsToRemove` *(opsional)*: Jumlah elemen yang akan dihapus. Jika dihilangkan, seluruh elemen dari `startIndex` hingga akhir `array` akan dihapus.
  - `item1, item2, ...` *(opsional)*: Elemen-elemen baru yang akan disisipkan mulai dari posisi `startIndex`.
- **Nilai Kembalian (*Return Value*)**: Sebuah `array` baru yang berisi elemen-elemen yang dihapus. Jika tidak ada elemen yang dihapus, method mengembalikan `array` kosong (`[]`).
- **Efek Mutasi (*In-Place Mutation*)**: Memodifikasi `array` asli secara langsung di tempat alih-alih membuat salinan baru.

### Pola Penggunaan Umum splice():

```javascript
// 1. Menghapus elemen dari tengah
const fruits = ["apple", "banana", "orange", "mango", "kiwi"];
const removedItems = fruits.splice(2, 2);
console.log(fruits);       // ["apple", "banana", "kiwi"]
console.log(removedItems); // ["orange", "mango"]

// 2. Menyisipkan elemen tanpa menghapus (itemsToRemove = 0)
const colors = ["red", "blue"];
colors.splice(1, 0, "green", "yellow");
console.log(colors); // ["red", "green", "yellow", "blue"]

// 3. Mengganti elemen (hapus dan sisipkan sekaligus)
const numbers = [1, 2, 9, 10, 5];
numbers.splice(2, 2, 3, 4);
console.log(numbers); // [1, 2, 3, 4, 5]

// 4. Menghapus elemen tertentu berdasarkan nilainya (kolaborasi dengan indexOf)
const pets = ["cat", "dog", "parrot"];
const dogIndex = pets.indexOf("dog");
if (dogIndex !== -1) {
  pets.splice(dogIndex, 1);
}
console.log(pets); // ["cat", "parrot"]

// 5. Mengosongkan seluruh isi array
const list = [1, 2, 3, 4];
list.splice(0);
console.log(list); // []
```

> [!TIP]
> **Pertimbangan Performa**: Pada data `array` berukuran sangat besar, `splice()` pada indeks awal atau tengah dapat memakan biaya komputasi lebih tinggi karena `JavaScript engine` harus menggeser ulang memori seluruh elemen berikutnya. Untuk operasi di ujung `array`, pertimbangkan menggunakan `push()` / `pop()` atau `shift()` / `unshift()`.

---

## 3. Memeriksa Nilai dengan Method includes()

Method `includes()` adalah solusi cepat dan efisien untuk memeriksa apakah suatu `array` memuat nilai tertentu tanpa perlu mengetahui posisi indeksnya.

- **Sintaks Dasar**:
  ```javascript
  array.includes(valueToFind, fromIndex)
  ```
- **Nilai Kembalian (*Return Value*)**: Mengembalikan nilai `boolean` (`true` jika ditemukan, `false` jika tidak ditemukan).
- **Kesetaraan Ketat (*Strict Equality* `===`)**: Method ini membedakan tipe data secara presisi (contohnya angka `2` tidak sama dengan string `"2"`).
- **Peka Huruf (*Case-Sensitive*)**: Pada data bertipe `string`, huruf besar dan kecil dianggap berbeda.
- **Parameter `fromIndex` *(opsional)*: Menentukan indeks mulai pencarian nilai.

```javascript
const frameworks = ["React", "Vue", "Angular"];

console.log(frameworks.includes("Vue"));     // true
console.log(frameworks.includes("vue"));     // false (case-sensitive)
console.log(frameworks.includes("Svelte"));  // false

// Menguji tipe data ketat
const mixed = [10, "20", 30];
console.log(mixed.includes(20));   // false (tipe number dicari, array berisi string)
console.log(mixed.includes("20")); // true

// Menggunakan parameter fromIndex
const numbers = [1, 2, 3, 2, 5];
console.log(numbers.includes(2, 2)); // true (mencari angka 2 mulai dari indeks 2)
console.log(numbers.includes(2, 4)); // false
```

---

## 4. Konsep dan Pembuatan Shallow Copy pada Array

### Apa itu Shallow Copy?
*Shallow copy* (salinan dangkal) adalah sebuah `array` baru yang mereplikasi elemen-elemen tingkat teratas dari `array` sumber.
- **Nilai Primitif** (`number`, `string`, `boolean`, dll.): Disalin berdasarkan nilainya (*copy by value*). Perubahan nilai primitif pada salinan tidak akan mempengaruhi `array` asli.
- **Nilai Kompleks / Objek / Nested Array**: Disalin berdasarkan referensi memorinya (*copy by reference*). Modifikasi pada struktur objek/array bersarang akan terlihat pada kedua `array`.

### Mengapa Shallow Copy Penting?
Membuat salinan `array` sangat krusial sebelum menjalankan method mutatif seperti `splice()` atau `reverse()`, agar integritas data asli tetap terlindungi dari efek samping (*side effects*).

### 3 Cara Membuat Shallow Copy:

#### 1. Menggunakan Method concat()
Menggabungkan `array` kosong `[]` dengan `array` asli:
```javascript
const original = [1, 2, 3];
const copyConcat = [].concat(original);

console.log(copyConcat);          // [1, 2, 3]
console.log(copyConcat === original); // false (objek memori terpisah)
```

#### 2. Menggunakan Method slice()
Memanggil `slice()` tanpa argumen akan menduplikasi seluruh rentang elemen:
```javascript
const original = ["a", "b", "c"];
const copySlice = original.slice();

console.log(copySlice);          // ["a", "b", "c"]
console.log(copySlice === original); // false
```

#### 3. Menggunakan Spread Operator (...)
Pendekatan modern ES6 yang paling ringkas dan populer:
```javascript
const original = [10, 20, 30];
const copySpread = [...original];

copySpread.push(40);
console.log(original);   // [10, 20, 30] (tetap terjaga)
console.log(copySpread); // [10, 20, 30, 40]
```

---
[⬅️ Sebelumnya](4-what-is-a-shallow-copy-of-an-array-and-what-are-some-ways-to-create-these-copies.md) | [Selanjutnya ➡️](../3-review-javascript-arrays/1-review-javascript-arrays.md)
