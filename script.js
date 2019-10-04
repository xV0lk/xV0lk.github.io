// INIC ISOTOPE

var $grid = $('.grid').isotope({
    // options
    itemSelector: '.element-item',
    // layoutMode: 'fitRows'
  });

  // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});






//   $grid.isotope({

//     filter: '.cats'

//   })