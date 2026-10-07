# Rangkuman: Metode Pemformatan String

### ❓ Uji Ingatan:
1. Apa fungsi metode `toLowerCase()` dan `toUpperCase()`?
2. Mengapa metode pengubahan kapitalisasi ini sangat vital saat mencocokkan validasi *input* dari pengguna?
3. Apa fungsi dari metode `trim()`?
4. Apakah metode `trim()` akan menghapus karakter spasi berlebih di celah antar-kata pada bagian tengah kalimat?
5. Sebutkan variasi lain dari metode `trim` jika pemotongan spasinya hanya dibutuhkan untuk satu sisi saja!

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

Metode di bawah ini digunakan untuk menstandardisasi bentuk teks dan mengembalikan string baru yang telah dirapikan tanpa mengubah variabel aslinya.

**1. Mengubah Kapitalisasi Huruf (Casing)**
- **`toUpperCase()`**: Menyulap seluruh huruf dalam teks menjadi huruf besar/kapital seluruhnya. Sangat cocok untuk menegaskan penekanan teks (seperti teks _header_ atau _badge_).
- **`toLowerCase()`**: Menyulap teks menjadi huruf kecil seluruhnya. Sangat disarankan untuk membersihkan _input_ pengguna sebelum dicocokkan (_case-insensitive check_) agar data bisa terbaca secara konsisten oleh sistem.

**2. Membersihkan Ruang Kosong (Trimming Whitespace)**
Karakter _whitespace_ meliputi spasi tak terlihat, tab, dan jeda baris yang sering kali menyelusup di awal dan akhir ketikan pengguna (misal `" hello "`). Keberadaannya berpotensi mengacaukan kecocokan logika validasi data.
- **`trim()`**: Membuang spasi kosong di batas bagian depan sekaligus belakang string. Metode ini **tidak akan** menghapus spasi yang wajar di sela-sela kata.
- **`trimStart()`**: Hanya menghapus spasi ekstra di awalan teks.
- **`trimEnd()`**: Hanya menghapus spasi ekstra di ujung akhir teks.

</details>


---
[⬅️ Sebelumnya](9-js-string-search-and-slice-methods-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](11-js-string-modification-methods-ringkasan.md)
