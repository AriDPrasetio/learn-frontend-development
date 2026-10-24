# Apa Saja Masalah Umum Saat Menata Gaya Elemen Input Khusus?

Mari kita pelajari beberapa masalah umum saat mencoba menata gaya `element` `input` khusus seperti `datetime-local` dan `color`.

Jenis-jenis `input` khusus ini mengandalkan `pseudo-elements` yang kompleks untuk membuat fitur seperti pemilih tanggal (*date picker*) dan pemilih warna (*color picker*). Hal ini menghadirkan tantangan signifikan untuk menata gaya `input` tersebut. Salah satu tantangannya adalah, karena penataan gaya bawaan (*default styling*) sepenuhnya bergantung pada peramban (*browser*), `CSS` yang membuat pemilih (*picker*) terlihat tepat di satu peramban dapat menghasilkan tampilan yang sangat berbeda di peramban lain.

Berikut adalah contoh `color input`:

```html
<link rel="stylesheet" href="styles.css">

<form>
  <label for="favorite-color">Pick your favorite color:</label>
  <input type="color" id="favorite-color" name="favorite-color">
</form>
```

```css
input {
  padding: 8px 12px;
  margin: 8px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input[type="color"] {
  width: 60px;
  height: 40px;
  padding: 0;
  border: 2px solid #555;
  border-radius: 4px;
  cursor: pointer;
}
```

Tantangan lainnya adalah kompleksitas dari `pseudo-element`. Perhatikan pemilih tanggal (*date selector*); ada banyak bagian bergerak di sini dan struktur kompleks dari `pseudo-element` dapat menjadi tantangan besar saat menerapkan penataan gaya ke area yang tepat.

Berikut adalah contoh `date input`:

```html
<link rel="stylesheet" href="styles.css">

<form>
  <label for="birthdate">Select your birthdate:</label>
  <input type="date" id="birthdate" name="birthdate">
</form>
```

```css
input {
  padding: 8px 12px;
  margin: 8px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input[type="date"] {
  padding: 6px 10px;
  border: 2px solid #555;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
```

Tentu saja, dengan `element-element` yang kompleks ini, Anda juga berisiko kehilangan fungsionalitas penting secara tidak sengaja saat menata gayanya secara manual. Anda tidak hanya dapat kehilangan indikator penting seperti status fokus (*focus state*) atau `item` yang dipilih, tetapi Anda juga berpotensi merusak pemilih (*selector*) tersebut secara keseluruhan.

Karena alasan-alasan ini, banyak pengembang sepenuhnya mengandalkan pustaka `JavaScript` (*JavaScript libraries*) atau komponen kustom alih-alih menggunakan komponen bawaan peramban.

## Pertanyaan (Questions)

Apa salah satu tantangan utama dalam menata gaya elemen input khusus seperti `datetime-local` dan `color`?

- [ ] Elemen-elemen ini tidak didukung di semua peramban.
- [x] Elemen-elemen ini mengandalkan `pseudo-elements` yang kompleks untuk fungsionalitasnya.
- [ ] Elemen-elemen ini membutuhkan JavaScript tambahan agar berfungsi dengan baik.
- [ ] Elemen-elemen ini tidak dapat ditata gayanya menggunakan CSS sama sekali.

Mengapa CSS yang ditulis untuk menata gaya elemen input khusus dapat bekerja secara berbeda di berbagai peramban?

- [ ] Peramban yang berbeda menggunakan mesin JavaScript (*JavaScript engines*) yang berbeda.
- [x] Penataan gaya bawaan bergantung pada masing-masing peramban (*browser-dependent*).
- [ ] Beberapa peramban tidak mendukung jenis input ini.
- [ ] Properti-properti CSS bekerja secara berbeda di setiap peramban.

Pendekatan apa yang diambil oleh banyak pengembang untuk mengatasi tantangan penataan gaya elemen input yang kompleks?

- [ ] Mereka menghindari penggunaan jenis input ini sama sekali.
- [ ] Mereka menggunakan awalan CSS khusus peramban (*browser-specific CSS prefixes*).
- [x] Mereka mengandalkan pustaka JavaScript (*JavaScript libraries*) atau komponen kustom.
- [ ] Mereka hanya menggunakan inline styles untuk elemen-elemen ini.

---

[⬅️ Sebelumnya](2-when-should-you-use-appearance-none-to-deal-with-issues-styling-search-inputs-and-checkboxes.md) | Selanjutnya ➡️
