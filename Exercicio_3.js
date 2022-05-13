//nome: Lucas Bischof Elias RGM: 28092210
let express = require('express');
let app = express();

app.get('/',function(req, res){
    res.send('ROTA GET')
});

app.get('/nm/:maximo/', function(req,res){   
    
});

app.listen(3000, function(){
    console.log(" Projeto iniciado na porta 3000 http://localhost:3000/");
});



app.get('/Exer3/:maximo/', function(req,res){
    let maximo = req.params.maximo;
    let add= 0;
    let lista = new Array ();
    
    for(let j = 1; j < maximo; j++)
    {    
        add++
        function fatorial(fat) { 
            if (fat === 0){
            return 1;
            }
            return fat * fatorial(fat-1);       
        }
        lista.push("Número "+add +" Fatorial "+fatorial(j))
    }
    

  res.send(lista.toString());

});
