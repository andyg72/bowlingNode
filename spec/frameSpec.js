var Frame = require('../js/frame')

describe('a frame', function(){

  it('should start with a score of 0', function() {
    frame = new Frame();
    expect(frame.score).toEqual(0);
  });

});