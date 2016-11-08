class controller {

  successFunc(dataBlock) {
    // add data to Store as a local object
    console.log(dataBlock)
  }

  addSubmitListener() {
    $('#city-state-input').submit( (event) => {
      // prevent refresh
      event.preventDefault()

      // capture zipcode from input
      var city  = $('#city-state')
                  .val()
                  .split(",")[0]
                  .trim()
                  .replace(' ', '_')

      var state = $('#city-state')
                  .val()
                  .split(",")[1]
                  .trim()

      // feedback
      console.log(`input value = ${city}`)
      console.log(`input value = ${state}`)


      // fetch data from Wunderground API - case insensitive
      fetch(`http://api.wunderground.com/api/${apiKey}/forecast/q/${state}/${city}.json`)
        .then( (response) => {return response.json()} )
        .then( (jsObject) => {this.successFunc(jsObject) } )

    })
  }

  fetchData(zipcode) {

  }
}

// http://api.wunderground.com/api/4c9321c345fc142e/forecast/q/CA/San_Francisco.json
