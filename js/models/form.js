class Form {
  build() {
    $('#form').append('\
        <div id="form-container"> \
          <form id="city-state-input"> \
            <input id="city-state" type="text" placeholder="city, state"> \
            </form> \
       </div>'
    )
  }
}
