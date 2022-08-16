describe('This should test the isFromBellville function', function(){
    it('This should check if the car is from Bellville', function(){
        assert.equal(true, isFromBellville('CY 123'))
    });

    it('This should check if the car is from Bellville', function(){
        assert.equal(false, isFromBellville('CJ 123'))
    });
})