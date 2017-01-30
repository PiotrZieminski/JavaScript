var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach',
    text1 = 'Zielone słonie',
    changeText1 = text_1.toUpperCase(),
    textAfterChange = text.replace('Papugi', changeText1),
    textAfterChangefit = textAfterChange.substr(0, text.length / 2);

console.log(textAfterChange);
console.log(textAfterChangefit);