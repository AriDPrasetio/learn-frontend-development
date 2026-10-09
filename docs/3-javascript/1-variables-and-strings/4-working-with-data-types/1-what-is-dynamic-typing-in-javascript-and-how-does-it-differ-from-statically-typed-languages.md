# Apa Itu Dynamic Typing dalam JavaScript, dan Bagaimana Perbedaannya dengan Bahasa Statically Typed?

`JavaScript` adalah sebuah `dynamically typed language`, artinya Anda tidak perlu menentukan `data type` dari sebuah `variable` saat mendeklarasikannya. Sebaliknya, tipe tersebut ditentukan berdasarkan `value` yang ditetapkan ke `variable` saat program sedang berjalan. Ini memungkinkan Anda untuk mengubah tipe dari sebuah `variable` di seluruh program.

Mari kita lihat sebuah contoh:

```javascript
let example = "Hello";
example = 42;
```

Dalam contoh ini, kita memiliki sebuah `variable` bernama `example` dengan `data type` `string`. Namun kemudian kita memperbarui `value`-nya menjadi sebuah `number`.

Fleksibilitas dari `dynamic typing` membuat `JavaScript` lebih pemaaf dan mudah digunakan untuk `scripting` cepat, tetapi juga dapat menimbulkan `bugs` yang mungkin lebih sulit untuk ditangkap, terutama saat program Anda semakin besar.

Dalam `statically typed languages` seperti C# atau C++, Anda harus mendeklarasikan `data type` dari sebuah `variable` saat Anda membuatnya, dan tipe tersebut tidak dapat diubah.

Misalnya, jika Anda mendeklarasikan sebuah `variable` sebagai `integer`, Anda hanya dapat menetapkan nilai `integer` padanya. Jika Anda mencoba menetapkan tipe yang berbeda, program akan melempar `error`.

Berikut adalah contoh dalam bahasa C#:

```csharp
int data = 42; // data must always be an integer
data = "Hello"; // This would cause an error in C#
```

Perbedaan antara `dynamic typing` dan `static typing` terletak pada fleksibilitas versus keamanan `code` Anda. Bahasa yang bertipe dinamis (`dynamically typed languages`) menawarkan fleksibilitas tetapi dengan konsekuensi potensi `runtime errors`.

Bahasa yang bertipe statis (`statically typed languages`) menerapkan aturan yang lebih ketat yang dapat mencegah kesalahan tertentu, tetapi memerlukan lebih banyak deklarasi di awal dan menawarkan lebih sedikit fleksibilitas dalam mengubah tipe.

Berikut adalah contoh lain dari pembuatan sebuah `variable` dengan tipe yang disetel ke `number`, lalu mengubahnya kemudian menjadi bertipe `string`:

```javascript
let data = 100;  // Initially a number
data = "New data";  // Dynamically changes to a string
```

Dalam sebuah `statically typed language`, jenis perubahan seperti ini tidak akan diizinkan, karena `data type` akan bersifat tetap.

Sebagai kesimpulan, `dynamic typing` pada `JavaScript` memungkinkan `variables` untuk mengubah tipe secara bebas, yang menawarkan fleksibilitas tetapi dapat menyebabkan kesalahan tak terduga selama eksekusi.

Bahasa bertipe statis seperti Java mengharuskan Anda menentukan tipe `variable` di awal, yang membantu menangkap kesalahan sebelum program berjalan tetapi menawarkan lebih sedikit fleksibilitas.

## Pertanyaan (Questions)

Manakah dari berikut ini yang paling baik mendeskripsikan `dynamic typing` dalam `JavaScript`?

- Anda harus mendeklarasikan tipe dari `variable` sebelum menetapkan sebuah `value`.
- `Data type` dari sebuah `variable` ditentukan saat ia ditetapkan sebuah `value`.
- `Variables` hanya dapat menampung satu jenis data.
- `JavaScript` tidak mengizinkan perubahan tipe `variable` setelah dideklarasikan.

Apa perbedaan utama antara `dynamically typed languages` dan `statically typed languages`?

- `Dynamically typed languages` mengharuskan Anda mendeklarasikan tipe `variable` sebelum menetapkan `values`.
- `Statically typed languages` mengizinkan perubahan tipe `variable` pada saat `runtime`.
- `Statically typed languages` menerapkan tipe `variable` yang tetap.
- `Dynamically typed languages` tidak mengizinkan `variable reassignment`.

Dalam `JavaScript`, apa yang terjadi jika Anda mendeklarasikan sebuah `variable` dan kemudian menetapkan sebuah `value` dari tipe yang berbeda padanya?

- `JavaScript` akan melempar `compile-time error`.
- `Variable` akan berubah ke tipe yang baru tanpa `error`.
- `Variable` akan mempertahankan tipe aslinya dan mengabaikan `value` baru.
- Program akan mengalami *crash*.

---
[⬅️ Sebelumnya](../3-understanding-code-clarity/2-what-are-comments-in-javascript.md) | [Selanjutnya ➡️](2-how-does-the-typeof-operator-work-and-what-is-the-typeof-null-bug-in-javascript.md)
