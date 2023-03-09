function img1(randomNumber1) {
    var randonDiceImage = "images/dice" + randomNumber1 + ".png";
    var setTo = document.getElementById("img1");
    setTo.src = randonDiceImage;
}

function img2(randomNumber2) {
    var randonDiceImage = "images/dice" + randomNumber2 + ".png";
    var setTo = document.getElementById("img2");
    // setTo.setAttribute("src", randomDiceImage);
    setTo.src = randonDiceImage;
}

function func() {
    let heading = '';
    let randomNumber1 = Math.floor(Math.random()*6)+1;
    let randomNumber2 = Math.floor(Math.random()*6)+1;
    if(randomNumber1 > randomNumber2) {
        heading = "Player 1 wins";
        // console.log(heading);
        // document.getElementById("#result_print").textContent(heading);
        document.querySelector("div #result_print").textContent = heading;
    }
    else if(randomNumber2>randomNumber1) {
        heading = "Player 2 wins";
        // console.log(heading);
        // document.getElementById("#result_print").textContent(heading);
        document.querySelector("div #result_print").textContent = heading;
    }
    else {
        heading = "It's a Draw";
        // console.log(heading);
        // document.getElementById("#result_print").textContent(heading);
        document.querySelector("div #result_print").textContent = heading;
    }

    img1(randomNumber1); img2(randomNumber2);
}


// func();




