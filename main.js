song1 = "";
song2 = "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    song1 = loadSound("harry-potter-theme-song.mp3");
    song2 = loadSound("zindagi-sawaar-du.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}