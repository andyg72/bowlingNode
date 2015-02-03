var Frame = require('./frame')

function Game() {
  var frame = new Frame();
  this.runningScore = 0;
};

Game.prototype.getFrameScore = function() {
  this.runningScore += this.frame.frameScore();
};

module.exports = Game;