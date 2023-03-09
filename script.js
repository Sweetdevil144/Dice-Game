function img1(randomNumber1) {

    // if(randomNumber1 == 1) document.getElementsById("#img1").setAttribute("src", "/images/dice1.png");
    // else if(randomNumber1 == 2) document.getElementsById("#img1").setAttribute("src", "/images/dice2.png");
    // else if(randomNumber1 == 3) document.getElementsById("#img1").setAttribute("src", "/images/dice3.png");
    // else if(randomNumber1 == 4) document.getElementsById("#img1").setAttribute("src", "/images/dice4.png");
    // else if(randomNumber1 == 5) document.getElementsById("#img1").setAttribute("src", "/images/dice5.png");
    // else if(randomNumber1 == 6) document.getElementsById("#img1").setAttribute("src", "/images/dice6.png");
}
function img2(randomNumber2) {
    // if(randomNumber2 == 1) document.getElementsById("#img2").setAttribute("src", "/images/dice1.png");
    // else if(randomNumber2 == 2) document.getElementsById("#img2").setAttribute("src", "/images/dice2.png");
    // else if(randomNumber2 == 3) document.getElementsById("#img2").setAttribute("src", "/images/dice3.png");
    // else if(randomNumber2 == 4) document.getElementsById("#img2").setAttribute("src", "/images/dice4.png");
    // else if(randomNumber2 == 5) document.getElementsById("#img2").setAttribute("src", "/images/dice5.png");
    // else if(randomNumber2 == 6) document.getElementsById("#img2").setAttribute("src", "/images/dice6.png");
}

function func() {
    let heading = '';
    let randomNumber1 = Math.floor(Math.random()*6)+1;
    let randomNumber2 = Math.floor(Math.random()*6)+1;
    if(randomNumber1 > randomNumber2) {
        heading = "Player 1 wins";
        console.log(heading);
        document.getElementById("#result_print").textContent(heading);
    }
    else if(randomNumber2>randomNumber1) {
        heading = "Player 2 wins";
        console.log(heading);
        document.getElementById("#result_print").textContent(heading);
    }
    else {
        heading = "It's a Draw";
        console.log(heading);
        document.getElementById("#result_print").textContent(heading);
    }

    // img1(randomNumber1); img2(randomNumber2);
}


// func();




