/*faça um programa para calcular o valor de uma viagem.

Voce tera 3 variaveis, sendo elas:
1 -  Preço do combustivel;
2 - Gasto médio de combustivel do carro por Km;
3 - Distancia em Km da viagem;

*/
const precoCombustivel = 6.74;
const mediaCombustivel = 10;
var distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / mediaCombustivel;
const gastoCombustivel = litrosConsumidos * precoCombustivel;

console.log('O gasto de combustível para percorrer 100 km com um consumo médio de 10 km/l e um preço do combustível de R$ 6,74 é de R$ $' + gastoCombustivel.toFixed(2));