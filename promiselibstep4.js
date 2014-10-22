function Promise(fn) {
  var state = 'pending' //resolved (or fulfilled), rejected, or pending
    , value
    , fnToCallOnResolve = null
    , fnToCallOnReject = null
 
  function resolve(response) {
    state = 'resolved'
    value = response

    if (fnToCallOnResolve) handle(fnToCallOnResolve)
  }

  function reject(error) {
    state = 'rejected'
    value = error
    if (fnToCallOnReject) handle(null, fnToCallOnReject)
  }

  function handle(onResolved, onRejected) {
    if(state === 'resolved') onResolved(value)
    else if(state === 'rejected') onRejected(value)
    else {
      fnToCallOnResolve = onResolved
      fnToCallOnReject = onRejected
    }

  }

  this.then = function(onResolved, onRejected) {
    handle(onResolved, onRejected)
  }

  fn(resolve, reject)
}


var doSomeStuff = function () {
  return new Promise(function (resolve, reject) {
    var ajaxResponse = 2+2
    if(ajaxResponse === 4) resolve(ajaxResponse)
    else reject('THIS IS AN ERROR')
  })
}

doSomeStuff().then(function (response) {
  console.log(response)
}, function(error) {
  console.log(error)
})