describe('This should test the findItemsOver function', function(){
    it('It should return the products with a quanity higher than the threshold', function(){
        assert.deepEqual([{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}] ,findItemsOver(itemList, 20))
    })
})