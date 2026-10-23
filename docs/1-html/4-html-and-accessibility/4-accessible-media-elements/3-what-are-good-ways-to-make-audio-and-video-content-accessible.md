# Apa Saja Cara yang Baik untuk Membuat Konten Audio dan Video Menjadi Aksesibel?

Multimedia, terutama video, telah menjadi format utama untuk berbagi informasi secara daring (*online*).

Dengan melonjaknya konten ini, ada kebutuhan yang semakin meningkat untuk memastikan semua orang dapat mengakses dan menikmati konten video dan audio secara daring, terlepas dari kemampuan fisik atau lingkungan mereka.

Membuat konten audio dan video Anda menjadi aksesibel bukan hanya sekadar nilai tambah, ini sangat penting untuk menjangkau audiens yang lebih luas. Mari kita lihat beberapa cara terjangkau untuk membuat konten video dan audio Anda lebih mudah diakses.

Video bukan hanya tentang visual tetapi juga audio, jadi hal pertama yang harus Anda pertimbangkan adalah menambahkan teks *captions* (takarir untuk tuna rungu) atau *subtitles* (terjemahan) ke konten video Anda.

*Captions* menyediakan versi teks dari kata-kata yang diucapkan beserta suara non-verbal penting, seperti musik atau tawa, yang disinkronkan dengan video.

*Subtitles*, di sisi lain, sangat penting bagi orang-orang yang tidak memahami bahasa yang sedang diucapkan. Hal ini tidak hanya membantu orang yang tuli atau memiliki gangguan pendengaran, tetapi juga mereka yang menonton video di lingkungan yang bising atau sangat tenang.

Untuk menambahkan *captions* atau *subtitles* ke konten video atau audio Anda, Anda dapat menggunakan elemen `track` di dalam elemen `video` atau `audio` Anda:

```html
<video
  width="400"
  height="300"
  controls
  src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4"
>
  <track
    src="captions.vtt"
    kind="captions"
    srclang="en"
    label="English"
  />
</video>

<audio controls src="sample.mp3">
  <track
    src="captions.vtt"
    kind="captions"
    srclang="en"
    label="English"
  />
</audio>
```

Atribut `kind` digunakan untuk memberi tahu elemen `track` tentang bagaimana ia harus digunakan. Nilai yang valid untuk atribut `kind` mencakup `captions`, `subtitles`, `chapters`, dan `metadata`.

Atribut `srclang` merepresentasikan bahasa untuk konten `track`. Atribut `label` adalah judul deskriptif untuk trek teks yang digunakan oleh peramban (*browsers*) untuk mengidentifikasi dan menampilkannya dalam daftar trek teks yang tersedia.

Hal penting lainnya yang perlu dipertimbangkan adalah menyediakan transkrip (*transcript*) untuk konten audio dan video Anda. Transkrip adalah versi teks dari semua kata yang diucapkan dalam audio atau video Anda. Tidak seperti *captions*, transkrip tidak perlu disinkronkan dengan media. Transkrip sangat berguna bagi penyandang tuli dan mereka yang mengalami gangguan pendengaran. Transkrip juga bermanfaat bagi orang-orang yang lebih suka membaca daripada menonton atau mendengarkan. Transkrip juga membuat konten Anda dapat dicari (*searchable*), memungkinkan pengguna menemukan bagian tertentu dari audio atau video Anda dengan cepat. Jika Anda memiliki video atau audio di situs web, Anda cukup menambahkan transkrip di bawah audio atau video tersebut:

```html
<audio controls>
  <source src="audio.mp3" />
  Your browser does not support the audio element.
</audio>

<!-- Transcript -->
<h3>Transcript</h3>
<p>
  [Speaker 1]: Welcome to the tutorial on making accessible content
</p>
<p>
  [Speaker 2]: Today, we'll cover captions, transcripts, and more.
</p>

<!-- Rest of transcript -->
```

Jika Anda mempublikasikan video di platform berbagi video seperti YouTube atau Vimeo, platform tersebut sudah menyediakan *captions* dan transkrip otomatis untuk video. Namun jika Anda merasa belum puas, Anda dapat menggunakan layanan seperti veed.io, Rev, Amara, dan Descript.

Cara lain untuk membuat konten video dan audio Anda dapat diakses meliputi:

- Menambahkan hamparan bahasa isyarat (*sign language overlay*) untuk video bagi penyandang tuli dan gangguan pendengaran.
- Menyediakan kontrol volume dan kecepatan putar (*speed controls*).
- Memastikan kontras yang baik untuk teks di layar (*on-screen text*).
- Menawarkan beberapa pilihan format file.

## Pertanyaan (Questions)

Bagaimana perbedaan antara *captions* dan *subtitles* dalam konten video?

- [ ] *Captions* menyediakan terjemahan bagi penutur non-pribumi.
- [x] *Captions* mencakup kata-kata yang diucapkan beserta suara non-verbal, sedangkan *subtitles* ditujukan untuk pemirsa yang tidak memahami bahasanya.
- [ ] *Subtitles* mencakup kata-kata yang diucapkan dan suara non-verbal, sedangkan *captions* hanya untuk terjemahan.
- [ ] *Subtitles* disinkronkan dengan video, tetapi *captions* tidak.

Bagaimana cara menambahkan *captions* atau *subtitles* secara langsung ke konten video atau audio Anda di `HTML`?

- [ ] Dengan menggunakan tag `caption` di dalam elemen `video` atau `audio`.
- [x] Dengan menggunakan tag `track` di dalam elemen `video` atau `audio`.
- [ ] Dengan menempatkan tag `subtitle` di dalam elemen `video` atau `audio`.
- [ ] Dengan menyematkan tag `text` di dalam elemen `video` atau `audio`.

Mengapa transkrip (*transcripts*) penting untuk konten audio dan video?

- [ ] Transkrip hanya berguna bagi orang yang lebih suka menonton video.
- [x] Transkrip membantu membuat konten dapat diakses oleh individu yang tuli atau mengalami gangguan pendengaran serta memungkinkan pencarian konten tertentu dengan mudah.
- [ ] Transkrip semata-mata untuk menerjemahkan bahasa lisan ke dalam bahasa lain.
- [ ] Transkrip digunakan untuk menambahkan suara non-verbal seperti musik dan tawa ke dalam konten.

---
[⬅️ Sebelumnya](2-what-are-the-accessibility-benefits-for-good-link-text.md) | [Selanjutnya ➡️](4-what-are-some-ways-to-make-web-applications-keyboard-accessible.md)
