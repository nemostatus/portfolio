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
learn robot text to speech by reading docs X
learn how to build animation sprite and also animation
learn div flip 
begin coding by building divs and use flexbox to arrange the divs in an asthetic order
build sprite avatar div and its speech box next to it
build dropdown list of questions to the sprite can respond to

TO DO THIS SESSION
---------------------
1.Make divs with a title of project and div flip
    <i class="fas fa-compass"></i>

ISSUES TO FIX
---------------
1.voice synth voice is male at first then turns to female voice, I want to fix this
2.have hover effect match nav color also make the font white when hover
3. Font Awesome icons dont work

i want this on the front<br>
Projects Tracker<br>
i want this on the back with the decription <br>
https://github.com/nemostatus/sinatra-application

     front<br>
    Move Atlas
        back<br>
        https://github.com/nemostatus/move_atlas

           front<br>
        Social Anxiety Challenge
        back<br>
       
       changing it up creating one big div that is dynamic and fills up when selected from dropdown list

       TO DOS
       ---------
       1. create a button that turns on/off text to speech part of app x
       2. make text to speech occur on first click not 2nd one x
       3. have divs not shift when the dev tools is brought up
       4. Add font awesome icons x(google mats)
       5. Have greeting depending on the day like in your social anxiety app x
       6. need to put animation when clicking the object
       7 have the ability to turn off animation with animation switch similar to text to speech switch


