let emptyString = '';
let fourMultiplier = 4;
let twoMultiplier = 2;
let a = prompt('Enter value of a');
let b = prompt('Enter value of b');
let c = prompt('Enter value of c');
let d = b*b - fourMultiplier*(a * c);
if (!a || a.trim() === emptyString || isNaN(a) || 
    !b || b.trim() === emptyString || isNaN(b) || 
    !c || c.trim() === emptyString || isNaN(c)){
    console.log('Invalid input data');
} else if (d < 0){
    console.log('no solution');
} else if (d === 0){
    let x = -b/(twoMultiplier * a);
    console.log('x = ' + x);
} else if (d > 0){
    let x1 = Math.round((-b - Math.sqrt(d))/(twoMultiplier * a));
    let x2 = Math.round((-b + Math.sqrt(d))/(twoMultiplier * a));
    console.log('x1 = ' + x1 + ' and x2 = ' + x2);
}
