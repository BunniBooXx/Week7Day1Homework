 //==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

// need something to check each word (index) in String/list
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
function findWords(dog_string, dog_names) {
    let found = false;
  
    for (let i = 0; i < dog_names.length; i++) {
      if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
        console.log("Matched " + dog_names[i]);
        found = true;
      }
    }
  
    if (!found) {
      console.log("No Matches");
    }
  }
  
  
findWords(dog_string, dog_names);
//let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
//let dog_names = ["Max","HAS","PuRple","dog"]
//let dog_words = dog_string.spilt(' ');

//function findWords(){
 // if (i in dog_string.includes(i in dog_names)){
   // return console.log("Matched dog_name")
//}
//else { 
 //   return console.log("No Matches")
//}
//}

//console.log(findWords("Max"))




//Call method here with parameters



//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */








const given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//output_arr==[]
function replace(arr){
    for(let index=0;index<arr.length;index++){ // loop to iterate over the array.
    if(index%2==0){// check for the even index
    arr.splice(index,1,"even index");
    
    }
    }
    console.log(arr);
    }
   console.log(replace(given_arr));// function calling

// function replaceEvens(arr){
   // if ( i in given_arr == (n % 2== 0 )){
      //   return given_arr.push("even index")
   // }
   // else {
      //  given_arr.pop()

   // }
    
//}
//console.log(replaceEvens(give_))




//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]