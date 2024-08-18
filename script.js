const grayHeart = document.querySelector('.gray-heart');
const redHeart = document.querySelector('.red-heart');

grayHeart.addEventListener("click", () => {
    redHeart.classList.add('animation');
    redHeart.classList.add('fill-color');
    redHeart.style.visibility = 'visible';
    alert("Thanks For Clicking it!")
});

redHeart.addEventListener("click", () => {
    redHeart.classList.remove('animation');
    redHeart.classList.remove('fill-color');
    redHeart.style.visibility = 'hidden';
    alert("Ops One More time!")
});
