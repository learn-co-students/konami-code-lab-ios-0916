const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  console.log('running')
  var index = 0


  document.addEventListener('keydown', function(e) {

    const key = parseInt(e.detail || e.which)
    if (code[index] == key) {
      index++
      if (index == code.length - 1) {
        alert('Woooooo')
      }
    } else {
      index = 0
    }

  })
  // your code here
}

init()
