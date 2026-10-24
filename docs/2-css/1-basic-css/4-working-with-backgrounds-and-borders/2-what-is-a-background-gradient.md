# Apa Itu Background Gradient, dan Bagaimana Cara Kerjanya?

Sebuah gradien latar belakang (*background gradient*) dalam `CSS` adalah transisi halus antara dua atau lebih warna yang dapat diterapkan pada latar belakang suatu `element`. Gradien memungkinkan Anda membuat latar belakang yang menarik secara visual tanpa memerlukan gambar.

Terdapat dua jenis utama gradien dalam `CSS`: *linear gradients* dan *radial gradients*.

Sebuah *linear gradient* mentransisikan warna di sepanjang garis lurus. Anda dapat menentukan arah dan warna-warna yang terlibat.

Berikut adalah sintaks dasarnya:

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

Dalam contoh ini, kita menggunakan `property` `CSS` `background` dengan nilai berupa `linear gradient`.

`direction` menentukan arah dari gradien. Arah ini dapat berupa sudut (seperti `45deg`), kata kunci (seperti `to right`, `to bottom`), atau sisi/sudut (*side/corner*).

`color-stop` menentukan warna dan posisi di mana transisi gradien terjadi.

Untuk lebih memahami cara kerja *linear gradient*, mari kita lihat contoh berikut:

```html
<link rel="stylesheet" href="styles.css">
<div class="linear-gradient"></div>
```

```css
.linear-gradient{
  background: linear-gradient(to right, red, yellow);
  height: 40vh;
}
```

`CSS` ini membuat *linear gradient* yang bertransisi dari `red` di sebelah kiri (`left`) ke `yellow` di sebelah kanan (`right`). Gradien diterapkan pada sebuah `element` dengan tinggi `40%` dari tinggi *viewport*. Anda akan mempelajari lebih lanjut tentang unit `vh` pada pelajaran mendatang.

Arah `to right` berarti gradien berjalan secara horizontal dari kiri ke kanan.

Jenis gradien lainnya adalah *radial gradient*.

Sebuah *radial gradient* mentransisikan warna yang memancar keluar dari suatu titik awal (*origin*, biasanya di bagian tengah) dalam bentuk lingkaran (*circular*) atau elips (*elliptical*).

Berikut adalah sintaks dasarnya:

```css
background: radial-gradient(shape size at position, color-stop1, color-stop2, ...)
```

Pada sintaks tersebut, `shape` menentukan bentuk gradien yang bisa berupa `circle` atau `ellipse`.

`size` menentukan ukuran bentuk akhir (*ending shape*) dari gradien, yang dapat berupa `closest-side`, `closest-corner`, `farthest-side`, atau `farthest-corner`.

`position` menentukan posisi pusat gradien yang dapat ditentukan menggunakan kata kunci (seperti `center`, `top left`, `bottom right`) atau nilai yang presisi (seperti `50% 50%`, `10px 20px`).

Terakhir, *color stops* adalah daftar warna yang dilalui dalam transisi gradien. Setiap *color stop* secara opsional dapat menyertakan nilai posisi (persentase atau satuan panjang) yang menunjukkan di mana warna tersebut harus ditempatkan.

Contohnya adalah:

```html
<link rel="stylesheet" href="styles.css">
<div class="radial-gradient"></div>
```

```css
.radial-gradient{
  background: radial-gradient(circle closest-side at center, red, yellow 50%, green);
  height: 60vh;
}
```

`CSS` ini membuat *circular radial gradient* yang berpusat di tengah `element`. Gradien dimulai dengan warna `red` di bagian tengah, bertransisi ke `yellow` pada `50%` radius, dan berakhir dengan warna `green`.

Kata kunci `closest-side` membuat bentuk akhir gradien pas dengan sisi terdekat dari `element`. Gradien diterapkan pada `element` dengan tinggi `60%` dari tinggi *viewport*.

Memahami cara bekerja dengan gradien `CSS` dapat meningkatkan desain Anda secara signifikan dengan menyediakan latar belakang yang menarik secara visual tanpa memerlukan gambar.

Dengan opsi seperti *linear gradients* untuk transisi halus dan *radial gradients* untuk efek melingkar, gradien menawarkan fleksibilitas sekaligus kreativitas dalam desain web.

## Pertanyaan (Questions)

Apa yang ditentukan oleh kata kunci `circle` dalam fungsi `radial-gradient()`?

- [ ] Gradien akan memiliki bentuk persegi.
- [ ] Gradien akan memanjang dalam arah diagonal.
- [x] Gradien akan memiliki bentuk melingkar (*circular*).
- [ ] Gradien akan diterapkan pada teks.

Apa fungsi dari kata kunci `farthest-corner` pada parameter ukuran (*size*) dalam fungsi `radial-gradient()`?

- [ ] Membuat gradien meluas hingga ke sudut terdekat dari `element`.
- [ ] Membuat gradien menutupi seluruh lebar (`width`) dari `element`.
- [x] Membuat gradien meluas hingga ke sudut terjauh dari `element`.
- [ ] Membuat gradien hanya muncul di dalam `padding` dari `element`.

Dalam fungsi `radial-gradient(circle at center, red, yellow 50%, green)`, di manakah pusat gradien berada?

- [ ] Di sudut kanan atas `element`.
- [ ] Di sudut kiri bawah `element`.
- [x] Di bagian tengah `element`.
- [ ] Di tepi luar `element`.

---

[⬅️ Sebelumnya](1-how-to-work-with-background-image-size-repeat-position-and-attachment.md) | [Selanjutnya ➡️](3-what-are-some-accessibility-considerations-for-backgrounds.md)
