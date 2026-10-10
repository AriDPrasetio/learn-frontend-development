# Review: JavaScript Comparisons and Conditionals

## Perbandingan dan Tipe Data null serta undefined

- **Perbandingan dan `undefined`**: Sebuah `variable` bernilai `undefined` ketika ia telah dideklarasikan tetapi belum diberi nilai (*value*). Ini adalah nilai *default* dari `variable` yang belum diinisialisasi dan `parameter` `function` yang tidak diberi `argument`. `undefined` dikonversi menjadi `NaN` dalam konteks numerik, yang membuat semua perbandingan numerik dengan `undefined` mengembalikan nilai `false`.

```javascript
console.log(undefined < 0); // false (NaN < 0 adalah false)
console.log(undefined >= 0); // false (NaN >= 0 adalah false)
```

- **Perbandingan dan `null`**: Tipe `null` merepresentasikan ketiadaan nilai yang disengaja. `null` dikonversi menjadi `0` dalam konteks numerik, yang dapat menghasilkan perilaku tak terduga dalam perbandingan numerik:

```javascript
console.log(null < 0); // false (0 < 0 adalah false)
console.log(null >= 0); // true (0 >= 0 adalah true)
```

- Saat menggunakan `equality operator` (`==`), `null` dan `undefined` hanya sama satu sama lain dan dirinya sendiri:

```javascript
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(undefined == NaN); // false
```

- Namun, saat menggunakan `strict equality operator` (`===`), yang memeriksa nilai dan tipe data tanpa melakukan `type coercion`, `null` dan `undefined` tidaklah sama:

```javascript
console.log(null === undefined); // false
```

## Pernyataan switch

- **Definisi**: Sebuah pernyataan `switch` mengevaluasi suatu ekspresi dan mencocokkan nilainya dengan serangkaian klausa `case`. Ketika kecocokan ditemukan, blok kode yang terkait dengan `case` tersebut dieksekusi. Pernyataan `break` harus ditempatkan di akhir setiap `case`, untuk menghentikan eksekusinya dan melanjutkan ke yang berikutnya. Klausa `default` adalah kasus opsional dan hanya dieksekusi jika tidak ada `case` lain yang cocok. Klausa `default` ditempatkan di akhir pernyataan `switch`.

```javascript
const dayOfWeek = 3; 

switch (dayOfWeek) {
  case 1:
    console.log("It's Monday! Time to start the week strong.");
    break;
  case 2:
    console.log("It's Tuesday! Keep the momentum going.");
    break;
  case 3:
    console.log("It's Wednesday! We're halfway there.");
    break;
  case 4:
    console.log("It's Thursday! Almost the weekend.");
    break;
  case 5:
    console.log("It's Friday! The weekend is near.");
    break;
  case 6:
    console.log("It's Saturday! Enjoy your weekend.");
    break;
  case 7:
    console.log("It's Sunday! Rest and recharge.");
    break;
  default:
    console.log("Invalid day! Please enter a number between 1 and 7.");
}
```

---
[⬅️ Sebelumnya](../8-review-javascript-math/1-review-javascript-math.md) | Selanjutnya ➡️
