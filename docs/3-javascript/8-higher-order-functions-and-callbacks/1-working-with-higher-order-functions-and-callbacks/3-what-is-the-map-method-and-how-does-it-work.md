# Apa Itu Method Map, dan Bagaimana Cara Kerjanya?

`Method` `map` adalah sebuah `function` yang kuat dan banyak digunakan dalam `JavaScript` yang beroperasi pada `array`. `Method` ini dirancang untuk membuat sebuah `array` baru dengan menerapkan sebuah `function` yang diberikan ke setiap elemen dari `array` aslinya.

`Method` ini tidak memodifikasi `array` aslinya, melainkan mengembalikan sebuah `array` baru yang berisi hasil dari `function` yang diterapkan ke setiap elemen.

Berikut adalah contoh penggunaan `method` `map` pada sebuah `array` angka:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
```

Untuk membuat sebuah `array` baru di mana setiap angka digandakan, kita menggunakan `method` `map`. `Method` `map` menerima sebuah `callback function` di mana fungsi tersebut dipanggil pada setiap elemen tunggal di dalam `array`.

Dalam kasus ini, setiap angka di dalam `array` akan dikalikan dengan `2`. Hasilnya adalah sebuah `array` baru berisi angka `2, 4, 6, 8, 10`.

`Callback function` dapat menerima hingga tiga `argument`.

`Argument` pertama adalah elemen saat ini yang sedang diproses (*current element*):

```javascript
const numbers = [3, 4, 5, 6, 7].map((element) => {
  console.log("Element:", element);
  return element * 2;
});
```

`Argument` kedua adalah indeks dari elemen saat ini yang sedang diproses (*index*):

```javascript
const numbers = [3, 4, 5, 6, 7].map((element, index) => {
  console.log("Element:", element);
  console.log("Index:", index);
  return element * 2;
});
```

`Argument` ketiga adalah `array` tempat `map` dipanggil:

```javascript
const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
  return element * 2;
});
```

Memahami dan menggunakan `method` `map` secara efektif dapat secara signifikan meningkatkan kemampuan Anda dalam bekerja dengan `array` di `JavaScript`. Pada pelajaran mendatang, kita akan mendalami penggunaan `map` yang lebih lanjut dan menjelajahi bagaimana `method` ini dapat menjadi alat yang ampuh untuk membangun program yang dinamis dan efisien.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah yang dikembalikan oleh `method` `map`?

- [ ] `Array` asli yang dimodifikasi.
- [x] Sebuah `array` baru dengan jumlah elemen yang sama dengan `array` asli.
- [ ] Sebuah nilai tunggal.
- [ ] Tidak mengembalikan apa pun, hanya memodifikasi `array` asli.

### Pertanyaan 2

Berapa banyak `argument` yang dapat diterima oleh `callback function` di dalam `map`?

- [ ] Satu. Elemen saat ini.
- [ ] Dua. Elemen saat ini dan indeksnya.
- [x] Tiga. Elemen saat ini, indeksnya, dan `array` asli.
- [ ] Tergantung pada bagaimana `map` dipanggil.

### Pertanyaan 3

Manakah dari berikut ini yang BUKAN merupakan penggunaan yang tepat untuk `method` `map`?

- [ ] Mengonversi sebuah `array` `string` menjadi huruf besar (*uppercase*).
- [ ] Menggandakan setiap angka dalam sebuah `array`.
- [x] Menghapus elemen tertentu dari sebuah `array`.
- [ ] Mengekstrak sebuah `property` dari setiap `object` dalam sebuah `array`.

---
[⬅️ Sebelumnya](2-what-are-higher-order-functions.md) | [Selanjutnya ➡️](4-what-is-the-filter-method-and-how-does-it-work.md)
