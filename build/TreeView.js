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
    }
  },

  /*
  @param [TreeModel] model The `TreeModel` to populate this view.
  
  The `value` of `model` and its children should take the form
  
     * creates a new instance of this node's view
    instantiate: () -> HTMLElement
     * given an instance of this node's view, return the element where this
     *   node's children should be inserted into.
    getChildrenInsertPoint: HTMLElement -> HTMLElement
   */
  factoryImpl: function(model) {
    this.instance = null;
    return this.update(model);
  },

  /*
  Fills this view with the model's subviews.
   */
  fill: function() {
    var insertionPt;
    this.instance = this.model.value.instantiate();
    if (this.model.orderedChildrenKeys.length === 0) {
      return this.instance;
    }
    insertionPt = this.model.value.getChildrenInsertPoint(this.instance);
    if (insertionPt != null) {
      this.model.orderedChildrenKeys.forEach((function(_this) {
        return function(key) {
          var child;
          child = new TreeView(_this.model.getChild(key));
          return insertionPt.appendChild(child);
        };
      })(this));
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
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvVHJlZVZpZXcvdHJlZS12aWV3L3NyYy9UcmVlVmlldy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBOztBQUFBLGtCQUFBLEdBQXFCLFNBQUMsT0FBRDtBQUNuQixNQUFBO0VBQUEsRUFBQSxHQUFLLE9BQU8sQ0FBQyxPQUFSLElBQ0EsT0FBTyxDQUFDLHFCQURSLElBRUEsT0FBTyxDQUFDLGtCQUZSLElBR0EsT0FBTyxDQUFDLGlCQUhSLElBSUEsT0FBTyxDQUFDO0VBQ2IsSUFBRyxVQUFIO1dBQ0ssU0FBQTthQUFNLEVBQUUsQ0FBQyxLQUFILENBQVMsT0FBVCxFQUFrQixTQUFsQjtJQUFOLEVBREw7R0FBQSxNQUFBO1dBRUssT0FBTyxDQUFDLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpRCxPQUFqRCxFQUZMOztBQU5tQjs7QUFVckIsUUFBQSxHQUFXLE9BQUEsQ0FDVDtFQUFBLEVBQUEsRUFBSSxXQUFKO0VBRUEsVUFBQSxFQUNFO0lBQUEsS0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLE1BQU47S0FERjtHQUhGOztBQU1BOzs7Ozs7Ozs7OztFQVdBLFdBQUEsRUFBYSxTQUFDLEtBQUQ7SUFDWCxJQUFDLENBQUEsUUFBRCxHQUFZO1dBQ1osSUFBQyxDQUFBLE1BQUQsQ0FBUSxLQUFSO0VBRlcsQ0FqQmI7O0FBcUJBOzs7RUFHQSxJQUFBLEVBQU0sU0FBQTtBQUNKLFFBQUE7SUFBQSxJQUFDLENBQUEsUUFBRCxHQUFlLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQWhCLENBQUE7SUFFWixJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsbUJBQW1CLENBQUMsTUFBM0IsS0FBcUMsQ0FBeEM7QUFFRSxhQUFPLElBQUMsQ0FBQSxTQUZWOztJQUlBLFdBQUEsR0FBYyxJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxzQkFBYixDQUFvQyxJQUFDLENBQUEsUUFBckM7SUFFZCxJQUFHLG1CQUFIO01BQ0UsSUFBQyxDQUFBLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUEzQixDQUFtQyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUMsR0FBRDtBQUNqQyxjQUFBO1VBQUEsS0FBQSxHQUFZLElBQUEsUUFBQSxDQUFVLEtBQUMsQ0FBQSxLQUFLLENBQUMsUUFBUCxDQUFnQixHQUFoQixDQUFWO2lCQUNaLFdBQVcsQ0FBQyxXQUFaLENBQXdCLEtBQXhCO1FBRmlDO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFuQyxFQURGOztBQUtBLFdBQU8sSUFBQyxDQUFBO0VBZEosQ0F4Qk47RUF3Q0EsTUFBQSxFQUFRLFNBQUMsS0FBRDtJQUNOLElBQUMsQ0FBQSxLQUFELEdBQVM7SUFDTixJQUFDLENBQUEsS0FBSixDQUFBO0lBQ0csSUFBQyxDQUFBLElBQUosQ0FBQTtXQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLElBQWIsQ0FBa0IsQ0FBQyxXQUFuQixDQUErQixJQUFDLENBQUEsUUFBaEM7RUFKTSxDQXhDUjs7QUE4Q0E7OztFQUdBLEtBQUEsRUFBTyxTQUFBO0lBQ0wsSUFBRyxxQkFBSDthQUNFLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBQyxDQUFBLElBQWIsQ0FBa0IsQ0FBQyxXQUFuQixDQUErQixJQUFDLENBQUEsUUFBaEMsRUFERjs7RUFESyxDQWpEUDtDQURTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiMgY3Jvc3MtYnJvd3NlciBzdXBwb3J0IGZvciBFbGVtZW50Lm1hdGNoZXNcbmdldE1hdGNoZXNGdW5jdGlvbiA9IChlbGVtZW50KSAtPlxuICBmbiA9IGVsZW1lbnQubWF0Y2hlcyB8fFxuICAgICAgIGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgZWxlbWVudC5vTWF0Y2hlc1NlbGVjdG9yXG4gIGlmIGZuP1xuICB0aGVuICgpIC0+IGZuLmFwcGx5IGVsZW1lbnQsIGFyZ3VtZW50c1xuICBlbHNlIGNvbnNvbGUuZXJyb3IgJ05vIGBtYXRjaGVzYCBtZXRob2QgaW4gZWxlbWVudCAnLCBlbGVtZW50XG5cblRyZWVWaWV3ID0gUG9seW1lclxuICBpczogJ3RyZWUtdmlldydcblxuICBwcm9wZXJ0aWVzOlxuICAgIG1vZGVsOlxuICAgICAgdHlwZTogT2JqZWN0XG5cbiAgIyMjXG4gIEBwYXJhbSBbVHJlZU1vZGVsXSBtb2RlbCBUaGUgYFRyZWVNb2RlbGAgdG8gcG9wdWxhdGUgdGhpcyB2aWV3LlxuXG4gIFRoZSBgdmFsdWVgIG9mIGBtb2RlbGAgYW5kIGl0cyBjaGlsZHJlbiBzaG91bGQgdGFrZSB0aGUgZm9ybVxuXG4gICAgIyBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgbm9kZSdzIHZpZXdcbiAgICBpbnN0YW50aWF0ZTogKCkgLT4gSFRNTEVsZW1lbnRcbiAgICAjIGdpdmVuIGFuIGluc3RhbmNlIG9mIHRoaXMgbm9kZSdzIHZpZXcsIHJldHVybiB0aGUgZWxlbWVudCB3aGVyZSB0aGlzXG4gICAgIyAgIG5vZGUncyBjaGlsZHJlbiBzaG91bGQgYmUgaW5zZXJ0ZWQgaW50by5cbiAgICBnZXRDaGlsZHJlbkluc2VydFBvaW50OiBIVE1MRWxlbWVudCAtPiBIVE1MRWxlbWVudFxuICAjIyNcbiAgZmFjdG9yeUltcGw6IChtb2RlbCkgLT5cbiAgICBAaW5zdGFuY2UgPSBudWxsXG4gICAgQHVwZGF0ZSBtb2RlbFxuXG4gICMjI1xuICBGaWxscyB0aGlzIHZpZXcgd2l0aCB0aGUgbW9kZWwncyBzdWJ2aWV3cy5cbiAgIyMjXG4gIGZpbGw6ICgpIC0+XG4gICAgQGluc3RhbmNlID0gZG8gQG1vZGVsLnZhbHVlLmluc3RhbnRpYXRlXG5cbiAgICBpZiBAbW9kZWwub3JkZXJlZENoaWxkcmVuS2V5cy5sZW5ndGggaXMgMFxuICAgICAgIyBub3RoaW5nIHRvIGZpbGwgd2l0aFxuICAgICAgcmV0dXJuIEBpbnN0YW5jZVxuXG4gICAgaW5zZXJ0aW9uUHQgPSBAbW9kZWwudmFsdWUuZ2V0Q2hpbGRyZW5JbnNlcnRQb2ludCBAaW5zdGFuY2VcblxuICAgIGlmIGluc2VydGlvblB0P1xuICAgICAgQG1vZGVsLm9yZGVyZWRDaGlsZHJlbktleXMuZm9yRWFjaCAoa2V5KSA9PlxuICAgICAgICBjaGlsZCA9IG5ldyBUcmVlVmlldyAoQG1vZGVsLmdldENoaWxkIGtleSlcbiAgICAgICAgaW5zZXJ0aW9uUHQuYXBwZW5kQ2hpbGQgY2hpbGRcblxuICAgIHJldHVybiBAaW5zdGFuY2VcblxuICB1cGRhdGU6IChtb2RlbCkgLT5cbiAgICBAbW9kZWwgPSBtb2RlbFxuICAgIGRvIEBjbGVhclxuICAgIGRvIEBmaWxsXG4gICAgUG9seW1lci5kb20oQHJvb3QpLmFwcGVuZENoaWxkIEBpbnN0YW5jZVxuXG4gICMjI1xuICBDbGVhcnMgdGhlIGluc3RhbmNlIG9mIGl0cyBjaGlsZHJlbi4uLiBhbmQgaXRzZWxmIVxuICAjIyNcbiAgY2xlYXI6ICgpIC0+XG4gICAgaWYgQGluc3RhbmNlP1xuICAgICAgUG9seW1lci5kb20oQHJvb3QpLnJlbW92ZUNoaWxkIEBpbnN0YW5jZSJdfQ==
