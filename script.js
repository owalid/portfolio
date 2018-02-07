$(document).ready(function(){   
    
    
        /* navigation bar color change */
        var changeColor = function() {
    
            console.log('scroll')
                var scroll_start = 0;
                var startchange = $('#start');
                var offset = startchange.offset();
                if (startchange.length){
                    $(document).scroll(function() { 
                        scroll_start = $(this).scrollTop();
                        if(scroll_start > offset.top) {
                            $(".navbar").addClass('bg-cloud')

                        } else {
                            $(".navbar").removeClass('bg-light')
                            $(".navbar").removeClass('bg-cloud')
                            $(".navbar").removeClass('text-dark');

                        }
                });
            }
        }  
    
        /* page scroll on click */
        var scroll = function() {   
            $('.page-scroll a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1000, 'easeInOutExpo');
                event.preventDefault();
            });       
        } 
    
        changeColor(); 
        scroll()
            
        });

(function ($) {
    $('p.round').wrap('<div class="round"/>').each(function () {
        var $p = $(this);
        var $div = $p.parent();
        var min = 0;
        var max = 100;
        var textBrut =  $p.data('percentage');
        var ratio = (textBrut - min) / (max - min);
        //console.log(textBrut);

        var $circle = $('<canvas width="200px" height="200px"/>');

        $div.append($circle);

        var ctx = $circle[0].getContext('2d');


        ctx.beginPath();

        ctx.arc(100,100,70,-1/2 * Math.PI,ratio*2*Math.PI -1/2 *Math.PI) ;
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#212529";
        ctx.shadowOffsetX = 2;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "#0d1012";

        ctx.stroke();
    })
})(jQuery);





    