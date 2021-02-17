function speech(message){
let synth = window.speechSynthesis
let voices = synth.getVoices()

 let utterThis = new SpeechSynthesisUtterance(message)
if(voices.length!=0){
 utterThis.voice = voices[3]
synth.speak(utterThis)}
else{
console.log("need to solve this problem")
  }}
 
  function changeFunc() {
    let selectBox = document.getElementById("questions");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
   let box = document.getElementById("message")
  switch(selectedValue){
      case "about":
      box.innerHTML = 
      `
      <h1><u>Maxine says:</u> </h1>
      <p>Matthew is a full stack developer who created me and the other projects below.  <p>`
    speech("Matthew is a full stack developer who created me and the other projects below. ");
      break;
      case "maxine":
        box.innerHTML = `
        <h1><u>Maxine says:</u> </h1>
        I'm maxine. I'm here to help you navigate matthew's portfolio. `;
        speech(" I'm maxine. I'm here to help you navigate matthew's portfolio. ")
        break;
        case "nav":
            box.innerHTML = `
            <h1><u>Maxine says:</u> </h1>
            Choose any option to get info on Matt's portfolio  `;
            speech("Choose any option to get info on Matt's portfolio  ")
            break;
            case "project":
                box.innerHTML = `
                <h1><u>Maxine says:</u> </h1>
               Click on one of the four projects below to learn more.  `;
                speech("   Click on one of the four projects below to learn more  ")
                break;
  }
   }

   function check(event){
     let card = document.getElementById("card")
     //use event.target.value and a switch case statement to determine the innerhtml of front

     let id= event.target.getAttribute('id')
     switch(id){
       case "sinatra":
         card.innerHTML = `this is my sinatra app description<br>
         <button id ="restart" onclick = "restart()"> Projects </button>`
         break;
         case "ruby":
          card.innerHTML = `this is my ruby app description <br>
          <button id ="restart" onclick = "restart()"> Projects </button>`
          break;
          case "js":
            card.innerHTML = `this is my js app description <br>
            <button id ="restart" onclick = "restart()"> Projects </button>`
            break;
            case "react":
              card.innerHTML = `this is my "react app description <br>
              <button id ="restart" onclick = "restart()"> Projects </button>`
              break;
     }
     //chave maxine say something with each click
   }