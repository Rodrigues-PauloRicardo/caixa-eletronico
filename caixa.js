var saldo = 2000;
var deposito = 500;

var sairA = '';



var opcao = document.getElementById('saldo');
var opcao1 = document.getElementById('saque');
var opcao2 = document.getElementById('deposito');

var saque1 = document.getElementById('saque20');
var saque2 = document.getElementById('saque50');
var saque3 = document.getElementById('saque100');
var saque4 = document.getElementById('saque200');
var saque5 = document.getElementById('saque500');


function saldoA(){  
    document.getElementById('res').innerHTML = ('Seu saldo é R$ ' + saldo.toFixed(2))
}




function depositoA(){  
    document.getElementById('res').innerHTML = ('Seu depósito foi de é R$ ' + deposito)
}


function saqueOpcao1(){  
    if(saque1.value === '20,00') { 
        saqueOpcao2 = 'enable'; 
        saqueOpcao3 = 'enable';        
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 20,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + (saldo-20).toFixed(2));
}
}
function saqueOpcao2(){  
    if(saque2.value === '50,00') { 
        saqueOpcao1 = 'enable'; 
        saqueOpcao3 = 'enable'; 
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 50,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + (saldo-50).toFixed(2));
}
}
function saqueOpcao3(){  
    if(saque3.value === '100,00') { 
        saqueOpcao1 = 'enable'; 
        saqueOpcao2 = 'enable';         
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 100,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + (saldo-100).toFixed(2));
}
}



