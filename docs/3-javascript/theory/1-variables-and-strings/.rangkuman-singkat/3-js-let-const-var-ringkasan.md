# Rangkuman: Penggunaan let, const, dan var

### ❓ Uji Ingatan:

1. Kapan situasi yang tepat untuk menggunakan `let`?
2. Mengapa `const` disarankan menjadi pilihan utama saat membuat variabel?
3. Apa syarat wajib saat mendeklarasikan variabel dengan `const`?
4. Apa yang terjadi jika kita mendeklarasikan ulang variabel dengan `let` di cakupan yang sama?
5. Apa bahaya utama dari menggunakan `var` terkait jangkauan cakupannya (_scope_)?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

**1. Kata Kunci `let`**
`let` digunakan saat nilai data diprediksi akan mengalami perubahan sepanjang berjalannya aplikasi.

- Mendukung _reassignment_ (penugasan ulang). Variabel dapat diisi nilai baru tanpa kata kunci deklarasi lagi.
- Jika dideklarasikan tanpa nilai, variabel akan otomatis bernilai `undefined`.
- Dilarang keras melakukan deklarasi ulang (_redeclaration_) dengan nama yang sama di area yang sama (memicu _SyntaxError_).

**2. Kata Kunci `const`**
`const` (konstanta) digunakan untuk wadah data yang nilainya bersifat absolut, tetap, dan permanen (_immutable_).

- Mencegah perubahan data tak disengaja. Jika nilai `const` dicoba untuk diubah, program akan melempar kesalahan.
- **Wajib inisialisasi**: Variabel `const` harus langsung diisi nilainya pada saat dideklarasikan, tidak boleh dibiarkan kosong.
- Jadikan `const` sebagai pilihan pertama/utama saat menulis variabel. Hanya ubah ke `let` jika nilai tersebut benar-benar butuh diubah nanti.

**3. Mengapa Menghindari `var`?**

- `var` adalah peninggalan sintaks masa lalu sebelum JavaScript modern (ES6).
- `var` sangat tidak direkomendasikan karena jangkauan cakupannya (_scope_) terlalu luas dan mengizinkan pemrogram melakukan deklarasi ulang (_redeclaration_) tanpa peringatan _error_, sehingga sangat rawan menimbulkan _bug_ logika yang sulit dilacak.

</details>

---

[⬅️ Sebelumnya](2-js-data-types-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](4-js-string-introduction-ringkasan.md)
