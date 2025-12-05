const offers = document.getElementById("offers-items");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;
function slide(o) {
    const total = offers.children.length;
    index = (index + o + total) % total;
    offers.style.transform = `translate(-${index * 100}%)`;
    offers.style.transition = `all 1.5s`;
}
next.onclick = () => slide(1);
prev.onclick = () => slide(-1);
setInterval(() => slide(1), 5000);

var BtnClose = document.getElementById("close");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var BoxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var images = document.querySelectorAll(".meals img");

var imagesArr = [];
for (var i = 0; i < images.length; i++) {
    imagesArr.push(images[i]);
}
var currentIndex = 0;

function showImage(index) {
    boxItem.style.backgroundImage = "url(" + imagesArr[index].src +
        ")";
}
27

for (var j = 0; j < imagesArr.length; j++) {
    (function (j) {
        imagesArr[j].addEventListener("click", function () {
            BoxContainer.style.display = "flex";
            currentIndex = j;
            showImage(currentIndex);
        });
    })(j);
}

BtnClose.addEventListener("click", function () {
    BoxContainer.style.display = "none";
});

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex === imagesArr.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});
28

prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesArr.length - 1;
    }
    showImage(currentIndex);
});

BoxContainer.addEventListener("click", function (event) {
    if (event.target === BoxContainer) {
        BoxContainer.style.display = "none";
    }
});

