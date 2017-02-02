var withMenuButton = document.getElementsByClassName('button');

console.log(withMenuButton);
var i = 1;
for (i = 1 ; i <= withMenuButton.length ; i++){
    var nazwa = withMenuButton[i-1];
    console.log(nazwa.innerText);
}