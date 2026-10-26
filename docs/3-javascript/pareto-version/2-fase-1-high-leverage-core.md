# 🟢 2. Fase 1: High-Leverage Core

Fase ini mencakup **20% konsep inti** yang wajib dikuasai secara mendalam. Modul-modul ini adalah fondasi mutlak yang akan Anda gunakan setiap hari saat menulis kode JavaScript modern.

---

## 1. Variables, Data Types & Comparisons (Modul 1 & 2)

### Konsep Fundamental
- **Deklarasi Variabel Modern**:
  - `const`: Standar baku (*default*). Gunakan untuk semua `variable` yang referensinya tidak pernah berubah.
  - `let`: Gunakan hanya jika nilai variabel tersebut perlu diisi ulang (*reassigned*), misalnya pada pencacah perulangan.
  - `var`: Hindari penggunaan `var` dalam penulisan kode modern karena memiliki sifat *function scope* dan rentan menimbulkan efek *hoisting* yang membingungkan.
- **Tipe Data Primitif Esensial**:
  - `string`: Kumpulan teks karakter. Selalu utamakan penggunaan `template literal` (`` `Halo ${name}` ``) daripada penggabungan manual tanda tambah (`+`).
  - `number`: Tipe data angka (bilangan bulat maupun pecahan).
  - `boolean`: Bernilai `true` atau `false`.
  - `null`: Representasi ketiadaan nilai yang disengaja oleh *programmer*.
  - `undefined`: Nilai bawaan sistem saat sebuah `variable` dideklarasikan namun belum diisi nilai apa pun.
- **Kesetaraan & Logika**:
  - Selalu gunakan `strict equality` (`===`) dan `strict inequality` (`!==`) untuk mencegah konversi tipe data otomatis (*type coercion*) yang berbahaya.
  - Pahami 6 nilai `falsy` di JavaScript: `false`, `0`, `""` (string kosong), `null`, `undefined`, dan `NaN`. Nilai lainnya dianggap `truthy`.

```javascript
// ✅ Pola Praktik Standar
const API_URL = "https://api.example.com/v1";
let attemptCount = 0;

const userGreeting = `Selamat datang, Pengguna #${attemptCount + 1}`;
const isEligible = attemptCount < 3 && Boolean(API_URL);
```

---

## 2. Functions, Scope & Closures (Modul 3)

### Konsep Fundamental
- **Fungsi Deklarasi vs Arrow Function**:
  - `arrow function` (`const multiply = (a, b) => a * b;`) menyediakan sintaks yang ringkas dengan fitur *implicit return* untuk fungsi satu baris.
  - `arrow function` tidak memiliki nilai `this` sendiri (mengikat `this` dari lingkungan luarnya secara leksikal).
- **Scope & Closure**:
  - `block scope`: `variable` yang dideklarasikan dengan `const` atau `let` di dalam kurung kurawal `{}` tidak dapat diakses dari luar blok tersebut.
  - `closure`: Kemampuan sebuah `function` di dalam untuk mengingat dan mengakses `variable` dari *outer scope*-nya, bahkan setelah *outer function* selesai dieksekusi.

```javascript
// Contoh Praktis Mental Model Closure
function createCounter(initialValue = 0) {
  let count = initialValue; // Tersimpan privat di dalam closure
  return () => {
    count += 1;
    return count;
  };
}

const increment = createCounter(10);
console.log(increment()); // 11
console.log(increment()); // 12
```

---

## 3. Arrays & The Holy Trinity Methods (Modul 4 & 8)

Alih-alih menulis perulangan `for` imperatif secara berulang, 80% manipulasi koleksi data di dunia kerja diselesaikan menggunakan metode bawaan `Array.prototype`:

| Metode | Karakteristik | Nilai Kembalian (`Return Value`) |
| :--- | :--- | :--- |
| `map()` | Mentransformasikan setiap elemen menjadi wujud baru. | `array` baru dengan panjang yang sama. |
| `filter()` | Menyaring elemen berdasarkan pengujian kondisi `boolean`. | `array` baru yang elemennya lolos seleksi. |
| `reduce()` | Menggabungkan atau mengkalkulasi seluruh elemen menjadi satu entitas. | Nilai tunggal (angka, `string`, `object`, dll). |
| `find()` | Mencari satu elemen pertama yang cocok. | Elemen ditemukan atau `undefined`. |
| `includes()` | Memeriksa keberadaan sebuah nilai primitif. | `boolean` (`true` / `false`). |

```javascript
const products = [
  { id: 1, name: "Keyboard Mekanikal", price: 500000, inStock: true },
  { id: 2, name: "Mouse Gaming", price: 300000, inStock: false },
  { id: 3, name: "Monitor 24 Inci", price: 1500000, inStock: true }
];

// 1. Filter barang yang tersedia
const availableProducts = products.filter(item => item.inStock);

// 2. Format daftar nama produk (Transformasi data)
const productLabels = availableProducts.map(item => `${item.name} - Rp${item.price.toLocaleString()}`);

// 3. Hitung total nilai stok barang yang tersedia
const totalInventoryValue = availableProducts.reduce((sum, item) => sum + item.price, 0);

console.log(productLabels);
console.log(`Total Stok: Rp${totalInventoryValue.toLocaleString()}`);
```

---

## 4. Objects, Destructuring & Immutability (Modul 5)

Objek adalah tulang punggung dari representasi data API dan *state* antarmuka:

- **Destructuring**: Mengekstrak nilai properti langsung ke dalam variabel independen.
- **Spread Operator (`...`)**: Menyalin properti ke objek baru tanpa memodifikasi objek sumber (*immutability*).
- **Bracket Notation**: Gunakan tanda kurung siku `obj[dynamicKey]` saat nama properti berasal dari variabel dinamis.

```javascript
const userProfile = {
  id: "USR-101",
  fullName: "Budi Santoso",
  email: "budi@example.com",
  role: "member"
};

// Destructuring dengan default value
const { fullName, role, verified = false } = userProfile;

// Membuat salinan objek baru dengan properti yang diperbarui (Immutable Update)
const updatedProfile = {
  ...userProfile,
  role: "admin",
  lastLogin: new Date().toISOString()
};
```

---

## 5. DOM Manipulation & Event Handling (Modul 9)

Antarmuka web interaktif dibangun dengan memanipulasi struktur `DOM` (*Document Object Model*) dan merespons aksi pengunjung:

- **Seleksi Elemen**: Gunakan `document.querySelector(".target-class")` untuk memilih satu elemen, atau `document.querySelectorAll("button")` untuk kumpulan elemen.
- **Event Listener**: Dengarkan kejadian menggunakan `addEventListener("click", eventHandler)`.
- **Event Delegation**: Pasang satu `event listener` pada elemen pembungkus (*parent*) untuk menangani banyak elemen anak secara efisien.

```javascript
const todoList = document.querySelector("#todo-list");

// Menerapkan Event Delegation pada elemen pembungkus
todoList.addEventListener("click", (event) => {
  // Periksa apakah elemen yang diklik adalah tombol hapus
  if (event.target.classList.contains("btn-delete")) {
    const item = event.target.closest("li");
    item.remove();
  }
});
```

---

## 6. Asynchronous JavaScript: Fetch & Async/Await (Modul 25)

Operasi pengambilan data dari server web bersifat asinkron agar tidak memblokir antarmuka pengguna:

- `fetch()`: Mengirimkan permintaan HTTP ke server dan mengembalikan sebuah `Promise`.
- `async` / `await`: Sintaks yang membuat penulisan kode asinkron tampak teratur seperti kode sinkron.
- `try...catch`: Penanganan kesalahan wajib ketika koneksi internet terputus atau server mengembalikan galat.

```javascript
async function loadUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    // Periksa status HTTP (200-299)
    if (!response.ok) {
      throw new Error(`HTTP Error status: ${response.status}`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Terjadi kegagalan saat mengambil data pengguna:", error.message);
    return null;
  }
}
```

---

## ⚠️ Perangkap Umum (*Common Pitfalls*)

> [!WARNING] Jebakan Immutability pada Array
> Jangan pernah menggunakan metode mutasi langsung seperti `.push()`, `.splice()`, atau `.reverse()` pada *state* data utama. Gunakan `.map()`, `.filter()`, `.slice()`, atau `spread operator` untuk membuat salinan data baru.

> [!WARNING] Mengabaikan Pemeriksaan response.ok pada fetch()
> Perlu diingat bahwa `fetch()` **hanya akan melakukan reject Promise** jika terjadi gangguan jaringan fisik (*network failure*). Respons berstatus HTTP 404 (Not Found) atau 500 (Internal Server Error) tetap dianggap berhasil diselesaikan (*resolve*). Oleh karena itu, selalu periksa `if (!response.ok)` secara manual.

---

## ❓ Pertanyaan Evaluasi (Questions)

Manakah cara paling aman dan tepat untuk menyalin dan menambahkan item baru ke dalam `array` tanpa merusak data asli?

- [ ] `myArray.push(newItem);`
- [ ] `myArray = myArray + newItem;`
- [x] `const updatedArray = [...myArray, newItem];`
- [ ] `myArray.splice(0, 0, newItem);`

Mengapa kita harus menyertakan `await response.json()` setelah memanggil fungsi `await fetch()`?

- [ ] Agar peramban web dapat mengunduh seluruh file HTML dan CSS dari halaman server.
- [x] Karena pemanggilan `fetch()` mengembalikan aliran respons mentah (*stream response*), dan pembacaan isi konten JSON di dalamnya merupakan proses asinkron yang terpisah.
- [ ] Karena metode `response.json()` bertugas menutup koneksi TCP peramban dengan server.
- [ ] Karena `response.json()` adalah metode sinkron opsional yang hanya berfungsi di lingkungan Node.js.

---

[⬅️ Sebelumnya](1-roadmap-overview.md) | [Selanjutnya ➡️](3-fase-2-pragmatic-bridge.md)
