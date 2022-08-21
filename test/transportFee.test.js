describe('This should test the transportFee function', function(){
    it('It should return the right transport fee based on the shift worked', function(){
        assert.equal('R20', transportFee("morning"))
    })
})