# Apa Itu Operator Logika Biner, dan Bagaimana Cara Kerjanya?

Operator logika biner (*binary logical operators*) membantu Anda mengevaluasi dua ekspresi dan mengembalikan hasil berdasarkan nilai kebenarannya (*truthiness*). Mari kita lihat tiga operator logika biner yang paling umum: *logical* AND, *logical* OR, dan operator *nullish coalescing*.

## Operator Logical AND

Operator *logical* AND direpresentasikan oleh ampersand ganda (`&&`). Operator ini memeriksa apakah kedua operan bernilai `true` dan mengembalikan sebuah hasil. Jika kedua operan bernilai *truthy*, operator ini mengembalikan nilai kedua, yaitu nilai yang ada di sebelah kanan:

```javascript
const result = true && 'hello';

console.log(result); // hello
```

Pada contoh di atas, teks `hello` dicetak ke konsol karena kedua operan bernilai `true`. Jika salah satu operan bernilai *falsy*, operator ini mengembalikan nilai *falsy* tersebut:

```javascript
const result = 0 && 3;

console.log(result); // 0
```

Karena `0` adalah nilai *falsy*, angka `0` dicetak ke konsol. Dan jika kedua operan bernilai *falsy*, operator ini mengembalikan nilai *falsy* yang pertama:

```javascript
const result = false && 0;

console.log(result); // false
```

Karena `false` adalah nilai *falsy*, maka `false` dicetak ke konsol. Operator *logical* AND sangat berguna ketika Anda ingin memeriksa beberapa kondisi dan memastikan bahwa semuanya bernilai `true` sebelum melanjutkan. Berikut contohnya:

```javascript
if (2 < 3 && 3 < 4) {
  console.log('The if block runs'); 
} else {
  console.log('The else block runs');
} 
```

Dalam kondisi tersebut, karena 2 lebih kecil dari 3 DAN 3 lebih kecil dari 4, kalimat `The if block runs` akan dicetak ke konsol.

## Operator Logical OR

Operator *logical* OR memeriksa apakah setidaknya salah satu dari operan bernilai *truthy*. Jika operan pertama bernilai *truthy*, ia mengembalikan nilai tersebut:

```javascript
const result = 'This is truthy' || false;

console.log(result); // This is truthy
```

Jika operan pertama bernilai *falsy* tetapi operan kedua bernilai *truthy*, nilai kedua akan dicetak ke konsol:

```javascript
const result = 0 || 'This is truthy';

console.log(result); // This is truthy
```

Sangat umum untuk menggunakan operator *logical* OR dalam pernyataan `if/else` seperti ini:

```javascript
let userInput;

if (userInput || 'Guest') {
  console.log('A user is present');
} else {
  console.log('No user detected');
}
```

Karena kita tidak menetapkan nilai ke variabel `userInput`, nilainya saat ini adalah `undefined`. Kondisi dalam pernyataan `if` memeriksa apakah variabel `userInput` atau string `Guest` bernilai *truthy*. Karena string `Guest` bernilai `true` dalam konteks boolean seperti ini, string `A user is present` akan dicetak ke konsol.

## Operator Nullish Coalescing

Operator *nullish coalescing* lebih canggih daripada *logical* OR dan *logical* AND. Direpresentasikan oleh tanda tanya ganda (`??`), operator ini membantu dalam skenario di mana Anda ingin mengembalikan nilai hanya jika nilai pertama adalah `null` atau `undefined`. Berikut adalah contoh bekerja dengan operator *nullish coalescing*:

```javascript
const result = null ?? 'default';

console.log(result); // default
```

Karena `null` adalah nilai *nullish*, string `default` akan dicetak ke konsol. Operator *nullish coalescing* sangat berguna dalam situasi di mana `null` atau `undefined` adalah satu-satunya nilai yang seharusnya memicu nilai cadangan (*fallback*) atau nilai bawaan (*default*). Berikut adalah contoh menangani pengaturan preferensi pengguna:

```javascript
const userSettings = {
  theme: null,
  volume: 0,
  notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
```

Pada contoh di atas, kita memiliki objek bernama `userSettings` yang berisi properti `theme`, `volume`, dan `notifications`. Kita mengakses `theme` menggunakan notasi titik (*dot notation*) seperti `userSettings.theme`. Anda akan mempelajari lebih lanjut tentang cara bekerja dengan objek dalam pelajaran mendatang. Karena `theme` pengguna saat ini disetel ke `null`, maka string `light` yang akan dicetak ke konsol.

---

## Pertanyaan

### Bagaimana cara kerja operator logical AND (&&)?
- [ ] Memeriksa apakah kedua operan bernilai `false`.
- [x] Memeriksa apakah kedua operan bernilai `true` dan mengembalikan sebuah hasil.
- [ ] Mengembalikan `true` jika salah satu operan bernilai `true`.
- [ ] Mengabaikan operan kedua.

### Apa yang dilakukan operator nullish coalescing (??)?
- [ ] Mengembalikan nilai pertama, terlepas dari apakah nilainya `null` atau `undefined`.
- [x] Mengembalikan nilai kedua hanya jika nilai pertama bernilai `null` atau `undefined`.
- [ ] Memeriksa apakah kedua nilai sama.
- [ ] Membandingkan dua nilai untuk pemaksaan tipe data (*type coercion*).

### Bagaimana cara kerja operator logical OR (||) di JavaScript?
- [ ] Memeriksa apakah kedua operan bernilai *truthy*.
- [ ] Mengembalikan `true` hanya jika kedua operan bernilai `false`.
- [x] Memeriksa apakah setidaknya salah satu dari operan bernilai *truthy*.
- [ ] Mengembalikan `true` hanya jika kedua operan bernilai *truthy*.

---
[⬅️ Sebelumnya](1-what-are-conditional-statements-and-how-do-if-else-if-else-statements-work.md) | [Selanjutnya ➡️](3-what-is-the-math-object-in-javascript-and-what-are-some-common-methods.md)
