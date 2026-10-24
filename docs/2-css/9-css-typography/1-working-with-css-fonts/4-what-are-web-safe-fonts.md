# Apa Itu Web-Safe Fonts?

`Web-safe fonts` adalah sekumpulan `font` yang kemungkinan besar sudah terpasang pada komputer atau perangkat pengguna. `font` ini didukung secara luas di berbagai sistem operasi dan `browser` web, sehingga sangat besar kemungkinannya untuk di-`render` dan ditampilkan secara konsisten. Mari kita lihat bagaimana cara kerjanya.

`Browser` bertanggung jawab untuk menginterpretasikan dan menampilkan `font` pada sebuah situs web. Saat `browser` harus me-`render` sebuah `font`, `browser` akan mencoba mencari file `font` tersebut pada sistem pengguna. Namun jika `font` tidak ditemukan, `browser` biasanya akan beralih (*fallback*) ke `font` bawaan (*default*) sistem. Hal ini memastikan bahwa konten tetap dapat dibaca, meskipun `font` spesifik yang seharusnya di-`render` pada situs web tersebut tidak ada.

Meskipun demikian, `fallback font` yang dipilih oleh `browser` mungkin terlihat sangat berbeda dari `font` yang semula seharusnya di-`render`. Hal ini dapat berdampak kritis pada keseluruhan desain dan pengalaman pengguna (*user experience*). Untuk menghindari hal ini, Anda sebaiknya menggunakan `web safe fonts` sebisa mungkin. Anda memiliki dua opsi: Anda dapat menggunakannya sebagai `font` utama Anda, atau Anda dapat menggunakan `font` kustom (*custom fonts*) dengan `web-safe font` sebagai opsi cadangan (*fallback*). Dengan cara ini, Anda dapat mengontrol tampilan situs web jika `font` kustom tersebut tidak ditemukan.

Mari kita lihat beberapa contoh `web-safe fonts`. Pada pelajaran sebelumnya, Anda telah mempelajari bahwa `font` `sans-serif` umumnya digunakan untuk pengembangan web karena tidak memiliki "kaki" kecil atau garis di ujung karakter, sehingga mudah dibaca di layar. Beberapa contoh `web-safe fonts` berjenis `sans-serif` adalah:

`Arial`

![The text 'Hello, World!' displayed in Arial, a clean geometric sans-serif font with uniform stroke width](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-web-safe-fonts-1.png)

`Verdana`

![The text 'Hello, World!' displayed in Verdana, a wide sans-serif font with large open letterforms and a tall x-height](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-web-safe-fonts-2.png)

`Trebuchet MS`

![The text 'Hello, World!' displayed in Trebuchet MS, a humanist sans-serif font with slightly rounded letterforms](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-web-safe-fonts-3.png)

Sebaliknya, `font` `serif` memang memiliki "kaki" kecil di ujung karakter, sehingga umumnya digunakan untuk media cetak tradisional. Namun jika Anda perlu menggunakannya untuk tujuan pengembangan web, `web-safe fonts` berjenis `serif` meliputi:

`Times New Roman`

![The text 'Hello, World!' displayed in Times New Roman, a classic serif font with strong contrast between thick and thin strokes](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-web-safe-fonts-4.png)

`Georgia`

![The text 'Hello, World!' displayed in Georgia, a serif font with wider letterforms and stroke contrast optimized for screen readability](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-web-safe-fonts-5.png)

Dengan menggunakan `web safe fonts`, Anda dapat memastikan bahwa desain Anda terlihat konsisten di berbagai perangkat dan platform. `font` ini juga dapat meningkatkan aksesibilitas (*accessibility*) bagi pengguna dengan disabilitas penglihatan, karena bentuknya sederhana dan mudah dibaca. Dan terakhir, `web-safe fonts` dapat mengurangi waktu pemuatan halaman (*page load time*), karena file-nya tidak perlu diunduh jika sudah terpasang.

Sekarang setelah Anda mengetahui apa itu `web safe fonts`, Anda dapat mulai menggunakannya dan menetapkannya sebagai `fallbacks` untuk menciptakan pengalaman pengguna yang andal di berbagai `browser` dan platform.

## Pertanyaan (Questions)

Manakah dari berikut ini yang merupakan karakteristik utama dari `web safe fonts`?

- [ ] `font` ini sulit dibaca.
- [ ] `font` ini dirancang untuk tipe konten tertentu.
- [x] `font` ini didukung secara luas di berbagai platform dan `browser`.
- [ ] `font` ini hanya tersedia dalam gaya `serif`.

Manakah dari berikut ini yang bukan merupakan `web-safe font`?

- [ ] `Arial`
- [ ] `Verdana`
- [ ] `Georgia`
- [x] `Dancing Script`

Kapan `web safe fonts` sangat berguna?

- [ ] Untuk desain web yang kompleks dan menuntut visual tinggi.
- [ ] Ketika `font` kustom tertentu sangat penting untuk tujuan *branding*.
- [x] Untuk desain web dasar dan ketika perenderan yang konsisten menjadi prioritas.
- [ ] Untuk membuat `font` kustom.

---

[⬅️ Sebelumnya](3-what-are-font-families.md) | [Selanjutnya ➡️](5-what-is-the-font-face-at-rule.md)
