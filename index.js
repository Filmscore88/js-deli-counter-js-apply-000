function takeANumber(currentLine,name){
  currentLine.push(name);
  var greet=("Welcome, "+name+"."+" You are number "+currentLine.lenght+" in line.");
  return greet;
}