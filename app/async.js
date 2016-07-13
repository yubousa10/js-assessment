exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	var deferred = $.Deferred();
  	setTimeout(function() {
      deferred.resolve(value);
    }, 10);
    
    return deferred.promise();
  },

  manipulateRemoteData: function(url) {
  	var deferred = $.Deferred();

    $.ajax(url).then(function(response) {
      var people = $.map(response.people, function(person) {
        return person.name;
      });
      deferred.resolve(people.sort());
    });

    return deferred.promise();

  }
};
