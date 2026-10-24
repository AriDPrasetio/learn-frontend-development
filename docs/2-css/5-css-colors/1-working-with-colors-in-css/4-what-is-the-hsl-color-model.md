# Apa Itu Model Warna HSL, dan Bagaimana Cara Kerja Fungsi HSL di CSS?

Saat menata gaya situs web, salah satu cara paling serbaguna dan intuitif untuk bekerja dengan warna adalah dengan menggunakan model warna `HSL`. `HSL` merupakan singkatan dari *Hue*, *Saturation*, dan *Lightness* — tiga komponen kunci yang mendefinisikan suatu warna.

Model warna `HSL` merepresentasikan warna dengan cara yang lebih selaras dengan bagaimana manusia mempersepsikan warna. Dalam pelajaran ini, kita akan mempelajari apa itu model warna `HSL` dan bagaimana fungsi `hsl()` digunakan di `CSS`.

## Memahami HSL

Rona (*hue*) adalah jenis warna, yang direpresentasikan sebagai sudut pada roda warna (*color wheel*), yang berkisar dari `0` hingga `360` derajat. Sebagai contoh, `0` derajat mewakili merah, `120` derajat mewakili hijau, dan `240` derajat mewakili biru. Dengan menyesuaikan *hue*, Anda berpindah melalui warna-warna yang berbeda pada spektrum.

Kejenuhan (*saturation*) mengacu pada intensitas atau kemurnian warna. Nilai ini diukur sebagai persentase dari `0%` (warna yang sepenuhnya terdesaturasi, berupa skala abu-abu / *grayscale*) hingga `100%` (bentuk paling cerah dari warna tersebut). Warna dengan saturasi `100%` sepenuhnya cerah (*vivid*), sedangkan warna dengan saturasi `0%` tampak sebagai corak abu-abu.

Kecerahan (*lightness*) menentukan seberapa terang atau gelap warna tersebut, yang juga diukur sebagai persentase. `Value` *lightness* sebesar `0%` akan menghasilkan hitam, `50%` akan memberikan nada normal dari *hue* tersebut, dan `100%` akan menghasilkan putih.

## Fungsi `hsl()`

Di `CSS`, fungsi `hsl()` digunakan untuk mendefinisikan warna menggunakan model warna `HSL`. Sintaks modern menggunakan `value` yang dipisahkan oleh spasi:

```css
element {
  color: hsl(hue saturation lightness);
}
```

Anda mungkin juga menemukan sintaks lama yang dipisahkan dengan koma pada kode yang sudah ada, yang masih didukung oleh peramban (*browser*):

```css
element {
  color: hsl(hue, saturation, lightness);
}
```

Mari kita uraikan ini dengan sebuah contoh:

```html
<link rel="stylesheet" href="styles.css" />
<p>This is a paragraph.</p>
```

```css
body {
  background-color: hsl(0 0% 1% / 1);
}

p {
  color: hsl(120 100% 50%);
}
```

Dalam kasus ini, *hue* bernilai `120` derajat, yang sesuai dengan warna hijau. Saturasinya adalah `100%`, sehingga warna hijaunya akan sangat cerah (*vivid*). *Lightness*-nya adalah `50%`, sehingga berada pada nada normal — tidak terlalu gelap maupun terlalu terang. Hasilnya, warna teks paragraf akan menjadi hijau cerah.

## Membuat Shades dan Tints

Salah satu keunggulan utama dari model warna `HSL` adalah sifatnya yang intuitif. Model ini memudahkan penyesuaian kecerahan atau kegelapan warna dengan mengubah `value` *saturation* dan *lightness* tanpa harus mengubah warna inti (*hue*).

Misalnya, jika Anda ingin membuat berbagai corak gelap (*shades*) atau corak terang (*tints*) dari warna yang sama, Anda cukup menyesuaikan `value` *lightness*.

```html
<link rel="stylesheet" href="styles.css" />
<div class="light">This is a light blue div.</div>
<div class="dark">This is a dark blue div.</div>
```

```css
div.light {
  background-color: hsl(240 100% 80%);
}

div.dark {
  background-color: hsl(240 100% 20%);
  color: hsl(0 0% 100%);
}
```

Di sini, kedua `element` `div` menggunakan *hue* yang sama (`240` derajat, yaitu biru), tetapi yang satu memiliki *lightness* `80%` (corak biru yang lebih terang), dan yang lainnya memiliki *lightness* `20%` (corak biru yang lebih gelap).

## Bekerja dengan Transparansi

Sama seperti model `RGB`, fungsi `hsl()` juga mendukung `value` *alpha* opsional untuk mengontrol transparansi. Anda menambahkannya setelah pemisah `/` sebagai parameter keempat. Berikut sintaks dasarnya:

```css
element {
  background-color: hsl(hue saturation lightness / alpha);
}
```

Mari kita lihat sebuah contoh:

```html
<link rel="stylesheet" href="styles.css" />
<div>This is a div.</div>
```

```css
div {
  background-color: hsl(0 100% 50% / 0.5);
}
```

Kode ini akan memberi `div` latar belakang (`background`) merah semi-transparan, di mana *hue* diatur ke `0` derajat (merah), *saturation* `100%`, *lightness* `50%`, dan *alpha* `0.5` (opasitas 50%). Anda juga dapat menentukan *alpha* sebagai persentase — misalnya, `hsl(0 100% 50% / 50%)` setara dengan `hsl(0 100% 50% / 0.5)`.

## Fungsi `hsla()`

Anda juga akan sering melihat fungsi `hsla()` pada `CSS` yang sudah ada. Ini adalah cara awal untuk menyertakan transparansi pada warna `HSL`, menggunakan `value` yang dipisahkan dengan koma:

```css
element {
  background-color: hsla(hue, saturation, lightness, alpha);
}
```

Sebagai contoh, `hsla(0, 100%, 50%, 0.5)` adalah padanan lawas dari `hsl(0 100% 50% / 0.5)`. Keduanya didukung oleh peramban (*browser*), tetapi sintaks modern `hsl()` dengan pemisah `/` kini lebih disukai.

## Keunggulan HSL

Model warna `HSL` sangat berguna ketika Anda perlu membuat skema warna dan menyesuaikan *shades* atau *tints* dengan mudah.

Karena `HSL` memisahkan *hue* dari *saturation* dan *lightness*, Anda dapat mempertahankan tema warna yang konsisten sambil menyesuaikan *lightness* untuk bayangan (*shadows*) atau sorotan (*highlights*). Tingkat fleksibilitas ini menjadikan `HSL` favorit bagi desainer maupun pengembang.

Selain itu, `HSL` membuat `value` warna lebih mudah dibaca dan dipahami jika dibandingkan dengan metode lain seperti kode heksadesimal (`hex codes`) atau `RGB`. Anda dapat melihat maksud di balik warna tersebut dengan lebih jelas dan menyesuaikannya, terutama saat bereksperimen dengan berbagai desain.

Dengan model warna `HSL`, Anda mendapatkan fleksibilitas lebih dalam mengontrol nada warna, saturasi, dan kecerahan, menjadikannya alat yang ampuh untuk membuat desain yang kaya dan dinamis di `CSS`.

## Pertanyaan (Questions)

Apa yang diwakili oleh nilai pertama dalam fungsi `hsl()`?

- [ ] Saturasi (*Saturation*)
- [ ] Kecerahan (*Lightness*)
- [x] Rona (*Hue*)
- [ ] Opasitas (*Opacity*)

Nilai persentase berapa untuk kecerahan (*lightness*) yang akan menghasilkan warna putih murni saat menggunakan model HSL?

- [ ] `0%`
- [ ] `50%`
- [x] `100%`
- [ ] `25%`

Bagaimana cara membuat warna menjadi semi-transparan menggunakan model HSL?

- [x] Dengan menggunakan `hsl()` dengan pemisah `/` dan nilai *alpha*.
- [ ] Dengan menurunkan nilai kecerahan (*lightness*) pada fungsi `hsl()`.
- [ ] Dengan meningkatkan nilai rona (*hue*) di atas 360 derajat.
- [ ] Dengan mengatur nilai saturasi (*saturation*) ke `0%`.

---

[⬅️ Sebelumnya](3-what-is-the-rgb-color-model.md) | [Selanjutnya ➡️](5-what-are-hex-codes.md)
