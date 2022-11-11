const turnOnOff = document.getElementById('on_off');
const lamp = document.getElementById('lamp');

lamp.addEventListener('mouseover', lamp_on);
lamp.addEventListener('mouseleave', lamp_off);
turnOnOff.addEventListener('click', offOn);
lamp.addEventListener('dblclick', () => lamp.src = './images/broked.jpg');

const brkd_lamp = () => lamp.src.indexOf('broked') > -1;

const ifLampOn = () => lamp.src.indexOf('turned_on') > -1;

const ifLampOff = () => lamp.src.indexOf('turned_off') > -1;

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

function offOn () {
    if (!brkd_lamp () && ifLampOff ()) {
        lamp.src = './images/turned_on.jpg';
    } 
    else if (!brkd_lamp () && ifLampOn ()) {
        lamp.src = './images/turned_off.jpg';
    }
    
}


