function insertionsort(arr){ 
  for(var i=0; i<arr.length; i++){ //this loops regular and then sort the loop  
      let currentval= arr[i] //this has the currentval and then arr[I] 
         for(var j=i-1; j>=0 && arr[j]>currentval; j--){  //then loop  
          arr[j+1]= arr[j] 
      } 
    arr[j+1]= currentval 
} 
return arr; 
}   
// Explain insertion sort 
// insertion sort is when you go through an array and there is a value, 1, and 1, you compare if the value ahead is less than then you swap 
 
// //the way to loop it the right way is to simply do this 
// //create a for loop, store the value of arr[I] in a variable 
// //then loop through the other array and reverse it, when you reverse it make sure you compare the arr[j]> currentval, that’s when you only swap 
 
// for(let I=0; I<arr.length;I++){ 
//               Let currentval = arr[I] 
// for(let j=i-1; j>=0; & arr[j]>currentval; j--){ 
// 	Arr[j+1]= arr[j] // 
// } 
// Arr[j+1]= currentval 
// } 
// 	Return arr; 
// } 
	 
// //so what is arr[j+1] = arr[j] 
 
// //lets say I have a loop for(var j=I-1; j>=0 & arr[j]>currentval;j--){ 
// 	Arr[j+1]=arr[j] 
// 	} 
	 
// [1,2,30,20] 
// [1, 2, 30, 30] 
// [1, 2, 20, 30] 
 
// //you have the number 20 which is greater than the current value, so you compare 20 and 3,3 isn’t greater than current j, then you compare 20 and 30, 30 is greater than 30 and 20.  
 
// //arr[j] is greater than the current value 
// //so you take that current value and add that value to j+1 
// //then from there you set the current value = 30. This is a simpler version 
 
// //if you look at  
// [1,2,30,20,10]  
 
// //the number 10 is not greater than 20 so you loop through, and then you look at the number 30, it is greater than 10. So you set the value. 
 
// //[1,2,30,0,10] 
// //this one is definitely tricky but here I am going to go through this and explain so I understand what the loop is 
 
// // [1, 2, 30, 30, 10] I have 10 is not greater than 0, then from there I go to 30, 30 is greater than 30 so then from there since there was a value of 0 and I have to get rid of that number, then the next value gets replaced 2,2 and then 1,1, and then you get 0,1,2,30 and 30 because 10 and 30 got replaced as 30 was greater than 10.  
 
// // [1, 2, 2, 30, 10] 
// // [1, 1, 2, 30, 10] 
// // [0, 1, 2, 30, 30] 
// // [0, 1, 2, 10, 30] 

// Bubble Sort 
// What is bubble sort 
// Bubble sort is when you compare the value of one value to another value 
// [1,5,9,3,20] 
 
// You compare 1,5, one isn’t greater than 5 so you don’t switch the element. 5 isn’t greater than 9 so you don’t switch the element. Then you have 9 compared to 3 it is larger so you switch the element, and then you compare 9, 20 is 9 greater than 20 no so you switch the element 
 
function bubblesort(arr){ 
for(var i=0; i<arr.length; i++){ 
  for(var j=0; j<arr.length;j++){ 
      if(arr[j]>arr[j+1]){ 
	     let temp = arr[j] 
	     arr[j] = arr[j+1]
	     arr[j+1]=  temp;
} 
   } 
} 
return arr;
} 
 

//Selection sort

//Selection sort is really simple. If you look at selection sort [2,4,5,90,2]
//you have the first value, in this case that value is 2. Then from there 2,4,5,90,2 
//you have the first value then you go through through 

//[2,4,5,90,2]
//if you look at the 2,4,5,90,2 
//the lowest value is 2, then you go through the array and there is 2,4,5,90,2 2 becomes the min value and then you just insert the 2 in front of the 4
//then you through again and 4 is the lowest value [2,4,5,90,2]
//[2,4,5,90,2]

//[2,4,5,90,2]

//[2,4,5,90,2]
//[2,4,5,90,2]

//you take the value of 4,5,90,2
//then you take the 4,5,90,2 
//then you take the 2,4,5,90,2

//2,4,5,90,2
//then it's 2,2,4,5,90
//then you take the lowest value which is now 4 and compare that stays and you know it's in order
function selectionsort(arr){
  for(var i=0; i<arr.length; i++){
    lowest =i;
    for(var j=i+1; j<arr.length; j++){
      if(arr[j]<arr[lowest]){
        lowest=i;
      }
    }
    var temp = arr[i]
    arr[i]=arr[lowest]
    arr[lowest]=temp
  }
  return arr;
}


 //bubble sort
function bubblesort(arr){
  for(var i =0; i<arr.length; i++){
    for(var j=0; j<arr.length; j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp 
      }
    }
  }
  return arr;
}




 //insertion sort 
 function insertionsort(arr){
  for(var i=0; i<arr.length; i++){
    let currentval = arr[i]
    for(var j=i-1; j>=0 && arr[j]>currentval; j--){
      arr[j+1]= arr[j]
    }
   arr[j+1]=currentval
  }
  return arr;
 }