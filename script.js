document.getElementById('piedra').addEventListener('click', ()=>{
    play('piedra');
    });
  
  document.getElementById('papel').addEventListener('click', ()=>{
    play('papel');
  });
  
  document.getElementById('tijeras').addEventListener('click', ()=>{
    play('tijeras');
  });
  
  function play(userChoice) {
    let choices = ["piedra", "papel", "tijeras"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result;
    if (userChoice === computerChoice) {
      result = "¡Empate!";
    } else if ((userChoice === "piedra" && computerChoice === "tijeras") ||
               (userChoice === "papel" && computerChoice === "piedra") ||
               (userChoice === "tijeras" && computerChoice === "papel")) {
      result = "¡Ganaste!";
    } else {
      result = "¡Perdiste!";
    }
    
    document.getElementById("resultado").innerHTML = "Elegiste " + userChoice + ", la computadora eligió " + computerChoice + ". " + result;
  }