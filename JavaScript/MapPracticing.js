/* i need to count occurance of unique element in the array */
const countOccurance = (array) => {
  const countMap = new Map()

  for (let obj of array) {
    countMap.set(obj, (countMap.get(obj) || 0) + 1)
  }
  console.log(countMap)
}

countOccurance([1, 2, 2, 3, 3, 3, 4])
countOccurance(['banana', 'banana', 'ball', 'banana'])

/* I need to delete duplicates from the array*/
const uniqueElements = (array) => {
  const map = new Map()

  for (let obj of array) {
    if (!map.has(obj)) {
      map.set(obj, true)
    }
  }
  const newArr = Array.from(map.keys())
  //return [...map.keys()];

  console.log(map)
  console.log(newArr)
}

uniqueElements([1, 2, 2, 3, 3, 3, 4])

//looking for symbol that occures just once
const firstUniqueChar = (string) => {
  const map = new Map()
  for (let letter of string) {
    map.set(letter, (map.get(letter) || 0) + 1)
  }
  for (let [letter, count] of map.entries()) {
    if (count === 1) {
      console.log('letter:', letter)
      return
    }
  }
}

firstUniqueChar('aabccdeff')
