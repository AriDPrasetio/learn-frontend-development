# Apa Itu Comments dalam JavaScript, dan Kapan Anda Harus Menggunakannya?

`Comments` dalam pemrograman digunakan untuk memberikan konteks tambahan untuk `code` atau meninggalkan catatan untuk diri Anda sendiri dan orang lain.

`Comments` adalah baris atau blok teks yang diabaikan oleh `JavaScript engine` saat `code` Anda dieksekusi. Mereka ada semata-mata untuk kepentingan orang yang membaca `code` tersebut, baik itu Anda sendiri maupun orang lain.

`JavaScript` menyediakan dua cara untuk menambahkan `comments` ke `code` Anda: `single-line comments` dan `multi-line comments`.

`Single-line comments` dibuat menggunakan dua garis miring ke depan (`forward slashes`) (`//`). Berikut adalah sebuah contoh:

```javascript
// I am a single line comment in JavaScript
```

Jenis `comment` ini sangat cocok untuk penjelasan singkat atau klarifikasi.

Berikut adalah contoh dunia nyata dari file proyek kurikulum freeCodeCamp:

```javascript
// This is to allow English to build without having to download the i18n files.
// It fails when trying to resolve the i18n-curriculum path if they don't exist.
const curriculumLocale = process.env.CURRICULUM_LOCALE ?? 'english';
const I18N_CURRICULUM_DIR = path.resolve(
  __dirname,
  curriculumLocale === 'english' ? '.' : 'i18n-curriculum/curriculum'
);
```

Jangan khawatir untuk mencoba memahami apa yang sebenarnya dilakukan oleh `code` tersebut karena ini lebih lanjut daripada apa yang telah Anda pelajari sejauh ini. Sebaliknya, fokuslah pada `comment` yang ditinggalkan oleh `developer`. `Comment` ini memberikan konteks penting tentang mengapa `code` ini ada.

`Comments` seperti ini penting bagi mereka yang bekerja dalam tim karena dua alasan:

1. `Developers` lain yang mengerjakan proyek tersebut akan memahami tujuan dari `code` ini.
2. Ini membantu mencegah perubahan atau penghapusan yang tidak perlu tanpa berkonsultasi dengan tim, yang dapat menyebabkan `bugs` atau masalah.

Jenis `comment` lainnya adalah `multi-line comment`. Berikut adalah sintaks dasarnya:

```javascript
/*
 I am a multiline comment.
 This is helpful for longer explanations.
*/
```

`Multi-line comments` berguna saat Anda perlu menulis deskripsi, penjelasan, atau catatan yang lebih panjang di dalam `code` Anda.

Mari kita lihat lagi file proyek kurikulum freeCodeCamp untuk melihat bagaimana `multiline comments` dapat digunakan di dunia nyata.

```javascript
/* Since there can be more than one way to complete a certification (using the
legacy curriculum or the new one, for instance), we need a certification
field to track which certification this belongs to. */
const dupeCertifications = [
  {
    certification: 'responsive-web-design',
    dupe: '2022/responsive-web-design'
  }
];
const hasDupe = dupeCertifications.find(
  cert => cert.dupe === meta.superBlock
);
```

Sama seperti sebelumnya, abaikan semua `code` `JavaScript` tersebut karena ia menggunakan konsep-konsep yang belum diajarkan. Sebaliknya, fokuslah pada `comment` yang ditinggalkan oleh `developer`.

Seorang `developer` dalam tim, atau bahkan kontributor baru yang mengerjakan proyek, dapat memahami mengapa bagian `code` ini ada di sini dan memiliki konteks penuh sebelum mengerjakan area proyek ini.

Meskipun `comments` berguna dalam pemrograman, penting untuk menghindari pemberian komentar berlebihan (*over-commenting*). Anda tidak perlu mengomentari setiap baris `code`, terutama jika `code` tersebut mudah dipahami dan jelas dengan sendirinya (*self-explanatory*).

Berikut adalah contoh penggunaan `comments` untuk menjelaskan hal yang sudah jelas:

```javascript
// This code uses the const keyword to create a new variable called price.
// We are assigning the number 10 to the price variable.
const price = 10;
```

Dalam situasi ini, tidak perlu menambahkan `comments` apa pun di sini karena `code` tersebut sudah jelas dengan sendirinya. Tujuannya adalah untuk meningkatkan keterbacaan, bukan mengacaukan `code` dengan penjelasan yang tidak perlu.

Jika Anda ingin menambahkan `comments` ke proyek pribadi saat Anda sedang belajar `coding`, itu tidak masalah. Namun setelah Anda mulai mengerjakan proyek dunia nyata bersama `developers` lain, penting untuk tidak menggunakan `comments` untuk `code` yang sudah jelas dengan sendirinya.

Penting juga untuk tidak menggunakan `comments` untuk membantu menjelaskan `code` yang membingungkan, terlalu rumit, atau ditulis dengan buruk. Dalam situasi tersebut, yang terbaik adalah me-`refactor`, atau mengubah, `code` Anda sehingga `developers` lain akan lebih memahami apa yang sedang terjadi.

`Comments` adalah alat yang ampuh untuk mendokumentasikan `code` Anda dan membuatnya lebih mudah dipahami. Anda harus menggunakan `comments` untuk memberikan konteks atau meninggalkan catatan untuk diri Anda sendiri dan orang lain.

## Pertanyaan (Questions)

Manakah dari berikut ini yang membuat `single-line comment` dengan benar dalam `JavaScript`?

- `<!-- This is a comment -->`
- `/* This is a comment */`
- `// This is a comment`
- `# This is a comment`

Kapan Anda akan menggunakan `multi-line comment` alih-alih `single-line comment`?

- Saat Anda perlu menonaktifkan sebaris `code` untuk sementara.
- Saat Anda ingin menulis penjelasan singkat tentang sebuah `variable`.
- Saat Anda perlu menjelaskan bagian `code` yang besar atau memberikan informasi terperinci.
- Saat Anda menulis komentar `HTML`.

Manakah dari berikut ini yang merupakan praktik yang baik saat menggunakan `comments` dalam `code` Anda?

- Komentari setiap baris `code`.
- Gunakan `comments` untuk memberikan konteks dan meninggalkan catatan untuk diri Anda sendiri serta `developers` lain.
- Gunakan `comments` untuk menjelaskan bahkan `code` yang paling sederhana sekalipun.
- Hindari `comments` sama sekali untuk menjaga `code` tetap bersih.

---
[⬅️ Sebelumnya](1-what-is-the-role-of-semicolons.md) | [Selanjutnya ➡️](../4-working-with-data-types/1-what-is-dynamic-typing-in-javascript-and-how-does-it-differ-from-statically-typed-languages.md)
