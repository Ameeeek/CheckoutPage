const nambah = document.getElementById("nambah");
const ngurang = document.getElementById("ngurang");
const angka = document.getElementById("angka");
let total = 0;

nambah.addEventListener("click", () =>{
    total++;
    angka.innerHTML = total;
});

ngurang.addEventListener("click", () =>{
    total--;
    angka.innerHTML = total;
});
function sukses(){
    alert("Tranksaksi sukses!")
}
