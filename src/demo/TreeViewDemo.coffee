TreeModel = require 'TreeModel'
TreeTransformer = require 'TreeTransformer'

treeView = document.querySelector '#tree-view'

rootView = document.createElement 'div'
rootView.classList.add 'children'
rootView.classList.add 'root'
treeView.model = new TreeModel rootView

rawModel = new TreeModel type: 'a'

transformer = new TreeTransformer TreeModel

transformer.addNodeCase \
  (val, model) -> val.type is 'a',
  (val, model) -> new DemoElement()

transformer.addNodeCase \
  (val, model) -> val.type is 'b',
  (val, model) ->
    elt = document.createElement 'span'
    elt.innerText = 'spanner'
    elt.classList.add 'b'

    button = document.createElement 'button'
    button.innerText = 'Add'
    elt.appendChild button
    button.addEventListener 'click', () ->
      model.put ["__reservedkey#{model.childList.length}__"],
        type: 'a'

    content = document.createElement 'span'
    content.classList.add 'children'
    content.classList.add 'b-children'

    elt.appendChild content

    return elt


transformer.watch rawModel, (transformed, original) ->
  treeView.model = transformed
  treeView.update()


rawModel.batchMutate (model) ->
  model.put ['b'], type: 'b'
  model.put ['a'], type: 'a'
  model.put ['a', 'b1'], type: 'b'
  model.put ['a', 'a1'], type: 'a'
  model.put ['a', 'b2'], type: 'b'
  model.put ['a', 'a2'], type: 'a'

setTimeout (() -> console.log treeView.model), 1000