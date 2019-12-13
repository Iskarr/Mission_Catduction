var elements = [];

function dragUser(element, event) {
  var index = elements.indexOf(element);
  if (index == -1) {
    // not already existing in the array, add it now
    elements.push(element);
    index = elements.length - 1;
  }

  event.dataTransfer.setData("index", index);
}

function dropUser(target, event) {
  var element = elements[event.dataTransfer.getData("index")];
  target.appendChild(element);
}
