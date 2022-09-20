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