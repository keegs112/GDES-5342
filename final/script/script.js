$(document).ready(function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

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
    })
});
