//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let len = arr.length;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  let pos = (positive / len).toFixed(6);
  let neg = (negative / len).toFixed(6);
  let zer = (zero / len).toFixed(6);

  console.log(pos);
  console.log(neg);
  console.log(zer);
}

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//given an array(I already know that im going to have to use nums and an integer target, return indicies of the two numbers such that they add up to the target)

var twoSum = function (nums, target) {
  let map = {};
  for (var i = 0; i < nums.length; i++) {
    let newval = nums[i];
    let currenttarget = target - newval;
    if (map[currenttarget] !== undefined) {
      return [map[currenttarget], i];
    } else {
      map[newval] = i;
    }
  }
};

//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

//given five positive integers, find the min and the max values that can be calculated by summing exactly 4 of the 5 ints
//print the min and max values as a single link of two space-seperated long integers

//the key here is to sort the array as best as possible. If you can sort the arrays then you're in a good position because i can
//for loop through the array and then increment the sum value and then i can add the sum+=1 and then min and max

function miniMaxSum(arr) {
  let sum = 0;
  let sort = arr.sort();

  for (var i = 0; i < sort.length; i++) {
    sum += sort[i];
  }

  let max = sum - sort[0];
  let min = sum - sort[sort.length - 1];

  console.log(min, max);
}

//Roman to integer ****** Did not get on first try //so keep an eye out for this problem Roman to integer
//There were two ways for me to complete this code, I can use a switch case that works or I can use a const map and then use a for loop and
//add and subtract the values, ill be honest i dont remember exactly where to add and minus the values

//M,C,M,X,C,IV
//1000,100,1000,10,100,1,5

//C,M=900
//X,C=90
//I,V=4

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (var i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];

    if (map[curr] < map[next]) {
      total -= map[curr];
    } else {
      total += map[curr];
    }
  }
  return total;
};

//0-2
// //Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  let late = s.includes('PM');
  if (!late) {
    s = s.split('AM'); //split means to remove element
    s = s[0].split(':'); //s[0] splits array into two
    if (s[0] == '12') s[0] = '00';
    return s.join(':');
  } else {
    s = s.split('PM');
    s = s[0].split(':');
    if (s[0] != '12') s[0] = (parseInt(s[0]) + 12).toString();
    return s.join(':');
  }
}

//when completeing this problem watch out for the amount of 0 i am using as this is going to become a problem

// Longest Common Prefix
//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string ""

//this pattern is more of a memorization pattern although you should understand it, the pattern is more of a memorizaiton pattern,

//strs[0], //for loop var i=0; i<strs.length; i++ and then while the prefix is in the loop get the characters of the prefix and return the prefix
//indexOf(inside of)
//substring, gets characters

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (var i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
};

//The indexOf() method returns the first index at which a given element can be found in the array,
//The substring() method returns the part of the string between the start and end indexes, or to the end of the string

//Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
//She tabulates the number of times she breaks her season record for most points and least points in a game.
//Points scored in the first game establish her record for the season, and she begins counting from there

//Maria plays college basketball and wants to go pro

//points scored in the first game establish her record
//return the times she broke her record and had least points

//have to store that variable somewhere
function collegebasketball(scores) {
  let min = 0; //increment the times she broke her score
  let max = 0; //increment the time she broke her score
  let maxiumum = scores[0]; //maximum = scores[0]
  let minimum = scores[0]; //minimum= scores[0]

  for (var i = 0; i < scores.length; i++) {
    //loop through the array
    if (scores[i] > maxiumum) {
      maxiumum = scores[i];
      max++;
    } else if (scores[i] < minimum) {
      minimum = scores[i];
      min++;
    }
  }
  console.log(min, max);
}

//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
  const hashmap = { '{': '}', '(': ')', '[': ']' };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let val = s[i];
    if (hashmap[val]) {
      stack.push(hashmap[val]);
    } else if (stack.length > 0 && stack[stack.length - 1] === val) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

var isValid = function (s) {
  const hashmap = { '{': '}', '[': ']', '(': ')' };
  let stack = [];
  for (let char of s) {
    if (hashmap[char]) {
      stack.push(hashmap[char]);
    } else if (stack.pop() != char) {
      return false;
    }
  }
  return !stack.length;
};

//this is another solution that works cleaner, stack.pop is basically where it pops off the last element,
//!stack.length
//rather than for loop through i then set val can use a for of loop with s
//a quick reminder for of loop is used for array

//Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .
// ar=[1,2,3,4,5,6]
//k=5

//O(n) solution

function divisibleSumPairs(n, k, ar) {
  var count = 0;

  for (let i = 0; i < ar.length; i++) {
    ar.slice(i + 1, n).filter((salman) => {
      if ((salman + ar[i]) % k == 0) {
        count++;
      }
    });
  }
  return count;
}

function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        count++;
      }
    }
  }
  return count;
}

//Merge two sorted lists
//think of these two lists theres

1 - 2 - 3 - 4;
1 - 2 - 3;

1 - 1 - 2 - 2 - 3 - 3 - 4;

//compare the values of 1 and 1 if = then curr.next=l1 just push it to the node then compare 2 and 1, 2. Is greater than 1 so push 2 and then increment l2, then look at l2 vs l2 and its 2 and then push l2

var mergeTwoLists = function (l1, l2) {
  let curr = new ListNode();
  const dummy = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }
  return dummy.next;
};

//There is a collection of input strings and a collection of querystrings.
//For each query string determine how many times it occurs in the list of input strings
//Return an array of the results

function matchingStrings(strings, queries) {
  let map = {},
    output = [];

  for (let i = 0; i < strings.length; i++) {
    if (!map[strings[i]]) {
      map[strings[i]] = 1;
    } else {
      map[strings[i]] += 1;
    }
  }

  for (let j = 0; j < queries.length; j++) {
    if (map[queries[j]]) {
      output.push(map[queries[j]]);
    } else {
      output.push(0);
    }
  }
  return output;
}

//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
//Return k after placing the final result in the first k slots of nums.
//Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory

//the approach here to use is the multiple pointers approach
var removeDuplicates = function (nums) {
  let j = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i + 1];
      j++;
    }
  }
  return j;
};
