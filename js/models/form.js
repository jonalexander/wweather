class Form {
  build() {
    $('#wrapper').append('\
        <div id="form-container"> \
          <form id="zipcode-input"> \
            <input id="zipcode" type="text" placeholder="enter that zipcode"> \
            </form> \
       </div>'
    )
  }
}
