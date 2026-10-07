# Rangkuman: Bekerja dengan String

### ❓ Uji Ingatan:
1. Angka apa yang dikembalikan oleh metode `indexOf()` jika substring yang dicari tidak ditemukan?
2. Bagaimana cara mencetak baris baru (*newline*) dan menyisipkan tanda kutip literal ke dalam teks?
3. Apa keunggulan *Template Literals* (\` \`) dibandingkan penggunaan operator `+` biasa?
4. Bagaimana sintaks untuk mengakses/menyisipkan variabel di dalam *Template Literals*?
5. Bagaimana rumus praktis untuk mengakses huruf paling akhir dari sebuah string menggunakan *Bracket Notation*?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

**1. Pencarian dengan `indexOf()`**
Metode untuk melacak apakah sebuah urutan karakter (_substring_) ada di dalam teks, dan mencari tahu indeks awalnya.
- Jika ditemukan, angka indeks posisinya akan dikembalikan. Jika tidak, akan mengembalikan angka `-1`.
- Bersifat _case-sensitive_ (membedakan kapital/kecil).
- Parameter opsional kedua juga dapat diisi untuk menentukan titik awal indeks pencarian.

**2. Karakter Khusus (Escape Sequences)**
- Tambahkan kombinasi `\n` di dalam teks untuk memutus baris (membuat _newline_).
- Gunakan _backslash_ (`\`) tepat sebelum tanda kutip di dalam teks agar tanda kutip tersebut dibaca sebagai teks biasa, bukan sebagai simbol penutup string.

**3. Template Literals & Interpolasi**
- Dibuat menggunakan karakter _backtick_ (`` ` ``), bukan tanda petik biasa.
- Memungkinkan **_string interpolation_**: Menyisipkan variabel atau operasi matematika langsung ke dalam teks dengan format `${variabel}`, membuat kode jauh lebih bersih dari operator `+`.
- Mendukung pemformatan banyak baris secara natural tanpa memerlukan `\n`.

**4. Bracket Notation (Kurung Siku)**
Sintaks `[indeks]` digunakan untuk mengambil satu karakter spesifik berdasarkan posisinya. JavaScript menggunakan indeks berbasis nol (_zero-based_). Karakter awal adalah `teks[0]`, dan karakter paling akhir bisa diakses via `teks[teks.length - 1]`.

</details>


---
[⬅️ Sebelumnya](6-js-dynamic-typing-and-typeof-operator-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](8-js-string-character-methods-ringkasan.md)
