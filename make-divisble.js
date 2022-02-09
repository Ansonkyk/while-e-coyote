var prompt=require('prompt-sync')();


x=Number(prompt("X?"));
y=Number(prompt("Y?"));
k=x%y
while(k !==0){
    y=y+1;
    k=x%y
}
console.log(x+" is divisible by "+y)