# Apa Itu Fixed dan Sticky Positioning, dan Bagaimana Perbedaannya dengan Absolute Positioning?

Pemosisian *fixed* (`fixed positioning`) dan pemosisian *sticky* (`sticky positioning`) adalah dua strategi pemosisian `CSS` yang penting, masing-masing menawarkan perilaku yang berbeda dibandingkan dengan `absolute positioning`. Ketika sebuah `element` diposisikan dengan `position: fixed`, `element` tersebut dikeluarkan dari alur dokumen normal dan ditempatkan relatif terhadap *viewport*, yang berarti `element` tersebut tetap berada di posisi yang sama bahkan ketika pengguna menggulir (*scroll*). Ini sering digunakan untuk `element-element` seperti tajuk (*headers*) atau bilah navigasi (*navigation bars*) yang harus tetap terlihat sepanjang waktu. Sebagai contoh, jika Anda ingin sebuah judul (*heading*) tetap berada di posisi tetap (*fixed*) di bagian atas halaman, Anda dapat menggunakan kode berikut:

```html
<link rel="stylesheet" href="styles.css">
<h1>Fixed Header</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
<p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
<p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
<p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.</p>
<p>Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
<p>Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus.</p>
<p>Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.</p>
<p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
<p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
```

```css
body {
  margin: 0;
  padding-top: 60px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  position: fixed;
  top: 0;
  width: 500px;
  background: white;
  padding: 10px;
  border-bottom: 2px solid #ccc;
}

p {
  max-width: 600px;
  margin: 20px auto;
}
```

Pada contoh ini, `element` `h1` akan menempel pada bagian atas *viewport*, dan bahkan saat pengguna menggulir (*scroll*), `element` tersebut akan tetap berada di tempatnya. Hal ini sangat berguna untuk membuat `element-element` antarmuka pengguna (*UI*) yang persisten, seperti *sticky header* atau navigasi yang selalu terlihat.

`position: sticky` berperilaku sebagai gabungan (*hybrid*) antara pemosisian relatif (`relative`) dan pemosisian tetap (`fixed`). Awalnya, `element` berperilaku seolah-olah ia diposisikan secara relatif, tetap berada di dalam alur dokumen. Namun, begitu pengguna menggulir `element` tersebut melewati titik tertentu, `element` tersebut akan "menempel" (*sticky*) pada *viewport* (biasanya di bagian atas) dan berperilaku seolah-olah ia berposisi `fixed`. Ini sangat bagus untuk membuat `element-element` seperti bilah navigasi yang lengket (*sticky navigation bars*), yang hanya menjadi `fixed` setelah pengguna menggulir ke posisi tertentu. Berikut adalah cara Anda menerapkan `sticky positioning`:

```html
<link rel="stylesheet" href="styles.css">
<h1>Sticky Header</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
<p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
<p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
<p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.</p>
<p>Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.</p>
<p>Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus.</p>
<p>Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci.</p>
<p>Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum.</p>
<p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit.</p>
```

```css
h1 {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

Pada contoh ini, `element` `h1` akan berperilaku secara normal sampai pengguna menggulirnya sejauh `30px` dari atas, yang pada titik tersebut ia akan "menempel" ke bagian atas *viewport*.

Berikut adalah beberapa perbedaan utama antara pemosisian `absolute`, `fixed`, dan `sticky`:

- Pemosisian absolut (`absolute positioning`) menghapus sebuah `element` dari alur dokumen dan memosisikannya relatif terhadap leluhur berposisi (`positioned ancestor`) terdekat, atau blok penampung awal (*initial containing block*) jika tidak ada leluhur yang berposisi. `Element` tersebut tetap berada pada posisi itu terlepas dari pengguliran (*scrolling*).
- Pemosisian tetap (`fixed positioning`) juga mengeluarkan `element` dari alur dokumen tetapi menguncinya relatif terhadap *viewport*, artinya `element` tersebut akan tetap terlihat di tempat yang sama bahkan saat halaman digulir.
- Pemosisian lengket (`sticky positioning`) mempertahankan `element` di dalam alur normal pada awalnya, tetapi memungkinkannya untuk menempel di tempatnya setelah digulir melewati ambang batas (*threshold*) yang ditentukan.

Strategi-strategi ini memungkinkan Anda membuat tata letak (*layout*) yang mencakup `element-element` melayang, *sticky header*, dan komponen `UI` yang lebih dinamis, meningkatkan pengalaman pengguna (*user experience*) dengan membuat informasi penting selalu dapat diakses.

## Pertanyaan (Questions)

Apa perbedaan utama antara pemosisian `fixed` dan `sticky`?

- [x] `fixed` tetap berada di tempatnya relatif terhadap *viewport*, sedangkan `sticky` berpindah berdasarkan posisi gulir (*scroll*).
- [ ] `sticky` tetap berada di tempatnya relatif terhadap *viewport*, sedangkan `fixed` berpindah berdasarkan posisi gulir (*scroll*).
- [ ] Baik `fixed` maupun `sticky` berperilaku dengan cara yang sama.
- [ ] Keduanya tidak dapat digunakan untuk *header* atau bilah navigasi.

`Property` apa yang harus didefinisikan agar pemosisian `sticky` dapat berfungsi?

- [ ] `position: absolute`
- [ ] `position: fixed`
- [x] `position: sticky`
- [ ] `z-index`

Bagaimana perbedaan antara pemosisian `fixed` dan pemosisian `absolute`?

- [x] `fixed` bersifat relatif terhadap *viewport*, sedangkan `absolute` bersifat relatif terhadap leluhur berposisi terdekat.
- [ ] Pemosisian `fixed` tidak mengizinkan pengguliran (*scrolling*).
- [ ] Pemosisian `absolute` mempertahankan `element` di dalam alur dokumen normal.
- [ ] Pemosisian `fixed` menyembunyikan `element` saat digulir.

---

[⬅️ Sebelumnya](3-what-is-absolute-positioning.md) | [Selanjutnya ➡️](5-what-is-the-z-index-property.md)
