# Apa Saja Pertimbangan Aksesibilitas untuk Latar Belakang (Background)?

Dalam desain web, latar belakang (*background*) memainkan peran penting dalam menentukan keseluruhan tampilan dan nuansa dari sebuah halaman web.

Namun, saat mendesain dengan *background*, sangat penting untuk mempertimbangkan aksesibilitas guna memastikan konten Anda dapat digunakan (*usable*) dan dibaca oleh semua pengguna, termasuk mereka yang memiliki gangguan penglihatan.

Salah satu perhatian aksesibilitas utama terkait *background* adalah memastikan adanya kontras yang cukup antara latar belakang dan teks.

Tanpa kontras yang memadai, pengguna dengan gangguan penglihatan, termasuk mereka yang memiliki penglihatan rendah (*low vision*) atau buta warna, mungkin kesulitan membaca konten di halaman Anda.

Kontras mengacu pada perbedaan tingkat kecerahan (*lightness*) atau kegelapan (*darkness*) antara dua warna. Kontras yang memadai antara warna latar belakang (*background color*) dan warna teks (*text color*) sangat penting untuk keterbacaan (*readability*).

*Web Content Accessibility Guidelines* (WCAG) merekomendasikan rasio kontras minimum 4.5:1 untuk teks normal dan 3:1 untuk teks besar (*large text*).

Sebagai contoh, menempatkan teks putih di atas latar belakang abu-abu muda akan menghasilkan kontras yang buruk, membuat teks sulit dibaca. Namun, teks putih di atas latar belakang biru tua akan memberikan kontras yang baik, meningkatkan keterbacaan bagi semua pengguna.

Berikut adalah contoh kontras yang buruk (*poor contrast*):

```html
<p style="color: lightgray; background-color: whitesmoke;">
   This is an example of poor contrast.
</p>
```

Sekarang, berikut adalah contoh kontras yang baik (*good contrast*):

```html
<p style="color: white; background-color: darkslategray;">
  This is an example of good contrast.
</p>
```

Pertimbangan lainnya adalah menghindari penempatan teks di atas latar belakang yang ramai (*busy*) atau rumit, seperti gambar atau gradien dengan banyak warna. Latar belakang yang ramai dapat mempersulit membedakan teks dari latar belakangnya, terlepas dari tingkat kontrasnya.

Saat mendesain *background*, hindari penggunaan warna sebagai satu-satunya cara untuk menyampaikan informasi. Misalnya, hanya menggunakan warna untuk menunjukkan pesan kesalahan (*error*) atau keberhasilan (*success*) (seperti merah untuk *error* atau hijau untuk *success*) dapat menjadi masalah bagi pengguna dengan buta warna.

Selain warna, Anda sebaiknya menggunakan simbol atau teks untuk menyampaikan informasi. Misalnya, di samping pesan kesalahan berwarna merah, Anda dapat menggunakan ikon atau teks tebal (*bold text*) untuk memperjelas bahwa ada sebuah kesalahan (*error*).

Meskipun lebih jarang ditemui, audio atau video latar belakang juga dapat memengaruhi aksesibilitas.

Musik latar atau video yang terputar otomatis (*auto-playing*) dapat mengganggu bagi sebagian pengguna, khususnya mereka yang memiliki disabilitas kognitif. Jika Anda menyertakan audio latar belakang, selalu sediakan cara bagi pengguna untuk membisukan (*mute*) atau menjeda (*pause*) audio tersebut.

Dengan mempertimbangkan faktor-faktor aksesibilitas ini, Anda dapat membuat desain yang lebih inklusif yang memastikan konten Anda dapat dibaca dan digunakan oleh semua pengguna, apa pun kemampuan mereka.

## Pertanyaan (Questions)

Mengapa penting untuk mempertahankan kontras yang memadai antara teks dan latar belakang?

- [ ] Untuk membuat halaman terlihat lebih berwarna.
- [x] Untuk membuat teks lebih mudah dibaca oleh semua pengguna.
- [ ] Untuk mengurangi waktu pemuatan (*loading time*) pada halaman web.
- [ ] Untuk menyorot teks dengan cara yang berbeda.

Manakah dari hal berikut yang harus dihindari saat menempatkan teks di atas latar belakang?

- [ ] Menerapkan latar belakang dengan kontras tinggi.
- [x] Menggunakan latar belakang yang ramai atau kompleks tanpa adanya lapisan pelindung (*overlay*).
- [ ] Menggunakan teks putih di atas latar belakang hitam.
- [ ] Menggunakan warna latar belakang solid di belakang teks.

Apa masalah dari penggunaan warna sebagai satu-satunya indikator informasi, seperti menampilkan pesan kesalahan dalam warna merah?

- [ ] Ini membuat situs web terlihat kurang berwarna.
- [ ] Ini tidak memengaruhi pengguna dengan gangguan penglihatan.
- [x] Ini dapat bermasalah bagi pengguna dengan buta warna.
- [ ] Ini membutuhkan lebih banyak kode `CSS`.

---

[⬅️ Sebelumnya](2-what-is-a-background-gradient.md) | [Selanjutnya ➡️](4-what-are-the-different-ways-you-can-add-borders-around-images.md)
