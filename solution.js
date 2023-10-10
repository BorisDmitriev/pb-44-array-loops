//1
const sumMultiply = (...nums) => {
    let sum = 0;
    let product = 1;
    for (const num of nums) {
        sum += num;
        product *= num;
    }
    console.log(`The sum of the array is ${sum}; the product of the array is ${product}.`);
}
sumMultiply(1,2,3,2);

//2
const names = ['Liam', 'Olivia', 'Benjamin', 'Isabella'];
for (const index in names) {
    console.log(`Hello ${names[index]}!`);
    console.log(`${names[index]} is at index ${index} of my friends array!`);
}

//3
const cityArr = ['Paris', 'Berlin', 'Milan', 'Los-Angeles'];
let str = "";
for (const index in cityArr) {
    str += cityArr[index] + (Number(index) < cityArr.length-1 ? ", " : "");
}
console.log(str);

//4
const oddsEvens = nums => {
    for (let index in nums) {
        if( nums[index] % 2 !== 0) {
            nums[index] += 1;
        }else if( nums[index] % 2 === 0) {
            nums[index] -= 1;
        } 
    }
    return nums;
}
console.log( oddsEvens([3, 5, 2, 4]));

//5
const capitalize = names => {
    for (let index in names) {
        names[index] = names[index].slice(0,1).toUpperCase() + names[index].slice(1, names[index].length).toLowerCase();
    }
    return names;
}
console.log( capitalize(["matt", "sara", "lara"]) ) ;

//6
const noDuplicates = nums => {
   const result = [];
   for (const num of nums) {
      if( !result.includes(num) ) result.push(num);
   } 
   return result;
}
console.log( noDuplicates([1, 4, 4, 7, 7, 7]) );

//7
const repeatItem = (str, times) => {
    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(str);       
    }
    return result;
 }
 console.log( repeatItem("example", 3) );

 //8
 const isFactorChain = nums => {
    for (let index = 0; index < nums.length; index++) {
        if( index !== nums.length-1 ) 
            if( nums[index]*2 !== nums[index+1] ) return false; 
    }
    return true  
 }
 console.log( isFactorChain( [1, 2, 4, 8, 16, 32]) );
