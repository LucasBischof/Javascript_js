var termos = 5
var n1 = 2;
var n2 = 7;
var n3 = 3;
var vetor = [n1,n2,n3]


   
    for (let i = 1; i <= termos; i++ ){
        
        n1 = n1*2
        vetor.push(n1) 
        n2 = n2*3
        vetor.push(n2) 
        n3 = n3*4
        vetor.push(n3) 
             
    }
    

    for(let j = 0; j <= (termos - 1); j++){
        console.log(vetor[j])
    }