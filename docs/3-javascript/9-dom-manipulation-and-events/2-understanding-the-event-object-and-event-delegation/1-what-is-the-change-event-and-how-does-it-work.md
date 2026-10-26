# Apa Itu Event Change, dan Bagaimana Cara Kerjanya?

*Event* `change` adalah peristiwa khusus yang terpicu ketika pengguna mengubah nilai dari elemen input tertentu. Lebih khusus lagi:

- Ketika sebuah kotak centang (*checkbox*) dicentang atau dihilangkan centangnya.
- Ketika sebuah tombol radio (*radio button*) dicentang.
- Ketika pengguna membuat pilihan dari pemilih tanggal (*date picker*) atau menu *dropdown*.
- Ketika sebuah input kehilangan fokus (pengguna menekan tab ke kolom berikutnya, atau mengeklik ke luar formulir) setelah pengguna mengubah nilainya.
- Ketika pengguna mengonfirmasi nilai dengan cara lain, seperti menekan tombol <kbd>Enter</kbd> setelah mengetik beberapa teks.

Perhatikan bahwa *event* `change` TIDAK terpicu saat pengguna Anda mengetik di dalam input. *Event* `change` hanya akan terpicu setelah mereka memfokuskan elemen lain (kehilangan fokus).

Berikut adalah contoh penggunaan *event* `change` dengan menu *dropdown*:

```html
<select id="select-menu">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
<script src="index.js"></script>
```

```javascript
const selectMenu = document.getElementById("select-menu");
selectMenu.addEventListener("change", (event) => {
  console.log(`You selected: ${event.target.value}`);
});
```

Setiap kali pengguna memilih opsi yang berbeda dari menu *dropdown*, *event* `change` akan terpicu, dan nilai yang dipilih akan dicatat ke konsol.

*Event* `change` tetap menghasilkan objek `Event`, namun tidak seperti kebanyakan *event* lainnya, ini tidak menghasilkan implementasi kustom – satu-satunya `property` dan `method` yang akan dapat Anda akses adalah yang ada pada objek dasar `Event`.

Ini berbeda dari *event* `input`, yang menghasilkan objek khusus `InputEvent`. *Event* `change` juga berbeda dalam beberapa hal. Sebagai contoh, sebuah *event* `input` AKAN terpicu saat pengguna mengetikkan konten ke dalam suatu kolom.

Perbedaan-perbedaan ini penting untuk diingat, karena Anda mungkin merasa bingung dengan penentuan waktu (*timing*) kapan *event-event* ini terpicu.

## Pertanyaan (Questions)

### Pertanyaan 1

Kapan *event* `change` terpicu untuk sebuah elemen input teks?

- [ ] Segera setelah pengguna mulai mengetik.
- [ ] Setiap kali sebuah karakter diketikkan.
- [x] Ketika input kehilangan fokus setelah nilainya diubah.
- [ ] Hanya ketika pengguna menekan tombol <kbd>Enter</kbd>.

### Pertanyaan 2

Manakah dari hal berikut yang TIDAK akan memicu *event* `change`?

- [ ] Memilih sebuah opsi dari menu *dropdown*.
- [x] Mengetikkan teks ke dalam kolom input tanpa meninggalkannya.
- [ ] Mencentang kotak centang (*checkbox*).
- [ ] Memilih tanggal dari *date picker*.

### Pertanyaan 3

Bagaimana objek `Event` untuk *event* `change` berbeda dari objek `Event` untuk *event* `input`?

- [ ] *Event* `change` memiliki lebih banyak `property` dibandingkan *event* `input`.
- [ ] *Event* `change` menggunakan implementasi kustom dari objek `Event`.
- [x] *Event* `input` menggunakan objek khusus `InputEvent`, sedangkan *event* `change` menggunakan objek dasar `Event`.
- [ ] Tidak ada perbedaan di antara kedua objek `Event` tersebut.

---

[⬅️ Sebelumnya](../1-working-with-the-dom-click-events-and-web-apis/20-how-do-you-open-and-close-dialog-elements-using-javascript.md) | [Selanjutnya ➡️](2-how-do-event-bubbling-and-event-delegation-work.md)
