function fibonacci(num){
 if(num<=2)
  return (num-1);
 else
  
  return ( fibonacci(num-1) + fibonacci(num-2) );
}
for(i=10;i>0;i--){
    console.log(fibonacci(i))
}

