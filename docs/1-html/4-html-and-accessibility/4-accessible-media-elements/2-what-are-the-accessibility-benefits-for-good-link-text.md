# Apa Manfaat Aksesibilitas dari Teks Tautan yang Baik, dan Apa Saja Contoh Teks Tautan yang Baik?

Mari kita pelajari manfaat menulis teks tautan (*link text*) yang baik dalam konteks aksesibilitas, serta beberapa contoh teks tautan yang baik.

## Manfaat Teks Tautan yang Baik

Manfaat nyata pertama dari teks tautan yang baik adalah mempermudah semua orang menemukan informasi dengan cepat. Tautan yang deskriptif membantu pengguna mengetahui ke mana tujuan mereka dan apa yang akan mereka akses. Hal ini memastikan pengguna tidak merasa tersesat dan meningkatkan pengalaman pengguna secara keseluruhan.

Bagi mereka yang menggunakan pembaca layar (*screen readers*), teks tautan yang jelas dan deskriptif adalah suatu keharusan. Pembaca layar membacakan teks tautan dengan lantang, sehingga teks seperti "Read our accessibility guide" (Baca panduan aksesibilitas kami) jauh lebih baik daripada "Click here" (Klik di sini).

Membuat teks tautan jelas dan deskriptif tidak hanya bermanfaat bagi penyandang gangguan penglihatan. Tautan deskriptif juga membantu orang-orang dengan disabilitas kognitif dengan menyediakan konteks yang jelas.

## Praktik Terbaik untuk Teks Tautan

Berikut adalah beberapa praktik terbaik yang perlu diingat saat menulis teks tautan:

- Pastikan tautan terlihat berbeda secara visual dengan menggunakan garis bawah (*underlining*) dan petunjuk visual lainnya, sehingga pengguna dapat dengan mudah mengidentifikasi dan menavigasinya.

- Hindari teks tautan generik seperti "here" (di sini), "click here" (klik di sini), dan "more-info" (info lebih lanjut) karena tidak memberikan informasi yang berguna.

- Usahakan teks tautan ringkas dan deskriptif, idealnya antara 2–5 kata, yang menyampaikan tujuan tautan tersebut.

- Hindari istilah teknis (*jargon*) dan singkatan yang mungkin tidak dipahami pengguna.

- Fokuslah pada tujuan, bukan tindakannya. Misalnya, "hasil perilaku pengguna", alih-alih "klik di sini untuk membaca lebih lanjut".

- Jangan mengulang teks tautan yang sama untuk tujuan yang berbeda.

- Tempatkan tautan sedemikian rupa sehingga tetap masuk akal di dalam kalimat di sekitarnya. Misalnya, "untuk detail lebih lanjut, kunjungi halaman acara kami", alih-alih "Klik di sini untuk info lebih lanjut".

## Contoh Teks Tautan yang Baik

Berikut beberapa contoh teks tautan yang baik untuk kasus penggunaan tertentu, dibandingkan dengan contoh yang kurang membantu.
Katakanlah Anda ingin menautkan ke halaman yang menyediakan detail tentang suatu acara seperti ini:

```html
<a href="webinar-details-link">Details</a>
```

`Details` (Detail) bersifat samar dan tidak memberikan informasi spesifik tentang apa yang akan ditemukan pengguna jika mereka mengeklik tautan tersebut. Tanpa konteks tambahan, pengguna mungkin tidak mengetahui apakah tautan tersebut mengarah ke detail tentang webinar, produk, kebijakan, atau hal lainnya.

Sekarang, berikut adalah contoh teks tautan yang baik:

```html
<a href="webinar-details-link">
  Get details about our upcoming webinar
</a>
```

Teks tautan ini memberi pengguna konteks tentang konten yang akan mereka temukan, mempermudah mereka memutuskan apakah ingin mengekliknya. Ini mengurangi ambiguitas dengan menentukan bahwa tautan tersebut berkaitan dengan webinar.

Berikut contoh lain yang menautkan ke postingan di blog:

```html
<a href="/blog-post-link">Read more</a>
```

Teks tautan `Read more` (Baca selengkapnya) tidak ideal dalam hal aksesibilitas karena kurangnya konteks.

Berikut contoh teks tautan yang lebih baik:

```html
<a href="/blog-post-link">
   Read our latest blog post on web accessibility
</a>
```

Teks tautan yang diperbarui ini memberi pengguna gambaran yang lebih jelas tentang apa yang diharapkan dan mengapa mereka mungkin ingin mengeklik tautan tersebut, yang sangat penting bagi mereka yang menggunakan pembaca layar.

Mari kita lihat satu contoh lagi. Katakanlah Anda ingin memberikan informasi lebih lanjut tentang topik tertentu:

```html
<a href="/link-to-topic">More info</a>
```

`More info` (Info lebih lanjut) juga samar dan dapat menjadi masalah untuk aksesibilitas. Teks ini tidak memberikan detail spesifik tentang tujuan tautan, yang dapat membingungkan bagi pengguna yang mengandalkan pembaca layar atau mereka yang menavigasi situs secara non-linear.

Berikut contoh teks tautan yang lebih baik:

```html
<a href="/link-to-topic">
   Learn more about our accessibility efforts
</a>
```

Teks tautan yang diperbarui ini lebih baik karena secara jelas mendeskripsikan apa yang akan ditemukan pengguna jika mereka mengeklik tautan tersebut. Pengguna dapat langsung memahami bahwa tautan tersebut mengarah ke informasi tentang upaya aksesibilitas Anda.

## Pertanyaan (Questions)

Mengapa teks tautan yang jelas dan deskriptif sangat penting bagi mereka yang menggunakan pembaca layar (*screen readers*)?

- [ ] Ini meningkatkan daya tarik visual situs web.
- [x] Ini membantu pengguna memahami tujuan tautan saat bernavigasi dengan pembaca layar (*screen reader*).
- [ ] Ini mempercepat kecepatan pemuatan situs web.
- [ ] Ini mengurangi jumlah tautan di halaman.

Apa manfaat nyata pertama dari teks tautan yang baik?

- [x] Membantu pengguna mengetahui ke mana arah tujuan mereka dan apa yang akan mereka akses.
- [ ] Meningkatkan estetika halaman web.
- [ ] Meningkatkan kecepatan pemuatan halaman.
- [ ] Mengurangi jumlah tautan pada halaman.

Manakah dari berikut ini yang merupakan praktik terbaik untuk menulis teks tautan?

- [ ] Menggunakan teks umum seperti "click here" agar tetap sederhana.
- [ ] Mengulang teks tautan yang sama untuk tujuan yang berbeda.
- [x] Membuat tautan terlihat berbeda secara visual dengan garis bawah dan petunjuk visual lainnya.
- [ ] Berfokus pada tindakan daripada tujuan, seperti "click here to read more".

---
[⬅️ Sebelumnya](1-when-is-the-alt-attribute-needed.md) | [Selanjutnya ➡️](3-what-are-good-ways-to-make-audio-and-video-content-accessible.md)
