# Bagaimana Cara Menggunakan Attribute Selector untuk Menargetkan Elemen Ordered List dengan Atribut type?

Ketika bekerja dengan daftar berurutan (*ordered lists*) dalam `HTML`, `attribute` `type` memungkinkan Anda menentukan gaya penomoran yang digunakan, seperti numerik, alfabet, atau angka Romawi.

`Attribute` `type` dapat diatur pada `element` `ol` (*ordered list*) untuk mengontrol format penomoran:

- `1` untuk daftar numerik (seperti 1, 2, 3, ...),
- `A` untuk daftar alfabet huruf besar (seperti A, B, C, ...),
- `a` untuk daftar alfabet huruf kecil (seperti a, b, c, ...),
- `I` untuk angka Romawi huruf besar (seperti I, II, III, ...),
- `i` untuk angka Romawi huruf kecil (seperti i, ii, iii, ...).

Berikut adalah cara Anda dapat menggunakan `attribute selector` untuk menargetkan sebuah *ordered list* dengan `attribute` `type` tertentu:

```html
<link rel="stylesheet" href="styles.css">
<ol type="A">
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

```css
ol[type="A"] {
  color: purple;
  font-weight: bold;
}
```

Pada contoh ini, aturan `CSS` akan menerapkan teks berwarna ungu dan ketebalan font tebal (*bold font weight*) ke daftar berurutan mana pun yang menggunakan penomoran alfabet huruf besar, yang ditentukan oleh `type="A"`.

Demikian pula, Anda dapat menargetkan daftar berurutan yang menggunakan angka Romawi huruf kecil dengan memilih daftar yang memiliki `type="i"`:

```html
<link rel="stylesheet" href="styles.css">
<ol type="i">
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

```css
ol[type="i"] {
  color: green;
}
```

Aturan ini akan mengubah warna teks menjadi hijau untuk setiap daftar berurutan yang menggunakan angka Romawi huruf kecil.

Kemampuan untuk menata gaya daftar berurutan berdasarkan `attribute` `type`-nya memberi Anda kendali lebih besar atas tampilan daftar dalam dokumen Anda, memungkinkan kustomisasi berdasarkan bagaimana konten tersebut terstruktur.

## Pertanyaan (Questions)

`Selector` `CSS` manakah yang akan Anda gunakan untuk menargetkan daftar berurutan (*ordered lists*) yang menggunakan penomoran alfabet huruf besar?

- [x] `ol[type="A"]`
- [ ] `ol[type="a"]`
- [ ] `ol[type="1"]`
- [ ] `ol[type="I"]`

Bagaimana cara Anda menargetkan daftar berurutan yang menggunakan angka Romawi huruf kecil?

- [ ] `ol[type="I"]`
- [ ] `ol[type="1"]`
- [x] `ol[type="i"]`
- [ ] `ol[type="A"]`

`Attribute` manakah yang umum digunakan dalam `HTML` untuk menentukan gaya penomoran dari sebuah daftar berurutan (*ordered list*)?

- [ ] `data-type`
- [x] `type`
- [ ] `style`
- [ ] `order`

---

[⬅️ Sebelumnya](2-how-to-use-the-attribute-selector-to-target-elements-with-the-lang-and-data-lang-attributes.md) | Selanjutnya ➡️
