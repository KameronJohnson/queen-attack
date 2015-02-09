describe('queenAttack', function() {
  it('is false when the queen cannot attack an opponent positioned horizontally, vertically, or diagonally from her', function() {
    expect(queenAttack([1,1], [7,8])).to.equal(false);
  });
});
