//nome: Lucas Bischof Elias RGM: 28092210
let express = require('express');
let app = express();

app.get('/',function(req, res){
    res.send('ROTA GET')
});

app.get('/nm/:termos/', function(req,res){   
    
});

app.listen(3000, function(){
    console.log(" Projeto iniciado na porta 3000 http://localhost:3000/");
});



app.get('/Exer2/:termos/', function(req,res){
    let termos = req.params.termos;
    let num1 = 2 
    let num2 = 7
    let num3 = 3
    let i = 4
    let lista =[2,7,3]
    
    while (i<=termos) {
        num1=(num1*2)
        i=(i+1)
        num_vet = lista.push(num1)
        if(i<=termos){
            num2 = (num2*3)
            num_vet = lista.push(num2)
            i = (i+1)
        }if (i !=termos){
            num3 = (num3*4)
            num_vet = lista.push(num3) 
            i=(i+1)
        }
    }
    lista.length = termos
    

  res.send(lista.toString());

});
