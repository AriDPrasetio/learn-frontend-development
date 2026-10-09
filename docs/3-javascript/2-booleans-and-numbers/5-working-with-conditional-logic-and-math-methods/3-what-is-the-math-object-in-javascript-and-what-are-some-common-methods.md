# Apa Itu Objek Math di JavaScript, dan Apa Saja Beberapa Method yang Umum?

Saat mendalami JavaScript, Anda akan segera menyadari bahwa melakukan operasi matematika adalah tugas yang umum. Meskipun operator aritmetika dasar dapat menangani perhitungan sederhana, JavaScript menawarkan objek `Math` bawaan untuk menangani tantangan matematika yang lebih kompleks.

Alat praktis ini menyediakan berbagai *method* yang mempermudah pelaksanaan perhitungan tingkat lanjut dan memanipulasi angka. Mari kita pelajari *method-method* ini dan melihat bagaimana mereka dapat menyederhanakan pengalaman pengkodean Anda.

## Math.random()

*Method* `Math.random()` menghasilkan angka desimal (*floating-point number*) acak antara 0 (inklusif) dan 1 (eksklusif). Ini berarti keluaran yang memungkinkan bisa berupa 0, tetapi tidak akan pernah benar-benar mencapai 1. Berikut adalah contoh bekerja dengan *method* `Math.random()`:

```javascript
const randomNum = Math.random();

console.log(randomNum);
// angka berapa pun antara 0 dan 1 – 0 inklusif dan 1 eksklusif
```

## Math.min() dan Math.max()

`Math.min()` dan `Math.max()` keduanya menerima sekumpulan angka dan masing-masing mengembalikan nilai minimum dan maksimum. Berikut adalah contoh penggunaan kedua *method* tersebut:

```javascript
const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9
```

Pernyataan `console.log()` pertama akan mencetak angka 1, karena 1 adalah angka terkecil dalam daftar angka tersebut. Dan `console.log()` kedua akan mencetak angka 9, karena 9 adalah angka terbesar dalam daftar tersebut.

## Membulatkan Angka dan Rentang Acak

Jika Anda ingin membulatkan angka ke atas atau ke bawah ke bilangan bulat (*integer*) terdekat, Anda dapat menggunakan *method* `Math.ceil()` dan `Math.floor()`. Berikut adalah contoh bekerja dengan `Math.ceil()`:

```javascript
console.log(Math.ceil(4.3)); // 5
```

`Math.ceil()` akan membulatkan 4.3 ke atas ke bilangan bulat terdekat, yaitu 5 dalam kasus ini. Sekarang, mari kita lihat pembulatan angka ke bawah:

```javascript
console.log(Math.floor(4.7)); // 4
```

`Math.floor()` akan membulatkan 4.7 ke bawah ke bilangan bulat terdekat, yaitu 4 dalam kasus ini. `Math.round()` adalah hibrida dari `Math.ceil()` dan `Math.floor()`. Ini membulatkan angka ke bilangan bulat terdekatnya, dengan mempertimbangkan titik desimalnya:

```javascript
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
```

Jadi, jika titik desimalnya kurang dari 5, angkanya dibulatkan ke bawah. Dan jika titik desimalnya 5 atau lebih besar, angkanya dibulatkan ke atas. Penerapan praktis dari `Math.floor()` dan `Math.random()` adalah menghasilkan angka acak di antara dua bilangan bulat. Berikut adalah sintaks untuk itu:

```javascript
const max = 10;
const min = 5;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
```

Menghasilkan angka acak antara 1 dan 20 akan terlihat seperti ini:

```javascript
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);
```

## Math.trunc()

*Method* `Math` lain yang berguna adalah *method* `Math.trunc()`. `Math.trunc()` menghapus bagian desimal dari suatu angka, hanya mengembalikan bagian bilangan bulatnya (*integer*), tanpa pembulatan:

```javascript
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9
```

## Akar, Nilai Mutlak, dan Pangkat

Jika Anda perlu mendapatkan akar kuadrat (*square root*) atau akar pangkat tiga (*cube root*) dari suatu angka, Anda masing-masing dapat menggunakan *method* `Math.sqrt()` dan `Math.cbrt()`:

```javascript
console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3
```

Pernyataan *log* pertama akan mencetak 9 karena akar kuadrat dari 81 adalah 9, sedangkan pernyataan *log* kedua akan mencetak 3 karena akar pangkat tiga dari 27 adalah 3. Jika Anda perlu mendapatkan nilai mutlak (*absolute value*) dari suatu angka, Anda dapat menggunakan *method* `Math.abs()`:

```javascript
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
```

`Math.abs()` mengembalikan nilai mutlak dari suatu angka, mengubah nilai negatif menjadi positif. *Method* terakhir yang akan kita lihat adalah *method* `Math.pow()`:

```javascript
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64
```

`Math.pow()` menerima dua angka dan memangkatkan angka pertama dengan pangkat dari angka kedua. Masih banyak lagi *method* yang dimiliki oleh objek `Math` yang dapat Anda eksplorasi sendiri. Namun, ini hanyalah beberapa yang lebih sering digunakan dalam basis kode JavaScript.

---

## Pertanyaan

### Apa yang dilakukan fungsi Math.floor()?
- [ ] Membulatkan angka ke atas ke bilangan bulat terdekat.
- [x] Membulatkan angka ke bawah, terlepas dari titik desimalnya.
- [ ] Membulatkan angka ke bilangan bulat genap terdekat.
- [ ] Membulatkan angka berdasarkan nilai dari titik desimal.

### Mengapa Math.round() dianggap sebagai hibrida dari Math.ceil() dan Math.floor()?
- [ ] Hanya membulatkan angka ke atas seperti `Math.ceil()`.
- [ ] Hanya membulatkan angka ke bawah seperti `Math.floor()`.
- [x] Membulatkan angka ke bilangan bulat terdekat, menggunakan pembulatan ke atas maupun ke bawah tergantung pada desimalnya.
- [ ] Mengabaikan titik desimal.

### Apa perbedaan antara Math.min() dan Math.max()?
- [ ] `Math.min()` mengembalikan nilai maksimum, dan `Math.max()` mengembalikan nilai minimum.
- [x] `Math.min()` mengembalikan angka terkecil, dan `Math.max()` mengembalikan angka terbesar dari sekumpulan angka.
- [ ] Keduanya mengembalikan nilai yang sama.
- [ ] `Math.min()` membulatkan angka ke bawah, dan `Math.max()` membulatkan angka ke atas.

---
[⬅️ Sebelumnya](2-what-are-binary-logical-operators-and-how-do-they-work.md) | [Selanjutnya ➡️](../6-working-with-numbers-and-common-number-methods/1-how-does-isnan-work.md)
