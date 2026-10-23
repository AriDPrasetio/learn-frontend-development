# Apa Itu Atribut aria-hidden, dan Bagaimana Cara Kerjanya?

## Apa Itu Atribut `aria-hidden`?

Jika Anda perlu menampilkan konten secara visual tetapi pada saat yang sama menyembunyikannya dari orang yang menggunakan teknologi asistif, seperti pembaca layar (*screen readers*), Anda dapat menggunakan atribut `aria-hidden`.

Anda hanya perlu menambahkannya ke elemen `HTML` yang ingin Anda sembunyikan dan mengatur nilainya menjadi `true`, seperti yang dapat Anda lihat di sini: `aria-hidden="true"`.

Atribut ini menyembunyikan elemen beserta seluruh elemen anaknya dari *accessibility tree*, sembari tetap menjaganya terlihat di halaman. Kasus penggunaan umum mencakup:

- Ikon dan gambar yang hanya memiliki tujuan dekoratif.
- Konten duplikat.

## Kapan Tidak Boleh Menggunakan Atribut `aria-hidden`

Penting untuk diingat bahwa `aria-hidden` hanya menyembunyikan konten dari teknologi asistif, seperti pembaca layar. Jika konten tersebut seharusnya disembunyikan dari semua pengguna, maka Anda tidak boleh menggunakan `aria-hidden` untuk menyembunyikannya. Sebagai contoh, menu hamburger yang sedang ditutup (*collapsed*) harus disembunyikan dari semua pengguna *keyboard*, bukan hanya pengguna pembaca layar. Dalam kasus ini, Anda dapat menyetel properti `CSS` `display` ke `none` pada menu tersebut untuk menghapusnya dari halaman yang dirender dan dari *accessibility tree* saat sedang ditutup.

## Hindari Menyembunyikan Elemen yang Dapat Difokuskan (Focusable)

Anda tidak boleh menggunakan `aria-hidden` untuk menyembunyikan elemen yang dapat difokuskan (*focusable*) dengan *keyboard*. Atribut `aria-hidden` hanya menghapus elemen dari *accessibility tree*. Atribut ini tidak menghapusnya dari `DOM`. Dengan demikian, pengguna pembaca layar masih dapat berpindah (*tab*) ke elemen tersebut, tetapi pembaca layar mereka tidak akan mengumumkan elemen tersebut, yang secara efektif membuat mereka fokus pada "ketiadaan" (*nothing*).

## Contoh: Menyembunyikan Ikon Dekoratif

Berikut adalah contoh di mana kita menyembunyikan ikon dari *accessibility tree* dengan menambahkan atribut `aria-hidden` bernilai `true`.

Kita hanya membiarkan teks terbuka (*exposed*) untuk teknologi asistif guna menghindari kebingungan yang mungkin timbul akibat redundansi memiliki ikon dan teks untuk tujuan yang sama.

**CATATAN**: Contoh interaktif ini menyertakan `CDN` Font Awesome agar Anda dapat melihat ikon roda gigi ditampilkan di jendela pratinjau. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

```html
<head>
  <!-- Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css"
  />
</head>

<button>
  <i class="fa-solid fa-gear" aria-hidden="true"></i>
  <span class="label">Settings</span>
</button>
```

## Kapan Anda Tidak Memerlukan Atribut `aria-hidden`

Anda tidak perlu menggunakan `aria-hidden` ketika:

- Elemen `HTML` sudah memiliki atribut `hidden`.
- Elemen tersebut atau leluhur (*ancestor*) elemen tersebut sudah disembunyikan dengan `display: none`.
- Elemen tersebut atau leluhur elemen tersebut sudah disembunyikan dengan `visibility: hidden`.

Dalam ketiga kasus ini, elemen tersebut sudah disembunyikan dari *accessibility tree*, sehingga atribut `aria-hidden` tidak diperlukan.

## Menguji Implementasi Anda

Seperti halnya menggunakan atribut `ARIA` apa pun, Anda harus selalu menguji dengan teknologi asistif, dan sebaiknya melibatkan penyandang disabilitas untuk menguji karya Anda, guna memastikan bahwa konten tetap mudah dipahami bahkan dengan adanya elemen tersembunyi ini.

## Nilai Atribut `aria-hidden` yang Bersarang (Nested)

Anda juga harus mengetahui bahwa menyetel `aria-hidden` ke `false` tidak akan mengekspos elemen ke teknologi asistif jika ada induk (*parent*) dari elemen tersebut yang memiliki atribut ini bernilai `true`.

## Ringkasan

Atribut `aria-hidden` digunakan untuk menyembunyikan elemen dari orang-orang yang menggunakan teknologi asistif, seperti pengguna pembaca layar (*screen readers*).

Meskipun bermanfaat untuk menyembunyikan elemen murni dekoratif dan konten duplikat, atribut ini harus digunakan secara hemat guna menghindari terhambatnya aksesibilitas.

Secara umum, semua konten dan fungsionalitas yang tersedia di halaman web juga harus tersedia bagi orang-orang yang menggunakan teknologi asistif. Kasus penggunaan untuk `aria-hidden` sangat spesifik dan sempit, serta harus dibatasi terutama untuk membuat pengalaman lebih bersih bagi pengguna pembaca layar dengan menghapus informasi yang murni dekoratif atau duplikat. Jangan gunakan `aria-hidden` untuk menyembunyikan konten yang Anda anggap tidak menarik bagi pengguna pembaca layar. Pengguna pembaca layar berhak memiliki akses ke seluruh informasi di halaman.

Dengan mengikuti praktik terbaik ini dan menguji pengalaman pengguna, Anda dapat menciptakan pengalaman daring yang inklusif untuk semua orang.

## Pertanyaan (Questions)

Apa tujuan utama dari atribut `aria-hidden`?

- [ ] Untuk mendefinisikan tampilan visual suatu elemen.
- [ ] Untuk meningkatkan kinerja situs web.
- [x] Untuk menyembunyikan elemen dari teknologi asistif.
- [ ] Untuk meningkatkan kompatibilitas peramban (*browser*).

Kapan atribut `aria-hidden` sebaiknya digunakan?

- [ ] Untuk semua elemen di halaman web.
- [ ] Untuk elemen yang tersembunyi secara visual tetapi tetap penting bagi pengalaman pengguna.
- [x] Untuk elemen dekoratif yang tidak berkontribusi pada konten utama.
- [ ] Untuk elemen yang ditambahkan atau dihapus secara dinamis.

Apa potensi risiko dari penggunaan atribut `aria-hidden` yang berlebihan?

- [ ] Berkurangnya kinerja situs web.
- [ ] Ketidakcocokan dengan peramban lama.
- [x] Terhambatnya aksesibilitas bagi pengguna penyandang disabilitas.
- [ ] Meningkatnya ukuran file.

---
[⬅️ Sebelumnya](3-what-are-the-roles-of-the-aria-label-and-aria-labelledby-attributes.md) | [Selanjutnya ➡️](5-what-is-the-aria-describedby-attribute.md)
