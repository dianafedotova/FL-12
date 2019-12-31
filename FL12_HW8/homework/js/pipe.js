  function pipe(parameter) {
    for (var i = 1; i < arguments.length; i++) {
        parameter = arguments[i](parameter);
    }
    return parameter;
}
function addOne(x) {
    return x + 1;
}
  
  pipe(1, addOne); 
  pipe(1, addOne, addOne); 
    
