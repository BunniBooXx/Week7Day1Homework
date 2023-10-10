console.log("hello world")


console.log(1+10)


// WRITING A COMMENT
/* Multi 
line 
comment 
*/

// in JS you need to DECLARE your variables
var myName = 'shoha'

console.log(typeof myName )
myName = 'Brendan'
myName = 9000
console.log( typeof myName)
console.log(myName)


// JS hoisting
console.log(age)
var age = 10
console.log(age)
var variable // DECLARATION
variable = 100 // DEFINITION

//.instead of VAR use LET or CONST
let myList = [1,2,3,4,5]
console.log(myList)
const nums = [10,9,8,7,6]
console.log(nums)

// CONST, Stands for constant variable, not meant to be changed 
//cannot reassign value to variable when you use CONST
const favoriteNumber = 10; 
console.log(favoriteNumber * 10)
let favoriteColor = "Yellow"
favoriteCOlor = "BLUE"
console.log(favoriteColor)

// use const until you have to use let


// in JS there is no distinction between Integers and Floats 
const num1 = 10 
const num2 = 3.14
console.log(num1, typeof num1)
console.log(num2, typeof num2)


// JS does not care about indentations 

const teacher1 ="Shoha"
const teacher2 = "Brendan"
console.log(teacher1)

// lists are known as Arrays in JS
const names = ["Shoha", "Brendan", 1,2,3,[10,10,10]]
console.log(names[5][1])
console.log(typeof names)
//console.log(Arrray.isArray(names))

// dictionaries are known as Object in JS

const obj= {
    'first name': "Jaqueline", 
    age: 9001, 
    last_name: "Smith", 
    "Content-Type": "human"
}; 
console.log(obj)
console.log(obj['first name']) // bracket notation  use for names with spaces or - (hyphons)
console.log(obj.last_name) // dot notation


obj['first name'] = "Brendan" // constant variables are still mutable 
console.log(obj) // just not re-assignable 


// undeclared / undefined / null

let car // car is no-longer undeclared
console.log(car) // undefined
car = null
console.log(car)

let shoha = null   // null object is no value 
console.log(shoha)


// BASIC MATH OPERATIONS

console.log('---------------------')
console.log('MATH')
console.log('----------------------')

// addition 
let sum = 5 + 6;
console.log(sum)
sum += 10 
console.log(sum)
sum ++; // ++ goes up by one 
console.log 


//subtraction 
let diff = 10-4
console.log(diff)
diff -=2
console.log(diff)
diff-- // -- minus's by one
console.log(diff)


// multiplication

let prod = 5*4
console.log(prod)
prod*=2
console.log(prod)

// division
let quo = 10/3
console.log(quo)
quo/=2
console.log(quo)

// exponential

let square = 5**2
console.log(square)
square**=2
console.log(square)

// more math tingz
const floor = Math.floor(24.7)
console.log(floor)
const ceil = Math.ceil(24.7)
console.log(ceil)


const n1 = 2
const n2 = "3"
const res = n1 + parseInt(n2) // n1 + 3 JS will let it be concantenated as string 
// and it would be the output of 23 so remember to use the parseInt()
console.log(res)


console.log(parseInt('24.7', typeof parseInt('24.7')))
console.log(parseFloat('24.7'), typeof parseFloat('24.7'))

// FUNCTIONS
console.log('-------------------------')
console.log('FUNCTIONS')
console.log('-------------------------')

// method 1 :most similar to python

function nameOfFunction(param1,param2){
    'line1';
    'line2';
    'line3';
    return param1 + param2
}

console.log(nameOfFunction(1,200))

// method 2 : nameless function, BUT store it to a variable

const newFunc = function (x,y){
    'line1';
    'line2';
    return x + y
}


console.log(newFunc(10,20))


// method 3: arrow function 
// SYNTAX () => {}
const test = (a,b) => {
    const output = a + b
    return output
}
console.log(typeof test)
console.log(test(10,15))


const func1 = () => {
    console.log('running func1')
}
func1()



// arrow function with ONE param

const happyBirthday= (age) => {
    const newAge = age + 1
    console.log('Happy Birthday! You are now '+ newAge +'years old')
}
 
happyBirthday(10)

// arrow function with one line in the body 
// curly braces and RETURN keyword are not neccessary
const multiply = (num1,num2) => {return num1 * num2}
console.log(multiply(5,4))

// simple arrow function with one param and one line
const addTwo = num => num + 2
console.log(addTwo(10))


// self invoking function
//(()=>{
   // console.log('i am running on my own')
//})()


// closure

const outer = () => { 
    let counter = 0; // private variable 
    const inner = () => {
        console.log(counter);
        counter++
    }

    return inner
}

const result = outer()

result()


/// Control Flow
// if statements

const ifTest = num => {
    if (num  < 10){
        console.log('small')
    }
    else if (num > 20){
        console.log('big')
    }
    else {
        console.log('meduim')
    }
    
}

ifTest(5)
ifTest(11)
ifTest(200000)

// Ternary Operator 
// SYNTAX: conidition ? (what happens if true) : (what happens if flase)
const getFee= isMember =>{
    return isMember ?  "$2.00" : "$10.00"
}
console.log(getFee(true))


// loops 
// FOR LOOPS

 const myNames = ["Shoha", "Brendan", "Masseh", "Donte"]

 //SYNTAX: for (let variable; condition; incrementor){ codeblock }

 for(let i = 0; i < myNames.length; i++){  // .length is same as len in python
    console.log(i, myNames[i])
 }


 //ES6
// for - of loop when looping through an array
 for (let name of myNames){
    console.log(name)
 }; 

 // for - in loop when looping through an object 

 const people = {
    'Shoha': 9000,
    'Brendan':9001,
    'Aften':9002
 }

 for(let person in people){
    console.log(person)
 }




 // while loops
 // while (condition) { codeblock }

 let i = 0; 
 while (i < 10){
    if (i==4){
        i++
        continue
    }
    else if (i == 8){
        break
    }
    console.log(i)
    i++
 };


 // do while 
 // the codeblock will run ATLEAST 1 time
 i = 100 
 do{
    console.log('HI!')
    i++
 }
 while (i < 10)

 // array methods 
 // .toUpperCase()  does capital to name

 const my_people=["Shoha", "Brendan"]
 my_people.push("Sam")
 console.log(my_people)
 console.log(my_people[1])
 console.log(my_people.length)
 console.log(my_people.toString())
 console.log(my_people.join('##'))
 console.log(my_people.slice(1,4))

 // splice
 console.log(my_people.splice())
 console.log(my_people.splice(1,2))
 console.log(my_people)



 //==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

// need something to check each word (index) in String/list

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
let dog_words= dog_string.spilt(" ") 
let dog_names_2= dog_names.toUpperCase()

function findWords(){
  if (dog_words == dog_names_2){
    return console.log("Matched dog_name")
}
else { 
    return console.log("No Matches")
}
}

console.log(findWords(dog_words))




//Call method here with parameters



//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


given_arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
output_arr==[]

function replaceEvens(arr){
    if ( i in given_arr == (n % 2== 0 )){
         return given_arr.push("even index")
    }
    else {
        given_arr.pop()

    }
    
}
console.log(replaceEvens(give_))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
