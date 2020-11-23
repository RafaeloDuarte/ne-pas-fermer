const robot = require('robotjs')

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

while(true){
    sleep(180000)
    robot.moveMouse(100,100)
}