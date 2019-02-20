function takeANumber(currentLine,name){
  currentLine.push(name);
  var greet=("Welcome, "+name+"."+" You are number "+currentLine.length+" in line.");
  return greet;
}


function nowServing(currentLine){
  var x=currentLine.index[0];
  currentLine.splice(
}