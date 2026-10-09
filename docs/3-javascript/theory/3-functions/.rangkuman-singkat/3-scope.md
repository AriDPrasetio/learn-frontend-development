# 📖 Rangkuman: Scope dalam JavaScript

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Apa definisi dari `scope` dalam konteks JavaScript?</strong></summary><br>

`scope` merujuk pada visibilitas dan aksesibilitas `variable` di berbagai bagian `code`-mu. Ia menentukan di mana `variable` bisa diakses atau dimodifikasi.

</details><br>

<details><summary><strong>2. Mengapa penggunaan `global variable` (dalam `global scope`) sebaiknya dihindari atau diminimalisir?</strong></summary><br>

Mereka sebaiknya digunakan secukupnya karena dapat menyebabkan konflik penamaan dan membuat `code`-mu lebih sulit dikelola.

</details><br>

<details><summary><strong>3. Apa perbedaan utama antara `local scope` dan `block scope`?</strong></summary><br>

`local scope` merujuk pada `variable` yang hanya dapat diakses di dalam sebuah `function`. Sedangkan `block scope` merujuk pada `variable` yang dideklarasikan dengan `let` atau `const` yang hanya dapat diakses di dalam sebuah `block` bagian `code` di dalam kurung kurawal `{}` (seperti `if statement` atau `loop`).

</details><br>

<details><summary><strong>4. Sebutkan dua `keyword` deklarasi variabel di ES6 yang menerapkan aturan `block scope`!</strong></summary><br>

`keyword` `let` dan `const`.

</details><br>

<details><summary><strong>5. Mengapa memprioritaskan `block scope` dan `local scope` dianggap sebagai praktik yang aman?</strong></summary><br>

`local variable` membantu menjaga agar berbagai bagian dari `code`-mu tetap terisolasi. Sementara `block scoping` memberikan kontrol yang lebih halus terhadap aksesibilitas `variable`, membantu mencegah `error` dan membuat `code`-mu lebih dapat diprediksi.

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../3-scope.md)

---
[⬅️ Sebelumnya](2-arrow-functions.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](0-daftar-isi.md)
