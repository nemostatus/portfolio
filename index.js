function speech(message){
let synth = window.speechSynthesis;
let voices = synth.getVoices()
 let utterThis = new SpeechSynthesisUtterance(message)
 utterThis.voice = voices[1]
synth.speak(utterThis)
 }
   

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
               Click the project menu to learn more about the project.  `;
                speech("Click the project menu to learn more about the project. ")
                break;
  }
   }