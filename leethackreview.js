//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//given an array(I already know that im going to have to use nums and an integer target, return indicies of the two numbers such that they add up to the target)

var twoSum = function(nums, target) {
  let map={}
  for(var i=0; i<nums.length; i++){
    let newval = nums[i]
    let currenttarget = target-newval
    if(map[currenttarget] !== undefined){
      return [map[currenttarget], i]
    }else{
      map[newval] =i;
    }
  }
}


//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal

function plusMinus(arr) {
let positive=0;
let negative=0;
let zero=0;
let len = arr.length;

for(var i=0; i<arr.length; i++){
  if(arr[i]>0){
    positive++
  }else if (arr[i]<0){
    negative++
  }else{
    zero++
  }
}
let pos= (positive/len).toFixed(6);
let neg = (negative/len).toFixed(6);
let zer = (zero/len).toFixed(6);

console.log(pos)
console.log(neg)
console.log(zer)


}