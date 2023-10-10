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

console.log(findWords(dog_string))




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