let E = 1.0
let N = 20   
for(i=1; i<=N; ++i){
    num = 1.0/i;
    fat = 1;
    for(j=1; j>i; ++j){ //calculando o fatorial de 1/i
        fat= fat*j;
    }
    console.log(E);
        E = E + 1.0 / fat; //"E" é somado ao fatorial da divisão de 1 por i  
    }
    console.log(`Valor de E = ${E}`);
    
  /*
    
    Por exemplo "E" de 20:
    
    Fatorial de 1/1 (1.000000) = 1
    
    Fatorial de 1/2 (0.500000) = 1
    
    Fatorial de 1/3 (0.333333) = 1
    
    Fatorial de 1/4 (0.250000) = 1
    
    Fatorial de 1/5 (0.200000) = 1
    
    Fatorial de 1/6 (0.166667) = 1
    
    Fatorial de 1/7 (0.142857) = 1
    
    Fatorial de 1/8 (0.125000) = 1
    
    Fatorial de 1/9 (0.111111) = 1
    
    Fatorial de 1/10 (0.100000) = 1
    
    Fatorial de 1/11 (0.090909) = 1
    
    Fatorial de 1/12 (0.083333) = 1
    
    Fatorial de 1/13 (0.076923) = 1
    
    Fatorial de 1/14 (0.071429) = 1
    
    Fatorial de 1/15 (0.066667) = 1
    
    Fatorial de 1/16 (0.062500) = 1
    
    Fatorial de 1/17 (0.058824) = 1
    
    Fatorial de 1/18 (0.055556) = 1
    
    Fatorial de 1/19 (0.052632) = 1
    
    Fatorial de 1/20 (0.050000) = 1
    
    Valor de 'E': 21*/