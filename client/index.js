$(function () {
  $.getJSON('http://localhost:5555/people')
    .then(response => {
      response.forEach(person => {
        $('body').append(`
          <li class="item-${person._id}">${person.name}
            <button 
              id=${person._id}
              class="remove"
            >
              remove that person!
            </button>
          </li>
        `)
      })
    }).then(() => {
      $('.remove').on('click', function(item) {

        let id = this.id
        
        $.ajax({
          type: 'DELETE',
          url: 'http://localhost:5555/people/' + this.id
        }).then(function (response) {
          if (response.message === "person removed successfully") {
            $('.item-' + id).remove()
          }
        })
      })
    })
})