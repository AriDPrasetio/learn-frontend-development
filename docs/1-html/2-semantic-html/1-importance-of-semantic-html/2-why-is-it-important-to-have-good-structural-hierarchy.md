# Mengapa Memiliki Hierarki Struktural yang Baik Itu Penting?

Aspek terpenting dalam menciptakan hierarki struktural adalah penggunaan `heading element` yang tepat. `Heading element` diberi nomor seperti `h1`, `h2`, `h3`, dan seterusnya. Angka-angka ini mewakili tingkat `heading` (`heading level`) untuk `element` tersebut.

Sama seperti dokumen teks, Anda tidak ingin menggunakan level `heading` dalam urutan yang salah. `Element` `h1` Anda adalah `heading` tingkat teratas Anda. Anda akan jarang memiliki lebih dari satu `h1` pada sebuah halaman, dan biasanya harus diletakkan sebelum semua konten Anda.

`Element` `h2` Anda adalah sub-heading (`subheading`). `Element` ini harus selalu diletakkan setelah `h1` Anda dan mungkin diletakkan setelah beberapa teks pengantar. Berbeda dengan `element` `h1`, Anda dapat memiliki beberapa `element` `h2` di halaman Anda. Anda akan sering melakukan hal ini untuk membedakan berbagai bagian (`section`) konten yang berbeda.

Mengikuti pola tersebut, `element` `h3` Anda harus selalu diletakkan setelah `element` `h2`. Artinya, Anda tidak boleh melompat langsung dari `h1` ke `h3`. Namun, Anda dapat memiliki beberapa `heading element` pada level yang sama. Sebagai contoh, `code` ini benar:

```html
<section>
  <h1>freeCodeCamp</h1>
  <h2>Learn Front-End Development</h2>
  <h2>Learn Back-End Development</h2>
</section>
```

Namun `code` ini tidak benar, karena `h3` diletakkan sebelum `h2`.

Pindahkan `element` `h2` ke atas `h3` agar benar secara semantik. Untuk berinteraksi dengan `code`, Anda perlu mengaktifkan editor interaktif (`interactive editor`).

```html
<section>
  <h1>freeCodeCamp</h1>
  <h3>Introduction to HTML</h3>
  <h2>Learn Front-End Development</h2>
</section>
```

Mungkin Anda tergoda untuk menggunakan `heading element` tertentu karena gayanya (`styling`), seperti `h1` untuk teks besar:

```html
<article>
  <p>
    Here is some
    <h1>Large Text</h1>
  </p>
</article>
```

Sebagai gantinya, Anda harus memilih `element` yang sesuai untuk struktur dokumen Anda dan menggunakan `CSS` untuk mendapatkan gaya yang Anda inginkan.

Menggunakan hierarki yang tepat sangat penting untuk aksesibilitas (`accessibility`). Teknologi asistif (`assistive technologies`), seperti pembaca layar (`screen reader`), bergantung pada struktur halaman web untuk menentukan cara menguraikan (`parse`) dan mengumumkan halaman web tersebut kepada pengguna. Menggunakan `element` `h3` setelah `h1` dapat membuat pengguna pembaca layar mengira mereka secara tidak sengaja melewatkan konten penting, karena ketiadaan `element` `h2`.

Struktur yang tepat juga penting untuk `SEO`. Mesin pencari (`search engine`) menggunakan otomatisasi untuk menguraikan konten halaman web Anda dan menentukan kapan serta di mana konten tersebut harus muncul di hasil pencarian. Jika struktur Anda cacat (`malformed`), mesin pencari mungkin tidak dapat memberikan peringkat yang baik pada hasil pencarian yang relevan.

Terakhir, tergantung pada seberapa tidak tepatnya struktur Anda, `HTML` Anda bahkan mungkin tidak valid secara teknis. Jika ini terjadi, peramban web (`web browser`) harus menebak apa yang sebenarnya ingin Anda lakukan. Dan apa yang ditebaknya bahkan mungkin sama sekali bukan apa yang Anda inginkan.

Seperti yang telah Anda pelajari hari ini, ada banyak alasan untuk menggunakan hierarki struktural yang tepat untuk halaman Anda. Ingatlah hal ini saat Anda membangun proyek-proyek baru.

## Pertanyaan (Questions)

Mengapa hierarki struktural itu penting?

- [ ] Aksesibilitas (`accessibility`)
- [ ] `SEO`
- [ ] Agar peramban (`browser`) memahami apa yang kita maksud
- [x] Semua jawaban di atas benar

`Heading element` manakah yang harus mendahului `element` `h3`?

- [ ] `h5`
- [x] `h2`
- [ ] `h6`
- [ ] `h4`

Bagaimana cara Anda membuat teks yang lebih besar di halaman Anda?

- [ ] Gunakan `element` apa pun yang Anda inginkan, dan beri gaya dengan `CSS`.
- [ ] Gunakan `h1` karena sudah memiliki teks yang besar.
- [ ] Gunakan `element` `span`.
- [x] Gunakan `element` struktural yang benar, dan beri gaya dengan `CSS`.

---
[⬅️ Sebelumnya](1-why-should-you-care-about-semantic-html.md) | [Selanjutnya ➡️](3-what-is-the-difference-between-presentational-and-semantic-html.md)
