# Catatan Belajar: JavaScript `variable` dan `string`

**Tujuan:** Catatan ini dirancang untuk direview secara `spaced repetition`. Fokus pada pemahaman konsep dasar `variable`, `data type`, dan manipulasi `string` dalam JavaScript.

---

## 1. Ringkasan Inti

### `variable` dan `declaration`

- **Konsep `variable`:** `variable` adalah wadah penyimpanan data dalam memori. Gunakan `let` untuk `variable` yang `value`-nya bisa diubah (`reassignment`), dan `const` untuk `value` yang tetap (`immutable`).
- **Hindari `var`:** Jangan gunakan `var` karena memiliki `scope` yang terlalu luas dan mengizinkan `redeclaration`, sehingga rawan `bug`.
- **Aturan Penamaan:** JavaScript bersifat `case-sensitive`. Gunakan format `camelCase` untuk nama `variable`, dan `uppercase` bergaris bawah (contoh: `COLOR_RED`) untuk `constant` `hard-coded`.
- **Kejelasan Kode & `debugging`:**
  - Selalu tulis titik koma (`;`) di akhir `statement` untuk mencegah jebakan `Automatic Semicolon Insertion` (ASI).
  - Jangan menulis `variable` tanpa `declaration` secara implisit; selalu gunakan `strict mode` (`"use strict"`).
  - **`comment`:** Gunakan `//` (satu baris) atau `/* */` (banyak baris) untuk menjelaskan konteks ("mengapa kode ditulis demikian"). Jangan gunakan `comment` untuk mendeskripsikan logika dasar ("bagaimana kode bekerja") yang seharusnya sudah jelas secara leksikal (`self-explanatory`).
  - **`debugging`:** Gunakan perintah `console.log()` secara ekstensif untuk memeriksa `value` `variable` dan menelusuri `execution flow` aplikasi di `console`.

### `data type` dan `dynamic typing`

- **`dynamic typing`:** JavaScript tidak mengikat `variable` pada satu `data type` secara kaku, melainkan dinamis saat eksekusi (`runtime`). Ini fleksibel namun meningkatkan risiko `bug` jika alokasi `data type` berubah tanpa disengaja.
- **8 `data type`:**
  - 7 `primitive`: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, `symbol`.
  - 1 `non-primitive`: `object`.
- **Operator `typeof`:** Menghasilkan `data type` dalam wujud `string`. Perhatian: `typeof null` menghasilkan `"object"` akibat cacat historis bawaan bahasa.

### Karakteristik dan Manipulasi `string`

- **`immutability`:** `string` bersifat `immutable`. Anda tidak dapat mengubah sebagian `character` secara langsung; Anda harus membuat/menimpa dengan `string` baru.
- **`concatenation`:** `string` dapat dirangkai menggunakan operator `+`, `+=`, atau `method` `concat()`. Jangan lupa menambahkan spasi manual `" "` di antara teks yang digabungkan agar tidak menempel.
- **`template literals`:** Penggunaan `backticks` (`` ` ``) mendukung pemformatan teks `multiline` otomatis dan `string interpolation` (`${expression}`). Ini adalah cara paling modern dibandingkan `concatenation` biasa.
- **`extraction` dan `escaping`:**
  - Gunakan `bracket notation` berbasis-nol (contoh: `teks[0]`) untuk mengambil `character` tunggal pada `index` tertentu.
  - Gunakan `backslash` (`\`) untuk melakukan `escaping` (mengakali) `special character`, misalnya `\n` untuk memutus baris menjadi `newline`.
- **Interaksi Pengguna:** Di sisi `browser`, fitur dialog `prompt()` dapat digunakan untuk meminta `input` teks dari pengguna. Fitur ini bersifat `blocking` (menghentikan eksekusi `script` sampai pengguna menutup dialog).
- **`character encoding`:** JavaScript berbasis Unicode (UTF-16). Gunakan `charCodeAt()` untuk membaca nomor ASCII/Unicode, dan `String.fromCharCode()` untuk membuat `character` dari nomor.
- **`method` `string` Penting (selalu menghasilkan `string` baru):**
  - **`search`:** `indexOf()` (me-`return` posisi `index`, -1 jika tidak ada) dan `includes()` (me-`return` `value` `true`/`false`). Keduanya `case-sensitive`.
  - **`slicing`:** `slice(startIndex, endIndex)` mengekstrak bagian `string`. `index` negatif menghitung dari belakang.
  - **Format Text:** `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`.
  - **Modification:** `replace(search, newValue)` (hanya mengganti temuan pertama secara default) dan `repeat(count)`.

---

## 2. Contoh Penggunaan

```javascript
"use strict";

// 1. Declaration, Immutability, dan Bracket Notation
const GREETING = "Hello";
let name = "JavaScript";
// name[0] = "j"; // TIDAK AKAN BEKERJA (String immutable)
console.log(name[0]); // Output: J (Mengambil index ke-0)

// 2. Concatenation Tradisional vs Template Literals
let manualConcat = GREETING + ", " + name + "!";
let message = `${GREETING}, ${name}!`; // (Disarankan)
console.log(message); // Output: Hello, JavaScript!

// 3. String Methods (menghasilkan string baru)
let dirtyText = "   belajar kode   ";
let cleanText = dirtyText.trim().toUpperCase();
console.log(cleanText); // Output: BELAJAR KODE

// 4. Search dan Extraction
let sentence = "Halo, selamat datang di dunia JavaScript";
console.log(sentence.includes("JavaScript")); // Output: true
console.log(sentence.slice(-10)); // Output: JavaScript (10 character dari belakang)

// 5. Escaping Character
let multiLine = "Baris 1\nBaris 2";
console.log(multiLine);
/* Output:
Baris 1
Baris 2
*/
```

---

## 3. Pertanyaan Terbuka untuk `spaced repetition`

Uji pemahaman Anda dengan menjawab pertanyaan-pertanyaan berikut tanpa melihat bagian ringkasan:

1. Mengapa penggunaan `declaration` `var` sangat tidak direkomendasikan pada penulisan JavaScript modern?
2. Apa yang dimaksud dengan `dynamic typing` dan apa risiko utamanya pada aplikasi berskala besar?
3. Sebutkan kelemahan historis dari operator `typeof` saat mengecek `data type` `null`.
4. `string` di JavaScript bersifat `immutable`. Apa implikasi dari karakteristik ini ketika kita ingin memodifikasi sebuah teks?
5. Mengapa fitur `Automatic Semicolon Insertion` (ASI) bisa berbahaya dan dianjurkan tetap menulis titik koma (`;`) secara manual?
6. Apa aturan (`best practice`) dalam menulis `comment` pada kode pemrograman?
7. Apa perbedaan sintaks dan fitur antara `concatenation` `string` dengan operator `+` dibandingkan dengan `template literals`?
8. Kapan waktu yang tepat untuk menggunakan `method` `includes()` dibandingkan `indexOf()`?
9. Bagaimana cara kerja `function` dialog `prompt()` dan apa efek sampingnya terhadap `execution flow` aplikasi di `browser`?
10. Bagaimana cara `method` `slice()` memproses pencarian `substring` apabila `argument parameter`-nya merupakan `value` `index` negatif?
11. Mengapa eksekusi kode `"JavaScript is awesome!".includes("Awesome")` menghasilkan `value` `false`?

---

## 4. Glosarium

- **ASI (`Automatic Semicolon Insertion`):** Fitur `JavaScript engine` yang secara otomatis menyisipkan titik koma pada akhir baris yang terlewat, namun rawan menghasilkan `bug`.
- **`backslash` (`\`):** Karakter `escape` yang dipakai untuk menyisipkan instruksi format teks khusus (seperti membuat `newline` `\n`).
- **`backticks` (`` ` ``):** Tanda kutip terbalik pembentuk `template literals` yang mendukung interpolasi `variable`/`expression` `multiline`.
- **`bracket notation` (`[]`):** Sintaks kurung siku berbasis `index` nol untuk mengakses secara langsung `character` tunggal di dalam `string`.
- **`camelCase`:** Gaya penamaan `variable` (contoh: `namaPengguna`) di mana kata pertama diawali huruf kecil dan kata berikutnya huruf kapital.
- **`dynamic typing`:** Kemampuan bahasa pemrograman mengubah `data type` pada suatu `variable` di waktu `runtime` tanpa perlu `declaration` kaku.
- **`immutability`:** Sifat suatu data yang `value`-nya tidak dapat diubah setelah diciptakan. Perubahan hanya bisa dilakukan dengan membuat alokasi memori/data baru.
- **`strict mode` (`"use strict"`):** Mode di JavaScript untuk menegakkan penulisan kode yang lebih ketat demi mencegah `bug` implisit.
- **`string interpolation`:** Proses penyisipan `variable` atau `expression` secara langsung ke dalam `string` (biasanya menggunakan sintaks `${}`).
- **`typeof`:** Operator bawaan untuk mendeteksi `data type` dari sebuah `value`.

---
**Navigasi Modul 1: Variables and Strings**
- Selanjutnya: [Variables](./1-js-variables.md) ??
