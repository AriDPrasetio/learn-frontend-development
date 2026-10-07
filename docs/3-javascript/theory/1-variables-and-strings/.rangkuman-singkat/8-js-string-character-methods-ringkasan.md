# Rangkuman: Metode Karakter String (ASCII)

### ❓ Uji Ingatan:
1. Bagaimana cara kerja komputer dalam membaca dan menyimpan huruf abjad?
2. Apa kaitan antara tabel standar ASCII dan sistem pengodean Unicode (UTF-16)?
3. Apa fungsi dari metode `charCodeAt()`?
4. Berikan satu contoh kasus di mana pengecekan nilai dengan `charCodeAt()` dapat dimanfaatkan!
5. Apa fungsi dari `String.fromCharCode()` dan bagaimana cara pemanggilannya?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

**1. Konsep Pengodean ASCII & Unicode**
Komputer tidak memahami teks; mesin membaca angka. Standar ASCII diciptakan untuk memetakan karakter (huruf, angka, simbol) menjadi nilai numerik universal (contoh: huruf "A" = 65, huruf "a" = 97). JavaScript menggunakan standar Unicode (UTF-16) di mana 128 karakter pertamanya identik persis dengan tabel ASCII.

**2. Membaca Kode Karakter dengan `charCodeAt()`**
Metode ini mengekstrak nilai angka numerik di balik sebuah karakter yang posisinya ditentukan oleh indeks.
- Cara pakai: `string.charCodeAt(indeks)`.
- Berguna saat suatu karakter ingin dianalisis (misal: memastikan apakah suatu karakter tergolong huruf besar atau angka, dengan cara membandingkan nilai numerik ASCII-nya).

**3. Membuat Karakter dari Angka dengan `String.fromCharCode()`**
Ini adalah kebalikan dari `charCodeAt()`. Metode ini berfungsi menerjemahkan angka numerik kembali menjadi teks (_string_).
- Cara pakai: `String.fromCharCode(angka_ASCII)`.
- Karena tidak terikat pada variabel string tertentu, metode ini dipanggil langsung dari objek global `String`.
- Berguna saat membangun karakter secara dinamis dari operasi komputasi.

</details>


---
[⬅️ Sebelumnya](7-js-work-with-string-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](9-js-string-search-and-slice-methods-ringkasan.md)
