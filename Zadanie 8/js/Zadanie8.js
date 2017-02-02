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


function zrobChoinke1(n) {
    for(i=1;i<=n;i++) {
        for(j=n-1; j>=i; j--) document.write("&nbsp;");
        for(j=1; j<=(2*i-1); j++) document.write("*");
        document.write("<br />")
    }
}

zrobChoinke1(3);