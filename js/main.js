$(document).ready(function ($) {
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.first small').css('background-color', 'lightgrey')

  /* Content Methods */
  //$('.first').text('Lets learn jQuery')
  $('.first').html('Lets learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')

  $('#yourName').val('Bob Builder')

  /* Attribute Selectors */
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey') // $ end with
  $('a[href*="google"]').css('font-weight', 'bold')

  /* Animation FUnctions */
  // $('.card:first').hide(400)
  // $('.card:first').delay(1000).hide(400)
  // $('.card:first').delay(1000).hide(400).show(800)
  /* $('.card:first').delay(1000).hide(400).show(800, function () {
    alert('we\'re back')
  })
  */
  $('.card').animate({ borderRadius: '20px' }, 400)

  /* Attribute Method */
  $('img:first').attr('src', './img/image-5.jpg')

  /* Class Methods */
  console.log($('img:last').hasClass('special'))
  // $('img').addClass('special')
  $('img').toggleClass('special')

  /* Events */
  $('img').click(function () {
    console.log($(this).attr('src'))
    $(this).toggleClass('special')
  })
  /* AJAX */
  $('#content').load('./about.html')
  $('#contentNav .nav-link').click(function (e) {
    e.preventDefault()
    var page = $(this).attr('href')
    $('#contentNav .active').removeClass('active')
    $(this).addClass('active')
    $('#content').fadeOut(500, function () {
      $(this).load(page)
    }).fadeIn(500)
  }) // closing click event on the contentNav nav-link

  // $.ajax({
  //   url: './data/posts.json',
  //   type: 'GET',
  //   dataType: 'json'
  // }).done(function (data) {
  //   var numPosts = data.posts.length
  //   for (var i = 0; i < numPosts; i++) {
  //     var post = '<div class="col-sm-6 p-5"><h3>'
  //     post += (i+1) + '. ' + data.posts[i].title
  //     post += '</h3><p>'
  //     post += data.posts[i].body
  //     post += '</p></div>'
  //     $('#posts').append(post)
  //   }

  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    var numPosts = data.length
    for (var i = 0; i < numPosts; i++) {
      var post = '<div class="col-sm-6 p-5"><h3>'
      post += (i+1) + '. ' + data[i].title
      post += '</h3><p>'
      post += data[i].body
      post += '</p></div>'
      $('#posts').append(post)
    }
  }) // Closing the Ajax call for the remote server
  AOS.init();
}) // Closing the document.ready method and the function
