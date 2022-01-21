var saldo = 2000;
var deposito = 500;
var saque = -100;
var sairA = '';

var opcao = document.getElementById('saldo');
var opcao1 = document.getElementById('saque');
var opcao2 = document.getElementById('deposito');

function saldoA(){  
    if(opcao.value === 'SALDO'){  
    document.getElementById('res').innerHTML = ('Seu saldo é R$ ' + saldo)
}
}
function saqueA(){  
    if(opcao1.value === 'SAQUE') { 
    document.getElementById('res').innerHTML = ('Seu saque foi de R$ ' + saque)
}
}
function depositoA(){  
    if(opcao2.value === 'DEPOSITO') {
    document.getElementById('res').innerHTML = ('Seu depósito foi de é R$ ' + deposito)
}
}