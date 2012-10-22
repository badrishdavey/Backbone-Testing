require(['views/thingListItemView'], function (ThingListItemView) {

  var thingListItemView = new ThingListItemView();

  describe("ThingListItemView", function() {
    it('is an object', function () {
    	console.log('test 1 of 6 run');
      expect(typeof(thingListItemView)).toBe('object');
      expect(thingListItemView instanceof Object).toBeTruthy();
      expect(thingListItemView instanceof Backbone.View).toBeTruthy();
    });

    it('has a tagName of \'li\'', function () {
    	console.log('test 2 of 6 run');
      expect(typeof(thingListItemView.tagName)).toBe('string');
      expect(thingListItemView.tagName).toBe('li');
    });

    it('has a template', function () {
    	console.log('test 3 of 6 run');
      expect(thingListItemView.template).toBeDefined();
      expect(typeof(thingListItemView.template)).toBe('function');
      expect(thingListItemView.template instanceof Function).toBeTruthy();
      var context = {
        id: 1,
        name: ''
      };
      var output = thingListItemView.template(context);
      console.log('Template\'s output', output);
      expect(output).toBe('<p></p></br>');
    });

    it('has a someFunction() function', function () {
      console.log('test 4 of 6 run');
      expect(thingListItemView.someFunction).toBeDefined();
      expect(typeof(thingListItemView.someFunction)).toBe('function');
      expect(thingListItemView.someFunction instanceof Function).toBeTruthy();
      expect(thingListItemView.someFunction()).toBe('someFunction');
    });
  });
});