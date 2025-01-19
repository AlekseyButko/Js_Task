const number = parseInt(prompt("Введіть ціле число:"));
if(number<=1){
    console.log(`${number} не є простим числом`);
}
else{
    let isPrime = true;
    for(let i=2; i <= Math.sqrt(number); i++){
        if(number % i === 0 ){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        console.log(`${number} є простим числом.`);
    } 
    else {
        console.log(`${number} не є простим числом.`);
    }
}