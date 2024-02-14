const carouselImages = [
    { id: 0, show: true, img: "https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg" },
    { id: 1, show: false, img: "https://subpop-img.s3.amazonaws.com/asset/artist_images/attachments/000/009/501/max_960/dummy-2022-promo-02-alexbulli-2100x1400-300.jpg?1653589239" },
    { id: 2, show: false, img: "https://i0.wp.com/waxmusicuk.com/wp-content/uploads/2022/05/Photo-10-03-2022-14-36-44.jpg?resize=2000%2C1200&ssl=1" },
    { id: 3, show: false, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBKXmQnHZkFh-et0NrpCXrcpL6iiU22anVw&usqp=CAU" },
];

// const imgContainer = document.getElementById("img-container");
// const indicators = document.getElementById("indicator");

// const prev = document.getElementById("prev");
// const next = document.getElementById("next");

// let current = 0;

// carouselImages.forEach((image) => {
//     const img = document.createElement("img");
//     img.src = image.img;
//     img.id = image.id;
//     img.height = "200";
//     img.width = "300";

//     const circle = document.createElement("div");
//     circle.className = "circle";
//     circle.classList.add(`some${image.id}`);

//     indicators.append(circle);
    
//     if (image.show) {
//         document.querySelector(`.some${current}`).classList.add("active-circle");
//         img.style.display = "inline";
//     } else {
//         img.style.display = "none"
//     }

//     imgContainer.append(img);
// });

// next.addEventListener("click", () => {
//     const next = (current + 1) % carouselImages.length;

//     document.getElementById(String(current)).style.display = "none";
//     document.getElementById(String(next)).style.display = "inline";

//     document.querySelector(`.some${current}`).classList.remove("active-circle");
//     document.querySelector(`.some${next}`).classList.add("active-circle");

//     current = (current + 1) % carouselImages.length;
// })

// prev.addEventListener("click", () => {
//     const prev = (current - 1) % carouselImages.length;

//     document.getElementById(String(current)).style.display = "none";
//     document.getElementById(String(prev)).style.display = "inline";

//     document.querySelector(`.some${current}`).classList.remove("active-circle");
//     document.querySelector(`.some${prev}`).classList.add("active-circle");

//     current = (current - 1) % carouselImages.length;
// })

const imgContainer = document.getElementById("img-container");
const indicators = document.getElementById("indicator");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSlide = 0;

function showSlide(index) {
    carouselImages.forEach((image, i) => {
        const img = document.getElementById(String(i));
        const circle = document.querySelector(`.some${i}`);

        if (i === index) {
            img.style.display = "inline";
            circle.classList.add("active-circle");
        } else {
            img.style.display = "none";
            circle.classList.remove("active-circle");
        }
    });
}

function updateSlide(direction) {
    currentSlide = (currentSlide + direction + carouselImages.length) % carouselImages.length;
    showSlide(currentSlide);
}

imgContainer.addEventListener("click", (event) => {
    const clickedIndex = parseInt(event.target.id);
    if (!isNaN(clickedIndex)) {
        currentSlide = clickedIndex;
        showSlide(currentSlide);
    }
});

prevButton.addEventListener("click", () => updateSlide(-1));
nextButton.addEventListener("click", () => updateSlide(1));

carouselImages.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.img;
    img.id = image.id;
    img.height = "200";
    img.width = "300";
    img.style.display = image.show ? "inline" : "none";

    const circle = document.createElement("div");
    circle.className = "circle";
    circle.classList.add(`some${image.id}`);
    indicators.append(circle);

    imgContainer.append(img);
});

showSlide(currentSlide);

