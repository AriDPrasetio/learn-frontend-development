# Review: JavaScript Functions

## Fungsi JavaScript

- `Function` adalah blok kode yang dapat digunakan kembali (*reusable*) yang melakukan tugas tertentu.
- `Function` dapat didefinisikan menggunakan kata kunci `function` yang diikuti dengan nama, daftar `parameter`, dan blok kode yang menjalankan tugas tersebut.

```javascript
function addNumbers(x, y, z) {
  return x + y + z;
}

console.log(addNumbers(5, 3, 8)); // Output: 16
```

- `Argument` adalah nilai yang diteruskan ke sebuah `function` saat ia dipanggil.
- Pemanggilan `function` (*function call*) adalah proses mengeksekusi sebuah `function` dalam suatu program dengan menentukan nama `function` yang diikuti oleh tanda kurung, secara opsional menyertakan `argument` di dalam tanda kurung tersebut.
- Ketika sebuah `function` selesai dieksekusi, ia akan selalu mengembalikan suatu nilai (*return value*).
- Secara *default*, `return value` dari sebuah `function` adalah `undefined`.
- Kata kunci `return` digunakan untuk menentukan nilai yang akan dikembalikan dari `function` dan mengakhiri eksekusi `function`.
- `Default parameter` memungkinkan `function` memiliki nilai yang telah ditentukan sebelumnya yang akan digunakan jika sebuah `argument` tidak disediakan saat `function` dipanggil. Hal ini membuat `function` lebih fleksibel dan mencegah *error* jika `argument` tertentu dihilangkan.

```javascript
const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + (amount * taxRate);
};

console.log(calculateTotal(100)); // Output: 105
```

- `Anonymous function` adalah `function` tanpa nama yang dapat ditetapkan ke `variable`. Dengan menetapkannya ke `variable`, Anda dapat menggunakannya kembali di mana saja `variable` tersebut dapat diakses.

```javascript
const multiplyNumbers = function(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
};

console.log(multiplyNumbers(4, 5)); // Output: 20
```

## Arrow Functions

- `Arrow function` adalah cara yang lebih ringkas untuk menulis `function` dalam `JavaScript`.

```javascript
const calculateArea = (length, width) => {
  const area = length * width;
  return `The area of the rectangle is ${area} square units.`;
};

console.log(calculateArea(5, 10)); // Output: "The area of the rectangle is 50 square units."
```

- Saat mendefinisikan sebuah `arrow function`, Anda tidak memerlukan kata kunci `function`.
- Jika Anda menggunakan satu `parameter`, Anda dapat menghilangkan tanda kurung di sekitar daftar `parameter`.

```javascript
const cube = x => {
  return x * x * x;
};

console.log(cube(3)); // Output: 27
```

- Jika badan `function` (*function body*) hanya terdiri dari satu ekspresi, Anda dapat menghilangkan tanda kurung kurawal dan kata kunci `return`.

```javascript
const square = number => number * number;

console.log(square(5)); // Output: 25
```

## Scope dalam Pemrograman

- **Global scope**: Ini adalah `scope` paling luar dalam `JavaScript`. `Variable` yang dideklarasikan dalam `global scope` dapat diakses dari mana saja di dalam kode dan disebut `global variable`.
- **Local scope**: Ini merujuk pada `variable` yang dideklarasikan di dalam suatu `function`. `Variable` ini hanya dapat diakses di dalam `function` tempat mereka dideklarasikan dan disebut `local variable`.
- **Block scope**: Sebuah `block` adalah sekumpulan `statement` yang diapit oleh tanda kurung kurawal `{}` seperti pada pernyataan `if`, atau `loop`.
- `Block scope` dengan `let` dan `const` memberikan kontrol yang lebih terperinci atas aksesibilitas `variable`, membantu mencegah *error* dan membuat kode Anda lebih dapat diprediksi.

---
[⬅️ Sebelumnya](../1-working-with-functions/3-scope.md) | Selanjutnya ➡️
