# Bagaimana Cara Memosisikan Item pada Grid Menggunakan Properti grid-template-areas?

`Property` `grid-template-areas` memungkinkan Anda merancang tata letak `grid` visual dengan menggunakan label bernama (*named labels*).

Anda kemudian menetapkan label-label tersebut ke `grid item` tertentu menggunakan `property` `grid-area`. Jadi, dengan kata lain, label-label bernama tersebut juga disebut sebagai "nama area grid" (*grid area names*).

Berikut adalah sintaks dasar dari `property` `grid-template-areas`:

```css
grid-template-areas:
 'header header header'
 'left-sidebar main right-sidebar'
 'footer footer footer';
```

Berikut poin-poin yang dapat dipelajari dari sintaks dasar tersebut:

- `Value` seperti `header` dan `main` adalah nama-nama dari area `grid`.
- Setiap `value` yang dipisahkan dengan spasi di dalam sebuah `string` mewakili sebuah kolom.
- Setiap `string` mewakili sebuah baris di dalam `grid`.

Jadi, dalam sintaks tersebut, kita memiliki sebuah `grid container` 3 kali 3.

Setelah mendefinisikan templat tersebut, Anda kemudian harus menggunakan `property` `grid-area` dan label bernama (atau area) sebagai `value` untuk memberi tahu `CSS` bahwa `element` tertentu berada di area `grid` tersebut.

`Property` `grid-area` menghubungkan `grid item` ke wilayah bernama (*named region*) yang Anda definisikan di dalam `grid-template-areas`.

Cara populer untuk menunjukkan kemampuan `property` `grid-template-areas` adalah dengan membuat tata letak klasik *Holy Grail*.

Jika Anda belum mengetahuinya, tata letak *Holy Grail* adalah pola desain web dengan *header*, *footer*, dua *sidebar* (bilah samping), dan area konten utama (*main content*). Pola ini memastikan konten utama menjadi prioritas, sementara *sidebar* dan bagian lainnya menyesuaikan secara responsif di dalam tata letak.

Banyak solusi yang ada untuk mengimplementasikan tata letak *Holy Grail*, tetapi menggunakan `grid-template-areas` dan `property` `grid-area` adalah cara paling mudah dan praktis untuk membuatnya.

Berikut adalah contoh untuk tata letak *Holy Grail*:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div class="header">
    <h2>Header</h2>
  </div>
  <div class="sidebar-left">
    <h2>Left Sidebar</h2>
  </div>
  <div class="main"><h2>Main Content</h2></div>
  <div class="sidebar-right">
    <h2>Right Sidebar</h2>
  </div>
  <div class="footer">
    <h2>Footer</h2>
  </div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-areas:
    'header header header'
    'sidebar-left main sidebar-right'
    'footer footer footer';
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

.header {
  grid-area: header;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  text-align: center;
}

.sidebar-left {
  grid-area: sidebar-left;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  text-align: center;
}

.main {
  grid-area: main;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  text-align: center;
}

.sidebar-right {
  grid-area: sidebar-right;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  text-align: center;
}

.footer {
  grid-area: footer;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  text-align: center;
}
```

Harap diperhatikan bahwa kedua `property` `grid-template-areas` dan `grid-area` dapat digunakan secara independen satu sama lain.

`Property` `grid-template-areas` secara khusus digunakan untuk mendefinisikan tata letak visual dengan memetakan area-area `grid` bernama di dalam `grid container`.

Di sisi lain, `property` `grid-area` digunakan untuk memosisikan `grid item` individual, baik dengan menentukan posisi baris dan kolomnya atau dengan mereferensikan area bernama yang telah didefinisikan dengan `property` `grid-template-areas`.

## Pertanyaan (Questions)

Bagaimana cara Anda merancang tata letak `grid` dengan `property` `grid-template-areas`?

- [ ] Dengan nilai yang dipisahkan tanda koma seperti `1 / 4` untuk mewakili berbagai baris dan kolom dari tata letak.
- [ ] Dengan nilai yang dipisahkan tanda koma seperti `header` dan `footer`.
- [x] Dengan serangkaian teks (`strings`) dari nilai-nilai yang dipisahkan spasi untuk mewakili berbagai baris dan kolom dari tata letak.
- [ ] Dengan nilai yang dipisahkan spasi seperti `2fr 1fr 1fr`.

`Property` mana yang Anda gunakan bersama dengan `property` `grid-template-areas`?

- [ ] `grid-column`
- [ ] `grid-row`
- [ ] `grid-gap`
- [x] `grid-area`

Apa kasus penggunaan spesifik dari `property` `grid-area`?

- [ ] Untuk menentukan area `grid` yang akan dikecualikan.
- [ ] Untuk menentukan ukuran dari `grid item`.
- [x] Untuk menempatkan `grid item` individual dengan menentukan posisi baris dan kolom.
- [ ] Untuk membuat representasi visual dari `grid`.

---

[⬅️ Sebelumnya](7-how-do-the-grid-column-and-grid-row-properties-work.md) | [Selanjutnya ➡️](../2-debugging-css/1-how-can-you-use-the-devtools-inspection-tool.md)
