# Apa Itu Boolean, dan Bagaimana Cara Kerjanya dengan Operator Kesetaraan dan Ketidaksetaraan?

Pada pelajaran sebelumnya, Anda pertama kali diperkenalkan dengan konsep boolean, tetapi dalam pelajaran ini, kita akan mempelajari lebih dalam tentang cara kerja boolean dan bagaimana operator kesetaraan (*equality*) dan ketidaksetaraan (*inequality*) bekerja.

## Bekerja dengan Boolean

Boolean adalah tipe data yang hanya memiliki nilai `true` dan `false`. Mereka berguna karena memungkinkan Anda melakukan sesuatu berdasarkan kondisi tertentu. Boolean sangat penting ketika Anda ingin mengevaluasi apakah sesuatu harus terjadi atau tidak, seperti menentukan apakah seseorang dapat mengakses fitur tertentu di aplikasi Anda. Berikut adalah contoh penetapan nilai `true` ke variabel bernama `isOldEnoughToDrive`:

```javascript
let isOldEnoughToDrive = true;

console.log(isOldEnoughToDrive); // true
```

Anda dapat menggunakan variabel ini di dalam kondisional (*conditional*) seperti ini:

```javascript
let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
  console.log("You're old enough to drive"); // You're old enough to drive
} else {
  console.log("Sorry, you are not old enough to drive");
}
```

Kondisional membantu Anda membuat keputusan dalam kode berdasarkan suatu kondisi. Contoh ini menggunakan apa yang disebut pernyataan `if/else` (`if/else statement`).

Jika `isOldEnoughToDrive` bernilai `true`, maka kalimat `You're old enough to drive` akan dicetak ke konsol. Jika tidak, jika `isOldEnoughToDrive` bernilai `false`, maka kalimat `Sorry, you are not old enough to drive` yang akan dicetak ke konsol. Karena variabel `isOldEnoughToDrive` disetel ke `true`, maka kalimat pertama yang akan dicetak ke konsol. Anda akan mempelajari lebih lanjut tentang pernyataan `if/else` dalam pelajaran mendatang.

## Menggunakan Operator Kesetaraan (Equality Operators)

Untuk membandingkan dua nilai, Anda dapat menggunakan operator kesetaraan (`equality operator`) atau operator kesetaraan ketat (`strict equality operator`). Hasil dari perbandingan tersebut akan berupa boolean, baik `true` maupun `false`. Berikut adalah contoh penggunaan operator kesetaraan untuk membandingkan string dan angka. Operator kesetaraan direpresentasikan oleh tanda sama dengan ganda (`==`).

```javascript
console.log(5 == "5"); // true
```

Pada contoh ini, JavaScript mengonversi string `"5"` menjadi angka 5 dan kemudian memeriksa apakah keduanya sama. Karena kedua nilai sekarang sama, hasilnya adalah `true`. Operator kesetaraan menggunakan pemaksaan tipe data (`type coercion`) sebelum memeriksa apakah setiap nilai sama.

Ini berbeda dengan operator kesetaraan ketat (`strict equality operator`), yang tidak melakukan pemaksaan tipe data (`type coercion`). Operator kesetaraan ketat akan memeriksa apakah tipenya sama dan apakah nilainya sama. Berikut adalah contoh penggunaan operator kesetaraan ketat untuk membandingkan angka dan string. Operator ini direpresentasikan oleh tanda sama dengan tiga kali (`===`).

```javascript
console.log(5 === '5'); // false
```

Perbandingan berikut akan bernilai `false`, karena tipe data string tidak sama dengan tipe data angka.

## Menggunakan Operator Ketidaksetaraan (Inequality Operators)

Jika Anda perlu memeriksa apakah sesuatu tidak sama dengan nilai lain, maka Anda dapat menggunakan operator ketidaksetaraan (`inequality operator`) atau operator ketidaksetaraan ketat (`strict inequality operator`). Berikut adalah contoh penggunaan operator ketidaksetaraan (`!=`) untuk membandingkan angka dengan string.

```javascript
console.log(5 != "5"); // false
```

Pada contoh ini, hasilnya adalah `false` karena operator ketidaksetaraan terlebih dahulu mengonversi nilai string menjadi angka kemudian membandingkan nilainya. Karena nilainya menjadi sama, operator ini mengembalikan `false`. Jika Anda mencoba menggunakan operator ketidaksetaraan ketat, maka Anda akan mendapatkan hasil yang berbeda. Operator ketidaksetaraan ketat direpresentasikan oleh tanda seru yang diikuti oleh dua tanda sama dengan (`!==`).

```javascript
console.log(5 !== "5"); // true
```

Hasilnya adalah `true` karena operator ketidaksetaraan ketat tidak melakukan pemaksaan tipe data (`type coercion`). Karena angka 5 tidak sama dengan string `"5"`, maka hasilnya adalah `true`.

## Praktik Terbaik (Best Practices)

Merupakan praktik terbaik untuk menggunakan operator kesetaraan dan ketidaksetaraan ketat sebisa mungkin, karena operator tersebut tidak melakukan pemaksaan tipe data (`type coercion`). Sebagian besar waktu dalam proyek profesional, Anda akan melihat basis kode yang biasanya lebih memilih kedua operator ini daripada operator kesetaraan dan ketidaksetaraan biasa.

---

## Pertanyaan

### Apa kegunaan utama boolean di JavaScript?
- [ ] Untuk menyimpan angka dan string.
- [ ] Untuk melakukan operasi aritmetika.
- [x] Untuk merepresentasikan nilai `true` atau `false` dan membuat keputusan berdasarkan kondisi.
- [ ] Untuk melakukan perulangan pada array.

### Mengapa merupakan ide yang baik untuk menggunakan kesetaraan ketat (===) alih-alih kesetaraan biasa (==) di JavaScript?
- [ ] Karena mengonversi tipe data secara otomatis.
- [ ] Karena memungkinkan Anda membandingkan berbagai tipe tanpa masalah.
- [x] Karena memeriksa nilai dan tipenya sekaligus, memberikan hasil yang lebih mudah diprediksi.
- [ ] Karena lebih cepat daripada kesetaraan biasa.

### Apa yang terjadi saat Anda menggunakan kesetaraan biasa (==) di JavaScript?
- [ ] Hanya membandingkan nilai tanpa konversi tipe apa pun.
- [x] Melakukan pemaksaan tipe data (`type coercion`), mengonversi nilai ke tipe yang sama sebelum membandingkannya.
- [ ] Memeriksa nilai dan tipe sekaligus, seperti kesetaraan ketat (`===`).
- [ ] Melempar pesan *error* jika tipenya tidak cocok.

---
[⬅️ Sebelumnya](../2-working-with-operator-behavior/3-what-are-compound-assignment-operators-in-javascript-and-how-do-they-work.md) | [Selanjutnya ➡️](2-what-are-comparison-operators-and-how-do-they-work.md)
