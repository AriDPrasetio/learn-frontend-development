# Apa Saja Cara Umum untuk Mengoptimalkan Aset Media?

Ada tiga hal yang perlu dipertimbangkan saat menggunakan `media`, seperti gambar (`image`), pada halaman web Anda: ukuran (`size`), format (`format`), dan kompresi (`compression`).

Mari kita bahas tentang ukuran gambar Anda terlebih dahulu. Saat Anda membangun sebuah situs web, Anda akan sering menata gaya gambar agar ditampilkan dalam ukuran tertentu. Misalnya, Anda mungkin menampilkan gambar pada resolusi 640x480. 640 mewakili lebar (`width`) sedangkan 480 mewakili tinggi (`height`) dalam `pixel`. Saat menyiapkan gambar, Anda ingin menskalakannya ke ukuran 640x480 agar cocok dengan penataan gaya tersebut. Jika Anda menyajikan gambar berukuran 1920x1080 tetapi Anda menata gayanya menjadi jauh lebih kecil, Anda mengharuskan pengguna Anda mengunduh data yang tidak perlu. Resolusi yang lebih kecil menghasilkan ukuran file yang lebih kecil.

Hal berikutnya yang perlu dipertimbangkan adalah format file Anda. Dua dari format file yang paling umum adalah `PNG` dan `JPG`, tetapi format-format ini bukan lagi format yang paling ideal untuk menyajikan gambar. Kecuali jika Anda memerlukan dukungan untuk *browser* lawas, Anda harus mempertimbangkan untuk menggunakan format yang lebih optimal, seperti `WEBP` atau `AVIF`.

Akhirnya, Anda dapat menjalankan algoritma kompresi (`compression algorithm`) pada gambar Anda untuk memperkecil ukuran file. Alat seperti `pngcrush` bekerja dengan baik untuk format `lossless` seperti `PNG`, yang dapat dikompresi tanpa kehilangan kualitas apa pun karena data aslinya dapat direkonstruksi secara sempurna. Namun, tidak semua format bersifat `lossless`. `JPG`, misalnya, menggunakan kompresi `lossy` — setiap kali file `JPG` disimpan ulang atau dikompresi ulang, sebagian data gambar akan dibuang secara permanen, sehingga mengakibatkan penurunan kualitas. Anda harus mengingat semua hal ini saat memilih dan menyiapkan gambar untuk halaman web Anda.

## Pertanyaan (Questions)

Bagaimana sebaiknya Anda menskalakan, atau mengatur ukuran, gambar Anda?

- [ ] Gambar Anda harus lebih kecil dari ukuran yang dirender pada halaman.
- [ ] Gambar Anda harus lebih besar dari ukuran yang dirender pada halaman.
- [x] Gambar Anda harus memiliki skala yang sama dengan ukuran yang dirender pada halaman.
- [ ] Tidak masalah, gunakan ukuran apa pun yang Anda inginkan.

Manakah dari berikut ini yang BUKAN merupakan tipe file gambar yang valid?

- [x] TS
- [ ] PNG
- [ ] JPG
- [ ] WEBP

Format file manakah yang menggunakan kompresi lossy, yang berarti menyimpan ulang atau mengompresi ulang akan menurunkan kualitas gambar?

- [ ] WEBP
- [ ] PNG
- [x] JPG
- [ ] GIF

---
[⬅️ Sebelumnya](../5-working-with-audio-and-video-elements/1-what-are-the-roles-of-the-html-audio-and-video-elements.md) | [Selanjutnya ➡️](2-what-are-the-different-types-of-image-licenses.md)
