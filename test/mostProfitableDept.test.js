describe('This should test the mostProfitableDepartment function', function(){
    it('It should return the department that is the most profitable', function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData))
    })
})