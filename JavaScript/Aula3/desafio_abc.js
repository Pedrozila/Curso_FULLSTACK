var a = 10;
var b = 20;
var c = null

document.write('A: ' + a + '<br>');
document.write('B: ' + b + '<br>');
document.write('C: ' + c + '<br>');

document.write('<hr>');

c = a;
a = b;
b = c;
c = null

console.log(a);
console.log(b);
console.log(c);

document.write('A: ' + a + '<br>');
document.write('B: ' + b + '<br>');
document.write('C: ' + c + '<br>');