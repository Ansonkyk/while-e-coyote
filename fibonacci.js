var prompt=require('prompt-sync')();


x=Number(prompt("X?"));
y=0
temp1=1
temp2=0
while (y<x){
   console.log(temp1);
   temp3=temp1;
   temp1=temp1+temp2;
   temp2=temp3
   y=y+1
}