///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
    apple: { color: "red", mass: 100 },
    grape: { color: "red", mass: 5 },
    banana: { color: "yellow", mass: 183 },
    lemon: { color: "yellow", mass: 80 },
    pear: { color: "green", mass: 178 },
    orange: { color: "orange", mass: 262 },
    raspberry: { color: "red", mass: 4 },
    cherry: { color: "red", mass: 5 },
  }
   
  interface Dict<T> {
    [k: string]: T
  }
   
  // Array.prototype.map, but for Dict
  function mapDict(...args: any[]): any {}
  // Array.prototype.filter, but for Dict
  function filterDict(...args: any[]): any {}
  // Array.prototype.reduce, but for Dict
  function reduceDict(...args: any[]): any {}
   
  /////////////////////////////////////////
  ///////////// TEST SUITE ///////////////
  //////// no need to modify these ////////
  /////////////////////////////////////////
   
  // MAP
  const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
  Parameter 'fruit' implicitly has an 'any' type.
  Parameter 'name' implicitly has an 'any' type.
    ...fruit,
    kg: 0.001 * fruit.mass,
    name,
  }))
  const lemonName: string = fruitsWithKgMass.lemon.name
  // @ts-ignore-error
  const failLemonName: number = fruitsWithKgMass.lemon.name
  assertOk(
    fruitsWithKgMass,
    "[MAP] mapDict returns something truthy"
  )
  assertEquals(
    fruitsWithKgMass.cherry.name,
    "cherry",
    '[MAP] .cherry has a "name" property with value "cherry"'
  )
  assertEquals(
    fruitsWithKgMass.cherry.kg,
    0.005,
    '[MAP] .cherry has a "kg" property with value 0.005'
  )
  assertEquals(
    fruitsWithKgMass.cherry.mass,
    5,
    '[MAP] .cherry has a "mass" property with value 5'
  )
  assertEquals(
    Object.keys(fruitsWithKgMass).length,
    8,
    "[MAP] fruitsWithKgMass should have 8 keys"
  )
   
  // FILTER
  // only red fruits
  const redFruits = filterDict(
    fruits,
    (fruit) => fruit.color === "red"
  Parameter 'fruit' implicitly has an 'any' type.
  )
  assertOk(
    redFruits,
    "[FILTER] filterDict returns something truthy"
  )
  assertEquals(
    Object.keys(redFruits).length,
    4,
    "[FILTER] 4 fruits that satisfy the filter"
  )
  assertEquals(
    Object.keys(redFruits).sort().join(", "),
    "apple, cherry, grape, raspberry",
    '[FILTER] Keys are "apple, cherry, grape, raspberry"'
  )
   
  // REDUCE
  // If we had one of each fruit, how much would the total mass be?
  const oneOfEachFruitMass = reduceDict(
    fruits,
    (currentMass, fruit) => currentMass + fruit.mass,
  Parameter 'currentMass' implicitly has an 'any' type.
  Parameter 'fruit' implicitly has an 'any' type.
    0
  )
  assertOk(
    redFruits,
    "[REDUCE] reduceDict returns something truthy"
  )
  assertEquals(
    typeof oneOfEachFruitMass,
    "number",
    "[REDUCE] reduceDict returns a number"
  )
  assertEquals(
    oneOfEachFruitMass,
    817,
    "[REDUCE] 817g mass if we had one of each fruit"
  )


  /* 
  Solution

  ///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
  apple: { color: "red", mass: 100 },
  grape: { color: "red", mass: 5 },
  banana: { color: "yellow", mass: 183 },
  lemon: { color: "yellow", mass: 80 },
  pear: { color: "green", mass: 178 },
  orange: { color: "orange", mass: 262 },
  raspberry: { color: "red", mass: 4 },
  cherry: { color: "red", mass: 5 },
}
 
interface Dict<T> {
  [k: string]: T
}
 
// Array.prototype.map, but for Dict
function mapDict<T, S>(
  inputDict: Dict<T>,
  mapFunction: (original: T, key: string) => S
): Dict<S> {
  const outDict: Dict<S> = {}
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k]
    outDict[k] = mapFunction(thisVal, k)
  }
  return outDict
}
// Array.prototype.filter, but for Dict
function filterDict<T>(
  inputDict: Dict<T>,
  filterFunction: (value: T, key: string) => boolean
): Dict<T> {
  const outDict: Dict<T> = {}
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k]
    if (filterFunction(thisVal, k)) outDict[k] = thisVal
  }
  return outDict
}
// Array.prototype.reduce, but for Dict
function reduceDict<T, S>(
  inputDict: Dict<T>,
  reducerFunction: (
    currentVal: S,
    dictItem: T,
    key: string
  ) => S,
  initialValue: S
): S {
  let value = initialValue
  for (let k of Object.keys(inputDict)) {
    const thisVal = inputDict[k]
    value = reducerFunction(value, thisVal, k)
  }
  return value
}
 
/////////////////////////////////////////
///////////// TEST SUITE ///////////////
//////// no need to modify these ////////
/////////////////////////////////////////
 
// MAP
const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
  ...fruit,
  kg: 0.001 * fruit.mass,
  name,
}))
const lemonName: string = fruitsWithKgMass.lemon.name
// @ts-ignore-error
const failLemonName: number = fruitsWithKgMass.lemon.name
assertOk(
  fruitsWithKgMass,
  "[MAP] mapDict returns something truthy"
)
assertEquals(
  fruitsWithKgMass.cherry.name,
  "cherry",
  '[MAP] .cherry has a "name" property with value "cherry"'
)
assertEquals(
  fruitsWithKgMass.cherry.kg,
  0.005,
  '[MAP] .cherry has a "kg" property with value 0.005'
)
assertEquals(
  fruitsWithKgMass.cherry.mass,
  5,
  '[MAP] .cherry has a "mass" property with value 5'
)
assertEquals(
  Object.keys(fruitsWithKgMass).length,
  8,
  "[MAP] fruitsWithKgMass should have 8 keys"
)
 
// FILTER
// only red fruits
const redFruits = filterDict(
  fruits,
  (fruit) => fruit.color === "red"
)
assertOk(
  redFruits,
  "[FILTER] filterDict returns something truthy"
)
assertEquals(
  Object.keys(redFruits).length,
  4,
  "[FILTER] 4 fruits that satisfy the filter"
)
assertEquals(
  Object.keys(redFruits).sort().join(", "),
  "apple, cherry, grape, raspberry",
  '[FILTER] Keys are "apple, cherry, grape, raspberry"'
)
 
// REDUCE
// If we had one of each fruit, how much would the total mass be?
const oneOfEachFruitMass = reduceDict(
  fruits,
  (currentMass, fruit) => currentMass + fruit.mass,
  0
)
assertOk(
  redFruits,
  "[REDUCE] reduceDict returns something truthy"
)
assertEquals(
  typeof oneOfEachFruitMass,
  "number",
  "[REDUCE] reduceDict returns a number"
)
assertEquals(
  oneOfEachFruitMass,
  817,
  "[REDUCE] 817g mass if we had one of each fruit"
)
  */