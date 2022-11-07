//Linear Search Pseudocode 
//This function accepts an array and a value 
//Loop through the entire array element is equal to the value 
//If it is return the index at which the element is found 
//If its never found out –1 

//i was able to get the value of the array but how do i return the index of 

function linear(arr,val){
  for(i=0; i<arr.length; i++){
    if(arr[i]===val)
      return i
  }
  return -1
}

//well for some reason this doesnt read the code and it becomes a huge problem because it just keeps returning -1
//the way to return it is after the loop is done return -1, but if i have an if else statement why isn't it returning where i need it too

O(1), O(n)