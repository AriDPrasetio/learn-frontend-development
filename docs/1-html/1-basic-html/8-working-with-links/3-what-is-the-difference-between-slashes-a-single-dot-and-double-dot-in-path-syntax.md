# Apa Perbedaan Antara Garis Miring, Titik Tunggal, dan Titik Ganda dalam Sintaksis Jalur?

Anda mungkin pernah melihat tautan seperti `/public/logo.png`, `./script.js`, atau `../styles.css` sebelumnya. Namun apa arti dari tipe tautan khusus ini? Ini disebut jalur file (*file path*). Ada tiga sintaksis kunci yang perlu diketahui. Pertama adalah garis miring (*slash*), yang dapat berupa garis miring terbalik (*backslash* `\`) atau garis miring ke depan (*forward slash* `/`) tergantung pada sistem operasi Anda. Yang kedua adalah titik tunggal (`.`). Dan terakhir, kita memiliki titik ganda (`..`).

Garis miring dikenal sebagai "pemisah jalur" (*path separator*). Garis miring digunakan untuk menandai jeda dalam teks antara nama folder atau file. Inilah cara komputer Anda mengetahui bahwa `naomis-files/` mengarah ke sebuah direktori dengan nama yang sama, sedangkan `naomis/files/` mengarah ke direktori `files` di dalam direktori `naomis`.

Satu titik menunjuk ke direktori saat ini (*current directory*), dan dua titik menunjuk ke direktori induk (*parent directory*). Anda biasanya akan melihat satu titik digunakan untuk memastikan bahwa jalur tersebut dikenali sebagai `relative path`. Ingatlah bahwa Anda telah mempelajari jalur relatif versus absolut dalam pelajaran sebelumnya.

Namun, titik ganda lebih umum digunakan untuk mengakses file di luar direktori kerja saat ini (*current working directory*).

Sebagai contoh, perhatikan pohon file (*file tree*) berikut:

```html
my-app/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
├─ src/
│  ├─ index.css
│  ├─ index.js
```

Jika file `public/index.html` Anda perlu memuat file `favicon.ico`, Anda akan menggunakan `relative path` dengan satu titik untuk mengakses direktori saat ini: `./favicon.ico`. Jika file `public/index.html` Anda perlu memuat file `index.css`, Anda akan menggunakan `relative path` dengan dua titik untuk menavigasi ke direktori induk `my-app` terlebih dahulu, lalu ke direktori `src`, dan akhirnya ke file Anda: `../src/index.css`.

## Pertanyaan (Questions)

Pilihan manakah yang merupakan jalur absolut (absolute path)?

- [x] `/public/styles.css`
- [ ] `./script.js`
- [ ] `../src/nav.html`
- [ ] `https://freecodecamp.org`

Pilihan manakah yang merupakan jalur relatif (relative path) ke direktori saat ini?

- [ ] `/public/styles.css`
- [x] `./script.js`
- [ ] `../src/nav.html`
- [ ] `https://freecodecamp.org`

Pilihan manakah yang merupakan jalur relatif (relative path) ke direktori induk?

- [ ] `/public/styles.css`
- [ ] `./script.js`
- [x] `../src/nav.html`
- [ ] `https://freecodecamp.org`

---
[⬅️ Sebelumnya](2-what-is-the-difference-between-absolute-and-relative-paths.md) | [Selanjutnya ➡️](4-what-are-the-different-link-states.md)
