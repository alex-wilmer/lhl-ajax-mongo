$(function () {
  
  $('body').append(`
    <button id="fetch">fetch data</button>
    <div class="loading">loading...</div>
    
    <input id="query" type="text" />
  `)
  
  $('.loading').hide()
  
  
  
  $('#fetch').on('click', async function (event) {
    $('.loading').show()
    
    let query = $('#query').val()
        
    let response = await $.getJSON(`
      https://www.reddit.com/r/aww/search.json?q=${query}&restrict_sr=1`
    )

    $('.loading').hide()
    let images = response.data.children
    
    images.forEach(img => {
      let imgTag = $(`<img src="${img.data.thumbnail}" />`)
      $('body').append(imgTag)
    })
})
    
    
    
    // fetch('https://www.reddit.com/r/aww.json')
    // 
    //   .then(function (response) {
    //     $('.loading').hide()
    //     console.log('the response is', response)
    //     return response.json()
    //   })
    // 
    //   .then(function (json) {
    //     console.log('the data is', data)
    //     let images = json.data.children
    // 
    //     // images.data.thumbnail
    // 
    //     images.forEach(img => {
    //       let imgTag = $(`<img src="${img.data.thumbnail}" />`)
    //       $('body')
    //       .append(imgTag)
    //     })
    //   })
    //   .catch(function (error) {
    //     $('.loading').hide()
    //      console.log('something went wrong', error)
    //   })
  // })
})