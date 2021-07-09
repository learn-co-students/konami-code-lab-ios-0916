const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

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
