# Apa Itu Model Warna RGB, dan Bagaimana Cara Kerja Fungsi RGB di CSS?

## Pengenalan Model Warna RGB

Saat bekerja dengan warna di `CSS`, memahami model warna `RGB` sangatlah penting. `RGB` merupakan singkatan dari *Red* (Merah), *Green* (Hijau), dan *Blue* (Biru) — warna-warna primer dari cahaya. Ketiga warna ini digabungkan dalam intensitas yang berbeda untuk menghasilkan rentang warna yang luas.

Model warna `RGB` adalah model warna aditif (*additive color model*), yang berarti warna dibuat dengan menggabungkan cahaya pada berbagai intensitas.

Intensitas setiap warna dapat berkisar dari `0` (yang berarti tidak ada cahaya) hingga `255` (yang berarti cahaya penuh). Dengan mencampurkan tingkat merah, hijau, dan biru yang berbeda, Anda dapat menghasilkan warna apa pun yang Anda lihat di layar. Sebagai contoh:

- Hitam direpresentasikan oleh `rgb(0, 0, 0)`, yang berarti tidak ada cahaya untuk salah satu dari ketiga warna tersebut.
- Putih direpresentasikan oleh `rgb(255, 255, 255)`, yang berarti intensitas cahaya penuh untuk ketiga warna tersebut.
- Merah direpresentasikan oleh `rgb(255, 0, 0)`, dengan intensitas penuh untuk merah dan tanpa hijau maupun biru.

## Fungsi `rgb()` di CSS

Di `CSS`, fungsi `rgb()` memungkinkan Anda mendefinisikan warna menggunakan model warna `RGB`. Fungsi ini menerima tiga `value`, masing-masing mewakili intensitas cahaya merah, hijau, dan biru secara berturut-turut. Berikut sintaks dasarnya:

```css
element {
  color: rgb(red, green, blue);
}
```

`Value` untuk merah, hijau, dan biru dapat berkisar dari `0` hingga `255`, di mana `0` mewakili ketiadaan warna tersebut, dan `255` mewakili saturasi penuh. Berikut contoh bagaimana Anda dapat menggunakan fungsi `rgb()` di `CSS`:

```html
<link rel="stylesheet" href="styles.css" />
<p>This is a paragraph.</p>
```

```css
p {
  color: rgb(255, 0, 0);
}
```

Kode ini akan mengubah warna teks paragraf menjadi merah karena `value` merah diatur ke `255`, sedangkan hijau dan biru diatur ke `0`.

## Transparansi dengan Fungsi `rgba()`

`CSS` juga menyediakan fungsi `rgba()`, yang menambahkan `value` keempat — *alpha* — yang mengontrol transparansi warna. `Value` *alpha* berkisar dari `0` (sepenuhnya transparan) hingga `1` (sepenuhnya kedap/opak). Berikut contoh penggunaan `rgba()`:

```html
<link rel="stylesheet" href="styles.css" />
<div>This is a div.</div>
```

```css
div {
  background-color: rgba(0, 0, 255, 0.5);
}
```

Kode ini akan menerapkan latar belakang (`background`) biru semi-transparan ke sebuah `element` `div` karena `value` merah dan hijau diatur ke `0`, `value` biru diatur ke `255`, dan `value` *alpha* diatur ke `0.5` (transparansi 50%).

## Mengapa Menggunakan Model Warna RGB?

Model warna `RGB` sangat berguna untuk media digital karena berhubungan langsung dengan cara layar menampilkan warna. Monitor dan layar menggunakan piksel (*pixel*) merah, hijau, dan biru kecil untuk menciptakan warna yang Anda lihat. Dengan mengontrol intensitas piksel-piksel ini melalui `value` `RGB`, Anda dapat memperoleh berbagai macam warna untuk desain web Anda.

Selain itu, model `RGB` sangat ideal saat bekerja dengan desain dinamis. Misalnya, jika Anda ingin membuat animasi atau efek warna yang memerlukan perubahan waktu nyata (*real-time*), fleksibilitas fungsi `RGB` memungkinkan Anda memodifikasi warna secara terprogram (*programmatically*).

Dengan memahami model warna `RGB` dan cara menggunakan fungsi `rgb()` serta `rgba()` di `CSS`, Anda akan memiliki kontrol yang lebih besar atas bagaimana warna ditampilkan di halaman web Anda. Anda dapat membuat desain yang cerah, transparansi, dan bahkan menyesuaikan warna secara terprogram untuk efek dinamis.

## Pertanyaan (Questions)

Apa yang diwakili oleh angka-angka di dalam fungsi `rgb()`?

- [ ] `width`, `height`, dan `depth` dari `element`.
- [x] Jumlah cahaya `red`, `green`, dan `blue`.
- [ ] Ukuran `padding`, `margin`, dan `border`.
- [ ] Jumlah `hue`, `saturation`, dan `lightness`.

Fungsi `CSS` mana yang akan Anda gunakan jika Anda ingin mengontrol transparansi suatu warna?

- [ ] `rgb()`
- [x] `rgba()`
- [ ] `hsl()`
- [ ] `hex()`

Berapa nilai maksimum untuk setiap warna individual dalam model RGB?

- [ ] `100`
- [ ] `50`
- [x] `255`
- [ ] `360`

---

[⬅️ Sebelumnya](2-what-are-named-colors-in-css.md) | [Selanjutnya ➡️](4-what-is-the-hsl-color-model.md)
