# Apa Itu Replaced Element, dan Apa Saja Contohnya?

Sebuah `replaced element` adalah `element` yang kontennya ditentukan oleh sumber daya eksternal (*external resource*) dan bukan oleh `CSS` itu sendiri. `CSS`, atau *Cascading Style Sheets*, digunakan untuk menambahkan gaya pada halaman web. Contoh umum dari `replaced element` meliputi `element` `image`, `iframe`, dan `video`.

Dengan `replaced element`, Anda dapat mengontrol posisi atau tata letak (`layout`) suatu `element`. Namun `CSS` Anda tidak dapat secara langsung mengubah konten dari `element` tersebut. Hal ini mungkin lebih mudah dijelaskan dengan beberapa contoh. Perhatikan `element` gambar (`image`), yang menyematkan gambar di halaman web Anda:

```html
<img src="example-img-url" alt="Descriptive text goes here">
```

`element` itu sendiri digantikan dengan objek eksternal: gambar tersebut. `CSS` Anda dapat mengontrol hal-hal seperti penentuan posisi gambar, atau menerapkan filter padanya, tetapi Anda tidak dapat benar-benar memodifikasi gambar itu sendiri. Contoh yang lebih kuat adalah `element` `iframe`, yang menyematkan situs eksternal di halaman web Anda.

Berikut adalah contoh penggunaan `element` `iframe` untuk video YouTube populer di kanal freeCodeCamp. Jika Anda ingin melihat video yang berbeda di jendela pratinjau, ubah nilai dari atribut `src` ke video pilihan Anda. Untuk melihat pratinjau, Anda perlu mengaktifkan editor interaktif.

**CATATAN**: Jangan khawatir tentang atribut tambahan yang disebutkan dalam contoh interaktif seperti `referrerpolicy` dan `allowfullscreen`. Anda akan mempelajari lebih lanjut tentang bekerja dengan `element` `iframe` di *workshop* mendatang.

```html
<iframe width="400" height="200" src="https://www.youtube.com/embed/u43gJJrVa1I?si=BoDW_puFsy8OEr_Z" title="Professional Cloud Architect Certification Course – Pass the Exam! (YouTube video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

Contoh umum lainnya dari penggunaan `element` `iframe` adalah menyematkan peta ke dalam halaman. Berikut adalah contoh peta yang disematkan.

Aktifkan editor interaktif dan cobalah berinteraksi dengan petanya dengan memperbesar/memperkecil (*zoom in/out*).

```html
<iframe
  title="Map of the Royal Observatory, Greenwich, London"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik">
</iframe>
```

`element` itu sendiri digantikan dengan objek eksternal: situs web tersebut. `CSS` Anda dapat mengubah posisi situs yang disematkan, tetapi Anda tidak dapat mengubah konten situs tersebut. Untuk mendalaminya lebih lanjut, jika situs yang disematkan memiliki `element` `h1`, `CSS` Anda tidak akan dapat menata gaya `element` `h1` tersebut. Anda tidak dapat mengubah ukuran, warna font, dan sebagainya.

Ada beberapa `replaced element` lainnya, seperti `video`, dan `embed`. Dan beberapa `element` berperilaku sebagai `replaced element` dalam keadaan tertentu. Berikut adalah contoh `element` `input` dengan atribut `type` yang disetel ke `image`:

```html
<input type="image" alt="Descriptive text goes here" src="example-img-url">
```

Tipe `input` semacam ini dianggap sebagai sebuah `replaced element`, tetapi tipe `input` lainnya seperti `text`, atau `email` bukanlah `replaced element`.

## Pertanyaan (Questions)

Apa yang dapat Anda tata gayanya pada replaced element?

- [ ] Ukuran font.
- [x] Tata letak atau penentuan posisi.
- [ ] Warna teks tertentu.
- [ ] Semuanya.

Dengan apa sebuah replaced element digantikan?

- [x] Objek eksternal.
- [ ] Elemen lain.
- [ ] Kode CSS.
- [ ] Assembly.

Manakah dari berikut ini yang merupakan replaced element?

- [ ] `h1`
- [ ] `p`
- [x] `iframe`
- [ ] `a`

---
[⬅️ Sebelumnya](../6-working-with-images-and-svgs/3-what-are-svgs.md) | [Selanjutnya ➡️](2-how-do-you-embed-videos-onto-your-page-using-the-iframe-element.md)
