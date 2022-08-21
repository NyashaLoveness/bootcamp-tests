describe('This should test the findItemsOver20 function', function(){
    it('It should return products with a quantity higher than 20', function(){
        assert.deepEqual([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}], findItemsOver20(itemList))
    })
})