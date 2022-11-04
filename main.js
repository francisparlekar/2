prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/jqoY0mS02/model.json', modelLoaded);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 

//define function modelLoaded
function modelLoaded() 
{
    console.log('Model Loaded!');
}

//define function check() 
function check()
{
    img = document.getElementById('captured_img');
    classifier.classify(img, gotResult);
}



//define function gotResult(error, results)
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
        document.getElementById("result").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
    }

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is "  + prediction_1;
    speak_data2 = "And the second prediction is "  + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}
}

