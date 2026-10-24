# Apa Itu Progressive Disclosure?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau (*preview*) dari konsep-konsep desain ini agar Anda lebih memahami cara kerjanya. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

`Progressive disclosure` (penyingkapan bertahap) adalah pola desain (*design pattern*) yang digunakan untuk hanya menampilkan konten yang relevan kepada pengguna berdasarkan aktivitas mereka saat ini dan menyembunyikan sisanya. Hal ini dilakukan untuk mengurangi beban kognitif (*cognitive load*) dan membuat pengalaman pengguna lebih intuitif.

```html
<link rel="stylesheet" href="styles.css">

<div class="progressive-disclosure">
  <button id="show-details-btn" aria-expanded="false" aria-controls="extra-content">
    Show More Details
  </button>
  <div id="extra-content" class="hidden" tabindex="-1">
    <p>
      Here are additional details that are revealed only when you want to see them.
      This keeps the interface clean and reduces cognitive load.
    </p>
  </div>
</div>
<script src="index.js"></script>
```

```css
.progressive-disclosure {
  font-family: sans-serif;
  max-width: 400px;
  margin: 20px auto;
}

#show-details-btn {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#show-details-btn:hover,
#show-details-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.hidden {
  display: none;
}

#extra-content {
  margin-top: 15px;
  padding: 10px;
  background-color: #f7f9fcff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
```

```js
const btn = document.getElementById('show-details-btn');
const content = document.getElementById('extra-content');

btn.addEventListener('click', () => {
  const isHidden = content.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', !isHidden);
  if (!isHidden) {
    content.focus();
  }
});
```

Sebagai contoh, ketika Anda menggunakan halaman pencarian Google, sebagian besar penelusuran Anda akan sederhana. Jadi, memiliki antarmuka pengguna yang sederhana dengan sangat sedikit opsi adalah hal yang masuk akal. Namun untuk beberapa kesempatan ketika Anda memerlukan pencarian yang lebih canggih, Google menyediakan opsi pencarian lanjutan (*advanced search*) yang akan menampilkan lebih banyak opsi.

Anda dapat menemukan opsi pencarian lanjutan Google dari menu pengaturan di beranda Google. Atau Anda dapat membuka `google.com/advanced_search`.

Contoh lain dari `progressive disclosure` adalah tombol "More details" (Rincian selengkapnya) pada produk di situs web *e-commerce*. Ketika Anda mengunjungi situs seperti Amazon, Anda akan melihat daftar gambar produk dalam berbagai kategori berbeda. Ini memungkinkan pengguna untuk berbelanja dengan mudah dan tidak kewalahan oleh terlalu banyak informasi.

Jika pengguna tertarik pada produk tertentu, mereka dapat mengeklik gambar produk untuk melihat lebih banyak rincian mengenai produk tersebut. Menampilkan semua informasi secara langsung mungkin akan membebani pengguna. Jadi, dengan menggunakan `progressive disclosure`, pengguna dapat memilih untuk melihat lebih banyak informasi saat mereka siap.

```html
<link rel="stylesheet" href="styles.css" />

<div class="product-list">
  <div class="product" tabindex="0" aria-expanded="false" aria-controls="details-1">
    <img src="https://placehold.co/150x150" alt="Example Product Image" />

    <button class="details-btn" aria-label="Show more details for Product 1">More details</button>
    <div id="details-1" class="product-details hidden" tabindex="-1">
      <p><strong>Product 1:</strong> This is a great product with awesome features that you'll love.</p>
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
      </ul>
    </div>
  </div>

  <div class="product" tabindex="0" aria-expanded="false" aria-controls="details-2">
    <img src="https://placehold.co/150x150" alt="Example Product Image" />

    <button class="details-btn" aria-label="Show more details for Product 2">More details</button>
    <div id="details-2" class="product-details hidden" tabindex="-1">
      <p><strong>Product 2:</strong> Another fantastic item with lots of benefits for your daily use.</p>
      <ul>
        <li>Benefit X</li>
        <li>Benefit Y</li>
        <li>Benefit Z</li>
      </ul>
    </div>
  </div>
</div>
<script src="index.js"></script>
```

```css
.product-list {
  font-family: sans-serif;
  display: flex;
  gap: 20px;
  max-width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
}

.product {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 180px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: relative;
}

.product img {
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
}

.details-btn {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.details-btn:hover,
.details-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.product-details {
  margin-top: 10px;
  background-color: #f7f9fc;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  font-size: 0.9rem;
}

.hidden {
  display: none;
}
```

```js
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const details = product.querySelector('.product-details');
    const isHidden = details.classList.toggle('hidden');
    product.setAttribute('aria-expanded', !isHidden);
    if (!isHidden) {
      details.focus();
      button.textContent = 'Hide details';
    } else {
      button.textContent = 'More details';
    }
  });
});
```

Lantas, apa saja praktik terbaik untuk mendesain dengan teknik `progressive disclosure`? Pertimbangan pertama adalah menjaga semua informasi penting tetap terlihat setiap saat. Pengguna tidak seharusnya bersusah payah mencari informasi penting hanya karena tersembunyi oleh fitur lanjutan tambahan.

```html
<link rel="stylesheet" href="styles.css" />

<div class="info-section">
  <h2>Order Summary</h2>
  <p><strong>Items in Cart:</strong> 3</p>
  <p><strong>Total Price:</strong> $75.00</p>
  <div class="advanced-options">
    <button id="toggle-advanced-btn" aria-expanded="false" aria-controls="advanced-details">
      Show Advanced Options
    </button>
    <div id="advanced-details" class="hidden" tabindex="-1">
      <p>Apply coupon codes, gift wrapping, or select shipping preferences here.</p>
      <form>
        <label for="coupon">Coupon Code:</label><br />
        <input type="text" id="coupon" name="coupon" /><br /><br />
        <label>
          <input type="checkbox" name="gift-wrap" /> Gift wrap this order
        </label><br /><br />
        <label for="shipping">Shipping method:</label><br />
        <select id="shipping" name="shipping">
          <option value="standard">Standard (Free)</option>
          <option value="express">Express ($10.00)</option>
        </select>
      </form>
    </div>
  </div>
</div>

<script src="index.js"></script>
```

```css
.info-section {
  font-family: sans-serif;
  max-width: 400px;
  margin: 30px auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
}

h2 {
  margin-top: 0;
}

.advanced-options {
  margin-top: 20px;
}

#toggle-advanced-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

#toggle-advanced-btn:hover,
#toggle-advanced-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.hidden {
  display: none;
}

#advanced-details {
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f7f9fc;
}
```

```js
const toggleBtn = document.getElementById('toggle-advanced-btn');
const advancedDetails = document.getElementById('advanced-details');

toggleBtn.addEventListener('click', () => {
  const isHidden = advancedDetails.classList.toggle('hidden');
  toggleBtn.setAttribute('aria-expanded', !isHidden);
  if (!isHidden) {
    advancedDetails.focus();
  }
});
```

Pertimbangan lain adalah menyediakan satu titik akses tunggal (*single access point*) bagi pengguna untuk mengakses fitur atau informasi tambahan. Ini bisa berupa tombol atau tautan yang selalu terlihat di halaman. Menambahkan beberapa titik akses dapat membingungkan pengguna dan dapat menyebabkan pengalaman pengguna yang buruk.

```html
<link rel="stylesheet" href="styles.css" />
<script src="index.js" defer></script>

<div class="product-preview">
  <img src="https://placehold.co/150x150" alt="Example Product Image" />

  <h3>Sample Product</h3>
  <p class="price">$49.99</p>
  <button class="info-toggle" aria-expanded="false" aria-controls="product-info">
    More Info
  </button>
  <div id="product-info" class="product-info hidden" tabindex="-1">
    <p>This product is made from high-quality materials and comes with a 2-year warranty. Perfect for everyday use.</p>
    <ul>
      <li>Durable and lightweight</li>
      <li>Available in multiple colors</li>
      <li>Free shipping included</li>
    </ul>
  </div>
</div>
```

```css
body {
  font-family: sans-serif;
  padding: 30px;
  display: flex;
  justify-content: center;
}

.product-preview {
  max-width: 300px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  text-align: center;
}

.product-preview img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.info-toggle {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.info-toggle:hover,
.info-toggle:focus {
  background-color: #0056b3;
  outline: none;
}

.product-info {
  margin-top: 15px;
  text-align: left;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 6px;
}

.hidden {
  display: none;
}
```

```js
const toggleBtn = document.querySelector('.info-toggle');
const infoPanel = document.getElementById('product-info');

toggleBtn.addEventListener('click', () => {
  const isHidden = infoPanel.classList.toggle('hidden');
  toggleBtn.setAttribute('aria-expanded', !isHidden);
  toggleBtn.textContent = isHidden ? 'More Info' : 'Hide Info';

  if (!isHidden) {
    infoPanel.focus();
  }
});
```

Saat Anda merancang aplikasi Anda, pikirkan tentang pengalaman pengguna secara keseluruhan dan bagaimana Anda dapat menggunakan `progressive disclosure` untuk mempermudah pengguna menemukan informasi yang mereka butuhkan. Jika dilakukan dengan benar, hal ini dapat membawa perbedaan besar pada pengalaman pengguna secara keseluruhan.

## Pertanyaan (Questions)

Apa tujuan utama menggunakan `progressive disclosure` dalam desain?

- [ ] Untuk meningkatkan jumlah fitur yang terlihat setiap saat.
- [ ] Untuk membebani pengguna dengan semua opsi yang tersedia.
- [x] Untuk hanya menampilkan konten yang relevan kepada pengguna berdasarkan aktivitas mereka saat ini.
- [ ] Untuk membuat antarmuka pengguna menjadi lebih rumit.

Bagaimana Google menerapkan `progressive disclosure` di halaman pencariannya?

- [ ] Dengan menampilkan semua opsi pencarian sekaligus.
- [x] Dengan menawarkan opsi pencarian lanjutan (*advanced search*) yang menampilkan lebih banyak fitur saat dibutuhkan.
- [ ] Dengan menyembunyikan bilah pencarian di balik kotak dialog modal (*modal dialog*).
- [ ] Dengan menyediakan halaman pencarian baru untuk setiap kueri.

Apa yang harus dihindari untuk memastikan pengalaman pengguna yang baik dengan `progressive disclosure`?

- [ ] Menyediakan satu titik akses yang jelas ke informasi tambahan.
- [x] Menggunakan beberapa titik akses yang dapat membingungkan pengguna.
- [ ] Menjaga informasi penting tetap terlihat setiap saat.
- [ ] Memastikan bahwa informasi tambahan tersedia saat dibutuhkan.

---

[⬅️ Sebelumnya](9-what-are-best-practices-for-designing-shopping-carts.md) | [Selanjutnya ➡️](11-what-is-deferred-and-lazy-registration.md)
