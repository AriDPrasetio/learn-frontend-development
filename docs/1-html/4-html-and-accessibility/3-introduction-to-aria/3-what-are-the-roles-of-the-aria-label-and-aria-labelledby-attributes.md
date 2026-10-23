# Apa Peran dari Atribut aria-label dan aria-labelledby?

Sangat penting untuk memastikan bahwa semua pengguna, termasuk penyandang disabilitas, dapat mengakses situs web tanpa kendala.

Bagi orang-orang yang menggunakan pembaca layar (*screen readers*), atribut `aria-label` dan `aria-labelledby` menyediakan informasi penting tentang elemen-elemen halaman yang mungkin tidak jelas atau tidak terlihat.

Mari kita pelajari apa itu atribut `aria-label` dan `aria-labelledby` serta peran keduanya dalam membuat web dapat diakses oleh orang-orang dengan gangguan penglihatan dan disabilitas terkait.

Anda akan melihat bahwa baik `aria-label` maupun `aria-labelledby` diawali dengan prefiks `aria-`. Lantas, apa artinya? `ARIA` merupakan singkatan dari *Accessible Rich Internet Applications*. Ini adalah serangkaian atribut berawalan `aria-` yang memungkinkan pengembang mengomunikasikan tujuan dari elemen kepada teknologi asistif. Atribut `aria-label` adalah label tak terlihat untuk elemen interaktif. Atribut ini menambahkan label teks ke suatu elemen yang dapat dibaca oleh pembaca layar (*screen readers*).

## Atribut `aria-label`

`aria-label` sangat berguna untuk elemen yang tidak memiliki teks terlihat tetapi tetap perlu dijelaskan oleh pembaca layar. Sebagai contoh, tombol yang hanya memiliki ikon sering kali memerlukan `aria-label` untuk menyampaikan tujuannya.

Berikut adalah contohnya:

```html
<button aria-label="Search">
  <i class="fa-solid fa-magnifying-glass"></i>
</button>
```

Dalam kasus ini, pembaca layar mungkin mengumumkan tombol ini sebagai `Search, button`, meskipun tombol tersebut hanya berisi ikon. Atribut `aria-label` memberi tahu pembaca layar teks apa yang harus digunakan sebagai pengganti ikon.

Jika tombol tersebut berisi teks "Search" alih-alih ikon, maka tidak perlu menggunakan atribut `aria-label` karena teks tersebut sudah menyediakan label untuk tombol tersebut.

Untuk elemen `input`, atribut `aria-label` menyediakan label secara langsung jika tidak ada label terlihat yang terhubung dengan `input` tersebut.

## Atribut `aria-labelledby`

Atribut `aria-labelledby` melakukan hal yang persis sama dengan atribut `aria-label`, namun alih-alih mendefinisikan teks secara langsung di dalam atribut, Anda menggunakan referensi ke teks yang sudah ada di halaman. Teks yang sudah ada tersebut harus memiliki atribut `id`, yang akan digunakan sebagai nilai referensi pada atribut `aria-labelledby`.

Berikut contohnya:

```html
<input type="text" aria-labelledby="search-btn">
<button type="button" id="search-btn">Search</button>
```

Dalam kasus ini, teks tombol digunakan sebagai label untuk `input` pencarian. Pembaca layar akan mengumumkan `input` tersebut kira-kira seperti `Search, edit`. Jika di kemudian hari Anda memutuskan untuk mengubah teks tombol menjadi `Find`, label untuk `input` akan diperbarui secara otomatis ke teks baru tersebut karena mereferensikan teks tombol.

## Menggabungkan Beberapa Label

Menggabungkan beberapa nilai `id` ke dalam satu nilai atribut `aria-labelledby` juga dimungkinkan. Berikut cara kerjanya:

```html
<div>
  <span id="volume-label">Volume</span>
  <span id="volume-details">Adjust the volume level</span>
  <input
    type="range"
    min="0"
    max="100"
    value="30"
    aria-labelledby="volume-label volume-details">
</div>
```

Untuk penggeser (*slider*), pembaca layar akan mencari konten dari elemen `volume-label` dan `volume-details`, lalu mengumumkan `Volume Adjust the volume level`.

## Memilih Antara `aria-label` dan `aria-labelledby`

Anda telah melihat bahwa atribut `aria-label` dan `aria-labelledby` sama-sama membantu pembaca layar memahami fungsi elemen. Lantas, mana yang sebaiknya Anda gunakan? Karena keduanya menyediakan fungsionalitas yang sama, keduanya dapat digunakan, tetapi ada beberapa keuntungan dalam menggunakan `aria-labelledby` dibanding `aria-label`:

- Jika seseorang menggunakan layanan penerjemahan untuk menerjemahkan konten di halaman Anda, teks dalam atribut `aria-label` mungkin tidak selalu ikut diterjemahkan.

- Menggunakan `aria-labelledby` juga dapat membantu mencegah ketidakcocokan antara teks label yang terlihat dan label tak terlihat bagi pengguna pembaca layar, karena memperbarui teks yang terlihat akan secara otomatis memperbarui label tak terlihat.

- `aria-labelledby` dapat mempermudah pembuatan label tak terlihat yang kompleks secara terprogram yang terdiri dari berbagai sumber teks.

Satu catatan terakhir, jangan menggunakan `aria-label` dan `aria-labelledby` pada suatu elemen secara bersamaan. Dalam kasus ini, label tak terlihat untuk pembaca layar akan selalu ditentukan oleh `aria-labelledby`, dan `aria-label` akan diabaikan sepenuhnya.

## Pertanyaan (Questions)

Apa kepanjangan dari `ARIA`?

- [x] Accessible Rich Internet Applications.
- [ ] Advanced Resource Integration Accessibility.
- [ ] Automated Rich Internet Access.
- [ ] Accessible Responsive Interactive Applications.

Apa fungsi dari `aria-label` dan `aria-labelledby`?

- [ ] Keduanya memodifikasi tampilan visual elemen.
- [x] Keduanya menyediakan label untuk elemen guna meningkatkan aksesibilitas bagi pembaca layar (*screen readers*).
- [ ] Keduanya mengubah fungsionalitas dari formulir input.
- [ ] Keduanya menambahkan efek animasi ke elemen.

Kapan sebaiknya Anda menggunakan `aria-labelledby` dibanding `aria-label`?

- [ ] Saat Anda perlu menyediakan *tooltip* untuk suatu elemen.
- [ ] Saat Anda ingin mengubah warna suatu elemen.
- [ ] Saat Anda perlu menyembunyikan suatu elemen dari pembaca layar (*screen readers*).
- [x] Saat terdapat teks terlihat yang sudah ada pada halaman yang dapat digunakan sebagai label.

---
[⬅️ Sebelumnya](2-what-are-aria-roles.md) | [Selanjutnya ➡️](4-what-is-the-aria-hidden-attribute.md)
