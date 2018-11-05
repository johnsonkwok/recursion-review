// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null || Number.isNaN(obj) || obj === Infinity || obj === -Infinity) {
    return "null";
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (Array.isArray(obj)) {
    let results = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i] === undefined || typeof obj === 'function') {
        results.push('null');
      } else {
        results.push(stringifyJSON(obj[i]));
      }    
    }
    return '[' + results.join(',') + ']';
  } else if (typeof obj === 'object') {
    let results = [];
    for (let key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + results.join(',') + '}';
  } else {
    return 'Invalid JSON';  
  }
};
