const sisters = n => {
    if (n === 1 || n === 2) return 7
    return (sisters(n-1) + sisters(n-2)) -5
}
  
const sisters = n => {
    let memo = {};
  
    const helper = (n) => {
        let value;
  
        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 1 || n === 2) {
                value = 7
            } else {
                value = (helper(n - 1) + helper(n - 2)) - 5
            }
            memo[n] = value;
        }
        console.log(memo)
        return value
    }
  
    return helper(n)
  }
  
  sisters(8)
  
  sisters(10)
  
// sisters(3)
  
const range1 = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)
const range = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr
  }
 

const printSisters = n => {

    for (i of range(1, n)) {
        if (i === 1) {
          console.log('The 1st sister is ', sisters(i))
        } else if (i === 2) {
          console.log('The 2nd sister is ', sisters(i))
        } else {
          console.log(`The ${i}th sister is `, sisters(i))
        }  
    }
}

printSisters(1)

const callCount = n => {
    let memo = {}

    const helper = n => {
        let value
    
        if (n in memo) {
          value = memo[n]
        } else {
            if (n === 1 || n === 2) {
                value = 1
            } else {
                value = (helper(n-1) + helper(n-2)) + 1
            } 
            memo[n] = value
        }
        console.log(memo)
        return value
    }
    return helper(n)   
}


  
