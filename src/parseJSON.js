// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  let index = 0;
  let currChar = json[index];
  let parsedArr = [];
  let parsedObj = {};
  
  if (currChar === 't' || currChar === 'f'){
    parseBoolean();
  }
  if (currChar === '"'){
    index++;
    parseString();
  }

  function parseString(){
    var str = '\"';
    if (currChar !== "\""){
      str += currChar;
      index++;
    }
    str += "\"";
    index++;
    return str;
  }

  function parseBoolean(){
    var str = '';
    if (currChar === "t"){
      index += 4;
      return true;
    }
    if (currChar === "f"){
      index += 5;
      return false;
    }
  }
  
};
