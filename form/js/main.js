'use strict';
//
var imie = document.getElementsByName('fname')[0].value;
//console.log(input1);

var nazwisko = document.getElementsByName('lname')[0].value;
//console.log(input2);

function pobierzImie(event){
    event.preventDefault();
    console.log(imie);
    console.log(nazwisko);
}

//var input = document.getElementsByTagName('input')[2];


//input.onclick = mandarynka;