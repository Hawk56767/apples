x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
speak_data="";
to_number="";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();



function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
function preload(){
  loadImage("apple.png");
}
 
recognition.onresult = function(event) {

 console.log(event); 

  var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    
    if(content == "Apple"){
      document.getElementById("status").innerHTML = "started drawing the apple";
      draw_apple="set";
    } 
    else{
      document.getElementById("status").innerHTML = "apple failed";
    }

}

function setup() {
screen_width=window.innerWidth;
screen_height=window.innerHeight;
canvas=createCanvas(screen_width, screen_height-150);
canvas.position(0, 150)
}

function draw() {
  if(draw_apple == "set")
  {
    for (i=1; 1 <= to_number ; i++) {
      x = Math.floor(Math.random*700);
      y = Math.floor(Math.random*400);
      image(draw_apple, x, y, 30, 30);  
      }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data=to_number+"Apples drawn";
    draw_apple = "";
    speak_data;
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
