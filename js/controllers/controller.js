class controller {

  successFunc(data, city, state) {
    // add data to Store as a Location object
    var location = new Location(data, city, state)
    Store.locations.push(location)

    // retain 4 or less locations in Store - may change this in the future
    Store.locations.length > 4
      ? Store.locations.shift()
      : ''

    //fedback
    console.log(Store.locations)
  }

  updateDisplay() {
    //iterate through Store's objects and append to appropriate div
    //check to see if objects are already displayed on screen and only add new ones
    // if Store.locations.length === 3, append Store.locations[4]

    // code to append one location

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
        .then( (jsObject) => {this.successFunc(jsObject, city, state)} )
        .then( () => {$('#city-state-input')[0].reset()} )  // reset form

      // update display with info in Store


      // clear form value

    })
  }

}
