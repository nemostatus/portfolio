document.addEventListener("DOMContentLoaded", ()=>{
  greeting()
})

let switched = "off"
let count = 0

function speech(message){
let synth = window.speechSynthesis
let voices = synth.getVoices()

 let utterThis = new SpeechSynthesisUtterance(message)
if(voices.length!=0 && switched === "on"){
 utterThis.voice = voices[3]
synth.speak(utterThis)}
else{
console.log("text to speech is off")
  }}
 
  function changeFunc() {
    let selectBox = document.getElementById("questions");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
   let box = document.getElementById("message")
  switch(selectedValue){
      case "about":
      box.innerHTML = 
      `
      <h1><span class="material-icons" style="font-size:36px">
      face_retouching_natural
      </span><u>Maxine says:</u> </h1>
      <p>Matthew is a full stack developer who created me and the other projects below.  <p>`
    speech("Matthew is a full stack developer who created me and the other projects below. ");
   animation("Matthew is a full stack developer who created me and the other projects below.")
      break;
      case "maxine":
        box.innerHTML = `
        <h1><span class="material-icons" style="font-size:36px">
        face_retouching_natural
        </span><u>Maxine says:</u> </h1>
        I'm maxine the cat. I'm here to help you navigate matthew's portfolio. `;
        speech(" I'm maxine the cat. I'm here to help you navigate matthew's portfolio. ")
        animation(" I'm maxine the cat. I'm here to help you navigate matthew's portfolio. ")
        break;
        case "nav":
            box.innerHTML = `
            <h1><span class="material-icons" style="font-size:36px">
            face_retouching_natural
            </span><u>Maxine says:</u> </h1>
            Choose any option to get info on Matt's portfolio  `;
            speech("Choose any option to get info on Matt's portfolio  ")
            animation(" Choose any option to get info on Matt's portfolio  ")
            break;
            case "project":
                box.innerHTML = `
                <h1><span class="material-icons" style="font-size:36px">
                face_retouching_natural
                </span><u>Maxine says:</u> </h1>
               Click on one of the four projects below to learn more.  `;
                speech("   Click on one of the four projects below to learn more  ")
                animation("   Click on one of the four projects below to learn more  ")
                break;
               case "on":
                switched = "on"
                break;
                case "off":
                  switched = "off"
                  break;

  }
   }

   function check(event){
     let card = document.getElementById("card")
     //use event.target.value and a switch case statement to determine the innerhtml of front

     let id= event.target.getAttribute('id')
     switch(id){
       case "sinatra":
         card.innerHTML = `Matthew built this sinatra application for the purpose of a programming student to log their 
         project ideas and rate them.  <a href= "https://github.com/nemostatus/sinatra-application" target="_blank"> Project Logger </a><br>
        
         <button id ="restart" onclick = "restart()"> Projects </button>`
         speech("Matthew built this Sinatra application for the purpose of a programming student to log their \
         project ideas and rate them" )
         break;
         case "ruby":
          card.innerHTML = `Matthew built this ruby on rails application in order for any future movers to view if specific vehicles
          have been recently infested with any insects to avoid them. 
           <a href= "https://github.com/nemostatus/move_atlas" target="_blank"> Moving Vehicle Tracker </a><br>
          <button id ="restart" onclick = "restart()"> Projects </button>`
          speech("Matthew built this ruby on rails application in order for any future movers to view if specific vehicles\
          have been recently infested with any insects to avoid them ")
          break;
          case "js":
            card.innerHTML = `Matthew built this javascript application to help users overcome any social anxiety they may have 
           by accepting any social challenges other users post. 
           <a href= "https://github.com/nemostatus/SA_Challenges_Rails_JS" target="_blank"> SA Challenges </a> <br>
            <button id ="restart" onclick = "restart()"> Projects </button>`
            speech("Matthew built this javascript application to help users overcome any social anxiety they may have \
            by accepting any social challenges other users post. ")
            break;
            case "react":
              card.innerHTML = `Matthew built this choose your own adventure react application. 
              <a href= "https://github.com/nemostatus/pathfinder" target="_blank"> Pathfinder </a> <br>
              <button id ="restart" onclick = "restart()"> Projects </button>`
              speech("Matthew built this choose your own adventure react application.")
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

    function greeting() {
      let date = new Date();
      let time = date.getHours();
      let item = document.getElementById("greet");

    if (time < 6) {
        item.innerHTML = `<h2><span class="material-icons" style="font-size:36px;color: gold">
        dark_mode
        </span> Hello night owl!</h2> `;
      } else if (time < 19) {
      item.innerHTML = `<h2> <span class="material-icons" style="font-size:36px; color: gold">
      brightness_low
      </span>Good Day!</h2> `;
      } else {
       item.innerHTML = `<h2><span class="material-icons" style="font-size:36px; color: gold">
       dark_mode
       </span> Good Night!</h2> `;
      }
    }

    function animation(input){
     
    let maxine = document.getElementById("maxine")
let arr = input.split(' ')
let ratio = Math.round((arr.length+3)/2 )

if(count < ratio){
  count++
  if(count === ratio){
    count = 0
    return
    }
  else if( count/2%1===0){
      
    maxine.innerHTML = `<img src = "./sprites/cat1.png">`}
else{
 
    maxine.innerHTML = `<img src = "./sprites/cat2.png">`
  }
console.log(count)
}
setTimeout(()=>{animation(input)},500)
}
// while(count < ratio){
  // setTimeout( ()=>{
    //     console.log("count",count)
    //     count++
   
// },1000)}}
   
   
// while(count < ratio )
//   setTimeout( ()=>{
//     console.log("count",count)
//     if(count < ratio  && count/2%1===0){
//     count++;
//     maxine.innerHTML = `<img src = "./sprites/cat1.png">`}
// else{
//   count++;
//     maxine.innerHTML = `<img src = "./sprites/cat2.png">`
//   }
// },1000)}
