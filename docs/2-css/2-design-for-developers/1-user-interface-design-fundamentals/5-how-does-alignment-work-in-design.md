# Bagaimana Perataan (Alignment) Bekerja dalam Desain?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau konsep-konsep desain tersebut agar Anda lebih memahami cara kerjanya.

Saat Anda mendesain halaman web, penting untuk menciptakan desain yang kohesif dan menarik secara visual. Salah satu cara untuk mencapainya adalah melalui penggunaan perataan (`alignment`).

Perataan (`alignment`) adalah proses menyusun teks dan gambar dengan cara yang menciptakan hubungan visual antarelemen.

Hal ini membantu menciptakan rasa keteraturan dan organisasi pada halaman, sehingga memudahkan pengguna untuk menavigasi dan memahami konten.

Ada beberapa jenis `alignment` yang dapat Anda gunakan, tetapi yang paling mendasar adalah:

- perataan kiri (`left alignment`)
- perataan tengah (`center alignment`)
- perataan kanan (`right alignment`)
- perataan rata kiri-kanan (`justified alignment`)
- perataan vertikal (`vertical alignment`)

Perataan kiri, kanan, dan tengah semuanya merupakan subtipe dari perataan horizontal (`horizontal alignment`), sedangkan perataan vertikal (`vertical alignment`) digunakan untuk meratakan `element` di sepanjang sumbu vertikal.

Mari kita cermati lebih dekat setiap jenis `alignment` dan bagaimana Anda dapat menggunakannya dalam desain Anda.

Perataan kiri (`left alignment`) umumnya digunakan pada teks di mana setiap `element` diratakan ke tepi margin kiri. Meratakan semua *heading* dan paragraf pada halaman web ke tepi margin kiri memudahkan pengguna untuk membaca dan mengikuti konten.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1, h2, h3, p {
    text-align: left;
    margin: 10px 0;
  }

  p {
    line-height: 1.5;
  }
</style>

<h1>Why Left Alignment Matters</h1>
<p>Left alignment is one of the most common and effective ways to present text on web pages.</p>

<h2>Consistency</h2>
<p>Aligning all headings and paragraphs to the left margin creates a clean and consistent reading flow.</p>

<h3>Easy to Follow</h3>
<p>Users can easily scan and follow content without confusion or misalignment.</p>
```

Kebalikan dari `left alignment` adalah perataan kanan (`right alignment`), di mana setiap `element` diratakan ke tepi margin kanan. Hal ini sering digunakan di situs web untuk menampilkan konten tambahan seperti *banner* promosi atau iklan.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1, h2, h3, p {
    text-align: right;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
</style>

<h1>Right Alignment in Web Design</h1>
<p>Right alignment is commonly used to display additional or promotional content on websites.</p>

<h2>Secondary Content</h2>
<p>Aligning text to the right margin can help separate it visually from the main content.</p>

<h3>Promotional Use</h3>
<p>This alignment is often chosen for banners, advertisements, or sidebar messages.</p>
```

Sebagai contoh, iklan yang diratakan ke margin kanan membuatnya menonjol dari konten lainnya di halaman tersebut tetapi tidak mengganggu fokus pengguna dari konten utama.

Perataan tengah (`center alignment`) adalah kondisi di mana `element-element` dipusatkan di tengah halaman. Hal ini sering digunakan untuk *heading*, logo, dan `element` penting lainnya yang ingin Anda tarik perhatiannya.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1, h2, h3, p {
    text-align: center;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<h1>Center Alignment for Impact</h1>
<p>Center alignment is perfect for drawing attention to headings and important elements.</p>

<h2>Eye-Catching Layout</h2>
<p>By centering key content, you make it stand out and create a balanced visual appeal.</p>

<h3>Common Uses</h3>
<p>This technique is often used for logos, hero headings, and call-to-action messages.</p>
```

Perataan rata kiri-kanan (`justified alignment`) adalah ketika teks diratakan ke margin kiri dan kanan sekaligus. Hal ini biasanya digunakan untuk bagian deskriptif atau artikel, serta menciptakan tampilan yang rapi dan profesional.

```html
<style>
  body {
    font-family: Georgia, serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    line-height: 1.7;
    margin-bottom: 20px;
  }
</style>

<h1>Justified Alignment for Clean Text Blocks</h1>

<p>
  Justified alignment ensures that each line of text stretches evenly between the left and right margins. 
  This creates a smooth, block-like appearance that looks very polished and professional. 
  It’s commonly used in newspapers, magazines, and formal documents where a uniform look is desired.
</p>

<p>
  However, care should be taken with justified text to avoid uneven spacing or "rivers" of white space, 
  especially on narrow columns or screens. Proper hyphenation and responsive design can help maintain readability.
</p>
```

Jenis perataan terakhir adalah perataan vertikal (`vertical alignment`), yang digunakan untuk meratakan `element-element` di sepanjang sumbu vertikal.

Perataan vertikal dapat digunakan, misalnya, untuk formulir kontak pada situs web. Meratakan semua *input* formulir seperti bidang nama, *email*, dan pesan di sepanjang sumbu vertikal membuat pengguna lebih mudah untuk mengisi formulir tersebut.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 400px;
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input, textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="e.g., Jane Doe">

  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="janedoe@example.com">

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4" placeholder="Write your message here"></textarea>

  <button type="submit">Submit</button>
</form>
```

Dengan menggunakan berbagai jenis `alignment`, Anda dapat menciptakan rasa keteraturan dan kerapian pada halaman yang membuat pengguna lebih mudah untuk menavigasi dan memahami konten.

## Pertanyaan (Questions)

Apa itu perataan (`alignment`) dalam desain?

- [ ] Proses penambahan *border* pada elemen di halaman.
- [x] Proses menyusun teks dan gambar dengan cara yang menciptakan hubungan visual antarelemen.
- [ ] Proses menambahkan warna ke dalam sebuah desain.
- [ ] Proses pembuatan tata letak untuk sebuah halaman web.

Untuk apa perataan kiri (`left alignment`) umumnya digunakan?

- [ ] Ini umumnya digunakan untuk video.
- [ ] Ini umumnya digunakan untuk elemen *footer*.
- [x] Ini umumnya digunakan pada teks di mana setiap elemen diratakan ke margin kiri.
- [ ] Ini umumnya digunakan untuk daftar (*list*).

Apa itu perataan vertikal (`vertical alignment`)?

- [x] Ini digunakan untuk meratakan elemen di sepanjang sumbu vertikal.
- [ ] Ini digunakan untuk meratakan elemen di sepanjang sumbu diagonal.
- [ ] Ini digunakan untuk meratakan elemen di sepanjang sumbu horizontal.
- [ ] Ini digunakan untuk meratakan elemen di sepanjang sumbu melingkar.

---

[⬅️ Sebelumnya](4-how-does-scale-work-in-design.md) | [Selanjutnya ➡️](6-what-is-the-importance-of-whitespace-in-design.md)
