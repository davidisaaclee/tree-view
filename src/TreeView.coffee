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

console.log 'TreeView initialiezd'

TreeView = Polymer
  is: 'tree-view'

  properties:
    model:
      type: Object
    insertionPointSelector:
      type: String
      value: '.children'

  factoryImpl: (model) ->
    @instance = null
    @update model

  fill: () ->
    makeInstance = @model.value
    @instance = do makeInstance

    if @model.orderedChildrenKeys.length is 0
      # nothing to fill with
      return @instance

    insertionPt = @_getInsertionPoint()

    if insertionPt?
      @model.orderedChildrenKeys.forEach (key) =>
        child = new TreeView (@model.getChild key)
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
    if (getMatchesFunction @instance) @insertionPointSelector
    then @instance
    else
      r = @instance.querySelector @insertionPointSelector
      if r?
      then r
      else Polymer.dom(@instance).querySelector @insertionPointSelector