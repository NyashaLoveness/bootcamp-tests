describe('This should test the totalPhoneBill function', function(){
    it('It should calculate the total bill for the data provided', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))
    })
})