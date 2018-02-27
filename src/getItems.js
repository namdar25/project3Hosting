

var loadedItems = null;
var loadedItem = {};

function getItems(props) {
  if (loadedItems !== null) {
    return Promise.resolve(loadedItems);
  }
  return new Promise(function(resolve) {
    setTimeout(function() {
      loadedItems = [1, 2, 3, 4, 5];
      resolve(loadedItems);
    }, 700)
  })
}

function getItem(props) {
  if (loadedItem[props.id]) {
    return Promise.resolve(loadedItem[props.id]);
  }
  return new Promise(function(resolve) {
    setTimeout(function() {
      loadedItem[props.id] = props.id;
      resolve(loadedItem[props.id]);
    }, 1500)
  })
}
