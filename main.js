noseX = 0;
noseY = 0;
difference = 0;
rwx = 0;
lwx = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(550, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded()
{
console.log('Posenet Is Initialized!!!!!!!!!!!!!!!!');
}
    
function draw()
{
    background("#800000");
    fill('#008080');
    stroke('#008080');
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Width and Height of the square will be = "+ difference + "px";
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX +"noseY = "+ noseY);
        
        lwx = results[0].pose.leftWrist.x;
        rwx = results[0].pose.rightWrist.x;
        difference = floor(lwx - rwx);
        console.log("lwx = "+ lwx +"rwx = "+ rwx +"difference = "+difference);
    }
}