function findFirstDuplicate(arr) {
  let mySet = new Set()

  for(let i = 0, n = arr.length; i < n ;i++){
    if(mySet.has(arr[i])){
      return arr[i]
    } else {
      mySet.add(arr[i])
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// What is the first duplicate mean? We want the first occurrence of the second number. 
// That is the value we return
// If there are no duplicates => return -1
// I want to be able to count each number and have it count again if there is a duplicate
// filter out the duplicates within the array
// return the first element in the array