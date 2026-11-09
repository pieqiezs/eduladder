
const initialQuestions = [
 {
  "id": 1,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Urutan langkah logis untuk menyelesaikan suatu masalah disebut...",
  "options": [
   "Algoritma",
   "Variabel",
   "Konstanta",
   "Kompiler"
  ],
  "correct": 0,
  "answer": "Algoritma",
  "explain": "Algoritma adalah urutan langkah yang logis dan terstruktur untuk menyelesaikan suatu masalah."
 },
 {
  "id": 2,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Tempat menyimpan data yang nilainya bisa berubah disebut...",
  "options": [
   "Konstanta",
   "Variabel",
   "Operator",
   "Komentar"
  ],
  "correct": 1,
  "answer": "Variabel",
  "explain": "Variabel digunakan untuk menyimpan nilai data yang dapat berubah selama eksekusi program."
 },
 {
  "id": 3,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Tipe data untuk bilangan bulat di Python adalah...",
  "options": [
   "str",
   "float",
   "int",
   "bool"
  ],
  "correct": 2,
  "answer": "int",
  "explain": "Tipe data `int` (integer) digunakan untuk merepresentasikan bilangan bulat di Python."
 },
 {
  "id": 4,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Fungsi untuk menampilkan output di Python adalah...",
  "options": [
   "input()",
   "show()",
   "write()",
   "print()"
  ],
  "correct": 3,
  "answer": "print()",
  "explain": "Fungsi `print()` di Python digunakan untuk mencetak teks atau nilai variabel ke konsol/layar."
 },
 {
  "id": 5,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Data \"Halo\" termasuk tipe data...",
  "options": [
   "int",
   "string",
   "float",
   "boolean"
  ],
  "correct": 1,
  "answer": "string",
  "explain": "Teks yang diapit tanda petik seperti \"Halo\" merupakan tipe data string."
 },
 {
  "id": 6,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Simbol komentar satu baris di Python adalah...",
  "options": [
   "//",
   "/*",
   "#",
   "--"
  ],
  "correct": 2,
  "answer": "#",
  "explain": "Di Python, tanda pagar `#` digunakan untuk membuat komentar satu baris."
 },
 {
  "id": 7,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Hasil dari 5 + 3 adalah...",
  "options": [
   "8",
   "53",
   "15",
   "2"
  ],
  "correct": 0,
  "answer": "8",
  "explain": "Operasi penjumlahan aritmatika antara 5 dan 3 menghasilkan 8."
 },
 {
  "id": 8,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Simbol belah ketupat pada flowchart menandakan...",
  "options": [
   "Proses",
   "Awal program",
   "Output",
   "Keputusan"
  ],
  "correct": 3,
  "answer": "Keputusan",
  "explain": "Simbol belah ketupat (decision) digunakan untuk menunjukkan percabangan atau pengambilan keputusan."
 },
 {
  "id": 9,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Fungsi input() dipakai untuk...",
  "options": [
   "Menampilkan teks",
   "Membaca data dari pengguna",
   "Menghapus data",
   "Menghitung data"
  ],
  "correct": 1,
  "answer": "Membaca data dari pengguna",
  "explain": "Fungsi `input()` digunakan untuk menerima masukan data dari pengguna melalui keyboard."
 },
 {
  "id": 10,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Tipe data yang hanya bernilai True atau False adalah...",
  "options": [
   "int",
   "string",
   "boolean",
   "float"
  ],
  "correct": 2,
  "answer": "boolean",
  "explain": "Tipe data boolean hanya memiliki dua kemungkinan nilai, yaitu True atau False."
 },
 {
  "id": 11,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Hasil dari 10 % 3 adalah...",
  "options": [
   "1",
   "3",
   "0",
   "3.33"
  ],
  "correct": 0,
  "answer": "1",
  "explain": "Operator `%` (modulo) menghasilkan sisa pembagian. 10 dibagi 3 menghasilkan 3 sisa 1."
 },
 {
  "id": 12,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Bahasa yang dipahami langsung oleh komputer adalah...",
  "options": [
   "Bahasa Python",
   "Bahasa Inggris",
   "Bahasa pseudocode",
   "Bahasa mesin"
  ],
  "correct": 3,
  "answer": "Bahasa mesin",
  "explain": "Bahasa mesin (dalam bentuk biner 0 dan 1) adalah satu-satunya bahasa yang langsung dipahami oleh CPU."
 },
 {
  "id": 13,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Nama variabel yang benar di Python adalah...",
  "options": [
   "1nilai",
   "nilai_siswa",
   "nilai siswa",
   "nilai-siswa"
  ],
  "correct": 1,
  "answer": "nilai_siswa",
  "explain": "Nama variabel di Python tidak boleh diawali angka, tidak boleh mengandung spasi atau tanda hubung. Penggunaan garis bawah (`nilai_siswa`) adalah valid."
 },
 {
  "id": 14,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Simbol oval pada flowchart menandakan...",
  "options": [
   "Proses",
   "Input data",
   "Awal atau akhir program",
   "Percabangan"
  ],
  "correct": 2,
  "answer": "Awal atau akhir program",
  "explain": "Simbol oval (terminator) digunakan untuk menandai titik awal (start) atau akhir (stop) suatu algoritma pada flowchart."
 },
 {
  "id": 15,
  "level": "mudah",
  "type": "question",
  "format": "mcq",
  "text": "Hasil dari print(2 * 4) adalah...",
  "options": [
   "8",
   "6",
   "24",
   "2"
  ],
  "correct": 0,
  "answer": "8",
  "explain": "Operasi perkalian 2 * 4 menghasilkan 8."
 },
 {
  "id": 16,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\nx = 7\ny = 2\nprint(x // y)",
  "options": [
   "3.5",
   "2",
   "3",
   "1"
  ],
  "correct": 2,
  "answer": "3",
  "explain": "Operator `//` adalah pembagian bulat (floor division). 7 // 2 menghasilkan 3."
 },
 {
  "id": 17,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output dari print(2 ** 3)?",
  "options": [
   "6",
   "8",
   "5",
   "23"
  ],
  "correct": 1,
  "answer": "8",
  "explain": "Operator `**` digunakan untuk perpangkatan. 2 pangkat 3 (2³) adalah 8."
 },
 {
  "id": 18,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini jika nilai = 70?\nif nilai >= 75:\n    print(\"Lulus\")\nelse:\n    print(\"Remedial\")",
  "options": [
   "Lulus",
   "Error",
   "Lulus Remedial",
   "Remedial"
  ],
  "correct": 3,
  "answer": "Remedial",
  "explain": "Karena nilai = 70 kurang dari 75, kondisi `nilai >= 75` bernilai False, sehingga blok `else` yang mencetak \"Remedial\" dijalankan."
 },
 {
  "id": 19,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output dari print(type(3.14))?",
  "options": [
   "<class 'int'>",
   "<class 'float'>",
   "<class 'str'>",
   "<class 'bool'>"
  ],
  "correct": 1,
  "answer": "<class 'float'>",
  "explain": "Bilangan desimal 3.14 di Python memiliki tipe data float (`<class 'float'>`)."
 },
 {
  "id": 20,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\nfor i in range(3):\n    print(i)",
  "options": [
   "1 2 3",
   "0 1 2 3",
   "1 2",
   "0 1 2"
  ],
  "correct": 3,
  "answer": "0 1 2",
  "explain": "Fungsi `range(3)` menghasilkan urutan angka mulai dari 0 hingga sebelum 3, yaitu 0, 1, dan 2."
 },
 {
  "id": 21,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Kata kunci untuk menambah kondisi kedua dalam percabangan adalah...",
  "options": [
   "elif",
   "elseif",
   "then",
   "case"
  ],
  "correct": 0,
  "answer": "elif",
  "explain": "Di Python, kata kunci `elif` (singkatan dari else if) digunakan untuk menambah kondisi tambahan dalam percabangan."
 },
 {
  "id": 22,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output dari print(len(\"Informatika\"))?",
  "options": [
   "10",
   "12",
   "11",
   "9"
  ],
  "correct": 2,
  "answer": "11",
  "explain": "Fungsi `len()` mengembalikan jumlah karakter dalam string. Kata \"Informatika\" terdiri dari 11 huruf."
 },
 {
  "id": 23,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\nbuah = [\"apel\", \"jeruk\", \"mangga\"]\nprint(buah[1])",
  "options": [
   "apel",
   "mangga",
   "buah",
   "jeruk"
  ],
  "correct": 3,
  "answer": "jeruk",
  "explain": "Indeks pada list Python dimulai dari 0. `buah[0]` adalah \"apel\", dan `buah[1]` adalah \"jeruk\"."
 },
 {
  "id": 24,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output dari print(int(\"5\") + 3)?",
  "options": [
   "53",
   "8",
   "Error",
   "5"
  ],
  "correct": 1,
  "answer": "8",
  "explain": "Fungsi `int(\"5\")` mengubah string \"5\" menjadi angka 5, lalu ditambah 3 menghasilkan 8."
 },
 {
  "id": 25,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\na = 5\na += 3\nprint(a)",
  "options": [
   "8",
   "3",
   "5",
   "53"
  ],
  "correct": 0,
  "answer": "8",
  "explain": "`a += 3` ekuivalen dengan `a = a + 3`. Jadi 5 + 3 = 8."
 },
 {
  "id": 26,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Hasil dari (5 > 3) and (2 > 4) adalah...",
  "options": [
   "True",
   "Error",
   "False",
   "None"
  ],
  "correct": 2,
  "answer": "False",
  "explain": "Kondisi pertama (5 > 3) bernilai True, tetapi kondisi kedua (2 > 4) bernilai False. Operasi AND membutuhkan kedua kondisi bernilai True agar hasilnya True."
 },
 {
  "id": 27,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Perulangan yang berjalan selama kondisi bernilai benar adalah...",
  "options": [
   "for",
   "while",
   "if",
   "def"
  ],
  "correct": 1,
  "answer": "while",
  "explain": "Perulangan `while` terus mengeksekusi blok kode selama kondisi yang ditentukan bernilai True."
 },
 {
  "id": 28,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Kata kunci untuk membuat fungsi di Python adalah...",
  "options": [
   "function",
   "fun",
   "define",
   "def"
  ],
  "correct": 3,
  "answer": "def",
  "explain": "Kata kunci `def` digunakan untuk mendefinisikan sebuah fungsi di Python."
 },
 {
  "id": 29,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output dari print(\"5\" + \"3\")?",
  "options": [
   "8",
   "Error",
   "53",
   "15"
  ],
  "correct": 2,
  "answer": "53",
  "explain": "Operator `+` pada string melakukan penggabungan (konkatenasi), sehingga \"5\" + \"3\" menghasilkan \"53\"."
 },
 {
  "id": 30,
  "level": "sedang",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\ntotal = 0\nfor i in range(1, 4):\n    total += i\nprint(total)",
  "options": [
   "6",
   "10",
   "3",
   "9"
  ],
  "correct": 0,
  "answer": "6",
  "explain": "Perulangan menjumlahkan nilai `i` dari 1, 2, hingga 3 (range(1, 4)). Total = 1 + 2 + 3 = 6."
 },
 {
  "id": 31,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\nfor i in range(2, 10, 3):\n    print(i, end=\" \")",
  "options": [
   "2 5 8 11",
   "2 5 8",
   "2 4 6 8",
   "3 6 9"
  ],
  "correct": 1,
  "answer": "2 5 8",
  "explain": "`range(2, 10, 3)` dimulai dari 2 dengan langkah 3 hingga sebelum 10, yaitu 2, 5, dan 8."
 },
 {
  "id": 32,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\nx = 10\nwhile x > 5:\n    x -= 2\nprint(x)",
  "options": [
   "5",
   "6",
   "3",
   "4"
  ],
  "correct": 3,
  "answer": "4",
  "explain": "Nilai x berkurang 2 pada setiap iterasi: 10 -> 8 -> 6 -> 4. Saat x = 4, perulangan berhenti karena 4 > 5 bernilai False."
 },
 {
  "id": 33,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\ndef f(a, b):\n    return a * b + 1\nprint(f(2, 3))",
  "options": [
   "6",
   "7",
   "8",
   "5"
  ],
  "correct": 1,
  "answer": "7",
  "explain": "Fungsi mengembalikan nilai `a * b + 1`. Dengan a = 2 dan b = 3, maka (2 * 3) + 1 = 7."
 },
 {
  "id": 34,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\nangka = [4, 8, 15, 16]\nprint(angka[-1] + angka[0])",
  "options": [
   "19",
   "12",
   "20",
   "31"
  ],
  "correct": 2,
  "answer": "20",
  "explain": "`angka[-1]` mengacu pada elemen terakhir (16) dan `angka[0]` mengacu pada elemen pertama (4). 16 + 4 = 20."
 },
 {
  "id": 35,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Berapa kali print dijalankan pada kode ini?\nfor i in range(1, 4):\n    for j in range(1, 3):\n        print(i, j)",
  "options": [
   "5",
   "6",
   "3",
   "8"
  ],
  "correct": 1,
  "answer": "6",
  "explain": "Perulangan luar berjalan 3 kali (i = 1, 2, 3) dan perulangan dalam berjalan 2 kali (j = 1, 2). Total dieksekusi: 3 * 2 = 6 kali."
 },
 {
  "id": 36,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\nx = 8\nif x % 2 == 0 and x > 10:\n    print(\"A\")\nelif x % 2 == 0:\n    print(\"B\")\nelse:\n    print(\"C\")",
  "options": [
   "B",
   "A",
   "C",
   "A B"
  ],
  "correct": 0,
  "answer": "B",
  "explain": "Kondisi pertama `8 % 2 == 0 and 8 > 10` bernilai False. Kondisi kedua `elif 8 % 2 == 0` bernilai True, sehingga mencetak \"B\"."
 },
 {
  "id": 37,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output dari print(\"Python\"[1:4])?",
  "options": [
   "Pyt",
   "ytho",
   "yth",
   "tho"
  ],
  "correct": 2,
  "answer": "yth",
  "explain": "Slicing `[1:4]` mengambil karakter dari indeks 1 hingga sebelum indeks 4, yaitu karakter indeks 1 ('y'), 2 ('t'), dan 3 ('h')."
 },
 {
  "id": 38,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Kode berikut menghasilkan error karena...\nif x > 5:\nprint(\"besar\")",
  "options": [
   "Variabel x belum dibuat",
   "Tanda titik dua salah",
   "Fungsi print salah",
   "Baris print tidak diberi indentasi"
  ],
  "correct": 3,
  "answer": "Baris print tidak diberi indentasi",
  "explain": "Python menggunakan indentasi (spasi/tab) untuk menentukan blok kode. Baris `print(\"besar\")` setelah `if` memerlukan indentasi."
 },
 {
  "id": 39,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Untuk mencari nilai terbesar dalam list, nilai awal variabel maks sebaiknya...",
  "options": [
   "Elemen pertama list",
   "Selalu 0",
   "Selalu 1",
   "Elemen terakhir list"
  ],
  "correct": 0,
  "answer": "Elemen pertama list",
  "explain": "Inisialisasi awal variabel maksimum dengan elemen pertama list memastikan bahwa algoritma bekerja dengan benar meskipun semua elemen bernilai negatif."
 },
 {
  "id": 40,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\ns = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        s += i\nprint(s)",
  "options": [
   "55",
   "25",
   "30",
   "20"
  ],
  "correct": 2,
  "answer": "30",
  "explain": "Kode ini menjumlahkan bilangan genap dari 1 sampai 10 (yaitu 2 + 4 + 6 + 8 + 10 = 30)."
 },
 {
  "id": 41,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\ndef tambah(a, b):\n    hasil = a + b\n \nx = tambah(2, 3)\nprint(x)",
  "options": [
   "5",
   "None",
   "0",
   "Error"
  ],
  "correct": 1,
  "answer": "None",
  "explain": "Fungsi `tambah` tidak memiliki klausa `return`, sehingga secara bawaan mengembalikan nilai `None`."
 },
 {
  "id": 42,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Hasil dari not (True and False) or False adalah...",
  "options": [
   "False",
   "None",
   "Error",
   "True"
  ],
  "correct": 3,
  "answer": "True",
  "explain": "(True and False) = False. not (False) = True. True or False = True."
 },
 {
  "id": 43,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\na, b = 0, 1\nfor _ in range(5):\n    a, b = b, a + b\nprint(a)",
  "options": [
   "3",
   "8",
   "5",
   "13"
  ],
  "correct": 2,
  "answer": "5",
  "explain": "Kode ini menghitung deret Fibonacci. Iterasi 1: (1,1), Iterasi 2: (1,2), Iterasi 3: (2,3), Iterasi 4: (3,5), Iterasi 5: (5,8). Nilai `a` akhir adalah 5."
 },
 {
  "id": 44,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa yang terjadi pada kode ini?\ni = 1\nwhile i < 5:\n    print(i)",
  "options": [
   "Mencetak 1 sampai 4",
   "Mencetak 1 sampai 5",
   "Tidak mencetak apa pun",
   "Perulangan tidak pernah berhenti"
  ],
  "correct": 3,
  "answer": "Perulangan tidak pernah berhenti",
  "explain": "Variabel `i` tidak pernah diubah (di-increment) di dalam perulangan, sehingga syarat `i < 5` selalu True dan terjadi infinite loop."
 },
 {
  "id": 45,
  "level": "sulit",
  "type": "question",
  "format": "mcq",
  "text": "Apa output kode ini?\nkata = \"kode\"\nhasil = \"\"\nfor h in kata:\n    hasil = h + hasil\nprint(hasil)",
  "options": [
   "kode",
   "edok",
   "kdoe",
   "eodk"
  ],
  "correct": 1,
  "answer": "edok",
  "explain": "Penggabungan `h + hasil` membalikkan urutan karakter pada kata \"kode\", sehingga menghasilkan \"edok\"."
 }
];
let questions = [...initialQuestions];
let editingId = null, mode = "solo", level = "mudah", players = [], current = 0, turn = 0, diceValue = 1, gameOver = false, lastRoll = false, questionCounter = 0, usedQuestionIds = new Set(), lastQuestion = null;
const PCOL=['#3157d5','#ff766e','#16a36a','#e69a14','#8664db'];
// Tangga pendek (naik 11-14 petak); kepala ular = petak tantangan
const cellRC=n=>{const r=Math.floor((n-1)/10),i=(n-1)%10;return[r,r%2?9-i:i];};
const cellN=(r,c)=>r%2?r*10+10-c:r*10+c+1;
const above=n=>{const[r,c]=cellRC(n);return cellN(r+1,c);};
const below=n=>{const[r,c]=cellRC(n);return cellN(r-1,c);};
const ladders={},snakes={};
[3,8,22,31,47,53,72,77].forEach(n=>ladders[n]=above(n));
[26,38,63,74,88,95,99].forEach(n=>snakes[n]=below(n));
const reserved=new Set([...Object.keys(ladders),...Object.values(ladders),...Object.keys(snakes),...Object.values(snakes)].map(Number));
const eventCells={};
[[5,12,14,25,30,34,40,43,51,56,59,66,71,75,90,93],[7,20,33,42,52,64,76,92],[10,36,46,61,81]].forEach((l,i)=>l.forEach(n=>{if(!reserved.has(n))eventCells[n]=['question','bonus','duel'][i];}));
const diceFaces=["⚀","⚁","⚂","⚃","⚄","⚅"];
let extraTurn=false,lastCorrect=false,DU=null;
const MATERI={p:[['Algoritma','Urutan langkah logis untuk menyelesaikan masalah, misalnya langkah memasak mi instan.'],['Flowchart','Diagram alur: oval = mulai/selesai, persegi = proses, belah ketupat = keputusan.'],['Variabel','Wadah penyimpan nilai, misalnya totalNilai = 80. Beri nama yang jelas dan bermakna.'],['Tipe data','int untuk bilangan bulat, string untuk teks, boolean untuk benar/salah.'],['Kondisi','Perbandingan yang menghasilkan benar atau salah, misalnya nilai >= 75.'],['Percabangan if-else','Blok if berjalan jika kondisi benar, selain itu blok else. Bisa bertingkat dengan else if.']],f:{mudah:'algoritma, flowchart, variabel, dan tipe data',sedang:'menelusuri alur, nilai variabel, dan if-else dasar',sulit:'if-else bertingkat, operator logika, dan mencari bug kondisi'}};
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});if(id==='admin')renderAdminQuestions();}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400);}
function renderNames(){
  const n=mode==='group'?+document.getElementById('playerCount').value:1,old={};
  document.querySelectorAll('[id^=gname]').forEach(e=>old[e.id]=e.value);
  let h='';for(let i=1;i<=n;i++)h+=`<div class="field"><label for="gname${i}">Nama pemain ${i}</label><input id="gname${i}" maxlength="22" value="${escapeHtml(old['gname'+i]||'Pemain '+i)}"></div>`;
  document.getElementById('groupNames').innerHTML=h;
}
function selectMode(m,el){mode=m;document.querySelectorAll('[data-mode]').forEach(x=>x.classList.remove('selected'));el.classList.add('selected');}
function goPemain(){document.getElementById('countField').style.display=mode==='group'?'block':'none';renderNames();showScreen('pemain');}
function selectLevel(l,el){level=l;document.querySelectorAll('[data-level]').forEach(x=>x.classList.remove('selected'));el.classList.add('selected');}
function goLevel(){if(!document.getElementById('gname1').value.trim()){toast('Isi nama pemain 1 terlebih dahulu.');return;}showScreen('level');}
function showMateri(){document.getElementById('materiBody').innerHTML=`<span class="pill">PEMROGRAMAN DASAR</span><h2 style="margin:10px 0">Algoritma, variabel, dan percabangan</h2><div class="notice" style="margin-bottom:14px">Fokus soal level ${level}: ${MATERI.f[level]}.</div><div class="tutorial-list">${MATERI.p.map((x,i)=>`<div class="tutorial-item"><div class="num">${i+1}</div><div><b>${x[0]}</b><p>${x[1]}</p></div></div>`).join('')}</div>`;showScreen('materi');}
function startGame(){
  const n=mode==='group'?+document.getElementById('playerCount').value:1,names=[];
  for(let i=1;i<=n;i++)names.push((document.getElementById('gname'+i).value||'').trim()||'Pemain '+i);
  if(mode==='solo')names.push('Bot Edu');
  players=names.map((name,i)=>({name,pos:1,score:0,correct:0,answered:0,bot:mode==='solo'&&i===1}));
  current=0;turn=0;diceValue=1;gameOver=false;lastRoll=false;extraTurn=false;questionCounter=0;usedQuestionIds=new Set();lastQuestion=null;
  document.getElementById('gameLevelPill').textContent='LEVEL '+level.toUpperCase();
  document.getElementById('diceFace').textContent='🎲';document.getElementById('rollHint').textContent='Tekan tombol untuk jalan.';document.getElementById('activity').textContent='Permainan dimulai. Semangat!';
  showScreen('game');renderBoard();renderStats();updateTurn();
}
function cellType(n){if(ladders[n])return 'ladder';if(snakes[n])return 'snake';return eventCells[n]||'';}
function iconFor(t){return ({question:'📝',bonus:'🎁',duel:'⚔️',ladder:'🪜',snake:'🐍',start:'🚩',finish:'🏁'})[t]||'';}
function renderBoard(){
  const board=document.getElementById('board');board.innerHTML='';
  for(let row=9;row>=0;row--){
    for(let col=0;col<10;col++){
      const n=row%2===0?row*10+col+1:row*10+(10-col),c=document.createElement('div');
      let t=cellType(n);if(n===1)t='start';if(n===100)t='finish';
      const lab=ladders[n]?'→'+ladders[n]:snakes[n]?'UJI →'+snakes[n]:({question:'SOAL',bonus:'BONUS',duel:'DUEL'})[t]||'';
      c.className='cell '+t;c.dataset.cell=n;
      c.innerHTML=`<span class="n">${n}</span>${t?`<span class="type">${iconFor(t)}</span>`:''}${lab?`<span class="event-label">${lab}</span>`:''}`;
      const here=players.map((p,i)=>({p,i})).filter(x=>x.p.pos===n);
      if(here.length){const w=document.createElement('div');w.className='tokens';here.forEach(x=>{const k=document.createElement('span');k.className='token';k.style.background=PCOL[x.i];k.textContent=x.p.bot?'B':x.i+1;w.appendChild(k);});c.appendChild(w);}
      board.appendChild(c);
    }
  }
}
function renderStats(){
  document.getElementById('scorePanel').innerHTML=players.map((p,i)=>`<div class="score-line"><span><span style="color:${PCOL[i]}">●</span> ${escapeHtml(p.name)}</span><b style="color:${p.score<0?'#d33b36':'inherit'}">${p.score<0?'−'+Math.abs(p.score):p.score} poin</b></div>`).join('');
  document.getElementById('progressPanel').innerHTML=players.map(p=>`<div style="margin:10px 0"><div class="row between" style="font-size:.82rem"><b>${escapeHtml(p.name)}</b><span>Petak ${p.pos}/100</span></div><div class="progressbar"><div style="width:${p.pos}%"></div></div></div>`).join('');
}
function updateTurn(){
  if(gameOver)return;
  const p=players[current];document.getElementById('turnLabel').textContent='Giliran: '+p.name;document.getElementById('activeName').textContent=p.name;
  const btn=document.getElementById('rollBtn');btn.disabled=p.bot||lastRoll;btn.textContent=lastRoll?'Selesaikan kartu dulu':(p.bot?'Giliran bot…':'Lempar dadu');
  if(p.bot&&!lastRoll)setTimeout(doRoll,750);
}
function rollDice(){if(!players[current].bot)doRoll();}
function doRoll(){
  if(gameOver||lastRoll)return;
  const p=players[current],old=p.pos;diceValue=Math.floor(Math.random()*6)+1;lastRoll=true;
  document.getElementById('diceFace').textContent=diceFaces[diceValue-1];document.getElementById('rollHint').textContent=p.name+' mendapat '+diceValue+'.';
  p.pos=Math.min(100,p.pos+diceValue);
  document.getElementById('activity').textContent=`${p.name} mendapat ${diceValue} dan bergerak dari ${old} ke ${p.pos}.`;
  renderBoard();renderStats();document.getElementById('rollBtn').disabled=true;document.getElementById('rollBtn').textContent='Memproses…';
  setTimeout(resolveLanding,500);
}
function resolveLanding(){
  const p=players[current],pos=p.pos;
  if(pos>=100)return finishGame(current);
  if(ladders[pos]){const to=ladders[pos];document.getElementById('activity').textContent=`${p.name} naik tangga dari petak ${pos} ke ${to}!`;toast('🪜 Naik tangga ke petak '+to);setTimeout(()=>{p.pos=to;afterAction();},900);return;}
  if(snakes[pos]){askQuestion('challenge');return;}
  const t=eventCells[pos];
  if(t==='question')askQuestion('question');else if(t==='bonus')bonusSpin();else if(t==='duel')duelEvent();else afterAction();
}
function getQuestion(type){
  const qt=type==='challenge'?'challenge':'question';
  let pool=questions.filter(q=>q.level===level&&q.type===qt);
  if(!pool.length)pool=questions.filter(q=>q.level===level);
  if(!pool.length)pool=questions;
  if(!pool.length)return null;
  let av=pool.filter(q=>!usedQuestionIds.has(q.id));
  if(!av.length){pool.forEach(q=>usedQuestionIds.delete(q.id));av=pool;}
  const q=av[Math.floor(Math.random()*av.length)];usedQuestionIds.add(q.id);return q;
}
function askQuestion(type){
  const q=getQuestion(type);if(!q){showModal('Bank soal kosong','Tambahkan soal melalui Panel Guru terlebih dahulu.','neutral',()=>afterAction());return;}
  lastQuestion=q;questionCounter++;
  const p=players[current],ch=type==='challenge';
  const opts=q.format==='mcq'?`<div class="answer-list">${q.options.map((op,i)=>`<button class="answer-option" onclick="selectAnswer(${i})"><b>${String.fromCharCode(65+i)}.</b> ${escapeHtml(op)}</button>`).join('')}</div>`:`<div class="field"><label>Jawabanmu</label><input id="shortResponse" placeholder="Ketik jawaban singkat..." autocomplete="off"></div>`;
  showCustomModal(`<span class="pill">${ch?'🐍⚡ TANTANGAN · benar +15 & selamat · salah turun ular':'📝 KARTU SOAL · benar +10 · salah −5'}</span><h2 id="modalTitle">${ch?'Kepala ular! Jawab untuk selamat':'Saatnya menjawab!'}</h2><div class="muted">Pemain: ${escapeHtml(p.name)} · Level ${level}</div><div class="question-text">${escapeHtml(q.text)}</div>${opts}<div id="answerFeedback"></div><div class="modal-actions"><button class="btn btn-primary" id="submitAnswer" onclick="submitAnswer('${q.format}','${type}')">Periksa jawaban</button><button class="btn btn-ghost hidden" id="continueAnswer" onclick="continueAfter('${type}')">Lanjutkan</button></div>`);
  window.selectedAnswer=null;
  if(p.bot)setTimeout(()=>{if(q.format==='mcq')selectAnswer(Math.random()<.65?q.correct:(q.correct+1)%q.options.length);else document.getElementById('shortResponse').value=Math.random()<.6?q.answer:'-';submitAnswer(q.format,type);setTimeout(()=>continueAfter(type),2600);},1400);
}
function selectAnswer(i){window.selectedAnswer=i;document.querySelectorAll('.answer-option').forEach((b,j)=>b.classList.toggle('selected',i===j));}
function submitAnswer(format,type){
  const q=lastQuestion,p=players[current];let correct=false;
  if(format==='mcq'){if(window.selectedAnswer==null){toast('Pilih salah satu jawaban dulu.');return;}correct=window.selectedAnswer===q.correct;}
  else{const norm=s=>String(s).trim().toLowerCase().replace(/\s+/g,' ');const v=norm(document.getElementById('shortResponse')?.value||'');if(!v){toast('Tulis jawaban dulu.');return;}correct=v===norm(q.answer);}
  p.answered++;lastCorrect=correct;if(correct){p.correct++;p.score+=type==='challenge'?15:10;}else if(type!=='challenge')p.score-=5;
  const info=type==='challenge'?(correct?'+15 poin. Kamu selamat dari ular!':`Pion turun lewat ular ke petak ${snakes[p.pos]}.`):(correct?'+10 poin.':'−5 poin.');
  const f=document.getElementById('answerFeedback');f.className='feedback '+(correct?'good':'bad');
  f.innerHTML=`<b>${correct?'✅ Benar!':'❌ Belum tepat.'}</b> ${info}<br><b>Pembahasan materi:</b> ${escapeHtml(q.explain||('Jawaban yang diharapkan: '+q.answer))}`;
  document.querySelectorAll('.answer-option').forEach((b,i)=>{b.disabled=true;if(i===q.correct)b.classList.add('correct');else if(i===window.selectedAnswer&&!correct)b.classList.add('wrong');});
  document.getElementById('submitAnswer').classList.add('hidden');document.getElementById('continueAnswer').classList.remove('hidden');
  document.getElementById('activity').textContent=`${p.name} ${correct?'menjawab benar':'perlu mempelajari kembali'} kartu ${type==='challenge'?'tantangan':'soal'}.`;
  renderStats();
}
function continueAfter(type){
  if(!document.getElementById('modalBackdrop').classList.contains('show'))return;
  closeModal();const p=players[current];
  if(type==='challenge'&&!lastCorrect&&snakes[p.pos])p.pos=snakes[p.pos];
  afterAction();
}
function bonusSpin(){
  const p=players[current];
  const outs=[{n:'Maju 3 langkah',x:'Pion maju 3 petak.',mv:1,a:()=>{p.pos=Math.min(100,p.pos+3);}},{n:'Maju 2 langkah',x:'Pion maju 2 petak.',mv:1,a:()=>{p.pos=Math.min(100,p.pos+2);}},{n:'Bonus +10 poin',x:'Kamu mendapat +10 poin.',a:()=>{p.score+=10;}},{n:'Bonus +5 poin',x:'Kamu mendapat +5 poin.',a:()=>{p.score+=5;}},{n:'Giliran ekstra',x:'Kamu boleh melempar dadu lagi.',a:()=>{extraTurn=true;}}];
  const o=outs[Math.floor(Math.random()*outs.length)];
  showCustomModal(`<h2>🎡 Roda bonus</h2><div class="feedback neutral" id="spinBox" style="text-align:center;font-size:1.25rem;font-weight:800">Memutar…</div><div class="modal-actions"><button class="btn btn-primary hidden" id="spinOk">Lanjutkan</button></div>`);
  let k=0;const iv=setInterval(()=>{document.getElementById('spinBox').textContent='🎡 '+outs[k++%outs.length].n;},110);
  setTimeout(()=>{
    clearInterval(iv);const b=document.getElementById('spinBox');b.className='feedback good';
    b.innerHTML=`🎁 ${o.n}<div style="font-size:.95rem;font-weight:500;margin-top:6px">${o.x}${o.mv?' Jika petak tujuan berisi kartu, tetap dikerjakan.':''}</div>`;
    const ok=document.getElementById('spinOk');ok.classList.remove('hidden');
    ok.onclick=()=>{closeModal();o.a();document.getElementById('activity').textContent=`${p.name}: ${o.n}.`;if(o.mv){renderBoard();renderStats();setTimeout(resolveLanding,500);}else afterAction();};
    if(p.bot)setTimeout(()=>ok.click(),1600);
  },1700);
}
function duelEvent(){
  const q=getQuestion('question');if(!q){afterAction();return;}
  DU={q,locked:new Set(),buz:-1,phase:'buzz',t:12,iv:null,to:[],done:false};
  const btns=players.map((p,i)=>`<button class="btn buzz" id="bz${i}" style="background:${PCOL[i]};color:#fff" onclick="duelBuzz(${i})" ${p.bot?'disabled':''}>${escapeHtml(p.name)}${p.bot?'':`<br><small>tombol ${i+1}</small>`}</button>`).join('');
  showCustomModal(`<span class="pill">⚔️ DUEL REBUTAN · tercepat menjawab benar +10</span><h2>Rebut soal ini!</h2><div class="muted" id="duelTimer"></div><div class="question-text">${escapeHtml(q.text)}</div><div id="buzzArea"><div class="muted" id="duelNote" style="margin-bottom:8px">Tekan namamu (atau tombol angka) untuk merebut soal. Pilihan jawaban muncul setelah kamu menekan.</div><div class="buzz-grid">${btns}</div></div><div id="duelOpts"></div><div id="answerFeedback"></div><div class="modal-actions" id="duelActions"></div>`);
  document.addEventListener('keydown',duelKey);
  duelTimerStart();
  players.forEach((p,i)=>{if(p.bot&&Math.random()<.7)DU.to.push(setTimeout(()=>duelBuzz(i),2500+Math.random()*4500));});
}
function duelKey(e){const i=+e.key-1;if(i>=0&&i<players.length&&!players[i].bot)duelBuzz(i);}
function duelTimerStart(){
  clearInterval(DU.iv);DU.t=DU.phase==='buzz'?12:8;
  const show=()=>{const e=document.getElementById('duelTimer');if(e)e.textContent='⏱ '+DU.t+' detik'+(DU.phase==='answer'?' · '+players[DU.buz].name+' menjawab':'');};show();
  DU.iv=setInterval(()=>{DU.t--;show();if(DU.t<=0){if(DU.phase==='buzz')endDuel(-1);else duelWrong();}},1000);
}
function duelBuzz(i){
  if(!DU||DU.done||DU.phase!=='buzz'||DU.locked.has(i))return;
  DU.phase='answer';DU.buz=i;document.getElementById('buzzArea').classList.add('hidden');
  document.getElementById('duelOpts').innerHTML=`<div class="muted"><b>${escapeHtml(players[i].name)}</b> merebut soal! Pilih jawaban:</div><div class="answer-list">${DU.q.options.map((op,j)=>`<button class="answer-option" onclick="duelAnswer(${j})" ${players[i].bot?'disabled':''}>${String.fromCharCode(65+j)}. ${escapeHtml(op)}</button>`).join('')}</div>`;
  duelTimerStart();
  if(players[i].bot)DU.to.push(setTimeout(()=>duelAnswer(Math.random()<.6?DU.q.correct:(DU.q.correct+1)%DU.q.options.length),1200));
}
function duelAnswer(j){if(!DU||DU.done||DU.phase!=='answer')return;if(j===DU.q.correct)endDuel(DU.buz);else duelWrong();}
function duelWrong(){
  const w=players[DU.buz].name;DU.locked.add(DU.buz);
  if(players.every((p,i)=>DU.locked.has(i))){endDuel(-1);return;}
  DU.phase='buzz';DU.buz=-1;document.getElementById('duelOpts').innerHTML='';document.getElementById('buzzArea').classList.remove('hidden');
  document.getElementById('duelNote').textContent=w+' belum tepat. Pemain lain boleh merebut soal!';
  DU.locked.forEach(i=>{const b=document.getElementById('bz'+i);if(b)b.disabled=true;});
  duelTimerStart();
  players.forEach((p,i)=>{if(p.bot&&!DU.locked.has(i)&&Math.random()<.7)DU.to.push(setTimeout(()=>duelBuzz(i),1500+Math.random()*3500));});
}
function endDuel(w){
  if(!DU||DU.done)return;DU.done=true;clearInterval(DU.iv);DU.to.forEach(clearTimeout);document.removeEventListener('keydown',duelKey);
  const q=DU.q;DU.locked.forEach(i=>players[i].answered++);
  if(w>=0){const p=players[w];p.answered++;p.correct++;p.score+=10;}
  document.getElementById('buzzArea').classList.add('hidden');document.getElementById('duelOpts').innerHTML='';document.getElementById('duelTimer').textContent='';
  const f=document.getElementById('answerFeedback');f.className='feedback '+(w>=0?'good':'neutral');
  f.innerHTML=`<b>${w>=0?escapeHtml(players[w].name)+' paling cepat menjawab benar! +10 poin':'Tidak ada yang menjawab benar tepat waktu. Tidak ada poin.'}</b><br>Jawaban: ${escapeHtml(q.answer)}.<br><b>Pembahasan materi:</b> ${escapeHtml(q.explain||'')}`;
  document.getElementById('activity').textContent=w>=0?`${players[w].name} menang duel rebutan.`:'Duel berakhir tanpa pemenang.';
  document.getElementById('duelActions').innerHTML='<button class="btn btn-primary" id="duelOk">Lanjutkan</button>';
  const ok=document.getElementById('duelOk');ok.onclick=()=>{closeModal();renderStats();afterAction();};
  if(players[current].bot)setTimeout(()=>ok.click(),3200);
}


function showModal(title,text,kind,onContinue){showCustomModal(`<h2 id="modalTitle">${title}</h2><div class="feedback ${kind||'neutral'}">${text}</div><div class="modal-actions"><button class="btn btn-primary" id="modalContinue">Lanjutkan</button></div>`);const b=document.getElementById('modalContinue');b.onclick=()=>{closeModal();if(onContinue)onContinue();};if(players[current]&&players[current].bot&&!gameOver)setTimeout(()=>b.click(),1800);}
function showCustomModal(html){document.getElementById('modalContent').innerHTML=html;document.getElementById('modalBackdrop').classList.add('show');}
function closeModal(){document.getElementById('modalBackdrop').classList.remove('show');}
function afterAction(){
  renderBoard();renderStats();lastRoll=false;
  if(players[current].pos>=100){finishGame(current);return;}
  if(extraTurn){extraTurn=false;toast(players[current].name+' mendapat giliran ekstra!');}else{current=(current+1)%players.length;turn++;}
  updateTurn();
}
function finishGame(winnerIndex){
  gameOver=true;const winner=players[winnerIndex];showScreen('result');
  document.getElementById('winnerTitle').textContent=winner.name+' mencapai finish!';
  document.getElementById('resultText').textContent='Permainan selesai. Gunakan ringkasan ini untuk merefleksikan proses belajar.';
  document.getElementById('resultStats').innerHTML=players.map(p=>`<div class="stat"><b>${p.score}</b><span>poin · ${escapeHtml(p.name)}</span><div class="muted" style="font-size:.78rem;margin-top:5px">${p.correct}/${p.answered} jawaban benar</div><div class="muted" style="font-size:.78rem">Petak ${p.pos}</div></div>`).join('');
}
function confirmExit(){showModal('Keluar dari permainan?','Progres sesi ini akan direset jika kamu memulai permainan baru.','neutral',()=>showScreen('home'));}
function escapeHtml(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function toggleQuestionFormat(){const short=document.getElementById('qFormat').value==='short';document.getElementById('mcqFields').classList.toggle('hidden',short);document.getElementById('shortFields').classList.toggle('hidden',!short);}
function resetQuestionForm(){editingId=null;['qText','optA','optB','optC','shortAnswer','qExplain'].forEach(id=>document.getElementById(id).value='');document.getElementById('qLevel').value='mudah';document.getElementById('qType').value='question';document.getElementById('qFormat').value='mcq';document.getElementById('qCorrect').value='0';toggleQuestionFormat();document.getElementById('formTitle').textContent='Tambah soal';}
function saveQuestion(){
  const text=document.getElementById('qText').value.trim(),format=document.getElementById('qFormat').value;
  if(!text){toast('Pertanyaan belum diisi.');return;}
  let options=[],correct=0,answer='';
  if(format==='mcq'){options=['optA','optB','optC'].map(id=>document.getElementById(id).value.trim());if(options.some(x=>!x)){toast('Isi semua pilihan A, B, dan C.');return;}correct=Number(document.getElementById('qCorrect').value);answer=options[correct];}
  else{answer=document.getElementById('shortAnswer').value.trim();if(!answer){toast('Isi jawaban singkat yang benar.');return;}}
  const item={id:editingId||Date.now(),level:document.getElementById('qLevel').value,type:document.getElementById('qType').value,format,text,options,correct,answer,explain:document.getElementById('qExplain').value.trim()||'Pelajari kembali konsep yang berkaitan dengan soal ini.'};
  if(editingId){questions=questions.map(q=>q.id===editingId?item:q);}else questions.push(item);
  resetQuestionForm();renderAdminQuestions();toast('Soal berhasil disimpan pada sesi browser ini.');
}
function editQuestion(id){
  const q=questions.find(x=>x.id===id);if(!q)return;editingId=id;
  document.getElementById('formTitle').textContent='Edit soal';
  document.getElementById('qText').value=q.text;document.getElementById('qLevel').value=q.level;document.getElementById('qType').value=q.type;document.getElementById('qFormat').value=q.format;
  document.getElementById('optA').value=q.options?.[0]||'';document.getElementById('optB').value=q.options?.[1]||'';document.getElementById('optC').value=q.options?.[2]||'';document.getElementById('qCorrect').value=String(q.correct||0);document.getElementById('shortAnswer').value=q.format==='short'?q.answer:'';document.getElementById('qExplain').value=q.explain||'';toggleQuestionFormat();window.scrollTo({top:0,behavior:'smooth'});
}
function deleteQuestion(id){if(!confirm('Hapus soal ini?'))return;questions=questions.filter(q=>q.id!==id);renderAdminQuestions();toast('Soal dihapus.');}
function renderAdminQuestions(){
  const filter=document.getElementById('filterLevel')?.value||'all',list=questions.filter(q=>filter==='all'||q.level===filter);
  document.getElementById('questionCount').textContent=questions.length;
  document.getElementById('questionRows').innerHTML=list.map(q=>`<tr><td><b>${escapeHtml(q.text)}</b><div class="muted">${q.format==='mcq'?'Pilihan ganda':'Isian singkat'} · ${q.type==='challenge'?'Tantangan':'Soal biasa'}</div></td><td>${q.level}</td><td>${escapeHtml(q.answer)}</td><td><div class="row"><button class="btn btn-ghost btn-small" onclick="editQuestion(${q.id})">Edit</button><button class="btn btn-danger btn-small" onclick="deleteQuestion(${q.id})">Hapus</button></div></td></tr>`).join('')||'<tr><td colspan="4" class="muted">Tidak ada soal pada filter ini.</td></tr>';
}
function exportQuestions(){const blob=new Blob([JSON.stringify(questions,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='bank-soal-eduladder.json';a.click();URL.revokeObjectURL(url);}
function importQuestions(event){const file=event.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!Array.isArray(data))throw new Error();questions=data.map((q,i)=>({...q,id:q.id||Date.now()+i}));renderAdminQuestions();toast('Bank soal berhasil diimpor.');}catch(e){toast('File JSON tidak valid.');}};reader.readAsText(file);event.target.value='';}
function initMiniBoard(){const el=document.getElementById('miniBoard');for(let i=1;i<=25;i++){const d=document.createElement('div');d.className='mini-cell';d.textContent=i;el.appendChild(d);}}
initMiniBoard();renderAdminQuestions();renderNames();
