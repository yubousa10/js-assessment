exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var array = [];

    for (var o in obj) {
      if (obj.hasOwnProperty(o)) {
        array.push(o + ': ' + obj[o]);
      }
    }

    return array;

  }
};