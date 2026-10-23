# Apa Saja Berbagai Status Formulir (Form States), dan Mengapa Itu Penting?

Dalam `HTML`, kontrol formulir (`form controls`), seperti input, dapat berada dalam tahapan atau kondisi yang berbeda seperti status `focused`, status `readonly`, atau status `disabled`.

Status pertama dianggap sebagai status `default`. Status `default` dari input alamat email adalah input yang kosong. Seperti itulah tampilan input email saat pertama kali dirender di halaman.

```html
<input type="email" name="email" id="email" />
```

Ketika pengguna mengklik kontrol formulir atau memilihnya menggunakan tombol Tab pada keyboard, itu berarti kontrol tersebut berada dalam status `focused`. Ketika input berada dalam status `focused`, sebagian besar peramban (`browsers`) akan menampilkan batas bergaris biru terang di sekitar input tersebut. Namun, Anda dapat memilih untuk menambahkan gaya (`styles`) tambahan di `CSS`.

Klik pada bagian mana saja dari ruang kosong di jendela pratinjau lalu tekan tombol Tab untuk melihat status fokus (`focus state`). Untuk melihat pratinjau, Anda perlu mengaktifkan editor interaktif.

```html
<input type="email" name="email" id="email" />
```

Status formulir lainnya adalah status `disabled`. Status ini menunjukkan kepada pengguna bahwa suatu input tidak dapat difokuskan atau diaktifkan.

Aktifkan editor interaktif dan cobalah mengklik input email tersebut, maka Anda akan melihat bahwa input tersebut tidak dapat difokuskan lagi.

```html
<input disabled type="email" name="email" id="email" />
```

Sama halnya dengan status `focused`, Anda dapat memilih untuk menambahkan gaya tambahan untuk status `disabled` menggunakan `CSS`.

Tipe status formulir lainnya adalah status `readonly`. Ini terjadi ketika kontrol formulir, seperti input, tidak dapat diedit oleh pengguna. Berikut adalah contoh menyetel input email menjadi hanya-baca (`read-only`). `Attribute` `value` digunakan untuk menyetel nilai yang ditampilkan di dalam kolom input.

Aktifkan editor interaktif dan cobalah mengedit nilai saat ini yaitu `example@email.com` di jendela pratinjau, maka Anda akan melihat bahwa hal tersebut tidak dapat dilakukan.

```html
<input
  readonly
  type="email"
  name="email"
  id="email"
  value="example@email.com"
/>
```

Perbedaan utama antara status `disabled` dan status `readonly` adalah bahwa status `readonly` dapat difokuskan sedangkan status `disabled` tidak dapat difokuskan.

Memahami berbagai status formulir (`form states`) sangatlah penting karena mereka memastikan pengalaman pengguna (`user experience`) yang lancar dengan memberikan umpan balik dan panduan yang jelas saat menangani kesalahan.

## Pertanyaan (Questions)

`Attribute` manakah yang digunakan untuk menonaktifkan (`disable`) sebuah input?

- [ ] `readonly`
- [ ] `required`
- [ ] `checked`
- [x] `disabled`

`Attribute` manakah yang digunakan untuk menandai sebuah input sebagai hanya-baca (`read only`)?

- [ ] `checked`
- [x] `readonly`
- [ ] `size`
- [ ] `capture`

Kapan status fokus (`focus state`) terjadi?

- [ ] Ketika kolom input dinonaktifkan (`disabled`) dan tidak dapat diinteraksikan.
- [ ] Ketika kolom input divalidasi dan menampilkan pesan kesalahan.
- [x] Ketika pengguna mengklik sebuah input atau memilihnya menggunakan tombol Tab untuk memfokuskannya.
- [ ] Ketika kolom input telah diisi sebelumnya dengan nilai `default` oleh peramban.

---
[⬅️ Sebelumnya](3-what-is-client-side-form-validation-in-html-forms.md) | [Selanjutnya ➡️](../2-working-with-tables/1-what-are-html-tables-used-for.md)