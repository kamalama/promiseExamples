function thisCallsAFunctionWithArgs() {
  someObj.promise1()
    .then(this.onSuccessFunction)
    .otherwise(this.onRejectFunction)
}

function onSuccessFunction(value) {
  this.thing = value
}

describe('thisCallsAFunctionWithArgs', function () {
  it('should set a property', function () {
    sinon.stub(this, 'onSuccessFunction', function (value) {
      expect(value).to.equal(value)
    })
    //restore
  })
})