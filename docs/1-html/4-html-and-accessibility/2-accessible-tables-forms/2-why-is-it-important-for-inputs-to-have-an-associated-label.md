# Mengapa Penting bagi Input untuk Memiliki Label yang Terkait?

`Label` pada bidang input (`input fields`) mungkin tampak seperti detail kecil, tetapi mereka memainkan peran penting dalam membuat formulir (`forms`) lebih mudah digunakan oleh semua orang.

`Label` membantu penyandang disabilitas, membuat formulir lebih ramah pengguna (`user-friendly`) bagi semua orang, dan pada akhirnya meningkatkan tingkat konversi formulir (*form conversion rates*).

Mari kita pelajari lebih dalam mengapa menambahkan `label` ke elemen `input` penting untuk `accessibility` dan keterpakaian (`usability`).

`Screen reader` sering kali mengandalkan `label` untuk mendeskripsikan tujuan dari bidang `input`. Agar hal ini berfungsi dengan baik, `label` harus dihubungkan secara terprogram (*programmatically associated*) dengan `input`. Meskipun ada beberapa cara untuk melakukannya, cara yang paling umum adalah dengan menggunakan elemen `HTML` `label`.

Berikut cara menghubungkan sebuah `label` dengan sebuah `input`:

```html
<form>
   <label for="name">Your Name</label>
   <input type="text" id="name" />
</form>
```

Dalam contoh ini, atribut `for` dari elemen `label` dikaitkan dengan `id` dari elemen `input`. Koneksi ini memungkinkan `screen reader` untuk membacakan `label` saat `input` berada dalam status fokus (*focused state*), sehingga pengguna `screen reader` dapat memahami tujuan dari `input` tersebut.

Mengaitkan `label` dengan semua bidang input juga bermanfaat bagi `SEO`. Dengan `label` yang tepat, mesin pencari akan memahami konten halaman dengan lebih baik, yang berdampak positif pada peringkat pencarian (*search rankings*) halaman tersebut.

Namun, penting untuk dipahami bahwa Anda membuat konten untuk manusia, bukan untuk mesin pencari. Jadi, Anda harus memastikan bahwa `label` dibuat sejelas dan sedeskriptif mungkin.


## Pertanyaan (Questions)


Mengapa menambahkan label ke elemen input penting untuk aksesibilitas?


- [ ] `Label` memberikan gaya visual untuk bidang input.

- [x] `Label` membantu `screen reader` mendeskripsikan tujuan dari bidang `input`.

- [ ] `Label` meningkatkan kecepatan memuat halaman web.

- [ ] `Label` memungkinkan bidang input menerima beberapa jenis data.



Apa cara yang benar untuk menghubungkan label secara terprogram dengan sebuah input di HTML?


- [ ] Memberikan atribut `name` yang sama pada kedua elemen.

- [x] Mengatur atribut `for` pada label agar sesuai dengan `id` milik `input`.

- [ ] Menempatkan `<label>` tepat setelah elemen `<input>` di DOM.

- [ ] Menggunakan teks `placeholder` milik `input` alih-alih `label`.



Selain aksesibilitas, apa manfaat lain dari menghubungkan label dengan input?


- [ ] Membuat halaman memuat secara signifikan lebih cepat.

- [x] Dapat membantu mesin pencari lebih memahami konten halaman.

- [ ] Memungkinkan input menerima beberapa tipe data secara otomatis.

- [ ] Menerjemahkan `label` secara otomatis untuk pengguna internasional.



---
[⬅️ Sebelumnya](1-what-are-best-practices-for-tables-and-accessibility.md) | [Selanjutnya ➡️](../3-introduction-to-aria/1-what-is-the-purpose-of-wai-aria.md)
