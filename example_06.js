function login(success) {
  console.log('login: '+ !!success)
  return async(success)
}

function share(success) {
  console.log('share: ' + !!success)
  return async(success)
}

function handleError(err) {
  console.log('handleError')
  switch (err.type) {
    case 'login': return loginError(err)
    case 'share': return shareError(err)
    default:
      throw err
  }
}

login(false)
  .then(share.bind(null, false))
  .otherwise(handleError) // handles login error

login(true)
  .then(share.bind(null, false))
  .otherwise(handleError) // handles share error

// Caveat is if loginError or shareError throws exception,
// the error is swallowed.
// You should call done()
login(true)
  .then(share.bind(null, false))
  .otherwise(handleError)
  .done()
