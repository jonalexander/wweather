class Location {
  constructor(data, city, state) {
    this.data = data
    this.city = city
    this.state = state
  }

  build() {
    $('#locations').append(` \
    <div class="location-block"> \
      ${this.city} \
    </div> \
      `)
  }
}
