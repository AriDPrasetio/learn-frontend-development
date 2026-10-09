# Apa yang Terjadi Saat Anda Mencoba Melakukan Perhitungan dengan Numbers dan Strings?

JavaScript adalah bahasa di mana hal-hal terkadang bekerja dengan cara yang mengejutkan, atau bahkan aneh. Salah satu kejutan tersebut terjadi ketika Anda mencampurkan angka (`numbers`) dan string (`strings`) dalam perhitungan. Hal pertama yang mungkin akan Anda coba adalah menjumlahkan sebuah angka dan string. Di JavaScript, operator `+` memiliki tugas ganda. Operator ini menangani penjumlahan aritmetika sekaligus penggabungan string (`string concatenation`), yang merupakan cara untuk menyatukan dua string.

Ketika Anda menggunakan `+` dengan sebuah angka dan sebuah string, JavaScript memutuskan untuk memperlakukan keduanya sebagai string dan menggabungkannya. Jika Anda memeriksa tipe hasilnya dengan operator `typeof`, Anda akan melihat bahwa hasilnya memang berupa string:

```javascript
const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string
```

Menurut Anda apa yang akan terjadi jika Anda menukar urutan antara 5 dan `'10'`?

```javascript
const result = '10' + 5;

console.log(result); // 105
console.log(typeof result); // string
```

Anda dapat melihat hal yang sama terjadi. JavaScript melihat sebuah string pada `'10'` dan sebuah angka pada 5, sehingga JavaScript mengonversi angka tersebut menjadi string dan menggabungkannya. Hal ini dikenal sebagai pemaksaan tipe data (`type coercion`). Pemaksaan tipe data (`type coercion`) adalah saat suatu nilai dari satu tipe data dikonversi menjadi tipe data lain.

Hal-hal menjadi lebih menarik ketika Anda mencoba melakukan operasi aritmetika lain seperti pengurangan, perkalian, atau pembagian dengan sebuah string dan angka. Dalam kasus ini, JavaScript mencoba mengonversi string menjadi angka sebelum melakukan perhitungan matematika – contoh lain dari `type coercion`! Inilah yang terjadi:

```javascript
const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number
```

Pada contoh di atas, JavaScript berhasil mengonversi string `'10'` atau `'20'` menjadi angka dan kemudian melakukan perhitungan. Hasilnya, `'10' - 5` menghasilkan 5, `'10' * 2` menghasilkan 20, dan `'20' / 2` menghasilkan 10.

Namun bagaimana jika string tersebut tidak menyerupai angka? Mari kita lihat apa yang terjadi dalam kasus itu:

```javascript
const subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = 'abc' * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number
```

Pada contoh di atas, string `'abc'` tidak merepresentasikan nilai numerik yang valid, sehingga JavaScript tidak dapat mengonversinya menjadi angka yang bermakna. Ketika konversi tersebut gagal, JavaScript mengembalikan `NaN`, yang merupakan singkatan dari "Not a Number". `NaN` adalah nilai khusus dari tipe `Number` yang merepresentasikan angka yang tidak valid atau tidak dapat direpresentasikan.

Bagaimana jika Anda melakukan operasi aritmetika dengan boolean (`true` atau `false`)? Mari kita lihat apa yang terjadi. JavaScript memperlakukan boolean sebagai angka dalam operasi matematika: `true` menjadi 1, dan `false` menjadi 0.

```javascript
const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string
```

Pada dua contoh pertama, `true + 1` menghasilkan 2, dan `false + 1` menghasilkan 1. Pada contoh ketiga, `'Hello' + true`, JavaScript mengonversi `true` menjadi string dan menggabungkannya dengan `'Hello'`, menghasilkan `'Hellotrue'`, yang merupakan sebuah string.

Untuk `null` dan `undefined`, JavaScript memperlakukan `null` sebagai 0 dan `undefined` sebagai `NaN` dalam operasi matematika:

```javascript
const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
```

JavaScript sering melakukan `type coercion`, secara otomatis mengonversi tipe data seperti angka, string, dan boolean dengan cara yang terkadang tidak terduga. Memahami konversi-konversi ini sangat penting untuk menghindari *bug* dan menulis kode yang tangguh dalam proyek Anda.

---

## Pertanyaan

### Apa yang terjadi saat Anda menjalankan kode berikut?
```javascript
const result = 3 + "19";
```
- [ ] JavaScript mengabaikan string dan hanya melakukan operasi pada angka.
- [ ] JavaScript melempar *error* ketika Anda mencoba mencampur string dan angka dalam aritmetika.
- [x] JavaScript mengonversi angka 3 menjadi string `"3"`, menggabungkan kedua string tersebut, dan menetapkan nilai `"319"` ke `result`.
- [ ] JavaScript mengonversi string `"19"` menjadi angka 19, melakukan operasi, dan menetapkan nilai 22 ke `result`.

### Apa yang terjadi saat Anda menjalankan kode berikut?
```javascript
const result = "6" - 4;
```
- [ ] Konversi gagal dan JavaScript mengembalikan `NaN`.
- [ ] JavaScript mengonversi angka 4 menjadi string `"4"`, menggabungkan kedua string tersebut, dan menetapkan nilai `"64"` ke `result`.
- [ ] Nilai `Infinity` ditetapkan ke `result`.
- [x] JavaScript mengonversi string `"6"` menjadi angka 6, melakukan operasi, dan menetapkan nilai 2 ke `result`.

### Apa yang terjadi saat Anda melakukan operasi aritmetika dengan boolean (true atau false) di JavaScript?
- [ ] JavaScript melempar *error*.
- [ ] JavaScript mengabaikan boolean dan hanya melakukan operasi pada angka.
- [x] JavaScript memperlakukan `true` sebagai 1 dan `false` sebagai 0 dalam operasi aritmetika.
- [ ] JavaScript mengonversi boolean menjadi string sebelum melakukan operasi.

---
[⬅️ Sebelumnya](2-what-are-the-different-arithmetic-operators-in-javascript.md) | [Selanjutnya ➡️](../2-working-with-operator-behavior/1-how-does-operator-precedence-work.md)
