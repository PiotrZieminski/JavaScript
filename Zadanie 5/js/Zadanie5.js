
function getTriangleArea(a, h) {
    if (a < 0 || h < 0) {
        console.log('Nieprawidłowe dane')
    }else {
        return a*h/2;
    }
}

console.log(getTriangleArea(10,6));


var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(15, 15);
var triangle3Area = getTriangleArea(10, 20);
console.log(triangle1Area,triangle2Area,triangle3Area);