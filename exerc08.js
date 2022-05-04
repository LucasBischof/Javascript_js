function fatorial(fat) { 
  if (fat === 0){
    return 1;
}
  return fat * fatorial(fat-1);       
}
console.log(fatorial(5));