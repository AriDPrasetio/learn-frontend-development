# Rangkuman: Metode Modifikasi String

### ❓ Uji Ingatan:
1. Apa kegunaan dari metode `repeat()`?
2. Kesalahan (*error*) tipe apa yang akan dilemparkan jika kita memasukkan angka negatif pada metode `repeat()`?
3. Apakah metode `replace()` bersifat *case-sensitive* terhadap kata yang ingin diganti?
4. Berapa banyak bagian kata yang akan disubstitusi oleh metode `replace()` standar jika terdapat kata identik yang berulang-ulang?
5. Apa yang dibutuhkan agar `replace()` dapat mensubstitusi seluruh temuan kata secara total?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

Sama seperti metode sebelumnya, operasi di bawah ini mengembalikan _string_ baru tanpa mengganggu integritas memori string yang asli.

**1. Memperbanyak Teks dengan `repeat()`**
Berfungsi menyalin dan mengulangi string menjadi satu teks panjang sebanyak nilai `count` yang diinput.
- Contoh: `"Hi!".repeat(3)` menghasilkan `"Hi!Hi!Hi!"`.
- **Aturan ketat parameter**: Nilai `count` harus angka positif yang terhingga. Memasukkan angka negatif atau `Infinity` akan menyebabkan aplikasi melempar pesan kesalahan parah berupa `` `RangeError` ``. Angka desimal (seperti `2.5`) akan dibulatkan otomatis ke bawah, dan memasukkan nilai `0` akan mengembalikan string yang kosong melompong.

**2. Mengubah Isi Teks dengan `replace()`**
Berfungsi untuk menelusuri satu nilai spesifik, lalu menggantinya dengan nilai substitusi baru yang diberikan.
- Sintaks: `teks.replace(nilaiDicari, nilaiBaru)`.
- **Dua Karakteristik Bawaan**:
  1. Bersifat eksak (_case-sensitive_): Huruf besar dan kecil harus mutlak sama.
  2. Hanya mengganti temuan yang pertama (_first occurrence_). Jika kata yang dicari muncul berulang kali di dalam teks, sisa katanya akan diabaikan. Untuk mengganti keseluruhannya, lazim digunakan _Regular Expression_ (Regex).

</details>


---
[⬅️ Sebelumnya](10-js-string-formatting-methods-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | Selanjutnya ➡️
