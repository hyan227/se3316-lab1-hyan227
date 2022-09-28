function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
function myFunction1() {
    var searchText = document.getElementById("name").value;
    var divs = document.querySelectorAll(".my-li > div");

    if (searchText.length > 0) {
        divs.forEach((div) => {
            div.classList.add("hide");
            if ((div.dataset.tags.toUpperCase()).indexOf(searchText.toUpperCase()) > -1) {
                div.classList.remove("hide");
            }
        });
    } else {
        divs.forEach((div) => {
            div.classList.remove("hide");
        });
    }
}

function myFunction2() {
    var searchText = document.getElementById("number").value;
    var divs = document.querySelectorAll(".my-li > div");

    if (searchText.length > 0) {
        divs.forEach((div) => {
            div.classList.add("hide");
            if ((div.dataset.tags.toUpperCase()).indexOf(searchText.toUpperCase()) > -1) {
                div.classList.remove("hide");
            }
        });
    } else {
        divs.forEach((div) => {
            div.classList.remove("hide");
        });
    }
}
function allLetter(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/[a-zåäö ]/i);
    return pattern.test(value);
}
/*  This is for objects that will be fetched */
function nameDescription() {
    var count = 0;
    inputName = document.getElementById("name").value;
    names = document.getElementsByTagName("strong");
    for (var i = 0; i < names.length; i++) {
        if ((((names[i].innerHTML).toUpperCase()).indexOf(inputName.toUpperCase()) > -1) && inputName != "") {
            if (count >= 5)
                break;
            switch (i) {
                case 0:
                    alert(" name: Bulbasaur, number: 001, type: Grass/Poison, rarity: 4");
                    break;
                case 1:
                    alert("name: Ivysaur, number: 002, type: Grass/Poison, rarity: 5");
                    break;
                case 2:
                    alert("name: Venusaur, number: 003, type: Grass/Poison, rarity: 6");
                    break;
                case 3:
                    alert("name: Mega Venusaur, number: 003, type: Grass/Poison, rarity: 6");
                    break;
                case 4:
                    alert("name: Charmander, number: 004, type: Fire, rarity: 4");
                    break;
                case 5:
                    alert("name: Charmeleon, number: 005, type: Fire, rarity: 5");
                    break;
                case 6:
                    alert("name: Charizard, number: 006, type: Fire/Flying, rarity: 6");
                    break;
                case 7:
                    alert("name: Mega Charizard X, number: 006, type: Fire/Flying, rarity: 6");
                    break;
                case 8:
                    alert("name: Mega Charizard Y, number: 006, type: Fire/Flying, rarity: 6");
                    break;
                case 9:
                    alert("name: Squirtle, number: 007, type: Water, rarity: 4");
                    break;
                case 10:
                    alert("name: Wartortle, number: 008, type: Water, rarity: 5");
                    break;
                case 11:
                    alert("name: Blastoise, number: 009, type: Water, rarity: 6");
                    break;
                case 12:
                    alert("name: Mega Blastoise, number: 009, type: Water, rarity: 6");
                    break;
                case 13:
                    alert("name: Caterpie, number: 010, type: Bug, rarity: 1");
                    break;
                case 14:
                    alert("name: Metapod, number: 011, type: Bug, rarity: 3");
                    break;
                case 15:
                    alert("name: Butterfree, number: 012, type: Bug/Flying, rarity: 4");
                    break;
                case 16:
                    alert("name: Weedle, number: 013, type: Bug/Poison, rarity: 1");
                    break;
                case 17:
                    alert("name: Kakuna, number: 014, type: Bug/Poison, rarity: 3");
                    break;
                case 18:
                    alert("name: Beedrill, number: 015, type: Bug/Poison, rarity: 4");
                    break;
                case 19:
                    alert("name: Mega Beedrill, number: 015, type: Bug/Poison, rarity: 4");
                    break;
                case 20:
                    alert("name: Pidgey, number: 016, type: Normal/Flying, rarity: 1");
                    break;
                case 21:
                    alert("name: Pidgeotto, number: 017, type: Normal/Flying, rarity: 3");
                    break;
                case 22:
                    alert("name: Pidgeot, number: 018, type: Normal/Flying, rarity: 4");
                    break;
                case 23:
                    alert("name: Mega Pidgeot, number: 018, type: Normal/Flying, rarity: 4");
                    break;
                case 24:
                    alert("name: Rattata, number: 019, type: Normal, rarity: 1");
                    break;
                case 25:
                    alert("name: Raticate, number: 020, type: Normal/, rarity: 4");
            }
            count++;
        }

    }
    if (count <= 0) {
        alert("no such Pokemon was found");
    }

}



function numberDescription() {
    var count = 0;
    inputNum = document.getElementById("number").value;
    numbers = document.getElementsByTagName("p");
    for (var i = 0; i < numbers.length; i++) {
        if ((((numbers[i].innerHTML).toUpperCase()).indexOf(inputNum.toUpperCase()) > -1) && inputNum != "") {
            if (count >= 5)
                break;
            switch (i) {
                case 0:
                    alert(" name: Bulbasaur, number: 001, Type: Grass/Poison, rarity: 4");
                    break;
                case 1:
                    alert("name: Ivysaur, number: 002, Type: Grass/Poison, rarity: 5");
                    break;
                case 2:
                    alert("name: Venusaur, number: 003, Type: Grass/Poison, rarity: 6");
                    break;
                case 3:
                    alert("name: Mega Venusaur, number: 003, Type: Grass/Poison, rarity: 6");
                    break;
                case 4:
                    alert("name: Charmander, number: 004, Type: Fire, rarity: 4");
                    break;
                case 5:
                    alert("name: Charmeleon, number: 005, Type: Fire, rarity: 5");
                    break;
                case 6:
                    alert("name: Charizard, number: 006, Type: Fire/Flying, rarity: 6");
                    break;
                case 7:
                    alert("name: Mega Charizard X, number: 006, Type: Fire/Flying, rarity: 6");
                    break;
                case 8:
                    alert("name: Mega Charizard Y, number: 006, Type: Fire/Flying, rarity: 6");
                    break;
                case 9:
                    alert("name: Squirtle, number: 007, Type: Water, rarity: 4");
                    break;
                case 10:
                    alert("name: Wartortle, number: 008, Type: Water, rarity: 5");
                    break;
                case 11:
                    alert("name: Blastoise, number: 009, Type: Water, rarity: 6");
                    break;
                case 12:
                    alert("name: Mega Blastoise, number: 009, Type: Water, rarity: 6");
                    break;
                case 13:
                    alert("name: Caterpie, number: 010, Type: Bug, rarity: 1");
                    break;
                case 14:
                    alert("name: Metapod, number: 011, Type: Bug, rarity: 3");
                    break;
                case 15:
                    alert("name: Butterfree, number: 012, Type: Bug/Flying, rarity: 4");
                    break;
                case 16:
                    alert("name: Weedle, number: 013, Type: Bug/Poison, rarity: 1");
                    break;
                case 17:
                    alert("name: Kakuna, number: 014, Type: Bug/Poison, rarity: 3");
                    break;
                case 18:
                    alert("name: Beedrill, number: 015, Type: Bug/Poison, rarity: 4");
                    break;
                case 19:
                    alert("name: Mega Beedrill, number: 015, Type: Bug/Poison, rarity: 4");
                    break;
                case 20:
                    alert("name: Pidgey, number: 016, Type: Normal/Flying, rarity: 1");
                    break;
                case 21:
                    alert("name: Pidgeotto, number: 017, Type: Normal/Flying, rarity: 3");
                    break;
                case 22:
                    alert("name: Pidgeot, number: 018, Type: Normal/Flying, rarity: 4");
                    break;
                case 23:
                    alert("name: Mega Pidgeot, number: 018, Type: Normal/Flying, rarity: 4");
                    break;
                case 24:
                    alert("name: Rattata, number: 019, Type: Normal, rarity: 1");
                    break;
                case 25:
                    alert("name: Raticate, number: 020, Type: Normal/, rarity: 4");
            }
            count++;
        }

    }
    if (count <= 0) {
        alert("no such Pokemon was found");
    }
}
