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
    if (this.model.orderedChildrenKeys.length === 0) {
      return instance;
    }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOztBQUFBLFFBQUEsR0FBVyxPQUFBLENBQ1Q7RUFBQSxFQUFBLEVBQUksV0FBSjtFQUVBLFVBQUEsRUFDRTtJQUFBLEtBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxNQUFOO01BQ0EsUUFBQSxFQUFVLFFBRFY7S0FERjtJQUdBLHNCQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sTUFBTjtNQUNBLEtBQUEsRUFBTyxXQURQO0tBSkY7R0FIRjtFQVVBLFdBQUEsRUFBYSxTQUFDLEtBQUQ7SUFBQyxJQUFDLENBQUEsUUFBRDtFQUFELENBVmI7RUFZQSxJQUFBLEVBQU0sU0FBQTtBQUNKLFFBQUE7SUFBQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUdsQixRQUFBLEdBQVc7SUFFWCxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBM0IsS0FBcUMsQ0FBeEM7QUFFRSxhQUFPLFNBRlQ7O0lBSUEsV0FBQSxHQUNLLFFBQVEsQ0FBQyxPQUFULENBQWlCLElBQUMsQ0FBQSxzQkFBbEIsQ0FBSCxHQUNLLFFBREwsR0FFSyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUFDLENBQUEsc0JBQXhCO0lBRVAsSUFBRyxtQkFBSDtNQUNFLElBQUMsQ0FBQSxLQUFLLENBQUMsbUJBQW1CLENBQUMsT0FBM0IsQ0FBbUMsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFDLEdBQUQ7QUFDakMsY0FBQTtVQUFBLEtBQUEsR0FBWSxJQUFBLFFBQUEsQ0FBVSxLQUFDLENBQUEsS0FBSyxDQUFDLFFBQVAsQ0FBZ0IsR0FBaEIsQ0FBVjtpQkFDWixXQUFXLENBQUMsV0FBWixDQUF3QixLQUF4QjtRQUZpQztNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbkMsRUFERjtLQUFBLE1BQUE7TUFLRSxPQUFPLENBQUMsR0FBUixDQUFZLCtDQUFBLEdBQ1YsQ0FBRyxJQUFDLENBQUEsc0JBQUYsR0FBeUIsZUFBM0IsQ0FERixFQUM2QyxRQUQ3QyxFQUxGOztBQVFBLFdBQU87RUF2QkgsQ0FaTjtFQXFDQSxNQUFBLEVBQVEsU0FBQTtJQUNOLElBQUMsQ0FBQSxLQUFELENBQUE7V0FDQSxJQUFDLENBQUEsS0FBRCxDQUFPLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtlQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBQyxDQUFBLElBQWIsQ0FBa0IsQ0FBQyxXQUFuQixDQUFtQyxLQUFDLENBQUEsSUFBSixDQUFBLENBQWhDO01BREs7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVA7RUFGTSxDQXJDUjtFQTBDQSxLQUFBLEVBQU8sU0FBQTtBQUNMLFFBQUE7SUFBQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUNsQixXQUFBLEdBQ0ssUUFBUSxDQUFDLE9BQVQsQ0FBaUIsSUFBQyxDQUFBLHNCQUFsQixDQUFILEdBQ0ssUUFETCxHQUVLLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQUMsQ0FBQSxzQkFBeEI7SUFFUCxJQUFHLG1CQUFIO2FBQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLENBQXdCLENBQUMsVUFBVSxDQUFDLE9BQXBDLENBQTRDLFNBQUMsS0FBRDtlQUMxQyxPQUFPLENBQUMsR0FBUixDQUFZLFdBQVosQ0FBd0IsQ0FBQyxXQUF6QixDQUFxQyxLQUFyQztNQUQwQyxDQUE1QyxFQURGOztFQVBLLENBMUNQO0NBRFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiVHJlZVZpZXcgPSBQb2x5bWVyXG4gIGlzOiAndHJlZS12aWV3J1xuXG4gIHByb3BlcnRpZXM6XG4gICAgbW9kZWw6XG4gICAgICB0eXBlOiBPYmplY3RcbiAgICAgIG9ic2VydmVyOiAndXBkYXRlJ1xuICAgIGluc2VydGlvblBvaW50U2VsZWN0b3I6XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIHZhbHVlOiAnLmNoaWxkcmVuJ1xuXG4gIGZhY3RvcnlJbXBsOiAoQG1vZGVsKSAtPlxuXG4gIGZpbGw6ICgpIC0+XG4gICAgdGVtcGxhdGUgPSBAbW9kZWwudmFsdWVcbiAgICAjIFRPRE86IEhvdyBjYW4gd2UgY2xvbmUgdGhlIHRlbXBsYXRlIGZvciBpbnN0YW5jZXM/IGBjbG9uZU5vZGVgIGRvZXNuJ3RcbiAgICAjICBjb3B5IG92ZXIgZXZlbnQgbGlzdGVuZXJzLCB3aGljaCBpcyBwcmV0dHkga2V5Li4uXG4gICAgaW5zdGFuY2UgPSB0ZW1wbGF0ZVxuXG4gICAgaWYgQG1vZGVsLm9yZGVyZWRDaGlsZHJlbktleXMubGVuZ3RoIGlzIDBcbiAgICAgICMgbm90aGluZyB0byBmaWxsIHdpdGhcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuXG4gICAgaW5zZXJ0aW9uUHQgPVxuICAgICAgaWYgaW5zdGFuY2UubWF0Y2hlcyBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuICAgICAgdGhlbiBpbnN0YW5jZVxuICAgICAgZWxzZSBpbnN0YW5jZS5xdWVyeVNlbGVjdG9yIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG5cbiAgICBpZiBpbnNlcnRpb25QdD9cbiAgICAgIEBtb2RlbC5vcmRlcmVkQ2hpbGRyZW5LZXlzLmZvckVhY2ggKGtleSkgPT5cbiAgICAgICAgY2hpbGQgPSBuZXcgVHJlZVZpZXcgKEBtb2RlbC5nZXRDaGlsZCBrZXkpXG4gICAgICAgIGluc2VydGlvblB0LmFwcGVuZENoaWxkIGNoaWxkXG4gICAgZWxzZVxuICAgICAgY29uc29sZS5sb2cgXCJjb3VsZCBub3QgZmluZCBpbnNlcnRpb24gcG9pbnQgZnJvbSBzZWxlY3RvciBcIiArXG4gICAgICAgIFwiI3tAaW5zZXJ0aW9uUG9pbnRTZWxlY3Rvcn0gaW4gaW5zdGFuY2UgXCIsIGluc3RhbmNlXG5cbiAgICByZXR1cm4gaW5zdGFuY2VcblxuICB1cGRhdGU6ICgpIC0+XG4gICAgQGNsZWFyKClcbiAgICBAYXN5bmMgKCkgPT5cbiAgICAgIFBvbHltZXIuZG9tKEByb290KS5hcHBlbmRDaGlsZCAoZG8gQGZpbGwpXG5cbiAgY2xlYXI6ICgpIC0+XG4gICAgaW5zdGFuY2UgPSBAbW9kZWwudmFsdWVcbiAgICBpbnNlcnRpb25QdCA9XG4gICAgICBpZiBpbnN0YW5jZS5tYXRjaGVzIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG4gICAgICB0aGVuIGluc3RhbmNlXG4gICAgICBlbHNlIGluc3RhbmNlLnF1ZXJ5U2VsZWN0b3IgQGluc2VydGlvblBvaW50U2VsZWN0b3JcblxuICAgIGlmIGluc2VydGlvblB0P1xuICAgICAgUG9seW1lci5kb20oaW5zZXJ0aW9uUHQpLmNoaWxkTm9kZXMuZm9yRWFjaCAoY2hpbGQpIC0+XG4gICAgICAgIFBvbHltZXIuZG9tKGluc2VydGlvblB0KS5yZW1vdmVDaGlsZCBjaGlsZCJdfQ==
