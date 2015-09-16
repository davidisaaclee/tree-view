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
    if (this.model.orderedChildrenKeys.length === 0) {
      return;
    }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOztBQUFBLFFBQUEsR0FBVyxPQUFBLENBQ1Q7RUFBQSxFQUFBLEVBQUksV0FBSjtFQUVBLFVBQUEsRUFDRTtJQUFBLEtBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxNQUFOO01BQ0EsUUFBQSxFQUFVLFFBRFY7S0FERjtJQUdBLHNCQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sTUFBTjtNQUNBLEtBQUEsRUFBTyxXQURQO0tBSkY7R0FIRjtFQVVBLFdBQUEsRUFBYSxTQUFDLEtBQUQ7SUFBQyxJQUFDLENBQUEsUUFBRDtFQUFELENBVmI7RUFZQSxJQUFBLEVBQU0sU0FBQTtBQUNKLFFBQUE7SUFBQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBM0IsS0FBcUMsQ0FBeEM7QUFFRSxhQUZGOztJQUlBLFFBQUEsR0FBVyxJQUFDLENBQUEsS0FBSyxDQUFDO0lBQ2xCLFFBQUEsR0FBVztJQUVYLFdBQUEsR0FDSyxRQUFRLENBQUMsT0FBVCxDQUFpQixJQUFDLENBQUEsc0JBQWxCLENBQUgsR0FDSyxRQURMLEdBRUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBQyxDQUFBLHNCQUF4QjtJQUVQLElBQUcsbUJBQUg7TUFDRSxJQUFDLENBQUEsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQTNCLENBQW1DLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxHQUFEO0FBQ2pDLGNBQUE7VUFBQSxLQUFBLEdBQVksSUFBQSxRQUFBLENBQVUsS0FBQyxDQUFBLEtBQUssQ0FBQyxRQUFQLENBQWdCLEdBQWhCLENBQVY7aUJBQ1osV0FBVyxDQUFDLFdBQVosQ0FBd0IsS0FBeEI7UUFGaUM7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5DLEVBREY7S0FBQSxNQUFBO01BS0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSwrQ0FBQSxHQUNWLENBQUcsSUFBQyxDQUFBLHNCQUFGLEdBQXlCLGVBQTNCLENBREYsRUFDNkMsUUFEN0MsRUFMRjs7QUFRQSxXQUFPO0VBckJILENBWk47RUFtQ0EsTUFBQSxFQUFRLFNBQUE7SUFDTixJQUFDLENBQUEsS0FBRCxDQUFBO1dBQ0EsSUFBQyxDQUFBLEtBQUQsQ0FBTyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFDTCxPQUFPLENBQUMsR0FBUixDQUFZLEtBQUMsQ0FBQSxJQUFiLENBQWtCLENBQUMsV0FBbkIsQ0FBbUMsS0FBQyxDQUFBLElBQUosQ0FBQSxDQUFoQztNQURLO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFQO0VBRk0sQ0FuQ1I7RUF3Q0EsS0FBQSxFQUFPLFNBQUE7QUFDTCxRQUFBO0lBQUEsUUFBQSxHQUFXLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFDbEIsV0FBQSxHQUNLLFFBQVEsQ0FBQyxPQUFULENBQWlCLElBQUMsQ0FBQSxzQkFBbEIsQ0FBSCxHQUNLLFFBREwsR0FFSyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUFDLENBQUEsc0JBQXhCO0lBRVAsSUFBRyxtQkFBSDthQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixDQUF3QixDQUFDLFVBQVUsQ0FBQyxPQUFwQyxDQUE0QyxTQUFDLEtBQUQ7ZUFDMUMsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLENBQXdCLENBQUMsV0FBekIsQ0FBcUMsS0FBckM7TUFEMEMsQ0FBNUMsRUFERjs7RUFQSyxDQXhDUDtDQURTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlRyZWVWaWV3ID0gUG9seW1lclxuICBpczogJ3RyZWUtdmlldydcblxuICBwcm9wZXJ0aWVzOlxuICAgIG1vZGVsOlxuICAgICAgdHlwZTogT2JqZWN0XG4gICAgICBvYnNlcnZlcjogJ3VwZGF0ZSdcbiAgICBpbnNlcnRpb25Qb2ludFNlbGVjdG9yOlxuICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB2YWx1ZTogJy5jaGlsZHJlbidcblxuICBmYWN0b3J5SW1wbDogKEBtb2RlbCkgLT5cblxuICBmaWxsOiAoKSAtPlxuICAgIGlmIEBtb2RlbC5vcmRlcmVkQ2hpbGRyZW5LZXlzLmxlbmd0aCBpcyAwXG4gICAgICAjIG5vdGhpbmcgdG8gZmlsbCB3aXRoXG4gICAgICByZXR1cm5cblxuICAgIHRlbXBsYXRlID0gQG1vZGVsLnZhbHVlXG4gICAgaW5zdGFuY2UgPSB0ZW1wbGF0ZVxuXG4gICAgaW5zZXJ0aW9uUHQgPVxuICAgICAgaWYgaW5zdGFuY2UubWF0Y2hlcyBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuICAgICAgdGhlbiBpbnN0YW5jZVxuICAgICAgZWxzZSBpbnN0YW5jZS5xdWVyeVNlbGVjdG9yIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG5cbiAgICBpZiBpbnNlcnRpb25QdD9cbiAgICAgIEBtb2RlbC5vcmRlcmVkQ2hpbGRyZW5LZXlzLmZvckVhY2ggKGtleSkgPT5cbiAgICAgICAgY2hpbGQgPSBuZXcgVHJlZVZpZXcgKEBtb2RlbC5nZXRDaGlsZCBrZXkpXG4gICAgICAgIGluc2VydGlvblB0LmFwcGVuZENoaWxkIGNoaWxkXG4gICAgZWxzZVxuICAgICAgY29uc29sZS5sb2cgXCJjb3VsZCBub3QgZmluZCBpbnNlcnRpb24gcG9pbnQgZnJvbSBzZWxlY3RvciBcIiArXG4gICAgICAgIFwiI3tAaW5zZXJ0aW9uUG9pbnRTZWxlY3Rvcn0gaW4gaW5zdGFuY2UgXCIsIGluc3RhbmNlXG5cbiAgICByZXR1cm4gaW5zdGFuY2VcblxuICB1cGRhdGU6ICgpIC0+XG4gICAgQGNsZWFyKClcbiAgICBAYXN5bmMgKCkgPT5cbiAgICAgIFBvbHltZXIuZG9tKEByb290KS5hcHBlbmRDaGlsZCAoZG8gQGZpbGwpXG5cbiAgY2xlYXI6ICgpIC0+XG4gICAgaW5zdGFuY2UgPSBAbW9kZWwudmFsdWVcbiAgICBpbnNlcnRpb25QdCA9XG4gICAgICBpZiBpbnN0YW5jZS5tYXRjaGVzIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG4gICAgICB0aGVuIGluc3RhbmNlXG4gICAgICBlbHNlIGluc3RhbmNlLnF1ZXJ5U2VsZWN0b3IgQGluc2VydGlvblBvaW50U2VsZWN0b3JcblxuICAgIGlmIGluc2VydGlvblB0P1xuICAgICAgUG9seW1lci5kb20oaW5zZXJ0aW9uUHQpLmNoaWxkTm9kZXMuZm9yRWFjaCAoY2hpbGQpIC0+XG4gICAgICAgIFBvbHltZXIuZG9tKGluc2VydGlvblB0KS5yZW1vdmVDaGlsZCBjaGlsZCJdfQ==
