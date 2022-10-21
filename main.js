img="";
status = "";
objects= [];

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd' , modalLoaded);
    document.getElementById("status").innerHTML = "status : Decting objects ";
}




function modalLoaded(){
    console.log("modal loaded")
    status = true;
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(video,0,0,380,380);
    if(status != "")
    {
            document.getElementById("status").innerHTML =  " status : object detected";
            Play("baby.mp4");
            volume(1);

}
}