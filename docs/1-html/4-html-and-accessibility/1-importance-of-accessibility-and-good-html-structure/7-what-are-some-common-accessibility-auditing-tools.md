# Apa Saja Alat Audit Accessibility Umum yang Dapat Digunakan?

`Accessibility` adalah aspek yang sangat penting namun sering kali diabaikan dari konten digital. Saat membuat konten digital Anda dapat diakses, penting untuk memastikan konten tersebut memenuhi standar-standar `accessibility`.

`Accessibility auditing tool` (alat audit aksesibilitas) adalah aplikasi yang membantu Anda meningkatkan `accessibility` konten digital Anda dengan melaporkan masalah-masalah `accessibility` yang dapat ditemukan dengan mudah melalui pengujian otomatis (*automated testing*). Konten ini mencakup situs web, aplikasi web (`web applications`), dan aplikasi seluler (*mobile apps*).

Penting untuk dicatat bahwa meskipun alat `accessibility` otomatis memiliki peran dalam meningkatkan `accessibility`, alat-alat ini biasanya hanya akan menemukan sekitar sepertiga dari semua kemungkinan masalah `accessibility`. Oleh karena itu, penting untuk tidak mengandalkan alat-alat ini sepenuhnya untuk mengevaluasi `accessibility` konten Anda. Pengujian manual (*manual testing*), lebih disukai jika dilakukan oleh penyandang disabilitas, akan selalu diperlukan untuk memastikan bahwa konten Anda benar-benar dapat diakses sebaik mungkin.

Mari kita lihat beberapa alat gratis yang dapat membantu Anda meningkatkan `accessibility` konten digital Anda.

`Google Lighthouse` adalah pemeriksa metrik web populer yang dapat Anda jalankan langsung di dalam `Chrome DevTools`. Menjalankan `Lighthouse` di `Chrome DevTools` memungkinkan Anda untuk mengaudit tidak hanya situs web yang sudah aktif (*live websites*), tetapi juga situs web yang dikembangkan secara lokal (*locally developed*) yang berjalan di komputer Anda.

Metrik yang dapat Anda periksa meliputi `accessibility`, `SEO`, `best practices`, dan `performance`.

Untuk menggunakan `Lighthouse`, buka `DevTools` Anda dengan menekan `F12` dan beralih ke *tab* `Lighthouse`. Pilih metrik yang ingin Anda periksa, pilih perangkat yang ingin Anda uji, dan klik tombol "Analyze page load".

Skor `accessibility` akan muncul setelah pemeriksaan selesai, bersama dengan daftar masalah apa pun yang perlu diperbaiki.

Anda juga dapat menjalankan audit `Lighthouse` secara daring menggunakan `PageSpeed Insights` di `pagespeed.web.dev`. Karena `PageSpeed Insights` adalah layanan web ter-hosting yang berjalan di server Google, alat ini tidak dapat mengakses situs web yang berjalan secara lokal di komputer Anda, artinya alat ini hanya dapat menguji situs web aktif yang dapat diakses secara publik.

`WAVE` adalah alat pemeriksa `accessibility` andal lainnya yang dapat Anda gunakan sebagai ekstensi `Chrome` atau di web. Yang perlu Anda lakukan hanyalah memasukkan URL situs web Anda dan laporan `accessibility` yang komprehensif akan dibuat untuk Anda. Laporan ini mencakup fitur `accessibility` yang diterapkan, `ARIA`, dan kontras.

`IBM Equal Access Accessibility Checker` adalah alat tangguh lainnya untuk meningkatkan `accessibility` konten digital. Dengannya, Anda dapat memindai situs web Anda untuk mencari masalah `accessibility` dan membuat laporan terperinci.

Anda dapat menggunakannya sebagai ekstensi `Chrome` atau *add-on* `Firefox`.

Untuk menggunakan `IBM Accessibility Checker` sebagai ekstensi `Chrome`, unduh dari Chrome Web Store. Buka `DevTools` Anda dengan menekan `F12` dan pilih *tab* "Accessibility Checker" yang terletak di panel `Elements`. Klik tombol pemindaian (*scan*) untuk memulai pemeriksaan dan sebuah laporan akan dibuat untuk Anda. Anda dapat mengekspor laporan tersebut sebagai lembar kerja (*spreadsheet*) dan file `HTML` dengan mengklik tombol "Export XLS".

Harap diingat, meskipun alat-alat otomatis ini membantu Anda membuat konten Anda lebih mudah diakses, skor sempurna dari salah satu alat tersebut tidak berarti bahwa konten Anda sepenuhnya dapat diakses. Cakupan masalah yang diuji oleh alat-alat ini terbatas, dan pengujian manual akan selalu dibutuhkan untuk memastikan pengalaman yang lebih mudah diakses bagi semua orang.


## Pertanyaan (Questions)


Manakah dari berikut ini yang paling baik menggambarkan alat audit aksesibilitas (accessibility auditing tool)?


- [ ] Alat ini secara otomatis memperbaiki semua masalah `accessibility`.

- [x] Alat ini mengevaluasi seberapa mudah konten digital Anda dapat diakses.

- [ ] Alat ini hanya memeriksa aplikasi seluler.

- [ ] Alat ini tidak memerlukan input manual sama sekali.



Manakah dari berikut ini yang menjelaskan bagaimana Anda dapat menggunakan IBM Equal Access Accessibility Checker?


- [ ] Alat ini hanya dapat digunakan sebagai aplikasi desktop.

- [ ] Alat ini dapat digunakan tanpa integrasi pengembangan apa pun.

- [ ] Alat ini secara eksklusif hanya untuk aplikasi seluler.

- [x] Alat ini dapat digunakan sebagai ekstensi `Chrome`, *add-on* `Firefox`, atau paket `NPM`.



Manakah dari berikut ini yang merupakan batasan dari penggunaan PageSpeed Insights?


- [ ] Alat ini memberikan metrik yang tidak dapat diandalkan.

- [ ] Alat ini hanya dapat menguji situs web lokal.

- [x] Alat ini tidak dapat menguji situs web lokal.

- [ ] Alat ini tidak mendukung pengujian perangkat seluler.



---
[⬅️ Sebelumnya](6-what-is-voice-recognition-software.md) | [Selanjutnya ➡️](8-how-does-proper-heading-level-structure-affect-accessibility.md)
