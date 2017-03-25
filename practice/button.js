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
