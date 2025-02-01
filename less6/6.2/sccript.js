function calcAverage(arr){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            sum+= arr[i];
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}
const mixedArray = [10, "hello", true, 44,23, "world", false,12321];
const average = calcAverage(mixedArray);

console.log(`Середнє арифметичне числових елементів: ${average}`);