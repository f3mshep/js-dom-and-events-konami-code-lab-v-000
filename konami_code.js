const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let pointer = 0
  const finalAnswer = 65
  document.addEventListener("keydown", function(key){
    let pressedKey = parseInt(key.which || key.detail )
    
    if(code[pointer] === pressedKey){
      console.log(pressedKey)
      ++pointer
      if (pointer === code.length){
        console.log("did it")
        pointer = 0
        alert("KONAMI CODE SUCCESS")
      }
      console.log("One step closer... next value is", code[pointer])
    }
    else{
      pointer = 0
      console.log('reset to ', value )
      
    }
  })
}

//↑↑↓↓← → ← → B A