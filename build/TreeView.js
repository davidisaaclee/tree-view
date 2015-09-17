(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var TreeView, getMatchesFunction;

getMatchesFunction = function(element) {
  var fn;
  fn = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector;
  if (fn != null) {
    return function() {
      return fn.apply(element, arguments);
    };
  } else {
    return console.error('No `matches` method in element ', element);
  }
};

TreeView = Polymer({
  is: 'tree-view',
  properties: {
    model: {
      type: Object
    },
    insertionPointSelector: {
      type: String,
      value: '.children'
    }
  },
  factoryImpl: function(model) {
    this.instance = null;
    return this.update(model);
  },
  fill: function() {
    var insertionPt, makeInstance;
    makeInstance = this.model.value;
    this.instance = makeInstance();
    if (this.model.orderedChildrenKeys.length === 0) {
      return this.instance;
    }
    insertionPt = this._getInsertionPoint();
    if (insertionPt != null) {
      this.model.orderedChildrenKeys.forEach((function(_this) {
        return function(key) {
          var child;
          child = new TreeView(_this.model.getChild(key));
          return insertionPt.appendChild(child);
        };
      })(this));
    } else {
      console.log("could not find insertion point from selector " + (this.insertionPointSelector + " in instance "), this.instance);
    }
    return this.instance;
  },
  update: function(model) {
    this.model = model;
    this.clear();
    this.fill();
    return Polymer.dom(this.root).appendChild(this.instance);
  },

  /*
  Clears the instance of its children... and itself!
   */
  clear: function() {
    if (this.instance != null) {
      return Polymer.dom(this.root).removeChild(this.instance);
    }
  },
  _getInsertionPoint: function() {
    var r;
    if ((getMatchesFunction(this.instance))(this.insertionPointSelector)) {
      return this.instance;
    } else {
      r = this.instance.querySelector(this.insertionPointSelector);
      if (r != null) {
        return r;
      } else {
        return Polymer.dom(this.instance).querySelector(this.insertionPointSelector);
      }
    }
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBOztBQUFBLGtCQUFBLEdBQXFCLFNBQUMsT0FBRDtBQUNuQixNQUFBO0VBQUEsRUFBQSxHQUFLLE9BQU8sQ0FBQyxPQUFSLElBQ0EsT0FBTyxDQUFDLHFCQURSLElBRUEsT0FBTyxDQUFDLGtCQUZSLElBR0EsT0FBTyxDQUFDLGlCQUhSLElBSUEsT0FBTyxDQUFDO0VBQ2IsSUFBRyxVQUFIO1dBQ0ssU0FBQTthQUFNLEVBQUUsQ0FBQyxLQUFILENBQVMsT0FBVCxFQUFrQixTQUFsQjtJQUFOLEVBREw7R0FBQSxNQUFBO1dBRUssT0FBTyxDQUFDLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpRCxPQUFqRCxFQUZMOztBQU5tQjs7QUFVckIsUUFBQSxHQUFXLE9BQUEsQ0FDVDtFQUFBLEVBQUEsRUFBSSxXQUFKO0VBRUEsVUFBQSxFQUNFO0lBQUEsS0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLE1BQU47S0FERjtJQUVBLHNCQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sTUFBTjtNQUNBLEtBQUEsRUFBTyxXQURQO0tBSEY7R0FIRjtFQVNBLFdBQUEsRUFBYSxTQUFDLEtBQUQ7SUFDWCxJQUFDLENBQUEsUUFBRCxHQUFZO1dBQ1osSUFBQyxDQUFBLE1BQUQsQ0FBUSxLQUFSO0VBRlcsQ0FUYjtFQWFBLElBQUEsRUFBTSxTQUFBO0FBQ0osUUFBQTtJQUFBLFlBQUEsR0FBZSxJQUFDLENBQUEsS0FBSyxDQUFDO0lBQ3RCLElBQUMsQ0FBQSxRQUFELEdBQWUsWUFBSCxDQUFBO0lBRVosSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE1BQTNCLEtBQXFDLENBQXhDO0FBRUUsYUFBTyxJQUFDLENBQUEsU0FGVjs7SUFJQSxXQUFBLEdBQWMsSUFBQyxDQUFBLGtCQUFELENBQUE7SUFFZCxJQUFHLG1CQUFIO01BQ0UsSUFBQyxDQUFBLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUEzQixDQUFtQyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsR0FBRDtBQUNqQyxjQUFBO1VBQUEsS0FBQSxHQUFZLElBQUEsUUFBQSxDQUFVLEtBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUCxDQUFnQixHQUFoQixDQUFWO2lCQUNaLFdBQVcsQ0FBQyxXQUFaLENBQXdCLEtBQXhCO1FBRmlDO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFuQyxFQURGO0tBQUEsTUFBQTtNQUtFLE9BQU8sQ0FBQyxHQUFSLENBQVksK0NBQUEsR0FDVixDQUFHLElBQUMsQ0FBQSxzQkFBRixHQUF5QixlQUEzQixDQURGLEVBQzZDLElBQUMsQ0FBQSxRQUQ5QyxFQUxGOztBQVFBLFdBQU8sSUFBQyxDQUFBO0VBbEJKLENBYk47RUFpQ0EsTUFBQSxFQUFRLFNBQUMsS0FBRDtJQUNOLElBQUMsQ0FBQSxLQUFELEdBQVM7SUFDTixJQUFDLENBQUEsS0FBSixDQUFBO0lBQ0csSUFBQyxDQUFBLElBQUosQ0FBQTtXQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLElBQWIsQ0FBa0IsQ0FBQyxXQUFuQixDQUErQixJQUFDLENBQUEsUUFBaEM7RUFKTSxDQWpDUjs7QUF1Q0E7OztFQUdBLEtBQUEsRUFBTyxTQUFBO0lBQ0wsSUFBRyxxQkFBSDthQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLElBQWIsQ0FBa0IsQ0FBQyxXQUFuQixDQUErQixJQUFDLENBQUEsUUFBaEMsRUFERjs7RUFESyxDQTFDUDtFQThDQSxrQkFBQSxFQUFvQixTQUFBO0FBQ2xCLFFBQUE7SUFBQSxJQUFHLENBQUMsa0JBQUEsQ0FBbUIsSUFBQyxDQUFBLFFBQXBCLENBQUQsQ0FBQSxDQUErQixJQUFDLENBQUEsc0JBQWhDLENBQUg7YUFDSyxJQUFDLENBQUEsU0FETjtLQUFBLE1BQUE7TUFHRSxDQUFBLEdBQUksSUFBQyxDQUFBLFFBQVEsQ0FBQyxhQUFWLENBQXdCLElBQUMsQ0FBQSxzQkFBekI7TUFDSixJQUFHLFNBQUg7ZUFDSyxFQURMO09BQUEsTUFBQTtlQUVLLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLFFBQWIsQ0FBc0IsQ0FBQyxhQUF2QixDQUFxQyxJQUFDLENBQUEsc0JBQXRDLEVBRkw7T0FKRjs7RUFEa0IsQ0E5Q3BCO0NBRFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyBjcm9zcy1icm93c2VyIHN1cHBvcnQgZm9yIEVsZW1lbnQubWF0Y2hlc1xuZ2V0TWF0Y2hlc0Z1bmN0aW9uID0gKGVsZW1lbnQpIC0+XG4gIGZuID0gZWxlbWVudC5tYXRjaGVzIHx8XG4gICAgICAgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgIGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3JcbiAgaWYgZm4/XG4gIHRoZW4gKCkgLT4gZm4uYXBwbHkgZWxlbWVudCwgYXJndW1lbnRzXG4gIGVsc2UgY29uc29sZS5lcnJvciAnTm8gYG1hdGNoZXNgIG1ldGhvZCBpbiBlbGVtZW50ICcsIGVsZW1lbnRcblxuVHJlZVZpZXcgPSBQb2x5bWVyXG4gIGlzOiAndHJlZS12aWV3J1xuXG4gIHByb3BlcnRpZXM6XG4gICAgbW9kZWw6XG4gICAgICB0eXBlOiBPYmplY3RcbiAgICBpbnNlcnRpb25Qb2ludFNlbGVjdG9yOlxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB2YWx1ZTogJy5jaGlsZHJlbidcblxuICBmYWN0b3J5SW1wbDogKG1vZGVsKSAtPlxuICAgIEBpbnN0YW5jZSA9IG51bGxcbiAgICBAdXBkYXRlIG1vZGVsXG5cbiAgZmlsbDogKCkgLT5cbiAgICBtYWtlSW5zdGFuY2UgPSBAbW9kZWwudmFsdWVcbiAgICBAaW5zdGFuY2UgPSBkbyBtYWtlSW5zdGFuY2VcblxuICAgIGlmIEBtb2RlbC5vcmRlcmVkQ2hpbGRyZW5LZXlzLmxlbmd0aCBpcyAwXG4gICAgICAjIG5vdGhpbmcgdG8gZmlsbCB3aXRoXG4gICAgICByZXR1cm4gQGluc3RhbmNlXG5cbiAgICBpbnNlcnRpb25QdCA9IEBfZ2V0SW5zZXJ0aW9uUG9pbnQoKVxuXG4gICAgaWYgaW5zZXJ0aW9uUHQ/XG4gICAgICBAbW9kZWwub3JkZXJlZENoaWxkcmVuS2V5cy5mb3JFYWNoIChrZXkpID0+XG4gICAgICAgIGNoaWxkID0gbmV3IFRyZWVWaWV3IChAbW9kZWwuZ2V0Q2hpbGQga2V5KVxuICAgICAgICBpbnNlcnRpb25QdC5hcHBlbmRDaGlsZCBjaGlsZFxuICAgIGVsc2VcbiAgICAgIGNvbnNvbGUubG9nIFwiY291bGQgbm90IGZpbmQgaW5zZXJ0aW9uIHBvaW50IGZyb20gc2VsZWN0b3IgXCIgK1xuICAgICAgICBcIiN7QGluc2VydGlvblBvaW50U2VsZWN0b3J9IGluIGluc3RhbmNlIFwiLCBAaW5zdGFuY2VcblxuICAgIHJldHVybiBAaW5zdGFuY2VcblxuICB1cGRhdGU6IChtb2RlbCkgLT5cbiAgICBAbW9kZWwgPSBtb2RlbFxuICAgIGRvIEBjbGVhclxuICAgIGRvIEBmaWxsXG4gICAgUG9seW1lci5kb20oQHJvb3QpLmFwcGVuZENoaWxkIEBpbnN0YW5jZVxuXG4gICMjI1xuICBDbGVhcnMgdGhlIGluc3RhbmNlIG9mIGl0cyBjaGlsZHJlbi4uLiBhbmQgaXRzZWxmIVxuICAjIyNcbiAgY2xlYXI6ICgpIC0+XG4gICAgaWYgQGluc3RhbmNlP1xuICAgICAgUG9seW1lci5kb20oQHJvb3QpLnJlbW92ZUNoaWxkIEBpbnN0YW5jZVxuXG4gIF9nZXRJbnNlcnRpb25Qb2ludDogKCkgLT5cbiAgICBpZiAoZ2V0TWF0Y2hlc0Z1bmN0aW9uIEBpbnN0YW5jZSkgQGluc2VydGlvblBvaW50U2VsZWN0b3JcbiAgICB0aGVuIEBpbnN0YW5jZVxuICAgIGVsc2VcbiAgICAgIHIgPSBAaW5zdGFuY2UucXVlcnlTZWxlY3RvciBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuICAgICAgaWYgcj9cbiAgICAgIHRoZW4gclxuICAgICAgZWxzZSBQb2x5bWVyLmRvbShAaW5zdGFuY2UpLnF1ZXJ5U2VsZWN0b3IgQGluc2VydGlvblBvaW50U2VsZWN0b3IiXX0=
