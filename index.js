function theBeatlesPlay(musicians, instruments){
  var plays = []
  for( var i = 0; i < musicians.length; i++){
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}
function johnLennonFacts(facts){
  var johnFacts = []
  for(var i=0; i<facts.length; i++){
    johnFacts[i] = `${facts[i]}!!!`
  }
  return johnFacts
}
function iLoveTheBeatles(n){
  var love = []
  for( var i = 0; i <= n; i++ ){
    love[i] = "I love the Beatles!"
  }
}
