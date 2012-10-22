require(['collections/things'], function (Things) {

  var things = new Things();

  describe("Things", function() {
    it('is an object', function () {
    	console.log('test 6 of 6 run');
      expect(typeof(things)).toBe('object');
      expect(things instanceof Object).toBeTruthy();
      expect(things instanceof Backbone.Collection).toBeTruthy();
    });
  });
});