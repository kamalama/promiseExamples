// avoid using state.

function login(success) {
  console.log('login: '+ !!success)
  return async(success).otherwise(loginError)
}

function share(success) {
  console.log('share: ' + !!success)
  return async(success).then(shareSuccess, shareError)
}

function loginError(err) {
  console.log('loginError')
  // display error
  throw err
}

login(false).then(share.bind(null, true))
// login: false
// loginError
// Potentially unhandled rejection.

login(false).then(share.bind(null, true)).done()
// actually throws the exception.

login(false).then(share.bind(null, true)).done(null, _.noop)
// login: false
// loginError
// swallowed and do nothing


