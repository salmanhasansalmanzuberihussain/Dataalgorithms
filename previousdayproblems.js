//You are given the heads of two sorted linked lists list1 and list2.
//Merge the two lists in a one sorted list. 
//The list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function(list1, list2) {
  if(!list1) return list2
  if(!list2) return list1

  if(list1.val <= list2.val){
      list1.next = mergeTwoLists(list1.next,list2)
      return list1
  }

  if(list1.val> list2.val){
      list2.next = mergeTwoLists(list2.next,list1)
      return list2
  }
};

//notes about this !list1 return list2
//notes about this !list2 return list1

//if(list1.val <= list2.val){
  //list1.next = mergeTwoLists(list.next, list2)
  //return list1
  //}

  //if(list1.val>list2.val){
    //list2.next=mergeTwoLists(list2.next,list1)
    //return list2
    //



function gradingStudents(grades) {
 const result = grades.map((value) =>{
 if(value<38){
  return value 
 }else if(value%5<3){
  return value
  }else{
 let remainder = 5-(value%5)
  return value+remainder
}
})
return result
 }


 function capitalizeFirst (arr) {
       if(!arr.length) return []

       const string = arr[0]
        const capitalize = string[0].toUpperCase() + string.slice(1)
      return [capitalize].concat(capitalizeFirst(arr.slice(1)))
}
