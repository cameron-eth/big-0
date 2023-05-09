// Adds up positive integers from 1-n
function addNums(n) {
  let add = 0
  for(let i = 1; i <= n; i++){
    add += 1
  }
  return add

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in

}



module.exports = [addNums, addManyNums];