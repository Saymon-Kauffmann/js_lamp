const turn_on = document.getElementById('on');
const turn_off = document.getElementById('off');
const lamp = document.getElementById('lamp');

turn_on.addEventListener('click', lamp_on);
turn_off.addEventListener('click', lamp_off);
lamp.addEventListener('mouseover', lamp_on);
lamp.addEventListener('mouseleave', lamp_off);
lamp.addEventListener('dblclick', () => lamp.src = './images/broked.jpg');

const brkd_lamp = () => lamp.src.indexOf('broked') > -1;

function lamp_on () {
    if (!brkd_lamp ()) {
        lamp.src = './images/turned_on.jpg';
    }
}

function lamp_off () {
    if (!brkd_lamp ()) {
        lamp.src = './images/turned_off.jpg';
    }
}



