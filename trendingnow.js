
function sayHello() {

    var fullName = document.getElementById('fullName').value;

   
    if (fullName) {
        alert('Hello, ' + fullName + '!');
    } else {
        alert('Please enter your full name.');
    }
}

