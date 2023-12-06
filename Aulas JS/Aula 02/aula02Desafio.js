const etanolPreco = 5.79;
const gasolinaPreco = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';


const litrosConsumidos = distanciaEmKm / kmPorLitros;

if(tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * etanolPreco;
    console.log(valorGasto.toFixed(2));
}else {
    const valorGasto = litrosConsumidos * gasolinaPreco;
    console.log(valorGasto.toFixed(2));
}