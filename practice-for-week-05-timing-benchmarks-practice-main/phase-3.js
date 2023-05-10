const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const finalArr = []

  for(let i = 1; i <= 10; i++){
    newVal = i * increment
    console.time('addNums10')
    finalArr.push(addNums(newVal))
    console.timeEnd('addNums10')
  }

  return finalArr
}


function addManyNums10Timing(increment) {
  finalArr = []

  const start = increment
  const end = increment * 10

  for(let i = start; i <= end; i += increment){
    startTime = Date.now();
    finalArr.push(addManyNums(i))
    endTime = Date.now();

    console.log(`${endTime - startTime}`);
  }
  return finalArr
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
