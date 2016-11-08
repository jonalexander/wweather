const Store = {
  locations: []
}

// on document-ready

$(function() {

  // create & display form
  form = new Form()
  form.build()

  // initialize formController and add listener
  controller = new controller()
  controller.addSubmitListener()


})
