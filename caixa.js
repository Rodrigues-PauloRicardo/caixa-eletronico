var saldo = 2000;
var deposito = 500;
var saque20 = 20;
var sairA = '';
var saldoAtual = parseInt(saldo - saque20).toFixed(2);

var opcao = document.getElementById('saldo');
var opcao1 = document.getElementById('saque');
var opcao2 = document.getElementById('deposito');

var saque1 = document.getElementById('saque20');


function saldoA(){  
    if(opcao.value === 'SALDO'){  
    document.getElementById('res').innerHTML = ('Seu saldo é R$ ' + saldo.toFixed(2))
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
function saqueOpcao1(){  
    if(saque1.value === '20,00') {       
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 20,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + saldoAtual);
}
}