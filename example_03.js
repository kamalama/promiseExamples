// use a variable to store state
var loggedIn = false;

function login(success) {
  console.log('login: '+ !!success)
  loggedIn = !!success
  return async(success)
}

function share(success) {
  if (loggedIn) {
    console.log('share: ' + !!success)
    return async(success)
  }
}

login(false)
  .then(share.bind(null, false), loginError)
  .then(shareSuccess, shareError)
// login: false
// loginError
// shareSuccess // skipped the body of share

