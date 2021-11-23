let message = "Hello World"

function echo(text, count){
  let i = 0
  let newCollection = []
  while (i < count) {
    newCollection.push(text)
    i++
  }

  return newCollection
}

echo(message, 7)


//console.log(response)
