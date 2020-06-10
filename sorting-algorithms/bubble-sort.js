// also called "sinking sort" and it involves swapping

// not the most efficient or widely used but it is fun
// it can be optimized and excell in certain cases

// large values bubble to the top
// visualgo.net

const swap1 = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

const swap2 = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}
