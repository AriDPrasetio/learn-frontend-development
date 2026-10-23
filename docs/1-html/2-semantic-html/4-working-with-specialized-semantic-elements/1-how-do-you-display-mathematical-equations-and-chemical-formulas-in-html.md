# Bagaimana Cara Menampilkan Persamaan Matematika dan Rumus Kimia di HTML?

`Element` `superscript` digunakan untuk menampilkan bagian teks sebagai tikatas (`superscript`). Tikatas adalah simbol atau huruf yang dicetak di atas garis normal teks.

Berikut adalah contoh penggunaan `element` `superscript` untuk mengilustrasikan eksponen (untuk melihat pratinjau, aktifkan editor interaktif):

```html
<p>2<sup>2</sup> (2 squared) is 4.</p>
```

Dalam contoh ini, angka 2 dibungkus dalam tag `sup` untuk mewakili tikatas (`superscript`) di dalam paragraf. Di jendela pratinjau, Anda akan melihat bahwa angka 2 yang kedua berukuran lebih kecil dan posisinya sedikit lebih tinggi daripada angka 2 yang pertama.

Kasus penggunaan umum untuk `element` `superscript` mencakup eksponen (pangkat), huruf superior (`superior lettering`), dan bilangan ordinal (`ordinal numbers`). Berikut adalah contoh penggunaan `element` `superscript` untuk huruf superior (untuk melihat pratinjau, aktifkan editor interaktif):

```html
<p>
  Monseigneur is often written as <strong>M<sup>gr</sup></strong>.
</p>
```

Huruf superior mengacu pada huruf yang ditulis dalam format `superscript`, biasanya untuk menunjukkan singkatan. Huruf `g` dan `r` dibungkus di dalam tag `superscript` untuk mengilustrasikan singkatan dalam contoh ini.

Penting untuk dicatat bahwa `element` `superscript` hanya boleh digunakan untuk alasan tipografi. Jika Anda ingin menata gaya suatu teks dengan garis dasar yang ditinggikan (`raised baseline`), maka Anda harus menggunakan `CSS` alih-alih `element` `superscript`.

Untuk merepresentasikan rumus kimia di dalam `HTML`, Anda dapat menggunakan `element` `subscript`. `Element` ini menggunakan tikbawah (`subscript`) yang menampilkan garis dasar yang diturunkan (`lowered baseline`) menggunakan teks yang lebih kecil.

Berikut adalah contoh penggunaan `element` `subscript` untuk menunjukkan representasi kimia untuk karbon dioksida (untuk melihat pratinjau, aktifkan editor interaktif):

```html
<p>CO<sub>2</sub></p>
```

Angka dua dibungkus di dalam tag `sub` untuk mengilustrasikan bahwa karakter tersebut harus berupa tikbawah (`subscript`).

Kasus penggunaan umum untuk `element` `subscript` meliputi rumus kimia, catatan kaki (`footnotes`), dan indeks variabel (`variable subscripts`).

## Pertanyaan (Questions)

Apa kegunaan utama dari `element` `superscript` dalam `HTML`?

- [ ] Untuk menampilkan teks dalam warna yang berbeda.
- [ ] Untuk menampilkan teks dalam ukuran font yang lebih kecil.
- [x] Untuk menampilkan teks sebagai tikatas (`superscript`) di atas garis normal teks.
- [ ] Untuk menggarisbawahi teks.

Manakah dari berikut ini yang merupakan contoh penggunaan `element` `superscript` yang benar?

- [ ] `<p>2<sub>2</sub> (2 squared) is 4.</p>`
- [x] `<p>2<sup>2</sup> (2 squared) is 4.</p>`
- [ ] `<p>2<sul>2</sul> (2 squared) is 4.</p>`
- [ ] `<p>2<sutp>2</sutp> (2 subscript) is 4.</p>`

Apa yang harus digunakan sebagai pengganti `element` `sup` ketika teks dinaikkan murni untuk tujuan visual atau penataan gaya (`styling`)?

- [ ] `Element` `sub`.
- [x] `CSS`
- [ ] `Element` `strong`.
- [ ] `Element` `em`.

---
[⬅️ Sebelumnya](../3-working-with-text-and-time-semantic-elements/4-how-do-you-display-times-and-dates-in-html.md) | [Selanjutnya ➡️](2-how-do-you-represent-computer-code-in-html.md)
