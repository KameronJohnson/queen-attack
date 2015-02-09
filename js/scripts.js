var queenAttack = function(queen_coords, opponent_coords) {
  if (queen_coords[1] === opponent_coords[1] || queen_coords[0] === opponent_coords[0]) {
    return true;
  } else if (Math.abs(queen_coords[0] - opponent_coords[0]) === Math.abs(queen_coords[1] - opponent_coords[1])) {
    return true;
  } else {
  return false;
  }
};

$(document).ready(function() {
  $("form#queen-attack").submit(function(event) {

    var queenCoordinates = $("input#queen-coordinates").val().split(",");
    var opponentCoordinates = $("input#opponent-coordinates").val().split(",");
    var result = queenAttack(queenCoordinates, opponentCoordinates);

    $(".queen-coordinates").text(queenCoordinates);
    $(".opponent-coordinates").text(opponentCoordinates);

    if (result) {
      $(".answer").text("can");
    } else {
      $(".answer").text("can't");
    }

    $("#result").show();

    event.preventDefault();

  });
});
