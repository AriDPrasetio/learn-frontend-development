# 🔴 4. Fase 3: The Deferred CS Topics

Fase ini memuat modul-modul kurikulum yang masuk ke dalam kategori **80% beban materi teoretis/ilmu komputer murni**. 

Materi di fase ini **BUKAN** berarti tidak berguna, melainkan memiliki **rasio daya ungkit praktis yang sangat rendah (<5%)** dalam pekerjaan pembangunan antarmuka web modern sehari-hari.

---

## 📚 Daftar Modul yang Ditangguhkan (*Deferred*)

Berikut adalah 8 modul kurikulum freeCodeCamp v9 yang disarankan untuk ditangguhkan ke tahap spesialisasi:

### 1. Recursion (Modul 19)
- **Karakteristik**: Fungsi yang memanggil dirinya sendiri sampai mencapai kondisi henti (*base case*).
- **Alasan Penundaan**: Sangat rentan memicu galat *Maximum Call Stack Size Exceeded* (*stack overflow*) jika kondisi batas keliru. Dalam 95% kasus frontend, perulangan `for...of` atau metode `array` (`map`, `filter`, `reduce`) jauh lebih aman, mudah dibaca, dan lebih hemat memori.

### 2. Custom Data Structures: Linked Lists, Stacks, Queues (Modul 20)
- **Karakteristik**: Mengimplementasikan simpul (*node*), penunjuk arah (*pointer*), tumpukan (*stack*), dan antrean (*queue*) secara manual menggunakan objek JavaScript.
- **Alasan Penundaan**: Di peramban web dan Node.js, tipe data bawaan `Array` sudah menyediakan metode bawaan yang dioptimasi oleh *V8 engine* (`push()`, `pop()`, `shift()`, `unshift()`). Anda hampir tidak akan pernah diminta menulis `LinkedList` dari nol saat membuat antarmuka web komersial.

### 3. Searching & Sorting Algorithms Manual (Modul 21)
- **Karakteristik**: Menulis kode manual untuk algoritma *Bubble Sort*, *Selection Sort*, *Insertion Sort*, atau *Quick Sort*.
- **Alasan Penundaan**: JavaScript telah memiliki metode `Array.prototype.sort()` yang mengimplementasikan algoritma *Timsort* teroptimasi pada level bahasa mesin C++. Menulis algoritma sortir kustom secara manual di aplikasi web hanya akan memperlambat performa antarmuka.

### 4. Graphs & Trees (Modul 22)
- **Karakteristik**: Struktur data pohon biner (*Binary Search Tree*), penelusuran graf (*Breadth-First Search / Depth-First Search*), dan matriks ketetanggaan (*adjacency matrix*).
- **Alasan Penundaan**: Konsep ini sangat teoretis dan membutuhkan pemahaman matematika diskrit. Meskipun DOM secara teknis adalah sebuah pohon (*tree*), peramban telah menyediakan API siap pakai (`querySelector`, `parentElement`, `children`) sehingga Anda tidak perlu mengelola penelusuran simpul secara manual.

### 5. Dynamic Programming (Modul 23)
- **Karakteristik**: Memecahkan masalah optimasi kompleks dengan memecahnya menjadi sub-masalah dan menyimpan hasilnya di memori (*memoization* / *tabulation*).
- **Alasan Penundaan**: Memiliki kurva belajar paling terjal di seluruh kurikulum. Mempelajari materi ini di awal hanya akan membuang waktu dan menimbulkan sindrom putus asa (*imposter syndrome*).

### 6. Audio and Video Events (Modul 15)
- **Alasan Penundaan**: Sangat terspesialisasi. Anda hanya membutuhkannya jika secara spesifik diminta membangun pemutar media kustom seperti Spotify Web atau pemutar video YouTube tiruan.

### 7. Maps and Sets (Modul 16)
- **Alasan Penundaan**: Fitur `Set` sangat praktis untuk membuang duplikasi `array` (`[...new Set(array)]`), namun objek dan array standar sudah memenuhi 80% kebutuhan penyimpanan data.

### 8. Pure Functional Programming (Modul 24)
- **Alasan Penundaan**: Konsep teoretis seperti *currying*, *functors*, dan *monads* seringkali membuat kode tim menjadi sulit dipahami. Cukup terapkan *pure function* sederhana dan *immutability* yang telah dipelajari di Fase 1.

---

## 🎯 Kapan Saat yang Tepat Mempelajari Fase Ini?

Anda **hanya disarankan membuka kembali** modul-modul di Fase 3 ini apabila Anda berada dalam 3 skenario berikut:

1. **Persiapan Wawancara Teknis Algoritma (LeetCode / Big Tech)**:
   Perusahaan teknologi besar (*FAANG / Unicorn*) sering kali menguji logika ilmu komputer dasar menggunakan soal-soal struktur data dan algoritma.
2. **Pengembangan Sistem Khusus**:
   Saat Anda ditugaskan membangun mesin *game* 2D/3D berbasis WebGL, peramban kode (*code parser / AST compiler*), atau sistem visualisasi graf jejaring sosial yang masif.
3. **Optimasi Tingkat Ekstrem**:
   Ketika Anda menangani jutaan titik data di memori klien yang membutuhkan struktur memori terkelola secara manual.

---

## ❓ Pertanyaan Evaluasi (Questions)

Mengapa pengembang web modern lebih disarankan menggunakan `Array.prototype.sort()` bawaan daripada menulis fungsi sortir sendiri secara manual?

- [ ] Karena metode manual sortir dilarang oleh spesifikasi resmi W3C.
- [x] Karena metode bawaan peramban telah dioptimasi menggunakan algoritma *Timsort* pada level bahasa mesin C++ dengan performa tinggi yang sulit ditandingi kode manual.
- [ ] Karena metode manual hanya dapat berjalan pada sistem operasi Linux.
- [ ] Karena metode manual selalu merusak memori RAM peramban secara permanen.

Kapankah materi mengenai struktur data pohon (*Trees*) dan graf (*Graphs*) relevan untuk dipelajari kembali?

- [ ] Tepat sebelum mempelajari sintaks dasar manipulasi string dan angka.
- [ ] Hanya ketika Anda ingin mengubah tampilan warna latar belakang halaman web.
- [x] Saat mempersiapkan diri menghadapi tahapan wawancara teknis algoritma (*coding interview*) atau membangun aplikasi graf visual interaktif khusus.
- [ ] Materi tersebut tidak akan pernah relevan dalam karir seorang *software engineer*.

---

[⬅️ Sebelumnya](3-fase-2-pragmatic-bridge.md) | [Selanjutnya ➡️](5-proyek-milestone-fcc.md)
