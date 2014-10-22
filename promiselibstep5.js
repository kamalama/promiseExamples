function Promise(fn) {
  var state = 'pending'
    , value
    , deferredResolve
    , deferredReject
    , deferred

 
  function resolve(newValue) {
    value = newValue 
    state = 'resolved'

    if(deferredResolve) handle(deferredResolve)
  }

  function reject(rejectValue) {
    value = rejectValue
    state = 'rejected'

    if(deferredReject) handle(null, deferredReject)
  }

  function handle(onResolved, onRejected) {
    if (state === 'pending') {
      deferredResolve = onResolved
      deferredReject = onRejected
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
      var value = 2+2
      if (value === 4) resolve(value)
      else reject('wtf?')
  })
}

doSomeStuff().then(function (response) {
  console.log(response)
  }, function(error) {
    console.log(error)
  }
)