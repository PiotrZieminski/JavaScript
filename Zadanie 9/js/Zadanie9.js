var withMenuButton = document.getElementsByClassName('button');

console.log(withMenuButton);

var nazwa = "";

for (var i = 0 ; i < withMenuButton.length -1 ; i++){
    nazwa = withMenuButton[i];
    console.log(nazwa.innerText);
};