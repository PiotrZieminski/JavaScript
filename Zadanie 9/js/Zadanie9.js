var withMenuButton = document.getElementsByClassName('button');

console.log(withMenuButton);

for (var i = 0 ; i <= withMenuButton.length ; i++){
    var nazwa = withMenuButton[i];
    console.log(nazwa.innerText);
}