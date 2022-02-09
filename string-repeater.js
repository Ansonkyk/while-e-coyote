var prompt=require('prompt-sync')();


s=0
temp=(prompt("Can I have a string please?"));
while (s<=10){
    console.log(temp);
    s=temp.length
    temp=temp+temp
    
    
}
console.log("Done")