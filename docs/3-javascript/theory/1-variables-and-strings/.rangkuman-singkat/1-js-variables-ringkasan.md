# Rangkuman: Konsep Dasar Variabel

### ❓ Uji Ingatan:
1. Apa fungsi utama variabel dalam pemrograman?
2. Jelaskan perbedaan mendasar antara `let` dan `const`!
3. Mengapa penggunaan `var` sudah ditinggalkan?
4. Mengapa kita tidak boleh mendeklarasikan variabel secara implisit?
5. Sebutkan aturan baku dan praktik terbaik dalam penamaan variabel (termasuk konstanta)!

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

**1. Definisi dan Fungsi Variabel**
Variabel adalah wadah penyimpanan bernama di dalam memori komputer yang berfungsi menyimpan data dinamis selama program berjalan. Variabel memungkinkan pengembang melacak, membaca, dan memperbarui informasi (seperti skor atau profil pengguna) secara fleksibel tanpa merusak kode.

**2. Cara Mendeklarasikan Variabel**

- **`let`**: Digunakan untuk variabel yang nilainya bisa diubah (_reassignment_). Contoh: `let age = 25; age = 30;`.
- **`const`**: Digunakan untuk nilai tetap yang tidak boleh diubah. Wajib langsung diisi nilai. Contoh: `const MAX_SPEED = 100;`.
- **`var`**: Cara lama (_old-school_) yang sudah ditinggalkan karena memiliki cakupan (_scope_) yang rentan memicu _bug_.
- Jangan pernah mendeklarasikan variabel secara implisit (tanpa `var`, `let`, atau `const`). Selalu gunakan mode ketat (`"use strict"`) agar variabel liar langsung terdeteksi sebagai _error_.

**3. Aturan Penamaan (Naming Conventions)**

- Hanya boleh terdiri dari huruf, angka, garis bawah (`_`), dan dolar (`$`).
- **Tidak boleh** diawali dengan angka atau memakai kata kunci terlarang (seperti `let let = 5`).
- Bersifat _case-sensitive_ (membedakan kapital dan huruf kecil, `apple` beda dengan `APPLE`).
- **Praktik Terbaik:** Gunakan gaya _camelCase_ dengan nama berbahasa Inggris yang deskriptif (contoh: `currentUserName` lebih baik daripada `x`). Konstanta paten (_hard-coded_) menggunakan kapital semua (contoh: `COLOR_RED`).

</details>


---
⬅️ Sebelumnya | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](2-js-data-types-ringkasan.md)
