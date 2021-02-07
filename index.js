function speech(message){
let synth = window.speechSynthesis;
let voices = synth.getVoices()
 let utterThis = new SpeechSynthesisUtterance(message)
    utterThis.voice = voices[1]
synth.speak(utterThis)}