var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition()
var textArea = document.getElementById("textbox")
controle = 0
function start() {
    textArea.innerHTML=""
    Recognition.start()   
}

Recognition.onresult = function(event){
    console.log(event)
    content = event.results[0][0].transcript
    textArea.innerHTML = content
    if (content == "foto 1") {
        console.log("Tirando uma selfie! EM 5 SEGUNDOs")
        controle = 1
        speak()
    }
    if (content == "foto 2") {
        console.log("Tirando uma selfie! EM 5 SEGUNDOs")
        controle = 2
        speak()
    }
}

function speak() {
    var sintent = window.speechSynthesis
    var speakData = "Selfie em 5 segundos!"
    var sayThis = new SpeechSynthesisUtterance(speakData)
    sintent.speak(sayThis)
    Webcam.attach(camera)
    setTimeout(function(){
        if (controle == 1) {
            Takeselfie()
        }
        else if (controle == 2) {
            Takeselfie2()
        }
        Save()
    },5000)
}
camera = document.getElementById("camera")
Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
})

function Takeselfie() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>"         
    })
}

function Save() {
    link = document.getElementById("link")
    image = document.getElementById("selfie").src 
    link.href = image
    link.click()
}

function Takeselfie2() {
    Webcam.snap(function(data_uri){
    document.getElementById("result2").innerHTML = "<img id='selfie2' src='" + data_uri + "'>"         
    })
}