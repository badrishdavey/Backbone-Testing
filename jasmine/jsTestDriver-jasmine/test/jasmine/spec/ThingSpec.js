require(['models/thing'], function (Thing) {

  var thing = new Thing();
  
  describe("Thing", function() {
    it('is an object', function () {
    	console.log('test 4 of 5 run');
      expect(typeof(thing)).toBe('object');
      expect(thing instanceof Object).toBeTruthy();
      expect(thing instanceof Backbone.Model).toBeTruthy();
    });
  });
});