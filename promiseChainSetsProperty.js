function thisSetsAProperty() {
  someObj.promise1()
    .then(onSuccessFunction)
    .otherwise(onRejectFunction)
}

function onSuccessFunction(value) {
  this.thing = value
}

describe('thisSetsAProperty', function () {
  sinon.stub(someObj, 'promise1', function () {return when.resolve()})

  it('should set a property', function () {
    return expect(someObj.promise1).then(function () {
      return this.thing==='valueToTest'
    })
  })
})