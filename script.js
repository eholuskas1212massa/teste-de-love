
var botao = document.getElementById("rolas");
var texto1 = document.getElementById("nome1");
let texto2 = document.getElementById("nome2");


botao.onclick = function(){
    botao.disable=true;
    document.getElementById("show1").innerText = texto2.value;
    document.getElementById("show2").innerText = texto1.value;
    document.getElementById("percem").innerText = Math.floor(Math.random()*101)+"%";
}