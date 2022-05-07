
let numA=[2]
let numB=[2]
matriz=[[],[]];
for(linha=0;linha<numA;linha++)
{
    for(coluna=0;coluna<numB;coluna++){
        matriz[linha][coluna] = coluna + 1;
    }
}

for(linha=0;linha<numA;linha++)
{
    for(coluna=0;coluna<numB;coluna++){
        console.log(matriz[linha][coluna]);
    }
}
   