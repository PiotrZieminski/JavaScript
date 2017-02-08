var withMenuButton = document.getElementsByClassName('button');

console.log(withMenuButton);

for (var i = 0 ; i <= withMenuButton.length -1 ; i++){
    var nazwa = withMenuButton[i];
    console.log(nazwa.innerText);
};