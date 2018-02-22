var deli= [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return line.pop();
  }
  
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  if (line.length > 0){
    var list = 'The line is currently:'
    for (var i = 0; i < line.length; i++) {
      list = list + ` ${i+1}. ${line[i]},`
    }
    return list;
  }
  else {
    return 'The line is currently empty.'
  }
}



