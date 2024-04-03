function fibonacci(n) {
  const fib = [0, 1]
  for (let i=2; i<n; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib
}

function isPowerOfTwo(n) {
  // 1보다 작으면
  if(n < 1) {
    return false
  }
  while(n > 1) {
    // 홀 수면
    if(n % 2 !== 0) {
      return false
    }
    // n을 2로 나눈다.
    n = n / 2
  }
  return true
}

function isPowerOfBitWise(n) {
  if(n < 1) {
    return false
  }
  return (n & (n-1)) === 0
}

function linearSearch(arr, target) {
  // 처음부터 끝까지 하나씩 타겟이랑 동일한지 검사합니다.
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === target) {
      return i
    }
  }
  return -1
}

function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]) {
      return middleIndex
    }
    if(target < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return - 1
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target === arr[middleIndex]) {
    return middleIndex
  }

  if(target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1)
  } else {
    return search(arr, target, middleIndex + 1, rightIndex)
  }
}

function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for(let i=0; i<arr.length - 1; i++) {
      if(arr[i] > arr[i-1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  } while(swapped)
}

function insertionSort(arr) {
  for(let i=1; i<arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1
    while(j >= 0 && arr[j] > numberToInsert) {
      arr[j+1] = arr[j]
      j = j - 1
    }
    arr[j+1] = numberToInsert
  }
}

function quickSort(arr) {
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for(let i = 0; i< arr.length - 1; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = { fibonacci, isPowerOfTwo, isPowerOfBitWise, linearSearch, binarySearch, recursiveBinarySearch, bubbleSort, insertionSort, quickSort }