let btn = document.querySelector("#btn");

btn.addEventListener("click", getRandomColor() {
    let body = document.querySelector("body");
   documentbody.style.backgroundColor = getRandomColor();
}
)


function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb (${red}, ${green}, ${blue})`;
    console.log(color);

    return color;

}
getRandomColor();