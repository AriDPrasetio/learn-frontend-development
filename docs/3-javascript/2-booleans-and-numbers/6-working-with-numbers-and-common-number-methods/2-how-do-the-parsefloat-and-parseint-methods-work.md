# Bagaimana Cara Kerja Method parseFloat() dan parseInt()?

`parseFloat()` dan `parseInt()` adalah dua *method* penting di JavaScript untuk mengonversi string menjadi angka. *Method-method* ini sangat berguna ketika berhadapan dengan masukan pengguna atau memproses data yang datang dalam format string tetapi perlu diperlakukan sebagai nilai numerik.

Mari kita mulai dengan `parseFloat()`. *Method* ini mem-parsing argumen string dan mengembalikan sebuah angka desimal (*floating-point number*). *Method* ini dirancang untuk mengekstrak angka dari awal string, bahkan jika string tersebut mengandung karakter non-numerik setelahnya. Ingat bahwa *floats* adalah angka dengan titik desimal. Berikut cara kerja `parseFloat()`:

```javascript
console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5"));   // 3.14
console.log(parseFloat("abc 3.14")); // NaN
```

Seperti yang Anda lihat, `parseFloat()` mulai mem-parsing dari awal string dan berlanjut hingga menemukan karakter yang tidak dapat menjadi bagian dari angka *floating-point*. Jika tidak dapat menemukan angka yang valid di awal string, ia mengembalikan `NaN` (Not a Number).

Sebaliknya, `parseInt()` mem-parsing argumen string dan mengembalikan sebuah bilangan bulat (*integer*). Seperti `parseFloat()`, ia mulai dari awal string, tetapi berhenti pada karakter non-digit pertama. Berikut cara kerja `parseInt()`:

```javascript
console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN
```

`parseInt()` berhenti mem-parsing pada non-digit pertama yang ditemukannya. Untuk angka *floating-point*, ia hanya mengembalikan bagian bilangan bulatnya saja. Jika tidak dapat menemukan *integer* yang valid di awal string, ia mengembalikan `NaN`.

Kedua *method* memiliki beberapa perilaku yang perlu diperhatikan. Keduanya mengabaikan spasi di awal (*leading whitespace*):

```javascript
console.log(parseFloat("  3.14"));  // 3.14
console.log(parseInt("  42"));      // 42
```

Keduanya menangani tanda tambah dan minus di awal string:

```javascript
console.log(parseFloat("+3.14"));  // 3.14
console.log(parseInt("-42"));      // -42
```

Perlu dicatat bahwa meskipun *method-method* ini sangat ampuh, mereka memiliki beberapa keterbatasan. Misalnya, mereka tidak menangani semua format angka, seperti notasi ilmiah (*scientific notation*), secara langsung. Untuk kebutuhan parsing yang lebih kompleks, Anda mungkin perlu menggunakan teknik atau pustaka (*library*) tambahan.

Sebagai kesimpulan, `parseFloat()` dan `parseInt()` adalah alat berharga untuk mengonversi string menjadi angka di JavaScript. Memahami cara kerjanya dan perilaku spesifiknya memungkinkan Anda menangani data numerik secara lebih efektif dalam aplikasi Anda, terutama saat berhadapan dengan masukan pengguna atau sumber data eksternal.

---

## Pertanyaan

### Apa keluaran dari kode berikut?
```javascript
console.log(parseInt("10.99"));
```
- [ ] `10.99`
- [x] `10`
- [ ] `11`
- [ ] `NaN`

### Apa keluaran dari kode berikut?
```javascript
console.log(parseInt("  -42abc"));
```
- [x] `-42`
- [ ] `NaN`
- [ ] `42`
- [ ] `"-42abc"`

### Apa yang akan dikembalikan oleh parseFloat("3.14.15")?
- [ ] `3.1415`
- [x] `3.14`
- [ ] `NaN`
- [ ] `3`

---
[⬅️ Sebelumnya](1-how-does-isnan-work.md) | [Selanjutnya ➡️](3-what-is-the-tofixed-method-and-how-does-it-work.md)
