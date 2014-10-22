function Promise(fn) {
  var callback = null

  function resolve(value) {
    callback(value)
  }

  this.then = function(cb) {
    callback = cb
  }

  fn(resolve)
}


var doSomeStuff = function () {
  return new Promise(function (resolve) {
    var ajaxResponse = 2+2
    resolve(ajaxResponse)
  })
}

doSomeStuff().then(function (response) {
  console.log(response)
})