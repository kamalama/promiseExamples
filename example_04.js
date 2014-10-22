// Handle your own flow

var loggedIn = false;

function login(success) {
  console.log('login: '+ !!success)
  loggedIn = !!success
  return async(success).otherwise(loginError)
}

function share(success) {
  if (loggedIn) {
    console.log('share: ' + !!success)
    return async(success).then(shareSuccess, shareError)
  }
}

login(false).then(share.bind(null, false))
// login: false
// loginError

login(true).then(share.bind(null, false))
// login: true
// share: false
// shareError

login(true).then(share.bind(null, true))
// login: true
// share: true
// shareSuccess
