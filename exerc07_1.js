let E = 1.0
let N = 20   
for(i=1; i<=N; ++i){
    num = 1.0/i;
    fat = 1;
function fatorial(fat) { 
    if (fat === 0){
        return 1;
      }
    return fat * fatorial(fat-1);       
      }
     E = E + 1.0 / fat;  
}
console.log(`Valor de E = ${E}`);
    