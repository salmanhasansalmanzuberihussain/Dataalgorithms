//Sliding window technique

//Write a function called MaxSubarraySum which accepts an array of integers and a number called N.
//The function should calculate the maximum sum of n consecutive elements in the array.
///the function maxSumArraySum(array,num)

//also a useful technique for the running average


//Question variants
//Fixed Length
//max sum subarray of size k

//dynamic variant 
//smallest sum>= to some value S 

//dynamic variant w/Auxilarry data strucuture




function MaxSubarraySum(arr,num){
  let maxSum =0;
  let tempSum=0;
  if(arr.length<num) return null;
  for(let i=0; i<num; i++){
    maxSum += arr[i]
  }

  tempSum=maxSum
  for(let i=num; i<arr.length; i++){
    tempSum = tempSum -arr[i-n]+ arr[i];
    maxSum = Math.max(tempSum,maxSum)
  }
  return maxSum
}

MaxSubarraySum([2,3,4,5,3,2,3,2],3)

