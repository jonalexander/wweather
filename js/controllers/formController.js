class formController {
  addSubmitListener() {
    $('#zipcode-input').submit( (event) => {
      // prevent refresh
      event.preventDefault()

      // for development
      console.log('#zipcode-input submitted')

      // make API call

      // return data and create Location objects

      // need service class here to create a new instance of Location and add to Store

    })
  }
}
