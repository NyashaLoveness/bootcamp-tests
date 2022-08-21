describe('This should test the fromWhere function', function(){
    it('It should return the town the car comes from', function(){
        assert.equal('Bellville', fromWhere("CY 123"))
    })
})