var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';

var text_1 = 'Zielone słonie';
var changeText1 = text_1.toUpperCase();

var textAfterChange = text.replace('Papugi', changeText1);
var textAfterChangefit = textAfterChange.substr(0,45);

console.log(textAfterChange);

console.log(textAfterChangefit);