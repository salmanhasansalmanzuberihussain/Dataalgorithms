//You are given two non-empty linked lists representing two non-negative integers. The digits are
//stored in reverse order and each of their nodes contains a single digit. Add the two numbers
//and return thhe sum as a linked list

//you may assume numbers do not contain zero, excecpt the number 0 itself

//l1 and l2
//l1 1-2-3
//l2 1-2


function addtwonumbers(l1,l2){
     while(l1 || l2){
      let val1 =0
      let val2=0
      if(l1){
        val1 = l1.val
        l1 = l1.next
      }if(l2){
        val2 = l2.val
        l2 = l2.next
      }
      let sum = val1 + val2;
     }
};