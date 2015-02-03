describe('a game', function() {

  it('does not have a running total by default', function() {
    var game = new Game();
    expect(game.runningScore).toEqual(0);
  });
});