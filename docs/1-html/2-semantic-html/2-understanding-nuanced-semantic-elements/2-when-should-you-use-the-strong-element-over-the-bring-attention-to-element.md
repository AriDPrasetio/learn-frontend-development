# Kapan Anda Harus Menggunakan Element Strong Dibandingkan Element Bring Attention To?

`Element` "bring attention to", `b`, umumnya digunakan untuk menyoroti kata kunci dalam ringkasan, atau nama produk dalam ulasan. Biasanya, peramban (`browser`) menampilkan teks ini dalam bentuk cetak tebal (`boldface`). Berikut adalah contoh penggunaan `element` `b` untuk menyoroti nama produk dalam ulasan ini:

```html
<p>
  We tested several products, including the <b>SuperSound 3000</b> for audio
  quality, the <b>QuickCharge Pro</b> for fast charging, and the
  <b>EcoClean Vacuum</b> for cleaning. The first two performed well, but the
  <b>EcoClean Vacuum</b> did not meet expectations.
</p>
```

Peramban me-render bagian-bagian teks ini sebagai teks tebal (`bold text`). Penekanan visual ini akan menarik perhatian pembaca ke nama-nama produk tersebut.

Jika Anda perlu menekankan pentingnya teks tersebut, Anda harus menggunakan `element` `strong` alih-alih `element` `b`.

`strong` adalah `semantic HTML element` yang menekankan teks yang krusial, atau mendesak (`urgent`). Ini adalah contoh di mana `element` `strong` digunakan untuk memberi label peringatan yang sangat penting tentang potensi reaksi alergi yang mungkin dialami pelanggan terhadap suatu produk:

```html
<p>
  <strong>Warning:</strong> This product may cause allergic reactions.
</p>
```

`Element` `strong` mengomunikasikan rasa urgensi tersebut.

Secara visual keduanya sangat mirip, karena keduanya di-render sebagai teks tebal secara default. Namun maknanya sangat berbeda. Sementara `element` "bring attention to" hanya menarik perhatian ke teks tanpa menunjukkan tingkat kepentingan yang lebih tinggi, `element` `strong` melakukan lebih dari itu. `Element` ini menyampaikan rasa kepentingan, atau urgensi. Inilah perbedaan utama mereka.

Untuk memilih di antara keduanya, pertimbangkan tujuan teks dan tingkat kepentingannya di dalam konten sekitarnya.

## Pertanyaan (Questions)

`Element` `HTML` manakah yang digunakan untuk menarik perhatian ke bagian teks tertentu tanpa menyampaikan tingkat kepentingan tertentu?

- [ ] `strong`
- [ ] `mark`
- [ ] `em`
- [x] `b`

`Element` `HTML` manakah yang digunakan untuk menunjukkan teks yang secara khusus penting atau mendesak?

- [x] `strong`
- [ ] `b`
- [ ] `em`
- [ ] `mark`

Apa perbedaan utama antara `b` dan `strong`?

- [ ] Tidak ada perbedaan; keduanya membuat teks menjadi tebal.
- [x] `b` untuk penekanan visual, sedangkan `strong` untuk menekankan tingkat kepentingan.
- [ ] `strong` untuk penataan gaya (`styling`), sedangkan `b` untuk menekankan tingkat kepentingan.
- [ ] Keduanya hanya digunakan untuk tujuan presentasional saja.

---
[⬅️ Sebelumnya](1-when-should-you-use-the-emphasis-element-over-the-idiomatic-text-element.md) | [Selanjutnya ➡️](3-what-are-description-lists.md)
