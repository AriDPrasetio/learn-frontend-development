# Bagaimana Cara Mengubah Penggunaan Huruf Besar/Kecil (Casing) untuk Sebuah String?

Saat bekerja dengan `strings` dalam `JavaScript`, ada banyak situasi di mana Anda mungkin perlu menyesuaikan huruf besar/kecil (`casing`) dari teks, seperti mengubah semua huruf menjadi huruf besar (`uppercase`) untuk sebuah `heading` atau mengonversi teks menjadi huruf kecil (`lowercase`) untuk keseragaman.

Untungnya, `JavaScript` mempermudah hal ini dengan dua `built-in methods`: `toUpperCase()` dan `toLowerCase()`.

`Method` `toUpperCase()` mengonversi semua karakter menjadi huruf besar (`uppercase`) dan mengembalikan sebuah `string` baru dengan semua karakter huruf besar. Ini berguna ketika Anda ingin memberi penekanan pada teks atau membuat konsistensi dalam format `strings`.

Mari kita lihat sebuah contoh:

```javascript
let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);  // "HELLO, WORLD!"
```

Dalam `code` ini, `method` `toUpperCase()` mengubah seluruh `string` menjadi huruf besar.

`String` asli tetap tidak berubah karena `toUpperCase()` mengembalikan sebuah `string` baru, alih-alih memodifikasi `string` yang asli.

Di sisi lain, `method` `toLowerCase()` mengonversi semua karakter dalam sebuah `string` menjadi huruf kecil (`lowercase`). Ini berguna ketika Anda perlu menstandarisasi masukan, seperti saat membandingkan teks yang diberikan pengguna atau melakukan pemeriksaan yang tidak peka huruf besar/kecil (`case-insensitive checks`).

Mari kita lihat sebuah contoh:

```javascript
let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // "i am learning javascript!"
```

`Method` `toLowerCase()` mengonversi semua karakter menjadi huruf kecil, membuat `string` terlihat tidak terlalu agresif, sambil membiarkan `string` asli tidak berubah.

Secara ringkas, `methods` `toUpperCase()` dan `toLowerCase()` dalam `JavaScript` adalah alat yang ampuh untuk mengubah `strings` menjadi huruf besar atau kecil seluruhnya.

`Methods` ini sangat berguna untuk menstandarisasi masukan teks (`text input`), membuat perbandingan `case-insensitive`, dan memastikan konsistensi desain.

Dengan `methods` yang sederhana namun efektif ini, Anda dapat menangani manipulasi teks dengan cara yang lebih terkontrol dan dapat diprediksi.

## Pertanyaan (Questions)

Apa yang dilakukan `method` `toUpperCase()` ketika dipanggil pada sebuah `string` dalam `JavaScript`?

- Mengonversi hanya huruf pertama dari `string` menjadi huruf besar (`uppercase`).
- Mengonversi semua karakter dalam `string` menjadi huruf besar (`uppercase`).
- Mengonversi semua karakter dalam `string` menjadi huruf kecil (`lowercase`).
- Membalikkan urutan `string`.

Apa yang akan dihasilkan oleh `code` berikut?

```javascript
let phrase = "JavaScript is Fun!";
console.log(phrase.toLowerCase());
```

- `JAVASCRIPT IS FUN!`
- `JavaScript is fun!`
- `javascript is fun!`
- `Javascript Is Fun!`

Dalam skenario manakah kemungkinan besar Anda akan menggunakan `method` `toLowerCase()`?

- Ketika Anda ingin memastikan `user input` distandarisasi untuk perbandingan `case-insensitive`.
- Ketika Anda perlu mengubah huruf pertama dari setiap kata dalam kalimat menjadi huruf kapital.
- Ketika Anda ingin mengganti spasi dalam sebuah `string` dengan garis bawah (`underscores`).
- Ketika Anda ingin membalikkan karakter dalam sebuah `string`.

---
[⬅️ Sebelumnya](../7-working-with-string-search-and-slice-methods/2-how-can-you-extract-a-substring-from-a-string.md) | [Selanjutnya ➡️](2-how-can-you-trim-whitespace-from-a-string.md)
