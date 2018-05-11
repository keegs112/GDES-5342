$(document).ready(function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    var rellax = new Rellax('.rellax');

    var $btns = $('.btn').click(function() {
        if (this.id == 'all') {
          $('.grid > div').fadeIn(450);
        } else {
          var $el = $('.' + this.id).fadeIn(450);
          $('.grid > div').not($el).hide();
        }
        $('.grid').masonry('layout');
        $btns.removeClass('active');
        $(this).addClass('active');
    });

    $('.grid-item').click(function() {
        $('.window.glass').removeClass('hidden');
        window.scrollTo(0,0);
    });

    $('.exit').click(function() {
        $('.window').addClass('hidden');
    });
});
