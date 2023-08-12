const stars = document.querySelectorAll(".fa-star");
const rating = document.getElementById("rating");

stars.forEach((star) => {
    star.addEventListener('click', handleStarRatings)
})

function handleStarRatings() {
    for (let idx = 0; idx < Number(this.dataset.rating); idx++) {
        stars[idx].style.color = "red";
    }
    for (let idx = Number(this.dataset.rating); idx < 5; idx++) {
        stars[idx].style.color = "rgb(216, 216, 216)";
    }
    rating.innerText = this.dataset.rating;
}
