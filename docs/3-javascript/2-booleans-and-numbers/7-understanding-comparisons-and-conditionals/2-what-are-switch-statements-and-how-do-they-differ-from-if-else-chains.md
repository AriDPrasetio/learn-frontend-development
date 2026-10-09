# Apa Itu Pernyataan Switch dan Bagaimana Perbedaannya dari Rantai If/Else?

Pernyataan `switch` dan rantai `if/else if/else` keduanya merupakan struktur kendali alur (*control flow structures*) dalam pemrograman yang memungkinkan kita mengeksekusi blok kode yang berbeda berdasarkan kondisi tertentu. Namun, keduanya memiliki karakteristik dan kasus penggunaan yang berbeda.

Pernyataan `switch` mengevaluasi suatu ekspresi dan mencocokkan nilainya dengan serangkaian klausa `case`. Ketika kecocokan ditemukan, blok kode yang terkait dengan `case` tersebut akan dieksekusi. Berikut adalah struktur dasar dari pernyataan `switch`:

```javascript
switch (expression) {
  case value1:
    // kode yang akan dieksekusi jika expression === value1
    break;
  case value2:
    // kode yang akan dieksekusi jika expression === value2
    break;
  default:
    // kode yang akan dieksekusi jika expression tidak cocok dengan case mana pun
}
```

Pernyataan `break` di akhir setiap `case` sangatlah penting. Pernyataan ini memberi tahu program untuk keluar dari blok `switch` setelah `case` yang cocok dieksekusi. Tanpa `break`, program akan terus mengeksekusi `case` berikutnya, perilaku ini dikenal sebagai *"fall-through"*.

Pernyataan `switch` biasanya digunakan ketika Anda membandingkan satu variabel tunggal terhadap banyak nilai yang memungkinkan. Mereka sangat berguna terutama saat Anda memiliki banyak kondisi potensial untuk diperiksa terhadap satu variabel. Berikut adalah contoh penggunaan pernyataan `switch` untuk hari-hari dalam seminggu:

```javascript
let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}
```

Pernyataan `switch` bisa lebih mudah dibaca dan ringkas ketika menangani banyak nilai yang memungkinkan untuk satu variabel tunggal.

Pernyataan `if/else if` di sisi lain lebih fleksibel. Mereka dapat mengevaluasi kondisi yang kompleks dan variabel yang berbeda di setiap klausa. Hal ini membuatnya cocok untuk cakupan skenario yang lebih luas. Berikut adalah contoh kapan Anda mungkin menggunakan pernyataan `if/else` daripada pernyataan `switch`:

```javascript
let creditScore = 720; 
let annualIncome = 60000; 
let loanAmount = 200000; 

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    eligibilityStatus = "Not eligible due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);
```

Dalam contoh ini, kita memiliki pendapatan tahunan dan skor kredit seseorang, lalu memeriksa jenis pinjaman apa yang memenuhi syarat untuk mereka. Karena kita berurusan dengan evaluasi logika yang lebih kompleks dan banyak variabel, lebih baik menggunakan pernyataan `if/else` di sini daripada pernyataan `switch`.

Perlu dicatat bahwa pernyataan `switch` di JavaScript menggunakan perbandingan ketat (`===`), yang berarti tidak melakukan pemaksaan tipe data (*type coercion*). Hal ini bisa menjadi keuntungan dalam hal prediktabilitas dan menghindari *bug* yang tidak kentara.

Singkatnya, meskipun kedua pernyataan `switch` dan rantai `if/else if` memungkinkan logika percabangan ganda dalam kode Anda, mereka memiliki kelebihan yang berbeda. Pernyataan `switch` unggul dalam menangani banyak nilai yang memungkinkan untuk satu variabel tunggal, sedangkan rantai `if/else if` menawarkan fleksibilitas lebih untuk kondisi yang rumit. Pilihan di antara keduanya sering kali bermuara pada kebutuhan spesifik kode Anda dan preferensi gaya pengkodean pribadi atau tim.

---

## Pertanyaan

### Apa yang terjadi jika Anda menghilangkan pernyataan break dalam switch case?
- [ ] Pernyataan `switch` akan melempar pesan *error*.
- [ ] Program akan langsung keluar dari blok `switch`.
- [x] Kode akan terus berlanjut ke `case` berikutnya, terlepas dari apakah cocok atau tidak (*fall-through*).
- [ ] Tidak terjadi apa-apa, `break` bersifat opsional dalam pernyataan `switch`.

### Manakah dari berikut ini yang merupakan keuntungan utama menggunakan pernyataan switch dibandingkan rantai if/else?
- [ ] Pernyataan `switch` dapat menangani kondisi yang lebih kompleks.
- [ ] Pernyataan `switch` dapat membandingkan banyak variabel.
- [x] Pernyataan `switch` biasanya lebih ringkas untuk membandingkan satu variabel tunggal dengan banyak nilai.
- [ ] Pernyataan `switch` selalu dieksekusi lebih cepat daripada rantai `if/else`.

### Di JavaScript, jenis perbandingan apa yang digunakan oleh pernyataan switch?
- [ ] Kesetaraan longgar (*loose equality*) (`==`).
- [x] Kesetaraan ketat (*strict equality*) (`===`).
- [ ] Lebih besar dari atau sama dengan (`>=`).
- [ ] Lebih kecil dari atau sama dengan (`<=`).

---
[⬅️ Sebelumnya](1-how-do-comparisons-work-with-null-and-undefined-data-types.md) | Selanjutnya ➡️
