//Destructuring Exercise

//1. What does the following code return?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // Returns 8
console.log(yearNeptuneDiscovered); // Returns 1846

//2. What does the following code return?

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // Returns yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

//3. What does the following code return?

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Returns Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // Returns Your name is Melissa and you like green
  getUserData({}) // Returns Your name is undefined and you like green.

//4. What does the following code return?

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Returns Maya
console.log(second); // Returns Marisa
console.log(third); // Returns Chi

//5. What does the following code return?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // Returns "Raindrops on roses"
  console.log(whiskers); // Returns "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // Returns the last 3 strings in the array.

//6. What does the following code return?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

//7. Refactor old:

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

  //to new:

let { numbers: {a, b} } = obj

//7. Write an ES2015 Version of:

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//to the ES2015 Verson:

[ arr[0], arr[1] ] = [ arr[1], arr[0] ]

//8. Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

//- first: the first element in the array
//- second: the second element in the array
//- third: the third element in the array
//- rest: all other elements in the array

//Write a *one line* function to make this work using : An arrow function, Destructuring, `Enhanced` object assignment (same key/value shortcut)

const raceResults = ( [ first, second, third, ...rest ] ) => ( {first, second, third, rest} )


