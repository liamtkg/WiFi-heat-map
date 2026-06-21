const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");

let floorImage = new Image();

let points = [];

let selectedPosition = null;



// Load saved survey when opening

points = loadData();



document.getElementById("floorUpload").onchange = function(event) {


    let reader = new FileReader();


    reader.onload = function(e) {


        floorImage.onload = function() {


            canvas.width = floorImage.width;
            canvas.height = floorImage.height;


            redraw();


        };


        floorImage.src = e.target.result;


    };


    reader.readAsDataURL(
        event.target.files[0]
    );

};



// Tap on the map

canvas.onclick = function(event) {


    let rect = canvas.getBoundingClientRect();


    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;


    selectedPosition = {


        x: (event.clientX - rect.left) * scaleX,
