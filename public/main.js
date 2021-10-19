const nambah = document.getElementById("nambah");
const ngurang = document.getElementById("ngurang");
const angka = document.getElementById("angka");
const ditambah = document.getElementById("ditambah");
const dikurang = document.getElementById("dikurang");
const num = document.getElementById("num");
let total = 0;
let jumlah = 0;

nambah.addEventListener("click", () =>{
    total++;
    angka.innerHTML = total;
});

ngurang.addEventListener("click", () =>{
    total--;
    angka.innerHTML = total;
});

ditambah.addEventListener("click", () =>{
    jumlah++;
    num.innerHTML = jumlah;
});

dikurang.addEventListener("click", () =>{
    jumlah--;
    num.innerHTML = jumlah;
});
function sukses(){
    alert("Tranksaksi sukses!")
}
