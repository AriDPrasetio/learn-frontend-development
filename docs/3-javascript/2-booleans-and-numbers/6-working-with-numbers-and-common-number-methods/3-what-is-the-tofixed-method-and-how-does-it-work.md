# Apa Itu Method toFixed(), dan Bagaimana Cara Kerjanya?

*Method* `.toFixed()` adalah fungsi bawaan JavaScript yang memformat angka menggunakan notasi titik tetap (*fixed-point notation*). Ini sangat berguna ketika Anda perlu mengontrol jumlah tempat desimal dalam suatu angka, terutama untuk menampilkan nilai mata uang atau saat bekerja dengan pengukuran yang presisi.

*Method* `.toFixed()` dipanggil pada sebuah angka dan menerima satu argumen opsional, yaitu jumlah digit yang akan muncul setelah titik desimal. *Method* ini mengembalikan representasi string dari angka tersebut dengan jumlah tempat desimal yang ditentukan. Berikut adalah contoh dasar cara kerja `.toFixed()`:

```javascript
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
```

Dalam kasus ini, kita membatasi jumlah tempat desimal menjadi dua. Jadi, `3.14159` menjadi `"3.14"`. Penting untuk dicatat bahwa `.toFixed()` mengembalikan sebuah string, bukan angka. Hal ini karena metode ini terutama ditujukan untuk memformat angka agar dapat ditampilkan, bukan untuk perhitungan lebih lanjut.

*Method* `.toFixed()` membulatkan angka ke nilai terdekat yang dapat direpresentasikan dengan jumlah tempat desimal yang ditentukan. Perilaku pembulatan ini penting untuk dipahami:

```javascript
console.log((3.14159).toFixed(3));  // "3.142"
console.log((3.14449).toFixed(3));  // "3.144"
console.log((3.14550).toFixed(3));  // "3.146"
```

Seperti yang Anda lihat, `.toFixed()` membulatkan ke atas ketika digit berikutnya adalah 5 atau lebih besar, dan membulatkan ke bawah jika sebaliknya. Jika Anda memanggil `.toFixed()` tanpa argumen, secara *default* akan menjadi 0 tempat desimal:

```javascript
let num = 3.14159;
console.log(num.toFixed()); // "3"
```

*Method* `.toFixed()` dapat sangat berguna saat bekerja dengan perhitungan keuangan atau menampilkan harga:

```javascript
let price = 19.99;
let taxRate = 0.08;
let total = price + (price * taxRate);

console.log("Total: $" + total.toFixed(2)); // "Total: $21.59"
```

Dalam contoh ini, `.toFixed(2)` memastikan bahwa total selalu ditampilkan dengan dua tempat desimal, yang merupakan standar untuk mata uang di banyak negara.

Sebagai kesimpulan, *method* `.toFixed()` adalah alat yang ampuh untuk memformat angka di JavaScript, terutama ketika Anda perlu mengontrol tampilan tempat desimal. Meskipun ini terutama digunakan untuk memformat keluaran, ingatlah perilakunya, terutama ketika perhitungan yang presisi diperlukan.

---

## Pertanyaan

### Apa keluaran dari kode berikut?
```javascript
let num = 5.678;
console.log(num.toFixed(1));
```
- [x] `"5.7"`
- [ ] `"5.6"`
- [ ] `5.7`
- [ ] `5.6`

### Apa keluaran dari kode berikut?
```javascript
let num1 = 12.345;
let num2 = 67.891;

console.log((num1 + num2).toFixed(2));
```
- [ ] `"80.23"`
- [x] `"80.24"`
- [ ] `"80.25"`
- [ ] `"80.26"`

### Apa yang terjadi jika Anda memanggil toFixed() tanpa argumen apa pun?
- [ ] Melempar pesan *error*.
- [ ] Mengembalikan angka asli tanpa perubahan apa pun.
- [ ] Mengembalikan representasi string dari angka tanpa tempat desimal, tanpa pembulatan.
- [x] Mengembalikan representasi string dari angka yang dibulatkan ke bilangan bulat terdekat.

---
[⬅️ Sebelumnya](2-how-do-the-parsefloat-and-parseint-methods-work.md) | [Selanjutnya ➡️](../7-understanding-comparisons-and-conditionals/1-how-do-comparisons-work-with-null-and-undefined-data-types.md)
