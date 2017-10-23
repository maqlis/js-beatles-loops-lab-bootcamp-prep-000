function theBeatlesPlay(musicians, instruments){
  var plays = []
  for( var i = 0; i < musicians.length; i++){
    plays[i] = (`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}
