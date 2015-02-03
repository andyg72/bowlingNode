var Game = require('../js/game')

describe('a game', function() {

  it('does not have a running total by default', function() {
    var game = new Game();
    expect(game.runningScore).toEqual(0);
  });

  it('should add the frame score to the running total', function() {
    var game = new Game();
    game.frame.play(3, 4);
    game.getFrameScore();
    expect(game.runningScore).toEqual(7);
  });

});