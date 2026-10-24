# Apa Saja Praktik Terbaik untuk Merancang Infinite Scrolls?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` dan `JavaScript` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau (*preview*) dari konsep-konsep desain ini agar Anda lebih memahami cara kerjanya. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

`Infinite scrolling` (gulir tak terbatas) adalah pola desain (*design pattern*) yang memuat lebih banyak konten saat pengguna menggulir halaman ke bawah. Sering kali, ini digunakan di situs media sosial seperti Twitter. Sebagai contoh, jika Anda masuk dan ingin melihat lebih banyak *tweet*, Anda dapat menggulir ke bawah dan lebih banyak *tweet* akan dimuat. Ini adalah contoh dari `infinite scrolling`.

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <div class="post">Post 4</div>
  <div class="post">Post 5</div>
  <div class="post">Post 6</div>
  <div class="post">Post 7</div>
  <div class="post">Post 8</div>
  <div class="post">Post 9</div>
  <div class="post">Post 10</div>
  <!-- More posts will load here as the user scrolls down -->
</div>

<script src="index.js"></script>
```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
```

```js
// Simulate loading more content as the user scrolls
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePosts();
  }
});

function loadMorePosts() {
  const container = document.querySelector('.infinite-scroll');
  for (let i = 0; i < 3; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${container.children.length + 1}`;
    container.appendChild(post);
  }
}
```

`Infinite scrolling` juga digunakan sebagai pengganti paginasi (*pagination*). Paginasi adalah pola desain yang membagi konten menjadi beberapa halaman. Hal ini sering digunakan ketika ada banyak konten untuk ditampilkan. Contoh paginasi adalah ketika Anda mencari sesuatu di Google dan Anda melihat hasil pencarian di beberapa halaman. Dengan paginasi, Anda harus mengklik tombol untuk pergi ke halaman berikutnya. Dengan `infinite scrolling`, Anda cukup terus menggulir ke bawah dan lebih banyak konten akan dimuat.

```html
<link rel="stylesheet" href="styles.css">

<div class="pagination">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <!-- More posts will be on the next pages -->
</div>
<div class="pagination-controls">
  <button class="prev" disabled>Previous</button>
  <button class="next">Next</button>
</div>
<script src="index.js"></script>
```

```css
.pagination {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pagination-controls {
  margin-top: 12px;
}

.pagination-controls button {
  padding: 8px 16px;
  margin-right: 8px;
}
```

```js
let currentPage = 1;
const postsPerPage = 3;
const totalPosts = 9; 
const totalPages = Math.ceil(totalPosts / postsPerPage);
const container = document.querySelector('.pagination');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next'); 

function renderPosts() {
  container.innerHTML = '';
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  for (let i = start; i < end && i < totalPosts; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${i + 1}`;
    container.appendChild(post);
  }
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPosts();
  }
});

renderPosts();
```

Saat Anda memasukkan `infinite scrolling` ke dalam desain Anda, ada beberapa praktik terbaik yang perlu diingat. Pertimbangan pertama adalah menyediakan tombol "Load More" yang memuat rangkaian hasil berikutnya saat pengguna mengkliknya. Ini adalah cara yang baik untuk memberi pengguna kendali atas kapan mereka ingin melihat lebih banyak konten.

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <!-- More posts will load when the user clicks "Load More" -->
</div>
<button class="load-more">Load More</button>
<script src="index.js"></script>
```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.load-more {
  margin-top: 12px;
  padding: 8px 16px;
}
```

```js
const loadMoreButton = document.querySelector('.load-more');
const container = document.querySelector('.infinite-scroll');   
loadMoreButton.addEventListener('click', () => {
  loadMorePosts();
});

function loadMorePosts() {
  for (let i = 0; i < 3; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${container.children.length + 1}`;
    container.appendChild(post);
  }
}
```

Pertimbangan lain adalah menambahkan tombol "Back" (Kembali). Ini memberi pengguna kemampuan untuk kembali ke halaman sebelumnya tanpa harus menggulir ke atas sepanjang perjalanan. Hal ini menciptakan pengalaman pengguna yang lebih baik dan memberi mereka kendali lebih besar atas pengalaman menjelajah mereka.

Terkadang Anda akan melihat desain dengan tombol "Back to the top" (Kembali ke atas) yang mengarahkan pengguna kembali ke bagian atas halaman hasil. Pertimbangan lainnya adalah menyediakan indikator pemuatan (*loading indicator*). Pengguna harus memiliki indikasi yang jelas bahwa lebih banyak konten sedang dimuat; jika tidak, mereka mungkin mengira bahwa halaman tersebut rusak.

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <div class="post">Post 4</div>
  <div class="post">Post 5</div>
  <div class="post">Post 6</div>
  <div class="post">Post 7</div>
  <div class="post">Post 8</div>
  <div class="post">Post 9</div>
  <div class="post">Post 10</div>
  <!-- More posts will load here as the user scrolls down -->
</div>

<div class="loading-indicator" style="display: none;">Loading...</div>

<button id="back-to-top" class="back-to-top">↑ Back to Top</button>

<script src="index.js"></script>
```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loading-indicator {
  margin-top: 12px;
  font-weight: bold;
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.back-to-top:hover {
  background-color: #0056b3;
}
```

```js
const container = document.querySelector('.infinite-scroll');
const loadingIndicator = document.querySelector('.loading-indicator');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePosts();
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function loadMorePosts() {
  loadingIndicator.style.display = 'block';
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      const post = document.createElement('div');
      post.className = 'post';
      post.textContent = `Post ${container.children.length + 1}`;
      container.appendChild(post);
    }
    loadingIndicator.style.display = 'none';
  }, 1000);
}
```

Salah satu pertimbangan terakhir adalah menjaga agar *footer* tetap dapat diakses oleh pengguna. Jika *footer* berisi informasi penting, maka *footer* tersebut harus dapat diakses oleh pengguna setiap saat.

Kesimpulannya, `infinite scrolling` adalah cara yang bagus untuk menampilkan konten di situs web Anda. Namun, Anda harus mengingat berbagai praktik terbaik saat merancang `infinite scroll` Anda sehingga Anda dapat memberikan pengalaman pengguna sebaik mungkin.

## Pertanyaan (Questions)

Apa itu `infinite scrolling`?

- [ ] Pola desain yang mengubah bilah gulir (*scrollbar*) pada halaman.
- [ ] Pola desain yang mengubah ukuran halaman.
- [ ] Pola desain untuk mengubah warna latar belakang halaman.
- [x] Pola desain yang memuat lebih banyak konten saat pengguna menggulir ke bawah halaman.

Apa peran tombol "load more" dalam `infinite scrolling`?

- [ ] Memuat ulang halaman.
- [x] Memberi pengguna kendali kapan mereka ingin melihat lebih banyak konten.
- [ ] Memungkinkan pengguna kembali ke konten yang dimuat sebelumnya.
- [ ] Membatasi jumlah data yang dapat dimuat.

Mengapa penting untuk menjaga *footer* tetap dapat diakses saat menggunakan `infinite scroll`?

- [ ] Membantu membuat warna lebih menonjol di halaman.
- [ ] Membantu membuat halaman memuat lebih cepat.
- [ ] Menjaga *footer* tetap dapat diakses tidaklah penting.
- [x] Agar pengguna dapat mengakses tautan dan informasi penting dari *footer* setiap saat.

---

[⬅️ Sebelumnya](5-what-are-best-practices-for-designing-cards.md) | [Selanjutnya ➡️](7-what-are-best-practices-for-designing-modal-dialogs.md)
