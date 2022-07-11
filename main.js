Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'">';
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vmHBvKDX2/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

console.log("ml5 version : ",ml5.version);

function speak(){
    var synth = window.speechSynthesis;
    speakdata_1= "The 1st Prediction is "+prediction1;
    speakdata_2= "The 2nd Prediction is "+prediction2;
    var utterthis= new SpeechSynthesisUtterance(speakdata_1+speakdata_2);
    synth.speak();
}