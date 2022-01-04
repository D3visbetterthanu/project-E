noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(600,600);
    canvas=createCanvas(700,650);
    canvas.position(560,150);
    video.hide();
    poseNet=ml5.poseNet(video, model_loaded);
    poseNet.on('pose',gotPoses);
}
function model_loaded(){
    console.log("Modal Loaded :D")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+", noseY= "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftWristX= "+leftWristX+",rightWristX"+rightWristX);
        difference= floor(leftWristX - rightWristX);
    }
}
function draw(){
    background("skyblue");
    r=random(50);
    g=random(50);
    b=random(50);
    fill(r,g,b);
    stroke(r,g,b);
    strokeWeight(2);
    text("Dev",noseX,noseY);
    textSize(difference);
    document.getElementById("size").innerHTML="Size of the font size is:"+difference+"px";
}

