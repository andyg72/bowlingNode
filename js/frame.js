function Frame() {
  this.score = 0;
};

Frame.prototype.frameScore = function() {
  return this.score;
};

Frame.prototype.play = function(roll1, roll2) {
  this.score = roll1 + roll2;
};

module.exports = Frame;