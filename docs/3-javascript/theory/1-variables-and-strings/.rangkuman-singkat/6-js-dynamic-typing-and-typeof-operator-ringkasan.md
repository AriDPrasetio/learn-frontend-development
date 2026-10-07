# Rangkuman: Pengetikan Dinamis & Operator typeof

### ❓ Uji Ingatan:
1. Apa fleksibilitas dan kelemahan utama dari sistem *Dynamic Typing*?
2. Bagaimana perbedaan *Dynamic Typing* dengan *Static Typing* terkait penanganan *error* saat kompilasi?
3. Apa fungsi dari operator `typeof`?
4. Kapan waktu yang paling sering untuk menggunakan operator `typeof` dalam sebuah logika aplikasi?
5. Nilai apa yang akan dikembalikan oleh `typeof null` dan mengapa JavaScript tidak memperbaikinya?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

**1. Pengetikan Dinamis (Dynamic Typing)**
JavaScript menganut sistem _Dynamic Typing_, di mana tipe data (seperti angka atau teks) tidak perlu dideklarasikan pada saat membuat variabel.
- Tipe data akan disematkan secara otomatis berdasarkan nilai yang diisi.
- Fleksibel: Variabel bebas berganti tipe sewaktu-waktu. (Awalnya berisi _number_, lalu ditimpa dengan _string_).
- Walaupun mempercepat penulisan skrip kecil, kebebasan ini menuntut kehati-hatian karena lebih rentan memunculkan _bug_ pada proyek berskala besar dibandingkan bahasa beraliran _Static Typing_ (seperti Java atau C#) yang langsung melempar _error_ jika tipe datanya tidak sesuai.

**2. Pemeriksaan dengan `typeof`**
Karena tipe data dapat berubah kapan saja, operator bawaan `typeof` hadir untuk mengevaluasi jenis data apa yang sedang dimuat oleh variabel.
- Cara pakai: `typeof nilai`. Hasilnya selalu berbentuk _string_ (misal: `"string"`, `"number"`, `"boolean"`).
- Operator ini sering digunakan untuk memvalidasi input sebelum memproses perhitungan matematika.

**3. Anomali "typeof null"**
Sebuah _bug_ historis terkenal pada JavaScript adalah ketika menjalankan instruksi `typeof null`. Seharusnya instruksi ini mengembalikan `"null"`, tetapi JavaScript justru mengembalikan `"object"`. Keanehan bawaan ini tidak pernah diperbaiki demi menjaga agar program web zaman dulu tidak rusak.

</details>


---
[⬅️ Sebelumnya](5-js-understanding-code-clarity-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](7-js-work-with-string-ringkasan.md)
