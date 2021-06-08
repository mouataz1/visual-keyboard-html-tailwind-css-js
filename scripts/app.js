var screen = document.querySelector('.text');
const delet_btn = document.querySelector('.deletbtn');
const space_btn = document.querySelector('.spacebtn');
const keys = document.getElementsByTagName('button');
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function() {
        var screenvalue;
        if (keys[i] == delet_btn) {
            screen.innerHTML = "";
        } else if (keys[i] == space_btn) {
            screen.innerHTML += " ";
        } else {
            screenvalue = keys[i].innerHTML;
            screen.innerHTML += screenvalue;
        }

    });
}