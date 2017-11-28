$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#zip").click(function(){
        $("#play").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#tip").click(function(){
        $("#day").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#lip").click(function(){
        $("#lay").slideToggle("slow");
    });
});
// the above is function for the slide toggle panels

//userInterface
$(document).ready(function() {
  var game = Object.create(pig);
  var player1wins = 0;
  var player2wins = 0;
  var checkPlayer = function() {
    var player = game.activePlayer;
    if (player === 1){
      $("h2#player1").css('color', 'green');
      $("h2#player2").css('color', 'grey');
      $("#player2buttons").hide();
      $("#player1buttons").show();
    }else{
      $("h2#player1").css('color', 'green');
      $("h2#player2").css('color', 'grey');
      $("#player1buttons").hide();
      $("#player2buttons").show();
    }
  };
checkPlayer();
var playerRoll = function() {
  var dice = game.rollDice();
  var output = "&#x263" + (dice-1) + ";";
  $("#displaydice").html(output);
  $("#dice").text(dice);
  changePlayerandefreshscores();
}
$("button#roll").click(function() {
  playerRoll();
});
$("button#hold").click(function() {
  game.hold();
    changePlayerandefreshscores();
});
});
$(document).keypress(function(event) {
  if((event.which == 122) && (game.activePlayer ===1)) {
    playerRoll();
  }else if((event.which == 47)&& (game.activePlayer == 2)) {
    playerRoll();
  }else if ((event.which == 32)){
    game.hold();
      changePlayerandefreshscores();
  }
});
//business logic
var Pig = {
  player1:0,
  player2:0,
  currentScore:0,
  activePlayer:1,
  rollDice: function() {
    var roll = Math.floor(Math.random() *6 )+ 1;
    if (roll ===1) {
      this.currentScore=0;
      this.switchActivePlayer();
    }
    else {
      this.currentScore += roll;
    }
    return roll;
  },
switchActivePlayer: function() {
 if(this.activePlayer === 1) {
   this.player += this.currentScore;
   this.activePlayer =2;
 } else{
   this.player2 += this.currentScore;
   this.activePlayer =1;
 }
},
hold:function(){
  this.switchActivePlayer();
  this.currentScore =0;
}
};
var changePlayerandRefreshscores = function() {
  wincheck();
  refreshScores();
  checkPlayer();
}
var wincheck = function() {
  if(game.Player1 >= 100) {
    alert("player1wins!");
    game = Object.create(Pig);
    player1wins += 1;
    $("#player2wins").text(player2wins);
  }
};
var refreshScores = function() {
  $("#player1score").text(game.player1);
  $("#player2score").text(game.player2);
  $("#current").text(game.currentScore);
});
