const snakeField = document.getElementById("snakeField");
for (let i = 0; i < 99; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    snakeField.appendChild(div);
}

snakeField.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("item")) {
        e.target.style.backgroundColor = "red";
        setTimeout(() => {
            e.target.style.backgroundColor = "lightblue";
        }, 500);
    }
});
