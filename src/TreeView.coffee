TreeView = Polymer
  is: 'tree-view'

  properties:
    model:
      type: Object
      observer: 'update'
    insertionPointSelector:
      type: String
      value: '.children'

  factoryImpl: (@model) ->

  fill: () ->
    if @model.orderedChildrenKeys.length is 0
      # nothing to fill with
      return

    template = @model.value
    instance = template

    insertionPt =
      if instance.matches @insertionPointSelector
      then instance
      else instance.querySelector @insertionPointSelector

    if insertionPt?
      @model.orderedChildrenKeys.forEach (key) =>
        child = new TreeView (@model.getChild key)
        insertionPt.appendChild child
    else
      console.log "could not find insertion point from selector " +
        "#{@insertionPointSelector} in instance ", instance

    return instance

  update: () ->
    @clear()
    @async () =>
      Polymer.dom(@root).appendChild (do @fill)

  clear: () ->
    instance = @model.value
    insertionPt =
      if instance.matches @insertionPointSelector
      then instance
      else instance.querySelector @insertionPointSelector

    if insertionPt?
      Polymer.dom(insertionPt).childNodes.forEach (child) ->
        Polymer.dom(insertionPt).removeChild child