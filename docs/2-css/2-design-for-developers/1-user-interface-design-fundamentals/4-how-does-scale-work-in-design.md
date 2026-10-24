# Bagaimana Skala Bekerja dalam Desain?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau konsep-konsep desain tersebut agar Anda lebih memahami cara kerjanya.

"Skala" (`scale`) dari sesuatu mengacu pada ukurannya.

Saat Anda melihat penskalaan (`scaling`) dalam desain web Anda, Anda melihat hubungan ukuran antara `element-element` yang berbeda, dan bagaimana `element-element` ini dapat beradaptasi dengan berbagai ukuran layar.

Menggunakan `scale` yang tepat untuk `element-element` Anda memainkan peran penting dalam `visual hierarchy`. `Element` yang lebih besar akan menarik lebih banyak perhatian, yang dapat memandu pengguna Anda menjelajahi konten sesuai cara yang Anda inginkan.

Sebagai contoh, pemisahan visual antara *heading* dan paragraf menarik perhatian pembaca Anda, namun `scale`-nya harus sesuai untuk menghasilkan teks menarik yang memikat pembaca ke bagian tersebut.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fdfdfd;
    color: #333;
  }

  .section {
    margin-bottom: 40px;
  }

  .big-heading {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .paragraph {
    font-size: 16px;
    max-width: 600px;
    line-height: 1.6;
  }
</style>

<div class="section">
  <div class="big-heading">Discover the Power of Smart Design</div>
  <p class="paragraph">
    Great design isn’t just about colors or fonts — it’s also about scale. 
    A large heading like this one instantly grabs your attention, while the paragraph beneath it provides context and detail.
    Proper scaling creates a clear path for the reader’s eye to follow.
  </p>
</div>
```

Meskipun demikian, `scale` tidak hanya berlaku untuk teks. Hal ini juga penting untuk gambar. Dan meskipun `scale` dari gambar *banner* mungkin cocok untuk tata letak desktop (`desktop layout`), gambar tersebut mungkin terlalu besar pada tata letak seluler (`mobile layout`).

Dengan memperkecil skala gambar ke rasio yang lebih sesuai, Anda dapat mempertahankan dampak visualnya sekaligus memastikan bahwa informasi di situs tetap terlihat.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fefefe;
    color: #333;
  }

  .banner {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 20px auto;
    border-radius: 8px;
  }

  .content {
    max-width: 600px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .banner {
      max-width: 90%;
    }

    .content {
      font-size: 15px;
    }
  }
</style>

<img 
  src="https://placehold.co/1200x400/png?text=Large+Banner+Image"
  alt="Banner" 
  class="banner"
>

<div class="content">
  <p>
    This banner image looks great on a large screen, but on smaller devices, it scales down automatically.
    That way, it still delivers a strong visual impression without pushing the actual content off the screen.
    Scaling images properly helps maintain balance and accessibility across layouts.
  </p>
</div>
```

Skala (`scale`) juga penting untuk interaktivitas, dan kemampuan untuk menggunakan situs web Anda secara nyata. Jika teks di dalam bilah navigasi (`navigation bar`) tidak berada pada `scale` yang sesuai, pengguna ponsel cerdas akan kesulitan mengetuk tautan (*link*) tersebut.

Dan jika Anda menyesuaikan skalanya secara tepat, Anda akan mendapatkan tautan yang tidak hanya lebih mudah dibaca, tetapi juga lebih mudah diklik bagi pengguna perangkat seluler Anda.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    margin: 0;
    background-color: #fafafa;
  }

  .navbar {
    background-color: #004080;
    padding: 15px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 15px;
    display: inline-block;
    border-radius: 4px;
  }

  .nav-link:hover {
    background-color: #0059b3;
  }

  @media (max-width: 600px) {
    .nav-link {
      font-size: 20px;
      padding: 14px 18px;
    }
  }
</style>

<nav class="navbar">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
  <a href="#" class="nav-link">Services</a>
  <a href="#" class="nav-link">Contact</a>
</nav>
```

Ada banyak cara di mana `scale` sangat penting dalam desain Anda. Kita telah membahas hal-hal mendasar, sehingga sekarang Anda seharusnya telah memiliki pemahaman mendasar tentang pentingnya hal tersebut.

## Pertanyaan (Questions)

Apa tujuan utama dari penggunaan skala (`scale`) yang tepat dalam desain web?

- [ ] Untuk membuat semuanya berukuran sama.
- [x] Untuk memandu pengguna menjelajahi konten.
- [ ] Untuk menggunakan ruang sebanyak mungkin.
- [ ] Untuk membuat teks lebih sulit dibaca.

Mengapa gambar *banner* berukuran besar dapat bermasalah pada tata letak seluler (`mobile layout`)?

- [ ] Gambarnya dimuat terlalu lambat.
- [ ] Gambarnya tidak menarik secara visual.
- [x] Gambarnya menghabiskan terlalu banyak ruang layar.
- [ ] Gambarnya kurang interaktif.

Apa pertimbangan penting untuk menyesuaikan skala elemen navigasi pada perangkat seluler?

- [ ] Membuatnya sekecil mungkin.
- [x] Memastikan elemen tersebut mudah diketuk (*tap*).
- [ ] Menggunakan warna-warna cerah.
- [ ] Menghapusnya secara keseluruhan.

---

[⬅️ Sebelumnya](3-what-is-the-importance-of-good-visual-hierarchy-in-design.md) | [Selanjutnya ➡️](5-how-does-alignment-work-in-design.md)
