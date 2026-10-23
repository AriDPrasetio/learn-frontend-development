# Apa Itu ARIA Roles?

**CATATAN**: Beberapa contoh interaktif ini mungkin menyertakan kode `CSS` dan `JavaScript`. Jangan khawatir jika belum memahami kodenya. Pratinjau disediakan untuk membantu mengilustrasikan beberapa poin utama yang dibahas dalam pelajaran. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

`ARIA` merupakan singkatan dari *Accessible Rich Internet Applications*.

`ARIA` `roles` menentukan makna semantik dari elemen `HTML`. Elemen-elemen ini sangat penting untuk membuat konten web dapat diakses oleh orang-orang yang menggunakan teknologi asistif, seperti pembaca layar (*screen readers*).

`HTML` memiliki elemen semantik dan non-semantik, berdasarkan apakah elemen tersebut menyampaikan makna tentang kontennya.

Banyak elemen `HTML` semantik sudah memiliki `ARIA` `role` yang ditetapkan secara bawaan (*default*). Sebagai contoh, elemen `button` memiliki `ARIA` `role` bawaan berupa `button`:

```html
<button>Example button</button>
```

Tetapi elemen non-semantik tidak memiliki peran (*role*). Sebagai contoh, pembaca layar tidak akan tahu bagaimana menafsirkan tujuan dari elemen `div` jika Anda tidak menentukan perannya secara eksplisit:

```html
<div>
  <!-- elemen lainnya diletakkan di sini -->
</div>
```

## Menentukan ARIA Role

Untuk menentukan `ARIA` `role` dari suatu elemen, Anda hanya perlu menambahkan atribut `role`, seperti ini `role="ARIA role"`, di mana nilainya adalah nama *role* dalam spesifikasi `ARIA`.

Berikut adalah contoh penggunaan atribut `role` dengan nilai `"alert"`:

```html
<link rel="stylesheet" href="styles.css">

<div class="alert" id="exp-warning" role="alert">
  <span class="hidden">Your log in session will expire in 3 minutes.</span>
</div>
```

```css
.alert {
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  padding: 1em;
  margin-top: 1em;
  border-radius: 4px;
  font-weight: bold;
}

.alert span {
  display: inline-block;
}
```

Penting untuk dicatat bahwa menentukan *role* pada suatu elemen hanya melakukan satu hal: Ini menginformasikan tujuan elemen tersebut kepada teknologi asistif. Ini tidak menambahkan fungsionalitas atau perilaku apa pun ke elemen tersebut. Jika orang mengharapkan suatu *role* berperilaku dengan cara tertentu, terserah Anda, sang pengembang, untuk menambahkan perilaku yang diharapkan tersebut.

Sebagai contoh, menambahkan `role` berupa `button` ke elemen `div` tidak secara otomatis membuatnya dapat diklik dengan mouse atau dapat digunakan dengan *keyboard*. Merupakan tanggung jawab pengembang untuk menambahkan perilaku yang diharapkan yang memungkinkan `div` bertindak seperti tombol, dan dalam sebagian besar kasus, jauh lebih baik untuk langsung menggunakan elemen `button`.

## Kategori ARIA Roles

Terdapat enam kategori utama dari `ARIA` `roles`:

- `Document structure roles`
- `Widget roles`
- `Landmark roles`
- `Live region roles`
- `Window roles`
- `Abstract roles`

Mari kita pelajari lebih rinci.

## Document Structure Roles

`Document structure roles` mendefinisikan struktur keseluruhan halaman web. Dengan peran ini, teknologi asistif dapat memahami hubungan antara berbagai bagian yang berbeda dan membantu pengguna menavigasi konten.

Namun, sebagian besar `document structure roles` tidak digunakan dalam pengembangan web modern karena peramban (*browser*) sudah mendukung elemen `HTML` semantik yang setara, yang harus diprioritaskan kapan pun memungkinkan.

Anda sebaiknya menentukan *roles* yang tidak memiliki elemen semantik yang setara. Sebagai contoh: `toolbar`, `tooltip`, `feed`, `math`, `presentation`, `none`, dan `note`.

Ada peran serupa lainnya, tetapi peran-peran inilah yang paling umum digunakan. Ini adalah contoh elemen `div` dengan `ARIA` `role` `math`. Elemen `div` tersebut berisi persamaan matematika:

```html
<link rel="stylesheet" href="styles.css">

<div role="math" aria-label="x squared + y squared = 3">
  x<sup>2</sup> + y<sup>2</sup> = 3
</div>
```

```css
.math-expression {
  font-family: "Times New Roman", serif;
  font-size: 1.2rem;
  background-color: #f4f4f4;
  border-left: 4px solid #007acc;
  padding: 0.75em 1em;
  margin-top: 1em;
  display: inline-block;
}

.math-expression sup {
  font-size: 0.8em;
}
```

Anda juga akan melihat bahwa `div` memiliki atribut `aria-label`. Nilai dari atribut ini harus berupa *string* yang merepresentasikan ekspresi tersebut.

## Widget Roles

`Widget roles` mendefinisikan tujuan dan fungsionalitas elemen interaktif, seperti bilah gulir (*scrollbars*).

Contoh dari `widget roles` mencakup `scrollbar`, `searchbox`, `separator` (ketika dapat difokuskan), `slider`, `spinbutton`, `switch`, `tab`, `tabpanel`, dan `treeitem`.

Berikut adalah contoh dari sebuah kotak pencarian (*searchbox*):

```html
<link rel="stylesheet" href="styles.css">

<div class="search-container" role="search">
  <label for="searchbox" class="visually-hidden">Search</label>

  <div
    id="searchbox"
    class="searchbox"
    role="searchbox"
    aria-label="Search the site"
    tabindex="0"
    contenteditable="true">
  </div>

  <button type="button" aria-label="Submit search">Search</button>
</div>
```

```css
.search-container {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 1em;
}

.searchbox {
  flex: 1;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  min-height: 1.5em;
}

.searchbox:focus {
  border-color: #007acc;
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 122, 204, 0.3);
}

button {
  padding: 0.5em 1em;
  background-color: #007acc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #005fa3;
}

/* Sembunyikan secara visual tetapi pertahankan untuk pembaca layar */
.visually-hidden {
  position: absolute;
  left: -9999px;
}
```

Beberapa dari peran ini memiliki elemen semantik yang setara. Anda harus memprioritaskan elemen semantik daripada *role* jika tersedia. Misalnya, Anda sebaiknya memilih menggunakan elemen `HTML` `button` daripada menambahkan `role` berupa `button` ke elemen `div`.

## Landmark Roles

`Landmark roles` mengklasifikasikan dan melabeli bagian-bagian utama dari suatu halaman web. Pembaca layar menggunakannya untuk menyediakan navigasi praktis ke bagian-bagian penting di halaman. Anda harus menggunakannya secara bijak dan hemat agar tata letak secara keseluruhan tetap sederhana dan mudah dipahami. Contoh dari `landmark roles` adalah `banner`, `complementary`, `contentinfo`, `form`, `main`, `navigation`, `region`, dan `search`. Masing-masing peran ini memiliki padanan elemen `HTML` yang sesuai, seperti `header`, `footer`, `aside`, `form`, `main`, `nav`, `section`, dan `search`. Jika Anda menggunakan elemen `HTML` yang tepat untuk mendefinisikan bagian-bagian halaman Anda, maka tidak perlu menambahkan atribut `role` secara eksplisit ke elemen-elemen tersebut.

Berikut adalah contoh dari sebuah banner:

```html
<link rel="stylesheet" href="styles.css">

<div role="banner" class="site-banner">
  <h1>Accessible Web Design</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
```

```css
.site-banner {
  background-color: #007acc;
  color: #fff;
  padding: 1em 1.5em;
  border-radius: 4px;
}

.site-banner h1 {
  margin: 0 0 0.5em;
  font-size: 1.5em;
}

.site-banner nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1em;
}

.site-banner nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

.site-banner nav a:hover {
  text-decoration: underline;
}
```

## Live Region Roles

`Live region roles` mendefinisikan elemen dengan konten yang akan berubah secara dinamis. Dengan cara ini, pembaca layar dan teknologi asistif lainnya dapat mengumumkan perubahan kepada pengguna dengan disabilitas visual. Peran-peran ini meliputi: `alert`, `log`, `marquee`, `status`, dan `timer`.

Berikut adalah contoh dari sebuah status:

```html
<link rel="stylesheet" href="styles.css">

<div class="status-demo">
  <button id="update-status-btn">Check Status</button>
  <div id="status-msg" role="status" class="status-message">
    No updates yet.
  </div>
</div>

<script src="index.js"></script>
```

```css
.status-demo {
  margin-top: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #007acc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #005fa3;
}

.status-message {
  margin-top: 0.75em;
  padding: 0.75em;
  background-color: #e8f4ff;
  border: 1px solid #b3d8ff;
  border-radius: 4px;
  font-weight: 500;
}
```

```js
const button = document.getElementById("update-status-btn");
const statusMessage = document.getElementById("status-msg");

button.addEventListener("click", () => {
  statusMessage.textContent = "Your upload has completed successfully.";
});
```

## Window Roles

`Window roles` mendefinisikan sub-jendela (*sub-windows*), seperti dialog modal *pop-up*. Peran-peran ini mencakup `alertdialog` dan `dialog`. Harap dicatat bahwa saat ini telah dianggap sebagai praktik terbaik (*best practice*) untuk menggunakan elemen `HTML` `dialog` beserta metode `JavaScript` terkait daripada membuat dialog secara manual.

Berikut adalah contoh penggunaan `role` `dialog` untuk dialog kustom:

```html
<link rel="stylesheet" href="styles.css">

<button id="open-dialog">Open Dialog</button>

<div id="custom-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" class="dialog">
  <div class="dialog-content">
    <h3 id="dialog-title">Confirm Action</h3>
    <p>Are you sure you want to delete this file?</p>
    <div class="dialog-actions">
      <button id="confirm-btn">Yes</button>
      <button id="close-dialog">Cancel</button>
    </div>
  </div>
</div>

<script src="index.js"></script>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 2em;
}

button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007acc;
  color: white;
  font-size: 1em;
}

button:hover {
  background-color: #005fa3;
}

.dialog {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  justify-content: center; 
  align-items: center;   
  z-index: 1000;
}

.dialog-content {
  background-color: white;
  padding: 1.5em;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
  margin-top: 1em;
}
```

```js
const dialog = document.getElementById("custom-dialog");
const openBtn = document.getElementById("open-dialog");
const closeBtn = document.getElementById("close-dialog");
const confirmBtn = document.getElementById("confirm-btn");

openBtn.addEventListener("click", () => {
  dialog.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  dialog.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
  alert("File deleted.");
  dialog.style.display = "none";
});
```

## Abstract Roles

Dan yang terakhir, kita memiliki `abstract roles`. Peran-peran ini membantu mengorganisir dokumen. Peran ini hanya ditujukan untuk digunakan secara internal oleh peramban (*browser*), bukan oleh pengembang, jadi Anda perlu mengetahui keberadaannya tetapi tidak boleh menggunakannya di situs web atau aplikasi web Anda.

Dengan `ARIA` `roles`, Anda dapat membuat situs web dan aplikasi web yang aksesibel dan inklusif. Peran-peran ini memberikan informasi semantik tentang tujuan dan fungsi elemen `HTML`.

Pembaca layar dan teknologi asistif lainnya menggunakan informasi ini untuk membantu pengguna memahami konten halaman Anda dan menetapkan ekspektasi tentang cara menggunakannya, yang membantu memastikan bahwa setiap orang dapat memiliki pengalaman pengguna yang menyenangkan.

## Pertanyaan (Questions)

Apa tujuan utama dari `ARIA` `roles`?

- [ ] Untuk mendefinisikan tampilan visual elemen.
- [ ] Untuk meningkatkan kinerja situs web.
- [x] Untuk menyediakan informasi semantik tentang tujuan elemen.
- [ ] Untuk meningkatkan kompatibilitas peramban (*browser*).

Kategori `ARIA` `roles` mana yang digunakan untuk mendefinisikan tujuan dan perilaku sub-jendela (*sub-windows*), seperti dialog modal *pop-up*?

- [ ] Widget roles.
- [ ] Document structure roles.
- [ ] Landmark roles.
- [x] Window roles.

Kategori `ARIA` `roles` mana yang digunakan untuk mengindikasikan konten dinamis yang harus diumumkan kepada pengguna?

- [ ] Widget roles.
- [ ] Document structure roles.
- [ ] Landmark roles.
- [x] Live region roles.

---
[⬅️ Sebelumnya](1-what-is-the-purpose-of-wai-aria.md) | [Selanjutnya ➡️](3-what-are-the-roles-of-the-aria-label-and-aria-labelledby-attributes.md)
