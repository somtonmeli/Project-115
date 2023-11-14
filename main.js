function preload()
{

}

function setup()
{
    canvas = createCanvas(350,350);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is Loaded");
}

function draw()
{
    image(video,0,0,350,350);
}

function snap()
{
    save('filteredimage.png')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " Nose Y = " + noseY);
        
    }
}