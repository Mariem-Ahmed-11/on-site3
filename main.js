const offers = document.getElementById("offers-items");
const prev = document.getElementById("prev1");
const next = document.getElementById("next1");
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

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();


    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var subjectError = document.getElementById("subject-error");
    var messageError = document.getElementById("message-error");



    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    var valid = true;


    if (name === "") {
        nameError.textContent = "Please enter your name.";
        valid = false;
    } else if (name.length < 3 || name.length > 15) {
        nameError.textContent = "Name must be 3–15 characters.";
        valid = false;
    }


    if (email === "") {
        emailError.textContent = "Please enter your email.";
        valid = false;
    }


    if (subject !== "" && subject.length < 3) {
        subjectError.textContent = "Subject must be at least 3 characters.";
        valid = false;
    }


    if (message !== "" && message.length < 5) {
        messageError.textContent = "Message must be at least 5 characters.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
});

















var menuItems = [
    {
        name: "LASAL CHEESE",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food1.png"
    },
    {
        name: "JUMBO CRAB SHRIMP",
        price: "$24.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food2.png"
    },
    {
        name: "KOKTAIL JUICE",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food3.png"
    },
    {
        name: "CAPO STEAK",
        price: "$60.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food4.png"
    },
    {
        name: "ORGANIC FRUIT SALAD",
        price: "$8.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food5.png"
    },
    {
        name: "CHEESE PIZZA",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food6.png"
    },
    {
        name: "KOFTA MEAT",
        price: "$40.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food7.jpeg"
    },
    {
        name: "SPANISH PIES",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food8.jpeg"
    },
    {
        name: "CHEESE TOST",
        price: "$6.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food9.jpeg"

    },
    {
        name: "FRUIT SALAD",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food10.jpeg"
    },
    {
        name: "CHICKEN SHAWARMA",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food11.jpeg"
    },
    {
        name: "MEGA CHEESE PIZZA",
        price: "$30.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.At, explicabo.",
        image: "./images/food12.jpeg"
    }
]


const menuContainer = document.querySelector('.main-menue');
menuItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
        <img src="${item.image}">
        <div>
            <h3>${item.name} <span>${item.price}</span></h3>
            <p>${item.description}</p>
        </div>
    `;
    menuContainer.appendChild(div);
});
