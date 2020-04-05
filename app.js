function draw(array) {
  document.querySelectorAll(".bar").forEach((bar) => bar.remove());

  let container = document.querySelector(".inner");
  array.forEach((value) => {
    let bar = container.appendChild(document.createElement("div"));
    let val = bar.appendChild(document.createElement("h1"));
    val.textContent = value;
    val.className = "arr-val";
    bar.className = "bar";
    bar.style.height = 20 + value * 10 + "px";
    bar.style.width = Math.round(200 / array.length) + "px";
  });
}

function generateArray() {
  let numEls = document.querySelector('#choose').value;
  let newArr = [];
  for (let i = 0; i < numEls; i++) {
    let foundUnique = false;
    while (foundUnique != true) {
      let randNum = Math.round(Math.random() * 25) + 5;
      if (newArr.includes(randNum) != true) {
        newArr.push(randNum);
        foundUnique = true;
      }
    }
  }
  let sorted = true;
  for (let i = 0; i < numEls - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      sorted = false;
      break;
    }
  }

  if (sorted === true) {
    newArr = [];
    generateArray(numEls);
  }

  return newArr;
}

// declared with * makes it a generator
// (note: does not really sort)
function * bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(array[j] > array[j+1]){
        let temp = array[j]
        array[j] = array[j + 1];
        array[j+1] = temp;
      }
      yield array // return array as value, pause until next() called
    }
  }
}

let delay = 1000 // ms (sped up for demo)
let iterator = bubbleSort(generateArray())

function drawLoop () {
  let next = iterator.next() // pull from yield
  if (!next.done) {
    draw(next.value)
  } else {
    clearInterval(intervalId)
    document.querySelectorAll('.bar')
      .forEach(bar => bar.style.backgroundColor = 'red')
  }
}

let btn = document.querySelector('#viz');

btn.addEventListener('click', () => {
  drawLoop();
})

let intervalId = setInterval(drawLoop, delay)