// Create an array called faveCars. This array should include 3 of your favorite car brands or models
faveCars = ["Corvette", "Cayman", "F-350"]


// Display the following output, by accessing elements in your array
// "My third all time favorite car is *insert 3rd item in your array*
// String Concatenation
console.log("My third all time favorite car is " + faveCars[2])

// String Interpolation
console.log(`My third all time favorite car is ${faveCars[2]}`)


// "My second all time favorite car is *insert 2nd item in your array*"
console.log(`My second all time favorite car is ${faveCars[1]}`)



// "My first all time favorite car is *insert 1st item in your array*
console.log(`My all time favorite car is ${faveCars[0]}`)


// Whoops, you made a mistake. Replace the 2nd item in your array with the car brand "Rivian"
faveCars[1] = "Rivian"


// Try adding a 4th car to your list. Print your list out after you add it to ensure its there
faveCars.push("charger")
console.log(faveCars)

// Remove the last element in the array and save the value to a variable called lastPlace. Print this variable to ensure you captured the correct thing. 
let lastPlace = faveCars.pop()
console.log(lastPlace)