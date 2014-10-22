// Return your promises so they can be chained.

function login(success) {
  console.log('login: '+ !!success)
  return async(success)
}

function share(success) {
  console.log('share: ' + !!success)
  return async(success)
}

// But becareful
login(false) // fail login
  .then(share.bind(null, false), loginError) // fail share
  .then(shareSuccess, shareError)

// login: false
// loginError
// shareSuccess

