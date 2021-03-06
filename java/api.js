//execute function that generates a random character from API
function startGame() { Promise.all([generateCharacter(human1.type, human1.alive), generateCharacter(human2.type, human2.alive), generateCharacter(human3.type, human3.alive), generateCharacter(parasite1.type, parasite1.alive)]); }
startGame();

//shuffles numbers array into different order returning a new array
let randomisedArray = shuffle(numbers);

function shuffle(array) {
    var tmp, current, top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
}


//function to shuffle characters that executes after click
function afterClick() {

    // placeCharacter(character.image, character.name, character.type, character.alive);

    placeCharacter(human1.image, human1.name, human1.type, human1.alive);
    placeCharacter(human2.image, human2.name, human2.type, human2.alive);
    placeCharacter(human3.image, human3.name, human3.type, human3.alive);
    placeCharacter(parasite1.image, parasite1.name, parasite1.type, parasite1.alive);
    placeCharacter(parasite2.image, parasite2.name, parasite2.type, parasite2.alive);
    placeCharacter(parasite3.image, parasite3.name, parasite3.type, parasite3.alive);
    placeCharacter(parasite4.image, parasite4.name, parasite4.type, parasite4.alive);
    placeCharacter(parasite5.image, parasite5.name, parasite5.type, parasite5.alive);
    placeCharacter(parasite6.image, parasite6.name, parasite6.type, parasite6.alive);
    placeCharacter(parasite7.image, parasite7.name, parasite7.type, parasite7.alive);

}

//function to clear all id="imageX" and id="character-name-X" after a click so images do not replicate - cleaning the cards for a fresh shuffle
function clearCards() {

    // function clearCard(num){$('#image' + num).attr('src', "").hide();
    //     $('#character-name-' + num).html("");}



    $('#image1').attr('src', "").hide();
    $('#character-name-1').html("");
    $('#image2').attr('src', "").hide();
    $('#character-name-2').html("");
    $('#image3').attr('src', "").hide();
    $('#character-name-3').html("");
    $('#image4').attr('src', "").hide();
    $('#character-name-4').html("");
    $('#image5').attr('src', "").hide();
    $('#character-name-5').html("");
    $('#image6').attr('src', "").hide();
    $('#character-name-6').html("");
    $('#image7').attr('src', "").hide();
    $('#character-name-7').html("");
    $('#image8').attr('src', "").hide();
    $('#character-name-8').html("");
    $('#image9').attr('src', "").hide();
    $('#character-name-9').html("");
};



//function to change score human killed
function ChangeScoreHumanDead() {
    peopleRemaining -= 1;
    parasitesRemaining += 2;
    document.getElementById("people_remaining").innerHTML = peopleRemaining;
    document.getElementById("parasites_remaining").innerHTML = parasitesRemaining;
}

//function to change score parasite killed
function ChangeScoreParasiteDead() {
    parasitesRemaining -= 1;
    document.getElementById("parasites_remaining").innerHTML = parasitesRemaining;
}


function checkScore() {
    if (peopleRemaining === 0) {
        //final_result_announcement
        document.getElementById("final_result_announcement").innerHTML = "You Lose!";
        gameOver();

        //TRIGGER RESET BUTTON FUNCTION

    } else if (parasitesRemaining === 0) {
        document.getElementById("final_result_announcement").innerHTML = "You Win!";
        gameOver();
        //TRIGGER RESET BUTTON FUNCTION
    }

}

function resetCards() {
    clearCards();
    shuffle(numbers);
    afterClick();
    checkScore();
}

//function to execute after button is clicked on - kills character, executing spawn of 2 unique parasites if human.
function kill(cardNumber) {

    $('#card1').hide();
    $('#card2').hide();
    $('#card3').hide();
    $('#card4').hide();
    $('#card5').hide();
    $('#card6').hide();
    $('#card7').hide();
    $('#card8').hide();
    $('#card9').hide();

    if (human1.card === cardNumber && human1.alive) {
        human1.alive = false;
        parasite2.alive = true;
        parasite3.alive = true;
        ChangeScoreHumanDead();
        resetCards();
        generateCharacter(parasite2.type, parasite2.alive);
        generateCharacter(parasite3.type, parasite3.alive);


    } else if (human2.card === cardNumber && human2.alive) {
        human2.alive = false;
        parasite4.alive = true;
        parasite5.alive = true;
        ChangeScoreHumanDead();
        resetCards();
        generateCharacter(parasite4.type, parasite4.alive);
        generateCharacter(parasite5.type, parasite5.alive);


    } else if (human3.card === cardNumber && human3.alive) {

        human3.alive = false;
        parasite6.alive = true;
        parasite7.alive = true;
        ChangeScoreHumanDead();
        resetCards();
        generateCharacter(parasite6.type, parasite6.alive);
        generateCharacter(parasite7.type, parasite7.alive);

    } else if (parasite1.card === cardNumber && parasite1.alive) {
        parasite1.alive = false;
        ChangeScoreParasiteDead()
        resetCards();

    } else if (parasite2.card === cardNumber && parasite2.alive) {
        parasite2.alive = false;
        ChangeScoreParasiteDead()
        resetCards();

    } else if (parasite3.card === cardNumber && parasite3.alive) {
        parasite3.alive = false;
        ChangeScoreParasiteDead()
        resetCards();

    } else if (parasite4.card === cardNumber && parasite4.alive) {
        parasite4.alive = false;
        ChangeScoreParasiteDead()
        resetCards();

    } else if (parasite5.card === cardNumber && parasite5.alive) {
        parasite5.alive = false;
        ChangeScoreParasiteDead()
        resetCards();

    } else if (parasite6.card === cardNumber && parasite6.alive) {
        parasite6.alive = false;
        ChangeScoreParasiteDead()
        resetCards();

    } else if (parasite7.card === cardNumber && parasite7.alive) {
        parasite7.alive = false;
        ChangeScoreParasiteDead();
        resetCards();
    }
    //if empty space is clicked, character cards are scrambled.
    else {
        resetCards();
    }
}


function resetGame() {

    $('#card1').hide();
    $('#card2').hide();
    $('#card3').hide();
    $('#card4').hide();
    $('#card5').hide();
    $('#card6').hide();
    $('#card7').hide();
    $('#card8').hide();
    $('#card9').hide();

    peopleRemaining = 3;
    parasitesRemaining = 1;
    document.getElementById("people_remaining").innerHTML = peopleRemaining;
    document.getElementById("parasites_remaining").innerHTML = parasitesRemaining;
    resetCards();



    startGame()
    // location.reload()
}

//event listeners for card clicks
$(document).ready(


    //card 1 clicked
    $('#button1').on('click', function () {
        kill(1);
    }),
    $('#button2').on('click', function () {
        kill(2);
    }),

    $('#button3').on('click', function () {
        kill(3);
    }),

    $('#button4').on('click', function () {
        kill(4);
    }),

    $('#button5').on('click', function () {
        kill(5);
    }),
    $('#button6').on('click', function () {
        kill(6);
    }),
    $('#button7').on('click', function () {
        kill(7);
    }),
    $('#button8').on('click', function () {
        kill(8);
    }),
    $('#button9').on('click', function () {
        kill(9);
    }),

    $('.reset-button').on('click',
        function () {
            resetGame();
        })


)


function gameOver() {
    var list = document.getElementsByClassName("invisible_button");
    for (var i = 0; i < list.length; i++) {
        list[i].disabled = true;
    }
}