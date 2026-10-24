# Kapan Anda Harus Menggunakan appearance: none untuk Mengatasi Masalah Styling Search Input dan Checkbox?

Mari kita pelajari kapan harus menggunakan `appearance: none` untuk mengatasi masalah penataan gaya (*styling*) pada `search input`, kotak centang (`checkboxes`), dan tombol radio (`radio buttons`).

Peramban (*browser*) menerapkan penataan gaya bawaan (*default styling*) ke banyak `element`. Dalam kasus `element` `input`, kemampuan Anda untuk menatanya dengan `CSS` mungkin terasa agak terbatas. Oleh karena itu, Anda mungkin ingin menggunakan `appearance: none` untuk menyembunyikan aspek-aspek bawaan `element` tersebut dan membangun gaya Anda sendiri. Sebagai contoh, ini akan menyembunyikan kotak centang bawaan untuk sebuah `checkbox input`, memungkinkan Anda menggunakan indikator kustom seperti centang hijau dan tanda silang (X) merah untuk menampilkan statusnya. Untuk sebuah `search input`, peramban berbasis WebKit akan menampilkan ikon pencarian bawaan dan tombol batal (*cancel*). Menyembunyikan hal-hal tersebut memungkinkan Anda membuat indikator Anda sendiri yang akan muncul secara konsisten di semua peramban.

Berikut adalah contoh pembuatan kotak centang kustom (`custom checkbox`):

**CATATAN**: Beberapa kode `CSS` dalam contoh ini menggunakan `properties` yang belum dibahas. Ini hanya untuk memberi Anda gambaran tentang cara membuat kotak centang kustom. Anda akan mempelajari cara kerja semua ini dalam pelajaran dan lokakarya (*workshops*) mendatang.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
    <input class="checkbox" type="checkbox" /> Agree
  </label>
</form>
```

```css
.checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;
  vertical-align: middle; 
}

.checkbox:hover {
  border-color: #888;
}

.checkbox:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

.checkbox:checked::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:focus {
  outline: 2px solid #90caf9;
  outline-offset: 2px;
}
```

WebKit adalah *software engine* yang membantu peramban web menampilkan situs web. Peramban seperti Safari menggunakan WebKit untuk memastikan halaman web terlihat dan berfungsi dengan benar. `Property` `CSS` `appearance: none` ini memberi Anda kontrol penuh atas penataan gaya, tetapi ada beberapa hal yang perlu diwaspadai. Komponen interaktif bawaan dari `element` `input` mencakup fitur-fitur seperti indikator fokus (*focus indicator*) dan indikator galat (*error indicator*) yang perlu Anda pastikan tidak hilang.

Menciptakan penataan gaya lintas platform (*cross-platform styling*) yang konsisten adalah alasan bagus untuk menggunakan `property` ini. Anda juga dapat menggunakannya untuk memastikan target ketukan (*tap targets*) pada perangkat seluler cukup besar atau warna kotak centang (`checkbox`) memiliki kontras yang memadai.

## Pertanyaan (Questions)

Apa tujuan utama dari penggunaan `appearance: none` pada `element` `input`?

- [ ] Untuk meningkatkan waktu pemuatan halaman.
- [ ] Untuk menyembunyikan `element` `input` sepenuhnya.
- [x] Untuk menghapus penataan gaya bawaan browser dan memungkinkan penataan gaya kustom.
- [ ] Untuk membuat `element` `input` tidak interaktif.

Manakah dari berikut ini yang TIDAK disebutkan sebagai manfaat penggunaan `appearance: none` pada `element` `input`?

- [ ] Menciptakan penataan gaya lintas platform yang konsisten.
- [ ] Memungkinkan indikator kustom untuk kotak centang (*checkboxes*).
- [x] Meningkatkan keamanan pengiriman formulir (*form submissions*).
- [ ] Mengaktifkan target ketukan (*tap targets*) yang lebih besar pada perangkat seluler.

Kelemahan potensial apa dari penggunaan `appearance: none` yang disebutkan dalam pelajaran?

- [ ] Ini dapat menyebabkan input berhenti berfungsi.
- [ ] Ini dapat memperlambat halaman secara signifikan.
- [x] Ini mungkin menghapus fitur-fitur bawaan penting seperti indikator fokus (*focus indicators*).
- [ ] Ini tidak didukung di semua peramban modern.

---

[⬅️ Sebelumnya](1-what-are-some-best-practices-for-styling-text-inputs.md) | [Selanjutnya ➡️](3-what-are-common-issues-when-styling-special-input-elements.md)
