function generateRandomColor() {
    let randomColor1 = Math.floor(Math.random() * 16777215).toString(16),
        randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

    document.querySelector("#car_color_1").style.fill = `#${randomColor1}`
    document.querySelector("#car_color_2").style.fill = `#${randomColor2}`

    setTimeout(generateRandomColor, 7000);
}
generateRandomColor();