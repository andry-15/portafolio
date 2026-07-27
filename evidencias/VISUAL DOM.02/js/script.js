const btnInc = document.querySelector(".inc");
const btnDis = document.querySelector(".dis");
const btnreset = document.querySelector(".reset");
const botones = document.querySelector(".btn");
const contar = document.querySelector(".contar");

let counts = 0;

btnInc.addEventListener("click", incrementar);
btnDis.addEventListener("click", disminuir);
btnreset.addEventListener("click", reset);

function incrementar(){
counts++;
contar.innerHTML = counts;
if(counts>0){
contar.style.color = "green";
}
if(counts == 0){
    contar.style.color = "black";
    }
}
function disminuir (){
counts --;
contar.innerHTML = counts;
if(counts<0){
contar.style.color = "red";
}
if(counts === 0){
contar.style. color = "black" ;
    }
}

function reset(){
    counts = 0;
    contar.innerHTML = counts;
        contar.style.color = "black"
}