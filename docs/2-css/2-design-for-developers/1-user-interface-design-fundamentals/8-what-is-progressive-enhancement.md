# Apa Itu Progressive Enhancement?

Peningkatan bertahap (*progressive enhancement*) adalah pendekatan desain yang memastikan semua pengguna, terlepas dari *browser* atau perangkat yang digunakan, dapat mengakses konten dan fungsionalitas esensial dari sebuah aplikasi.

Pendekatan ini berfokus pada penyediaan pengalaman inti (*core experience*) yang berfungsi untuk semua orang, sembari menawarkan fitur-fitur tambahan dan peningkatan kepada pengguna dengan *browser* yang lebih canggih atau koneksi internet yang lebih baik.

Pendekatan `progressive enhancement` berpegang pada prinsip-prinsip inti berikut:

- Semua konten inti dan fungsionalitas dasar harus dapat diakses di semua *browser*
- Semua tata letak lanjutan (`advanced layouts`) harus disediakan melalui `stylesheet` `CSS` eksternal
- Semua fungsionalitas lanjutan harus disediakan melalui file `JavaScript` eksternal
- Preferensi *browser* pengguna harus dihormati

Menggunakan pendekatan `progressive enhancement` membuat aplikasi Anda lebih mudah diakses (*accessible*) karena semua konten dan fungsionalitas inti tidak boleh terblokir di lingkungan yang tidak didukung.

Dari segi kecepatan, pendekatan `progressive enhancement` juga dapat membantu meningkatkan performa aplikasi Anda.

Pengguna yang menggunakan kecepatan koneksi internet lebih lambat akan tetap dapat mengakses konten karena *browser* akan mengunduh sumber daya yang diperlukan terlebih dahulu.

Terkait `SEO` (*Search Engine Optimization*), `progressive enhancement` juga dapat membantu meningkatkan visibilitas aplikasi Anda.

Mesin pencari akan dapat merayapi (*crawl*) konten aplikasi Anda karena konten inti tersedia dalam respons `HTML` awal.

Meskipun beberapa pihak mengkritik pendekatan ini karena dianggap tidak selalu realistis untuk aplikasi yang sangat bergantung pada `JavaScript` untuk fungsionalitasnya, pendekatan ini tetap merupakan praktik yang baik untuk diikuti saat membangun aplikasi.

## Pertanyaan (Questions)

Apa tujuan utama dari `progressive enhancement`?

- [ ] Untuk memastikan bahwa aplikasi sangat bergantung pada `JavaScript`.
- [x] Untuk memastikan semua pengguna, terlepas dari *browser* atau perangkat, dapat mengakses konten dan fungsionalitas esensial dari sebuah aplikasi.
- [ ] Untuk memastikan bahwa fitur-fitur kompleks terbaru tersedia untuk semua pengguna.
- [ ] Untuk memastikan bahwa aplikasi hanya tersedia bagi pengguna dengan *browser* terbaru.

Manakah dari berikut ini yang BUKAN merupakan prinsip inti dari `progressive enhancement`?

- [ ] Preferensi *browser* pengguna harus dihormati.
- [ ] Semua tata letak lanjutan harus disediakan melalui *stylesheet* `CSS` eksternal.
- [x] Preferensi *browser* pengguna harus diabaikan.
- [ ] Semua fungsionalitas lanjutan harus disediakan melalui file `JavaScript` eksternal.

Apa kritik umum terhadap pendekatan `progressive enhancement`?

- [x] Hal ini tidak selalu realistis untuk aplikasi yang sangat bergantung pada `JavaScript` untuk fungsionalitasnya.
- [ ] Hal ini dapat menghasilkan pengalaman pengguna yang kurang menarik pada perangkat modern karena fokusnya pada kompatibilitas ke belakang (*backward compatibility*).
- [ ] Hal ini menyebabkan halaman web membengkak dengan kode dan sumber daya berlebihan yang tidak dibutuhkan oleh *browser* modern.
- [ ] Hal ini memerlukan pengujian *browser* yang ekstensif pada *browser* yang lebih lama dan kurang mumpuni, yang dapat memakan waktu dan biaya.

---

[⬅️ Sebelumnya](7-what-are-best-practices-for-working-with-images-in-your-designs.md) | [Selanjutnya ➡️](../2-user-centered-design/1-what-is-user-centered-design.md)
