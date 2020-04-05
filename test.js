
function draw (array) {
    document.querySelectorAll('.bar')
        .forEach(bar => bar.remove())
    
    let container = document.querySelector('#container');
    array.forEach(value => {
        let bar = container.appendChild(
          document.createElement('div')
      )
      bar.className = 'bar'
      bar.style.height = value + 'px'
    })
  }
  
  // declared with * makes it a generator
  // (note: does not really sort)
  function * bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        [array[i], array[j]] = [array[j], array[i]] // no-sort swap
        yield array // return array as value, pause until next() called
      }
    }
  }
  
  let array = [20, 40, 60, 70]
  let delay = 200 // ms (sped up for demo)
  let iterator = bubbleSort(array)
  
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
  
  let intervalId = setInterval(drawLoop, delay)
  drawLoop() // so no wait for first paint