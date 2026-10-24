# Apa Saja Praktik Terbaik untuk Menata Gaya Input Teks?

Sama seperti semua `element` teks, Anda perlu memastikan `styles` yang Anda terapkan pada `text input` dapat diakses (*accessible*). Ini berarti ukuran *font* (`font-size`) harus memadai dan warnanya harus memiliki kontras yang cukup dengan latar belakang (`background`).

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="username">Username</label>
  <input type="text" id="username" name="username" placeholder="Enter your username">
  <button type="submit">Submit</button>
</form>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 320px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="text"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
}

input[type="text"]:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

Namun, teks petunjuk (`placeholder`) sering kali terlupakan. Penting untuk diingat bahwa ini juga merupakan teks dan Anda kemungkinan perlu mengubah penataan gayanya untuk memastikan teks tersebut tetap terbaca.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" placeholder="you@example.com">
  <button type="submit">Submit</button>
</form>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 320px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
}

input[type="email"]::placeholder {
  color: #555; 
  opacity: 1; 
  font-style: italic;
}

input[type="email"]:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

Hal lain yang perlu diingat adalah Anda harus mengizinkan pengguna untuk memodifikasi `input`. Sebagai contoh, jika itu adalah `textarea`, Anda sebaiknya tidak menghapus kemampuan untuk mengubah ukurannya (*resize*). `Input` tersebut juga harus menyesuaikan skalanya ketika pengguna memperbesar (*zoom*) halaman.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="message">Your message</label>
  <textarea id="message" name="message" placeholder="Type your message here..."></textarea>
  <button type="submit">Send</button>
</form>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
  line-height: 1.5;
}

.accessible-form {
  max-width: 480px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

textarea {
  width: 100%;
  min-height: 120px;
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  resize: both; 
  box-sizing: border-box; 
}

textarea::placeholder {
  color: #555;
  opacity: 1;
}

textarea:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

`Element` `input` juga dapat menerima fokus (*focusable*). Saat Anda mengedit `styles` Anda, Anda harus berhati-hati untuk mempertahankan indikator yang jelas saat `element` memiliki fokus, seperti batas (`border`) yang tegas.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="name">Full name</label>
  <input type="text" id="name" name="name" placeholder="Enter your full name">

  <label for="email">Email address</label>
  <input type="email" id="email" name="email" placeholder="you@example.com">

  <button type="submit">Submit</button>
</form>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 360px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #666;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input::placeholder {
  color: #555;
  opacity: 1;
}

input:focus {
  border-color: #1e90ff;      
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.4); 
  outline: none;              
}

button {
  margin-top: 1.5rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

Selain itu, ada status galat (*error state*) yang perlu dipertimbangkan. Ketika teks pengguna tidak lolos validasi `input`, terdapat indikator visual yang menunjukkan bahwa ada sesuatu yang salah.

Agar pesan galat diperbarui secara dinamis, Anda perlu menggunakan `JavaScript`, yang akan Anda pelajari dalam pelajaran-pelajaran berikutnya.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="email">Email address</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="you@example.com" 
    aria-describedby="email-error"
  >
  <p id="email-error" class="error-message">
    Please enter a valid email address.
  </p>

  <button type="submit">Submit</button>
</form>

<script src="index.js"></script>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.accessible-form {
  max-width: 360px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #666;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input::placeholder {
  color: #555;
  opacity: 1;
}

input:focus {
  border-color: #1e90ff;
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.4);
  outline: none;
}

input.error {
  border-color: #d93025;
  background-color: #fff5f5;
}

input.error:focus {
  border-color: #d93025;
  box-shadow: 0 0 0 3px rgba(217, 48, 37, 0.4);
}

.error-message {
  color: #d93025;
  font-size: 0.95rem;
  margin-top: 0.4rem;
}

button {
  margin-top: 1.5rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

Saat Anda memberikan sentuhan khas pribadi pada `element` Anda, Anda harus memastikan bahwa *error state* tetap terlihat jelas dan tidak terlihat mirip dengan indikator fokus (*focus indicator*). Dengan mempertimbangkan semua hal ini, Anda kini dapat membuat formulir pengguna (*user forms*) yang memikat.

## Pertanyaan (Questions)

Saat menata gaya input teks (`text inputs`), manakah dari berikut ini yang TIDAK disebutkan sebagai pertimbangan utama untuk aksesibilitas?

- [ ] Ukuran font (*Font size*).
- [ ] Kontras warna dengan latar belakang (*background*).
- [ ] Keterbacaan teks placeholder (*Placeholder text readability*).
- [x] Kecepatan animasi transisi fokus (*focus transitions*).

Apa yang direkomendasikan terkait kemampuan mengubah ukuran (*resizing*) dari input `textarea`?

- [ ] Menghapus kemampuan mengubah ukuran demi tampilan yang konsisten.
- [x] Mengizinkan pengguna untuk mengubah ukurannya.
- [ ] Mengubah ukuran secara otomatis berdasarkan panjang konten.
- [ ] Mengunci ukuran setelah pemuatan awal halaman.

Bagaimana seharusnya gaya status galat (*error state*) dari sebuah input ditata?

- [ ] Harus identik dengan status fokus (*focus state*).
- [ ] Harus samar agar tidak mengalihkan perhatian pengguna.
- [x] Harus terlihat jelas dan berbeda dari indikator fokus (*focus indicator*).
- [ ] Hanya boleh diindikasikan melalui teks, bukan penataan gaya visual.

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-when-should-you-use-appearance-none-to-deal-with-issues-styling-search-inputs-and-checkboxes.md)
