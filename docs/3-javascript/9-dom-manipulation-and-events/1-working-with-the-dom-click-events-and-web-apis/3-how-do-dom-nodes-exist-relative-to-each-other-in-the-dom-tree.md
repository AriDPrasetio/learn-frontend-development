# Bagaimana Hubungan Relatif Antar Simpul DOM dalam Pohon DOM?

Mari kita pelajari tentang simpul-simpul `DOM` (*DOM nodes*) dan hubungannya di dalam pohon `DOM` (*DOM tree*).

Sama seperti pohon nyata yang memiliki cabang-cabang besar dan kecil yang terhubung dalam struktur hierarkis, simpul-simpul `DOM` juga memiliki hubungan langsung dan tidak langsung satu sama lain. Kita akan menggunakan contoh ini untuk mengilustrasikan hubungan-hubungan tersebut:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Tree Example</title>
  </head>
  <body>
    <h1>Heading 1</h1>
    <p>Paragraph 1</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </body>
</html>
```

Mari kita mulai dari posisi paling atas. Akar dari pohon `DOM` (*root of DOM tree*) adalah elemen `html`. Ini adalah wadah tingkat teratas untuk semua konten dokumen `HTML`. Semua simpul lainnya adalah keturunan (*descendants*) dari simpul akar ini.

Kemudian, di bawah simpul akar, kita menemukan simpul-simpul lain dalam hierarki. Sebuah *parent node* (simpul induk) adalah elemen yang berisi elemen-elemen lain. Sebuah *child node* (simpul anak) adalah elemen yang berada di dalam elemen lain.

Dalam contoh ini, elemen `body` adalah *parent* dari elemen paragraf (`p`), sementara elemen paragraf adalah *child* dari elemen `body`. Elemen-elemen ini direpresentasikan sebagai simpul di pohon `DOM` dengan hubungan yang sama.

Sama seperti kita memiliki *parent node* dan *child node*, kita juga memiliki *sibling node* (simpul saudara). *Sibling node* adalah elemen-elemen yang memiliki induk yang sama. Dalam contoh kita, dua elemen item daftar (`li`) berbagi induk daftar tak berurutan (`ul`) yang sama, sehingga mereka adalah *siblings*.

Demikian pula, elemen `h1` dan paragraf (`p`) adalah *siblings* karena mereka berbagi induk yang sama, yaitu elemen `body`.

Kita juga memiliki hubungan tidak langsung di berbagai tingkat hierarki yang berbeda. *Descendant node* (simpul keturunan) adalah elemen yang berada di dalam elemen lain, baik secara langsung maupun tidak langsung. Sebuah elemen dianggap sebagai keturunan dari elemen lain jika dapat dicapai dengan menelusuri pohon `DOM` ke arah bawah dari simpul leluhurnya (*ancestor*).

Dalam contoh kita, elemen item daftar `li` adalah *descendants* dari elemen `body`, karena mereka secara tidak langsung berada di dalamnya.

Sebuah *ancestor node* (simpul leluhur) adalah elemen yang posisinya lebih tinggi dalam hierarki pohon `DOM` daripada elemen lainnya. Dalam contoh kita, elemen `body` adalah *ancestor* dari elemen item daftar `li`.

Memahami hubungan-hubungan ini sangat penting untuk memanipulasi dan menavigasi pohon `DOM` menggunakan `JavaScript`.

## Pertanyaan (Questions)

### Pertanyaan 1

Manakah dari berikut ini yang merupakan *parent node* dari elemen `body`?

- [ ] `head`
- [x] `html`
- [ ] `title`
- [ ] `document`

### Pertanyaan 2

Tiga elemen `li` di dalam elemen `ul` yang sama dianggap sebagai:

- [ ] Simpul induk (*parent nodes*).
- [ ] Simpul anak (*child nodes*).
- [x] Simpul saudara (*sibling nodes*).
- [ ] Simpul keturunan (*descendant nodes*).

### Pertanyaan 3

Sebuah elemen `p` yang terdapat langsung di dalam sebuah `div` adalah:

- [ ] *Parent node* dari `div`.
- [x] *Child node* dari `div`.
- [ ] *Sibling node* dari `div`.
- [ ] *Ancestor node* dari `div`.

---
[⬅️ Sebelumnya](2-what-is-the-dom-and-how-do-you-access-elements.md) | [Selanjutnya ➡️](4-what-is-the-queryselectorall-method-and-when-should-you-use-it.md)
