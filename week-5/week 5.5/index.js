// given an array give me back a new array in which every value is multiplied by 2
let arr = [1,2,3,4,5]
const ans = arr.map((i) => {
    return i*2

})
console.log(ans);
 // filter : give me given an input array give me back even value from the array

 const arr2 = [1,2,3,4,5]

 let ans2 = arr2.filter((i) => {
    if(i%2 == 0){
       return true
    }
 })
 console.log(ans2);
 