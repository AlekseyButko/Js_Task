function askNumber(){
    let number; 
    let attempts = 10;
    for(let i = 0; i < attempts; i++){
        number =prompt("Введіть число більше 100:");
        if(number === null){
            console.log("Ввід скасовано користувачем.");
            return;
        }
        number = Number(number);
        if(number>100){
            console.log("Останнє введене число:", number);
            return;
        }
    }
    console.log("Досягнуто 10 ітерацій. Останнє введене число:", number);
}
askNumber();