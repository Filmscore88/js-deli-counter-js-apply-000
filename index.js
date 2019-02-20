function takeANumber(currentLine,name){
  currentLine.push(name);
  var greet=("Welcome,"+name+"."+" You are number "+currentLine+" in line.");
  return greet;
}