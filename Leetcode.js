//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
var twoSum = function (nums, target) {
  let storage = {};
  for (i = 0; i < nums.length; i++) {
    let val = nums[i];
    let wantedvalue = target - val;
    if (storage[wantedvalue] !== undefined) {
      return [storage[wantedvalue], i];
    } else {
      storage[val] = i;
    }
  }
};

//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
var romanToInt = function (s) {
  let sum = 0;
  for (i = 0; i < s.length; i++) {
    let prev = s[i - 1];
    switch (s[i]) {
      case 'I':
        sum += 1;
        break;
      case 'V':
        sum = prev === 'I' ? sum + 3 : sum + 5;
        break;
      case 'X':
        sum = prev === 'I' ? sum + 8 : sum + 10;
        break;
      case 'L':
        sum = prev === 'X' ? sum + 30 : sum + 50;
        break;
      case 'C':
        sum = prev === 'X' ? sum + 80 : sum + 100;
        break;
      case 'D':
        sum = prev === 'C' ? sum + 300 : sum + 500;
        break;
      case 'M':
        sum = prev === 'C' ? sum + 800 : sum + 1000;
        break;
    }
  }
  return sum;
};

//Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

// //Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
var isValid = function (s) {
  const hashmap = { '{': '}', '[': ']', '(': ')' };
  let stack = [];
  for (var i = 0; i < s.length; i++) {
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

// //You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let prev = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }

  if (list1) {
    prev.next = list1;
  }

  if (list2) {
    prev.next = list2;
  }

  return dummy.next;
};

//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.
//Return k after placing the final result in the first k slots of nums.

var removeDuplicates = function (nums) {
  let index = 1;
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};

//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits

var plusOne = function (digits) {
  for (i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }
  for (var i = 0; i <= x; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i > x) {
      return i - 1;
    }
  }
};

//You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps.
//In how many distinct ways can you climb to the top?

var climbStairs = function (n) {
  const memo = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

// //You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = nums1.length - 1;

  while (second >= 0) {
    let firstval = nums1[first];
    let secondval = nums2[second];

    if (firstval > secondval) {
      nums1[i] = firstval;
      i--;
      first--;
    } else {
      nums1[i] = secondval;
      i--;
      second--;
    }
  }
};

//Given the root of a binary tree, return the inorder traversal of its nodes' values.
var inorderTraversal = function (root) {
  let res = [];
  indoor(root);
  function indoor(root) {
    if (!root) return null;

    indoor(root.left);
    res.push(root.val);
    indoor(root.right);
  }
  return res;
};

//non traversal
var inorderTraversal = function (root) {
  let stack = [];
  let output = [];
  while (stack.length || root !== null) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      output.push(root);
      root = root.right;
    }
    return output;
  }
};

//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
var isSymmetric = function (root) {
  function recurse(l, r) {
    if (!l && !r) return true;
    if (!l || !r || l.val !== r.val) return false;

    return recurse(l.left, r.right) && recurse(l.right, r.left);
  }
  return recurse(root.left, root.right);
};

//Given the root of a binary tree, return its maximum depth.
//A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function (root) {
  if (!root) return null;
  return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
};

// [-10,-3,0,5,9]
// Root is going to be the middle
// Everything on the left is less than and everything on the right is greater than

//[-10,-3,0,5,9]

//three pointers makes sense to me

//l - is -10 //left=0
//m-is 0
//r-is 9 //nums.length-1 (last index)

//move the right pointer to -3
//calculates a new min (l+r)/2 and floored
//pass in another recursive function mid+1
//and then set a m and calculate and then it will be placed in the tree
//when calculating the left, we're going to move the pointer to mid +1
//going to be at the mid value

//O(n)
//O-5-9
//O-10-3

//In this leetcode problem its about converting an array into a binary search tree
//theres two ways to do this using Math.floor or ceil to make this work

//you have to set three pointers to make this work nums,left,right
//the left side cant be greater than the right side
//You have to create a center and then from there root.left and add a sortedArraytoBST and move it mid-1
//Root.right = sortedArrayToBST and move the mid+1, to the right
//and then return root

var sortedArrayToBST = function (nums, left = 0, right = nums.length - 1) {
  if (left > right) return null;

  let mid = Math.floor((left + right) / 2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, left, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, right);

  return root;
};

//Given an integer numRows, return the first numRows of Pascal's triangle.
//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//[1]
//[1,1]
//[1,2,1] //
//[1,3,3,1] //i-1
//[1,4,6,4,1] //i

//1. Pascals Triangle->
//declare an array of size(numRows)

//2.Generate row by row
//row[0]=1
//row[row.length-1]=1

//to generate the values between 1 and 1 look at the row above
//row above = pascalsTriangle[i-1]
//then add
//rowAbove[j]+ rowAbove[j-1]

[1, __, ___, __, 1];

//j=3+1 =4
//j-1

//1,3,3,1
//1,4,

//Declare an array of new Array(numRows)

//going to generate row by row
//first element of row and last element of row always 1
//row[0]
//row[row.length-1]=1

//generate values between 1 and 1 look at the row above
//rowabove = pascalstriange[i-1]
//then add rowaobe[j]+ rowabobe[j-1]

//pascalstriange[i]=row

var generate = function (numRows) {
  let pascalsTriangle = new Array(numRows); //pascals triangle = new Array(numRows)

  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1); // row = new Array(i+1)
    row[0] = 1; //first element = 1
    row[row.length - 1] = 1; //last element = 1

    for (let j = 1; j < row.length - 1; j++) {
      //j=1; j< row.length-1; j++
      let rowAbove = pascalsTriangle[i - 1];
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }
    pascalsTriangle[i] = row;

    return pascalsTriangle;
  }
};

//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//dont have to consider its sorted
//you are given an array prices where prices[i] is the price of a given stock on the ith day

[7, 1, 5, 3, 6, 4];

//buy it for now
//if i waited 1 day would be 1,5,3,6,4

//this is similar to keeping maria scores

//if i buy the price and its larger i know i messed up
//set the new buyer price
//to keep track of profit use a Math.max(profit[i]-buy, profit)

var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
};

//make sure that i subtract the price from buy as the price is more expensive other than that i stored it the right way
//Good to know if you need to include method to check where the element is present in array then use indexOf
//includes is to check if it exists
var isPalindrome = function (str) {
  let arr = str.slice('');
  let result = [];
  let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

  for (let i of arr) {
    if (alphabet.includes(i.toLowerCase())) {
      result.push(i.toLowerCase());
    }
  }
  return result.join('') == result.reverse().join('');
};

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
  const storage = {};

  for (const val of nums) {
    storage[val] = (storage[val] || 0) + 1;
  }

  for (const key in storage) {
    if (storage[key] === 1) {
      return key;
    }
  }
};
