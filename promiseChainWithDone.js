function thisCallsDoneAtTheEnd() {
  someObj.promise1()
    .done(this.wrapStuffUp, this.throwAnError)
}

function wrapStuffUp(value) {
  this.set('something', value)
}

describe('thisCallsDoneAtTheEnd', function () {
  sinon.stub(someObj, 'promise1', function () {return true})
  it('should wrap up', function (done) {
    sinon.stub(this, 'wrapStuffUp', function(bool) {
      expect(bool).to.be.true
    })
  })
  //restore things
})
