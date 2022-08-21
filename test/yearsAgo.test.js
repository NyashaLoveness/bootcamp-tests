describe('This should test the yearsAgo function', function(){
    it('This should calculate how many years ago that year is from the current year', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    })
})