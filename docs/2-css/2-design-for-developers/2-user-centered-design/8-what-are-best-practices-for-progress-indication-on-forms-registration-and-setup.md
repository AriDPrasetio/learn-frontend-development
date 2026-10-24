# Apa Saja Praktik Terbaik untuk Progress Indication pada Formulir, Registrasi, dan Pengaturan?

**CATATAN**: Beberapa contoh interaktif mungkin menggunakan `CSS` dan `JavaScript` yang belum Anda pelajari. Jangan khawatir untuk mencoba memahami seluruh kodenya. Tujuan dari contoh-contoh ini adalah untuk menunjukkan kepada Anda pratinjau (*preview*) dari konsep-konsep desain ini agar Anda lebih memahami cara kerjanya. Untuk melihat pratinjau, Anda harus mengaktifkan editor interaktif.

`Progress indication` (indikasi kemajuan) adalah cara untuk menunjukkan kepada pengguna seberapa jauh posisi mereka dalam suatu proses. Hal ini dapat digunakan dalam formulir (*forms*), registrasi (*registration*), dan proses penyiapan (*setup*). Tujuannya adalah untuk membantu pengguna memahami di mana posisi mereka dalam proses tersebut dan berapa banyak lagi yang perlu mereka selesaikan.

Sebagai contoh, Anda dapat menggunakan bilah indikasi kemajuan (*progress indication bar*) untuk menunjukkan kepada pengguna apa yang tersisa untuk dikerjakan saat mengisi formulir. Anda tidak ingin menciptakan situasi di mana pengguna harus mengisi formulir yang panjang dan mereka tidak tahu berapa banyak langkah lagi yang perlu diselesaikan. Transparansi adalah kuncinya sehingga pengguna tahu apakah mereka memiliki cukup waktu untuk duduk dan menyelesaikan formulir tersebut atau apakah mereka perlu kembali lagi nanti.

```html
<link rel="stylesheet" href="styles.css">

<form id="multiStepForm">
  <div class="form-progress">
    <label class="progress-label">Form progress</label>
    <div class="progress-container">
      <div class="progress-bar"></div>
      <div class="progress-text">Step 1 of 3</div>
    </div>
  </div>

  <!-- Step 1 -->
  <fieldset class="form-step active">
    <legend>Personal Information</legend>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 2 -->
  <fieldset class="form-step">
    <legend>Address</legend>
    <label for="address">Street Address:</label>
    <input type="text" id="address" name="address" required>

    <label for="city">City:</label>
    <input type="text" id="city" name="city" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 3 -->
  <fieldset class="form-step">
    <legend>Review & Submit</legend>
    <p>Please review your information before submitting.</p>

    <button type="button" class="prev-btn">Previous</button>
    <button type="submit">Submit</button>
  </fieldset>
</form>
<script src="index.js"></script>
```

```css
.form-progress {
  max-width: 500px;
  margin: 20px auto 30px;
  font-family: Arial, sans-serif;
}

.progress-label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.progress-container {
  position: relative;
  background-color: #555; 
  border-radius: 8px;
  height: 30px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
}

.progress-bar {
  background-color: #4caf50;
  height: 100%;
  width: 0; 
  border-radius: 8px 0 0 8px;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  pointer-events: none;
  user-select: none;
}

form {
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0 0 20px;
}

legend {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
  color: #222;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 18px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .form-progress, form {
    max-width: 90%;
    margin: 20px auto;
  }
}
```

```js
const form = document.getElementById('multiStepForm');
const steps = form.querySelectorAll('.form-step');
const progressBar = form.querySelector('.progress-bar');
const progressText = form.querySelector('.progress-text');
const totalSteps = steps.length;

let currentStep = 0;

function updateProgress() {
  const percent = ((currentStep + 1) / totalSteps) * 100;
  progressBar.style.width = percent + '%';
  progressText.textContent = `Step ${currentStep + 1} of ${totalSteps}`;
}

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
  updateProgress();
}

form.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

form.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

showStep(currentStep);

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Form submitted!');
});
```

Saat merancang bagian `progress indication`, ada beberapa praktik terbaik yang perlu diingat. Pertimbangan pertama adalah menjaganya tetap sederhana. Anda tidak ingin membebani pengguna dengan terlalu banyak informasi yang membuat mereka frustrasi dan meninggalkan situs.

Pertimbangan kedua adalah memungkinkan pengguna untuk kembali ke langkah sebelumnya. Ini penting karena pengguna mungkin ingin kembali dan memeriksa jawaban mereka sebelumnya atau membuat perubahan.

Pertimbangan lain adalah membuat bagian `progress indication` mudah ditemukan. Jika pengguna tidak dapat menemukannya, mereka tidak akan tahu seberapa jauh progres mereka dalam proses tersebut.

Pertimbangan terakhir adalah memiliki judul bagian, persentase, atau langkah-langkah yang jelas. Jika Anda hanya memiliki bilah kemajuan (*progress bar*) tanpa konteks, pengguna tidak akan tahu apa artinya.

```html
<link rel="stylesheet" href="styles.css">

<form id="progressForm">
  <div class="form-progress" aria-label="Form progress">
    <label class="progress-label">Step <span id="currentStep">1</span> of <span id="totalSteps">4</span> (<span id="percentage">25%</span>)</label>
    <div class="progress-container" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25">
      <div class="progress-bar"></div>
    </div>
  </div>

  <!-- Step 1 -->
  <fieldset class="form-step active">
    <legend>Basic Information</legend>
    <p>Please enter your basic information.</p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 2 -->
  <fieldset class="form-step">
    <legend>Contact Details</legend>
    <p>How can we reach you?</p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 3 -->
  <fieldset class="form-step">
    <legend>Address</legend>
    <p>Where do you live?</p>
    <label for="address">Street:</label>
    <input type="text" id="address" name="address" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 4 -->
  <fieldset class="form-step">
    <legend>Review</legend>
    <p>Review your answers before submitting.</p>

    <button type="button" class="prev-btn">Previous</button>
    <button type="submit">Submit</button>
  </fieldset>
</form>
<script src="index.js"></script>
```

```css
.form-progress {
  max-width: 500px;
  margin: 20px auto 30px;
  font-family: Arial, sans-serif;
}

.progress-label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.progress-container {
  position: relative;
  background-color: #555;
  border-radius: 8px;
  height: 30px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
}

.progress-bar {
  background-color: #4caf50;
  height: 100%;
  width: 0;
  border-radius: 8px 0 0 8px;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  pointer-events: none;
  user-select: none;
}

form {
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0 0 20px;
}

legend {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
  color: #222;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 18px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .form-progress, form {
    max-width: 90%;
    margin: 20px auto;
  }
}
```

```js
const form = document.getElementById('progressForm');
const steps = form.querySelectorAll('.form-step');
const progressBar = form.querySelector('.progress-bar');
const currentStepSpan = document.getElementById('currentStep');
const totalStepsSpan = document.getElementById('totalSteps');
const percentageSpan = document.getElementById('percentage');

const totalSteps = steps.length;
let currentStep = 0;

totalStepsSpan.textContent = totalSteps;

function updateProgress() {
  const percent = Math.round(((currentStep + 1) / totalSteps) * 100);
  progressBar.style.width = percent + '%';
  currentStepSpan.textContent = currentStep + 1;
  percentageSpan.textContent = percent + '%';

  // Update ARIA attribute
  form.querySelector('.progress-container').setAttribute('aria-valuenow', percent);
}

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
  updateProgress();
}

form.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

form.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Form submitted! Thanks!');
});

showStep(currentStep);
```

Ini hanyalah beberapa praktik terbaik yang perlu diingat saat merancang `progress indication` pada formulir, registrasi, dan proses pengaturan. Pelajari beberapa contoh di situs-situs web besar dan lihat bagaimana mereka menerapkan `progress indication`. Kemudian uji desain Anda dengan pengguna nyata untuk melihat seberapa baik kinerjanya.

## Pertanyaan (Questions)

Apa tujuan utama menggunakan `progress indication` dalam proses formulir atau registrasi?

- [ ] Untuk menghibur pengguna saat mereka mengisi formulir.
- [x] Untuk memberi tahu pengguna tentang seberapa jauh posisi mereka dalam proses tersebut dan apa yang tersisa untuk dilakukan.
- [ ] Untuk mengurangi jumlah langkah dalam proses.
- [ ] Untuk mempercepat proses pengiriman (*submission*) formulir.

Mengapa penting untuk mengizinkan pengguna kembali ke langkah sebelumnya dalam formulir atau proses registrasi?

- [x] Untuk memungkinkan pengguna mengubah jawaban mereka atau meninjau isian sebelumnya.
- [ ] Untuk membuat formulir menjadi lebih rumit.
- [ ] Untuk membatasi jumlah langkah dalam proses.
- [ ] Untuk meningkatkan waktu yang dihabiskan pengguna di situs.

Apa yang harus Anda pertimbangkan saat menempatkan bagian `progress indication` di halaman web?

- [ ] Bagian tersebut harus dibuat sekecil mungkin agar tidak mengalihkan perhatian pengguna.
- [x] Bagian tersebut harus mudah ditemukan dan diberi label yang jelas dengan konteks seperti judul bagian atau persentase.
- [ ] Bagian tersebut harus disembunyikan sampai pengguna mencapai langkah terakhir.
- [ ] Bagian tersebut hanya boleh menyertakan bilah kemajuan visual tanpa teks.

---

[⬅️ Sebelumnya](7-what-are-best-practices-for-designing-modal-dialogs.md) | [Selanjutnya ➡️](9-what-are-best-practices-for-designing-shopping-carts.md)
