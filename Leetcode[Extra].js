

//Given an integer x, return true if x is palindrome integer.
//An integer is a palindrome when it reads the same backward as forward.
//For example, 121 is a palindrome while 123 is not.

//i remember that you have to split reverse and join this is how i would do the function looking at it cause all i have to do is reverse it

//the issue is i have to use storage x.toString() to make sure that it is in string value and then set it = to the variable
//all i have to remember is to make sure that i tostring the value



function isPalindrome(x){
  let storage = x.toString().split('').reverse('').join('')
  return x.toString() ===storage
}



    //Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    //An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    //a simple anagram problem

    var isAnagram = function(s, t) {
      if(s.length !== t.length) return false
  
      const storage={}
  
      for(i=0; i<s.length; i++){
          let newval = s[i]
          storage[newval] = (storage[newval] || 0) +1
      }
  
      for(i=0; i<t.length; i++){
          let newval = t[i]
           if(!storage[newval]) {
              return false
          }else{
              storage[newval] -=1
          }
      }
        return true
  };
