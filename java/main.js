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



//create array with numbers 1-9 randomised under variable "randomisedArray"
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//Global variables to establish scores
let peopleRemaining = 3;
let parasitesRemaining = 1;


//generates random number between 1-301 
function randomApi() {
    let rdn = Math.floor(Math.random() * 300 + 1);
    return rdn;
}


//function that generates random character if status:alive

function generateCharacter(type, alive) {
    if (alive === true) {

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
                console.log("human1 = " + name)
                placeCharacter(image, name, human1.type, human1.alive)
            } else if (type === "human2") {
                human2.name = name;
                human2.image = image;
                console.log("human2 = " + name)
                placeCharacter(image, name, human2.type, human2.alive)
            } else if (type === "human3") {
                human3.name = name;
                human3.image = image;
                console.log("human3 = " + name)
                placeCharacter(image, name, human3.type, human3.alive)
            } else if (type === "parasite1") {
                parasite1.name = name;
                parasite1.image = image;
                console.log("parasite1 = " + name)
                placeCharacter(image, name, parasite1.type, parasite1.alive)
            } else if (type === "parasite2") {
                parasite2.name = name;
                parasite2.image = image;
                console.log("parasite2 = " + name)
                placeCharacter(image, name, parasite2.type, parasite2.alive)
            } else if (type === "parasite3") {
                parasite3.name = name;
                parasite3.image = image;
                console.log("parasite3 = " + name)
                placeCharacter(image, name, parasite3.type, parasite3.alive)
            } else if (type === "parasite4") {
                parasite4.name = name;
                parasite4.image = image;
                console.log("parasite4 = " + name)
                placeCharacter(image, name, parasite4.type, parasite4.alive)
            } else if (type === "parasite5") {
                parasite5.name = name;
                parasite5.image = image;
                console.log("parasite5 = " + name)
                placeCharacter(image, name, parasite5.type, parasite5.alive)
            } else if (type === "parasite6") {
                parasite6.name = name;
                parasite6.image = image;
                console.log("parasite6 = " + name)
                placeCharacter(image, name, parasite6.type, parasite6.alive)
            } else if (type === "parasite7") {
                parasite7.name = name;
                parasite7.image = image;
                console.log("parasite7 = " + name)
                placeCharacter(image, name, parasite7.type, parasite7.alive)
            };

        })
    }
}

function placeCharacter(image, name, type, alive) {


    //will assign if status: alive
    if (alive === true) {

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
            console.log(type + " successfully assigned to square " + randomisedArrayNumber);
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