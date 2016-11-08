class controller {
  addSubmitListener() {
    $('#zipcode-input').submit( (event) => {
      // prevent refresh
      event.preventDefault()

      // capture zipcode from input
      var zipcode = $('#zipcode').val()
      console.log(`input value = ${zipcode}`)

      // make API call
      var weatherData = new API(zipcode)
      weatherData.fetchData().then( () => {

      })

      // return data and create Location objects

      // need service class here to create a new instance of Location and add to Store

    })
  }

  fetchData() {
    
  }
}
