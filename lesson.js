//////// JAVASCRIPT FUNDAMENTALS /////////////////////////////////////////////////////////////////
// This is script is a breakdown lesson of some of the more fundamental aspects of coding in
// JavaScript. In this lesson, we will explore JS data types, operators, conditionals, loops, and
// finally, functions. Make sure to complete each section in this lesson before moving on to the next, 
// since the topics in each section will build off of previous sections. I will not be covering DOM Manipulation 
// since in this lesson I want to keep this strictly scoped for understanding the basics -- but understanding them well. 
// However, an index.html file has been provided for you if you want to use it for that. 

// A quick note on JavaScript: JS reads files from top to bottom and left to right on each line. 
// Consider this when you're organizing your script's structure. 

// You can also write comments in JS by starting a line with // 
// or by pressing command + / from anywhere on a line. Comments are not read by the script when it runs
// and are useful in the problem solving process. If at any point you get stuck, comment out your thought
// process in plain english to establish your logic and break the problem down. Then, for each logic step
// written out in your process, convert each line of logic to code. If that doesn't work for you, break down 
// the logic even more before you start converting it to code. In programming, we call this process 'psuedocoding' - it's a very useful skill to develop.

// I will not be covering DOM Manipulation in this lesson I want to keep this strictly scoped
// for understanding the basics -- but understanding them well. However, an .html file has been
// provided for you if you want to use it for that.











// CONSOLE.LOG() //////////////////////////////////////////////////////////////////////////////
// Before you actually get started with this lesson, console.log() each variable
// To see their values in your browser console or in your terminal (if using node) 

// console.log() is THE MOST IMPORTANT inbuilt JavaScript function, because it allows you
// to SEE THE VALUES of your data/variables/function outputs/etc.
// To use it, simply input a value (raw data or variables) into the parenthesis () at the
// end of console.log()
// To console.log() multiple items at the same time, put a comma , between each item in the console.log()
// like this: console.log(item1, item2, item3)

// console.log() can be used in a variety of formats: console.log('message'), console.log(oneThing + anotherThing),
// console.log('Look at ', myVariable), console.log(`I am ${age} years old`)
// However, a good practice to follow with your console.log() is to LABEL YOUR CONSOLE.LOG()
// That way, you will know what is being returned with each console.log(). Here is a good example of how
// you should be formatting most of your (important) console.log()s that would benefit from having a label:

// console.log('My Variable: ', myVariableName)

// WHAT GOES INSIDE THE PARENTHESIS??? Just to re-iterate, here it is, broken down:
// console.log('String with a message followed by a colon and a space: ', variableOrRawData)
// This practice of console.log()-ing will print your message and the value of the second item like this:
// console.log('Dice Sides: ', 6)    --- prints this ------>  Dice Sides: 6

// console.log('Days In a Week: ', 7)
// Uncomment the line above to see it in your console. It will return:
// Days In a Week: 7

// open your index.html from your terminal from within this directory to check
// Command is: open index.html
// You will have to refresh your page in browser every time you add console.log()s you want to check

// CONSOLE.LOG() EACH VARIABLE DECLARED BELOW if you want see their values, this will be good practice for
// you to get in the habit of correctly console.log()-ing to check your code. Once you have console.log()-ed
// a variable, comment out your console.log(), don't erase it.

// Also, a brief note on semicolons ; 
// You can think of semicolons like periods for a logical message
// Let's think about it like a text message. If you really wanted to, you could add
// a period . to the end of your message, since it would be gramatically proper.
// However, your message will still get across just as well with out a period
// You 
// Either use them at the end of each complete line of code;  <--- like this
// or don't.
// In this lesson, I will not be using semicolons at the end of each line
// because I don't want to type mostly useless characters that could possibly create
// syntax errors if they are input in the wrong place (Why stress about it if you don't have to?)













// ERRORS //////////////////////////////////////////////////////////////////////////////
// You might notice that you occaisonally have errors in your console
// This is a good thing, since if we didn't have errors we would be spending a huge
// amount of time trying to find bugs in our code. Example: uncomment this next line to see.

// console.log('What? An Error!? OH NOOOOOOOO!')

// This line of code will produce an error because console is not spelled correctly
// The error message reads:
// Uncaught ReferenceError: console is not defined                             lesson.js: 74
// at lesson.js:74

// Lets break this message down.
// The first part, Uncaught ReferenceError: tells us the TYPE OF ERROR in our code
// Second, the message after the colon : tells us WHAT IS CAUSING THE ERROR in our code
// Lastly, and most importantly, you'll notice on the far right side and below the whole
// error message, we are being told WHERE THE ERROR IS FOUND, in this case, lesson.js: 74.
// lesson.js: 74 is telling us WHICH FILE: , followed by WHICH LINE is producing the error
// In this case, our error is found in this file, lesson.js at line 74.
// READ YOUR ERROR MESSAGES WHEN YOU HAVE ERRORS! They are incredibly useful and will save you time.
// If you don't understand an error message, copy and paste the whole message into a google search.

// With console.log() and understanding error messages complete, you're good to start learning the fundamentals below.

















// JS VARIABLES /////////////////////////////////////////////////////////////////////
// To start off, let's discuss JavaScript variables.

// Variables can be declared with three main key words: let, var, and const,
// followed by a space, and a variableName (usually written in camelCase, in special cases - WRITTEN_LIKE_THIS).
// If a variable is not declared with a key word, it will return as 'undeclared',
// which you don't want - so don't forget to declare your variables properly.

let pizza
// Currently, our pizza variable has been declared, but it hasn't been assigned a value.
// We will update (mutate or reassign a new value) it later.


// let is the preferred variable declaration key word
// A a variable declared with let CAN have its values UPDATED (mutated), but it CANNOT BE RE-DECLARED
// it is block-scoped (meaning within the {} curly brackets it was defined in)
// Most example variables in this lesson will be declared with let

let ovenTemp = 400

// ovenTemp has been declared with let and assigned a value of 400, an integer.
// Since temperature in an oven can fluctuate, this is a good example for using let.
// ovenTemp CANNOT BE RE-DECLARED with another let, var or const, but its value can be updated (mutated or reassigned a new value)

// const variables are declared in the case of varables whose values should remain constant
// A variable declared with const CANNOT have its values UPDATED, and also CANNOT BE RE-DECLARED
// const is an ideal variable for function values (since they will not change),
// url patterns, and sensitive data (NAME_API_KEYS_LIKE_THIS) 
// const is also a block-scoped declarative key word

const ovenSpace = '2 Racks'

// ovenSpace has been declared with const and assigned a value of '2 Racks'
// In this example, we know that an oven's space cannot change, therefore a good use of the const variable declaration.
// ovenSpace CANNOT BE RE-DECLARED and its value, '2 Racks', CANNOT BE UPDATED

// Typically, one should not use var, since it is pre-ES6 (latest version of JS)
// var variables CAN BE RE-DECLARED (you don't want that, I promise you), AND UPDATED 
// However, the best use case for using the var key word is WITHIN A FUNCTION
// since var is both globally (can be access from anywhere - will give you errors)
// and function (only within a function) scoped, it can be more prone to causing errors
// than let or const. An example of the var key word being used to declare a variable can
// be found in the FUNCTIONS section near the bottom of this script.

// Variables are typically set to a value.
// to do this, add an = sign after the variableName and give the variable a value.
// Values are typically JS datatypes, but variables can also be set to functions(), 
// other variables (usually as mutated versions of other variables), and files in some cases

pizza = 'deluxe'

// since our variable pizza was already declared with let, we know that we CANNOT RE-DECLARE the
// variable pizza. However, we can assign it a new value, since it can be updated (assigned a new value in this case)
// Now, pizza is equal to the string 'deluxe'

// Let's reassign pizza, I don't think I'm feeling like a deluxe right now

pizza = 'hawaiian'

// Actually, ham sounds pretty gross, let's make it a vegetarian pizza

pizza = 'vegetarian'

// console.log(pizza) on the line below each line we reassigned pizza with a new value.

// That's it on variables for now. If you'd like to read a little more on it, check
// this brief reading on variable declarations in JavaScript: 
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

















// JS DATA TYPES ////////////////////////////////////////////////////////////////////////////////////
// In this section, we will break down different examples of the 5 JavaScript data
// types: strings, integers, booleans, arrays, and objects
// We will be using the let key word to declare variables for each data type
// because packaging data into variables with useful (accurately described) naming conventions
// allows you to both write cleaner (more legible + DRY) code and re-use your data in multiple places
// After we cover each data type, we will also cover METHODS (inbuilt JS functions) for each data type
// that perform useful operations for each data type
// Most METHODS are used in this fashion: variableName.methodName(parameters for the method)
// Typically, you use a method by adding . AFTER a variableName and performing the method on that variable by stating
// the methodName with parenthesis () connected to the methodName after the . Inside the parenthesis, you give the
// method 'parameters' or the specifications of how it is going to work.

// STRINGS //
// Strings are characters that have been grouped together by quotes
// They can have 3 quote types '' (single quotes), "" (double quotes), and `` (backticks)
// Strings must ALWAYS BE INSIDE QUOTES, but they can also be nested inside of another string
// if you use different quote types on the outside and inside string. For example: "This sentence has a 'word' "
// Typically, you won't have to nest your strings, but I'm leaving this example for when you do
// Strings have length (the number of characters) and have their own unique methods - we'll get to that later

let stringVariable = "this is a string" 

// spaces have been left after each variable for you to console.log() them
// string with double quotes

let otherString = 'this is a string'

// string with single quotes ''

let interpolatedString = `Also, ${stringVariable}`

// string variable with string interpolation (backticks `` and ${}) `${variable}`
// String interpolation allows you to pass variables into strings and print them out


// STRING METHODS //
// In JavaScript, there are several STRING METHODS you can make use of.
// We'll break down useful string methods below.

//////////// string.length ///////////////////////////
// length - returns the LENGTH of a string
// Let's find the length of otherString, why not?


// console.log() otherString.length here ^ to see how long the string is
// Your console.log() should return 16, since there are 16 characters in otherString


// The 3 methods below deal with POSITIONS (indices) in a string
// An index is an important attribute to know in many situations, as it will tell you the POSITION of 
// a CHARACTER in a STRING as an INTEGER VALUE
// Let's make a new string, called longString that we can use some of these methods on below

let longString = "Ice age heat wave, can't complain. If the world's at large, why should I remain? Walked away to another plan. Gonna find another place, maybe one I can stand. I move on to another day, to a whole new town with a whole new way. Went to the porch to have a thought. Got to the door and again, I couldn't stop. You don't know where and you don't know when. But you've still got your words and you've got your friends. Walk along to another day. Work a little harder, work another way. Well uh-uh, baby, I ain't got no plan. We'll float on, maybe would you understand? Gonna float on, maybe would you understand? Well I float on, maybe would you understand?"

// Wow, that's a long string! Let's see if we can find some things out about it.

/////////// string.indexOf() ////////////////////////////
// indexOf() - returns the index of (the position of) the FIRST occurrence of a specified text in a string
// It is used like this firstString.indexOf('character(s) in the string')
// JavaScript counts positions from zero.
// 0 is the first position in a string, 1 is the second, 2 is the third ...
// indexOf() will return -1 if the text is not found in the string.
// In this case, let's find the indexOf() the substring (string within a string) 'float on'

let floatOnPosition = longString.indexOf('float on')


// console.log() floatOnPosition here ^ to see the INDEX OF the FIRST OCCURENCE of the substring 'float on'
// Now we know that the first occurence of the substring 'float on' is at the 527th character in longString, nice

// There is a SECOND WAY to use indexOf()
// If you include an index as a second parameter in indexOf along with the substring you want to find like this:
// firstString.index('hi', 15)
// indexOf() will start searching for the substring 'hi' in firstString starting from the 15th character

// You might notice that the word ' I ' by itself (spaces on each side) occurs in the second sentence in this string.
// It's position is at index 70. What if we wanted to skip that and find the next occurence of the
// substring ' I ' ?
// Let's try it below with the indexOf() method, using the second parameter 
// to tell indexOf() to start searching from a higher index

let nextI = longString.indexOf(' I ', 75)


// console.log() nextI here ^ to see the index of the next ' I ' STARTING at index 75 of longString
// 145, nice. Now we know that the second position of ' I ' is at the 145th character in longString

/////////// string.lastIndexOf() ////////////////////////////
// lastIndexOf() is just like indexOf() but instead returns the LAST occurence of a
// specified text in a string and searches through the string BACKWARDS
// It also has an option for a second parameter (the index to start from) like indexOf(),
// but it will start searching backwards from that index instead

// To test out lastIndexOf(), let's find the last occurence of the substring 'plan' 
// starting from index (character) 650 and counting backwards - Why not?

let lastPlan = longString.lastIndexOf('plan', 650)


// console.log() lastPlan here ^ to see the last occurence of the word 'plan' in long string
// after counting back from the 650th character in longString
// You'll notice that the last occurence of the substring 'plan' is found at the 515th character in longString

/////////// string.search() ////////////////////////////
// search() searches a string for a specified value and returns the position of the match
// search() works just like indexOf(), but with a couple key differences
// First it CANNOT accept a second parameter that tells it where to start searching, like indexOf() can
// But search() can accept powerful search values (regular expressions).
// I will not be covering regular expressions here since they are an advance subject, but
// feel free to take a look here: https://www.w3schools.com/js/js_regexp.asp if you'd like to know more

// Let's use the search() method to find the position of the substring 'heat wave' in longString

let heatWave = longString.search('heat wave')


// console.log() heatWave here ^ to see the first occurence of the substring 'heat wave' within 
// longString. It should be at the 8th character!

// The next 3 methods deal with EXCTRACTING VALUES from a string

////////// string.slice() ////////////////////////////
// slice() extracts a part of a string and returns the extracted part in a new string
// slice() requires 2 parameters a start and an end, to tell it where to extract values of a string
// the slice() DOES NOT INCLUDE the character at the END, but everything before it.
// In practice it looks like this slice(start, end) or, for example, someString.slice(0, 10)
// someString.slice(0, 10) will EXTRACT the characters 0-9 from someString

// Let's try it by taking out a slice() from longString 

let lyricLine = longString.slice(0, 80)


// console.log() lyricLine here ^ to see the substring we extracted from longString
// Slice can be a very useful method for extracting data from large strings

// You can also use slice() to extract values starting from the END of a string
// To do this, give slice() NEGATIVE indices. -1 is equal to the SECOND TO LAST CHARACTER in a string
// Let's try this other method out by extracting another substring from longString
// We'll tell slice() to START with a negative index, counting back from the end of longString
// and to END at the last index of longString, which is 653.

let lastLyricLine = longString.slice(-44, 653)


// console.log() lastLyricLine here ^ to see the LAST 44 characters within longString
// Well I float on, maybe would you understand?

////////// string.substring() ////////////////////////////
// substring() is similar to slice(), however it CANNOT accept negative indices like slice() can
// It typically takes 2 parameters, a START and an END, just like slice()
// However, if you omit the 2nd parameter in substring() it will slice out the rest of the string
// This is the one case where you should use substring() instead of slice.

// Let's try out substring() with one parameter here

let someLines = longString.substring(482)


// console.log() somelines here ^ to see how it is extracting values from longString
// by STARTING at the 482nd character in longString

////////// string.substr() ////////////////////////////
// substr() is similar to slice(), but second parameter specifies the LENGTH of the extracted part.
// It's first parameter is the START of where you want to extract values in the string.
// This is useful if you know where a substring starts, but you'd rather define the length of the 
// substring, rather than specificying where it ends

// Let's try out substr() on longString down below

let lineWithLength = longString.substr(308, 106)


// conosle.log() lineWithLength here ^ to see the substring of longString that has a length of
// 149 characters and starts at the 158th character in longString

////////// string.charAt() ////////////////////////////
// charAt() will extract the value of a single character from a string
// It requires one parameter, the index of the character you want to extract
// This can be useful if you want to extract a certain character from a string
// Let's try it out below

let singleCharacter = longString.charAt(79)


// console.log() singleCharacter to see what the value of the 79th character in longString is.
// Pretty cool, right?
// Next, we'll deal with replacing characters in a string

////////// string.replace() ////////////////////////////
// the replace() string method will find characters in a string and replace them with the characters you specify
// It takes 2 parameters, the characters you want to replace and the characters you want to replace them with
// It typically looks like this in practice someString.replace('foo', 'bar')
// In this instance, we will replace the characters 'foo' in someString with 'bar'
// By default, the replace() method replaces only the first match
// It is also Case-Sensitive, meaning characters that are uppercase will not match lowercase values of the 
// same character.

// Let's replace the substring 'words' in lineWithLength with 'worries'
// and reassign the value of the new string with replaced characters to lineWithLength
// For some reason, that's the way I've always heard it

lineWithLength = lineWithLength.replace('words', 'worries')


// console.log() lineWithLength here ^ to see if 'words' was replaced
// Something doesn't feel right about this use of replace(), let's 
// switch it back. You can console.log() lineWithLength below to see
// the changes reflected.

lineWithLength = lineWithLength.replace('worries', 'words')

////////// string.toUpperCase() ////////////////////////////
// toUpperCase() will make ALL characters in a string UPPERCASE
// It doesn't require any parameters
// Let's test it out on a new variable shortSentence below

let shortSentence = 'i can make letters like this, fear me mortals'

// Alright, let's make these upper case, for dramatic effect

let intimidatingSentence = shortSentence.toUpperCase()


// console.log() intimidatingSentence to see if it is UPPERCASE or not

////////// string.toLowerCase() ////////////////////////////
// Like you might expect, toLowerCase() will make all characters in a string lowercase
// Let's make intimidatingSentece less intimidating

intimidatingSentence = intimidatingSentence.toLowerCase()


// console.log() intimidatingSentence to see if it is now in fact, less intimidating

////////// string.concat() ////////////////////////////
// concat() is one of the most useful string methods
// Use it like this: stringName.concat('some string') or with variables stringName.concat(someOtherString)
// In effect concat() is equivalent to string1 + string2
// It adds a substring onto another string, let's try it out with a couple new variables

let string1 = "      hello "
let string2 = "world       "

let concattedStrings = string1.concat(string2)



// console.log() concattedStrings here ^ to see what happens when using concat()
// It seems to have a lot of spaces on both sides of the two words (you might have to drag your
// Console tab in your browser out to see that), so let's use another method to fix that.

////////// string.trim() ////////////////////////////
// trim() will remove whitespaces from both ends of a string
// This can be very useful when cleaning data returns that have whitespaces
// Let's test it out by trim()ing concattedStrings

let trimString = concattedStrings.trim()


// console.log() trimString to see the new string without extra whitespaces

////////// string.split() ////////////////////////////
// split() is probably THE most important string method, so we've saved the best for (almost) last
// split() will split a string INTO AN ARRAY (I know we haven't covered them yet, but we will, I promise)
// by splitting the string at the character you specify in split()'s parameter and returning an array of substrings.
// An example of this: trimArray = trimString.split(' ') will equal ['hello', 'world']
// IF YOU REMEMBER ANY STRING METHOD REMEMBER THIS ONE, it's very useful.
// spaces in a string, denoted by ' ', are a common character to split strings on

// Let's test this out by splitting intimidatingSentence on spaces ' '

let splitIntimidation = intimidatingSentence.split(' ')


// console.log() splitIntimidation to see the split (array) of intimidatingSentence
// Being able to convert strings into arrays is a hugely valueable skill in JavaScript
// since this will allow you to transform data into new data types. 
// join() is the inverse of split(), but since it is an array method, we will cover it 
// in the ARRAYS section.

////////// String() ////////////////////////////
// One more very useful string method is String()
// String() can mutate an INTEGER TO A STRING, which can
// be very useful when formatting data.
// Let's try it out here. To do this effectively, we'll mutate an integer into a string
// and concat() another string with it to see if it is, in fact, a string. Since strings can't
// be added to integers, it will only work if the integer was converted into a string.
// Number() is the inverse of String() but we'll cover that in the INTEGERS section.

let oneHundred = String(100).concat(' is one hundred.')


// console.log() oneHundred here to see String() at work
// Being able to mutate integers into strings is hugely useful!

// Now let's make use of a few string methods used together
// Let's say I have a sentence as a string with all lowercase letters, but I want to
// make the first letter capitalized, like a proper noun, or the first word in a sentence would be.
// To fix that here is an example below.

let california = 'california'
// This string is nice, but I want it to look like this: 'California'
// Here is one way we could fix that.

california = california.charAt(0).toUpperCase().concat(california.substring(1))
// Here we are reassinging the value of california to the FIRST CHARACTER
// in the the string: 'c' TO UPPERCASE --> 'C'
// and then adding the rest of the string, starting at the second character (index 1)
// 'alifornia'
// Therefore california.charAt(0).toUpperCase().concat(california.substring(1)) is equal to
// 'C' + 'alifornia' or 'California', magic!


// console.log() california here ^ to see its new value.

// This concludes our explorations of strings and string methods, we'll move on to integers in 
// the next section





// INTEGERS //
let integer = 10

// this is a standard integer (whole number) as a variable

let float = 33.333333

// this is a an integer float, (has trailing numbers after a decimal)

// BOOLEANS //
let boolean = false
let otherBoolean = true

// These are boolean data type variables, they are equal to either true or false
// Booleans can be very useful for establishing logic in a function


// ARRAYS //
// Arrays are defined by square brackets [], which can contain many items
// separated by commas. Each item in an array has an index,
// with the first item starting at index 0 and moving up by 1 for each item. Example below.
// Here is an array: ['item 1', 'item 2', 'item 3']
// It's indices are:    0 ^       1 ^       2 ^
// Some arrays are empty, meaning they have zero items within them. This is a very useful way of
// creating an array that you will have access to later, we will mess around with this empty array
// a little further down below.

let emptyArray = []

// Arrays also have length, which is always equal to the number of items within the array.
// The syntax for finding an array's length is arraysName.length
// This will will always return an integer value equal to the length of the array.
// Here is an array called mixedArray, defined below.

let mixedArray = ['a string', 25, {hello: 'world'}, true, interpolatedString]

// Let's get the length of mixedArray

// console.log() the length of mixedArray above this line
// Now, what if we wanted one less than the length of mixedArray?
// Simply add a - 1 inside your console.log() after the length of mixedArray

// Indices are typically how you find and use the values of items in an array
// Arrays are iterable, meaning each item within the array can be hit with a loop
// or extracted and / or manipulated after being found at its index
// To find the value of an item in an array ADD SQUARE BRACKETS [] with the index
// of the item INSIDE THE BRACKETS to the ARRAY NAME like this:
// arrayName[3]
// In this case, we are accessing the VALUE OF THE FOURTH ARRAY ITEM which is found at the 3RD INDEX
// More examples below, using our mixedArray.

let firstItem = mixedArray[0]

// the first item in our array (0th index)
// the value of firstItem is therefore 'a string'
// What if I wanted the second item in mixedArray?


// console.log() the second item in mixedArray above this line.

let objectKeyValueInArray = mixedArray[2].hello

// this is the 3rd item in our array (2nd index)
// Arrays can contain objects. More information on objects is provided below this section.
// To access the value of the key of the object in this array, 
// we need to dot notation object.key, to specify the name of the key
// whose value we want to extract. But first, since this object is in an array,
// we need to use its index in the array. 
// Therefore, the value of the key hello in the object within our array (array[2].hello)
// is equal to 'world'

let variableInArray = mixedArray[4]

// This is the 5th item in our array (4th index)
// Arrays can take in variables that have already been declared
// For example, the variable interpolatedString has already been declared
// Therefore the value of array[4] is 'Also, this is a string', since


// OBJECTS //
// A JavaScript object is contained within curly brackets {} and has KEYS and VALUES, 
// structured like this {key: value}
// and can have nested objects {} or arrays [] within them.

// For objects with MULTIPLE KEYS, separate the keys and values with a comma, like this:

// {someKey: someValue, anotherKey: anotherValue, someOtherKey: someOtherValue}

// If we were to structure the object above in a way that is more legible, we would do it like this:

//          {                                            <--- opening curly bracket
//              someKey: someValue,
//              anotherKey: anotherValue,                <--- keys and values on each line, separated by commas
//              someOtherKey: someOtherValue
//          }                                            <--- closing curly bracket

// A JavaScript Object data type is typically used to store large amounts of data 
// and can contain any of the the other 4 data types: arrays, strings, integers, and booleans
// along with nested objects and arrays for key: values. 

// This is a good example of an object below. It might look intimidating at fist, but we'll break it down.


let objectExample = {
    name: 'Coen Brothers', 
    job: 'directors', 
    movies: [                                                                   // the movies array starts here and ends on line 344
        {title: 'Blood Simple', year: 1984, imdbRating: 7.6},                   // index 0
        {title: 'The Hudsucker Proxy', year: 1994, imdbRating: 7.2},            // index 1
        {title: 'The Coen Brothers', year: 2000, imdbRating: 8},                // index 2
        {title: 'Fargo', year: 1996, imdbRating: 8.1},                          // index 3
        {title: 'The Big Lebowski', year: 1998, imdbRating: 8.1},               // index 4
        {title: 'Inside Llewyn Davis', year: 2013, imdbRating: 7.5},            // index 5
        {title: 'A Serious Man', year: 2009, imdbRating: 7},                    // index 6
        {title: 'Barton Fink', year: 1991, imdbRating: 7.7},                    // index 7
        {title: 'Burn After Reading', year: 2008, imdbRating: 7},               // index 8
        {title: 'Intolerable Cruelty', year: 2003, imdbRating: 6.2},            // index 9
        {title: 'The Ladykillers', year: 2004, imdbRating: 6.2},                // index 10
        {title: 'The Man Who Wasn\'t There', year: 2001, imdbRating: 7.5},      // index 11
        {title: 'No Country for Old Men', year: 2007, imdbRating: 8.1},         // index 12
        {title: 'Miller\'s Crossing', year: 1990, imdbRating: 7.7},             // index 13
        {title: 'O Brother, Where Art Thou?', year: 2000, imdbRating: 7.7},     // index 14
        {title: 'Paris, je t\'aime', year: 2006, imdbRating: 7.2},              // index 15
        {title: 'Raising Arizona', year: 1987, imdbRating: 7.3},                // index 16
        {title: 'To Each His Own Cinema', year: 2007, imdbRating: 6.8},         // index 17
        {title: 'True Grit', year: 2010, imdbRating: 7.6},                      // index 18
        {title: 'Bad Santa', year: 2003, imdbRating: 7},                        // index 19
        {title: 'Romance & Cigarettes', year: 2005, imdbRating: 6.3},           // index 20
        {title: 'Down from the Mountain', year: 2000, imdbRating: 7.2},         // index 21
        {title: 'Crimewave', year: 1985, imdbRating: 5.7},                      // index 22
        {title: 'The Naked Man', year: 1998, imdbRating: 5.1},                  // index 23
        {title: 'Gambit', year: 2012, imdbRating: 5.7},                         // index 24
        {title: 'Suburbicon', year: 2017, imdbRating: 5.7},                     // index 25
        {title: 'Hail, Caesar!', year: 2016, imdbRating: 6.3},                  // index 26
        {title: 'The Ballad of Buster Scruggs', year: 2018, imdbRating: 7.3}    // index 27
    ]
}


// To access the value of a key within a JavaScript Object, use dot notation.
// objectName.key will be equal to the value of the key name specified within the object
// Example 1: If I want to see the value for the name key within the objectExample object
// I would access the value by writing objectExample.name, which would equal 'Coen Brothers'

let nameKeyInObject = objectExample.name

// What if I wanted to know their jobs? How would I find that?

// console.log() their jobs on the line above this one.

// Example 2: Say I want to extract the value of the imbdRating from the movie 'No Country For Old Men'
// within the movies key in objectExample
// To access this value I would first need to use dot notation to enter the movies value, 
// which is a nested array of objects
// objectExample.movies

let allMovies = objectExample.movies

// Then I would need to find the index of the movie within the movies array to access the object
// containing the data for that movie within the nested array
// object.movies[12]

let noCountry = allMovies[12]

// Next I would need to use dot notation again to find the value for the imbdRating
// objectExample.movies[12].imdbRating, which would equal 8.1

let noCountryImdb = objectExample.movies[12].imdbRating

// I can't quite seem to remember the year that 'The Big Lebowski' came out.
// Can you help me out with that?


// console.log() your answer on the above line.
// Also, how many movies have the Coen Brothers made? I haven't seen them all so I'm curious to know.


// console.log() the length of the movies array here.

// And that's it for data type examples, next we'll take a look at operators.

















// OPERATORS //////////////////////////////////////////////////////////////////////////////////////////
// There are several types of JavaScript operators
// Operators are used to perform arithmetic, compare, establish logic, and assign values.
// We will discuss operators below with examples.

// ARITHMETIC OPERATORS //
// Arithmetic operators do math on integer values from left to right
// + adds two items together
// - subtracts one item from another
// * multiplies
// ** is for exponenetials, example: 4^2 (4 squared) ----> 4**2 ----> 4 * 4 -----> 16
// / divides
// % gives the modulus, or in other words, the integer remainder of the first item divided by the second item
// ++ is for incrementing (adding) upward (usually used in a for loop)
// -- is for decrementing (subtracting) (also usually used a for loop)
// We'll get to examples of ++ and -- in the LOOPS section
// No need to console.log() all of these examples, but you can if you'd like to.

let twoPlusFive = 2 + 5

// add two integers together

let twoMinusFive = 2 - 5

// subtract one integer from another

let multiplyNums = 5 * 2

// multiply one integer by another

let fiveSquared = 5 ** 2

// exponential multiplication

let divideNum = 10 / 2

// division

let modulusNum = fiveSquared % divideNum

// Modulus is a very useful operator, especially when used to check for certain integer values
// If the modulus of one number by another is 0, the first number IS DIVISIBLE by the second number
// In this case we are taking the 5 modulus of 25, since fiveSquared is equal to 25 and divideNum is equal to 5
// 25 % 5 -----> will be equal 0 since 25 is divisible by 5 and therefore, no remainder is left.


// STRING OPERATORS //
// String operators work similarly to arithmetic operators, but apply logic to 'string' data types
// + adding to strings together is called 'concatenation', so when you add two strings together, you 'concatenate' them

let simpleSentence = "I'm a" + " " + "JavaScript noob, but that's ok."

// simpleSentence will be equal to "I'm a JavaScript noob, but that's ok.", since it is the result
// of the concatenation (sum) of the 3 other strings

// String concatenation is a very useful tool for manipulating data.
// For example, say I have a base url as a string set to a variable 
// That's cool, this string is the url for github.com!

let githubUrl = "https://github.com/"

// Now what if I wanted to get more specific with it?
// Say I wanted to go to a certain github profile. Let's try it here.

let adamsUrl = githubUrl + "ahonore42"

// This gives us the concatenation of the specific url endpoint after the base url,
// which is equal to "https://github.com/ahonore42" (We should follow each other, I dare ya)


// ASSIGNMENT OPERATORS //
// Assignment operators ASSIGN VALUES TO VARIABLES
// = is the most commonly used assignment operator since it assigns a value to a variable
// But let's say I wanted to change the value of an already declared variable using it's initial value. 
// How would I do that?
// This is where assigment operators really become useful. They are often used IN CONJUCTION with 
// an ARITHMETIC or STRING operator, that's where the magic happens
// Examples of this below.

pizza += ' pizza is delicious!'

// console.log(pizza) above this line to see the new value of pizza
// 'vegetarian pizza is delicious!' 
// What's happenning here? Let's break it down
// In this case, we are using the += assignment operator to concatenate another string with our
// pizza variable, whose value was 'vegetarian', and ASSIGN THE RESULTING VALUE to pizza
// Behind the scenes pizza += ' pizza is delicious!' looks like this:
// pizza = pizza + ' pizza is delicious!'
// By using +=, we are saying that pizza's value is now equal to itself plus the new string ' pizza is delicious!'
// Now, let's turn down the ovenTemp, since our pizza is done baking.

ovenTemp -= 400

// console.log(ovenTemp) above this line to see what happens
// ovenTemp is now 0! We turned it off! How?
// Since the initial value of ovenTemp was 400 and we used ovenTemp -= 400
// What we are saying is ovenTemp = ovenTemp - 400, which in this case
// would reassign the value of ovenTemp to itself minus 400
// You can do this will ALL of the other ARITHMETIC and STRING OPERATORS
// Just be sure you are doing it with the correct data type.
// A few more examples below.

ovenTemp += 5
ovenTemp **= 3
ovenTemp /= 25
ovenTemp *= 2


// OOPS! Looks like someone was messing with our oven temperature and now we're wasting heat!
// Use an arithmetic assignment operator below to reassign the value of ovenTemp to itself
// minus an integer amount to set the temperature back down to 0. Thanks for doing that!


// reassign with ?? here ^

// console.log(ovenTemp) here ^ to check your work



// COMPARISON OPERATORS //
// Compoarison operators are used to compare values or expressions and will return a boolean (true/false) value
// depending on the conditions of the comparison being made. 
// The standard comparison operators in JavaScript are as follows:
// ==	equal to (value only)
// ===	equal value and equal data type
// !=	not equal (value only)
// !==	not equal value or not equal data type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ? is a ternary operator - we will discuss this operator in the next section: CONDITIONALS

// The structure for using a comparison operator looks like this: 
//              valueOrExpression1 operator valueOrExpression2
// Example:             (5 ** 2) % 4 === 1                  
// Will return true, since 1 is equal to 1 both in value and data type

// Examples for each comparison operator are below here. Instead of defining variables, we will be using
// variables we have already defined above or raw data in console.log()s to see these comparison
// operators at work.

// == equal to (value only)

// console.log() ovenTemp and the string "0" with an == operater between them here ^
// ovenTemp's value is the integer 0 (unless you didn't reassign it on line 506) which, 
// although not equal in data type to the string "0", IS EQUAL to the VALUE of the string "0"
// Therefore your console.log() of the two values being compared should return as true


// ===	equal value and equal data type

// console.log() allMovies[12].year + 2 and the integer 2000 with an === operator between them here ^
// Think about why this returns as true.


// !=	not equal (value only)

// console.log() stringVariable and otherString (defined in the JS DATA TYPES section) with a != operator between them here ^
// Think about why this returns as false.

// !==	not equal value or not equal data type

// console.log() false and mixedArray[3] with a !== between them
// Why does this return true? 🤔

// >	greater than

// I wonder if 'Fargo' has a higher IMDB rating than 'O Brother, Where Art Thou?
// Let's find out!
// console.log() allMovies[3].imdbRating and allMovies[14].imdbRating with a > operator between them on line 564
// Which movie has a higher rating?

// <	less than

// How's our ovenTemp doing? Let's check to see if it's gotten really cold since we left it.
// I'm assuming temps under 0 are really cold in this case.
// console.log() ovenTemp and 0 with a < operator between them to see if it's gotten too cold.
// Is our oven too cold?

// >=	greater than or equal to

// Here, I want to see if the Coen Brothers have made at least 25 movies
// console.log() the length of the allMovies array and 25 with a >= operator between them
// HINT: arrayName.length
// Have they made at least 25 movies?

// <=	less than or equal to

// Earlier, we checked to see if our ovenTemp was under 0 and found out that it wasn't.
// But I want to double check the ovenTemp here to make sure that it's also not above 0.
// console.log() ovenTemp and 0 with a <= between them this time.
// Is the ovenTemp at 0?



// LOGICAL OPERATORS //
// Logical operators are often used in conditional statements to combine conditions or check for multiple
// cases of certain conditions
// &&	logical and is used to denote BOTH items on either side of it. Ex: 4 && 5 --> 4 and 5
// ||	logical or is used to denote EITHER ONE, and is not strictly bound to both
// !	logical not is a very important tool in JavaScript because it can be used in many different cases
// It simply sets a condition to check that something is NOT 

// 

// This will conclude our examples for operators. Next, we'll take a look at conditional statements.





// CONDITIONALS ///////////////////////////////////////////////////////////////////////////////////////
// Like the name implies, conditional statements are used to check for conditions.
// Conditionals often make use of COMPARISON OPERATORS to establish a condition to check.
// This is an extremely fundamental aspect of building out logic in your code, since you will often
// be checking to see if specific conditions have been met before you run a line of code.

// A clever way of setting up a conditional statement in some cases is with ! (not)
// Since ! will set a value to false, it can be used in a conditional statement to check whether or not 
// something simply exists in your code as a condition. Examples of this in the conditional examples below.

// There are two main types of conditional statements in JavaScript
// The first is an IF ELSE statement
// The second, slightly fancier conditional is called a TERNARY OPERATER 
// We will break down both with examples below.


// IF ELSE STATEMENTS //
// If else statements are one of the core foundations of building logic.
// They check to see if a statement is true and perform different lines of code
// depending on if the condition (inside of parenthesis) is true or false.
// If else statements can be chained with else if statements, to allow for
// multiple conditions to be checked in the same if else statement.
// if and else if statements typically require parenthesis () after their key words
// with a condition inside the parenthesis.
// If else statements can also be nested, to apply more complex logic.
// Here is the structure of an if else statement:

// if (statement that is true INSIDE OF PARENTHESIS) { do this }
// else { do this }

// Let's start off with a simple if else statement here that has 3 conditions
// we'll use the if, elif, and else parts of the statement.
// We'll be using two variables we've already created, ovenTemp and stringVariable

if (ovenTemp == 0) {
    ovenTemp += 400
    // I want to make a new pizza now for some reason, 
    // Let's turn the ovenTemp back up 400
}
else if (ovenTemp < 0) {
    ovenTemp = 0
    // If the ovenTemp is less than zero (it shouldn't be)
    // Let's reassign its value back to 0 for a clean start
}
else {
    ovenTemp = 0 
    // Let's turn the oven off by reassigning the ovenTemp
    // to 0 
}




// Alright, let's write a conditional statement that outputs 2 different console.log()s here ^
// that will print out different messages depending on our ovenTemp.
// For the first message, have your console.log() print out:
// `Ready for pizza baking, the oven is at ${ovenTemp} degrees.`
// For the other conditional message, have your console.log() say:
// `Looks like the oven is off, the oven is at ${ovenTemp} degrees.
// HINT: You only need 1 condition (an if statement) and an else.

// Let's make some new variables here that we can make use of later, I'm getting a little bored with
// re-using ovenTemp so frequently

let concerts = ['Death Grips', 'Tipper', 'Queens of The Stone Age', 'Naxatras', 
'The Oh Sees', 'Ivy Lab', 'Viagra Boys','Jade Cicada', 'Imagine Dragons', 'The Garden',
'Captain Hook', 'Charlesthefirst', 'KOAN Sound', 'Psychedelic Porn Crumpets']
// An array of possible concerts you might want to go to with your friend

let friendChoice = concerts[Math.round(Math.random() * (concerts.length - 1))]
// Your friend makes a random concert choice, based on the number of possible concerts
// concerts.length = number of concerts
// Math.random() = random number float value between 0 and 1
// Math.round(rounds whatever is in here to the nearest whole number)

let going = false
// We aren't going to any concerts just yet, but we might based on certain conditions

let ticketPrice = Math.round(5 + Math.round(Math.random() * 45))
// Ticket prices have a base value of 5, but could be anywhere from 5 - 50 dollars

let response = ''
// An empty string that we will use to respond to our friend's concert choice
// Alright! Let's make some conditional statements!

if (friendChoice === 'Imagine Dragons') {
    response = `Imagine paying to see ${friendChoice}. Wait, was this a joke?`
    going = false
    // The first case we want to rule out. Ticket price doesn't matter because we would NOT
    // go to this show, regardless of the price
}
else if ((friendChoice !== 'Death Grips' && ticketPrice > 30) || (friendChoice !== 'Tipper' && ticketPrice > 30)) {
    // If the ticket price is over 30 dollars and your friend didn't pick Death Grips or Tipper
    response = `Sorry, $${ticketPrice} is too much to spend on a ${friendChoice} show.`
    going = false
    // It's not worth going to the show for you.
}
else if (friendChoice === 'Tipper' || friendChoice === 'Death Grips') {
    response = `I've always wanted to see ${friendChoice}, I can't wait!`
    going = true
    // The price of the the ticket doesn't matter here, so if either choice is Death Grips or Tipper,
    // the show is a go!
}
else if (ticketPrice <= 30) {
    // Otherwise, if the ticket price IS 30 or under 
    response = `Great pick! ${friendChoice} sounds like a fun show, and tickets are only $${ticketPrice}. Let's do it!`
    going = true
    // It's worth it to you to go to the show, the show is a go.
}
else {
    response = "Looks like you didn't pick a show, I guess we'll find another time to go."
    going = false
    // Just in case our friend did not pick a show, let's leave this else here to cover 
    // that case
}



// console.log() Your response and whether or not you'll be going here ^  (2 console.log()s)
// To see different cases, simply refresh your page, since friendChoice will be randomized again
// Try changing some of the conditions inside the if and elif statements or adding new concerts
// in the concerts array to see how it affects your responses.



// TERNARY OPERATORS //
// The word 'Ternary' denotes 3 parts 
// In JavaScript, Ternary operators (?) also denotes 3 parts that will affect a given variable value
// First, a conditional followed by a question mark, and two returns separated by a colon :
// Example           b  = (a > b && c != a) ? b += 5 : b -= 5
//         variable = conditional statement ? case1  :  case2
// If the conditional statement is true, case1 will be executed, otherwise case2 will be executed
// The whole ternary statement does not need to be on one line for it to function properly, but
// it is often used to write conditional statements in a more concise manner
// Let's do a couple examples of this below

let yourPayment = ''
// Let's set a variable 'yourPayment' equal to an empty string. We'll mutate it depending on if 
// we are going to a concert or not below to reflect wether or not we 

yourPayment = (going === true) ? `You bought a ticket to see ${friendChoice} for $${ticketPrice}. Nice!` :   // <--- : separating the two cases
`You decided seeing ${friendChoice} was not worth the ticket price of $${ticketPrice}.`


// console.log() yourPayment here ^ to see how different cases in the ternary operator affect the value
// of yourPayment

// The first variable with an integer value we defined in this lesson was 'integer'. It's value is 10.
// Let's write a ternary operator for integer down below that will either
// multiply the value of integer by 5 OR :
// square (**) the value of integer
// depending on if the value of integer is divisble by 5 (value % 5 === 0)
// Remember: variable = (condition) ? firstcase : secondcase




// console.log() integer here ^
// What is the new value of integer? 
// HINT: It should be 50 now
// Try using the ternary operator to affect changes on other variables depending on certain conditions
// below v



// This concludes our section for conditionals, next we'll move on to loops! (fun stuff)















// LOOPS ///////////////////////////////////////////////////////////////////////////////////////////////












