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

console.log('TreeView initialiezd');

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
        r = Polymer.dom(this.instance).querySelector(this.insertionPointSelector);
        if (r != null) {
          return r;
        } else {
          console.error('Could not find insertion point.');
          debugger;
        }
      }
    }
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBOztBQUFBLGtCQUFBLEdBQXFCLFNBQUMsT0FBRDtBQUNuQixNQUFBO0VBQUEsRUFBQSxHQUFLLE9BQU8sQ0FBQyxPQUFSLElBQ0EsT0FBTyxDQUFDLHFCQURSLElBRUEsT0FBTyxDQUFDLGtCQUZSLElBR0EsT0FBTyxDQUFDLGlCQUhSLElBSUEsT0FBTyxDQUFDO0VBQ2IsSUFBRyxVQUFIO1dBQ0ssU0FBQTthQUFNLEVBQUUsQ0FBQyxLQUFILENBQVMsT0FBVCxFQUFrQixTQUFsQjtJQUFOLEVBREw7R0FBQSxNQUFBO1dBRUssT0FBTyxDQUFDLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpRCxPQUFqRCxFQUZMOztBQU5tQjs7QUFVckIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxzQkFBWjs7QUFFQSxRQUFBLEdBQVcsT0FBQSxDQUNUO0VBQUEsRUFBQSxFQUFJLFdBQUo7RUFFQSxVQUFBLEVBQ0U7SUFBQSxLQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sTUFBTjtLQURGO0lBRUEsc0JBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxNQUFOO01BQ0EsS0FBQSxFQUFPLFdBRFA7S0FIRjtHQUhGO0VBU0EsV0FBQSxFQUFhLFNBQUMsS0FBRDtJQUNYLElBQUMsQ0FBQSxRQUFELEdBQVk7V0FDWixJQUFDLENBQUEsTUFBRCxDQUFRLEtBQVI7RUFGVyxDQVRiO0VBYUEsSUFBQSxFQUFNLFNBQUE7QUFDSixRQUFBO0lBQUEsWUFBQSxHQUFlLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFDdEIsSUFBQyxDQUFBLFFBQUQsR0FBZSxZQUFILENBQUE7SUFFWixJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBM0IsS0FBcUMsQ0FBeEM7QUFFRSxhQUFPLElBQUMsQ0FBQSxTQUZWOztJQUlBLFdBQUEsR0FBYyxJQUFDLENBQUEsa0JBQUQsQ0FBQTtJQUVkLElBQUcsbUJBQUg7TUFDRSxJQUFDLENBQUEsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQTNCLENBQW1DLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxHQUFEO0FBQ2pDLGNBQUE7VUFBQSxLQUFBLEdBQVksSUFBQSxRQUFBLENBQVUsS0FBQyxDQUFBLEtBQUssQ0FBQyxRQUFQLENBQWdCLEdBQWhCLENBQVY7aUJBQ1osV0FBVyxDQUFDLFdBQVosQ0FBd0IsS0FBeEI7UUFGaUM7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5DLEVBREY7S0FBQSxNQUFBO01BS0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSwrQ0FBQSxHQUNWLENBQUcsSUFBQyxDQUFBLHNCQUFGLEdBQXlCLGVBQTNCLENBREYsRUFDNkMsSUFBQyxDQUFBLFFBRDlDLEVBTEY7O0FBUUEsV0FBTyxJQUFDLENBQUE7RUFsQkosQ0FiTjtFQWlDQSxNQUFBLEVBQVEsU0FBQyxLQUFEO0lBQ04sSUFBQyxDQUFBLEtBQUQsR0FBUztJQUNOLElBQUMsQ0FBQSxLQUFKLENBQUE7SUFDRyxJQUFDLENBQUEsSUFBSixDQUFBO1dBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFDLENBQUEsSUFBYixDQUFrQixDQUFDLFdBQW5CLENBQStCLElBQUMsQ0FBQSxRQUFoQztFQUpNLENBakNSOztBQXVDQTs7O0VBR0EsS0FBQSxFQUFPLFNBQUE7SUFDTCxJQUFHLHFCQUFIO2FBQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFDLENBQUEsSUFBYixDQUFrQixDQUFDLFdBQW5CLENBQStCLElBQUMsQ0FBQSxRQUFoQyxFQURGOztFQURLLENBMUNQO0VBOENBLGtCQUFBLEVBQW9CLFNBQUE7QUFDbEIsUUFBQTtJQUFBLElBQUcsQ0FBQyxrQkFBQSxDQUFtQixJQUFDLENBQUEsUUFBcEIsQ0FBRCxDQUFBLENBQStCLElBQUMsQ0FBQSxzQkFBaEMsQ0FBSDthQUNLLElBQUMsQ0FBQSxTQUROO0tBQUEsTUFBQTtNQUdFLENBQUEsR0FBSSxJQUFDLENBQUEsUUFBUSxDQUFDLGFBQVYsQ0FBd0IsSUFBQyxDQUFBLHNCQUF6QjtNQUNKLElBQUcsU0FBSDtlQUNLLEVBREw7T0FBQSxNQUFBO1FBR0UsQ0FBQSxHQUFJLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLFFBQWIsQ0FBc0IsQ0FBQyxhQUF2QixDQUFxQyxJQUFDLENBQUEsc0JBQXRDO1FBQ0osSUFBRyxTQUFIO2lCQUNLLEVBREw7U0FBQSxNQUFBO1VBR0UsT0FBTyxDQUFDLEtBQVIsQ0FBYyxpQ0FBZDtBQUNBLG1CQUpGO1NBSkY7T0FKRjs7RUFEa0IsQ0E5Q3BCO0NBRFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyBjcm9zcy1icm93c2VyIHN1cHBvcnQgZm9yIEVsZW1lbnQubWF0Y2hlc1xuZ2V0TWF0Y2hlc0Z1bmN0aW9uID0gKGVsZW1lbnQpIC0+XG4gIGZuID0gZWxlbWVudC5tYXRjaGVzIHx8XG4gICAgICAgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgIGVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3JcbiAgaWYgZm4/XG4gIHRoZW4gKCkgLT4gZm4uYXBwbHkgZWxlbWVudCwgYXJndW1lbnRzXG4gIGVsc2UgY29uc29sZS5lcnJvciAnTm8gYG1hdGNoZXNgIG1ldGhvZCBpbiBlbGVtZW50ICcsIGVsZW1lbnRcblxuY29uc29sZS5sb2cgJ1RyZWVWaWV3IGluaXRpYWxpZXpkJ1xuXG5UcmVlVmlldyA9IFBvbHltZXJcbiAgaXM6ICd0cmVlLXZpZXcnXG5cbiAgcHJvcGVydGllczpcbiAgICBtb2RlbDpcbiAgICAgIHR5cGU6IE9iamVjdFxuICAgIGluc2VydGlvblBvaW50U2VsZWN0b3I6XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIHZhbHVlOiAnLmNoaWxkcmVuJ1xuXG4gIGZhY3RvcnlJbXBsOiAobW9kZWwpIC0+XG4gICAgQGluc3RhbmNlID0gbnVsbFxuICAgIEB1cGRhdGUgbW9kZWxcblxuICBmaWxsOiAoKSAtPlxuICAgIG1ha2VJbnN0YW5jZSA9IEBtb2RlbC52YWx1ZVxuICAgIEBpbnN0YW5jZSA9IGRvIG1ha2VJbnN0YW5jZVxuXG4gICAgaWYgQG1vZGVsLm9yZGVyZWRDaGlsZHJlbktleXMubGVuZ3RoIGlzIDBcbiAgICAgICMgbm90aGluZyB0byBmaWxsIHdpdGhcbiAgICAgIHJldHVybiBAaW5zdGFuY2VcblxuICAgIGluc2VydGlvblB0ID0gQF9nZXRJbnNlcnRpb25Qb2ludCgpXG5cbiAgICBpZiBpbnNlcnRpb25QdD9cbiAgICAgIEBtb2RlbC5vcmRlcmVkQ2hpbGRyZW5LZXlzLmZvckVhY2ggKGtleSkgPT5cbiAgICAgICAgY2hpbGQgPSBuZXcgVHJlZVZpZXcgKEBtb2RlbC5nZXRDaGlsZCBrZXkpXG4gICAgICAgIGluc2VydGlvblB0LmFwcGVuZENoaWxkIGNoaWxkXG4gICAgZWxzZVxuICAgICAgY29uc29sZS5sb2cgXCJjb3VsZCBub3QgZmluZCBpbnNlcnRpb24gcG9pbnQgZnJvbSBzZWxlY3RvciBcIiArXG4gICAgICAgIFwiI3tAaW5zZXJ0aW9uUG9pbnRTZWxlY3Rvcn0gaW4gaW5zdGFuY2UgXCIsIEBpbnN0YW5jZVxuXG4gICAgcmV0dXJuIEBpbnN0YW5jZVxuXG4gIHVwZGF0ZTogKG1vZGVsKSAtPlxuICAgIEBtb2RlbCA9IG1vZGVsXG4gICAgZG8gQGNsZWFyXG4gICAgZG8gQGZpbGxcbiAgICBQb2x5bWVyLmRvbShAcm9vdCkuYXBwZW5kQ2hpbGQgQGluc3RhbmNlXG5cbiAgIyMjXG4gIENsZWFycyB0aGUgaW5zdGFuY2Ugb2YgaXRzIGNoaWxkcmVuLi4uIGFuZCBpdHNlbGYhXG4gICMjI1xuICBjbGVhcjogKCkgLT5cbiAgICBpZiBAaW5zdGFuY2U/XG4gICAgICBQb2x5bWVyLmRvbShAcm9vdCkucmVtb3ZlQ2hpbGQgQGluc3RhbmNlXG5cbiAgX2dldEluc2VydGlvblBvaW50OiAoKSAtPlxuICAgIGlmIChnZXRNYXRjaGVzRnVuY3Rpb24gQGluc3RhbmNlKSBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuICAgIHRoZW4gQGluc3RhbmNlXG4gICAgZWxzZVxuICAgICAgciA9IEBpbnN0YW5jZS5xdWVyeVNlbGVjdG9yIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG4gICAgICBpZiByP1xuICAgICAgdGhlbiByXG4gICAgICBlbHNlXG4gICAgICAgIHIgPSBQb2x5bWVyLmRvbShAaW5zdGFuY2UpLnF1ZXJ5U2VsZWN0b3IgQGluc2VydGlvblBvaW50U2VsZWN0b3JcbiAgICAgICAgaWYgcj9cbiAgICAgICAgdGhlbiByXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjb25zb2xlLmVycm9yICdDb3VsZCBub3QgZmluZCBpbnNlcnRpb24gcG9pbnQuJ1xuICAgICAgICAgIGRlYnVnZ2VyIl19
