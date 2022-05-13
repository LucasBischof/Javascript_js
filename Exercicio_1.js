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



app.get('/Exer1/:linhas/:colunas/', function(req,res){
    let lin = req.params.linhas;
    let col = req.params.colunas;
 
    
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

        matriz[linha][coluna]=coluna
        matrizM[linha][coluna]=coluna
        
    }
}
for(linha=0;linha<lin;linha++)
{
    for(coluna=0;coluna<col;coluna++) {
        
        var maior=lin-1
        matrizM[linha][coluna]=maior*matrizM[linha][coluna]
        
        
    }
   
}

  res.send(matriz.toString()+ matrizM.toString());

});
