song = '';
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound('music2.mp3');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(600, 400);
  video = createCapture(VIDEO); 
  poseNet = ml5.poseNet(video, ModelLoaded);
}

function Play() {
  song.play();
  song.setVolume(1)
  song.rate(1);
}

function ModelLoaded() {
  console.log('PoseNet is initialized!')
}

function draw() {
  image(video, 0, 0, 300, 300);
}