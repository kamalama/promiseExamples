function getLoginStatus() {
  return when.promise(function(resolve, reject) {
    externalAPI.getData(function(results) {
      if(results.error) reject(new Error(results.error))
      else resolve(results)
    })
  }
}

describe('getLoginStatus', function () {
  it('should resolve to results if there are no errors', function () {
    //set up params
    return expect(getLoginStatus()).to.be.fulfilled
    return expect(getLoginStatus()).to.eventually.equal(results)
  })

  it('should reject if there are errors', function () {
    //set up params
    return expect(getLoginStatus()).to.be.rejected
  })
})