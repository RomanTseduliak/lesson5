let message = 'JavaScript';
alert(message);
message = 'nice 2 c u'
alert(message);

let userAge = parseInt(prompt('Enter your age'));
alert('Your age is + userAge');

let nextAge = userAge + 1;
alert('Next year you will be' + nextAge)
if (userAge >=18 && userAge <65) {
alert('You are adult');
} else if (userAge >= 65) {
    alert('You are retired');
  else {
alert('Yoy are kid');
}