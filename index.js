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
         card.innerHTML = `Matthew built this Sinatra application for the purpose of a programming student to log their 
         project ideas and rate them.  <a href= "https://github.com/nemostatus/sinatra-application" target="_blank"> Project Logger </a><br>
        
         <button id ="restart" onclick = "restart()"> Projects </button>`
         speech("Matthew built this Sinatra application for the purpose of a programming student to log their \
         project ideas and rate them" )
         break;
         case "ruby":
          card.innerHTML = `Matthew built this ruby on rails application in order for any future movers to view if specific vehicles
          have been recently infested with any insects to avoid them 
           <a href= "https://github.com/nemostatus/move_atlas" target="_blank"> Moving Vehicle Tracker </a><br>
          <button id ="restart" onclick = "restart()"> Projects </button>`
          speech("Matthew built this ruby on rails application in order for any future movers to view if specific vehicles\
          have been recently infested with any insects to avoid them ")
          break;
          case "js":
            card.innerHTML = `this is my js app description <br>
            <button id ="restart" onclick = "restart()"> Projects </button>`
            speech("javascript")
            break;
            case "react":
              card.innerHTML = `this is my react app description <br>
              <button id ="restart" onclick = "restart()"> Projects </button>`
              speech("react")
              break;
     }}

     function restart(){
      let card = document.getElementById("card")
      card.innerHTML = `<div id="projectFrontDiv" class="projectFrontDiv">
      <h1><u>Projects</u></h1>
      <div id="sinatra" class="turn" onclick = "check(event)">Sinatra</div>
      <div id="ruby" class="turn" onclick = "check(event)">Ruby on Rails</div>
      <div id="js" class="turn" onclick = "check(event)">Javascript</div>
      <div id="react" class="turn" onclick = "check(event)">React</div>
    </div>`
    }