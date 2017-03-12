// Zadanie 8.11 ;-) TEST z materialowy

function checkOnclickEvent(param) {
    console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
    checkOnclickEvent('image został kliknięty')
});

inputElem.addEventListener('keypress', function(e) {
    e.target.value += ' test ';
});






//Zadanie 8.11 Eventy 8.11 ;-)

function checkOnClickButtonEvent(parametr) {
    console.log(parametr);
}
var inputList = document.getElementById('js-lista'),
    inputButton = document.getElementById('js-addElem');

inputList.addEventListener('click', function (e) {
    checkOnClickButtonEvent('Przycisk zostal kliniety');
});

var tagName = document.getElementsByTagName('li');
console.log(tagName);

var nazwa = "";

inputButton.addEventListener('click', function (e) {
    //for (var i = 0 ; i < tagName.length ; i++){
    //    var nazwa = inputList[i];
    //}
    inputList.innerHTML += '<li>' + 'item ' + tagName.length + '</li>';
});


