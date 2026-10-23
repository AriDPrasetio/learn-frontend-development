# Apa Itu Penyandian Karakter UTF-8, dan Mengapa Ini Diperlukan?


`UTF-8`, atau UCS Transformation Format 8, adalah penyandian karakter (*character encoding*) terstandarisasi yang digunakan secara luas di web. Penyandian karakter adalah metode yang digunakan komputer untuk menyimpan karakter sebagai data. Pada dasarnya, semua teks pada halaman web adalah rangkaian karakter yang disimpan sebagai satu atau beberapa bita (*byte*). Dalam komputasi, satu *byte* adalah unit data yang terdiri dari 8 bit, atau digit biner. `UTF-8` mendukung setiap karakter dalam set karakter Unicode, dan ini mencakup karakter serta simbol dari semua sistem penulisan, bahasa, dan simbol teknis. Berikut adalah contoh penggunaan `element` `meta` dengan `attribute` `charset` untuk menyetel penyandian karakter ke `UTF-8`:

```html
<meta charset="UTF-8" />

```

Dengan menyetel penyandian karakter ke UTF-8, hal ini akan memastikan bahwa karakter `"e"` beraksen (`é`) ditampilkan dengan benar pada halaman. Berikut adalah contoh kode lengkap dari penggunaan penyandian karakter UTF-8:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Examples of the UTF-8 encoding</title>
  </head>
  <body>
    <p>Café</p>
  </body>
</html>

```

Untuk setiap proyek baru yang Anda buat, Anda harus menyertakan `element` `meta` ini dengan `attribute` `charset` yang diatur ke `UTF-8`.


## Pertanyaan (Questions)


`Attribute` manakah yang digunakan untuk menyetel penyandian karakter UTF-8 untuk dokumen `HTML`?


- [ ] `pattern`

- [ ] `content`

- [x] `charset`

- [ ] `lang`



Apa itu penyandian karakter (*character encoding*)?


- [x] Metode yang digunakan komputer untuk menyimpan karakter sebagai data.

- [ ] Cara untuk mengompresi file teks.

- [ ] Ini menentukan *font* yang digunakan untuk menampilkan teks pada layar.

- [ ] Ini mengacu pada proses mengubah bahasa lisan menjadi teks tertulis.



Berapa banyak bit dalam satu *byte*?


- [ ] 1

- [ ] 33

- [ ] 7

- [x] 8



---
[⬅️ Sebelumnya](2-what-is-an-html-boilerplate.md) | [Selanjutnya ➡️](../3-html-fundamentals/1-what-are-div-elements.md)
