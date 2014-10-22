doSomeStuff = function () {
  
  return {
    then: function (cb) {
      response = 2+2
      cb(response)
    }
  }
}

doSomeStuff().then(function (response) {
  console.log(response)
})
