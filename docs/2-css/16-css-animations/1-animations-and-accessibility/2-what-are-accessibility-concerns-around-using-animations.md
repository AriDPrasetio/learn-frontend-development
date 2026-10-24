# Apa Saja Kekhawatiran Aksesibilitas Terkait Penggunaan Animasi, dan Bagaimana prefers-reduced-motion Dapat Membantu?

Animasi dapat sangat meningkatkan daya tarik visual dan pengalaman pengguna (*user experience*) dari sebuah situs web. Namun, animasi juga dapat menimbulkan tantangan aksesibilitas yang signifikan bagi pengguna tertentu. Sangat penting untuk memahami kekhawatiran ini dan menerapkan solusi untuk memastikan situs web Anda tetap dapat diakses oleh semua pengguna.

## Kekhawatiran Aksesibilitas Terkait Animasi

Salah satu kekhawatiran aksesibilitas utama terkait animasi adalah bahwa animasi dapat menyebabkan ketidaknyamanan atau bahkan bahaya fisik bagi sebagian pengguna. Orang dengan gangguan vestibular atau sensitivitas terhadap gerakan dapat mengalami pusing, mual, atau sakit kepala saat terpapar jenis gerakan tertentu di layar.

Selain itu, animasi dapat mengalihkan perhatian bagi pengguna dengan disabilitas kognitif atau gangguan perhatian. Efek berkedip cepat (*rapid flashing*) atau strobo sangatlah bermasalah. Efek tersebut dapat memicu kejang pada penderita epilepsi fotosensitif (*photosensitive epilepsy*). Sebagai aturan umum, hindari konten apa pun yang berkedip lebih dari tiga kali per detik.

Masalah lainnya adalah animasi dapat menyulitkan sebagian pengguna untuk fokus atau membaca konten. Hal ini terutama berlaku bagi pengguna dengan gangguan penglihatan (*low vision*) atau kesulitan membaca yang mungkin kesulitan melacak teks yang bergerak atau tata letak yang bergeser.

## Media Query `prefers-reduced-motion`

Untuk mengatasi masalah ini, `CSS` menyediakan `media query` `prefers-reduced-motion`. Fitur ini memungkinkan pengembang web untuk mendeteksi apakah pengguna telah meminta animasi atau efek gerakan minimal pada tingkat sistem operasi.

Berikut adalah cara Anda dapat menggunakan `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Membedah Kode

Potongan kode `CSS` ini secara efektif menonaktifkan sebagian besar animasi dan transisi bagi pengguna yang telah mengindikasikan preferensi untuk pengurangan gerakan (*reduced motion*). Mari kita bedah:

Aturan `@media` query memeriksa apakah pengguna lebih memilih pengurangan gerakan. Jika benar (*true*), aturan tersebut menerapkan gaya (*styles*) yang ada di dalamnya.

Di dalam `media query`, kita menargetkan semua `element` (`*`) dan menimpa (*override*) `properties` `animation` dan `transition`.

Kita mengatur `animation-duration` dan `transition-duration` ke nilai yang sangat kecil (`0.01ms`). Ini pada dasarnya mematikan animasi namun tetap membiarkannya selesai, yang dapat menjadi hal penting untuk fungsionalitas tertentu.

`animation-iteration-count: 1` memastikan bahwa animasi apa pun yang berulang (*looping*) hanya diputar satu kali.

`scroll-behavior: auto` menonaktifkan efek pengguliran halus (*smooth scrolling*).

Deklarasi `!important` digunakan untuk memastikan aturan-aturan ini diprioritaskan di atas `styles` animasi lainnya.

## Menggunakan Pendekatan yang Ditargetkan

Penting untuk dicatat bahwa meskipun metode ini secara efektif mengurangi gerakan, metode ini merupakan pendekatan menyeluruh (*blanket approach*). Untuk kontrol yang lebih presisi, Anda mungkin ingin mendefinisikan alternatif pengurangan gerakan tertentu untuk animasi Anda.

Berikut adalah contoh pendekatan yang lebih tertarget:

```css
.animated-element {
  transition: transform 0.3s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
  }
}
```

Dalam kasus ini, kita hanya menonaktifkan `transition` untuk `element` tertentu saat pengurangan gerakan diinginkan. Hal ini memungkinkan Anda untuk memberikan pengalaman alternatif yang tidak terlalu intensif gerakan bagi pengguna yang membutuhkannya.

## Praktik Terbaik (Best Practices)

Ingat, tujuannya bukanlah untuk sepenuhnya menghapus semua gerakan dari situs Anda, melainkan memberikan opsi yang memungkinkan semua pengguna berinteraksi secara nyaman dengan konten Anda. Beberapa gerakan masih dapat bermanfaat untuk kegunaan (*usability*) dan umpan balik (*feedback*), bahkan bagi pengguna yang lebih memilih pengurangan gerakan.

Saat menerapkan animasi, pertimbangkan untuk menggunakannya secara bijak dan penuh pertimbangan, bukan hanya sekadar untuk dekorasi. Hindari gerakan besar yang tidak terduga dan sediakan kontrol untuk menjeda, menghentikan, atau menyembunyikan animasi jika memungkinkan. Yang terpenting, gunakan `query` `prefers-reduced-motion` untuk menawarkan alternatif gerakan rendah (*low-motion*), memastikan konten Anda tetap dapat diakses dan nyaman bagi semua pengguna, termasuk mereka yang sensitif terhadap gerakan.

Dengan memperhatikan kekhawatiran aksesibilitas ini dan memanfaatkan alat bantu seperti `prefers-reduced-motion`, Anda dapat menciptakan pengalaman beranimasi yang menarik, inklusif, dan dapat diakses oleh semua pengguna.

## Pertanyaan (Questions)

Apa tujuan utama dari `media query` `prefers-reduced-motion`?

- [ ] Untuk meningkatkan kecepatan semua animasi.
- [x] Untuk mendeteksi apakah pengguna telah meminta animasi minimal di tingkat sistem.
- [ ] Untuk menambahkan lebih banyak animasi ke situs web secara otomatis.
- [ ] Untuk mengubah skema warna animasi.

Manakah dari berikut ini yang BUKAN merupakan masalah aksesibilitas umum yang terkait dengan animasi?

- [ ] Animasi dapat menyebabkan ketidaknyamanan bagi pengguna dengan gangguan vestibular.
- [ ] Animasi dapat mengganggu konsentrasi bagi pengguna dengan disabilitas kognitif.
- [x] Animasi selalu meningkatkan keterbacaan bagi semua pengguna.
- [ ] Animasi dapat memicu kejang pada penderita epilepsi fotosensitif.

Dalam konteks `prefers-reduced-motion`, apa yang dicapai dengan mengatur `animation-duration: 0.01ms !important;`?

- [ ] Membuat animasi berlangsung tepat selama 0,01 milidetik.
- [ ] Meningkatkan kecepatan animasi.
- [x] Secara efektif mematikan animasi namun tetap membiarkannya selesai.
- [ ] Membuat animasi berlangsung tanpa batas waktu.

---

[⬅️ Sebelumnya](1-what-are-css-animations.md) | Selanjutnya ➡️
