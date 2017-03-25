const five = require('johnny-five');

const board = new five.Board();

board.on('ready', () => {
  const button = new five.Button(2);
  console.log(button.holdtime);
  button.holdtime = 100;
  console.log(button.holdtime);
  board.repl.inject({ button });
  const led = new five.Led(13);
  button.on('down', () => {
    console.log('down');
    led.on();
  });

  button.on('hold', () => {
    console.log('hold');
    led.toggle();
  });

  button.on('up', () => {
    console.log('up');
    led.off();
  });
});

/* Breadboard setup
5v -> 1-
GND -> 1+
Digital 2 -> 7b
2- -> 5a
10- -> 10a
10a <330 resistor> 7c
button -> 5e, 7e
led (directly in arduino) -> dig13, gnd
*/
