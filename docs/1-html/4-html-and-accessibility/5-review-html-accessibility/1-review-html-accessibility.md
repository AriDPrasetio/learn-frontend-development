# Review Aksesibilitas HTML

## Pengantar Aksesibilitas

- **Web Content Accessibility Guidelines**: *Web Content Accessibility Guidelines* (`WCAG`) adalah serangkaian pedoman untuk membuat konten web lebih dapat diakses oleh penyandang disabilitas. Empat prinsip `WCAG` disingkat `POUR`, yang merupakan singkatan dari *Perceivable* (dapat dirasakan/dilihat), *Operable* (dapat dioperasikan), *Understandable* (dapat dipahami), dan *Robust* (kokoh/tangguh).

## Teknologi Asistif untuk Aksesibilitas

- **Pembaca layar (Screen readers)**: Program perangkat lunak yang membacakan konten layar komputer dengan lantang. Alat ini digunakan oleh orang-orang yang tunanetra atau memiliki gangguan penglihatan untuk mengakses web.

- **Papan ketik teks besar atau braille (Large text or braille keyboards)**: Digunakan oleh orang-orang dengan gangguan penglihatan untuk mengakses web.

- **Kaca pembesar layar (Screen magnifiers)**: Program perangkat lunak yang memperbesar konten layar komputer. Alat ini digunakan oleh orang-orang dengan penglihatan terbatas (*low vision*) untuk mengakses web.

- **Perangkat penunjuk alternatif (Alternative pointing devices)**: Digunakan oleh orang-orang dengan gangguan motorik/mobilitas untuk mengakses web. Ini mencakup perangkat seperti *joystick*, *trackball*, dan *touchpad*.

- **Pengenalan suara (Voice recognition)**: Digunakan oleh orang-orang dengan gangguan motorik/mobilitas untuk mengakses web. Alat ini memungkinkan pengguna mengontrol komputer menggunakan suara mereka.

## Alat Audit Aksesibilitas

- **Alat Aksesibilitas Umum**: Google Lighthouse, WAVE, IBM Equal Access Accessibility Checker, dan axe DevTools adalah beberapa alat aksesibilitas umum yang digunakan untuk mengaudit aksesibilitas suatu situs web.

## Praktik Terbaik Aksesibilitas

- **Struktur level heading yang tepat**: Anda harus menggunakan level `heading` yang tepat untuk membuat struktur logis bagi konten Anda. Ini membantu orang yang menggunakan teknologi asistif memahami konten situs web Anda.

- **Aksesibilitas dan Tabel**: Saat menggunakan tabel, Anda harus menggunakan elemen `th` untuk mendefinisikan sel tajuk (*header cells*) dan elemen `td` untuk mendefinisikan sel data (*data cells*). Ini membantu orang yang menggunakan teknologi asistif memahami struktur tabel. Dengan elemen `caption`, Anda dapat menuliskan keterangan (atau judul) tabel, sehingga pengguna, terutama mereka yang menggunakan teknologi asistif, dapat memahami tujuan dan konten tabel dengan cepat. Anda harus menempatkan elemen `caption` tepat setelah tag pembuka elemen `table`. Dengan cara ini, pembaca layar dan teknologi asistif lainnya dapat memberikan konteks lebih lanjut dengan mengumumkan *caption* sebelum membacakan konten tabel.

- **Pentingnya input memiliki label terkait**: Anda harus menggunakan elemen `label` untuk mengaitkan label dengan input formulir. Ini membantu orang yang menggunakan teknologi asistif memahami tujuan dari kolom `input` tersebut.

- **Elemen `span` untuk aksesibilitas**: Elemen `span` adalah kontainer sebaris (*inline container*) generik untuk konten. Elemen ini biasanya digunakan untuk menata gaya sebagian teks secara berbeda dari teks di sekitarnya, atau untuk membungkus teks dan memberinya `id` yang dapat direferensikan oleh elemen lain (seperti atribut `ARIA`).

- **Pentingnya `alt` text yang baik**: Anda harus menggunakan atribut `alt` untuk menyediakan teks alternatif bagi gambar. Ini membantu orang yang menggunakan teknologi asistif memahami konten gambar.

- **Pentingnya teks tautan yang baik**: Anda harus menggunakan teks tautan (*link text*) yang deskriptif untuk membantu pengguna memahami tujuan tautan tersebut. Ini membantu orang yang menggunakan teknologi asistif memahami arah tujuan tautan.

- **Praktik terbaik untuk membuat konten audio dan video dapat diakses**: Anda harus menyediakan *captions* dan transkrip untuk konten audio dan video agar dapat diakses oleh penyandang gangguan pendengaran. Anda juga harus menyediakan deskripsi audio (*audio descriptions*) untuk konten video agar dapat diakses oleh orang-orang dengan gangguan penglihatan.

- **Atribut `tabindex`**: Digunakan untuk membuat elemen dapat difokuskan dan menentukan urutan relatif saat dinavigasi menggunakan *keyboard*. Sangat penting untuk tidak pernah menggunakan atribut `tabindex` dengan nilai lebih besar dari 0. Sebaliknya, Anda sebaiknya menggunakan nilai 0 atau -1.

```html
<p tabindex="-1">Sorry, there was an error with your submission.</p>
```

- **Atribut `accesskey`**: Digunakan untuk menentukan pintasan *keyboard* bagi suatu elemen. Ini dapat membantu pengguna dengan gangguan motorik menavigasi situs web dengan lebih mudah.

```html
<button accesskey="s">Save</button>
<button accesskey="c">Cancel</button>
<a href="index.html" accesskey="h">Home</a>
```

## WAI-ARIA, Roles, dan Atribut

- **WAI-ARIA**: Merupakan singkatan dari *Web Accessibility Initiative - Accessible Rich Internet Applications*. Ini adalah serangkaian atribut yang dapat ditambahkan ke elemen `HTML` untuk meningkatkan aksesibilitas. Atribut ini menyediakan informasi tambahan kepada teknologi asistif tentang tujuan dan struktur konten.

- **ARIA roles**: Serangkaian peran yang telah ditentukan sebelumnya yang dapat ditambahkan ke elemen `HTML` untuk mendefinisikan tujuannya. Ini membantu orang yang menggunakan teknologi asistif memahami konten situs web. Contohnya meliputi `role="tab"`, `role="menu"`, dan `role="alert"`.

Terdapat enam kategori utama dari `ARIA` `roles`:

- **Document structure roles**: Peran-peran ini mendefinisikan struktur keseluruhan halaman web. Dengan peran ini, teknologi asistif dapat memahami hubungan antara berbagai bagian yang berbeda dan membantu pengguna menavigasi konten.

- **Widget roles**: Peran-peran ini mendefinisikan tujuan dan fungsionalitas elemen interaktif, seperti bilah gulir (*scrollbars*).

- **Landmark roles**: Peran-peran ini mengklasifikasikan dan melabeli bagian-bagian utama halaman web. Pembaca layar menggunakannya untuk menyediakan navigasi praktis ke bagian-bagian penting di halaman.

- **Live region roles**: Peran-peran ini mendefinisikan elemen dengan konten yang akan berubah secara dinamis. Dengan cara ini, pembaca layar dan teknologi asistif lainnya dapat mengumumkan perubahan kepada pengguna dengan disabilitas visual.

- **Window roles**: Peran-peran ini mendefinisikan sub-jendela (*sub-windows*), seperti dialog modal *pop-up*. Peran-peran ini mencakup `alertdialog` dan `dialog`.

- **Abstract roles**: Peran-peran ini membantu mengorganisir dokumen. Peran ini hanya ditujukan untuk digunakan secara internal oleh peramban (*browser*), bukan oleh pengembang, jadi Anda perlu mengetahui keberadaannya tetapi tidak boleh menggunakannya di situs web atau aplikasi web Anda.

- **Atribut `aria-label` dan `aria-labelledby`**: Atribut-atribut ini digunakan untuk memberi elemen nama yang dapat diakses secara terprogram (*accessible name*), yang membantu orang-orang yang menggunakan teknologi asistif (seperti pembaca layar) memahami tujuan dari elemen tersebut. Atribut ini sering digunakan saat label visual untuk suatu elemen berupa gambar atau simbol, bukan teks. `aria-label` memungkinkan Anda mendefinisikan nama secara langsung di dalam atribut, sedangkan `aria-labelledby` memungkinkan Anda mereferensikan teks yang sudah ada di halaman.

```html
<button aria-label="Search">
    <i class="fas fa-search"></i>
</button>
```

```html
<input type="text" aria-labelledby="search-btn">
<button type="button" id="search-btn">Search</button>
```

- **Atribut `aria-hidden`**: Digunakan untuk menyembunyikan elemen dari teknologi asistif seperti pembaca layar (*screen readers*). Sebagai contoh, atribut ini dapat digunakan untuk menyembunyikan gambar dekoratif yang tidak menyediakan konten bermakna apa pun.

```html
<button>
    <i class="fa-solid fa-gear" aria-hidden="true"></i>
    <span class="label">Settings</span>
</button>
```

- **Atribut `aria-describedby`**: Digunakan untuk memberikan informasi tambahan tentang suatu elemen dengan mengaitkannya ke elemen lain yang memuat informasi tersebut. Ini memberi orang yang menggunakan pembaca layar akses langsung ke informasi tambahan saat mereka menavigasi ke elemen tersebut. Penggunaan umum mencakup pengaitan instruksi pemformatan ke input teks atau pesan kesalahan ke kolom input setelah pengiriman formulir yang tidak valid.

```html
<form>
    <label for="password">Password:</label>
    <input type="password" id="password" aria-describedby="password-help" />
    <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
```

---
[⬅️ Sebelumnya](../4-accessible-media-elements/4-what-are-some-ways-to-make-web-applications-keyboard-accessible.md) | Selanjutnya ➡️
