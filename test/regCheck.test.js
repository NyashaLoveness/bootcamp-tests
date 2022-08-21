describe('This should test the regCheck function', function(){
    it('This should check if the numberplate matches with the location of the vehicle', function(){
        assert.equal(true, regCheck("DC 55 YU GP", "GP"))
    })
})