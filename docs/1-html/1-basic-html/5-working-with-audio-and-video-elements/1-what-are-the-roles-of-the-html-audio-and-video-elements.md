# Apa Peran Element Audio dan Video HTML, dan Bagaimana Cara Kerjanya?


`Element` `audio` dan `video` memungkinkan Anda untuk menambahkan konten suara dan video ke dalam dokumen `HTML` Anda. `Element` `audio` mendukung format audio populer seperti mp3, wav, dan ogg.
`Element` `video` mendukung format mp4, ogg, dan webm.

## Menambahkan Audio dengan Atribut `src`

Untuk menyertakan konten audio pada halaman web Anda, Anda dapat menggunakan `element` `audio` dengan `attribute` `src` yang mengarah ke lokasi file audio Anda.

Seperti yang dapat Anda lihat pada jendela pratinjau, tidak ada yang muncul di halaman. Untuk melihat pratinjau, Anda perlu mengaktifkan editor interaktif.

```html
<audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3"></audio>
```

## Menambahkan Kontrol Pemutaran dengan Atribut `controls`

Jika Anda ingin melihat pemutar audio (*audio player*) di halaman, maka Anda dapat menambahkan `element` `audio` dengan `attribute` `controls`.

Tekan tombol putar (*play*) di jendela pratinjau untuk mendengarkan salah satu lagu dari Quincy Larson. Untuk mendengarkan lagu yang berbeda, ubah nilai `src` menjadi `"https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3"`. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

```html
<audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3" controls></audio>
```

`Attribute` `controls` memungkinkan pengguna untuk mengelola pemutaran audio, termasuk menjeda (*pause*) atau melanjutkan pemutaran (*resume*). `Attribute` `controls` adalah sebuah `boolean attribute` yang dapat ditambahkan ke suatu `element` untuk mengaktifkan kontrol pemutaran bawaan. Jika dihilangkan, tidak ada kontrol yang akan ditampilkan.

**Catatan:** Beberapa browser, seperti Safari, mungkin tidak menampilkan kontrol volume secara bawaan bahkan saat `attribute` `controls` disertakan.

## Mengulang Pemutaran Audio dengan Atribut `loop`

Selain `attribute` `src` dan `controls`, terdapat beberapa `attribute` lain yang memperluas fungsi dari `element` `audio`. `Attribute` `loop` adalah sebuah `boolean attribute` yang membuat audio diputar ulang secara terus-menerus.

Berikut adalah contoh penggunaan `attribute` `loop` untuk memutar salah satu lagu karya Quincy Larson yang berjudul "Can't stay down". Untuk melihat fungsi pengulangan (*loop*) beraksi, aktifkan editor interaktif, geser penunjuk putar (*playhead*) mendekati akhir lagu, dan lagu akan dimulai ulang secara otomatis setelah selesai.

```html
<audio
  src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
  loop
  controls
></audio>
```

## Membisukan Audio dengan Atribut `muted`

`Attribute` lain yang dapat Anda gunakan adalah `attribute` `muted`. Ketika ada di dalam `element` `audio`, `boolean attribute` ini akan memulai audio dalam keadaan tanpa suara atau bisu (*muted*). Berikut adalah contoh penggunaan `attribute` `muted`.

Untuk mendengarkan suaranya, aktifkan editor interaktif dan klik ikon volume pada pemutar audio.

```html
<audio
  src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
  loop
  controls
  muted
></audio>
```

## Mendukung Berbagai Format Audio

Terkait format file audio, terdapat perbedaan dukungan antara browser yang satu dengan lainnya. Untuk mengakomodasi hal tersebut, Anda dapat menggunakan `element` `source` di dalam `element` `audio` dan browser akan memilih sumber pertama yang didukungnya. Berikut adalah contoh penggunaan beberapa `element` `source` untuk sebuah `element` `audio`:

```html
<audio controls>
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.wav" type="audio/wav" />
  <source src="audio.mp3" type="audio/mpeg" />
</audio>

```

Browser akan memeriksa mulai dari jenis ogg terlebih dahulu, dan jika tidak dapat memutar format tersebut, ia akan beralih ke jenis berikutnya di dalam daftar.

## Menggunakan Element `video`

Semua `attribute` yang telah kita pelajari sejauh ini juga didukung pada `element` `video`. Berikut adalah contoh penggunaan `element` `video` dengan `attribute` `loop`, `controls`, dan `muted`.

Tambahkan `attribute` `autoplay` pada `tag` pembuka `video` agar video diputar secara otomatis. Untuk berinteraksi dengan contoh tersebut, Anda perlu mengaktifkan editor interaktif.

**Catatan:** `Attribute` `width` digunakan di sini untuk membuat video berukuran lebih kecil dan pas di jendela pratinjau. Anda akan mempelajari lebih lanjut tentang `attribute` `width` pada pelajaran mendatang.

```html
<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  loop
  controls
  muted
  width="400"
></video>
```

## Menampilkan Gambar Pratinjau dengan Atribut `poster`

Untuk `src`, atau `attribute` sumber, kita menggunakan video berjudul "Big Buck Bunny" dari archive.org. Jika Anda ingin menampilkan gambar poster saat video sedang diunduh, Anda dapat menggunakan `attribute` `poster`. `Attribute` ini tidak tersedia untuk `element` `audio` dan hanya khusus untuk `element` `video`. Berikut adalah contoh penggunaan `attribute` `poster` dengan materi yang disediakan oleh peach.blender.org.

```html
<video
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  loop
  controls
  muted
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="400"
></video>

```

## Mendukung Berbagai Format Video

Anda juga dapat menggunakan `element` `source` di dalam `element` `video`, sama seperti yang Anda lakukan dengan `element` `audio`. Ini memungkinkan Anda menyediakan video yang sama dalam beberapa format alternatif, dan browser akan memilih format pertama yang dapat dimainkannya.

```html
<video
  controls
  width="400"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
>
  <source
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    type="video/mp4"
  />
  <source
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.webm"
    type="video/webm"
  />
  Your browser does not support the video tag.
</video>

```


## Pertanyaan (Questions)


`Attribute` apa yang memungkinkan audio dimulai dalam kondisi bisu (*muted*)?


- [ ] `mute`

- [ ] `quiet`

- [ ] `pause`

- [x] `muted`



`Attribute` manakah yang memungkinkan Anda melihat tombol putar (*play*) dan jeda (*pause*)?


- [ ] `loop`

- [x] `controls`

- [ ] `details`

- [ ] `muted`



Apa tujuan dari `attribute` `poster` di dalam `element` `video`?


- [ ] Untuk menyetel sumber video.

- [ ] Untuk mengontrol pemutaran video.

- [x] Untuk menampilkan gambar saat video sedang diunduh.

- [ ] Untuk membisukan suara video.



---
[⬅️ Sebelumnya](../4-understanding-how-html-affects-seo/2-what-is-the-role-of-open-graph-tags.md) | [Selanjutnya ➡️](../6-working-with-images-and-svgs/1-what-are-common-ways-to-optimize-media-assets.md)
