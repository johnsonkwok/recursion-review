// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  let nodes = [];
  if (node.classList !== undefined && node.classList.contains(className)) {
    nodes.push(node);
  }
  for (let childNode of node.childNodes){
    nodes = nodes.concat(getElementsByClassName(className, childNode));
  }
  return nodes;
};
