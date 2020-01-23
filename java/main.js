//outlining all global variables and objects

//defines character obejcts
const human1 = {
    type: "human1",
    alive: true,
    card: 0,
    image: "",
    name: ""
};
let human2 = {
    type: "human2",
    alive: true,
    card: 0,
    image: "",
    name: ""
};
let human3 = {
    type: "human3",
    alive: true,
    card: 0,
    image: "",
    name: ""
};
let parasite1 = {
    type: "parasite1",
    alive: true,
    card: 0,
    image: "",
    name: ""
};
let parasite2 = {
    type: "parasite2",
    alive: false,
    card: 0,
    image: "",
    name: ""
};
let parasite3 = {
    type: "parasite3",
    alive: false,
    card: 0,
    image: "",
    name: ""
};
let parasite4 = {
    type: "parasite4",
    alive: false,
    card: 0,
    image: "",
    name: ""
};
let parasite5 = {
    type: "parasite5",
    alive: false,
    card: 0,
    image: "",
    name: ""
};
let parasite6 = {
    type: "parasite6",
    alive: false,
    card: 0,
    image: "",
    name: ""
};

let parasite7 = {
    type: "parasite7",
    alive: false,
    card: 0,
    image: "",
    name: ""
};

//create an array of the random card numbers - numbers will be pushed to array to check that number !exist already
let cardNumbers = [];

//create array with numbers 1-9 randomised under variable "randomisedArray"
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//Global variables to establish scores
let peopleRemaining = 3;
let parasitesRemaining = 1;


//generates random number between 1-298 
function randomiseCardNumber() {
    let rdn = Math.floor(Math.random() * 297) + 1;
    return rdn;
}

//prevents duplicate cards from appearing. Triggers randomCardNumber()
function randomApi() {
    let rdn = randomiseCardNumber();
    if (!cardNumbers.includes(rdn)) {
        cardNumbers.push(rdn);
        return rdn;
    }
    else {
        if (!cardNumbers.includes(299)) {
            cardNumbers.push(299);
            return 299;
        }
        else if (!cardNumbers.includes(300)) {
            cardNumbers.push(300);
            return 300;
        }
        else {
            cardNumbers.push(301);
            return 301;
        }
    }
}

//generates random character if status: alive
function generateCharacter(type, alive) {
    if (alive) {

        let endpoint = randomApi().toString();
        let url = "https://rickandmortyapi.com/api/character/";

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": url + endpoint,
            "method": "GET"
        }

        //outputs a name and image
        $.ajax(settings).done(function (response) {
            const name = response.name;
            const image = response.image;

            //executes function to assign character to random square whether dead or alive && assigns image and name to character Object
            if (type === "human1") {
                human1.name = name;
                human1.image = image;
                placeCharacter(image, name, human1.type, human1.alive)
            } else if (type === "human2") {
                human2.name = name;
                human2.image = image;
                placeCharacter(image, name, human2.type, human2.alive)
            } else if (type === "human3") {
                human3.name = name;
                human3.image = image;
                placeCharacter(image, name, human3.type, human3.alive)
            } else if (type === "parasite1") {
                parasite1.name = name;
                parasite1.image = image;
                placeCharacter(image, name, parasite1.type, parasite1.alive)
            } else if (type === "parasite2") {
                parasite2.name = name;
                parasite2.image = image;
                placeCharacter(image, name, parasite2.type, parasite2.alive)
            } else if (type === "parasite3") {
                parasite3.name = name;
                parasite3.image = image;
                placeCharacter(image, name, parasite3.type, parasite3.alive)
            } else if (type === "parasite4") {
                parasite4.name = name;
                parasite4.image = image;
                placeCharacter(image, name, parasite4.type, parasite4.alive)
            } else if (type === "parasite5") {
                parasite5.name = name;
                parasite5.image = image;
                placeCharacter(image, name, parasite5.type, parasite5.alive)
            } else if (type === "parasite6") {
                parasite6.name = name;
                parasite6.image = image;
                placeCharacter(image, name, parasite6.type, parasite6.alive)
            } else if (type === "parasite7") {
                parasite7.name = name;
                parasite7.image = image;
                placeCharacter(image, name, parasite7.type, parasite7.alive)
            };

        })
    }
}

function placeCharacter(image, name, type, alive) {


    //will assign if status: alive
    if (alive) {

        //assigns characters to new character card
        function sendToAllocate() {
            if (type === "human1") {
                allocateSquare(randomisedArray[0]);
                human1.card = randomisedArray[0];
            } else if (type === "human2") {
                allocateSquare(randomisedArray[1]);
                human2.card = randomisedArray[1];
            } else if (type === "human3") {
                allocateSquare(randomisedArray[2]);
                human3.card = randomisedArray[2];
            } else if (type === "parasite1") {
                allocateSquare(randomisedArray[3]);
                parasite1.card = randomisedArray[3];
            } else if (type === "parasite2") {
                allocateSquare(randomisedArray[4]);
                parasite2.card = randomisedArray[4];
            } else if (type === "parasite3") {
                allocateSquare(randomisedArray[5]);
                parasite3.card = randomisedArray[5];
            } else if (type === "parasite4") {
                allocateSquare(randomisedArray[6]);
                parasite4.card = randomisedArray[6];
            } else if (type === "parasite5") {
                allocateSquare(randomisedArray[7]);
                parasite5.card = randomisedArray[7];
            } else if (type === "parasite6") {
                allocateSquare(randomisedArray[8]);
                parasite6.card = randomisedArray[8];
            } else if (type === "parasite7") {
                human3.card = 0;
                allocateSquare(randomisedArray[2]);
                parasite7.card = randomisedArray[2];
            }
        }

        sendToAllocate()

        //allocates characters to card based on random number array
        function allocateSquare(randomisedArrayNumber) {
            let theNumber = randomisedArrayNumber.toString();
            let placeName = "#character-name-" + theNumber;
            let placeImage = "#image" + theNumber;
            let characterCard = "#card" + theNumber;
            $(placeImage).attr('src', image).show();
            $(placeName).html(name);
            $(characterCard).show();
            //return randomisedArrayNumber
        }

        //removes killed character
    } else {
        if (type === "human1") {
            human1.image = "";
            human1.name = "";
        } else if (type === "human2") {
            human2.image = "";
            human2.name = "";
        } else if (type === "human3") {
            human3.image = "";
            human3.name = "";
        } else if (type === "parasite1") {
            parasite1.image = "";
            parasite1.name = "";
        } else if (type === "parasite2") {
            parasite2.image = "";
            parasite2.name = "";
        } else if (type === "parasite3") {
            parasite3.image = "";
            parasite3.name = "";
        } else if (type === "parasite4") {
            parasite4.image = "";
            parasite4.name = "";
        } else if (type === "parasite5") {
            parasite5.image = "";
            parasite5.name = "";
        } else if (type === "parasite6") {
            parasite6.image = "";
            parasite6.name = "";
        } else if (type === "parasite7") {
            parasite7.image = "";
            parasite7.name = "";
        }
    }
}

// api.js copy pasted:

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

let won = 0;
let lost = 0;


function checkScore() {
    if (peopleRemaining === 0) {
        //final_result_announcement
        document.getElementById("final_result_announcement").innerHTML = "You Lose!";
        lost += 1;
        document.getElementById("lost").innerHTML = lost;
        gameOver();

        //TRIGGER RESET BUTTON FUNCTION

    } else if (parasitesRemaining === 0) {
        document.getElementById("final_result_announcement").innerHTML = "You Win!";
        won += 1;
        document.getElementById("won").innerHTML = won;
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

    var list = document.getElementsByClassName("invisible_button");
    for (var i = 0; i < list.length; i++) {
        list[i].disabled = false;
    }

    cardNumbers = [];

    clearCards()
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

    shuffle(numbers);

    human1.alive = true;
    human2.alive = true;
    human3.alive = true;
    parasite1.alive = true;
    parasite2.alive = false;
    parasite3.alive = false;
    parasite4.alive = false;
    parasite5.alive = false;
    parasite6.alive = false;
    parasite7.alive = false;
    // resetCards();
    clearCards()

    document.getElementById("final_result_announcement").innerHTML = "";



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