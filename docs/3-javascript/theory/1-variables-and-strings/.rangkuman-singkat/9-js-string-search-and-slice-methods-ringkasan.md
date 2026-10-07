# Rangkuman: Metode Pencarian dan Pemotongan String

### ❓ Uji Ingatan:
1. Apakah metode `slice()` dan `includes()` mengubah atau merusak wujud string aslinya? Jelaskan!
2. Jika kita memanggil `slice(2, 5)`, apakah karakter pada indeks ke-5 akan diikutsertakan?
3. Bagaimana cara menggunakan `slice()` untuk mengambil 3 huruf paling akhir secara otomatis?
4. Kapan kita sebaiknya menggunakan `includes()` dibandingkan dengan `indexOf()`?
5. Tipe data apa yang secara absolut akan dikembalikan oleh metode `includes()`?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

Karena string bersifat _immutable_, metode-metode manipulasi di bawah ini sama sekali tidak merusak string asli, melainkan hanya mengembalikan versi atau nilai evaluasi yang baru. Keduanya juga membedakan huruf besar dan kecil (_case-sensitive_).

**1. Mengekstrak Potongan dengan `slice()`**
Digunakan untuk "memotong" dan mengambil sebagian teks dari string utama.
- **Sintaks**: `string.slice(startIndex, endIndex)`.
- `startIndex`: Posisi karakter awal pemotongan. Karakter ini akan diikutsertakan.
- `endIndex` (opsional): Batas akhir pemotongan. Karakter pada posisi ini tidak akan diikutsertakan. Jika tidak ditulis, pemotongan akan diteruskan hingga ujung akhir teks.
- **Kelebihan**: Mendukung penulisan indeks berbasis angka negatif untuk menghitung posisi karakter dari paling belakang string (contoh: `-4` mengambil empat huruf terakhir).

**2. Mengecek Keberadaan Teks dengan `includes()`**
Digunakan ketika konfirmasi iya/tidak tentang keberadaan suatu kata/karakter di dalam teks dibutuhkan, tanpa peduli di mana lokasinya.
- Mengembalikan nilai boolean murni: `true` jika kata ditemukan, dan `false` jika tidak.
- Berguna untuk logika kondisional dasar seperti memvalidasi _password_ (misalnya memastikan ada simbol tertentu) dengan lebih praktis daripada menggunakan `indexOf()`.

</details>


---
[⬅️ Sebelumnya](8-js-string-character-methods-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](10-js-string-formatting-methods-ringkasan.md)
