# Apa Saja Berbagai Jenis Atribut Target, dan Bagaimana Cara Kerjanya?

Anda mungkin pernah melihat atribut `target` pada `anchor element`, atau tautan (`link`). Atribut penting ini memberi tahu *browser* di mana harus membuka `URL` untuk `anchor element` tersebut.

Aktifkan editor interaktif, klik tautan tersebut dan Anda akan diarahkan ke beranda freeCodeCamp di tab *browser* baru.

```html
<a href="https://freecodecamp.org" target="_blank">Visit freeCodeCamp</a>
```

Ada empat kemungkinan nilai penting untuk atribut ini. Perhatikan bahwa setiap nilai diawali dengan garis bawah (*underscore* `_`).

Nilai pertama adalah `_self`, yang merupakan nilai *default*. Nilai ini membuka tautan dalam konteks penjelajahan (*browsing context*) saat ini. Dalam kebanyakan kasus, ini adalah tab atau jendela (*window*) saat ini.

Nilai kedua adalah `_blank`, yang membuka tautan dalam konteks penjelajahan (*browsing context*) baru. Biasanya, ini akan terbuka di tab baru. Namun beberapa pengguna mungkin mengonfigurasi *browser* mereka untuk membuka jendela baru sebagai gantinya.

Nilai ketiga adalah `_parent`, yang membuka tautan di induk (*parent*) dari konteks saat ini. Misalnya, jika situs web Anda memiliki `iframe`, nilai `_parent` di dalam `iframe` tersebut akan terbuka di tab/jendela situs web Anda, bukan di dalam *frame* yang disematkan.

Nilai keempat adalah `_top`, yang membuka tautan di konteks penjelajahan teratas (*top-most browsing context*) - bayangkan "induk dari induk" (*parent of the parent*). Ini mirip dengan `_parent`, tetapi tautan akan selalu terbuka di tab/jendela *browser* penuh, bahkan untuk *frame* bersarang (*nested embedded frames*).

Ada nilai kelima, yang disebut `_unfencedTop`, yang saat ini digunakan untuk `FencedFrame API` eksperimental. Pada saat pelajaran ini dibuat, Anda mungkin belum memiliki alasan untuk menggunakannya.

Memilih nilai `target` yang tepat untuk mengontrol ke mana pengguna Anda diarahkan merupakan pertimbangan penting saat membuat situs web.

## Pertanyaan (Questions)

Berapa banyak nilai `target` saat ini yang dapat dipilih?

- [ ] 2
- [x] 4
- [ ] 3
- [ ] 1

Di mana tautan dengan `target="_blank"` akan terbuka?

- [x] Di jendela atau tab baru.
- [ ] Di jendela atau tab yang sama.
- [ ] Di monitor kedua Anda.
- [ ] Di komputer Camperchan.

Apa perilaku *default* saat Anda tidak menyetel atribut `target`?

- [ ] Terbuka di jendela atau tab baru.
- [ ] Terbuka di konteks induk (*parent*).
- [x] Terbuka di jendela atau tab yang sama.
- [ ] Tidak terbuka sama sekali.

---
[⬅️ Sebelumnya](../7-working-with-media/2-how-do-you-embed-videos-onto-your-page-using-the-iframe-element.md) | [Selanjutnya ➡️](2-what-is-the-difference-between-absolute-and-relative-paths.md)
