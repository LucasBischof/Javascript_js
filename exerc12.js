let vetor =[]

function addvetor(vetor){
    if(vetor.length==15)
    {
        console.log(vetor)
    }
    else
    {
        vetor.push(Math.floor(Math.random() * 10))
        addvetor(vetor)
    }
}
addvetor(vetor)

console.log("Vetor crescente:")

for (let i=1; i < vetor.length; i++){
        if(vetor[i]<vetor[i+1]) 
        {
            aux = vetor[i];
            vetor[i]=vetor[i+1];
            vetor[i+1]=aux;
            i= -1;
        } 
         
    }
    
for (let i=1; i < vetor.length; i++)
    {
        console.log(vetor[i]);
    }

console.log("Vetor decrescente:")
    
for (let i=vetor.length; i>0; i--)
    {
        console.log(vetor[i-1]); 
    }