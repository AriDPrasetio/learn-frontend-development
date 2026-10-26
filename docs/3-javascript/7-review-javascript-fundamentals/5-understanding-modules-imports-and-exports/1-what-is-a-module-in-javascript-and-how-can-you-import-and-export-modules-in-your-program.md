# Apa Itu Modul dalam JavaScript, dan Bagaimana Cara Melakukan Import serta Export Modul dalam Program Anda?

Dalam `JavaScript`, sebuah `module` (modul) adalah unit `code` yang berdiri sendiri (*self-contained*) yang mengenkapsulasi `function`, `class`, atau `variable` yang saling terkait.

Bayangkan sebuah `module` sebagai blok penyusun (*building block*) untuk aplikasi Anda, mirip seperti sebuah bab di dalam sebuah buku. Setiap `module` berfokus pada fungsionalitas tertentu, menjadikan `code` Anda lebih terorganisir, mudah dikelola, dan dapat digunakan kembali (*reusable*). `Module` membantu mencegah konflik penamaan (*naming conflicts*) dan memungkinkan Anda menyusun struktur aplikasi ke dalam bagian-bagian terpisah yang saling terhubung.

Konsep `module` dalam `JavaScript` telah berkembang dari waktu ke waktu, tetapi pendekatan yang paling banyak digunakan dan didukung adalah sistem modul ES6 (ECMAScript 2015). Sistem ini menyediakan cara standar untuk mendefinisikan dan menggunakan modul di berbagai lingkungan `JavaScript`.

Untuk membuat sebuah `module`, Anda menulis `code` `JavaScript` Anda dalam sebuah file terpisah. Setiap `variable`, `function`, atau `class` yang ingin Anda sediakan untuk bagian lain dari aplikasi Anda perlu di-ekspor secara eksplisit. Anda dapat melakukan ini menggunakan kata kunci `export`.

Sebagai contoh, katakanlah Anda memiliki sebuah file bernama `math.js` dengan beberapa `function` matematika:

```javascript
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

const PI = 3.14159;
export { PI };
```

Dalam contoh ini, kita mengekspor dua buah `function` (`add` dan `subtract`) serta sebuah konstanta (`PI`). Anda dapat mengekspor sebanyak mungkin item yang Anda butuhkan dari sebuah `module` tunggal.

Untuk menggunakan item-item yang diekspor ini di bagian lain dari aplikasi Anda, Anda perlu mengimpornya. Hal ini dilakukan menggunakan kata kunci `import`.

Katakanlah Anda ingin menggunakan `function` matematika ini dalam sebuah file bernama `app.js`:

```javascript
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));        // Outputs: 8
console.log(subtract(10, 4));  // Outputs: 6
console.log(PI);               // Outputs: 3.14159
```

Di sini, kita mengimpor `function` dan konstanta spesifik yang kita butuhkan dari `module` `math.js`. Bagian `'./math.js'` memberi tahu `JavaScript` di mana menemukan file `module` tersebut secara relatif terhadap file saat ini.

Terkadang, Anda mungkin ingin mengimpor semua yang diekspor oleh sebuah `module`. Anda dapat melakukan ini menggunakan sintaksis tanda bintang (`*`) atau *namespace import*:

```javascript
import * as Math from './math.js';

console.log(Math.add(5, 3));        // Outputs: 8
console.log(Math.subtract(10, 4));  // Outputs: 6
console.log(Math.PI);               // Outputs: 3.14159
```

Dalam kasus ini, semua ekspor dari `math.js` diimpor sebagai `property` dari sebuah `object` bernama `Math`.

Pola umum lainnya adalah memiliki sebuah *default export* di dalam sebuah `module`. Ini biasanya digunakan ketika sebuah `module` pada dasarnya hanya mengekspor satu `function` utama. Anda hanya dapat memiliki satu *default export* per `module`.

Berikut contoh penerapannya:

```javascript
// Di dalam math.js
export default function multiply(a, b) {
    return a * b;
}

// Di dalam app.js
import multiply from './math.js';

console.log(multiply(4, 5));  // Outputs: 20
```

Perhatikan bahwa saat mengimpor *default export*, Anda tidak perlu menggunakan kurung kurawal (`{}`), dan Anda dapat memberi nama impor tersebut dengan nama apa pun yang Anda inginkan.

Penting untuk dicatat bahwa untuk menggunakan `module` ES6 di peramban (*browser*), Anda perlu menentukan atribut `type="module"` pada tag `script` Anda:

```html
<script type="module" src="app.js"></script>
```

`Module` menyediakan cara ampuh untuk mengatur dan menstrukturkan `code` `JavaScript` Anda. Mereka memungkinkan Anda untuk memecah aplikasi menjadi bagian-bagian yang lebih kecil dan mudah dikelola, mendorong penggunaan kembali kode (*code reuse*), serta membantu menjaga pemisahan tanggung jawab (*separation of concerns*) yang bersih. Saat Anda membangun aplikasi yang lebih besar, Anda akan mendapati bahwa modul menjadi alat penting dalam toolkit pengembangan `JavaScript` Anda.

## Pertanyaan (Questions)

### Pertanyaan 1

Kata kunci apa yang digunakan untuk membuat `function`, `variable`, atau `class` dapat diakses oleh modul lain?

- [ ] `import`
- [x] `export`
- [ ] `module`
- [ ] `require`

### Pertanyaan 2

Bagaimana cara Anda mengimpor sebuah *default export* dari sebuah `module`?

- [ ] `import { default } from './module.js';`
- [ ] `import default from './module.js';`
- [ ] `import * as default from './module.js';`
- [x] `import anyName from './module.js';`

### Pertanyaan 3

Apa tujuan dari penggunaan `module` dalam `JavaScript`?

- [ ] Membuat `code` berjalan lebih cepat.
- [ ] Mengurangi ukuran file aplikasi.
- [x] Mengatur `code` ke dalam bagian-bagian yang mudah dikelola dan dapat digunakan kembali.
- [ ] Mengenkripsi bagian sensitif dari `code`.

---
[⬅️ Sebelumnya](../4-the-var-keyword-and-hoisting/2-what-is-hoisting.md) | [Selanjutnya ➡️](../6-working-with-the-arguments-object-and-rest-parameters/1-what-is-the-arguments-object.md)
