var Frame = require('../js/frame')

describe('a frame', function(){

  it('should start with a score of 0', function() {
    var frame = new Frame();
    expect(frame.score).toEqual(0);
  });

  it('should add up the total score', function() {
    var frame = new Frame();
    frame.play(3, 4);
    expect(frame.score).toEqual(7);
  });

});