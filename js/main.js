$(document).ready(function ($) {
  /*
    Basic Selectors - in jQuery you can use the same format of selectors as in CSS
  */
  $('p').css('border-bottom', '1px solid black') // tag name selector
  $('.first').css('border-color', 'red') // class name selector
  $('#special').css('background-color', '#ffcc00') // ID selector
  $('p.first small').css('background-color', 'lightgrey') // nesting selector

  /*
    Content - text, html and inputs
  */
  // $('.first').text('Lets learn jQuery')
  $('.first').html('Lets learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')

  $('#yourName').val('Bob Builder')

  /*
    Attribute Selectors
  */
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey')
  $('a[href*="google"]').css('font-weight', 'bold')

  /*
    Animation functions
  */
  // $('.card:first').hide(400)
  // $('.card:first').delay(1000).hide(400)
  // $('.card:first').delay(1000).hide(400).show(800)
  // $('.card:first').delay(1000).hide(400).show(800, function(){alert('we\'re back')})
  $('.card').animate({ borderRadius: '20px' }, 400)

  /*
    Attribute Method
  */
  $('img:first').attr('src', './img/image-5.jpg')

  /*
    Class Methods
  */
  // console.log($('img:first').hasClass('special'))
  // $('img').addClass('special')
  $('img').toggleClass('special')

  /*
    Events
  */
  $('img').click(function () {
    // console.log($(this).attr('src'))
    // $(this).attr('src','./img/image-6.jpg')
    $(this).toggleClass('special')
  })
  /*
    AJAX
  */
  // loading contents of an HTML document into an element on our page using the load() method
  $('#content').load('./about.html')
  /* Add click event listener to change the content of the element based on the clicked link's href */
  // // Target the elements with nav-link class inside the element with id contentNav
  // // Listen for the click event using the click() method
  // // Call an anonymous function inside the click() method. Pass an argument e to the function which will reference the triggered event itself
  // $('#contentNav .nav-link').click(function(e){
  // // Using the argument of e passed to the function prevent the default behaviour of the event
  //   e.preventDefault();
  // // Using this keyword get the value of href attribute of the clicked link, using attr() method
  //   var page = $(this).attr('href')
  // // Target the element with id content and load the contents of the page based on the href attribtute value of the clicked link
  //   $('#content').load('./'+page)
  // })

  /* Updating the above example to add fadeOut and fadeIn methods for a smoother transition between the change of content */
  // Target the elements with nav-link class inside the element with id contentNav
  // Listen for the click event using the click() method
  // Call an anonymous function inside the click() method. Pass an argument e to the function which will reference the triggered event itself
  $('#contentNav .nav-link').click(function (e) {
    // Using the argument of e passed to the function prevent the default behaviour of the event
    e.preventDefault()
    // Using this keyword get the value of href attribute of the clicked link, using attr() method
    var page = $(this).attr('href')
    /* Update the navigation link to show the active page */
    // target the element with class active inside element with id contentNav and remove the class of active from it
    $('#contentNav .active').removeClass('active')
    // target the nav-item on which the click is triggered using "this" keyword and add class of active to it
    $(this).addClass('active')

    // Before loading the contnet of the targeted page to the element with id content let's hide it from the page using fadeOut method
    $('#content').fadeOut(500, function () {
      // Target the element with id content and load the contents of the page based on the href attribtute value of the clicked link
      $('#content').load('./' + page)
    }).fadeIn(500)
    // display the element with id content to the page using fadeIn method
  })
  /*
  Making an AJAX request from a remote source and using the JSON data
  */
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    //console.log(data)
    var numPosts = data.length
    for (var i = 0; i < numPosts; i++) {

      var post = '<div class="col-sm-6 p-5"><h3>'
      post += (i+1) +'. '+data[i].title
      post += '</h3><p>'
      post += data[i].body
      post += '</p></div>'
      $('#posts').append(post)
    }
  })
  /* Using local JSON file with AJAX */
  // $.ajax({
  //   url: 'data/posts.json',
  //   type: 'GET',
  //   dataType: 'json'
  // }).done(function (data) {
  //   var numPosts = data.posts.length
  //   for (var i = 0; i < numPosts; i++) {
  //
  //     var post = '<div class="col-sm-6 p-5"><h3>'
  //     post += (i+1) +'. '+data.posts[i].title
  //     post += '</h3><p>'
  //     post += data.posts[i].body
  //     post += '</p></div>'
  //     $('#posts').prepend(post)
  //   }
  // })

  // initialize the AOS plugin, to use the AOS plugin you will need to add data-aos attribute with desired values to your HTML
  // reference the documentation here: https://github.com/michalsnik/aos
  AOS.init()
})