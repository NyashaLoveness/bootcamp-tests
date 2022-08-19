describe('This should test the isWeekday function', function(){
    it('This should check if the day passed is a weekday or not', function(){
        assert.equal(false, isWeekday("Saturday"))
    });

    it('This should if the day passed is a weekday or not', function(){
        assert.equal(true, isWeekday("Monday"), 'this should equal true ')
    })
})
console.log(isWeekday())
  console.log(isWeekday("Monday"));