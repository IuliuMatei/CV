
var counter = parseInt(localStorage.getItem('counter')) || 0;


document.getElementById('counter').textContent = counter;


function increment() {

    counter++;


    document.getElementById('counter').textContent = counter;


    localStorage.setItem('counter', counter);
}
