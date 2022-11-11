const turn_on = document.getElementById('on');
const turn_off = document.getElementById('off');
const lamp = document.getElementById('lamp');

function lamp_on () {
    lamp.src = './images/turned_on.jpg';
}

function lamp_off () {
    lamp.src = './images/turned_off.jpg';
}

turn_on.addEventListener('click', lamp_on);

turn_off.addEventListener('click', lamp_off);