// create an element for displaying the time
const clockElement = document.createElement('h1');

// give the element an id
clockElement.id = 'clock';

//append the element to the body
document.body.appendChild(clockElement);

// write a function that updates the clockElement with the current time
function simpleClock() {
    let time = new Date().toLocaleTimeString();
    clockElement.textContent = time;
}

// call the function every second
setInterval(simpleClock, 1000);