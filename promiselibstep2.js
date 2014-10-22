function Promise(fn) {
  var value
    , callback
    , state = 'pending'

  function resolve(newValue) {
    value = newValue
    if(callback) callback(value)
  }

  this.then = function(cb) {
    if(value) cb(value)
    else callback = cb
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