class Location {
  constructor(data, city, state) {
    this.data = data
    this.city = city
    this.state = state
  }

  // function to iterate over the forecast days and populate objects

  build() {
    $('#locations').append(` \
    <div class="location-block"> \
      <h2>${this.city}</h2>  \
    </div> \
      `)
  }
}
