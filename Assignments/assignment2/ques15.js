let Expenses = [2000,1500,3500,4000];
function totalSpent(arr){
    let total = 0;
    for(let i=0;i<arr.length; i++){
        total = total+arr[i];
    }
    console.log(`Total Money Spent for Monthly Expenses : ${total}`);
}
totalSpent(Expenses);