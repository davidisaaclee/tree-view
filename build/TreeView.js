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
    },
    directAppend: {
      type: Boolean,
      value: false
    }
  },

  /*
  @param [TreeModel] model The `TreeModel` to populate this view.
   */
  factoryImpl: function(model, insertionPointSelector, directAppend) {
    this.insertionPointSelector = insertionPointSelector != null ? insertionPointSelector : '.children';
    this.directAppend = directAppend != null ? directAppend : false;
    this.instance = null;
    return this.update(model);
  },

  /*
  Fills this view with the model's subviews.
   */
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
          child = new TreeView(_this.model.getChild(key), _this.insertionPointSelector, _this.directAppend);
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
    if (this.directAppend) {
      console.log('appending to ', this.instance);
      return this.instance;
    } else {
      console.log('not direct append', this);
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
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBOztBQUFBLGtCQUFBLEdBQXFCLFNBQUMsT0FBRDtBQUNuQixNQUFBO0VBQUEsRUFBQSxHQUFLLE9BQU8sQ0FBQyxPQUFSLElBQ0EsT0FBTyxDQUFDLHFCQURSLElBRUEsT0FBTyxDQUFDLGtCQUZSLElBR0EsT0FBTyxDQUFDLGlCQUhSLElBSUEsT0FBTyxDQUFDO0VBQ2IsSUFBRyxVQUFIO1dBQ0ssU0FBQTthQUFNLEVBQUUsQ0FBQyxLQUFILENBQVMsT0FBVCxFQUFrQixTQUFsQjtJQUFOLEVBREw7R0FBQSxNQUFBO1dBRUssT0FBTyxDQUFDLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpRCxPQUFqRCxFQUZMOztBQU5tQjs7QUFVckIsUUFBQSxHQUFXLE9BQUEsQ0FDVDtFQUFBLEVBQUEsRUFBSSxXQUFKO0VBRUEsVUFBQSxFQUNFO0lBQUEsS0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLE1BQU47S0FERjtJQUlBLHNCQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sTUFBTjtNQUNBLEtBQUEsRUFBTyxXQURQO0tBTEY7SUFVQSxZQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sT0FBTjtNQUNBLEtBQUEsRUFBTyxLQURQO0tBWEY7R0FIRjs7QUFpQkE7OztFQUdBLFdBQUEsRUFBYSxTQUFDLEtBQUQsRUFBUSxzQkFBUixFQUErQyxZQUEvQztJQUFRLElBQUMsQ0FBQSwwREFBRCx5QkFBMEI7SUFBYSxJQUFDLENBQUEsc0NBQUQsZUFBZ0I7SUFDMUUsSUFBQyxDQUFBLFFBQUQsR0FBWTtXQUNaLElBQUMsQ0FBQSxNQUFELENBQVEsS0FBUjtFQUZXLENBcEJiOztBQXdCQTs7O0VBR0EsSUFBQSxFQUFNLFNBQUE7QUFDSixRQUFBO0lBQUEsWUFBQSxHQUFlLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFDdEIsSUFBQyxDQUFBLFFBQUQsR0FBZSxZQUFILENBQUE7SUFFWixJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBM0IsS0FBcUMsQ0FBeEM7QUFFRSxhQUFPLElBQUMsQ0FBQSxTQUZWOztJQUlBLFdBQUEsR0FBYyxJQUFDLENBQUEsa0JBQUQsQ0FBQTtJQUVkLElBQUcsbUJBQUg7TUFDRSxJQUFDLENBQUEsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE9BQTNCLENBQW1DLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxHQUFEO0FBQ2pDLGNBQUE7VUFBQSxLQUFBLEdBQVksSUFBQSxRQUFBLENBQVUsS0FBQyxDQUFBLEtBQUssQ0FBQyxRQUFQLENBQWdCLEdBQWhCLENBQVYsRUFBZ0MsS0FBQyxDQUFBLHNCQUFqQyxFQUF5RCxLQUFDLENBQUEsWUFBMUQ7aUJBQ1osV0FBVyxDQUFDLFdBQVosQ0FBd0IsS0FBeEI7UUFGaUM7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5DLEVBREY7S0FBQSxNQUFBO01BS0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSwrQ0FBQSxHQUNWLENBQUcsSUFBQyxDQUFBLHNCQUFGLEdBQXlCLGVBQTNCLENBREYsRUFDNkMsSUFBQyxDQUFBLFFBRDlDLEVBTEY7O0FBUUEsV0FBTyxJQUFDLENBQUE7RUFsQkosQ0EzQk47RUErQ0EsTUFBQSxFQUFRLFNBQUMsS0FBRDtJQUNOLElBQUMsQ0FBQSxLQUFELEdBQVM7SUFDTixJQUFDLENBQUEsS0FBSixDQUFBO0lBQ0csSUFBQyxDQUFBLElBQUosQ0FBQTtXQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLElBQWIsQ0FBa0IsQ0FBQyxXQUFuQixDQUErQixJQUFDLENBQUEsUUFBaEM7RUFKTSxDQS9DUjs7QUFxREE7OztFQUdBLEtBQUEsRUFBTyxTQUFBO0lBQ0wsSUFBRyxxQkFBSDthQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLElBQWIsQ0FBa0IsQ0FBQyxXQUFuQixDQUErQixJQUFDLENBQUEsUUFBaEMsRUFERjs7RUFESyxDQXhEUDtFQTREQSxrQkFBQSxFQUFvQixTQUFBO0FBQ2xCLFFBQUE7SUFBQSxJQUFHLElBQUMsQ0FBQSxZQUFKO01BQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLElBQUMsQ0FBQSxRQUE5QjthQUNBLElBQUMsQ0FBQSxTQUZIO0tBQUEsTUFBQTtNQUlFLE9BQU8sQ0FBQyxHQUFSLENBQVksbUJBQVosRUFBaUMsSUFBakM7TUFDQSxJQUFHLENBQUMsa0JBQUEsQ0FBbUIsSUFBQyxDQUFBLFFBQXBCLENBQUQsQ0FBQSxDQUErQixJQUFDLENBQUEsc0JBQWhDLENBQUg7ZUFDSyxJQUFDLENBQUEsU0FETjtPQUFBLE1BQUE7UUFHRSxDQUFBLEdBQUksSUFBQyxDQUFBLFFBQVEsQ0FBQyxhQUFWLENBQXdCLElBQUMsQ0FBQSxzQkFBekI7UUFDSixJQUFHLFNBQUg7aUJBQ0ssRUFETDtTQUFBLE1BQUE7VUFHRSxDQUFBLEdBQUksT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFDLENBQUEsUUFBYixDQUFzQixDQUFDLGFBQXZCLENBQXFDLElBQUMsQ0FBQSxzQkFBdEM7VUFDSixJQUFHLFNBQUg7bUJBQ0ssRUFETDtXQUFBLE1BQUE7WUFHRSxPQUFPLENBQUMsS0FBUixDQUFjLGlDQUFkO0FBQ0EscUJBSkY7V0FKRjtTQUpGO09BTEY7O0VBRGtCLENBNURwQjtDQURTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgY3Jvc3MtYnJvd3NlciBzdXBwb3J0IGZvciBFbGVtZW50Lm1hdGNoZXNcbmdldE1hdGNoZXNGdW5jdGlvbiA9IChlbGVtZW50KSAtPlxuICBmbiA9IGVsZW1lbnQubWF0Y2hlcyB8fFxuICAgICAgIGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yXG4gIGlmIGZuP1xuICB0aGVuICgpIC0+IGZuLmFwcGx5IGVsZW1lbnQsIGFyZ3VtZW50c1xuICBlbHNlIGNvbnNvbGUuZXJyb3IgJ05vIGBtYXRjaGVzYCBtZXRob2QgaW4gZWxlbWVudCAnLCBlbGVtZW50XG5cblRyZWVWaWV3ID0gUG9seW1lclxuICBpczogJ3RyZWUtdmlldydcblxuICBwcm9wZXJ0aWVzOlxuICAgIG1vZGVsOlxuICAgICAgdHlwZTogT2JqZWN0XG5cbiAgICAjIEEgc2VsZWN0b3IgdG8gY2hvb3NlIHdoaWNoIGVsZW1lbnQgd2l0aGluIGEgbm9kZSB0byBhcHBlbmQgY2hpbGRyZW4gdG8uXG4gICAgaW5zZXJ0aW9uUG9pbnRTZWxlY3RvcjpcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgdmFsdWU6ICcuY2hpbGRyZW4nXG5cbiAgICAjIFNob3VsZCB3ZSBhcHBlbmQgY2hpbGRyZW4gZGlyZWN0bHkgaW50byBhIG5vZGUsIGluc3RlYWQgb2YgdXNpbmdcbiAgICAjICBgaW5zZXJ0aW9uUG9pbnRTZWxlY3RvcmA/XG4gICAgZGlyZWN0QXBwZW5kOlxuICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgdmFsdWU6IGZhbHNlXG5cbiAgIyMjXG4gIEBwYXJhbSBbVHJlZU1vZGVsXSBtb2RlbCBUaGUgYFRyZWVNb2RlbGAgdG8gcG9wdWxhdGUgdGhpcyB2aWV3LlxuICAjIyNcbiAgZmFjdG9yeUltcGw6IChtb2RlbCwgQGluc2VydGlvblBvaW50U2VsZWN0b3IgPSAnLmNoaWxkcmVuJywgQGRpcmVjdEFwcGVuZCA9IGZhbHNlKSAtPlxuICAgIEBpbnN0YW5jZSA9IG51bGxcbiAgICBAdXBkYXRlIG1vZGVsXG5cbiAgIyMjXG4gIEZpbGxzIHRoaXMgdmlldyB3aXRoIHRoZSBtb2RlbCdzIHN1YnZpZXdzLlxuICAjIyNcbiAgZmlsbDogKCkgLT5cbiAgICBtYWtlSW5zdGFuY2UgPSBAbW9kZWwudmFsdWVcbiAgICBAaW5zdGFuY2UgPSBkbyBtYWtlSW5zdGFuY2VcblxuICAgIGlmIEBtb2RlbC5vcmRlcmVkQ2hpbGRyZW5LZXlzLmxlbmd0aCBpcyAwXG4gICAgICAjIG5vdGhpbmcgdG8gZmlsbCB3aXRoXG4gICAgICByZXR1cm4gQGluc3RhbmNlXG5cbiAgICBpbnNlcnRpb25QdCA9IEBfZ2V0SW5zZXJ0aW9uUG9pbnQoKVxuXG4gICAgaWYgaW5zZXJ0aW9uUHQ/XG4gICAgICBAbW9kZWwub3JkZXJlZENoaWxkcmVuS2V5cy5mb3JFYWNoIChrZXkpID0+XG4gICAgICAgIGNoaWxkID0gbmV3IFRyZWVWaWV3IChAbW9kZWwuZ2V0Q2hpbGQga2V5KSwgQGluc2VydGlvblBvaW50U2VsZWN0b3IsIEBkaXJlY3RBcHBlbmRcbiAgICAgICAgaW5zZXJ0aW9uUHQuYXBwZW5kQ2hpbGQgY2hpbGRcbiAgICBlbHNlXG4gICAgICBjb25zb2xlLmxvZyBcImNvdWxkIG5vdCBmaW5kIGluc2VydGlvbiBwb2ludCBmcm9tIHNlbGVjdG9yIFwiICtcbiAgICAgICAgXCIje0BpbnNlcnRpb25Qb2ludFNlbGVjdG9yfSBpbiBpbnN0YW5jZSBcIiwgQGluc3RhbmNlXG5cbiAgICByZXR1cm4gQGluc3RhbmNlXG5cbiAgdXBkYXRlOiAobW9kZWwpIC0+XG4gICAgQG1vZGVsID0gbW9kZWxcbiAgICBkbyBAY2xlYXJcbiAgICBkbyBAZmlsbFxuICAgIFBvbHltZXIuZG9tKEByb290KS5hcHBlbmRDaGlsZCBAaW5zdGFuY2VcblxuICAjIyNcbiAgQ2xlYXJzIHRoZSBpbnN0YW5jZSBvZiBpdHMgY2hpbGRyZW4uLi4gYW5kIGl0c2VsZiFcbiAgIyMjXG4gIGNsZWFyOiAoKSAtPlxuICAgIGlmIEBpbnN0YW5jZT9cbiAgICAgIFBvbHltZXIuZG9tKEByb290KS5yZW1vdmVDaGlsZCBAaW5zdGFuY2VcblxuICBfZ2V0SW5zZXJ0aW9uUG9pbnQ6ICgpIC0+XG4gICAgaWYgQGRpcmVjdEFwcGVuZFxuICAgICAgY29uc29sZS5sb2cgJ2FwcGVuZGluZyB0byAnLCBAaW5zdGFuY2VcbiAgICAgIEBpbnN0YW5jZVxuICAgIGVsc2VcbiAgICAgIGNvbnNvbGUubG9nICdub3QgZGlyZWN0IGFwcGVuZCcsIHRoaXNcbiAgICAgIGlmIChnZXRNYXRjaGVzRnVuY3Rpb24gQGluc3RhbmNlKSBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuICAgICAgdGhlbiBAaW5zdGFuY2VcbiAgICAgIGVsc2VcbiAgICAgICAgciA9IEBpbnN0YW5jZS5xdWVyeVNlbGVjdG9yIEBpbnNlcnRpb25Qb2ludFNlbGVjdG9yXG4gICAgICAgIGlmIHI/XG4gICAgICAgIHRoZW4gclxuICAgICAgICBlbHNlXG4gICAgICAgICAgciA9IFBvbHltZXIuZG9tKEBpbnN0YW5jZSkucXVlcnlTZWxlY3RvciBAaW5zZXJ0aW9uUG9pbnRTZWxlY3RvclxuICAgICAgICAgIGlmIHI/XG4gICAgICAgICAgdGhlbiByXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29uc29sZS5lcnJvciAnQ291bGQgbm90IGZpbmQgaW5zZXJ0aW9uIHBvaW50LidcbiAgICAgICAgICAgIGRlYnVnZ2VyIl19
