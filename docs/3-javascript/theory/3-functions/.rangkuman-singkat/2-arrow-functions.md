# 📖 Rangkuman: Arrow Functions

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Apa perbedaan sintaks paling mencolok antara `regular function` dan `arrow function`?</strong></summary><br>

Sintaks `arrow function` menghilangkan penggunaan `keyword` `function` dan menggantinya dengan penambahan tanda panah (`=>`) antara `parameter` dan badan `function`.

</details><br>

<details><summary><strong>2. Kapan tanda kurung `()` pada `parameter` sebuah `arrow function` boleh dihilangkan?</strong></summary><br>

Jika daftar `parameter`-mu hanya memiliki satu `parameter` di dalamnya, maka kamu bisa menghapus tanda kurungnya. Namun jika `arrow function` milikmu tidak memiliki `parameter`, maka kamu harus menggunakan tanda kurung kosong `()`.

</details><br>

<details><summary><strong>3. Apa syarat mutlak agar sebuah `arrow function` dapat melakukan *return* secara implisit (`implicitly`)?</strong></summary><br>

Agar `arrow function` dapat mengembalikan sebuah `value` secara implisit (`implicitly`), kamu perlu memastikan badan `function`-mu hanya berisi satu baris `code`, lalu menghapus kurung kurawal `{}` dan `return statement`-nya.

</details><br>

<details><summary><strong>4. Apa yang terjadi jika kamu mencoba menghapus kurung kurawal pada `arrow function` satu baris namun tetap mempertahankan `return statement`?</strong></summary><br>

> [!WARNING]
> Kamu akan mendapatkan pesan `Uncaught SyntaxError: Unexpected token 'return'`. Alasan mengapa kamu mendapatkan `error` ini, adalah karena kamu perlu menghapus `return statement`. Saat kamu menghapus `return statement` tersebut, `error` akan menghilang dan `function` akan tetap `implicitly` mengembalikan perhitungan tersebut.

</details><br>

<details><summary><strong>5. Kapan sebaiknya kamu menggunakan sintaks `arrow function` dibandingkan `regular function`?</strong></summary><br>

Hal itu tergantung. Banyak `developer` menggunakannya secara konsisten dalam proyek pribadi mereka. Namun, saat bekerja di dalam tim, pilihan tersebut biasanya bergantung pada apakah `codebase` yang ada menggunakan `regular function` atau `arrow function`.

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../2-arrow-functions.md)

---
[⬅️ Sebelumnya](1-purpose-of-functions.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](3-scope.md)
