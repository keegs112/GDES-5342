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
        $(".window.glass").animate({top: "100%"}, 10 );
        $('.window.glass').removeClass('hidden');
        $(".window.glass").animate({top: "0%"}, 100);
        window.scrollTo(0,0);
    });

    $('.exit').click(function() {
        window.scrollTo(0,0);
        $('.window').addClass('hidden');
    });
});
