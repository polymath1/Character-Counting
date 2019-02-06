function countLetters(inputStr) {
    var inputStr = inputStr.replace(/\s/g, '');
    var objects = {};
    for (var i = 0; i < inputStr.length; i++) {
       var currChar = inputStr[i];

    if (objects[currChar]) {
objects[currChar] = objects[currChar] + 1
    } else {
        objects[currChar] = 1;
    }

}
    return objects
}

console.log(countLetters("lighthouse in the house"))