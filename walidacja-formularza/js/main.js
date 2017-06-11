'use strict';


document.getElementById('wyslij').addEventListener("click", validateForm());

function validateForm(e){
    var inputy = document.getElementsByTagName('input[type=text]');
    
}




var lastCheck = document.getElementById('wszystkie-zgody');
var allCheck = document.querySelectorAll('input[type=checkbox]');


function checkboxState(e) {
    e.preventDefault();
    console.log(lastCheck.checked);
    if (lastCheck.checked == true){
        
    }
}

var submit = document.getElementById('wyslij');

submit.onclick = checkboxState;
