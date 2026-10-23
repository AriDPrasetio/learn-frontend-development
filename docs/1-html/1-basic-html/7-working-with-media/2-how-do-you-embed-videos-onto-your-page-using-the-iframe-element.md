# Bagaimana Cara Menyematkan Video ke Halaman Anda Menggunakan Element iframe?

Dalam pelajaran sebelumnya, Anda telah diperkenalkan dengan `element` `iframe`. Dalam pelajaran ini, Anda akan mempelajari lebih lanjut tentang cara bekerja dengan `element` `iframe`. `element` ini merupakan singkatan dari *inline frame*. Ini adalah sebuah `inline element` yang digunakan untuk menyematkan konten `HTML` lain secara langsung di dalam halaman `HTML`. Konten `HTML` tersebut dapat berupa video, peta, `element` `HTML` lain, atau bahkan halaman web lainnya.

Berikut adalah contoh penyematan kursus populer freeCodeCamp dari YouTube. Untuk melihat video yang berbeda, aktifkan editor interaktif dan ubah nilai `src` ke video pilihan Anda.

```html
<iframe
  width="400"
  height="400"
  src="https://www.youtube.com/embed/PkZNo7MFNFg?si=-UBVIUNM3csdeiWF"
  title="Learn JavaScript - Full Course for Beginners (YouTube video)"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
```

Atribut `src` menentukan `URL` dari halaman yang ingin Anda sematkan. Atribut `width` menentukan lebar dari `iframe`. Atribut `height` menentukan tinggi dari `iframe`. Atribut `allowfullscreen` memungkinkan pengguna menampilkan `iframe` dalam mode layar penuh (*full screen*). Merupakan praktik yang baik juga untuk menentukan atribut `title` untuk `iframe`, karena ini penting untuk aksesibilitas (*accessibility*).

Di sisi lain, atribut `allow` memungkinkan Anda menentukan apa yang dapat atau tidak dapat dilakukan oleh `iframe`. Hal ini disebut sebagai daftar izin (*allowlist*). Pada contoh di atas, menambahkan `clipboard-write` ke dalamnya memungkinkan halaman yang disematkan untuk menulis item ke papan klip (*clipboard*) Anda. Item dalam *allowlist* dapat dipisahkan dengan tanda titik koma (`;`) atau spasi, dan keduanya dapat digunakan bersamaan.

Perhatikan bahwa video dapat berasal dari mana saja. Video tersebut tidak harus berasal dari layanan video seperti YouTube dan Vimeo.

Jangan lupa bahwa Anda juga dapat menyematkan peta, halaman web lain, atau `HTML` langsung di dalam `element` `iframe`. Berikut adalah contoh peta yang disematkan.

Cobalah berinteraksi dengan petanya dengan memperbesar dan memperkecil (*zooming in and out*).

```html
<h1>A Map from Openstreetmap.org Embedded with the iframe Element</h1>

<iframe
  width="425"
  height="350"
  src="https://www.openstreetmap.org/export/embed.html?bbox=3.006134033203125%2C6.150112578753815%2C3.6357879638671875%2C6.749850810550778&amp;layer=mapnik"
  title="Map of Lagos area, Nigeria"
  style="border: 1px solid black"
>
</iframe>
<br />
<small>
  <a href="https://www.openstreetmap.org/#map=11/6.4501/3.3210">
    View Larger Map
  </a>
</small>
```

Jika Anda ingin menyematkan `HTML` langsung di dalam `element` `iframe`, Anda harus menggunakan atribut `srcdoc` alih-alih `src`.

## Pertanyaan (Questions)

Apa kepanjangan dari `iframe`?

- [ ] International frame.
- [ ] Inline form.
- [x] Inline frame.
- [ ] Inline form element.

Atribut dari `element` `iframe` manakah yang menentukan lokasi dari konten yang ingin Anda sematkan?

- [x] `src`
- [ ] `url`
- [ ] `frameborder`
- [ ] `cross-origin`

Atribut dari `element` `iframe` manakah yang Anda gunakan sebagai pengganti `src` jika Anda ingin menyematkan HTML langsung?

- [ ] `html`
- [ ] `document`
- [ ] `srcweb`
- [x] `srcdoc`

---
[⬅️ Sebelumnya](1-what-are-replaced-elements.md) | [Selanjutnya ➡️](../8-working-with-links/1-what-are-the-different-target-attribute-types.md)
