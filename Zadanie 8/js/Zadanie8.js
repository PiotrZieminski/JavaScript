function zrobChoinke(n) {
    for(i=1;i<=n;i++) {
        var star = "";
            for(j=1; j<=(2*i-1); j++) {
                star += "*";
            }
        console.log(star);

    }
}
zrobChoinke(3);