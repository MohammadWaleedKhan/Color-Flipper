const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// // let changeColor = document.getElementById("changeColor");

// function colorCollection(){
//     const randomNumbers = getRandomNumbers()

//     console.log("randomNumbers", randomNumbers)
//     document.getElementById("cardColor").style.backgroundColor = colors[randomNumbers];
//     renderHere.textContent = colors[randomNumbers]
// }

// function getRandomNumbers(){
//     return Math.floor(Math.random() * colors.length);
// }


const hexClr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function colorCollection() {
    if (jQuery('input[name="radioSystem"]:checked').val() == 'simple') {
        debugger
        const randomNumbers = getRandomNumbers()
        
        console.log("randomNumbers", randomNumbers)
        document.getElementById("cardColor").style.backgroundColor = colors[randomNumbers];
        renderHere.textContent = colors[randomNumbers]
    } else {
        debugger
        let hexColor = "#"
        for (var i = 0; i < 6; i++) {
            hexColor += hexClr[getRandomNumbers()];
        }

        // console.log("randomNumbers", randomNumbers)
        document.getElementById("cardColor").style.backgroundColor = hexColor;
        renderHere.textContent = hexColor
    }
}
function getRandomNumbers() {
    if (jQuery('input[name="radioSystem"]:checked').val() == 'simple') {
            return Math.floor(Math.random() * colors.length);
    } else {

        for (let j = 0; j < hexClr.length; j++) {
            return Math.floor(Math.random() * hexClr.length);
        }
    }
}