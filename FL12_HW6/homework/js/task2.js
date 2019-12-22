let emptyString = '';
let a = prompt('Enter the length of "a" side of triangle:');
let b = prompt('Enter the length of "b" side of triangle:');
let c = prompt('Enter the length of "c" side of triangle:');
if (!a || a.trim() === emptyString || isNaN(a) || 
    !b || b.trim() === emptyString || isNaN(b) || 
    !c || c.trim() === emptyString || isNaN(c)) {
    alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (+a + +b <= +c || +a + +c <= +b || +b + +c <= +a) {
    alert('Triangle doesn\'t exist');
    console.log('Triangle doesn\'t exist');
} else if (a === b, b ===c, a === c) {
    console.log('Equilateral triangle');
} else if (a === b || b ===c || a === c){
    console.log('Isosceles triangle');
} else if (a !== b !== c !== a) {
    console.log('Scalene triangle');
}

