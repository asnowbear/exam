
const a = [1,3,45,6,677,-9]
bubbleSort(a)
console.log(a)

function bubbleSort(arr = []) {
  for(let i = 0, len = arr.length; i < len ; i++) {
    for(let j = i + 1, len2 = arr.length ; j < len2; j ++) {
      if (arr[i] > arr[j] ) {
        const temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
}