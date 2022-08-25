// FUNCTION SCOPE, BLOC SCOPE, LET KEY WORD


// ---------------------------------------------
// Task 1 : Intro

console.log('Hello ES6');



// ---------------------------------------------
// Task 2 :  Variables (let) and Scoping
console.log('\n---------------------------------------------');
console.log('Variables (let) and Scoping\n');


// vars are declared with var take global scope of context

console.log(dog);

var dog = 'Dog1';
console.log(dog)

var dog = 'Dog2';
console.log(dog);

    // let, const : vars are not initialized or undefined


// console.log(cate); // this display an error
let cate = 'British Action'; 
console.log(cate);

 cate = 'British Action2'; 
console.log(cate);



var element = 'some element';
console.log('element before function : ', element)

// function usig var naming element 
function printElement(){
    // scope in function (local SCOPE)
    var element = 'element inside function';
    console.log('INSIDE FUNCTION : ',element);
}

// call the function
printElement();

console.log('element after function : ', element)


// first use of variable in FOR Loop
for(var i=0; i<4;i++){
    var parrot = 'Hey'
}

console.log(parrot);
console.log(i);


// ---------------------------------------------
// Task 2: Execise 1: Fix the code to print 15
console.log('\n---------------------------------------------');
console.log('Task 2: Execise 1: Fix the code to print 15\n');


var age = 15;

// for (var age = 1; age <= 10; age++) {
for (let age = 1; age <= 10; age++) {
    console.log(age);
}

console.log(age); // Should print 15 instead of 10


// ---------------------------------------------
// Task 2: Execise 2: Fix the code to print Jack Russell Terrier
console.log('\n---------------------------------------------');
console.log('Task 2: Execise 2: Fix the code to print Jack Russell Terrier\n');


var myDog = "Jack Russell Terrier";
var shortLeggies = true;

if (shortLeggies) {
    let myDog = "Welsh Corgie";
    console.log(myDog);
} else {
    let myDog = "Border Collie";
    console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier




// ---------------------------------------------
// Task 3: Variables (const) and Immutability
console.log('\n---------------------------------------------');
console.log('Task 3: Variables (const) and Immutability\n');


console.log('\n*****************************************')
console.log(' - VAR\n')
let artist = 'this is an artist';
console.log(artist);

artist = 'another artist';
console.log(artist);

const constVar = 'const element'; // must be initialize
console.log(constVar);

// constVar = 'another artist'; // display an error
// console.log(constVar);
console.log('\n*****************************************')
console.log('- ARRAY\n')
// working with arrays
const tab = [
    'element 1',
    'element 2'
]

console.log('Init values : ',tab);
tab.push('element 3')
console.log('after pushing : ',tab);

tab[1] = 'new element 2';
console.log('updated element 2 : ',tab);

// tab = []; // display an error 
// values are not const, but not the array

console.log('\n*****************************************')
console.log('- OBJECT\n')

// OBJECT
const object = {
    'name' : 'name of person',
    'techs' : [
        'JAVA', 'PYTHON'
    ]
}
console.log('init object : ', object,'\n')

// -----------------------------------------
// FREEZE VALUES OF OBJECT \\

// Object.freeze(object);
// Object.freeze(object.techs);


// add attribute to object
object.year = 2022;
object.techs.push('PHP')
console.log('After updating object : ',object, '\n')

// object = {}; // display an error



// TASK 3: Exercise: Refactor the code to use let/const
console.log('\n---------------------------------------------');
console.log('TASK 3: Exercise: Refactor the code to use let/const\n');

var painter = {
    name: "Van Gogh",
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};
Object.freeze(painter)
Object.freeze(painter.paintings)
painter.birthDate = "March 30, 1853";
// painter.paintings.push("Something");


console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }


/**
 * Challenge Task : Factory Function
 * 
 * Create a function tha takes an array of
 * numbers and returns an array of functions.
 * Each function should return the number
 * at that position squared
 * 
 */
 console.log('\n---------------------------------------------');
 console.log('Challenge Task : Factory Function\n');

 function getSquaredValuesFactory(numbers){
    let functions = [];

    for (var i=0; i<numbers.length; i++){
        let current = numbers[i];
        var getSquaredValue = function(){
            return current * current;
        }
        functions.push(getSquaredValue);
    }

    return functions;
 }


 var numbers = [1, 2, 3, 4];
 var squaredValuesFns = getSquaredValuesFactory(numbers);

squaredValuesFns.forEach(fn => console.log(fn()));













// Task 4: Exercise: Extract data with destructuring
console.log('\n---------------------------------------------');
console.log('Task 4: Exercise: Extract data with destructuring\n');


const o = {
    name :'value of name',
    value : 12345,
    list : [
        'element 1', 'element 2', 'element 3'
    ]
}

console.log('value of init object : \n', o);

// -1- Method 1 basic method
console.log('\n-1- Method 1\n');

const theName = o.name;
const theList = o.list;
console.log('name : ',theName, '\nList : ', theList);


// -2- Method 2
console.log('\n-2- Method 2\n');

const {name, list} = o;
console.log('name : ',name, '\nList : ', list);


// -3- Method 3
console.log('\n-3- Method 3\n');

const {name : myName, list : myList} = o;
console.log('name : ',myName, '\nList : ', myList);


// - Array
console.log('\n- Array\n');

const techs = ['JAVA', 'PYTHON', 'JS']
const [f, s] = techs;
console.log('value of f : ', f, ' value of s : ', s);




// - Function
console.log('\n- Function\n');

// -1- Method 1
console.log('\n-1- Method 1\n');

function structuring(element){
    console.log(element.name);
    console.log(element.value);
    
}

structuring(o);


// -2- Method 2
console.log('\n-2- Method 2\n');

function structuring({name, value}){
    console.log(name);
    console.log(value);
    
}

structuring(o);


// -3- Method 3
console.log('\n-3- Method 3\n');

function structuring({name: n, value : v}){
    console.log(n);
    console.log(v);
    
}

structuring(o);





const ingredients = {
    tea: 'black',
    milk: 'soy',
    sweetener: 'honey',
    spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
}

// // Destructure the parameters
// function prepareChai(ingredients) {
//     const tea = ingredients.tea;
//     const spices = ingredients.spices;
//     const milk = ingredients.milk;
//     const sweetener = ingredients.sweetener;

//     console.log("Mix the " + tea + " tea " +
//         "with the " + spices + " in a small pot. " + 
//         "Add a cup of water and bring to boil. Boil for 2-3 min. " +
//         "Add " + milk + " milk and " + sweetener + ". " + 
//         "Simmer for 3 min. Serve masala chai hot or warm!");
// }

// prepareChai(ingredients);

console.log('\n---------------------------------------------');

function prepareChai({tea='regular', spices, milk, sweetener}) {

    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " + 
        "Simmer for 3 min. Serve masala chai hot or warm!");
}

prepareChai(ingredients);
console.log('\n---------------------------------------------');
console.log('- Skip some elements \n');

const spices = ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
const [firstElement, ...other] = spices;

console.log('first element : ', firstElement, '\nOther elements : ', other);

const [ ,, third] = spices;
console.log('third element : ', third);



// ---------------------------------------------
// TASK 5: Strings and Interpolation
console.log('\n---------------------------------------------');
console.log('TASK 5: Strings and Interpolation\n');
console.log('\t includes, startsWith, endsWith, repeat, Template Lateral\n');


const tech = 'JAVASCRIPT';
console.log(tech.includes('SCRI'));
console.log(tech.startsWith('j'));
console.log(tech.endsWith('j'));
console.log(tech.repeat(5));

console.log(`We use ${tech === 'JAVASCRIPT' ? "JAVA" : 'Python'}`);




const country = "Bulgaria";
const city = "Sofia";


if (country.includes("Bulg") ) {
    console.log("The country starts with Bulg");
}



if (city.startsWith("So")) {
    console.log("The name starts with So");
}

if (city.endsWith("a") === city.length - 1) {
    console.log("The name ends with a");
}

console.log(
    `
    The capital of ${country} is the city of ${city} 
    `
);



// ---------------------------------------------
// TASK 6: Arrow functions basics
console.log('\n---------------------------------------------');
console.log('TASK 6: Arrow functions basics\n');

const numberss = [1,2,3,4,5,6]

const calculateDouble = element => element*2;

let doubleNumbers = numberss.map(calculateDouble)
console.log('doubleNumbers : ', doubleNumbers);



// TASK 6: Exercise : Filter out only the prime numbers from the array
console.log('\n---------------------------------------------');
console.log('TASK 6: Exercise : Filter out only the prime numbers from the array\n');

const isPrime = element => element % 2 ===0;
const primeNumbers = [1,2,3,4,5,6].filter(isPrime)
console.log('primeNumbers : ', primeNumbers);




// TASK 7: Arrow fonctions and this
console.log('\n---------------------------------------------');
console.log('TASK 7: Arrow fonctions and this\n');

function Dog(){
    this.age = 0;

    setInterval(() => {
        this.age +=1;
        console.log(this.age);
    }, 1000)
}

// const black = new Dog();

const isOdd = (...args) => {
    console.log(args);
    return args[0] % 2 === 1
};
console.log(isOdd(2, 1));


// TASK 7: Exercise
console.log('\n---------------------------------------------');
console.log('TASK 7: Exercise\n');

function Translator(){
    this.phrase = 'Good Event';
    this.dictionnary = {
        Good : 'eau',
        Event : 'paix'
    }
}

Translator.prototype.getKabylePhrase = function(){
    return this.phrase
    .split(" ")
    .map((word) => {
        return this.dictionnary[word]
    })
    .join(" ")
}

const translator = new Translator();

console.log(translator.getKabylePhrase());
