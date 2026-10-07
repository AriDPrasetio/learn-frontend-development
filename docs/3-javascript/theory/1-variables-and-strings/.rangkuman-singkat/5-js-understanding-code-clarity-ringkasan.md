# Rangkuman: Kejelasan Kode (Code Clarity)

### ❓ Uji Ingatan:
1. Apa tujuan utama dari penulisan komentar pada kode?
2. Mengapa kita disarankan menjelaskan "alasan", bukan sekadar "fungsi" saat menulis komentar?
3. Apa itu fitur *Automatic Semicolon Insertion* (ASI) di JavaScript?
4. Apa bahaya atau *bug* yang bisa terjadi jika kita terlalu mengandalkan ASI?
5. Bagaimana praktik terbaik terkait penggunaan titik koma (`;`)?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

**1. Penulisan Komentar**
Komentar digunakan untuk memberi catatan konteks bagi pembaca (atau diri sendiri di masa depan), dan diabaikan sepenuhnya oleh mesin saat program berjalan.
- **Baris tunggal**: Gunakan dua garis miring `//`.
- **Banyak baris**: Apit teks dengan `/*` dan `*/`.
- **Aturan Emas**: Jangan berikan komentar pada kode yang sudah sangat jelas (contoh: `let a = 5; // buat variabel a`). Gunakan komentar untuk menjelaskan **alasan (mengapa)** kode itu ditulis, bukan hanya **apa** fungsinya. Jika kode terlalu rumit dipahami, kodenya sebaiknya diperbaiki (_refactor_), bukan sekadar ditutupi dengan komentar panjang.

**2. Titik Koma (Semicolon)**
Titik koma (`;`) digunakan untuk menandai batas mutlak akhir dari sebuah pernyataan (_statement_) dalam JavaScript.
- JavaScript memiliki fitur _Automatic Semicolon Insertion_ (ASI) yang bisa menyisipkan titik koma secara gaib jika terlewat ditulis.
- **Bahaya ASI**: Mengandalkan ASI dapat memicu _bug_ aneh. Contoh: Jika baris baru dibuat setelah kata kunci `return`, ASI akan memutus fungsi di situ juga sehingga fungsi mengembalikan nilai `undefined`.
- **Praktik Terbaik**: Selalu tulis titik koma secara eksplisit di akhir setiap pernyataan agar tidak ada ambiguitas eksekusi.

</details>


---
[⬅️ Sebelumnya](4-js-string-introduction-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](6-js-dynamic-typing-and-typeof-operator-ringkasan.md)
