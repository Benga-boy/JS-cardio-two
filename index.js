// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'Hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
  // Create filtered array
  const senArr = sen.toLowerCase().match(/[a-z0-9]+/g)

  // Sort by length
  const sorted = senArr.sort((a, b) => b.length - a.length)
  
  // if multiple words, put into array
  const longestWordArr = sorted.filter(word => word.length === sorted[0].length)


  // Check if more than one array val
  if (longestWordArr.length === 1) {
    return longestWordArr[0]
  } else {
    return longestWordArr
  }
}
const sentence = longestWord('Hello my name is Benga')
console.log(sentence)

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]]

function chunkArray(arr, len) {
  // ! SOLUTION 1
  // // init chunked Arr
  // const chunkedArr = []
  // // Set index
  // let i = 0

  // // loop while the index is less than the array length
  // while (i < arr.length) {
  //   // slice out from the index to the index + the chunk length then push unto the chunked array
  //   chunkedArr.push(arr.slice(i, i + len))

  //   // increment by the chunk length
  //   i += len
  // }
  // return chunkedArr

  // ! SOLUTION 2

  // init chunked arr
  const chunkedArr = []

  // loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1]

    // Check if there is a last and if last length is equal to the chunk length
    if (!last || last.length === len) {
      chunkedArr.push([val])
    } else {
      last.push(val)
    }
  })

  return chunkedArr
}

const chunked = chunkArray([1, 2, 3, 4, 5, 6, 7], 3)
console.log(chunked)

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // const newArr = []

  // ! SOLUTION 1
  // arrays.forEach(val => {
  //   val.forEach(num => newArr.push(num))
  // })

  // return newArr

  // ! SOLUTION 2
  // return arrays.reduce((a, b) => a.concat(b))

  // ! SOLUTION 3
  // return [].concat.apply([] ,arrays)

  // ! SOLUTION 4
  return [].concat(...arrays)
}

const flatArray = flattenArray([[1, 2], [3, 4], [5, 6], [7]])

console.log(flatArray)

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. elbow === below
// ex. dormitory === dirty room##

function isAnagram(str1, str2) {
  const wordOne = formatStr(str1)
  const wordTwo = formatStr(str2)

  return wordOne === wordTwo
}

// ! Helper function
function formatStr(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

const anagram = isAnagram('dormitory', 'dirty room')
console.log(anagram)

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
//  Z should turn to A
// ex. 'hello there' === 'ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === 'z' || char === 'Z') {
      return 'a'
    } else {
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  })

  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase())

  return newStr
}

const changeLetter = letterChanges('hello there')
console.log(changeLetter)