# Kapan Atribut alt Dibutuhkan, dan Apa Saja Contoh Alt Text yang Baik?

Teks alternatif (*alternative text*), sering disingkat sebagai `alt` text, adalah deskripsi teks singkat dari suatu gambar. Ini memberikan informasi penting tentang gambar bagi pengguna yang tidak dapat melihatnya, seperti orang-orang yang menggunakan pembaca layar (*screen readers*) dan teknologi asistif lainnya.

Ini sangat penting untuk membuat situs web dapat diakses oleh penyandang disabilitas visual.

Teks alternatif juga digunakan oleh mesin pencari (*search engines*) untuk memahami gambar. Beberapa peramban (*browsers*) juga dapat menampilkannya saat gambar tidak dimuat dengan benar. Hal ini dapat terjadi saat file gambar hilang atau saat pengguna mengalami masalah konektivitas. Jadi, `alt` text bermanfaat untuk berbagai tujuan yang berbeda.

## Menuliskan Alt Text yang Baik

Seseorang dengan disabilitas visual tidak akan dapat mengetahui apa yang ada di dalam gambar kecuali dijelaskan dalam `alt` text. Contoh dari `alt` text yang buruk untuk gambar anak anjing adalah "A cute puppy."

![A cute puppy.](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/puppy.png)

Teks ini tidak cukup spesifik untuk menyampaikan detail penting dari gambar tersebut, seperti bagaimana rupa anak anjing itu? Di mana anak anjing itu berada? Apakah ada benda penting di sekitar anak anjing itu?

Mari kita perbaiki. Contoh teks alternatif yang baik adalah: "A black and white puppy with an orange collar lies on its belly in the sand, looking off to the side. A bright orange ball rests near its front paws." (Seekor anak anjing hitam-putih dengan kalung oranye berbaring di atas pasir sambil memandang ke samping. Sebuah bola oranye cerah tergeletak di dekat kaki depannya).

Di sini Anda dapat melihatnya dalam `HTML` dengan elemen gambar (`img`), atribut `alt`, dan deskripsi yang lebih terperinci:

```html
<img src="puppy.png" alt="A black and white puppy with an orange collar lies on its belly in the sand, looking off to the side. A bright orange ball rests near its front paws." />
```

Penting untuk dicatat bahwa tidak ada satu cara mutlak yang benar untuk menulis `alt` text pada suatu gambar. Apa yang Anda sertakan dalam deskripsi akan bergantung pada konteks penggunaan gambar tersebut. Misalnya, jika gambar anak anjing tersebut berada di situs web tentang ras anjing, Anda mungkin ingin menyertakan lebih banyak spesifikasi tentang deskripsi fisik anak anjing tersebut dan mengabaikan fakta bahwa anak anjing tersebut sedang berada di pantai bermain bola oranye. Pada akhirnya, `alt` text yang Anda gunakan untuk suatu gambar harus mencerminkan tujuan utama pencantuman gambar tersebut pada halaman, dan informasi yang Anda berikan harus memberi orang yang tidak dapat melihat gambar tersebut detail yang diperlukan untuk memahami tujuan tersebut.

## Contoh Lain: Resor Tropis

Di sini kita memiliki contoh lain dari resor tropis yang indah. Mari kita deskripsikan.

![Resort.](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/resort.jpg)

Contoh `alt` text yang buruk untuk gambar ini adalah "Resort."

Ini terlalu pendek dan tidak memberikan informasi yang cukup mengenai gambar tersebut. Untuk menyempurnakan deskripsi ini, Anda dapat memperluasnya dengan menyertakan elemen-elemen terpenting dari gambar:

"Tropical resort featuring a swimming pool surrounded by palm trees and bungalows." (Resor tropis yang menampilkan kolam renang yang dikelilingi oleh pohon kelapa dan bungalo).

Anda dapat menggunakan atribut `alt` dalam `HTML` seperti ini:

```html
<img src="resort.png" alt="Tropical resort featuring a swimming pool surrounded by palm trees and bungalows." />
```

## Praktik Terbaik Alt Text

Setelah Anda mengetahui apa yang membuat `alt` text baik atau buruk, mari kita lihat beberapa praktik terbaiknya:

- Anda sebaiknya menjaga `alt` text tetap singkat. Teks harus cukup detail untuk memahami gambar tetapi tidak terlalu panjang hingga membingungkan.

- Jangan mencoba mendeskripsikan setiap detail kecil. Fokuslah pada aspek-aspek paling penting dari gambar.

- Umumnya, Anda tidak perlu mengawalinya dengan "image of" (gambar dari) atau "picture of" (foto dari). Anda bisa langsung memulai deskripsi secara langsung.

- Selain itu, jika terdapat teks serupa di sekitar gambar, Anda tidak perlu menuliskannya kembali.

- Biasanya disarankan untuk mengakhiri `alt` text dengan tanda titik demi konsistensi.

- Jika gambar berfungsi sebagai tautan ke halaman lain, alih-alih mendeskripsikan gambar itu sendiri, `alt` text harus mendeskripsikan apa yang akan terjadi jika pengguna mengekliknya.

Sebagai contoh, jika situs web Anda memiliki ikon panah kanan yang membawa pengguna ke halaman berikutnya, alih-alih menulis `alt` text yang hanya mengatakan "right arrow", seperti pada contoh berikut di mana Anda dapat melihat atribut `alt` dengan deskripsi ini:

```html
<a href="about.html">
  <img src="arrow-right.png" alt="Right arrow." />
</a>
```

Anda sebaiknya menuliskan sesuatu seperti ini sebagai gantinya, di mana `alt` text mendeskripsikan apa yang akan terjadi jika pengguna mengeklik gambar. Mereka akan berpindah ke halaman berikutnya:

```html
<a href="about.html">
  <img src="arrow-right.png" alt="Go to next page." />
</a>
```

## Alt Text untuk Gambar Dekoratif

Hanya gambar yang menyampaikan informasi penting yang harus memiliki `alt` text. Jika gambar hanya digunakan untuk tujuan dekoratif semata, gambar tersebut harus memiliki `alt` text `null` (kosong), sehingga dapat diabaikan oleh pembaca layar (*screen readers*) dan teknologi asistif lainnya.

Berikut adalah contoh dari atribut `alt` yang kosong:

```html
<img src="decorative_image.jpg" alt="" />
```

Setiap gambar di situs web Anda harus memiliki atribut `alt`, meskipun nilainya kosong. Jika Anda menghilangkan atribut `alt` sepenuhnya, beberapa pembaca layar justru akan membacakan nama file gambar tersebut, yang dapat mengganggu bagi orang-orang yang menggunakan teknologi asistif, sehingga hal ini tidak disarankan.

Terakhir, sebelum situs web Anda diluncurkan (*live*), Anda harus menguji secara saksama apakah pembaca layar dapat membacakan `alt` text dengan benar.

Menulis `alt` text yang efektif sangat penting untuk menciptakan konten web yang aksesibel. Sebagai pengembang web, dengan memberikan deskripsi yang jelas tentang gambar-gambar Anda, Anda dapat memastikan bahwa semua orang dapat berinteraksi dengan situs web Anda dalam pengalaman daring yang inklusif.

## Pertanyaan (Questions)

Apa tujuan dari `alt` text pada sebuah gambar?

- [ ] Untuk meningkatkan tampilan suatu gambar.
- [ ] Untuk menyediakan elemen dekoratif pada halaman web.
- [x] Untuk mendeskripsikan gambar bagi penyandang disabilitas visual.
- [ ] Untuk meningkatkan kecepatan pemuatan situs web.

Kapan waktu yang tepat untuk mengosongkan `alt` text pada suatu gambar?

- [x] Saat gambar tersebut murni bersifat dekoratif.
- [ ] Saat gambar tersebut penting untuk memahami konten.
- [ ] Saat gambarnya berukuran kecil.
- [ ] Selalu kosongkan, untuk meningkatkan performa situs web.

Apa yang harus menjadi fokus utama dari `alt` text untuk gambar yang berfungsi sebagai tautan (*link*)?

- [ ] Mendeskripsikan gambar secara visual.
- [x] Mengindikasikan tujuan dari tautan tersebut.
- [ ] Menggabungkan deskripsi gambar dan tujuan tautan.
- [ ] `alt` text tidak penting untuk gambar yang berupa tautan.

---
[⬅️ Sebelumnya](../3-introduction-to-aria/5-what-is-the-aria-describedby-attribute.md) | [Selanjutnya ➡️](2-what-are-the-accessibility-benefits-for-good-link-text.md)
