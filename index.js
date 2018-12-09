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
  var deepest = document.querySelector('div#grand-node');
  while (deepest.childElementCount > 0) {
    deepest = deepest.children[0];
  }
  console.log(deepest)
  return deepest;
}