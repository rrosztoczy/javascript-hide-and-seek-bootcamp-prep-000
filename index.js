function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  var deepest = document.querySelector('#grand-node');
  var i;
  for (i = 0; i < deepest.childNodes.length; i++) {
    deepest = deepest.childNodes[i];
  }
  console.log('hello')
  return deepest;
}