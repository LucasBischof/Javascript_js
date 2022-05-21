//nome: Lucas Bischof Elias RGM: 28092210
let express = require('express');
let app = express();

app.get('/',function(req, res){
    res.send('ROTA GET')
});

app.get('/nm/:Linhas/:Colunas/', function(req,res){   
    
});

app.listen(3000, function(){
    console.log(" Projeto iniciado na porta 3000 http://localhost:3000/");
});



app.get('/Exer1/:num/', function(req,res){
    var num = req.params.num;
    var msg = '';
    function calcMatriz(num){
    
    num = parseInt(num)
    var lin = num;
    var col = lin;
    var maior = 0;
    
    var matriz = new Array(col); 
    var matrizM =new Array(col);
    for (var i = 0; i < col; i++) 
    {
        matriz[i] = new Array(lin); 
        matrizM[i] = new Array(lin); 
    }
    for(linha=0;linha<lin;linha++)
    {
        for(coluna=0;coluna<col;coluna++){

            matriz[linha][coluna]=(Math.round(Math.random()*10))
           
        }
    }
    for(linha=0;linha<lin;linha++)
    {
        for(coluna=0;coluna<col;coluna++){

            msg = msg + matriz[linha][coluna]+"|"
            
        }
        msg = msg+"<br/>"
    }
    for(linha=0;linha<lin;linha++)
    {
        for(coluna=0;coluna<col;coluna++) {
            
            if(matriz[linha][coluna]> maior){
                maior=matriz[linha][coluna]
            }
          
        }
    
    }
    for(linha=0;linha<lin;linha++)
    {
        for(coluna=0;coluna<col;coluna++) {
           
            matrizM[linha][coluna]=maior*matriz[linha][coluna]
        }
    
    }
    for(linha=0;linha<lin;linha++)
    {
        for(coluna=0;coluna<col;coluna++){
		
            msg = msg + matrizM[linha][coluna]+"|"
            
        }
        msg = msg+"<br/>"
    }
return msg
}

  res.send(calcMatriz(num));

});
