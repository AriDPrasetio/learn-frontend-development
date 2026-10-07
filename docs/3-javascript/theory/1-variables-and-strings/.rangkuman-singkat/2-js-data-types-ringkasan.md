# Rangkuman: Tipe Data Dasar

### ❓ Uji Ingatan:
1. Apa yang dimaksud dengan *Dynamic Typing* di JavaScript?
2. Sebutkan 7 tipe data primitif dan 1 tipe data non-primitif!
3. Apa perbedaan antara `undefined` dan `null`?
4. Apa yang dihasilkan jika kita mencoba membagi teks dengan angka?
5. Mengapa eksekusi `typeof null` merupakan sebuah anomali di JavaScript?

<details>
<summary><b>👁️ Lihat Rangkuman Jawaban</b></summary>

**1. Pengetikan Dinamis (Dynamic Typing)**
JavaScript tidak mengikat variabel secara kaku pada satu tipe data. Sebuah variabel bisa menyimpan teks (`string`) saat ini, lalu diubah menjadi angka (`number`) di baris berikutnya tanpa menyebabkan _error_. Hal ini fleksibel, namun butuh ketelitian.

**2. Delapan Tipe Data Utama**

- **7 Tipe Primitif** (Menyimpan satu nilai tunggal):
  - `string`: Teks diapit tanda petik.
  - `number`: Angka bulat maupun desimal. (Memiliki nilai khusus: `NaN` dan `Infinity`).
  - `bigint`: Angka bulat ekstra besar melebihi batas tipe `number`.
  - `boolean`: Nilai logika `true` (benar) atau `false` (salah).
  - `undefined`: Variabel sudah dibuat tapi belum diisi nilai bawaan.
  - `null`: Nilai kosong atau "tidak ada" yang sengaja diisi oleh pemrogram.
  - `symbol`: Pengenal unik pada objek.
- **1 Tipe Non-Primitif**:
  - `object`: Menyimpan koleksi data yang kompleks dalam bentuk kunci-nilai (_key-value pairs_).

**3. Keamanan Matematika & Operator `typeof`**

- Operasi matematis yang keliru (contoh: teks dibagi angka) tidak akan merusak sistem secara fatal, melainkan hanya menghasilkan `NaN` (_Not a Number_) yang bersifat menular.
- Operator `typeof` digunakan untuk mengetahui tipe data suatu nilai (misal: `typeof 10` menghasilkan `"number"`).
- **Catatan Bug:** Eksekusi `typeof null` akan mengembalikan `"object"`. Ini adalah keanehan bawaan JavaScript yang tidak diperbaiki demi kompatibilitas kode lawas.


[⬅️ Sebelumnya](1-js-variables-ringkasan.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](3-js-let-const-var-ringkasan.md)

</details>


