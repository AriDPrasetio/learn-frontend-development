# Tinjauan Manipulasi DOM dan Event Klik dengan JavaScript

## Bekerja dengan DOM dan Web API

- **API**: API (*Application Programming Interface*) adalah sekumpulan aturan dan protokol yang memungkinkan aplikasi perangkat lunak berkomunikasi satu sama lain dan bertukar data secara efisien.
- **Web API**: Web API dirancang khusus untuk aplikasi web. Jenis API ini sering dibagi menjadi dua kategori utama: browser API dan *third-party API* (API pihak ketiga).
- **Browser API**: API ini mengekspos data dari browser. Sebagai pengembang web, Anda dapat mengakses dan memanipulasi data ini menggunakan JavaScript.
- **Third-Party API**: API ini tidak terpasang secara bawaan di dalam browser. Anda harus mengambil kode mereka melalui beberapa cara. Biasanya, mereka memiliki dokumentasi mendetail yang menjelaskan cara menggunakan layanan mereka. Contohnya adalah Google Maps API, yang dapat Anda gunakan untuk menampilkan peta interaktif di situs web Anda.
- **DOM**: DOM merupakan singkatan dari *Document Object Model*. Ini adalah *programming interface* yang memungkinkan Anda berinteraksi dengan dokumen HTML. Dengan DOM, Anda dapat menambahkan, memodifikasi, atau menghapus elemen pada halaman web. Akar (*root*) dari pohon DOM adalah elemen `html`. Ini adalah wadah tingkat teratas untuk semua konten dari dokumen HTML. Semua node lainnya adalah turunan (*descendants*) dari *root node* ini. Kemudian, di bawah *root node*, kita menemukan node-node lain dalam hierarki. Sebuah *parent node* adalah elemen yang memuat elemen lain. Sebuah *child node* adalah elemen yang dimuat di dalam elemen lain.
- **Interface `navigator`**: Menyediakan informasi tentang lingkungan browser, seperti *user agent string*, platform, dan versi browser. Sebuah *user agent string* adalah teks `string` yang mengidentifikasi browser dan sistem operasi yang digunakan.
- **Interface `window`**: Mewakili jendela browser yang memuat dokumen DOM. Menyediakan berbagai `method` dan `property` untuk berinteraksi dengan jendela browser, seperti mengubah ukuran jendela, membuka jendela baru, dan melakukan navigasi ke berbagai URL.

## Bekerja dengan Method querySelector(), querySelectorAll() dan getElementById()

- **Method `getElementById()`**: `Method` ini digunakan untuk mendapatkan objek yang mewakili elemen HTML dengan `id` yang ditentukan. Ingat bahwa `id` harus unik di setiap dokumen HTML, sehingga `method` ini hanya akan mengembalikan satu objek `Element`.

```html
<div id="container"></div>
<script src="./index.js"></script>
```

```javascript
const container = document.getElementById("container");
console.log(container);
```

- **Method `querySelector()`**: `Method` ini digunakan untuk mendapatkan elemen pertama dalam dokumen HTML yang cocok dengan selektor CSS yang diteruskan sebagai argumen.

```html
<section class="section"></section>
<script src="./index.js"></script>
```

```javascript
const section = document.querySelector(".section");
console.log(section);
```

- **Method `querySelectorAll()`**: Anda dapat menggunakan `method` ini untuk mendapatkan daftar dari semua elemen DOM yang cocok dengan selektor CSS tertentu.

```html
<ul class="ingredients">
  <li>Sugar</li>
  <li>Milk</li>
  <li>Eggs</li>
</ul>
<script src="./index.js"></script>
```

```javascript
const ingredients = document.querySelectorAll("ul.ingredients li");
console.log(ingredients);
```

## Bekerja dengan innerText, innerHTML, createElement() dan Property textContent

- **Property `innerHTML`**: Ini adalah `property` dari `Element` yang digunakan untuk menetapkan atau memperbarui bagian dari *markup* HTML.

```html
<div id="container">
  <!-- Tambahkan elemen baru di sini -->
</div>
<script src="./index.js"></script>
```

```javascript
const container = document.getElementById("container");
container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>";
```

- **Method `createElement()`**: Digunakan untuk membuat elemen HTML baru.

```javascript
const img = document.createElement("img");
```

- **`innerText`**: Mewakili konten teks yang terlihat dari elemen HTML dan keturunannya (*descendants*).

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
<script src="./index.js"></script>
```

```javascript
const container = document.getElementById("container");
console.log(container.innerText);
```

- **`textContent`**: Mengembalikan konten teks polos dari suatu elemen, termasuk semua teks di dalam keturunannya.

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
<script src="./index.js"></script>
```

```javascript
const container = document.getElementById("container");
console.log(container.textContent);
```

## Bekerja dengan Method appendChild() dan removeChild()

- **Method `appendChild()`**: `Method` ini digunakan untuk menambahkan sebuah node ke akhir daftar `children` dari suatu `parent node` yang ditentukan.

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
</ul>
<script src="./index.js"></script>
```

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);
```

- **Method `removeChild()`**: `Method` ini digunakan untuk menghapus sebuah node dari DOM.

```html
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>
<script src="./index.js"></script>
```

```javascript
const sectionEl = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type");

sectionEl.removeChild(lastParagraph);
```

## Bekerja dengan Method setAttribute()

- **Definisi**: `Method` ini digunakan untuk menetapkan atribut untuk suatu elemen yang diberikan. Jika atribut tersebut sudah ada, maka nilainya diperbarui. Jika tidak, atribut baru ditambahkan dengan suatu nilai.

```html
<p id="para">I am a paragraph</p>
<script src="./index.js"></script>
```

```javascript
const para = document.getElementById("para");
para.setAttribute("class", "my-class");
```

## Objek Event

- **Definisi**: Objek `Event` adalah muatan (*payload*) yang terpicu ketika pengguna berinteraksi dengan halaman web Anda dalam beberapa cara. Interaksi ini bisa berupa apa saja mulai dari mengeklik tombol atau memfokuskan *input* hingga menggoyangkan perangkat seluler mereka. Semua objek `Event` akan memiliki `property` `type`. `Property` ini menunjukkan jenis *event* yang memicu muatan tersebut, seperti `keydown` atau `click`. Nilai-nilai ini akan berkorespondensi dengan nilai yang sama yang mungkin Anda teruskan ke `addEventListener()`, tempat Anda dapat menangkap dan memanfaatkan objek `Event`.

## Method addEventListener() dan removeEventListener()

- **Method `addEventListener()`**: `Method` ini digunakan untuk mendengarkan *event*. Membutuhkan dua argumen: *event* yang ingin Anda dengarkan dan sebuah fungsi yang akan dipanggil ketika *event* tersebut terjadi. Beberapa contoh umum dari *event* meliputi *click event*, *input event*, dan *change event*.

```html
<button id="btn">Click Me</button>
<script src="./index.js"></script>
```

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("You clicked the button"));
```

- **Method `removeEventListener()`**: `Method` ini digunakan untuk menghapus *event listener* yang sebelumnya telah ditambahkan ke sebuah elemen menggunakan `method` `addEventListener()`. Ini berguna ketika Anda ingin berhenti mendengarkan *event* tertentu pada sebuah elemen.

```html
<body>
  <p id="para">Hover over me to disable the button's click event</p>
  <button id="btn">Toggle Background Color</button>
</body>
<script src="./index.js"></script>
```

```javascript
const bodyEl = document.querySelector("body");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleBgColor);

para.addEventListener("mouseover", () => {
  btn.removeEventListener("click", toggleBgColor);
});
```

- **Inline Event Handler**: *Inline event handler* adalah atribut khusus pada elemen HTML yang digunakan untuk mengeksekusi kode JavaScript ketika suatu *event* terjadi. Dalam JavaScript modern, *inline event handler* tidak dianggap sebagai praktik terbaik. Lebih disarankan untuk menggunakan `method` `addEventListener()`.

```html
<button onclick="alert('Hello World!')">Show alert</button>
```

## Event Change

- **Definisi**: *Event* `change` adalah peristiwa khusus yang terpicu ketika pengguna memodifikasi nilai dari elemen *input* tertentu. Contohnya meliputi ketika kotak centang (*checkbox*) atau tombol radio (*radio button*) dicentang, atau ketika pengguna membuat pilihan dari pemilih tanggal (*date picker*) atau menu *dropdown*.

```html
<label>
  Choose a programming language:
  <select class="language" name="language">
    <option value="">---Select One---</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="C++">C++</option>
  </select>
</label>

<p class="result"></p>
<script src="./index.js"></script>
```

```javascript
const selectEl = document.querySelector(".language");
const result = document.querySelector(".result");

selectEl.addEventListener("change", (e) => {
  result.textContent = `You enjoy programming in ${e.target.value}.`;
});
```

## Event Bubbling

- **Definisi**: *Event bubbling*, atau perambatan (*propagation*), mengacu pada bagaimana suatu *event* "menggelembung naik" ke objek-objek induk (*parent objects*) saat terpicu.
- **Method `stopPropagation()`**: `Method` ini mencegah perambatan lebih lanjut untuk suatu *event*.

## Event Delegation

- **Definisi**: Delegasi *event* (*event delegation*) adalah proses mendengarkan *event* yang telah menggelembung naik ke induk, daripada menanganinya secara langsung pada elemen yang memicunya.

## DOMContentLoaded

- **Definisi**: *Event* `DOMContentLoaded` dipicu ketika segala sesuatu di dalam dokumen HTML telah dimuat dan dipilah (*parsed*). Jika Anda memiliki *stylesheet* eksternal atau gambar, *event* `DOMContentLoaded` tidak akan menunggu sumber daya tersebut selesai dimuat. Peristiwa ini hanya akan menunggu HTML selesai dimuat.

## Bekerja dengan style dan classList

- **Property `Element.style`**: `Property` ini adalah `property` *read-only* yang mewakili gaya sebaris (*inline style*) dari sebuah elemen. Anda dapat menggunakan `property` ini untuk mendapatkan atau menetapkan gaya dari suatu elemen.

```html
<p id="para">This paragraph will turn red.</p>
<script src="./index.js"></script>
```

```javascript
const paraEl = document.getElementById("para");
paraEl.style.color = "red";
```

- **Property `Element.classList`**: `Property` ini adalah `property` *read-only* yang dapat digunakan untuk menambahkan (*add*), menghapus (*remove*), atau mengalihkan (*toggle*) kelas-kelas CSS pada sebuah elemen.

```html
<link rel="stylesheet" href="./styles.css"/>
<p id="para" class="blue-background">This paragraph will have classes added and removed.</p>
<div id="menu" class="menu">Menu Content</div>
<button id="toggle-btn">Toggle Menu</button>
<script src="./index.js"></script>
```

```css
.highlight {
  background-color: yellow;
}

.blue-background {
  background-color: lightblue;
}

.menu {
  display: none;
  padding: 10px;
  background-color: #f0f0f0;
}

.menu.show {
  display: block;
}
```

```javascript
// Contoh menambahkan kelas
const paraEl = document.getElementById("para");
paraEl.classList.add("highlight");

// Contoh menghapus kelas
paraEl.classList.remove("blue-background");

// Contoh mengalihkan (toggle) kelas
const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));
```

## Bekerja dengan Method setTimeout() dan setInterval()

- **Method `setTimeout()`**: `Method` ini memungkinkan Anda menunda suatu aksi selama waktu yang ditentukan.

```javascript
setTimeout(() => {
  console.log("This runs after 3 seconds");
}, 3000);
```

- **Method `setInterval()`**: `Method` ini menjalankan sepotong kode secara berulang pada interval yang ditentukan. Karena `setInterval()` terus mengeksekusi fungsi yang diberikan pada interval yang ditentukan, Anda mungkin ingin menghentikannya. Untuk ini, Anda harus menggunakan `method` `clearInterval()`.

```javascript
setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);

// Contoh menggunakan clearInterval
const intervalID = setInterval(() => {
  console.log("This will stop after 5 seconds");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
}, 5000);
```

## Method requestAnimationFrame()

- **Definisi**: `Method` ini memungkinkan Anda menjadwalkan langkah animasi berikutnya sebelum penggambaran ulang layar (*screen repaint*) berikutnya, menghasilkan pengalaman visual yang lancar dan menarik. Penggambaran ulang layar berikutnya mengacu pada saat ketika browser menyegarkan tampilan visual dari halaman web. Ini terjadi berkali-kali per detik, biasanya sekitar 60 kali (atau 60 *frames per second*) pada sebagian besar layar tampilan.

```javascript
function animate() {
  // Perbarui animasi...
  // misalnya memindahkan elemen, mengubah gaya, dan lainnya.
  update();
  // Minta frame berikutnya
  requestAnimationFrame(animate);
}
```

## Web Animations API

- **Definisi**: Web Animations API memungkinkan Anda membuat dan mengontrol animasi secara langsung di dalam JavaScript.

```html
<link rel="stylesheet" href="./styles.css"/>
<div id="square"></div>
<script src="./index.js"></script>
```

```css
#square {
  width: 100px;
  height: 100px;
  background: red;
}
```

```javascript
const square = document.querySelector("#square");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
  {
    duration: 2000, // membuat animasi berlangsung selama 2 detik
    iterations: Infinity, // mengulang tanpa batas
    direction: "alternate", // bergerak bolak-balik
    easing: "ease-in-out" // easing yang mulus
  }
);
```

## Canvas API

- **Definisi**: Canvas API adalah alat yang sangat andal yang memungkinkan Anda memanipulasi grafik langsung di dalam file JavaScript Anda. Untuk bekerja dengan Canvas API, pertama-tama Anda perlu menyediakan elemen `canvas` di dalam HTML. Elemen ini bertindak sebagai permukaan gambar yang dapat Anda manipulasi dengan *instance method* dan `property` dari *interface* di Canvas API. API ini memiliki *interface* seperti `HTMLCanvasElement`, `CanvasRenderingContext2D`, `CanvasGradient`, `CanvasPattern`, dan `TextMetrics` yang berisi `method` dan `property` yang dapat Anda gunakan untuk membuat grafik di dalam file JavaScript Anda.

```html
<canvas id="my-canvas" width="400" height="400"></canvas>
<script src="./index.js"></script>
```

```javascript
const canvas = document.getElementById("my-canvas");

// Akses konteks gambar dari kanvas.
// "2d" memungkinkan Anda menggambar dalam dua dimensi
const ctx = canvas.getContext("2d");

// Atur warna latar belakang
ctx.fillStyle = "crimson";

// Gambar persegi panjang
ctx.fillRect(1, 1, 150, 100);
```

## Membuka dan Menutup Dialog dan Modal dengan JavaScript

- **Definisi Modal dan Dialog**: Dialog memungkinkan Anda menampilkan informasi penting atau tindakan kepada pengguna. Dengan elemen bawaan HTML `dialog`, Anda dapat dengan mudah membuat dialog-dialog ini (baik dialog modal maupun non-modal) di dalam aplikasi web Anda. Dialog modal adalah jenis dialog yang memaksa pengguna untuk berinteraksi dengannya sebelum mereka dapat mengakses bagian aplikasi atau halaman web lainnya. Sebaliknya, dialog non-modal memungkinkan pengguna untuk terus berinteraksi dengan bagian lain dari halaman atau aplikasi bahkan ketika dialog sedang terbuka. Dialog ini tidak mencegah akses ke konten lainnya.
- **Method `showModal()`**: `Method` ini digunakan untuk membuka sebuah modal.

```html
<dialog id="my-modal">
  <p>This is a modal dialog.</p>
</dialog>
<button id="open-modal">Open Modal Dialog</button>
<script src="./index.js"></script>
```

```javascript
const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");

openButton.addEventListener("click", () => {
  dialog.showModal();
});
```

- **Method `close()`**: `Method` ini digunakan untuk menutup modal.

```html
<dialog id="my-modal">
  <p>This is a modal dialog.</p>
  <button id="close-modal">Close Modal</button>
</dialog>
<button id="open-modal">Open Modal Dialog</button>
<script src="./index.js"></script>
```

```javascript
const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

openButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
```

## Tugas (Assignment)

Tinjau kembali topik dan konsep DOM Manipulation and Events.

---

[⬅️ Sebelumnya](../2-understanding-the-event-object-and-event-delegation/2-how-do-event-bubbling-and-event-delegation-work.md) | Selanjutnya ➡️
