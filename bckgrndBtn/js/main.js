 'use strict';

var par1 = document.getElementById('par1');
var par2 = document.getElementById('par2');

function ustawTlo(){
    par1.style.backgroundColor = 'red';
    par2.style.backgroundColor = 'yellow';
}

var btn = document.getElementById('bck-btn');

btn.onclick = ustawTlo;