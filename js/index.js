document.addEventListener('DOMContentLoaded', function() {

   
    const consumoCarne = {
        homens: 500,
        mulheres: 300,
        criancas: 200
    };

     const consumoFrango = {
        homens: 200,
        mulheres: 200,
        criancas: 100
    };

     const consumoLinguica = {
        homens: 200,
        mulheres: 200,
        criancas: 200
    };

     const consumoRefrigerante = {
        homens: 300,
        mulheres: 400,
        criancas: 200
    };

     const consumoCerveja = {
        homens: 800,
        mulheres: 500,
        criancas: 0
    };


const formChurrasco = document.getElementById('churrasco');


formChurrasco.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const valorHomens = parseInt(document.getElementById('valor1').value);
    const valorMulheres = parseInt(document.getElementById('valor2').value);
    const valorCriancas = parseInt(document.getElementById('valor3').value);

    const totalCarne = ((consumoCarne.homens * valorHomens) +
                       (consumoCarne.mulheres * valorMulheres) +
                       (consumoCarne.criancas * valorCriancas)) / 1000;

    const totalFrango = ((consumoFrango.homens * valorHomens) +
                       (consumoFrango.mulheres * valorMulheres) +
                       (consumoFrango.criancas * valorCriancas)) / 1000;

    const totalLinguica = ((consumoLinguica.homens * valorHomens) +
                       (consumoLinguica.mulheres * valorMulheres) +
                       (consumoLinguica.criancas * valorCriancas)) / 1000;

    const totalRefrigerante = ((consumoRefrigerante.homens * valorHomens) +
                       (consumoRefrigerante.mulheres * valorMulheres) +
                       (consumoRefrigerante.criancas * valorCriancas)) /1000;

    const totalCerveja = ((consumoCerveja.homens * valorHomens) +
                       (consumoCerveja.mulheres * valorMulheres) +
                       (consumoCerveja.criancas * valorCriancas)) / 1000;


    const paragrafo = document.querySelector('#paragrafo');
    paragrafo.textContent = 'Quantidade de itens a serem comprados:'; 

    const resultadoParagrafo = document.querySelector('#resultado1');
    resultadoParagrafo.textContent = `• Carne: ${totalCarne}kg`;

    const resultadoParagrafo2 = document.querySelector('#resultado2');
    resultadoParagrafo2.textContent = `• Frango: ${totalFrango}kg`;

    const resultadoParagrafo3 = document.querySelector('#resultado3');
    resultadoParagrafo3.textContent = `• Linguiça: ${totalLinguica}kg`;

    const resultadoParagrafo4 = document.querySelector('#resultado4');
    resultadoParagrafo4.textContent = `• Refrigerante: ${totalRefrigerante}l`;

    const resultadoParagrafo5 = document.querySelector('#resultado5');
    resultadoParagrafo5.textContent = `• Cerveja: ${totalCerveja}l`;


    const resultadosAnteriores = document.querySelectorAll('.resultado');
    resultadosAnteriores.forEach(result => result.remove());

});
    
});

