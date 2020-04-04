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

function generateArray(numEls) {
  let newArr = [];
  for(let i = 0; i < numEls; i++){
    let foundUnique = false;
    while(foundUnique != true){
      let randNum = Math.round(Math.random() * 25) + 5;
      if(newArr.includes(randNum) != true){
        newArr.push(randNum);
        foundUnique = true;
      }
    }
  }
  let sorted = true;
  for(let i = 0; i < numEls - 1; i++){
    if(newArr[i] > newArr[i+1]){
      sorted = false;
      break;
    }
  }

  if(sorted === true){
    newArr = [];
    generateArray(numEls);
  }

  return newArr;
}

let dropDown = document.querySelector('#choose');

draw(generateArray(dropDown.value));
dropDown.addEventListener('change', () =>{
  draw(generateArray(dropDown.value));
});
