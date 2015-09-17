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
        return Polymer.dom(this.instance).querySelector(this.insertionPointSelector);
      }
    }
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBOztBQUFBLGtCQUFBLEdBQXFCLFNBQUMsT0FBRDtBQUNuQixNQUFBO0VBQUEsRUFBQSxHQUFLLE9BQU8sQ0FBQyxPQUFSLElBQ0EsT0FBTyxDQUFDLHFCQURSLElBRUEsT0FBTyxDQUFDLGtCQUZSLElBR0EsT0FBTyxDQUFDLGlCQUhSLElBSUEsT0FBTyxDQUFDO0VBQ2IsSUFBRyxVQUFIO1dBQ0ssU0FBQTthQUFNLEVBQUUsQ0FBQyxLQUFILENBQVMsT0FBVCxFQUFrQixTQUFsQjtJQUFOLEVBREw7R0FBQSxNQUFBO1dBRUssT0FBTyxDQUFDLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpRCxPQUFqRCxFQUZMOztBQU5tQjs7QUFVckIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxzQkFBWjs7QUFFQSxRQUFBLEdBQVcsT0FBQSxDQUNUO0VBQUEsRUFBQSxFQUFJLFdBQUo7RUFFQSxVQUFBLEVBQ0U7SUFBQSxLQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sTUFBTjtLQURGO0lBRUEsc0JBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxNQUFOO01BQ0EsS0FBQSxFQUFPLFdBRFA7S0FIRjtHQUhGO0VBU0EsV0FBQSxFQUFhLFNBQUMsS0FBRDtJQUNYLElBQUMsQ0FBQSxRQUFELEdBQVk7V0FDWixJQUFDLENBQUEsTUFBRCxDQUFRLEtBQVI7RUFGVyxDQVRiO0VBYUEsSUFBQSxFQUFNLFNBQUE7QUFDSixRQUFBO0lBQUEsWUFBQSxHQUFlLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFDdEIsSUFBQyxDQUFBLFFBQUQsR0FBZSxZQUFILENBQUE7SUFFWixJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBM0IsS0FBcUMsQ0FBeEM7QUFFRSxhQUFPLElBQUMsQ0FBQSxTQUZWOztJQUlBLFdBQUEsR0FBYyxJQUFDLENBQUEsa0JBQUQsQ0FBQTtJQUVkLElBQUcsbUJBQUg7TUFDRSxJQUFDLENBQUEsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQTNCLENBQW1DLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxHQUFEO0FBQ2pDLGNBQUE7VUFBQSxLQUFBLEdBQVksSUFBQSxRQUFBLENBQVUsS0FBQyxDQUFBLEtBQUssQ0FBQyxRQUFQLENBQWdCLEdBQWhCLENBQVY7aUJBQ1osV0FBVyxDQUFDLFdBQVosQ0FBd0IsS0FBeEI7UUFGaUM7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5DLEVBREY7S0FBQSxNQUFBO01BS0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSwrQ0FBQSxHQUNWLENBQUcsSUFBQyxDQUFBLHNCQUFGLEdBQXlCLGVBQTNCLENBREYsRUFDNkMsSUFBQyxDQUFBLFFBRDlDLEVBTEY7O0FBUUEsV0FBTyxJQUFDLENBQUE7RUFsQkosQ0FiTjtFQWlDQSxNQUFBLEVBQVEsU0FBQyxLQUFEO0lBQ04sSUFBQyxDQUFBLEtBQUQsR0FBUztJQUNOLElBQUMsQ0FBQSxLQUFKLENBQUE7SUFDRyxJQUFDLENBQUEsSUFBSixDQUFBO1dBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFDLENBQUEsSUFBYixDQUFrQixDQUFDLFdBQW5CLENBQStCLElBQUMsQ0FBQSxRQUFoQztFQUpNLENBakNSOztBQXVDQTs7O0VBR0EsS0FBQSxFQUFPLFNBQUE7SUFDTCxJQUFHLHFCQUFIO2FBQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFDLENBQUEsSUFBYixDQUFrQixDQUFDLFdBQW5CLENBQStCLElBQUMsQ0FBQSxRQUFoQyxFQURGOztFQURLLENBMUNQO0VBOENBLGtCQUFBLEVBQW9CLFNBQUE7QUFDbEIsUUFBQTtJQUFBLElBQUcsQ0FBQyxrQkFBQSxDQUFtQixJQUFDLENBQUEsUUFBcEIsQ0FBRCxDQUFBLENBQStCLElBQUMsQ0FBQSxzQkFBaEMsQ0FBSDthQUNLLElBQUMsQ0FBQSxTQUROO0tBQUEsTUFBQTtNQUdFLENBQUEsR0FBSSxJQUFDLENBQUEsUUFBUSxDQUFDLGFBQVYsQ0FBd0IsSUFBQyxDQUFBLHNCQUF6QjtNQUNKLElBQUcsU0FBSDtlQUNLLEVBREw7T0FBQSxNQUFBO2VBRUssT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFDLENBQUEsUUFBYixDQUFzQixDQUFDLGFBQXZCLENBQXFDLElBQUMsQ0FBQSxzQkFBdEMsRUFGTDtPQUpGOztFQURrQixDQTlDcEI7Q0FEUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIGNyb3NzLWJyb3dzZXIgc3VwcG9ydCBmb3IgRWxlbWVudC5tYXRjaGVzXG5nZXRNYXRjaGVzRnVuY3Rpb24gPSAoZWxlbWVudCkgLT5cbiAgZm4gPSBlbGVtZW50Lm1hdGNoZXMgfHxcbiAgICAgICBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgIGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgIGVsZW1lbnQub01hdGNoZXNTZWxlY3RvclxuICBpZiBmbj9cbiAgdGhlbiAoKSAtPiBmbi5hcHBseSBlbGVtZW50LCBhcmd1bWVudHNcbiAgZWxzZSBjb25zb2xlLmVycm9yICdObyBgbWF0Y2hlc2AgbWV0aG9kIGluIGVsZW1lbnQgJywgZWxlbWVudFxuXG5jb25zb2xlLmxvZyAnVHJlZVZpZXcgaW5pdGlhbGllemQnXG5cblRyZWVWaWV3ID0gUG9seW1lclxuICBpczogJ3RyZWUtdmlldydcblxuICBwcm9wZXJ0aWVzOlxuICAgIG1vZGVsOlxuICAgICAgdHlwZTogT2JqZWN0XG4gICAgaW5zZXJ0aW9uUG9pbnRTZWxlY3RvcjpcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgdmFsdWU6ICcuY2hpbGRyZW4nXG5cbiAgZmFjdG9yeUltcGw6IChtb2RlbCkgLT5cbiAgICBAaW5zdGFuY2UgPSBudWxsXG4gICAgQHVwZGF0ZSBtb2RlbFxuXG4gIGZpbGw6ICgpIC0+XG4gICAgbWFrZUluc3RhbmNlID0gQG1vZGVsLnZhbHVlXG4gICAgQGluc3RhbmNlID0gZG8gbWFrZUluc3RhbmNlXG5cbiAgICBpZiBAbW9kZWwub3JkZXJlZENoaWxkcmVuS2V5cy5sZW5ndGggaXMgMFxuICAgICAgIyBub3RoaW5nIHRvIGZpbGwgd2l0aFxuICAgICAgcmV0dXJuIEBpbnN0YW5jZVxuXG4gICAgaW5zZXJ0aW9uUHQgPSBAX2dldEluc2VydGlvblBvaW50KClcblxuICAgIGlmIGluc2VydGlvblB0P1xuICAgICAgQG1vZGVsLm9yZGVyZWRDaGlsZHJlbktleXMuZm9yRWFjaCAoa2V5KSA9PlxuICAgICAgICBjaGlsZCA9IG5ldyBUcmVlVmlldyAoQG1vZGVsLmdldENoaWxkIGtleSlcbiAgICAgICAgaW5zZXJ0aW9uUHQuYXBwZW5kQ2hpbGQgY2hpbGRcbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZyBcImNvdWxkIG5vdCBmaW5kIGluc2VydGlvbiBwb2ludCBmcm9tIHNlbGVjdG9yIFwiICtcbiAgICAgICAgXCIje0BpbnNlcnRpb25Qb2ludFNlbGVjdG9yfSBpbiBpbnN0YW5jZSBcIiwgQGluc3RhbmNlXG5cbiAgICByZXR1cm4gQGluc3RhbmNlXG5cbiAgdXBkYXRlOiAobW9kZWwpIC0+XG4gICAgQG1vZGVsID0gbW9kZWxcbiAgICBkbyBAY2xlYXJcbiAgICBkbyBAZmlsbFxuICAgIFBvbHltZXIuZG9tKEByb290KS5hcHBlbmRDaGlsZCBAaW5zdGFuY2VcblxuICAjIyNcbiAgQ2xlYXJzIHRoZSBpbnN0YW5jZSBvZiBpdHMgY2hpbGRyZW4uLi4gYW5kIGl0c2VsZiFcbiAgIyMjXG4gIGNsZWFyOiAoKSAtPlxuICAgIGlmIEBpbnN0YW5jZT9cbiAgICAgIFBvbHltZXIuZG9tKEByb290KS5yZW1vdmVDaGlsZCBAaW5zdGFuY2VcblxuICBfZ2V0SW5zZXJ0aW9uUG9pbnQ6ICgpIC0+XG4gICAgaWYgKGdldE1hdGNoZXNGdW5jdGlvbiBAaW5zdGFuY2UpIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG4gICAgdGhlbiBAaW5zdGFuY2VcbiAgICBlbHNlXG4gICAgICByID0gQGluc3RhbmNlLnF1ZXJ5U2VsZWN0b3IgQGluc2VydGlvblBvaW50U2VsZWN0b3JcbiAgICAgIGlmIHI/XG4gICAgICB0aGVuIHJcbiAgICAgIGVsc2UgUG9seW1lci5kb20oQGluc3RhbmNlKS5xdWVyeVNlbGVjdG9yIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yIl19
