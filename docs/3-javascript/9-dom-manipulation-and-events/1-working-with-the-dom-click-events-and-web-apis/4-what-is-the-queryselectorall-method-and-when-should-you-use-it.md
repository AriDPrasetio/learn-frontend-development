# Apa Itu Method querySelectorAll(), dan Kapan Sebaiknya Anda Menggunakannya?

Mari kita pelajari tentang `method` `querySelectorAll()`. Anda dapat menggunakan `method` ini untuk mendapatkan daftar semua elemen `DOM` yang cocok dengan pemilih CSS (*CSS selector*) tertentu.

Berikut adalah cara Anda memanggil `method` `querySelectorAll()`:

```javascript
document.querySelectorAll(selectors);
```

Panggil `method` ini pada `object` `document` dan teruskan sebuah `string` yang berisi pemilih CSS sebagai `argument`. `Argument` tersebut harus berupa `string` pemilih CSS yang valid. Jika tidak, pengecualian `SyntaxError` akan dimunculkan.

`querySelectorAll()` mengembalikan sebuah `object` `NodeList`, yaitu kumpulan simpul yang cocok dengan pemilih CSS yang ditentukan.

Daftar tersebut akan berisi satu `object` `Element` untuk setiap elemen yang cocok dengan pemilih CSS. Jika tidak ada kecocokan yang ditemukan, daftar tersebut akan kosong (*empty*).

Elemen-elemen tersebut akan disusun sesuai urutan kemunculannya di dalam dokumen `HTML`. Sebagai contoh, Anda dapat mencocokkan semua elemen dari tipe tertentu:

```javascript
document.querySelectorAll("div");
```

Semua elemen dengan kelas (*class*) tertentu:

```javascript
document.querySelectorAll(".rounded");
```

Semua elemen dengan `id` tertentu:

```javascript
document.querySelectorAll("#logo");
```

Atau semua elemen dengan atribut tertentu, seperti semua tautan yang mengarahkan pengguna ke URL tertentu:

```javascript
document.querySelectorAll("a[href='https://www.freecodecamp.org/']");
```

Anda juga dapat menggunakan pemilih CSS yang lebih kompleks, seperti yang satu ini, yang mencocokkan semua item daftar (`li`) di dalam elemen daftar tak berurutan (`ul`) yang memiliki kelas `ingredients`:

```javascript
document.querySelectorAll("ul.ingredients li");
```

Karena `method` ini akan mengembalikan kumpulan simpul, Anda dapat menetapkan kumpulan ini ke sebuah `variable` dan menggunakannya di dalam program Anda untuk bekerja dengan elemen-elemen individual, seperti yang dapat Anda lihat pada contoh sintaksis umum ini:

```javascript
const matches = document.querySelectorAll(selectors);
```

Sebagai contoh, jika Anda memiliki daftar tak berurutan dengan tiga item daftar ini:

```html
<ul class="ingredients">
  <li>Flour</li>
  <li>Cheese</li>
  <li>Water</li>
</ul>
```

Anda dapat memanggil `method` `querySelectorAll()` untuk mencocokkan semua item daftar di dalam daftar tak berurutan dengan kelas `ingredients` dan menetapkan nilai kembaliannya ke konstanta `matches`:

```javascript
const matches = document.querySelectorAll("ul.ingredients li");
```

Ini akan mengembalikan kumpulan tiga simpul. Setiap simpul mewakili sebuah elemen item daftar:

```javascript
// NodeList(3)
{
  0: li,
  1: li,
  2: li,
  length: 3,
}
```

Anda dapat bekerja dengan koleksi ini persis seperti Anda bekerja dengan `array` `JavaScript` lainnya.

Sebagai contoh, Anda dapat menampilkannya di `console` dengan `console.log()`:

```javascript
console.log(matches);
```

Anda juga dapat memeriksa panjang koleksi dengan `property` `length`:

```javascript
console.log(matches.length);
```

Output-nya adalah sebuah bilangan bulat (*integer*) yang mewakili jumlah simpul di dalam koleksi:

```md
3
```

Anda juga dapat mengakses elemen-elemen individual dari koleksi tersebut dengan indeks yang sesuai. Elemen pertama akan berada pada indeks `0`:

```javascript
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
```

Elemen-elemen tersebut akan dicetak satu per satu di `console`.

Anda juga dapat melakukan iterasi pada elemen-elemen tersebut menggunakan `loop` `for`:

```javascript
for (let i = 0; i < matches.length; i++) {
  console.log(matches[i]);    
}
```

Output-nya akan sama persis dalam kasus ini. Namun cara ini bisa sangat ampuh untuk bekerja dengan semua elemen di dalam koleksi.

`Method` `querySelectorAll()` dalam `JavaScript` adalah alat yang ampuh untuk memilih beberapa elemen berdasarkan pemilih CSS mereka. Dengan `method` ini, Anda dapat memilih elemen tertentu di dalam halaman web Anda dan memanipulasinya sesuai kebutuhan.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan utama dari `method` `querySelectorAll()` dalam `JavaScript`?

- [ ] Membuat elemen baru di dalam `DOM`.
- [ ] Memodifikasi konten dari elemen yang sudah ada.
- [x] Memilih beberapa elemen berdasarkan pemilih CSS (*CSS selector*).
- [ ] Menghapus elemen dari `DOM`.

### Pertanyaan 2

Tipe `object` apakah yang dikembalikan oleh `method` `querySelectorAll()`?

- [ ] `String`
- [ ] `Number`
- [x] `NodeList`
- [ ] `Array`

### Pertanyaan 3

Ketika menggunakan `querySelectorAll()` dengan pemilih berupa `string`, apa yang terjadi jika pemilih tersebut tidak cocok dengan elemen mana pun?

- [ ] Menghasilkan sebuah *error*.
- [ ] Mengembalikan nilai `null`.
- [x] Mengembalikan sebuah `NodeList` kosong (*empty NodeList*).
- [ ] Mengembalikan elemen pertama yang cocok.

---
[⬅️ Sebelumnya](3-how-do-dom-nodes-exist-relative-to-each-other-in-the-dom-tree.md) | [Selanjutnya ➡️](5-how-do-you-create-new-nodes-using-innerhtml-and-createelement.md)
