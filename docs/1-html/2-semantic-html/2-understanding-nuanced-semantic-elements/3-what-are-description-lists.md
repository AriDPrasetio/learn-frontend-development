# Apa Itu Description List, dan Kapan Anda Harus Menggunakannya?

`Description list` sangat cocok untuk menyajikan istilah dan definisi dalam format yang terorganisir dan mudah dibaca, seperti dalam glosarium atau kamus nyata, di mana Anda dapat menemukan kata-kata beserta definisi yang sesuai.

Ini adalah contoh dari `description list` dalam `HTML` dengan dua istilah dan detail yang sesuai.

Aktifkan editor interaktif (`interactive editor`) dan cobalah untuk menghapus tanda komentar (`uncomment`) pada `code` untuk melihat item detail baru muncul di jendela pratinjau (`preview window`).

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  <!-- <dt>JS</dt>
  <dd>JavaScript</dd> -->
</dl>
```

Dalam hal ini istilahnya adalah akronim `HTML` dan `CSS`, dan detailnya adalah penjabarannya. Detail tersebut juga bisa berupa definisi, atau informasi lain yang terkait dengan istilah tersebut.

Anda akan membutuhkan tiga `element` `HTML` untuk mendefinisikan sebuah `description list`. Pertama, `element` `description list`, `dl`, yang merupakan kontainer untuk keseluruhan daftar. Anda dapat melihatnya membungkus semua `element` lain dari `description list` dalam contoh tersebut.

Kemudian, satu `element` istilah deskripsi (`description term element`), `dt`, untuk setiap istilah. Dalam hal ini `description list` memiliki dua istilah, `HTML` dan `CSS`, sehingga memiliki dua `element` tersebut.

Dan terakhir, setelah setiap istilah Anda akan menemukan `element` detail deskripsi (`description details element`), `dd`, untuk deskripsi, atau detail yang terkait dengan istilah tersebut. Dalam contoh ini, detailnya adalah `HyperText Markup Language` dan `Cascading Style Sheets`.

Di peramban (`browser`), Anda akan melihat setiap istilah diikuti oleh deskripsi yang sesuai. Secara default, deskripsi sedikit lebih menjorok ke kanan untuk membedakannya secara visual.

Namun `description list` tidak terbatas hanya pada istilah dan definisi saja. Mereka jauh lebih serbaguna dari itu. Di sini kita memiliki sebuah resep dengan dua bahan.

Aktifkan editor interaktif (`interactive editor`) dan cobalah untuk menghapus komentar (`uncomment`) pada `code` untuk melihat item detail baru muncul di jendela pratinjau (`preview window`).

```html
<dl>
  <dt>Flour</dt>
  <dd>2 cups</dd>
  <dt>Sugar</dt>
  <dd>1/2 cup</dd>
  <!-- <dt>Vegetable Oil</dt>
  <dd>2 tablespoons</dd> -->
</dl>
```

Seluruh `description list` berada di dalam `element` `description list`. Bahan pertama, `Flour`, berada di dalam `element` istilah deskripsi (`description term element`). Kemudian, Anda dapat melihat berapa banyak bahan yang Anda butuhkan: `2 cups`. Ini berada di dalam `element` detail deskripsi (`description details element`) tepat setelah bahan yang sesuai.

Dan struktur yang sama diulang untuk `Sugar`. Dalam hal ini, resep hanya memiliki dua bahan, namun jika ada lebih banyak, struktur yang sama dapat diulang di seluruh `description list`.

Di peramban, Anda akan melihat bahan-bahan diratakan ke kiri, dan takarannya menjorok ke dalam untuk memisahkannya secara visual.

Kasus penggunaan lain untuk `description list` meliputi spesifikasi produk, pertanyaan yang sering diajukan (`frequently asked questions` / FAQ), informasi kontak, dan metadata. Pada dasarnya, ketika Anda memiliki dua bagian informasi terkait dalam format pasangan kunci-nilai (`key-value pair`), di mana yang satu bertindak sebagai label (kunci / `key`), dan yang lainnya bertindak sebagai informasi tambahan terkait (nilai / `value`), Anda dapat menggunakan `description list`.

## Pertanyaan (Questions)

Tag `HTML` manakah yang digunakan untuk mendefinisikan keseluruhan `description list`?

- [ ] `dt`
- [ ] `dd`
- [x] `dl`
- [ ] `li`

Tag `HTML` manakah yang digunakan untuk mewakili suatu istilah dalam `description list`?

- [ ] `dl`
- [x] `dt`
- [ ] `dd`
- [ ] `li`

Tag `HTML` manakah yang digunakan untuk mendefinisikan atau memberikan detail lebih lanjut tentang suatu istilah dalam `description list`?

- [ ] `dl`
- [ ] `dt`
- [x] `dd`
- [ ] `li`

---
[⬅️ Sebelumnya](2-when-should-you-use-the-strong-element-over-the-bring-attention-to-element.md) | [Selanjutnya ➡️](../3-working-with-text-and-time-semantic-elements/1-how-do-block-and-inline-quotes-work-in-html.md)
