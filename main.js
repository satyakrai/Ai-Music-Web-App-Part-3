song="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function modelLoaded(){
    console.log("Posenet is initialized!");
}
function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song=loadSound("music2.mp3");
    song2=loadSound("music.mp3");
}
