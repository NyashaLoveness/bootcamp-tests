describe('It should test the countAllFromTown function', function(){
    it('It should return the number of registration numbers for a given town', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    })
})