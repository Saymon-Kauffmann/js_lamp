const turnOnOff = document.getElementById('on_off');
const lamp = document.getElementById('lamp');

lamp.addEventListener('mouseover', lamp_on);
lamp.addEventListener('mouseleave', lamp_off);
turnOnOff.addEventListener('click', offOn);
lamp.addEventListener('dblclick', broke);


function lamp_on () {
    if (!brkd_lamp () && ifLampOff ()) {
        lamp.src = './images/turned_on.jpg';
    }
}

function lamp_off () {
    if (!brkd_lamp () && ifLampOn ()) {
        lamp.src = './images/turned_off.jpg';
    }
}

function broke () {
    lamp.src = './images/broked.jpg';
}

function brkd_lamp () {
    return lamp.src.indexOf('broked') > -1;
}

function offOn () {
    if (!brkd_lamp () && ifLampOff ()) {
        lamp.src = './images/turned_on.jpg';
    } 
    else if (!brkd_lamp () && ifLampOn ()) {
        lamp.src = './images/turned_off.jpg';
    }
    
}

function ifLampOn () {
    return lamp.src.indexOf('turned_on') > -1;
}

 function ifLampOff () {
    return lamp.src.indexOf('turned_off') > -1;
 }