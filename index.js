const title = document.querySelector(".title");

title.addEventListener("mouseenter", () => {

    title.style.color = "hsl(47, 88%, 63%)";
    title.style.cursor = "pointer";

});



title.addEventListener("mouseleave", () => {

    title.style.color = "";
    title.style.cursor = "";
});
