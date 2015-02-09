describe('queenAttack', function() {
  it('is false when the queen cannot attack an opponent positioned horizontally, vertically, or diagonally from her', function() {
    expect(queenAttack([1,1], [7,8])).to.equal(false);
  });

  it('is true when queen can attack an opponent horizontally', function() {
    expect(queenAttack([1,1], [7,1])).to.equal(true);
  });

  it('is true when queen can attack an opponent vertically', function() {
    expect(queenAttack([1,1], [1,8])).to.equal(true);
  });

  it('is true when the queen can attack an opponent diagonally', function() {
    expect(queenAttack([3,5], [2,4])).to.equal(true);
  });

});
