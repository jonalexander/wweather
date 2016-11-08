const Store = {
  locations: []
}

// on document-ready
$(function() {

  // create & display form
  form = new Form()
  form.build()

  // initialize formController and add listener for form submit
  controller = new controller()
  controller.addSubmitListener()

})
