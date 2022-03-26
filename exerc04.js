let num_ter= 10
let num1 =2 
let num2 = 7
let num3 = 3
let i = 4
console.log(num1)
console.log(num2)
console.log(num3)
while (i<=num_ter) {
    num1=(num1*2)
    i=(i+1)
    console.log(num1)
    if(i<=num_ter){
        num2 = (num2*3)
        console.log(num2)
        i = (i+1)
    }if (i !=num_ter){
        num3 = (num3*4)
        console.log(num3)
        i=(i+1)
    }
}