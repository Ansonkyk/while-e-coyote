var prompt=require('prompt-sync')();


num=prompt("Can I have a number please?");
while (num<100){
    num=num*2;
    console.log(num);
}