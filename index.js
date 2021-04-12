const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let values = Object.values(collection)
      for(let i = 0; i < values.length; i++){
        callback(values[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let values = Object.values(collection)
      for (let i = 0; i < values.length; i++){
        values[i] = callback(values[i])
      }
      return values
    },

    reduce: function(collection, callback, acc) {
      let value
      let i
      if (acc){
        value = acc
        i = 0
      } else {
        value = collection[0]
        i = 1
      }
      for(i; i < collection.length; i++){
        value = callback(value, collection[i])
      }
      return value
    },

    find: function(collection, predicate){
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        } 
      }
    },

    filter: function(collection, predicate){
      let r = []
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          r.push(collection[i])
        } 
      }
      return r
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length
      } else {
        return Object.keys(collection).length
      }

    },

    first: function(array, n){
      if(n){
        return array.slice(0, n)
      } else {
        return array[0]
      }
    },

    last: function(array, n){
      if (n){
        return array.slice(-n)
      } else {
        return array.slice(-1)[0]
      }
    },

    compact: function(array){
      let r =[]
      for(let i = 0; i < array.length; i++){
        if (!!array[i] === true){
          r.push(array[i])
        }
      }
      return r
    },

    sortBy: function(collection, callback) {
        const newArr = [...collection]
        return newArr.sort(function(a, b) {
          return callback(a) - callback(b)
        })
    },

    flatten: function(array, shallow){ 
      if(shallow === true){
        return array.flat(1)
      } else {
        return array.flat(1000000)
      }
    },

    uniq: function(array, isSorted, callback){

    },

    keys: function(object){
      let r = Object.keys(object)
      return r
    },

    values: function(object){
      let r = Object.values(object)
      return r
    },

    functions: function(object) {
      // let r = Object.values(object)
      // console.log(object)
    },


  }
})()

fi.libraryMethod()
