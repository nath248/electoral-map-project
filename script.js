var politicianName = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  return politician;
}
var jonathan = politicianName("Jonathan Wilson",[132, 17, 11]);
var julia = politicianName("Julia Rodriguez",[245, 141, 136]);

console.log("Jonathan's color is: " + jonathan.partyColor);
console.log("Julia's color is: " + julia.partyColor);

jonathan.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
julia.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

jonathan.electionResults[9] = 1;
julia.electionResults[9] = 28;

jonathan.electionResults[4] = 17;
julia.electionResults[4] = 38;

jonathan.electionResults[43] = 11;
julia.electionResults[43] = 27;

console.log(jonathan.electionResults);
console.log(julia.electionResults);

politician.totalVoteTally = function()
{
  this.totalVotes = 0;

  for (var i = 0; i < this.electionResults.length; i++)
  {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

jonathan.totalVoteTally();
julia.totalVoteTally();

console.log(jonathan.totalVotes);
console.log(julia.totalVotes);

var winner = "";

if (jonathan.totalVotes > julia.totalVotes) {
  winner = jonathan.name;
}
else if (jonathan.totalVotes < julia.totalVotes){
  winner = julia.name;
}
else {
  winner = "DRAW"
}
console.log("AND THE WINNER IS ..." + winner "!!!");
