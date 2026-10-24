# Apa Saja Praktik Terbaik untuk Merancang Modal Dialogs?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` dan `JavaScript` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau (*preview*) dari konsep-konsep desain ini agar Anda lebih memahami cara kerjanya. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

Apa itu modal? Itu adalah jenis jendela sembul (*pop-up*) yang mungkin ditampilkan oleh situs web di atas konten mereka. `HTML` memiliki `element` `dialog` yang dapat Anda gunakan untuk membuat `modal dialogs`.

Konten di belakang modal biasanya diredupkan (*dimmed*). Ini membantu pengguna secara visual fokus pada area yang Anda inginkan untuk berinteraksi dengannya – dalam hal ini, modal tersebut.

Merupakan ide yang baik untuk selalu memungkinkan pengguna mengeklik di luar area modal untuk menutupnya.

```html
<link rel="stylesheet" href="styles.css">
<button id="open-modal">Open Modal</button>
<dialog>
  <h2>Subscribe to our Newsletter!</h2>
  <p>Get the latest updates and offers.</p>
  <button>Subscribe</button>
  <button>Close</button>
</dialog>

<script src="index.js"></script>
```

```css
dialog {
  border: none;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}
```

```js
const dialog = document.querySelector('dialog');
const closeButton = dialog.querySelector('button:last-of-type');
const openModalButton = document.getElementById('open-modal');

closeButton.addEventListener('click', () => {
  dialog.close();
});

openModalButton.addEventListener('click', () => {
  dialog.showModal();
});

// Close the modal when clicking outside of it
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
  if (!isInDialog) {
    dialog.close();
  }
}); 
```

Anda akan sering melihat tombol-tombol yang sangat mencolok pada modal. Tombol-tombol ini disebut `CTA`, atau *call-to-action*. Anda ingin tombol-tombol ini mudah dikenali karena tujuan menyela alur pengguna dengan modal adalah untuk mendorong mereka mengambil tindakan tertentu.

Modal juga harus memiliki tombol tutup (*close button*). Meskipun Anda mungkin sangat ingin pengguna mengeklik `CTA` Anda, penting untuk memberi mereka opsi untuk membatalkan/keluar dari modal dan melanjutkan aktivitas apa pun yang sebelumnya mereka lakukan.

```html
<link rel="stylesheet" href="styles.css">
<button id="open-modal">Open Modal</button>
<dialog>
  <h2>Subscribe to our Newsletter!</h2>
  <p>Get the latest updates and offers.</p>
  <button class="cta">Subscribe</button>
  <button class="close">Close</button>
</dialog>
<script src="index.js"></script>
```

```css
.cta {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.close {
  background-color: transparent;
  color: #007BFF;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
```

```js
const dialog = document.querySelector('dialog');
const closeButton = dialog.querySelector('.close');
const openModalButton = document.getElementById('open-modal');

closeButton.addEventListener('click', () => {
  dialog.close();
});

openModalButton.addEventListener('click', () => {
  dialog.showModal();
});

// Close the modal when clicking outside of it
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
  if (!isInDialog) {
    dialog.close();
  }
});
```

Tentu saja ada pertimbangan aksesibilitas pada modal, seperti mengelola fokus (*focus*) pada `element` dengan benar. Namun, jika Anda menggunakan praktik-praktik umum ini sebagai titik awal, Anda akan memiliki fondasi yang kuat untuk dikembangkan.

## Pertanyaan (Questions)

Apa tujuan meredupkan konten di balik kotak dialog modal (*modal dialog*)?

- [ ] Untuk menghemat masa pakai baterai pada perangkat seluler.
- [x] Untuk membantu pengguna mengidentifikasi secara visual area yang harus mereka ajak berinteraksi.
- [ ] Untuk membuat situs web memuat lebih cepat.
- [ ] Untuk mencegah pengguna melihat informasi sensitif.

Apa kepanjangan dari CTA dalam konteks desain modal?

- [ ] Click To Activate.
- [ ] Complete The Action.
- [x] Call-to-Action.
- [ ] Close The Application.

Mengapa penting untuk menyertakan tombol tutup (*close button*) pada kotak dialog modal?

- [ ] Hal ini diwajibkan oleh hukum di beberapa negara.
- [ ] Untuk mencegah modal merusak (*crash*) peramban.
- [x] Untuk memberi pengguna opsi keluar dari modal dan melanjutkan aktivitas mereka sebelumnya.
- [ ] Untuk membuat modal terlihat lebih profesional.

---

[⬅️ Sebelumnya](6-what-are-best-practices-for-designing-infinite-scrolls.md) | [Selanjutnya ➡️](8-what-are-best-practices-for-progress-indication-on-forms-registration-and-setup.md)
