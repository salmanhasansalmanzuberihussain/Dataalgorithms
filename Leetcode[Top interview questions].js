//1.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//I know right away that im going to have to store the value because of indices of two numbers so the index. I'll have to store these values somewhere


function twointegers(num,target){
    let storage={}
    for(i=0; i<num.length;i++){
        let value = num[i]
        let wantedvalue = target-value;
        if(storage[wantedvalue] !== undefined){
            return [ storage[wantedvalue], i]
        }else{
            storage[value]=i
        }
    }
}

//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//For example, 2 is written as II in Roman numeral, just two ones added together
//12 is written as XII
//The number 27 is written as XXVII

//Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
//Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
//There are six instances where subtraction is used:


//i can be placed before v(5) and x(10)


function roman(s){
    let sum =0;
    for(i=0; i<s.length; i++){
        let prev =s[i-1]
        switch(s[i]){
            case "I":
                sum+=1
                break;
            case "V":
                sum = prev === 'I' ? sum +3: sum +5;
                break;
            case "X":
                sum = prev === 'I' ? sum +8: sum +10;
                break;
            case "L":
                sum = prev === 'X' ? sum +30: sum +50;
                break;
            case "C":
                sum = prev === 'X' ? sum +80: sum +100;
                break;
            case "D":
                sum = prev === 'C' ? sum +300: sum +500;
                break;
            case "M":
                sum = prev === 'C' ? sum +800: sum +1000;
                break;
            
            
        }
    }
    return sum;
};

//Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".

//i probably have to loop through this array to see what functions i can get 
//The indexOf() method returns the first index at which a given element 
//can be found in the array

var longestCommonPrefix = function(strs) {
  let prefix = strs[0] //set the first word of the strs
  for(let i = 1; i<strs.length; i++){
        while(strs[i].indexOf(prefix) !==0){
            prefix = prefix.substring(0,prefix.length-1)
        }
  } 
  return prefix; 
};

//if the word flower is not in the flow

//longestcommonprefix

//flower
//flow
//flight

//"fl"

//have to find what is similar in all these words 

//thers a trick that can be used
//1.Create a variable prefix
//2.Set flower as common prefix
//3.increment to flow
//4. then go to third work its "fl"

//index of gives you the location of a word so you can literally write indexOfprefix and that would say while
//strs[i].indexOf(firstword) !== 0 subtract the last value

