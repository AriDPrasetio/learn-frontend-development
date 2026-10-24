# Bagaimana Cara Menggunakan Attribute Selector untuk Menargetkan Elemen dengan Atribut lang dan data-lang?

Ketika membangun situs web multibahasa (*multilingual*) atau menangani atribut data kustom (*custom data attributes*), Anda sering kali perlu menata gaya `element` berdasarkan bahasa yang dimuatnya atau `value` data tertentu.

`Attribute` `lang` dan `data-lang` biasanya digunakan untuk tujuan-tujuan ini, dan `attribute selector` dalam `CSS` memungkinkan Anda menerapkan `styles` berdasarkan `attribute-attribute` tersebut secara efektif.

`Attribute` `lang` digunakan dalam `HTML` untuk menentukan bahasa dari konten di dalam sebuah `element`. Anda mungkin ingin menata gaya `element` secara berbeda berdasarkan bahasa penulisannya, terutama pada situs web multibahasa.

Berikut adalah contoh bagaimana Anda dapat menggunakan `attribute selector` untuk menargetkan `element-element` dengan `attribute` `lang` tertentu:

```html
<link rel="stylesheet" href="styles.css">
<p lang="en">This is an English paragraph.</p>
<p lang="fr">Ceci est un paragraphe en français.</p>
```

```css
p[lang="en"] {
  font-style: italic;
}
```

Aturan `CSS` ini menerapkan gaya miring (*italic*) ke `element` paragraf mana pun di mana `attribute` `lang` diatur ke bahasa Inggris (`en`). Ini bisa berguna untuk menekankan teks berbahasa Inggris di dalam dokumen yang mencakup beberapa bahasa.

Demikian pula, Anda dapat menggunakan `attribute selector` untuk menargetkan `element-element` dengan `attribute` `data-lang`.

Atribut data kustom (*custom data attributes*) seperti `data-lang` biasanya digunakan untuk menyimpan informasi tambahan pada `element-element`, seperti menentukan bahasa yang digunakan di dalam bagian teks tertentu.

Berikut adalah cara Anda dapat menggunakan `CSS` untuk menargetkan dan menata gaya `element-element` berdasarkan `attribute` `data-lang`:

```html
<link rel="stylesheet" href="styles.css">
<p data-lang="fr">Ceci est un paragraphe en français.</p>
<p data-lang="en">This is a paragraph in English.</p>
```

```css
p[data-lang="fr"] {
  color: blue;
}
```

Dalam hal ini, setiap `element` `p` dengan `attribute` `data-lang` yang diatur ke bahasa Prancis (`fr`) akan diubah warna teksnya menjadi biru. Ini memungkinkan Anda mengidentifikasi dan menata bagian konten dengan cepat berdasarkan informasi bahasa yang disimpan dalam `attribute` `data-lang`.

`Attribute selector` seperti ini menyediakan cara yang ampuh untuk menerapkan penataan gaya kondisional berdasarkan metadata yang tertanam di dalam `HTML` Anda, menjadikan halaman web Anda lebih dinamis dan peka konteks (*context-aware*).

## Pertanyaan (Questions)

`Selector` `CSS` manakah yang akan Anda gunakan untuk menargetkan semua paragraf di mana `attribute` `lang` diatur ke bahasa Inggris?

- [x] `p[lang="en"]`
- [ ] `p[lang]`
- [ ] `p[lang="es"]`
- [ ] `p[lang*="en"]`

Bagaimana cara Anda menargetkan semua `element` `div` yang memiliki `attribute` `data-lang` yang diatur ke `fr`?

- [ ] `div[data-lang]`
- [x] `div[data-lang="fr"]`
- [ ] `div[lang="fr"]`
- [ ] `div[data-lang*="fr"]`

`Attribute` manakah yang akan Anda gunakan dalam `HTML` untuk menentukan bahasa konten di dalam sebuah `element`?

- [ ] `data-lang`
- [ ] `class`
- [x] `lang`
- [ ] `id`

---

[⬅️ Sebelumnya](1-what-is-the-attribute-selector.md) | [Selanjutnya ➡️](3-how-to-use-the-attribute-selector-to-target-ordered-list-elements-with-the-type-attribute.md)
