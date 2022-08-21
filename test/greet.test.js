describe ('It should test the greet function', function(){
    it('It should greet Janine with "Hello, Janine"', function(){
        assert.equal('Hello, Janine', greet('Janine'))
    });
})