const five = require('johnny-five');

const board = new five.Board();
board.on('ready', () => {
  const motor = new five.Motor(9);
  motor.start(200);
  function spinWait() {
    board.wait(2000, () => {
      motor.stop();
      board.wait(1000, () => {
        motor.start(200);
        spinWait();
      });
    });
  }
  spinWait();
});
