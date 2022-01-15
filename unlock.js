var input = document.getElementById("input");

var container = document.querySelector('.container');
var keycontainer = document.getElementById("keycontainer");
var key = document.getElementById("key");
var para = document.querySelector(".para");
function submit() {

    container.style.display = "flex";
    keycontainer.style.height = "20vh";
    keycontainer.style.paddingTop = "3vh";



}
function number(a) {
    input.value = input.value + a;

}
function unlock() {
    if (input.value === key.value) {
        container.style.display = "none";
        para.style.display = "contents";
        keycontainer.style.display = "none";

    }
    else {
        alert("Plese Enter the correct Key")
    }


}