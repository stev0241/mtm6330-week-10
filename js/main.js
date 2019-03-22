$(document).ready(function ($) {
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.first small').css('background-color', 'purple')

  $('.first').html('Lets Learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')

  $('#yourName').val('Courtney Stevenson')

  // Atrribute Selectors
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey') // $ end with
  $('a[href*="google"]').css('font-weight', 'bold')

  // Animations Functions
  // $('.card:first').hide(400)
  // $('.card:first').delay(1000).hide(400)
  // $('.card:first').delay(1000).hide(400).show(800)
  // $('.card:first').delay(1000).hide(400).show(800, function () {})
  // alert('we\'re back')

  $('.card').animate({ borderRadius: '20px' }, 400)

  // Attribute Method
  $('img:first').attr('src', './img/image-5.jpg')

  // Class Methods
  $('img:first').hasClass('special')
  // $('img').addClass('special')
  $('img').toggleClass('special')

  // Events
  $('img').click(function () {
    console.log($(this))
  })
})
