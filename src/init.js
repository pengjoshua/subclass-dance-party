$(document).ready(function() {
  window.dancers = [];
  var removeCount = 0;

  $('.addBlinkyDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var blinkyDancerMaker = $(this).data('blinky-dancer-maker');

    // get the maker function for the kind of dancer we're supposed to make
    var blinkyDancer = window[blinkyDancerMaker];

    // make a dancer with a random position
    var blinky = new blinkyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(blinky);
    $('body').append(blinky.$node);
  });

  $('.addColorfulDancerButton').on('click', function(event) {
    var colorfulDancerMaker = $(this).data('colorful-dancer-maker');
    var colorfulDancer = window[colorfulDancerMaker];
    var colorful = new colorfulDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(colorful);
    $('body').append(colorful.$node);
  });

  $('.addShrinkyDancerButton').on('click', function(event) {
    var shrinkyDancerMaker = $(this).data('shrinky-dancer-maker');
    var shrinkyDancer = window[shrinkyDancerMaker];
    var shrinky = new shrinkyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(shrinky);
    $('body').append(shrinky.$node);
  });

  $('.addMovingDancerButton').on('click', function(event) {
    var movingDancerMaker = $(this).data('moving-dancer-maker');
    var movingDancer = window[movingDancerMaker];
    var moving = new movingDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(moving);
    $('body').append(moving.$node);
  });

  $('.addRectDancerButton').on('click', function(event) {
    var rectDancerMaker = $(this).data('rect-dancer-maker');
    var rectDancer = window[rectDancerMaker];
    var rect = new rectDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(rect);
    $('body').append(rect.$node);
  });

  $('.search').keypress(function(event) {
    console.log(event);
    if (event.which === 13) {
      search($(this).val());
    }
  });

  // remove the character
  $('body').on('click', '.dancer', function(event) {
    $(this).stop(true, true).hide('explode', { pieces: 16 }, 1000);
    $(this).remove();
    // console.log(window.dancers.length)
    // $(this).addClass('hidden');
    removeCount++;
  });

  var search = function(val) {
    var imgs = [];
    var img;
    var urlString = 'http://api.giphy.com/v1/stickers/search?q=' + encodeURIComponent(val) + '&limit=20&api_key=dc6zaTOxFJmzC';
    $.ajax({url: 'http://api.giphy.com/v1/stickers/search?q=' + encodeURIComponent(val) + '&limit=20&api_key=dc6zaTOxFJmzC'
    }).then(function(data) {
      for (var i = 0; i < data.data.length; i++) {
        img = {};
        img.url = data.data[i].images.fixed_height_small.url;
        img.height = data.data[i].images.fixed_height_small.height;
        img.width = data.data[i].images.fixed_height_small.width;
        imgs.push(img);
      }
      addGifDancers(imgs);
    });
  };

  var addGifDancers = function(dancers) {
    while (dancers.length > 0) {
      addGifDancer(dancers.pop());
    }
  };
    

  var addGifDancer = function(dancer) {
    var gifDancer = new makeGifDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000,
      dancer.url,
      dancer.height,
      dancer.width
    );
    window.dancers.push(gifDancer);
    $('body').append(gifDancer.$node);
  };

  $('.lineUpDancersButton').on('click', function(event) {
    console.log('lineUp');
    var left = 0;
    _.each(window.dancers, function(dancer) {
      dancer.setPosition($('body').height() / 2, left);
      left += $('body').width() / window.dancers.length;
    });
  });

});



