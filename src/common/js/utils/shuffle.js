function getRandomIndex(l, r) {
  return Math.floor(Math.random() * (r - l + 1) + l);
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function shuffle(arr) {
  let _arr = arr.slice();
  _arr.forEach((val, i) => {
    let randomIndex = getRandomIndex(0, i);
    swap(_arr, randomIndex, i);
  });
  return _arr;
}

export default shuffle;
