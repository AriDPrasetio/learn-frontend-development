# Apa Itu Atribut aria-describedby, dan Bagaimana Cara Kerjanya?

Atribut `aria-describedby` digunakan untuk memberikan informasi tambahan tentang suatu elemen kepada pengguna pembaca layar (*screen readers*) dengan mereferensikan konten yang sudah ada di halaman. Atribut ini membuat keterkaitan secara terprogram (*programmatic association*) antara elemen dan konten tersebut (secara teknis disebut sebagai *accessible description*), yang dapat digunakan oleh pembaca layar untuk memberi tahu pengguna tentang informasi tambahan saat mereka berinteraksi dengan elemen tersebut.

Penggunaan paling umum untuk `aria-describedby` adalah untuk mengaitkan instruksi dan pesan kesalahan (*error messages*) dengan formulir masukan (*form inputs*). Karena berbagai metode yang dimiliki pengguna pembaca layar untuk menavigasi halaman, mereka mungkin melewatkan pesan-pesan ini ketika berpindah antar-input. Menggunakan `aria-describedby` membantu memastikan bahwa mereka akan mendengarnya.

Mari kita lihat beberapa contoh untuk memahami cara kerjanya. Pada contoh pertama ini, kita memiliki elemen `form` yang menerima kata sandi (*password*).

Aktifkan editor interaktif dan ketik beberapa karakter ke dalam kolom input kata sandi. Anda akan melihat bahwa kata sandi disamarkan (*masked*) di jendela pratinjau. Anda juga akan melihat bahwa teks `password-help` tetap berwarna merah hingga Anda mengetik 8 karakter atau lebih ke dalam kolom input.

CATATAN: Contoh interaktif ini menggunakan `CSS` dan `JavaScript` untuk memperbarui warna teks `password-help` secara dinamis. Jangan khawatir jika belum memahami kode `JavaScript` karena Anda akan mempelajari `JavaScript` pada modul-modul mendatang.

```html
<link rel="stylesheet" href="styles.css">

<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help" />
  <p id="password-help">Your password must be at least 8 characters long.</p>
</form>

<script src="index.js"></script>
```

```css
#password-help {
  color: red;
}
```

```js
const passwordEl = document.getElementById("password");
const passwordHelpText = document.getElementById("password-help");

passwordEl.addEventListener("input", (e) => { 
  const userInput = e.target.value;
  passwordHelpText.style.color = userInput.length >= 8 ? "green" : "red";
});
```

Kita menggunakan elemen `label` untuk teks `Password` dan mengaitkannya dengan kolom `input` kata sandi.

Kita juga memiliki elemen paragraf yang menjelaskan persyaratan kata sandi. Kita menggunakan atribut `aria-describedby` untuk mengaitkan kolom `input` kata sandi dengan persyaratan kata sandi dalam elemen paragraf. Saat pengguna pembaca layar berinteraksi dengan `input` ini, pembaca layar mereka akan mengumumkan nama dari `input` (`Password`) dan kemudian mungkin juga mengumumkan persyaratan kata sandi tersebut. Namun, hal ini bukanlah jaminan mutlak karena beberapa pembaca layar mungkin tidak secara otomatis mengumumkan konten tambahan tersebut, atau mungkin hanya mengumumkannya dalam kondisi tertentu. Ini adalah hal yang wajar. Setiap pembaca layar berbeda dan menangani atribut `ARIA` dengan caranya masing-masing. Hal ini tidak meniadakan manfaat penggunaan `aria-describedby`, karena atribut ini tetap bermanfaat bagi pengguna pembaca layar secara umum.

Kasus penggunaan bagus lainnya untuk atribut `aria-describedby` adalah saat Anda memiliki tombol hapus (`button`). Berikut adalah contoh tombol hapus (`button`) yang diikuti oleh pesan yang menjelaskan apa yang akan terjadi saat tombol tersebut diklik:

```html
<button aria-describedby="delete-message">Delete</button>

<p id="delete-message">Warning! All deletions are permanent.</p>
```

Sama seperti pada contoh sebelumnya, kita mengaitkan tombol hapus dengan pesan menggunakan atribut `aria-describedby`. Nilai `id` dan nilai atribut `aria-describedby` harus cocok.

Atribut `aria-describedby` adalah atribut yang sangat berguna untuk membantu memastikan bahwa informasi tambahan tentang suatu elemen disampaikan kepada pengguna pembaca layar saat mereka berinteraksi dengan elemen tersebut. Atribut ini paling sering digunakan untuk mengaitkan instruksi dan pesan kesalahan dengan kolom masukan formulir guna mengurangi kemungkinan pengguna pembaca layar melewatkan pesan-pesan tersebut saat menavigasi formulir.

## Pertanyaan (Questions)

Apa tujuan dari atribut `aria-describedby` dalam `HTML`?

- [ ] Untuk menentukan pengidentifikasi unik untuk suatu elemen.
- [x] Untuk menyediakan informasi tambahan tentang suatu elemen kepada teknologi asistif.
- [ ] Untuk mendefinisikan bahasa dari dokumen `HTML`.
- [ ] Untuk mengontrol visibilitas elemen `HTML`.

Pada contoh yang disediakan, bagaimana atribut `aria-describedby` meningkatkan pengalaman pengguna untuk kolom formulir (*form fields*)?

- [ ] Mengubah tampilan visual kolom formulir.
- [x] Mengaitkan teks deskriptif tambahan dengan kolom formulir untuk memberikan lebih banyak konteks atau petunjuk.
- [ ] Memvalidasi nilai input pada kolom formulir.
- [ ] Mengisi kolom formulir secara otomatis dengan nilai bawaan (*default*).

Manakah dari berikut ini yang merupakan cara yang benar untuk menggunakan atribut `aria-describedby` di dalam formulir?

- [x] ```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help" />
  <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
```

- [ ] ```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password" />
  <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
```

- [ ] ```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help" />
  <p>Your password must be at least 8 characters long.</p>
</form>
```

- [ ] ```html
<form>
  <label for="password">Password:</label>
  <input
    type="password"
    id="password"
    aria-label="Your password must be at least 8 characters long."
  />
</form>
```

---
[⬅️ Sebelumnya](4-what-is-the-aria-hidden-attribute.md) | [Selanjutnya ➡️](../4-accessible-media-elements/1-when-is-the-alt-attribute-needed.md)
