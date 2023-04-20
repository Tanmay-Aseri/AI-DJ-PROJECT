song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

songStatus1 = "";
songStatus2 = "";

scoreLeftWrist = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose", gotPoses);
}

function preload(){
    song2 = loadSound("harry-potter-theme-song.mp3");
    song1 = loadSound("zindagi-sawaar-du.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);



    songStatus = song1.isPlaying();
    if(scoreLeftWrist > 0.2){
        fill("#FF0000");
        stroke("#FF0000");
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(songStatus1 == "false"){
            song1.play();
            document.getElementById("song").innerHTML = "Doremon";
        }
        
    }
}

function modelLoaded(){
    console.log("posenet is initialized");
 }

 function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("score leftwrist = "+scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+ "leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+ "rightWristY = "+rightWristY);
    }
 }

