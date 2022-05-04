testa=1
function par(num){
    
    if (num % 2==0 ){
        console.log(`Seu numero ${num} é par`)
        if(num<100){
            par(num+2) 
        }
        
    }else{
       num--;
       par(num)
        
    }
     
   }
   par(testa)