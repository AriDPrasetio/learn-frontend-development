# Apa Itu Objek Event?

Objek `Event` adalah muatan (*payload*) yang terpicu ketika pengguna berinteraksi dengan halaman web Anda dalam beberapa cara. Interaksi ini bisa berupa apa saja mulai dari mengeklik tombol atau memfokuskan *input* hingga menggoyangkan perangkat seluler mereka.

Seperti semua objek JavaScript, objek `Event` memiliki sejumlah `property` yang mungkin berguna. `Property` yang tersedia bergantung pada peristiwa (*event*) yang memicu muatan ini.

Semua objek `Event` akan memiliki `property` `type`. `Property` ini menunjukkan jenis *event* yang memicu muatan tersebut, seperti `"keydown"` atau `"click"`. Nilai-nilai ini akan berkorespondensi dengan nilai yang sama yang mungkin Anda teruskan ke `addEventListener()`, tempat Anda dapat menangkap dan memanfaatkan objek `Event`.

Objek `Event` akan selalu memiliki `property` `target`. `Property` `target` adalah referensi ke objek apa pun yang memicu *event* tersebut. Paling umum, ini berupa semacam objek `HTMLElement`, atau objek `Document` atau `Window`. Namun bisa juga berupa sesuatu yang lebih spesifik, seperti `AudioContext`.

*Event* juga memiliki `method`, yaitu fungsi yang diekspos sebagai `property` pada objek. Salah satu `method` yang umum digunakan adalah `preventDefault()`, yang mencegah perilaku bawaan (*default*) dari *event* saat dipanggil.

Jika Anda ingin menangani pengiriman formulir (*form submissions*) sendiri, misalnya, Anda mungkin memanggil `preventDefault()` untuk mencegah browser mencoba mengirimkan data formulir sebagai *request* `POST`. Anda akan mempelajari lebih lanjut tentang *request* `POST` dalam pelajaran mendatang.

Anda juga kemungkinan besar akan menjumpai `method` `stopPropagation()`. `Method` ini mencegah *event* menggelembung (*bubbling up*) atau merambat (*propagating*) ke elemen induk. Anda akan mempelajari lebih lanjut tentang apa artinya ini dalam pelajaran mendatang.

Ada juga sejumlah besar `property` yang spesifik untuk implementasi tertentu dari objek `Event`. Misalnya, sebuah `FetchEvent` akan memiliki `property` `request` untuk memuat *request* yang memicu *event* tersebut.

Jika Anda ragu tentang `property` apa saja yang tersedia, Anda dapat mencatat (*log*) objek `Event` yang bersangkutan atau memeriksa dokumentasinya.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan dari objek `Event` dalam JavaScript?

- [ ] Untuk membuat elemen HTML baru.
- [ ] Untuk menyimpan data pengguna.
- [x] Untuk menyediakan informasi tentang interaksi pengguna dengan halaman web.
- [ ] Untuk mendefinisikan gaya CSS untuk elemen.

### Pertanyaan 2

Manakah dari `property` berikut yang selalu tersedia pada semua objek `Event`?

- [ ] `request`
- [x] `type`
- [ ] `keyCode`
- [ ] `clientX`

### Pertanyaan 3

Apa yang dilakukan oleh `method` `preventDefault()` saat dipanggil pada objek `Event`?

- [ ] Menghentikan *event* dari menggelembung (*bubbling up*) ke elemen induk.
- [x] Mencegah perilaku bawaan (*default*) dari *event*.
- [ ] Menghapus semua *event listener* dari elemen target.
- [ ] Membatalkan *event* secara keseluruhan.

---

[⬅️ Sebelumnya](9-how-do-you-add-attributes-with-setattribute.md) | [Selanjutnya ➡️](11-how-does-the-addeventlistener-method-work.md)
