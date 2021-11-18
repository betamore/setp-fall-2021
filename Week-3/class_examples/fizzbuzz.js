// Print numbers 0-100
// For numbers evenly divisible by 3 Print fizz instead of the number
// For numbers evenly divisible by 5 Print buzz instead of the number
// For numbers evenly divisible by 3 and 5 print fizz buzz instead of the number

/*
Example of loop that counts to 100

for (let i = 0; i <= 100; i++) {
  console.log(i)
}

*/

for (let i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
