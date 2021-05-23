const {DeQueue} = require(`../4lab/queue`)
let array = [9,8,7,6,5,1,2,3,4];
let myCoins = 0;
function coins(array){
    let deq = new DeQueue();
    array.sort().map(item => deq.pushFront(item));
    if (array.length % 3 !== 0){
        return `can't do it`;
    }
        else{
            while(!deq.isEmpty()){
                deq.popFront();
                myCoins+=deq.popFront();
                deq.popBack();
            }
        }
    return myCoins;
}
console.log(`Наша наибольшая сумма: ${coins(array)}`);
