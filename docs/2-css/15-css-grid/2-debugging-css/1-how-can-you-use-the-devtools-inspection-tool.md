# Bagaimana Cara Menggunakan Alat Inspeksi DevTools dan Validator CSS untuk Men-debug CSS Anda?

`Developer tools`, alat inspeksi (*inspection tools*), dan validator `CSS` adalah sumber daya penting untuk men-*debug* masalah `CSS` dan memastikan lembar gaya (*stylesheets*) Anda bebas kesalahan dan teroptimalkan.

Alat-alat ini memberikan wawasan yang sangat berharga tentang bagaimana `CSS` Anda diterapkan dan dapat membantu mengidentifikasi potensi masalah.

Mari kita mulai dengan `developer tools` peramban (*browser*), yang umumnya dikenal sebagai `DevTools`. Sebagian besar peramban modern, termasuk Chrome, Firefox, dan Safari, dilengkapi dengan `DevTools` bawaan. Untuk mengaksesnya, Anda dapat mengeklik kanan pada sebuah `element` di halaman web Anda dan memilih "Inspect" (Periksa) atau menggunakan pintasan keyboard seperti <kbd>F12</kbd> atau <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>I</kbd> (di macOS).

`DevTools` memungkinkan Anda memeriksa dan memodifikasi `CSS` Anda secara waktu nyata (*real-time*). Panel Styles menampilkan semua aturan `CSS` yang diterapkan pada `element` yang dipilih, termasuk gaya yang diwarisi (*inherited styles*).

Anda dapat mengaktifkan dan menonaktifkan masing-masing `property`, mengedit `value`, dan bahkan menambahkan aturan baru secara langsung di peramban. Umpan balik langsung ini sangat berguna untuk bereksperimen dengan berbagai `styles` tanpa memodifikasi kode sumber Anda.

Alat inspeksi, yang merupakan bagian dari `DevTools`, memungkinkan Anda mengarahkan kursor (*hover*) ke atas `element` pada halaman Anda dan melihat model kotak (*box model*)-nya, termasuk `margin`, `border`, `padding`, dan area konten. Ini sangat berguna untuk mendiagnosis masalah tata letak (*layout*) atau memahami mengapa `element-element` diposisikan dengan cara tertentu.

Validator `CSS` adalah alat penting lainnya untuk *debugging*. W3C CSS Validator adalah pilihan yang populer. Validator ini memeriksa `CSS` Anda terhadap spesifikasi resmi dan melaporkan kesalahan (*errors*) atau peringatan (*warnings*) apa pun. Untuk menggunakannya, Anda dapat mengunggah file `CSS` Anda, memasukkan `CSS` Anda secara langsung, atau memberikan URL untuk divalidasi.

Sebagai contoh, katakanlah Anda sedang bekerja dengan `CSS` berikut:

```css
.container {
  width: 100%;
  height: 200px
  background-color: #F0F0F0;
}
```

Validator akan menunjukkan bahwa ada titik koma (*semicolon*) yang hilang setelah `property` `height`. Kesalahan seperti ini dapat dengan mudah terlewatkan tetapi dapat menyebabkan masalah yang signifikan pada lembar gaya (*stylesheet*) Anda.

Saat men-*debug* desain responsif, fitur emulasi perangkat (*device emulation*) di `DevTools` sangatlah berharga. Fitur ini memungkinkan Anda menyimulasikan tampilan situs Anda di berbagai ukuran layar dan perangkat. Ini dapat membantu Anda mengidentifikasi masalah *breakpoint* atau `styles` yang tidak diskalakan dengan baik di berbagai ukuran *viewport*.

Ingatlah bahwa proses *debugging* `CSS` yang efektif sering kali melibatkan kombinasi alat-alat ini. Anda dapat mulai dengan menggunakan validator untuk menangkap kesalahan sintaksis apa pun, lalu menggunakan `DevTools` untuk memeriksa `element` tertentu dan bereksperimen dengan perubahan. Alat emulasi perangkat kemudian dapat membantu memastikan `styles` Anda berfungsi dengan baik di berbagai ukuran layar.

Dengan menguasai alat-alat ini, Anda dapat secara signifikan mempercepat proses *debugging* `CSS` Anda dan membuat lembar gaya (*stylesheets*) yang lebih tangguh dan bebas kesalahan.

Penggunaan teknik *debugging* ini secara teratur tidak hanya akan membantu Anda menyelesaikan masalah secara langsung, tetapi juga meningkatkan pemahaman Anda secara keseluruhan tentang `CSS` dan bagaimana ia berinteraksi dengan `HTML` Anda.

## Pertanyaan (Questions)

Apa keuntungan utama menggunakan `DevTools` peramban untuk *debugging* `CSS`?

- [ ] Memperbaiki semua kesalahan `CSS` secara otomatis.
- [x] Memungkinkan inspeksi dan modifikasi `CSS` secara *real-time*.
- [ ] Mengompresi file `CSS` Anda.
- [ ] Menghasilkan aturan `CSS` baru untuk Anda.

Manakah dari berikut ini yang BUKAN merupakan fitur umum dari validator `CSS`?

- [ ] Memeriksa `CSS` terhadap spesifikasi resmi.
- [ ] Melaporkan kesalahan sintaksis.
- [x] Memberikan saran untuk meningkatkan performa `CSS`.
- [ ] Mengidentifikasi titik koma yang hilang.

Bagaimana fitur emulasi perangkat (*device emulation*) di `DevTools` dapat membantu dalam *debugging* `CSS`?

- [ ] Secara otomatis menyesuaikan `CSS` Anda untuk semua perangkat.
- [x] Menampilkan bagaimana situs Anda terlihat pada berbagai ukuran layar dan perangkat.
- [ ] Membuat file `CSS` terpisah untuk setiap perangkat.
- [ ] Mengoptimalkan gambar untuk perangkat seluler.

---

[⬅️ Sebelumnya](../1-working-with-css-grid/8-how-can-you-position-items-on-the-grid-using-the-grid-template-areas-property.md) | Selanjutnya ➡️
