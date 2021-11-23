let var1 = 5

function some_func(){


  let var2 = 6

  some_inner_func()

  function some_inner_func(){



    let var3 = 7

    console.log(`SOME_INNER SCOPE: ${var1}`)
    console.log(`SOME_INNER SCOPE: ${var2}`)
    console.log(`SOME_INNER SCOPE: ${var3}`)

    some_inner_func()

  }

}

console.log(`GLOBAL: ${var1}`)

some_func()
