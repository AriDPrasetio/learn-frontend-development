# Apa Tujuan WAI-ARIA, dan Bagaimana Cara Kerjanya?

Membuat konten statis menjadi aksesibel bisa relatif mudah, tetapi konten dinamis bisa jauh lebih menantang. Di sinilah `WAI-ARIA` berperan.

Mari kita pelajari apa itu `WAI-ARIA`, tujuannya, cara kerjanya, dan beberapa contohnya.

`WAI-ARIA` merupakan singkatan dari *Web Accessibility Initiative - Accessible Rich Internet Applications*. Ini adalah spesifikasi yang meningkatkan aksesibilitas untuk konten dinamis dan komponen `UI` (*User Interface*).

Perlu diperhatikan bahwa `WCAG` dan `WAI-ARIA` tidaklah sama. `WCAG` menyediakan panduan umum untuk aksesibilitas web, sedangkan `WAI-ARIA` menawarkan aturan khusus untuk membuat konten dinamis dan interaktif dapat diakses oleh pengguna teknologi asistif (*assistive technologies*).

Jadi, tujuan utama `WAI-ARIA` adalah untuk meningkatkan aksesibilitas konten dinamis dan komponen `UI` yang tidak memiliki padanan elemen `HTML` bawaan (*native*).

`WAI-ARIA` bekerja dengan memperkenalkan serangkaian atribut yang dapat Anda tambahkan ke elemen `HTML` untuk memberikan informasi semantik tambahan. Atribut-atribut ini dikategorikan ke dalam *roles* (peran), *states* (status/keadaan), dan *properties* (properti).

Sebuah `ARIA` `role` mendefinisikan tujuan dari suatu elemen di dalam situs web atau aplikasi web. Berikut adalah contoh pengaturan `role` menjadi `button` untuk elemen `div`:

```html
<div role="button">Click Me</div>
```

Dengan melakukan ini, Anda mengindikasikan kepada teknologi asistif bahwa elemen tersebut adalah sebuah tombol (`button`). Namun, `roles` tidak menyediakan fungsionalitas apa pun. Hanya dengan memberikan `role` berupa `button` pada `div` ini tidak akan membuatnya bertindak seperti tombol. Untuk membuatnya terlihat dan berperilaku seperti tombol, Anda perlu menggunakan `CSS` dan `JavaScript` guna memperoleh hasil yang diinginkan.

Berikut adalah contoh penggunaan `HTML`, `CSS`, dan `JavaScript` untuk membuat elemen `button` kustom:

**CATATAN**: Jangan khawatir jika belum memahami kode `CSS` dan `JavaScript`. Anda akan mempelajari bahasa-bahasa tersebut pada modul-modul mendatang.

```html
<link href="styles.css" rel="stylesheet">
<div id="custom-btn" role="button">Click Me</div>
<script src="index.js"></script>
```

```css
#custom-btn {
  display: inline-block;
  padding: 0.4em 1em;
  font-size: 1rem;
  font-family: sans-serif;
  color: buttontext;
  background-color: buttonface;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  text-align: center;
}

#custom-btn:focus {
  outline: 2px solid Highlight;
  outline-offset: 2px;
}

#custom-btn:active {
  background-color: #ddd;
}
```

```js
const button = document.getElementById("custom-btn");

button.addEventListener("click", () => {
  alert("Button clicked!");
});

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault(); 
    button.click();
  }
});
```

Selalu jauh lebih baik untuk menggunakan elemen `button` bawaan (*native*) atau elemen `input` dengan `type="button"` sebagai gantinya.

Properti `ARIA` menyediakan detail tambahan tentang elemen. Sebagai contoh, properti `aria-labelledby` memungkinkan Anda menghubungkan suatu elemen ke label tertentu:

```html
<h2 id="header-id">About freeCodeCamp</h2>
<button id="button-id" aria-labelledby="header-id button-id">Learn More</button>
```

Ini akan membuat elemen-elemen tersebut dapat dipahami dan dinavigasi oleh pengguna teknologi asistif.

Untuk mendapatkan manfaat terbaik dari `WAI-ARIA`, cobalah untuk tetap menggunakan `HTML` bawaan (*native*) bila memungkinkan karena umumnya menyediakan aksesibilitas yang lebih baik secara langsung (*out of the box*).

Gunakan `WAI-ARIA` hanya ketika `HTML` bawaan tidak memadai, dan jangan lupa mengujinya dengan teknologi asistif seperti pembaca layar (*screen reader*), atau meminta penyandang disabilitas untuk menguji karya Anda. Pastikan juga *states* dan *properties* `WAI-ARIA` Anda diperbarui seiring perubahan konten secara *real time*. Hindari penggunaan `ARIA` yang berlebihan, karena sering kali justru membingungkan.

## Pertanyaan (Questions)

Apa tujuan utama dari atribut `WAI-ARIA` dalam `HTML`?

- [ ] Untuk mengubah tampilan visual elemen.
- [x] Untuk menyediakan informasi semantik tambahan demi aksesibilitas.
- [ ] Untuk menampilkan *tooltip* pada elemen.
- [ ] Untuk menambahkan animasi ke elemen.

Bagaimana cara kerja `WAI-ARIA` untuk meningkatkan aksesibilitas web?

- [ ] Dengan meningkatkan kecepatan pemuatan halaman.
- [x] Dengan memperkenalkan atribut yang memberikan informasi semantik tambahan.
- [ ] Dengan mengenkripsi data.
- [ ] Dengan menciptakan efek visual untuk elemen.

Apa kepanjangan dari `WAI-ARIA`?

- [ ] Web Accessibility Initiative - Advanced Responsive Internet Applications
- [ ] Web Accessibility Interface - Accessible Resource Internet Applications
- [x] Web Accessibility Initiative - Accessible Rich Internet Applications
- [ ] Web Application Interface - Accessibility and Richness

---
[⬅️ Sebelumnya](../2-accessible-tables-forms/2-why-is-it-important-for-inputs-to-have-an-associated-label.md) | [Selanjutnya ➡️](2-what-are-aria-roles.md)
