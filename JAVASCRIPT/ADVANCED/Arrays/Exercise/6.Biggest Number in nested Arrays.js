function solve(array) {
    let biggestNumbers=0;
      for (let i = 0; i < array.length; i++) {
          biggestNumbers=Math.max(...array[i])
      }
      console.log(biggestNumbers)
  } 
  solve([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9, 10]
  ])