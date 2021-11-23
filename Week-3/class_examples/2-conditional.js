// You've been given stub code for a program that has the information about the score of a football game. Your job is to use that information to help determine the score of the game. Scoring information has been noted via alpha characters, rather than by their point value.
//
// Here are the point values for each leter option in the list
// t -> 6
// e -> 1
// f -> 3
// s => 2

team1 = ["t", "e", "t", "f", "f", "s"]

team2 = ["f", "f", "f", "t", "e", "t", "e", "f"]

let team1Total = []
let team2Total = 0

for (let i in team1) {
  // write code under this line to calculate score for team 1
  if (team1[i] == "t") {
    team1Total.push(6)
  } else if (team1[i] == "e") {
    team1Total.push(1)
  } else if (team1[i] == "f") {
    team1Total.push(3)
  } else if (team1[i] == "s") {
    team1Total.push(2)
  }
}

console.log(team1Total)

for (let i in team2) {
  // write code under this line to calculate score for team 2
  if (team2[i] == "t") {
    team2Total += 6
  } else if (team2[i] == "e") {
    team2Total += 1
  } else if (team2[i] == "f") {
    team2Total += 3
  } else if (team2[i] == "s") {
    team2Total += 2
  }

}

console.log(team2Total)
let team1Sum = 0

// 
for (let i of team1Total){
  team1Sum += i
}

for (let i in team1Total){
  team1Sum += team1Total[i]
}

for (let i = 0; i < team1Total.length; i++){
  team1Sum += Team1Total[i]
}
// write code under this comment block to determine who the winner is. You should display the follwing:
// p
// "Game Score: *team1 score* - *team2 score*. *Winning Team* Wins!"
// ex. "Game Score: 45 - 22. Team 1 Wins!
//
if (team1Total > team2Total) {
        console.log(`Game score: ${team1Total} - ${team2Total}. Team 1 wins.`); } else if (team1Total < team2Total) {
        console.log(`Game score: ${team1Total} - ${team2Total}. Team 2 wins`); 
}   
