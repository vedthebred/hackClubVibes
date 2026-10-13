let slides = document.querySelector(".slides");
let total = slides.children.length;
let index = 0;

let surprise = document.querySelector(".surpriseContent");

function show(i) {
    index = (i + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").onclick = () => show(index + 1);
document.querySelector(".prev").onclick = () => show(index - 1);

function surprisePopup() {
    surprise.style.display = "block";
}

setInterval(surprisePopup, 60000);
surprise.addEventListener("click", () => {
    surprise.style.display = "none";
});