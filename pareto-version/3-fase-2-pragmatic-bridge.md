# 🟡 3. Fase 2: The Pragmatic Bridge

Fase ini adalah **jembatan praktis** yang menghubungkan konsep dasar di Fase 1 dengan kebutuhan fitur aplikasi web di dunia nyata. Dengan menguasai fase ini, Anda dapat membangun aplikasi web yang utuh, persisten, aman, dan mudah diinspeksi.

---

## 1. LocalStorage & CRUD Architecture (Modul 17)

### Konsep Fundamental
Aplikasi web modern membutuhkan penyimpanan data lokal di peramban pengguna agar data tidak hilang saat halaman di-*refresh*. 

Pola `CRUD` (*Create, Read, Update, Delete*) adalah fondasi arsitektur sebagian besar aplikasi:
- `localStorage.setItem(key, value)`: Menyimpan data (wajib berupa `string`).
- `localStorage.getItem(key)`: Mengambil data string berdasarkan `key`.
- `localStorage.removeItem(key)`: Menghapus data spesifik.
- `JSON.stringify(object)`: Mengubah `object` / `array` menjadi teks JSON.
- `JSON.parse(jsonString)`: Mengurai kembali teks JSON menjadi `object` / `array` JavaScript.

```javascript
// Contoh Pola CRUD Mandiri pada LocalStorage
const STORAGE_KEY = "TASK_LIST_DATA";

// 1. CREATE & UPDATE (Simpan daftar tugas)
function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// 2. READ (Ambil daftar tugas saat inisialisasi aplikasi)
function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

// 3. DELETE (Hapus data jika pengguna melakukan reset)
function clearAllTasks() {
  localStorage.removeItem(STORAGE_KEY);
}
```

---

## 2. Form Validation & Basic Regex (Modul 12 & 13)

### Konsep Fundamental
Setiap formulir di halaman web harus divalidasi sebelum datanya diproses atau dikirimkan ke server:

- **Pencegahan Muat Ulang Halaman**: Selalu sertakan `event.preventDefault()` pada penanganan kejadian formulir (`submit event`) agar halaman peramban tidak melakukan *refresh* otomatis.
- **Regular Expressions (Regex) Praktis**:
  - Gunakan metode `RegExp.prototype.test(string)` untuk mengevaluasi kecocokan pola teks.
  - Sinyal 20% Regex yang paling sering dipakai:
    - `^` : Awal teks.
    - `$` : Akhir teks.
    - `\d+` : Satu atau lebih digit angka.
    - `[a-zA-Z]` : Karakter huruf alfabet.
    - `^[^\s@]+@[^\s@]+\.[^\s@]+$` : Pola dasar validasi format email.

```javascript
const registrationForm = document.querySelector("#registration-form");
const emailInput = document.querySelector("#email-field");
const errorMessage = document.querySelector("#error-msg");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah reload halaman
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = emailInput.value.trim();

  if (!emailRegex.test(emailValue)) {
    errorMessage.textContent = "Format alamat email tidak valid!";
    errorMessage.classList.remove("hidden");
    emailInput.focus();
    return;
  }

  errorMessage.classList.add("hidden");
  console.log("Formulir valid! Mengirim data:", { email: emailValue });
});
```

---

## 3. Debugging JavaScript (Modul 11)

### Konsep Fundamental
Memperbaiki *bug* secara cepat adalah pembeda utama antara pengembang amatir dan profesional. Singkirkan kebiasaan hanya mengandalkan `console.log()` secara acak:

- **Console API Lanjutan**:
  - `console.table(dataArray)`: Menampilkan data `array` of `objects` dalam format tabel yang rapi di DevTools.
  - `console.dir(domElement)`: Menampilkan seluruh daftar properti dan metode dari sebuah elemen `DOM`.
  - `console.time("label")` dan `console.timeEnd("label")`: Mengukur durasi performa eksekusi sebuah blok kode.
- **Chrome DevTools & Breakpoints**:
  - Gunakan kata kunci `debugger;` di dalam kode untuk menghentikan sementara jalannya program pada titik tertentu.
  - Buka tab **Sources** pada peramban untuk memeriksa nilai `variable` pada setiap langkah eksekusi (*step-over*, *step-into*).

---

## 4. Web Accessibility / A11y (Modul 10)

### Konsep Fundamental
Aplikasi web harus dapat diakses dengan nyaman oleh pengguna dengan disabilitas maupun pengguna yang hanya menggunakan papan ketik:

- **WAI-ARIA Attributes**:
  - `aria-expanded="true/false"`: Memberitahu pembaca layar (*screen reader*) status buka/tutup menu akordion atau *dropdown*.
  - `aria-label`: Memberikan label deskriptif pada tombol yang hanya memiliki ikon visual tanpa teks.
  - `aria-hidden="true"`: Menyembunyikan elemen dekoratif visual dari pembaca layar.
- **Keyboard Navigation**:
  - Pastikan setiap elemen interaktif dapat dijangkau menggunakan tombol `Tab`.
  - Jangan pernah menghapus garis fokus papan ketik (`outline: none`) tanpa menyediakan gaya visual pengganti.

```html
<!-- Contoh Tombol Aksesibel -->
<button 
  id="menu-toggle"
  aria-expanded="false" 
  aria-controls="nav-menu"
  aria-label="Buka menu navigasi utama">
  <span class="icon-hamburger" aria-hidden="true">☰</span>
</button>
```

---

## 5. Classes & The `this` Keyword (Modul 18)

### Konsep Fundamental
Meskipun ekosistem frontend modern sangat didominasi oleh paradigma fungsi (*functional*), pemahaman dasar mengenai `class` penting saat bekerja dengan pustaka pihak ketiga:

- `class`: Cetak biru (*blueprint*) untuk menciptakan objek.
- `constructor()`: Metode khusus yang otomatis dijalankan saat sebuah objek baru dibuat dengan kata kunci `new`.
- `this`: Mengacu pada objek turunan (*instance*) yang sedang aktif mengeksekusi metode tersebut.

```javascript
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

const myCart = new ShoppingCart();
myCart.addItem({ name: "Buku", price: 75000 });
console.log(`Total Belanja: Rp${myCart.calculateTotal()}`);
```

---

## ❓ Pertanyaan Evaluasi (Questions)

Apa yang akan terjadi jika kita mencoba menyimpan objek JavaScript langsung ke `localStorage` tanpa memanggil `JSON.stringify()` terlebih dahulu?

- [ ] Objek akan otomatis tersimpan dalam format file biner terenkripsi.
- [ ] Peramban akan melempar galat fatal `SyntaxError` dan menghentikan seluruh script.
- [x] Nilai yang tersimpan akan dikonversi menjadi string `"[object Object]"`, sehingga seluruh data aslinya hilang.
- [ ] Objek akan otomatis terunggah ke basis data cloud peramban.

Mengapa kita harus menyertakan `event.preventDefault()` pada penanganan kejadian pengiriman formulir web (`submit event`)?

- [ ] Untuk membersihkan seluruh isi kolom teks secara otomatis.
- [x] Untuk mencegah peramban memuat ulang halaman (*page reload*) dan mengirimkan permintaan HTTP baku bawaan form HTML.
- [ ] Untuk mengaktifkan koneksi enkripsi SSL pada formulir.
- [ ] Karena JavaScript tidak mengizinkan pengiriman formulir tanpa fungsi tersebut.

---

[⬅️ Sebelumnya](2-fase-1-high-leverage-core.md) | [Selanjutnya ➡️](4-fase-3-deferred-theory.md)
