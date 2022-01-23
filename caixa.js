
var saldo = 2000;
var sairA = '';



// SALDO--------------------------------------------------------------
function saldoA(){  
    document.getElementById('res').innerHTML = ('Seu saldo é R$ ' + saldo.toFixed(2))
}
// SAQUES--------------------------------------------------------------
var saque1 = document.getElementById('saque20');
var saque2 = document.getElementById('saque50');
var saque3 = document.getElementById('saque100');
var saque4 = document.getElementById('saque200');
var saque5 = document.getElementById('saque500');

function saqueOpcao1(){  
    if(saque1.value === '20,00') { 
        saqueOpcao2 = 'disable'; 
        saqueOpcao3 = 'disable';
        saqueOpcao4 = 'disable'; 
        saqueOpcao5 = 'disable';           
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 20,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + (saldo-20).toFixed(2));
}
}
function saqueOpcao2(){  
    if(saque2.value === '50,00') { 
        saqueOpcao1 = 'disable'; 
        saqueOpcao3 = 'disable';
        saqueOpcao4 = 'disable'; 
        saqueOpcao5 = 'disable';   
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 50,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + (saldo-50).toFixed(2));
}
}
function saqueOpcao3(){  
    if(saque3.value === '100,00') { 
        saqueOpcao1 = 'disable'; 
        saqueOpcao2 = 'disable'; 
        saqueOpcao4 = 'disable'; 
        saqueOpcao5 = 'disable';           
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 100,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + (saldo-100).toFixed(2));
}
}
function saqueOpcao4(){  
    if(saque4.value === '200,00') { 
        saqueOpcao1 = 'disable'; 
        saqueOpcao2 = 'disable'; 
        saqueOpcao3 = 'disable'; 
        saqueOpcao5 = 'disable';          
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 200,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + (saldo-200).toFixed(2));
}
}
function saqueOpcao5(){  
    if(saque5.value === '500,00') { 
        saqueOpcao1 = 'disable'; 
        saqueOpcao2 = 'disable'; 
        saqueOpcao3 = 'disable'; 
        saqueOpcao4 = 'disable'; 
   document.getElementById('res').innerHTML = ('SALDO ANTERIOR R$ '+ saldo);
   document.getElementById('res1').innerHTML = ('Seu saque foi de R$ 500,00');
   document.getElementById('res2').innerHTML = ('SALDO ATUAL R$ ' + (saldo-500).toFixed(2));
}
}
// DEPÓSITO--------------------------------------------------------------
var opcao2 = document.getElementById('deposito');
function depositoA(){  
}

function confirmarDeposito(){ 
    var input = document.querySelector("#inputDeposito");
    var texto = parseInt(input.value);
    
    if(document.getElementById("inputDeposito").value === ""){
        document.getElementById('res').innerHTML = ('ATENÇÃO!!! Preencha o valor a ser depositado.');                
          }else{
            inputDeposito.style.display="none" ; 
            document.getElementById('botaoConfDeposito').style.display = 'none';           
            document.getElementById('res').innerHTML = ('VALOR DEPÓSITO R$ '+texto + ' - SALDO ATUAL R$ ' +(texto+saldo));          
   
}
}
    

