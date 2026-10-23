# Apa Saja Cara untuk Membuat Aplikasi Web Dapat Diakses dengan Keyboard?

Banyak pengguna mengandalkan papan ketik (*keyboard*) alih-alih tetikus (*mouse*) karena disabilitas fisik, cedera regangan berulang (*repetitive strain injury*), atau preferensi pribadi. Ini mencakup pengguna pembaca layar (*screen readers*) dan mereka yang mungkin tidak memiliki mouse yang berfungsi.
Aksesibilitas *keyboard* memastikan para pengguna ini dapat menavigasi aplikasi web secara efektif tanpa hambatan.

Mari kita pelajari beberapa teknik praktis yang dapat Anda terapkan untuk membuat aplikasi web dapat diakses dengan *keyboard* (*keyboard accessible*).

## Atribut `tabindex`

Banyak pengguna mengandalkan tombol Tab untuk berpindah di antara elemen-elemen interaktif pada halaman web. Secara bawaan (*default*), peramban memungkinkan pengguna menelusuri elemen-elemen seperti tautan (`a`), tombol (`button`), dan kolom formulir dalam urutan kemunculannya di dalam `HTML`. Ini disebut sebagai urutan *tab* alami (*natural tab order*).

Terkadang, Anda mungkin ingin menyesuaikan elemen mana saja yang dapat menerima fokus atau mengubah urutan fokusnya. Atribut `tabindex` memungkinkan Anda melakukan hal ini.

Berikut adalah sintaks dasarnya:

```html
<element tabindex="number">Element Text</element>
```

Nilai `tabindex` menentukan bagaimana elemen berperilaku dalam navigasi *keyboard*:

`tabindex="0"` menambahkan elemen ke dalam urutan *tab* alami (*natural tab order*).

Menekan tombol Tab akan memindahkan fokus dari `button` ke `div`, lalu ke tautan, mengikuti urutannya di dalam `HTML`.

Klik di mana saja pada ruang kosong di jendela pratinjau. Kemudian gunakan tombol Tab untuk melihat perpindahan fokus di antara berbagai elemen. Untuk berinteraksi dengan contoh tersebut, Anda perlu mengaktifkan editor interaktif.

```html
<button>First</button>
<div tabindex="0">Second</div>
<a href="#">Third</a>
```

`tabindex="-1"` membuat suatu elemen dapat difokuskan secara terprogram (*programmatically*). Ini sangat berguna untuk mengelola fokus pada elemen yang biasanya tidak dapat menerima fokus, seperti judul (*headings*), kontainer, dialog, atau pesan kesalahan (*error messages*):

```html
<p tabindex="-1">Sorry, there was an error with your submission.</p>
```

Dalam contoh ini, paragraf bukan merupakan bagian dari urutan *tab* normal, sehingga pengguna tidak dapat mencapainya dengan menekan tombol Tab. Namun, jika Anda menetapkan fokus ke elemen ini melalui skrip, pesan tersebut akan menarik perhatian pengguna. Anda akan mempelajari lebih lanjut mengenai teknik ini dalam pelajaran `JavaScript`.

Ketika `tabindex` bernilai lebih besar dari `0`, atribut ini menetapkan urutan *tab* kustom. Jadi, elemen dengan nilai positif yang lebih rendah akan difokuskan terlebih dahulu.

Dalam contoh ini, menekan tombol Tab akan memfokuskan `input` dengan `tabindex="1"` terlebih dahulu, kemudian `2`, lalu `3`, terlepas dari urutannya dalam `HTML`.

```html
<input tabindex="2">
<input tabindex="1">
<input tabindex="3">
```

Nilai positif kustom terkadang digunakan dalam widget kompleks, seperti bilah alat (*toolbar*) di mana Anda menginginkan urutan navigasi tertentu. Namun, pendekatan ini sangat tidak dianjurkan karena dapat membuat navigasi membingungkan dan sulit dikelola, terutama saat halaman bertambah besar atau mengalami perubahan.

## Atribut `accesskey`

`accesskey` adalah atribut lain yang dapat Anda gunakan untuk membuat proyek web Anda dapat diakses dengan *keyboard*. Atribut ini memungkinkan Anda menentukan tombol pintas (*key*) yang memfokuskan atau mengaktifkan elemen tertentu.

Berikut adalah contoh interaktif yang dapat Anda coba mengikuti saran di bawah ini (aktifkan editor interaktif terlebih dahulu):

- `accesskey="s"` menetapkan tombol S ke tombol `Save`. Pada sebagian besar peramban, menekan Alt + S (di Windows) dan Ctrl + Option + S (di Mac) akan mengaktifkan tombol ini.

- `accesskey="c"` menetapkan tombol C ke tombol `Cancel`, memungkinkan pengguna mengaktifkannya menggunakan Alt + C (Windows) dan Ctrl + Option + C (Mac).

- `accesskey="h"` menetapkan tombol H ke tautan `Home`, memungkinkan pengguna menavigasi ke beranda menggunakan Alt + H (Windows) dan Ctrl + Option + H (Mac).

Harap dicatat bahwa kombinasi tombol persis untuk mengaktifkan `accesskey` mungkin bervariasi bergantung pada peramban dan sistem operasi. Biasanya kombinasinya adalah Alt + Tombol Tertentu di Windows dan Ctrl + Option + Tombol Tertentu di Mac.

Atribut `accesskey` dapat menimbulkan masalah karena dapat bertentangan dengan pintasan bawaan (*shortcuts*) yang sudah ada atau berperilaku tidak konsisten di berbagai perangkat dan tata letak *keyboard*, serta sering kali tidak intuitif untuk ditemukan atau diingat oleh pengguna.

Jika Anda memilih untuk menggunakan `accesskey`, hal tersebut harus dilakukan dengan panduan yang jelas kepada pengguna, tetapi dalam sebagian besar kasus lebih baik menghindari `accesskey` pada situs web dan aplikasi web.

```html
<button accesskey="s">Save</button>
<button accesskey="c">Cancel</button>
<a href="index.html" accesskey="h">Home</a>
```

## Indikator Fokus (Focus Indicators)

Cara lain untuk membuat aplikasi Anda ramah navigasi *keyboard* adalah memastikan Anda menyediakan indikator fokus yang jelas. Jika Anda merasa indikator fokus bawaan peramban kurang jelas, Anda dapat menimpanya (*override*) dengan menargetkan status fokus (`:focus`) dari elemen tersebut.

Berikut adalah contoh pemberian gaya pada status fokus untuk elemen `button`. Klik di mana saja pada ruang kosong di jendela pratinjau, lalu tekan tombol Tab untuk memfokuskan tombol. Untuk berinteraksi dengan contoh tersebut, Anda perlu mengaktifkan editor interaktif.

```html
<link href="styles.css" rel="stylesheet">

<button>Example button</button>
```

```css
button:focus {
  outline: 2px solid #005fcc;
}
```

Properti `outline` digunakan untuk mendefinisikan garis tepi di sekeliling elemen. Contoh ini menyetel garis tepi menjadi garis biru solid dengan ketebalan 2 piksel. Indikator fokus harus ditata sedemikian rupa sehingga memperjelas elemen mana yang sedang menerima fokus. Agar memenuhi syarat aksesibilitas, indikator harus memiliki kontras warna minimum setidaknya 3:1 terhadap warna latar belakang yang ditutupinya.

Anda juga harus menghindari jebakan keyboard (*keyboard traps*), yang terjadi ketika pengguna tidak dapat memindahkan fokus keluar dari elemen tertentu dalam komponen seperti modal dan *popup*.

## Pertanyaan (Questions)

Mengapa properti `tabindex` penting saat mengelola navigasi *keyboard* di halaman web?

- [ ] Ini membuat halaman memuat lebih cepat.
- [x] Ini memungkinkan Anda mengontrol urutan fokus elemen saat menggunakan tombol Tab.
- [ ] Ini menambahkan animasi ke elemen yang dapat difokuskan.
- [ ] Ini menyembunyikan elemen yang tidak penting dari navigasi keyboard.

Bagaimana atribut `accesskey` berkontribusi terhadap aksesibilitas *keyboard* pada halaman web?

- [ ] Ini meningkatkan tampilan visual halaman web.
- [ ] Ini mempercepat waktu pemuatan situs web.
- [x] Ini memungkinkan Anda menentukan tombol khusus yang memfokuskan atau mengaktifkan elemen tertentu.
- [ ] Ini menghasilkan tombol pintas secara otomatis untuk semua elemen.

Mengapa sangat penting untuk menghindari jebakan keyboard (*keyboard traps*) dalam aplikasi web?

- [ ] Ini meningkatkan SEO.
- [ ] Ini memungkinkan pengembang bekerja lebih cepat.
- [ ] Ini memastikan halaman memiliki lebih sedikit elemen interaktif.
- [x] Ini memastikan pengguna dapat memindahkan fokus keluar dari elemen seperti modal dan popup.

---
[⬅️ Sebelumnya](3-what-are-good-ways-to-make-audio-and-video-content-accessible.md) | [Selanjutnya ➡️](../5-review-html-accessibility/1-review-html-accessibility.md)
