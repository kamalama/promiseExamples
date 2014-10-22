function Promise(fn) {
  var state = 'pending'
    , value
    , fnToCallOnResolve
    , fnToCallOnReject

 
  function resolve(response) {
    value = newValue 
    state = 'resolved'

    if(fnToCallOnResolve) handle(fnToCallOnResolve)
  }

  function reject(rejectValue) {
    value = rejectValue
    state = 'rejected'

    if(fnToCallOnReject) handle(null, fnToCallOnReject)
  }

  function handle(onResolved, onRejected) {
    if (state === 'pending') {
      fnToCallOnResolve = onResolved
      fnToCallOnReject = onRejected
    } else if (state === 'rejected') { 
      onRejected(value) 
    } else onResolved(value)
  }

  this.then = function(onResolved, onRejected) {

    handle(onResolved, onRejected)
  }

  fn(resolve, reject)
}

var doSomeStuff = function () {
  return new Promise(function (resolve, reject) {
      var ajaxResponse = 2+2
      if (ajaxResponse === 4) resolve(ajaxResponse)
      else reject('wtf?')
  })
}

doSomeStuff().then(function (response) {
  console.log(response)
  }, function(error) {
    console.log(error)
  }
)