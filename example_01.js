// Example of how to structure promises
// login, then share then redirect.

// helper - simulate async promise
function async(success) {
  return success ? when.resolve() : when.reject()
}

// memorize these
function login(success) {
  console.log('login: '+ !!success)
  async(success)
}

function share(success) {
  console.log('share: ' + !!success)
  async(success)
}

function shareSuccess() {
  console.log('shareSuccess')
  // animate and redirect
}

function shareError() {
  console.log('shareError')
  // display error
}

function loginError() {
  console.log('loginError')
  // display error
}

// don't
// (if share depends on login)
login()
share()

