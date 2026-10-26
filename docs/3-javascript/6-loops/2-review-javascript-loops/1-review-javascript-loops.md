# Review: JavaScript Loops

Dokumen review ini merangkum seluruh konsep penting, sintaksis, dan teknik manipulasi perulangan (`loops`) yang dipelajari pada modul **Loops**.

---

## Bekerja dengan Loops (Working with Loops)

- **`for` Loop**: Jenis `loop` ini digunakan untuk mengulang sebuah blok `code` beberapa kali. `Loop` ini terbagi menjadi tiga bagian: `statement` `initialization`, `condition`, dan `statement` `increment`/`decrement`. `Statement` `initialization` dieksekusi sebelum `loop` dimulai. Ini biasanya digunakan untuk menginisialisasi sebuah `counter variable`. `Condition` dievaluasi sebelum setiap `iteration` dari `loop`. Sebuah `iteration` adalah satu putaran tunggal melewati `loop`. Jika `condition` bernilai `true`, blok `code` di dalam `loop` dieksekusi. Jika `condition` bernilai `false`, `loop` berhenti dan Anda melanjutkan ke blok `code` berikutnya. `Statement` `increment`/`decrement` dieksekusi setelah setiap `iteration` dari `loop`. Ini biasanya digunakan untuk meningkatkan (`increment`) atau menurunkan (`decrement`) `counter variable`.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- **`for...of` Loop**: Jenis `loop` ini digunakan ketika Anda perlu melakukan perulangan terhadap nilai-nilai dari sebuah `iterable`. Contoh dari `iterables` adalah `arrays` dan `strings`.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
```

- **`for...in` Loop**: Jenis `loop` ini paling baik digunakan ketika Anda perlu melakukan perulangan terhadap `properties` dari sebuah `object`. `Loop` ini akan mengulang ke seluruh `enumerable properties` dari sebuah `object`, termasuk `inherited properties` dan `non-numeric properties`.

```javascript
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
```

- **`while` Loop**: Jenis `loop` ini akan menjalankan sebuah blok `code` selama `condition` bernilai `true`.

```javascript
let i = 5;

while (i > 0) {
  console.log(i);
  i--;
}
```

- **`do...while` Loop**: Jenis `loop` ini akan mengeksekusi blok `code` setidaknya satu kali sebelum memeriksa `condition`.

```javascript
let userInput;

do {
  userInput = prompt("Please enter a number between 1 and 10");
} while (Number(userInput) < 1 || Number(userInput) > 10);

alert("You entered a valid number!");
```

---

## Statement `break` dan `continue` (`break` and `continue` Statements)

- **Definisi**: Sebuah `statement` `break` digunakan untuk keluar dari sebuah `loop` lebih awal, sedangkan `statement` `continue` digunakan untuk melompati `iteration` saat ini dari sebuah `loop` dan berpindah ke `iteration` berikutnya.

```javascript
// Contoh break statement
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, dan 4

// Contoh continue statement 
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Output: 0, 1, 2, 3, 4, 6, 7, 8, dan 9
```

---

## Tugas (Assignment)

Tinjau kembali topik dan konsep `JavaScript` `Loops`.

---
[⬅️ Sebelumnya](../1-working-with-loops/5-what-are-the-break-and-continue-statements-used-for-in-loops.md) | Selanjutnya ➡️
