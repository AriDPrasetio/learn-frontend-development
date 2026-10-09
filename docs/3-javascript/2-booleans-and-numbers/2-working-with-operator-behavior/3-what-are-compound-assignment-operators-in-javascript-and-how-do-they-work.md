# Apa Itu Operator Compound Assignment di JavaScript, dan Bagaimana Cara Kerjanya?

Di JavaScript, semua operator aritmetika memiliki bentuk *compound assignment*. Operator *compound assignment* menyediakan singkatan ringkas untuk suatu operasi pada sebuah variabel yang diikuti dengan penyimpanan hasilnya ke dalam variabel yang sama. Operator ini menggabungkan operasi dan penugasan (*assignment*) menjadi bentuk yang lebih pendek seperti `x += y`, yang setara dengan menulis `x = x + y` tetapi tanpa mengulangi nama variabel. Alih-alih menulis sesuatu seperti ini:

```javascript
let num = 5;
num = num + 2;

console.log(num); // 7
```

Anda dapat menulis sesuatu seperti ini:

```javascript
let num = 5;
num += 2;

console.log(num); // 7
```

Perhatikan bagaimana `num += 2` menggabungkan langkah penjumlahan dan penugasan menjadi satu. Hal ini menghemat waktu dan mengurangi kekacauan dalam kode Anda. Mari kita pelajari lebih dalam operator *compound assignment* yang paling umum di JavaScript.

Seperti yang telah Anda lihat, operator `+=` memungkinkan Anda menambahkan suatu nilai ke variabel yang sudah ada. Ini dikenal sebagai operator penugasan penjumlahan (`addition assignment operator`). Operator penugasan penjumlahan mengambil nilai variabel saat ini, menambahkan angka yang ditentukan ke dalamnya, dan kemudian menetapkan kembali hasilnya ke variabel tersebut:

```javascript
let total = 10;
total += 5;

console.log(total); // 15
```

Seperti yang mungkin Anda duga, ada operator penugasan pengurangan (`subtraction assignment operator`) yang dilambangkan dengan `-=`. Operator penugasan pengurangan mengurangkan nilai yang ditentukan dari nilai variabel saat ini dan menetapkan kembali nilai baru tersebut ke variabel:

```javascript
let score = 20;
score -= 7;

console.log(score); // 13
```

Jika Anda tidak menggunakan penugasan pengurangan, Anda harus melakukan sesuatu seperti ini:

```javascript
let score = 20;
score = score - 7;

console.log(score); // 13
```

Operator penugasan perkalian (`multiplication assignment operator`) direpresentasikan oleh `*=`. Ini mengalikan nilai variabel saat ini dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel tersebut:

```javascript
let points = 5;
points *= 3;

console.log(points); // 15
```

Terakhir, ada operator penugasan pembagian (`division assignment operator`) yang dilambangkan dengan `/=`. Sama seperti yang lainnya, ini memungkinkan Anda membagi nilai variabel saat ini dengan angka yang Anda tentukan, lalu menetapkan kembali hasilnya ke variabel:

```javascript
let balance = 100;
balance /= 4;

console.log(balance); // 25
```

Ingatlah bahwa ada operator *compound assignment* untuk setiap operator di JavaScript. Jadi, selain empat yang sudah disebutkan, kita juga memiliki:

- **Operator penugasan sisa bagi (`remainder assignment operator`) (`%=`)**, yang membagi sebuah variabel dengan angka yang ditentukan dan menetapkan sisa baginya ke variabel tersebut.
- **Operator penugasan perpangkatan (`exponent assignment operator`) (`**=`)**, yang memangkatkan sebuah variabel dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel tersebut.
- **Operator penugasan *bitwise* AND (`bitwise AND assignment operator`) (`&=`)**, yang melakukan operasi *bitwise* AND dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel tersebut.
- **Operator penugasan *bitwise* OR (`bitwise OR assignment operator`) (`|=`)**, yang melakukan operasi *bitwise* OR dengan angka yang ditentukan dan menetapkan kembali hasilnya ke variabel tersebut.

---

## Pertanyaan

### Apa yang dimungkinkan oleh operator compound assignment di JavaScript?
- [ ] Melakukan operasi matematika tanpa mengubah nilai variabel.
- [x] Menyediakan cara yang lebih singkat untuk melakukan operasi pada variabel dan menetapkan kembali hasilnya ke variabel yang sama.
- [ ] Melakukan dua operasi berbeda sekaligus.
- [ ] Hanya melakukan penjumlahan dan pengurangan dalam satu baris kode.

### Apa yang dilakukan operator penugasan sisa bagi (%=) di JavaScript?
- [ ] Membagi sebuah variabel dengan angka yang ditentukan dan menetapkan hasil bagi (*quotient*) ke variabel tersebut.
- [ ] Mengalikan sebuah variabel dengan angka yang ditentukan dan menetapkan hasil kali ke variabel tersebut.
- [x] Membagi sebuah variabel dengan angka yang ditentukan dan menetapkan sisa baginya kembali ke variabel tersebut.
- [ ] Menambahkan sisa bagi dari suatu pembagian ke variabel tersebut.

### Apa yang terjadi saat Anda menjalankan kode let points = 5; points *= 3;?
- [ ] `points` dikalikan dengan 3, dan hasilnya ditambahkan ke nilai asli `points`.
- [ ] `points` dibagi dengan 3.
- [x] `points` dikalikan dengan 3, dan hasilnya (15) ditetapkan kembali ke `points`.
- [ ] `points` tetap tidak berubah.

---
[⬅️ Sebelumnya](2-how-do-the-increment-and-decrement-operators-work.md) | [Selanjutnya ➡️](../3-working-with-comparison-and-boolean-operators/1-what-are-booleans-and-how-do-they-work-with-equality-and-inequality-operators.md)
