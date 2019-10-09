var number = 0;
var myh1 = document.getElementById("num");

function add() {
    number = number + 1;
    myh1.innerHTML = number;
}

function minus() {
    if (number > 0) {
        number = number - 1;
        myh1.innerHTML = number;
    }

}