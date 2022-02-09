var prompt=require('prompt-sync')();


num=0
x=1
while (x==1){
    temp=(prompt("Can I have a number please?"));
    if (temp=="Done") {
        x=2

    }else{
        temp=Number(temp)
        num=num+temp;
        console.log(num);
    }
    
    
}
console.log("Done")