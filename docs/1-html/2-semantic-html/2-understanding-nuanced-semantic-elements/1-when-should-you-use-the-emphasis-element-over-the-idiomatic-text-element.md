# Kapan Anda Harus Menggunakan Element Emphasis Dibandingkan Element Idiomatic Text?

`Element`-`element` ini sangat berkaitan erat dengan konsep `presentational` dan `semantic HTML`. `Element` `idiomatic text`, `i`, awalnya digunakan untuk tujuan presentasional guna menampilkan teks dalam format miring (`italics`). Namun sekarang, `element` ini sering digunakan untuk menyoroti nada atau suasana hati alternatif (`alternative voice or mood`), istilah idiomatik dari bahasa lain, istilah teknis, dan pikiran.

Berikut adalah contoh dari spesifikasi resmi `HTML`, yang menggunakan `element` `i` untuk menunjukkan frasa idiomatik dalam bahasa Prancis.

```html
<p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>
```

Atribut `lang` di dalam tag pembuka `<i>` digunakan untuk menentukan bahasa dari konten. Dalam hal ini, bahasanya adalah bahasa Prancis. `Element` `i` tidak menunjukkan apakah teks tersebut penting atau tidak, `element` ini hanya menunjukkan bahwa teks tersebut berbeda dari teks di sekitarnya.

Jika Anda perlu menekankan pentingnya teks tersebut, Anda dapat menggunakan `semantic element` serupa yang disebut `element` penekanan (`emphasis element`), yaitu `em`. Ini biasanya direkomendasikan jika Anda perlu memberikan lebih banyak konteks. Anda harus menggunakan `element` ini untuk bagian teks yang memerlukan penekanan khusus dibandingkan teks di sekitarnya. Penggunaannya biasanya dibatasi hanya pada beberapa kata, karena dapat mengubah makna kalimat.

Ini adalah contoh `element` `emphasis` di dalam sebuah paragraf.

```html
<p>
  Never give up on <em>your</em> dreams.
</p>
```

Anda dapat melihat kalimat `Never give up on your dreams`. Perhatikan bahwa kata `your` akan ditekankan karena berada di dalam `element` ini. Di peramban (`browser`), Anda akan melihat kata `your` dimiringkan (`italicized`) untuk memberi tahu pembaca bahwa ini adalah kata penting dalam kalimat tersebut.

Meskipun terlihat sama saat teks berada di dalam `element` `idiomatic text`, `semantic element` `emphasis` menyampaikan makna dan tingkat kepentingannya di balik layar.

Penting untuk diketahui bahwa `element`-`element` ini tidak boleh digunakan hanya untuk tujuan presentasional semata. Jika Anda perlu menampilkan teks dalam huruf miring, namun teks tersebut tidak memiliki tujuan, gaya, atau makna khusus dalam paragraf, Anda harus menggunakan `CSS` sebagai gantinya.

## Pertanyaan (Questions)

`Element` `HTML` manakah yang digunakan untuk membedakan teks dari konten di sekitarnya tanpa menyampaikan tingkat kepentingan tertentu?

- [ ] `em`
- [ ] `strong`
- [x] `i`
- [ ] `mark`

Kapan Anda harus menggunakan `CSS` alih-alih `element` `i` atau `em`?

- [ ] Ketika teks memiliki tujuan atau makna khusus dalam paragraf.
- [x] Ketika Anda ingin menampilkan teks dalam huruf miring hanya untuk tujuan presentasional saja.
- [ ] Ketika teks merupakan ekspresi idiomatik.
- [ ] Ketika teks perlu ditekankan karena tingkat kepentingannya.

Apa perbedaan utama antara `i` dan `em`?

- [ ] Tidak ada perbedaan; keduanya sama-sama menekankan teks.
- [x] `i` menunjukkan bahwa teks berbeda dari konten di sekitarnya, sedangkan `em` menekankan teks yang penting.
- [ ] `i` untuk penekanan, sedangkan `em` untuk penataan gaya (`styling`).
- [ ] Keduanya menekankan teks dengan cara yang sama, tetapi `em` menyampaikan lebih banyak tingkat kepentingan.

---
[⬅️ Sebelumnya](../1-importance-of-semantic-html/3-what-is-the-difference-between-presentational-and-semantic-html.md) | [Selanjutnya ➡️](2-when-should-you-use-the-strong-element-over-the-bring-attention-to-element.md)
