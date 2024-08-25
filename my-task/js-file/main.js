$(document).ready(function() {
var $menu = $('.header');
var $btn = $menu.find('.humbugermenu');

$btn.on('click', function() {
$menu.toggleClass('menu-open');
 $('body').toggleClass('menu-active');
});

$( ".dropdown-togle" ).on( "click", function(e) {
  e.preventDefault();
$('.level-items ').removeClass('show_active'); 
let $this = $(this);
if($this.next().hasClass('show')) {
  $this.next().removeClass('show');
   $this.closest( ".level-system" ).find('.dropdown-box').slideUp(350);
  console.log('if');
} else {
  $this.parents().find('.dropdown-box').removeClass('show');
  $this.parents().find('.dropdown-box').slideUp(350);     
  $this.next().toggleClass('show');
  $this.parent().addClass('show_active');
  $this.closest( ".level-system" ).find('.dropdown-box').slideToggle(350);
  console.log('else')
}
});

});

