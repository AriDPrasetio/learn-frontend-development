# Apa Itu Method Chaining, dan Bagaimana Cara Kerjanya?

`Method chaining` adalah teknik di mana Anda memanggil beberapa `method` secara berurutan, satu demi satu. Anda dapat menggunakan `method chaining` pada berbagai jenis nilai dalam `JavaScript` termasuk `string`, `array`, dan `object`. Meskipun `string` adalah nilai `primitive`, `JavaScript` untuk sementara membungkusnya ke dalam sebuah `object` `String` ketika Anda menggunakan sebuah `string method`.

Mari kita lihat sebuah contoh menggunakan berbagai `string method`:

```javascript
const result = "  Hello, World!  "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");

console.log(result); // "hello, JavaScript!"
```

Dalam contoh ini, kita mulai dengan sebuah `string` dan melakukan tiga operasi secara berurutan: memotong spasi kosong (*trim whitespace*), mengubah ke huruf kecil (*lowercase*), dan mengganti `string` `world` dengan `JavaScript`. Setiap `method` mengembalikan sebuah `string` baru, yang kemudian menjadi target dari pemanggilan `method` berikutnya.

`Method chaining` dapat secara signifikan meningkatkan keterbacaan `code` (*code readability*) saat bekerja dengan operasi-operasi yang kompleks.

Sebagai contoh, perhatikan contoh berikut yang menggunakan `method` `filter`, `map`, dan `reduce`:

```javascript
const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === "credit")
  .map((transaction) => transaction.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCreditWithBonus); // 357.5
```

Dalam contoh ini, kita memiliki sebuah `array` transaksi di mana setiap `object` memiliki nilai jumlah (*amount*) dan tipe pembayaran berupa kartu kredit (*credit*) atau tunai (*cash*).

Pertama-tama, kita memfilter transaksi dan membuat sebuah `array` baru yang hanya berisi transaksi kartu kredit. Kemudian, kita merangkaikan `method` `map` ke hasil yang telah difilter tersebut dan untuk setiap jumlah transaksi, kita mengalikannya dengan `1.1` yang mewakili bonus sebesar `10%`.

Kemudian, kita mengambil hasil tersebut dan merangkaikan `method` `reduce` untuk menjumlahkan setiap nilai, yang menghasilkan angka `357.5`.

Meskipun `method chaining` dapat membuat `code` lebih ringkas dan mudah dibaca, penting untuk menggunakannya secara bijak.

Rangkaian rantai yang sangat panjang dapat menjadi sulit untuk di-*debug*, karena tidak langsung jelas langkah mana dalam rantai tersebut yang mungkin menyebabkan masalah. Sering kali merupakan praktik yang baik untuk memecah rantai yang sangat panjang menjadi beberapa langkah demi kejelasan yang lebih baik dan *debugging* yang lebih mudah.

Anda juga dapat merangkaikan `method` pada sebuah `object`. Dalam kasus ini, setiap `method` mengembalikan `this`, yang merujuk pada `object` saat ini, memungkinkan `method` berikutnya dalam rantai untuk berjalan di atasnya:

```javascript
const calculator = {
  total: 0,
  add(n) {
    this.total += n;
    return this;
  },
  multiply(n) {
    this.total *= n;
    return this;
  },
  subtract(n) {
    this.total -= n;
    return this;
  },
  getResult() {
    return this.total;
  }
};

const result = calculator.add(5).multiply(2).subtract(3).getResult();
console.log(result); // 7
```

Dengan cara ini, setiap `method` mengembalikan `object` yang sama, sehingga Anda dapat terus merangkaikan pemanggilan satu demi satu.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah output dari `code` berikut?

```javascript
let str = "  HELLO world  ";
let result = str.trim().toLowerCase().split(' ');
console.log(result);
```

- [ ] `["HELLO", "world"]`
- [x] `["hello", "world"]`
- [ ] `"hello world"`
- [ ] `[" HELLO", "world "]`

### Pertanyaan 2

Dalam konteks `method chaining`, apa yang biasanya harus dikembalikan oleh sebuah `method` untuk memungkinkan perangkaian lebih lanjut?

- [ ] `undefined`
- [ ] `null`
- [x] `Object` itu sendiri (`this`).
- [ ] Sebuah `object` baru.

### Pertanyaan 3

Apakah hasil dari `code` berikut?

```javascript
let obj = {
    value: 1,
    increment: function() {
        this.value++;
        return this;
    },
    double: function() {
        this.value *= 2;
        return this;
    },
    getValue: function() {
        return this.value;
    }
};

let result = obj.increment().double().increment().getValue();
console.log(result);
```

- [ ] `2`
- [ ] `3`
- [ ] `4`
- [x] `5`

---
[⬅️ Sebelumnya](5-what-is-the-reduce-method-and-how-does-it-work.md) | [Selanjutnya ➡️](7-how-does-the-sort-method-work.md)
