# cross-browser support for Element.matches
getMatchesFunction = (element) ->
  fn = element.matches ||
       element.webkitMatchesSelector ||
       element.mozMatchesSelector ||
       element.msMatchesSelector ||
       element.oMatchesSelector
  if fn?
  then () -> fn.apply element, arguments
  else console.error 'No `matches` method in element ', element

TreeView = Polymer
  is: 'tree-view'

  properties:
    model:
      type: Object

    # A selector to choose which element within a node to append children to.
    insertionPointSelector:
      type: String
      value: '.children'

    # Should we append children directly into a node, instead of using
    #  `insertionPointSelector`?
    directAppend:
      type: Boolean
      value: false

  ###
  @param [TreeModel] model The `TreeModel` to populate this view.
  ###
  factoryImpl: (model, @insertionPointSelector = '.children', @directAppend = false) ->
    @instance = null
    @update model

  ###
  Fills this view with the model's subviews.
  ###
  fill: () ->
    makeInstance = @model.value
    @instance = do makeInstance

    if @model.orderedChildrenKeys.length is 0
      # nothing to fill with
      return @instance

    insertionPt = @_getInsertionPoint()

    if insertionPt?
      @model.orderedChildrenKeys.forEach (key) =>
        child = new TreeView (@model.getChild key), @insertionPointSelector, @directAppend
        insertionPt.appendChild child
    else
      console.log "could not find insertion point from selector " +
        "#{@insertionPointSelector} in instance ", @instance

    return @instance

  update: (model) ->
    @model = model
    do @clear
    do @fill
    Polymer.dom(@root).appendChild @instance

  ###
  Clears the instance of its children... and itself!
  ###
  clear: () ->
    if @instance?
      Polymer.dom(@root).removeChild @instance

  _getInsertionPoint: () ->
    if @directAppend
      console.log 'appending to ', @instance
      @instance
    else
      console.log 'not direct append', this
      if (getMatchesFunction @instance) @insertionPointSelector
      then @instance
      else
        r = @instance.querySelector @insertionPointSelector
        if r?
        then r
        else
          r = Polymer.dom(@instance).querySelector @insertionPointSelector
          if r?
          then r
          else
            console.error 'Could not find insertion point.'
            debugger