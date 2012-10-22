require(['collections/things'], function (Things) {

  var things = new Things();

  describe("Things", function() {
    it('is an object', function () {
    	console.log('test 5 of 5 run');
      expect(typeof(things)).toBe('object');
      expect(things instanceof Object).toBeTruthy();
      expect(things instanceof Backbone.Collection).toBeTruthy();
    });
  });
});