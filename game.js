var myVar = setInterval(myTimer, 1000)

function myTimer () {
  var d = new Date()
  var t = d.toLocaleTimeString()
  document.getElementById('time').innerHTML = t
}

function stopClock () {
  clearInterval(myVar)
}

var grid = clickableGrid(4, 4, function (el, arr) {
  var val = parseInt(el.innerHTML)
  console.log(arr, val)
  if (val !== arr[0]) {
    console.log('WRONG')
  } else {
    arr.shift()
    console.log(arr.length)
    el.innerHTML = ''
  }
  if (arr.length === 0) {
    console.log('THE ARRAY IS EMPTY!!! HOORAY')
    stopClock()
  }
})

function arrContain (a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}

document.body.appendChild(grid)

function clickableGrid (rows, cols, callback) {
  var grid = document.createElement('table')
  var numArr = []
  grid.className = 'grid'
  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement('tr'))
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'))
      var rand = Math.floor(Math.random() * 16) + 1
      if (!(arrContain(numArr, rand))) {
        cell.innerHTML = rand
        numArr.push(rand)
        console.log(rand)
      } else {
        while (arrContain(numArr, rand)) {
          rand = Math.floor(Math.random() * 16) + 1
        }
        cell.innerHTML = rand
        numArr.push(rand)
        console.log(rand)
      }
      numArr.sort(function (a, b) {
        return a - b
      })
      cell.addEventListener('click', (function (el, arr) {
        return function () {
          callback(el, arr)
        }
      })(cell, numArr), false)
    }
  }
  return grid
}

var myVar = setInterval(myTimer, 1000)

function myTimer () {
  var d = new Date()
  var t = d.toLocaleTimeString()
  document.getElementById('time').innerHTML = t
}

function stopClock () {
  clearInterval(myVar)
}
