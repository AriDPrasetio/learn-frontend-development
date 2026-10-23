# Apa Saja Berbagai Jenis Tombol, dan Kapan Anda Harus Menggunakannya?

`Element` `button` digunakan untuk melakukan aksi tertentu saat diaktifkan. Berikut adalah contoh dari `element` `button` dengan teks tombol `Start Game`.

```html
<button>Start Game</button>
```

## Tipe `button`

Contoh lain penggunaan `element` `button` mencakup mengirimkan formulir (`submitting a form`), menampilkan modal, atau membuka dan menutup menu samping (`toggling a side menu`). `Element` `button` memiliki `attribute` `type` yang mengontrol perilaku tombol saat diaktifkan. Nilai pertama yang mungkin untuk `attribute` `type` adalah tipe `button`. Berikut adalah contoh penggunaan `element` `button` dengan tipe `button` dan teks `Show Alert`:

```html
<button type="button">Show Alert</button>
```

Secara `default`, tombol tidak akan melakukan apa pun saat diaktifkan. Namun, Anda dapat menambahkan beberapa kode `JavaScript` untuk membuat tombol tersebut interaktif, seperti menampilkan peringatan (`alert`) dalam kasus ini.

Klik tombol `Show Alert` untuk melihat jendela peringatan (`alert`) muncul di layar. Untuk berinteraksi dengan contoh ini, Anda perlu mengaktifkan editor interaktif.

**CATATAN**: Contoh interaktif ini menggunakan `JavaScript`, tetapi Anda tidak perlu khawatir untuk memahami kode `JavaScript` tersebut sekarang. Anda akan mempelajari tentang `JavaScript` di modul mendatang.

```html
<button type="button">Show Alert</button>
<script src="index.js"></script>
```

```js
const btn = document.querySelector("button");
btn.addEventListener("click", () => alert("You clicked on the alert button"));
```

## Tipe `submit` dan `reset`

Nilai lain yang mungkin untuk `attribute` `type` adalah nilai `submit`. Berikut adalah contoh penggunaan `element` `button` dengan tipe `submit`.

```html
<form action="">
  <label for="email">Email address:</label>
  <input type="email" id="email" name="email" />
  <button type="submit">Submit form</button>
</form>
```

Di dalam `element` `form` ini, terdapat `element` `label` dan `input` untuk alamat email pengguna. Ketika pengguna mengklik tombol submit, data mereka akan dikirimkan ke server dan akan diproses. Nilai ketiga yang mungkin untuk `attribute` `type` adalah nilai `reset`. Berikut adalah contoh `element` `form` dengan tombol reset dan submit.

Aktifkan editor interaktif dan berinteraksilah dengan input email di jendela pratinjau dengan memberikan alamat email tiruan. Kemudian klik pada tombol reset untuk melihat email Anda menghilang dari kolom tersebut.

```html
<form action="">
  <label for="email">Email address:</label>
  <input type="email" id="email" name="email" />
  <button type="reset">Reset form</button>
  <button type="submit">Submit form</button>
</form>
```

Dalam contoh yang dimodifikasi ini, `element` `label` dan `input` digunakan untuk mengumpulkan alamat email pengguna. Ketika pengguna mengklik tombol reset, tindakan ini akan menghapus semua data input mereka. Penting untuk dicatat bahwa tombol reset biasanya bukan ide yang baik karena dapat menyebabkan pengguna secara tidak sengaja mereset data mereka. Selain itu, banyaknya tombol di formulir Anda dapat mengacaukan antarmuka pengguna (`user interface`).

## Menggunakan `Element` `input` sebagai Tombol

Cara lain untuk membuat tombol di `HTML` adalah dengan menggunakan `element` `input`. `Element` `input` juga memiliki `attribute` `type` dengan nilai yang mungkin berupa `submit`, `reset`, dan `button`. Berikut adalah contoh penggunaan `element` `input` dengan `type` yang disetel ke `button`:

```html
<input class="start-btn" type="button" value="Start Game" />
<script src="index.js"></script>
```

```js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".start-btn");
  btn.addEventListener("click", () => {
    const paraEl = document.createElement("p");
    const bodyEl = document.querySelector("body");

    bodyEl.appendChild(paraEl);
    paraEl.textContent = "The game has started!!!";
  });
});
```

## `input` vs. `button`: Perbedaan Utama

`Attribute` `value` digunakan untuk menampilkan teks tombol. Jadi, apa perbedaan antara menggunakan `element` `input` dan `button`? `Element` `input` adalah `void elements`, yang berarti mereka tidak dapat memiliki `child nodes`, seperti teks, dan hanya dapat memiliki `start tag`. Di sisi lain, `element` `button` menawarkan lebih banyak fleksibilitas karena Anda dapat menyarangkan teks, gambar, dan ikon di dalamnya.

## Pertanyaan (Questions)

Manakah dari berikut ini yang BUKAN merupakan nilai yang valid untuk `attribute` `type` di dalam tombol?

- [x] `src`
- [ ] `button`
- [ ] `reset`
- [ ] `submit`

Apa peran dari `type="reset"` di dalam `element` `button`?

- [ ] Ini mengirimkan data formulir.
- [ ] Ini hanya mereset `element` `textarea`.
- [x] Ini mereset formulir.
- [ ] Tidak ada perilaku untuk tipe `reset`.

Apa elemen lain yang dapat Anda gunakan untuk merepresentasikan sebuah tombol?

- [ ] `img`
- [ ] `form`
- [ ] `header`
- [x] `input`

---
[⬅️ Sebelumnya](1-how-do-forms-labels-and-inputs-work-in-html.md) | [Selanjutnya ➡️](3-what-is-client-side-form-validation-in-html-forms.md)