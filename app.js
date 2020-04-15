// VIZ AND STOP BUTTONS
let btn = document.querySelector("#viz");
let stopBtn = document.querySelector('#stop');

// ALGORITHM BUTTONS
let bubbleButton = document.getElementById('bubbleButton');
let mergeButton = document.getElementById('mergeButton');
let quickButton = document.getElementById('quickButton');

// MAIN GRAPH DIV
let graph = document.querySelector(".inner");

// Global Stop Variable
let stop = false;

stopBtn.addEventListener('click', () => {
  stop = true;
})

btn.addEventListener("click", () => {
  stop = false;
  function drawLoop() {
    let next = iterator.next(); // pull from yield
    if (!next.done) {
      draw(next.value);
    } else {
      clearInterval(intervalId);
      document
        .querySelectorAll(".bar")
        .forEach((bar) => (bar.style.backgroundColor = "#41d6ff;"));
    }
  }

  let numEls = document.querySelector("#choose").value;

  let delayTimes = {
    '30' : 25,
    '20' : 60,
    '15' : 75
  };

  let delay = delayTimes[`${numEls}`];
  console.log(delay); // ms (sped up for demo)
  let array = generateArray();
  let iterator = bubbleSort(array);

  let intervalId = setInterval(drawLoop, delay);
  drawLoop(); // so no wait for first paint
});

// --- DRAW FUNCTION ---
function draw(array) {
  document.querySelectorAll(".bar").forEach((bar) => bar.remove());

  let container = document.querySelector(".inner");
  array.forEach((value) => {
    let bar = container.appendChild(document.createElement("div"));
    let val = bar.appendChild(document.createElement("h1"));
    val.textContent = value;
    val.className = "arr-val";
    bar.className = "bar";
    bar.style.height = 20 + value * 3 + "px";
    bar.style.width = Math.round(350 / array.length) + "px";
  });
}

// --- GENERATE RANDOM ARRAY ---
function generateArray() {
  let numEls = document.querySelector("#choose").value;
  let newArr = [];
  for (let i = 0; i < numEls; i++) {
    let foundUnique = false;
    while (foundUnique != true) {
      let randNum = Math.round(Math.random() * 98) + 1;
      if (newArr.includes(randNum) != true) {
        newArr.push(randNum);
        foundUnique = true;
      }
    }
  }

  if (isSorted(newArr) === true) {
    newArr = [];
    generateArray(numEls);
  }

  return newArr;
}

// --- HELPER TO SEE IF ARRAY IS CORRECTLY SORTED ---
function isSorted(newArr) {
  let sorted = true;
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) {
      sorted = false;
      break;
    }
  }
  return sorted;
}

// --- BUBBLE SORT GENERATOR FUNCTION ---
function* bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      yield array;
      if (stop == true){
        return;
      }
    }
  }
}