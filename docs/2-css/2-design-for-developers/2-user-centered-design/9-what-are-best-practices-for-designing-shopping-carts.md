# Apa Saja Praktik Terbaik untuk Merancang Shopping Carts?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau (*preview*) dari konsep-konsep desain ini agar Anda lebih memahami cara kerjanya. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

Ada ribuan situs web *e-commerce* di internet, dan keranjang belanja (`shopping carts`) adalah bagian penting dari pengalaman *e-commerce*. Desain yang baik dapat membuat pengalaman keranjang belanja lebih menyenangkan dan meningkatkan penjualan. Desain yang buruk dapat menyebabkan keranjang yang ditinggalkan (*abandoned carts*) dan hilangnya penjualan.

## Menjaga Keranjang Tetap Terlihat (Keeping the Cart Visible)

Dalam pelajaran ini, kita akan membahas beberapa praktik terbaik (*best practices*) untuk merancang `shopping carts`. Pertimbangan desain pertama adalah memastikan keranjang belanja terlihat oleh pengguna setiap saat. Sebagian besar desain keranjang belanja akan menampilkan keranjang di sudut kanan atas halaman. Pengguna harus melihat jumlah barang di keranjang mereka ditampilkan di sebelah ikon keranjang, dan dapat mengeklik keranjang untuk melihat rincian lebih lanjut mengenai barang yang mereka beli.

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">2</span>
  </button>
</div>
```

```css
.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 24px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 13px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  background: white;
  border: 1px solid #ccc;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-top: 10px;
  padding: 10px;
  position: relative;
  z-index: 1000;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
```

## Mengelola Jumlah dan Penghapusan Item (Managing Item Quantity and Removal)

Pertimbangan lain adalah menyediakan cara yang jelas bagi pengguna untuk memperbarui jumlah (*quantity*) item dalam keranjang mereka. Hal ini dapat dilakukan dengan menyediakan bidang input jumlah (*quantity input field*) di sebelah setiap item dalam keranjang. Pengguna dapat dengan mudah memperbarui jumlah item dengan mengubah angka di bidang input tersebut.

Anda juga harus menyediakan tombol "Remove" (Hapus) di sebelah setiap item dalam keranjang. Ini memungkinkan pengguna untuk dengan mudah menghapus item dari keranjang mereka. Anda tidak ingin mempersulit pengguna untuk menghapus item dari keranjang mereka, karena hal ini dapat menyebabkan frustrasi dan keranjang yang ditinggalkan (*abandoned carts*).

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <h2>Your Cart</h2>
  <ul class="cart-items">
    <li class="cart-item">
      <span class="item-name">T-Shirt</span>
      <input type="number" min="1" value="2" class="quantity-input" aria-label="Quantity for T-Shirt" />
      <button class="remove-btn">Remove</button>
    </li>
    <li class="cart-item">
      <span class="item-name">Hat</span>
      <input type="number" min="1" value="1" class="quantity-input" aria-label="Quantity for Hat" />
      <button class="remove-btn">Remove</button>
    </li>
  </ul>
</div>
```

```css
.shopping-cart {
  max-width: 400px;
  margin: 20px auto;
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 15px;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

.shopping-cart h2 {
  margin-top: 0;
  font-weight: 600;
  font-size: 1.4rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.item-name {
  flex: 1;
  font-size: 1rem;
}

.quantity-input {
  width: 50px;
  padding: 4px 6px;
  font-size: 1rem;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.remove-btn {
  background: #e74c3c;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.remove-btn:hover,
.remove-btn:focus {
  background: #c0392b;
  outline: none;
}
```

## Memilih Ikon Keranjang yang Mudah Dikenali (Choosing a Recognizable Cart Icon)

Pertimbangan lainnya adalah ikon keranjang belanja itu sendiri. Ikon harus berupa sesuatu yang mudah dikenali oleh semua pengguna. Ikon yang umum adalah keranjang belanja dengan pegangan dan roda. Ikon lainnya mungkin berupa tas belanja (*shopping bag*) atau keranjang jinjing (*basket*). Namun Anda tidak ingin memilih ikon yang terlalu abstrak atau sulit dipahami.

## Menampilkan Total Keranjang (Displaying the Cart Total)

Ketika pengguna ingin meninjau total dalam keranjang mereka, mereka harus dapat dengan mudah menemukan total biaya dari semua item dalam keranjang. Ini harus ditampilkan secara menonjol di halaman, sehingga pengguna tidak perlu mencarinya.

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">3</span>
  </button>
  <div id="cart-details">
    <ul id="cart-items">
      <li>T-Shirt x2 - $40.00</li>
      <li>Hat x1 - $15.00</li>
    </ul>
    <div id="cart-total">
      Total: <strong>$55.00</strong>
    </div>
  </div>
</div>
```

```css
.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
  width: 280px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 28px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 14px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  margin-top: 10px;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 1rem;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

#cart-total {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
  color: #111;
}
```

## Menambahkan Ajakan Bertindak (Call-to-Action) untuk Checkout

Terakhir, Anda harus menyediakan tombol ajakan bertindak (*call-to-action*) yang jelas bagi pengguna untuk melanjutkan ke proses *checkout*. Tombol ini harus ditampilkan secara menonjol di halaman, sehingga pengguna tidak perlu mencarinya.

Anda tidak ingin memiliki terlalu banyak tombol di halaman, karena hal ini dapat menimbulkan kebingungan. Tombol ajakan bertindak harus menjadi tombol paling menonjol di halaman, sehingga pengguna tahu persis apa yang harus dilakukan selanjutnya. Anda sebaiknya menggunakan warna utama merek (*brand primary color*) untuk tombol tersebut, sehingga tombol tersebut tampak kontras dan menonjol dari bagian halaman lainnya.

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">3</span>
  </button>
  <div id="cart-details">
    <ul id="cart-items">
      <li>T-Shirt x2 - $40.00</li>
      <li>Hat x1 - $15.00</li>
    </ul>
    <div id="cart-total">
      Total: <strong>$55.00</strong>
    </div>
    <button id="checkout-btn">Proceed to Checkout</button>
  </div>
</div>
```

```css
:root {
  --primary-color: #007bff; 
}

.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
  width: 280px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 28px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 14px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  margin-top: 10px;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 1rem;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

#cart-total {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
  color: #111;
  margin-bottom: 15px;
}

#checkout-btn {
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 0;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#checkout-btn:hover,
#checkout-btn:focus {
  background-color: #0056b3;
  outline: none;
}
```

Ini hanyalah beberapa praktik terbaik untuk merancang keranjang belanja (`shopping carts`). Dengan mengikuti panduan ini, Anda dapat membuat keranjang belanja yang mudah digunakan dan akan membantu meningkatkan penjualan untuk situs web *e-commerce* Anda.

## Pertanyaan (Questions)

Apa aspek penting dari merancang keranjang belanja (`shopping cart`) yang dapat memengaruhi pengalaman berbelanja dan penjualan?

- [ ] Warna ikon keranjang belanja.
- [x] Posisi keranjang belanja pada halaman.
- [ ] Jumlah barang di dalam keranjang.
- [ ] Merek dari situs web *e-commerce*.

Bagaimana seharusnya pengguna dapat memperbarui jumlah item di keranjang mereka?

- [ ] Dengan menghubungi layanan pelanggan.
- [ ] Dengan menggunakan menu tarik-turun (*dropdown menu*).
- [x] Dengan memasukkan angka baru pada bidang input jumlah (*quantity input field*).
- [ ] Dengan menambahkan item baru dengan jumlah yang diinginkan.

Apa fitur penting yang harus disertakan dalam keranjang belanja untuk membantu pengguna melanjutkan pembelian mereka?

- [ ] Opsi "Save for Later" (Simpan untuk Nanti).
- [ ] Beberapa tombol ajakan bertindak (*call-to-action buttons*).
- [x] Tombol *checkout* yang jelas dan menonjol.
- [ ] Opsi untuk mengobrol dengan perwakilan penjualan.

---

[⬅️ Sebelumnya](8-what-are-best-practices-for-progress-indication-on-forms-registration-and-setup.md) | [Selanjutnya ➡️](10-what-is-progressive-disclosure.md)
