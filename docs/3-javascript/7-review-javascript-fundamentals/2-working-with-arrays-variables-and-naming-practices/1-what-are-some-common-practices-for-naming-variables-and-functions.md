# Apa Saja Praktik Umum dalam Menamai Variable dan Function?

Menamai `variable` dan `function` adalah aspek penting dalam menulis `code` yang bersih, mudah dibaca, dan mudah dikelola (*maintainable*). Praktik penamaan yang baik membuat `code` Anda bersifat menjelaskan dirinya sendiri (*self-documenting*), mengurangi kebutuhan akan komentar yang panjang, serta mempermudah pengembang lain termasuk diri Anda di masa mendatang untuk memahami `code` Anda.

Mari kita mulai dengan konvensi penamaan umum dalam `JavaScript`. Pada pelajaran sebelumnya, Anda telah mempelajari penggunaan format `camelCase` untuk nama `variable`. Untuk `variable` `boolean`, merupakan praktik umum untuk menggunakan awalan seperti `is`, `has`, atau `can`. Hal ini secara instan memberitahu pembaca bahwa `variable` tersebut bernilai `boolean`:

```javascript
let isLoading = true;
let hasPermission = false;
let canEdit = true;
```

Untuk `function`, namanya harus secara jelas menunjukkan apa yang dilakukan oleh `function` tersebut. Sering kali sangat membantu untuk memulainya dengan kata kerja:

```javascript
function getUserData(){
  /* ... */
}

function calculateTotal(){
  /* ... */
}

function validateInput(){
  /* ... */
}
```

Untuk `function` yang mengembalikan sebuah `boolean` (sering disebut sebagai predikat atau *predicates*), Anda dapat menggunakan awalan `is`, `has`, atau `can` yang sama:

```javascript
function isValidEmail(email) {
  /* ... */
}

function hasRequiredFields(form) {
  /* ... */
}
```

Ketika Anda memiliki `function` yang mengambil data, umumnya diawali dengan kata `get`:

```javascript
function getProductDetails(productId) {
  /* ... */
}

function getUserProfile(userId) {
  /* ... */
}
```

Ketika Anda memiliki `function` yang menetapkan atau memperbarui data, umumnya diawali dengan kata `set`:

```javascript
function setUserPreferences(preferences) {
  /* ... */
}

function setPageTitle(title) {
  /* ... */
}
```

Untuk `function` penangan event (*event handler*), Anda dapat menggunakan awalan `handle` atau akhiran `handler`:

```javascript
function handleClick(){
  /* ... */
}

function onSubmit(){
  /* ... */
}

function keyPressHandler(){
  /* ... */
}
```

Sebuah `event handler` adalah tindakan yang dijalankan setelah suatu peristiwa (*event*) terjadi, seperti klik tombol. Anda akan mempelajari hal tersebut pada pelajaran mendatang.

Saat menamai `variable` iterator dan `loop`, umumnya digunakan huruf tunggal seperti `i`, `j`, atau `k`. Namun untuk `nested loop` (loop bersarang) atau iterasi yang lebih kompleks, nama yang lebih deskriptif akan lebih membantu:

```javascript
for (let i = 0; i < array.length; i++) {
  /* ... */
}

for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
  /* ... */
}
```

Untuk nama `array`, pertimbangkan untuk menggunakan kata benda jamak (*plural nouns*) untuk menunjukkan bahwa `variable` tersebut berisi banyak item:

```javascript
const colors = ['red', 'green', 'blue'];
const userNames = ['Alice', 'Bob', 'Charlie'];
```

Ingatlah bahwa tujuannya adalah membuat `code` Anda dapat menjelaskan dirinya sendiri sebaik mungkin. Aturan praktis yang baik adalah: jika Anda merasa perlu menambahkan komentar untuk menjelaskan fungsi dari sebuah `variable` atau `function`, Anda mungkin perlu mempertimbangkan untuk menamainya kembali dengan sesuatu yang lebih deskriptif.

Terakhir, bersikaplah konsisten dengan *codebase* atau tim Anda. Jika tim Anda telah menetapkan konvensi penamaan tertentu, patuhilah konvensi tersebut. Konsistensi membuat `code` lebih mudah dibaca dan dipelihara oleh setiap orang yang terlibat.

## Pertanyaan (Questions)

### Pertanyaan 1

Manakah dari pilihan berikut yang merupakan nama yang baik untuk sebuah `variable` `boolean` yang memeriksa apakah pengguna sedang masuk (*logged in*)?

- [ ] `user_logged`
- [ ] `checkLogin`
- [x] `isLoggedIn`
- [ ] `login`

### Pertanyaan 2

Apa konvensi penamaan yang baik untuk sebuah `function` yang mengambil informasi produk?

- [ ] `productInformation`
- [x] `getProductInfo`
- [ ] `retrieveProduct`
- [ ] `prod_info`

### Pertanyaan 3

Manakah dari hal-hal berikut yang harus Anda lakukan jika Anda bekerja dalam sebuah *codebase* yang sudah ada dan/atau bersama sebuah tim?

- [ ] Menggunakan fitur *find-and-replace* editor teks Anda untuk memperbarui setiap nama `function` atau `variable` yang Anda temukan yang dapat ditingkatkan, meskipun tidak terkait dengan tugas yang sedang Anda kerjakan.
- [x] Mengikuti konvensi penamaan untuk `variable` dan `function` yang telah ditetapkan sebelumnya.
- [ ] Membuat konvensi penamaan Anda sendiri untuk setiap `code` baru yang Anda tulis.
- [ ] Secara ketat hanya menggunakan konvensi penamaan yang dibahas dalam pelajaran ini.

---
[⬅️ Sebelumnya](../1-working-with-types-and-objects/3-what-is-the-number-constructor-and-how-does-it-work-for-type-coercion.md) | [Selanjutnya ➡️](2-how-do-you-get-the-length-for-an-array-and-how-can-you-create-an-empty-array-of-fixed-length.md)
