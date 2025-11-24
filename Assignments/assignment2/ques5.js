var numbers=[10, 25, 7, 42, 18]
var sum=0
for(i=0;i<numbers.length;i++){
    sum+=numbers[i]
}
var largest=numbers[0]
for(i=1;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i]
    }
}
console.log(`Total sum is ${sum} and largest of all is ${largest}`)