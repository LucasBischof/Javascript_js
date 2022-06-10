let num_ter= 50
let num1 = 2 
let num2 = 7
let num3 = 3
let i = 4
let lista =[2,7,3]

while (i<=num_ter) {
    num1=(num1*2)
    i=(i+1)
    num_vet = lista.push(num1)
    if(i<=num_ter){
        num2 = (num2*3)
        num_vet = lista.push(num2)
        i = (i+1)
    }if (i !=num_ter){
        num3 = (num3*4)
        num_vet = lista.push(num3) 
        i=(i+1)
    }
}

lista.length = num_ter
console.log(lista)
