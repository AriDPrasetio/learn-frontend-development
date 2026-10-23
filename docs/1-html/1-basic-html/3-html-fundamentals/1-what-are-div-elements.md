# Apa Itu Element Div dan Kapan Anda Harus Menggunakannya?


`Element` `div` digunakan sebagai wadah (*container*) untuk mengelompokkan `element-element` lainnya.

Berikut adalah contoh `element` `div`. Tambahkan `element` paragraf lain di dalam `element` `div` dan lihat perubahannya di jendela pratinjau. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

```html
<div>
  <p>Example paragraph element.</p>
</div>
```

Anda terutama akan menggunakan `element` `div` ketika Anda ingin mengelompokkan `element-element` `HTML` yang akan berbagi serangkaian gaya `CSS`. Anda akan mempelajari lebih lanjut tentang `CSS` dalam pelajaran dan *workshop* mendatang.

Meskipun `element` `div` umum digunakan dalam basis kode dunia nyata, Anda harus berhati-hati untuk tidak menggunakannya secara berlebihan. Ada kalanya `element` lain lebih tepat digunakan.

Sebagai contoh, jika Anda ingin membagi konten Anda menjadi beberapa bagian (*section*), maka `element` `section` akan lebih tepat daripada `element` `div`.

Tambahkan `element` `section` lain di bawah yang pertama. Kemudian di dalam `element` `section` tersebut, tambahkan sebuah `element` `h2` dan `p`. Anda dapat menggunakan teks apa pun yang Anda sukai dan Anda akan melihat perubahannya di jendela pratinjau. Untuk berinteraksi dengan contoh tersebut, Anda perlu mengaktifkan editor interaktif.

```html
<section>
  <h2>Mammals</h2>
  <p>
    Mammals are warm-blooded animals with fur or hair. Most give birth to live
    young.
  </p>
  <ul>
    <li>Lion</li>
    <li>Elephant</li>
    <li>Dolphin</li>
  </ul>
</section>
```

`Element` `section` memiliki arti semantik (*semantic meaning*) dibandingkan `element` `div` yang tidak memiliki makna semantik. Semantik adalah makna dari kata-kata atau frasa dalam suatu bahasa. Dalam `HTML`, yang merupakan sebuah bahasa, `element-element` juga memiliki makna semantik masing-masing. Jadi, ini berarti jika Anda menggunakan `element` `section`, browser akan menangkap makna semantiknya dan tahu untuk memperlakukannya sebagai sebuah bagian, baik di komputer desktop, perangkat seluler, maupun lainnya.


## Pertanyaan (Questions)


Makna semantik apa yang dimiliki oleh `element` `div`?


- [ ] `Element` `div` mewakili wadah untuk konten pengantar atau sekumpulan tautan navigasi.

- [ ] `Element` `div` mendefinisikan *footer* untuk dokumen atau bagian.

- [ ] `Element` `div` menentukan konten utama halaman dan harus unik.

- [x] `Element` `div` tidak memiliki makna semantik.



Kapan waktu yang paling tepat untuk menggunakan `element` `div` di dalam `HTML` Anda?


- [ ] Saat membagi konten ke dalam bagian-bagian terpisah dari suatu halaman.

- [x] Saat mengelompokkan konten terkait untuk tujuan pemberian gaya (*styling*).

- [ ] Saat menandai judul utama dari suatu halaman.

- [ ] Saat menyematkan media seperti gambar atau video.



Manakah dari `element` `HTML` berikut yang biasanya digunakan untuk mengelompokkan konten ke dalam bagian-bagian yang jelas terpisah?


- [x] `section`

- [ ] `aside`

- [ ] `nav`

- [ ] `h1`



---
[⬅️ Sebelumnya](../2-understanding-the-html-boilerplate/3-what-is-utf-8-character-encoding.md) | [Selanjutnya ➡️](2-what-are-ids-and-classes.md)
