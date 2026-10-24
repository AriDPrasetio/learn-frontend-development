# Apa Itu At-Rule @font-face, dan Bagaimana Cara Kerjanya?

Sebelum kita menyelami lebih dalam, Anda perlu mengetahui apa itu `at-rule` di `CSS`. `At-rules` adalah pernyataan (*statements*) yang memberikan instruksi kepada `browser`. Anda dapat menggunakannya untuk menentukan berbagai aspek dari *stylesheet*, seperti `media queries`, `keyframes`, `font faces`, dan lainnya. Anda akan mempelajari lebih lanjut mengenai konsep seperti `media query` dan `keyframes` pada pelajaran-pelajaran mendatang. Kali ini, Anda akan mempelajari tentang `at-rule` `@font-face`.

## Sintaksis Dasar (The Basic Syntax)

Dengan `@font-face`, Anda dapat mendefinisikan `font` kustom dengan menentukan file `font`, format, serta properti penting lainnya, seperti `weight` dan `style`. Berikut adalah sintaksis dasarnya. Anda dapat melihat `@font-face` yang diikuti oleh blok yang diapit oleh tanda kurung kurawal (*curly brackets*):

```css
@font-face {
  /* Descriptors */
}
```

## Deskriptor `font-family` (The font-family Descriptor)

Di dalam tanda kurung kurawal, Anda perlu menyertakan deskriptor (*descriptors*) untuk menyesuaikan `font face` Anda. Mari kita lihat beberapa yang paling sering digunakan. Deskriptor `font-family` menentukan nama yang akan Anda gunakan di seluruh *stylesheet* untuk merujuk ke `font` tersebut. Sebagai contoh, anggaplah Anda mendefinisikan aturan `@font-face` berikut. Aturan ini memiliki deskriptor `font-family` yang didefinisikan dengan nilai `MyCustomFont`:

```css
@font-face {
  font-family: "MyCustomFont";
}
```

Dalam hal ini, Anda perlu menggunakan nama tersebut di dalam *stylesheet* Anda di mana pun Anda ingin menetapkan `custom font family` tersebut ke semua `element` yang cocok dengan sebuah `CSS selector`. Sebagai contoh, Anda akan menggunakannya sebagai nilai dari `font-family`:

```css
body { 
  font-family: "MyCustomFont"; 
}
```

## Deskriptor `src` (The src Descriptor)

Namun agar `at-rule` `@font-face` valid, Anda juga perlu menentukan `src`. Deskriptor ini berisi referensi ke sumber daya `font` (*font resources*). Pada dasarnya ini adalah daftar referensi eksternal atau nama `font face` yang terpasang secara lokal yang dipisahkan dengan tanda koma. Deskriptor ini juga dapat menyertakan petunjuk (*hints*) mengenai format dan teknologi dari sumber daya `font` tersebut.

Pada kode di bawah ini, `src` didefinisikan. Nilainya adalah daftar URL yang dipisahkan dengan tanda koma dan diletakkan pada baris terpisah untuk meningkatkan keterbacaan:

```css
@font-face {
  font-family: "MyCustomFont"; 
  src: url("path/to/font.woff2"),
    url("path/to/font.woff"),
    url("path/to/font.otf");
}
```

Anda dapat memanggil fungsi `url()` untuk menyertakan file di dalam *stylesheet* Anda. Dalam kasus ini, kita menyertakan file `font`. Anda harus menuliskan path file di dalam tanda kurung dan tanda kutip, termasuk ekstensi filenya. Untuk meningkatkan keterbacaan, Anda dapat menuliskan setiap sumber daya pada baris yang berbeda, namun yang terakhir harus diakhiri dengan titik koma (*semicolon*).

## Menentukan Format Font (Specifying Font Formats)

Untuk setiap sumber daya `font`, Anda juga dapat menentukan formatnya. Ini bersifat opsional. Ini merupakan petunjuk bagi `browser` mengenai format `font`. Jika format diabaikan, sumber daya akan diunduh dan formatnya akan dideteksi setelah selesai diunduh. Jika formatnya tidak valid, sumber daya tidak akan diunduh.

Format `font` yang memungkinkan meliputi `collection`, `embedded-opentype`, `opentype`, `svg`, `truetype`, `woff`, dan `woff2`.

Berikut adalah contoh dengan format `font`. Perhatikan bagaimana kita menuliskan format spesifik di dalam tanda kurung dan tanda kutip:

```css
@font-face {
  font-family: "MyCustomFont"; 
  src: url("path/to/font.woff2") format("woff2"),
    url("path/to/font.otf") format("opentype"),
    url("path/to/font.woff") format("woff");
}
```

Pada contoh ini, Anda dapat melihat bahwa kita menentukan format `WOFF2`, format `OpenType`, dan format `WOFF`.

`woff` merupakan singkatan dari "Web Open Font Format". Perbedaan antara `WOFF` dan `WOFF2` terletak pada algoritma yang digunakan untuk mengompresi data. `OpenType` adalah format untuk `font` komputer yang dapat diskalakan (*scalable*) yang dikembangkan oleh Microsoft dan Adobe yang memungkinkan pengguna mengakses fitur tambahan dalam suatu `font`. Format ini digunakan secara luas di berbagai sistem operasi utama.

## Menentukan Teknologi Font (Specifying Font Technology)

Selain menentukan format, Anda juga dapat menentukan teknologi dari sumber daya `font`. Ini juga bersifat opsional. Berikut adalah contoh saat kita menentukan teknologi dari sumber daya `font` kedua:

```css
@font-face {
  font-family: "MyCustomFont"; 
  src: url("path/to/font.woff2") format("woff2"),
    url("path/to/font.otf") format("opentype") tech(color-COLRv1),
    url("path/to/font.woff") format("woff");
}
```

Itulah dasar-dasar dari aturan `@font-face`. Dengan `at-rule` ini, Anda dapat menentukan file `font` untuk mendefinisikan `font` kustom bagi desain unik Anda.

## Pertanyaan (Questions)

Apa tujuan utama dari `at-rule` `@font-face` di `CSS`?

- [ ] Untuk menentukan warna teks.
- [ ] Untuk mengontrol ukuran font teks.
- [x] Untuk mendefinisikan font kustom (custom fonts).
- [ ] Untuk menyesuaikan spasi baris teks.

Manakah dari properti/deskriptor berikut yang diperlukan di dalam rule `@font-face` untuk menentukan file font?

- [ ] `font-name`
- [x] `src`
- [ ] `font-weight`
- [ ] `font-style`

Apa keuntungan utama menggunakan font kustom yang didefinisikan dengan `@font-face` dibandingkan hanya mengandalkan web-safe fonts?

- [ ] Peningkatan kompatibilitas browser.
- [x] Pilihan kustomisasi dan branding yang lebih luas.
- [ ] Waktu pemuatan halaman yang lebih cepat.
- [ ] Manajemen font yang lebih sederhana.

---

[⬅️ Sebelumnya](4-what-are-web-safe-fonts.md) | [Selanjutnya ➡️](6-how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts.md)
