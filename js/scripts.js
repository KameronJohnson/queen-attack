var queenAttack = function(queen_coords, opponent_coords) {
  if ((queen_coords[1] === opponent_coords[1]) || (queen_coords[0] === opponent_coords[0])) {
    return true;
  } else if ((Math.abs(queen_coords[0] - opponent_coords[0])) === (Math.abs(queen_coords[1] - opponent_coords[1]))) {
    return true;
  } else {
  return false;
  }
};
