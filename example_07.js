// cache result in promise
function login(success) {
  console.log('login: '+ !!success)
  return async(success)
    .otherwise(loginError)
    .then(function () { return success }, function () { return success })
}

function share(success, loggedIn) {
  console.log('share: ' + !!success)
  if (loggedIn) {
    return async(success).then(shareSuccess, shareError)
  }
}

var loggedIn = login(true)

loggedIn.then(share.bind(null, true))
// share: true
// shareSuccess
loggedIn.then(share)
loggedIn.then(share)
// etc...

loggedIn = login(false)
// login: false
// loginError
loggedIn.then(share.bind(null, true))
// share: true
// do nothing
