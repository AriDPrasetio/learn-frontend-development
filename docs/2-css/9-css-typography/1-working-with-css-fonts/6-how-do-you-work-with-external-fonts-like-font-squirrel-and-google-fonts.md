# Bagaimana Cara Menggunakan Font Eksternal Seperti Font Squirrel dan Google Fonts?

`External font` (font eksternal) adalah file `font` yang tidak disertakan secara langsung di dalam file proyek Anda. File-file ini biasanya di-*host* di server terpisah. Server adalah komputer yang menyediakan data atau layanan ke komputer lain melalui jaringan. Anda akan mempelajari lebih lanjut mengenai server pada pelajaran-pelajaran mendatang. `External fonts` memberi Anda lebih banyak fleksibilitas karena Anda dapat menggunakan `custom fonts` yang mungkin belum terpasang di perangkat pengguna.

`Google Fonts` dan `Font Squirrel` adalah sumber daya online populer untuk menemukan dan menggunakan `font` gratis untuk keperluan pengembangan web. Anda dapat menggabungkannya ke dalam proyek Anda dengan sangat mudah.

## Google Fonts

Mari kita mulai dengan `Google Fonts`. Ini adalah layanan dari Google yang menawarkan koleksi `font`, yang banyak di antaranya dirancang khusus untuk pengembangan web. Pada antarmuka pengguna `Google Fonts`, Anda dapat melihat banyak elemen berbeda. Mari kita bahas satu per satu. Pada bilah sisi (*sidebar*) kiri, Anda akan menemukan:

- Bagian untuk melihat, mencari, dan memfilter `font`.
- Bagian khusus tentang Noto, kumpulan `font` berkualitas tinggi dengan berbagai `weight`, `width`, dan `style` yang sempurna untuk berkomunikasi dalam lebih dari 1.000 bahasa dan lebih dari 150 sistem penulisan.
- Bagian di mana Anda dapat menemukan dan mengunduh ikon untuk proyek web Anda.
- Bagian di mana Anda dapat mempelajari lebih lanjut tentang `font` dan praktik terbaiknya, diikuti dengan pertanyaan yang sering diajukan (*frequently asked questions*).

## Melakukan Pratinjau Google Fonts (Previewing Google Fonts)

Untuk menambahkan `Google Font` ke situs web Anda, Anda harus membuka bagian pertama (Fonts). Anda dapat menyesuaikan teks pratinjau pada *sidebar* kiri, di bagian bertuliskan "Preview". Cukup tulis teks yang ingin Anda lihat dan teks tersebut akan diperbarui secara otomatis. Ini sangat membantu untuk melihat pratinjau `font` dengan teks yang sudah Anda rencanakan untuk situs web Anda. Anda juga dapat menyesuaikan ukuran `font` dan memfilter `font` berdasarkan karakteristiknya.

![Google Fonts Fonts section showing a left sidebar with preview text set to 'freeCodeCamp' at 40px, filter options for Language, Technology, and Decorative stroke, and the main panel listing font families including Roboto, SUSE, and Sevillana each previewing 'freeCodeCamp'](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-1.png)

Untuk melihat informasi lebih lanjut tentang suatu `font`, cukup klik pada `font` tersebut dan Anda akan melihat informasi penting mengenai `font` tersebut, seperti siapa yang merancangnya, teks pratinjau, dan gaya yang berbeda, seperti `light`, `regular`, `medium`, `bold`, dan `black`. Jika Anda mengklik opsi di bagian atas, Anda dapat membuka penguji huruf (*type tester*), melihat masing-masing `glyph`, serta mempelajari lebih lanjut tentang `font` dan lisensinya.

Anda dapat menyesuaikan ukuran `font` dari teks pratinjau dengan penggeser (*slider*) biru yang terletak di sebelah bidang input tempat Anda memasukkan teks pratinjau.

![Google Fonts Roboto Styles page with Specimen, Type tester, Glyphs, and About & license tabs, a blue Get font button, a preview text field showing 'freeCodeCamp' with a font size slider at 48px, and a list of styles including Thin 100, Thin 100 Italic, Light 300, and Light 300 Italic](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-2.png)

## Menggunakan Google Fonts (Using Google Fonts)

Setelah Anda siap untuk menambahkan `font` ke proyek Anda, klik tombol biru "Get font" di bagian atas. Anda akan dibawa ke halaman ringkasan di mana Anda akan melihat `font` yang sedang Anda pilih. Anda dapat memilih beberapa `font` secara bersamaan.

![Google Fonts page showing '1 font family selected' with Roboto Static listed, Get embed code and Download all buttons on the right, and a How to use section with All, Design, Develop, and Google products tabs](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-3.png)

Selanjutnya, Anda harus memilih apakah Anda ingin mengunduh file `font` untuk menambahkannya ke proyek Anda sebagai file lokal, atau apakah Anda ingin menggunakannya sebagai `external fonts` dan mengunduhnya dari server Google ketika pengguna membuka situs web Anda. Klik "Download all" jika Anda ingin mengunduhnya, tetapi jika Anda lebih suka menggunakannya sebagai `external fonts` di server Google, klik "Get embed code". Jika Anda mengklik "Get embed code", Anda akan melihat petunjuk yang harus Anda ikuti untuk menambahkan `external fonts` ini ke proyek Anda.

### Menghubungkan Google Fonts dengan Link (Link Google Fonts)

Untuk proyek pengembangan web, Anda memiliki dua opsi. Anda dapat menggunakan `element` `link` atau `@import`. Jika Anda memilih opsi `element` `link`, Anda dapat menyalin dan menempelkan cuplikan kode HTML dan *CSS rules* untuk menambahkannya ke proyek Anda. Anda harus menyematkan kode tersebut di dalam `element` `head` pada file HTML Anda dan menambahkan *CSS rules* yang sesuai dengan kebutuhan Anda.

![Google Fonts Embed code page with the link element option selected, showing three link tags for preconnect and the font stylesheet, a CSS classes section with .roboto-thin, .roboto-light, .roboto-regular, and .roboto-medium rules, and a left sidebar showing font style toggles](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-4.png)

Berikut adalah contoh penggunaan semua gaya `Roboto`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">

<p class="roboto-thin">roboto-thin</p>
<p class="roboto-light">roboto-light</p>
<p class="roboto-regular">roboto-regular</p>
<p class="roboto-medium">roboto-medium</p>
<p class="roboto-bold">roboto-bold</p>
<p class="roboto-black">roboto-black</p>

<p class="roboto-thin-italic">roboto-thin-italic</p>
<p class="roboto-light-italic">roboto-light-italic</p>
<p class="roboto-regular-italic">roboto-regular-italic</p>
<p class="roboto-medium-italic">roboto-medium-italic</p>
<p class="roboto-bold-italic">roboto-bold-italic</p>
<p class="roboto-black-italic">roboto-black-italic</p>
```

```css
.roboto-thin {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.roboto-light {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-medium {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.roboto-bold {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.roboto-black {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.roboto-thin-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.roboto-light-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.roboto-regular-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.roboto-medium-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.roboto-bold-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.roboto-black-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: italic;
}
```

Terdapat sebuah aturan `CSS` (*CSS rule*) untuk setiap gaya `font`. Setiap aturan menetapkan `custom fonts` disertai dengan `fallback fonts` untuk berjaga-jaga seandainya `custom fonts` tersebut tidak termuat dengan baik.

### Mengimpor Google Fonts dengan @import (Import Google Fonts)

Jika Anda memilih opsi `@import`, Anda perlu menambahkan aturan tersebut ke dalam file `CSS` Anda.

![Google Fonts Embed code page with the @import option selected, showing a style block containing the @import URL rule, a CSS classes section below, and the left sidebar with font style toggles](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-5.png)

Berikut adalah contohnya:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
```

Aturan `CSS`-nya persis sama.

Jika Anda hanya ingin menyertakan gaya `font` tertentu saja, Anda juga memiliki opsi untuk menghapus gaya lainnya dari cuplikan kode ini. Cuplikan kode HTML dan `CSS` akan diperbarui secara otomatis.

![Google Fonts Embed code page with the link element option selected, showing the HTML snippet and CSS classes, and the left sidebar listing all Roboto styles from Thin 100 through Bold 700 each with a blue enabled toggle switch](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-6.png)

Dan inilah `Google Fonts`. Layanan ini merupakan salah satu opsi paling populer untuk menemukan `font` gratis dan sumber terbuka (*open source*) untuk proyek pengembangan web.

## Font Squirrel

Pilihan luar biasa lainnya adalah `Font Squirrel`, di mana Anda dapat menemukan dan mengunduh `custom fonts` yang Anda impikan untuk desain Anda.

![Font Squirrel 'Free Font Utopia' page listing featured free fonts including Acherus Grotesque, Intro Rust, Source Sans Pro, Open Sans, and Questa, each shown with an alphabet specimen and a Download button](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-7.png)

## Melakukan Pratinjau Font Squirrel (Previewing Font Squirrel)

Jika Anda mencari sebuah `font` dan mengklik hasilnya, Anda akan melihat detail lebih banyak tentang `font` tersebut, termasuk *specimens*, *test drive*, `glyphs`, dan *Webfont kit*.

![Font Squirrel search results for 'Roboto' showing three matches: Roboto, Roboto 2014, and Roboto Slab, each with an alphabet specimen and a Download TTF button](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-8.png)

![Font Squirrel Roboto page showing tabs for Sample, Specimens, Test Drive, Glyphs, License, and Webfont Kit, a dark specimen banner displaying 'Roboto' in large white text, and a Fonts section below listing Roboto Thin and Roboto Thin Italic with alphabet specimens](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-9.png)

Anda juga dapat melihat sampel dari berbagai gaya dan variasi `font`, seperti `thin`, `light`, `medium`, `bold`, dan `black`.

![Font Squirrel Roboto Specimens section listing all styles with alphabet samples: Roboto Thin, Thin Italic, Light, Light Italic, Regular, Italic, Medium, Medium Italic, Bold, Bold Italic, and Black, each in its respective weight](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-10.png)

## Menggunakan Font Squirrel (Using Font Squirrel)

Setelah Anda memutuskan `font` yang ingin Anda gunakan dalam proyek Anda, buka tab "Webfont Kit". Di sini, Anda dapat memeriksa apakah lisensi `font` tersebut mengizinkan Anda menggunakannya dalam penyematan `CSS` `@font-face`. Anda juga dapat memilih *subset* dan format.

![Font Squirrel Roboto Webfont Kit tab showing a license notice confirming @font-face embedding is allowed, a subset selector set to Western Latin, format checkboxes with WOFF selected, and a Download @font-face Kit button](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-11.png)

Mengklik tombol "Download @font-face Kit" akan mengunduh file terkompresi (.zip). Jika Anda mengekstraknya (*unzip*), Anda akan menemukan folder "web fonts", lisensi dalam bentuk file teks, dan sebuah file HTML dengan petunjuk cara menggunakan *web fonts*.

![Three file icons showing the contents of the downloaded kit: a blue folder labeled 'web fonts', a text document labeled 'Apache License.txt', and an HTML file labeled 'How_to_use_webfonts.html'](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-12.png)

Folder *web fonts* akan berisi semua file `font` yang Anda butuhkan untuk proyek Anda. Anda akan menemukannya dikelompokkan ke dalam folder-folder tertentu untuk gaya `font` yang berbeda.

![macOS Finder showing the web fonts folder with 19 subfolders for each Roboto variant, named with the pattern roboto_weight_macroman, such as roboto_black_macroman, roboto_bold_macroman, and roboto_thin_macroman](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-13.png)

Jika Anda membuka file HTML tersebut di sebuah `browser`, file ini memiliki petunjuk tentang cara menambahkan `font` ke proyek Anda, cara menyertakannya di *stylesheet* dengan deklarasi `@font-face`, dan cara menggunakannya di dalam aturan `CSS`.

![FontSpring 'Installing Webfonts' page with three steps: uploading webfont files, including the webfont stylesheet with @font-face declarations, and modifying your own stylesheet, plus a Troubleshooting section on the right](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-do-you-work-with-external-fonts-like-font-squirrel-and-google-fonts-14.png)

Beginilah cara Anda menambahkan `custom fonts` dari `Font Squirrel` ke proyek Anda. Anda juga dapat me-*host*-nya di server terpisah dan menggunakannya sebagai `external fonts`. `external fonts` sangat berguna untuk menyesuaikan keseluruhan tampilan dan desain situs web Anda. `font` ini dapat membuat situs web Anda benar-benar unik.

Namun, Anda juga harus ingat bahwa menggunakan beberapa `external fonts` sekaligus dapat meningkatkan waktu muat (*load time*) situs web, yang memengaruhi performa keseluruhannya. Anda harus selalu berusaha menemukan keseimbangan antara gaya (*style*) dan efisiensi.

## Pertanyaan (Questions)

Apa keuntungan utama menggunakan `external fonts` dari layanan seperti `Font Squirrel` atau `Google Fonts`?

- [ ] Berkurangnya ukuran file font.
- [ ] Meningkatnya kecepatan perenderan font.
- [x] Pilihan dan variasi font yang lebih luas.
- [ ] Peningkatan kompatibilitas browser.

Apa potensi kelemahan dari menggunakan beberapa `external fonts` sekaligus?

- [x] Peningkatan waktu muat (*load time*) situs web.
- [ ] Meningkatnya kemungkinan bug.
- [ ] Opsi kustomisasi yang terbatas.
- [ ] Peningkatan kompatibilitas browser.

Apa pentingnya menyediakan `fallback fonts` saat menggunakan `external fonts`?

- [ ] Untuk menciptakan desain yang lebih menarik secara visual.
- [ ] Untuk meningkatkan performa perenderan font.
- [x] Untuk menampilkan teks dengan benar, bahkan jika external font tidak termuat sebagaimana mestinya.
- [ ] Untuk mengurangi ukuran file.

---

[⬅️ Sebelumnya](5-what-is-the-font-face-at-rule.md) | [Selanjutnya ➡️](7-what-is-the-text-shadow-property.md)
