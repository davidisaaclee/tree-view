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
      console.log("could not find insertion point from selector " + this.insertionPointSelector);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOztBQUFBLFFBQUEsR0FBVyxPQUFBLENBQ1Q7RUFBQSxFQUFBLEVBQUksV0FBSjtFQUVBLFVBQUEsRUFDRTtJQUFBLEtBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxNQUFOO01BQ0EsUUFBQSxFQUFVLFFBRFY7S0FERjtJQUdBLHNCQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sTUFBTjtNQUNBLEtBQUEsRUFBTyxXQURQO0tBSkY7R0FIRjtFQVVBLFdBQUEsRUFBYSxTQUFDLEtBQUQ7SUFBQyxJQUFDLENBQUEsUUFBRDtFQUFELENBVmI7RUFZQSxJQUFBLEVBQU0sU0FBQTtBQUNKLFFBQUE7SUFBQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUNsQixRQUFBLEdBQVc7SUFFWCxXQUFBLEdBQ0ssUUFBUSxDQUFDLE9BQVQsQ0FBaUIsSUFBQyxDQUFBLHNCQUFsQixDQUFILEdBQ0ssUUFETCxHQUVLLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQUMsQ0FBQSxzQkFBeEI7SUFFUCxJQUFHLG1CQUFIO01BQ0UsSUFBQyxDQUFBLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUEzQixDQUFtQyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsR0FBRDtBQUNqQyxjQUFBO1VBQUEsS0FBQSxHQUFZLElBQUEsUUFBQSxDQUFVLEtBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUCxDQUFnQixHQUFoQixDQUFWO2lCQUNaLFdBQVcsQ0FBQyxXQUFaLENBQXdCLEtBQXhCO1FBRmlDO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFuQyxFQURGO0tBQUEsTUFBQTtNQUtFLE9BQU8sQ0FBQyxHQUFSLENBQVksK0NBQUEsR0FBZ0QsSUFBQyxDQUFBLHNCQUE3RCxFQUxGOztBQU9BLFdBQU87RUFoQkgsQ0FaTjtFQThCQSxNQUFBLEVBQVEsU0FBQTtJQUNOLElBQUMsQ0FBQSxLQUFELENBQUE7V0FDQSxJQUFDLENBQUEsS0FBRCxDQUFPLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtlQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBQyxDQUFBLElBQWIsQ0FBa0IsQ0FBQyxXQUFuQixDQUFtQyxLQUFDLENBQUEsSUFBSixDQUFBLENBQWhDO01BREs7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQVA7RUFGTSxDQTlCUjtFQW1DQSxLQUFBLEVBQU8sU0FBQTtBQUNMLFFBQUE7SUFBQSxRQUFBLEdBQVcsSUFBQyxDQUFBLEtBQUssQ0FBQztJQUNsQixXQUFBLEdBQ0ssUUFBUSxDQUFDLE9BQVQsQ0FBaUIsSUFBQyxDQUFBLHNCQUFsQixDQUFILEdBQ0ssUUFETCxHQUVLLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQUMsQ0FBQSxzQkFBeEI7SUFFUCxJQUFHLG1CQUFIO2FBQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLENBQXdCLENBQUMsVUFBVSxDQUFDLE9BQXBDLENBQTRDLFNBQUMsS0FBRDtlQUMxQyxPQUFPLENBQUMsR0FBUixDQUFZLFdBQVosQ0FBd0IsQ0FBQyxXQUF6QixDQUFxQyxLQUFyQztNQUQwQyxDQUE1QyxFQURGOztFQVBLLENBbkNQO0NBRFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiVHJlZVZpZXcgPSBQb2x5bWVyXG4gIGlzOiAndHJlZS12aWV3J1xuXG4gIHByb3BlcnRpZXM6XG4gICAgbW9kZWw6XG4gICAgICB0eXBlOiBPYmplY3RcbiAgICAgIG9ic2VydmVyOiAndXBkYXRlJ1xuICAgIGluc2VydGlvblBvaW50U2VsZWN0b3I6XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIHZhbHVlOiAnLmNoaWxkcmVuJ1xuXG4gIGZhY3RvcnlJbXBsOiAoQG1vZGVsKSAtPlxuXG4gIGZpbGw6ICgpIC0+XG4gICAgdGVtcGxhdGUgPSBAbW9kZWwudmFsdWVcbiAgICBpbnN0YW5jZSA9IHRlbXBsYXRlXG5cbiAgICBpbnNlcnRpb25QdCA9XG4gICAgICBpZiBpbnN0YW5jZS5tYXRjaGVzIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG4gICAgICB0aGVuIGluc3RhbmNlXG4gICAgICBlbHNlIGluc3RhbmNlLnF1ZXJ5U2VsZWN0b3IgQGluc2VydGlvblBvaW50U2VsZWN0b3JcblxuICAgIGlmIGluc2VydGlvblB0P1xuICAgICAgQG1vZGVsLm9yZGVyZWRDaGlsZHJlbktleXMuZm9yRWFjaCAoa2V5KSA9PlxuICAgICAgICBjaGlsZCA9IG5ldyBUcmVlVmlldyAoQG1vZGVsLmdldENoaWxkIGtleSlcbiAgICAgICAgaW5zZXJ0aW9uUHQuYXBwZW5kQ2hpbGQgY2hpbGRcbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZyBcImNvdWxkIG5vdCBmaW5kIGluc2VydGlvbiBwb2ludCBmcm9tIHNlbGVjdG9yICN7QGluc2VydGlvblBvaW50U2VsZWN0b3J9XCJcblxuICAgIHJldHVybiBpbnN0YW5jZVxuXG4gIHVwZGF0ZTogKCkgLT5cbiAgICBAY2xlYXIoKVxuICAgIEBhc3luYyAoKSA9PlxuICAgICAgUG9seW1lci5kb20oQHJvb3QpLmFwcGVuZENoaWxkIChkbyBAZmlsbClcblxuICBjbGVhcjogKCkgLT5cbiAgICBpbnN0YW5jZSA9IEBtb2RlbC52YWx1ZVxuICAgIGluc2VydGlvblB0ID1cbiAgICAgIGlmIGluc3RhbmNlLm1hdGNoZXMgQGluc2VydGlvblBvaW50U2VsZWN0b3JcbiAgICAgIHRoZW4gaW5zdGFuY2VcbiAgICAgIGVsc2UgaW5zdGFuY2UucXVlcnlTZWxlY3RvciBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuXG4gICAgaWYgaW5zZXJ0aW9uUHQ/XG4gICAgICBQb2x5bWVyLmRvbShpbnNlcnRpb25QdCkuY2hpbGROb2Rlcy5mb3JFYWNoIChjaGlsZCkgLT5cbiAgICAgICAgUG9seW1lci5kb20oaW5zZXJ0aW9uUHQpLnJlbW92ZUNoaWxkIGNoaWxkIl19
