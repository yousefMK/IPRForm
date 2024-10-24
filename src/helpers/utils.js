// Utils: Helpers

// Sorts the group array
export function sortGroupArray(arr) {
  arr.sort((a, b) => {
    const aNumbers = a.split(",").map((num) => parseInt(num.trim(), 10))
    const bNumbers = b.split(",").map((num) => parseInt(num.trim(), 10))
    return aNumbers[0] - bNumbers[0] || aNumbers[1] - bNumbers[1]
  })
  return arr
}

// Transform strings to numbers
export function stringsArrToNumbersArr (arr) {
  return arr?.flatMap(item => item.split(',').map(Number))
}
