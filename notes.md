goals for this repo
1. link to my portfolio project repos until i deploy them then link to the site
2. Have a kind of animated assistant sprite guiding the user by answering users questions, have this animation talk 
w/ each click on the page
3. use different widgets for each project such as a div that once clicked flips around and describes the project
I'm going to write in vanilla js and if it doesn't reach certain goals or i want to add a feature that requires a db ill use react. 

Think through what to do
-------------------------
1. choose highlight projects
2. set each project to a div with an image and name of project on front and a description on the back
3. create a sprite animation that will do certain things along with the click of a div, maybe speak w robot voice and speech box and animation that changes when a different project is clicked, also a dropdown list of questions next to the sprite that the sprite will answer like "who built these projects and what is their background?". when the question is clicked have the speech box change and robot voice go off and respond.

ill uae html5 text to speech, heres a sample from a stack overflow comment 
var synth = window.speechSynthesis;
var voices = synth.getVoices()
 var utterThis = new SpeechSynthesisUtterance("testing testing 123")
    utterThis.voice = voices[1]
synth.speak(utterThis)


this is a variation of a code snippet from mozilla

order
-------
learn robot text to speech by reading docs
learn how to build animation sprite and also animation
learn div flip 
begin coding by building divs and use flexbox to arrange the divs in an asthetic order
build sprite avatar div and its speech box next to it
build dropdown list of questions to the sprite can respond to