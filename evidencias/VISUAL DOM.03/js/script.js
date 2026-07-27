const redcolor = document.querySelector(".red");
const blackcolor = document.querySelector(".black");
const imagecard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const graycolor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTang = document.getElementsByTagName("h3")[0];

redcolor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTang.style.backgroundColor = "red";
    imagecard. style. backgroundImage = 'url("https://i.ytimg.com/vi/Nu_sEESmS2g/maxresdefault.jpg")';
});

graycolor[0].addEventListener("click", function (){
    cartButton.style.background = "gray";
    itemTang.style.backgroundColor = "gray";
    imagecard. style.backgroundImage = 'url("https://www.motorcarspalmbeach.com/imagetag/139/9/l/Used-2022-Audi-R8-Spyder-V10-performance-1648090970.jpg")';
});

blackcolor.addEventListener("click", function (){
    cartButton.style.background = "black";
    itemTang.style.backgroundColor = "black" ;
    imagecard. style. backgroundImage = 'url("https://renty.ae/uploads/car/photo/l/black_audi-r-spyder_2022_6069_main_00b913fb9e49a6865bfeef4f0b276f9c.jpg")';
});

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click",cart );

const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};

feedbackBtn.addEventListener("click", feedback);


