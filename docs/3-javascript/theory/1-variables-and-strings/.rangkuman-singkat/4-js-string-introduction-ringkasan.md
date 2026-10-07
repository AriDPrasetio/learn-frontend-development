# Rangkuman: String dan Console Log

### ❓ Uji Ingatan:
1. Apa arti dari sifat *immutable* pada tipe data string?
2. Bagaimana cara yang tepat jika kita ingin mengubah teks yang ada di dalam variabel?
3. Apa fungsi operator `+` dan `+=` ketika digunakan pada string?
4. Jelaskan perbedaan konsep antara "Fungsi" dan "Metode"!
5. Mengapa perintah `console.log()` sangat esensial bagi pengembang?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

**1. Tipe Data String & Immutability**
String adalah tipe data primitif untuk menangani teks. Karakteristik paling penting dari string adalah sifatnya yang _immutable_ (tidak bisa diubah sebagian).
- Satu huruf saja tidak bisa diubah langsung (misal `nama[0] = 'M'`).
- Untuk mengubah teks, string baru wajib dibuat dan ditugaskan kembali ke variabel tersebut secara utuh (_reassignment_).

**2. Penggabungan String (Concatenation)**
Teks panjang atau kalimat dinamis dapat dirangkai dari beberapa string.
- **Operator `+`**: Menggabungkan dua atau lebih nilai string/variabel (contoh: `"Halo, " + namaUser`).
- **Operator `+=`**: Menambahkan atau menyisipkan teks baru secara bertahap di bagian ujung string yang sudah ada.
- Jangan lupa menambahkan karakter spasi `" "` secara manual agar kata-kata tidak menempel saat digabung.

**3. Fungsi (Function) vs Metode (Method)**
- **Fungsi**: Blok instruksi kode mandiri yang dapat digunakan berulang-ulang.
- **Metode**: Fungsi khusus yang terikat (menempel) pada sebuah objek (contoh: metode `concat()` terikat pada string).

**4. Pentingnya `console.log()`**
Metode bawaan objek konsol yang berfungsi untuk mencetak nilai variabel ke layar panel pengembang (_browser console_). Alat ini sangat vital untuk melacak aliran data dan mencari _bug_ (_debugging_). Banyak nilai bisa dicetak sekaligus dengan memisahkannya menggunakan tanda koma.

</details>


---
[⬅️ Sebelumnya](3-js-let-const-var-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](5-js-understanding-code-clarity-ringkasan.md)
