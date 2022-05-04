num=0
function par(num){
    
 if (num % 2==0) {
     console.log(`Seu numero ${num} é par`)
 }else{
    num--;
    par(num)
     
 }
  
}

par(7)