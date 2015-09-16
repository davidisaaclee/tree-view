(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var TreeView;

TreeView = Polymer({
  is: 'tree-view',
  properties: {
    model: {
      type: Object,
      observer: 'update'
    },
    insertionPointSelector: {
      type: String,
      value: '.children'
    }
  },
  factoryImpl: function(model) {
    this.model = model;
  },
  fill: function() {
    var insertionPt, instance, template;
    template = this.model.value;
    instance = template;
    insertionPt = instance.matches(this.insertionPointSelector) ? instance : instance.querySelector(this.insertionPointSelector);
    if (insertionPt != null) {
      this.model.orderedChildrenKeys.forEach((function(_this) {
        return function(key) {
          var child;
          child = new TreeView(_this.model.getChild(key));
          return insertionPt.appendChild(child);
        };
      })(this));
    } else {
      console.log("could not find insertion point from selector " + (this.insertionPointSelector + " in instance "), instance);
    }
    return instance;
  },
  update: function() {
    this.clear();
    return this.async((function(_this) {
      return function() {
        return Polymer.dom(_this.root).appendChild(_this.fill());
      };
    })(this));
  },
  clear: function() {
    var insertionPt, instance;
    instance = this.model.value;
    insertionPt = instance.matches(this.insertionPointSelector) ? instance : instance.querySelector(this.insertionPointSelector);
    if (insertionPt != null) {
      return Polymer.dom(insertionPt).childNodes.forEach(function(child) {
        return Polymer.dom(insertionPt).removeChild(child);
      });
    }
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOztBQUFBLFFBQUEsR0FBVyxPQUFBLENBQ1Q7RUFBQSxFQUFBLEVBQUksV0FBSjtFQUVBLFVBQUEsRUFDRTtJQUFBLEtBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxNQUFOO01BQ0EsUUFBQSxFQUFVLFFBRFY7S0FERjtJQUdBLHNCQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sTUFBTjtNQUNBLEtBQUEsRUFBTyxXQURQO0tBSkY7R0FIRjtFQVVBLFdBQUEsRUFBYSxTQUFDLEtBQUQ7SUFBQyxJQUFDLENBQUEsUUFBRDtFQUFELENBVmI7RUFZQSxJQUFBLEVBQU0sU0FBQTtBQUNKLFFBQUE7SUFBQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUNsQixRQUFBLEdBQVc7SUFFWCxXQUFBLEdBQ0ssUUFBUSxDQUFDLE9BQVQsQ0FBaUIsSUFBQyxDQUFBLHNCQUFsQixDQUFILEdBQ0ssUUFETCxHQUVLLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQUMsQ0FBQSxzQkFBeEI7SUFFUCxJQUFHLG1CQUFIO01BQ0UsSUFBQyxDQUFBLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUEzQixDQUFtQyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsR0FBRDtBQUNqQyxjQUFBO1VBQUEsS0FBQSxHQUFZLElBQUEsUUFBQSxDQUFVLEtBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUCxDQUFnQixHQUFoQixDQUFWO2lCQUNaLFdBQVcsQ0FBQyxXQUFaLENBQXdCLEtBQXhCO1FBRmlDO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFuQyxFQURGO0tBQUEsTUFBQTtNQUtFLE9BQU8sQ0FBQyxHQUFSLENBQVksK0NBQUEsR0FDVixDQUFHLElBQUMsQ0FBQSxzQkFBRixHQUF5QixlQUEzQixDQURGLEVBQzZDLFFBRDdDLEVBTEY7O0FBUUEsV0FBTztFQWpCSCxDQVpOO0VBK0JBLE1BQUEsRUFBUSxTQUFBO0lBQ04sSUFBQyxDQUFBLEtBQUQsQ0FBQTtXQUNBLElBQUMsQ0FBQSxLQUFELENBQU8sQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO2VBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFDLENBQUEsSUFBYixDQUFrQixDQUFDLFdBQW5CLENBQW1DLEtBQUMsQ0FBQSxJQUFKLENBQUEsQ0FBaEM7TUFESztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBUDtFQUZNLENBL0JSO0VBb0NBLEtBQUEsRUFBTyxTQUFBO0FBQ0wsUUFBQTtJQUFBLFFBQUEsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDO0lBQ2xCLFdBQUEsR0FDSyxRQUFRLENBQUMsT0FBVCxDQUFpQixJQUFDLENBQUEsc0JBQWxCLENBQUgsR0FDSyxRQURMLEdBRUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBQyxDQUFBLHNCQUF4QjtJQUVQLElBQUcsbUJBQUg7YUFDRSxPQUFPLENBQUMsR0FBUixDQUFZLFdBQVosQ0FBd0IsQ0FBQyxVQUFVLENBQUMsT0FBcEMsQ0FBNEMsU0FBQyxLQUFEO2VBQzFDLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixDQUF3QixDQUFDLFdBQXpCLENBQXFDLEtBQXJDO01BRDBDLENBQTVDLEVBREY7O0VBUEssQ0FwQ1A7Q0FEUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJUcmVlVmlldyA9IFBvbHltZXJcbiAgaXM6ICd0cmVlLXZpZXcnXG5cbiAgcHJvcGVydGllczpcbiAgICBtb2RlbDpcbiAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGUnXG4gICAgaW5zZXJ0aW9uUG9pbnRTZWxlY3RvcjpcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgdmFsdWU6ICcuY2hpbGRyZW4nXG5cbiAgZmFjdG9yeUltcGw6IChAbW9kZWwpIC0+XG5cbiAgZmlsbDogKCkgLT5cbiAgICB0ZW1wbGF0ZSA9IEBtb2RlbC52YWx1ZVxuICAgIGluc3RhbmNlID0gdGVtcGxhdGVcblxuICAgIGluc2VydGlvblB0ID1cbiAgICAgIGlmIGluc3RhbmNlLm1hdGNoZXMgQGluc2VydGlvblBvaW50U2VsZWN0b3JcbiAgICAgIHRoZW4gaW5zdGFuY2VcbiAgICAgIGVsc2UgaW5zdGFuY2UucXVlcnlTZWxlY3RvciBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuXG4gICAgaWYgaW5zZXJ0aW9uUHQ/XG4gICAgICBAbW9kZWwub3JkZXJlZENoaWxkcmVuS2V5cy5mb3JFYWNoIChrZXkpID0+XG4gICAgICAgIGNoaWxkID0gbmV3IFRyZWVWaWV3IChAbW9kZWwuZ2V0Q2hpbGQga2V5KVxuICAgICAgICBpbnNlcnRpb25QdC5hcHBlbmRDaGlsZCBjaGlsZFxuICAgIGVsc2VcbiAgICAgIGNvbnNvbGUubG9nIFwiY291bGQgbm90IGZpbmQgaW5zZXJ0aW9uIHBvaW50IGZyb20gc2VsZWN0b3IgXCIgK1xuICAgICAgICBcIiN7QGluc2VydGlvblBvaW50U2VsZWN0b3J9IGluIGluc3RhbmNlIFwiLCBpbnN0YW5jZVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG5cbiAgdXBkYXRlOiAoKSAtPlxuICAgIEBjbGVhcigpXG4gICAgQGFzeW5jICgpID0+XG4gICAgICBQb2x5bWVyLmRvbShAcm9vdCkuYXBwZW5kQ2hpbGQgKGRvIEBmaWxsKVxuXG4gIGNsZWFyOiAoKSAtPlxuICAgIGluc3RhbmNlID0gQG1vZGVsLnZhbHVlXG4gICAgaW5zZXJ0aW9uUHQgPVxuICAgICAgaWYgaW5zdGFuY2UubWF0Y2hlcyBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuICAgICAgdGhlbiBpbnN0YW5jZVxuICAgICAgZWxzZSBpbnN0YW5jZS5xdWVyeVNlbGVjdG9yIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG5cbiAgICBpZiBpbnNlcnRpb25QdD9cbiAgICAgIFBvbHltZXIuZG9tKGluc2VydGlvblB0KS5jaGlsZE5vZGVzLmZvckVhY2ggKGNoaWxkKSAtPlxuICAgICAgICBQb2x5bWVyLmRvbShpbnNlcnRpb25QdCkucmVtb3ZlQ2hpbGQgY2hpbGQiXX0=
