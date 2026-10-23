# Bagaimana Cara Kerja Block Quote dan Inline Quote di HTML?

Dalam `HTML`, `element` kutipan digunakan untuk membedakan teks kutipan dari konten di sekitarnya. Ini memberikan teks kutipan sebuah format yang mudah diidentifikasi.

## Kutipan Blok (Block Quotations)

Anda harus menggunakan `element` kutipan blok (`block quotation element`) untuk mewakili bagian yang dikutip dari sumber lain. `Element` ini terutama digunakan untuk kutipan panjang (`extended quotations`). Jika sumber kutipan memiliki alamat, Anda dapat mengutipnya dengan atribut `cite`. Nilai dari atribut ini harus berupa `URL` yang valid. Ini adalah contoh kutipan di dalam `element` kutipan blok:

```html
<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
</blockquote>
```

`Element` ini memiliki atribut `cite`. Nilai atribut `cite` adalah `URL` dari sumber tersebut. Meskipun atribut ini tidak mengubah tampilan dari `block quote`, ini sangat membantu untuk memberikan lebih banyak informasi kepada pembaca layar (`screen reader`) dan mesin pencari (`search engine`) tentang kutipan tersebut. Di peramban (`browser`), Anda akan melihat bahwa teks sedikit menjorok ke dalam (`indented`).

## Kutipan Multi-Paragraf (Multi-Paragraph Quotes)

Jika Anda ingin memulai dan mengakhiri `block quote` dengan tanda kutip, Anda mungkin perlu menulisnya secara eksplisit di dalam teks. Anda dapat menulis teks langsung di dalam `element` `block quotation`, seperti yang baru saja saya lakukan, atau membungkusnya di dalam satu atau beberapa `element` paragraf. Ini berguna ketika teks memiliki beberapa paragraf, tetapi Anda ingin menyimpannya di dalam `block quote` yang sama. Berikut adalah contoh dengan empat paragraf:

```html
<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  <p>Build your projects. Show them to your friends. Build projects for your friends.</p>
  <p>Build your network. Help the people you meet along the way. What goes around comes around. You'll get what's coming to you.</p>   
  <p>It is not too late. Life is long.</p>
  <p>You will look back on this moment years from now and be glad you made a move.</p>
</blockquote>
```

Semua paragraf berada di dalam `element` `block quotation` yang sama, sehingga semuanya merupakan bagian dari kutipan yang sama. Anda dapat melihat bahwa `element` tersebut memiliki atribut `cite` dengan `URL` sumbernya. Di peramban, Anda akan melihat bahwa keempat paragraf tersebut sejajar satu sama lain, namun menjorok ke dalam relatif terhadap kontainernya.

## Mengutip Sumber (Citing Sources)

Sejauh ini saya telah menggunakan atribut `cite` untuk mencantumkan sumber kutipan, namun atribut tersebut tidak benar-benar menampilkan sumbernya kepada pengguna. Atribut ini hanya berfungsi di balik layar.

Jika Anda ingin mencantumkan sumber secara visual, Anda dapat menambahkan `element` sitasi (`citation element`), `cite`, di luar `element` `block quotation`. Ini berbeda dengan atribut `cite`. `Element` sitasi adalah `element` `HTML` yang dapat Anda gunakan untuk menandai judul karya kreatif yang dirujuk seperti buku, artikel, lagu, film, situs web, atau makalah penelitian. Berikut adalah contohnya:

```html
<div>
  <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
  </blockquote>
  <p>—Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book].</cite></p>
</div>
```

`Element` `block quotation` berisi teks yang dikutip. Di bawah `element` tersebut Anda dapat melihat `element` paragraf dengan nama penulis, diikuti oleh `element` sitasi (`cite`). `Element` sitasi berisi judul buku tempat kutipan tersebut berasal.

Jika Anda membuka peramban, sekarang sumbernya akan terlihat jelas dan terlihat bahwa kutipan tersebut berasal dari buku yang ditulis oleh Quincy Larson. Judul buku ini adalah `How to Learn to Code and Get a Developer Job`.

## Kutipan Sebaris (Inline Quotations)

Anda harus menggunakan `block quote` seperti ini untuk kutipan panjang dari sumber lain. Namun terkadang Anda hanya perlu mengutip beberapa kata di dalam paragraf yang lebih besar.

Tepat untuk itulah `element` kutipan sebaris (`inline quotation element`) digunakan. `Element` ini untuk kutipan sebaris pendek dari sumber lain. Sebagian besar peramban modern akan menambahkan tanda kutip di sekitar `inline quote` secara otomatis ketika Anda menggunakan `element` ini. Ini adalah contohnya:

```html
<p>
  As Quincy Larson said,
  <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Momentum is everything.
  </q>
</p>
```

Anda dapat melihat `element` paragraf yang berisi teks. Sebagian teks tersebut adalah `inline quote`, karena berada di dalam `element` `inline quotation`. Anda juga dapat menambahkan atribut `cite` untuk mencantumkan sumbernya.

Ini bekerja persis sama seperti pada `element` `block quotation`. Tidak akan ada perubahan visual, namun ini akan memberikan lebih banyak informasi tentang kutipan tersebut kepada pembaca layar dan mesin pencari.

Di peramban, Anda akan melihat bahwa teks yang dikutip merupakan bagian dari paragraf dan dikelilingi oleh tanda kutip. Sebagian besar peramban modern akan menambahkan tanda kutip ini secara otomatis.

Apa perbedaan antara `block quote` dan `inline quote`? Anda harus menggunakan `block quote` untuk kutipan panjang dari sumber lain dan `inline quote` untuk kutipan pendek dari sumber lain yang seharusnya menjadi bagian dari paragraf yang sudah ada.

## Pertanyaan (Questions)

`Element` `HTML` manakah yang digunakan untuk menampilkan kutipan panjang dari sumber lain?

- [ ] `q`
- [x] `blockquote`
- [ ] `cite`
- [ ] `p`

Apa tujuan dari `element` `cite` dalam `HTML`?

- [ ] Untuk menampilkan kutipan sebaris (`inline quotations`).
- [ ] Untuk menentukan `URL` sumber kutipan.
- [x] Untuk menandai judul karya kreatif yang dirujuk.
- [ ] Untuk menampilkan kutipan panjang (`extended quotations`).

Atribut `HTML` manakah yang digunakan untuk menentukan sumber kutipan dalam `element` `block quotation` atau `inline quotation`?

- [ ] `href`
- [ ] `src`
- [ ] `title`
- [x] `cite`

---
[⬅️ Sebelumnya](../2-understanding-nuanced-semantic-elements/3-what-are-description-lists.md) | [Selanjutnya ➡️](2-how-do-you-display-abbreviations-and-acronyms-in-html.md)
