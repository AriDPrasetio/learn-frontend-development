# Bagaimana Cara Kerja Cascade Algorithm pada Tingkat Tinggi?

`Cascade Algorithm` adalah proses yang digunakan peramban (*browser*) untuk memutuskan `rules` `CSS` mana yang akan diterapkan ketika ada beberapa `styles` yang menargetkan `element` yang sama. Hal ini memastikan bahwa `styles` yang paling tepat digunakan, berdasarkan serangkaian aturan yang terdefinisi dengan jelas.

Proses ini dimulai dengan **relevansi** (*relevance*). Peramban pertama-tama memfilter semua `rules` `CSS` untuk menemukan mana yang benar-benar berlaku untuk `element` yang bersangkutan. Ini termasuk mencocokkan `selectors` dan mempertimbangkan `media queries` yang mungkin sedang aktif.

Sebuah `media query` adalah teknik `CSS` yang digunakan untuk menerapkan `styles` berdasarkan karakteristik perangkat atau `viewport`, seperti lebar (*width*), tinggi (*height*), atau orientasinya.

Selanjutnya, algoritma ini mempertimbangkan **asal dan tingkat kepentingan** (*origin and importance*). `CSS` dapat berasal dari berbagai sumber: `styles` bawaan peramban (`user-agent`), `styles` yang diatur oleh pengguna (*user*), dan `styles` yang ditulis oleh pembuat/pengembang (*author* - yaitu Anda).

Setelah mempertimbangkan asal (*origin*), algoritma kemudian mengevaluasi tingkat kepentingan (*importance*) dari setiap `rule`, memberikan prioritas pada `rules` yang ditandai dengan `!important`, yang menimpa `rules` lain terlepas dari sumbernya.

Setelah memfilter berdasarkan asal dan kepentingan, algoritma akan melihat **specificity**. Ketika dua `rules` dari tingkat asal dan kepentingan yang sama berlaku, `rule` dengan `specificity` yang lebih tinggi akan diterapkan.

`Specificity` adalah ukuran seberapa tertarget suatu `selector`, dengan `selectors` yang lebih spesifik lebih diutamakan dibandingkan dengan yang lebih umum.

Akhirnya, jika semua faktor lainnya sama, **urutan pemunculan** (*order of appearance*) mulai berperan. Ketika dua `rules` memiliki `specificity` yang sama, `rule` yang muncul paling akhir di dalam `CSS` yang akan diterapkan.

Inilah mengapa urutan penulisan `styles` terkadang dapat memengaruhi hasil akhirnya.

Mari kita lihat sebuah contoh.

Di dalam file `HTML`, terdapat sebuah `element` paragraf tunggal. Kemudian di dalam `CSS`, kita memiliki dua `rules`, masing-masing menargetkan `element` paragraf tersebut.

```html
<link rel="stylesheet" href="styles.css">

<p>example paragraph</p>
```

```css
p {
  color: blue;
}

p {
  color: green; 
}
```

`Rule` pertama mengatur semua `element` paragraf ke warna teks biru (`blue`), sedangkan `rule` kedua mengatur semua `element` paragraf ke warna teks hijau (`green`).

Jadi warna apa yang akan diterapkan? Warna hijau (`green`) yang akan diterapkan pada `element` paragraf.

Dengan mempertimbangkan relevansi (*relevance*), asal dan tingkat kepentingan (*origin and importance*), `specificity`, serta urutan pemunculan (*order of appearance*), `Cascade Algorithm` memastikan bahwa `CSS` Anda berperilaku secara terprediksi, memungkinkan Anda merancang halaman web yang lebih kompleks dan bernuansa.

## Pertanyaan (Questions)

Apa langkah pertama yang diambil oleh `Cascade Algorithm` saat menentukan `styles` mana yang akan diterapkan?

- [ ] Memeriksa `specificity` dari `rules`.
- [x] Memfilter `rules` berdasarkan relevansi (*relevance*).
- [ ] Mencari deklarasi `!important`.
- [ ] Menerapkan `rule` terakhir di dalam `CSS`.

Apa yang akan terjadi jika Anda mencoba menerapkan serangkaian `styles` yang saling bertentangan pada dua `rules` paragraf?

- [ ] Sebagian dari `styles` dari setiap `rule` akan diterapkan.
- [ ] Program akan mengalami *crash*.
- [x] `Styles` yang ditulis terakhir yang akan diterapkan.
- [ ] Tidak ada `styles` yang akan diterapkan.

Manakah dari faktor berikut yang TIDAK memengaruhi keputusan `Cascade Algorithm` mengenai `rule` `CSS` mana yang akan diterapkan?

- [ ] `Specificity` dari `selectors`.
- [ ] Urutan pemunculan (*order of appearance*) dari `rules`.
- [ ] Apakah kata kunci `!important` digunakan.
- [x] Nilai `property` `color` dari `rule` `CSS`.

---

[⬅️ Sebelumnya](6-what-is-the-important-keyword.md) | [Selanjutnya ➡️](8-how-does-inheritance-work-with-css-at-a-high-level.md)
