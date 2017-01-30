
function getTriangleArea(a, h) {
    if (a < 0 && h < 0) {
        console.log('Nieprawidłowe dane')
    }
    else {
        var wynikDzialania = a*h/2;
        return (wynikDzialania);
    }
}
var triangle1Area = getTriangleArea(5, 5);
console.log(triangle1Area);