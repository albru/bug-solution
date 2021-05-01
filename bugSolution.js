// Код здесь
const canvas = document.getElementById('canvas');

const c = canvas.getContext('2d');

//top line
c.beginPath();
c.moveTo(150, 114)
c.lineTo(250, 114)
c.strokeStyle = '#ffff'
c.lineWidth = 16
c.stroke()

//left line
c.beginPath();
c.moveTo(120, 144)
c.lineTo(120, 294)
c.strokeStyle = '#ffff'
c.lineWidth = 16
c.stroke()

//right line
c.beginPath();
c.moveTo(280, 144)
c.lineTo(280, 294)
c.strokeStyle = '#ffff'
c.lineWidth = 16
c.stroke()

function keysPressed(e) {
    const key = e.target.key;

    switch (key) {
        case 37:
            console.log('left');
            break;

        case 39:
            console.log('right');
            break;

        case 38:
            console.log('down');
            break;

        case 40:
            console.log('up');
            break;
    }

}

document.onkeydown = keysPressed