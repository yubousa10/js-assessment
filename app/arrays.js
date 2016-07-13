exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == item){
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    var temp = 0;
    for(var i = 0; i < arr.length; i++){
      temp = arr[i] + temp;
    }
    return temp;
  },

  remove: function(arr, item) {
    var array = new Array();
    for(var i = 0; i < arr.length; i++){
      if(arr[i]!=item){
        array.push(arr[i]);
      }
    }
    return array;
  },

  removeWithoutCopy: function(arr, item) {
     // alert(arr + '  ' +item);
      var i = arr.indexOf(item);
      while(i != -1){
        arr.splice(i,1);
        i = arr.indexOf(item);
      }
      return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length-1,1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i]==item){
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    arr.sort(function(a, b){return a - b});
    for(var i = 0; i <arr.length-1; i++){
      if(arr[i]==arr[i + 1]){
        arr.splice(i,1);
        arr.splice(i+1,1);
      }
    }
    return arr;
  },

  square: function(arr) {
    var array = new Array();
    for(var i = 0; i < arr.length; i++){
      array.push(arr[i]*arr[i]);
    }
    return array;
  },

  findAllOccurrences: function(arr, target) {
    var array = new Array();
    for(var i = 0; i < arr.length; i++){
      if(arr[i]==target){
        array.push(i);
      }
    }
    return array;
  }
};