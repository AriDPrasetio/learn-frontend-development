# Bagaimana Cara Membuat Baris Baru (Newline) dalam String dan Melakukan Escape pada String?

Saat bekerja dengan `strings` dalam `JavaScript`, ada kalanya Anda perlu menyertakan karakter khusus (`special characters`) yang jika tidak ditangani dapat disalahartikan oleh `JavaScript engine`.

Dua tugas umum melibatkan pembuatan baris baru (`newline`) di dalam sebuah `string` dan melakukan `escaping` pada karakter tertentu (seperti tanda kutip) untuk memastikan karakter tersebut muncul dengan benar.

Dalam banyak bahasa pemrograman, termasuk `JavaScript`, Anda dapat membuat baris baru (`newline`) dalam sebuah `string` menggunakan karakter khusus yang disebut `escape sequence`. `Escape sequence` yang paling umum untuk `newlines` adalah `\n`.

Sebagai contoh, jika Anda ingin memecah sebuah `string` menjadi beberapa baris, Anda akan menggunakan `\n` di tempat Anda ingin baris baru dimulai:

```javascript
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
```

`Escape sequence` `\n` memberi tahu `JavaScript` untuk menyisipkan jeda baris (*line break*) pada titik tersebut, yang menghasilkan `string` yang ditampilkan di beberapa baris.

Konsep penting lainnya saat bekerja dengan `strings` adalah *escaping characters*. Terkadang, Anda perlu menyertakan karakter dalam `string` Anda yang biasanya digunakan `JavaScript` untuk hal lain, seperti tanda kutip (`quotes`).

Jika Anda begitu saja menggunakan tanda kutip di dalam sebuah `string` tanpa me-`escape`-nya, itu dapat menyebabkan sebuah `error` karena `JavaScript` akan mengira Anda sedang mencoba mengakhiri `string` tersebut.

Sebagai contoh, ini akan menyebabkan sebuah `error`:

```javascript
let statement = "She said, "Hello!"";
```

`JavaScript` menjadi bingung karena mengira `string` berakhir setelah kata `"said,"` padahal Anda ingin tanda kutip di sekitar `"Hello!"` menjadi bagian dari `string`.

Untuk memperbaikinya, Anda dapat me-`escape` tanda kutip bagian dalam dengan menempatkan garis miring terbalik (`backslash`) (`\`) di depannya:

```javascript
let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
```

Garis miring terbalik (`backslash`) memberi tahu `JavaScript` untuk memperlakukan tanda kutip sebagai karakter literal, sehingga karakter tersebut muncul dengan benar di `output`.

Anda juga dapat me-`escape` karakter khusus lainnya, seperti `backslash` itu sendiri (`\\`), atau tanda kutip tunggal di dalam `string` yang dikelilingi oleh tanda kutip tunggal (`\'`).

Berikut contoh lain yang menggunakan tanda kutip tunggal:

```javascript
let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!
```

Dengan me-`escape` tanda kutip tunggal menggunakan `\'`, `JavaScript` tahu untuk menyertakannya sebagai bagian dari `string` alih-alih mengakhiri `string` lebih awal.

Melakukan `escape` dan membuat `newlines` sangat penting saat Anda memformat `output` atau menangani karakter khusus dalam `strings`. Teknik-teknik ini membantu Anda mencegah kesalahan dan memastikan teks Anda muncul persis seperti yang diharapkan.

## Pertanyaan (Questions)

Manakah dari `escape sequences` berikut yang akan Anda gunakan untuk membuat baris baru (`new line`) dalam sebuah `string`?

- `\\`
- `\t`
- `\n`
- `\"`

Mengapa perlu melakukan `escape` pada karakter tertentu di dalam sebuah `string`?

- Untuk melakukan operasi matematika pada `string`.
- Untuk menghindari `syntax errors` dan memastikan karakter khusus disertakan dalam `string`.
- Untuk menggabungkan dua `strings` yang berbeda menjadi satu.
- Untuk mengubah `string` menjadi huruf besar (`uppercase`).

Bagaimana cara Anda menyertakan tanda kutip tunggal secara benar di dalam sebuah `string` yang sudah dibungkus dengan tanda kutip tunggal?

- Gunakan tanda kutip tunggal di dalam tanda kutip ganda.
- Gunakan karakter `\` sebelum tanda kutip yang ingin Anda sertakan.
- Gunakan `\n` untuk memecah `string`.
- `JavaScript` tidak mengizinkan tanda kutip di dalam tanda kutip lainnya.

---
[⬅️ Sebelumnya](1-what-is-bracket-notation-and-how-do-you-access-characters-from-a-string.md) | [Selanjutnya ➡️](3-what-are-template-literals-and-what-is-string-interpolation.md)
