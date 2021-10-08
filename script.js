camera = document.getElementById("camera");
Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 100,
});
Webcam.attach(camera);
console.log("ml5 version:", ml5.version);

function takeSnap() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML =
      "<img id='captured_image' src='" + data_uri + "'>";
  });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZyIBRTKJJ/model.json",modelLoaded);