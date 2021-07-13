nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(700, 75);
    video = createCapture(500, 500);
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotResult)
}

function draw() {
    word = document.getElementById("name").value;
    color = document.getElementById("col").value;
    console.log(word);
    background("chocolate");
    fill(color);
    stroke(color);
    textSize(difference);
    text(word, nosex, nosey);
    document.getElementById("size").innerHTML = "text-size:" + difference + "px";
}

function modelloaded() {
    console.log('Posenet has Started');
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("leftwrist=" + leftwristx + "rightwrist=" + rightwristx + "difference=" + difference);
    }
}