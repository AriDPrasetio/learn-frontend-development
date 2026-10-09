# Bagaimana Cara Mengulang Sebuah String Sebanyak x Kali?

Saat bekerja dengan `JavaScript`, Anda mungkin menghadapi situasi di mana Anda perlu mengulang sebuah `string` beberapa kali tertentu.

Apakah Anda sedang membuat pola teks berulang atau sekadar menduplikasi teks, `method` `repeat()` menyediakan cara yang sederhana dan efektif untuk mencapainya.

`Method` `repeat()` adalah sebuah `built-in function` dalam `JavaScript` yang memungkinkan Anda mengulang sebuah `string` sejumlah kali yang ditentukan. Berikut adalah sintaks dasarnya:

```javascript
string.repeat(count);
```

`string` adalah `string` yang ingin Anda ulang, dan `count` adalah berapa kali Anda ingin `string` tersebut diulang. Berikut adalah sebuah contoh:

```javascript
let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"
```

Dalam hal ini, `string` `Hello!` diulang tiga kali, menghasilkan `Hello!Hello!Hello!`.

Meskipun `method` `repeat()` berguna, ada beberapa pengecualian dan batasan yang perlu diingat.

`Parameter` `count` harus berupa angka non-negatif. Jika Anda memasukkan angka negatif, `JavaScript` akan melempar `RangeError`.

```javascript
let word = "Test";
console.log(word.repeat(-1));  // Throws RangeError: Invalid count value
```

`Count` harus berupa bilangan berhingga (*finite number*). Jika Anda mencoba mengulang `string` sebanyak tak terhingga atau menggunakan `Infinity` sebagai `count`, Anda juga akan mendapatkan `RangeError`.

Dalam `JavaScript`, `Infinity` adalah `special value` yang merepresentasikan kuantitas tak terhingga. Ini digunakan untuk menunjukkan angka yang lebih besar dari bilangan berhingga mana pun.

```javascript
let word = "Test";
console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value
```

Jika `count` bukan bilangan bulat (`integer`) (seperti desimal `2.5`), `method` `repeat()` akan membulatkannya ke bawah ke bilangan bulat terdekat.

```javascript
let word = "Test";
console.log(word.repeat(2.5));  // "TestTest"
```

Jika Anda memasukkan `0` sebagai `count`, `method` `repeat()` akan mengembalikan sebuah `string` kosong.

```javascript
let word = "Test";
console.log(word.repeat(0));  // ""
```

`Method` `repeat()` dapat menyederhanakan tugas-tugas yang melibatkan duplikasi `string`, membuat `code` Anda lebih ringkas dan mudah dibaca.

Apakah Anda sedang membuat pola teks berulang atau mengisi ruang dengan karakter, `repeat()` dapat menghindarkan Anda dari keharusan menulis `loops` atau `code` yang lebih rumit.

Anda tidak terbatas hanya pada memasukkan angka secara langsung ke dalam `method` `repeat()`. Anda juga dapat meneruskan sebuah `variable` yang menyimpan `number value`.

```javascript
let count = 4;
let word = "Test";
let repeatedWord = word.repeat(count);
console.log(repeatedWord); // TestTestTestTest
```

Dalam contoh ini, `variable` `count` menyimpan jumlah pengulangan. Ini bisa berguna ketika jumlah pengulangan bergantung pada `user input` atau nilai dinamis lainnya dalam program Anda.

## Pertanyaan (Questions)

Apa hasil dari memanggil `"Hello".repeat(3);` dalam `JavaScript`?

- `"HelloHelloHello"`
- `"Hello Hello Hello"`
- `"Hello!"`
- `"HelloHello"`

Apa yang terjadi jika Anda mencoba memanggil `repeat()` dengan angka negatif?

- `String` diulang satu kali.
- `String` diulang sebanyak nilai mutlak dari angka negatif tersebut.
- `RangeError` dilemparkan.
- Sebuah `string` kosong dikembalikan.

Jika Anda memanggil `"*"`.repeat(0), apa `output`-nya?

- `"*"`
- `""`
- `null`
- `"*****"`

---
[⬅️ Sebelumnya](1-how-can-you-replace-parts-of-a-string-with-another.md) | Selanjutnya ➡️
