function Fruta(nome, cor){
    this.nome = nome;
    this.cor = cor;
    this.gritar = function(param){
        console.log(this[param].toUpperCase() + "!!!");
    }
}

const fruta1 = new Fruta("Banana", "Amarela");
const fruta2 = new Fruta("Morango", "Vermelha");

console.log(fruta1.nome.length);
fruta1.gritar("nome");
fruta1.gritar("cor");
console.log(fruta2.nome.length);
fruta2.gritar("nome");
fruta2.gritar("cor");