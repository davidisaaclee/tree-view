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

  ###
  @param [TreeModel] model The `TreeModel` to populate this view.

  The `value` of `model` and its children should take the form

    # creates a new instance of this node's view
    instantiate: () -> HTMLElement
    # given an instance of this node's view, return the element where this
    #   node's children should be inserted into.
    getChildrenInsertPoint: HTMLElement -> HTMLElement
  ###
  factoryImpl: (model) ->
    @instance = null
    @update model

  ###
  Fills this view with the model's subviews.
  ###
  fill: () ->
    @instance = do @model.value.instantiate

    if @model.orderedChildrenKeys.length is 0
      # nothing to fill with
      return @instance

    insertionPt = @model.value.getChildrenInsertPoint @instance

    if insertionPt?
      @model.orderedChildrenKeys.forEach (key) =>
        child = new TreeView (@model.getChild key)
        insertionPt.appendChild child

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