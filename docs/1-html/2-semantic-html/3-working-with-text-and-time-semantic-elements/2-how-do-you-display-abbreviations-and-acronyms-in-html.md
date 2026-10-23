# Bagaimana Cara Menampilkan Singkatan (Abbreviations) di HTML?

Singkatan (`abbreviation`) adalah bentuk pendek dari sebuah kata atau frasa. Sebagai contoh, "Dr" diikuti dengan titik adalah singkatan untuk kata "doctor" (dokter).

Ada dua bentuk singkatan yang umum: akronim (`acronym`) dan inisialisme (`initialism`).

Akronim adalah kata yang dibentuk dari huruf-huruf awal suatu frasa, dengan setiap huruf mewakili huruf pertama dari sebuah kata dalam frasa tersebut.

GUI adalah contoh dari sebuah akronim. GUI merupakan singkatan dari `Graphical User Interface`. Dengan mengambil huruf pertama dari setiap kata G, U, dan I, Anda mendapatkan akronim GUI.

Inisialisme dibentuk dari huruf-huruf awal suatu frasa, dengan setiap huruf mewakili huruf pertama dari sebuah kata dalam frasa tersebut.

Sebagai contoh, `HTML` adalah sebuah inisialisme; `HTML` merupakan singkatan dari `HyperText Markup Language` dan dilafalkan dengan mengeja setiap hurufnya H, T, M, L.

Baik akronim maupun inisialisme adalah jenis-jenis singkatan. Perbedaannya adalah akronim dilafalkan sebagai kata dan inisialisme dilafalkan sebagai huruf-huruf individual.

Keduanya sangat membantu untuk menulis teks yang lebih ringkas, terutama jika keduanya sudah dikenal luas dan mudah dipahami dalam konteks tertentu.

Jika Anda perlu menampilkan singkatan seperti akronim atau inisialisme dalam `HTML`, `element` `abbreviation` adalah apa yang Anda cari. Anda harus selalu menjelaskan arti lengkapnya saat Anda menggunakannya untuk pertama kali. Kemudian Anda dapat menggunakan `element` `abbreviation` untuk menyorotnya dan memberikan detail lebih lanjut.

Berikut adalah contoh di mana Anda dapat melihat paragraf dengan kalimat `HTML is the foundation of the web`:

```html
<p><abbr>HTML</abbr> is the foundation of the web.</p>
```

Inisialisme `HTML` berada di dalam `element` `abbreviation` (`abbr`). Di peramban (`browser`), Anda akan melihat bahwa tidak ada yang benar-benar berubah. Tampilannya masih seperti teks biasa. `Element` `abbreviation` menyediakan konteks yang bermanfaat di balik layar, namun pengguna akan tetap melihat inisialisme tersebut sebagai teks normal.

Jika Anda ingin membantu pengguna memahami arti dari inisialisme ini, Anda dapat menampilkan bentuk lengkapnya dengan atribut `title`.

Atribut `title` bersifat opsional, tetapi jika Anda memutuskan untuk menyertakannya, atribut tersebut harus berupa deskripsi singkatan, akronim, atau inisialisme yang dapat dibaca manusia (`human readable`).

Mari kita ambil contoh yang sama seperti sebelumnya, namun menambahkan atribut `title`. Isinya adalah `HyperText Markup Language`, bentuk kepanjangan dari inisialisme tersebut:

```html
<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>
```

Biasanya, gaya dari `element` `abbreviation` akan berubah ketika Anda menambahkan atribut ini. Gaya spesifiknya akan bergantung pada peramban. Beberapa peramban mungkin menampilkan garis bawah bertitik-titik (`dotted underline`), sementara yang lain mungkin mengubah isinya menjadi huruf kapital kecil (`small caps`). Ketika pengguna mengarahkan kursor (`hover`) ke atas singkatan, bentuk lengkapnya ditampilkan sebagai `tooltip`.

Meskipun Anda tidak harus menggunakan `element` `abbreviation` untuk setiap singkatan di halaman web Anda, ini direkomendasikan untuk singkatan yang mungkin kurang jelas dan memerlukan konteks tambahan.

Anda harus menggunakan pertimbangan terbaik Anda untuk menemukan keseimbangan yang tepat antara informasi dan presentasi guna menghindari teks yang berantakan sekaligus tetap jelas dan ringkas.

## Pertanyaan (Questions)

`Element` `HTML` manakah yang digunakan untuk menunjukkan singkatan atau akronim?

- [x] `abbr`
- [ ] `acronym`
- [ ] `abbrev`
- [ ] `acron`

Apa tujuan utama dari `element` `abbr`?

- [ ] Untuk menata gaya teks sebagai singkatan.
- [x] Untuk menunjukkan singkatan atau akronim dan memberikan informasi tambahan.
- [ ] Untuk memperpendek konten halaman web.
- [ ] Untuk meningkatkan peringkat mesin pencari.

Atribut apa yang dapat digunakan di dalam `element` `abbr` untuk memberikan bentuk lengkap dari akronim atau singkatan?

- [ ] `explain`
- [ ] `description`
- [x] `title`
- [ ] `fullform`

---
[⬅️ Sebelumnya](1-how-do-block-and-inline-quotes-work-in-html.md) | [Selanjutnya ➡️](3-how-do-you-display-addresses-in-html.md)
