lista=[0]
let ter1= 1
lista.push(ter1)
let ter2= 1
lista.push(ter2)

for (let i = 4; i < 12;i++) {
      let ter3= ter1+ter2
      lista.push(ter3)
      ter2=ter1
      ter1=ter3  
} 
lista.reverse();
console.log(lista);