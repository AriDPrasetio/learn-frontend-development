# Bagaimana Cara Bekerja dengan Mengakses Property dari Nested Object dan Array di dalam Object?

Saat bekerja dengan `JavaScript`, Anda akan sering menemui struktur data kompleks yang melibatkan `nested objects` (objek bersarang) dan `arrays` di dalam `objects`. Struktur-struktur ini dapat merepresentasikan data hierarkis yang kaya, namun mereka juga menuntut pemahaman yang jelas tentang cara mengakses dan memanipulasi data di dalamnya. Mari kita jelajahi bagaimana menavigasi struktur bersarang ini secara efektif.

Mengakses `properties` dari `nested objects` melibatkan penggunaan `dot notation` atau `bracket notation`, mirip seperti mengakses `properties` dari `objects` sederhana. Namun, Anda perlu merangkai (*chaining*) pengakses (*accessor*) ini untuk menelusuri lebih dalam ke dalam struktur bersarang tersebut.

Sebagai contoh, mari kita pertimbangkan sebuah `nested object` yang merepresentasikan seseorang dengan informasi kontak:

```javascript
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};
```

Untuk mengakses nomor telepon kantor Alice, Anda dapat merangkai pengakses `property` seperti ini:

```javascript
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person.contact.phone.work); // "098-765-4321"
```

Anda juga dapat menggunakan `bracket notation`, yang sangat berguna ketika nama `property` memuat spasi atau karakter khusus, atau saat Anda menggunakan `variable` untuk mengakses `properties`:

```javascript
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person['contact']['phone']['work']); // "098-765-4321"
```

Sekarang, mari kita lihat bagaimana kita dapat mengakses data di mana salah satu `property` `object` memiliki nilai berupa sebuah `array`. Berikut adalah `object` `person` yang dimodifikasi dan mencakup sebuah `array` berisi alamat:

```javascript
const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};
```

Berikut adalah contoh cara mengakses kota dari alamat kantor Alice:

```javascript
const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};

console.log(person.addresses[1].city); // "Workville"
```

Dalam contoh ini, `person.addresses` merujuk ke `array` alamat. Untuk mengakses alamat kedua di dalam `array` tersebut, kita menggunakan `bracket notation` dan `index` `1`. Kemudian, kita menggunakan `dot notation` untuk mengakses `city` dari `object` alamat tersebut.

Memahami cara mengakses `properties` dalam `nested objects` dan `arrays` sangat penting ketika bekerja dengan struktur data yang kompleks. Pada *workshop* dan *lab* mendatang, Anda akan berkesempatan untuk berlatih bekerja dengan tipe-tipe struktur data seperti ini.

## Pertanyaan (Questions)

Bagaimana cara Anda mengakses nomor telepon kantor (*work phone number*) dari `object` ini?

```javascript
let person = {
    contact: {
        phone: {
            home: "123-456-7890",
            work: "098-765-4321"
        }
    }
};
```

- [ ] person.work
- [ ] person.contact.work
- [x] person.contact.phone.work
- [ ] person[contact][phone][work]

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let person = {
    name: "Alice",
    details: {
        age: 25,
        hobbies: ["reading", "swimming"]
    }
};

console.log(person.details.hobbies[1]);
```

- [ ] reading
- [x] swimming
- [ ] undefined
- [ ] This will throw an error.

Dalam kode berikut, apa yang akan dicatat ke konsol?

```javascript
let data = {
    results: [
        { name: "Alice", score: 95 },
        { name: "Bob", score: 80 },
        { name: "Charlie", score: 90 }
    ]
};

console.log(data.results[1].name);
```

- [ ] Alice
- [x] Bob
- [ ] Charlie
- [ ] undefined

---
[⬅️ Sebelumnya](3-how-to-check-if-an-object-has-a-property.md) | [Selanjutnya ➡️](5-what-is-the-difference-between-primitive-and-non-primitive-data-types.md)
