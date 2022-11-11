// Sum Zero: Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
         if(arr[i] + arr[j] === 0) {
             return true
         } 
     }
   }
   return false 
}

//-----addToZero's runtime is O(n^2)
// it has a space complexity of O(1)


// console.log(addToZero([1, 2, 3, -2]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1]))
// console.log(addToZero([]))



// Unique Characters: Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = (str) =>{
    let set = new Set()

    str.split("").forEach(char => set.add(char))

    if([...set].join('') === str){
        return true
    } else {
        return false
    }
}

// console.log(hasUniqueChars('monday'))
// console.log(hasUniqueChars('moonday'))

//-----hasUniqueChars' runtime is O(n)
// it has a space complexity of O(n)

// Pangram Sentence: A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 }

//  console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
//  console.log(isPangram("I like cats, but not mice"))

 //------isPangram's runtime is O(n)
 // it has a space complexity of O(n)

// Longest Word: Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord (arr) {
    
    let lengths = arr.map(function(word){
        return word.length
    })

    max = Math.max(...lengths)

    return max

}

console.log(findLongestWord(["hi", "hello"]))

//-------findLongestWord has a runtime of O(n)
// it has a space complexity of O(1)
