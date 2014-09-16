/*
    Lazy Load srcset

    by: Joe Burdick
    License: MIT
    
*/

$.fn.lazyloadsrcset = function(options){
    var settings = $.extend({
        speed: 0
    }, options);
    return this.each(function(){
        if ($(this).data('srcset') && !$(this).attr('srcset')){
            $(this)
                .attr('srcset', $(this).data('srcset'))
                .attr('src', $(this).data('src'))
                .css({opacity: 0}).animate({opacity: 1 }, settings.speed);    
        }
        
    });
};
