const nambah = document.getElementById("nambah");
const ngurang = document.getElementById("ngurang");
const angka = document.getElementById("angka");
let total = 0;

nambah.addEventListener("mousedown", () =>{
    total++;
    angka.innerHTML = total;
});

ngurang.addEventListener("mousedown", () =>{
    total--;
    angka.innerHTML = total;
});

// window.onload = function(){
//     tambah();
//     function tambah(){
//         total++;
//         angka.innerHTML = total;
//         console.log(total)
//     };
//     // kurang();
//     // function kurang(){
//     //     total--;
//     //     angka.innerHTML = total;
//     //     console.log(total)
//     // }
// };
